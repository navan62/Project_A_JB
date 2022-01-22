const DOM = {
    form: null,
    taskDetails: null,
    distanationDate: null,
    distanationtime: null,
    taskContainer: null,
    
};
const CONFIG = { TASKS: "tasks" };
const state = { tasks: [] };

function init() {
    DOM.form = document.querySelector("#addTaskForm");
    DOM.taskDetails = DOM.form["taskDetails"];
    DOM.distanationDate = DOM.form["distanationDate"];
    DOM.distanationtime = DOM.form["distanationTime"];
    DOM.taskContainer = document.querySelector("#taskContainer");
    const button = document.querySelector("#addTask");
    button.addEventListener("click", addTask);

    try {
        const taskString = localStorage.getItem(CONFIG.TASKS);
        const tasks = JSON.parse(taskString);
        if (!tasks)
            return;
        state.tasks = tasks;
    } catch (ex) {
        draw(state.tasks);
    }

    const resetButton = document.querySelector("#resetForm");
    resetButton.addEventListener("click", function () {
        document.getElementById("addTaskForm").reset();
    })
    // const resetButton = document.getElementById("addTaskForm")


}
init();

function draw(tasks) {
    DOM.taskContainer.innerHTML = "";
    for (let index = 0; index < tasks.length; index++) {
        const taskNote = getNoteUI(tasks[index]);
        if (!taskNote) return;
        DOM.taskContainer.append(taskNote);
    }
}

function addTask() {
     const taskDetailsValue = DOM.taskDetails.value;
    const distanationDateValue = DOM.distanationDate.value;
    const distanationtimeValue = DOM.distanationtime.value;

    const task = getTask(taskDetailsValue, distanationDateValue, distanationtimeValue);
    state.tasks.push(task);
    localStorage.setItem(CONFIG.TASKS, JSON.stringify(state.tasks));
    draw(state.tasks);
}
  
function setTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    draw(state.tasks);
}