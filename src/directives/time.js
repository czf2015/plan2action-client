import Vue from 'vue'
/**
 * 实时时间转换指令，大于一个月则返回具体的年月日
 * @param { string } timeStamp - 时间 格式：年-月-日 时:分:秒 或 时间戳
 * @returns { string }
 */
function getFormatTime(timeStamp) {
    var time = new Date(timeStamp);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    // var hour = time.getHours();
    // var minute = time.getMinutes();
    // var second = time.getSeconds();
    var now = new Date();
    var milliseconds = 0;
    var timeSpanStr;

    milliseconds = now.valueOf() - time.valueOf()

    if (milliseconds <= 1000 * 60 * 1) {
        timeSpanStr = '刚刚';
    } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
    } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
    } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
    } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
        // timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        timeSpanStr = year + '-' + month + '-' + day
    } else {
        // timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        timeSpanStr = year + '-' + month + '-' + day
    }

    return timeSpanStr;
}

Vue.directive('time', {
    bind(el, binding) {
        el.innerHTML = getFormatTime(binding.value);
        //每隔一分钟更新一次
        el.__timeout__ = setInterval(() => {
            el.innerHTML = getFormatTime(binding.value);
        }, 60000);
    },
    unbind(el) {
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
});