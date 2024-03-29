<!-- Generated by documentation.js. Update this documentation by updating the source code. -->### Table of Contents*   [Integrations][1]
    *   [analytics][2]
        *   [Parameters][3]
    *   [googlemaps][4]
        *   [Parameters][5]
*   [Middleware][6]
    *   [sanslash][7]
        *   [Parameters][8]
*   [Svelte][9]
    *   [clickOut][10]
        *   [Parameters][11]
        *   [Examples][12]
    *   [pull][13]
        *   [Parameters][14]
    *   [push][15]
        *   [Parameters][16]
    *   [storable][17]
        *   [Parameters][18]
*   [index][19]
    *   [Parameters][20]
*   [index][21]
    *   [Parameters][22]
*   [Vanilla][23]
    *   [get][24]
        *   [Parameters][25]
    *   [set][26]
        *   [Parameters][27]
    *   [unset][28]
        *   [Parameters][29]
    *   [index][30]
        *   [Parameters][31]
    *   [index][32]
        *   [Parameters][33]
    *   [index][34]
        *   [Parameters][35]
    *   [index][36]
        *   [Parameters][37]
    *   [index][38]
        *   [Parameters][39]
    *   [index][40]
        *   [Parameters][41]
    *   [index][42]
        *   [Parameters][43]
    *   [index][44]
        *   [Parameters][45]
    *   [index][46]
        *   [Parameters][47]
    *   [index][48]
        *   [Parameters][49]
    *   [index][50]
        *   [Parameters][51]
    *   [index][52]
        *   [Parameters][53]
    *   [index][54]
        *   [Parameters][55]
    *   [char][56]
        *   [Parameters][57]
    *   [encode][58]
        *   [Parameters][59]
*   [index][60]
    *   [Parameters][61]
*   [Vite][62]
    *   [reloadForFiles][63]
        *   [Parameters][64]
        *   [Examples][65]## IntegrationsIntegration modules### analyticsInitialises a minimal Google Analytics script to track traffic#### Parameters*   `gaID` **[string][66]** the Google Analytics id eg. UA-123456789-1**Meta***   **version**: 1.0.0### googlemapsAllows for programmatic insertion of Google Maps script#### Parameters*   `options` **[object][67]** the Google Maps Api params (optional, default `{}`)**Meta***   **version**: 1.1.0## MiddlewareMiddleware modules### sanslashRedirects all urls ending in a trailing slash to non trailing for SEO#### Parameters*   `req` **[object][67]** request object
*   `res` **[object][67]** response object
*   `next` **[function][68]** next step function**Meta***   **version**: 1.0.0## SvelteSvelte modules### clickOutAction to click outside#### Parameters*   `node` **[object][67]** The node to listen to
*   `params` **[array][69]** Callback and elements to exclude from the click

    *   `params.0` &#x20;
    *   `params.exclude` **...any**&#x20;#### Examples```javascript
<div use:clickOut={[() => console.log('clickOut), document.querySelector('.exclude')]]}>
```Returns **[function][68]** The passed in callback**Meta***   **version**: 1.0.0### pullHandy sveltekit fetch wrapper#### Parameters*   `endpoint` **[string][66]** api url
*   `params` **[object][67]** object to convert to query string (optional, default `{}`)
*   `preload` **[boolean][70]** instruction to use sappers preload fetch (optional, default `false`)
*   `api` **[boolean][70]** toggle to opt out of the prepended API\_URL env var (optional, default `true`)
*   `head` **([array][69] | [boolean][70])** include headers in return (optional, default `false`)Returns **[object][67]** fetch data in json format**Meta***   **version**: 1.3.0### pushHandy sveltekit fetch wrapper for post requests#### Parameters*   `endpoint` **[string][66]** api url
*   `body` **[object][67]** object to convert to post body (optional, default `{}`)
*   `params` **[object][67]** object to convert to query string (optional, default `{}`)
*   `preload` **[boolean][70]** instruction to use sappers preload fetch (optional, default `false`)
*   `api` **[boolean][70]** toggle to opt out of the prepended API\_URL env var (optional, default `true`)Returns **[object][67]** fetch data in json format**Meta***   **version**: 1.0.0### storableSvelte store which reads/writes values to the users localStorage#### Parameters*   `data` **any** data to create store with
*   `name` **[string][66]** name of localStorage key (optional, default `'storable'`)
*   `session` **[boolean][70]** use sessionStorage instead of localStorageReturns **[object][67]** store methods**Meta***   **version**: 2.0.0## indexReturns a clamped value between two points### Parameters*   `start` **[number][71]** bottom end of the range
*   `end` **[number][71]** top end of the range
*   `duration` **[number][71]** length of range
*   `multiplier` **[number][71]** changing value to move between start and end
*   `decimal` **[number][71]** return result to a floatReturns **[number][71]** Returns the value between start & end**Meta***   **version**: 1.0.0## indexReturns a tristate value.### Parameters*   `val` &#x20;Returns **(`-1` | `0` | `1`)** Returns 1, 0 or -1**Meta***   **version**: 1.0.0## VanillaVanilla modules### getGet a cookie stored in the browser by name#### Parameters*   `name` &#x20;
*   `cookie` **[string][66]** nameReturns **[string][66]** Cookie value**Meta***   **version**: 1.0.0### setSets a cookie#### Parameters*   `name` &#x20;
*   `value` &#x20;
*   `days` **[string][66]** until expiry
*   `cookie` **[string][66]** name
*   `cookie` **[string][66]** value**Meta***   **version**: 1.0.0### unsetRemoves a cookie from the browser by name#### Parameters*   `name` &#x20;
*   `cookie` **[string][66]** name**Meta***   **version**: 1.0.0### indexCopies text to the users' clipboard#### Parameters*   `text` **[string][66]** the string to be copied**Meta***   **version**: 1.0.0
*   **deprecated**: use navigator.clipboard.writeText instead### indexCreates an element with a given object of attributes#### Parameters*   `tagName` &#x20;
*   `attributes`   (optional, default `{}`)
*   `name` **[string][66]** of the element such as 'div'
*   `key/value` **[object][67]** object of attribute names and valuesReturns **[node][72]** returns node**Meta***   **version**: 1.0.0### indexFinds an object index in an array of objects#### Parameters*   `arr` **[array][69]** the array of objects to search through
*   `key` **[string][66]** the property key in the object you want to find
*   `value` **[string][66]** the property value in the object you want to findReturns **[number][71]** index of the object that matches the criteria, -1 otherwise**Meta***   **version**: 1.0.0### indexFinds an object in an array of objects#### Parameters*   `arr` **[array][69]** the array of objects to search through
*   `key` **[string][66]** the property key in the object you want to find
*   `value` **[string][66]** the property value in the object you want to findReturns **[number][71]** the object that matches the criteria, undefined otherwise**Meta***   **version**: 1.0.0### indexDecodes a numeric html entity such as J#### Parameters*   `str` **[string][66]** the string to be decodedReturns **[string][66]** plain text string**Meta***   **version**: 1.0.0### indexConstructs an IntersectionObserver based, image lazy load function#### Parameters*   `node` **[object][67]** the element to be observed/lazy loadedReturns **[object][67]** containing methods, update and destroy**Meta***   **version**: 1.0.0### indexAdds leading zeros to your number#### Parameters*   `number` **[number][71]** The number to prefix with zeros
*   `zeros` **[number][71]** The number of zeros to lead by (optional, default `0`)Returns **[string][66]** number entered preceded by the number of zeroes**Meta***   **version**: 2.0.0### indexDoes a rudimentary check of download speed#### Parameters*   `size`   (optional, default `100000`)Returns **[number][71]** Filesize in bytes**Meta***   **version**: 1.0.0### indexCreates a nice formatted date from a unix timestamp#### Parameters*   `str` &#x20;
*   `date` **([object][67] | [string][66])** object or string
*   `string` **[string][66]** containing formats ie. {YYYY}Returns **[string][66]** 6 character hex string**Meta***   **version**: 2.0.0### indexCreates a nice formatted time from an integer of minutes#### Parameters*   `mins` **[number][71]** minutes integerReturns **[string][66]** nicely formatted time string eg. 7h 14m**Meta***   **version**: 1.0.0### indexTakes a string and converts it to sentence or title case#### Parameters*   `string` **[string][66]** string to convert
*   `format` **[boolean][70]** enable title caseReturns **[string][66]** converted string**Meta***   **version**: 2.0.0### indexThrottles a given function to run once every X milliseconds#### Parameters*   `fn` &#x20;
*   `delay` &#x20;Returns **[function][68]** Returns a passed function declaration**Meta***   **version**: 1.0.0### indexConverts a file to base64#### Parameters*   `file` **[blob][73]** file blobReturns **[string][66]** base64 string**Meta***   **version**: 1.0.0### charCreates a unique idType: [string][66]#### Parameters*   `length` **[number][71]** of id to createReturns **[string][66]** unique id as an alphanumeric string**Meta***   **version**: 2.0.0### encodeConverts an object to a url query string or vice-versa#### Parameters*   `obj` &#x20;
*   `pfx` &#x20;
*   `object` **([object][67] | [string][66])** to encode or string to decode
*   `prefix` **[string][66]** for encoded stringReturns **([object][67] | [string][66])** returns encoded string or decoded object**Meta***   **version**: 1.0.0## indexCreates a nice string that shows the time since the passed in date### Parameters*   `dateParam` &#x20;Returns **[string][66]** formatted time/date string Yesterday at 10:20**Meta***   **version**: 1.0.0## ViteVite modules### reloadForFiles#### Parameters*   `files` **[Array][69]<[String][66]>** The file to watch for changes. Can be a string or an array of strings.#### Examples```javascript
// vite.config.js
import { reloadForFiles } from '@neuekit/utils'

export default {
  plugins: [
    reloadForFiles('src/functions/my-function.js')
  ]
}
``````javascript
// vite.config.js
import { reloadForFiles } from '@neuekit/utils'

export default {
  plugins: [
    reloadForFiles(['.ts', '.js'])
  ]
}
```Returns **any** The plugin.**Meta***   **version**: 1.0.0
    This plugin will reload the page when a file is changed.
    This is useful for files that are not imported by the app.
    For example, if you have a file that is used by a serverless function.[1]: #integrations[2]: #analytics[3]: #parameters[4]: #googlemaps[5]: #parameters-1[6]: #middleware[7]: #sanslash[8]: #parameters-2[9]: #svelte[10]: #clickout[11]: #parameters-3[12]: #examples[13]: #pull[14]: #parameters-4[15]: #push[16]: #parameters-5[17]: #storable[18]: #parameters-6[19]: #index[20]: #parameters-7[21]: #index-1[22]: #parameters-8[23]: #vanilla[24]: #get[25]: #parameters-9[26]: #set[27]: #parameters-10[28]: #unset[29]: #parameters-11[30]: #index-2[31]: #parameters-12[32]: #index-3[33]: #parameters-13[34]: #index-4[35]: #parameters-14[36]: #index-5[37]: #parameters-15[38]: #index-6[39]: #parameters-16[40]: #index-7[41]: #parameters-17[42]: #index-8[43]: #parameters-18[44]: #index-9[45]: #parameters-19[46]: #index-10[47]: #parameters-20[48]: #index-11[49]: #parameters-21[50]: #index-12[51]: #parameters-22[52]: #index-13[53]: #parameters-23[54]: #index-14[55]: #parameters-24[56]: #char[57]: #parameters-25[58]: #encode[59]: #parameters-26[60]: #index-15[61]: #parameters-27[62]: #vite[63]: #reloadforfiles[64]: #parameters-28[65]: #examples-1[66]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String[67]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object[68]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function[69]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array[70]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean[71]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number[72]: https://developer.mozilla.org/docs/Web/API/Node/nextSibling[73]: https://developer.mozilla.org/docs/Web/API/Blob
