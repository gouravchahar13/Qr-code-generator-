const input =document.getElementById("input");
const btn= document.getElementById("btn")
const img= document.getElementById("img");
const img_box=document.getElementById("img_box")

let value = "Example"
btn.addEventListener("click",()=>{
    if (input.value==""){
        value="Random";
        alert("by default the value is random");
    }else{
        value = input.value;
    }
    img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`

})
