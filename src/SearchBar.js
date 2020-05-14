import React, { Component } from "react";
import "./SearchBar.css";
import { loadLatestQuote, getCompanyProfile, logo } from "./RestApiCalls";
import constructLatestQuote from "./ConstructLatestQuote";
import LoadLatestQuote from "./LoadLatestQuote";
import LoadCompanyProfile from "./LoadCompanyProfile";


class SearchBar extends Component {

    constructor(property) {
        super(property);
        this.state = { suggestions: [], text: '', companyNamesFromJSON: [], value: [], latestQuote: null, companyName: "", logo_img: null, quote: null, companyprofile: null };
        this.symbol = { value: "" };
        this.GetStock_MainFunction = this.GetStock_MainFunction.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.renderSuggestion = this.renderSuggestion.bind(this);
        this.suggestionsSelected = this.suggestionsSelected.bind(this);

    }

    onTextChanged = (e) => {
        const value = e.target.value;
        if (value.length === 0) {
            this.setState({ text: '' });
            this.setState({ suggestions: [] });
            this.setState({ companyName: '' }, this.GetStock_MainFunction);
        }
        let suggest = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggest = this.state.companyNamesFromJSON.sort().filter(v => regex.test(v));
        }
        this.setState({ suggestions: suggest, text: value });

    }

    suggestionsSelected(value) {
        this.setState({ text: value });
        this.setState({ suggestions: [] });
        this.setState({ companyName: value }, this.GetStock_MainFunction);
    }

    renderSuggestion() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        var i = 0;
        return (<ul>
            {suggestions.map((item) => <li key={i++} onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
        </ul>)
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


    GetStock_MainFunction() {
        if (this.state.companyName === undefined || this.state.companyName.length === 0) {
            this.setState({ latestQuote: null });
            this.setState({ logo_img: null });
            this.setState({ quote: null });
            this.setState({ companyprofile: null });
        } else {
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
                this.setState({ companyprofile: values[1]['profile'] });
            });
        }
    }



    async componentDidMount() {
        try {
            const response = await fetch(
                "https://api.iextrading.com/1.0/ref-data/symbols"
            );
            const json = await response.json();
            this.setState({ value: json });
            var data = []
            for (var i = 0; i < this.state.value.length; i++) {
                if (this.state.value[i].name.length !== 0) {
                    data.push(this.state.value[i].name);
                }
            }
            this.setState({ companyNamesFromJSON: data });

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <div className="AutoComplete">
                    <input value={text} onChange={this.onTextChanged} type="text" />
                    {this.renderSuggestion()}
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
