// jquery equivalent DOM manipulation
// const circles = d3.selectAll('circle');
// circles.style('fill', 'steelblue');
// circles.attr('r', 30);

// circles.attr('cx', function () { return Math.random() * 720 });


// data and data binding
// circles.data([32, 57, 112]);

// entering and exiting
const svg = d3.select('svg'); // first match only
// const circles = svg.selectAll('circle').data([32, 57, 112, 293]);
//
// circles.attr('cx', function (d, i) { return i * 100 + 30 })
// circles.attr('r', function (d) { return Math.sqrt(d) });
//
// const newCircle = circles.enter().append('circle');
// newCircle.attr('cy', 60);
// newCircle.attr('cx', function (d, i) { return i * 100 + 30 });
// newCircle.attr('r', function (d) { return Math.sqrt(d) });

// const svg = d3.select('svg'); // first match only
// svg.selectAll('circle')
//   .data([32, 57, 112, 293])
//   .enter().append('circle')
//   .attr('cx', 60)
//   .attr('cy', function (d, i) { return i * 100 + 30})
//   .attr('r', function (d) { return Math.sqrt(d) } );
