const MBTI = prompt("mbti 뭐임?");
const first = mbti.slice(0, 1).toUpperCase();
const second = mbti[1].toUpperCase();
const third = mbti[2].toUpperCase();
const fourth = mbti[3].toUpperCase();
const mbti0bj = {
  E: "외향적",
  I: "내향적",
  S: "감각적",
  F: "감성적",
  T: "이성적",
};

// alert('${mbti0bj[first])}

const email = prompt("이메일 입력");
const hasat = email.includes("@");
const hasDot = email.includes(".com") || email.includes(".net");
c;
