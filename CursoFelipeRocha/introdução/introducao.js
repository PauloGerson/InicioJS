let modal = document.querySelector('.btn');
let div = document.querySelector('.container');

function toggle(){
    if(div.classList.contains("show")){
        div.classList.remove("show")
    }else{
        div.classList.add("show")
        
    }
}
modal.addEventListener('click',toggle,false)
