import { create } from 'zustand'

export const authCheck= create((set) => ({
  auth: false,
  userAvaible: () => set((state) => ({ auth: true })),
  userNotAvaible: () => set((state) => ({ auth: false })),
 
}))

export const authUser= create((set)=>({


  user:null,
  userInfo:(newUser)=>set((state)=>({user:newUser}))
}))