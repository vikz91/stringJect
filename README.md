# stringJect

> Multi-line String Manipulation with Fluent style API for NodeJS

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

```
          __         .__                    ____.              __   
  _______/  |________|__| ____    ____     |    | ____   _____/  |_ 
 /  ___/\   __\_  __ \  |/    \  / ___\    |    |/ __ \_/ ___\   __\
 \___ \  |  |  |  | \/  |   |  \/ /_/  >\__|    \  ___/\  \___|  |  
/____  > |__|  |__|  |__|___|  /\___  /\________|\___  >\___  >__|  
     \/                      \//_____/               \/     \/      

```




## Install

```bash
npm i -s stringject
```

## Usage

```
var stringJect=require('stringject);

var s = new stringJect('./sample.txt','this is good').replace('this is better').saveSync();


//Fluent Style
var p = new stringJect('./sample.txt','this is bad')
            .before('this is better')
            .after('this is worse')
            .replace('confused')
            .delete()
            .saveSync();


//Compare existence of predicate
var e = new stringJect('./sample.txt','this is bad').find(); //returns true/false

//delete a all lines between :
new stringJect('./sample.txt','this is bad').deleteUntill('this is done').saveSync(); 
```

## Reference
1. ``new stringJect(<filePath>,<Predicate to Search>)``
2. ``.before(string)``
3. ``.after(string)``
4. ``.replace(string)``
5. ``.delete([number of lines])``
6. ``.deleteUntil(string)``
7. ``.find()``
8. ``.save(callback)``
9. ``.saveSync()``  




``new stringJect()`` constructor takes a file path as first argument and keyword/predicate to search for as seond argument. This return a stringJect object, which can be used to chain other methods upon.
 

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master
 
