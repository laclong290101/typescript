class Department {
    private readonly id: string;
    private name: string;
    protected employees: string[] = [];
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
    describe(this: Department) {
        console.log(`Department (${this.id}: ${this.name})`);
    }
    addEmployee(employees: string) {
        this.employees.push(employees);
        console.log(employees);
    }
}

export default Department