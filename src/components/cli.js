const fs = require('fs')
const render = require(`${__dirname}/../tpls/demos`)

const dst = `${__dirname}`
const separator = '\n'
const prefix = '  |_'

const handle = (categories, separator, prefix) => categories
    .map((row, idx) => 
`${idx + 1}. ${row.category}
${row.children.map(item => `${prefix}${item}`).join(separator)}`)
    .join(separator.repeat(2))

function run(dst, separator, prefix) {
    const categories = []
    
    fs.readdirSync(__dirname)
        .forEach(filename => {
            const filepath = `${__dirname}/${filename}`
            if (fs.statSync(filepath).isDirectory()) {
                categories.push({
                    category: filename,
                    children: fs.readdirSync(filepath).map(filename => filename.split('.')[0])
                })
            }
        })

    switch (process.argv[2] || 'all') {
        case 'demos':
            fs.writeFileSync(`${dst}/../demos/index.vue`, render(categories))
            break
        case 'categories':
            fs.writeFileSync(`${dst}/categories.json`, JSON.stringify(categories))
            break
        case 'README':
            fs.writeFileSync(`${dst}/README.md`, handle(categories, separator, prefix))
            break
        case 'all':
            console.log('all')
            fs.writeFileSync(`${dst}/categories.json`, JSON.stringify(categories))
            fs.writeFileSync(`${dst}/../demos/index.vue`, render(categories))
            fs.writeFileSync(`${dst}/README.md`, handle(categories, separator, prefix))
            break
        default:
            break
    }
}
    
run(dst, separator, prefix)