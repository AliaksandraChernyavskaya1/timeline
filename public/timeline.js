// DOM element where the Timeline will be attached
  console.log('This is a timeline.js');
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    {id: 8, content: 'restart by Sasha', start: '2017-12-09 18:30:00', className: 'group1'},
    {id: 7, content: 'restart by Dima', start: '2017-12-09 18:30:00', className: 'group1'},
    {id: 1, content: 'restart by Jhon', start: '2018-01-19 18:30:00', className: 'group1'},
    {id: 2, content: 'release #16.3.30', start: '2018-01-24', className: 'group2'},
    {id: 3, content: 'content change', start: '2018-01-28', className: 'group2'},
    {id: 4, content: 'pre-sales compagn', start: '2018-01-22', end: '2018-01-29', className: 'group3'},
    {id: 5, content: 'release #16.4.0', start: '2018-02-05', className: 'group2'},
    {id: 6, content: 'show', start: '2018-02-17 19:00:00', className: 'group3'}
  ]);

  min_date = new Date();
  min_date.setMonth(min_date.getMonth() - 6);
  max_date = new Date();
  max_date.setMonth(max_date.getMonth() + 6);
  // Configuration for the Timeline
  var options = {
    height: '400px',
    min: min_date,                // lower limit of visible range
    max: max_date,                // upper limit of visible range
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);