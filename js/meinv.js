window.onload = function () {
    var oUl = document.getElementById('ul');
    var oOl = document.getElementById('ol');
    var aDiv = oUl.getElementsByTagName('li');
    var aLi = oOl.getElementsByTagName('li')
    var oSpan1 = document.getElementById('span1');
    var oSpan2 = document.getElementById('span2');
    var timer=null;
    //默认第二张图显示
    oUl.style.top = -aDiv[0].offsetHeight + 'px';

    var count = 0;
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function () {
            count = this.index;
            tab();

        }
    }

    //公共调用的tab
    function tab() {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className='';
        }
        aLi[count].className='ac';
        move(oUl, {'top': -aDiv[0].offsetHeight * count});
    }

    oSpan1.onclick = function () {
        count++;
        if(count==aLi.length){
            count=0;
        }
        tab();
    }

    oSpan2.onclick=yonghu;
    function yonghu(){
        count--;
        if(count==-1){
            count=aLi.length-1;
        }
        tab();
    }
    //用定时器让用户操作停，离开继续循环变化
    timer = setInterval(yonghu,1000);
    oUl.onmouseover = function(){
        clearInterval(timer);
    }
    oUl.onmouseout = function(){
        timer = setInterval(yonghu,1000);
    }
}
