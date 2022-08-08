var formEl=document.querySelector("#task-form");
var tasksToDoE1= document.querySelector("#tasks-to-do");

var taskFormHandler = function(event){

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput= document.querySelector("select[name='task-type']").value;

    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
    taskInfoEl.innerHTML = "<h3 class='task-name'>"+taskDataObj.name + "</h3><span class ='task-type'>"+ taskDataObj.type + "</span>";
};
var createTaskEl = function(taskDataObj){
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput= document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemE1= document.createElement("li");
    listItemE1.className = "task-item";
    
    //creat div to hold task info and add to list item
    var taskInfoEl=document.createElement("div");

    //give it a class name
    taskInfoEl.className="task-info";

    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>"+taskDataObj.name + "</h3><span class ='task-type'>"+ taskDataObj.type + "</span>";
    
    listItemE1.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoE1.appendChild(listItemE1);

};

formEl.addEventListener("submit", taskFormHandler);