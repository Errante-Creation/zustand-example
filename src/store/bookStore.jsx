import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useBookStore = create(
    persist((set) => 
        ({
            books: [],
            numberOfBooks: 0,

            addBook: (oneBook) => {
                set((state) => ({
                    books: [...state.books, oneBook],
                }))

                set((state) => ({
                    numberOfBooks: state.numberOfBooks + 1,
                }))
            }
        }),
        {
            name: 'mybookstore', // nom unique pour le stockage
        }
    ))