import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static intances = 0;
  private energy: EnergyType;

  constructor(name:string) {
    super(name);
    this.energy = 'stamina';
    Warrior.intances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.intances;
  }

  override get energyType(): EnergyType {
    return this.energy;
  }
}