# stringJect

> Multi-line String Manipulation with Fluent style API for NodeJS

[![npm version](https://badge.fury.io/js/stringjector.svg)](https://badge.fury.io/js/stringjector)

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
var stringJect=require('stringjector');

new stringJect('./sample.txt','this is good').replace('this is better').saveSync();


//Fluent Style
new stringJect('./sample.txt','this is bad')
            .before('this is better')
            .after('this is worse')
            .replace('confused')
            .delete()
            .saveSync();


//Compare existence of predicate
var e = new stringJect('./sample.txt','this is bad').find(); //returns true/false

//delete a all lines between :
new stringJect('./sample.txt','this is bad').deleteUntill('this is done').saveSync(); 

//INsert after 2 lines of predicate
new stringJect('./sample.txt','this is good',2).replace('this is better').saveSync();



```

## Reference
1. ``new stringJect(<filePath>,<Predicate to Search>,[<Offset line numbers>])``
2. ``.before(string)``
3. ``.after(string)``
4. ``.replace(string)``
5. ``.delete([number of lines])``
6. ``.deleteUntil(string)``
7. ``.find()``
8. ``.save(callback)``
9. ``.saveSync()``  




``new stringJect()`` constructor takes a file path as first argument and keyword/predicate to search for as seond argument. This return a stringJect object, which can be used to chain other methods upon. This optionally takes a third parameter(Number) which is no. of lines to offset.
 

## License

[MIT](http://vjpr.mit-license.org)

 
