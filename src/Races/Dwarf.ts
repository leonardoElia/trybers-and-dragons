import Race from './Race';

export default class Dwarf extends Race {
  private static intances = 0;
  private maxLife = 80;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf.intances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.intances;
  }

  override get maxLifePoints(): number {
    return this.maxLife;
  }
}