const inquirer = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/HTMLtemplate");

//import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Store the objects in the team
const myTeam = [];

function start() {
  console.log("Welcome to Team-Builder");
  function createManager() {
    //prompts for the manager
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerTitle",
          message: "What is your manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter your manager's name.";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is your manager's ID?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter your manager's ID";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your manager's e-mail?",
          validate: (managerEmail) => {
            if (managerEmail) {
              return true;
            }
            return "Please enter your manager's e-mail";
          },
        },
        {
          type: "input",
          name: "managerOffice",
          message: "What is your manager's office number?",
          validate: (managerEmail) => {
            if (managerEmail) {
              return true;
            }
            return "Please enter your manager's office number";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOffice
        );
        myTeam.push(manager);
        choiceTeam();
      });
  }

  function choiceTeam() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which member would you like to add to the team?",
          choices: ["Engineer", "Intern", "Finish Team-Builder"],
        },
      ])
      .then((userSelection) => {
        switch (userSelection.memberChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createInter();
            break;
          default:
            buildTeam();
        }
      });
  }

  function createEngineer() {
    console.log(`
================================
         ADD AN ENGINEER
================================`);
    return inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Provide your engineer's name",
          validate: (engineerName) => {
            if (engineerName) {
              return true;
            }
            return "Provide your engineer's name";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "Provide your engineer's ID",
          validate: (engineerName) => {
            if (engineerName) {
              return true;
            }
            return "This is not a correct ID, please try again.";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Provide your engineer's e-mail address",
          validate: (engineerEmail) => {
            if (engineerEmail) {
              return true;
            }
            return "Provide a valid e-mail address";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Provide your engineer's Github username",
          validate: (engineerGithub) => {
            if (engineerGithub) {
              return true;
            }
            return "Provide a valid Github username for your engineer";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        myTeam.push(engineer);
        choiceTeam();
      });
  }

  function createInter() {
    console.log(`
        ================================
                 ADD AN INTERN
        ================================`);
    return inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Please provide your intern's name",
          validate: (internName) => {
            if (internName) {
              return true;
            }
            return "Provide a name for your intern";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "Provide an intern ID",
          validate: (internName) => {
            if (internName) {
              return true;
            }
            return "Provide a valid ID for your intern";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "Please provide your intern's e-mail address",
          validate: (internEmail) => {
            if (internEmail) {
              return true;
            }
            return "Provide a valid e-mail address for your intern";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Provide the school your intern is attending",
          validate: (internSchool) => {
            if (internSchool) {
              return true;
            }
            return "Provide a valid school name for your intern";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        myTeam.push(intern);
        choiceTeam();
      });
  }

  function buildTeam() {
    fs.writeFileSync("./dist/index.html", pageTemplate(myTeam), (err) => {
      if (err) throw err;
      console.log(
        "The Team-Builder has been created, you can find it in the dist folder."
      );
    });
  }

  createManager();
}

//launch the app
start();
