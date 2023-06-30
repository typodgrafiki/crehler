# Crehler - zadanie-rekrutacyjne

This project was created as part of a recruitment task for Crehler. It is built using Vue 3 and Vite. The project aims to retrieve data from an API and display a list of products along with their prices and the selected currency. It also provides the functionality to sort the products by price, from the most expensive to the cheapest, as well as a search feature to find products available in the list.

## Installation
To install and run the project locally, please follow these steps:

1. Clone the repository to your local machine:
```sh
git clone https://github.com/typodgrafiki/crehler-zadanie-rekrutacyjne.git
```

2. Navigate to the project directory:
```sh
cd crehler-zadanie-rekrutacyjne
```

3. Install the dependencies using npm or yarn:
```sh
npm install
```

## Development
To start the development server, use the following command
```sh
npm run dev
```
This will launch the project in development mode. Open your browser and visit http://localhost:5173 to view the application.

## Build
To build the project for production, use the following command:
```sh
npm run build
```
The production-ready files will be generated in the **dist** directory.

## Project Structure
The main files and directories in this project are structured as follows:
```sh
├── public
│   ├── ifavicon.ico
├── src
│   ├── assets
│   │   ├── loading.svg
│   │   ├── main.css
│   ├── components
│   │   ├── LogoTop.vue
│   │   ├── NavbarTop.vue
│   │   ├── ProductCard.vue
│   │   ├── ProductList.vue
│   │   ├── SearchList.vue
│   │   ├── SortTop.vue
│   ├── init
│   │   ├── api.js
│   ├── store
│   │   ├── state.js
│   ├── App.vue
│   ├── main.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
```

- **public**: Contains image files.
- **src**: Contains the main source code of the project.
    - **assets**: Files of used images and global css styles.
    - **components**: Contains Vue components used in the application.
    - **init**: Contains the file responsible for connecting to the api.
    - **store**: Contains the file that stores the state of search parameters
    - **index.html**: Serves as an entry point for the application.
    - **App.vue**: The root Vue component that initializes the application.
    - **main.js**: The entry point for the Vue application.
    
Feel free to explore and modify these files to customize the project according to your needs.

## API Integration
This project fetches data from an API to retrieve the product information. 

## Feedback and Contributions
If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the project repository. Your feedback and contributions are highly appreciated!
Thank you for your interest in this project.
