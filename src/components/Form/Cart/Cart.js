

export default class Cart {
    constructor({ total = 0, list = [] }) {
        this.total = total
        this.list = list
    }
    add(product, count) {
        // 使用二分法插入数组
        this.list.push({ ...product, count, ctime: Date.now(), mtime: Date.now() })
        this.total += product.unit_price * product.discount(count)
        return this
    }
    sub(product, count) {
        // 使用二分法
        this.list.push({ ...product, count, ctime: Date.now(), mtime: Date.now() })
        this.total += product.price * product.count
        return this
    }
    update()
}


