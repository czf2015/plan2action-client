const fs = require('fs')
const categories = require(`${__dirname}/categories`)
const render = require(`${__dirname}/../tpls/demos`)

const dst = `${__dirname}/../demos/index.vue`


function convert(dst) {
    fs.writeFileSync(dst, render(categories))
}

convert(dst)
