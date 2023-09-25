import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input type="text"
						placeholder="Que tienes que hacer?"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue))
								setInputValue("")
							}
						}} />
				</li>
				{todos.map((item, index) => (
					<li> {item} <FontAwesomeIcon icon={faCircleXmark}
					className="red-mark" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))} /> </li>
				))}

              <li className="num-tareas">{todos.length} tareas pendientes</li>

			</ul>
			
		</div>
	);
};

export default Home;
