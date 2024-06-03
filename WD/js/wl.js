
var params = {
	zoomVal:1,
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false,
	x:0,
	y:0,
	l:0,
	t:0,
	isDown:false
};
var dialog_params = {
	zoomVal:1,
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false,
	x:0,
	y:0,
	l:0,
	t:0,
	isDown:false
};

// dialog多语言内容配置
var dialogI18nTitles = [
	{
		lang: 'zh-cn',
		titles: {
			'INFO': '信息',
			'FBD': '保险盒图',
			'HLD': '线束布置图',
			'GPL': '接地点布置',
			'SP': '系统原理',
			'PSDD': '电源分布图',
			'AP': '关联关系',
			'EINF': '未发现元素ID',
			'AD1': '关联数据1',
			'AD2': '关联数据2',
			'AD3': '关联数据3',
			'LOAD': '正在加载... ...',
			'FULL': '全屏',
			'CFULL': '取消全屏',
			'ZI': '放大',
			'ZO': '缩小',
			'INIT': '初始化',
		}
	},
	{
		lang: 'en-us',
		titles: {
			'INFO': 'Information',
			'FBD': 'Fuse Box Diagram',
			'HLD': 'Harness Layout Diagram',
			'GPL': 'Grounding Point Layout',
			'SP': 'System Principle',
			'PSDD': 'Power Supply Distribution Diagram',
			'AP': 'Association Relationship',
			'EINF': 'Element ID not found',
			'AD1': 'Associated Data 1',
			'AD2': 'Associated Data 2',
			'AD3': 'Associated Data 3',
			'LOAD': 'Loading... ...',
			'FULL': 'Full-screen',
			'CFULL': 'Cancel Full-screen',
			'ZI': 'Zoom In',
			'ZO': 'Zoom Out',
			'INIT': 'Init',
		}
	},
	{
		lang: 'de',
		titles: {
			'INFO': 'Informationen',
			'FBD': 'Schaltplan Sicherungskasten',
			'HLD': 'Kabelstrang – Layout-Diagramm',
			'GPL': 'Erdungspunkt – Layout',
			'SP': 'Prinzip des Systems',
			'PSDD': 'Stromverteilungsplan',
			'AP': 'Zuordnungsbeziehung',
			'EINF': 'Element-ID nicht gefunden',
			'AD1': 'Zugeordnete Daten 1',
			'AD2': 'Zugeordnete Daten 2',
			'AD3': 'Zugeordnete Daten 3',
			'LOAD': 'Laden... ...',
			'FULL': 'Vollbildschirm',
			'CFULL': 'Vollbildschirm beenden',
			'ZI': 'Vergrößern',
			'ZO': 'Verkleinern',
			'INIT': 'Init',
		}
	},
	{
		lang: 'ru',
		titles: {
			'INFO': 'Информация',
			'FBD': 'Схема блока предохранителей',
			'HLD': 'Схема расположения жгутов электропроводки',
			'GPL': 'Схема расположения точек подключения массы',
			'SP': 'Принцип работы системы',
			'PSDD': 'Схема распределения электропитания',
			'AP': 'Отношение ассоциации',
			'EINF': 'Идентификатор элемента не найден',
			'AD1': 'Связанные данные 1',
			'AD2': 'Связанные данные 2',
			'AD3': 'Связанные данные 3',
			'LOAD': 'Идет загрузка... ...',
			'FULL': 'Во весь экран',
			'CFULL': 'Выйти из полноэкранного режима',
			'ZI': 'Увеличить',
			'ZO': 'Уменьшить',
			'INIT': 'Init',
		}
	},
	{
		lang: 'es',
		titles: {
			'INFO': 'Información',
			'FBD': 'Diagrama de caja de fusibles',
			'HLD': 'Diagrama de trazado del mazo de cables',
			'GPL': 'Trazado del punto de conexión a masa',
			'SP': 'Principio del sistema',
			'PSDD': 'Diagrama de distribución de la fuente de alimentación',
			'AP': 'Relación de asociación',
			'EINF': 'No se encontró el ID de elemento',
			'AD1': 'Datos asociados 1',
			'AD2': 'Datos asociados 2',
			'AD3': 'Datos asociados 3',
			'LOAD': 'Cargando... ...',
			'FULL': 'Pantalla completa',
			'CFULL': 'Cancelar la pantalla completa',
			'ZI': 'Acercar',
			'ZO': 'Alejar',
			'INIT': 'Init',
		}
	},
	{
		lang: 'fr',
		titles: {
			'INFO': 'Information',
			'FBD': 'Schéma de la boîte à fusibles',
			'HLD': 'Schéma de disposition du faisceau',
			'GPL': 'Disposition du point de mise à la masse',
			'SP': 'Principe de fonctionnement du système',
			'PSDD': "Schéma de distribution d'alimentation électrique",
			'AP': "Relation d'association",
			'EINF': "ID d'élément introuvable",
			'AD1': 'Données associées 1',
			'AD2': 'Données associées 2',
			'AD3': 'Données associées 3',
			'LOAD': 'Chargement... ...',
			'FULL': 'Mode plein écran',
			'CFULL': 'Annuler Plein écran',
			'ZI': 'Zoom avant',
			'ZO': 'Zoom arrière',
			'INIT': 'Init',
		}
	},
	{
		lang: 'hu',
		titles: {
			'INFO': 'Információ',
			'FBD': 'Biztosítékdoboz diagramja',
			'HLD': 'Kábelköteg-elrendezési diagram',
			'GPL': 'Földelési pont elrendezése',
			'SP': 'A rendszer alapelve',
			'PSDD': 'Tápellátás-elosztási diagram',
			'AP': 'Hozzárendelési kapcsolat',
			'EINF': 'Az elemazonosító nem található',
			'AD1': '1. hozzárendelt adat',
			'AD2': '2. hozzárendelt adat',
			'AD3': '3. hozzárendelt adat',
			'LOAD': 'Betöltés... ...',
			'FULL': 'Teljes képernyő',
			'CFULL': 'Teljes képernyő bezárása',
			'ZI': 'Nagyítás',
			'ZO': 'Kicsinyítés',
			'INIT': 'Init',
		}
	},
	{
		lang: 'pt',
		titles: {
			'INFO': 'Informação',
			'FBD': 'Diagrama da caixa de fusíveis',
			'HLD': 'Diagrama do esquema de cablagem',
			'GPL': 'Esquema do ponto de ligação à massa',
			'SP': 'Princípio do sistema',
			'PSDD': 'Diagrama de distribuição da fonte de alimentação',
			'AP': 'Relação de associação',
			'EINF': 'ID de elemento não encontrado',
			'AD1': 'Dados associados 1',
			'AD2': 'Dados associados 2',
			'AD3': 'Dados associados 3',
			'LOAD': 'A carregar... ...',
			'FULL': 'Ecrã inteiro',
			'CFULL': 'Cancelar ecrã inteiro',
			'ZI': 'Aumentar o zoom',
			'ZO': 'Reduzir o zoom',
			'INIT': 'Init',
		}
	},
	{
		lang: 'it',
		titles: {
			'INFO': 'Informazioni',
			'FBD': 'Schema della scatola dei fusibili',
			'HLD': 'Schema di disposizione del cablaggio',
			'GPL': 'Disposizione del punto di messa a terra',
			'SP': 'Principio di funzionamento del sistema',
			'PSDD': "Schema di distribuzione dell'alimentazione",
			'AP': 'Rapporto associazione',
			'EINF': 'ID elemento non trovato',
			'AD1': 'Dati associati 1',
			'AD2': 'Dati associati 2',
			'AD3': 'Dati associati 3',
			'LOAD': 'Caricamento in corso... ...',
			'FULL': 'Schermo intero',
			'CFULL': 'Annulla la visualizzazione a schermo intero',
			'ZI': 'Ingrandisci',
			'ZO': 'Riduci',
			'INIT': 'Init',
		}
	},
	{
		lang: 'th',
		titles: {
			'INFO': 'ข้อมูล',
			'FBD': 'แผนภาพกล่องฟิวส์',
			'HLD': 'แผนภาพชุดสายไฟ',
			'GPL': 'แผนผังจุดกราวด์',
			'SP': 'หลักการของระบบ',
			'PSDD': 'แผนภาพการกระจายไฟฟ้า',
			'AP': 'ความเกี่ยวข้อง',
			'EINF': 'ไม่พบ ID ขององค์ประกอบ',
			'AD1': 'ข้อมูลเชื่อมโยง1',
			'AD2': 'ข้อมูลเชื่อมโยง2',
			'AD3': 'ข้อมูลเชื่อมโยง3',
			'LOAD': 'กำลังโหลด... ...',
			'FULL': 'เต็มหน้าจอ',
			'CFULL': 'ยกเลิกจอเต็ม',
			'ZI': 'ซูมเข้า',
			'ZO': 'ซูมออก',
			'INIT': 'Init',
		}
	},
	{
		lang: 'ja',
		titles: {
			'INFO': '情報',
			'FBD': 'ヒューズボックス',
			'HLD': 'ハーネス布置図',
			'GPL': 'アース接続ポイント布置',
			'SP': 'システム原理',
			'PSDD': '電源配布図',
			'AP': '関連関係',
			'EINF': '要素ID未発見',
			'AD1': '関連データ１',
			'AD2': '関連データ２',
			'AD3': '関連データ３',
			'LOAD': 'ロード中...',
			'FULL': '全画面表示',
			'CFULL': '全画面表示キャンセル',
			'ZI': 'ズームイン',
			'ZO': 'ズームアウト',
			'INIT': 'Init',
		}
	},
	{
		lang: 'ko',
		titles: {
			'INFO': '정보',
			'FBD': '퓨즈함 도면',
			'HLD': '하니스 배치도',
			'GPL': '접지포인트 배정',
			'SP': '시스템 원리',
			'PSDD': '전원 분포도',
			'AP': '관련관계',
			'EINF': '미발견 요소ID',
			'AD1': '관련 데이터1',
			'AD2': '관련 데이터2',
			'AD3': '관련 데이터3',
			'LOAD': '로딩중……',
			'FULL': '전체 화면',
			'CFULL': '전체 화면 취소',
			'ZI': '확대',
			'ZO': '축소',
			'INIT': 'Init',
		}
	},{
                lang: 'tr',
                titles: {
                        'INFO': 'Bilgi',
                        'FBD': 'Sigorta Kutusu Şeması',
                        'HLD': 'Kablo Demeti Yerleşim Şeması',
                        'GPL': 'Topraklama Noktası Düzeni',
                        'SP': 'Sistem İlkesi',
                        'PSDD': 'Güç Kaynağı Dağıtım Şeması',
                        'AP': 'Bağlantı İlişkisi',
                        'EINF': 'Öge Kimliği bulunamadı',
                        'AD1': 'İlişkili Veriler 1',
                        'AD2': 'İlişkili Veriler 2',
                        'AD3': 'İlişkili Veriler 3',
                        'LOAD': 'Yükleniyor...',
                        'FULL': 'Tam ekran',
                        'CFULL': 'Tam Ekran İptal Et',
                        'ZI': 'Yakınlaştır',
                        'ZO': 'Uzaklaştır',
                        'INIT': 'Başlat',
                }
        },
        {
                lang: 'id',
                titles: {
                        'INFO': 'Informasi',
                        'FBD': 'Diagram Kotak Sekering',
                        'HLD': 'Diagram Tata Letak Harnes',
                        'GPL': 'Tata Letak Titik Pembumian',
                        'SP': 'Prinsip Sistem',
                        'PSDD': 'Diagram Distribusi Catu Daya',
                        'AP': 'Hubungan Asosiasi',
                        'EINF': 'ID elemen tidak ditemukan',
                        'AD1': 'Data Terkait 1',
                        'AD2': 'Data Terkait 2',
                        'AD3': 'Data Terkait 3',
                        'LOAD': 'Memuat... ...',
                        'FULL': 'Layar Penuh',
                        'CFULL': 'Batalkan Layar penuh',
                        'ZI': 'Perbesar',
                        'ZO': 'Perkecil',
                        'INIT': 'Inisialisasi',
                }
        },
		{
			lang: 'pl',
			titles: {
				'INFO': 'Informacje',
				'FBD': 'Schemat skrzynki bezpieczników',
				'HLD': 'Schemat układu wiązki przewodów',
				'GPL': 'Układ punktu uziemienia',
				'SP': 'Zasada systemowa',
				'PSDD': 'Schemat dystrybucji zasilania',
				'AP': 'Relacja stowarzyszenia',
				'EINF': 'Nie znaleziono identyfikatora elementu',
				'AD1': 'Powiązane dane 1',
				'AD2': 'Powiązane dane 2',
				'AD3': 'Powiązane dane 3',
				'LOAD': 'Memuat……',
				'FULL': 'Tryb pełnoekranowy',
				'CFULL': 'Anuluj tryb pełnoekranowy',
				'ZI': 'Powiększ',
				'ZO': 'Pomniejsz',
				'INIT': 'Zainicjuj',
			}
		},{
                lang: 'el',
                titles: {
                        'INFO': 'Πληροφορίες',
                        'FBD': 'Διάγραμμα ασφαλειοθήκης',
                        'HLD': 'Διάγραμμα διάταξης καλωδίωσης',
                        'GPL': 'Διάταξη σημείου γείωσης',
                        'SP': 'Αρχή συστήματος',
                        'PSDD': 'Διάγραμμα διανομής τροφοδοσίας ρεύματος',
                        'AP': 'Σχέση συνδέσμου',
                        'EINF': 'Το αναγνωριστικό στοιχείου δεν βρέθηκε',
                        'AD1': 'Σχετικά δεδομένα 1',
                        'AD2': 'Σχετικά δεδομένα 2',
                        'AD3': 'Σχετικά δεδομένα 3',
                        'LOAD': 'Φόρτωση... ...',
                        'FULL': 'Πλήρης οθόνη',
                        'CFULL': 'Ακύρωση πλήρους οθόνης',
                        'ZI': 'Μεγέθυνση',
                        'ZO': 'Σμίκρυνση',
                        'INIT': 'Init',
                }
        },{
                lang: 'et',
                titles: {
                        'INFO': 'Teave',
                        'FBD': 'Kaitsmekarbi skeem',
                        'HLD': 'Juhtmestiku paigutuse skeem',
                        'GPL': 'Maanduspunkti paigutus',
                        'SP': 'Süsteemi põhimõte',
                        'PSDD': 'Toitesüsteemi jaotusskeem',
                        'AP': 'Assotsiatsioonisuhe',
                        'EINF': 'Elemendi ID-d ei leitud',
                        'AD1': 'Seotud andmed 1',
                        'AD2': 'Seotud andmed 2',
                        'AD3': 'Seotud andmed 3',
                        'LOAD': 'Laadimine... ...',
                        'FULL': 'Täisekraan',
                        'CFULL': 'Tühista täisekraan',
                        'ZI': 'Suurenda',
                        'ZO': 'Vähenda',
                        'INIT': 'Algne',
                }
        },{
                lang: 'ro',
                titles: {
                        'INFO': 'Informații',
                        'FBD': 'Diagramă cutie de siguranțe',
                        'HLD': 'Diagramă de dispunere a cablajelor',
                        'GPL': 'Dispunere punct de împământare',
                        'SP': 'Principiul sistemului',
                        'PSDD': 'Diagramă cu distribuția sursei de alimentare',
                        'AP': 'Relație de asociere',
                        'EINF': 'ID-ul elementului nu a fost găsit',
                        'AD1': 'Date asociate 1',
                        'AD2': 'Date asociate 2',
                        'AD3': 'Date asociate 3',
                        'LOAD': 'Se încarcă... ...',
                        'FULL': 'Ecran complet',
                        'CFULL': 'Anulați modul Ecran complet',
                        'ZI': 'Mărire',
                        'ZO': 'Micșorare',
                        'INIT': 'Inițializare',
                }
        },{
                lang: 'lv',
                titles: {
                        'INFO': 'Informācija',
                        'FBD': 'Drošinātāju kārbas diagramma',
                        'HLD': 'Vadu izkārtojuma diagramma',
                        'GPL': 'Zemējuma punkta izkārtojums',
                        'SP': 'Sistēmas princips',
                        'PSDD': 'Barošanas avota sadales shēma',
                        'AP': 'Asociācijas saistība',
                        'EINF': 'Elementa ID nav atrasts',
                        'AD1': 'Saistītie dati 1',
                        'AD2': 'Saistītie dati 2',
                        'AD3': 'Saistītie dati 3',
                        'LOAD': 'Notiek ielāde... ...',
                        'FULL': 'Pilnekrāna režīms',
                        'CFULL': 'Atcelt pilnekrāna režīmu',
                        'ZI': 'Pietuvināt',
                        'ZO': 'Attālināt',
                        'INIT': 'Init',
                }
        },{
                lang: 'lt',
                titles: {
                        'INFO': 'Informacija',
                        'FBD': 'Saugiklių dėžutės schema',
                        'HLD': 'Diržų išdėstymo schema',
                        'GPL': 'Įžeminimo taško išdėstymas',
                        'SP': 'Sistemos principas',
                        'PSDD': 'Maitinimo šaltinio paskirstymo schema',
                        'AP': 'Asociacijos santykiai',
                        'EINF': 'Elemento ID nerastas',
                        'AD1': 'Susiję duomenys 1',
                        'AD2': 'Susiję duomenys 2',
                        'AD3': 'Susiję duomenys 3',
                        'LOAD': 'Įkeliama... ...',
                        'FULL': 'Per visą ekraną',
                        'CFULL': 'Atšaukti viso ekrano režimą',
                        'ZI': 'Priartinti',
                        'ZO': 'Nutolinti',
                        'INIT': 'Init',
                }
        }

];
// 文档当前语言dialog国际化title内容
var currentDialogI18n;

