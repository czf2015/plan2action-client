module.exports = (business) =>
`const components = {
${business.map(component => typeof component === 'string'
? `    ${component}: {
        componentName: '${component}',
        convert(data) {
            return data
        }
    },`
: `    ${component.name}: {
        componentName: '${component.name}',
        convert(data) {
            return data
        }
    },`).join('\n')}
}


export default (data, method = 'get') => method === 'get'
    ? data.map(item => {
        const { id, type, data } = item
        const { componentName, convert } = components[type]
        return { id, type, componentName, data: convert(data) }
    })
    : [
        {
            // 
        }
    ]`