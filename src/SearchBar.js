import React, { Component } from "react";
import "./SearchBar.css";
import { loadLatestQuote, getCompanyProfile } from "./RestApiCalls";
import constructLatestQuote from "./ConstructLatestQuote";
import LoadLatestQuote from "./LoadLatestQuote";

class SearchBar extends Component {

    constructor(property) {
        super(property);
        this.state = { value: [], latestQuote: null };
        this.companyName = { value: "" };
        this.symbol = { value: "" };
        this.GetStock_MainFunction = this.GetStock_MainFunction.bind(this);
        this.newCompanyName = this.newCompanyName.bind(this);

    }


    GetSymbol(companyName) {
        for (var i = 0; i < this.state.value.length; i++) {
            if (
                this.state.value[i].name
                    .toLowerCase()
                    .includes(companyName.toLowerCase())
            ) {
                this.symbol.value = this.state.value[i].symbol;
                return;
            }
        }
    }


    GetStock_MainFunction(event) {
        event.preventDefault();
        if (this.companyName.value !== undefined) {
            this.GetSymbol(this.companyName.value);
            Promise.all([
                loadLatestQuote(this.symbol.value),
                getCompanyProfile(this.symbol.value),
            ]).then((values) => {
                let quote_data = values[0];
                this.setState({ latestQuote: constructLatestQuote(quote_data) });
            });
        }
    }

    newCompanyName(event) {
        this.companyName = { value: event.target.value };
    }

    async componentDidMount() {
        try {
            const response = await fetch(
                "https://api.iextrading.com/1.0/ref-data/symbols"
            );
            const json = await response.json();
            this.setState({ value: json });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter the organization name"
                                    aria-label="Company Name"
                                    value="facebook"
                                    onChange={this.newCompanyName}
                                />
                                <span className="input-group-btn">
                                    <button
                                        className="btn block"
                                        type="button"
                                        onClick={this.GetStock_MainFunction}
                                    >Load Quote
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.latestQuote == null ? <div className="null_condition"></div> : <LoadLatestQuote{...this.state.latestQuote} />}
            </div>
        );
    }
}

export default SearchBar;
