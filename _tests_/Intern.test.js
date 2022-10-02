const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern(
    "Joshua Aldrich",
    "1",
    "joshuaAldrich@email.com",
    "TrinityU"
  );

  expect(intern.getName()).toBe("Joshua Aldrich");
  expect(intern.getId()).toBe("1");
  expect(intern.getEmail()).toBe("joshuaAldrich@email.com");
});

test("return school variable", () => {
  const intern = new Intern(
    "Joshua Aldrich",
    "1",
    "joshuaAldrich@email.com",
    "TrinityU"
  );

  expect(intern.getSchool()).toBe("TrinityU");
});

test('returns "Intern"', () => {
  const intern = new Intern(
    "Joshua Aldrich",
    "1",
    "joshuaAldrich@email.com",
    "TrinityU"
  );

  expect(intern.getRole()).toBe("Intern");
});
