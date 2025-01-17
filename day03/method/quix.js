// 유저에게 만들고 싶은 아이디를 물어보고

// 1. 아이디의 길이가 4 ~16글자 사이여야하고
// 틀리면: 아이디 길이가 유효하지 않습니다!
// 2. 반드시 !,@,#,& 중 하나의 특수문자가 들어가야하고
// 틀리면: 반드시 특수문자 (!,@,#,&) 하나 포함해야합니다!
// 3. 마지막 글자가 알파벳 대문자로 끝나야함
// 틀리면: 마지막 알파벳은 무조건 대문자여야 합니다!

// 위 조건을 모두 통과하면 아이디 완성! 알럿나오기

const userid = prompt("아이디 입력 ㄱ");
if (userid.length < 4 || 16 < userid.length)
  alert("아이디 길이가 유효하지 않습니다!");
else if (
  !userid.includes("!") ||
  userid.includes("@") ||
  userid.includes("#") ||
  userid.includes("&")
)
  alert("반드시 특수문자 (!,@,#,&) 하나 포함해야합니다!");
else if (
  userid.slice(userid.length - 1, userid.length) !=
  userid.slice(userid.length - 1, userid.length).toUpperCase()
)
  alert("마지막 알파벳은 무조건 대문자여야 합니다!");
else alert("아이디 완성!");
