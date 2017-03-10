const fs = require('fs');
const stringJect=require('./index.js');

var predicate='How are y';
var file='./sample.txt';

var passed=0,failed=0;

//INSERT before
var str='New before Line';


test('insert before',str,()=>{
	new stringJect('./sample.txt',predicate).before(str).saveSync(); //Actual Write
});


str='After Line';

test('insert after',str,()=>{
	new stringJect('./sample.txt',predicate).after(str).saveSync(); 
});



str='Replaced Line';

test('Replace',str,()=>{
	new stringJect('./sample.txt',predicate).replace(str).saveSync(); 
});


new stringJect('./sample.txt',str).replace('How are you?').saveSync(); //Revert for further testing



str='Did you';

testNot('Delete',str,()=>{
	new stringJect('./sample.txt',str).delete().saveSync(); 
});


str='Offset workuing';
test('offset',str,()=>{
	new stringJect('./sample.txt',predicate,2).after(str).saveSync(); 
});



console.log('Tests  \u2713 Passed :  '+passed+'.  \nTests \u2613 Failed : '+failed);


function test(title,expected,run){
	console.log('\nTesting "'+title+'" ...');
	run();
	var s=new stringJect(file,expected).find(); //Actual Write
	var p='';
	if(s){
		passed++;
		p=' \u2713 PASSED.';
	}else{
		failed++;
		p=' \u2613 FAIL!';
	}

	
	console.log('Test "'+title+'"  '+p);
	console.log('===========================\n\n');
}


function testNot(title,expected,run){
	console.log('\nTesting "'+title+'" ...');
	run();
	var s=new stringJect(file,expected).find(); //Actual Write
	var p='';
	if(!s){
		passed++;
		p=' \u2713 PASSED.';
	}else{
		failed++;
		p=' \u2613 FAIL!';
	}

	
	console.log('Test "'+title+'"  '+p);
	console.log('===========================\n\n');
}



