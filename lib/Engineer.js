class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email=email;
        this.github = github;
        this.role = 'Engineer';
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


    Github(){
        return `${this.github}`;
    }
}

module.exports = Engineer;