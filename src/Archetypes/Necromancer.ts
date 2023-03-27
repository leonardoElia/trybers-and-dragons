import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static intances = 0;
  private energy: EnergyType;

  constructor(name:string) {
    super(name);
    this.energy = 'mana';
    Necromancer.intances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.intances;
  }

  override get energyType(): EnergyType {
    return this.energy;
  }
}