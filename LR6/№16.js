const mm = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let sum = 0
for (let i = 0; i < mm.length; i++) {
    for (let j = 0; j < mm[i].length; j++) {
        for (let k = 0; k < mm[i][j].length; k++) {
            sum += mm[i][j][k]
        }
    }
}
console.log("Сумма элементов массива:", sum)
