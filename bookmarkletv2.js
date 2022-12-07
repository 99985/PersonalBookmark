/*clearing everything else but the html*/
document.write("1");
/*specifying what i want for each text*/
let div = document.createElement("div");
let myHeader = document.createElement('h1')
let myHeaderReal = document.createElement('center')
let myCenter = document.createElement('center')
let ButtonPicture = document.createElement('img')
let img = document.createElement("img");
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTiuhxGKEjVXB1iT6j2zms0iPUpZsgaDC6yA&usqp=CAU";

/*styleing :)*/
myHeader.style.fontFamily = "Impact,Charcoal,sans-serif";
myHeader.style.color = "#5c100d"
myCenter.style.fontFamily = "Impact,Charcoal,sans-serif";
myCenter.style.fontSize = "large";
myCenter.style.color = "#5c100d"
document.body.style.backgroundColor = "#132a32";

/*giving the elements their stuff*/
myHeaderReal.innerText = ("Welcome back!")
myCenter.innerText = ("What website do you want to visit today?")
img.src = "https://picsum.photos/200/301";

/*adding the elements to the page*/
myHeader.appendChild(myHeaderReal)
document.body.appendChild(div)
document.body.appendChild(myHeader)
document.body.appendChild(myCenter)
document.body.appendChild(img);
