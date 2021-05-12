import { User } from './user.js';

export function sayHello() {
    const user = new User('Manish');
    
    document.body.innerHTML = user.name;
};

