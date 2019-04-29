import React, { Component } from "react";
import "../assets/css/header.scss";

class Header extends Component {
    
    render() {
        return (
            <div id="header">
                <div id="header-content">
                    <header>
                        <nav className="header-title">                            
                               <span>MaaS</span>
                        </nav>                        
                    </header>
                    <div />
                </div>
            </div>
        );
    }
}

export default Header;
