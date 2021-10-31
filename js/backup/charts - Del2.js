function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {

  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {

    // 3. Create a variable that holds the samples array. 
  allSamples = data;

  // 4. Create a variable that filters the samples for the object 
  // with the desired sample number.
  filteredSample = allSamples.samples.filter(i => i.id === sample);

  //  5. Create a variable that holds the first sample in the array.
  firstSample1 = filteredSample.slice(0,1)
    
  // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
  var otu_ids = firstSample1[0].otu_ids;
  var sample_values = firstSample1[0].sample_values;
  var otu_labels = firstSample1[0].otu_labels;

  // 7. Create the yticks for the bar chart.
  // Hint: Get the the top 10 otu_ids and map them in descending order  
  //  so the otu_ids with the most bacteria are last.
  arrx = sample_values.slice(0, 10).reverse();
  arry = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

  // 8. Create the trace for the bar chart. 
  var barData = [{
  x: arrx,
  y: arry,
  text: otu_labels.slice(0, 10).reverse(),
  // name: "Test",
  type: "bar",
  orientation:"h",
  }];
  
  // 9. Create the layout for the bar chart. 
  var barLayout = {
  title: "Top 10 Bacteria Cultures Found",
  xaxis: {title: "Sample Values"},
  // yaxis: {title: "Samples"},
  margin: {
    l: 100,
    r: 100,
    t: 75,
    b: 100
    }
  };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout)




  // Deliverable-2 // 
  // 1. Create the trace for the bubble chart.
  bubbleSize =[];
  for (var i = 0; i < sample_values.length; i++) {
    bubbleSize.push(sample_values[i])   
  };
 
  var bubbleData = [{
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: "markers",
    marker: {
        size: bubbleSize,
        color: otu_ids,
        showscale: true,
        colorscale: "Viridis"
        // cmax: 15,
        // cmin: 0,
        // color: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    }
  }];

  // 2. Create the layout for the bubble chart.
  var bubbleLayout = {
    title: "Bacteria Cultures Per Sample",
    showlegend: false,
    xaxis: {title: "OTU ID"},
   yaxis: {title: "Sample Value"},
  margin: {
    l: 75,
    r: 50,
    t: 75,
    b: 100
    }  
  };

  // 3. Use Plotly to plot the data with the layout.
  Plotly.newPlot(bubble, bubbleData, bubbleLayout);  



  });
}
