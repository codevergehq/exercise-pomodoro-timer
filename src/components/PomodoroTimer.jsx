import { useState, useEffect } from "react"
import { TIMER_PRESETS } from "../constants/timerConfig"

import PresetSelector from "./PresetSelector"
import TimerDisplay from "./TimerDisplay"
import TimerControls from "./TimerControls"

import "../styles/PomodoroTimer.css"

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(TIMER_PRESETS.pomodoro)
  const [isActive, setIsActive] = useState(false)
  const [currentPreset, setCurrentPreset] = useState("pomodoro")

  const handleStartStop = () => {
    setIsActive(!isActive)
  }

  const handleReset = () => {
    setIsActive(false)
    setTimeLeft(TIMER_PRESETS[currentPreset])
  }

  const handlePresetChange = (preset) => {
    setCurrentPreset(preset)
    setTimeLeft(TIMER_PRESETS[preset])
    setIsActive(false)
  }

  // your code here

  return (
    <div className="pomodoro-container">
      <TimerDisplay timeLeft={timeLeft} />

      <TimerControls isActive={isActive} onStartStop={null} onReset={null} />

      <PresetSelector currentPreset={currentPreset} onPresetChange={null} />
    </div>
  )
}

export default PomodoroTimer
