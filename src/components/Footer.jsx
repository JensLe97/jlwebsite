import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom'
// import { Link as LinkS } from "react-scroll";
import { Button } from './Button'
import './Footer.css'

class FooterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        event.preventDefault();
        this.setState({email: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;

        fetch('https://jlwebsite.herokuapp.com/api/footer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state.email),
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
    // const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i)
    return (
        <form onSubmit={this.handleSubmit} method="POST">
            <input type="email" name="email" placeholder="Email Adresse" className="footer-input" value={this.state.value} onChange={this.handleChange} required/>
            <Button className="footer-btn" buttonStyle="btn--outline" type="submit" value="Submit" onlyButton={true}>Abonnieren</Button>
        </form>
      );
    }
  }

const FooterFormWithRouter = withRouter(FooterForm);

function Footer() {
    let location = useLocation();
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-s-heading">
                    Immer up to date bleiben:
                </p>
                <p className="footer-s-text">
                    Jederzeit widerrufbar.
                </p>
                <div className="input-areas">
                    <FooterFormWithRouter />
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Diese Website</h2>
                        {location.pathname === "/" ? 
                            <p className="footer-home"
                            onClick={scrollTop}
                            >Home</p> : 
                            <Link to="/">Home</Link>}
                        {location.pathname === "/about" ? 
                            <p className="footer-about"
                            onClick={scrollTop}
                            >Über mich</p> : 
                            <Link to="/about">Über mich</Link>}
                    </div>
                    <div className="footer-link-items">
                        <h2>Informationen</h2>
                        {location.pathname === "/contact" ? 
                            <p className="footer-contact"
                            onClick={scrollTop}
                            >Kontakt</p> : 
                            <Link to="/contact">Kontakt</Link>}
                        {location.pathname === "/disclosure" ? 
                            <p className="footer-disclosure"
                            onClick={scrollTop}
                            >Impressum</p> : 
                            <Link to="/disclosure">Impressum</Link>}
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        {location.pathname === "/" ? 
                            <p className="social-logo"
                            onClick={scrollTop}
                            >JL <i className="fas fa-magic"></i></p> : 
                            <Link to="/" className="social-logo">HOME <i className="fas fa-magic"></i></Link>}
                    </div>
                    <p className="website-rights">Jens Lemke &copy; {new Date().getFullYear()}</p>
                    <div className="social-icons">
                        <a 
                            className="social-icon-link facebook" 
                            href="https://www.facebook.com/jens.lemke.52/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a 
                            className="social-icon-link instagram" 
                            href="https://www.instagram.com/j3n597/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a 
                            className="social-icon-link github" 
                            href="https://github.com/JensLe97" 
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitGub">
                            <i className="fab fa-github-square"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
