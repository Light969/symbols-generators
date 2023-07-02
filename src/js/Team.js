export default class Team {
  constructor(teamName) {
    this.teamName = teamName;
    this.units = new Set();
  }

  add(unit) {
    if (this.units.has(unit)) {
      throw new Error('Данный персонаж уже присутствует');
    }
    this.units.add(unit);
  }

  * [Symbol.iterator]() {
    const team = Array.from(this.units);
    for (let i = 0; i <= team.length; i += 1) {
      yield team[i];
    }
  }
}
