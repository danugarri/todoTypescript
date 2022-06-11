export 	const checkInput = (enteredText:string,addTodoHandler: Function) => {
        if(	enteredText.length > 0 ) {
            addTodoHandler(enteredText);
        }

       console.error("Introduce una tarea");
    };