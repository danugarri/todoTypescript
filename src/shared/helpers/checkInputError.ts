import swal from "sweetalert";
import { CheckInputParams } from "../../models/checkInput.model";


export 	const checkInput = (params:CheckInputParams): void => {
    const {enteredText,addTodoHandler,todos }= params;

    if(	enteredText.length > 0 ) {
        const exists= todos.find(item => item.text === enteredText);
        exists ? swal('Ya has introducido esa tarea','', 'error') :
        addTodoHandler(enteredText);
    }
    else{
        console.error("Introduce una tarea");
    };
    };