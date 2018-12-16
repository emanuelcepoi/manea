# Random youtube manele link generator

Do you like manele? We all do! Using this cool package you will be able to implement manele Youtube links in your code, no matter where!

### Installation

To get manele in your code, all you gotta do is install this NPM package

```sh
$ npm i manea
```
# Features
##### As we all know, there are many types of manele. My package covers 3 of them
  - Manele vechi - (These are the old gooldies <3 )
  - Manele noi - (These are the new party manele, like misca misca din buric)
  - Manele populare - (These are manele that everyone knows such as 'Sa nu ma lasi viata mea', hipsters should avoid them)
- More manele genres to come!

# Usage
After installing manele, start off by requiring the package at the beginning of your code
```js
const manea = require('manea');
```

Furthermore, after you have the package installed, it's time for the dope stuff!

#### This is how you generate a manea:

```js
const manea = require('manea');

/*
    The iaManeaua() function accepts three string arguments: veche, populara, noua
    Down below I'm calling it to get a veche manea, but you can use it according to your soul <3
*/
console.log(manea.iaManeaua('veche'))
/* Object
  { id: 'Mt639MBA8jI',
  name: 'Exotic - Vreau un pupic',
  url: 'https://youtube.com/watch?v=Mt639MBA8jI' }
   */
```
##### Now, we both know that generating a single manea doesn't keep the party goin'
#
#### So, here's how you generate multiple manele.


```js
const manea = require('manea');
/*
    The iaManele() function takes two arguments.
    The first argument is the manele type at plural: 'Vechi', 'Noi', 'Populare'.
    The second argument is how many of them do ya' need <3
    
*/

console.log(manea.iaManele('vechi', 3));
/* Array
[ { id: 'azmcFYLDEr4',
    name: 'Florin Peste si Denisa - Lumea doarme eu n-am somn',
    url: 'https://youtube.com/watch?v=azmcFYLDEr4' },
  { id: 'KRPXE2y8f70',
    name: 'Vali Vijelie cu Adrian Minune si Costi - Plecat departe',
    url: 'https://youtube.com/watch?v=KRPXE2y8f70' },
  { id: '5AxAOqElfA4',
    name: 'Bairam feat. Cristian - Doi ochi negri',
    url: 'https://youtube.com/watch?v=5AxAOqElfA4' }]
```

### What if you wanna generate manele from a specific manelist?
We currently support three diferent romanian manelists: Florin Slam, Nicolae Guta, Sorinel Pustiu
```js
const manea = require('manea');

/*
    The iaManeaDeLa() function accepts one argument, that's the manelist name.
    Available manelists are: 'Florin Salam', 'Nicolae Guta', 'Sorinel Pustiu'
*/
console.log(manea.iaManeauaDeLa('Sorinel Pustiu'))
/* Object
  { id: 'YRH8YWcor6A',
  name: 'Sorinel Pustiu & Morgana - Nici Madonna nici Shakira',
  url: 'https://youtube.com/watch?v=YRH8YWcor6A' }
   */
```
##### Made with valoare by fb.com/emanuelcepoi







