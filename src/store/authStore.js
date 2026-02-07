import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,

            login: (email, password) => {
                // Mock login - in production, this would call an API
                const mockUser = {
                    id: 1,
                    name: 'Arjun Malhotra',
                    email: email,
                    avatar: null,
                    memberSince: '2025-01-15',
                    tier: 'Platinum',
                    socialMedia: {
                        instagram: null,
                        facebook: null,
                        twitter: null
                    }
                }
                set({ user: mockUser, isAuthenticated: true })
                return { success: true }
            },

            signup: (name, email, password) => {
                // Mock signup
                const newUser = {
                    id: Date.now(),
                    name,
                    email,
                    avatar: null,
                    memberSince: new Date().toISOString().split('T')[0],
                    tier: 'Silver',
                    socialMedia: {
                        instagram: null,
                        facebook: null,
                        twitter: null
                    }
                }
                set({ user: newUser, isAuthenticated: true })
                return { success: true }
            },

            logout: () => {
                set({ user: null, isAuthenticated: false })
            },

            updateProfile: (updates) => {
                const currentUser = get().user
                if (currentUser) {
                    set({ user: { ...currentUser, ...updates } })
                }
            },

            connectSocial: (platform, handle) => {
                const currentUser = get().user
                if (currentUser) {
                    set({
                        user: {
                            ...currentUser,
                            socialMedia: {
                                ...currentUser.socialMedia,
                                [platform]: handle
                            }
                        }
                    })
                }
            }
        }),
        {
            name: 'jaala-auth',
        }
    )
)

export default useAuthStore
