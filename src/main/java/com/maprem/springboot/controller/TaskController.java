package com.maprem.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.maprem.springboot.model.Task;
import com.maprem.springboot.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maprem.springboot.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    // get all tasks
    @GetMapping("/tasks")
    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    // create task rest api
    @PostMapping("/create/tasks")
    public Task createTask(@RequestBody Task task ) {
        return taskRepository.save(task);
    }

    // get task by id rest api
    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + id));
        return ResponseEntity.ok(task);
    }

    // update task rest api

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskdetails){
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + id));

        task.setTitle(taskdetails.getTitle());
        task.setDescription(taskdetails.getDescription());
        task.setStatus(taskdetails.getStatus());

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }

    // delete task rest api
    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteTask(@PathVariable Long id){
       Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + id));

        taskRepository.delete(task);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
