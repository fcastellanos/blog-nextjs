"use client"

import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
useEffect(() => {
    console.error("Error loading posts:", error)
}, [error])

return (
        <main className="flex h-full flex-col items-center justify-center">
          <h2 className="text-center">Something went wrong.</h2>
          <button
            onClick={() => reset()}
            className="mt-4 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Try again
          </button>
        </main>
    )
}