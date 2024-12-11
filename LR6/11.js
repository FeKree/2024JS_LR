function m(n)
{
  let mm = []
  for(i = 1; i <= n; i++)
  {
    mm.push(String(i).repeat(i))
  }
  return mm
}
console.log(m(10))
