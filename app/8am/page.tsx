import { cookies } from 'next/headers'
import { EightAMHero } from '@/components/eightam/EightAMHero'
import { SystemDistilled } from '@/components/eightam/SystemDistilled'
import { ThePrecedent } from '@/components/eightam/ThePrecedent'
import { PhaseTwoInPractice } from '@/components/eightam/PhaseTwoInPractice'
import { MiuraResults } from '@/components/eightam/MiuraResults'
import { PasswordGate } from '@/components/template/PasswordGate'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'GolfN — The System, Distilled',
  description: 'How GolfN works. The category, the hook, the loop, and the moat — punctuated by one real campaign.',
}

export default async function EightAMPage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('golfn-auth-8am')

  if (!authCookie?.value) {
    return <PasswordGate slug="8am" partnerName="8AM Golf" />
  }

  return (
    <main className="min-h-screen">
      <EightAMHero />
      <SystemDistilled />
      <ThePrecedent />
      <PhaseTwoInPractice />
      <MiuraResults />
    </main>
  )
}
