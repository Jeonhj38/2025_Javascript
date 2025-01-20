// 커피메뉴 세개 선언 ㄱ
const menu = ["아메리카노", "라떼", "바닐라"]; //array 타입
const soccer = ["손흥민", "황희찬", "이강인", "김민재"];

// 배열 관련된 연산자

//1. indexing 연산자 (=꺼내기)
const test = [menu, soccer];
// console.log(test[0][2]); //바닐라
// console.log(test[1][1]); //씨찬히형

//2. Destructuring 연산자 (=분해)
const test1 = 



//3. Rest 연산자
const [son, ...rest] = soccer; //


//4. add 및 update 연산자
soccer[4] = "박지성";
soccer[1] = "씨찬히형";
console.log(soccer);

//5. delete 연산자