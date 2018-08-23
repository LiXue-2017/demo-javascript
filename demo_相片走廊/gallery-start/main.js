var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  for (var i = 1; i <= 5; i++) {
  	var newImage=document.createElement('img');
  	newImage.setAttribute('src','images/pic'+i+'.jpg');
  	thumbBar.appendChild(newImage);
  	// 注意，只能用函数名，不能加括号
  	newImage.onclick=imgLarge;
  }

/* 放大被点击的小图片*/
  function imgLarge(e){
     var srcNow=e.target.getAttribute('src');
     displayedImage.setAttribute('src',srcNow);
  }
/* 使变亮/变暗的按钮起作用*/
btn.onclick = function(){
   var className=btn.getAttribute('class');
   if(className=='dark'){
   	btn.setAttribute('class','light');
    btn.textContent='Lighten';
   	//overlay.setAttribute('backgoundColor','rgba(0,0,0,0.5)');错误写法
   	overlay.style.backgroundColor='rgba(0,0,0,0.5)';
   }
   else{
    btn.setAttribute('class','dark');
    btn.textContent='Darken';
    //overlay.setAttribute('backgoundColor','rgba(0,0,0,0)');错误写法
    overlay.style.backgroundColor='rgba(0,0,0,0)';
   }
}
