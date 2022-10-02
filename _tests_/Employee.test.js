const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Joshua Aldrich", 1, "joshuaAldrich@email.com");

  expect(employee.getName()).toBe("Joshua Aldrich");
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe("joshuaAldrich@email.com");
});

test('returns "Employee"', () => {
  const employee = new Employee("Joshua Aldrich", 1, "joshuaAldrich@email.com");

  expect(employee.getRole()).toBe("Employee");
});
