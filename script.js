// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Function to collect employee data
const collectEmployees = function() {
  const employees = [];
  let addEmployee = true;
  // Loop until the user chooses to stop adding employees
  while (addEmployee) {
    const firstName = prompt('Enter employee first name:');
    const lastName = prompt('Enter employee last name:');
    // Prompt the user for the employee's salary and convert it to a number
    const salary = parseFloat(prompt('Enter employee salary:'));
    // Add the new employee object to the employees array
    employees.push({firstName, lastName, salary});
    addEmployee = confirm('Would you like to add another employee?');
  }

  // Return the array of employee objects
  return employees;
}

// Display the average salary
// This function calculates and displays the average salary of employees
const displayAverageSalary = function(employeesArray) {
  // Initialize total salary to 0
  let total = 0;

  // Loop through each employee in the array and add their salary to the total
  for (let i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary;
  }

  // Calculate the average salary
  const average = total / employeesArray.length;

  // Log the average salary, formatted as a currency string in US locale
  console.log('Average Salary: $' + average.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  }));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  console.log('Congratulations to ' + employeesArray[randomIndex].firstName + ' ' + employeesArray[randomIndex].lastName + ', our random drawing winner!');
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
