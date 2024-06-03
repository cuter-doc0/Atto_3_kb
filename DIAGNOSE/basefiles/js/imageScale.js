// 获取dom
const container = document.querySelector('.scaleContainer');
const image = document.getElementById('image');
// 全局变量
let result,
    x,
    y,
    scale = 1,
    minScale = 0.1,
    maxScale = 10,
    isPointerdown = false, // 按下标识
    point = { x: 0, y: 0 }, // 第一个点坐标
    diff = { x: 0, y: 0 }, // 相对于上一次pointermove移动差值
    lastPointermove = { x: 0, y: 0 }; // 用于计算diff
    imgwz = {x: 0, y: 0};//图片缩放中心点


function showOrHideImg(event,type){
    event.stopPropagation();
    // console.log('event.target:',event.target.src,container,image);
    if (type === 'show') {
        image.src = event.target.src;
        container.style.display = 'flex';
        container.classList.add('scaleContainer', 'scaleContainer2');
       
    }else if(type==='hide'){
        if(event.target!=container) return;

        container.style.display = 'none';
        container.classList.remove('scaleContainer2');
        image.src = '';
        scale = 1;
    }
}
image.addEventListener('load', function(){
    // console.log('图片加载完成；')
    
    result = {width:image.naturalWidth, height:image.naturalHeight};
   
    image.style.height = window.innerHeight * 0.9 + 'px';    
    image.style.width = 'auto';   
    image.style.backgroundColor ='white';
    
    x = 0;
    y = 0;
    image.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(1)';
    
    // 拖拽查看
    // drag();
    // 滚轮缩放
    // wheelZoom();
});

// 拖拽查看
    // 绑定 pointerdown
    image.addEventListener('pointerdown', function (e) {
        isPointerdown = true;
        image.setPointerCapture(e.pointerId);
        point = { x: e.clientX, y: e.clientY };
        lastPointermove = { x: e.clientX, y: e.clientY };
    });
    // 绑定 pointermove
    image.addEventListener('pointermove', function (e) {
        if (isPointerdown) {
            const current1 = { x: e.clientX, y: e.clientY };
            diff.x = current1.x - lastPointermove.x;
            diff.y = current1.y - lastPointermove.y;
            lastPointermove = { x: current1.x, y: current1.y };
            x += diff.x;
            y += diff.y;
            image.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(' + scale + ')';
        }
        e.preventDefault();
    });
    // 绑定 pointerup
    image.addEventListener('pointerup', function (e) {
        if (isPointerdown) {
            isPointerdown = false;
        }
    });
    // 绑定 pointercancel
    image.addEventListener('pointercancel', function (e) {
        if (isPointerdown) {
            isPointerdown = false;
        }
    });
    
    // 监听鼠标移动事件
    image.addEventListener('mousemove', handleMouseMove);
    //image.addEventListener('mouseleave', handleMouseLeave);

function handleMouseMove(event) {
  // 检查鼠标是否在图片上
  const isMouseOnImage = event.target === image;
  
  // 获取图片的中心点坐标
  const imgRect = image.getBoundingClientRect();
  const centerX = imgRect.left + imgRect.width / 2;
  const centerY = imgRect.top + imgRect.height / 2;
  
  // 获取鼠标相对于图片的位置
  const mouseX = event.clientX - imgRect.left;
  const mouseY = event.clientY - imgRect.top;
  
  // 计算缩放中心点
  const scaleCenterX = isMouseOnImage ? mouseX : centerX;
  const scaleCenterY = isMouseOnImage ? mouseY : centerY;
  
  // 应用缩放操作到图片元素
  imgwz.x = scaleCenterX;
  imgwz.y = scaleCenterY
}

    function fnWheel(obj, fncc) {
        obj.onmousewheel = fn;
        if (obj.addEventListener) {
            obj.addEventListener('DOMMouseScroll', fn, false);
        }

        function fn(ev) {
            var oEvent = ev || window.event;
            var down = true;

            if (oEvent.detail) {
                down = oEvent.detail > 0
            } else {
                down = oEvent.wheelDelta < 0
            }

            if (fncc) {
                fncc.call(this, down, oEvent);
            }

            if (oEvent.preventDefault) {
                oEvent.preventDefault();
            }

            return false;
        }


    };
    fnWheel(image, function(down, oEvent) {

        var oldWidth = this.offsetWidth;
        var oldHeight = this.offsetHeight;
        var oldLeft = this.offsetLeft;
        var oldTop = this.offsetTop;

        var scaleX = (oEvent.clientX - oldLeft) / oldWidth; //比例
        var scaleY = (oEvent.clientY - oldTop) / oldHeight;

        if (down) {
            this.style.width = this.offsetWidth * 0.9 + "px";
            this.style.height = this.offsetHeight * 0.9 + "px";
        } else {
            this.style.width = this.offsetWidth * 1.1 + "px";
            this.style.height = this.offsetHeight * 1.1 + "px";
        }

        var newWidth = this.offsetWidth;
        var newHeight = this.offsetHeight;

        this.style.left = oldLeft - scaleX * (newWidth - oldWidth) + "px";
        this.style.top = oldTop - scaleY * (newHeight - oldHeight) + "px";
    });

// 高亮搜索关键词
function highLightKeyword(){
    const searchParams = window.location.search;
    var reg = new RegExp("(^|&)" + 'hightlight' + "=([^&]*)(&|$)"); // 构建一个含有目标参数的正则表达式对象
    if(!searchParams) return;      
    // let highLightKey = getParameter('hightlight');
    let highLightKey;
    var r = searchParams.substr(1).match(reg); // 匹配目标参数
    if (r != null) {
       // TODO:清理参数中为null的值 &&decodeURI (r[2]) != "null"
       highLightKey = decodeURI(r[2]); // unescape()解码，返回参数值
    } else {
       highLightKey = "";
    }
    let data = document.getElementsByTagName('body')[0].innerHTML;
    if(!highLightKey) return; 
    const replaceData_2 = data.replaceAll(highLightKey,'<span style="background-color: yellow;color:red;">'+highLightKey+'</span>')
    document.getElementsByTagName('body')[0].innerHTML = replaceData_2;
 }