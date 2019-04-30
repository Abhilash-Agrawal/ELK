
import Background from './background';
import React, { Component } from 'react';
import '../App.css';
import '../assets/css/Main.css';
import '../assets/css/Home.css';
import ChartSlider from './chartSlider';
import Header from './header';
import AppSearch from './appSearch';
import Select from 'react-select';
import './logDetails.css';
import { HookMapInterceptor } from 'tapable';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import '/node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
const products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];
class LogDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: true,
            showFormPage: false,
            logTypeOptions: [  { value: 'text', label: 'Text' },  { value: 'database', label: 'Database' }],
            databaseOptions: [
                { value: 'DB2', label: 'DB2' },
                { value: 'MySQL', label: 'MySQL' },
                { value: 'PostgreSQL', label: 'PostgreSQL' },
                { value: 'SQL Server', label: 'SQL Server' },
                { value: 'Oracle', label: 'Oracle' }
            ]
        };
        this.steps = [];
    }

    abhi = () => {
        var hashLinks = document.querySelectorAll('.hash-link-form');

        for (var i = 0; i < hashLinks.length; i++) {
            var hashLink = hashLinks[i];
            hashLink.addEventListener('click', function (e) {
                e.preventDefault();
                var correction = 0;
                var elmntId = (e.target.href || e.target.parentNode.href).split('#')[1];
                e.target.parentNode.parentNode.querySelectorAll('li.selected')[0].className = '';
                e.target.parentNode.className = 'selected';
                e.target.parentNode.blur();
                if (elmntId === 'values' || elmntId === 'process' || elmntId === 'projects') {
                    correction = 100;
                    // verticalNav.className = '';
                } else if (elmntId === 'testimonials') {
                    // requestTimeout(function() {
                    //     verticalNav.className = 'color-inverted';
                    // }, 1000);
                } else {
                    // verticalNav.className = '';
                }
                // scrollTo(document.getElementById(elmntId), 1300, correction);
            });
        }

    }

    componentDidMount() {
        // this.abhi();
    }

    render() {
        let steps = this.steps.map((steps) => {
            return (
                <li onClick={() => { this.showField("database") }}><a class="hash-link-form" href="#database" title="Navigate to values section">{steps.value}</a></li>
                // <li onClick={() => { this.showField("host") }}><a className="hash-link-form" href="#host" title="Navigate to projects section">Host</a></li>
                // <li onClick={() => { this.showField("port") }}><a className="hash-link-form" href="#port" title="Navigate to process section">Port</a></li>
                // <li onClick={() => { this.showField("databaseName") }}><a className="hash-link-form" href="#database_name" title="Navigate to testimonials section">Database Name</a></li>
                // <li onClick={() => { this.showField("summary") }}><a className="hash-link-form" href="#summary" title="Navigate to summary section">Summary</a></li>
            )
        })
        return (
            <div className="">
                <div className="log-list">
                    {products.map((product) => {
                        return <div>
                            <div className="list-item row">
                                <div className="col-3"> {product.id} </div>
                                <div className="col-3"> {product.name} </div>
                                <div className="col-3"> {product.price} </div>
                                <div className="col-3"> <button className="log-details search-button" onClick={() => { this.showQuery('demo1') }}>Log Details</button> </div>
                            </div>
                            <div id="demo1" class="w3-hide w3-animate-zoom">


                                <div className="pace-done-form">
                                    <div>
                                        <section id="logType" className="form-section form-height">
                                            <div className="input-field">
                                                <Select
                                                    options={this.state.logTypeOptions}
                                                    placeholder="please select log type..."
                                                    className="dropdown-input"
                                                    value={this.state.logType}
                                                    onChange={this.changeLogType} />
                                                <div className="button-field">
                                                    <button className="search-button" onClick={this.loadAppDetails}>Next</button>
                                                </div>
                                            </div>
                                        </section>
                                        <section id="database" className="w3-hide form-section form-height">
                                            <div className="input-field">
                                                <Select
                                                    options={this.state.databaseOptions}
                                                    placeholder="please select database..."
                                                    className="dropdown-input"
                                                    value={this.state.database}
                                                    onChange={this.updateField} />
                                                <div className="button-field">
                                                </div>
                                                <div className="col-6">
                                                    <button className="search-button" onClick={this.loadAppDetails}>Previous</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="search-button" onClick={this.loadAppDetails}>Next</button>
                                                </div>
                                            </div>
                                        </section>
                                    <section id="host" className="w3-hide form-section form-height">
                                        <div className="input-field">
                                            <input
                                                value={this.state.host || ""}
                                                type="text"
                                                placeholder="please enter host..."
                                                className="settings-input"
                                                name="name"
                                                onChange={this.updateField} />
                                            <div className="button-field">
                                                <div className="col-6">
                                                    <button className="search-button" onClick={this.loadAppDetails}>Previous</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="search-button" onClick={this.loadAppDetails}>Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="port" className="w3-hide form-section form-height">
                                        <div className="input-field">
                                            <input
                                                value={this.state.port || ""}
                                                type="text"
                                                placeholder="please enter port..."
                                                className="settings-input"
                                                name="name"
                                                onChange={this.updateField} />
                                            <div className="button-field">
                                                <div className='col-6'>
                                                    <button className="search-button" onClick={this.loadAppDetails}>Previous</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="search-button" onClick={this.loadAppDetails}>Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="databaseName" className="w3-hide form-section form-height">
                                        <div className="input-field">
                                            <input
                                                value={this.state.databaseName || ""}
                                                type="text"
                                                placeholder="please select database name..."
                                                className="settings-input"
                                                name="name"
                                                onChange={this.updateField} />
                                            <div className="button-field">
                                                <div className='col-6'>
                                                    <button className="search-button" onClick={this.loadAppDetails}>Previous</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="search-button" onClick={this.loadAppDetails}>Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="summary" className="w3-hide form-section form-height">
                                        <div className="button-field">
                                            <div className="col-6">
                                                <button className="search-button" onClick={this.loadAppDetails}>Previous</button>
                                            </div>
                                            <div className="col-6">
                                                <button className="search-button" onClick={this.loadAppDetails}>Submit</button>
                                            </div>
                                        </div>
                                        Summary
                                        </section>
                                </div>
                                <div id="vertical-nav-form" className="">
                                    <ul>
                                        <li className="selected" onClick={() => { this.showField("logType") }}><a className="hash-link-form" href="#log_type" title="Navigate to Top">Log Type</a></li>
                                        {steps}
                                        {/* <li onClick={() => { this.showField("database") }}><a class="hash-link-form" href="#database" title="Navigate to values section">Database</a></li>
                                        <li onClick={() => { this.showField("host") }}><a className="hash-link-form" href="#host" title="Navigate to projects section">Host</a></li>
                                        <li onClick={() => { this.showField("port") }}><a className="hash-link-form" href="#port" title="Navigate to process section">Port</a></li>
                                        <li onClick={() => { this.showField("databaseName") }}><a className="hash-link-form" href="#database_name" title="Navigate to testimonials section">Database Name</a></li>
                                        <li onClick={() => { this.showField("summary") }}><a className="hash-link-form" href="#summary" title="Navigate to summary section">Summary</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                })}
                </div>
            </div>
        )
    }

    showField = (id) => {
        var x = document.getElementById(id);
        var fields = document.getElementsByClassName('form-section');
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].className.indexOf("w3-hide") == -1) {
                fields[i].className += " w3-hide";
            }
            fields[i].className = fields[i].className.replace(" w3-show", "");
        }
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        }
    }

    showQuery = (id) => {

        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }

        this.abhi();

    }

    handleSelectChange = (evt) => {
        this.setState({ logType: evt.value });
    }

    showForm = () => {
        this.setState({
            showFormPage: true,
            showSearchPage: false
        })
    }

    updateField = evt => {
        try {
            this.setState({ [evt.target.name]: evt.target.value });
        } catch (err) {
        }
    }

    changeLogType = evt => {
        this.setState({ logType: evt.value });

        if (evt.value === 'database') {
            this.steps = [
                { value: 'Database', key: 'database' },
                { value: 'Host', key: 'host' },
                { value: 'Port', key: 'port' },
                { value: 'Database Name/ SID', key: 'databaseName' },
                { value: 'Summary', key: 'summary' }
            ];
        } else {
            this.steps = [
                { value: 'Log Location', key: 'location' },
                { value: 'Summary', key: 'summary' }
            ]
        }
    }

    showSearch = () => {
        this.setState({
            showFormPage: false,
            showSearchPage: true
        })
    }

}

export default LogDetails;
