const vowel = "aeiou";

function countvowel(str){
    let count = 0;
    for (let i = 0; i<str.length; i++){
        if (vowel.includes(str[i])){
            count++;
        }
    } return count;

}
let inputstr = "apple";
console.log("Number of vowels in "+ inputstr+ " :"+countvowel(inputstr));