import Tuong from "./Tuong";

class Tuongphep extends Tuong {
    public Hp: Number;
    public Mana: Number;
    private hobbies: string;
    constructor(name: string, skill: string, profile: string, Hp: number, Mana: number, hobbies: string) {
        super(name, skill, profile);
        this.Hp = Hp;
        this.Mana = Mana;
        this.hobbies = hobbies;
    }
    ShowInfo(): void {
        console.log(`
                Name:  ${this.name}
                Skill: ${this.skill}
                Profile: ${this.profile}
                Hp : ${this.Hp}
                Mana : ${this.Mana}
                hobbies: ${this.hobbies}
        `);
    }
}
export default Tuongphep