var inventors = [
    {
        first: "Albert",
        last: "Einstein",
        year: 1879,
        passed: 1955
    },
    {
        first: "Isaac",
        last: "Newton",
        year: 1643,
        passed: 1727
    },
    {
        first: "Galileo",
        last: "Galilei",
        year: 1564,
        passed: 1642
    },
    {
        first: "Marie",
        last: "Curie",
        year: 1867,
        passed: 1934
    },
    {
        first: "Max",
        last: "Planck",
        year: 1858,
        passed: 1947
    },
    {
        first: "Nicolaus",
        last: "Copernicus",
        year: 1473,
        passed: 1543
    },
    {
        first: "Johannes",
        last: "Kepler",
        year: 1571,
        passed: 1630
    }
]


function updateTable(inventorArr){
    var tabletxt = `
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Born </th>
        <th>Died </th>
    </tr>`
    inventorArr.forEach(inventor => {
        tabletxt += `<tr>
        <td>${inventor.first}</td>
        <td>${inventor.last}</td>
        <td>${inventor.year}</td>
        <td>${inventor.passed}</td>
        </tr>`
    });
    var table = document.getElementById("inventors_table_id");
    table.innerHTML = tabletxt;
}

function showAll(){
    updateTable(inventors);
}

function showGalileo(){
    var person = inventors.filter((inventor) => {
        return inventor.first == "Galileo" && inventor.last == "Galilei";
    })
    updateTable(person);
};

function showRange(){
    var fromYear = document.getElementById("fromYear_id").value;
    var toYear = document.getElementById("toYear_id").value;
    console.log(fromYear,toYear);

    var filteredInventors = inventors.filter((inventor) => {
        return inventor.year >= fromYear && inventor.year <= toYear;
    });

    // console.log(filteredInventors);
    updateTable(filteredInventors);
}

function search(){
    var term = document.getElementById("search_id").value.toLowerCase();
    var searchType = document.getElementById("searchType_id").value;
    
    var filteredInventors = [];
    if (searchType === "First Name"){
        inventors.forEach(inventor => {
            if (inventor.first.toLowerCase().includes(term)){
                filteredInventors.push(inventor);
            }
        });
    } else {
        inventors.forEach(inventor => {
            if (inventor.last.includes(term)){
                filteredInventors.push(inventor);
            }
        });
    }

    updateTable(filteredInventors);
}