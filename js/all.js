window.onload=function(){
    var oUll=document.getElementById('oUl');
    var aLii=oUll.getElementsByTagName('li');
    function elastic(iTarget,obj){
        var iSpeed=0;
        var timer=null;
        var iLef=0;
        var start=obj.offsetLeft;
        clearInterval(obj.timer);
        obj.timer=setInterval(function(){
            iSpeed+=(iTarget-obj.offsetLeft)/5;
            iSpeed*=.7;
            iLef+=iSpeed;
            obj.style.left=start+Math.round(iLef)+Math.round(iSpeed)+'px';
            if(Math.round(iLef)==iTarget && Math.abs(iSpeed)<.5){
                clearInterval(obj.timer);
            }
        },30);
    };

    for(var i=0;i<aLii.length-1;i++){
        aLii[i].onmouseover=function(){
            elastic(this.offsetLeft,aLii[aLii.length-1]);
        }
    };


    /*美女轮播图*/
    var oUl = document.getElementById('ul');
    var oOl = document.getElementById('ol');
    var aDiv = oUl.getElementsByTagName('li');
    var aLi = oOl.getElementsByTagName('li')
    var oSpan1 = document.getElementById('span1');
    var oSpan2 = document.getElementById('span2');
    var timer1=null;
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
    timer1 = setInterval(yonghu,3000);
    oUl.onmouseover = function(){
        clearInterval(timer1);
    }
    oUl.onmouseout = function(){
        timer1 = setInterval(yonghu,1000);
    }
 /*   *//*小图标*//*
    var oTubiao = document.getElementById('tubiao');
    var aIimg = oTubiao.getElementsByTagName('img');
    *//* var timer = null;
   var x = 0;
    clearInterval(timer);
    timer = setInterval(function () {
        aImg[x].style.opacity=0;
        move(aImg[x], {opacity: 1})
        x++;
        if (x == aImg.length) {
            clearInterval(timer);
        }
    }, 1000)*//*
    //移入让物体从中心变大
    //先改变布局
    var arr = [];
    for (var i = 0; i < aIimg.length; i++) {
        arr.push({
            'l': aIimg[i].offsetLeft,
            't': aIimg[i].offsetTop
        })
    }

    for (var i = 0; i < aIimg.length; i++) {
        aIimg[i].style.position = 'absolute';
        aIimg[i].style.left = arr[i].l + 'px';
        aIimg[i].style.top = arr[i].t + 'px';
        aIimg[i].style.margin = 0;
    }


    for (var i= 1; i< aIimg.length; i++) {
        aIimg[i].onmouseover= function () {
            for(var i=0;i<aIimg.length;i++){
                aIimg[i].style.width =  aIimg[0].offsetWidth + 'px';
                aIimg[i].style.height = aIimg[0].offsetHeight + 'px';
                aIimg[i].style.left = arr[i].l + 'px';
                aIimg[i].style.top = arr[i].t + 'px';
                this.style.zIndex = 1;
            }
            this.style.width = aIimg[0].offsetWidth * 2 + 'px';
            this.style.height = aIimg[0].offsetHeight * 2+ 'px';
            this.style.left = this.offsetLeft - aIimg[0].offsetWidth /2 + 'px';
            this.style.top = this.offsetTop - aIimg[0].offsetWidth / 2 + 'px';
            this.style.zIndex = 999;
        }
        aIimg[i].onmouseout= function () {
            this.style.width =  aIimg[0].offsetWidth + 'px';
            this.style.height = aIimg[0].offsetHeight + 'px';
          *//*  aIimg[i].style.left = arr[i].l +'px';
            aIimg[i].style.top = arr[i].t+'px';*//*
        }
    }*/
    /*拖拽效果*/
    var oGuan=document.getElementById('guan');
    var oUlUl=document.getElementById('wang');
    var aLiLi=oUlUl.getElementsByTagName('li');
    var aImgg=oUlUl.getElementsByTagName('img');
    var divC= oGuan.offsetWidth/2;
    oUlUl.style.width=aLiLi.length*aLiLi[0].offsetWidth+'px';
    for(var i=0;i<aLiLi.length;i++){
        var oSpann=document.createElement('span');
        aLiLi[i].appendChild(oSpann);
    }
    //var aSpanan= oGuan.getElementsByTagName('span');
    oUlUl.onmousedown=function(ev){
        var oEvent=ev||event;
        var disX=oEvent.clientX-oUlUl.offsetLeft;
        document.onmousemove=function(ev){
            var oEvent=ev||event;
            var l=oEvent.clientX-disX;
            if(l>divC-(0 +.5)*aLiLi[0].offsetWidth){
                l=divC-(0 +.5)*aLiLi[0].offsetWidth;
            }
            if(l<divC-(aLiLi.length-1 +.5)*aLiLi[0].offsetWidth){
                l=divC-(aLiLi.length-1 +.5)*aLiLi[0].offsetWidth
            }
            setSize();
            oUlUl.style.left=l+'px';
        };
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        };
        return false;
    };
    oUlUl.style.left=divC-(1 +.5)*aLiLi[0].offsetWidth+'px';
    setSize();
    function setSize() {
        for (var i = 0; i < aLiLi.length; i++) {
            var l1 = Math.abs(divC - (oUlUl.offsetLeft + aLiLi[i].offsetLeft + aLiLi[i].offsetWidth / 2));
            var scale = (1 - l1 / 500).toFixed(2);
            (scale <= .5) && (scale = .5);
            //aSpan[i].innerHTML=scale;
            aImgg[i].style.width = scale * 520 + 'px';
            aImgg[i].style.height = scale * 358 + 'px';
            aImgg[i].style.marginLeft = -(aImgg[i].offsetWidth - 260) / 2 + 'px';
            aImgg[i].style.marginTop = -(aImgg[i].offsetHeight - 179) / 2 + 'px';
            aLiLi[i].style.zIndex = scale * 100000;
        }
    }

    /*球球运动*/
    function rnd(n,m){
        return parseInt(Math.random()*(m-n)+n);
    }
    var oPiao = document.getElementById('piao');
    var aDivv = oPiao.getElementsByTagName('div');
    //var timer=null;

    for(var i=0;i<aDivv.length;i++){
        aDivv[i].style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
        aDivv[i].style.left = 60*i+'px';
    }

    var speedX = 6;
    var speedY = 6;
    function show(obj){
        obj.timer=setInterval(function(){
            //obj.onmouseover=function(){
            speedY+=8;
            var l=document.documentElement.clientWidth - obj.offsetLeft;
            var  t=500;
            var x = obj.offsetLeft+speedX;
            var y =obj.offsetTop+speedY;
            if(x>=l){
                x=l;
                speedX*=-.8;
                speedY*=.8;
            }
            if(x<=0){
                x=0;
                speedX*=-.8;
                speedY*=.8;
            }
            if(y>=t){
                y=t;
                speedX*=.8;
                speedY*=-.8;
            }
            if( y<=0){
                y=0;
                speedX*=.8;
                speedY*=-.8;
            }
            obj.style.left =x+'px';
            obj.style.top = y+'px';

            if(Math.abs(speedX)<1)speedX=0;
            if(Math.abs(speedY)<1)speedY=0;
            if(speedX==0 && speedY==0 && Math.round(y)>=450){
                clearInterval(obj.timer);
            }

        },30);
        // }

    }
    show(aDivv[0]);
    show(aDivv[1]);
    show(aDivv[2]);
    show(aDivv[3]);
    show(aDivv[4]);
    show(aDivv[5]);
    show(aDivv[6]);
    show(aDivv[7]);
    show(aDivv[8]);
    show(aDivv[9]);

    //右边的小圆转圈运动
    function d2a(x){
        return x*180/Math.PI;
    }
    //角度转弧度
    function a2d(x){
        return x/180*Math.PI;
    }

    var oYuan=document.getElementById('yuan');
    var N=10;
    var R=oYuan.offsetWidth/2;
    for(var i=0;i<N;i++){
        var oApan=document.createElement('span');
        oApan.style.background='rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
        oYuan.appendChild(oApan);
    };
    var aApan=oYuan.children;
    var bSys=true;
    oYuan.onclick=function(){
        for(var i=0;i<aApan.length;i++){
            var a=360/N*i;
            if(bSys){
                doMove(aApan[i],a);
            }else{
                doMove(aApan[i],0);
            }
        }
        bSys=!bSys;
    };
    function doMove(obj,iTarget) {
        clearInterval(obj.timer);
        var R = oYuan.offsetWidth / 2;
        var a = 0;
        var start = obj.a || 0;
        var dis = iTarget - start;
        var time = 800;
        var count = Math.ceil(time / 30);
        var n = 0;

        obj.timer = setInterval(function () {
            n++;
            var a = 1 - n / count;
            var cur = start + dis * (1 - a * a * a);
            var l = R + R * Math.sin(a2d(cur));
            var t = R - R * Math.cos(a2d(cur));
            obj.a = cur;
            obj.style.left = l + 'px';
            obj.style.top = t + 'px';
            if (n == count) {
                clearInterval(obj.timer);
            }
        }, 30)
    };

    /*头部*/
    var oHeader = document.getElementById('header');
    var oPP = document.getElementById('pp');
    var timer = null;

    var str='这是一个长满了百合花的峡谷。百合花静静地开放着，水边、坡上、岩石旁、大树下，到处都有。它们不疯不闹，也无鲜艳的颜色，仿佛它们开放着，也就是开放着，全无一点别的心思。峡谷上空的阳光是明亮的，甚至是强烈的，但因为峡谷太深，阳光仿佛要走过漫长的时间。因此，照进峡谷，照到这些百合花时，阳光已经变得柔和了，柔和得像薄薄的、轻盈得能飘动起来的雨幕。';
    for(var i=0;i<str.length;i++){
        var oSpanS= document.createElement('span');
        oSpanS.innerHTML = str.charAt(i);
        oPP.appendChild(oSpanS);
    }

    var aSpanS= oPP.getElementsByTagName('span');

    var i=0;
    timer=setInterval(function(){
        aSpanS[i].style.display='inline-block';
        move(aSpanS[i],{opacity:1});
        i++;

        if(i==aSpanS.length){
            clearInterval(timer);
        }
    },200);

    /*进度条begin*/
    var oSkill = document.getElementById('skill');
    var aDivdiv= oSkill.getElementsByTagName('div');
   /* var oJin1 = document.getElementById('jin1');
    var oJin2 = document.getElementById('jin2');
    var oJin3 = document.getElementById('jin3');
    var oJin4 = document.getElementById('jin4');
    var oStrong1 = document.getElementById('strong1');
    var oStrong2 = document.getElementById('strong2');
    var oStrong3 = document.getElementById('strong3');
    var oStrong4 = document.getElementById('strong4');*/

