export default {
    CustomSelect: {
        props: {
            options: ['dsfffsdasaf', 'dsfdffsdasaf', 'dsfffsdadsaf'],
        },
        listeners: {
            focus() {
                console.log('focus')
            }
        }
    },

    Button: {
        classNames: 'error particle',
        style: 'transform: scale(calc(2 / 3));'
    },

    Figure: {
        props: {
            src: '/favicon.ico',
            desc: 'desc',
            // width: '20px'
        },
        style: 'font-size: 12px; line-height: 2;'
    },
    
    Icon: {
        props: {
            src: '/favicon.ico',
        },
        // classNames: 'spin',
        style: "transform: rotateZ(180deg)"
    }
}
