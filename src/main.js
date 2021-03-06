import 'babel-polyfill';

// require("core-js/fn/promise");
// import "core-js/fn/promise";

import * as file1 from './file1';
import * as file2 from './file2';
import * as promises from './promises';

// test export and imports
console.log(file1.square(3)); // eslint-disable-line
file2.print();
window.test = {};
window.test.square4 = file1.square(4);
console.log(window.test.square4); // eslint-disable-line

// test promises
promises.run();
promises.run2();
promises.run3();

// make them callable from the console
window.FILIP = {
    run1: promises.run,
    run2: promises.run2,
    run3: promises.run3,
};
