
let container = document.querySelector('.container');
let list = document.querySelectorAll('.item-link');
let intro = document.querySelector('.intro');
let page = document.body.id;
var imgsArr_page1 = ["placeholder","url(../images/Laugh/bg-dave.jpeg)","url(../images/Laugh/bg-trevor.jpg)","url(../images/Laugh/bg-pete.jpg)","url(../images/Laugh/bg-kevin.jpeg)","url(../images/Laugh/bg-russell.jpg)"];//array of backgroud img's url
var imgsArr_page2 = ["placeholder","url(../images/Laugh/bg-desi.jpg)","url(../images/Laugh/bg-ronny.jfif)","url(../images/Laugh/bg-jimmy.jpg)","url(../images/Laugh/bg-hasan.jpg)","url(../images/Laugh/bg-nikki.jpg)"];
var imgsArr_page3 = ["placeholder",];

function hover (num) {
    if (page == "laugh_page1") {container.style.backgroundImage = imgsArr_page1[num]; }
    else if (page == "laugh_page2") {container.style.backgroundImage = imgsArr_page2[num]; }
    else if (page == "laugh_page3") {container.style.backgroundImage = imgsArr_page3[num]; }
    
    for (var i = 0, len = list.length; i < len; i++) {
        if (i == num) {}                            
        else {list[i].style.opacity = 0.7;}
    }
    intro.style.opacity = 0;
}

function unhover (num) {
    container.style.backgroundImage = null; 
    for (var i = 0, len = list.length; i < len; i++) {
        if (i == num) {}                            
        else {list[i].style.opacity = 1;}
    }
    intro.style.opacity = 1;
}


// below is all the declaration


document.querySelector('#link-1').addEventListener("mouseover", function(event){
    var linknum = 1; 
    hover (linknum);
})
document.querySelector('#link-1').addEventListener("mouseout", function(event){
    var linknum = 1; 
    unhover (linknum);
})

document.querySelector('#link-2').addEventListener("mouseover", function(event){
    var linknum = 2; 
    hover (linknum);
})
document.querySelector('#link-2').addEventListener("mouseout", function(event){
    var linknum = 2; 
    unhover (linknum);
})

document.querySelector('#link-3').addEventListener("mouseover", function(event){
    var linknum = 3; 
    hover (linknum);
})

document.querySelector('#link-3').addEventListener("mouseout", function(event){
    var linknum = 3; 
    unhover (linknum);
})

document.querySelector('#link-4').addEventListener("mouseover", function(event){
    var linknum = 4; 
    hover (linknum);
})
document.querySelector('#link-4').addEventListener("mouseout", function(event){
    var linknum = 4; 
    unhover (linknum);
})

document.querySelector('#link-5').addEventListener("mouseover", function(event){
    var linknum = 5; 
    hover (linknum);
})
document.querySelector('#link-5').addEventListener("mouseout", function(event){
    var linknum = 5; 
    unhover (linknum);
})


// document.querySelector('#link-6').addEventListener("mouseover", function(event){
//     var linknum = 6; 
//     hover (linknum);
// })
// document.querySelector('#link-6').addEventListener("mouseout", function(event){
//     var linknum = 6; 
//     unhover (linknum);
// })

// document.querySelector('#link-7').addEventListener("mouseover", function(event){
//     var linknum = 7; 
//     hover (linknum);
// })
// document.querySelector('#link-7').addEventListener("mouseout", function(event){
//     var linknum = 7; 
//     unhover (linknum);
// })

// document.querySelector('#link-8').addEventListener("mouseover", function(event){
//     var linknum = 8; 
//     hover (linknum);
// })
// document.querySelector('#link-8').addEventListener("mouseout", function(event){
//     var linknum = 8; 
//     unhover (linknum);
// })

// document.querySelector('#link-9').addEventListener("mouseover", function(event){
//     var linknum = 9; 
//     hover (linknum);
// })
// document.querySelector('#link-9').addEventListener("mouseout", function(event){
//     var linknum = 9; 
//     unhover (linknum);
// })

// document.querySelector('#link-10').addEventListener("mouseover", function(event){
//     var linknum = 10; 
//     hover (linknum);
// })
// document.querySelector('#link-10').addEventListener("mouseout", function(event){
//     var linknum = 10; 
//     unhover (linknum);
// })







// document.querySelector('#link-1').addEventListener("mouseover", function(event){
//     $(".container").stop().animate({opacity: 0},500,function(){
//         $(this).css({'background-image': imgsArr[2]}).animate({opacity: 1},{duration:1000});
//      });
// })
// document.querySelector('#link-1').addEventListener("mouseout", function(event){
//     container.style.backgroundImage = null;
// })

// document.querySelector('#link-2').addEventListener("mouseover", function(event){
//     $(".container").stop().animate({opacity: 0},500,function(){
//         $(this).css({'background-image': imgsArr[1]}).animate({opacity: 1},{duration:1000});
//      });
// })
// document.querySelector('#link-2').addEventListener("mouseout", function(event){
//     container.style.backgroundImage = null;
// })

// document.querySelector('#link-3').addEventListener("mouseover", function(event){
//     $(".container").stop().animate({opacity: 0},500,function(){
//         $(this).css({'background-image': imgsArr[2]}).animate({opacity: 1},{duration:1000});
//      });
// })
// document.querySelector('#link-3').addEventListener("mouseout", function(event){
//     container.style.backgroundImage = null;
// })

// document.querySelector('#link-4').addEventListener("mouseover", function(event){
//     $(".container").stop().animate({opacity: 0},500,function(){
//         $(this).css({'background-image': imgsArr[3]}).animate({opacity: 1},{duration:1000});
//      });
// })
// document.querySelector('#link-4').addEventListener("mouseout", function(event){
//     container.style.backgroundImage = null;
// })
