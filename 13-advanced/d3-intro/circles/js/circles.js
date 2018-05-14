// jquery equivalent DOM manipulation
const circles = d3.selectAll('circle');
circles.style('fill', 'steelblue');
circles.attr('r', 30);

// circles.attr('cx', function () { return Math.random() * 720 });

circles.attr('cx', function (d, i) { return i * 100 + 30 })

// data and data binding
circles.data([32, 57, 112]);
circles.attr('r', function (d) { return Math.sqrt(d) });

// entering and exiting
