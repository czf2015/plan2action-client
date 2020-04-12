const fs = require('fs')
const categories = require(`${__dirname}/categories`)

const dst = `${__dirname}/README.md`
const separator = '\n'
const prefix = '  |_'

const handle = (categories, separator, prefix) => categories
    .map((row, idx) => 
`${idx + 1}. ${row.category}
${row.children.map(item => `${prefix}${item}`).join(separator)}`)
    .join(separator.repeat(2))

function convert(dst, separator, prefix) {
    fs.writeFileSync(dst, handle(categories, separator, prefix))
}

convert(dst, separator, prefix)