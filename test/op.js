
// 在各个数字之间插入四则运算的运算符组成算式，组合算式的计算结果为“将原数字各个数位上的数逆序排列得到的数”
// e.g 351 --> 3 X 51 = 153
function solve(start, end) {
    const op = ['+', '-', '*', '/', '']
    
    for (let i = start; i < end; i++) {
        const c = String(i)
        for (let j = 0; j < op.length; j++) {
            for (let k = 0; k < op.length; k++) {
                for (let l = 0; l < op.length; l++) {
                    const v = c.charAt(3) + op[j] + c.charAt(2) + op[k] + c.charAt(1) + op[l] + c.charAt(0)
                    if (v.length > 4) {
                        // eval
                        if (eval(v) == i) {
                            console.log(`${v} = ${i}`)
                        }
                    }
                }
            }
        }
    }
}

solve(1000, 10000)