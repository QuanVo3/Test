var times = 0;
function Guess()
{
    let a = document.getElementById("textBox").value;
    let number = Number(a);
    if(isNaN(number) || number < 1 || number > 10)
    {
        document.getElementById("line").innerText = "Số không hợp lệ";
    }
    else
    {
        let rand = Math.floor(Math.random() * 11);
        if(a == rand)
        {
            times++;
            document.getElementById("line").innerText = "Bạn đã đoán đúng";
        }
        else{
            times++;
            document.getElementById("line").innerText = "Bạn đã đoán sai! Kết quả là: " + rand;
        }
    }
}
function guessTimes()
{
    if(times < 3)
    {
        Guess();
    }
    else{
        document.getElementById("line").innerText = "Bạn đã hết số lần đoán";
    }
}

