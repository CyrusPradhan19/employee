import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
    employees = [
        { id: 1, name: 'abc', dept: 'CSE'},
        { id: 2, name: 'def', dept: 'Mech'},
        { id: 3, name: 'xyz', dept: 'Civil'}
    ]  
    
    getEmployees() {
        return this.employees;
    }

    emp = {
        id: 1,
        name: 'x',
        dept: 'Maths'   
    }
    setEmployees() {
        this.employees.push(this.emp)
    }
}