import { binList } from '../helper/binList'
//this is a task object
//it holds teh task name of contents
class Task{
    constructor(taskName, taskDescription){
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.assignedBin = binList[0];
        this.createdAt = new Date();
        binList[0].add(this);
    }

    changeBin(newBin){
        if(newBin == null){
            return false
        }
        else if(newBin.id){
            //TODO: implement bin move feature
        }
    }
    getName(){
        return this.taskName;
    }

    getDescription(){
        return this.taskDescription;
    }

    getBin(){
        return this.assignedBin;
    }

    getCreationDate(){
        const dateString = `${this.createdAt.getMonth() + 1}/${this.createdAt.getDate()}`;
        const timeString = `${this.createdAt.getHours()}:${this.createdAt.getMinutes()}`;

        const time = `${dateString} ${timeString}`;

        return time;
    }

    deleteTask(){
        //removes task from a bin and dereferences 
        console.log('delete called')
        this.assignedBin.remove(this);
        this.assignedBin = null
    }

} export default Task;