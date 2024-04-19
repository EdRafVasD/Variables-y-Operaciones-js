function palindrome(text){
    const arrayDeCadenas = text.split("");
    const reversetext = arrayDeCadenas.reverse()
    const newText = reversetext.join("")
    if(text ===newText){
        return true;

    }
    else{
        return false;
    }
}
console.log(palindrome (""));


