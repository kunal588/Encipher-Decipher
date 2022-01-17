/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import React from 'react';
import table from './table'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={plain_text:'',cipher_text:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  //algortihm to encrypt/decrypt the entered text
  algorithm(text){
      //initializing the empty string for storing the trasformation result
      var result='';
      //converting the input text to lowercase
      text=text.toLowerCase();
      // iterating the chracters in the input text 
      for( let i in text){
        //if its free space keeping  is as it is and appending it to result
        if(text[i]===' ') { 
          result+=' '
          continue;
        }
        //if char and then appending the character corresponding to this char from lookup table
        result+=table.get(text[i]);
      }
      return result;
  }
  //event handler function is fired when button(encrypt/decrypt) is pressed.
  handleSubmit(event){    
    //finding the source of the event( plain_text or cipher_text)
     const name =(event.target.name ==='plain_text')?'cipher_text':'plain_text';
     //acc. to event the algorithm is used to encrypt/decrypt
     const value=(event.target.name ==='plain_text')? this.algorithm(this.state.plain_text):this.algorithm(this.state.cipher_text);
    //current state is updated 
     this.setState({...this.state,[name]:value});
    event.preventDefault();
  }

  //evnet handler to keep updating the state whenever input is changed
  handleChange(event){
    const {name , value} = event.target;
    console.log(event.target);
    this.setState({...this.state,[name]:value});
  }

  render(){
    return (
    <div >
        <h1 className='heading'>Encrypt/Decrypt it!!</h1>

        <div className="App">

              <form name="plain_text" onSubmit={this.handleSubmit}>

                <textarea class="longInput" placeholder='Enter the plain text here' name="plain_text" type="text" value={this.state.plain_text} onChange={this.handleChange} cols="30" rows="10"></textarea> 
                <input className='button' type="submit" value="Encrypt"/>

              </form>

              <form name="cipher_text" onSubmit={this.handleSubmit}>

                <textarea class="longInput" placeholder='Enter the cipher text here' name="cipher_text" type="text" value={this.state.cipher_text} onChange={this.handleChange} cols="30" rows="10"></textarea>
                <input className='button' type="submit" value="Decrypt"/>

              </form>

        </div>
    </div>
  );
  }
}

export default App;
