
const slider = document.getElementById("range");
const value = document.querySelector('.value');
const moodValue = document.getElementById("mood-value");
//task
const taskButton = document.getElementById("task-btn");
const taskForm = document.getElementById("add-task-form");
const taskName = document.getElementById("task-name");
const taskDuration = document.getElementById("duration");
const taskTime = document.getElementById("time-display");
const createTaskBtn = document.getElementById("create-task")
const taskListContainer = document.querySelector(".task-list-container");
//edit task
const editTaskForm = document.querySelector(".edit-task")
const editTaskName = document.getElementById("edit-task-name");
const editDuration = document.getElementById("edit-duration");
const editTaskTime = document.getElementById("edit-time-display");
const editSaveBtn = document.getElementById("edit-save-btn");
const editCloseBtn = document.getElementById("edit-task-close-btn");
const closeButton = document.getElementById("close-button");
let date = new Date();
// let currentTime = date.toISOString().substring(11 , 16);
// document.getElementById('time-display').value = currentTime;
const profile = document.getElementById("profile");
const formElement =  document.querySelector(".form-element");
const inputField = document.querySelector(".input-field")
const moodForm = document.querySelector(".mood-form");
const moodImage = document.getElementById("mood-image");
//Login Form
const loginForm =  document.querySelector(".form-container");
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
const email_error= document.getElementById('email_error')
const password_error= document.getElementById('password_error')
 //get stored data
 const userNameStored = localStorage.getItem('userName');
 const emailStored = localStorage.getItem('email');
 const storedTaskName = localStorage.getItem('taskName');
 const storedTaskDuration = localStorage.getItem('taskDuration');
 //range slider
 const emoji = document.getElementById('emoji');
 const mood = document.getElementById('mood');
 const sliderValue = document.getElementById('range');



 const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

loginForm.addEventListener('input', (e)=>{
    e.preventDefault();
    validateInputs();
});

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

profile.addEventListener("click",checkLocalStorage());

function displayLoginForm(){
    profile.addEventListener("click" ,()=> {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            saveLoginDetails();
        } else {
            loginForm.style.display = "none";
        }
    })
}

 function displayProfileForm(){
      profile.addEventListener("click" ,()=> {
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
    alert("Information has been updated successfully")
});


loginBtn.addEventListener("click", () =>
    alert("Information has been save successfully")
);


closeLoginFormBtn.addEventListener('click', closeLoginForm());

profileCloseBtn.addEventListener('click', closeProfileForm());


function closeProfileForm() {
     profileForm.style.display = "none";
 }

function closeLoginForm() {
    loginForm.style.display = "none";
}

//save user details in local storage
function saveLoginDetails()
{
    formElement.addEventListener('input', function(event) {
        localStorage.setItem('userName',userName.value);
        localStorage.setItem('email',email.value);
      });
}

function saveProfileUpdates()
{
    profileFormElement.addEventListener('input', function(event) {
        localStorage.setItem('userName',profileName.value);
        localStorage.setItem('email',profileEmail.value);
      });
}

function checkLocalStorage() {
    if (userNameStored && emailStored) {
        displayProfileForm();
    } else {
        displayLoginForm();
    }
}

moodImage.addEventListener("click", function(){
    if (moodForm.style.display === "none") {
        moodForm.style.display = "block";
    } else {
        moodForm.style.display = "none";
    }
})

function setTaskLocalStorage() {
    taskForm.addEventListener('input', function(event) {
        localStorage.setItem('taskName',taskName.value);
        localStorage.setItem('taskDuration',taskDuration.value);
        localStorage.setItem('taskTime', taskTime.value)
    });
}

sliderValue.oninput = function() {
    let value = this.value;
    if(value<=20){
        emoji.innerHTML = '&#128543;';
        mood.innerHTML = 'Worried';
    }
    else if(value <=40){
        emoji.innerHTML = '&#128545;';
        mood.innerHTML = 'Sad';
    }
    else if(value <=60){
        emoji.innerHTML = '&#128532;';
        mood.innerHTML = 'Confused';
    }
    else if(value <=80){
        emoji.innerHTML ='&#128522;';
        mood.innerHTML = 'Happy';
    }
}

function sliderChange(val) {
    document.getElementById("output").innerHTML = val;
}

slider.addEventListener("oninput", () => {
    moodValue.innerHTML = slider.value;
});


//Validation
const validateInputs = () => {
    if (email.value === "" || email.value === null){
            setError(email, "Email is required");
        } else if (!isValidEmail(email.value)){
             setError(email, 'Please provide a valid email address. ex. user@domain.com.');
        } 
    else {
             setSuccess(email);
    }      
    if (document.getElementById("user-password").value == "" || document.getElementById("user-password").value == null) {
            setError(password, 'Password is required');
        } else if (password.value.length < 8 ) {
            setError(password, 'Password must be at least 8 character.')
    } else {
            setSuccess(password);
    }
}


taskButton.addEventListener("click", ()=> {
    checkTaskLocalStorage() 
});


function displayTaskForm() {
    taskForm.style.display = "block";
    setTaskLocalStorage();
    
}

function displayEditTaskForm() {
    console.log("edit form function...")
    editTaskForm.style.display = "block";
    taskName.value = storedTaskName;
    taskDuration.value = storedTaskDuration;
    setTaskLocalStorage();
    
    // Toggle the visibility of the form
    // if (editTaskForm.style.display === "none") {
    //     taskForm.style.display = "block";
    //     setTaskLocalStorage();
    // } else {
    //     editTaskForm.style.display = "none";
    // }

}

closeButton.addEventListener("click", ()=> {
    taskForm.style.display = "none";
})

document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const storedTaskName = localStorage.getItem('taskName');
    const storedTaskDuration = localStorage.getItem('taskDuration');
    const storedTaskTime = localStorage.getItem('taskTime');
    const taskComponents = [storedTaskName, storedTaskDuration, storedTaskTime]
    const newElement = document.createElement('li');

    taskComponents.forEach( item => {
       //Set the text content of the new elemet to the current array item
       newElement.textContent = taskComponents;
       taskListContainer.appendChild(newElement);
    })   

});
//save task details
editTaskForm.addEventListener('input', ()=>{
    localStorage.setItem('taskName',editTaskName.value);
    localStorage.setItem('taskDuration',editDuration.value);
    localStorage.setItem('taskTime',editTaskTime.value);
});

editSaveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editTaskForm.style.display = "none";
    alert("Information has been updated successfully");

});

editCloseBtn.addEventListener('click', () => {
    editTaskForm.style.display = "none";
});

function checkTaskLocalStorage() {
    if (storedTaskName && storedTaskDuration) {
        displayEditTaskForm();
    } else {
        displayTaskForm();
    }
}
