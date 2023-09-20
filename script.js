document.getElementById('generateButton').addEventListener('click', function() {
    // Data for each column
    const divinesapectData = ["Father", "Mother", "Maiden", "Crone", "Hawk", "Dog", "Warrior", "King", "Locust", "Ibis", "Baby", "Lamb", "Lion", "Mantis", "Lizard", "Ape", "Scholar", "Spider", "Sandworm", "Jester"];
    const secondaryiconographyData = ["Crystal", "Fungus", "Scroll", "Cornucopia", "Sword", "Moon", "Sun", "Helix", "Scorpion", "Goat", "Toad", "Honey", "Panther", "Coins", "Dove", "Machinery", "Serpent", "Goblet", "Owl", "Horned"];
    const holydomainData = ["Birth", "Death", "War", "Harvests", "Decay", "Travel", "Dreams", "Marriage", "Commerce", "Memory", "Water", "Sun", "Moon", "Fire", "Synths", "Mutants", "Justice", "Art", "Wind", "Silence"];
    const sacredcolourData = ["Crimson", "Indigo", "Orange", "Magenta", "Purple", "Azure", "Gold", "Silver", "Bronze", "Umber", "Octarine", "White", "Black", "Grey", "Lemon", "Viridian", "Ulfire", "Salmon", "Olive", "Rust"];
    const honouredthroughData = ["Dancing", "Flagellation", "Meditation", "Giving Alms", "Fasting", "Sacrifice", "Masquerade", "Martial Arts", "Mutilation", "Chastity", "Psychedelics", "Singing", "Inhaling Smoke", "Ritual Combat", "Poetry", "Intoxication", "Water Ritual", "A Secret Name", "Marathon Race", "Feasting"];

    // Access the table body
    const tableBody = document.querySelector('#godsTable tbody');

    // Remove the row with column names
    tableBody.innerHTML = '';

    // Generate random indices for each column
    const randomIndexDivineAspect = Math.floor(Math.random() * divinesapectData.length);
    const randomIndexSecondaryIconography = Math.floor(Math.random() * secondaryiconographyData.length);
    const randomIndexHolyDomain = Math.floor(Math.random() * holydomainData.length);
    const randomIndexSacredColour = Math.floor(Math.random() * sacredcolourData.length);
    const randomIndexHonouredThrough = Math.floor(Math.random() * honouredthroughData.length);

    // Create a new row with the random entries
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${divinesapectData[randomIndexDivineAspect]}</td>
        <td>${secondaryiconographyData[randomIndexSecondaryIconography]}</td>
        <td>${holydomainData[randomIndexHolyDomain]}</td>
        <td>${sacredcolourData[randomIndexSacredColour]}</td>
        <td>${honouredthroughData[randomIndexHonouredThrough]}</td>
    `;

    // Append the new row to the table
    tableBody.appendChild(newRow);
});