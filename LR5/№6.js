function sost(s) 
{
  res = false
  for(i = 2; i < s; i++)
  {
    if(s % i === 0)
    {
      res = true
    }
  }
  return res
}
console.log(sost(32))
