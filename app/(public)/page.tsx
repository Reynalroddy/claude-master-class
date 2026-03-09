// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p>
          Welcome to Pocket Heist — the ultimate tool for orchestrating sneaky,
          low-stakes office missions. Assign covert tasks to your colleagues,
          track their progress, and see who has what it takes to pull off the
          perfect heist. No vaults required.
        </p>
      </div>
    </div>
  )
}
