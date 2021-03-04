let year = +prompt('Введите год');
if(year % 4 != 0 || year % 100 == 0 && year % 400 !=0){
    console.log(`Год - не высокосный`);
}else{
    console.log(`Год - высокосный`);
}

