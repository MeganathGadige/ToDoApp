import React,{ useState } from 'react';
import List from './List';
import './Style.css';


const TodoApp=()=> {
    const [item, setItem] = useState(" ");
    const [newitem, setNewItem] = useState([]);
    const itemEvent=(event)=>{
        setItem(event.target.value);
    };
    const listItems = ()=>{
        setNewItem((prevVal)=>{
            return [...prevVal, item]
        });
        setItem("");
    };
    return (


        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 className='Head'>To-Do APP</h1>
                <br/>
                <input id="Input_Id" type="text" placeholder='Add items' value ={item} onChange={itemEvent} />
                <button className ='newBtn' onClick={listItems}>
                    Add
                </button>
                <br/>
                <ol>
                    
                    {newitem.map((val, index)=>{
                        return <List key={index} text ={val}/>;
                    })}
                </ol>
            </div>
        </div>
    )
}

export default TodoApp
