//Function to generate a manager card
function generateManger(employee) {
  const { name, email, id, office } = employee;
  return `
<div class="card">
    <div class="card-header">
        <h2 class="header-info">${name}</h2>
        <h2 class="role header-info">Manager</h2>
    </div>
    <div class="card-body">
        <p class="card-text">Id: ${id}</p>
        <p class="card-text">Email: <a href="mailto: ${email}">${email}</a></p>
        <p class="card-text">Office Number: ${office}</p>
    </div>
</div>     
`;
}

//function to generate Engineer card
function generateEngineer(employee) {
  const { name, email, id, github } = employee;

  return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="header-info">${name}</h2>
                        <h2 class="role header-info">Engineer</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Id: ${id}</p>
                        <p class="card-text">Email: <a href="mailto: ${email}">${email}</a></p>
                        <p class="card-text">Github: <a href="https://github.com/${github}" target="_blank" rel="noreferrer noopener">${github}</a></p>
                    </div>
                </div>     
    `;
}

//Function to generate Intern card
function generateIntern(employee) {
  const { name, email, id, school } = employee;

  return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="header-info">${name}</h2>
                        <h2 class="role header-info">Intern</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Id: ${id}</p>
                        <p class="card-text">Email: <a href="mailto: ${email}">${email}</a></p>
                        <p class="card-text">School: ${school}</p>
                    </div>
                </div>     
    `;
}

//Figures out which card to use
function generateEmployees(employeeData) {
  let employeeTemplate = "";

  for (let i = 0; i < employeeData.length; i++) {
    if (employeeData[i].getRole() == "Manager") {
      employeeTemplate += generateManager(employeeData[i]);
    } else if (employeeData[i].getRole() == "Engineer") {
      employeeTemplate += generateEngineer(employeeData[i]);
    } else if (employeeData[i].getRole() == "Intern") {
      employeeTemplate += generateIntern(employeeData[i]);
    }
  }

  return employeeTemplate;
}

//Function to generate HTML of page
function generateHTML(employeeData) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <header>
            <h1>My team</h1>
        </header>
        <main>
            <div class="card-container">
                ${generateEmployees(employeeData)}
            </div>
        </main>
    </body>
    `;
}

module.exports = { generateHTML };
