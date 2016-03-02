/* global uexWindow, appcan */

var Tools = {

    //纯静态tab切换
    setTab: function (name, cursel, n) {
        for (i = 1; i <= n; i++) {
            var menu = document.getElementById(name + i);
            var con = document.getElementById("con_" + name + "_" + i);
            menu.className = i == cursel ? "hover" : "";
            con.style.display = i == cursel ? "block" : "none";
        }
    },

    //html转义解析
    html_encode: function (str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&gt;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;
    },
    html_decode: function (str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&gt;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        s = s.replace(/<br>/g, "\n");
        return s;
    },
    htmlEncode: function (str) {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    },
    htmlDecode: function (str) {
        var div = document.createElement("div");
        div.innerHTML = str;
        return div.innerHTML;
    },
    
    /**
     * 获取登录用户信息
     */
    getUserId: function(){
    	var userid = appcan.locStorage.getVal('userid');
    	if(userid == null || userid == ""){	 
    	    Tools.toast('请先登录！');
            uexWindow.close();  
    	    Tools.openUrl('login');
    	}
    },
    
    /**
     * 获取登录用户名
     */
    getUserName: function(){
        var username = appcan.locStorage.getVal('username');
        $("#username").html(username);
    },
        
    /**
     * 退出当前登录用户
     * @returns {undefined}
     */
    logout: function(){    	    	
    	// appcan.locStorage.remove('userid');   
        // appcan.locStorage.remove('username');
        //清空全部存储
        appcan.locStorage.remove();        
        appcan.window.openToast("退出登录成功！", 3000, '5', '0');  
        uexWindow.close();  
        Tools.openUrl('index');
    },
    
    /**
     * 打开新链接
     * @param {string} name
     * @param {string} 打开新Url
     * @param {id} 是否关闭当前页
     */
    openUrl: function(name,id){	
    	if(id == 1){
    	   appcan.window.close();	
        }
    	appcan.window.open({
    	    name:name,
    	    dataType:0,
    	    data:name + ".html",
    	    aniId:0,
    	    type:0,
    	    width:0,
    	    height:0,
    	    animDuration:0
       });       
    },
    
    //关闭当前页
    closeUrl: function(){
        appcan.window.close();
    },
    
    //浮动窗口
    toast: function(mess){
        appcan.window.openToast(mess, 3000, '5','0');
    }
}

/** * 
 * 全站通用用户ID
 */
var user_id = appcan.locStorage.getVal('userid');

/**
 * 返回上一页
 */
$(function() {
    $("#back").click(function(){
        //appcan.window.close(-1);
        //uexWindow.windowForward();
        //alert(1);
    })
})