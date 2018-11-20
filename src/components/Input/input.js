import React from 'react';
import Classes from './input.module.css'
const input=(props)=>{
	var inputElement=null;
	const inputClasses=[Classes.InputElement];
	if(props.invalid && props.touched){
		inputClasses.push(Classes.Invalid);
	}
	switch (props.elementType){
		case('input'):
			inputElement= <input 
			className={inputClasses.join(" ")}
			 {...props.elementConfig}
			 value={props.value}
			 onChange={props.changed} />;
			break;

		case ('textarea'):
			inputElement= <textarea 
			className={inputClasses.join(" ")} 
			{...props.elementConfig}
			value={props.value}
			onChange={props.changed} />;
			break;
		default:
			inputElement = <input 
			className={inputClasses.join(" ")}
			value={props.value}
			 {...props.elementConfig}
			 onChange={props.changed}  />
	}
	return (
	<div className={Classes.Input}>
	<lable className={Classes.Lable}>{props.lable}</lable>
	{inputElement}
	</div>
	)

}
export default input;