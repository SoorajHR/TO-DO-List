document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskDateInput = document.getElementById('task-date');
    const taskTimeInput = document.getElementById('task-time');
    const taskList = document.getElementById('task-list');
    const datetime = document.getElementById('datetime');

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        datetime.textContent = now.toLocaleDateString('en-US', options);
    }

    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        const taskDate = taskDateInput.value;
        const taskTime = taskTimeInput.value;
        if (taskText !== '' && taskDate !== '' && taskTime !== '') {
            addTask(taskText, taskDate, taskTime);
            taskInput.value = '';
            taskDateInput.value = '';
            taskTimeInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    function addTask(taskText, taskDate, taskTime) {
        const li = document.createElement('li');
        
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-text';
        taskDiv.textContent = taskText;

        const timestampDiv = document.createElement('div');
        timestampDiv.className = 'task-timestamp';
        timestampDiv.textContent = `Due: ${taskDate} ${taskTime}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(taskDiv);
        li.appendChild(timestampDiv);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
