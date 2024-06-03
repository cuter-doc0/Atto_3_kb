function listDocuments(dataObj){
	var tables = document.getElementsByTagName("TABLE");
	var datahref=dataObj.getAttribute('data-href');
	if (datahref === null || tables === null) return;
	for (var i = 0; i < tables.length; i++){
		if (tables[i].getAttribute('data-href') === datahref) {
			tables[i].style.display='block';
			tables[i].onOff=true;
			tables[i].onmouseenter = function(){
				this.onOff = false;
			};
			tables[i].onmouseleave = function(){
				//如果离开，则执行。。
				if (this.onOff === false) {
					this.style.display='none';
				}
				if (oEvent && oEvent.stopPropagation) {
				  // this code is for Mozilla and Opera
				  oEvent.stopPropagation();
				 } else if (window.event) {
				  // this code is for IE
					window.event.cancelBubble = true;
				 }
			};
			var position = dataObj.firstElementChild.getBoundingClientRect();
            tables[i].style.position = 'fixed';
            tables[i].style.right = '10%';
            tables[i].style.top = '10%';
        } else {
			tables[i].style.display='none';
		}
	}
};



/****
This function is used to svg image click event.
    but except svg hotspot
Date : 2019-05-20
Add by Jessica Wan
***/
function svg_click(event, obj) {
    var isInsideA = false;
    var current = event.target;
    while(!isInsideA && current) {
       if (current.nodeName.toLowerCase() == "a"){
            isInsideA = true;
       }
       current = current.parentElement; 
    }
    var svgFixWidth = 608;
    if (!isInsideA) {
        var iframes = document.getElementsByTagName("iframe");
        var bodyWidth = document.body.clientWidth-20; //获取body可见区域大小， 减掉边框大小
        var viewBox = obj.attributes.viewBox.value; //获取SVG中viewBox属性中指定的width和Height
        var viewBoxWidth = viewBox.split(" ")[2] ;
        var viewBoxHeight = viewBox.split(" ")[3];
        
        var precent = viewBoxHeight/viewBoxWidth; //图片纵横比

        var svgFixHeight = obj.attributes.height? obj.attributes.height.value : viewBoxHeight;
        if (svgFixHeight.indexOf(".") !=-1){ //去除对应数值后的单位, 截图小数点前的整数
            svgFixHeight = svgFixHeight.substring(0, svgFixHeight.indexOf("."));
        }
        for (var i = 0; i < iframes.length; i++){
           var iframObj = iframes[i];
           var doc = iframObj.contentWindow.document.documentElement;
           if (obj == doc){
               var iframeWidth = iframObj.width;
               var iframeHeight = iframObj.height;
               if (iframeWidth < bodyWidth){
                   if (obj.attributes.width)
                        obj.attributes.width.value = "100%";
                   else{
                       obj.style.width="100%";
                   }
                    iframObj.width = bodyWidth;
                    iframObj.height = bodyWidth*precent;
               }
               else{
                   if (obj.attributes.width) {
                        obj.attributes.width.value = svgFixWidth ;
                   }else{
                        obj.style.width= svgFixWidth;
                   }
                    if (obj.attributes.height) {
                        obj.attributes.height.value = svgFixHeight;
                    }else{
                         obj.style.height = svgFixHeight;
                    }
                   obj.attributes.viewBox.value = "0 0 " +svgFixWidth +" " + svgFixHeight;
                   iframObj.width = svgFixWidth;
                   iframObj.height = svgFixHeight;
               }
               break;
           }
       }
    }
};