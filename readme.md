
# Inventory Management System

This project is a tool to manage your inventory efficiently. It is build for a logistic domain firm. It allows you to do CRUD operations to your database. And apart from this you can also download a CSV file of your orders.

## Stack Used:

- ### Frontend:

  - **[EJS](https://ejs.co/)** (Embedded JavaScript)
    #### Why EJS?
    EJS is simple yet light weight tool to display dynamic data on webpages. It provides features of both HTML and JavaScript and hence is significantly powerful as well.


- ### Backend:
  - **[NodeJs](https://nodejs.org/en/)** (Runtime environment for JS)
    
    **Why NodeJS?**
    Node is famous for its high scalability, robustness and non-blocking behavior. It has a super powerful support of NPM aka node package manager.
    
  - **[Express](https://expressjs.com/)** (Setting up Server and Routes)
    
    **Why Express?**
    Express is a JavaScript Framework it makes setting up servers, routing very smooth and easy. It is scalable, has strong community support and supported by Google's v8 engine.

  - **[MongoDB ATLAS](https://www.mongodb.com/atlas/database)** (Databases)

    **Why MongoDB?**
    MongoDB is very flexible to work with and provides NoSQL database features. It has high scalability ,easy to program and understand. It is an open-source and is cheaper to use and maintain. It has excellent performance and availability.

## Pre-Requisites

- NodeJs
- MongoDB ATLAS / MongoDB

## Installation

- Dowload/Fork the repo.
- Extract it on your local machine.
- Run these command in the project directory to install the required modules.

```bash
npm install
```

- Run this command to start the project

```bash
npm start
```

- Open any browser and got to loaclhost:3000/orders

## Functioning

- The project begins with listing all the orders. Each order is associated with a Supplier , Receiver, Items/Goods to be deleivered, block Number (In which block is the order placed in the inventory. 
- It is calculated on the basis of destination address of the order ) , Category (Based upon the item size and weight category defines how does the good needs to transported ie. by Bike/Car/Mini-Truck/Truck).
- CREATE: Click on the Add button to add a new orde. Fill in the details of the order in the form and submit.
- READ: The order route displays all the orders on the database by default.
- UPDATE: Click on the edit button of the order you want to update , make changes and submit.
- DELETE: Click on the delete button of the order you want to delete.
- EXPORT: Click the download button on the order route to download CSV file of your orders.

## Future Contingency

- Directly selecting an existing user(Supplier/Receiver) rather than filling all details of an existing user(Supplier/Receiver).
- Searching/Sorting on various fields like based on destination pincode, supplier, category and even mixed combinations of these criteria.
- Adding multiple items to a single order.
