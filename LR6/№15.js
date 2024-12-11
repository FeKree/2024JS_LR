mm = [[1, 2, 3], [4, 5], [6]]
sum = 0
for (let i = 0; i < mm.length; i++) {
    for (let j = 0; j < mm[i].length; j++) {
        sum += mm[i][j]
    }
}
console.log("Сумма элементов массива:", sum)
