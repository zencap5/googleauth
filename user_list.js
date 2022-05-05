// Create a variable for the API endpoint. In this example, we're accessing Xano's API
let xanoUrl = new URL('https://x8ki-letl-twmt.n7.xano.io/api:JRRhHmvr/');

// Define a function (set of operations) to get users information.
// This will use the GET request on the URL endpoint
function getUser() {

    // Create a request variable and assign a new XMLHttpRequest object to it.
    // XMLHttpRequest is the standard way you access an API in plain Javascript.
    let request = new XMLHttpRequest();

    // Define a function (set of operations) to get restaurant information.
    // Creates a variable that will take the URL from above and makes sure it displays as a string. 
    // We then add the word 'user" so the API endpoint becomes https://x715-fe9c-6426.n7.xano.io/api:Iw1iInWB/XYZ
    let url = xanoUrl.toString() + 'user';
    // Remember the 'request' was defined above as the standard way to access an API in Javascript.
    // GET is the verb we're using to GET data from Xano
    request.open('GET', url, true)

    // When the 'request' or API request loads, do the following...
    request.onload = function() {

        // Store what we get back from the Xano API as a variable called 'data' and converts it to a javascript object
        let data = JSON.parse(this.response)

        // Status 200 = Success. Status 400 = Problem.  This says if it's successful and no problems, then execute 
        if (request.status >= 200 && request.status < 400) {

            // Map a variable called cardContainer to the Webflow element called "Users-Container"
            const cardContainer = document.getElementById("Users-Container")

            // This is called a For Loop. This goes through each object being passed back from the Xano API and does something.
            // Specifically, it says "For every element in Data (response from API), call each individual item restaurant"
            data.forEach(user => {

                // For each user, create a div called card
                const style = document.getElementById('user_block')
                // Copy the card and it's style
                const card = style.cloneNode(true)

                card.setAttribute('id', '');
                card.style.display = 'block';

                // Get user name
                const h3 = card.getElementsByTagName('H3')[0]
                h3.textContent = user.name;

                // Get user email
                const email = card.getElementsByClassName('email')[0]
                email.textContent = user.email;

                // Place the card into the div "Users-Container" 
                cardContainer.appendChild(card);
            })
        }
    }
    // Send Restaurant request to API
    request.send();
}

// This fires all of the defined functions when the document is "ready" or loaded
(function() {
    getUser();
})();
