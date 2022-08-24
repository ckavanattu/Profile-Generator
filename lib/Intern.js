
class Intern{
    constructor(name, id, email, school){
        this.name = name;
        this.id= id;
        this.email= email;
        this.school = school;
        this.role = 'Intern';
    }
    
    getName(){
        return `${this.name}`;
    }

    getEmail(){
        return `${this.email}`;
    }

    getId(){
        return `${this.id}`;
    }


    getSchool(){
        return `${this.school}`;
    }
};

module.exports = Intern;