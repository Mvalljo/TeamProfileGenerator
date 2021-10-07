const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

//Adds engineer information to html
function engineerCard(team) {
    const g = team.github;
    let engInfo="";
    if (g) {
        //Is going through the engineers information and putting in the appropriate place of the html
        for (let i = 0; i < g.length; i++) {
            const engineer = new Engineer(team.name[i+1], team.id[i+1], team.email[i+1], g[i]);
            let info = `<section class="card">
        <header>
            <h2>${engineer.getName()}</h2>
            <p><i class="fas fa-cogs"></i> ${engineer.getRole()}</p>
        </header>
        <div class="card-body">
         <p>ID: ${engineer.getId()}</p>
         <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
         <p>Github: <a href="http://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>   
        </div> 
    </section>`;
            engInfo += info;
        }
        return engInfo;
    }
}

//Adds intern information to html
function internCard(team) {
    //Getting the arrays to check the length of them so the information starts in the right place
    const s = team.school;
    const g = team.github;
    let intInfo="";
    if (g) {
        //Is going through the interns information and putting in the appropriate place of the html
        for (let i = g.length; i < ((s.length + g.length)-1); i++) {
            const intern = new Intern(team.name[i+1], team.id[i+1], team.email[i+1], s[i-1]);
            let info = `<section class="card">
        <header>
            <h2>${intern.getName()}</h2>
            <p><i class="fas fa-user-graduate"></i> ${intern.getRole()}</p>
        </header>
        <div class="card-body">
         <p>ID: ${intern.getId()}</p>
         <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
         <p>School: ${intern.getSchool()}</p>   
        </div> 
    </section>`;
            intInfo += info;
        }
        return intInfo;
    }
}

//Gather all information given to create hmtl file
function generateHTML(team) {
    // gets the managers information and puts it in the appropriate place of the html
    const manager = new Manager(team.name[0], team.id[0], team.email[0], team.officeNumber);
    
    const htmlDoc = `<!DOCTYPE html>
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
                ${engineerCard(team)} 
                ${internCard(team)} 
            </div>
        </main>
        
    </body>
    </html>`;
    return htmlDoc;
}
module.exports = generateHTML;