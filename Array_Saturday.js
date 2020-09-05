var exampleArray = [
    ['1', '2', '3'],
    ['4', '5', '6' ],
    ['7', '8', '9']
]

function arrToCsv(arr){
    let [first, second, third] = arr
    return [first.join(','), second.join(','), third.join(',')].join('\n');
}

console.log(arrToCsv(exampleArray));

var exampleCsv = "1, 2, 3\n4, 5, 6\n7, 8, 9"

csvToArr(exampleCsv);

function csvToArr(csv){
    let csvArr =csv.split('\n');
    console.log(csvArr)
    let finalArr = [];
    for(let i = 0; i < csvArr.length; i++){
        finalArr.push(csvArr[i].split(','));
    }
    console.log(finalArr);
}
function csvToArray(csv){
    let csvArr = csv.split('\n')
    let numbersArr = []
    for (let i = 0; i < csvArr.length; i++){
        let chunks = csvArr[i].split(',')
        for (let j = 0; j < chunks.length; j++){
            let chunk = Number(chunks[j])
            chunks.splice(j,1,chunk)
        }
        numbersArr.push(chunks)
    }
    return numbersArr
}

console.log(csvToArray(exampleCsv))

function csvToArrMap(csv){
    let csvArr = csv.split(',').map( chunks => chunks.split(',').map(Number))
    return csvArr
}

//Filtering out a specified value from an array
function filterArray(arr){
    let newArray = [];
    for(let i = 0; i < arr.length ; i++){
        let num = arr[i];
        if(num !== 9) newArray.push(num);
    }
    return newArray
}

//Same as above with a different technique
function filterArray2(arr){
    return arr.filter(function(num){return num != 9})
}

//Or
function filterArray3(arr){
    return arr.filter((num)=> num !== 9)
}

// 10 edabit challenges 3 medium

const person = {
    name: Michael,
    age: 26,
    zodiac: Leo,
    hobby: "crochet"
}
//Deconstructing an object in the arguments
function displayPerson({name, age, hobby}){
    return `${name} is ${age} years old and loves ${hobby}.`
}


function displayPerson2({name, age, hobby}){
    return `<div><p>${name} is ${age} years old and loves ${hobby}.</p></div>`
}

//...rest is "the rest"; it collects
function displayPerson3({name, ...rest}){
    //Below is a spread
    [...name]
    return `<div><p>${name} is ${rest.age} years old and loves ${rest.hobby}.</p></div>`
}

function getFirstInitial({name}){
    return [...name][0]
}

function combineArrays(a,b){
    return [...a,...b]
}

combineArrays([1,2,3],[4,5,6])

