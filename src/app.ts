import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// const invOne = new Invoice('Mario', 'Web development', 200);

// let invoices: Invoice[] = [];
// invoices.push(invOne);

// console.log(invoices);

//Generics
const addUID = <T extends {name: string}>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({name:'Yoshi', age:40})

console.log(docOne.name)

//link
const link = document.querySelectorAll('a')!;

//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul); 

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let doc: HasFormatter;

    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber]

    if(type.value === 'invoice'){
        doc = new Invoice (...values);
    }else{
        doc = new Payment(...values);
    }
    
    list.render( doc, type.value, 'end' )
})