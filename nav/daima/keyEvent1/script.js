var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null,
    flag=0;

window.onload = function(){
   
       var play = document.getElementById('play'),
       stop = document.getElementById('stop');
   //choujiang
   play.onclick = playFun;
   stop.onclick=stopFun;

   //jianpan
   document.onkeyup=function(event){
      event = event || window.event;
      console.log(event.keyCode);
      if (event.keyCode==13){
         if(flag==0){
            playFun();
            flag=1;
         }
         else{
            stopFun();
            flag=0;
         }
      }

   }
}
   function playFun(){
      
      var title = document.getElementById('title');
      var play = document.getElementById('play');
      clearInterval(timer);
      timer=setInterval(function(){
         var random = Math.floor(Math.random()*data.length);
         console.log(random);
         title.innerHTML=data[random];
      },50);
      play.style.background='#999';
   }
   //stop
    function stopFun(){
       clearInterval(timer);
       var play = document.getElementById('play');
       play.style.background='#036';
    }
