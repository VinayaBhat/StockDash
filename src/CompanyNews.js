import React, { Component } from "react";
import "./CompanyNews.css";

class CompanyNews extends Component
{
    render() 
    { 
        return (
            <div className="newscontainer">
                <div className="section">
                <header className="header">
                {"News about " + this.props.companyName}
                </header>
                <div  className="scrollable-content newscontent" id="newsContent">
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
           </div>
        );
    }
}

export default CompanyNews;