import { User } from './models/user.ts'; 

const justine = new User('Justine', 23);

const isJustineAnAdult: boolean = justine.isAdult();
