var Sys = (function(ua){ 
    var s = {}; 
    s.IE = ua.match(/msie ([\d.]+)/)?true:false; 
    s.Firefox = ua.match(/firefox\/([\d.]+)/)?true:false; 
    s.Chrome = ua.match(/chrome\/([\d.]+)/)?true:false; 
    s.IE6 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6))?true:false; 
    s.IE7 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 7))?true:false; 
    s.IE8 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 8))?true:false; 
    return s; 
})(navigator.userAgent.toLowerCase());
// modify by cjj 2021-01-21 改名避免与jquery重名
var getEleById = function (id) { 
    return document.getElementById(id); 
};
var Css = function(e,o){ 
    for(var i in o) 
    e.style[i] = o[i]; 
};
var Extend = function(destination, source) { 
    for (var property in source) { 
        destination[property] = source[property]; 
    } 
};
var Bind = function(object, fun) { 

    var args = Array.prototype.slice.call(arguments).slice(2); 
    return function() { 
        return fun.apply(object, args); 
    } 
};
var BindAsEventListener = function(object, fun) { 

    var args = Array.prototype.slice.call(arguments).slice(2); 
    return function(event) { 
        return fun.apply(object, [event || window.event].concat(args)); 
    } 
};
var CurrentStyle = function(element){ 
    return element.currentStyle || document.defaultView.getComputedStyle(element, null); 
};
function addListener(element,e,fn){ 
    //element.bind(fn,e); 
    element.addEventListener?element.addEventListener(e,fn,false):element.attachEvent("on" + e,fn); 
}; 
function removeListener(element,e,fn){ 
    element.removeEventListener?element.removeEventListener(e,fn,false):element.detachEvent("on" + e,fn) 
};
var Class = function(properties){ 
    var _class = function(){return (arguments[0] !== null && this.initialize && typeof(this.initialize) == 'function') ? this.initialize.apply(this, arguments) : this;}; 
    _class.prototype = properties; 
    return _class; 
};
var Resize =new Class({ 
    initialize : function(obj){ 
        this.obj = obj; 
        this.resizeelm = null; 
        this.fun = null; //记录触发什么事件的索引 
        this.original = []; //记录开始状态的数组 
        this.width = null; 
        this.height = null; 
        this.fR = BindAsEventListener(this,this.resize); 
        this.fS = Bind(this,this.stop);     
    }, 
    set : function(elm,direction){ 
        if(!elm)return; 
        this.resizeelm = elm; 
        addListener(this.resizeelm,'mousedown',BindAsEventListener(this, this.start, this[direction])); 
        return this; 
    }, 
    start : function(e,fun){ 
		console.log(e);
		document.getElementById("zhezhao").style.display="block"; 
		document.getElementById("divzhezhao").style.display="block";   
        this.fun = fun; 
        this.original = [parseInt(CurrentStyle(this.obj).width),parseInt(CurrentStyle(this.obj).height),parseInt(CurrentStyle(this.obj).left),parseInt(CurrentStyle(this.obj).top)];
        this.width = (this.original[2]||0) + this.original[0]; 
        this.height = (this.original[3]||0) + this.original[1]; 
        addListener(document,"mousemove",this.fR); 
        addListener(document,'mouseup',this.fS); 
    }, 
	resize: function (e) { 
		// wl.js中方法用于计算dialog中各级title的padding值
		activeCalcDialogSpanTitlePadding();
        this.fun(e); 
        Sys.IE?(this.resizeelm.onlosecapture=function(){this.fS()}):(this.resizeelm.onblur=function(){this.fS()}) 
    }, 
    stop : function(){ 
        removeListener(document, "mousemove", this.fR); 
        removeListener(document, "mousemove", this.fS); 
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();  

		document.getElementById("zhezhao").style.display="none";  
		document.getElementById("divzhezhao").style.display="none";   
    }, 
    up : function(e){ 
        this.height>e.clientY?Css(this.obj,{top:e.clientY + "px",height:this.height-e.clientY + "px"}):this.turnDown(e); 
    }, 
    down : function(e){ 
        e.clientY>this.original[3]?Css(this.obj,{top:this.original[3]+'px',height:e.clientY-this.original[3]+'px'}):this.turnUp(e);     
    }, 
    left : function(e){ 
        e.clientX<this.width?Css(this.obj,{left:e.clientX +'px',width:this.width-e.clientX + "px"}):this.turnRight(e);         
    }, 
    right : function(e){ 
        e.clientX>this.original[2]?Css(this.obj,{left:this.original[2]+'px',width:e.clientX-this.original[2]+"px"}):this.turnLeft(e)    ; 
    }, 
    leftUp:function(e){ 
        this.up(e);this.left(e); 
    }, 
    leftDown:function(e){ 
        this.left(e);this.down(e); 
    }, 
    rightUp:function(e){ 
        this.up(e);this.right(e); 
    }, 
    rightDown:function(e){ 
        this.right(e);this.down(e); 
    },                 
    turnDown : function(e){ 
        Css(this.obj,{top:this.height+'px',height:e.clientY - this.height + 'px'}); 
    }, 
    turnUp : function(e){ 
        Css(this.obj,{top : e.clientY +'px',height : this.original[3] - e.clientY +'px'}); 
    }, 
    turnRight : function(e){ 
        Css(this.obj,{left:this.width+'px',width:e.clientX- this.width +'px'}); 
    }, 
    turnLeft : function(e){ 
        Css(this.obj,{left:e.clientX +'px',width:this.original[2]-e.clientX+'px'});          
    }         
}); 
function TZdiv(){
    new Resize(getEleById('sub_info')).set(getEleById('rUp'),'up').set(getEleById('rDown'),'down').set(getEleById('rLeft'),'left').set(getEleById('rRight'),'right').set(getEleById('rLeftUp'),'leftUp').set(getEleById('rLeftDown'),'leftDown').set(getEleById('rRightDown'),'rightDown').set(getEleById('rRightUp'),'rightUp');
} 