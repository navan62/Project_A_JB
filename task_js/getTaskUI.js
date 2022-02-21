function getNoteUI(task) {
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const frontDiv = document.createElement("div");

    outerDiv.classList.add("taskInformationOuter");
    innerDiv.classList.add("taskInformationInner");
    frontDiv.classList.add("taskInformationFront");


    const img = document.createElement("img");
    img.src = "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcFofzE4r1dhfLsDFQusms35eWBP7zpwiZQ&usqp=CAU";
    img.className = "card-img-top p-6";
    // img.style.display = "none"

    const divBody = document.createElement("div");
    divBody.className = "card-body";

    const taskDetails = document.createElement("h6");
    taskDetails.innerText = task.taskDetails;
    taskDetails.style.position = "absolute";
    taskDetails.style.marginTop = "-180px";
    //taskDetails.style.columnWidth = "200px";
    taskDetails.style.overflowY = "scroll";
    taskDetails.style.height = "120px";
    taskDetails.style.width = "180px";
    taskDetails.className = "card-title";

    const distanationDate = document.createElement("h6");
    distanationDate.innerText = task.distanationDate;
    distanationDate.style.position = "absolute";
    distanationDate.style.marginTop = "-60px";
    distanationDate.className = "card-date";

    const distanationtime = document.createElement("h6");
    distanationtime.innerText = task.distanationtime;
    distanationtime.style.position = "absolute";
    distanationtime.style.marginTop = "-40px";
    distanationtime.className = "card-time";

    divBody.append(taskDetails, distanationDate, distanationtime);
    outerDiv.append(innerDiv);
    const deleteButton = getDeleteButton();
    frontDiv.append(img, divBody, deleteButton);
    innerDiv.append(frontDiv);


    outerDiv.addEventListener("mouseenter", function () {
        this.querySelector(".deleteMeButton");
        getDeleteButton();
    });

    outerDiv.addEventListener("mouseleave", function () {
        this.querySelector(".deleteMeButton").style.visibility = "hidden";
    })



    return outerDiv;

    function getDeleteButton() {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-danger");
        // button.style.display = "none";
        button.classList.add("deleteMeButton");
        button.style.position = "absolute";
        button.style.marginTop = "-230px";
        button.style.marginLeft = "60px"
        const trashIcon = document.createElement("i");
        trashIcon.classList.add("bi", "bi-x");
        button.onclick = function () {
            state.tasks.splice(this, 1);
            localStorage.removeItem(this);
            setTasks(state.tasks);
          };
        button.append(trashIcon);

        return button;
    }

    

    
}
//commemt this file