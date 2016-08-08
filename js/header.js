
window.onload=function(){
    var oHeader = document.getElementById('header');
    var oP = oHeader.getElementsByTagName('p')[0];
    var timer = null;

    var str='这是一个长满了百合花的峡谷。百合花静静地开放着，水边、坡上、岩石旁、大树下，到处都有。它们不疯不闹，也无鲜艳的颜色，仿佛它们开放着，也就是开放着，全无一点别的心思。峡谷上空的阳光是明亮的，甚至是强烈的，但因为峡谷太深，阳光仿佛要走过漫长的时间。因此，照进峡谷，照到这些百合花时，阳光已经变得柔和了，柔和得像薄薄的、轻盈得能飘动起来的雨幕。';
    for(var i=0;i<str.length;i++){
        var oSpan = document.createElement('span');
        oSpan.innerHTML = str.charAt(i);
        oP.appendChild(oSpan);
    }

    var aSpan = oP.getElementsByTagName('span');

    var i=0;
    timer=setInterval(function(){
        aSpan[i].style.display='inline-block';
        move(aSpan[i],{opacity:1});
        i++;

        if(i==aSpan.length){
            clearInterval(timer);
        }
    },200);

}

