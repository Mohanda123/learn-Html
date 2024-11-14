var poppupoverlay = document.querySelector(".popup-overlay")
var poppupbox = document.querySelector(".popup-box")
var addpoppupbutton =document.getElementById("add-poppup-button")
function show(){
    poppupoverlay.style.display="block"
    poppupbox.style.display="block"
}
function canceled(){
    poppupoverlay.style.display="none"
    poppupbox.style.display="none"
}
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-descripotion-input") 



addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
})
function deletebook(event){
    event.target.parentElement.remove()
}