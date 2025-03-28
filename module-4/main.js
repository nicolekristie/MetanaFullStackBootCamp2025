const displayName = document.getElementById('display-name');
//task
const taskButton = document.getElementById("task-btn");
const taskForm = document.getElementById("add-task");
const taskName = document.getElementById("task-name");
const taskDuration = document.getElementById("duration");
const taskTime = document.getElementById("time-display");
const createTaskBtn = document.getElementById("create-task")
const taskListContainer = document.querySelector(".task-list-container");
const showCompleteBtn = document.getElementById("btn-3");
const completeListSection = document.getElementById("complete-task-list-container");

//edit task
const editTaskForm = document.querySelector(".edit-task")
const editTaskName = document.getElementById("edit-task-name");
const editDuration = document.getElementById("edit-duration");
const editTaskTime = document.getElementById("edit-time-display");
const editSaveBtn = document.getElementById("edit-save-btn");
const editCloseBtn = document.getElementById("edit-task-close-btn");
const closeButton = document.getElementById("close-button");

const profile = document.getElementById("profile");
const formElement = document.querySelector(".form-element");
const inputField = document.querySelector(".input-field")
const moodForm = document.querySelector(".mood-form-container");
const moodImage = document.getElementById("mood-image");
const moodCloseBtn = document.getElementById("mood-form-close-btn");
//Login Form
const loginForm = document.querySelector(".form-container");
const loginBtn = document.getElementById("login-btn");
const closeLoginFormBtn = document.getElementById("close-btn");
const userName = document.getElementById("user-name");
const email = document.getElementById("user-email");
const password = document.getElementById("user-password");
//Profile Form
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profileForm = document.querySelector(".profile-container");
const profileSaveBtn = document.getElementById("save-btn");
const profileCloseBtn = document.getElementById("profile-close-button");
const profileFormElement = document.querySelector(".profile-form");
//validation
const email_error = document.getElementById('email_error')
const password_error = document.getElementById('password_error')
//get stored data
const userNameStored = localStorage.getItem('userName');
const emailStored = localStorage.getItem('email');
const storedTaskName = localStorage.getItem('taskName');
const storedTaskDuration = localStorage.getItem('taskDuration');
//range slider
const emoji = document.getElementById('emoji');
const mood = document.getElementById('mood');
const sliderValue = document.getElementById('range');
const emojiCloseBtn = document.getElementById('emoji-close-btn');
const emojiForm = document.getElementById('emoji-mood-form');
//weather api
const url = 'http://api.weatherapi.com/v1/current.json?key=c194c9f95a1d428b8b2213157250503&q=New%20York&aqi=no';
const weatherIcon = document.getElementById("nav-weather-icon");
//weather-form-container
// const weatherForm = document.querySelector(".weather-container");
const weatherForm = document.querySelector(".weather-form-container");
const weatherCloseBtn = document.getElementById("weather-close-button");
const weatherImage = document.getElementById("weather-image");
const celcius = document.getElementById("celcius");
const weatherCondition = document.getElementById("weather-condition");
const humidity = document.getElementById("humidity")



function getWeatherData() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the weather data
            console.log(data);
            const temperature = data.current.temp_f;
            const condition = data.current.condition.text;
            const humidityValue = data.current.humidity;
            console.log(`Temperature: ${temperature}°F, condition: ${condition} and the humidity is: ${humidityValue}`);
        

            if (condition=='Sunny' || condition =='Clear'){
                weatherImage.innerHTML = "☀️"
                // weatherImage.innerHTML && weatherIcon.innerHTML === "☀️"
            }
            else if (condition=='rain'){
                weatherImage.innerHTML && weatherIcon.innerHTML == "⛆"
            }
            else if (condition =="partly cloudy"){
                weatherImage.innerHTML && weatherIcon.innerHTML =="☁️"
            }
            else {
                weatherImage.innerHTML && weatherIcon.innerHTML == "☀️"
            }

            celcius.innerHTML = temperature;
            weatherCondition.innerHTML = condition;
            humidity.innerHTML =`Humidity: ${humidityValue}`;
    })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
        });
}

weatherIcon.addEventListener("click", () => {
    if (weatherForm.style.display === "none") {
        weatherForm.style.display = "block";
        getWeatherData();
    } else {
        weatherForm.style.display = "none";
    }
});



weatherCloseBtn.addEventListener('click', () => {
    weatherForm.style.display = "none";
});


const isValidEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// loginForm.addEventListener('input', (e) => {
//     e.preventDefault();
//     validateInputs();
// });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//Click on the profile button and check local storage

profile.addEventListener("click", checkLocalStorage());

function displayLoginForm() {
    profile.addEventListener("click", () => {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            saveLoginDetails();
        } else {
            loginForm.style.display = "none";
        }
    })
}

function displayProfileForm() {
    profile.addEventListener("click", () => {
        if (profileForm.style.display === "none") {
            profileForm.style.display = "block";
            //display previous name in field
            profileName.value = userNameStored;
            profileEmail.value = emailStored;
            saveProfileUpdates();
        } else {
            profileForm.style.display = "none";
        }
    })
}

profileSaveBtn.addEventListener('click', () => {
    alert("Information has been updated successfully");
    displayName.innerHTML=profileName.value;
    
});


loginBtn.addEventListener("click", () =>{
    alert("Information has been save successfully"); 
    displayName.innerHTML=profileName.value;
});


closeLoginFormBtn.addEventListener('click', closeLoginForm());

profileCloseBtn.addEventListener('click', closeProfileForm());


function closeProfileForm() {
    profileForm.style.display = "none";
}

function closeLoginForm() {
    loginForm.style.display = "none";
}

