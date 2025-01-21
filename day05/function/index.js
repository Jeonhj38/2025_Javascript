//cook(1)
//콘솔 요리시작!
//1.콘솔 된장국 요리!
//2.콘솔 김치찌개 요리!
//3.콘솔 짜파게티 요리!
//4.콘솔 가자미튀김 요리!
//5.콘솔 비엔나소세지(병장도 깨우는) 요리!
//6.콘솔 라면 요리!

//콘솔 요리끝!

const cook = (num) => {
  console.log("요리시작");
  if (num == 1) console.log("된장국 그라샤!");
  else if (num == 2) console.log("김치찌개");
  else if (num == 3) console.log("짜파게티");
  else if (num == 4) console.log("가자미튀김");
  else if (num == 5) console.log("비엔나소세지");
  else if (num == 6) console.log("라면");
  else console.log("없음");
  console.log("요리끝!");
};

//1.불 //2.얼음 //3. 번개
const skill = (num) => {
  console.log("스킬 준비!");
  if ((num = 1)) console.log("🔥");
  else if (num == 2) console.log("💧");
  else if (num == 3) console.log("⚡");
  else console.log("꽝");

  console.log("스킬 완료!");
};
