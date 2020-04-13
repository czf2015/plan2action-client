import Model from "./Model";

export default {
    ...Model,
    display: '',
    float: '', // none | left | right | inherit
    position: '', // static | relative | absolute | fixed
    top: '',
    left: '',
    clip: '', // 裁剪绝对定位元素
    margin: '0',
    padding: '0',
    width: '0',
    height: '0',
    font: {
        family: '',
        varant: '',
        size: '',
        weight: '',
        stretch: '',
        default: 'inherit',
    },
    flex: {
        direction: '',
        justify: '',
        align: {
            item: '',
            content: '',
            self: ''
        },
        grow: '0',
        shrink: '1',
        basis: '',
        wrap: '',
        flow: ''
    },
    text: {
        indent: '',
        space: {
            word: '',
            letter: '',
            white: ''
        },
        break: {
            word: '',
            line: '',
            overflow: '',
        },
        mode: '',
        orientation: '',
        direction: '',
        lineHeight: '',
        align: '',
        vertical: '',
        transform: '',
        decoration: '',
        shadow: '',
    },
    background: {
        color: '',
        image: '',
        position: '',
        repeat: '',
        attachment: '',
        origin: '',
        clip: '', // 
        size: '', // contain
        default: 'transparent'
    },
    border: '',
    outline: '',
    color: 'inherit',
    opacity: '1', // 透明度
    visibility: 'visible', // 隐藏元素时会占据页面上的空间
    transform: 'scale(1, 1)', // 横纵缩放比
    level: '0' // z-index 层级
}