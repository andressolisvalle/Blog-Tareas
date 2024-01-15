import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({sincronize}){
    const {show,toggleShow} = useStorageListener(sincronize);
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>parece que cambiaste los Todos en otra pestaña o ventana</p>
                    <p>¿QUIERES SINCRONIZAR LOS TODOS?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >YES</button>
                </div>
                
            </div>
        )
    }else{
        return null;
    }
}


export {ChangeAlert};