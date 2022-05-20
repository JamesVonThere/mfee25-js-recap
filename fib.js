// let arr = [0,1];
// function fib(a){
//     if(a >= 2){
//         for(let i = 0; i < 2 ; i++){
//             console.log(arr[i]);
//         }
//         for(let i = 2; i <= a; i++){
//             arr[i] = arr[i-2] + arr[i-1];

//         }
//             console.log(arr);
//         }else{
//             for(let i = 0; i <= a ; i++){
//                 console.log(arr[i]);
//             }
//         }
//     }

let arr = [0];
function fib(a){
    let b = 0;
    let c = 1;
if (a > 0){
    for (let i = 1; i < a; i++){
        let d = b + c;
        arr[i] = d;
        if(i%2 == 1){
            b = d;
        }else{
            c = d
        }
    }
    console.log(arr);
}else{
    console.log(arr);
}
}
fib(34);