# StockDash API

## A React Stock Market DashBoard Application

This project displays the latest quote, company profile and the stocks of the organization.<br/>
We can select the organization whose stocks price we want from a autocomplete textbox.

### NPM Packages Used:
- **react-chartjs-2** for Bar and line Chart
- **react-bootstrap**
- **react-card-flip** to create Flip Card in React
- **react-dates** for date range picker
- **moment** for filtering data between selected date range
- **react-apexcharts** for candlestick chart


## Stock API Used:
- https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=CompanySymbol&interval=5min&outputsize=full&apikey=xx for Latest Quote 
- https://financialmodelingprep.com/api/v3/company/profile/CompanySymbol for Company Profile
- https://cloud.iexapis.com/v1/stock/Companysymbol/logo?token=xx for Company Logo
- https://financialmodelingprep.com/api/v3/stock/sectors-performance for Daily Sector Performance
- https://api.iextrading.com/1.0/ref-data/symbols to get symbols matching the company names.
-https://financialmodelingprep.com/api/v3/historical-price-full/symbol?apikey=xx for past 5 years stock data
-https://cloud.iexapis.com/stable/stock/symbol/chart/5d?token=xx for last 5 days stock data
-https://cloud.iexapis.com/stable/stock/symbol/news/last/5?token=xx for latest news of company

### To run the project:`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.





