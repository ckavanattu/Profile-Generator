class Manager{
    constructor(name, id, email, number){
        this.name = name
        this.id = id
        this.email = email
        this.number = number;
        this.role = 'Manager';
    }
    
    getRole() {
        return `${this.role}`
    }

}

module.exports = Manager;