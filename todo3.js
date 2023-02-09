var Tasks = /** @class */ (function () {
    function Tasks() {
        //Tasks: string[];
        this.tasks = [];
    }
    //(b)
    Tasks.prototype.addTask = function (task) {
        this.tasks.push(task); //i
        console.log('Task item' + task + "has been added to your list."); //ii.
        return this.tasks.length; //iii.
    };
    Tasks.prototype.listAllTasks = function () {
        this.tasks.forEach(function (item) {
            console.log("Task" + item + " is in our list.");
        });
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("the String '" + task + "' was removed from the array");
        }
        else {
            console.log("Task " + task + " is not in our list");
        }
        //iv.
        return this.tasks.length;
    };
    return Tasks;
}());
var myTasks1 = new Tasks();
myTasks1.addTask("School");
myTasks1.addTask("Another School");
myTasks1.listAllTasks();
myTasks1.deleteTask("School");
myTasks1.listAllTasks();
