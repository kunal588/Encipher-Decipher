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
  algo(text){
      var new_text='';
      text=text.toLowerCase();
      for( let i in text){
        if(text[i]===' ') { 
          new_text+=' '
          continue;
        }
        console.log(text[i]);
        new_text+=table.get(text[i]);
      }
      return new_text;
  }
  handleSubmit(event){    
     const name =(event.target.name ==='plain_text')?'cipher_text':'plain_text';
     const value=(event.target.name ==='plain_text')? this.algo(this.state.plain_text):this.algo(this.state.cipher_text);
    this.setState({...this.state,[name]:value});
    event.preventDefault();
  }
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
