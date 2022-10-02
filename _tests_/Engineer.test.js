const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Joshua Aldrich",
    "1",
    "joshuaAldrich@email.com"
  );

  expect(engineer.getName()).toBe("Joshua Aldrich");
  expect(engineer.getId()).toBe("1");
  expect(engineer.getEmail()).toBe("joshuaAldrich@email.com");
});

test("get Engineer GitHub", () => {
  const engineer = new Engineer(
    "Joshua Aldrich",
    "1",
    "joshuaAldrich@email.com",
    "JoshuaAldrich"
  );

  expect(engineer.getGithub()).toBe("JoshuaAldrich");
});

test('returns "Engineer"', () => {
  const engineer = new Engineer(
    "Joshua Aldrich",
    "1",
    "joshuaAldrich@email.com"
  );

  expect(engineer.getRole()).toBe("Engineer");
});
