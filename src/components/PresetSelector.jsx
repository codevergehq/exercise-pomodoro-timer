import { TIMER_PRESETS } from "../constants/timerConfig"

import "../styles/PresetSelector.css"

function PresetSelector({ currentPreset, onPresetChange }) {
  return (
    <div className="preset-selector">
      {Object.keys(TIMER_PRESETS).map((preset) => (
        <button
          key={preset}
          className={`preset-button ${
            currentPreset === preset ? "active" : ""
          }`}
          onClick={null}
        >
          {preset.charAt(0).toUpperCase() + preset.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default PresetSelector
