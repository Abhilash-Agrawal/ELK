import React, { Component } from "react";
import 'antd/dist/antd.less';
import './serverDetails.css';


class ServerDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverclusers: []
        };
    }

    async componentDidMount() {
        let serverclusers = await this.getServerClusters();
        this.setState({ serverclusers: serverclusers });
    }

    render() {

        let serverclusers = this.state.serverclusers.map( (server) => {
            return (<div class="card">
                        <label class="checkbox-label">
                            <input type="checkbox" />
                            <span class="checkbox-custom ">
                                <p><b>Host:</b> {server.host}</p>
                                <p><b>IP:</b> {server.ip}</p>
                                <p className="small-meta dim"><b>OS:</b>{server.os}</p>
                            </span>
                        </label>
                    </div>)
        })
        return (
            <React.Fragment>
                <div class="card-wrapper">
                    {serverclusers}
                </div>
            </React.Fragment>
        );
    }

    async getServerClusters() {
        try {
            let response = await fetch('/stubs/serverClusterData.json', {
                method: "get",
            });

            return response.json();

        } catch (error) {
            throw error;
        }
    }
}

export default ServerDetails;
