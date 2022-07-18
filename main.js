const sayı1 = document.getElementById("sayı1")
const sayı2 = document.getElementById("sayı2")
const sonuç = document.getElementById("sonuç")


let işlem = ""

function c(){
    sayı1.value = ""
    sayı2.value = ""
    sonuç.value = ""
    işlem = ""
}
function sil(){
    if(işlem === ""){
        sayı1.value = sayı1.value.splice(sayı1.value.length,-1)
    }
    else{
        sayı2.value = sayı2.value.slice(0,-1)
    }
}
function eşit(){
       if(işlem === "toplama"){
        sonuç.value = Number(sayı1.value) + Number(sayı2.value)
       }
       else if(işlem === "çıkarma"){
        sonuç.value = Number(sayı1.value) - Number(sayı2.value)
       }
       else if(işlem === "çarpma"){
        sonuç.value = Number(sayı1.value) * Number(sayı2.value)
       }
       else if(işlem === "bölme"){
        sonuç.value = Number(sayı1.value) / Number(sayı2.value)
       }
}

function böl(){
    işlem = "bölme"
}
function çarp(){
    işlem = "çarpma"
}
function çıkar(){
    işlem = "çıkarma"
}
function topla(){
    işlem = "toplama"
}

function virgül(){
    if(işlem === ""){
        sayı1.value = sayı1.value + "."
     }
     else{
         sayı2.value = sayı2.value + "."
     }
}

function num(a){
    if(işlem === ""){
        sayı1.value = sayı1.value + a
    }
    else{
        sayı2.value = sayı2.value + a
    }
}