var a,inputNumber,number;
do{
    a = prompt("Enter max: ");
    if(isNaN(a) || a < 4 || a > 20 || a % 2 != 0)
    {
        alert("n >= 4 & n <= 20 & n % 2 = 0");
    }
}
while(isNaN(a) || a < 4 || a > 20 || a % 2 != 0);
do{
    inputNumber = prompt("Enter number: ");
    number = Number(inputNumber);
    if(isNaN(number) || number < 0 || number > a)
    {
        alert("Invalid Number!");
    }
} while(isNaN(number) || number < 0 || number > a);
let oppositeNumberOf = (a,inputNumber) => {
    let halfA = a/2;
    if(inputNumber < halfA)
    {
        let temp = halfA;
        for(let i = 0;i < inputNumber;i++)
        {
            temp++;
        }
        alert("Opposite of " + inputNumber + " is " + temp);
    }
    else if((inputNumber > halfA))
    {
        let temp2 = 0; 
        for(let i = halfA;i < inputNumber;i++)
        {
            temp2++;
        }
        alert("Opposite of " + inputNumber + " is " + temp2);
    }
}
oppositeNumberOf(a,inputNumber);