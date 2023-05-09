function test1() {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let str = document.querySelector(".str")
    str.innerHTML = arr.splice(0,5)
}

let but = document.querySelector(".out1")
but.onclick = test1;


function test2() {


    let arr = [1,2,3,4,5,6,7,8,10];
    let result = " ";
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            result += arr[i] + " ";
        }
    }
    return result;
}

let but1 = document.querySelector(".out2")
but1.onclick = function(){
    let str1 = test2()
    document.querySelector(".str").innerHTML = str1;
}

function test3() {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let result = "";
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            result += arr[i] + " ";
        }
    }
    return result;
}

let but2 = document.querySelector(".out3")
but2.onclick = function() {
    let str2 = test3();
    document.querySelector(".str").innerHTML = str2;
}


//  Задани 4  ( не могу разобраться так и не выводит, двухмерный массив ( для меня сложно) )

function test4() {
    
    let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
]
    arr.reverse();
}
let but3 = document.querySelector(".out4")
but3.onclick = function() {
    let str3 = test4();
    document.querySelector(".str").innerHTML = str3;
}



