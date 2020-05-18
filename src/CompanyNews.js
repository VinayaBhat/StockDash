import React, { Component } from "react";
import "./CompanyNews.css";

class CompanyNews extends Component
{
    // getnews()
    // {
    //     var getnews=[];
    //     this.props.news.map(item=>{
    //         getnews.push(item);
    //     })
    //     var results=document.getElementById("newsContent");
        
    //     for(let i=0;i<getnews.length-1;i++)
    //     {
    //         var p = document.createElement('p');
    //         p.innerHTML = getnews[i].headline;
    //         var p1 = document.createElement('p');
    //         p1.innerHTML = getnews[i].summary;
    //         var hr = document.createElement('hr');
    //         results.appendChild(p);
    //         results.appendChild(p1);
    //         results.appendChild(hr);
    //     }
    // }

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
                                this.props.news.map(item=>(
                                    <div key={item.date}>
                                
                                        <p>{item.headline}</p>
                                        <p>{item.summary}</p>
                                </div>))
                            }
                </div>
                </div>
           </div>
        );
    }
}

export default CompanyNews;