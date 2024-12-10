function m()
{
  let str = ""
  for(i = 1; i <= 9; i++)
  {
    let r = ""
    for(j = 1; j <= i; j++)
    {
      r += i
    }
    str += r + "\n"
  }
  return str
}
console.log(m())
