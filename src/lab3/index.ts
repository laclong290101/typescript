class Lab_3 {
    render() {
        const hobbies = ['Sport', 'Cooking'];
        console.log(`Mảng Ban Đầu : ${hobbies}`);
        const activehobbies = ['Hiking'];
        console.log(`Mảng Active ban đầu : ${activehobbies}`);
        // activehobbies.push(hobbies);
        activehobbies.push(hobbies[0], hobbies[1]);
        console.log(`Mảng Active push 2 phần tử : ${activehobbies}`);
        activehobbies.push(...hobbies);
        console.log(`Mảng active push thêm mảng Hobbies :${activehobbies}`);
    }
    render2() {
        let sum = (x: number = 5, y?: number) => { return x + <number>y; }
        let speech = (output: any): void => {
            console.log("Result:" + output);
        }
        speech(sum(5, 12));
        console.log(speech(sum(8, 5)));



        let something: void = undefined;
        // let nothing: never = null;
        function throwError(errorMsg: string): never {
            throw new Error(errorMsg);
        }



        function AddandHandle(x: number, y: number, cb: (num: number) => void) {
            const result = x + y;
            cb(result);
        }
        AddandHandle(10, 20, (result) => { console.log(result); })
        return `abc`
    }
}
export default Lab_3;