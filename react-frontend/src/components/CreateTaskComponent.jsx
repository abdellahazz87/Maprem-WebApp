import React, { Component } from 'react'

import TaskService from "../services/TaskService";

class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            description: '',
            status: ''

        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);

    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TaskService.getTaskById(this.state.id).then( (res) =>{
                let task = res.data;
                this.setState({title: task.title,
                    description: task.description,
                    status : task.status
                });
            });
        }
    }
    saveOrUpdateTask = (e) => {
        e.preventDefault();
        let task = {title: this.state.title, description: this.state.description, status: this.state.status};
        console.log('task => ' + JSON.stringify(task));

        // step 5
        if(this.state.id === '_add'){
            TaskService.createTask(task).then(res => {
                this.props.history.push('/tasks');
            });
        }else{
            TaskService.updateTask(task, this.state.id).then( res => {
                this.props.history.push('/tasks');
            });
        }
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }


    cancel(){
        this.props.history.push('/tasks');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Task</h3>
        }else{
            return <h3 className="text-center">Update Tasks</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input placeholder="title" name="title" className="form-control"
                                               value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Description </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                               value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Status </label>
                                        <input placeholder="Status" name="status" className="form-control"
                                               value={this.state.status} onChange={this.changeStatusHandler}/>
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateTask}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateTaskComponent
