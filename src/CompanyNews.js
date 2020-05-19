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
     //set flip status  
    handleClick = () => {
        this.setState({isFlipped:!this.state.isFlipped});
    };

    render() 
    { 
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <div className="front-news" onClick={this.handleClick}>
                <div className="flex-news-item">News about  {this.props.companyName}</div>
                <button className="button-news-front" onClick={this.handleClick}>Show</button>
            </div>
            <div onClick={this.handleClick}>
                <div className="newscontainer">
                    <div className="section">
                        <header className="header-news">
                        {"News about " + this.props.companyName}
                        </header>
                        <div  className="scrollable-content newscontent">
                        {
                            //used news data which is passed in props from component which called company news component
                            //displaying headline,date,source and summary of news
                                        this.props.news.map(item=>
                                            (
                                                ((item.datetime===null || item.source===null || item.headline===null)?
                                                        <div className="null-check"></div>:
                                                    (item.summary===null?
                                                        (<div key={item.date+item.headline} className="content">
                                                            <h2 className="headline">{item.headline}</h2>
                                                            <p className="summary">{item.source}&nbsp;{", "+(new Date(item.datetime).getFullYear()+"-"+new Date(item.datetime).getMonth()+"-"+new Date(item.datetime).getDate())}
                                                            <br/>
                                                            {"No summary available"}</p>
                                                            <hr/>
                                                        </div>):
                                                        (<div key={item.date+item.headline} className="content">
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
                    <button className="button-news-back" onClick={this.handleClick}>Back</button>
                </div>
           </div>
           </ReactCardFlip>
        );
    }
}

export default CompanyNews;