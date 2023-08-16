let array = [34*5];
function totalNumbersInAnArray() {
    let numbers = 0;
    for (let i = 0; i < array.length; i++) {
        // numbers = numbers + numbera[i];
        numbers += array[i];
    }
    return numbers;
}
const totalSumOfArray = totalNumbersInAnArray(array);
console.log(totalSumOfArray);