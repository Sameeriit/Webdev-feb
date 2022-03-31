var plusBtn = document.querySelector(".plus");

var crossBtn = document.querySelector(".cross");

// FUCTION
function plusbtnclick() {
    document
        .querySelector(".dialog")
        .style
        .display = "flex"
}
plusBtn.aadEventListner("click",plusbtnclick)
crossBtn.aadEventListner("click",crossbtnclick)

function closeDialog() {
    document.querySelector(".dialog")
        .style
        .display = "none"
}

function addDelTktlogic() {
    var closeBtnArr = document
        .querySelectorAll(".icon.color-3")
    var minimizeIcons = document
        .querySelectorAll(".icon.color-1")



    for(let index = 0; index < closeBtnArr.length; index++){
        const closeBtn = closeBtnArr[index];
        closeBtn.addEventListener("click",closeTicket)
    }

    
    for(let index = 0; index < minimizeIcons.length; index++){
        const closeBtn = closeBtnArr[index];
        closeBtn.addEventListener("click",minimize)
    }


    
    function closeTicket(e) {
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }

    function minimize(e){
        var box =e.target.closest(".box");
        console.log(box)
        if(box.querySelector("main").style.dispaly !=="none"){
            box.querySelector("main").style.display !=="none"

        }else{
            box.querySelector("main").style.display ="block"
        }

    }



}



function addTicket(){
    closeDialog()
    var boxes = document.querySelector(".Main_head main");
    var HTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    boxes.innerHTML = HTML +`
    <div class = "box">
     <header>
        <div class = "box-heading">${title.value}</div>
        <div class = " icon color-1">-</div>
        <div class = " icon color-2">E</div>
        <div class = " icon color-3">x</div>
      </header>  
      <main>
       <textarea row = "15">${boxContent.value}</textarea> 
       </main> 
        
        
     </div>`;
     title.value = ""
     boxContent.value = ""
}


plusBtn.addEventListener("click",plusbtnClick)
crossBtn.addEventListener("click",closeDialog)














