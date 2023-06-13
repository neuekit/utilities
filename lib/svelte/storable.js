import { writable, get } from 'svelte/store'

/**
 * Svelte store which reads/writes values to the users localStorage
 * @memberof Svelte
 * @version 2.0.0
 * @param {*} data data to create store with
 * @param {string} name name of localStorage key
 * @param {boolean} session use sessionStorage instead of localStorage
 * @returns {object} store methods
 */

export default function (data, name = 'storable', session) {
   const initial = JSON.stringify(data)
   const store = writable(data)
   const { subscribe, set, update } = store
   const storage = session ? sessionStorage : localStorage

   if (typeof window == 'undefined') return store

   window[storage][name] && set(JSON.parse(window[storage][name]))

   return {
      subscribe,
      set: data => {
         window[storage][name] = JSON.stringify(data)
         set(data)
      },
      update: callback => {
         const updatedStore = callback(get(store))

         window[storage][name] = JSON.stringify(updatedStore)
         set(updatedStore)
      },
      reset: () => {
         window[storage].removeItem(name)
         set(JSON.parse(initial))
      }
   }
}
