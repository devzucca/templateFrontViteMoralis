import { createWithEqualityFn } from 'zustand/traditional'
import { storeUser } from '@/stores/user/storeUser'
import { storeTheme } from '@/stores/Actions/Theme/storeTheme'
import { storeHome } from '@/stores/Screens/storeHome' 

export const useBoundStore = createWithEqualityFn( (...a) => ({
  ...storeUser(...a),
  ...storeTheme(...a),
  ...storeHome(...a),
}))
