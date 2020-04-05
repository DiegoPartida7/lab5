let item = "";
let counter = 1;
let ul = document.getElementsByTagName("ul")[0];
document.getElementsByTagName("button")[0].addEventListener("click" , main);

function checkElement(event){
  event.preventDefault();
  this.parentElement.parentElement.firstChild.firstChild.classList.toggle("line");
  console.log(this.parentElement.parentElement.firstChild.firstChild);
}

function deleteLi(event){
  event.preventDefault();
  this.parentElement.parentElement.remove();
}

function main(event){

  event.preventDefault();
  var li = document.createElement("li");
  var li2 = document.createElement("li2");
  var newUl = document.createElement("ul");
  var check = document.createElement("button");
  var delet = document.createElement("button");
  var product = document.createElement("h3");
  ul.appendChild(newUl);
  
  item = document.getElementsByTagName("input")[0].value;
  product.innerHTML = `${item}`;
  li.appendChild(product);
  newUl.appendChild(li);

  check.innerHTML = "check";
  li2.appendChild(check);
  li2.firstChild.classList.add("checked");
  newUl.appendChild(li2);

  delet.innerHTML = "delete";
  li2.appendChild(delet);
  li2.children[1].classList.add("deleted");
  newUl.appendChild(li2);

  var elements = document.getElementsByClassName("checked");
  var elements2 = document.getElementsByClassName("deleted");

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', checkElement, false);
    console.log(elements[i]);
  }
  for (var i = 0; i < elements.length; i++) {
    elements2[i].addEventListener('click', deleteLi, false);
  }
}
