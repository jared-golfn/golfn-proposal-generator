'use client'

import { createContext, useContext, useReducer, useMemo, type ReactNode } from 'react'
import type { PathId, GoalId, ExtensionId, NeedId, ComplexityId, ActivationImportance, ViewMode } from './partnership-paths'
import { partnershipPaths } from './partnership-paths'
import { recommendPath, type SelectorAnswers, type RecommendationResult } from './recommendation-engine'

// --- State Shape ---

export interface PartnershipState {
  selectedPath: PathId | null
  isRecommended: boolean
  selectedNeed: NeedId | null
  selectedGoals: GoalId[]
  selectedComplexity: ComplexityId | null
  selectedActivation: ActivationImportance | null
  selectedExtensions: ExtensionId[]
  viewMode: ViewMode
  recommendation: RecommendationResult | null
  selectorStep: number
}

const initialState: PartnershipState = {
  selectedPath: null,
  isRecommended: false,
  selectedNeed: null,
  selectedGoals: [],
  selectedComplexity: null,
  selectedActivation: null,
  selectedExtensions: [],
  viewMode: 'simple',
  recommendation: null,
  selectorStep: 0,
}

// --- Actions ---

type Action =
  | { type: 'SET_PATH'; path: PathId; fromRecommendation?: boolean }
  | { type: 'CLEAR_PATH' }
  | { type: 'SET_NEED'; need: NeedId }
  | { type: 'SET_GOALS'; goals: GoalId[] }
  | { type: 'TOGGLE_GOAL'; goal: GoalId }
  | { type: 'SET_COMPLEXITY'; complexity: ComplexityId }
  | { type: 'SET_ACTIVATION'; activation: ActivationImportance }
  | { type: 'TOGGLE_EXTENSION'; extension: ExtensionId }
  | { type: 'SET_VIEW_MODE'; mode: ViewMode }
  | { type: 'RUN_RECOMMENDATION' }
  | { type: 'SET_SELECTOR_STEP'; step: number }
  | { type: 'RESET_ALL' }

function reducer(state: PartnershipState, action: Action): PartnershipState {
  switch (action.type) {
    case 'SET_PATH':
      return { ...state, selectedPath: action.path, isRecommended: action.fromRecommendation ?? false }

    case 'CLEAR_PATH':
      return { ...state, selectedPath: null, isRecommended: false, recommendation: null }

    case 'SET_NEED':
      return { ...state, selectedNeed: action.need }

    case 'SET_GOALS':
      return { ...state, selectedGoals: action.goals }

    case 'TOGGLE_GOAL': {
      const goals = state.selectedGoals.includes(action.goal)
        ? state.selectedGoals.filter(g => g !== action.goal)
        : [...state.selectedGoals, action.goal]
      return { ...state, selectedGoals: goals }
    }

    case 'SET_COMPLEXITY':
      return { ...state, selectedComplexity: action.complexity }

    case 'SET_ACTIVATION':
      return { ...state, selectedActivation: action.activation }

    case 'TOGGLE_EXTENSION': {
      const exts = state.selectedExtensions.includes(action.extension)
        ? state.selectedExtensions.filter(e => e !== action.extension)
        : [...state.selectedExtensions, action.extension]
      return { ...state, selectedExtensions: exts }
    }

    case 'SET_VIEW_MODE':
      return { ...state, viewMode: action.mode }

    case 'RUN_RECOMMENDATION': {
      const answers: SelectorAnswers = {
        need: state.selectedNeed ?? undefined,
        goals: state.selectedGoals,
        complexity: state.selectedComplexity ?? undefined,
        activation: state.selectedActivation ?? undefined,
      }
      const result = recommendPath(answers)
      return { ...state, recommendation: result, selectedPath: result.recommended, isRecommended: true, selectorStep: 5 }
    }

    case 'SET_SELECTOR_STEP':
      return { ...state, selectorStep: action.step }

    case 'RESET_ALL':
      return { ...initialState }

    default:
      return state
  }
}

// --- Context ---

interface PartnershipContextValue {
  state: PartnershipState
  dispatch: React.Dispatch<Action>
  setPath: (path: PathId) => void
  clearPath: () => void
  toggleGoal: (goal: GoalId) => void
  toggleExtension: (extension: ExtensionId) => void
  runRecommendation: () => void
  resetAll: () => void
  isStageIncluded: (stageNumber: number) => boolean
  isExtensionRecommended: (extensionId: ExtensionId) => boolean
  getSelectedPath: () => typeof partnershipPaths[PathId] | null
}

const PartnershipContext = createContext<PartnershipContextValue | null>(null)

// --- Provider ---

export function PartnershipProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo<PartnershipContextValue>(() => ({
    state,
    dispatch,

    setPath: (path) => dispatch({ type: 'SET_PATH', path }),
    clearPath: () => dispatch({ type: 'CLEAR_PATH' }),
    toggleGoal: (goal) => dispatch({ type: 'TOGGLE_GOAL', goal }),
    toggleExtension: (ext) => dispatch({ type: 'TOGGLE_EXTENSION', extension: ext }),
    runRecommendation: () => dispatch({ type: 'RUN_RECOMMENDATION' }),
    resetAll: () => dispatch({ type: 'RESET_ALL' }),

    isStageIncluded: (stageNumber) => {
      if (!state.selectedPath) return true
      return partnershipPaths[state.selectedPath].includedStages.includes(stageNumber)
    },

    isExtensionRecommended: (extensionId) => {
      if (!state.selectedPath) return false
      return partnershipPaths[state.selectedPath].recommendedExtensions.includes(extensionId)
    },

    getSelectedPath: () => {
      if (!state.selectedPath) return null
      return partnershipPaths[state.selectedPath]
    },
  }), [state])

  return (
    <PartnershipContext.Provider value={value}>
      {children}
    </PartnershipContext.Provider>
  )
}

// --- Hook ---

export function usePartnership() {
  const context = useContext(PartnershipContext)
  if (!context) {
    throw new Error('usePartnership must be used within a PartnershipProvider')
  }
  return context
}
