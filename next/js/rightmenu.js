function setMask(){return null!=document.getElementsByClassName("rmMask")[0]?document.getElementsByClassName("rmMask")[0]:((mask=document.createElement("div")).className="rmMask",mask.style.width=window.innerWidth+"px",mask.style.height=window.innerHeight+"px",mask.style.background="#fff",mask.style.opacity=".0",mask.style.position="fixed",mask.style.top="0",mask.style.left="0",mask.style.zIndex=998,document.body.appendChild(mask),document.getElementById("rightMenu").style.zIndex=19198,mask)}function insertAtCursor(e,t){var n,o,a;document.selection?(e.focus(),(sel=document.selection.createRange()).text=t,sel.select()):e.selectionStart||"0"==e.selectionStart?(n=e.selectionStart,o=e.selectionEnd,a=e.scrollTop,e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),0<a&&(e.scrollTop=a),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length):(e.value+=t,e.focus())}let rmf={};function popupMenu(){window.oncontextmenu=function(e){if(e.ctrlKey)return!0;if("off"==localStorage.getItem("mouse"))return!0;var o=window.document.body,o=e.target;$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&($("#menu-selection").show(),/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(window.getSelection().toString())&&"A"!=o.tagName?$("#menu-to").show():$("#menu-to").hide()),"A"==o.tagName?($("#menu-a").show(),rmf.open=function(){-1==o.href.indexOf("http://")&&-1==o.href.indexOf("https://")?pjax.loadUrl(o.href):location.href=o.href},rmf.openWithNewTab=function(){window.open(o.href)},rmf.copyLink=function(){var e=o.href,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t)}):"IMG"==o.tagName?($("#menu-img").show(),rmf.openWithNewTab=function(){window.open(o.src)},rmf.copyLink=function(){var e=o.src,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t)},rmf.saveAs=function(){var e=document.createElement("a"),t=o.src,n=t.split("/")[t.split("/").length-1];e.href=t,e.download=n,e.click(),window.URL.revokeObjectURL(t)}):"TEXTAREA"!=o.tagName&&"INPUT"!=o.tagName||($("#menu-paste").show(),rmf.paste=function(){navigator.permissions.query({name:"clipboard-read"}).then(e=>{"granted"==e.state||"prompt"==e.state?navigator.clipboard.readText().then(e=>{insertAtCursor(o,e)}):void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow("请允许读取剪贴板！")})});let t=e.clientX+10,n=e.clientY;var e=$("#rightMenu").width(),a=$("#rightMenu").height();return t+e>window.innerWidth&&(t-=e+10),n+a>window.innerHeight&&(n-=n+a-window.innerHeight),mask=setMask(),$(".rightMenu-item").click(()=>{$(".rmMask").attr("style","display: none")}),$(window).resize(()=>{rmf.showRightMenu(!1),$(".rmMask").attr("style","display: none")}),mask.onclick=()=>{$(".rmMask").attr("style","display: none")},rmf.showRightMenu(!0,n,t),$(".rmMask").attr("style","display: flex"),!1},window.addEventListener("click",function(){rmf.showRightMenu(!1)})}function addLongtabListener(e,t){let n=0;e.ontouchstart=()=>{n=0,n=setTimeout(()=>{t(),n=0},380)},e.ontouchmove=()=>{clearTimeout(n),n=0},e.ontouchend=()=>{n&&clearTimeout(n)}}rmf.showRightMenu=function(e,t=0,n=0){var o=$("#rightMenu");o.css("top",t+"px").css("left",n+"px"),e?o.show():o.hide()},rmf.copySelect=function(){document.execCommand("Copy",!1,null)},rmf.copyWordsLink=function(){var e=window.location.href,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t)},rmf.search=function(e){switch(e){case"Google":var t="https://www.google.com/search?q="+window.getSelection().toString();break;case"Bing":t="https://cn.bing.com/search?q="+window.getSelection().toString();break;default:t="https://www.baidu.com/s?wd="+window.getSelection().toString()}window.open(t)},rmf.searchInThisPage=function(){document.body.removeChild(mask),document.getElementsByClassName("search-input")[0].value=window.getSelection().toString(),document.getElementsByClassName("popup-trigger")[0].click()},rmf.playMusic=function(){$(".aplayer-button").click()},rmf.switchTranslate=function(){window.translateFn.translatePage()},rmf.switchNightMode=function(){window.darkmode.toggle()},document.body.addEventListener("touchmove",function(){},{passive:!1}),navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||popupMenu();let box=document.documentElement;function changeMouseMode(){"on"==localStorage.getItem("mouse")?(localStorage.setItem("mouse","off"),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow("当前鼠标右键已恢复为系统默认！")):(localStorage.setItem("mouse","on"),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow("当前鼠标右键已更换为网站指定样式！"))}addLongtabListener(box,popupMenu),null==localStorage.getItem("mouse")&&localStorage.setItem("mouse","on");