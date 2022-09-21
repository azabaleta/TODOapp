import React from "react";
import "./Todo.css";

function TodoItem (props) {
    return (
        <li className="Todo">
            <div className={`CheckIcon ${props.completed && 'CheckIconFinished'}`} onClick={props.onComplete}>
            <svg className="TicSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.1 32.42">
                <defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className={`TicIcon ${props.completed && 'TicIconFinished'}`} d="M15.47,32.42a3.32,3.32,0,0,1-2.27-.9L1.05,20.1a3.31,3.31,0,1,1,4.54-4.83l9.74,9.15L37.37,1A3.32,3.32,0,1,1,42.2,5.59L17.89,31.38A3.34,3.34,0,0,1,15.47,32.42Z"/></g></g>
            </svg>
            </div>
            <div className="TodoContent">
                <h2 className={`TodoName ${props.completed && 'TodoNameFinished'}`}>{props.title}</h2>
                <p className={`TodoDescription ${props.completed && 'TodoDescriptionFinished'}`}>{props.description}</p>    
            </div>
            <span className="ClearCross" onClick={props.onDelete}>X</span>
        </li>
    );
}

export { TodoItem };