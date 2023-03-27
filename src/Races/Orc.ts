import Race from './Race';

export default class Orc extends Race {
  private static intances = 0;
  private maxLife = 74;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Orc.intances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.intances;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}