//数据json
var datas={

}
var collapseTwoIsHidden=false;
function sethistoryBox(to_href){
	parent.sethistoryBox(to_href);
}
function go_left(){
	parent.go_left();
}
function go_right(){
	parent.go_right();
}
var printurl="";
var printW="";



/**
 * 获取跳转页面传过来的URL参数值
 *
 * @author guowei
 * @param key
 * @returns
 */
function geturlValueByKey(key) {
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

/**
 * dialog多语言内容初始化
 *
 * @author yangyi
 * @param
 * @returns
 */
function dialogI18nInit() {
	var lang = document.querySelector('html')['lang'] && document.querySelector('html')['lang'].toLowerCase();
    var currentI18n; 
    // 遍历获取当前语言的弹窗title国际化
    dialogI18nTitles.forEach(function (item, index) { 
        if (item.lang === lang) {
            currentI18n = item;
        }
	})
    // 如果不存在，则默认使用英文title
    if (currentI18n) {
        currentDialogI18n = currentI18n.titles
    } else {
        dialogI18nTitles.forEach(function (item, index) {
            if (item.lang === 'en-us') {
                currentDialogI18n = item.titles;
            }
        })
	}
}

/**
 * svg加载,初始化
 *
 * @author gcy
 * @param
 * @returns
 */

function svgHandle(svgobj){
	var SVGDocument = svgobj.contentDocument;
	var s = SVGDocument.querySelector("svg");
	var svgobj_id = svgobj.getAttribute("id");
	var movediv=document.getElementById("movediv");

	if(s==null){
		return false;
	}
	// cjj 2021-02-05 替换逗号为空格
	var viewBoxstr=s.getAttribute("viewBox").replace(',', ' ').split(" ");
	s.appendChild(getsvgfilter(viewBoxstr[0],viewBoxstr[1]));
	s.appendChild(getsvgfilter_chu(viewBoxstr[0],viewBoxstr[1]));
	//判断是否存宽高属性，如果没有设置ViewBox的款高到SVG上
	if(s.getAttribute("height")==null){
		//console.log(s.getAttribute("viewBox"));
		s.setAttribute("width",Number(viewBoxstr[2])+"px");
		s.setAttribute("height",Number(viewBoxstr[3])+"px");
	}
	printW=s.getAttribute("width");

	SVGDocument.oncontextmenu=function(e){
		//e.preventDefault();
		return false;
	};
	svgobj.oncontextmenu=function(e){
		//e.preventDefault();
		return false;
	};
	SVGDocument.onmouseout =function(e){
		//params.isDown=false;
	};
	window.onselectstart=function(){
		return document.getElementById('viewerContainer') ? true : false;
	};
	svgobj.onselectstart=function(){
		return false;
	};
	SVGDocument.onselectstart=function(){
		return false;
	};
	//滚动缩放增加
	// modified by yangyi:修改事件绑定机制，用于在svg图上滚动导致同步整个html滑动效果
	SVGDocument.addEventListener('mousewheel',function(event){
		event.preventDefault();
		setScrollUpOrDowm(event,"svg","");
		// return  false;
	},{passive:false});
	//鼠标按下事件
	SVGDocument.onmousedown = function(e) {

		//document.getElementById("zhezhao").style.display="block";
		//获取x坐标和y坐标
		params.x = e.screenX;
		params.y = e.screenY;
		//获取左部和顶部的偏移量
		params.l = svgobj.offsetLeft;
		params.t = svgobj.offsetTop;
		//开关打开
		params.isDown = true;
		//设置样式
		//SVGDocument.setAttribute("cursor", "move");
		var sdoc = SVGDocument.querySelector("svg");
		sdoc.setAttribute("cursor", "pointer");
	};
	//鼠标移动
	SVGDocument.onmousemove = function(ev) {
		var e=ev||event;
		//console.log("in--"+params.isDown);
		if (params.isDown == false) {
			return;
		}
		//获取x和y
		var nx = e.screenX;
		var ny = e.screenY;
		//计算移动后的左偏移量和顶部的偏移量
		var nl = nx - (params.x - params.l);
		var nt = ny - (params.y - params.t);
		svgobj.style.left = nl + 'px';
		svgobj.style.top = nt + 'px';
	};
	//鼠标抬起事件
	SVGDocument.onmouseup = function() {
		//开关关闭
		params.isDown = false;
		var sdoc = SVGDocument.querySelector("svg");
		sdoc.setAttribute("cursor", "default");
		//document.getElementById("zhezhao").style.display="none";
	};
	//设置数据
	setSvgAtt(SVGDocument);
	//定义控件事件
	gTagHandle(SVGDocument,svgobj_id);

	//判断是否有表格，如果有加入表格事件
	if(document.getElementById("tablediv").innerHTML.indexOf("table")!=-1){
		//表格事件
		initTable(SVGDocument);
	}

	var selectstr=geturlValueByKey("selectstr");
	console.log("selectstr="+selectstr);
	selectstr=unescape(selectstr);
	console.log("selectstr11="+selectstr);
	var isfrist=true;
	if(selectstr!=null&&selectstr!=""){
		console.log("selectstr11=innnnnnnn");
		var texts = SVGDocument.getElementsByTagName('text');
		clearHighlight_fill(SVGDocument);
		for (var x = 0; x < texts.length; x++) {
			var o = texts[x];
			if (myTrim(selectstr) == myTrim(o.textContent)) {

				console.log(myTrim(selectstr)+"==="+myTrim(o.textContent));
				if(isfrist){
					settextshow(o);
					isfrist=false;
				}
				// cjj 2021-02-05 从设置Presentation Attribute调整为设置style中的对应属性，后者优先级高，比Presentation Attribute、class优先级高
				// cjj 2021-02-05 调整为使用标准的style属性
				o["style"]["fill"] = "red";
				// cjj 2021-02-04 将选中的居中显示
				var clientRect = o.getBoundingClientRect();
				svgobj.style.left = (svgobj.parentNode.offsetLeft - clientRect["x"] + svgobj.parentNode.offsetWidth/2) + 'px';
				//设置整个框高亮
				var childNodes=o.parentNode.childNodes;
				//kenshao 20201029 兼容文本框外面还有个G的数据
				var hasRect = false;
				for (var pi = 0; pi < childNodes.length; pi++) {
					var nodeName=childNodes[pi].nodeName;
					var nodeText=childNodes[pi].textContent;
					if(nodeName=="rect"||nodeName=="path"){
						childNodes[pi]["style"]["fill"] = "#A09DD9";
						hasRect = true;
					}
				}
				//如果兄弟里没有rect或path，找爸爸的兄弟
				if(!hasRect && o.parentNode.parentNode){
					childNodes=o.parentNode.parentNode.childNodes;
					for (var pi = 0; pi < childNodes.length; pi++) {
						var nodeName=childNodes[pi].nodeName;
						var nodeText=childNodes[pi].textContent;
						if(nodeName=="rect"||nodeName=="path"){
							childNodes[pi]["style"]["fill"] = "#A09DD9";
						}
					}
				}
			} else {
				var oldfill=o.getAttribute("oldfill");
				if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
					oldfill="";
				}
				//添加是否有style判断  licun 2021-04-09
				if(o["style"]){
					o["style"]["fill"] = oldfill;
				}

			}
		}

		// cjj 2021-04-29 设置不透明度
		var groups = SVGDocument.getElementsByTagName("g");
		for (var p = 0; p < groups.length; p++) {
			var obj = groups[p];
			var scode = getCodeFromToolTip(obj);
			if(!isNullString(scode) && myTrim(selectstr) == myTrim(scode)){
				obj.setAttribute("opacity",".5");
			}
		}
	}
}

