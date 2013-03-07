function bind(a,b){var c=[];for(var d=2;d<arguments.length;d++)c.push(arguments[d]);var e=function(){var d=a||(this==window?!1:this),e=c.slice();for(var f=0;f<arguments.length;f++)e.push(arguments[f]);if(typeof b!="string")return b.apply(d,e);if(d[b])return d[b].apply(d,e)};return typeof b=="string"?e.name=b:b&&b.name&&(e.name=b.name),e.toString=function(){return bind._toString(a,c,b)},e}function to_array(a){var b=[];for(var c=0,d=a.length;c<d;++c)b.push(a[c]);return b}bind._toString=bind._toString||function(a,b,c){return typeof c=="string"?"late bind<"+c+">":"bound<"+c.toString()+">"},Function.prototype.bind=function(a){var b=[arguments[0],this],c=arguments.length;for(var d=1;d<c;d++)b.push(arguments[d]);return bind.apply(null,b)},Function.prototype.shield=function(a){if(typeof this!="function")throw new TypeException;var b=this.bind.apply(this,to_array(arguments));return function(){return b()}},Function.prototype.defer=function(a,b){if(typeof this!="function")throw new TypeError;return a=a||0,setTimeout(this,a,b)},Date.prototype.format=function(a){var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var c in b)(new RegExp("("+c+")")).test(a)&&(a=a.replace(RegExp.$1,RegExp.$1.length==1?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a},KISSY.app("H",function(){var a=KISSY,b=a.DOM,c=a.Event;return doc=document,{version:"1.2",util:{setLocation:function(a){window.location.href=a;try{window.event.returnValue=!1}catch(b){}},saveTrack:function(a,b,d){c.on(a,"click",function(){KISSY.io.get(d,{name:b})})},pageReload:function(a){return a=(a||window.location.toString()).replace(/t=(\d)+/g,"").replace(/([&|?])+$/,""),a=a+(-1===a.indexOf("?")?"?":"&")+"t="+KISSY.now(),window.location=a},clipboard:function(a,d){c.on(a,"click",function(a){var c=b.val(d);if(window.clipboardData){window.clipboardData.clearData(),window.clipboardData.setData("Text",c);var e="\u5df2\u6210\u529f\u590d\u5236";alert(e)}else if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(f){return alert("\u60a8\u7684firefox\u5b89\u5168\u9650\u5236\u9650\u5236\u60a8\u8fdb\u884c\u526a\u8d34\u677f\u64cd\u4f5c\uff0c\u8bf7\u6253\u5f00'about:config'\u5c06signed.applets.codebase_principal_support'\u8bbe\u7f6e\u4e3atrue'\u4e4b\u540e\u91cd\u8bd5\uff0c\u76f8\u5bf9\u8def\u5f84\u4e3afirefox\u6839\u76ee\u5f55/greprefs/all.js"),!1}var g=Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);if(!g)return;var h=Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);if(!h)return;h.addDataFlavor("text/unicode");var e=new Object,i=new Object,e=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString),j=c;e.data=j,h.setTransferData("text/unicode",e,j.length*2);var k=Components.interfaces.nsIClipboard;if(!g)return!1;g.setData(h,null,k.kGlobalClipboard);var e="\u5df2\u6210\u529f\u590d\u5236";alert(e)}else if(KISSY.UA.core=="webkit"){var e="\u8be5\u6d4f\u89c8\u5668\u6682\u4e0d\u652f\u6301\uff0c\u8bf7\u7528 Ctrl+c \u590d\u5236";alert(e)}return!1})},StringToDate:function(a){if(typeof a=="undefined")return new Date;if(typeof a=="date")return a;var b=Date.parse(a),c=new Date(b);if(isNaN(c)){a=a.replace(/:/g,"-"),a=a.replace(" ","-"),a=a.replace(".","-");var d=a.split("-");switch(d.length){case 7:c=new Date(d[0],--d[1],d[2],d[3],d[4],d[5],d[6]);break;case 6:c=new Date(d[0],--d[1],d[2],d[3],d[4],d[5]);break;default:c=new Date(d[0],--d[1],d[2])}}return c},FormatNumber:function(a,b){var a,b,c,d;a=""+a+"",strLen=a.length,dotPos=a.indexOf(".",0);if(dotPos==-1){c=a+".";for(i=0;i<b;i++)c+="0";return c}if(strLen-dotPos-1>=b){nAfter=dotPos+b+1,d=1;for(j=0;j<b;j++)d*=10;return c=Math.ceil(parseFloat(a)*d)/d,c}c=a;for(i=0;i<b-strLen+dotPos+1;i++)c+="0";return c},escape:function(a){return a==null?"":a.replace(/\//g,"\\/").replace(/\./g,"\\.").replace(/\*/g,"\\*").replace(/\+/g,"\\+").replace(/\(/g,"\\(").replace(/\)/g,"\\)").replace(/\$/g,"\\$").replace(/\?/g,"\\?").replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/\{/g,"\\{").replace(/\}/g,"\\}")},strProcess:function(a){return a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"').replace(/[\t\n&]/g,"%26").replace(/%/g,"%25")}},widget:{msgBox:null},app:{}}}),H.add("widget~msgBox",function(a){function f(a){var b=this;if(!(b instanceof f))return new f(a);b.msgBoxImagePath="http://cdn.huanleguang.com/img/common/msgBox/",b.isShown=!1,b.divMsgBox,b.divMsgBoxContent,b.divMsgBoxImage,b.divMsgBoxButtons,b.divMsgBoxBackGround;var c=typeof a;b.defaults={content:c=="string"?a:"Message",title:"Warning",type:"alert",dialogType:"dialog",autoClose:!1,timeOut:0,showButtons:!0,buttons:[{value:"Ok"}],inputs:[{type:"text",name:"userName",header:"User Name"},{type:"password",name:"password",header:"Password"}],success:function(a){},beforeShow:function(){},afterShow:function(){},beforeClose:function(){},afterClose:function(){},opacity:.1},a=c=="string"?b.defaults:a;if(a.type!=null&&a.dialogType=="dialog")switch(a.type){case"alert":a.title=a.title==null?"\u8b66\u544a":a.title;break;case"info":a.title=a.title==null?"\u6d88\u606f":a.title;break;case"error":a.title=a.title==null?"\u9519\u8bef\u63d0\u793a":a.title;break;case"confirm":a.title=a.title==null?"\u6e29\u99a8\u63d0\u793a":a.title,a.buttons=a.buttons==null?[{value:"\u786e\u8ba4"},{value:"\u53d6\u6d88"},{value:"\u53d6\u6d88"}]:a.buttons;break;case"prompt":a.title=a.title==null?"\u63d0\u793a":a.title,a.buttons=a.buttons==null?[{value:"\u767b\u5f55"},{value:"\u53d6\u6d88"}]:a.buttons;break;default:image="alert.png"}a.timeOut=a.timeOut==null?a.content==null?500:a.content.length*70:a.timeOut,b.options=S.merge(b.defaults,a||{}),b.options.autoClose&&setTimeout(function(){b.hide()},b.options.timeOut),b.image="";switch(b.options.type&&b.options.dialogType=="dialog"){case"alert":image="alert.png";break;case"info":image="info.png";break;case"error":image="error.png";break;case"confirm":image="confirm.png";break;default:image="alert.png"}b._createHtml()}var b=S.DOM,c=S.Event,d=document,e=S.all;S.mix(f.prototype,{_createHtml:function(){var a=S.all,d=this,e=d.options,f="msgBox"+(new Date).getTime(),g=f,h=f+"BackGround";if(e.dialogType=="dialog"){var i=f+"Content",j=f+"Image",k=f+"Buttons",l="";S.each(d.options.buttons,function(a,b){l+='<input class="msgButton" type="button" name="'+a.value+'" value="'+a.value+'" />'});var m="";S.each(d.options.inputs,function(a,b){var c=a.type;c=="checkbox"||c=="radiobutton"?m+='<div class="msgInput"><input type="'+a.type+'" name="'+a.name+'" '+(a.checked==null?"":"checked ='"+a.checked+"'")+' value="'+(typeof a.value=="undefined"?"":a.value)+'" />'+"<text>"+a.header+"</text>"+"</div>":m+='<div class="msgInput"><span class="msgInputHeader">'+a.header+"<span>"+'<input type="'+a.type+'" name="'+a.name+'" value="'+(typeof a.value=="undefined"?"":a.value)+'" />'+"</div>"});var n="<div id="+h+' class="msgBoxBackGround"></div>',o='<div class="msgBoxTitle">'+d.options.title+"</div>",p='<div class="msgBoxContainer"><div id='+j+' class="msgBoxImage"><img src="'+d.msgBoxImagePath+image+'"/></div><div id='+i+' class="msgBoxContent"><p><span>'+e.content+"</span></p></div></div>",q="<div id="+k+' class="msgBoxButtons">'+l+"</div>",r='<div class="msgBoxInputs">'+m+"</div>";e.type=="prompt"?(a("body").append(n+"<div id="+g+' class="msgBox">'+o+"<div>"+p+(e.showButtons?q+"</div>":"</div>")+"</div>"),d.divMsgBox=a("#"+g),d.divMsgBoxContent=a("#"+i),d.divMsgBoxImage=a("#"+j),d.divMsgBoxButtons=a("#"+k),d.divMsgBoxBackGround=a("#"+h),d.divMsgBoxImage.remove(),d.divMsgBoxButtons.css({"text-align":"center","margin-top":"5px"}),d.divMsgBoxContent.css({width:"100%",height:"100%"}),d.divMsgBoxContent.html(r)):(a("body").append(n+"<div id="+g+' class="msgBox">'+o+"<div>"+p+(e.showButtons?q+"</div>":"</div>")+"</div>"),d.divMsgBox=a("#"+g),d.divMsgBoxContent=a("#"+i),d.divMsgBoxImage=a("#"+j),d.divMsgBoxButtons=a("#"+k),d.divMsgBoxBackGround=a("#"+h)),d.show(),c.on(d.divMsgBoxBackGround,"click",function(a){!d.options.showButtons||d.options.autoClose?d.hide():d.getFocus()}),c.on(b.query(".msgButton"),"click",function(c){c.preventDefault();var e=a(this).val();if(d.options.type!="prompt")d.options.success(e);else{var f=[];S.each(b.query(".msgInput"),function(b){var c=a(b).attr("name"),d=a(b).val(),e=a(b).attr("type");e=="checkbox"||e=="radiobutton"?f.push({name:c,value:d,checked:a(b).attr("checked")}):f.push({name:c,value:d})}),d.options.success(e,f)}d.hide()})}else if(e.dialogType=="loading"){var n="<div id="+h+' class="msgBoxBackGround"></div>';e.content=e.content==null?"\u7cfb\u7edf\u5904\u7406\u4e2d\uff0c\u8bf7\u7a0d\u7b49...":e.content,a("body").append(n+"<div id="+g+' class="messages-prompt"><div class="fbloader"><img  src="http://img.huanleguang.com/hlg//fbloader.gif" width="16" height="11" /></div><div class="mini_dialog_content">'+e.content+"</div></div>"),d.divMsgBox=a("#"+g),d.divMsgBoxBackGround=a("#"+h),d.show()}else if(e.dialogType=="msg"){d.image="";switch(e.type){case"alert":var p='<ul id="noty_top_layout_container" class="" style="top: 0px;left: 20%;position: fixed;_position:absolute;_left:expression(eval(document.documentElement.scrollLeft+20%));_top:expression(eval(document.documentElement.scrollTop));width: 60%;height: auto;margin: 0px;padding: 0px;list-style-type: none;z-index: 9999999;"><li style="overflow: hidden; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==); background-attachment: scroll; background-color: rgb(255, 255, 255); border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-width: 2px; border-bottom-style: solid; border-color: rgb(204, 204, 204); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 4px; color: rgb(68, 68, 68); cursor: pointer; background-position: 0% 0%; background-repeat: repeat no-repeat;"><div class="noty_bar" ><div class="noty_message" style="font-size: 13px; line-height: 16px; text-align: center; padding: 8px 10px 9px; width: auto; position: relative;"><span class="noty_text">'+e.content+"</span></div></div></li></ul>";break;case"info":case"success":var p='<ul id="noty_top_layout_container" class="" style="top: 0px;left: 20%;position: fixed;_position:absolute;_left:expression(eval(document.documentElement.scrollLeft+20%));_top:expression(eval(document.documentElement.scrollTop));width: 60%;height: auto;margin: 0px;padding: 0px;list-style-type: none;z-index: 9999999;"><li style="overflow: hidden; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==); background-attachment: scroll; background-color: rgb(144, 238, 144); border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-width: 2px; border-bottom-style: solid; border-color: rgb(80, 194, 78); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 4px; color: rgb(0, 100, 0); cursor: pointer; background-position: 0% 0%; background-repeat: repeat no-repeat;"><div class="noty_bar" ><div class="noty_message" style="font-size: 13px; line-height: 16px; text-align: center; padding: 8px 10px 9px; width: auto; position: relative;"><span class="noty_text">'+e.content+"</span></div></div></li>";break;case"error":var p='<ul id="noty_top_layout_container" class="" style="top: 0px;left: 20%;position: fixed;_position:absolute;_left:expression(eval(document.documentElement.scrollLeft+20%));_top:expression(eval(document.documentElement.scrollTop));width: 60%;height: auto;margin: 0px;padding: 0px;list-style-type: none;z-index: 9999999;"><li style="overflow: hidden; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==); background-attachment: scroll; background-color: red; border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-width: 2px; border-bottom-style: solid; border-color: rgb(139, 0, 0); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 4px; color: rgb(255, 255, 255); cursor: pointer; background-position: 0% 0%; background-repeat: repeat no-repeat;"><div class="noty_bar" ><div class="noty_message" style="font-size: 13px; line-height: 16px; text-align: center; padding: 8px 10px 9px; width: auto; position: relative; font-weight: bold;"><span class="noty_text">'+e.content+"</span>"+"</div></div></li></ul>";break;default:var p='<ul id="noty_top_layout_container" class="" style="top: 0px;left: 20%;position: fixed;_position:absolute;_left:expression(eval(document.documentElement.scrollLeft+20%));_top:expression(eval(document.documentElement.scrollTop));width: 60%;height: auto;margin: 0px;padding: 0px;list-style-type: none;z-index: 9999999;"><li style="overflow: hidden; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==); background-attachment: scroll; background-color: rgb(255, 255, 255); border-top-left-radius: 0px; border-top-right-radius: 0px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-width: 2px; border-bottom-style: solid; border-color: rgb(204, 204, 204); border-left-width: 2px; border-left-style: solid; border-right-width: 2px; border-right-style: solid; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 4px; color: rgb(68, 68, 68); cursor: pointer; background-position: 0% 0%; background-repeat: repeat no-repeat;"><div class="noty_bar"><div class="noty_message" style="font-size: 13px; line-height: 16px; text-align: center; padding: 8px 10px 9px; width: auto; position: relative;"><span class="noty_text">'+e.content+"</span></div></div></li>"}a("body").append("<div id="+g+' class="">'+p+"</div>"),d.divMsgBox=a("#"+g),d.show(),c.on(d.divMsgBox,"click",function(a){d.hide()})}},show:function(){var a=S.all,b=this;if(b.isShown)return;var c=b.options;if(c.dialogType=="dialog"){var d=b.center(),e=d.top,f=d.left;b.divMsgBox.css({opacity:0,top:e-50,left:f}),b.divMsgBox.css("background-image","url('"+b.msgBoxImagePath+"msgBoxBackGround.png')"),b.divMsgBoxBackGround.css({opacity:c.opacity}),b.options.beforeShow(),b.divMsgBoxBackGround.css({width:a(document).width(),height:b.getDocHeight()}),a(b.divMsgBoxId+","+b.divMsgBoxBackGroundId).fadeIn(0),b.divMsgBox.animate({opacity:1,top:e,left:f},.2),setTimeout(b.options.afterShow,200)}else if(c.dialogType=="loading"){var d=b.center(),e=d.top,f=d.left;b.divMsgBoxBackGround.css({opacity:c.opacity}),b.divMsgBoxBackGround.css({width:a(document).width(),height:b.getDocHeight()}),b.divMsgBox.css({top:e,left:f},.2)}else c.dialogType=="msg"&&(b.divMsgBox.css({opacity:0,top:e-50}),b.divMsgBox.animate({opacity:1,top:0},.2));b.isShown=!0;if(c.dialogType=="dialog"||c.dialogType=="loading"){a(window).on("resize",function(a){if(b.isShown){var c=b.center(),d=c.top,e=c.left;b.divMsgBox.css({top:d,left:e})}});function g(){if(b.isShown){var a=b.center(),c=a.top,d=a.left;b.divMsgBox.css({top:c,left:d})}}window.onscroll=g}},center:function(){var a=this,c,d,e=b.get("#"+a.divMsgBox.attr("id")),f=e.offsetWidth,g=e.offsetHeight;viewPortWidth=b.viewportWidth(),viewPortHeight=b.viewportHeight(),f<viewPortWidth?c=viewPortWidth/2-f/2+b.scrollLeft():c=b.scrollLeft(),g<viewPortHeight?d=viewPortHeight/2-g/2+b.scrollTop():d=b.scrollTop();var h={top:d,left:c};return h},hide:function(){var a=S.all,b=this;if(!b.isShown)return;if(b.options.dialogType=="dialog"||b.options.dialogType=="loading"){var c=b.center().top,d=b.center().left;b.options.beforeClose(),b.divMsgBox.animate({opacity:0,top:c-50,left:d},.2),b.divMsgBoxBackGround.fadeOut(300),setTimeout(function(){b.divMsgBox.remove(),b.divMsgBoxBackGround.remove()},300),setTimeout(b.options.afterClose,300)}else b.divMsgBox.animate({opacity:0,top:c-50},.5),setTimeout(function(){b.divMsgBox.remove()},300);b.isShown=!1},getDocHeight:function(){var a=document;return Math.max(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight))},getFocus:function(){var a=this;a.divMsgBox.fadeOut(.2).fadeIn(.2)}}),H.widget.msgBox=f}),H.add("widget~asyncRequest",function(a){function f(a){var b=this;if(!(b instanceof f))return new f(a);this.form="",this.dataType="json",this.uri="",this.method="GET",this.data=null,this.bootloadable=!0,this.resList=[],a!=undefined&&this.setURI(a)}var b=KISSY,c=b.DOM,d=b.Event,e=document;b.mix(f.prototype,{handleSuccess:function(){return undefined},handleFailure:function(a){alert(a.desc)},mapRes:function(){var a=document.getElemenHLGByTagName("link"),b=document.getElemenHLGByTagName("script");if(a.length)for(var c=0,d=a.length;c<d;c++)this.resList.push(a[c].href);if(b.length)for(var c=0,d=b.length;c<d;c++)this.resList.push(b[c].src)},setMethod:function(a){return this.method=a.toString().toUpperCase(),this},getMethod:function(){return this.method},setData:function(a){return this.data=a,this},getData:function(){return this.data},setForm:function(a){return this.form=a,this},getForm:function(){return this.form},setURI:function(a){return this.uri=a,this},getURI:function(){return this.uri.toString()},setDataType:function(a){return this.dataType=a,this},getDataType:function(){return this.dataType},setHandle:function(a){return this.handleSuccess=a,this},setErrorHandle:function(a){return this.handleFailure=a,this},dispatchResponse:function(a,b){b.handleSuccess(a);var c=a.onload;if(c)try{(new Function(c))()}catch(d){}},disableBootload:function(){return this.bootloadable=!1,this},enableBootload:function(){return this.bootloadable=!0,this},dispatchErrorResponse:function(a,b,d){c.hide(c.query(".messages-prompt")),c.hide(c.query(".msg-mask")),b&&(b=="timeout"?new H.widget.msgBox({content:"\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u8fde\u63a5\u6b63\u5e38",dialogType:"loading",autoClose:!0,timeOut:8e3}):b.search("\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3")>=0?new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:'\u6d4f\u89c8\u5668\u95ee\u9898\u5bfc\u81f4\u672c\u6b21\u64cd\u4f5c\u65e0\u6cd5\u5904\u7406\uff0c<a href="http://bangpai.taobao.com/group/thread/609027-277519092.htm?spm=0.0.0.40.24059f" target="_blank">\u67e5\u770b\u89e3\u51b3\u529e\u6cd5</a>',type:"info"}):new H.widget.msgBox({content:"\u7cfb\u7edf\u51fa\u9519"+b+"\uff0c\u8bf7\u8054\u7cfb\u6b22\u4e50\u901b",dialogType:"loading",autoClose:!0,timeOut:8e3}))},send:function(){var a=this;a.method=="GET"&&a.data&&(a.uri+=(a.uri.indexOf("?")==-1?"?":"&")+a.data,a.data=null);var c=this;interpretResponse=function(a,b,c,d){var e=d;if(a.ajaxExpired!=null){window.location=a.ajaxRedirect;return}if(a.error)var f=e.handleFailure;else var f=e.dispatchResponse;f=f.shield(null,a,d),f=f.defer.bind(f),f()},b.ajax({form:a.form,type:a.method,url:a.uri,data:a.data,success:function(a,b,d){interpretResponse(a,b,d,c)},error:this.dispatchErrorResponse,dataType:a.dataType,timeout:60,complete:function(a,b,c){c=null}})}}),H.widget.asyncRequest=f}),H.add("widget~countdown",function(a){function g(a,b,c){var d=this;if(!(d instanceof g))return new g(a,b,c);this.timer=null,d.init(a,b,c)}var b=KISSY,c=b.DOM,e=b.Event,f=document;b.mix(g.prototype,{init:function(a,e,f){var g=this;if(f==""||typeof f=="undefined")f=1;f==1&&c.html(c.get(a),' <span class="day"></span>\u5929<span class="hour"></span>\u65f6<span class="min"></span>\u5206<span class="sec"></span>\u79d2 '),f==2&&c.html(c.get(a),' <span class="hour">19</span>\u65f6<span class="min">19</span>\u5206<span class="sec">26</span>\u79d2'),f==3&&c.html(c.get(a),'<span class="hour"><b>0</b><b>0</b></span><span class="min"><b>0</b><b>0</b></span><span class="sec"><b>0</b><b>0</b></span>');var h=function(b){var e=new Date,h=b,i=parseInt((h.getTime()-e.getTime())/1e3);d=parseInt(i/86400%1e4),j=parseInt(i/3600%24),k=parseInt(i/60%60),l=parseInt(i%60);if(f==3)var j=j+d*24;d>=0&&d<10&&(d="0"+d),j>=0&&j<10&&(j="0"+j),k>=0&&k<10&&(k="0"+k),l>=0&&l<10&&(l="0"+l),f==1&&(c.html(c.get(a+" .day"),d),c.html(c.get(a+" .hour"),j),c.html(c.get(a+" .min"),k),c.html(c.get(a+" .sec"),l));if(f==2||f==3){if(f==3){var j=j.toString(),k=k.toString(),l=l.toString();j="<b>"+j.charAt(0)+"</b><b>"+j.charAt(1)+"</b>",k="<b>"+k.charAt(0)+"</b><b>"+k.charAt(1)+"</b>",l="<b>"+l.charAt(0)+"</b><b>"+l.charAt(1)+"</b>"}c.html(c.get(a+" .hour"),j),c.html(c.get(a+" .min"),k),c.html(c.get(a+" .sec"),l)}i<=0&&g.endDo()};g.timer&&g.timer.cancel(),g.timer=b.later(h,1e3,!0,null,e)},setRender:function(a){var b=this;return this.endDo=a,this},endDo:function(){var a=this;a.timer.cancel()}}),H.widget.countdown=g}); 