import React, { Component } from "react";
import "./SearchBar.css";
import { loadLatestQuote, getCompanyProfile, logo, symbols_company, sector_perf } from "./RestApiCalls";
import constructLatestQuote from "./ConstructLatestQuote";
import LoadLatestQuote from "./LoadLatestQuote";
import LoadCompanyProfile from "./LoadCompanyProfile";
import SectorPerformance from "./SectorPerformance";
import StockChartBar from "./StockChartBar";

//Search Bar (AutoComplete Textbox) with all results.
class SearchBar extends Component {

    constructor(property) {
        super(property);
        this.state = { suggestions: [], text: '', companyNamesFromJSON: [], company_symbol_json: [], latestQuote: null, companyName: "", logo_img: null, quote: null, companyprofile: null, sector_data: null };
        this.symbol = { value: "" };
        this.getStock_MainFunction = this.getStock_MainFunction.bind(this);
        this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
        this.calculateSuggestions = this.calculateSuggestions.bind(this);
        this.suggestionsSelected = this.suggestionsSelected.bind(this);
        this.getCompanyNamesForSuggestion = this.getCompanyNamesForSuggestion.bind(this);

    }

    //On Detecting change in textbox value, populate the company name suggestions
    //If text is empty, reset the states.
    onCompanyNameChange = (e) => {
        const value = e.target.value;
        if (value.length === 0) {
            this.setState({ text: '' });
            this.setState({ suggestions: [] });
            this.setState({ companyName: '' }, this.getStock_MainFunction);
        }
        let suggest = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggest = this.state.companyNamesFromJSON.sort().filter(v => regex.test(v));
        }
        this.setState({ suggestions: suggest, text: value });

    }

    //On selecting the company name from the drop down, call the main function: Get Stock
    suggestionsSelected(value) {
        this.setState({ text: value });
        this.setState({ suggestions: [] });
        this.setState({ companyName: value }, this.getStock_MainFunction);
    }

    //Renders company name suggestions in a list
    calculateSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        var i = 0;
        return (<ul>
            {suggestions.map((item) => <li key={i++} onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
        </ul>)
    }

    //Given the company name, find the symbol to use in subsequent requests
    getSymbolFromCompanyName(companyName) {
        for (var i = 0; i < this.state.company_symbol_json.length; i++) {
            if (
                this.state.company_symbol_json[i].name
                    .toLowerCase()
                    .includes(companyName.toLowerCase())
            ) {
                this.symbol.value = this.state.company_symbol_json[i].symbol;
                return;
            }
        }
    }

    //Main Function: Get response from all APIS: Latest Quote, Company Profile, Logo
    getStock_MainFunction() {
        if (this.state.companyName === undefined || this.state.companyName.length === 0) {
            this.setState({ latestQuote: null });
            this.setState({ logo_img: null });
            this.setState({ quote: null });
            this.setState({ companyprofile: null });
        } else {
            this.getSymbolFromCompanyName(this.state.companyName);
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

    //Populate all the company Names to use for suggestions later
    getCompanyNamesForSuggestion() {
        var data = []
        for (var i = 0; i < this.state.company_symbol_json.length; i++) {
            if (this.state.company_symbol_json[i].name.length !== 0) {
                data.push(this.state.company_symbol_json[i].name);
            }
        }
        this.setState({ companyNamesFromJSON: data });
    }

    //Executed on load: Symbols and Company mapping data, Sector Performance
    async componentDidMount() {
        Promise.all([
            symbols_company(),
            sector_perf()
        ]).then((values) => {
            this.setState({ company_symbol_json: values[0] }, this.getCompanyNamesForSuggestion);
            let data_temp = {}
            data_temp = {
                basicMaterials: values[1]['sectorPerformance'][0].changesPercentage,
                CommunicationServices: values[1]['sectorPerformance'][1].changesPercentage,
                Conglomerates: values[1]['sectorPerformance'][2].changesPercentage,
                ConsumerCyclical: values[1]['sectorPerformance'][3].changesPercentage,
                ConsumerDefensive: values[1]['sectorPerformance'][4].changesPercentage,
                Energy: values[1]['sectorPerformance'][5].changesPercentage,
                Financial: values[1]['sectorPerformance'][6].changesPercentage,
                FinancialServices: values[1]['sectorPerformance'][7].changesPercentage,
                Healthcare: values[1]['sectorPerformance'][8].changesPercentage,
                IndustrialGoods: values[1]['sectorPerformance'][9].changesPercentage,
                Industrials: values[1]['sectorPerformance'][10].changesPercentage,
                RealEstate: values[1]['sectorPerformance'][11].changesPercentage,
                Services: values[1]['sectorPerformance'][12].changesPercentage,
                Technology: values[1]['sectorPerformance'][13].changesPercentage,
                Utilities: values[1]['sectorPerformance'][14].changesPercentage
            }
            this.setState({ sector_data: data_temp });
        });
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <div className="AutoComplete">
                    <input value={text} placeholder="Enter name of organization" onChange={this.onCompanyNameChange} type="text" />
                    {this.calculateSuggestions()}
                </div>
                <div className="block_latestquote">
                    {this.state.quote == null ? (this.state.sector_data == null ? <div className="null_condition"></div> : <SectorPerformance{...this.state.sector_data} />) : <LoadLatestQuote{...this.state.quote} />}
                </div>
                <div className="block_latestquote">
                    {this.state.companyprofile == null ? <div className="null_condition"></div> : <LoadCompanyProfile{...this.state.companyprofile} />}
                </div>
                <div>
                    <StockChartBar />
                </div>
            </div>
        );
    }
}

export default SearchBar;
