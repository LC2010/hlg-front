KISSY.add("page/create-init",function(a){var b=a.DOM,c=a.Event;return createGroup={msg:null,rule_num:0,ruleMsg:!1,groupRule:[],groupRule_num:0,leftRule:0,init:function(){c.on("#J_BtnPublish","click",function(a){if(isVersionPer("crm"))return;createGroup.save()});var d=b.filter(b.query("input"),function(a){if(a.type=="text")return!0});c.on(d,"focus blur",function(a){a.type=="focus"?b.hasClass(a.target,"input-none")?(b.removeClass(b.parent(a.target),"input-text text text-error"),b.addClass(b.parent(a.target),"input-text-on")):(b.removeClass(a.target,"input-text text text-error"),b.addClass(a.target,"input-text-on")):a.type=="blur"&&(b.hasClass(a.target,"input-none")?(b.removeClass(b.parent(a.target),"input-text-on"),b.addClass(b.parent(a.target),"input-text")):(b.removeClass(a.target,"input-text-on"),b.addClass(a.target,"input-text")))}),c.delegate(document,"click",".J_ConditionType",function(a){var c=b.val(a.currentTarget);c=="2"?(b.hide("#J_ParamsErrorBox"),b.hide("#J_Handel")):b.show("#J_Handel")}),createGroup.leftRule=parseInt(b.html("#J_LeftRule")),(new a.Calendar("#J_StartDate",{popup:!0,triggerType:["click"],closable:!0,showTime:!0})).on("select timeSelect",function(b){a.one("#J_StartDate").val(a.Date.format(b.date,"yyyy-mm-dd HH:MM:ss"))}),(new a.Calendar("#J_EndDate",{popup:!0,triggerType:["click"],closable:!0,showTime:!0})).on("select timeSelect",function(b){a.one("#J_EndDate").val(a.Date.format(b.date,"yyyy-mm-dd HH:MM:ss"))})},save:function(){ParamsErrorBox=KISSY.one("#J_ParamsErrorBox");var a=document.getElementsByName("group_name"),c=H.util.isNull(a[0].value),d=c[0];if(d){b.html("#J_ParamsErrorMsg",c[1]),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),a[0].value="",b.addClass(b.parent(a[0]),"text-error");return}var e=b.val("#J_MinCount"),f=b.val("#J_MaxCount");if(e||f)if(isNaN(Number(e))==1||e<0||isNaN(Number(f))==1||e<0)return b.html("#J_ParamsErrorMsg","\u4ea4\u6613\u6b21\u6570\u5927\u4e8e0"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0;var g=b.val("#J_MinAmount"),h=b.val("#J_MaxAmount");if(g||h){c=H.util.checkPrice(g),result1=H.util.checkPrice(g),d=c[0],error1=result1[0],msg=c[1];if(d||error1){b.html("#J_ParamsErrorMsg",c[1]),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}var i=b.val("#J_MinAvgPrice"),j=b.val("#J_MaxAvgPrice");if(i||j){c=H.util.checkPrice(i),result1=H.util.checkPrice(j),d=c[0],error1=result1[0],msg=c[1];if(d||error1){b.html("#J_ParamsErrorMsg",c[1]),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}if(k||l){var k=b.val("#J_MinCloseNum"),l=b.val("#J_MaxCloseNum");if(isNaN(Number(k))==1||k<0||isNaN(Number(l))==1||l<0){b.html("#J_ParamsErrorMsg","\u5b9d\u8d1d\u4ef6\u6570\u8981\u5927\u4e8e0"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}if(b.get("#J_A").checked==1){var m=b.val("#J_Grade"),n=b.val("#J_MinCount"),o=b.val("#J_MaxCount"),p=b.val("#J_MinAmount"),q=b.val("#J_MaxAmount"),r=b.val("#J_MinAvgPrice"),s=b.val("#J_MaxAvgPrice"),t=b.val("#J_MinCloseNum"),u=b.val("#J_MaxCloseNum"),v=b.val("#J_StartDate"),w=b.val("#J_EndDate"),x=m+n+o+p+q+r+s+t+u+v+w;if(x==""||x==0){b.html("#J_ParamsErrorMsg","\u8bf7\u81f3\u5c11\u586b\u5199\u4e00\u4e2a\u6761\u4ef6\uff01"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}var y=function(a){ParamsErrorBox.hide(),ParamsSucessBox=KISSY.one("#J_ParamsSucessBox"),b.html("#J_ParamsSucessMsg",a.desc),ParamsSucessBox.css("display")==="none"&&ParamsSucessBox.slideDown(),b.scrollIntoView("#J_ParamsSucessMsg",window),window.location.href=successUrl},z=function(a){b.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),b.scrollIntoView("#J_ParamsErrorMsg",window)},A="";return(new H.widget.asyncRequest).setURI(editorSaveUrl).setMethod("POST").setForm("#promotion_edit_form").setHandle(y).setErrorHandle(z).setData(A).send(),!0}}},{requires:[]}); 