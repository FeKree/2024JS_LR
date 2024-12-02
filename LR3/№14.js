mas= ["Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскременье"]
for(i in mas)
{
    if(mas[i] < 5)
    {
        console.log(mas[i])
    }
    else
    {
        console.log(<strong>mas[i]</strong>)
    }
}
