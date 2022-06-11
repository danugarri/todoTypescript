//  type keyword
export type TodoExample = {
	items: string[];
};

// interface keyword

export interface ITodoExample {
	items: string[];
}

// class

export class Todo {
	id: string;
	text: string;

	constructor(todoText: string) {
		this.text = todoText;
		this.id = new Date().toISOString();
	}
}

// props
export type TodoProps = {
	items: Todo[];
};
