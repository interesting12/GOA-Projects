// ქვნენაკრების შემოწმება:
function isQvenakrebi(set1, set2) {
    for (let item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }
    return true;
}

console.log(isQvenakrebi(new Set([1, 2]), new Set([1, 2, 3]))); // true
console.log(isQvenakrebi(new Set([1, 4]), new Set([1, 2, 3]))); // false
