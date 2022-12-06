/*clearing everything else but the html*/
document.write("1");
/*specifying what i want for each text*/
let div = document.createElement("div");
let myHeader = document.createElement('h1')
let myHeaderReal = document.createElement('center')
let myCenter = document.createElement('center')
/*Color!*/
myCenter.style.color ="5c100d"
document.body.style.backgroundColor = "5c100d";
/*giving the elements text*/
myHeaderReal.innerText = ("A intresting header")
myCenter.innerText = ("A intresting center")
/*adding the elements to the page*/
myHeader.appendChild(myHeaderReal)
document.body.appendChild(div)
document.body.appendChild(myHeader)
document.body.appendChild(myCenter)
