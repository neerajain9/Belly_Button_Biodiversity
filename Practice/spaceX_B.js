// the URL to the SpaceX is defined
// const url = "https://api.spacexdata.com/v2/launchpads";
// d3.json method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.
// d3.json(url).then(receivedData => console.log(receivedData));
// dta = [];
// d3.json(url).then(receivedData => console.log(receivedData.map(x => x.location.latitude), 
//                                             receivedData.map(x => x.location.longitude)
//                                             ));
// d3.json(url).then(receivedData => dta.push(receivedData));
// dta.map(i => console.log(i));

// d3.json("samples.json").then(function(data){
//     console.log(data.metadata[0].wfreq);
// });

// d3.json("samples.json").then(function(data){
//     // wfreq = data.metadata.map(i => i.wfreq);
//     console.log(data.metadata.map(i => i.wfreq));
// });

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(i => i.wfreq);
//     console.log(wfreq.sort((a,b) => b-a));
//     // console.log(data.metadata.map(i => i.wfreq));
// });

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(i =>i.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(j => j != null);
    console.log(filteredWfreq);
});

// researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
// 'Hiking']];
// researcher1.forEach(x => console.log(Object.values(x)));

// researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
// 'Hiking']];
// researcher1.map(x => console.log(Object.values(x)));

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});