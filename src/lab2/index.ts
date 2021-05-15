class Lab_2 {
    render() {
        let number1: number = 5;
        let number2: number = 2.8;
        let phrase: string = 'Result is';
        let permit: boolean = true;
        const result = number1 + number2;
        if (permit) {
            console.log(phrase + result);
        } else {
            console.log("Not show Result");
        }
    }
    render2() {
        var person: {
            name: string,
            age: number
        }
        person = {
            name: "Typescript",
            age: 11
        }
        console.log(person.name);
    }
    render3() {
        type pkm = {
            id: number,
            name: string,
            image: string,
            ulr: string
        }
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then((data) => {
                const { results } = data;
                // console.log(data);
                const result = results.map((pokemon: pkm, index) => {
                    return/*html*/ `
                                    <div class="pokemon">
                                    <p style="text-transform: uppercase;">${pokemon.name} (#${index + 1})</p>
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index + 1}.png">
                                    </div>
                                `
                }).join("")
                document.querySelector('#app').innerHTML = result
            })
        return ``
    }
}
export default Lab_2;