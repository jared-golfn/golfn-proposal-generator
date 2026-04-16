import dynamic from 'next/dynamic'

const InvitedPitchPage = dynamic(() => import('@/components/invited/InvitedPitchPage'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#0f1217] flex items-center justify-center">
      <div className="text-[#00ff9d] font-mono text-sm animate-pulse">Loading...</div>
    </div>
  ),
})

export default function InvitedPage() {
  return <InvitedPitchPage />
}
