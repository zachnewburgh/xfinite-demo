import { Input, Machine, State } from 'xfinite';
import { Crosswalk, LightColor } from './Intersection.constants';

const walk = new State(Crosswalk.Walk, [
  new Input(LightColor.Yellow, Crosswalk.Stop),
  new Input(LightColor.Red, Crosswalk.Stop),
]);
const dontWalk = new State(Crosswalk.Stop, [
  new Input(LightColor.Green, Crosswalk.Walk),
]);
const states = [walk, dontWalk];

const crosswalk = new Machine<Crosswalk>(dontWalk.id, states);
export default crosswalk;
