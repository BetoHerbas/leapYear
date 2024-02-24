function leapYear(year) {
    let isLeapYear = false;
    if(year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)){
        isLeapYear = true;
    }
    return isLeapYear;
}

export default leapYear;