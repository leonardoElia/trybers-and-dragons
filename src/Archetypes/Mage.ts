import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static intances = 0;
  private energy: EnergyType;

  constructor(name:string) {
    super(name);
    this.energy = 'mana';
    Mage.intances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.intances;
  }

  override get energyType(): EnergyType {
    return this.energy;
  }
}