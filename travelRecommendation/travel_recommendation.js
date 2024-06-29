// Fetch data from the JSON file and display recommendations
async function fetchRecommendations() {
    try {
        const response = await fetch('travel_recommendation_api.json');
        const data = await response.json();
        console.log(data.countries)
        displayRecommendations(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display the fetched recommendations in the results section
function displayRecommendations(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    var keyword = document.getElementById('search').value.toLowerCase();
    
    // Display countries and cities
    if (keyword == 'countries' || keyword == 'country') {
        data.countries.forEach(country => {
            const countryElement = document.createElement('div');
            countryElement.classList.add('country');

            const countryHeader = document.createElement('h2');
            countryHeader.textContent = country.name;
            countryElement.appendChild(countryHeader);

            country.cities.forEach(city => {
                const cityElement = document.createElement('div');
                cityElement.classList.add('city');

                cityElement.innerHTML = `
                    <img src="${city.imageUrl}" alt="${city.name}">
                    <h3>${city.name}</h3>
                    <p>${city.description}</p>
                `;

                countryElement.appendChild(cityElement);
            });

            resultsContainer.appendChild(countryElement);
        });
    }

    // Display temples
    if (keyword == 'temples'|| keyword == 'temple') {
        const templesHeader = document.createElement('h2');
        templesHeader.textContent = 'Temples';
        resultsContainer.appendChild(templesHeader);

        data.temples.forEach(temple => {
            const templeElement = document.createElement('div');
            templeElement.classList.add('temple');

            templeElement.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.name}">
                <h3>${temple.name}</h3>
                <p>${temple.description}</p>
            `;

            resultsContainer.appendChild(templeElement);
        });
    }

    // Display beaches
    if (keyword == 'beaches' || keyword == 'beach') {
        const beachesHeader = document.createElement('h2');
        beachesHeader.textContent = 'Beaches';
        resultsContainer.appendChild(beachesHeader);

        data.beaches.forEach(beach => {
            const beachElement = document.createElement('div');
            beachElement.classList.add('beach');

            beachElement.innerHTML = `
                <img src="${beach.imageUrl}" alt="${beach.name}">
                <h3>${beach.name}</h3>
                <p>${beach.description}</p>
            `;

            resultsContainer.appendChild(beachElement);
        });
    }
}

// Clear the displayed results
function clearResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
}
