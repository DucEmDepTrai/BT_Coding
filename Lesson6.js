// 1. Cấu hình API Key của bạn (lấy từ trang Mockup Server)
const API_KEY = "6ae402a57774af696e893116"; 
const BASE_URL = `https://mindx-mockup-server.vercel.app/api/${API_KEY}`;

const sampleData = {
  users: [
    { "userId": 1, "name": "Nguyễn Văn A" },
    { "userId": 2, "name": "Trịnh Hồng M" },
    { "userId": 3, "name": "Lạc Khôi B" }
  ],
  taskStatus: [
    { "statusId": 1, "name": "To Do" },
    { "statusId": 2, "name": "In Progress" },
    { "statusId": 3, "name": "In Review" },
    { "statusId": 4, "name": "Done" }
  ],
  flags: [
    { "flagId": 1, "name": "Low", "color": "#00FF00" },
    { "flagId": 2, "name": "Medium", "color": "#FFA500" },
    { "flagId": 3, "name": "High", "color": "#FF0000" }
  ],
  tasks: [
    { "taskId": 1, "title": "Mobile Wireframes", "description": "Lên bố cục ứng dụng thích nghi cho Mobile.", "statusId": 1, "flagId": 2, "assignedTo": 1, "deadline": "2024-04-12" },
    { "taskId": 2, "title": "User Research", "description": "Thực hiện nghiên cứu người dùng để hiểu rõ nhu cầu.", "statusId": 2, "flagId": 3, "assignedTo": 2, "deadline": "2024-03-04" },
    { "taskId": 3, "title": "Client Call", "description": "Cuộc họp trực tuyến với khách hàng để thảo luận về dự án.", "statusId": 1, "flagId": 1, "assignedTo": 3, "deadline": "2024-04-02" },
    { "taskId": 4, "title": "Annual Presentation", "description": "Chuẩn bị bài thuyết trình hàng năm với số liệu và biểu đồ.", "statusId": 3, "flagId": 2, "assignedTo": 1, "deadline": "2024-03-15" },
    { "taskId": 5, "title": "Onboarding Screens", "description": "Thiết kế các màn hình hướng dẫn ban đầu cho ứng dụng.", "statusId": 4, "flagId": 1, "assignedTo": 2, "deadline": "2024-03-17" },
    { "taskId": 6, "title": "Landing Page Design", "description": "Thiết kế giao diện cho trang Landing Page mới.", "statusId": 2, "flagId": 2, "assignedTo": 3, "deadline": "2024-04-05" },
    { "taskId": 7, "title": "Marketing Strategy", "description": "Lập kế hoạch chiến lược tiếp thị cho sản phẩm mới.", "statusId": 1, "flagId": 3, "assignedTo": 1, "deadline": "2024-04-20" },
    { "taskId": 8, "title": "Bug Fixing", "description": "Sửa các lỗi phát hiện trong phiên bản beta.", "statusId": 3, "flagId": 3, "assignedTo": 2, "deadline": "2024-03-25" },
    { "taskId": 9, "title": "Content Writing", "description": "Viết nội dung cho blog công ty và bài đăng mạng xã hội.", "statusId": 2, "flagId": 1, "assignedTo": 3, "deadline": "2024-04-10" },
    { "taskId": 10, "title": "Team Meeting", "description": "Họp nhóm để thảo luận tiến độ và các vấn đề phát sinh.", "statusId": 4, "flagId": 2, "assignedTo": 1, "deadline": "2024-03-18" }
  ]
};


async function seedResource(resourceName, items) {
  console.log(`--- Đang đẩy dữ liệu lên resource: ${resourceName} ---`);
  
  for (const item of items) {
    try {
      const response = await fetch(`${BASE_URL}/${resourceName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(`[Thành công] Thêm vào ${resourceName}:`, result);
      } else {
        console.error(`[Lỗi] Thêm vào ${resourceName} thất bại. Mã lỗi: ${response.status}`);
      }
    } catch (error) {
      console.error(`[Ngoại lệ] Lỗi kết nối khi thêm vào ${resourceName}:`, error);
    }
  }
}


async function runSeeding() {
  try {

    await seedResource("users", sampleData.users);
    await seedResource("taskStatus", sampleData.taskStatus);
    await seedResource("flags", sampleData.flags);
    await seedResource("tasks", sampleData.tasks);

    console.log("===> HOÀN TẤT KHỞI TẠO DỮ LIỆU CHO YÊU CẦU 1! <===");
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
  }
}
runSeeding();

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


//Yeu_cau2
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
