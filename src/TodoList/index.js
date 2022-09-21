import React from "react";
import "./TodoList.css";

function TodoList (props) {
    return(
        <section className="ListSection">
            <ul className="ListUl">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };