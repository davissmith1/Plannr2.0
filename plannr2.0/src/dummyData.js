import Task from './models/task.js';
import { binList } from './helper/binList.js'


function makeData(){
    console.log('making data');
    
    let task1 = new Task('test1', 'This is a description. It can be very long or quite short. This will appear when a task is clicked');

    let task2 = new Task('test2', 'this is a description', binList[1]);
    

    console.log(binList);
}export default makeData;