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

function searchItemBynameOrSource(array, searchTerm) {
    searchTerm = searchTerm.toLowerCase(); 

    return array.filter(item => item.name.toLowerCase().includes(searchTerm) || item.source.toLowerCase() === searchTerm);
}

function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; 

    if (results.length === 0) {
        searchResultsDiv.textContent = 'No matching items found.';

    } else {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = `Name: ${result.name}, Source: ${result.source}`;
            ul.appendChild(li);
        });
        searchResultsDiv.appendChild(ul);
    }
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchInput = document.getElementById('searchInput').value.trim(); 

    if (searchInput === '') {
        alert('Please enter a search term.');
        return;
    }

    const searchResults = searchItemBynameOrSource(dataArray, searchInput);
    displaySearchResults(searchResults);
});