# react-exam-august-2024

## 1. Overview
This project is a single page application built with React and Vite. This project also used Tailwind CSS and Google maps. The project is for an online platform called "The Sport Shop" where users can post their products and receive feedback as comments from other users.

## 2. Project Architecture
    The project is organized in a functionality-oriented architecture. Below is an overview of the main directories and files:

    /client - main client folder
        /public - include 'images' and 'styles' folders, which are used for the visual effects of the application.

        /src - source code folder responsible for the functionality of the application.
            /api - contains files, which are coresponding with the server using 'GET', 'POST', 'PUT', 'DELETE' requests.

            /components - contains reusable UI components, which are responsible for different pieces of UI and can be easily managed.

            /contexts - contains only one file, which is used to manage and share authentication state across the entire application,

            /hooks - contains custom hooks which are used like midlewares and help the process between the client and the server.

            /utils - contains authUtils.js file only, which responsibility is to return the access token of registered or logged in user

            App.jsx - the root component, which is responsible for setting up the application's routing, including context providers, and defining 
            
            the layout structure.

            main.jsx - the entry point of the app, which is responsible for rendering of the root component into the HTML DOM.

    /server - include SoftUni practice server file only.

## 3. installation
    1 Clone the repository:
        git clone https://github.com/nikolayvnenchev/react-exam-august-2024

    2. Install dependencies:
        2.1. npm install

        2.2. if needed:
            npm i vite
        

## 4. Usage

    1. Start the development server in new terminal:
        1.1. Go to 
            cd .\server\  or cd server

        1.2 Run the server with:
            node .\server.js or node server.js

        1.3 Open your browser and navigate to `http://localhost:3030/admin`.

    2. Start the client  in new terminal:
        1.1. Go to 
            cd .\client\  or cd client

        1.2 Run the server with:
            npm run dev

        1.3 Open your browser and navigate to `http://localhost:5173`.
