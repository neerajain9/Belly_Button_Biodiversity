// var cityGrowths = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "39208",
//       "population": "1511946"
//     },

// Sort Cities by population (descending)
descAry = cityGrowths.sort((a,b) => b.Increase_from_2016-a.Increase_from_2016)
// Select only the top 5 cities
topFive = descAry.slice(0,5)
// Create seperate arrays for city and growth
cityAry = topFive.map(i => i.City);
//  Convert Growth (String) to Integer...
popAry = topFive.map(i => parseInt(i.Increase_from_2016));

// Plot Chart
var trace = {
    x: cityAry,
    y: popAry,
    type: "bar"
};

var data = [trace]

var layout = {
    title: "City Growth",
    xaxis: {title: "City Name"},
    yaxis: {title: "Increase since 2016"}
};

Plotly.newPlot("bar-plot", data, layout);