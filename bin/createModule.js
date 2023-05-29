#! /usr/bin/env node

import fs from 'fs'
import replace from 'replace-in-file'

const arg = process.argv[2].split('/')
const force = process.argv[3] === '-f'
const name = arg.pop()
const folder = arg.pop() || 'vanilla'
const index = `lib/${folder}/index.js`
const module = `lib/${folder}/${name}`

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

try {
   // Check to ensure the module doesn't already exist
   if (fs.existsSync(module) && !force) {
      throw new Error(`Module "${name}" already exists! Use -f to override, this will replace any custom code!`)
   }
   // Create folder
   fs.existsSync(module) || fs.mkdirSync(module)

   // Create files
   fs.copyFileSync('bin/template/bench.js', `${module}/bench.js`)
   fs.copyFileSync('bin/template/index.js', `${module}/index.js`)
   fs.copyFileSync('bin/template/test.js', `${module}/test.js`)

   // Update files with module name
   replace.sync({ files: `${module}/*.js`, from: /yourModuleName/g, to: name })
   replace.sync({ files: `${module}/index.js`, from: /@memberof (.*)/g, to: `@memberof ${capitalize(folder)}` })

   // Add module to index.js
   fs.readFile(index, (err, data) => {
      // Check if module is already in index.js
      if (data.indexOf(`default as ${name}`) >= 0) return
      
      // Add module to index.js
      fs.appendFileSync(index, `\nexport { default as ${name} } from './${name}/index.js'`)
   })

   console.log('\x1b[1m%s\x1b[0m', `"${name}" module created in "${module}"!`)
} catch (err) {
   console.error('\x1b[31m%s\x1b[0m', err)
}
