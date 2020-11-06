// call out input form
const input = document.querySelector("#myinput");
const form = document.querySelector("#form");
const todo = document.querySelector("#myUL");
const date = document.querySelector("#datetime");

const getTodoList = localStorage.getItem("todoContent");

if (getTodoList) {
  todo.innerHTML = getTodoList;
}

function setDate() {
  date.textContent = new Date().toDateString();
}

setDate();

form.addEventListener("submit", function(event){
  event.preventDefault();
  if (input.value.length > 1){
    const li = document.createElement("li");
    const liText = `<input type="checkbox" class="ticked">
                     <span>${input.value}</span>
                     <i  id ="icon" class="fas fa-trash"></i>`;
     li.innerHTML = liText;
     todo.appendChild(li);
     input.value = '';

     localStorage.setItem("todoContent", todo.innerHTML);
  } 
});

todo.addEventListener("click", function(event){
    // console.log(event.target)
    if (event.target.classList.contains("fas")){
      todo.removeChild(event.target.parentElement)
      localStorage.setItem("todoContent", todo.innerHTML);
    }

  if(event.target.classList.contains("ticked") && event.target.checked == true){
    event.target.parentElement.classList.add("checked");
  }

  if(event.target.classList.contains("ticked") && event.target.checked == false){
    event.target.parentElement.classList.remove("checked");
  }
  
  })






