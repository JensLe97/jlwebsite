import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from './Button';
import './ContactForm.css'

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      event.preventDefault();
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const target = event.target;
      const name = target.name;

      fetch('https://jlwebsite.onrender.com//api/contact', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({'name' : this.state.name, 
                              'email' : this.state.email,
                              'message' : this.state.message}),
      }).then(response => {
          if (response.ok) {
              this.props.history.push('/submission')
              event.target.reset();
          }
      })      
      .catch(error => {
      console.error(error);
      });

      this.setState({
        [name]: ''
      });
    }    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="contact-form" method="POST">
          <div className="forms">
            <label>Name:</label>
            <input size="1" className="input-field" type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
            
            <label>Email:</label>
            <input size="1" className="input-field" type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
        
            <label>Nachricht:</label>
            <textarea size="1" rows="5" className="textarea-field" name="message" value={this.state.message} onChange={this.handleChange} required/>
          </div>
          <Button className="submit-btn" type="submit" value="Submit" buttonStyle="btn--outline-rev" buttonSize="btn--medium-rev" onlyButton={true}>Senden</Button>
        </form>
      );
    }
  }

  export default withRouter(ContactForm)