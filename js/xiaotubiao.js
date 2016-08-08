window.onload = function () {
    var oTubiao = document.getElementById('tubiao');
    var aImg = oTubiao.getElementsByTagName('img');
    var timer = null;
    var x = 0;
    clearInterval(timer);
    timer = setInterval(function () {
        aImg[x].style.opacity=0;
        move(aImg[x], {opacity: 1})
        x++;
        if (x == aImg.length) {
            clearInterval(timer);
        }
    }, 1000)

    //移入让物体从中心变大
    //先改变布局
    var arr = [];
    for (var i = 0; i < aImg.length; i++) {
        arr.push({
            l: aImg[i].offsetLeft,
            t: aImg[i].offsetTop
        })
    }

    for (var i = 0; i < aImg.length; i++) {
        aImg[i].style.position = 'absolute';
        aImg[i].style.left = arr[i].l + 'px';
        aImg[i].style.top = arr[i].t + 'px';
        aImg[i].style.margin = 0;
    }


    for (var i= 1; i< aImg.length; i++) {
        aImg[i].onmouseover= function () {
            this.style.width = aImg[0].offsetWidth * 2 + 'px';
            this.style.height = aImg[0].offsetHeight * 2 + 'px';
            this.style.left = this.offsetLeft - aImg[0].offsetWidth / 2 + 'px';
            this.style.top = this.offsetTop - aImg[0].offsetWidth / 2 + 'px';
            this.style.zIndex = 999;
        }
        aImg[i].onmouseout = function () {
            for (var i = 1; i < aImg.length; i++) {
                aImg[i].style.width = 200 + 'px';
                aImg[i].style.height = aImg[0].offsetHeight + 'px';
                aImg[i].style.left = arr[i].l + 'px';
                aImg[i].style.top = arr[i].t + 'px';
            }
        }
    }
}
