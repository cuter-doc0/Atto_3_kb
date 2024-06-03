/**生成圆圈编号，01,02,03，。。。。10,11,12**/
   function padding(num, length) {
    for (var len = (num + "").length; length > len; len = num.length) {
        num = "0" + num;
    }
    return num;
}
let f=document.getElementsByName("diagonal");
let c=document.getElementsByClassName("oneTableLine");
  
function showMsg2(element ,index){
c[index].width=element.offsetWidth;
c[index].height=element.offsetHeight;
let ctx=c[index].getContext("2d");
ctx.beginPath();
ctx.lineWidth=1;
ctx.lineCap="butt";
ctx.strokeStyle="rgb(128, 128, 128)";
ctx.moveTo(0,0);
ctx.lineTo(element.offsetWidth,element.offsetHeight);
ctx.stroke();

  };

function custTopic() {
    var parents = document.getElementsByName("cust-num")
    for (var i = 0; parents.length > i; i++) {
        var childs = parents[i].getElementsByTagName("li")
        var index = 1
        for (var j = 0; childs.length > j; j++) {
            if (childs[j].parentNode != parents[i]){
                continue
            }
            var cust = "<span>" + padding(index++, 2) + "</span>" + childs[j].innerHTML
            childs[j].innerHTML = cust
        }
    };
    console.log('asasa');
    //加载对角线方法
    for (let index = 0; index < f.length; index++) {
        showMsg2(f[index] ,index);
        console.log('asasa2');
    }
}


//function tableLine(id, coordinate = [{ x: 1, y: 1 }], lineLength = 1) {
//        // 获取DOM节点
//        var canvasList = document.querySelectorAll(id);
//    
//        canvasList.forEach(canvas => {
//            // 构建二维画布
//            var context = canvas.getContext('2d');
//            // 获取画布的宽高
//            // 画布尺寸，用以后面连线定位坐标
//            var caWidth = canvas.width, caHeight = canvas.height;
//            // 每次执行方法之前，先清除画布
//            context.clearRect(0, 0, 500, 500);
//            var x1 = 0, y1 = 0;         // 起始点坐标
//    
//            // 只有一条对角线的情况
//            // width 和 height 应该都是乘以需要定位到的 宽高比例
//            var x2, y2;
//    
//            // 判断有几条连线
//            if (lineLength === 1) {
//                x2 = parseInt(caWidth * coordinate[0].x);
//                y2 = parseInt(caHeight * coordinate[0].y);
//    
//                // 确定坐标以后还是连线
//                context.moveTo(x1, y1);
//                context.lineTo(x2, y2);
//            } else {
//                // 循环连线
//                for (let i = 0; i < lineLength; i++) {
//                    x2 = parseInt(caWidth * coordinate[i].x);
//                    y2 = parseInt(caHeight * coordinate[i].y);
//                    // 确定坐标以后还是连线
//                    context.moveTo(x1, y1);
//                    context.lineTo(x2, y2);
//                }
//            }
//    
//            // 设置连线的颜色
//            context.strokeStyle = "rgb(128,128,128)";
//            context.lineWidth = 1.5;
//            // 连线
//            context.stroke();
//            // 头尾相接
//            context.closePath();
//    
//            // 虽然没什么用，但是清空画布很有用，没有他清空不了。
//            context.beginPath();
//            // 画布背景色
//            context.fillStyle = "rgb(255,233,217)";
//            // api (x, y, width, height)
//            context.fillRect(0, 0, 0, 10);
//            context.closePath();
//        })
//    }

    
    // 定义一个变量，用于传入函数节流的回调中
    function table() {
        // tableLine('#myCanvas1', [{ x: 0.48, y: 1 }, { x: 1, y: 0.56 }], 2);
        //tableLine('.oneTableLine');
        // tableLine('myCanvas2', [{x:0.88, y:1}, {x:1, y:0.46}], 2);
        for (let index = 0; index < f.length; index++) {
            showMsg2(f[index] ,index);
        }
    }
    table()
    
    // 再定义一个函数节流方法，来减少高频触发事件而优化性能
    function throttle(fn, time) {
        // 定义一个标记
        let flag = true;
        // 闭包
        return function (e) {
            if (!flag) return;
            flag = false;
            setTimeout(() => {
                fn.apply(this, arguments);
                flag = true;
            }, time)
        }
    }
    
    window.addEventListener('resize', throttle(table, 300))