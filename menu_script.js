window.addEventListener("load",function () {
    var adap_menu=document.querySelector(".mobile_menu");
    var main_nav=document.querySelector(".navigation");
    var cnt=0;
    adap_menu.addEventListener("click",function(){
        cnt++;
        if(cnt%2==1){
            main_nav.style.display="block";
        }else {
            main_nav.style.display="none";
        }
    })
});