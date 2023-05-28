import { create } from 'zustand'

const authCheck= create((set) => ({
  auth: false,
  userAvaible: () => set((state) => ({ auth: true })),
  userNotAvaible: () => set((state) => ({ auth: false })),
 
}))

export default authCheck