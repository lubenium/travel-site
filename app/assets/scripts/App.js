/*alert('This uztroiuztr!');
console.log('hay everyone!');
//var Person = require('./modules/Person');
import Person from './modules/Person';
class Adult extends Person {
payTaxes() {
    console.log(`${this.name} now owns 0$ taxess!`);
};
};

var John = new Person("Jon Doe", "red");
var Jane = new Adult("Jane Smith", "orange");
John.greet();
Jane.greet();
Jane.payTaxes();*/
import MobilMenu from './modules/MobilMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
var mobilMenu = new MobilMenu();
 new RevealOnScroll($('.feature-item'), "85%");
 new RevealOnScroll($('.testimonial'), "60%");
 var stickyHeader = new StickyHeader();