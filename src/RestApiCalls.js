


//Load the Latest Quote of the organization data
export const loadLatestQuote = symbol => {
  return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=5min&outputsize=full&apikey=G65K9Q9YE1T9BXFR").then(res => res.json());
};

//Load the company profile data
export const getCompanyProfile = symbol => {
  return fetch("https://financialmodelingprep.com/api/v3/company/profile/" + symbol + "?apikey=0813213df1505a2b14f8ea0c05898034").then(res => res.json());
};

//Load the Company Logo
export const logo = symbol => {
  return fetch("https://cloud.iexapis.com/v1/stock/" + symbol + "/logo?token=pk_7f40fdc95e4c46268d90695ab47e7b22").then(res => res.json());
};

//Load the Sector Performance data
export const sector_perf = () => {
  return fetch("https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=6385fd4927e860fddb4b6bb67cd41fba").then(res => res.json());
};

//Load the symbols and company data
export const symbols_company = () => {
  return fetch("https://api.iextrading.com/1.0/ref-data/symbols").then(res => res.json());
};

//Load full historial data (last 5 years data) of stock price
export const getFullHistoricalData = symbol => {
  return fetch("https://financialmodelingprep.com/api/v3/historical-price-full/" + symbol + "?apikey=656c8c296875a026344185ef408d6621").then(res => res.json());
};

//Load last 5 days data of stock price
export const getFiveDaysPrice = symbol => {
 return fetch("https://cloud.iexapis.com/stable/stock/" + symbol + "/chart/5d?token=pk_1cd7010654304d9da845c98f9e030ab8").then(res => res.json());
}

//Load latest news of company
export const getNews = symbol => {
 return fetch("https://cloud.iexapis.com/stable/stock/" + symbol + "/news/last/5?token=pk_11795e9e241a4c278aee46443660ba6d").then(res => res.json());
}
