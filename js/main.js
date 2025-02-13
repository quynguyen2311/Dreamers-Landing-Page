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

// menu effect
var myMenu = document.querySelector('.header_top > img:first-child');
var myDiv = document.querySelector(".menu_herosection");
// Khi click vào thẻ menu -> xuất hiện class active
myMenu.addEventListener('click',(e)=>{
    // thêm class vào nếu đã có, xóa class đi nếu chưa có 
    myDiv.classList.toggle('active');
    // Ngắn sự kiện lan ra ngoài
    e.stopPropagation();
})
// Khi click ở bất kì chỗ nào khác -> xóa class active
document.addEventListener('click',() => {
    if(!(myMenu.contains()))
})

// form register
var myButton = document.querySelector('.form--register--right > button');
console.log(myButton);
myButton.addEventListener('click',(e) => {
    alert("Bạn đã đăng ký thành công !");
    alert("Chúng tôi sẽ liên hệ với bạn sớm qua email");
});


