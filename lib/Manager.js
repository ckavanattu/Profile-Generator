class Manager{
    constructor(name, id, email, number){
        this.name = name
        this.id = id
        this.email = email
        this.number = number;
        this.role = 'Manager';
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
    getNumber() {
        return `${this.number}`
    }

}

module.exports = Manager;