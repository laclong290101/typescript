import Department from './index'

class AccountingDepartment extends Department {
    constructor(id: string, private report: string) {
        super(id, 'Accounting');
    }
    addEmployee(name: string) {
        if (name === "Max") {
            return;

        }
        this.employees.push(name);
        console.log(name);

    }
}
export default AccountingDepartment

