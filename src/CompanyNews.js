import React, { Component } from "react";
import "./CompanyNews.css";
import ReactCardFlip from "react-card-flip";
class CompanyNews extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
      }
 
    handleClick = () => {
        this.setState({isFlipped:!this.state.isFlipped});
    };

    render() 
    { 
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <div className="front-profile" onClick={this.handleClick}>
                <div className="flex-item-profile">News about  {this.props.companyName}</div>
                <button className="button-front-profile" role="button" onClick={this.handleClick}>Show</button>
            </div>
            <div onClick={this.handleClick}>
                <div className="newscontainer">
                    <div className="section">
                        <header className="header">
                        {"News about " + this.props.companyName}
                        </header>
                        <div  className="scrollable-content newscontent">
                        {
                                        this.props.news.map(item=>
                                            (
                                                ((item.datetime==null || item.source==null || item.headline==null)?
                                                        <div className="null"></div>:
                                                    (item.summary==null?
                                                        (<div key={item.date} className="content">
                                                            <h2 className="headline">{item.headline}</h2>
                                                            <p className="summary">{item.source}&nbsp;{", "+(new Date(item.datetime).getFullYear()+"-"+new Date(item.datetime).getMonth()+"-"+new Date(item.datetime).getDate())}
                                                            <br/>
                                                            {"No summary available"}</p>
                                                            <hr/>
                                                        </div>):
                                                        (<div key={item.date} className="content">
                                                            <h2 className="headline">{item.headline}</h2>
                                                            <p className="summary">{item.source}&nbsp;{", "+(new Date(item.datetime).getFullYear()+"-"+new Date(item.datetime).getMonth()+"-"+new Date(item.datetime).getDate())}
                                                            <br/>{item.summary}</p>
                                                            <hr/>
                                                        </div>)
                                                )
                                            )
                                            ))
                                    }
                        </div>
                    </div>
                    <button className="button-back-profile" role="button" onClick={this.handleClick}>Back</button>
                </div>
           </div>
           </ReactCardFlip>
        );
    }
}

export default CompanyNews;