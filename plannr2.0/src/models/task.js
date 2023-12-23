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

    changeBin(){
        let newId = 0;
        //if not in bin 2 moves to next been returns 1 on success 0 on failure
        if(this.assignedBin.id <= binList.length - 2){
            try{
                newId = this.assignedBin.id + 1;
                console.log(newId)
                binList[newId].add(this);
                console.log(binList[newId])
                this.assignedBin.remove(this);
                this.assignedBin = binList[newId];
            }
            catch(err){
                console.log(err)
                return 0;
            }
       }
       return 0;
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