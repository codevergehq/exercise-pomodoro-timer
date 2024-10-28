import { formatTime } from "../utils/timeFormatter"

import "../styles/TimerDisplay.css"

function TimerDisplay({ timeLeft }) {
  return (
    <div className="timer-display-container">
      <div className="time">{formatTime(timeLeft)}</div>
    </div>
  )
}

export default TimerDisplay
