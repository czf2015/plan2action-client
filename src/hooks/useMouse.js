// 作者：尤雨溪
// 链接：https://zhuanlan.zhihu.com/p/68477600
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

function useMouse() {
    const x = ref(0)
    const y = ref(0)
    const update = e => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
    return { x, y }
}

// 在组件中使用该函数
const Component = {
    setup() {
        const { x, y } = useMouse()
        // 与其它函数配合使用
        const { z } = useOtherLogic()
        return { x, y, z }
    },
    template: `<div>{{ x }} {{ y }} {{ z }}</div>`
}