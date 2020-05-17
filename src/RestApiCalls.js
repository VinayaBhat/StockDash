

//Load the Latest Quote of the organization data
export const loadLatestQuote = symbol => {
  return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=5min&outputsize=full&apikey=G65K9Q9YE1T9BXFR").then(res => res.json());
};

//Load the company profile data
export const getCompanyProfile = symbol => {
  return fetch("https://financialmodelingprep.com/api/v3/company/profile/" + symbol).then(res => res.json());
};

//Load the Company Logo
export const logo = symbol => {
  return fetch("https://cloud.iexapis.com/v1/stock/" + symbol + "/logo?token=pk_7f40fdc95e4c46268d90695ab47e7b22").then(res => res.json());
};

//Load the Sector Performance data
export const sector_perf = () => {
  return fetch("https://financialmodelingprep.com/api/v3/stock/sectors-performance").then(res => res.json());
};

//Load the symbols and company data
export const symbols_company = () => {
  return fetch("https://api.iextrading.com/1.0/ref-data/symbols").then(res => res.json());
};

export const getHourlyPrice = symbol => {
  return fetch("https://financialmodelingprep.com/api/v3/historical-chart/1hour/"+symbol).then(res=>res.json());
};

export const getFullHistoricalData = symbol => {
  return fetch("https://financialmodelingprep.com/api/v3/historical-price-full/"+symbol).then(res=>res.json());
};

export const getFiveDaysPrice = symbol => {
  return fetch("https://cloud.iexapis.com/stable/stock/" + symbol + "/chart/5d?token=pk_7d0b4958ac3e4f09a55058e694cc48f1").then(res=>res.json());
}
 
export const getOneMonthPrice = symbol => {
  return fetch("https://cloud.iexapis.com/stable/stock/" + symbol + "/chart/1m?token=pk_7d0b4958ac3e4f09a55058e694cc48f1").then(res=>res.json());
}
