import { useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
	const [toDoList, setToDoList] = useState([]);



	return (
		<>
			<ToDoList toDoList={toDoList} onDelete={(id) => setToDoList(toDoList.filter(e => e.id !== id))} />
		</>
	);
}

export default App;
