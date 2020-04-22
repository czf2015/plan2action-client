function parseParams() {
    // try {
        return eval(process.argv[2])
    // } catch(e) {
    //     return process.argv.slice(2)
    // }
}

console.log(parseParams())

