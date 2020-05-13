import React, { Component } from "react";
import "./SearchBar.css";
import { loadLatestQuote, getCompanyProfile, logo } from "./RestApiCalls";
import constructLatestQuote from "./ConstructLatestQuote";
import LoadLatestQuote from "./LoadLatestQuote";
import LoadCompanyProfile from "./LoadCompanyProfile";


class SearchBar extends Component {

    constructor(property) {
        super(property);
        this.state = { value: [], latestQuote: null, companyName: "", logo_img: null, quote: null, companyprofile:null};
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
        if (this.state.companyName !== undefined) {
            this.GetSymbol(this.state.companyName);
            Promise.all([
                loadLatestQuote(this.symbol.value),
                getCompanyProfile(this.symbol.value),
                logo(this.symbol.value)
            ]).then((values) => {
                let quote_data = values[0];
                this.setState({ latestQuote: constructLatestQuote(quote_data) });
                this.setState({ logo_img: values[2] });              
                let quote_temp = { ...this.state.latestQuote, logo_img: this.state.logo_img };
                this.setState({ quote: quote_temp });
                this.setState({companyprofile:values[1]['profile']});
            });
        }
    }

    newCompanyName(event) {
        this.setState({ companyName: event.target.value });
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
                                    //value="facebook"
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
                <div className="block_latestquote">
                {this.state.quote == null ? <div className="null_condition"></div> : <LoadLatestQuote{...this.state.quote} />}
                </div>
                <div className="block_latestquote">
                {this.state.companyprofile == null ? <div className="null_condition"></div> : <LoadCompanyProfile{...this.state.companyprofile} />}
                </div>
            </div>
        );
    }
}

export default SearchBar;
