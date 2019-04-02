//return
/*function multiplyTwoNumbers(numberOne,numberTwo) {
    var totalOfNumbers=numberOne*numberTwo;
    return totalOfNumbers;
}
console.log(multiplyTwoNumbers(4,5));*/
/*function multiplyTheProductOf3And10(value1,value2) {
    var productOfTheValues=value1*value2
    return productOfTheValues;
}

var theProductOf3And10=multiplyTheProductOf3And10(3,10)
console.log(theProductOf3And10);*/

/*function multiplyNumbers(firstValue,secondValue) {
    var productOfTheValues=firstValue*secondValue;
    return productOfTheValues;
}
var finalAnswerOfValues=multiplyNumbers(7,7);
console.log(finalAnswerOfValues)*/
/*function multiplyNumbers(number1,number2) {
    var productOfNumbers=number1*number2;
    return productOfNumbers
}

var theProductOfNumbers=multiplyNumbers(25,24);
console.log(theProductOfNumbers);*/

var todoList={
    todos:[],
    addTodos:function(todoText) {
        this.todos.push({
            todoText:todoText,
            completed:false
        })
    },
    changeTodos:function(position, newValueTodoText) {
        this.todos[position].todoText=newValueTodoText;
    },
    deleteTodos:function(position) {
        this.todos.splice(position,1).todoText;
    },
    toggleCompleted:function(position) {
        var newToggle=this.todos[position];
        newToggle.completed=!newToggle.completed;
    },
    toggleAll:function() {
        //if everything is true,make everything false
        //if completedTodos=totalTodos then we make it all false
        var completedTodos=0;
        var totalTodos=this.todos.length;

        //since completedTodos is zero,add +1 for every completed todo
        for(var i=0;i<totalTodos;i++) {
            if(this.todos[i].completed===true) {
                completedTodos++
            }
        }

        if(completedTodos===totalTodos) {
            for(var i=0;i<totalTodos;i++) {
                this.todos[i].completed=false
            }
        }else{
            for(var i=0;i<totalTodos;i++) {
                this.todos[i].completed=true;
            }
        }
    }
}

var handler={
    addTodos:function() {
        var addTodosTextInput=document.getElementById('addTodosTextInput')
        todoList.addTodos(addTodosTextInput.value);
        addTodosTextInput.value='';
        views.displayTodos();
    },
    changeTodos:function() {
        var changeTodosPositionInput=document.getElementById('changeTodosPositionInput');
        var changeTodoTextInput=document.getElementById('changeTodoTextInput');
        todoList.changeTodos(changeTodosPositionInput.valueAsNumber,changeTodoTextInput.value);
        changeTodosPositionInput.value='';
        changeTodoTextInput.value='';
        views.displayTodos();
    },
    deleteTodos:function(position) {
       // var deleteTodosTextPosition=document.getElementById('deleteTodosTextPosition');
        todoList.deleteTodos(position);
       // deleteTodosTextPosition.value='';
        views.displayTodos();
    },
    toggleAll:function() {
        todoList.toggleAll();
        views.displayTodos();
    },
    toggleCompleted:function()  {
        var toggleCompletedPositionInput=document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value='';
        views.displayTodos();
    }
}

var views={
    displayTodos:function() {
        var todosUl=document.querySelector('ul');
        todosUl.innerHTML=''
        for(var i=0;i<todoList.todos.length;i++) {
            var todosLi=document.createElement('li')
            todosUl.appendChild(todosLi);

            var todo=todoList.todos[i]
            var todoTextWithCompletion;
            if(todo.completed===true) {
                todoTextWithCompletion='(x)' +todo.todoText;
            }else{
                todoTextWithCompletion='( )' +todo.todoText
            }
            todosLi.id=i;
            todosLi.textContent=todoTextWithCompletion;
            todosLi.appendChild(this.createDeleteButton())
        }
    },
    createDeleteButton:function() {
        var deleteButton=document.createElement('button');
        deleteButton.textContent='Delete'
        deleteButton.className='deleteButton'
        return deleteButton;
    },
    setUpEventListener:function() {
        var todosUl=document.querySelector('ul');
        todosUl.addEventListener('click',function(event) {
            var elementClicked=event.target;
            if(elementClicked.className='deleteButton') {
                handler.deleteTodos(parseInt(elementClicked.parentNode.id));
            }
        }) 
    }
}
views.setUpEventListener();