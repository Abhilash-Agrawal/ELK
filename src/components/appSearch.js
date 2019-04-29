import React, { Component } from "react";
import {Input, Icon} from "antd";
import 'antd/dist/antd.less';

class AppSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: undefined
        };
    }
    
    render() {
        return (
            <div id="search-box">
                <div className="search-label-div">
                    <label className="search-label">Application / Salsa ID:</label>
                </div>
                <div className="search-input-div">
                <Input
                    value={this.state.searchText}
                    placeholder={"Application / Salsa ID"}
                    onChange={this.handleInput}
                    onPressEnter={this.onSearch}
                    allowClear={true}
                    style={{ width: 600 }}
                    suffix={!this.state.searchText && <Icon type="search" style={{ color: 'rgba(0,0,0,.45)' }} />}
                /></div>
                <div className="search-button-div">
                <button className="search-button btn" onClick={this.loadAppDetails}>Search</button>
                </div>
            </div>
        );
    }

    loadAppDetails = () => {
        this.props.showForm();
    }
}

export default AppSearch;
