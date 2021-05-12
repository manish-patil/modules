import { User } from './user.js';

export function sayHello() {
    const user = new User('John');
    
    document.body.innerHTML = user.name;
};

