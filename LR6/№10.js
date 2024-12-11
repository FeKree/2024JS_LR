function m(n)
{
  let mm = []
  let x = "x"
  for(i = 0; i < n; i++)
  {
    mm.push(x)
    x += "x"
  }
  return mm
}
console.log(m(10))
