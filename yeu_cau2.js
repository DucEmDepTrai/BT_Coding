const BASE_URL = "6ae402a57774af696e893116"; 



async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    return await response.json();
  } catch (error) {
    console.error("Lỗi lấy users:", error);
  }
}

async function getTaskStatus() {
  try {
    const response = await fetch(`${BASE_URL}/taskStatus`);
    return await response.json();
  } catch (error) {
    console.error("Lỗi lấy taskStatus:", error);
  }
}

async function getFlags() {
  try {
    const response = await fetch(`${BASE_URL}/flags`);
    return await response.json();
  } catch (error) {
    console.error("Lỗi lấy flags:", error);
  }
}

async function getTasks() {
  try {
    const response = await fetch(`${BASE_URL}/tasks`);
    return await response.json();
  } catch (error) {
    console.error("Lỗi lấy tasks:", error);
  }
}


async function filterTasks(flagId, statusId, assignedTo) {
  try {
    const tasks = await getTasks();
    return tasks.filter(task => {
      return (
        (!flagId || task.flagId === flagId) &&
        (!statusId || task.statusId === statusId) &&
        (!assignedTo || task.assignedTo === assignedTo)
      );
    });
  } catch (error) {
    console.error("Lỗi lọc tasks:", error);
  }
}



async function createUser(userData) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
    return await response.json();
  } catch (error) {
    console.error("Lỗi thêm user:", error);
  }
}

async function createTask(taskData) {
  try {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData)
    });
    return await response.json();
  } catch (error) {
    console.error("Lỗi thêm task:", error);
  }
}



async function updateUser(userId, updatedData) {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData)
    });
    return await response.json();
  } catch (error) {
    console.error("Lỗi cập nhật user:", error);
  }
}

async function updateTask(taskId, updatedData) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData)
    });
    return await response.json();
  } catch (error) {
    console.error("Lỗi cập nhật task:", error);
  }
}

async function deleteTask(taskId) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: "DELETE"
    });
    return response.ok;
  } catch (error) {
    console.error("Lỗi xóa task:", error);
  }
}