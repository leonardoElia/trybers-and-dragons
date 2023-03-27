import Race from './Race';

export default class Halfling extends Race {
  private static intances = 0;
  private maxLife = 60;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Halfling.intances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.intances;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}