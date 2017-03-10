const fs = require('fs');


//Init : Reads file and finds predicate. returns null if not found;
var stringJect=function (filePath,predicate,offset) {
	this.filePath=filePath;
	this.file=fs.readFileSync(filePath).toString().split('\n');
	this.text='';
	this.found=-1;

	if(offset===undefined || offset===null || offset===''){
		offset=0;
	}


	//SEARCH
	for(var i=0;i<this.file.length;i++){
		if(this.file[i].search(predicate)>=0){
			this.found=i;
			break;
		}
	}

	if(this.found<0){
		console.log('Predicate NOT found!. File untouched.');
		return null;
	}

	this.found+=offset;

	return this;
};


stringJect.prototype.before = function(str){
	this.file.splice((this.found), 0, str);
	this.found++;
	return this;
};

stringJect.prototype.after = function(str){
	this.file.splice((this.found+1), 0, str);
	return this;
};

stringJect.prototype.replace = function(str,lines){
	if(lines===undefined || lines===null){
		lines=1;
	}

	this.file.splice((this.found), lines, str);
	return this;
};

stringJect.prototype.delete = function(lines){
	if(lines===undefined || lines===null){
		lines=1;
	}
	this.file.splice(this.found, lines);

	return this;
};


//Deletes lines until predicate matches ( inclusive). If not found, deletes only 1 line
stringJect.prototype.deleteUntill = function(deletePredicate){
	var deleteUntilLine=1;

	//SEARCH
	for(var i=0;i<this.file.length;i++){
		if(this.file[i].search(deletePredicate)>=0){
			deleteUntilLine=i;
			break;
		}
	}

	//console.log(deleteUntilLine);

	this.file.splice(this.found, (deleteUntilLine-this.found)+1);

	return this;
};



stringJect.prototype.find = function(){
	return this.found>0;
};


stringJect.prototype.save = function(cb){
	this.text = this.file.join("\n");

	//WRITE
	fs.writeFile(this.filePath, this.text, function (err) {
		cb(err);
	}); 
};

stringJect.prototype.saveSync = function(){
	this.text = this.file.join("\n");

	//WRITE
	fs.writeFileSync(this.filePath, this.text);

	return this;
};




exports=module.exports=stringJect;