//save user details in local storage
function saveLoginDetails() {
    formElement.addEventListener('input', function (event) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('email', email.value);
    });
}

function saveProfileUpdates() {
    profileFormElement.addEventListener('input', function (event) {
        localStorage.setItem('userName', profileName.value);
        localStorage.setItem('email', profileEmail.value);
    });
}

function checkLocalStorage() {
    if (userNameStored && emailStored) {
        displayProfileForm();
    } else {
        displayLoginForm();
    }
}

moodImage.addEventListener("click", function () {
    if (moodForm.style.display === "none") {
        moodForm.style.display = "block";
    } else {
        moodForm.style.display = "none";
    }
})

emojiCloseBtn.addEventListener('click', () => {
    emojiForm.style.display = "none";
});



sliderValue.oninput = function () {
    let value = this.value;
    if (value <= 20) {
        emoji.innerHTML = '&#128543;';
        mood.innerHTML = 'Worried';
    }
    else if (value <= 40) {
        emoji.innerHTML = '&#128545;';
        mood.innerHTML = 'Sad';
    }
    else if (value <= 60) {
        emoji.innerHTML = '&#128532;';
        mood.innerHTML = 'Confused';
    }
    else if (value <= 80) {
        emoji.innerHTML = '&#128522;';
        mood.innerHTML = 'Happy';
    }
}


//Validation
const validateInputs = () => {
    if (email.value === "" || email.value === null) {
        setError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
        setError(email, 'Please provide a valid email address. ex. user@domain.com.');
    }
    else {
        setSuccess(email);
    }
    if (document.getElementById("user-password").value == "" || document.getElementById("user-password").value == null) {
        setError(password, 'Password is required');
    } else if (password.value.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}

function displayTaskForm() {
    taskForm.style.display = "block";
}


// showCompleteBtn.onclick = function() {displayCompleteSection()};

// function displayCompleteSection() {
//     completeListSection.style.display="block"
// }


closeButton.addEventListener("click", () => {
    taskForm.style.display = "none";
})


editCloseBtn.addEventListener('click', () => {
    editTaskForm.style.display = "none";
});

function checkTaskLocalStorage() {
    if (storedTaskName && storedTaskDuration) {
        displayEditTaskForm();
    } else {
        console.log("we are here")
        displayTaskForm();
    }
}


var storedTasks = JSON.parse(localStorage.getItem("tasks")) || []; 
var completeStoredTasks = JSON.parse(localStorage.getItem("completeTasks")) || []; 



function displayTasks() {
    storedTasks = JSON.parse(localStorage.getItem("tasks")) || []; 
    completeStoredTasks = JSON.parse(localStorage.getItem("completeTasks")) || []; 
    console.log(completeStoredTasks)
    const taskList = document.getElementById("taskData");
    taskList.innerHTML = ""; // Clear the list before adding new tasks

    storedTasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <li>${task.taskName} - ${task.taskDuration} - ${task.taskTime}</li>
            <button onclick="displayEditTaskForm(${index})">Edit</button>
            <button onclick="completeTasks(${index})">Complete</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });  

    const completeTaskList = document.getElementById("completeTaskData");
    completeTaskList.innerHTML = ""; // Clear the list before adding new tasks


    completeStoredTasks.forEach((task, index) => {
        const completeTaskItem = document.createElement("div");
        completeTaskItem.classList.add("c-list");
        completeTaskItem.innerHTML = `
            <li>${task.taskName} - ${task.taskDuration} - ${task.taskTime}</li>
        `;
        completeTaskList.appendChild(completeTaskItem);
  
    });  




}


function addTaskToStorage() {
    const newTask = {
        taskName: taskName.value,
        taskDuration: taskDuration.value,
        taskTime: taskTime.value
    };

    storedTasks.push(newTask); 
    localStorage.setItem("tasks", JSON.stringify(storedTasks)); 
    displayTasks();
}


function addcompleteTaskToStorage(task){
    // const newCompleteTask = {
    //     taskName: taskName.value,
    //     taskDuration: taskDuration.value,
    //     taskTime: taskTime.value
    // };

    completeStoredTasks.push(task); 
    localStorage.setItem("completeTasks", JSON.stringify(completeStoredTasks)); 
}



function displayEditTaskForm(index) {
    editTaskForm.style.display = "block";
    const taskToDisplay = storedTasks[index];
    editTaskName.value = taskToDisplay.taskName;
    editDuration.value = taskToDisplay.taskDuration;
    editTaskTime.value = taskToDisplay.taskTime
    editTask(index);
   
}


function editTask(index) {
    const taskToEdit = storedTasks[index];
    taskName.value = taskToEdit.taskName;
    taskDuration.value = taskToEdit.taskDuration;
    taskTime.value = taskToEdit.taskTime;
    // Update the task when the user submits the form
    editSaveBtn.onclick = function() {
    updateTask(index);
    };
}


function updateTask(index) {
    storedTasks[index] = {
        taskName: editTaskName.value,
        taskDuration: editDuration.value,
        taskTime: editTaskTime.value,
    };
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    displayTasks(); // Update the UI
}


function deleteTask(index) {
    storedTasks.splice(index, 1); 
    localStorage.setItem("tasks", JSON.stringify(storedTasks)); 
    displayTasks(); 
}


completeStoredTasks = JSON.parse(localStorage.getItem("completeTasks")) || []; 

function completeTasks(index){
    //remove items from task section and place in complete section and strike through task
    itemToAdd=storedTasks[index];
    console.log(itemToAdd);

    addcompleteTaskToStorage(itemToAdd);
    deleteTask(index);
}


taskButton.addEventListener("click", () => {
    taskForm.style.display = "block";   
});


createTaskBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    addTaskToStorage(); 
});


displayTasks();

