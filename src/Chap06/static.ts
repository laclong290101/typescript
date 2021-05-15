class Department {
    static id: string;
    private name: string;
    constructor(id: string, name: string) {
        Department.id = id;
        this.name = name;
    }
    static describe(name: string) {
        console.log(`Department (${Department.id} : ${this.name})`);
    }
}
Department.id = 'd1';
Department.describe('Max');