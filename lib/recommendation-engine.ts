// GolfN Partnership Path Recommendation Engine
// Weighted scoring algorithm from the UX blueprint

import type { PathId, NeedId, GoalId, ComplexityId, ActivationImportance } from './partnership-paths'

export interface SelectorAnswers {
  need?: NeedId
  goals: GoalId[]
  complexity?: ComplexityId
  activation?: ActivationImportance
}

export interface RecommendationResult {
  recommended: PathId
  scores: Record<PathId, number>
  reasoning: string[]
  alsoConsider?: PathId
}

// Scoring weights from the blueprint decision matrix
const needWeights: Record<NeedId, Partial<Record<PathId, number>>> = {
  firstTimeTest: { pilot: 3 },
  productLaunch: { growth: 2, pilot: 1 },
  seasonalCampaign: { growth: 2 },
  multiMonthGrowth: { growth: 3 },
  retailActivation: { growth: 2, strategic: 1 },
  strategicPartner: { strategic: 3 },
}

const goalWeights: Record<GoalId, Partial<Record<PathId, number>>> = {
  awareness: { pilot: 1, growth: 1, strategic: 1 },
  education: { growth: 2, strategic: 1 },
  activation: { pilot: 1, growth: 2, strategic: 1 },
  conversion: { growth: 2, strategic: 1 },
  adoption: { strategic: 2, growth: 1 },
  advocacy: { strategic: 3, growth: 1 },
}

const complexityWeights: Record<ComplexityId, Partial<Record<PathId, number>>> = {
  focused: { pilot: 3 },
  fullFunnel: { growth: 3 },
  sustained: { strategic: 3 },
}

const activationWeights: Record<ActivationImportance, Partial<Record<PathId, number>>> = {
  notNeeded: {},
  niceToHave: { growth: 1 },
  important: { strategic: 2, growth: 1 },
}

export function recommendPath(answers: SelectorAnswers): RecommendationResult {
  const scores: Record<PathId, number> = { pilot: 0, growth: 0, strategic: 0 }
  const reasoning: string[] = []

  // Score need
  if (answers.need) {
    const weights = needWeights[answers.need]
    for (const [path, weight] of Object.entries(weights)) {
      scores[path as PathId] += weight!
    }
  }

  // Score goals
  for (const goal of answers.goals) {
    const weights = goalWeights[goal]
    for (const [path, weight] of Object.entries(weights)) {
      scores[path as PathId] += weight!
    }
  }

  // Score complexity
  if (answers.complexity) {
    const weights = complexityWeights[answers.complexity]
    for (const [path, weight] of Object.entries(weights)) {
      scores[path as PathId] += weight!
    }
  }

  // Score activation importance
  if (answers.activation) {
    const weights = activationWeights[answers.activation]
    for (const [path, weight] of Object.entries(weights)) {
      scores[path as PathId] += weight!
    }
  }

  // Determine winner
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [PathId, number][]
  const recommended = sorted[0][0]
  const topScore = sorted[0][1]
  const runnerUp = sorted[1][0]
  const runnerUpScore = sorted[1][1]

  // Build reasoning
  if (answers.need) {
    const needLabels: Record<NeedId, string> = {
      firstTimeTest: 'first-time test',
      productLaunch: 'product launch',
      seasonalCampaign: 'seasonal campaign',
      multiMonthGrowth: 'multi-month growth',
      retailActivation: 'real-world activation',
      strategicPartner: 'strategic partnership',
    }
    reasoning.push(needLabels[answers.need])
  }

  if (answers.goals.length > 0) {
    reasoning.push(answers.goals.join(' + '))
  }

  if (answers.complexity) {
    const complexityLabels: Record<ComplexityId, string> = {
      focused: 'focused execution',
      fullFunnel: 'full-funnel optimization',
      sustained: 'sustained strategic engagement',
    }
    reasoning.push(complexityLabels[answers.complexity])
  }

  // Close tie detection
  const closeTie = topScore > 0 && runnerUpScore > 0 && (topScore - runnerUpScore) <= 2

  return {
    recommended,
    scores,
    reasoning,
    alsoConsider: closeTie ? runnerUp : undefined,
  }
}
