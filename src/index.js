document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    buildTasks(e.target.new_task_description.value);
  })
});
function buildTasks(tasks){
  let p=document.createElement("p");
  let button=document.createElement("button");
  button.addEventListener("click", deleteTask);
  button.textContent = "Delete";
  p.textContent = `${tasks} `;
  p.appendChild(button);
  console.log(p);
  document.querySelector("#tasks").appendChild(p);
}
function deleteTask(e){
  e.target.parentNode.remove();
}