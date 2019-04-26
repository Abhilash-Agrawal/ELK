
import Background from './background';
import React, { Component } from 'react';
import '../App.css';
import '../assets/css/Main.css';
import '../assets/css/Home.css';
import ChartSlider from './chartSlider';
import Header from './header';
import AppSearch from './appSearch';
import { HookMapInterceptor } from 'tapable';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: true,
            showFormPage: false
        };
    }

    render() {
        return (
            <div className="pace-done">
                <div className="page-content-wrapper">
                    <Header>
                        <span className="header-title">MaaS</span> 
                    </Header>
                </div>
                {/* <section id="search" className="screen-height">
                    <AppSearch></AppSearch>
                </section>
                <section id="form-section">
                    <Background></Background>
                </section> */}
                {this.state.showSearchPage && <AppSearch showForm={this.showForm}/>}
                {this.state.showFormPage && <Background showSearch={this.showSearch} />}
            </div>
        )
    }

    showForm = () => {
        this.setState({
            showFormPage: true,
            showSearchPage: false
        })
    }

    showSearch = () => {
        this.setState({
            showFormPage: false,
            showSearchPage: true
        })
    }

}

export default Home;
