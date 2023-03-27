import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static intances = 0;
  private energy: EnergyType;

  constructor(name:string) {
    super(name);
    this.energy = 'stamina';
    Ranger.intances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.intances;
  }

  override get energyType(): EnergyType {
    return this.energy;
  }
}