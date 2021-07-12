var string1 = prompt("Enter string 1! ");
var string2 = prompt("Enter string 2! ");
let isEmpty = (string) => {
    if(string === "")
    {
        return true;
    }return false;
}
let mergedLength = string1.length + string2.length;
let string3 = new Array(mergedLength);
let z = 0;
for(let i = 0; i < mergedLength;i++)
{
    string3[i] = string1[z];
    string3[i+1] = string2[z];
    i++;
    z++;
}
console.log(string3)
