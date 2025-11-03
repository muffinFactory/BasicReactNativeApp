import { createMMKV } from "react-native-mmkv"

import { SecureStorage } from "./secureStorage"

const storage = createMMKV({
  id: `BAF-storage`,
  mode: "multi-process"
})

export const setStorage = <T>(key: string, value: T) => {
  if (typeof value === "string") {
    storage.set(key, value)
  } else {
    storage.set(key, JSON.stringify(value))
  }
}

export const getStorage = <T>(key: string): T | null | undefined => {
  const value = storage.getString(key)
  try {
    return value ? (JSON.parse(value) as T) : null
  } catch {
    return value as T
  }
}

export const deleteStorage = (key: string) => {
  storage.remove(key)
}

export const clearAll = () => {
  storage.clearAll()
  SecureStorage?.clearAll()
}
