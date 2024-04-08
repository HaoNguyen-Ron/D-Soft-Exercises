// Function to generate random data for each element
function generateRandomData() {
    const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Ian", "Julia"];
    const addresses = ["123 Main St", "456 Elm St", "789 Oak St", "321 Pine St", "654 Maple St"];
    const genders = ["Male", "Female"];
    const descriptions = ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"];
    const sources = ["Source1", "Source2", "Source3", "Source4", "Source5"];

    const name = names[Math.floor(Math.random() * names.length)];
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const phoneNumber = Math.floor(Math.random() * 10000000000).toString(); // Random phone number
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];

    return { name, address, gender, phoneNumber, description, source };
}

// Create an array of 2000 elements
let dataArray = [];

// Function to check if the name and source are unique in the array
function isUniqueNameAndSource(name, source, array) {
    return !array.some(item => item.name === name && item.source === source);
}

// Generate data for each element ensuring unique name and source
while (dataArray.length < 2000) {
    const data = generateRandomData();
    if (isUniqueNameAndSource(data.name, data.source, dataArray)) {
        dataArray.push(data);
    }
}

console.log(dataArray);
