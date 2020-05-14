
//constructLatestQuote is used to parse the latest quote data and return only open, high, low, close and volume
function constructLatestQuote(data) {
    let quote_data = data["Meta Data"];
    let meta_data_lastinterval = quote_data["3. Last Refreshed"];
    let latest_quote = data["Time Series (5min)"][meta_data_lastinterval];
    let open = latest_quote["1. open"];
    let high = latest_quote["2. high"];
    let low = latest_quote["3. low"];
    let close = latest_quote["4. close"];
    let volume = latest_quote["5. volume"];
    let quote = { open, high, low, close, volume };
    return quote;
}

export default constructLatestQuote;