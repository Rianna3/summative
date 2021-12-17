function main(){
    var svg = d3.select("svg"),
    margin =200,
    width = svg.attr("width")-margin,
    height = svg.attr("height")-margin;

    svg.append('text')
    .attr('transform','translate(100,0)')
    .attr('x',50)
    .attr('y',50)
    .attr('font-size','35px')
    .text("Global surface temperature")

    var xScale = d3.scaleBand().range([0,width]).padding(0.4),
    ySCale = d3. scaleLinear().range([height,0]);

    var g= svg.append("g").attr("transform", "translate("+100+","+100+")");

    d3.csv("data.csv").then(function(data){
        xScale.domain(data.map(function(d){return d.year}));
        ySCale.domain([0,d3.max(data, function(d){return d.value;})]);

        g.append("g").attr("transform", "translate(0,"+height+")")
            .call(d3.axisBottom(xScale))
            .append("text")
            .attr("y", height - 450)
            .attr("x", width - 100)
            .attr("text-anchor", "end")
            .attr("stroke", "black")
            .attr("font-size", "15px")
            .text("Year");
        
            g.append("g").call(d3.axisLeft(ySCale).tickFormat(function(d){
            return d;
        }).ticks(10))
        .append("text")
	    .attr("transform", "rotate(-90)")
	    .attr("y", 10)
	    .attr('dy', '-5em')
        .attr('font-size','15px')
	    .attr('text-anchor', 'end')
	    .attr('stroke', 'black')
	    .text('average temperature')

    g.selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr("class","bar")
    .on("mouseover", onMouseOver)
    .on("moseout", onMouseOut)
    .attr("x", function(d){return xScale(d.year);})
    .attr("y",function(d){return ySCale(d.value);})
    .attr("width",xScale.bandwidth())
    .transition()
    .ease(d3.easeLinear)
    .duration(500)
    .delay(function(d,i){return i*50})
    .attr("height", function(d){return height - ySCale(d.value);});

    });

    // Mouseover event handler
	function onMouseOver(d, i) {
		var xPos = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;
		var yPos = parseFloat(d3.select(this).attr('y')) / 2 + height / 2

		d3.select('#tooltip')
			.select('#value').text(i.value)
        d3.select('#tooltip')
			.select('#value_year').text(i.year)
		
		d3.select('#tooltip').classed('hidden', false);

		d3.select(this).attr('class','highlight')
	}

	function onMouseOut(d, i){
		d3.select('#tooltip').classed('hidden', true);
	}
}