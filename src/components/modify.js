const fs = require('fs')
const path = require('path')

const src = __dirname

const mtime = '2020-04-01T00:00:00.000Z'

function modify(src, mtime) {
    const filepaths = []
    const handle = (src) => fs.readdirSync(src)
        .forEach(filename => {
            const filepath = path.join(src, filename)
            const stat = fs.statSync(filepath)
            if (stat.isFile()) {
                if (new Date(stat.mtime) > new Date(mtime)) {      
                    const type = stat.mtimeMs === stat.ctimeMs ? '+' : '~'
                    filepaths.push({filepath, type})
                }
            } else {
                handle(filepath)
            }
        })
    handle(src)
    return filepaths
}

console.log(modify(src, mtime))