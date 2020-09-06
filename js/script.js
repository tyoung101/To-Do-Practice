
let myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close"; 
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Hide the current list item when clicked
let close = document.getElementsByClassName("close");
for (let i = 0; i <close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a checked symbol when the user clicks on the element

let list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI' ){
        e.target.classList.toggle('checked');
    }
},false);

//Create a new list item with Add
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text)
    if (inputValue ==='') {
        alert("You must enter something!")
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
