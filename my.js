    const notesContainer = document.querySelector(".notes-container");
    const createBtn = document.querySelector(".btn");
    let notes = document.querySelector(".input-Box");
        

    createBtn.addEventListener("click", ()=>{

    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-Box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
    
})
notesContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
})
function saveData(){
    localStorage.setItem("my-notes", notesContainer.innerHTML);
}
function showData(){
    localStorage.getItem("my-notes");
}