// class Chap03 {
//     bai1_1() {
//         let number1: number = 5;
//         let number2: number = 2.8;
//         let phrase: string = "Result is";
//         let permit: boolean = true;
//         const result = number1 + number2;
//         if (permit) {
//             console.log(phrase + result);
//         } else {
//             console.log('Not show reault');
//         }
//     };
//     bai1_2() {
//         function add(x = 5) {
//             let phrase = " Result is";
//             // phrase = 10;
//             // x = '2.8';
//             return phrase + x;

//         }
//         // let result: number = add();
//     }
//     bai1_3() {
//         var person: {
//             name: string,
//             age: number
//         }
//         person = {
//             name: "Typescipt",
//             age: 11
//         }
//         console.log(person.name);
//     }
//     // bai4_1() {
//     //     enum Role { ADMIN, READ_ONLY, AUTHOR };
//     //     const person: {
//     //         name: string,
//     //         age: number,
//     //         hobbies: string[],
//     //         role: string,
//     //         roletuple: [number, string]
//     //     } = {
//     //         name: 'Typescipt',
//     //         age: 11,
//     //         hobbies: ['Sports', 'Cooking'],
//     //         role: Role.ADMIN,
//     //         roletuple: [2, 'author']
//     //     }
//     //     let favouriteActivites: any[];
//     //     favouriteActivites = [5, 'Sport', true];
//     //     if (person.role === Role.AUTHOR) {
//     //         console.log('is author');
//     //     }
//     //     person.roletuple.push('admin');
//     //     person.roletuple[1] = 10;
//     //     person.roletuple = [0, 'admin', 'user'];
//     // }
    
//     async shuffle() {
//         const pokemons: number = 20;
//         interface PokemonInterface {
//             id: number;
//             name: string;
//             image: string;
//         }
//         let arrPokemons: PokemonInterface[] = [];
//         for (let i = 9; i < pokemons; i++) {
//             let data: any = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//             let pokemon: any = await data.json()
//             arrPokemons = [...arrPokemons, { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.back_default }]
//         }
//         return arrPokemons;

//     }

// }
// export default Chap03;

// // // khai báo biến
// // const Name: string = " Nguyen Truong Hai";
// // const status: boolean = true;
// // const price: number = 2031;
// // const desc: string = "nope";

// // //khai báo mảng 
// // const nums: number[] = [1, 2, 3, 3];
// // const strings: string[] = ["Nguyen", "Truong", "Hai"]

// // //interface : khai báo kiểu dữ liệu
// // interface Product {
// //     id: number,
// //     name: string
// // }

// // const products = [
// //     {
// //         id: 1,
// //         name: "Hai"
// //     },
// //     {
// //         id: 2,
// //         name: "Nguyen"
// //     }
// // ]
// // const showObj = (products: Product[]) => { // sử dụng interface
// //     products.forEach(product => console.log(product.name))
// // }

// // showObj(products);