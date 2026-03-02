/* URL */
const API_URL = 'https://jsonplaceholder.typicode.com';

const HTML_response = document.querySelector('#app');


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const tlp = users.map((user) => 
            `
        <li>${user.name}</li>
        <li>${user.email}</li>
            `);
        HTML_response.innerHTML = `<ul>${tlp}</ul>`;
    });