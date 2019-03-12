import "reflect-metadata";

import { Cat } from "./cat";

const cat: Cat = new Cat();

console.log(cat.createCat("Peter", "Orange"));

const catTester: Cat = new Cat({ Log: async(stuff) => { console.log(`Fake logger: ${stuff}`); } });

catTester.createCat("Tigerlilly", "Grey");