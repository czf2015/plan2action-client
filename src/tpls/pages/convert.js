const adapterTpl = require(`${__dirname}/../adapter`)
const businessTpl = require(`${__dirname}/../business`)
const pageTpl = require(`${__dirname}/../page`)
const raw = require(`${__dirname}/${process.argv[2]}.json`)
const mkdirp = require('mkdirp')
const fs = require('fs')

async function convert(raw) {
    const {page, business} = raw
    const relative = `${__dirname}/../../pages/${page}`
    mkdirp(`${relative}/business`, err => {
        fs.writeFile(`${relative}/index.vue`, pageTpl(page, business), console.log)
        fs.writeFile(`${relative}/adapter.js`, adapterTpl(business), console.log)
        business.map(component => fs.writeFile(`${relative}/business/${component}.vue`, businessTpl(page, component), console.log))
    })   
}

convert(raw)
