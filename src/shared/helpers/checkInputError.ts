export 	const checkInput = (enteredText:string,addTodoHandler: Function): void => {
        if(	enteredText.length > 0 ) {
            addTodoHandler(enteredText);
        }

       console.error("Introduce una tarea");
    };