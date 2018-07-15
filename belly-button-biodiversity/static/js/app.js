// function updateMetaData(data) {
//
//     // Reference to Panel element for sample metadata
//     var PANEL = document.getElementById("sample-metadata");
//
//     // Clear any existing metadata
//     PANEL.innerHTML = '';
//
//     // Loop through all of the keys in the json response and
//     // create new metadata tags
//     for(var key in data) {
//         h6tag = document.createElement("h6");
//         h6Text = document.createTextNode(`${key}: ${data[key]}`);
//         h6tag.append(h6Text);
//
//         PANEL.appendChild(h6tag);
//     }
// }
//
// function buildCharts(sample_metadata, otuData) {
//
//     // Loop through sample data and find the OTU Taxonomic Name
//     var labels = data[0]['otu_ids'].map(function(item) {
//         return otuData[item]
//     });
//
//     // Build Bubble Chart
//     var bubbleLayout = {
//         margin: { t: 0 },
//         hovermode: 'closest',
//         xaxis: { title: 'OTU ID' }
//     };
//     var bubbleData = [{
//         x: sampleData[0]['otu_ids'],
//         y: sampleData[0]['sample_values'],
//         text: labels,
//         mode: 'markers',
//         marker: {
//             size: sampleData[0]['sample_values'],
//             color: sampleData[0]['otu_ids'],
//             colorscale: "Earth",
//         }
//     }];
//     var BUBBLE = document.getElementById('bubble');
//     Plotly.plot(BUBBLE, bubbleData, bubbleLayout);
//
//     // Build Pie Chart
//     console.log(sampleData[0]['sample_values'].slice(0, 10))
//     var pieData = [{
//         values: sampleData[0]['sample_values'].slice(0, 10),
//         labels: sampleData[0]['otu_ids'].slice(0, 10),
//         hovertext: labels.slice(0, 10),
//         hoverinfo: 'hovertext',
//         type: 'pie'
//     }];
//
//     var pieLayout = {
//         margin: { t: 0, l: 0 }
//     };
//
//     var PIE = document.getElementById('pie');
//     Plotly.plot(PIE, pieData, pieLayout);
// };

console.log(wash)
