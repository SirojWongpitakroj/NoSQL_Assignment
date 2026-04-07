# Recipe Management Website 🍽️

Welcome to the Recipe Management Website! This is a full-stack, NoSQL-powered web application built using Node.js, Express, and MongoDB. It allows users to easily keep track of their favorite recipes, organize ingredients, and instantly search through their culinary library.

## Features ✨
* **Dashboard Overview:** View all your recipes at a glance in a responsive, beautifully styled table dashboard.
* **Instant Search:** Find specific recipes instantly by searching for the recipe title.
* **Create & Edit:** Smooth dynamic forms allowing you to add unlimited ingredients, steps, and equipment to each recipe utilizing interactive UI inputs.
* **Delete & Manage:** Manage your database with 1-click delete actions cleanly integrated into the dashboard.

## Tech Stack 🛠️
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose v9
* **Frontend:** EJS (Embedded JavaScript templates), Vanilla CSS, Vanilla JavaScript

## Getting Started 🚀

Follow these instructions to get the project up and running smoothly on your local machine.

### Prerequisites
1. You must have **Node.js** installed on your system.
2. You must have **MongoDB** installed and running locally on your default port (`27017`).
   * **⚠️ IMPORTANT INSTRUCTOR NOTE:** You must manually create the MongoDB database named exactly `recipe` that contains a collection named `recipes` for this application to work correctly!

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/SirojWongpitakroj/NoSQL_Assignment.git
   ```

2. Navigate into the project folder using your terminal:
   ```bash
   cd NoSQL_Assignment
   ```

3. Install all the necessary server dependencies:
   ```bash
   npm install
   ```

4. Setup your Environment Variables:
   Create a new file named `.env` in the absolute root of the project folder and paste the following inside it:
   ```env
   PORT=3000
   MONGODB_URI='mongodb://localhost:27017/recipe'
   ```

5. Start the Application!
   To start the application in development mode (which automatically restarts if you modify files):
   ```bash
   npm run dev
   ```
   *(Alternatively, you can just use `npm start`)*

6. Visit the Website
   Open your browser and navigate to:
   **[http://localhost:3000](http://localhost:3000)**

---
*Happy Cooking!*
