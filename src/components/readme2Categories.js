const fs = require('fs')

const src = './README.md'
const dst = './categories.json'
const separator = '\n'

const handle = (raw, separator) => raw.split(separator.repeat(2))
    .map(row => {
        const col = row.split(separator)
            .map(line => line.replace(/^[^A-Za-z]+/, ''))
        return {
            category: col[0],
            children: col.slice(1)
        }
    })

function convert(src, dst, separator) {
    fs.readFile(src, 'utf8', (err, raw) => {
        fs.writeFileSync(dst, JSON.stringify(handle(raw, separator)))
    })
}

convert(src, dst, separator)