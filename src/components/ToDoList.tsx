import styles from "./ToDoList.module.css";
import { useState } from "react";

interface ToDo {
	id: number;
	description: string;
}

interface Props {
	toDoList: ToDo[];
	onDelete: (id: number) => void;
}

const ToDoList = ({ toDoList, onDelete }: Props) => {
	const [inputTask, setInputTask] = useState("");

	const addNewTask = () => {
		const newTask = {
			id: toDoList.length,
			description: inputTask,
		};
		toDoList.push(newTask);
		setInputTask("");
	};

	if (toDoList.length === 0)
		return (
			<>
				<div className={styles.header}>
					<h1>ToDo List</h1>
					<div className={styles.center}>
						<input
							type="text"
							className={styles.todoInput}
							placeholder="Wpisz treść zadania..."
							value={inputTask}
							onChange={(e) => setInputTask(e.target.value)}
						/>
						<button className={styles.addBtn} onClick={addNewTask}>
							Dodaj
						</button>
					</div>
				</div>
				<div className={styles.toDoBox}>
					<p className={styles.noToDo}>lista zadań jest pusta</p>
				</div>
			</>
		);

	return (
		<>
			<div className={styles.header}>
				<h1>ToDo List</h1>
				<div className={styles.center}>
					<input
						type="text"
						className={styles.todoInput}
						placeholder="Wpisz treść zadania..."
						value={inputTask}
						onChange={(e) => setInputTask(e.target.value)}
					/>
					<button className={styles.addBtn} onClick={addNewTask}>
						Dodaj
					</button>
				</div>
			</div>
			<div className={styles.toDoBox}>
				<h2>Lista zadań:</h2>
				<ul className={styles.toDoList}>
					{toDoList.map((todo) => (
						<li key={todo.id}>
							{todo.description}
							<button className={styles.btn} onClick={() => onDelete(todo.id)}>
								Usuń
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ToDoList;
