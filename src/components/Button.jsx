import React from "react";
import { IoMdAdd } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function Button({type, inputValue, mRight, addItem, deleteItem, id}){

    function handleClick(){
        if(type === "Add"){
            addItem(inputValue);
        } else if(type === "Delete"){
            deleteItem(id);
        }
    }

    function renderIcons(type){
        if( type === "Add"){
            return <IoMdAdd /> ;
        } 
        else if(type === "Delete"){
            return <IoIosRemoveCircleOutline /> ;
        } 
    }

    return <button className={`${ type === "Add" ? "bg-blue-700" : "bg-red-600"} text-white px-2 py-1 rounded-md ${ type === "Add" ? "hover:bg-blue-800" : "hover:bg-red-800"}  text-lg ${mRight}`}  onClick={handleClick}>{renderIcons(type)}</button>;
}

export default Button;