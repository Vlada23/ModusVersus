window.addEventListener("load",function () {
    var previous=document.querySelector(".previous");
    var next=document.querySelector(".next");
    var slide=document.querySelectorAll(".slide");

    var cnt=0;
    next.addEventListener("click",function(){
       slide[cnt].className='slide';
       cnt=(cnt +1)%slide.length;
       slide[cnt].className='slide showing';
    })
    previous.addEventListener('click',function () {
        slide[cnt].className='slide';
        if(cnt>0){
            cnt=cnt-1;
        }else{
            cnt=slide.length-1;
        }
        slide[cnt].className='slide showing';
    })
});