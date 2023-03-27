import Race from './Race';

export default class Elf extends Race {
  private static intances = 0;
  private maxLife = 99;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf.intances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.intances;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }
}