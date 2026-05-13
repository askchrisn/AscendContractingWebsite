import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { firebaseConfig } from './config'

export const firebaseApp = initializeApp(firebaseConfig)

void isSupported().then((supported) => {
  if (supported && import.meta.env.PROD) {
    getAnalytics(firebaseApp)
  }
})
