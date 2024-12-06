flag = false
function m(s)
{
  for(i =0; i < s.length; i++)
  {
    if(s[i]===s[i+1])
    {
      flag = true
      return flag
      break
    }
  }
}
a = (m([3,5,5,7,8,4,9]))
if(a === true)
{
  console.log('В массиве есть повторные элементы подряд')
}
else
{
  console.log('В массиве нет повторных элементов подряд')
}
