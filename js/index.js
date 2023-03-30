let LoadMore = document.getElementById("LoadMore");
let refresh = document.getElementById("refresh");
let picbody = document.getElementById("picbody");

let imgdiv = document.createElement("div");
imgdiv.style.border = "2px solid white";
console.log(imgdiv);

let end = 4;
let star = 0;

let newsta = 0;
let newend = 0;

let arr = [];

for (let index = star; index < end; index++) {
  let imgdiv = document.createElement("div");
  imgdiv.style.border = "2px solid white";
  let newImag = document.createElement("img");
  newImag.src = `media/pic-${index}.jpg`;
  newImag.style.width = "100%";
  imgdiv.appendChild(newImag);
  picbody.appendChild(imgdiv);
  arr.push(imgdiv);
  star++;
  console.log("index 1", index);
}

function creatt(x) {
  if (x <= 32) {
    for (let index = star; index < x; index++) {
      let imgdiv = document.createElement("div");
      imgdiv.style.border = "2px solid white";
      let rand = Math.round(Math.random() * x);
      let newImag = document.createElement("img");
      newImag.src = `media/pic-${index}.jpg`;
      newImag.style.width = "100%";
      imgdiv.appendChild(newImag);
      picbody.appendChild(imgdiv);
      arr.push(imgdiv);
      console.log("index 2", index);
      star++;
    }
  }
}

function displaypic() {
  let allim = document.querySelectorAll("img");
  for (let index = 0; index < allim.length; index++) {
    let rand = Math.round(Math.random() * allim.length );

    allim[index].src = `media/pic-${rand}.jpg`;
    console.log("index 3", index);
  }
}
displaypic();

LoadMore.addEventListener("click", () => {
  end += 3;
  console.log(star, end);
  creatt(end);
});

refresh.addEventListener("click", () => {
  displaypic();
});
