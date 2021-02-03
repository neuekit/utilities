// import { analytics } from '../src/integrations/index.js';
// import { sanslash } from '../src/middleware/index.js';
// import { pull } from '../src/svelte/index.js';
import { cookie } from '../src/index';

console.log(cookie);

cookie.set('matt', 'pilott', 1)
console.log(cookie.get('matt'))
cookie.unset('matt')