KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<div class="page-bottom"> <div class="sabrosus">',c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>",d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> ';break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>"),d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',this.page==1;if(this.page-2<=0){var f=1;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else if(this.page+2>=this.pageCount){var f=this.pageCount-4;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else{var f=this.page-2;if(this.pageCount>this.page+2)var g=this.page+2;else var g=this.pageCount}for(var h=f;h<=g;h++)h>0&&(h==this.page?c+='<span class="current a-padding">'+h+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+h+');">'+h+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/rateWarnList-init",function(a,b,c){var a=KISSY,d=a.DOM,e=a.Event,f=1;return rateWarnList={paginator:null,msg:null,init:function(){var a=[{text:"\u72b6\u6001",value:"0"},{text:"\u5df2\u4fee\u6539",value:"3"},{text:"\u672a\u4fee\u6539",value:"1"}],b=new c.Select({render:"#J_StatusItem",valueField:"#J_Status",items:a});b.render(),b.setSelectedValue("0"),b.on("change",function(a){rateWarnList.getWarnList()}),rateWarnList.getWarnList(),e.on("#J_SearchRateWarn","click",rateWarnList.getWarnList),e.on("#J_UpdateRate","click",rateWarnList.updateRateResult)},getWarnList:function(){var a=function(a){d.hide("#J_RightLoading"),d.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,totalRecords>0?(d.css(d.get("#J_Empty"),"display","none"),d.css(d.query(".J_PromotionItemBtnHolder"),"display","")):(d.css(d.get("#J_Empty"),"display",""),d.css(d.query(".J_PromotionItemBtnHolder"),"display","none")),d.html("#J_WarnList",a.payload.body);var c=Math.ceil(totalRecords/a.payload.pageSize);rateWarnList.paginator=(new b("rateWarnList.paginator")).setRender(rateWarnList.handlePagination).setPageCount(c).printHtml("#J_Paging",2)};if(d.val(d.get("#J_SearchTitle"))!="\u7528\u6237\u6635\u79f0\u6216\u59d3\u540d")var c=encodeURIComponent(d.val(d.get("#J_SearchTitle")));else var c="";var e=d.val(d.get("#J_Status")),f="buyer_nick="+c+"&status="+e+"&pageSize=10";d.show("#J_RightLoading"),d.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getWarnListAjaxUrl).setMethod("POST").setHandle(a).setData(f).send()},handlePagination:function(a){pageId=a;var b=function(a){d.hide("#J_RightLoading"),d.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,d.css(d.get("#J_NoteIcon"),"display","none"),totalRecords>0?(d.css(d.get("#J_Empty"),"display","none"),d.css(d.query(".J_PromotionItemBtnHolder"),"display","")):(d.css(d.get("#J_Empty"),"display",""),d.css(d.query(".J_PromotionItemBtnHolder"),"display","none")),d.html("#J_WarnList",a.payload.body);var b=Math.ceil(totalRecords/a.payload.pageSize);rateWarnList.paginator.setPage(pageId).setPageCount(b).printHtml("#J_Paging",2)};if(d.val(d.get("#J_SearchTitle"))!="\u7528\u6237\u6635\u79f0\u6216\u59d3\u540d")var c=encodeURIComponent(d.val(d.get("#J_SearchTitle")));else var c="";var e=d.val(d.get("#J_Status")),f="buyer_nick="+c+"&status="+e+"&pageSize=10"+"&page_id="+pageId;d.show("#J_RightLoading"),d.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getWarnListAjaxUrl).setMethod("POST").setHandle(b).setData(f).send()},updateRateResult:function(){var b=function(b){new H.widget.msgBox({type:"sucess",content:b.desc,dialogType:"msg",autoClose:!0,timeOut:800}),a.later(function(){window.location.reload()},800,!1)},c=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},d="";(new H.widget.asyncRequest).setURI(updateRateResultUrl).setMethod("POST").setHandle(b).setErrorHandle(c).setData(d).send()}}},{requires:["utils/showPages/index","bui/select"]}); 