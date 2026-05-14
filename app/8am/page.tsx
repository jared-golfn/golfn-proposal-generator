import { EightAMHero } from '@/components/eightam/EightAMHero'
import { SystemDistilled } from '@/components/eightam/SystemDistilled'
import { ThePrecedent } from '@/components/eightam/ThePrecedent'
import { PhaseTwoInPractice } from '@/components/eightam/PhaseTwoInPractice'

export const metadata = {
  title: 'GolfN — The System, Distilled',
  description: 'How GolfN works. The category, the hook, the loop, and the moat.',
}

export default function EightAMPage() {
  return (
    <main className="min-h-screen">
      <EightAMHero />
      <SystemDistilled />
      <ThePrecedent />
      <PhaseTwoInPractice />
    </main>
  )
}
