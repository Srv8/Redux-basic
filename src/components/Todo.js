import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNew, clearList, delList } from '../actions/index';

export const Todo = () => {
    const [inputData, setinputData] = useState('');
    const list = useSelector(state => state.todoReducers.list);
    const dispatch = useDispatch();

    return (
        
        <div>
            <div className="main-div">
            <div className="child-div">
            <figure>
            <figcaption>Let's Create things To-Do</figcaption>
            </figure>

            <div className="addItems">
            <input className="input" type="search" placeholder="TO-DO" value={inputData} onChange={(event) => setinputData(event.target.value)} />
            <button className="add-btn" onClick={() => inputData !== "" ? dispatch(addNew(inputData),setinputData('')) : window.alert("Enter data")}><i class="fas fa-plus fa-2x"></i></button>
            </div>

            <div className="showItems">
                {
                    list.map((elem) => {
                        return(
                        <div className="items" key={elem.id}>
                            <ul>
                            <li>
                            <h3>{elem.data}</h3>
                            <div className="todo-btn">
                            <i class="far fa-trash-alt" title="Delete" onClick={() => dispatch(delList(elem.id))} ></i>
                            </div>
                            </li>
                            </ul>
                        </div>
                        )
                     
                    })
                }
            </div>

            <div className="remove">
                <button class="remove-btn" onClick={() => dispatch(clearList())}><span>Clear List</span></button>
            </div>

            </div>
            </div> 
        </div>
    )
};

