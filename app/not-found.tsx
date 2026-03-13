import { images } from '@/lib/images'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f1217] flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 40%, #00ff9d, transparent)' }} />
      <div className="relative z-10 text-center">
        <img src={images.logo} alt="GolfN" className="h-10 md:h-12 w-auto mx-auto mb-10 opacity-60" />
        <p className="text-6xl md:text-7xl font-bold font-mono text-[#00ff9d] mb-4">404</p>
        <p className="text-xl md:text-2xl text-[#9ca3af] mb-8">This page does not exist.</p>
        <p className="text-base text-[#4b5563]">If you were given a link to a proposal, double-check the URL.</p>
        <p className="text-base text-[#4b5563] mt-2">Questions? <a href="mailto:info@golfn.com" className="text-[#00ff9d] hover:underline">info@golfn.com</a></p>
      </div>
    </div>
  )
}
