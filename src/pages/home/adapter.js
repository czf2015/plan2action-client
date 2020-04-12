const components = {
    Banner: {
        componentName: 'Banner',
        convert(data) {
            console.log(data)
            return undefined
        }
    },
    Recommend: {
        componentName: 'Recommend',
        convert({ title, desc, list } = {}) {
            console.log({ title, desc, list } )
            // return {
            //     title,
            //     desc,
            //     list: list.map(({title, iconUrl, cardUrl}) => ({
            //         title,
            //         imgUrl: iconUrl,
            //         link: cardUrl
            //     })),
            //     count: 2
            // }
        }
    },
    ProductPanel: {
        componentName: 'Products',
        convert({ content: { title, mTitle, list } } = { content: {} }) {
            console.log({ content: { title, mTitle, list } })
            // return {
            //     title,
            //     desc: mTitle,
            //     list: list.map(({title, iconUrl, iconHoverUrl, children}) => ({
            //         title,
            //         iconUrl,
            //         iconHoverUrl,
            //         children: children.map(({title, desc, titleLink}) => ({
            //             title,
            //             desc,
            //             link: titleLink
            //         }))
            //     }))
            // }
        }
    },
    MyNatural: {
        componentName: 'Certification',
        convert(data) {
            console.log(data)
            return undefined
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