	var JDsearch_hide=document.getElementById("JDsearch_hide");
	var left_navigateList=document.getElementById("left_navigateList");
	var quality=document.getElementById("quality");
	var lovelife1=document.getElementById("lovelife1")
	var lovelife2=document.getElementById("lovelife2")
	var lovelife3=document.getElementById("lovelife3")
	var lovelife4=document.getElementById("lovelife4")
	var lovelife5=document.getElementById("lovelife5")
	var lovelife6=document.getElementById("lovelife6")
	var lovelife7=document.getElementById("lovelife7")
	var lovelife8=document.getElementById("lovelife8")
	var contents = [quality,lovelife1,lovelife2,lovelife3,lovelife4,lovelife5,lovelife6,lovelife7,lovelife8];
	var currentLiIndex = 0;
	var left_navigateList_ul = left_navigateList.children[0];
	var left_navigateList_ul_lis = left_navigateList_ul.children;
	// 设置窗口滚动事件
	window.onscroll = function(){
		// 滚动距离
		var top = scrollTop();
		// 获取享品质到顶部距离
		var qualityOffsetTop = quality.offsetTop;
		if(top>qualityOffsetTop){
			JDsearch_hide.style.display = "block";
			// JDsearch_hide.style.top = "-100px";
			// var json = {"top":0};
			// anim(JDsearch_hide,json,null,20);
		}else if(top<qualityOffsetTop){
			JDsearch_hide.style.display = "none";
		}
		//设置左边list
		if(top>=qualityOffsetTop){
			left_navigateList.style.display = "block";
		}
		else{
			left_navigateList.style.display = "none";
		}
		// 使用循环获取到每一个内容板块
		var liIndex = 0;
		for(var i=0;i<contents.length;i++){
			var contentTop = contents[i].offsetTop;
			var contentHeight = contents[i].offsetHeight;
			if(top>contentTop && top<=contentTop + contentHeight){
				liIndex = i;
				currentLiIndex = liIndex;
				break;
			}
		}
		for(var j=0;j<left_navigateList_ul_lis.length;j++){
			var li = left_navigateList_ul_lis[j];
			if(j == liIndex){
				li.style.backgroundColor = "#d70b1c";
			}else{
				li.style.backgroundColor = "#918888";
			}
		}
	}
    // =====================京东事件关闭==============================
    var imgclose = document.getElementById("imgclose");
    var J_event = document.getElementById("J_event");
	imgclose.onclick = function(){
		J_event.style.display = "none";
	}
    // =====================菜单栏触摸弹出============================
    var menulist =document.getElementById("menulist");
    var ads =document.getElementById("ads");
    var list = menulist.children;
    var content = document.getElementById("content")
    for (var i=0; i<list.length;i++){
         list.index = i;
     list[i].onmouseover =function(){
        content.style.display = "block"
        ads.style.display = "none"
        }
    }
    for (var i=0; i<list.length;i++){
         list.index = i;
        list[i].onmouseleave =function(){
        content.style.display = "none"
        ads.style.display = "block"
        }
    }
    //============================中间大广告=================================
    var box = document.getElementById("box");
	var prev = box.children[0];
	var next = box.children[1];
	var iconUl = box.children[2];
	var indicatorUl = box.children[3];
	var indicatorLis = indicatorUl.children;
	var current = 0;
	var target = 0;
		    //设定按钮的触摸离开事件
		box.onmouseover = function(){
			prev.style.display = "block"
			next.style.display = "block"
		}
		box.onmouseleave = function(){
			prev.style.display = "none"
			next.style.display = "none"
		}
		//设定按钮的点击事件
		next.onclick = function(){
			target -= (target==-790*6)?0:790;
			swicthCirclePoint(target/(-790));
		}
		prev.onclick = function(){
			target += (target==0)?0:790;
			swicthCirclePoint(target/(-790));
		}
		// 为每一个li元素去设置触摸事件
		for(var i = 0;i<indicatorLis.length;i++){
			indicatorLis[i].index = i;
			indicatorLis[i].onmouseover = function(){
				// 切换小图标
				swicthCirclePoint(this.index);
				target = this.index * (-790);
			}
		}
		setInterval(function(){
			current += (target - current)/10;
			iconUl.style.left = current + "px";
		}, 5);
		// 用于小圆点的切换
		function swicthCirclePoint(index){
		// 排除思想
			for(var j=0;j<indicatorLis.length;j++){
				indicatorLis[j].className = "";
			}
			indicatorLis[index].className = "on";
		}

	   // ===============================右侧公告栏==============================
       var newstaphead = document.getElementById("news-tap-head");
       var listtap = newstaphead.children;
       var span = newstaphead.children[2];
       var tapfirst = document.getElementById("tapfirst")
       var tapsecond = document.getElementById("tapsecond")
       var itemon = document.getElementById("item-on");
       var item = document.getElementById("item");
       var tapcurrent = 0,taptarget = 0;
       tapfirst.onmouseover=function(){
		anim(span,{"left":5});
		itemon.style.display="block";
		item.style.display="none";
      }
	   tapsecond.onmouseover=function(){
		anim(span,{"left":45});
		itemon.style.display="none";
		item.style.display="block";
	   }
       // ===============================倒计时=================================
       var skillhour = document.getElementById("skillhour")
       var skillminute = document.getElementById("skillminute")
       var skillsecond = document.getElementById("skillsecond")
       //实现倒计时
       setInterval(function(){
       	  // 获取当前事件
       	  var time = new Date(); 
       	  // 获取目标事件
       	  var targetTime = new Date("2017/7/18 00:00:00");
       	  //计算时间差
       	  var timeCha = parseInt((targetTime-time)/1000);
		  var hour = parseInt(timeCha/3600);
		  var minute = parseInt(timeCha/60)-parseInt(timeCha/3600)*60;
		  var sec = timeCha%60;
		  skillhour.innerHTML = hour
		  skillminute.innerHTML = minute
		  skillsecond.innerHTML = sec
		  if (hour<10) {
			  skillhour.innerHTML = "0" + hour
		  }
		  if (minute<10) {
			  skillminute.innerHTML = "0" + minute
		  }
		  if (sec<10) {
			  skillsecond.innerHTML = "0" + sec
		  }
       }, 1000)
       //京东秒杀图片上下移动
       var kill_anim = document.getElementById("kill_anim");
       var kill_anim_list= kill_anim.children;
       var kill_anim_img = kill_anim.getElementsByTagName("img");
       for(var i=0;i<kill_anim_list.length;i++)	{
		    kill_anim_list[i].index = i;
	        kill_anim_list[i].onmouseover = function(){
		    for (var b = 0; b < kill_anim_img.length; b++) {
			    anim(kill_anim_img[b],{"top":0});
		    };
		        anim(kill_anim_img[this.index],{"top":-10});
	        }
	        kill_anim_list[i].onmouseleave =function(){
		    anim(kill_anim_img[this.index],{"top":0});
	    }
	}
      //===============================优品专辑===========================
      //===============================排行榜=============================