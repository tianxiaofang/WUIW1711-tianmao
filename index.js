//轮播图
{
    let imgs=document.querySelectorAll(".banner_img_item");
    let pagers=document.querySelectorAll(".pager li");
    let banners=document.querySelector(".banner_img");
    let flag=true;
    pagers.forEach(function(ele,index){
        ele.onmouseenter=function(){
            flag=false;
            for(let i=0;i<pagers.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    let n=0;
    let t=setInterval(move,3000);

    function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banners.onmouseenter=function(){
        clearInterval(t);
    };
    banners.onmouseleave=function(){
        t=setInterval(move,3000);
    };
    imgs.forEach(function(ele){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })
}
//banner列表
{
    var list=document.querySelectorAll(".banner_list li");
    var menu1=document.querySelectorAll(".banner_left");
    let obj2=menu1[0];
    list.forEach(function(ele,index){
        ele.onmouseenter=function(){
            menu1[index].style.display="block";
            obj2=menu1[index];
        }
        ele.onmouseleave=function(){
            menu1[index].style.display="none";
        }
    })
}
//head下拉
{
    let li_item1=document.querySelectorAll(".li_item1");
    let head_wen=document.querySelectorAll(".li_item2");
    let head_wenzi_xiala1=document.querySelectorAll(".head_wenzi_xiala");
    li_item1.forEach(function(ele,index){
        ele.onmouseenter=function(){
            head_wen[index].style.background="#fff";
            head_wenzi_xiala1[index].style.display="block";
            z=head_wenzi_xiala1[index];

        }
        ele.onmouseleave=function(){
            head_wenzi_xiala1[index].style.display="none";
            head_wen[index].style.background="";
        }
    })
}

//返回顶部
$(".leftBar_title2").click(function () {
    //$(window).scrollTop(0);
    $("html,body").animate({scrollTop: 0})   //html和body都加，兼容性好
});
$(".left_item3").click(function () {
    //$(window).scrollTop(0);
    $("html,body").animate({scrollTop: 0})   //html和body都加，兼容性好
});
//导航显示隐藏
$(window).scroll(function(){
    let st=$(window).scrollTop();
    if(st>1200){
        $(".leftBar").show();
    }else{
        $(".leftBar").hide();
    }
})

{
    let top=document.querySelector("#top");
    window.onscroll=function(){
        let st=document.documentElement.scrollTop;
        if(st>700){
            top.style.height=40+"px";
        }else{
            top.style.height=0;
        }
    }
}
//楼层跳转
$(".leftBar_title1").click(function(){
    let index=$(this).index();  //索引值let index=$(this).index(".leftBar_list");
    let ot=$(".content_item").eq(index).offset().top-50;
    $("html,body").animate({scrollTop:ot},200)
});
$(window).scroll(function(){
    let st=$(window).scrollTop();
    $(".content_item").each(function(index,ele){
        if(st>$(this).offset().top-150){
            $(".leftBar_title1").removeClass("laft_active").eq(index).addClass("laft_active");
        }
    })
});

{
    let left_item=document.querySelectorAll(".left_item");
    let left_floatall=document.querySelectorAll(".left_floatall");
    console.log(left_item);
    console.log(left_floatall);
    left_item.forEach(function(ele,index){
        ele.onmouseenter=function(){
            for(let i=0;i<left_item.length;i++){
                left_floatall[i].style.width=0;
            }
            left_floatall[index].style.width=100+"px";
        }
        ele.onmouseleave=function(){
            for(let i=0;i<left_item.length;i++){
                left_floatall[i].style.width=0;
            }
        }
    })
}