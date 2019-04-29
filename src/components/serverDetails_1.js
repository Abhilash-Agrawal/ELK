
import Background from './background';
import React, { Component } from 'react';
import '../App.css';
import '../assets/css/Main.css';
import '../assets/css/Home.css';
import ChartSlider from './chartSlider';
import Header from './header';
import AppSearch from './appSearch';
import { HookMapInterceptor } from 'tapable';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
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
class ServerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchPage: true,
            showFormPage: false
        };
    }

    

    render() {
        return (
            <div className="">
                <div className="log-list">
                    {products.map((product) => {
                        return <div>
                            <div className="list-item row">
                                <div className="col-3"> {product.id} </div>
                                <div className="col-3"> {product.name} </div>
                                <div className="col-3"> {product.price} </div>                            
                                <div className="col-3"> <button className="log-details search-button" onClick={() => {this.showQuery('demo1')}}>Log Details</button> </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }

    showQuery = (id) => {
        
            var x = document.getElementById(id);
            if (x.className.indexOf("w3-show") == -1) {
              x.className += " w3-show";
            } else { 
              x.className = x.className.replace(" w3-show", "");
            }
          
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

export default ServerDetails;
