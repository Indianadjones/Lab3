//a
let Tasks:string[]=[];// Array
//b
function addTask(task:string)//i
{
    Tasks.push(task);//ii.
    
    console.log("the task" + task + "was added to the array");//iii.
    
    return Tasks.length;//iv.

}


//c
function listAllTasks():void{
    //i.

    // for (let i = 0; i < Tasks.length ; i++ ){
    //     console.log("Task " + Tasks[i] + " is in our list");
    // }
    
    // Other ways of doing it

    Tasks.forEach((item)=>{
        console.log("Task" + item + " is in our list.");
    })
    
    

}

//d
function deleteTask(task:string):number{//i. writing an function taking an argument

    //ii. Where is the position of ths task I want to delete
    let index = Tasks.indexOf(task);
    if (index>-1){// if it exists finds the position in the array
        Tasks.splice(index,1);
        //iii.
        console.log("the String '" + task + "' was removed from the array");

    }else{// if it didnt find it in the array sends a message
        console.log("Task " + task +" is not in our list");
    }

    //iv.
    return Tasks.length;

}



//testing
addTask("Eat lunch");
addTask("Eat Soup");
addTask("Eat dinner");

listAllTasks();
deleteTask("Eat Soup");
listAllTasks();



