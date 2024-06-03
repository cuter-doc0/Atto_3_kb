/**  当前文件路径：DITA-OT\plugins\com.megalink.BYD\basefiles\js **/
/** 电气诊断步骤数据 **/
var dtcStepsObject = {
	stepsData : [],
	addStep : function(step) {
		console.log('记录当前步骤：' + step);
		if (step === undefined || step === null || step === '') return;
		this.stepsData.push(step);
	},
	previousStep : function() {
		// 为空时返回 undefined 
		var step = this.stepsData.pop();
		console.log('回到上一步骤：' + step);
		return step;
	},
	clear : function() {
		this.stepsData = [];
	},
	className : 'dtc-inactive'
}

/** 隐藏电气诊断信息 **/
function hideDtcInfo(obj){
  console.log('隐藏data-step:' + obj.getAttribute('data-step') + ';data-option:' + obj.getAttribute('data-option'));
  var obj_class = ' ' + obj.className + ' '; //获取 class 内容.
  if (obj_class.match(' '+dtcStepsObject.className+' ') === null) {
	obj_class = obj.className;
	var blank = (obj_class !== '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
	var added = obj_class + blank + dtcStepsObject.className;//组合原来的 class 和需要添加的 class.
	obj.className = added;//替换原来的 class.
  }
}

/** 显示电气诊断信息 **/
function showDtcInfo(obj){
  console.log('显示data-step:' + obj.getAttribute('data-step') + ';data-option:' + obj.getAttribute('data-option'));
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' ');//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  var removed = obj_class.replace(' '+dtcStepsObject.className+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

/** 回到上一步 **/
function gotoPreviousDtcStep() {
	var step = dtcStepsObject.previousStep();
	if (step !== undefined) {
		gotoDtcStep(step);
	}
}

/** 重新开始 **/
function gotoFirstDtcStep(step) {
	dtcStepsObject.clear();
	gotoDtcStep(step);
}

/**在当前页面中，切换到本锚点指定的步骤**/
function gotoDtcStep(step) {
	console.log('到步骤：' + step);
	if (step === undefined || step === '') {
		return;
	}
	var steps = document.getElementsByClassName("dtcprocess");
	for (var i = 0; i < steps.length; i++) {
		var data = steps[i].getAttribute('data-step');
		if (data === step) {
			showDtcInfo(steps[i]);
			var selectTags = steps[i].getElementsByTagName("SELECT");
			for (var j = 0; j < selectTags.length; j++) {
				// 初始化步骤选项
				selectTags[j][0].selected=true;
			}
		}else {
			hideDtcInfo(steps[i]);
		}
	}
}

function jumptoDtcStep(current_step, next_step) {
	dtcStepsObject.addStep(current_step);
	gotoDtcStep(next_step);
}

/** 按照当前步骤中的指定选项执行相关操作，包括跳到下一步、显示当前步骤中指定选项的相关信息 **/
function showDtcOptionOfStep(selectObj) {
	if (dtcStepsObject.bySystem) return;
	if (selectObj === null) return;
	var option = selectObj.value;
	if (option !== null && option.substr(0,5) === 'next-') {
		// 直接转到下一步
		var current_step = selectObj.getAttribute('data-current');
		dtcStepsObject.addStep(current_step);
		gotoDtcStep(option.substr(5));
		selectObj[0].selected=true;
		return;
	}
	if (selectObj.parentElement === null || selectObj.parentElement.parentElement === null || selectObj.parentElement.parentElement.parentElement === null 
		|| selectObj.parentElement.parentElement.parentElement.nextElementSibling === null){
		return;
	}
	// 显示当前步骤中指定选项的相关信息
	var div = selectObj.parentElement.parentElement.parentElement.nextElementSibling;
	var dtcOptions = div.getElementsByClassName("dtcstep");
	for (var i = 0; i < dtcOptions.length; i++) {
		var data = dtcOptions[i].getAttribute('data-option');
		if (data === option) {
			showDtcInfo(dtcOptions[i]);
		}else {
			hideDtcInfo(dtcOptions[i]);
		}
	}
}

/**切换到URL中锚点指定的步骤**/
window.onload = function initDtcStep() {
	var step = window.location.hash;
	if (step !== undefined && step !== '' && step !== '#') {
		gotoDtcStep(step.substring(1));
	}
}

// 20221115 2期，诊断优化
//展开全部按键触发的函数
function expandAll(){
	//1.展开全部步骤
    let expand = document.getElementsByClassName('dtcprocess');
    
	for( let i=0;i < expand.length ;i++){
		expand[i].className='otherclass1 dtcprocess otherclass2'
		};
	//2.不显示“上一步骤”与“重新开始”
	let flag = false;
	let stepBtn = document.getElementsByClassName('stepbtn');
	stepButton(flag,'stepbtn');
	//3.“是”与“否”显示效果改为有指向的
	let selectBut = document.getElementsByClassName('select');
	let selectdivBut = document.getElementsByClassName('selectdiv');
	let dtcStep = document.getElementsByClassName('dtcstep');

	stepButton(flag,'dtcstep');
	stepButton(flag,'select');

	let flag2 = true;
	stepButton(flag2,'selectdiv');
	pdfStepStyle(flag2,selectdivBut);
	//3.步骤跳转改为锚点跳转
	let aXref = document.getElementsByClassName('stepXref');
	stepButton(flag2,'stepXref');
	stepButton(flag,'xrefstep');
};

// //调整诊断步骤的步骤跳转
// function stepXref(flag){
// 	let aXref = document.getElementsByClassName('xrefstep');
// 	for (let i = 0; i < aXref.length; i++) {
// 		const itme = aXref[i];
// 		console.dir(itme)
// 		if (itme.href == 'javascript:;' ) {
// 			if (flag) {
// 				itme.classList.add('dtc-inactive');
// 				console.dir(itme.className)
// 			} else{
// 				itme.classList.remove('dtc-inactive');
// 			}
			
// 		}
// 	}
// }

//“展开全部”与“引导诊断”切换
function butSwitch(){
    let dtcBut1=document.getElementById('dtcbutton1')
    let dtcBut2=document.getElementById('dtcbutton2')
    //点击“展开全部”
	if(dtcBut1.className=='button'){
    dtcBut1.classList.add('dtc-inactive');
    dtcBut2.classList.remove('dtc-inactive');
    } else {
	//点击“引导诊断”
    dtcBut1.classList.remove('dtc-inactive');
    dtcBut2.classList.add('dtc-inactive');
	let flag = true;
	let stepBtn = document.getElementsByClassName('stepbtn');
	let selectBut = document.getElementsByClassName('select');
	let selectdivBut = document.getElementsByClassName('selectdiv');
	stepButton(flag,'stepbtn');
	stepButton(flag,'select');
	let flag2 = false;
	stepButton(flag2,'selectdiv');
	pdfStepStyle(flag2,selectdivBut);
	let aXref = document.getElementsByClassName('stepXref');
	stepButton(flag2,'stepXref');
	stepButton(flag,'xrefstep')
    }
};

//隐藏与显示
function stepButton(flag,classNameStr){
	let array = document.getElementsByClassName(classNameStr);
	if(flag){
		for( let i=0;i < array.length ;i++){
			array[i].classList.remove('dtc-inactive');
			};
	} else {
		for( let i=0;i < array.length ;i++){
			array[i].classList.add('dtc-inactive');
			};
	}
	
};

//展示步骤判断的信息
function pdfStepStyle(flag,selectdivButAll){
	for (let i = 0; i < selectdivButAll.length; i++) {
		let selectdivButval = selectdivButAll[i].parentElement.parentElement.parentElement.nextElementSibling;
		let dtcStep = selectdivButval.getElementsByClassName('dtcstep');
		
		for (let j = 0; j < dtcStep.length; j++) {
			
			if (selectdivButAll[i].getAttribute('value') === dtcStep[j].getAttribute('data-option')) {
				if (flag) {
					selectdivButAll[i].childNodes[1].innerHTML+=dtcStep[j].innerHTML;
				} else {
					selectdivButAll[i].childNodes[1].innerHTML=""
				}
				
			}
		}
		
		
	}
};