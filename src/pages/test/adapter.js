const components = {
    Banner: {
        componentName: 'Banner',
        convert(data) {
            return data
        }
    },
    Test: {
        componentName: 'Test',
        convert(data) {
            return data
        }
    },
    OtherTest: {
        componentName: 'OtherTest',
        convert(data) {
            return data
        }
    },
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
    ]