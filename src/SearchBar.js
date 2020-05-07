import React, { Component } from "react";
import "./SearchBar.css";

import { loadLatestQuote, getCompanyProfile } from "./RestApiCalls";

class SearchBar extends Component {
    constructor(property) {
        super(property);
        this.state = { value: [] };
        this.companyName = { value: '' };
        this.symbol = { value: '' };
        this.GetStock = this.GetStock.bind(this);
        this.newCompanyName = this.newCompanyName.bind(this);
    }

    GetSymbol(companyName) {
        for (var i = 0; i < this.state.value.length; i++) {
            if (this.state.value[i].name.toLowerCase().includes(companyName.toLowerCase())) {
                this.symbol.value = this.state.value[i].symbol;
                return;
            }
        }
    }


    GetStock(event) {
        event.preventDefault();
        if (this.companyName.value !== undefined) {
            this.GetSymbol(this.companyName.value);
            Promise.all([
                loadLatestQuote(this.symbol.value),
                getCompanyProfile(this.symbol.value)
            ])
                .then(values => {
                    let dataTime = "Meta Data";
                    console.log(values[0]['Meta Data']);
                    console.log(values[1].profile);
                })
        }
    };



    newCompanyName(event) {
        this.companyName = { value: event.target.value };
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.iextrading.com/1.0/ref-data/symbols");
            const json = await response.json();
            this.setState({ value: json });
        } catch (error) {
            console.log(error);
        }
    }



    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the organization name"
                                aria-label="Company Name"
                                onChange={this.newCompanyName}
                            />
                            <span className="input-group-btn">
                                <button className="btn block" type="button" onClick={this.GetStock}>
                                    Load Quote
              </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default SearchBar;
