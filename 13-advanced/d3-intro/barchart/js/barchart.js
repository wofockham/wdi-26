const data = [4, 8, 15, 16, 23, 42];

const x = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, 420]);

const chart = d3.select('.chart');
const bars =  chart.selectAll('div').data(data);
const barsEnter = bars.enter().append('div'); // enter selection
barsEnter.style('width', function (d) {  return x(d) + 'px' });
barsEnter.text(function (d) {return d});
