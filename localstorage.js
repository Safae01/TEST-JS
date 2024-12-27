let list = document.querySelectorAll("ul li");
let div = document.querySelector('.experiment');
list.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        list.forEach((li)=>{
            li.classList.remove("active")
        });
        e.currentTarget.classList.add('active');
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        div.style.backgroundColor= e.currentTarget.dataset.color;
    })
})
//************************  BOM CHALLENGE***********************************************/
let bom = document.querySelector(".BOM")
let text = document.querySelector(".text");
let btn = document.querySelector('.btnn')
btn.addEventListener("click",function(){
    event.preventDefault();
    if(text.value!==""){
    window.localStorage.setItem("contenu",text.value.trim())
    let cc =localStorage.getItem("contenu")
    console.log(cc)
    let add = document.createElement("input")
    add.setAttribute("type","text")
    add.setAttribute("value",cc)
    add.style.cssText="height: 27px; width: 60%;"
    bom.appendChild(add);
    let delet = document.createElement('input');
    delet.setAttribute("type","button");
    delet.setAttribute("value","delete");
    delet.className="delet";
    bom.appendChild(delet);
    delet.onclick=function(){
        bom.removeChild(add);
        bom.removeChild(delet);
        localStorage.removeItem("contenu");
    }}else{
        alert('veuillez remplir le champs')
    }
});