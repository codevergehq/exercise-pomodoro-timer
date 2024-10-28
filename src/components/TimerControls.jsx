import "../styles/TimerControls.css"

function TimerControls({ isActive, onStartStop, onReset }) {
  return (
    <div className="timer-controls">
      <button
        className={`control-button ${isActive ? "active" : ""}`}
        onClick={null}
      >
        {isActive ? "Pause" : "Start"}
      </button>
      <button className="control-button reset" onClick={null}>
        Reset
      </button>
    </div>
  )
}

export default TimerControls
