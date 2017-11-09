(function (){
 'user strict';

 var doc = document.getElementsByClassName('hogehoge');
 doc[0].addEventListener("mouseover",function(){
    doc[0].classList.add("red")    
 });

 doc[0].addEventListener("mouseout",function(){
    doc[0].classList.remove("red")    
 });
})();

