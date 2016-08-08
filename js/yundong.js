window.onload=function(){
    var oGuan=document.getElementById('guan');
    var oUl=oGuan.children[0];
    var aLi=oUl.children;
    var aImg=oUl.getElementsByTagName('img');
    var divC= oGuan.offsetWidth/2;
    oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
    for(var i=0;i<aLi.length;i++){
        var oSpan=document.createElement('span');
        aLi[i].appendChild(oSpan);
    }
    var aSpan= oGuan.getElementsByTagName('span');
    oUl.onmousedown=function(ev){
        var oEvent=ev||event;
        var disX=oEvent.clientX-oUl.offsetLeft;
        document.onmousemove=function(ev){
            var oEvent=ev||event;
            var l=oEvent.clientX-disX;
            if(l>divC-(0 +.5)*aLi[0].offsetWidth){
                l=divC-(0 +.5)*aLi[0].offsetWidth;
            }
            if(l<divC-(aLi.length-1 +.5)*aLi[0].offsetWidth){
                l=divC-(aLi.length-1 +.5)*aLi[0].offsetWidth
            }
            setSize();
            oUl.style.left=l+'px';
        };
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        };
        return false;
    };
    oUl.style.left=divC-(1 +.5)*aLi[0].offsetWidth+'px';
    setSize();
    function setSize() {
        for (var i = 0; i < aLi.length; i++) {
            var l1 = Math.abs(divC - (oUl.offsetLeft + aLi[i].offsetLeft + aLi[i].offsetWidth / 2));
            var scale = (1 - l1 / 500).toFixed(2);
            (scale <= .5) && (scale = .5);
            //aSpan[i].innerHTML=scale;
            aImg[i].style.width = scale * 520 + 'px';
            aImg[i].style.height = scale * 358 + 'px';
            aImg[i].style.marginLeft = -(aImg[i].offsetWidth - 260) / 2 + 'px';
            aImg[i].style.marginTop = -(aImg[i].offsetHeight - 179) / 2 + 'px';
            aLi[i].style.zIndex = scale * 100000;
        }
    }
}
