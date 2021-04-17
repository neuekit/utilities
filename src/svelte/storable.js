import { writable, get } from 'svelte/store'

/**
 * Svelte store which reads/writes values to the users localStorage
 * @memberof Svelte
 * @version 1.0.0
 * @param {*} data data to create store with
 * @param {string} name name of localStorage key
 * @returns {object} store methods
 */

export default function (data, name = 'storable') {
   const store = writable(data)
   const { subscribe, set, update } = store
   const initial = data

   if (typeof window == 'undefined') return store

   localStorage[name] && set(JSON.parse(localStorage[name]))

   return {
      subscribe,
      set: data => {
         localStorage[name] = JSON.stringify(data)
         set(data)
      },
      update: callback => {
         const updatedStore = callback(get(store))

         localStorage[name] = JSON.stringify(updatedStore)
         set(updatedStore)
      },
      reset: () => {
         localStorage.removeItem(name)
         set(initial)
      }
   }
}
