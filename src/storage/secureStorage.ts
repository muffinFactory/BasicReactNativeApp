import { createMMKV, MMKV } from "react-native-mmkv"

import { SecureStorageKeys } from "./keys"

let secureStorage: MMKV | null = null

export const createReadSecureStorage = (user_id: string, secure_pass: string) => {
  secureStorage = createMMKV({
    id: `secure-storage-${user_id}`,
    encryptionKey: secure_pass,
    mode: "multi-process"
  })
}

/**
 * We should call this everytime:
 * - User login first time
 * - restore session
 */
export const setupSecureStorage = async (
  user_id: string,
  secure_pass: string,
  is_first_time: boolean = false
): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      createReadSecureStorage(user_id, secure_pass)
      if (!secureStorage) {
        reject(new Error("Failed to setup secure storage"))

        return
      }
      if (!is_first_time && secureStorage.getString(SecureStorageKeys.IS_INIT) !== "ok") {
        reject(new Error("Mismatch Encrypt Key"))

        return
      }
      secureStorage?.set(SecureStorageKeys.IS_INIT, "ok")
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}

export { secureStorage as SecureStorage }
