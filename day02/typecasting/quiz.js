// 프롬프트로 유저에게 닉네임을 물어봐서
// 알럿으로 ~~님 환영합니다!
// 만약에 빈문자로 입력하면 Guest님 환영합니다! 나오기

const usernickname = prompt("닉네임 입력");
alert(`${usernickname || "Guest"}님 환영합니다.`);

const password = prompt("화장실 비밀번호 알려줘");
password == "1024" && alert("화장실 비밀번호 정답!");
