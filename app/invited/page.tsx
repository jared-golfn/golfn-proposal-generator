import { cookies } from 'next/headers'
import InvitedPitchPage from '@/components/invited/InvitedPitchPage'
import { PasswordGate } from '@/components/template/PasswordGate'

export const dynamic = 'force-dynamic'

const INVITED_PASSWORD = 'golfn2026'

export default async function InvitedPage() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('golfn-auth-invited')

  if (!authCookie?.value) {
    return <PasswordGate slug="invited" partnerName="Invited Clubs" />
  }

  return <InvitedPitchPage />
}
