import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <section className="header">
                <h1>Weathering with you <span role="img" aria-label={"umbrella"}>☂️</span></h1>
                <span className="annotation">( Weather App)</span>
            </section>
        );
    }
}

export default Header;