for(var i=0;i<aDivdiv.length;i++){
    aDivdiv[i].onmouseover=function(){
        move( aDivdiv[0].children[0],{'width': 0.8*parseInt(parseInt(oSkill.offsetWidth))});
        move( aDivdiv[1].children[0],{'width':0.75*parseInt(parseInt(oSkill.offsetWidth)) });
        move( aDivdiv[2].children[0],{'width': 0.93*parseInt(parseInt(oSkill.offsetWidth)) });
        move( aDivdiv[3].children[0],{'width': 0.84*parseInt(parseInt(oSkill.offsetWidth)) });

        aDivdiv[0].children[1].innerHTML = '80%';
        aDivdiv[1].children[1].innerHTML = '75%';
        aDivdiv[2].children[1].innerHTML = '93%';
        aDivdiv[3].children[1].innerHTML = '84%';
    }
}
    /*进度条end*/

    /*翻页*/
    var oTwo = document.getElementById('two');
    var oThree = document.getElementById('three');
    var oFour = document.getElementById('four');

    var oFanYe = document.getElementById('fanye');
    var oPage1= oFanYe.querySelector('.page1');
    var oPage2= oFanYe.querySelector('.page2');
    var oFront= oPage1.querySelector('.front');
    var oBack= oPage1.querySelector('.back');

    var iNow=0;
    oTwo.onclick = oFanYe.onclick=function(){
        iNow++;
        oPage1.style.transition = '1s all ease';
        oPage1.style.transform='perspective(800px) rotateY(-180deg)';
    }

    oPage1.addEventListener('transitionend',function(){
        oPage1.style.transition = 'none';
        oPage1.style.transform='perspective(800px) rotateY(0deg)';

     /*   oFanYe.style.backgroundImage='url(../img/fan'+iNow%3+'.jpg)';
        oFront.style.backgroundImage='url(../img/fan'+iNow%3+'.jpg)';
        oBack.style.backgroundImage='url(../img/fan'+(iNow+1)%3+'.jpg)';
        oPage2.style.backgroundImage='url(../img/fan'+(iNow+1)%3+'.jpg)';*/
    },false)

    /*翻转*/
    var oBoxx=document.getElementById('boxx');
    var R=3;
    var C=3;
    var iNow=0;
    var ok=true;
    for (var r=0; r<R; r++){
        for (var c=0; c<C; c++){
            var oPage3=document.createElement('div');
            oPage3.innerHTML='<div class="preve"></div><div class="next"></div>';
            oPage3.className='page3';
            oBoxx.appendChild(oPage3);

            oPage3.style.width=oBoxx.offsetWidth/C+'px';
            oPage3.style.height=oBoxx.offsetHeight/R+'px';

            oPage3.style.left=oPage3.offsetWidth*c+'px';
            oPage3.style.top=oPage3.offsetWidth*r+'px';
            oPage3.children[0].style.backgroundPosition = -oPage3.offsetLeft+"px -"+oPage3.offsetTop+"px";
            oPage3.children[1].style.backgroundPosition = -oPage3.offsetLeft+"px -"+oPage3.offsetTop+"px";

            oPage3.c=c;
            oPage3.r=r;
        }
    }
    var aPage3=oBoxx.children;
    oBoxx.onclick=oThree.onclick=tabb;
    //setInterval(tab,500)
    function tabb(){
        if (!ok) return;
        ok=false;
        iNow++;
        for (var a=0; a<aPage3.length; a++){
            aPage3[a].style.transition = "1s all ease "+(aPage3[a].r+aPage3[a].c)*200+"ms";
            aPage3[a].style.transform = "perspective(800px) rotateY(-180deg)";
        }
    }
    aPage3[aPage3.length-1].addEventListener('transitionend',function(){
        for (var i = 0; i < aPage3.length; i++) {
            aPage3[i].style.transition=null;
            aPage3[i].style.transform = 'perspective(800px) rotateY(0deg)';

            oBoxx.style.backgroundImage='url(img/fan'+iNow%3+'.jpg)';
            aPage3[i].children[0].style.backgroundImage='url(../img/fan'+iNow%3+'.jpg)';
            aPage3[i].children[1].style.backgroundImage='url(../img/fan'+(iNow+1)%3+'.jpg)';
            ok=true;
        }
    },false);

    /*爆炸*/
    var oDiv3 = document.getElementById('div3');

    var R = 3;
    var C = 3;
    for(var r=0;r<R;r++){
        for(var c=0;c<C;c++){
            var oSpanan= document.createElement('span');
            oDiv3.appendChild(oSpanan);
            oSpanan.style.width=oDiv3.offsetWidth/C+'px';
            oSpanan.style.height=oDiv3.offsetHeight/R+'px';
            oSpanan.style.left=oSpanan.offsetWidth*c+'px';
            oSpanan.style.top=oSpanan.offsetHeight*r+'px';
            oSpanan.style.backgroundPosition=-oSpanan.offsetLeft+'px  -'+oSpanan.offsetTop+'px';
            //console.log( oSpanan.style.backgroundPosition);
            //oSpan.innerHTML = c+'|'+r;
        }
    }
    var aSpanann = oDiv3.children;

    var x=0;
    var y=0;
    var iNow=0;
    var bOk =true;
    oDiv3.onclick = oFour.onclick=function(){
        if(!bOk)return;
        bOk=false;
        iNow++;
        for(var i=0;i<aSpanann.length;i++){
            x=aSpanann[i].offsetLeft+aSpanann[i].offsetWidth/2-oDiv3.offsetWidth/2;
            y=aSpanann[i].offsetTop+aSpanann[i].offsetHeight/2-oDiv3.offsetHeight/2;
            aSpanann[i].style.transition='1s all ease';
            aSpanann[i].style.transform='translate('+x+'px,'+y+'px)  rotateX('+ rnd(-180,180)+'deg) rotateY('+rnd(-180,180)+'deg)';
            aSpanann[i].style.opacity = "0";
        }
    }

    aSpanann[0].addEventListener('transitionend',function(){
        for(var i=0;i<aSpanann.length;i++){
            aSpanann[i].style.transition='none';
            aSpanann[i].style.transform='translate(0px,0px)  rotateX(0deg) rotateY(0deg)';
            aSpanann[i].style.opacity = "1";

            aSpanann[i].style.backgroundImage='url(img/fan'+iNow%3+'.jpg)';

        }
        oDiv3.style.backgroundImage='url(img/fan'+(iNow+1)%3+'.jpg)';
        bOk=true;
    },false);

 /*   function rnd(n,m){
        return  parseInt(Math.random()*(m-n)+n);
    }*/

        /*3D图片环*/
        var oHuan = document.getElementById("huan");
        var aHLi = oHuan.children;
        var len = aHLi.length;

        //散开 360/len*index
        for(var i = 0; i < len; i++){
            var d = 360/len*i;
            aHLi[i].style.transition = "1s all ease "+200*(len-i)+"ms";
            aHLi[i].style.transform = "rotateY("+d+"deg) translateZ(300px)";
        }
        //关灯
    aHLi[0].addEventListener("transitionend",function(){
            setMove();
            setOpacity();
        },false);


        function setMove(){
            for(var i = 0; i < len; i++){
                aHLi[i].style.transition = "1s all ease";
            }
        }
        function clearMove(){
            for(var i = 0; i < len; i++){
                aHLi[i].style.transition = "none";
                console.log(aHLi[i].style.transition);
            }
        }


        function setOpacity(){
            for(var i = 0; i < len; i++){
                var d = Math.abs(360/len*i + y/10)%360;
                if(d > 180){
                    d = 360 - d;
                }
                d = (180 - d)/180;
                d < 0.3 && (d = 0.3);

                //aHLi[i].innerHTML = d.toFixed(2);
                aHLi[i].style.opacity = d;
            }
        }


        var timerr = null;
        var speedXX = 0;
        var speedYY = 0;
        var lastX = 0;
        var lastY = 0;

        var y = 0;//x轴
        var x = 150;//y轴
     /*   document.onmousedown = function(ev){
            clearMove();
            var disX = ev.clientX - y;
            var disY = ev.clientY - x;

            document.onmousemove = function(ev){
                y = ev.clientX - disX;
                x = ev.clientY - disY;

                //限定范围
                if(x > 600){
                    x = 600;
                } else if(x < -600){
                    x = -600;
                }
                oHuan.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)";


                //算速度
                speedXX = x - lastX;
                speedYY = y - lastY;
                lastX = x;
                lastY = y;

                setOpacity();
            };
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;

                clearInterval(timerr);
                timerr = setInterval(function(){

                    x += speedXX;
                    y += speedYY;

                    speedXX *= 0.8;
                    speedYY *= 0.8;

                    if(Math.abs(speedXX) < 1){
                        speedXX = 0;
                    }
                    if(Math.abs(speedYY) < 1){
                        speedYY = 0;
                    }

                    if(speedXX == 0 && speedYY == 0){
                        clearInterval(timerr);
                    }
                    oHuan.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)";

                },30);
            };
            return false;
        };
*/

    /*时钟*/

        var oShizhong= document.getElementById('shizhong');
        var oHour = oShizhong.querySelector('.hour');
        var oMi = oShizhong.querySelector('.mi');
        var oS = oShizhong.querySelector('.s');
        //var oCap = oShizhong.querySelector('.cap');

        function clockk(){
            var oDate = new Date();
            var iH= oDate.getHours();
            var iM= oDate.getMinutes();
            var iS = oDate.getSeconds();
            var iMs = oDate.getMilliseconds();

            oHour.style.transform ='rotate('+(iH*30+iM/60*30)+'deg)';
            oMi.style.transorm ='rotate('+(iM*6+iS/60*6)+'deg)';
            oS.style.transform ='rotate('+(iS*6+iMs/1000*6)+'deg)';
        }
        clockk();

        setInterval(clockk,30);

        for(var i=0;i<60;i++){
            var oZhong = document.createElement('span');
            oShizhong.appendChild(oZhong);

            if(i%5==0){
                oZhong.className = 'on';
                if(i==0){
                    oZhong.innerHTML = '<em>12</em>';
                }else{
                    oZhong.innerHTML = '<em>'+i/5+'</em>';
                }
                //oSpan.innerHTML = "<em>"+(i==0?12:i/5)+"</em>";
                oZhong.children[0].style.transform = 'rotate('+-i*6+'deg)';
            }
            oZhong.style.transform = 'rotate('+i*6+'deg)';
        };

    /*翻转复制*/
        var oZhuan = document.getElementById('zhuan');

        for(var i=0;i<4;i++){
            var oFu = document.createElement('img');
            oFu.className = 'img';
            oZhuan.appendChild(oFu);
            oFu.style.left=-oFu.offsetWidth*i+'px';
        }
        var aFu = oZhuan.children;
        var z= 0;
        oZhuan.onmouseover = function(){
            z++;
            aFu[z].style.transition='1s all ease';
            aFu[z].style.transform='translateX('+parseInt(aFu[0].offsetWidth)*z+'px)';

            if(z==4){
                aFu[z].style.transition='null';
                aFu[z].style.transform='translateX(0px)';
            }

        };

    var oMask = document.getElementById('mask');
    var oMask1= oMask.getElementsByTagName('div')[0];
    oMask.onmouseover = function(){
        oMask1.style.display='block';
    }
    /*移入并点击*/
    var oZuoYou = document.getElementById('zuoyou');
    var oZuo = document.getElementById('zuo');
    var oZhong = document.getElementById('zhong');
    var oYou = document.getElementById('you');

    oZuoYou.onclick=function(){
        oZhong.style.transform='perspective(800px) rotateY(-180deg) scale(-1,1) ';
        oZuo.style.transform='perspective(800px) rotateY(-180deg) scale(-1,1) translateX(-300px)';
        oYou.style.transform='perspective(800px) rotateY(-180deg) scale(-1,1) translateX(300px)';
    }


    /*超酷选项卡*/

      /*  var oFirstL = document.getElementById('first-l');
        var aTop = oFirstL.getElementsByTagName('li');
        var oFirstR = document.getElementById('first-r');
        var aBottom = oFirstR.getElementsByTagName('li');

        for(var i=0;i<aBottom.length;i++){
            aBottom[i].index = i;
            aBottom[i].onclick=function(){
                for(var i=0;i<aBottom.length;i++){
                    aTop[i].style.display='none';
                    aBottom[i].className='';
                }
                aTop[this.index].style.display='block';
                aBottom[this.index].className='on';
            }
        }

        var R = 4;
        var C = 7;
        for(var r=0;r<R;r++){
            for(var c=0;c<C;c++){
                var oXiao = document.createElement('span');
                for(var i=0;i<aTop.length;i++){
                    aTop[0].appendChild(oXiao);
                }

                oXiao.style.width=aTop[0].offsetWidth/C+'px';
                oXiao.style.height=aTop[0].offsetHeight/R+'px';
                oXiao.style.left=oXiao.offsetWidth*c+'px';
                oXiao.style.top=oXiao.offsetHeight*r+'px';
                oXiao.style.backgroundPosition=-oXiao.offsetLeft+'px  -'+oXiao.offsetTop+'px';
                // console.log(oXiao.style.backgroundPosition);
            }
        }

        var aXiao = oFirstL.getElementsByTagName('span');
        var x=0;
        var y=0;
        var iNow=0;
        var bOk =true;
        oFirstL.onclick = function(){
            if(!bOk)return;
            bOk=false;
            iNow++;
            for(var i=0;i< aXiao.length;i++){
                x= aXiao[i].offsetLeft+ aXiao[i].offsetWidth/2-oFirstL.offsetWidth/2;
                y= aXiao[i].offsetTop+ aXiao[i].offsetHeight/2-oFirstL.offsetHeight/2;
                //console.log(y);
                aXiao[i].style.transition='1s all ease';
                aXiao[i].style.transform='translate('+x+'px,'+y+'px)  rotateX('+rnd(-180,180)+'deg) rotateY('+rnd(-180,180)+'deg)';
                aXiao[i].style.opacity = "0";
            }
        }

        aXiao[0].addEventListener('transitionend',function(){
            for(var i=0;i<aXiao.length;i++){
                aXiao[i].style.transition='none';
                aXiao[i].style.transform='translate(0px,0px)  rotateX(0deg) rotateY(0deg)';
                aXiao[i].style.opacity = "1";

                aXiao[i].style.backgroundImage='url(../img/jia'+(iNow+1)%5+'.jpg)';

            }
            oFirstR.style.backgroundImage='url(../img/jia'+(iNow+2)%5+'.jpg)';
            bOk=true;
        },false)*/

        var oFirstL = document.getElementById('first-l');
        var aTop = oFirstL.getElementsByTagName('li');
        var oFirstR = document.getElementById('first-r');
        var aBottom = oFirstR.getElementsByTagName('li');

        for(var i=0;i<aBottom.length;i++){
            aBottom[i].index = i;
            aBottom[i].onclick=function(){
                for(var i=0;i<aBottom.length;i++){
                    aTop[i].style.display='none';
                    aBottom[i].className='';
                }
                aTop[this.index].style.display='block';
                aBottom[this.index].className='on';
            }
        }

        var R = 4;
        var C = 7;
        for(var r=0;r<R;r++){
            for(var c=0;c<C;c++){
                var oXiao = document.createElement('span');
                for(var i=0;i<aTop.length;i++){
                    aTop[0].appendChild(oXiao);
                }

                oXiao.style.width=aTop[0].offsetWidth/C+'px';
                oXiao.style.height=aTop[0].offsetHeight/R+'px';
                oXiao.style.left=oXiao.offsetWidth*c+'px';
                oXiao.style.top=oXiao.offsetHeight*r+'px';
                oXiao.style.backgroundPosition=-oXiao.offsetLeft+'px  -'+oXiao.offsetTop+'px';
                // console.log(oXiao.style.backgroundPosition);
            }
        }

        var aXiao = oFirstL.getElementsByTagName('span');
        var x=0;
        var y=0;
        var iNow=0;
        var bOk =true;
        oFirstL.onclick = function(){
            if(!bOk)return;
            bOk=false;
            iNow++;
            for(var i=0;i< aXiao.length;i++){
                x= aXiao[i].offsetLeft+ aXiao[i].offsetWidth/2-oFirstL.offsetWidth/2;
                y= aXiao[i].offsetTop+ aXiao[i].offsetHeight/2-oFirstL.offsetHeight/2;
                //console.log(y);
                aXiao[i].style.transition='1s all ease';
                aXiao[i].style.transform='translate('+x+'px,'+y+'px)  rotateX('+rnd(-180,180)+'deg) rotateY('+rnd(-180,180)+'deg)';
                aXiao[i].style.opacity = "0";
            }
        }

        aXiao[0].addEventListener('transitionend',function(){
            for(var i=0;i<aXiao.length;i++){
                aXiao[i].style.transition='none';
                aXiao[i].style.transform='translate(0px,0px)  rotateX(0deg) rotateY(0deg)';
                aXiao[i].style.opacity = "1";

                aXiao[i].style.backgroundImage='url(/img/jia'+(iNow+1)%5+'.jpg)';

            }
            oFirstR.style.backgroundImage='url(/img/jia'+(iNow+2)%5+'.jpg)';
            bOk=true;
        },false)

}
