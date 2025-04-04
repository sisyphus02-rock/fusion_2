import Link from "next/link"

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-12 text-center text-4xl font-bold text-white">Explore Events</h1>

      <div className="mb-12">
        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-red-900/50 to-black">
          <div className="p-6">
            <h2 className="mb-6 text-center text-2xl font-bold text-white">Gaming</h2>
            <div className="rounded-lg bg-gray-800/50 p-6">
              <h3 className="text-xl font-bold text-white">Game Design Challenge</h3>
              <p className="mt-2 text-sm text-gray-400">November 29, 2023</p>
              <span className="mt-2 inline-block rounded-full bg-red-900/50 px-3 py-1 text-xs text-white">Gaming</span>
              <p className="mt-4 text-gray-300">
                Design and prototype a game in just 48 hours! Work in teams or solo to create something amazing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-red-900/50 to-black">
          <div className="p-6">
            <h2 className="mb-6 text-center text-2xl font-bold text-white">Tech</h2>
            <div className="rounded-lg bg-gray-800/50 p-6 mb-6">
              <h3 className="text-xl font-bold text-white">AI Workshop</h3>
              <p className="mt-2 text-sm text-gray-400">November 22, 2023</p>
              <span className="mt-2 inline-block rounded-full bg-red-900/50 px-3 py-1 text-xs text-white">Tech</span>
              <p className="mt-4 text-gray-300">
                Learn the basics of artificial intelligence and machine learning in this hands-on workshop. No prior
                experience required!
              </p>
            </div>

            <div className="rounded-lg bg-gray-800/50 p-6">
              <h3 className="text-xl font-bold text-white">Web3 Development</h3>
              <p className="mt-2 text-sm text-gray-400">December 15, 2023</p>
              <span className="mt-2 inline-block rounded-full bg-red-900/50 px-3 py-1 text-xs text-white">Tech</span>
              <p className="mt-4 text-gray-300">
                Dive into blockchain technology and learn how to build decentralized applications. Intermediate coding
                skills recommended.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="/" className="inline-block rounded-md bg-red-500 px-6 py-3 font-medium text-white hover:bg-red-600">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

