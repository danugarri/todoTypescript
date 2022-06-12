export 	const checkInput = (enteredText:string,addTodoHandler: Function): void => {
        if(	enteredText.length > 0 ) {
            addTodoHandler(enteredText);
        }
        else{

            console.error("Introduce una tarea");
        };
    };