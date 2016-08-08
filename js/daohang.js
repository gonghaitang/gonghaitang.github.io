window.onload=function(){
    var oUl=document.getElementById('oUl');
    var aLi=oUl.children;
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
    }

    for(var i=0;i<aLi.length-1;i++){
        aLi[i].onmouseover=function(){
            elastic(this.offsetLeft,aLi[aLi.length-1]);
        }
    }

}
