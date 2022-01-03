import axios from 'axios';

const Task_API_BASE_URL = "http://localhost:8089/api/v1/tasks";

class TaskService {

    getTasks(){
        return axios.get(Task_API_BASE_URL);
    }

    createTask(task){
        return axios.post("http://localhost:8089/api/v1/create/tasks", task);
    }

    getTaskById(taskId){
        return axios.get(Task_API_BASE_URL + '/' + taskId);
    }

    updateTask(task, taskId){
        return axios.put(Task_API_BASE_URL + '/' + taskId, task);
    }

    deleteTask(taskId){
        return axios.delete(Task_API_BASE_URL + '/' + taskId);
    }
}

export default new TaskService()