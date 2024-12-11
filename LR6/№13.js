function m(arr) {
  sum = 0
  count = 0
  for (let i = 0; i < arr.length; i++)
  {
    sum += arr[i]
    count++
    if (sum > 10)
    {
      return count
    }
  }
  return -1
}
numbers = [7, 2, 3, 2, 5]
console.log(m(numbers))
