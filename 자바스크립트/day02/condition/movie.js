//
// 💡 **사용자로부터 영화 종류를 나타내는 정수 1~3과 나이를 입력받습니다. 각 영화와 가격은 다음과 같이 설정합니다:**
// - **1: 액션 영화 - 10000원**
// - **2: 로맨틱 코미디 - 8000원**
// - **3: 공포 영화 - 9000원**

// **나이에 따른 할인율은 다음과 같습니다:**

// - **13세 미만: 50% 할인**
// - **60세 이상: 30% 할인**
// **사용자의 나이와 선택한 영화에 따라 할인을 적용한 최종 티켓 가격을 계산하여 출력하는 프로그램을 작성하세요.**
// </aside>

const movie_number = prmopt("영화 번호 입력(1~3)");
const age = +prompt("나이 입력");

if (movie_number == "1") {
  if (age < 13)
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 액션 영화이므로 최종 티켓 가격 ${
        10000 * 0.5
      }입니다.`
    );
  else if (age >= 60)
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 액션 영화이므로 최종 티켓 가격 ${
        10000 * 0.7
      }입니다.`
    );
  else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 액션 영화이므로 최종 티켓 가격 ${
        10000 * 1
      }입니다.`
    );
  }
} else if (movie_number == "2") {
  if (age < 13)
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 로맨틱 코미디이므로 최종 티켓 가격 ${
        8000 * 0.5
      }입니다.`
    );
  else if (age >= 60)
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 로맨틱 코미디이므로 최종 티켓 가격 ${
        8000 * 0.7
      }입니다.`
    );
  else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 로맨틱 코미디이므로 최종 티켓 가격 ${
        8000 * 1
      }입니다.`
    );
  }
} else if (movie_number == "3") {
  if (age < 13)
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 공포 영화이므로 최종 티켓 가격 ${
        9000 * 0.5
      }입니다.`
    );
  else if (age >= 60)
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 공포 영화이므로 최종 티켓 가격 ${
        9000 * 0.7
      }입니다.`
    );
  else {
    alert(
      `귀하의 나이는 ${age}이고 선택한 영화는 공포 영화이므로 최종 티켓 가격 ${
        9000 * 1
      }입니다.`
    );
  }
} else {
  alert("선택한 영화는 없습니다.");
}
