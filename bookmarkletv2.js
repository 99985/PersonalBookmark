/*clearing everything else but the html*/
document.write("1");

/*specifying what i want for each text*/
let div = document.createElement("div");
let myHeader = document.createElement('h1')
let myHeaderReal = document.createElement('center')
let myCenter = document.createElement('center')
let ButtonPicture = document.createElement('img')
let img = document.createElement("img");
img.src = "https://picsum.photos/200/301";

/*button code*/
let can = document.createElement("button");
can.innerHTML = "Canvas"
can.addEventListener("click", function () {
    alert("Opening Canvas in a new tab");
    window.open("https://dekalb.instructure.com/");
  });


/*styleing :)*/
myHeader.style.fontFamily = "Impact,Charcoal,sans-serif";
myHeader.style.color = "#ffee32";
myHeaderReal.fontSize = "x-large";
img.style.position = "relative";
myCenter.style.fontFamily = "Impact,Charcoal,sans-serif";
myCenter.style.fontSize = "large";
myCenter.style.color = "#ffee32";

img.style.left = '270px'

can.style.width = '100px'
can.style.height = '100px'
can.style.left = '20px'
can.style.bottom = '20px'

document.body.style.zoom = '200%'
document.body.style.backgroundColor = "#202020";

/*giving the elements their stuff*/
myHeaderReal.innerText = ("Welcome back!")
myCenter.innerText = ("What website do you want to visit today?")

/*adding the elements to the page*/
myHeader.appendChild(myHeaderReal)
document.body.appendChild(myHeader)
document.body.appendChild(myCenter)
document.body.appendChild(div)
document.body.appendChild(img);
document.body.appendChild(can);
