(function (){
    'user strict';
   
    var doc = document.getElementsByClassName('js-ncgr-category-navigation__list-item');
    // category
   //doc[0].dataset.category == "fashion"
    
    doc[0].addEventListener("mouseover",function(){
       doc[0].classList.add("ncgr-is-visible")    
    });
   
    doc[0].addEventListener("mouseout",function(){
       doc[0].classList.remove("ncgr-is-visible")    
    });
})();
   