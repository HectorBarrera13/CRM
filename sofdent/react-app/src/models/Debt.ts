import { Person } from './Person';
export class Debt{
    constructor(
        public idDebt : number,
        public amount : number,
        public person : Person
    ){}
}