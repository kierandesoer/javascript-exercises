const sumAll = function(firstNum, lastNum) {
    let finalSum = 0;
    
    if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) return "ERROR";
    if (firstNum < 0 || lastNum < 0) return "ERROR";
    
    if (firstNum > lastNum){
        let tempNum = lastNum;
        lastNum = firstNum;
        firstNum = tempNum;
    }

    for (i=firstNum; i<=lastNum; i++){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
