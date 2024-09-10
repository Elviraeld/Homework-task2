
function isvalidNumber(number){
    if (number.length == 12 && number.startsWith("+7") ) {
        return true;
    }else{
        return false;
    }
}
console.log(isvalidNumber("+73052482934"));
