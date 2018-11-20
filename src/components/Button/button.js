import React from 'react';
import Classes from './button.module.css'
const button=(props)=>{
	return (
		<button className={Classes.Success}
		 onChange={props.onchange}
		 >{props.children}</button>

)
}
export default button;