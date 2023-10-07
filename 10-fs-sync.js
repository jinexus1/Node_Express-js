const {readFileSync}= require('fs')
const fs=require('fs')
fs.readFileSync

//same thingh in first i am destructuring fs(file system) and getting readFileSync
//fs.writeFileSync( file, data, options )
const {readFileSync,writeFileSync}= require('fs')
const first =readFileSync('./content/first.txt','utf-8')
const second =readFileSync('./content/second.txt','utf-8')
console.log(first,'\n',second)

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first},${second}`
)//creating a new file
