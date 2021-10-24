// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//     };
// var data = [trace];
// var layout = {
//     title: "Drinks Analysis"
//     // xaxis: {title: "Drink"},
//     // yaxis: {title: "% of Drinks Ordered"}
//     };

//     Plotly.newPlot("plotArea", data, layout);

// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);

// Scattered
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
  };
  
var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
  };
  
var data = [trace1, trace2, trace3];
  
Plotly.newPlot('plotArea', data);

// Map Function
var lettersArray = ["anthony", "birbal", "chad", "david"];
var uc = lettersArray.map(word => word.toUpperCase());
uc

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var numbers = [0,2,4,6,8];
add5 = numbers.map(i => i+5);
add5

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(i){
    return i.City;
});
console.log(cityNames);

var stateNames = cities.map(st => st.State)
console.log(stateNames)

// FILTER Function
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var numbers = [1,2,3,4,5];
var larger = numbers.filter(i => i > 1);
console.log(larger);

// Extract 1st character
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// var startS = words.map(i => i[0] === 's');
// var startS = words.map(i => console.log(i.slice(0,1)));
var startS = words.map(function(i){
    if (i[0] === 's') {
    // if (i.slice(0,1) === 's') { 
        console.log(i);
    }
});

// SORT (Ascending)
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b); 
console.log(sortedAge);

// SORT (Descending)
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a); 
console.log(sortedAge);

// SLICE
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sl3 = words.map(i => console.log(i.slice(0,3)));
words.slice(3, );
sl3


