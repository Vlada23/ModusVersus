window.addEventListener("load",function () {
    var Atitle=document.querySelectorAll(".accordion-title");

    for(var i=0; i<Atitle.length; i++){
        Atitle[i].addEventListener("click",function () {

            var href=this.getAttribute("data-href");
            var title=document.querySelector(href);

            if(title.classList.contains("active_title")){
                title.classList.remove("active_title");
            }else{
                title.classList.add("active_title");
            }
        })
    }

    var Atub=document.querySelectorAll(".tab_link");

    for(var j=0; j<Atub.length; j++){
        Atub[j].addEventListener("click",function () {

            var href=this.getAttribute("data-href");
            var tab=document.querySelector(href);

            var activeTabLink=document.querySelector(".tab_link.link_active");
            activeTabLink.classList.remove("link_active");
            //это прямо сейчас активная вкладка
            var activeTab=document.querySelector(".tab_info.active_tab");
            activeTab.classList.remove("active_tab");
            //для текущей ссылки , по которой кликнули
            //и вкладки, которую нужно сделать активной
            this.classList.add("link_active");
            tab.classList.add("active_tab");
        })
    }

});