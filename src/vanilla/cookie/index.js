/**
 * Get a cookie stored in the browser by name
 * @memberof Vanilla
 * @version 1.0.0
 * @param {string} cookie name
 * @returns {string} Cookie value
 */

function get(name) {
   let v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`)
   return v ? v[2] : null
}

/**
 * Sets a cookie
 * @memberof Vanilla
 * @version 1.0.0
 * @param {string} cookie name
 * @param {string} cookie value
 * @param {string} days until expiry
 */

function set(name, value, days) {
   let d = new Date
   d.setTime(d.getTime() + 24*60*60*1000*days)
   document.cookie = `${name}=${value};path=/;expires=${d.toGMTString()}`
}

/**
 * Removes a cookie from the browser by name
 * @memberof Vanilla
 * @version 1.0.0
 * @param {string} cookie name
 */

function unset(name) { set(name, '', -1) }

export default { get, set, unset }