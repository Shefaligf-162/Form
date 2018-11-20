import React, { Component } from 'react';
import Input from './components/Input/input';
import Button from './components/Button/button';


class App extends Component {
	state={
		student_details:{
		student:{
			touched:false,
			elementType:'input',
			elementconfig:{
				type:'text',
				placeholder: 'Your Name',
				
			},
			value:'',
			validation:{
				required:true,
				minLength:4
			},
			valid:false,
			lable:'Name'
		},

		enrollmentno:{
			touched:false,
			elementType:'input',
			elementconfig:{
				type:'text',
				placeholder: 'Your Enrollement Number',
			},
			value:'',
			validation:{
				required:true
			},
			valid:false,
			lable:'Enrollement Number'
		},
		year:{
			touched:false,
			elementType:'input',
			elementconfig:{
				type:'text',
				placeholder: 'Year',
			},
			value:'',
			validation:{
				required:true
			},
			valid:false,
			lable:'Year'
		},
		username:{
			touched:false,
			elementType:'input',
			elementconfig:{
				type:'text',
				placeholder: 'Your Username'
			},
			lable:'Username',
			validation:{
				required:true
			},
			valid:false,
			value:''
		},
		password:{
			touched:false,
			elementType:'input',
			elementconfig:{
				type:'text',
				placeholder: 'Your Password'
			},
			value:'',
			validation:{
				required:true
			},
			valid:false,
			lable:'Password'
		},
		//loading:false
		

	}
};
  render() {
  	var checkValidity=(value,rules)=>{
  		var isValid=false;
  		if(rules.required){
  			isValid= value.trim()!==" ";

  		}
  		if(rules.minLength){
  			isValid=value.length>=rules.minLength && isValid;
  		}
  		return isValid;
  	}

  	const inputChangedHandler=(event,inputIdentifier)=>{
  			const updatedstudent_details={
  				...this.state.student_details
  			};
  			const updatedformelement={
  				...updatedstudent_details[inputIdentifier]
  			};
  			updatedformelement.value=event.target.value;
  			updatedformelement.valid=checkValidity(updatedformelement.value,updatedformelement.validation);
  			updatedformelement.touched=true;
  			updatedstudent_details[inputIdentifier]=updatedformelement;
  			console.log(updatedformelement);
  			this.setState({student_details:updatedstudent_details});
  	}		

  	const sign_upHandler=(event)=>{

  		event.preventDefault();
  		this.setState({loading:true});
  		const sign_upData={};
  		for(let formElementIdentifier in this.state.student_details){
  		sign_upData[formElementIdentifier]=this.state.student_details[formElementIdentifier].value;
  	}
  		console.log(sign_upData);
  	}


  	const formElementsArray=[];
  	for (let key in this.state.student_details){
  		formElementsArray.push({
  			id:key,
  			config: this.state.student_details[key]
  		});

  	}
  	
    return (
      <div className="App">

      <form onClick={sign_upHandler}>
      {formElementsArray.map(formElement=>(
      	<Input 
      	touched={formElement.config.touched}
      	id={formElement.id}
      	invalid={!formElement.config.valid}
      	elementType={formElement.config.elementType}
      	 elementConfig={formElement.config.elementconfig}
      	 changed={(event)=>inputChangedHandler(event,formElement.id)}
      	 lable={formElement.config.lable}
      	 value={formElement.config.value}
      	 />
      	))}
      <Button onchange={sign_upHandler}>Sign Up</Button>
      
       </form>
      </div>
    );
  }
}

export default App;