// cjj 2021-04-29 读取ShowToolTip中的内容
function getCodeFromToolTip(obj) {
	var id = obj.getAttribute("id");
	var mousemove = obj.getAttribute("onmousemove");
	if(!isNullString(id) && id.indexOf("hotspot.") == 0 && !isNullString(mousemove) && mousemove.indexOf("ShowToolTip(") == 0) {
		var paramArray = mousemove.split(',');
		if(paramArray.length == 3) {
			return paramArray[2].replace(/[")]/g, '');
		}
	}
	return '';
}

function getHtmlDocName() {
	var str = window.location.href;
	str = str.substring(str.lastIndexOf("/") + 1);
	str = str.substring(0, str.lastIndexOf("."));
	return str;
}

function isNullString(str) {
	return typeof str == "undefined" || str === undefined || str === null || str == '';
}

function isNullObject(obj) {
	return typeof obj == "undefined" || obj === undefined || obj === null;
}

function stringHaveValue(str){
	if(typeof(str) != undefined&&str!=undefined&&str!="undefined"&&str!=""){
		return true;
	}else{
		return false;
	}
}
/**
 * show页面加载事件
 *
 * @author gcy
 * @param
 * @returns
 */
function show_onload(){
	var parenetFrame;
	// 20221116 huangzhifu 本地打开手册时，iframe无法获取父窗口
	if(window.location.protocol !== 'file:') {
		parenetFrame = parent.document.getElementById('framec1') || {};
	} else {
		parenetFrame = {};
	}
	
	if(isNullObject(parenetFrame.height)) {
		parenetFrame.height = document.documentElement.clientHeight;
	}
	console.log("parenetFrame height " + parenetFrame.height);
	//20220720 修改div高度 
	document.getElementById("tablediv").style.maxHeight = parenetFrame.height * 0.45 + "px";
	//20220609 修改div边框
	document.getElementById("tablediv").style.border = "0px";
	// 初始化语言
	dialogI18nInit();
	//20220720 取消掉svgobj的width:100%，缩放变正常
	var svgTemplate = '\
<div id="myMenudiv" class="sctlink_mend_box"  style="display: none;background-color:#000000; position: absolute;z-index: 999; width: 100px; height: 200px;"  onclick="this.style.display = \'none\'; ">\
	<br>\
	<input type="hidden" id="selectType" name="selectType" value="" />\
	<input type="hidden" id="selectId" name="selectId" value="" />\
</div>\
<div class="zhezhao" id="zhezhao"></div>\
<div id="selectDiv" class="sctlink_container" style="display: none; left: 468px; top: 77px; " ></div>\
<section>\
<div style="text-align:left;display: block; width: 100%; height: 45%;overflow:hidden;position:relative;border:1px solid #000;" id="picBox" >\
<object data=""  type="image/svg+xml" id="svgobj" onload="svgHandle(this);" standby="'+currentDialogI18n.LOAD+'"  style="overflow:hidden;position:relative;"></object>\
</div>\
</section>\
<input type="hidden" id="selecttopicid" name="selecttopicid" value="" />';
	var svgdiv = document.getElementById("svgdiv");
	if(!isNullObject(svgdiv)) {
		console.log("set svgdiv");
		svgdiv.innerHTML=svgTemplate;
		document.getElementById("picBox").style.height = parenetFrame.height * 0.45 + "px";
	} else {
		console.log("svgdiv is null");
	}

	var dialogTemplate = '\
<DIV style="text-align:left;display: none; width: 100%;border:1px solid #000;max-height: 300px;width:250px;overflow-y: auto;background-color:white;z-index:998;position:fixed;right:0;top:0;" onmouseleave="this.style.display=\'none\';"  id="searchDIV">\
</DIV>\
<!--调整width:380px height:400px 2020-10-20 auto:gsj -->\
<div xmlns="" onmouseleave="document.getElementById(\'all_li\').style.display=\'none\';" id="sub_info" class="sctlink_container"  style="transform: rotate(0deg);width:380px;height:660px;overflow:hidden; display: none;right:0px;top:65px;min-width:400px;">\
<DIV style="text-align:left;display: none; width: 100%;border:1px solid #000;max-height: 150px;width:100px;overflow-y: auto;background-color:white;z-index:999;position:fixed;right:0;top:0;" onmouseleave="this.style.display=\'none\';"  id="all_li">\
</DIV>\
<div class="zhezhao" id="divzhezhao"></div>\
<div id="rRightDown"> </div>\
<div id="rLeftDown"> </div>\
<div id="rRightUp"> </div>\
<div id="rLeftUp"> </div>\
<div id="rRight"> </div>\
<div id="rLeft"> </div>\
<div id="rUp"> </div>\
<div id="rDown"></div>\
	<div class="sctlink_container_title" id="titlediv" height="30px">'+currentDialogI18n.INFO+'<input type="hidden" name="selecttext" id="selecttext" value="value">\
	 <a style="position:absolute;right:5px;top:0px;cursor:pointer;" onclick="closedDialog()">X</a>\
	</div>\
	<div  id="accordion" style="width:100%;height:100%;">\
		<div id="dialogobjs"  class="navC" >\
		</div>\
		<div id="dialogtitle" onclick="showcollapseTwo()" style="background:rgb(204,204,204);border:2px solid rgb(204,204,204);height:30px;width:100%;border-bottom:0;color: black;font-size: 18px;font-weight: bold;cursor:pointer;top:30px;">\
		</div>\
		<div id="collapseTwo" style="border:2px;overflow:hidden scroll;width:100%;height:calc(100% - 60px);top:60px;">\
			<div style="text-align:left;display: block; width: 100%; height:160px;overflow:hidden;border:1px solid #000;background:#ffffff;top:90px;" id="dialogSVGBox" >\
			<object data="#"  type="image/svg+xml" id="dialogsvg" onload="dialog_svgHandle(this);" standby="'+currentDialogI18n.LOAD+'"  style="overflow:hidden;position:relative;"></object>\
			</div>\
			<div id="collapseThree" style="overflow:auto;width:100%;bottom:0;left:0;">\
			 <!--调整 height:auto 2020-10-20 auto:gsj max-height:170px overflow:auto;-->\
				<DIV class="sctlink_box" style="background:#ffffff;max-height:170px;overflow:hidden; display:block;" id="dialogtablediv">\
				</DIV>\
				<div class="sctlink_box" id="EWD_BXH_div"><span class="title">'+currentDialogI18n.FBD+'</span>\
					<ul class="sctlink_ul" id="EWD_BXH">\
					</ul>\
				</div>\
				<div class="sctlink_box" id="EWD_XSBZ_div"><span class="title">'+currentDialogI18n.HLD+'</span>\
					<ul class="sctlink_ul" id="EWD_XSBZ">\
					</ul>\
				</div>\
				<div class="sctlink_box" id="EWD_JDD_div"><span class="title">'+currentDialogI18n.GPL+'</span>\
					<ul class="sctlink_ul" id="EWD_JDD">\
					</ul>\
				</div>\
				<div class="sctlink_box" id="EWD_XTYL_div"><span class="title">'+currentDialogI18n.SP+'</span>\
					<ul class="sctlink_ul" id="EWD_XTYL">\
					</ul>\
				</div>\
				<div class="sctlink_box" id="EWD_DYFB_div"><span class="title">'+currentDialogI18n.PSDD+'</span>\
					<ul class="sctlink_ul" id="EWD_DYFB">\
					</ul>\
				</div>\
			</div>\
		</div>\
	</div>\
</div>';
	var dialogdiv = document.getElementById("dialogdiv");
	if(!isNullObject(dialogdiv)) {
		console.log("set dialogdiv");
		dialogdiv.innerHTML=dialogTemplate;
	}

	console.log("show_onload " + window.location.href);
	showMenu();
	//获取str参数
	var str=geturlValueByKey("str");
	if(isNullString(str)) {
		str = getHtmlDocName();
		// cjj 2021-03-16 单独topic发布默认为index.html
		if(isNullString(str)) {
			str = "index";
		}
	}
	console.log('str ' + str);
	var svgimageid="";
	var tablestr="";
	if(str!=null&&str!=""){
		document.getElementById("selecttopicid").value=str;
		var topicObj = topicArray[topicMap[str]];
		svgimageid=topicObj["imagefile"];
		tablestr=topicObj["tablestr"];
		var divheight=document.getElementById("tablediv").offsetHeight;
		console.log("divheight " + divheight);
		divheight = Math.min(divheight, parenetFrame.height * 0.45);
		console.log("divheight " + divheight);
		if (typeof(tablestr) == undefined||tablestr=="undefined"||tablestr==undefined) {
			tablestr="";
		}else{
			//tablestr=tablestr.replace('<table', '<table width=\"100%\" height=\"'+divheight+'px\"');
			//20220609 修改表格高度
			tablestr=tablestr.replace('<table', '<table width=\"100%\"');
			//20220720 Zhangdan 表格留白修改
			//tablestr=tablestr.replace('<tbody', '<tbody id=\"tbodydiv\" height=\"'+(divheight-30)+'px\"');
		}

		//console.log("tablestr--"+(tablestr==""));
		//根据参数设置svg图显示
		printurl=svgimageid;
		document.getElementById("svgobj").data=svgimageid;
		document.getElementById("tablediv").innerHTML=tablestr;
		if(tablestr==""){
			document.getElementById("picBox").style.height=parenetFrame.height * 0.9 + "px"; //"90%"
			document.getElementById("tablediv").style.display="none";
		}else{
			// 20221116 huangzhifu 本地打开手册时无法获取svg对象，单独设置svg高度
			if( window.location.protocol === 'file:' ) {
				document.getElementById("svgobj").style.height=parenetFrame.height * 0.45 + "px"; //"45%";
			} else {
				document.getElementById("picBox").style.height=parenetFrame.height * 0.45 + "px"; //"45%";
			}
			document.getElementById("tablediv").style.display="block";
		}
	}
	//这DIV可以拖拽
	TZdiv();
	//根据上下页设置上下页展示
	//获取当前页面路径
	// 2023-05-18 byd电路图册无前进后退功能
	// if(window.location.protocol !== 'file:' && !isNullObject(parent.document.getElementById("framec1"))) {
	// 	var this_href=parent.document.getElementById("framec1").contentWindow.location.href;
	// 	if(parent.isGoPage){
	// 		parent.isGoPage=false;
	// 	}else{
	// 		//获取当前所在历史记录位置是否是最后，如果不是，清除历史记录后面的内容
	// 		if(parent.currentPic<(parent.historyBox.length-1)){

	// 			parent.historyBox.splice((parent.currentPic+1),parent.historyBox.length);
	// 		}
	// 		sethistoryBox(this_href);
	// 	}
	// }

	/*
	//console.log(parent.currentPic+"||"+parent.historyBox.length);
	if(parent.currentPic==0){
		document.getElementById("goleft").disabled=true;
		document.getElementById("goleft_img").src="image\\hou_h.png";
	}else{

		document.getElementById("goleft").disabled=false;
		document.getElementById("goleft_img").src="image\\hou.png";
	}
	if(parent.currentPic === (parent.historyBox.length-1)||parent.historyBox.length==0){
		document.getElementById("goright").disabled=true;
		document.getElementById("goright_img").src="image\\qian_h.png";
	}else{
		document.getElementById("goright").disabled=false;
		document.getElementById("goright_img").src="image\\qian.png";
	}*/





	//去掉默认的contextmenu事件，否则会和右键事件同时出现。

	document.getElementById("myMenudiv").oncontextmenu=function(e){
		//e.preventDefault();
		return false;
	};
	document.getElementById("picBox").onmouseout =function(e){
		params.isDown=false;
	}
	document.getElementById("svgobj").onmouseout =function(e){
		params.isDown=false;
	}

	document.getElementById("myMenudiv").onmouseout =function(e){
		var obj=document.getElementById("myMenudiv");
		//e.preventDefault();
		if (e.currentTarget) {
			if (e.relatedTarget != obj) {
				//e.relatedTarget为event的相关节点
				if (obj != e.relatedTarget.parentNode
					&&obj != e.relatedTarget.parentNode.parentNode
					&&obj != e.relatedTarget.parentNode.parentNode.parentNode
					&&obj != e.relatedTarget.parentNode.parentNode.parentNode.parentNode
					&&obj != e.relatedTarget.parentNode.parentNode.parentNode.parentNode.parentNode) {
					document.getElementById("myMenudiv").style.display="none";
				}
			}
		} else {
			if (e.toElement != obj) {
				if (obj != e.toElement.parentNode
					&&obj != e.toElement.parentNode.parentNode
					&&obj != e.toElement.parentNode.parentNode.parentNode
					&&obj != e.toElement.parentNode.parentNode.parentNode.parentNode
					&&obj != e.toElement.parentNode.parentNode.parentNode.parentNode.parentNode) {
					document.getElementById("myMenudiv").style.display="none";
				}
			}
		}
	};

	document.getElementById("picBox").oncontextmenu=function(e){
		//e.preventDefault();
		return false;
	};
	
	
	
	//20220609 svg外上下滚动 zhangdan
	var picBoxObj=document.getElementById("picBox");
	picBoxObj.onmousewheel=function(event){
		//setScrollUpOrDowm(event,"svg","picBox");
		event.preventDefault();
	};
	/**
	 var picBoxObj=document.getElementById("picBox");
	 //鼠标进入SVG区域，禁用滚轴屏幕滚动事件，
	 picBoxObj.onmouseover= function() {
		document.documentElement.style.overflow = "hidden";
	};
	 //鼠标移出SVG区域，启用屏幕滚动事件scroll
	 picBoxObj.onmouseout= function() {
		document.documentElement.style.overflow = "auto";
	};
	
	 var tabledivObj=document.getElementById("tablediv");
	 //鼠标进入SVG区域，禁用滚轴屏幕滚动事件，
	 tabledivObj.onmouseover= function() {
		document.documentElement.style.overflow = "hidden";
	};
	 //鼠标移出SVG区域，启用屏幕滚动事件scroll
	 tabledivObj.onmouseout= function() {
		document.documentElement.style.overflow = "auto";
	};
	 **/

	// 20221116 huangzhifu 本地打开手册时不需要缩放按钮
	window.location.protocol !== 'file:' && initFrameButton();
	if(window.location.protocol !== 'file:' && parent.document.getElementsByTagName('frameset').length > 0 &&
		!isNullObject(parent.document.getElementsByTagName('frameset')[0].fullScreenInfo)) {
		fullScreenInfo = parent.document.getElementsByTagName('frameset')[0].fullScreenInfo;
		var fullScreenEle = document.getElementById("full_screen_btn");
		fullScreenEle.title = currentDialogI18n.FULL;
		fullScreen();
	} else {
		fullScreenInfo = {'full_screen': false};
	}
}


/**
 * 移动坐标，实现拖曳功能
 *
 * @author guowei
 * @param obj
 * @param w
 * @param h
 */
function move(obj, w, h) {
	if (obj.direction === 'left') {
		obj.style.left = 0 - w + 'px';
	} else if (obj.direction === 'right') {

		obj.style.left = document.body.offsetWidth - nekoW + w + 'px';
	}
	if (obj.direction === 'top') {
		obj.style.top = 0 - h + 'px';
	} else if (obj.direction === 'bottom') {
		obj.style.top = document.body.offsetHeight - nekoH + h + 'px';
	}
}
function rate(obj, a) {
	obj.style.transform = ' rotate(' + a + ')'
}
function action(obj) {
	var dir = obj.direction;
	switch (dir) {
		case 'left':
			rate(obj, '90deg');
			break;
		case 'right':
			rate(obj, '-90deg');
			break;
		case 'top':
			rate(obj, '-180deg');
			break;
		default:
			rate(obj, '-0');
			break;
	}
}
var cuntW = 0;
var cuntH = 0;
function moveHandle(table) {
	var nekoW = table.offsetWidth;
	var nekoH = table.offsetHeight;
	//table.style.display = 'block';
	table.onmousedown = function(e) {
		var o = this;
		var nekoL = e.clientX - o.offsetLeft;
		var nekoT = e.clientY - o.offsetTop;
		document.onmousemove = function(e) {
			cuntW = 0;
			cuntH = 0;
			o.direction = '';
			o.style.transition = '';
			o.style.left = (e.clientX - nekoL) + 'px';
			o.style.top = (e.clientY - nekoT) + 'px';
			move(o, 0, 0);
		}
	}
	table.onmouseover = function() {
		move(this, 0, 0);
		rate(this, 0)
	}

	table.onmouseout = function() {
		move(this, nekoW / 2, nekoH / 2);
		action(this);
	}

	table.onmouseup = function() {
		document.onmousemove = null;
		this.style.transition = '.5s';
		move(this, nekoW / 2, nekoH / 2);
		action(this);
	}
}

function moveDialog() {
	var sub_infodiv=document.getElementById("sub_info");
	var nekoW = sub_infodiv.offsetWidth;
	var nekoH = sub_infodiv.offsetHeight;
	var titlediv=document.getElementById("titlediv");
	//table.style.display = 'block';
	titlediv.onmousedown = function(e) {
		document.getElementById("zhezhao").style.display="block";
		var o = sub_infodiv;
		var nekoL = e.clientX - o.offsetLeft;
		var nekoT = e.clientY - o.offsetTop;
		document.onmousemove = function(e) {
			cuntW = 0;
			cuntH = 0;
			o.direction = '';
			o.style.transition = '';
			o.style.left = (e.clientX - nekoL) + 'px';
			o.style.top = (e.clientY - nekoT) + 'px';
			move(o, 0, 0);
		}
	}
	titlediv.onmouseover = function() {
		move(sub_infodiv, 0, 0);
		rate(sub_infodiv, 0)
	}

	titlediv.onmouseout = function() {
		move(sub_infodiv, nekoW / 2, nekoH / 2);
		action(sub_infodiv);
	}

	titlediv.onmouseup = function() {
		document.onmousemove = null;
		sub_infodiv.style.transition = '.5s';
		move(sub_infodiv, nekoW / 2, nekoH / 2);
		action(sub_infodiv);
		document.getElementById("zhezhao").style.display="none";
	}
}

/**
 * 为SVG中增加部分属性
 *
 * @author gcy
 * @param
 * @returns
 */
function setSvgAtt(svgDoc){

	//得到所有的path
	var paths = svgDoc.getElementsByTagName("path");
	setdates(paths);
	var rects = svgDoc.getElementsByTagName("rect");
	setdates(rects);
	var polynos = svgDoc.getElementsByTagName("polygon");
	setdates(polynos);
	var circles = svgDoc.getElementsByTagName("circle");
	setdates(circles);
	var ellipses = svgDoc.getElementsByTagName("ellipse");
	setdates(ellipses);

}
function setdates(objs){

	for (var p = 0; p < objs.length; p++) {
		var obj = objs [p];
		var datastr="";
		//得到父层级
		var parentobj=obj.parentNode;
		if(typeof(parentobj) != undefined&&parentobj!=undefined&&parentobj!="undefined"&&parentobj!=null){
			if(parentobj.nodeName=="g"){
				var childNodes=parentobj.childNodes;
				//获取同层级下的G标签
				for (var pc = 0; pc < childNodes.length; pc++) {
					var cobj=childNodes[pc];
					var nodeName=cobj.nodeName;
					var nodeText=cobj.textContent;
					var scode="";
					var ocode=""
					if(nodeName=="g"){
						var gobjs=cobj.childNodes;
						//便利G标签下的text
						var selectcode="";
						var othercode=""
						for (var i = 0; i < gobjs.length; i++) {
							var gobj=gobjs[i];
							var gcname=gobj.nodeName;
							var gctext=gobj.textContent;
							if(gcname=="text"){
								if(typeof(ecodeobjs[gctext]) != undefined&&ecodeobjs[gctext]!=undefined&&ecodeobjs[gctext]!="undefined"){
									selectcode=gctext;
								}
								//else{
								//	othercode=gctext;
								//}
							}

						}
						//设置date数据
						if(selectcode!=""&&datastr.indexOf(selectcode)<0){
							datastr+=selectcode+";";
						}
					}else if(nodeName=="text"){
						if(typeof(ecodeobjs[nodeText]) != undefined&&ecodeobjs[nodeText]!=undefined&&ecodeobjs[nodeText]!="undefined"){
							scode=nodeText;
						}else{
							ocode=nodeText;
						}
						//设置date数据
						if(scode!=""&&datastr.indexOf(scode)<0){
							//datastr+=scode+"-"+ocode+";";
							datastr+=scode+";";
						}
					}
				}

				// cjj 2021-04-29 获取ShowToolTip中的内容
				var scode = getCodeFromToolTip(parentobj);
				//设置data数据
				if(!isNullString(scode) && datastr.indexOf(scode)<0){
					datastr+=scode+";";
				}
			}

		}
		//设置path的data属性
		if(datastr!=""){
			obj.setAttribute("data", datastr);
		}
	}

}



/**
 * svg中元素加载事件
 *
 * @author gcy
 * @param
 * @returns
 */
function gTagHandle(svgDoc,embed_id) {
	var selectdiv=document.getElementById("selectDiv");
	moveHandle(selectdiv);
	selectdiv.onmouseleave = function() {
		this.style.display = 'none';
	}
	var sub_infodiv=document.getElementById("sub_info");
	moveDialog();
	//sub_infodiv.onmouseleave = function() {
	//	this.style.display = 'none';
	//}
	var gs = svgDoc.getElementsByTagName("g");
	for (var p = 0; p < gs .length; p++) {

		var obj = gs [p];

		var cac_class=obj.getAttribute("class");
		var gid=obj.getAttribute("id");
		//隐藏图层
		if(gid=="PBRAKE"){
			obj.setAttribute("display", "none");
		}
		//console.log("cac_class=="+cac_class);
		if(cac_class!=null&&cac_class!="null"&&typeof(cac_class) != undefined&&cac_class!=undefined&&cac_class!="undefined"){

			obj.setAttribute("cursor", "pointer");
			var cac_type="";
			var objclass=obj.getAttribute("class");
			var objdata=obj.getAttribute("data");
			var datastr="";
			if(objclass.indexOf("terminal") > -1){
				cac_type = "terminal";
			}else if(objclass.indexOf("line") > -1){
				cac_type = "line";
			}else if(objclass.indexOf("fusebox") > -1){
				cac_type = "fusebox";
			}else if(objclass.indexOf("grounding") > -1){
				cac_type = "grounding";
			}else if(objclass.indexOf("mod") > -1){
				cac_type = "mod";
			}else if(objclass.indexOf("fuse") > -1){
				cac_type = "fuse";
			}else if(objclass.indexOf("path") > -1){
				cac_type = "path";
			}else if(objclass.indexOf("polyline") > -1){
				cac_type = "polyline";
			}else if(objclass.indexOf("circle") > -1){
				cac_type = "circle";
			}else if(objclass.indexOf("polygon") > -1){
				cac_type = "polygon";
			}else if(objclass.indexOf("ellipse") > -1){
				cac_type = "ellipse";
			}

			/**if(cac_type=="line"){
					var lines = obj.getElementsByTagName("line");
					var polylines = obj.getElementsByTagName("polyline");
					for (var lp = 0; lp < lines.length; lp++) {
						var lpobj = lines [lp];
						lpobj.addEventListener("click", setLineClick(objdata,lpobj) , false);
					}
					for (var lp = 0; lp < polylines.length; lp++) {
						var lpobj = polylines [lp];
						lpobj.addEventListener("click", setLineClick(objdata,lpobj) , false);
					}
				}
			 **/
			//}else if(cac_type!=""){
			obj.addEventListener("click", function(evnt) {
				clearHighlight(svgDoc);
				this.setAttribute("filter", "url(#drop-shadow)");
				var thisdata=this.getAttribute("data");
				document.getElementById("sub_info").style.display="none";
				//setsub_info(thisdata,"g-text",false);
			});
		}
	}
	var polylines = svgDoc.getElementsByTagName("polyline");
	for (var i = 0; i < polylines.length; i++) {
		var obj = polylines[i];
		obj.setAttribute("cursor", "pointer");
		obj.addEventListener("click", function(evnt) {
			clearHighlight(svgDoc);
			document.getElementById("sub_info").style.display="none";
			var widthsize=this.getAttribute("stroke-width");
			if(widthsize!=null&&widthsize!=""){
				if(widthsize<2){

					this.setAttribute("filter", "url(#drop-shadow-chu)");
				}else{

					this.setAttribute("filter", "url(#drop-shadow)");
				}
			}else{

				this.setAttribute("filter", "url(#drop-shadow)");
			}
		});
	}

	var lines = svgDoc.getElementsByTagName("line");
	for (var i = 0; i < lines.length; i++) {
		var obj = lines[i];
		obj.setAttribute("cursor", "pointer");
		obj.addEventListener("click", function(evnt) {
			clearHighlight(svgDoc);
			document.getElementById("sub_info").style.display="none";
			var widthsize=this.getAttribute("stroke-width");
			if(widthsize!=null&&widthsize!=""){
				if(widthsize<2){
					this.setAttribute("filter", "url(#drop-shadow-chu)");
				}else{
					this.setAttribute("filter", "url(#drop-shadow)");
				}
			}else{

				this.setAttribute("filter", "url(#drop-shadow)");
			}
		});
	}

	var paths = svgDoc.getElementsByTagName("path");

	for (var i = 0; i < paths.length; i++) {

		var obj = paths[i];
		obj.setAttribute("cursor", "pointer");

		obj.addEventListener("click", function(evnt) {

			//判断是否存在表格
			var ishavetable=false;
			if(document.getElementById("tablediv").innerHTML.indexOf("table")!=-1){
				ishavetable=true;
				clearHighlight_fill(svgDoc);
			}
			document.getElementById("sub_info").style.display="none";
			clearHighlight(svgDoc);
			// cjj 2021-04-29 清除选中
			clearGroupHighlight(svgDoc, this.getAttribute("data"));
			this.setAttribute("filter", "url(#drop-shadow)");
			//得到层级或下一层级的text
			var childNodes=this.parentNode.childNodes;
			for (var pi = 0; pi < childNodes.length; pi++) {
				var nodeName=childNodes[pi].nodeName;
				var nodeText=childNodes[pi].textContent;
				if(nodeName=="text"){
					if(ishavetable){
						selectHotspot(svgDoc,nodeText);
						this["style"]["fill"] = "#A09DD9";
						var tables = document.querySelectorAll("table[rules='all']");
						if (tables && tables.length > 0) {
							for (var i = 0; i < tables.length; i++){
								var table = tables[i];
								var tbody = table.querySelector("tbody");
								selectRows(nodeText,tbody,"down");
							}
						}
					}

				}
				if(nodeName=="g"){
					var cnides=childNodes[pi].childNodes;
					for (var pc = 0; pc < cnides.length; pc++) {
						var nname=cnides[pc].nodeName;
						var ntext=cnides[pc].textContent;
						if(nname=="text"){
							if(ishavetable){
								selectHotspot(svgDoc,ntext);
								this["style"]["fill"] = "#A09DD9";
								var tables = document.querySelectorAll("table[rules='all']");
								if (tables && tables.length > 0) {
									for (var i = 0; i < tables.length; i++){
										var table = tables[i];
										var tbody = table.querySelector("tbody");
										selectRows(ntext,tbody,"down");
									}
								}
							}
						}
					}

				}
			}
			//多端子
			var thisdata=this.getAttribute("data");
			if(thisdata!=null){
				before_setsub_info(thisdata);
			}
		});
	}

	var rects = svgDoc.getElementsByTagName("rect");
	for (var i = 0; i < rects.length; i++) {
		var obj = rects[i];
		obj.setAttribute("cursor", "pointer");
		obj.addEventListener("click", function(evnt) {
			//判断是否存在表格
			var ishavetable=false;
			if(document.getElementById("tablediv").innerHTML.indexOf("table")!=-1){
				ishavetable=true;
				clearHighlight_fill(svgDoc);
			}
			document.getElementById("sub_info").style.display="none";
			clearHighlight(svgDoc);
			this.setAttribute("filter", "url(#drop-shadow)");
			//得到层级或下一层级的text
			var childNodes=this.parentNode.childNodes;
			for (var pi = 0; pi < childNodes.length; pi++) {
				var nodeName=childNodes[pi].nodeName;
				var nodeText=childNodes[pi].textContent;
				//console.log("nodeName=="+nodeName);
				if(nodeName=="text"){
					if(ishavetable){
						selectHotspot(svgDoc,nodeText);

						this["style"]["fill"] = "#A09DD9";
						var tables = document.querySelectorAll("table[rules='all']");
						if (tables && tables.length > 0) {
							for (var i = 0; i < tables.length; i++){
								var table = tables[i];
								var tbody = table.querySelector("tbody");
								selectRows(nodeText,tbody,"down");
							}
						}
					}

				}
				if(nodeName=="g"){
					var cnides=childNodes[pi].childNodes;
					for (var pc = 0; pc < cnides.length; pc++) {
						var nname=cnides[pc].nodeName;
						var ntext=cnides[pc].textContent;
						if(nname=="text"){
							if(ishavetable){
								selectHotspot(svgDoc,ntext);
								this["style"]["fill"] = "#A09DD9";
								var tables = document.querySelectorAll("table[rules='all']");
								if (tables && tables.length > 0) {
									for (var i = 0; i < tables.length; i++){
										var table = tables[i];
										var tbody = table.querySelector("tbody");
										selectRows(ntext,tbody,"down");
									}
								}
							}
						}

					}

				}
			}
			//多端子
			var thisdata=this.getAttribute("data");
			if(thisdata!=null){
				before_setsub_info(thisdata);
			}
		});
	}

	var polygons = svgDoc.getElementsByTagName("polygon");
	for (var i = 0; i < polygons.length; i++) {
		var obj = polygons[i];
		obj.setAttribute("cursor", "pointer");
		obj.addEventListener("click", function(evnt) {
			//判断是否存在表格
			var ishavetable=false;
			if(document.getElementById("tablediv").innerHTML.indexOf("table")!=-1){
				ishavetable=true;
				clearHighlight_fill(svgDoc);
			}
			document.getElementById("sub_info").style.display="none";
			clearHighlight(svgDoc);
			this.setAttribute("filter", "url(#drop-shadow)");
			//得到层级或下一层级的text
			var childNodes=this.parentNode.childNodes;
			for (var pi = 0; pi < childNodes.length; pi++) {
				var nodeName=childNodes[pi].nodeName;
				var nodeText=childNodes[pi].textContent;
				//console.log("nodeName=="+nodeName);
				if(nodeName=="text"){
					if(ishavetable){
						selectHotspot(svgDoc,nodeText);
						this["style"]["fill"] = "#A09DD9";
						var tables = document.querySelectorAll("table[rules='all']");
						if (tables && tables.length > 0) {
							for (var i = 0; i < tables.length; i++){
								var table = tables[i];
								var tbody = table.querySelector("tbody");
								selectRows(nodeText,tbody,"down");
							}
						}
					}
				}
				if(nodeName=="g"){
					var cnides=childNodes[pi].childNodes;
					for (var pc = 0; pc < cnides.length; pc++) {
						var nname=cnides[pc].nodeName;
						var ntext=cnides[pc].textContent;
						if(nname=="text"){
							if(ishavetable){
								selectHotspot(svgDoc,this.ntext);
								this["style"]["fill"] = "#A09DD9";
								var tables = document.querySelectorAll("table[rules='all']");
								if (tables && tables.length > 0) {
									for (var i = 0; i < tables.length; i++){
										var table = tables[i];
										var tbody = table.querySelector("tbody");
										selectRows(ntext,tbody,"down");
									}
								}
							}

						}
					}

				}
			}
			//多端子
			var thisdata=this.getAttribute("data");
			if(thisdata!=null){
				before_setsub_info(thisdata);
			}
		});
	}
	var texts = svgDoc.getElementsByTagName("text");
	for (var i = 0; i < texts.length; i++) {
		var obj = texts[i];
		obj.setAttribute("cursor", "pointer");
		obj.addEventListener("click", function(evnt) {
			clearHighlight(svgDoc);
			// 电源电路图、接地点电路图、系统电路图点中的端子对象，高亮显示为红色、粗体
			this.style.fill = "red"
			this.style.fontWeight = "bold"
			document.getElementById("sub_info").style.display="none";
			var ishavekk=false;
			var ishavecode=false;
			var ishavetable=false;

			//kenshao 20201029
			var textParent = this.parentNode;
			//if(this.parentNode.hasAttribute('id')){
			//	textParent=this.parentNode.parentNode;
			//}
			var childNodes=textParent.childNodes;
			var havecode="";
			var havetext="";
			var thisdata="";
			//判断是是否有跳转角标
			//得到当前页面是否存角标跳转
			for(var i=0,l=jbtzArray.length;i<l;i++){
				var link=jbtzArray[i];
				jiaobiaotext=link["fromvalue"];
				tojiaobiaotext=link["tovalue"];
				tojiaobiaoNo=link["tonumber"];
				jiaobiaoNo=link["fromnumber"];

				var selecttopicid=document.getElementById("selecttopicid").value;
				if(selecttopicid!=null&&selecttopicid!=""&&jiaobiaoNo==selecttopicid){
					if (typeof(jiaobiaotext) != undefined||jiaobiaotext!="undefined"||jiaobiaotext!=undefined) {
						if(jiaobiaotext==this.textContent){
							console.log(jiaobiaotext+"=="+this.textContent);
							console.log(tojiaobiaoNo+"=="+this.tojiaobiaotext);
							parent.document.getElementById("framec1").src=tojiaobiaoNo+".html?str="+tojiaobiaoNo+"&selectstr="+escape(tojiaobiaotext);
						}
					}
				}

			}
			//判断是否存在表格
			if(document.getElementById("tablediv").innerHTML.indexOf("table")!=-1){
				ishavetable=true;
				clearHighlight_fill(svgDoc);
			}
			for (var pi = 0; pi < childNodes.length; pi++) {
				var nodeName=childNodes[pi].nodeName;
				var nodeText=childNodes[pi].textContent;
				//console.log("nodeName=="+nodeName);
				if(nodeName=="rect"||nodeName=="path"||nodeName=="circle"||nodeName=="polygon"||nodeName=="ellipse"){
					ishavekk=true;
					//childNodes[pi].setAttribute("filter", "url(#drop-shadow)");

					if(ishavetable){

						childNodes[pi]["style"]["fill"] = "#A09DD9";
					}else{
						childNodes[pi].setAttribute("filter", "url(#drop-shadow)");
					}
					thisdata=childNodes[pi].getAttribute("data");


				}
				if(nodeName=="text"){
					if(typeof(ecodeobjs[nodeText]) != undefined&&ecodeobjs[nodeText]!=undefined&&ecodeobjs[nodeText]!="undefined"){
						ishavecode=true;
						havecode=nodeText;
					}else{
						havetext=nodeText;
					}
				}
			}

			//console.log("ishavekk=="+ishavekk);

			//得到上级
			var parenttexts =textParent.getElementsByTagName("text");
			if(ishavecode){
				//console.log("havecode=="+havecode);
				//console.log("this.textContent=="+this.textContent);
				// cjj 2021-04-29 优化显示所点击的节点
				if(!isNullString(this.textContent) && !isNullObject(ecodeobjs[this.textContent])) {
					setsub_info(this.textContent,havetext,false);
				}else{
					setsub_info(havecode,this.textContent,false);
				}
			}else{

				console.log("this.textContent=="+this.textContent);
				if(typeof(ecodeobjs[this.textContent]) != undefined&&ecodeobjs[this.textContent]!=undefined&&ecodeobjs[this.textContent]!="undefined"){
					setsub_info(this.textContent,"",false);
				}else{
					console.log("this.thisdata=="+thisdata);
					if(thisdata!=null&&thisdata!=""){
						before_setsub_info(thisdata);
					}
				}
			}

			//判断是否存在表格
			if(document.getElementById("tablediv").innerHTML.indexOf("table")!=-1){
				selectHotspot(svgDoc,this.textContent);
				var tables = document.querySelectorAll("table[rules='all']");
				if (tables && tables.length > 0) {
					for (var i = 0; i < tables.length; i++){
						var table = tables[i];
						var tbody = table.querySelector("tbody");
						selectRows(this.textContent,tbody,"down");
					}
				}

			}



		});

	}
	setOldFill(svgDoc);

}
function clearHighlight_fill(svgDoc){
	var rects = svgDoc.getElementsByTagName("rect");
	for (var p = 0; p < rects.length; p++) {
		var obj = rects[p];
		var oldfill=obj.getAttribute("oldfill");
		if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
			oldfill="";
		}
		//添加判断 licun 2021-04-09
		if(obj["style"]){
			obj["style"]["fill"] = oldfill;
		}
		//kenshao 20201029 清除背景
		obj.setAttribute("filter", "");
	}
	var paths = svgDoc.getElementsByTagName("path");
	for (var p = 0; p < paths.length; p++) {
		var obj = paths[p];
		var oldfill=obj.getAttribute("oldfill");
		if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
			oldfill="";
		}
		obj["style"]["fill"] = oldfill;
		//kenshao 20201029 清除背景
		obj.setAttribute("filter", "");
	}

	var circles = svgDoc.getElementsByTagName("circle");
	for (var p = 0; p < circles.length; p++) {
		var obj = circles[p];
		var oldfill=obj.getAttribute("oldfill");
		if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
			oldfill="";
		}
		obj["style"]["fill"] = oldfill;
		//kenshao 20201029 清除背景
		obj.setAttribute("filter", "");
	}

	var ellipses = svgDoc.getElementsByTagName("ellipse");
	for (var p = 0; p < ellipses.length; p++) {
		var obj = ellipses[p];
		var oldfill=obj.getAttribute("oldfill");
		if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
			oldfill="";
		}
		obj["style"]["fill"] = oldfill;
		//kenshao 20201029 清除背景
		obj.setAttribute("filter", "");
	}
	var polygons = svgDoc.getElementsByTagName("polygon");
	for (var p = 0; p < polygons.length; p++) {
		var obj = polygons[p];
		var oldfill=obj.getAttribute("oldfill");
		if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
			oldfill="";
		}
		obj["style"]["fill"] = oldfill;
		//kenshao 20201029 清除背景
		obj.setAttribute("filter", "");
	}
	var texts = svgDoc.getElementsByTagName('text');
	for (var x = 0; x < texts.length; x++) {
		var obj = texts[x];
		var oldfill=obj.getAttribute("oldfill");
		if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
			oldfill="";
		}
		obj["style"]["fill"] = oldfill;
		obj["style"]["fontWeight"] = 'normal';
		//kenshao 20201029 清除背景
		obj.setAttribute("filter", "");
	}
	var texts = svgDoc.getElementsByTagName('line');
	for (var x = 0; x < texts.length; x++) {
		var obj = texts[x];
		var oldfill=obj.getAttribute("oldfill");
		if (typeof(oldfill) == undefined||oldfill=="undefined"||oldfill==undefined) {
			oldfill="";
		}
		obj["style"]["fill"] = oldfill;
		//kenshao 20201029 清除背景
		obj.setAttribute("filter", "");
	}
}

