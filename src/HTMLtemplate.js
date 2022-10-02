//generate the html for each card
const createTeam = (buildTeamCards) => {
  //generate manager card
  const generateManagerCard = (manager) => {
    return `
        <div class="card m-3">
                        <div class="card-header bg-primary text-white">
                            <h3>${manager.getName()}</h3>
                            <h4 ><i class="bi bi-cup-hot"></i> ${manager.getRole()}</h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: M${manager.getId()}</li>
                                <li class="list-group-item">Email:<a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>
                    `;
  };

  //generate engineer card
  const generateEngineerCard = (engineer) => {
    return `
        <div class="card  m-3">
                        <div class="card-header bg-primary text-white">
                            <h3>${engineer.getName()}</h3>
                            <h4><i class="bi bi-eyeglasses"></i> ${engineer.getRole()}</h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: E${engineer.getId()}</li>
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
        <div class="card  m-3">
                        <div class="card-header bg-primary text-white">
                            <h3>${intern.getName()}</h3>
                            <h4><i class="bi bi-mortarboard"></i> ${intern.getRole()}</h4>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: I${intern.getId()}</li>
                                <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                                <li class="list-group-item">School:${intern.getSchool()}</li>
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
    <title>Team-Roster</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">TEAM ROSTER</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="container-body col-12 d-flex justify-content-center">${createTeam(
                  buildTeamCards
                )}</div>
            </div>
        </div>
</body>
</html>
    `;
};
