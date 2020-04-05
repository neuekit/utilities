import { writable, get } from 'svelte/store';

/**
 * Svelte store which reads/writes values to the users localStorage
 * @memberof Svelte
 * @version 1.0.0
 * @param {*} data data to create store with
 * @returns {object} store methods
 */

export default function (data) {
   const store = writable(data);
   const { subscribe, set, update } = store;

   if (typeof window == 'undefined') return store;

   localStorage.storable && set(JSON.parse(localStorage.storable));

   return {
      subscribe,
      set: (data) => {
         localStorage.storable = JSON.stringify(data);
         set(data);
      },
      update: (callback) => {
         const updatedStore = callback(get(store));

         localStorage.storable = JSON.stringify(updatedStore);
         set(updatedStore);
      },
   };
}
