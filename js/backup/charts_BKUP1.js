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
    // console.log(filteredSample);

    //  5. Create a variable that holds the first sample in the array.
    firstSample1 = filteredSample.slice(0,1)
    // console.log(firstSample1);
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    // filteredValues = allSamples.samples.filter(i => i.id === firstSample1);
    // filteredOtuIds = firstSample1[0].otu_ids;
    // filteredOtuLabels = firstSample1[0].otu_labels;
    // filteredSampleValues = firstSample1[0].sample_values;
    // console.log(filteredSampleValues);

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last.
    firstSample1.sort(function(a,b) { 
      // return a.otu_ids - b.otu_ids;
      return parseInt(a.otu_ids) - parseInt(b.otu_ids);
    });
    console.log("After sorting by sample values");
    console.log(firstSample1);
    firstSample1 = firstSample1.slice(0,10);
    console.log("After Slicing");
    console.log(firstSample1);

    var otu_ids = firstSample1[0].otu_ids;
    var sample_values = firstSample1[0].sample_values;
    var otu_labels = firstSample1[0].otu_labels;
    
    console.log("otu_ids :" +otu_ids)
    console.log("sample_values :" +sample_values)
    console.log("otu_labels :" +otu_labels)
    

    // hemisphere_image_urls = [{'img_url':i,'title':j} for i,j in zip(urls,titles)]
    // return hemisphere_image_urls


    // allDescIds = filteredValues[0].otu_ids.sort((a,b) => b - a);
    // topTenIds = allDescIds.slice(0,10);
    // sortBacteriaAsc = topTenIds[0].otu_labels.sort((a,b) => a.length - b.length);
    // sortBacteriaAsc = topTenIds.reverse();
    // var yticks = allDescIds.slice(0,10).reverse();
        // var yax = topTenOtuIds.reverse();
        // var xax = topTenSampleValues.reverse();
    // yticks = topTenOtuIds.sort((a,b) => b - a);
    // yticks = yticks.reverse();
        // yTicks = [];
        // yax.forEach(i => {
        //   yTicks.push('OTU ' + i)
        //       });
        // console.log(yTicks)

    // 8. Create the trace for the bar chart. 
    // var x1 = [1,2,3,4,5,6,7,8,9,10]
    // var barData = {
    //   x: xax,
    //   y: yax,
    //   type: "bar",
    //   orientation:'h',
    //   text: topTenOtuLabels.reverse()
      // text: data.map(row => row.greekName),
    // };
    console.log("This is firstSample1: " + firstSample1)
    arrx = sample_values.slice(0, 10).reverse();
    arry = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

    // arrx = firstSample1.map(i => i.sample_values);
    // arry = firstSample1.map(i => i.otu_ids);
    console.log("arrx :" + arrx);
    console.log("arry :" + arry);
    

    var barData = [{
      // x: firstSample1.map(i => i.sample_values),
      x: arrx,
      // y: firstSample1.map(i => i.otu_ids),
      y: arry,
      // text: firstSample1.map(i => i.otu_labels),
      text: otu_labels.slice(0, 10).reverse(),
      // name: "NJAIN",
      type: "bar",
      orientation:"h",
    }];
 
    var trace = [barData]
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Bacteria Analysis",
      // xaxis: {title: "Sample Values"},
      // yaxis: {title: "Samples", tickformat: "OTU " + {topTenOtuIds}}
      // yaxis: {title: "Samples"},
      // ticks: yTicks
      margin: {
        l: 100,
        // r: 100,
        t: 100
        // b: 100
      }
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout)
  });
}
