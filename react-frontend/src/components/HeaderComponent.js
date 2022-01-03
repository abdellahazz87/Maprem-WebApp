import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header className="header">
                    <nav className=" ">
                    <div><a href="https://maprem.com" className="navbar-brand">Maprem : First geo reminder app in Morocco</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
