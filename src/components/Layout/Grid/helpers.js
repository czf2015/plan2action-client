export function calcBase(arr) {
    let base = 0;
    arr[0].forEach(v => {
        if (Array.isArray(v)) {
            base += calcBase(v);
        } else {
            base += v;
        }
    });
    return base;
}