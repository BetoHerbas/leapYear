function leapYear(year) {
    if(year % 4 === 0){
        return true;
    }
    if(year % 400 === 0){
        return true;
    }
    return false;
}

export default leapYear;