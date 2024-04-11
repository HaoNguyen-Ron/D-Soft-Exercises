function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomPhoneNumber() {
    return Math.floor(Math.random() * 9000000000) + 1000000000;
}

function generateData(sourceSet) {
    const FIRST_NAME = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Daniel', 'Matthew', 'Anthony', 'Donald', 'Mark', 'Paul', 'Steven', 'Andrew', 'Kenneth', 'Joshua', 'Kevin', 'Brian', 'George', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon', 'Benjamin', 'Samuel', 'Frank', 'Gregory', 'Raymond', 'Alexander', 'Patrick', 'Jack', 'Dennis', 'Jerry', 'Tyler'];

    const LAST_NAME = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins'];

    const fullName = FIRST_NAME[Math.floor(Math.random() * FIRST_NAME.length)] + ' ' + LAST_NAME[Math.floor(Math.random() * LAST_NAME.length)];
    
    let source;
    do {
        source = generateRandomString(6);
    } while (sourceSet.has(source));

    const id = generateRandomString(10);

    return {
        id: id,
        name: `${fullName}_${id}`,
        address: generateRandomString(12),
        gender: Math.random() < 0.5 ? 'Male' : 'Female',
        phoneNumber: generateRandomPhoneNumber(),
        description: generateRandomString(20),
        source: source
    };
}

function generateArray() {
    const dataArray = [];
    const sourceSet = new Set(); 
    while (dataArray.length < 2000) {
        const data = generateData(sourceSet);
        dataArray.push(data);
        sourceSet.add(data.source);
    }
    return dataArray;
}

const dataArray = generateArray();

const searchResultsDiv = document.getElementById('searchResults');

function throttle(mainFunction, delay) {
    let timerFlag = null;
  
    return (...args) => {
      if (timerFlag === null) {
        mainFunction(...args);
        timerFlag = setTimeout(() => {
          timerFlag = null;
        }, delay);
      }
    };
  }

const improveSearchItemBynameOrSource = _.debounce(function(searchInput) {
    const searchResults = searchItemBynameOrSource(dataArray, searchInput);
    
    displaySearchResults(searchResults);
}, 1000);

function searchItemBynameOrSource(array, searchTerm) {
    return array.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.source.toLowerCase() === searchTerm);
}

function displaySearchResults(results) {
    searchResultsDiv.innerHTML = ''; 

    if (results.length === 0) {
        searchResultsDiv.textContent = 'No matching items found.';

    } else {
        const table = document.createElement('table');
        table.classList.add('table', 'table-striped');
        
        const headerRow = table.insertRow(0);
        headerRow.innerHTML = '<th>Name</th><th>Address</th><th>Gender</th><th>Phone Number</th><th>Description</th><th>Source</th>';

        results.forEach(result => {
            const row = table.insertRow(-1);
            row.innerHTML = `<td>${result.name}</td><td>${result.address}</td><td>${result.gender}</td><td>${result.phoneNumber}</td><td>${result.description}</td><td>${result.source}</td>`;
        });
        searchResultsDiv.appendChild(table);
    }
}

document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchInputValue = event.target.value.trim()

    if(searchInputValue === '') return displaySearchResults([])

    improveSearchItemBynameOrSource(searchInputValue)
})

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchInput = document.getElementById('searchInput').value.trim(); 

    if (searchInput === '') {
        searchResultsDiv.textContent = 'Please fill in the input';

        return;
    }

    const searchResults = searchItemBynameOrSource(dataArray, searchInput);
    displaySearchResults(searchResults);
});


//-------------------------------Date----------------------//
document.addEventListener("DOMContentLoaded", function() {
    let checkDateButton = document.getElementById("checkDateBtn");

    checkDateButton.addEventListener("click", calculateDayOfWeek);
});

function calculateDayOfWeek() {
    let inputDate = document.getElementById("inputDate").value;
    let startDate = new Date();
    let dayOfWeek;

    for (let i = 0; i < inputDate; i++) {
        startDate.setDate(startDate.getDate() + 1);

        if (startDate.getDay() >= 6) { 
            startDate.setDate(startDate.getDate() == 1);
        } 
    }

    switch (startDate.getDay()) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
        default:
            dayOfWeek = "Invalid day";
    }

    document.getElementById("date-result").innerHTML = "The next working day will be: " + dayOfWeek;

    document.removeEventListener('click', calculateDayOfWeek)
}


//-------------------------------Calculate----------------------//
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn')
    calculateBtn.addEventListener('click', calculate)

})
function add(a, b) {
    return BigInt(a) + BigInt(b);
}

function subtract(a, b) {
    return BigInt(a) - BigInt(b);
}

function multiply(a, b) {
    return BigInt(a) * BigInt(b);
}

function divide(a, b) {
    if (b == 0) {
        return "Cannot divide by zero";
    }
    return BigInt(a) / BigInt(b);
}

function calculate() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const operator = document.getElementById("operator").value;

    let result;

    switch (operator) {
        case "add":
            result = add(number1, number2);
            break;
        case "subtract":
            result = subtract(number1, number2);
            break;
        case "multiply":
            result = multiply(number1, number2);
            break;
        case "divide":
            result = divide(number1, number2);
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}

