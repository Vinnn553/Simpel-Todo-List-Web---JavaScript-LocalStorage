function getTask() {
    const data = localStorage.getItem('tasks');
    if (data) {
        return JSON.parse(data)
    } else {
        localStorage.setItem('tasks', JSON.stringify(taskData));
        return taskData;
    }
}

function displayTask(tasks) {
    const container = document.querySelector('.task_card')
    container.innerHTML = '';

    tasks.forEach(function (task) {
        container.innerHTML += `
    <article class="task_item">
          <div class="task_data">
            <h2 class="task_title">${task.taskName}</h2>
            <div class="task_status">
              <button type="button" onclick="taskStatus(${task.id}, true)" class="completeBtn ${task.completed ? 'active' : ''}">Complete</button>
              <button type="button" onclick="taskStatus(${task.id}, false)" class="pendingBtn ${!task.completed ? 'active' : ''}">Pending</button>
            </div>
          </div>
          <div class="task_button">
            <button type="button" onclick="editFunction(${task.id})" class="editBtn">
              <i class="ri-edit-2-fill"></i>
            </button>
            <button type="button" onclick="hapusFunction(${task.id})" class="hapusBtn">
              <i class="ri-delete-bin-fill"></i>
            </button>
          </div>
        </article>
    `
    });
}

// Tambah Data
function simpan() {
    const data = getTask();
    const taskInput = document.getElementById('taskInput');
    if (editId !== null) {
        const task = data.find(item => item.id === editId);
        if (task) {
            task.taskName = taskInput.value;
        }
        editId = null;
    } else {
        const newId = data.length > 0 ? Math.max(...data.map(t => t.id)) + 1 : 1;
        const json = {
            id: newId,
            taskName: taskInput.value,
            completed: false,
            createdAt: new Date().toISOString()
        };
        data.push(json);
    }
    localStorage.setItem('tasks', JSON.stringify(data))
    displayTask(data)
    taskInput.value = '';

    document.getElementById('myModal').classList.remove('show-modal');
}

function taskStatus(id, isCompleted) {
    const data = getTask();
    const task = data.find(item => item.id === id);

    if (task) {
        task.completed = isCompleted;
        localStorage.setItem('tasks', JSON.stringify(data));
        displayTask(data);
    }
}

let editId = null;
function editFunction(id) {
    const data = getTask();
    const task = data.find(item => item.id === id);
    const taskInput = document.getElementById('taskInput');
    taskInput.value = task.taskName;
    if (task) {
        editId = id;
    }
    document.getElementById('myModal').classList.add('show-modal')
}

function hapusFunction(id) {
    const data = getTask();
    const task = data.findIndex(item => item.id === id);
    if (task !== -1) {
        if (confirm("Yakin ingin menghapus task?")) {
            data.splice(task, 1);
            localStorage.setItem('tasks', JSON.stringify(data))
            displayTask(data);
        }
    }
}

// Untuk menampilkan data
displayTask(getTask())