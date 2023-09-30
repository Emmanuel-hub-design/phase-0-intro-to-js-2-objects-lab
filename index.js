

const employee = {
    name: "Emmanuel Baraka",
    streetAddress: "123 Westlands"
  };
// Function to update an employee's key with a new value (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  // Function to update an employee's key with a new value (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  // Function to delete a key from an employee object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  // Function to delete a key from an employee object (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }