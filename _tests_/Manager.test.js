const Manager = require("../lib/Manager");

test("creates an Manager object", () => {
  const manager = new Manager("Joshua Aldrich", "1", "joshuaAldrich@email.com");

  expect(manager.getName()).toBe("Joshua Aldrich");
  expect(manager.getId()).toBe("1");
  expect(manager.getEmail()).toBe("joshuaAldrich@email.com");
});

test('returns "Manager"', () => {
  const manager = new Manager("Joshua Aldrich", "1", "joshuaAldrich@email.com");

  expect(manager.getRole()).toBe("Manager");
});
