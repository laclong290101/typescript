

// import Chap03 from './Chap03/index';
// import lab3 from './lab3/index';

import Product from "../chap07";
import Department from "./Chap06";
import AccountingDepartment from "./Chap06/clone";
import Person from "./Chap06/interface";
import Tuong from "./Chap06/Tuong";
import Tuongphep from "./Chap06/tuongphep";
import Lab_2 from "./lab2/index";
import Lab_3 from "./lab3/index";
import Lab_4 from "./lab4/index";

// const thucHanh = new Chap03;
// const Lab3 = new lab3;
// // thucHanh.shuffle();
// Lab3.bai2();

// const Qi = new Tuong("Qi", "Hao Thien Truong", " Banh bao");
// Qi.ShowInfo();

// const Tulen = new Tuongphep("Tulen", "Loi Quang", "Tren troi", 1000, 300, "sleep");
// Tulen.ShowInfo();

// const department = new Department("122", "hai");
// department.addEmployee("Max");

// const accountingDepartment = new AccountingDepartment('122', 'abc')
// accountingDepartment.describe();

// const person = new Person('Max');
// person.greet;
// const iphone = new Product<string, string, string>('a', 'b', 'c');
// const samsung = new Product<string, number, number>('a', 1, 2);
// console.log(iphone.showInfo());

const lab2 = new Lab_2;
const lab3 = new Lab_3;
const lab4 = new Lab_4;
lab2.render3();
lab2.render();
lab2.render2();
lab3.render();
