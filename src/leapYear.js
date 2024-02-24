function leapYear(year) {
    let isLeapYear = false;
    if(year % 4 === 0 || year % 400 === 0){
        isLeapYear = true;
    }
    if(year % 100 === 0 && year % 400 !== 0){
        isLeapYear = false;
    }
    return isLeapYear;
}

export default leapYear;