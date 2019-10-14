window.addEventListener("load",function () {
    var previous=document.querySelector(".previous_img");
    var next=document.querySelector(".next_img");
    var slide=document.querySelectorAll(".slide_img");

    var cnt=0;
    next.addEventListener("click",function(){
        slide[cnt].className='slide';
        cnt=(cnt +1)%slide.length;
        slide[cnt].className='slide_img showing';
    })
    previous.addEventListener('click',function () {
        slide[cnt].className='slide';
        if(cnt>0){
            cnt=cnt-1;
        }else{
            cnt=slide.length-1;
        }
        slide[cnt].className='slide_img showing';
    })
});