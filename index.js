const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template.js');

//team members
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern.js');


teamMembers = [];

// Get Information For Manager
const startProfile = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "Please provide the managers name"
        },
        {
            type:'input',
            name: 'id',
            message: "Please provide managers employee ID"
        },
        {
            type:'input',
            name: 'email',
            message: "Please provide managers email"
        },
        {
            type:'input',
            name: 'number',
            message: "Please provide managers nnumber"
        }
    ])
    .then(({ name, id, email, number}) => {
        const manager = new Manager(name, id, email, number);
        teamMembers.push(manager);
        
        //add another employee?
        nextEmployee(); 
    });
}



//add new employee
const addEmployee = ()=> {
    console.log(`
    Please Provide Employee Information
    `);

    inquirer.prompt([    
        {
            type:'input',
            name: 'name',
            message: "Please Provide Employee Name"
        },
        {
            type:'input',
            name: 'id',
            message: "Please Provide Employee ID"
        },
        {
            type:'input',
            name: 'email',
            message: "Please provide Employee Email"
        },
        {
            type: 'list',
            name: 'role',
            message: "Please Confirm Employee Job Role",
            choices: ['Engineer', 'Intern']
        }
    ]).then(({ name, id, email, role }) => { //DIFFERENT QUESTIONS IF THEY ARE ENGINEER OR INTERN
        let addedQuestion = "";
        if (role === 'Engineer'){
            addedQuestion = "Github Username";
        } else {
            addedQuestion = "School Name";
        }

        inquirer.prompt(
            {
                type:'input',
                name: 'addedQuestion',
                message: `What is the employee's ${addedQuestion}?`
            }
        ).then(({ addedQuestion}) => {
            let employee;
            if (role === 'Engineer'){
                employee = new Engineer(name, id, email, addedQuestion);
            } else {
                employee = new Intern(name, id, email, addedQuestion);
            }

            teamMembers.push(employee);

            nextEmployee(); 

        })
    })

}   

//Are there more employees?
const nextEmployee = () => {
    inquirer.prompt({
        type: 'list',
        name: 'anotherEmployee',
        message: 'Would you like to add another employee?',
        choices: ['Yes', 'No']
    }).then(({ anotherEmployee }) => {

        
        if (anotherEmployee ==='Yes'){
            addEmployee();
        } else{

            // Generate the page
            console.log(teamMembers);
            generatePage(teamMembers);
        }
    })
}


startProfile()
