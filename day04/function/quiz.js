// 메뉴: 아아,4000 라떼,4500 유자차,4000
// 매출: 0
// 판매기능: 번호를 물어보고 판매되면 매출이 올라가면 됨
// 메뉴추가: 이름과 가격이 주어지면 메뉴에 추가 됨


const starbucks ={
    menu : [{name:"아아",price: 4000},
        { name: "라떼", price: 4500},
        { name: "유자차", price:4000},
    ],
    sell: 0, 
    sell: function(num) {
        if (!this.menu[num]) console.log("그런 메뉴 없음");
        else {
            console.log(`${this.menu[num].name}이 팔렸습니다.`);
            this.sale = this.sale + this.menu[num].price;
        }

    },
    add: function (a,b)

}


// 체력: 100
// 마나: 100
// 레벨: 1
// 경험치: 0 경험치 100되면 레벨오름 경험치 0됨
// 매직클로: 마나 -10 달고, 매직클로 발동! [1번 경험치 10 오름] 단, 마나가 충분할때 가능
// 텔레포트: 마나 -50 달고, 텔레포트 발동! [2번 경험치 50 오름] 단, 마나가 충분할때 가능
// 포션마시기: 체력, 마나 50 충전됨

const magician = {
    hp: 100,
    mana: 100,
    level: 1,
    exp: 0,
    magicClaw: function () {
        if(this.mana < 10){
            console.log(`현재 마나:${this.mana} 이므로 마나가 부족합니다.`);
        } else {
            this.mana = this.mana - 10;
            this.getexp(10);
            console.log("매직 클로 발동!");
        }
    },
    drinkpotion: function(){
        this.hp = this.hp + 50;
        this.mana = this.mana + 50;
        console.log(`포션을 마십니다. 현재 체력:${this.hp} 현재 마나:${this.mana}`);
    },
};

magician.magicClaw();
magician.teleport();


// youtube

// 내 아이디:
// 구독한 채널:
// 좋아요 눌렀던 채널:
// 구독하기:
// 좋아요 누르기:

const youtube = {
    subscribeChannels:["슈카월드","타요","G무비"],
    likedChannels: ["슈카월드", "YTN"],
    subscribe: function (newChannel) {
        this.subscribeChannels.push(newChannel);
    },
    like: function (likedChannel) {
        this.subscribeChannels.push(likedChannel);
    }, 
};

// car 오브젝트

// 자동차 이름
// 자동차 속도 올리기
// 자동차 속도 내리기
// 자동차 브레이크 밟기
// 자동차 현재 속도 나타내기

const car = {
    name:"모닝",
    speed: 0,
    speedup:function () {
        this.speed = this.speed + 1;
    },
    speedDown: function () {
        this.speed = this.speed == 0 ? 0 : this.speed - 1 : 0;
    },
    break: function () {
        this.speed = 0;

    },
    printNowSpeed: function () {
        console.log(`현재 속도:${this.speed}`)
    }
};

// result: 0
// history: 계산의 모든 결과를 가지고 있음
// add 함수 있음 - result + x
// minus 함수 있음 - result = x
// divide 함수 있음 [단 0 들어오면 에러]
// square(제곱) 함수 있음
// clear 함수 있음 - result 0으로 초기화
// showHistory 함수 있음 - history 결과 보여줌
// 현균이 함수 있음 - 뭐 이렇게 많아 alert으로 보여줌

const calculator = {
    result=0,
    add: function[0]
    
}


