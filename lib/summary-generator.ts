'use client'

import { partnershipPaths, extensions as allExtensions } from '@/lib/partnership-paths'
import type { PathId, GoalId, ExtensionId } from '@/lib/partnership-paths'
import type { PartnerConfig } from '@/lib/presentation-data'

const goalLabels: Record<string, string> = {
  awareness: 'Awareness', education: 'Education', activation: 'Activation',
  conversion: 'Conversion', adoption: 'Adoption', advocacy: 'Advocacy',
}

function getExtensionName(id: string): string {
  return allExtensions.find(e => e.id === id)?.name || id
}

interface SummaryData {
  partner: PartnerConfig
  selectedPath: PathId
  selectedGoals: GoalId[]
  selectedExtensions: ExtensionId[]
  isRecommended: boolean
}

export function generateSummaryHTML(data: SummaryData): string {
  const { partner, selectedPath, selectedGoals, selectedExtensions, isRecommended } = data
  const path = partnershipPaths[selectedPath]
  const recExts = allExtensions.filter(e => path.recommendedExtensions.includes(e.id))
  const selectedExtNames = selectedExtensions.map(getExtensionName)
  const goalNames = selectedGoals.map(g => goalLabels[g] || g)
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GolfN Partnership Summary — ${partner.partnerName} (${path.name} Path)</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=JetBrains+Mono:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Outfit', system-ui, sans-serif;
    background: #0F0F10;
    color: #FAFAFA;
    font-size: 15px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
  }

  .page {
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 48px;
  }

  @media print {
    body { background: #0F0F10; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { padding: 40px 32px; }
    .no-print { display: none !important; }
  }

  .accent { color: ${partner.primaryColor}; }
  .mono { font-family: 'JetBrains Mono', monospace; }
  .display { font-family: 'DM Serif Display', Georgia, serif; }
  .dim { color: #71717A; }
  .muted { color: #A1A1AA; }
  .light { color: #B0B0B4; }
  .border-b { border-bottom: 1px solid #2A2A2C; }
  .gradient-bar { height: 3px; background: linear-gradient(90deg, ${partner.primaryColor}, ${partner.secondaryColor}); border-radius: 2px; }

  .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 48px; padding-bottom: 24px; border-bottom: 1px solid #2A2A2C; }
  .header-left { display: flex; align-items: center; gap: 16px; }
  .header img { height: 32px; }
  .header-right { text-align: right; font-size: 13px; color: #71717A; }

  .title { font-family: 'DM Serif Display', serif; font-size: 36px; line-height: 1.1; margin-bottom: 8px; }
  .subtitle { font-size: 16px; color: #B0B0B4; margin-bottom: 40px; }

  .badge { display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.15em; padding: 3px 10px; border-radius: 6px; background: ${partner.primaryColor}20; color: ${partner.primaryColor}; margin-left: 8px; }

  .section { margin-bottom: 36px; }
  .section-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.15em; color: #52525B; text-transform: uppercase; margin-bottom: 16px; }

  .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px; }
  .pricing-item label { display: block; font-size: 12px; color: #71717A; font-family: 'JetBrains Mono', monospace; margin-bottom: 4px; }
  .pricing-item .value { font-size: 22px; font-weight: 700; font-family: 'JetBrains Mono', monospace; color: ${partner.primaryColor}; }
  .pricing-item .sub { font-size: 12px; color: #52525B; margin-top: 2px; }

  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { font-size: 13px; padding: 6px 14px; border-radius: 8px; background: #1A1A1D; border: 1px solid #2A2A2C; color: #D4D4D8; }
  .chip-accent { background: ${partner.primaryColor}10; border-color: ${partner.primaryColor}25; }

  .includes-list { list-style: none; padding: 0; }
  .includes-list li { padding: 8px 0; border-bottom: 1px solid #2A2A2C40; font-size: 14px; color: #D4D4D8; display: flex; align-items: center; gap: 10px; }
  .includes-list li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: ${partner.primaryColor}; flex-shrink: 0; }

  .ext-list { list-style: none; padding: 0; }
  .ext-list li { padding: 10px 0; border-bottom: 1px solid #2A2A2C40; display: flex; justify-content: space-between; align-items: center; }
  .ext-list .ext-name { font-size: 14px; font-weight: 500; color: #D4D4D8; }
  .ext-list .ext-desc { font-size: 12px; color: #71717A; }
  .ext-list .ext-tag { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.1em; padding: 2px 8px; border-radius: 4px; background: ${partner.primaryColor}15; color: ${partner.primaryColor}; }

  .next-step { background: #131315; border: 1px solid #2A2A2C; border-radius: 16px; padding: 32px; margin-top: 40px; text-align: center; }
  .next-step h3 { font-family: 'DM Serif Display', serif; font-size: 24px; margin-bottom: 8px; }
  .next-step p { font-size: 14px; color: #8C8C8C; margin-bottom: 16px; }
  .next-step a { display: inline-block; padding: 12px 32px; border-radius: 12px; font-weight: 600; font-size: 15px; background: linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor}); color: #0F0F10; text-decoration: none; }

  .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #2A2A2C; text-align: center; }
  .footer p { font-size: 12px; color: #52525B; }
  .footer .mono { font-size: 10px; color: #3A3A3F; margin-top: 4px; }

  .print-btn { position: fixed; bottom: 24px; right: 24px; padding: 14px 28px; border-radius: 12px; font-weight: 600; font-size: 14px; background: linear-gradient(135deg, ${partner.primaryColor}, ${partner.secondaryColor}); color: #0F0F10; border: none; cursor: pointer; font-family: 'Outfit', sans-serif; box-shadow: 0 8px 32px rgba(0,0,0,0.4); z-index: 100; }
  .print-btn:hover { transform: scale(1.03); }
</style>
</head>
<body>
<div class="page">
  <div class="gradient-bar"></div>

  <div class="header" style="margin-top: 24px;">
    <div class="header-left">
      <img src="https://cdn.sanity.io/images/e3wja34v/production/3bcfd9b87d10769072b59ff0fe7cbefe7d36286e-3594x860.png" alt="GolfN" />
    </div>
    <div class="header-right">
      <div>Partnership Summary</div>
      <div>${today}</div>
    </div>
  </div>

  <h1 class="title">${partner.partnerName}<br><span class="accent">${path.name} Path</span></h1>
  <p class="subtitle">${path.bestFor}${isRecommended ? ' <span class="badge">RECOMMENDED</span>' : ''}</p>

  <div class="section">
    <div class="section-label">Program Foundation</div>
    <div class="pricing-grid">
      <div class="pricing-item">
        <label>Setup Investment</label>
        <div class="value">${path.setup.range}</div>
        <div class="sub">One-time</div>
      </div>
      <div class="pricing-item">
        <label>Monthly Program Fee</label>
        <div class="value">${path.monthly.starting}</div>
        <div class="sub">${path.managementTier}</div>
      </div>
      <div class="pricing-item">
        <label>Recommended Duration</label>
        <div class="value">${path.duration.recommended}</div>
        <div class="sub">${path.duration.minimum} month minimum</div>
      </div>
      <div class="pricing-item">
        <label>Recommended Media</label>
        <div class="value">${path.impressionRecommendation.join(' \u2013 ')}</div>
        <div class="sub">Impression tiers</div>
      </div>
    </div>
  </div>

  ${goalNames.length > 0 ? `
  <div class="section">
    <div class="section-label">Selected Goals</div>
    <div class="chips">
      ${goalNames.map(g => `<span class="chip">${g}</span>`).join('')}
    </div>
  </div>
  ` : ''}

  <div class="section">
    <div class="section-label">What\u2019s Included</div>
    <ul class="includes-list">
      ${path.includes.map(item => `<li>${item}</li>`).join('')}
    </ul>
  </div>

  <div class="section">
    <div class="section-label">Included Stages</div>
    <p class="light" style="font-size: 14px;">Stages ${path.includedStages[0]}\u2013${path.includedStages[path.includedStages.length - 1]} of the eight-stage golfer progression model.</p>
  </div>

  <div class="section">
    <div class="section-label">Recommended Extensions</div>
    <ul class="ext-list">
      ${recExts.map(e => {
        const isSelected = selectedExtNames.includes(e.name)
        return `<li>
          <div>
            <div class="ext-name">${e.name}</div>
            <div class="ext-desc">${e.description}</div>
          </div>
          ${isSelected ? '<span class="ext-tag">SELECTED</span>' : ''}
        </li>`
      }).join('')}
    </ul>
  </div>

  ${selectedExtNames.length > 0 ? `
  <div class="section">
    <div class="section-label">Your Selected Extensions</div>
    <div class="chips">
      ${selectedExtNames.map(e => `<span class="chip chip-accent">${e}</span>`).join('')}
    </div>
  </div>
  ` : ''}

  <div class="section">
    <div class="section-label">Performance Economics</div>
    <p class="light" style="font-size: 14px; margin-bottom: 8px;">GolfN participates in upside when measurable downstream actions occur. Preferred structure: Wholesale & Marketplace Participation at 30\u201340%.</p>
    <p class="dim" style="font-size: 13px;">Alternatives: Revenue Share (12\u201325%), Fixed CPA ($10\u2013$75+), or Hybrid structure.</p>
  </div>

  <div class="section">
    <div class="section-label">Real-World Activation</div>
    <p class="light" style="font-size: 14px;">${path.realWorldActivation}</p>
  </div>

  <div class="next-step">
    <h3>Next Step</h3>
    <p>We\u2019ll scope the right ${path.name} program structure for ${partner.partnerName} based on these selections.</p>
    <a href="mailto:jared@golfn.com?subject=${encodeURIComponent(`Partnership Discussion \u2014 ${partner.partnerName} (${path.name} Path)`)}">Start the Conversation \u2192</a>
  </div>

  <div class="footer">
    <p>Confidential \u2014 Prepared for ${partner.partnerName} by GolfN</p>
    <p class="mono">Verified Golfers \u00B7 Measurable Progression \u00B7 Aligned Incentives</p>
  </div>
</div>

<button class="print-btn no-print" onclick="window.print()">Save as PDF \u2193</button>
</body>
</html>`
}

export function openSummary(data: SummaryData) {
  const html = generateSummaryHTML(data)
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
  // Clean up after a delay
  setTimeout(() => URL.revokeObjectURL(url), 10000)
}
