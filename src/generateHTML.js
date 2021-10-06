const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateHTML(team) {
    const manager = new Manager(team.name[0], team.id[0], team.email[0], team.officeNumber);

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="team">
                <section class="card">
                    <header>
                        <h2>${manager.getName()}</h2>
                        <p><i class="fas fa-user-tie"></i> ${manager.getRole()}</p>
                    </header>
                    <div class="card-body">
                     <p>ID: ${manager.getId()}</p>
                     <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                     <p>Office number: ${manager.getOfficeNumber()}</p>   
                    </div> 
                </section>  
            </div>
        </main>
        
    </body>
    </html>`;
}
module.exports = generateHTML;