
class Intern{
    constructor(name, id, email, school){
        this.name = name;
        this.id= id;
        this.email= email;
        this.school = school;
        this.role = 'Intern';
    }
    
    getRole() {
        return `${this.role}`
    }
};

module.exports = Intern;