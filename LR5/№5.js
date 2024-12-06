var flag = false
function is_five(num)
{
    for(var i = 0; i<num.length;i++)
    {
    if (num[i]==5)
    {
      flag = true
      return flag
    }
    }
}
if (is_five([3,3,3,4,6,5]) == true)
{
    console.log('Присутствует')
}
else
{
    console.log('Нету')
}
