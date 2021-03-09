import { Input, Machine, State } from 'xfinite';
import { LightColor } from './Intersection.constants';

const stop = new State(LightColor.Red, [new Input(null, LightColor.Green)]);
const slow = new State(LightColor.Yellow, [new Input(null, LightColor.Red)]);
const go = new State(LightColor.Green, [new Input(null, LightColor.Yellow)]);
const states = [stop, slow, go];

const trafficLight = new Machine('trafficLight', states);
trafficLight.build(stop.id);

export default trafficLight;
