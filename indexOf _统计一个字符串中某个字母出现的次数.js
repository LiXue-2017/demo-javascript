var str='To be, or not to be, that is the question';
var count=0;
var pos=str.indexOf('e');

while(pos!==-1){
	count++;
	pos=str.indexOf('e',pos+1);
}
console.log(count);