// cjj 2021-04-29 清除不透明度
function clearGroupHighlight(svgDoc, data){
	if(isNullString(data)) {
		return;
	}
	var selectstr=geturlValueByKey("selectstr");
	if(selectstr === false) {
		return;
	}
	selectstr=unescape(selectstr);
	if(isNullString(selectstr)) {
		return;
	}

	var groups = svgDoc.getElementsByTagName("g");
	for (var p = 0; p < groups.length; p++) {
		var obj = groups[p];
		var opacity = obj.getAttribute("opacity");
		if(isNullString(opacity) || ".5" !== opacity) {
			continue;
		}

		var scode = getCodeFromToolTip(obj) + ";";
		if(!isNullString(scode) && myTrim(scode) !== myTrim(data)){
			obj.setAttribute("opacity","0");
		}
	}
}

function clearHighlight(svgDoc){
	clearHighlight_fill(svgDoc);
	var gs = svgDoc.getElementsByTagName("g");
	for (var p = 0; p < gs.length; p++) {
		var obj = gs[p];
		obj.removeAttribute("filter");
	}
	var lines = svgDoc.getElementsByTagName("line");
	for (var p = 0; p < lines.length; p++) {
		var obj = lines[p];
		obj.removeAttribute("filter");
	}
	var rects = svgDoc.getElementsByTagName("rect");
	for (var p = 0; p < rects.length; p++) {
		var obj = rects[p];
		obj.removeAttribute("filter");
	}
	var texts = svgDoc.getElementsByTagName("text");
	for (var p = 0; p < texts.length; p++) {
		var obj = texts[p];
		obj.removeAttribute("filter");
	}
	var polygons = svgDoc.getElementsByTagName("polygon");
	for (var p = 0; p < polygons.length; p++) {
		var obj = polygons[p];
		obj.removeAttribute("filter");
	}
	var polylines = svgDoc.getElementsByTagName("polyline");
	for (var p = 0; p < polylines.length; p++) {
		var obj = polylines[p];
		obj.removeAttribute("filter");
	}
	var polylines = svgDoc.getElementsByTagName("path");
	for (var p = 0; p < polylines.length; p++) {
		var obj = polylines[p];
		obj.removeAttribute("filter");
	}
	var texts = svgDoc.getElementsByTagName("text");
	for (var p = 0; p < texts.length; p++) {
		var obj = texts[p];
		obj.removeAttribute("filter");
	}
	var circles = svgDoc.getElementsByTagName("circle");
	for (var p = 0; p < circles.length; p++) {
		var obj = circles[p];
		obj.removeAttribute("filter");
	}
	var ellipses = svgDoc.getElementsByTagName("ellipse");
	for (var p = 0; p < ellipses.length; p++) {
		var obj = ellipses[p];
		obj.removeAttribute("filter");
	}

}

