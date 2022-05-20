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
let fib = (a) => {
  let erste = 0;
  let sekunde = 1;
  if (a > 1) {
    for (let i = 2; i < a + 1; i++) {
      let c = erste + sekunde;
      arr[i - 1] = c;
      if (i % 2 == 0) {
        sekunde = c;
      } else {
        erste = c;
      }
    }
    return console.log(arr);
  } else {
    return console.log(arr);
  }
};
// fib(34);
fib(2);
fib(3);
fib(4);
fib(5);
fib(6);
fib(7);
fib(8);
fib(9);
fib(10);
fib(11);
fib(12);
fib(13);
fib(14);
fib(15);
fib(16);
fib(17);
fib(18);
fib(19);
