//generate the html for each card
const createTeam = (buildTeamCards) => {
  //generate manager card
  const generateManagerCard = (manager) => {
    return `
        <div class="card m-3">
                        <div class="card-header bg-primary text-white">
                            <h2>${manager.getName()}</h2>
                            <h3><i class="bi bi-laptop"></i> ${manager.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Manager ID: ${manager.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
                    `;
  };

  //generate engineer card
  const generateEngineerCard = (engineer) => {
    return `
        <div class="card m-3">
                        <div class="card-header bg-primary text-white">
                            <h2>${engineer.getName()}</h2>
                            <h3><i class="bi bi-building"></i> ${engineer.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Engineer ID: ${engineer.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                                <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>
        `;
  };

  //generate Intern card
  const generateInternCard = (intern) => {
    return `
        <div class="card m-3">
                        <div class="card-header bg-primary text-white">
                            <h2>${intern.getName()}</h2>
                            <h3><i class="bi bi-book"></i> ${intern.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">Intern ID: ${intern.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                                <li class="list-group-item">Attending: ${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>
                    `;
  };

  const htmlCards = [];

  htmlCards.push(
    buildTeamCards
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManagerCard(manager))
      .join("")
  );
  htmlCards.push(
    buildTeamCards
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineerCard(engineer))
      .join("")
  );
  htmlCards.push(
    buildTeamCards
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateInternCard(intern))
      .join("")
  );

  return htmlCards.join("");
};

module.exports = (buildTeamCards) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/dist/style.css">
    <title>Team-Builder</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-4">
                <h1 class="text-center">Team-Builder</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="container-body d-flex col-12  justify-content-center">${createTeam(
                  buildTeamCards
                )}</div>
            </div>
        </div>
</body>
</html>
    `;
};
