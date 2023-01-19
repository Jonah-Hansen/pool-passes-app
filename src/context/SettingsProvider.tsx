import { createContext, ReactNode, useContext, useState } from "react"
import { Settings } from "../interfaces/Settings"

const defaultSettings: Settings = {
  edit: false,
  delete: false,
}

const settingsContext = createContext({ settings: defaultSettings, toggleSetting: (setting: keyof Settings) => { } })

export const useSettings = () => useContext(settingsContext)

export default function SettingsProvider({ children }: { children: ReactNode }) {

  const [settings, setSettings] = useState<Settings>(defaultSettings)

  const toggleSetting = (setting: keyof Settings): void => {
    const newSettings = { ...settings }
    newSettings[setting] = !newSettings[setting]
    setSettings(newSettings)
  }

  return (
    <settingsContext.Provider value={{ settings, toggleSetting }}>
      {children}
    </settingsContext.Provider>
  )
}