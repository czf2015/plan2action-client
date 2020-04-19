function parseParams() {
    try {
        return JSON.parse(process.argv[2])
    } catch(e) {
        return process.argv.slice(2)
    }
}

console.log(parseParams())

