
import styles from "./ToDoAdd.module.css";




const ToDoAdd = ({addTask}: Props) => {

	const add = (e) =>{
		addTask = e.target.value
	}
	
	return (
		<div className={styles.header}>
			<h1>ToDo List</h1>
			<div className={styles.center}>
				<input
					type="text"
					className={styles.todoInput}
					placeholder="Wpisz treść zadania..."
				/>
				<button className={styles.addBtn} onClick={add}>
					Dodaj
				</button>
			</div>
		</div>
	);
};

export default ToDoAdd;
