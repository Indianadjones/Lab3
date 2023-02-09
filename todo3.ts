interface TasksInterface{//
    tasks:string[];//3(a)
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number
}


class Tasks implements TasksInterface{
    constructor(){

    }
    //Tasks: string[];
    
tasks:string[]=[];
//(b)
addTask(task:string):number{
    this.tasks.push(task);//i
    console.log('Task item' +task+ "has been added to your list.");//ii.
    return this.tasks.length;//iii.
}


listAllTasks():void{
    this.tasks.forEach((item)=>{
        console.log("Task" + item + " is in our list.");
    })
    

}

deleteTask(task:string):number{

    let index = this.tasks.indexOf(task);
    if (index>-1){
        this.tasks.splice(index,1);
        console.log("the String '" + task + "' was removed from the array");

    }else{
        console.log("Task " + task +" is not in our list");
    }

    //iv.
    return this.tasks.length;

}
}
let myTasks1 = new Tasks();
myTasks1.addTask("School");
myTasks1.addTask("Another School");
myTasks1.listAllTasks();
myTasks1.deleteTask("School");
myTasks1.listAllTasks();
