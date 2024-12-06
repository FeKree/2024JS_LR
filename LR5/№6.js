counter = 0;  
function simple(num)
{
    for(var i = 1;i<num-1;i++)
    {
        if (num%i == 1 ||  num/i == 2 ||  num/i == 3  || num/i == 4  || num/i == 5 ||   num/i == 6 || num/i == 7   || num/i == 8 ||  num/i == 9 || num/i == 10)
        {
            counter++
        }
    }
    return counter;
}
a = simple(11)
if (a==1)
{
  console.log('false')  
}
else
{
  console.log('true')  
}
