const  path=require('path')
//find the path separator according to system mac('/') or windows('\)
console.log(path.sep)

//to join file path
const filePath=path.join('/content','subfolder','text.txt');
console.log(filePath)


//to get the last portion of the path
const base=path.basename(filePath)
console.log(base)


//to get absolute path name of the current file (basically our system in going to run in different environment at that point absolute path plays a significat role)
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute)


