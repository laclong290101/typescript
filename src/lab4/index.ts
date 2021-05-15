class Lab_4 {
    render1() {
        interface AddFn {
            (a: number, b: number): number;
        }
        let add: AddFn;

        add = (n1: number, n2: number) => {
            return n1 + n2
        };
    }
    render2() {
        interface Named {
            readonly name: string;
        }
        interface Greetable extends Named {
            greet(pharase: string): void;
        }
        class Person implements Greetable {
            name: string;
            age: 30;
            constructor(n: string) {
                this.name = n;
            }
            greet(pharase: string) {
                console.log(`${pharase} ${this.name}`);
            }
        }
        let user1: Greetable;
        user1 = new Person('Max');
        user1.greet('Hi there  - I am');
        console.log(user1);
    }
    render3() {
        abstract class Department {
            static fiscalYear = 2020;
            protected employees: string[] = [];
            constructor(protected readonly id: string, public name: string) {

            }
            static createEmployee(name: string) {
                return { name: name };
            }
            abstract describe(this: Department): void;
            addEmployee(employee: string) {
                this.employees.push(employee)
            }
            printEmployeeInformation() {
                console.log(this.employees.length);
                console.log(this.employees);
            }
        }
        class ITDepartment extends Department {
            admins: string[];
            constructor(id: string, admins: string[]) {
                super(id, 'IT');
                this.admins = admins;
            }
            describe() {
                console.log('IT Department - ID: ' + this.id);
            }
        }
        const employee1 = Department.createEmployee('Max');
        console.log(employee1, Department.fiscalYear);
        const it = new ITDepartment('d1', ['Max']);
        it.addEmployee('Max');
        it.addEmployee('Manu');
    }
}
export default Lab_4;