import Bin from '../models/bin'
import makeData from '../dummyData.js';


export const binList = [];
binList[0] = new Bin('To Do', 0);
binList[1] = new Bin('In Progress', 1);
binList[2] = new Bin('Done', 2);
//makeData();

    // function init(){
    //     binList[0] = new Bin('To Do');
    //     binList[1] = new Bin('In Progress');
    //     binList[2] = new Bin('Done');
    //     console.log('init called')

    // }export default init