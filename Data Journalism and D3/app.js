// Chart Parameters
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50}

var width = svgWidth - margin.left - margin.right
var height = svgHeight - margin.top - margin.bottom

/* Create SVG wrapped, appened an SVG group that will hold our chart, and shift the latter 
by left and top margins */
var svg = d3.select("body")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

var chartGroup = svg.append("g")
                    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file
d3.csv("usData.csv", function(error, healthData){
    if (error) throw error;

    console.log(healthData);
    console.log([healthData]);

    // Format the data
    healthData.forEach(function(data){
        // Add formatted data once finished
        // Add formatted data once finished
        // Add formatted data once finished
        // Add formatted data once finished
    });

    console.log(healthData)

    // Create scale functions
    var xLinearScale = d3.scaleLinear().range([0, width]);

    var yLinearScale = d3.scaleLinear().range([height, 0]);

    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale)

})