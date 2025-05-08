const prompt = require('prompt-sync')();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Customer = require('./models/customer');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI);
console.log("    ");
console.log('welcome to the crm')
mainMenu();

async function mainMenu() {
    while (true) {
      
      console.log(" What would you like to do?");
      console.log("1. Create Customer");
      console.log("2. View Customers");
      console.log("3. Update Customer");
      console.log("4. Delete Customer");
      console.log("5. Quit");
      console.log("    ");
  
      const choice = prompt("Choose an option (1-5): ");
  
      if (choice === '1') {
        const name = prompt("Enter name: ");
        const age = prompt("Enter age: ");
        await createCustomer(name, age);
  
      } else if (choice === '2') {
        await viewCustomers();
        console.log(' ');
  
      } else if (choice === '3') {
        await updateCustomer();
  
      } else if (choice === '4') {
        await deleteCustomer();
  
      } else if (choice === '5') {
        console.log(" Goodbye!");
        mongoose.disconnect();
        break;
  
      } else {
        console.log(" Invalid choice, please select 1–5.");
      }
    }
  }


/*---------------------------------------- functions ------------------------------ */

async function createCustomer(name, age) {
      const customerData = new Customer({ name, age });
      await customerData.save();
      console.log("Customer created successfully.");
      console.log(" ");
}

async function viewCustomers() {
    const customers = await Customer.find();

    customers.forEach((c, index) => {
        console.log(`${index + 1}. Name: ${c.name} | Age: ${c.age}`);
      });
}

  async function updateCustomer() {
    const customers = await Customer.find();

    customers.forEach((c, index) => {
        console.log(`${index + 1}. Name: ${c.name} | Age: ${c.age}`);
    });

    const choice = prompt("Enter the number of the customer to update: ");
    const index = parseInt(choice, 10) - 1;

    const selectedCustomer = customers[index];

    const newName = prompt("Update name: ");
    const newAge = prompt("Update age: ");

    selectedCustomer.name = newName;
    selectedCustomer.age = newAge;

    await selectedCustomer.save();

    console.log(" ");
    console.log("Customer updated:", selectedCustomer);
    console.log(" ");
}

async function deleteCustomer() {
    const customers = await Customer.find();

    customers.forEach((c, index) => {
        console.log(`${index + 1}. Name: ${c.name} | Age: ${c.age}`);
      });

      const choice = prompt("Enter the number of the customer to DELETE: ");
      const index = parseInt(choice, 10) - 1;
  
      const selectedCustomer = customers[index];

      await selectedCustomer.deleteOne();
      console.log(" ");
      console.log("Customer Deleted ");
      console.log(" ");

}