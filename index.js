let numberShow = document.getElementById("numberShow");
let prevNums = document.getElementById("prevNums");
let genBtn = document.getElementById("genBtn");
let nums = [];
function makeListReadeable(list) {
    let result = "";
    for(let i = 0; i < list.length; i++) {
        result += list[i] + ", ";
    }
    return result.slice(0, result.length - 2);
}
function generateNewNumber() {
    if(nums.length == 100) {
        numberShow.innerText = "Bingo Finished, no more numbers can be generated."
        numberShow.classList.add("full");
        return;
    }
    numberShow.classList. remove("full");
    let validNum = false;
    let num;
    while(!validNum) {
        num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        validNum = true;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] == num) {
                validNum = false;
            }
        }
    }
    numberShow.innerText = num;
    nums.push(num);
    nums.sort((a, b) => a - b);
    prevNums.innerText = makeListReadeable(nums);
}
genBtn.addEventListener("click", (e) => {
    generateNewNumber()
});