function setOldFill(svgDoc){
	var gs = svgDoc.getElementsByTagName("g");
	for (var p = 0; p < gs.length; p++) {
		var obj = gs[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var lines = svgDoc.getElementsByTagName("line");
	for (var p = 0; p < lines.length; p++) {
		var obj = lines[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var rects = svgDoc.getElementsByTagName("rect");
	for (var p = 0; p < rects.length; p++) {
		var obj = rects[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var texts = svgDoc.getElementsByTagName("text");
	for (var p = 0; p < texts.length; p++) {
		var obj = texts[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var polygons = svgDoc.getElementsByTagName("polygon");
	for (var p = 0; p < polygons.length; p++) {
		var obj = polygons[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var polylines = svgDoc.getElementsByTagName("polyline");
	for (var p = 0; p < polylines.length; p++) {
		var obj = polylines[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var polylines = svgDoc.getElementsByTagName("path");
	for (var p = 0; p < polylines.length; p++) {
		var obj = polylines[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var texts = svgDoc.getElementsByTagName("text");
	for (var p = 0; p < texts.length; p++) {
		var obj = texts[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var circles = svgDoc.getElementsByTagName("circle");
	for (var p = 0; p < circles.length; p++) {
		var obj = circles[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}
	var ellipses = svgDoc.getElementsByTagName("ellipse");
	for (var p = 0; p < ellipses.length; p++) {
		var obj = ellipses[p];
		var fillstr=obj["style"]["fill"];
		if (typeof(fillstr) == undefined||fillstr=="undefined"||fillstr==undefined) {
			fillstr="";
		}
		obj.setAttribute("oldfill", fillstr);
	}

}


function linesetsub_info(objstr){
	setsub_info(objstr,"",false);
}
function updateLiClass(liid){
	//还原样式
	for(var i=0;i<10;i++){
		var obj=document.getElementById("li-a"+i);
		if(typeof(obj) != undefined&&obj!=undefined&&obj!="undefined"){
			obj.style.backgroundColor="#f1f6fa";
		}
	}
	//增加样式
	document.getElementById(liid).style.backgroundColor="#2381ae";;
}
function before_setsub_info(objstr){
	//console.log("in  aaaaaaaaaaaaaaaaaaaaaaaaa"+objstr);
	var htmlstr="";
	if(objstr!=""){
		htmlstr="<ul class='category'> ";
		var length=objstr.split(";").length;
		if(length<4){
			for(var k=0;k<length;k++){
				if(objstr.split(";")[k]!=""){
					//var dz_key=objstr.split(";")[k].split("-")[0].trim();
					//var dz_text=objstr.split(";")[k].split("-")[1];
					var dz_key=objstr.split(";")[k];
					if(k==0){
						setsub_info(dz_key,"",true);
						htmlstr=htmlstr+"<li ><a id='li-a"+k+"' style='background-color: rgb(204, 204, 204);' onclick='updateLiClass(\"li-a"+k+"\");setsub_info(\""+dz_key+"\",\"\",true)'>"+dz_key+"</a></li>";
					}else{
						htmlstr=htmlstr+"<li ><a id='li-a"+k+"' onclick='updateLiClass(\"li-a"+k+"\");setsub_info(\""+dz_key+"\",\"\",true)'>"+dz_key+"</a></li>";
					}

				}
			}

		}else{
			for(var k=0;k<4;k++){
				if(objstr.split(";")[k]!=""){
					//var dz_key=objstr.split(";")[k].split("-")[0].trim();
					//var dz_text=objstr.split(";")[k].split("-")[1];
					var dz_key=objstr.split(";")[k];
					if(k==0){
						setsub_info(dz_key,"",true);
						htmlstr=htmlstr+"<li ><a id='li-a"+k+"' style='background-color: rgb(204, 204, 204);' onclick='updateLiClass(\"li-a"+k+"\");setsub_info(\""+dz_key+"\",\"\",true)'>"+dz_key+"</a></li>";
					}else{
						htmlstr=htmlstr+"<li ><a id='li-a"+k+"' onclick='updateLiClass(\"li-a"+k+"\");setsub_info(\""+dz_key+"\",\"\",true)'>"+dz_key+"</a></li>";
					}

				}
			}

			if(objstr.split(";")[4]!=""){
				htmlstr=htmlstr+"<li ><a id='li-a"+k+"' onclick='updateLiClass(\"li-a"+k+"\");showallLi(\"li-a"+k+"\");'>...</a></li>";
				var spans=""
				for(var k=4;k<length;k++){
					if(objstr.split(";")[k]!=""){
						//var dz_key=objstr.split(";")[k].split("-")[0].trim();
						//var dz_text=objstr.split(";")[k].split("-")[1];
						var dz_key=objstr.split(";")[k];
						spans=spans+"<a href='#' onclick='setsub_info(\""+dz_key+"\",\"\",true)'>"+dz_key+"</a></br>";

					}
				}

				document.getElementById("all_li").innerHTML=spans;
			}

		}
		htmlstr=htmlstr+"</ul> ";
		document.getElementById("dialogobjs").style.display="block";
		document.getElementById("dialogobjs").innerHTML=htmlstr;
	}else{
		document.getElementById("dialogobjs").style.display="none";
		document.getElementById("dialogobjs").innerHTML="";
	}


}
function showallLi(liid){

	document.getElementById("all_li").style.display = 'block';
	document.getElementById("all_li").style.left=document.getElementById(liid).offsetLeft ;
	document.getElementById("all_li").style.top=document.getElementById(liid).offsetTop +30;

}
function setsub_info(objstr,selecttext,isduo){
	if(isNullObject(parent.document.getElementById("framec1"))) {
		// byd TIS平台同时打开多个iframe窗口做缓存，去除iframe id的限制
		// return;
	}
	//document.getElementById("dialogsvg").data="SVG/1.svg";
	//document.getElementById("collapseTwo").style.display="block";
	//dialog_svgHandle();
	//height 调整为 400px auto:gsj
	document.getElementById("sub_info").style.height="720px";
	document.getElementById("dialogtablediv").style.maxHeight="330px";
	if(!isduo){
		document.getElementById("dialogobjs").style.display="none";
		// auto:gsj  把360 修改为 260
		// modified by yangyi 230411 把260 修改为 160
		// document.getElementById("collapseThree").style.top="160px";
		//document.getElementById("dialogtitle").style.top="0px";
		document.getElementById("collapseTwo").style.top="30px";
	}else{
		document.getElementById("dialogobjs").style.display="block";
		document.getElementById("collapseThree").style.top="300px";
		//document.getElementById("dialogtitle").style.top="28px";
		document.getElementById("collapseTwo").style.top="60px";

	}
	var ecodeobj = ecodeobjs[objstr];
	//console.log("in--"+document.getElementById("dialogSVGBox").offsetHeight);
	//console.log("in--"+document.getElementById("dialogSVGBox").offsetWidth);
	//判断是否有数据
	//console.log("ecodeobjs=="+typeof(ecodeobjs) != "undefined");
	//console.log("ecodeobjs=="+ecodeobjs!=undefined);

	//判断选择的数据是否存在端子信息中
	// console.log("objstr=="+objstr);
	var ishavedzdd=false;
	var dzxxObj = ecodeobj["EWD_DZXX"];
	if(!isNullObject(dzxxObj)) {
		var topicObj = topicArray[dzxxObj["topicIdx"]];
		var code=topicObj["name"];
		var id = topicObj["id"];
		var leftok=true;
		var rightok=true;
		if(leftok&&rightok){
			var svgimageid="";
			var tablestr = "";
			var svgdesc = "";
			console.log("id="+id);
			if(id!=null&&id!=""){
				svgimageid=topicObj["imagefile"];
				tablestr = topicObj["tablestr"];
				svgdesc = topicObj["secTitle"] || '';
				if (typeof(tablestr) == undefined||tablestr=="undefined"||tablestr==undefined) {
					tablestr="";
				}else{
					//调整 height为 auto:gsjheight=\"
					tablestr=tablestr.replace('<table', '<table width=\"100%\" ');
					//20220613 修改表格过高 zhngdan
					//tablestr=tablestr.replace('<table', '<table width=\"100%\"'+(divheight-80)+'\"');
					tablestr=tablestr.replace('<tbody', '<tbody id=\"dialogtbodydiv\" ');
				}
				//console.log("tablestr=="+tablestr);
				if(selecttext!="g-text"){
					document.getElementById("selecttext").value=selecttext;
				}

				// 插入svg图描述相关内容
				// console.log('svgdesc', svgdesc);
				document.getElementById("dialogtitle").innerHTML = "&nbsp;&nbsp;" + code + "&nbsp;&nbsp;" + svgdesc;
				document.getElementById("dialogsvg").data=svgimageid;
				document.getElementById("dialogsvg").style.display="block";
				//dialog_svgHandle(document.getElementById("dialogsvg"));
				var boxinnerhtml=document.getElementById("dialogSVGBox").innerHTML;
				//console.log("ecodeobjs=="+boxinnerhtml);
				document.getElementById("dialogSVGBox").innerHTML=boxinnerhtml;

				document.getElementById("dialogtablediv").innerHTML=tablestr;
				// console.log(tablestr);
				if(tablestr==null || tablestr == '') {
					document.getElementById("dialogtablediv").style.display="none";
				}else{
					document.getElementById("dialogtablediv").style.display="block";
				}
				ishavedzdd=true;
			} else {
				// svgdesc为空
				document.getElementById("dialogtitle").innerHTML = "&nbsp;&nbsp;" + code;
			}
		}
	} else {
		// svgdesc为空
		document.getElementById("dialogtitle").innerHTML = "&nbsp;&nbsp;" + code;
	}
	//console.log(ishavedzdd);
	console.log("svgimageid=="+svgimageid);
	if(ishavedzdd){

		document.getElementById("dialogSVGBox").style.display="block";
		console.log("svgimageid=="+svgimageid);
		if(svgimageid==null||svgimageid==""||svgimageid=="null"){
			document.getElementById("dialogSVGBox").style.display="none";
			document.getElementById("collapseThree").style.top="60px";
		}
		//document.getElementById("dialogtablediv").style.display="block";

	}else{
		document.getElementById("dialogtitle").innerHTML="&nbsp;&nbsp;"+objstr;
		document.getElementById("dialogsvg").data="#";
		document.getElementById("selecttext").value="";
		document.getElementById("dialogtablediv").innerHTML="";
		document.getElementById("dialogSVGBox").style.display="none";
		document.getElementById("dialogtablediv").style.display="none";
		if(!isduo){
			document.getElementById("dialogobjs").style.display="none";
			document.getElementById("collapseThree").style.top="60px";
			document.getElementById("dialogtitle").style.top="0px";
			document.getElementById("collapseTwo").style.top="30px";
		}else{
			document.getElementById("dialogobjs").style.display="block";
			document.getElementById("collapseThree").style.top="100px";
			document.getElementById("dialogtitle").style.top="30px";
			document.getElementById("collapseTwo").style.top="60px";

		}

	}
	if(typeof(ecodeobj) != undefined&&ecodeobj!=undefined&&ecodeobj!="undefined"){
		document.getElementById("selectDiv").style.display="none";
		var GL_BXH=ecodeobj["EWD_BXH"];
		var GL_XSBZ=ecodeobj["EWD_XSBZ"];
		var GL_JDD=ecodeobj["EWD_JDD"];
		var GL_XTYL=ecodeobj["EWD_XTYL"];
		var GL_DYFB=ecodeobj["EWD_DYFB"];
		if(typeof(GL_BXH) != undefined&&GL_BXH!=undefined&&GL_BXH!="undefined"){
			var htmlstr="";
			for(var i=0,l=GL_BXH.length;i<l;i++){
				var id=GL_BXH[i]["id"];
				var name=GL_BXH[i]["name"];
				// 调整为 target='_blank'  auto:gsj // modify by cjj 2021-01-15 不打开新页面, 在当前页面中打开
				htmlstr+='<li class="sctlink_li"><a class="xref" href="javascript:void(0);" onclick="aTagJump(\''+id+'\', \''+objstr+'\')">'+name+'</a></li>';
			}
			document.getElementById("EWD_BXH").innerHTML=htmlstr;
			if(GL_BXH.length==0){
				document.getElementById("EWD_BXH_div").style.display="none";
			}else{
				document.getElementById("EWD_BXH_div").style.display="block";
			}
		}else{
			document.getElementById("EWD_BXH_div").style.display="none";
		}
		if(typeof(GL_XSBZ) != undefined&&GL_XSBZ!=undefined&&GL_XSBZ!="undefined"){
			var htmlstr="";
			for(var i=0,l=GL_XSBZ.length;i<l;i++){
				var id=GL_XSBZ[i]["id"];
				var name=GL_XSBZ[i]["name"];
				// 调整为 target='_blank'  auto:gsj // modify by cjj 2021-01-15 不打开新页面, 在当前页面中打开
				htmlstr+='<li class="sctlink_li"><a class="xref" href="javascript:void(0);" onclick="aTagJump(\''+id+'\', \''+objstr+'\')">'+name+'</a></li>';
			}
			document.getElementById("EWD_XSBZ").innerHTML=htmlstr;
			if(GL_XSBZ.length==0){
				document.getElementById("EWD_XSBZ_div").style.display="none";
			}else{
				document.getElementById("EWD_XSBZ_div").style.display="block";
			}
		}else{
			document.getElementById("EWD_XSBZ_div").style.display="none";
		}
		if(typeof(GL_JDD) != undefined&&GL_JDD!=undefined&&GL_JDD!="undefined"){
			var htmlstr="";
			for(var i=0,l=GL_JDD.length;i<l;i++){
				var id=GL_JDD[i]["id"];
				var name=GL_JDD[i]["name"];
				// 调整为 target='_blank'  auto:gsj // modify by cjj 2021-01-15 不打开新页面, 在当前页面中打开
				htmlstr+='<li class="sctlink_li"><a class="xref" href="javascript:void(0);" onclick="aTagJump(\''+id+'\', \''+objstr+'\')">'+name+'</a></li>';
			}
			document.getElementById("EWD_JDD").innerHTML=htmlstr;
			if(GL_JDD.length==0){
				document.getElementById("EWD_JDD_div").style.display="none";
			}else{
				document.getElementById("EWD_JDD_div").style.display="block";
			}
		}else{
			document.getElementById("EWD_JDD_div").style.display="none";
		}
		if(typeof(GL_XTYL) != undefined&&GL_XTYL!=undefined&&GL_XTYL!="undefined"){
			var htmlstr="";
			for(var i=0,l=GL_XTYL.length;i<l;i++){
				var id=GL_XTYL[i]["id"];
				var name=GL_XTYL[i]["name"];
				// 调整为 target='_blank'  auto:gsj // modify by cjj 2021-01-15 不打开新页面, 在当前页面中打开
				htmlstr+='<li class="sctlink_li"><a class="xref" href="javascript:void(0);" onclick="aTagJump(\''+id+'\', \''+objstr+'\')">'+name+'</a></li>';
			}
			document.getElementById("EWD_XTYL").innerHTML=htmlstr;
			if(GL_XTYL.length==0){
				document.getElementById("EWD_XTYL_div").style.display="none";
			}else{
				document.getElementById("EWD_XTYL_div").style.display="block";
			}
		}else{
			document.getElementById("EWD_XTYL_div").style.display="none";
		}
		if(typeof(GL_DYFB) != undefined&&GL_DYFB!=undefined&&GL_DYFB!="undefined"){
			var htmlstr="";
			for(var i=0,l=GL_DYFB.length;i<l;i++){
				var id=GL_DYFB[i]["id"];
				var name=GL_DYFB[i]["name"];
				// 调整为 target='_blank'  auto:gsj // modify by cjj 2021-01-15 不打开新页面, 在当前页面中打开
				htmlstr+='<li class="sctlink_li"><a class="xref" href="javascript:void(0);" onclick="aTagJump(\''+id+'\', \''+objstr+'\')">'+name+'</a></li>';
			}
			document.getElementById("EWD_DYFB").innerHTML=htmlstr;
			if(GL_DYFB.length==0){
				document.getElementById("EWD_DYFB_div").style.display="none";
			}else{
				document.getElementById("EWD_DYFB_div").style.display="block";
			}
		}else{
			document.getElementById("EWD_DYFB_div").style.display="none";
		}

		document.getElementById("sub_info").style.display="block";
		collapseTwoIsHidden=false;
		document.getElementById("collapseTwo").style.display="block";
		dialog_currentScale = 1;
	}else{

		document.getElementById("EWD_JDD_div").style.display="none";
		document.getElementById("EWD_XTYL_div").style.display="none";
		document.getElementById("EWD_XSBZ_div").style.display="none";
		document.getElementById("EWD_DYFB_div").style.display="none";
		document.getElementById("EWD_BXH_div").style.display="none";
	}
	if(tablestr!=null && tablestr != '') {

		var divheight=document.getElementById("dialogtablediv").offsetHeight;
		var divtbodyheight=document.getElementById("dialogtbodydiv").offsetHeight;
		console.log("divheight",divheight);
		console.log("divtbodyheight",divtbodyheight);

		if(svgimageid==null||svgimageid==""||svgimageid=="null"){
			document.getElementById("sub_info").style.display="block";
			collapseTwoIsHidden=false;
			document.getElementById("collapseTwo").style.display="block";
			dialog_currentScale = 1;
			document.getElementById("dialogtablediv").style.maxHeight="374px";
			//20220613 选类型表格高度过高问题 zhangdan
			tablestr=tablestr.replace('<table', '<table width=\"100%\" height=\"'+(divheight-80)+'\"');
			tablestr=tablestr.replace('<tbody', '<tbody id=\"dialogtbodydiv\" max-height=\"'+(374-35)+'\"');
			document.getElementById("dialogtablediv").innerHTML=tablestr;
		}else{
			// cjj 2021-02-03 去掉特定高度值的判断
			//if(divheight==184){
			//20220613 选类型弹窗表格高度过高问题 zhangdan
			//tablestr=tablestr.replace('<table', '<table width=\"100%\" height=\"'+divheight+'\"');
			tablestr = tablestr.replace('<table', '<table width=\"100%\" height=\"' + (divheight - 80) + '\"');
			tablestr=tablestr.replace('<tbody', '<tbody id=\"dialogtbodydiv\" max-height=\"'+(divheight-30)+'\"');
			document.getElementById("dialogtablediv").innerHTML=tablestr;
			//}
		}
	}
	
	// 动态计算spanTitle的paddingTop值；
	activeCalcDialogSpanTitlePadding();

	if(ishavedzdd) {
		if(svgimageid!=null&&svgimageid!=""||svgimageid!="null"){
			dialog_svgHandle();
		}
	}
}
// modify by cjj 2021-01-15 不打开新页面, 在当前页面中打开
function aTagJump(id, objstr) {
	let path = window.location.pathname;
	let pathArr = path.split("/");
	let rootPath = '/';
	pathArr.forEach(function(item,index){
		if(index > 0 && index < pathArr.length - 1){
			rootPath = rootPath + item + '/' ;
		}
	})
	if(!isNullObject(parent.document.getElementById("framec1"))){
		parent.document.getElementById("framec1").src = rootPath + id +".html?str="+id+"&selectstr="+escape(objstr);
	}else{
		// byd TIS平台同时打开多个iframe窗口做缓存，去除iframe id的校验
		location.href= rootPath + id +".html?str="+id+"&selectstr="+escape(objstr);
	}
}
function settextshow(obj){
	var svgobj=document.getElementById("svgobj");
	var transform=obj.getAttribute("transform");
	// add by cjj 2021-04-28 先判断是否为空
	if(isNullObject(transform)) {
		return;
	}
	//console.log("transform",transform);
	var transforms=transform.split(" ");
	if(transforms.length>4){
		var textwidth=Number(transforms[4]);
		var textheight=Number(transforms[5].replace(")",""));
		console.log("textwidth",textwidth);
		console.log("textheight",textheight);
		var bodywidth=document.body.offsetWidth;       //网页可见区域宽(body)，包括border、margin等
		var bodyheight=document.body.offsetHeight;
		console.log("bodywidth",bodywidth);
		console.log("bodyheight",bodyheight);    //网页可见区域宽(body)，包括border、margin等
		if(textwidth>(bodywidth/2)){
			svgobj.style.left=-(textwidth-(bodywidth/2));
		}
		if(textheight>(bodyheight/2)){
			svgobj.style.top=-(textheight-(bodyheight/2));
		}
	}
}

// 获取弹窗的title容器动态计算其父级的padding值
function activeCalcDialogSpanTitlePadding() {
	$('.sctlink_box span.title').each(function () {	
		var eleHeight = $(this).height();
		var eleParentPaddingTop = $(this).parent().css('paddingTop').replace('px', '');
		if (eleHeight > 30) {
			var paddingTopDIFV = $(this).height() - 30;
			$(this).parent().css('paddingTop', paddingTopDIFV + 5);
		} else if (eleHeight < 30 && eleParentPaddingTop > 5) {
			$(this).parent().css('paddingTop', 5);
		}
	})
}

/**
 * svg加载,初始化---dig
 *
 * @author gcy
 * @param
 * @returns
 */
function dialog_svgHandle(svgobj){
	console.log('svgobj',svgobj);
	if (typeof(svgobj) == undefined||svgobj=="undefined"||svgobj==undefined) {
		return;
	}
	var SVGDocument = svgobj.contentDocument;
	var s = SVGDocument.querySelector("svg");
	var svgobj_id = svgobj.getAttribute("id");

	if(s==null){
		return false;
	}

	//auto gsj
	s.setAttribute("width","400px");
	s.setAttribute("height","200px");

	//将图片右上角对齐
	svgobj.style.left= '0px';
	svgobj.style.top= '-20px';
	SVGDocument.oncontextmenu=function(e){
		//e.preventDefault();
		return false;
	};
	svgobj.oncontextmenu=function(e){
		//e.preventDefault();
		return false;
	};
	SVGDocument.onmouseout =function(e){
		//console.log("333");
		//params.isDown=false;
	};
	svgobj.onselectstart=function(){
		return false;
	};
	SVGDocument.onselectstart=function(){
		return false;
	};
	//滚动缩放增加
	SVGDocument.addEventListener('mousewheel',function(event){
		event.preventDefault();
		setScrollUpOrDowm(event,"dialog","");
	}, { passive: false });
	//鼠标按下事件
	SVGDocument.onmousedown = function(e) {
		//获取x坐标和y坐标
		dialog_params.x = e.screenX;
		dialog_params.y = e.screenY;
		//获取左部和顶部的偏移量
		dialog_params.l = svgobj.offsetLeft;
		dialog_params.t = svgobj.offsetTop;
		//开关打开
		dialog_params.isDown = true;

		//设置样式
		//SVGDocument.setAttribute("cursor", "move");
		var sdoc = this.querySelector("svg");
		sdoc.setAttribute("cursor", "pointer");
	};
	//鼠标移动
	SVGDocument.onmousemove = function(ev) {

		var e=ev||event;
		if (dialog_params.isDown == false) {
			return;
		}
		if(dialog_params.x==e.screenX&&e.screenY==dialog_params.y){
			return;
		}
		//console.log("in--"+dialog_params.isDown);
		//获取x和y
		var top1=document.getElementById("collapseTwo").style.top;
		var topnum=Number(top1.replace("px","").replace("PX",""));
		var nx = e.screenX;
		var ny = e.screenY-topnum-30;


		//计算移动后的左偏移量和顶部的偏移量
		var nl = nx - (dialog_params.x - dialog_params.l);
		var nt = ny - (dialog_params.y - dialog_params.t);
		svgobj.style.left = nl + 'px';
		svgobj.style.top = nt + 'px';



	};
	//鼠标抬起事件
	SVGDocument.onmouseup = function() {
		//开关关闭
		dialog_params.isDown = false;
		var sdoc = this.querySelector("svg");
		sdoc.setAttribute("cursor", "default");
	};
	//鼠标进入SVG区域，禁用滚轴屏幕滚动事件，
	document.getElementById("dialogSVGBox").onmouseover= function() {
		document.documentElement.style.overflow = "hidden";
	};
	//鼠标移出SVG区域，启用屏幕滚动事件scroll
	document.getElementById("dialogSVGBox").onmouseout= function() {
		document.documentElement.style.overflow = "auto";
	};
	//定义控件事件
	gTagHandle_dialog(SVGDocument,svgobj_id);
	//判断是否有表格，如果有加入表格事件
	if(document.getElementById("dialogtablediv").innerHTML.indexOf("table")!=-1){
		//表格事件
		initdialogTable(SVGDocument);
	}
	var selectText=document.getElementById("selecttext").value;
	//console.log("selectText321"+selectText);
	if(selectText!=""){
		if(document.getElementById("dialogtablediv").innerHTML.indexOf("table")!=-1){
			selectHotspot(SVGDocument,selectText);
			var tables = document.getElementById("dialogtablediv").querySelectorAll("table");
			//console.log(tables+"||"+tables.length);
			if (tables && tables.length > 0) {
				var table = tables[0];
				var tbody = table.querySelector("tbody");
				selectDialogRows(selectText,tbody,"down");
			}
		}else{
			selectHotspot(SVGDocument,selectText);
		}
	}
}

/**
 * svg中元素加载事件
 *
 * @author gcy
 * @param
 * @returns
 */
function gTagHandle_dialog(dialogsvgDoc,embed_id) {

	var texts = dialogsvgDoc.getElementsByTagName("text");
	for (var i = 0; i < texts.length; i++) {
		var obj = texts[i];
		obj.setAttribute("cursor", "pointer");
		obj.addEventListener("click", function(evnt) {
			clearHighlight_fill(dialogsvgDoc);
			this["style"]["fill"] = "red";
			//kenshao 弹出窗口的svg图 解决点击不能正确选中背景的bug 20201029
			var childNodes=this.parentNode.childNodes;
			for (var pi = 0; pi < childNodes.length; pi++) {
				var nodeName=childNodes[pi].nodeName;
				var nodeText=childNodes[pi].textContent;
				if(nodeName=="rect"||nodeName=="path"||nodeName=="circle"||nodeName=="polygon"||nodeName=="ellipse"){
					childNodes[pi]["style"]["fill"] = "#A09DD9";

				}
			}
			//kenshao 增加判断是否有表格div
			if(document.getElementById("dialogtablediv") && document.getElementById("dialogtablediv").innerHTML.indexOf("table")!=-1){
				selectHotspot(dialogsvgDoc,this.textContent);
				var tables = document.getElementById("dialogtablediv").querySelectorAll("table");
				//console.log(tables+"||"+tables.length);
				if (tables && tables.length > 0) {
					var table = tables[0];
					var tbody = table.querySelector("tbody");
					selectDialogRows(this.textContent,tbody,"down");
				}
			}

		});

	}

	setOldFill(dialogsvgDoc);


}
/**
 * 滚动鼠标触发事件
 * @author gcy
 * @param
 * @param
 */
var currentScale = 1;
var dialog_currentScale = 1;
function setScrollUpOrDowm(e,type,idName) {
	e = e || window.event;
	if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
		if (e.wheelDelta > 0) { //当滑轮向上滚动时
			zoom_in_by_e(e,type,idName);
		}
		if (e.wheelDelta < 0) { //当滑轮向下滚动时
			zoom_out_by_e(e,type,idName);
		}
	} else if (e.detail) {  //Firefox滑轮事件
		if (e.detail> 0) { //当滑轮向上滚动时
			zoom_in_by_e(e,type,idName);
		}
		if (e.detail< 0) { //当滑轮向下滚动时
			zoom_out_by_e(e,type,idName);
		}
	}
}
//放大
function zoom_in_by_e(e,type,idName){
	var svgobj=document.getElementById("svgobj");
	if(type=="dialog"){
		svgobj=document.getElementById("dialogsvg");
	}
	var SVGDocument = svgobj.contentDocument;
	var s = SVGDocument.querySelector("svg");
	if(s.length == 0 ){
		return false;
	}
	var currentHeight="";
	var currentwidth="";
	//如果没有设置宽高，从viewBox中获取
	if(s.getAttribute("height")==null){
		//console.log(s.getAttribute("viewBox"));
		var viewBoxstr=s.getAttribute("viewBox").split(" ");
		currentwidth=viewBoxstr[2];
		currentHeight=viewBoxstr[3];

	}else{
		currentHeight = s.getAttribute("height").replace("px","");
		currentwidth = s.getAttribute("width").replace("px","");
	}

	if(type=="dialog"){
		if(dialog_currentScale < 10){
			s.setAttribute("height",Number(currentHeight)*1.1+"px");
			s.setAttribute("width",Number(currentwidth)*1.1+"px");
			dialog_currentScale = dialog_currentScale*1.1;
			var l=svgobj.style.left.replace("px","");
			var t=svgobj.style.top.replace("px","");
			var new_l=Number(l)-Number(e.clientX)*0.1;
			var new_t=Number(t)-Number(e.clientY)*0.1;
			svgobj.style.left= new_l + 'px';
			svgobj.style.top= new_t+'px';
		}
	}else{
		if(currentScale < 10){
			s.setAttribute("height",Number(currentHeight)*1.1+"px");
			s.setAttribute("width",Number(currentwidth)*1.1+"px");
			currentScale = currentScale*1.1;
			var l=svgobj.style.left.replace("px","");
			var t=svgobj.style.top.replace("px","");
			var new_l=Number(l)-Number(e.clientX)*0.1;
			var new_t=Number(t)-Number(e.clientY)*0.1;
			svgobj.style.left= new_l + 'px';
			svgobj.style.top= new_t+'px';
		}
	}
}

function zoom_in(){
	var svgobj=document.getElementById("svgobj");
	//var SVGDocument = svgobj.getSVGDocument();
	var SVGDocument = svgobj.contentDocument;
	var s = SVGDocument.querySelector("svg");
	if(s.length == 0 ){
		return false;
	}
	var currentHeight="";
	var currentwidth="";
	//如果没有设置宽高，从viewBox中获取
	if(s.getAttribute("height")==null){
		//console.log(s.getAttribute("viewBox"));
		var viewBoxstr=s.getAttribute("viewBox").split(" ");
		currentwidth=viewBoxstr[2];
		currentHeight=viewBoxstr[3];

	}else{
		currentHeight = s.getAttribute("height").replace("px","");
		currentwidth = s.getAttribute("width").replace("px","");
	}
	//alert(currentHeight+"--"+currentwidth);
	if(currentScale < 10){
		s.setAttribute("height",Number(currentHeight)*1.1+"px");
		s.setAttribute("width",Number(currentwidth)*1.1+"px");
		currentScale = currentScale*1.1;
		var l=svgobj.style.left.replace("px","");
		var t=svgobj.style.top.replace("px","");

		var new_l=Number(l)-Number(currentwidth)*0.05;
		var new_t=Number(t)-Number(currentHeight)*0.05;

		svgobj.style.left= new_l + 'px';
		svgobj.style.top= new_t+'px';
	}
}
//缩放
function zoom_out_by_e(e,type,idName){

	var svgobj=document.getElementById("svgobj");
	if(type=="dialog"){
		svgobj=document.getElementById("dialogsvg");
	}
	var SVGDocument = svgobj.contentDocument;
	var s = SVGDocument.querySelector("svg");
	if(s.length == 0 ){
		return false;
	}
	//var height=s.getAttribute("height")==null?s.style.height!s.getAttribute("height");
	//var width=s.getAttribute("width")==null?s.style.width!s.getAttribute("width");

	var currentHeight="";
	var currentwidth="";
	//如果没有设置宽高，从viewBox中获取
	if(s.getAttribute("height")==null){
		//console.log(s.getAttribute("viewBox"));
		var viewBoxstr=s.getAttribute("viewBox").split(" ");
		currentwidth=viewBoxstr[2];
		currentHeight=viewBoxstr[3];

	}else{
		currentHeight = s.getAttribute("height").replace("px","");
		currentwidth = s.getAttribute("width").replace("px","");
	}


	if(type=="dialog"){
		if(dialog_currentScale > 0.5){
			s.setAttribute("height",Number(currentHeight)/1.1+"px");
			s.setAttribute("width",Number(currentwidth)/1.1+"px");
			dialog_currentScale = dialog_currentScale/1.1;
			var l=svgobj.style.left.replace("px","");
			var t=svgobj.style.top.replace("px","");

			var new_l=Number(l)+(e.clientX-Number(e.clientX)/1.1);
			var new_t=Number(t)+(e.clientY-Number(e.clientY)/1.1);

			svgobj.style.left= new_l + 'px';
			svgobj.style.top= new_t+'px';
		}
	}else{
		if(currentScale > 0.5){
			s.setAttribute("height",Number(currentHeight)/1.1+"px");
			s.setAttribute("width",Number(currentwidth)/1.1+"px");
			currentScale = currentScale/1.1;
			var l=svgobj.style.left.replace("px","");
			var t=svgobj.style.top.replace("px","");

			var new_l=Number(l)+(e.clientX-Number(e.clientX)/1.1);
			var new_t=Number(t)+(e.clientY-Number(e.clientY)/1.1);

			svgobj.style.left= new_l + 'px';
			svgobj.style.top= new_t+'px';
		}
	}
}

function zoom_out(){
	var svgobj=document.getElementById("svgobj");
	//var SVGDocument = svgobj.getSVGDocument();
	var SVGDocument = svgobj.contentDocument;
	var s = SVGDocument.querySelector("svg");
	if(s.length == 0 ){
		return false;
	}
	var currentHeight="";
	var currentwidth="";
	//如果没有设置宽高，从viewBox中获取
	if(s.getAttribute("height")==null){
		//console.log(s.getAttribute("viewBox"));
		var viewBoxstr=s.getAttribute("viewBox").split(" ");
		currentwidth=viewBoxstr[2];
		currentHeight=viewBoxstr[3];

	}else{
		currentHeight = s.getAttribute("height").replace("px","");
		currentwidth = s.getAttribute("width").replace("px","");
	}

	if(currentScale > 0.5){
		s.setAttribute("height",Number(currentHeight)/1.1+"px");
		s.setAttribute("width",Number(currentwidth)/1.1+"px");
		currentScale = currentScale/1.1;
		var l=svgobj.style.left.replace("px","");
		var t=svgobj.style.top.replace("px","");

		var new_l=Number(l)+Number(currentwidth)*0.05;
		var new_t=Number(t)+Number(currentHeight)*0.05;

		svgobj.style.left= new_l + 'px';
		svgobj.style.top= new_t+'px';
	}
}


function openDiv(clecttype){
	var selecttype=document.getElementById("selectType").value;
	var selectid=document.getElementById("selectId").value;
	var selectdiv=document.getElementById("selectDiv");
	if(selectid==""){
		selectdiv.innerHTML="<div class='sctlink_container_title'>"+currentDialogI18n.AP+"</div><ul class='sctlink_ul'><li class='sctlink_li'><a class='xref'>"+currentDialogI18n.EINF+"</a></li></ul></div>";
	}else{
		if(selecttype=="line"){
			selectdiv.innerHTML="<div class='sctlink_container_title'>"+currentDialogI18n.AP+"</div><ul class='sctlink_ul'>"+
				"<li class='sctlink_li'><a class='xref' href='show_1.html' >"+clecttype+currentDialogI18n.AD1+"</a></li>"+
				"<li class='sctlink_li'><a class='xref' href='show_1.html'>"+clecttype+currentDialogI18n.AD2+"</a></li>"+
				"<li class='sctlink_li'><a class='xref' href='show_1.html'>"+clecttype+currentDialogI18n.AD3+"</a></li>"+
				"</ul></div>";
		}else if(selecttype=="rect"){
			selectdiv.innerHTML="<div class='sctlink_container_title'>"+currentDialogI18n.AP+"</div><ul class='sctlink_ul'>"+
				"<li class='sctlink_li'><a class='xref' href='show_1.html' >"+clecttype+currentDialogI18n.AD1+"</a></li>"+
				"<li class='sctlink_li'><a class='xref' href='show_1.html'>"+clecttype+currentDialogI18n.AD2+"</a></li>"+
				"<li class='sctlink_li'><a class='xref' href='show_1.html'>"+clecttype+currentDialogI18n.AD3+"</a></li>"+
				"</ul></div>";
		}else{

			selectdiv.innerHTML="<div class='sctlink_container_title'>"+currentDialogI18n.AP+"</div><ul class='sctlink_ul'>"+
				"<li class='sctlink_li'><a class='xref' href='show_1.html' >"+clecttype+currentDialogI18n.AD1+"</a></li>"+
				"</ul></div>";
		}

	}
	//console.log("---"+selecttype+"*****************"+selectid+"---");
	selectdiv.style.display="block";
	moveHandle(selectdiv);
	selectdiv.onmouseleave = function() {
		this.style.display = 'none';
	}

}

/**
 * 初始化端子说明图上的Table，添加点击事件触发端子图高亮效果
 *
 * @author guowei
 */
function initTable(svgDoc) {

	var tables = document.getElementById('tablediv').querySelectorAll("table");
	//console.log(tables+"||"+tables.length);
	if (tables && tables.length > 0) {
		for (let j = 0; j < tables.length; j++) {
			let table = tables[j];
			let tbody = table.querySelector("tbody");
			let trs = tbody.getElementsByTagName("tr");
			for (let i = 0; i < trs.length; i++) {
				let tr = trs[i];
				tr.style.cursor = "pointer";
				tr.addEventListener("click", function (evnt) {
					// modify by cjj 2020-12-30 当div .p不存在时也能读到td的取值
					let td = this.querySelector("td div .p");
					if (td == null) {
						td = this.querySelector("td");
					}
					if (td) {
						selectHotspot(svgDoc, td.textContent);
						selectRows(td.textContent, tbody, "top");
					}
				});
			}
		}

	}
}
function initdialogTable(svgDoc) {

	var tables = document.getElementById('dialogtablediv').querySelectorAll("table");
	//console.log(tables+"||"+tables.length);
	if (tables&&tables.length>0) {
		var table = tables[0];
		var tbody = table.querySelector("tbody");
		var trs = tbody.getElementsByTagName("tr");
		for (var i = 0; i < trs.length; i++) {
			var tr = trs[i];
			tr.style.cursor = "pointer";
			tr.addEventListener("click", function(evnt) {
				var td = this.querySelector("td div .p");
				if(td == null) {
					td = this.querySelector("td");
				}
				if (td) {
					selectHotspot(svgDoc,td.textContent);
					selectDialogRows(td.textContent,tbody,"top");
				}
			});
		}
		// 支持手动拖拽改变端子弹窗表格列宽
		dragTable('#dialogtablediv');
	}
}
/**
 * 选中表格中某一列，改变列宽
 * 注意需要配合css样式：dragHandler、dialogTableDivLayer
 * @author yangyi
 * @param table选择器 如：id选择器
 */
function dragTable(tableSelectPar) {
	var firstRowEle = $(tableSelectPar+' th')
	if (firstRowEle && firstRowEle.length<=0) {
		firstRowEle = $(tableSelectPar+' tr:eq(0) td');
	}
	// 在初始化时需要设置宽度值
	if (firstRowEle && firstRowEle.length > 0) {
		for (var i = 0; i < firstRowEle.length; i++){
			currentColWidth = $(firstRowEle[i]).width()
			$(firstRowEle[i]).css('width', currentColWidth);
			$(tableSelectPar+' td:nth-child('+(i+1)+')').css('width',currentColWidth)
		}
	} else {
		return;
	}
	// 设置鼠标移入事件
	firstRowEle.mouseover(function (e) {
		if (($(this).find("div").length <= 0)) {
			// 鼠标移动到表头上时，在th内部添加一个div 元素，用于处理后续拖动事件
			$(this).append("<div class='dragHandler'></div>")

			// 处理上面添加的元素的鼠标按下事件
			$(".dragHandler").mousedown(function (evt) {
				// 在添加的元素上按下时，记录下当前的th表头
				var dragTh = $(this).parent();
				// 获取下标，如果是最后一个单元格则不做拉拽处理
				var index = dragTh.index();
				var lastIndex = dragTh.parent().children().last().index();
				if (lastIndex === index) return;
				var currentCol = $(tableSelectPar+' td:nth-child('+(index+1)+')')
				// 记录按下时的鼠标位置
				var oldClientX = evt.clientX;
				// 获取当前鼠标按下时的表头的宽度
				var oldWidth = dragTh.width();
				var oldWidthArr = [];
				for (var i = 0; i < firstRowEle.length; i++){
					oldWidthArr.push($(firstRowEle[i]).width());
				}

				/*  添加一个全局layer层，用于处理鼠标按下时鼠标移动事件，因为不能在第一步添加的元素上处理鼠标移动事件，添加的元素太小，
					鼠标容易跑出范围，就捕获不到后续事件
					所以添加一个全局的遮罩层，捕获鼠标移动事件。
				 */
				var changeSizeLayer = $('<div class="dialogTableDivLayer"><div class="tableMoveMask"></div></div>');
				$(tableSelectPar).append(changeSizeLayer);

				var moveMaskLayer = $('div.tableMoveMask');
				var pinjunmoveDestance;
				changeSizeLayer.on('mousemove', function (evt) {
					// 处理遮罩层的鼠标移动事件，计算新的表头宽度
					var moveDestance = evt.clientX - oldClientX;
					if (moveDestance < 0) {
						if (moveDestance + oldWidth < 1) {
							moveDestance = 1 - oldWidth;	
						}
					}
					pinjunmoveDestance = moveDestance / lastIndex - index;
					var newWidth = moveDestance + oldWidth;
					//设置新的宽度
					if ($(tableSelectPar + ' th') && $(tableSelectPar + ' th').length > 0) {
						$(tableSelectPar+' th:nth-child('+(index+1)+')').css('width', newWidth);
					}
					currentCol.css('width', newWidth);	
					
				});

				moveMaskLayer.on('mouseup', function (evt) {
					// 鼠标抬起后，计算新的表格宽度
					for (var i = 0; i < firstRowEle.length; i++) {
						if (i < index) {
							if ($(tableSelectPar + ' th') && $(tableSelectPar + ' th').length > 0) {
								$(tableSelectPar + ' th:nth-child(' + (i + 1) + ')').css('width', oldWidthArr[i]);
							}
							$(tableSelectPar + ' td:nth-child(' + (i + 1) + ')').css('width', oldWidthArr[i]);
						} else if (i > index) {
							if ($(tableSelectPar + ' th') && $(tableSelectPar + ' th').length > 0) {
								$(tableSelectPar + ' th:nth-child(' + (i + 1) + ')').css('width', oldWidthArr[i] - pinjunmoveDestance);
							}
							$(tableSelectPar + ' td:nth-child(' + (i + 1) + ')').css('width', oldWidthArr[i] - pinjunmoveDestance);
						}
					}
					// 鼠标按键复位时，要清楚遮罩层
					changeSizeLayer.remove();
					dragTh.find('.dragHandler').remove();
				});
			})
		}

		$(this).mouseleave(function () {
			// 鼠标离开表头时，要移除第一步添加的div
			$(this).find("div").remove()
		})
	})
}
/**
 * 选中端子图上的Table中某一行
 *
 * @author guowei
 * @param id
 */
function selectRows(id,tbody,direction) {
	if(tbody){
		var trs = tbody.querySelectorAll("tr");
		for (var i = 0; i < trs.length; i++) {
			var tr = trs[i];
			var td = tr.querySelector("td div .p");
			if(td == null) {
				td = tr.querySelector("td");
			}
			if (td && myTrim(id) == myTrim(td.textContent)) {
				tr.style.background = "#333333 linear-gradient(to top, rgba(0,255,0,0), rgba(112, 157, 205, 0.48))";
				tr.style.color = "white";
				tr.style.fontWeight = "bold";
				setScrollTop(tr,direction);
			} else {
				tr.style.background = "";
				tr.style.color = "";
				tr.style.fontWeight = "";
			}
		}
	}
}

function selectDialogRows(id,tbody,direction) {
	if(tbody){
		var trs = tbody.querySelectorAll("tr");
		for (var i = 0; i < trs.length; i++) {
			var tr = trs[i];
			var td = tr.querySelector("td div .p");
			if(td == null) {
				td = tr.querySelector("td");
			}
			if (td && myTrim(id) == myTrim(td.textContent)) {
				tr.style.background = "#333333 linear-gradient(to top, rgba(0,255,0,0), rgba(112, 157, 205, 0.48))";
				tr.style.color = "white";
				tr.style.fontWeight = "bold";
				if(direction=="down"){
					setDialogScrollTop(tr);
				}
			} else {
				tr.style.background = "";
				tr.style.color = "";
				tr.style.fontWeight = "";
			}
		}
	}
}

/**
 * 点亮端子号
 *
 * @author guowei
 * @param id
 */
function selectHotspot(svgDoc,id) {

	var texts = svgDoc.getElementsByTagName('text');
	clearHighlight_fill(svgDoc);
	for (var x = 0; x < texts.length; x++) {
		var o = texts[x];
		if (myTrim(id) == myTrim(o.textContent)) {
			o["style"]["fill"] = "red";
			
			// yangyi 230717 遵循byd业务要求，将选中内容居中显示功能屏蔽
			// cjj 2021-05-17 将选中的居中显示
			// var svgobj=document.getElementById("svgobj");
			// var doc = svgobj.contentDocument;
			// if(doc === svgDoc) {
			// 	var clientRect = o.getBoundingClientRect();
			// 	svgobj.style.left = (svgobj.parentNode.offsetLeft - clientRect["x"] + svgobj.parentNode.offsetWidth/2) + 'px';
			// 	svgobj.style.top = (svgobj.parentNode.offsetTop - clientRect["y"] + svgobj.parentNode.offsetHeight/2) + 'px';
			// }

			//kenshao 20201029
			var textParent = o.parentNode;
			//if(textParent.hasAttribute('id')){
			//	textParent=o.parentNode.parentNode;
			//}

			//设置整个框高亮
			var childNodes=textParent.childNodes;


			for (var pi = 0; pi < childNodes.length; pi++) {
				var nodeName=childNodes[pi].nodeName;
				var nodeText=childNodes[pi].textContent;
				if(nodeName=="rect"||nodeName=="path"||nodeName=="circle"||nodeName=="polygon"||nodeName=="ellipse"){
					childNodes[pi]["style"]["fill"] = "#A09DD9";
				}
			}
		}
	}
}

function myTrim(str){
	return str == null ? "" : str.replace(/(^\s*)|(\s*$)/g,'');
}


/**
 * 实现滚动条定位效果
 * @author guowei
 * @param tr
 * @param direction
 */
function setScrollTop(tr,direction) {
	if(direction=="top"){
		return;
	}
	// modified by yangyi at 230404：多个表格跳转存在问题，修复如下
	var selectdiv = document.getElementById("tablediv");
	// 判断当前表格在所在父级元素的下标，获取精确跳转高度
	var child = tr.parentNode.parentNode;
	var topOffset = child.offsetTop - selectdiv.offsetTop;
	var max = tr.offsetTop-1 + topOffset -10;
	if(max<400 && tr.offsetHeight + max <= selectdiv.offsetHeight){
		selectdiv.scrollTop=0;
	}else{
		selectdiv.scrollTop=max-(selectdiv.offsetHeight-tr.offsetHeight)/(2*tr.offsetHeight)*tr.offsetHeight;
	}
}
function setDialogScrollTop(tr) {
	var selectdiv=document.getElementById("dialogtbodydiv");
	// cjj 2021-02-03 优化滚动条定位
	var thead = selectdiv.parentNode.getElementsByTagName("thead")[0];
	var scrollTop = selectdiv.scrollTop;
	var max=tr.offsetTop-1;
	if(thead){
		max=tr.offsetTop-thead.offsetHeight-1;
	}
	//获取str参数
	//console.log("max=="+max);
	if(max<200 && tr.offsetHeight + max <= selectdiv.offsetHeight){
		selectdiv.scrollTop=0;
	}else{
		selectdiv.scrollTop=max-(selectdiv.offsetHeight-tr.offsetHeight)/(2*tr.offsetHeight)*tr.offsetHeight;
	}

	//console.log("scrollTop=="+selectdiv.scrollTop);
}

function showcollapseTwo(){
	//return;
	if(collapseTwoIsHidden){
		document.getElementById("collapseTwo").style.display="block";
		document.getElementById("sub_info").style.height="720px";
		collapseTwoIsHidden=false;
	}else{
		document.getElementById("collapseTwo").style.display="none";
		document.getElementById("sub_info").style.height="100px";
		collapseTwoIsHidden=true;
	}
}
function printSVG(){
	//获取svg图片
	//auto:gsj
	var urlprint = window.open("print.html?url="+printurl+"&pw="+printW);
	//setTimeout(function(){urlprint.print()},10);
}

function checkRate(nubmer)
{
	var re =  /^[0-9a-zA-Z]*$/g;  //判断字符串是否为数字和字母组合     //判断正整数 /^[1-9]+[0-9]*]*$/
	if (!re.test(nubmer))
	{
		return false;
	}else{
		return true;
	}
}
function feedback(){

	parent.document.getElementById("feedbackdiv").style.display="block";
}
function showhelp(){
	//获取svg图片
	if(!isNullObject(parent.document.getElementById("framec1"))){
		parent.document.getElementById("framec1").src="helpdocument/help.pdf";
	}
}
function hiddentree(){
	//获取svg图片
	parent.document.getElementById("tree").style.display = 'none';
	parent.document.getElementById("linetree").style.display = 'block';
}


function searchText(){
	//获取输入文字
	var searchtext=document.getElementById("searchTXT").value;
	var svgobj=document.getElementById("svgobj");
	var svgDoc = svgobj.contentDocument;
	//清除所有显示
	clearHighlight_fill(svgDoc);
	if(searchtext==""){
		return;
	}
	var isfrist=true;
	var texts = svgDoc.getElementsByTagName('text');
	//加载样式
	for (var p = 0; p < texts.length; p++) {
		var obj = texts[p];
		var textvalue=obj.textContent;
		if(textvalue.indexOf(searchtext)>=0){
			if(isfrist){
				settextshow(obj);
				isfrist=false;
			}
			obj["style"]["fill"] = "red";
			//设置整个框高亮
			var childNodes=obj.parentNode.childNodes;
			for (var pi = 0; pi < childNodes.length; pi++) {
				var nodeName=childNodes[pi].nodeName;
				var nodeText=childNodes[pi].textContent;
				if(nodeName=="rect"||nodeName=="path"||nodeName=="circle"||nodeName=="polyon"||nodeName=="ellipse"){
					childNodes[pi]["style"]["fill"] = "#A09DD9";
					//kenshao 20201029 搜索结果自动跳转
					//childNodes[pi].scrollIntoView();
					//childNodes[pi].setAttribute("filter", "url(#drop-shadow)");
				}
			}
		}
	}


}
function clearText(){
	var svgobj=document.getElementById("svgobj");
	var svgDoc = svgobj.contentDocument;
	//清除所有显示
	clearHighlight_fill(svgDoc);
}

function closedDialog(){
	document.getElementById('sub_info').style.display='none';
}

function globalsearchText(){
	var arr = new Array();
	var arr_int=0;
	var arrdzxx = new Array();
	var arrdzxx_int=0;
	var objstr = "";
	var htmlstr="";
	//获取输入文字
	var searchTXTobj=document.getElementById("searchTXT");
	var searchtext=document.getElementById("searchTXT").value;
	if(searchtext==""){
		return;
	}
	console.log("searchtext",searchtext);
	var popUp = document.getElementById("test");
	for(var i=0,l=topicArray.length;i<l;i++){
		var topicarrayname=topicArray[i]["name"];
		var topicarraytype=topicArray[i]["ewdtype"];
		if(topicarrayname.indexOf(searchtext) != -1){
			if(topicarraytype=="EWD_DZXX"){
				arrdzxx[arrdzxx_int]=topicArray[i];
				arrdzxx_int++;
			}else{
				arr[arr_int]=topicArray[i];
				arr_int++;
			}
		}
	}
	console.log("arr.length",arr.length);
	console.log("arrdzxx.length",arrdzxx.length);
	//console.log(searchTXTobj.getBoundingClientRect().left);
	//console.log(searchTXTobj.getBoundingClientRect().top);
	document.getElementById("searchDIV").innerHTML="";
	var spans="";
	for(var k=0;k<arr.length;k++){
		var topicobj=arr[k];
		var id=topicobj["id"];
		var name=topicobj["name"];
		spans=spans+"<a href='index.html?id="+id+"' target='_blank'>"+name+"</a><br/>";
	}
	for(var k=0;k<arrdzxx.length;k++){
		var topicobj=arrdzxx[k];
		var id=topicobj["id"];
		var name=topicobj["name"];
		spans=spans+"<a href='#' onclick='search_setsub_info(\""+id+"\");' >"+name+"</a><br/>";

	}
	console.log("spans",spans);
	document.getElementById("searchDIV").innerHTML=spans;
	//弹框
	document.getElementById("searchDIV").style.display = 'block';
	document.getElementById("searchDIV").style.left=searchTXTobj.getBoundingClientRect().left;
	document.getElementById("searchDIV").style.top=searchTXTobj.getBoundingClientRect().top+30;

}

function search_setsub_info(topicID){

	//判断选择的数据是否存在端子信息中
	var topicObj = topicArray[topicMap[topicID]];
	if(topicObj["ewdtype"] == "EWD_DZXX") {
		var code=dzxxarr[i]["name"];

		//获取开通参数
		var codes="";
		var namesize=code.length;
		for(var p =0 ; p<code.length ;p++ ){
			var value=code.charAt(p);

			if(checknum(value)){
				codes=codes+value;
			}else{
				break;
			}

		}
		if(codes==""){
			codes=code;
		}
		setsub_info(codes,"",false);
	}
}

function checknum(value) {
	var Regx = /^[A-Za-z0-9]*$/;
	if (Regx.test(value)) {
		return true;
	}else {
		return false;
	}
}

function getsvgfilter(x,y){
	var defs = document.createElementNS("http://www.w3.org/2000/svg","defs");
	var filter = document.createElementNS("http://www.w3.org/2000/svg","filter");
	filter.setAttributeNS(null,"x",x);
	filter.setAttributeNS(null,"y",y);
	filter.setAttributeNS(null,"width","130%");
	filter.setAttributeNS(null,"height","130%");
	filter.setAttributeNS(null,"filterUnits","userSpaceOnUse");
	filter.setAttributeNS(null,"id","drop-shadow");

	var feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");
	//kenshao 20201029 增加电路图线选中的背景色宽度
	feGaussianBlur.setAttributeNS(null,"stdDeviation","4");
	feGaussianBlur.setAttributeNS(null,"in","SourceGraphic");
	filter.appendChild(feGaussianBlur);

	var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix");
	feColorMatrix.setAttributeNS(null,"type","matrix");
	feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0");
	//kenshao 20201029 增加电路图线选中的背景色深度

	//feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 3 0");

	console.log(feColorMatrix);

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
	filter.setAttributeNS(null,"width","130%");
	filter.setAttributeNS(null,"height","130%");
	filter.setAttributeNS(null,"filterUnits","userSpaceOnUse");
	filter.setAttributeNS(null,"id","drop-shadow-chu");

	var feGaussianBlur = document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");
	//kenshao 20201029 增加电路图线选中的背景色宽度
	feGaussianBlur.setAttributeNS(null,"stdDeviation","4");
	feGaussianBlur.setAttributeNS(null,"in","SourceGraphic");
	filter.appendChild(feGaussianBlur);

	var feColorMatrix = document.createElementNS("http://www.w3.org/2000/svg","feColorMatrix");
	feColorMatrix.setAttributeNS(null,"type","matrix");
	//feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0");
	//kenshao 20201029 增加电路图线选中的背景色深度

	feColorMatrix.setAttributeNS(null,"values","0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 3 0");

	console.log(feColorMatrix);

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

function showMenu(){
	setTimeout(function(){
		//$('<div style="z-index:1;position:fixed;left:0,top:20">this is menu<br>menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br>menu3menu2<br><a onclick="alert(2);" href="#">menu3</a></div>').insertBefore('#goleft')

	},500);
}

// modify by cjj 2021-01-21 完善全屏缩放
var fullScreenInfo = null;
function fullScreen(){
	var fullScreenEle = document.getElementById("full_screen_btn");
	var svgobj=document.getElementById("svgobj");
	var tablediv = document.getElementById("tablediv");
	var clientHeight = document.documentElement.clientHeight;

	var str=geturlValueByKey("str");
	if(isNullString(str)) {
		str = getHtmlDocName();
	}
	var svgimageid="";
	var tablestr="";
	if(isNullString(str)){
		return;
	}
	var topicObj = topicArray[topicMap[str]];
	tablestr=topicObj["tablestr"];

	var topictitle = document.getElementsByClassName("title");
	var ewdconbody = document.getElementsByClassName("ewdconbody");

	if(fullScreenEle.title==currentDialogI18n.FULL){
		fullScreenEle.src="./img/default/normal_screen.png";
		fullScreenEle.title=currentDialogI18n.CFULL;
		// 非全屏的时候才记录
		if(!fullScreenInfo.full_screen) {
			fullScreenInfo.frame_cols = parent.document.getElementsByTagName('frameset')[0].cols;
		}
		parent.document.getElementsByTagName('frameset')[0].cols = "0,*";
		if(tablediv) {
			tablediv.style.display="none";
		}

		fullScreenInfo.picbox_height = document.getElementById("picBox").style.height;
		fullScreenInfo.picbox_border = document.getElementById("picBox").style.border;
		document.getElementById("picBox").style.height=clientHeight + "px";
		document.getElementById("picBox").style.border = "0px solid #000";
		if(topictitle.length > 0) {
			topictitle[0].style.display="none";
		}
		fullScreenInfo.body_margin = document.body.style.margin;
		document.body.style.margin = "0px";
		if(ewdconbody.length > 0) {
			fullScreenInfo.ewdconbody_margin = ewdconbody[0].style.margin;
			ewdconbody[0].style.margin = "0px";
		}
		fullScreenInfo.full_screen = true;
		parent.document.getElementsByTagName('frameset')[0].fullScreenInfo = fullScreenInfo;
	}else {
		fullScreenEle.src="./img/default/full_screen.png";
		fullScreenEle.title=currentDialogI18n.FULL;
		parent.document.getElementsByTagName('frameset')[0].cols = fullScreenInfo.frame_cols;
		if(tablediv && !isNullString(tablestr)) {
			tablediv.style.display="block";
		}
		document.getElementById("picBox").style.height=fullScreenInfo.picbox_height;
		document.getElementById("picBox").style.border = fullScreenInfo.picbox_border;
		if(topictitle.length > 0) {
			topictitle[0].style.display="block";
		}
		document.body.style.margin = fullScreenInfo.body_margin;
		if(ewdconbody.length > 0) {
			ewdconbody[0].style.margin = fullScreenInfo.ewdconbody_margin;
		}
		fullScreenInfo.full_screen = false;
		parent.document.getElementsByTagName('frameset')[0].fullScreenInfo = null;
	}
}

function initFrameButton(){
	var toolbarDiv = document.createElement('p');
	toolbarDiv.setAttribute('class','toolbar');
	toolbarDiv.style.top='1px';
	toolbarDiv.style.left='80%';
	toolbarDiv.style.position='absolute';
	var zoominEle = document.createElement('img');
	zoominEle.src="./img/default/zoom_in.png";
	zoominEle.title=currentDialogI18n.ZI;
	zoominEle.style.width = '20px';
	zoominEle.style.marginLeft='8px';
	zoominEle.addEventListener("click", function(){
		zoom_in();
	});
	var zoomoutEle = document.createElement('img');
	zoomoutEle.src="./img/default/zoom_out.png";
	zoomoutEle.title=currentDialogI18n.ZO;
	zoomoutEle.style.width='20px';
	zoomoutEle.style.marginLeft='8px';
	zoomoutEle.addEventListener("click", function(){
		zoom_out();
	});
	// if(!isNullObject(parent.document.getElementById("framec1")) ) {
		var fullScreenEle = document.createElement('img');
		fullScreenEle.src="./img/default/full_screen.png";
		fullScreenEle.id="full_screen_btn";
		fullScreenEle.title=currentDialogI18n.FULL;
		fullScreenEle.style.width='20px';
		fullScreenEle.style.marginLeft='8px';
		fullScreenEle.addEventListener("click", function(){
			fullScreen();
		});
	// }
	// modified by yangyi： 增加初始化按钮及其功能[一键点击可以在任何大小及位置状态时恢复到第一张图那样的初始状态]
	var initEle = document.createElement('img');
	initEle.src="./img/default/init.png";
	initEle.title="初始化";
	initEle.style.width='20px';
	initEle.addEventListener("click", function () {
		var svgobj = document.getElementById('svgobj')
		var SVGDocument = svgobj.contentDocument;
		var s = SVGDocument.querySelector("svg");
		svgobj.style.removeProperty('left')
		svgobj.style.removeProperty('top')
		s.removeAttribute('width')
		s.removeAttribute('height')		
		// 清除高亮标记
		clearHighlight_fill(SVGDocument);
		// 关闭弹窗
		closedDialog();
		// 更改svg大小
		svgHandle(svgobj);
	});
	document.getElementById("picBox").appendChild(toolbarDiv);
	toolbarDiv.appendChild(initEle);
	toolbarDiv.appendChild(zoominEle);
	toolbarDiv.appendChild(zoomoutEle);
	// if(!isNullObject(parent.document.getElementById("framec1")) ) {
		// byd TIS平台同时打开多个iframe窗口做缓存，去除iframe id的校验
		toolbarDiv.appendChild(fullScreenEle);
	// }
	
}
function custTopic(){}

/*20220609 zhangdan svg图缩放*/
function addScript(url){
    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
    document.getElementsByTagName('head')[0].appendChild(script);
	
}

addScript("js/jquery-1.11.0.min.js");
addScript("js/svg-pan-zoom.min.js");
addScript("js/svg-pan-zoom.js");




