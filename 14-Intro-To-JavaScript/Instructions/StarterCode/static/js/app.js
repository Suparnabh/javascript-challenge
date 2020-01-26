// Assigning the data 
var tableData = data;
var tbody = d3.select("tbody");
var table = document.getElementById("et-table");

// Selecting the button
var button = d3.select("#filter-btn");

//Display all data on initial load
tableData.forEach(function display(data) {
  console.log(data);
  var row = tbody.append("tr");
  Object.entries(data).forEach(function([key, value]) {
  console.log(key, value);
  //Appending a cell to the row for each value
  var cell = row.append("td");
  cell.text(value);
  })
});

button.on("click", function() {

  //Clearing previous rows from table
  for(var i = table.rows.length - 1; i > 0; i--)
{
    table.deleteRow(i);
}
  
  // Selecting the input element and getting the raw HTML node
  var inputElement = d3.select("#datetime");

  // Getting the value property of the input element
  var inputValue = inputElement.property("value");

  //console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter( event=> event.datetime === inputValue);

  console.log(filteredData);


  //Step 1: Looping Through filtered data
  //Step 2:  Using d3 to append one table row `tr` for each filtered object
  // Step 3:  Using `Object.entries` to console.log each value
  // Step 4: Using d3 to append 1 cell per filtered data value
  //Step 5: Using d3 to update each cell's text with each value (Eg; datetime, city, state etc))
  filteredData.forEach(function display(data) {
    
    console.log(data);
    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
    //Appending a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
    })
  })
 
});




// Filtering data based on state
var stateFilter = "ca";
function selectState(data) {
    return data.state === stateFilter;
  }

var arizonaState = tableData.filter(selectState);
  
  console.log(arizonaState);

  