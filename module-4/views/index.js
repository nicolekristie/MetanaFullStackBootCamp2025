let taskInfo = document.getElementById("task-template").innerHTML;
let template = Handlebars.compile(taskInfo);

const storedTaskName1 = localStorage.getItem('taskName');
const storedTaskDuration1 = localStorage.getItem('taskDuration');
const storedTaskTime1 = localStorage.getItem('taskTime');



//Data passed to the template
app.get('/', function (req, res) {
    res.render('./module-4/views/index.html', {

        tasks: [
            { task: storedTaskName1, duration: storedTaskDuration1, taskTime: storedTaskTime1 }
        ]
    });

});