// HEADAER EFFECT
var myElements  =document.querySelectorAll('.header_bottom > a, .header_bottom > div');
console.log(myElements);
var myHeaderBottomBar = document.querySelectorAll('.header_bottomBar > div');
console.log(myHeaderBottomBar);
// khi ra chuột vào phần 
for(let i = 0; i < myElements.length; i++){
    myElements[i].addEventListener('mouseover',function(){
        // xóa các class active cũ
        for(let i = 0; i < myHeaderBottomBar.length; i++){
            myHeaderBottomBar[i].classList.remove('active');
        }
        // thêm class avtive vào thằng hiện tại
        myHeaderBottomBar[i].classList.add('active');
    });
}
// khi ra chuột ra phần tử
for(let i = 0; i < myElements.length; i++){
    myElements[i].addEventListener('mouseout',function(){
        // xóa các class active hiên tại
        myHeaderBottomBar[i].classList.remove('active');
    })
}

var myButton = document.querySelector('.form--register--right > button');
myButton.addEventListener('click',() => {
    alert("Bạn da94 đăng ký thành công !");
    alert("Chúng tôi sẽ liên hệ với bạn sớm qua email")
})

// ACHIEVE EFFECT
let myAchieveElements = document.querySelectorAll('.achievement_content > div');


