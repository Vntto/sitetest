const tbody = document.querySelector('main tbody');
const form = document.querySelector('form');
const firstNameInput = document.querySelector('#first-name-input');
const lastNameInput = document.querySelector('#last-name-input');
const ageInput = document.querySelector('#age-input');
const addButton = document.querySelector('#add-button');
const removeButton = document.querySelector('#remove-button');

let entries = [];

function addEntry(firstName, lastName, age) {
    const newRow = tbody.insertRow();

    entries.push({ n: entries.length, firstName, lastName, age });

    newRow.dataset.n = entries.length;

    const firstNameCell = newRow.insertCell();
    const lastNameCell = newRow.insertCell();
    const ageCell = newRow.insertCell();

    firstNameCell.innerHTML = firstName;
    lastNameCell.innerHTML = lastName;
    ageCell.innerHTML = age;
}

function removeEntry(firstName, lastName, age) {
    const toRemove = entries.filter(entry => {
        const nFirstName = firstName || entry.firstName;
        const nLastName = lastName || entry.lastName;
        const nAge = age || entry.age;

        return entry.firstName === nFirstName && entry.lastName === nLastName && entry.age === nAge;
    });

    for (const element of toRemove.sort((a, b) => b.n - a.n)) {
        tbody.deleteRow(element.n);
        entries.splice(element.n, 1);
    }

    entries = entries.map((entry, i) => {
        return { ...entry, n: i };
    });

    console.log(entries);
}

addButton.addEventListener('click', () => {
    if (firstNameInput.value && lastNameInput.value && ageInput.value) {
        addEntry(firstNameInput.value, lastNameInput.value, ageInput.value);
        form.reset();
    }
});

removeButton.addEventListener('click', () => {
    removeEntry(firstNameInput.value, lastNameInput.value, ageInput.value);
});

form.addEventListener('submit', e => e.preventDefault());
