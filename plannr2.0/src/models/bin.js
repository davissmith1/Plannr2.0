

//bin object
//Each bin contains a list of tasks
class Bin {
    constructor(name, id){
        this.name = name;
        this.bin = [];
        this.id = id;
    }
    getName(){
        return this.name
    }

    add(task){
        //adds a task to the pin
        try{
            this.bin.push(task);
        }catch(e){
            console.log(e);
            console.log("Null task added to bin error")
            return false;
        
        }
        
    
    }
    remove(task){
        //removes a task from the pin
        try{
            this.bin.pop(task);
        }catch(e){
            console.log(e);
            console.log("Null task removed from bin error")
            return false;
        }
       
    }
    getAllTasks(){
        return this.bin
    }
    clear(){
        try{
            this.bin = [];
            console.log("Bin cleared");
            return true;
        }catch(e){
            console.log(e);
            console.log("Bin clear error");
            return false;
        
        }
        
    }

    
}export default Bin;