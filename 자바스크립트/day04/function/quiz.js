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
    id : lidso
    sub :   
}

