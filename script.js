var toDos = [];


function main() {
    var leftDiv = document.createElement("div");
    var rightDiv = document.createElement("div");


    document.body.appendChild(leftDiv);
    document.body.appendChild(rightDiv);

    leftDiv.setAttribute("id", "leftDiv");
    rightDiv.setAttribute("id", "rightDiv");

    var heading = document.createElement("h1");
    heading.innerHTML = "Task List";
    leftDiv.appendChild(heading);
    var subheading = document.createElement("h3");
    subheading.innerHTML = "Add task to your list by typing to the right and pressing enter. You may than view pending tasks below."
    leftDiv.appendChild(subheading);

    var toDoBox = document.createElement("textarea");
    toDoBox.setAttribute("id", "toDoBox");
    toDoBox.setAttribute("placeholder", "I need to...");
    toDoBox.setAttribute("class", "textbox");
    rightDiv.appendChild(toDoBox);
    toDoBox.addEventListener("keyup", eventHandler);

}

function eventHandler(event) {
    var keyCode = event.code;
    var toDoBox = document.getElementById("toDoBox");
    var value = toDoBox.value;
    if (keyCode === "Enter" && value !== "") {
        event.preventDefault();
        var container = document.createElement("div");
        var taskheading = document.createElement("p");
        var readButton = document.createElement("i");
        var editButton = document.createElement("i");
        var deleteButton = document.createElement("i");

        readButton.setAttribute("class", "material-icons");
        editButton.setAttribute("class", "material-icons");
        container.appendChild(taskheading);
        container.appendChild(readButton);
        container.appendChild(editButton);
        container.appendChild(deleteButton);
        taskheading.setAttribute("class", "task");
        deleteButton.setAttribute("class", "material-icons");
        deleteButton.innerHTML = "close";
        editButton.innerHTML = "create";
        readButton.innerHTML = "check_box_outline_blank";

        var leftDiv = document.getElementById("leftDiv");
        leftDiv.appendChild(container);

        taskheading.innerHTML = value;
        container.setAttribute("class", "toDoContainer");
        toDoBox.value = "";

        toDos.push(value);
        localStorage.setItem("todos", JSON.stringify(toDos));

        deleteButton.addEventListener("click", function () {
            var val = taskheading.innerHTML;
            var ind;
            toDos.forEach(function (currval, index) {
                if (currval == val) {
                    ind = index;
                }
            })
            toDos.splice(ind, 1);
            localStorage.setItem("todos", JSON.stringify(toDos));
            var parent = container.parentNode;
            parent.removeChild(container);
        })

        readButton.addEventListener("click", function () {
            readButton.innerHTML = "check_box";
            taskheading.innerHTML = "<strike>" + taskheading.innerHTML + "</strike>"
        })

        editButton.addEventListener("click", function () {
            toDoBox.value = taskheading.innerHTML;
            var val = taskheading.innerHTML;
            var ind;
            toDos.forEach(function (currval, index) {
                if (currval == val) {
                    ind = index;
                }
            })
            toDos.splice(ind, 1);
            localStorage.setItem("todos", JSON.stringify(toDos));
            var parent = container.parentNode;
            parent.removeChild(container);
        })
    }
}

main();

let storedToDos = localStorage.getItem("todos");
if (storedToDos !== null) {
    toDos = JSON.parse(storedToDos);
}

toDos.forEach(function (value) {
    var container = document.createElement("div");
    var taskheading = document.createElement("p");
    var readButton = document.createElement("i");
    var editButton = document.createElement("i");
    var deleteButton = document.createElement("i");

    readButton.setAttribute("class", "material-icons");
    editButton.setAttribute("class", "material-icons");
    container.appendChild(taskheading);
    container.appendChild(readButton);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    taskheading.setAttribute("class", "task");
    deleteButton.setAttribute("class", "material-icons");
    deleteButton.innerHTML = "close";
    editButton.innerHTML = "create";
    readButton.innerHTML = "check_box_outline_blank";

    readButton.innerHTML = "check_box_outline_blank";

    var leftDiv = document.getElementById("leftDiv");
    leftDiv.appendChild(container);

    taskheading.innerHTML = value;
    container.setAttribute("class", "toDoContainer");


    deleteButton.addEventListener("click", function () {
        var val = taskheading.innerHTML;
        var ind;
        toDos.forEach(function (currval, index) {
            if (currval == val) {
                ind = index;
            }
        })
        toDos.splice(ind, 1);
        localStorage.setItem("todos", JSON.stringify(toDos));
        var parent = container.parentNode;
        parent.removeChild(container);
    })

    readButton.addEventListener("click", function () {
        readButton.innerHTML = "check_box";
        taskheading.innerHTML = "<strike>" + taskheading.innerHTML + "</strike>"
    })

    editButton.addEventListener("click", function () {
        toDoBox.value = taskheading.innerHTML;
        var val = taskheading.innerHTML;
        var ind;
        toDos.forEach(function (currval, index) {
            if (currval == val) {
                ind = index;
            }
        })
        toDos.splice(ind, 1);
        localStorage.setItem("todos", JSON.stringify(toDos));
        var parent = container.parentNode;
        parent.removeChild(container);
    })
})