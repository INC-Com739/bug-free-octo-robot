# bug-free-octo-robot

In this assignment, students will build a Pokémon Searcher that allows users to look up Pokémon by entering a name or ID. The application will fetch data from the PokéAPI and display relevant details such as the Pokémon’s name, ID, weight, height, types, and image inside a Bootstrap card.

Students will implement a search bar with a button, handle API requests using Axios and async/await, and dynamically update the UI using JavaScript DOM manipulation.

Example: Pokemon Finder

Requirements
1. Search Bar & Button
A text input field where users can enter a Pokémon name or ID.
A search button that triggers the API request when clicked.
2. API Call to PokéAPI
The application must make an API request to:
https://pokeapi.co/api/v2/pokemon/{name_or_id}
If the Pokémon is found, display the following information:
Name
ID
Weight
Height
Types (e.g., Water, Fire, Grass, etc.)
Image (official artwork from the API response)
3. Bootstrap Card for Displaying Pokémon Data
The retrieved Pokémon data must be displayed inside a Bootstrap card.
The card should include the Pokémon image, name, ID, height, weight, and types.
