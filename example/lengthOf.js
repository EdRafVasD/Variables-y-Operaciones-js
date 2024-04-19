function lengthOf(text){
    if(text === "" || text == null){
        return "Invalid input";
    }
    else{
        return text.length;
    }
}
console.log(lengthOf("Hello"));
console.log(lengthOf(""));
