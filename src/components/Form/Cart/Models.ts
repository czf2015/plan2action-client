// 商品
interface Product {
    id: Number,
    name: String,
    unit_price: String,
    discount: Function, // (count) => 1
}

// 库存
interface Inventory {
    Product,
    surplus: Number, // 余量
    sold: Number, // 销量
    week: [Number], // 周日量 0 ~ 7
    ctime: Date,
    mtime: Date,
}

// 订单
interface Order {
    id: Number,
    list: [
        {
            // id: Number, //
            // name: String, //
            // category: String, //
            // unit_price: Number, //
            // discount: Number, // 1
            // reduce: Number, // 0
            Product, //
            count: Number, // 1
            ctime: Date, // 创建时间 Date.now()
            mtime: Date, // 修改时间 Date.now()
        }
    ],
    total_price: Number, // 0 商品总价
    preference: Number, // 0 使用优惠
    Delivery_rate: Number, // Delivery_rate
    status: String, // 'submit' 提交 'cancel' 撤销 'paid' 结单 'refund' 退款 
    payment: Number, // 0 实际支付价钱
    owe: Number, // total_price - preferece - payment + delivery_price 应付
    ctime: Date,
    mtime: Date,
}

// 优惠券
interface Coupon {
    id: Number, //
    name: String, //
    category: String, // 'reduce' 'discountNumber
    value: Number, //
    valid: Boolean, // true
    used: Number, // Order_id 
    range: [String], // ['total']
    exclude: [String], // 
    lower_limit: Number, // 0
    upper_limit: Number, //
    start_time: Date, // Date.now()
    end_time: Date, //
    use_time: Date, //
}

// 配货
interface Suply {
    id: Number, // 可能拆单
    Order_id: Number, //
    name: String, //
    information: String, //
    remark: String, //
    username: String, //
    contact: String, //
    available: Boolean, // 可购得的
    stage: String, // 流程阶段
    amount: Number, // 
}

// 运送
interface Delivery {
    id: Number, // 编号
    Supply_id: Number, //
    Supply_name: String, // 名称
    information: String, // 信息
    remark: String, // 备注
    Suply_username: String, // 用户名
    Suply_contact: String, // 联系方式
    logistics: String, // 物流公司
    undertaker: String, // 承担方
    origin: String, // 起送点
    destination: String, // 目的地
    location: String, // 到达点
    sites: [String], // 途经点
    rate: Number, // 费用
}