class Tuong {
    name: string;
    skill: string;
    profile: string
    constructor(name: string, skill: string, profile: string) {
        this.name = name;
        this.skill = skill;
        this.profile = profile;
    }
    ShowInfo(): void {
        console.log(`
                Name:  ${this.name}
                Skill: ${this.skill}
                Profile: ${this.profile}
        `);
    }
}
export default Tuong