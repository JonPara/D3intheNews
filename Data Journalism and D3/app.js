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
d3.csv("final_data.csv", function(error, data){
    if (error) throw error;

    console.log(data);
    console.log([data]);

    // Format the data
    healthData.forEach(function(data){
        data.state = +data.state;
        data.abbr = +data.abbr;
        data.education = +data.education;
        data.healthcare = +data.healthcare;
    });

    console.log(healthData)

    // Create scale functions
    var xLinearScale = d3.scaleLinear().range([0, width]);

    var yLinearScale = d3.scaleLinear().range([height, 0]);

    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScal);
    var leftAxis = d3.axesLeft(yLinearScale)

    // Append axes to chart
    chartGroup.append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(bottomAxis);

    chartGroup.append("g")
              .call(leftAxis);

    // Create circles
    var circlesGroup = chartGroup.selectAll("circle")
                                 .data(dataata)
                                 .enter()
                                 .append("circle")
                                 .attr("cx", d => xLinearScale(d.length))
                                 .attr("cy", d => yLinearScale(d.hits))
                                 .attr("r", "15")
                                 .attr("fill", "blue")
                                 .attr("opacity", ".5")


    chartGroup.append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 0 - margin.left + 40)
              .attr("x", 0 - (height / 2))
              .attr("dy", "1em")
              .attr("class", "axisText")
              .text("")

    chartGroup.append("text")
              .attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
              
});