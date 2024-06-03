//吉利上一步下一步
//历史记录
var historyBox = [];
//历史位置
var currentPic = 0;
//设置是否点击了上一页/下一页
var isGoPage=false;

var svgfilter='<svg width="0" height="0" viewBox="0 0 20000 20000" preserveAspectRatio="xMidYMid meet"><defs>'+
  '  <filter width="130.0%" filterUnits="userSpaceOnUse" id="drop-shadow" height="130.0%">'+
  '    <feGaussianBlur stdDeviation="4" in="SourceGraphic"></feGaussianBlur>'+
  '    <feColorMatrix type="matrix" values="0 0 0 0 0 '+
'			 0 0 0 0 0 '+
'			 0 0 0 0 1 '+
'			 0 0 0 1 0"></feColorMatrix>'+
'      <feMerge>'+
'        <feMergeNode></feMergeNode>'+
'        <feMergeNode in="SourceGraphic"></feMergeNode>'+
'      </feMerge>'+
'    </filter>'+
'  </defs></svg>';
/**<svg width="0" height="0" viewBox="0 0 20000 20000"
     preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter width="130.0%" filterUnits="userSpaceOnUse" id="drop-shadow" height="130.0%">
      <feGaussianBlur stdDeviation="4" in="SourceGraphic"/>
      <feColorMatrix type="matrix" values=
			"0 0 0 0 0 
			 0 0 0 0 0 
			 0 0 0 0 1 
			 0 0 0 1 0"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  </svg>**/
  
  /**
 * 获取跳转页面传过来的URL参数值
 * 
 * @author guowei
 * @param key
 * @returns
 */
function geturlValueByKey_index(key) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == key) {
			return pair[1];
		}
	}
	return (false);
}

function getsvgfilter(x,y){
	var defs = document.createElementNS("http://www.w3.org/2000/svg","defs");
	var filter = document.createElementNS("http://www.w3.org/2000/svg","filter");
	filter.setAttributeNS(null,"x",x);
	filter.setAttributeNS(null,"y",y);
	filter.setAttributeNS(null,"width","200%");
	filter.setAttributeNS(null,"height","200%");
	filter.setAttributeNS(null,"filterUnits","userSpaceOnUse");
	filter.setAttributeNS(null,"id","drop-shadow");

	var feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");
	feGaussianBlur.setAttributeNS(null,"stdDeviation","4");
	feGaussianBlur.setAttributeNS(null,"in","SourceGraphic");
	filter.appendChild(feGaussianBlur);

	var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix");
//	console.log(1);
	feColorMatrix.setAttributeNS(null,"type","matrix");
	// 20201030-粗线
	//feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 5 0 0 0 5 0");
	// 20201030-细线
	feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0");
	filter.appendChild(feColorMatrix);

	var feMerge = document.createElementNS("http://www.w3.org/2000/svg","feMerge");
	var feMergeNode1 = document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");
	var feMergeNode2 = document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");
	feMergeNode2.setAttributeNS(null,"in","SourceGraphic");
	feMerge.appendChild(feMergeNode1);
	feMerge.appendChild(feMergeNode2);
	filter.appendChild(feMerge);
	defs.appendChild(filter);
	return defs;
}
function getsvgfilter_chu(x,y){
	var defs = document.createElementNS("http://www.w3.org/2000/svg","defs");
	var filter = document.createElementNS("http://www.w3.org/2000/svg","filter");
	filter.setAttributeNS(null,"x",x);
	filter.setAttributeNS(null,"y",y);
	filter.setAttributeNS(null,"width","200%");
	filter.setAttributeNS(null,"height","200%");
	filter.setAttributeNS(null,"filterUnits","userSpaceOnUse");
	filter.setAttributeNS(null,"id","drop-shadow-chu");

	var feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");
	feGaussianBlur.setAttributeNS(null,"stdDeviation","4");
	feGaussianBlur.setAttributeNS(null,"in","SourceGraphic");
	filter.appendChild(feGaussianBlur);

	var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix");
//	console.log(1);
	feColorMatrix.setAttributeNS(null,"type","matrix");
	// 20201030-粗线
	feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 5 0 0 0 5 0");
	// 20201030-细线
	//feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0");
	filter.appendChild(feColorMatrix);

	var feMerge = document.createElementNS("http://www.w3.org/2000/svg","feMerge");
	var feMergeNode1 = document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");
	var feMergeNode2 = document.createElementNS("http://www.w3.org/2000/svg","feMergeNode");
	feMergeNode2.setAttributeNS(null,"in","SourceGraphic");
	feMerge.appendChild(feMergeNode1);
	feMerge.appendChild(feMergeNode2);
	filter.appendChild(feMerge);
	defs.appendChild(filter);
	return defs;
}

function sethistoryBox(to_href){
	if(to_href!= historyBox[historyBox.length-1] || historyBox.length === 0){
		historyBox.push(to_href);
	}
	currentPic = historyBox.length === 0?0:historyBox.length-1;
}

function go_left(){
	if(currentPic == undefined || currentPic ===0){
		return false;
	}
	currentPic--
	var to_href=historyBox[currentPic];
	document.getElementById("framec1").src=to_href;
	isGoPage=true;
	//historyBox.push(id);
}
function go_right(){
	if(currentPic === historyBox.length-1 || currentPic == undefined){
		return false;
	}
	currentPic++
	var to_href=historyBox[currentPic];
	document.getElementById("framec1").src=to_href;
	isGoPage=true;
}
function closedFB(){
	document.getElementById("feedbackdiv").style.display="none";
}
