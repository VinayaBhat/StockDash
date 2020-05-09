


export const loadLatestQuote = symbol => {
    return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+symbol+"&interval=5min&outputsize=full&apikey=G65K9Q9YE1T9BXFR").then(res => res.json());
  };


  export const getCompanyProfile = symbol => {
    return fetch("https://financialmodelingprep.com/api/v3/company/profile/"+symbol).then(res => res.json());
  };

  export const logo = symbol => {
    return fetch("https://cloud.iexapis.com/v1/stock/"+symbol+"/logo?token=pk_7f40fdc95e4c46268d90695ab47e7b22").then(res => res.json());
  };