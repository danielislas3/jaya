const path = require('path')
const fs = require('fs')

exports.originalDownload=(req, res, next) =>{
  res.download('assets/original.txt',(err)=> {
    console.log(err);
  })
}

exports.sortedDownload=(req, res, next) =>{
  res.download('assets/sorted.txt',  (err) =>{
    console.log(err);
  })
}

exports.sortController= async(req, res, next) =>{
  const {originalUrl}= req
  let type = originalUrl.split('/')[1]
  const file = await fs.readFile('assets/original.txt', 'utf8',async (err,data)=>{
    if(err)return err
    let newArr = sortArray(data.toString(),type)
    let str=JSON.stringify(newArr)
    const fileW = await fs.writeFile('assets/sorted.txt',   str.split(',[').join(';\n[') , (err)=>{
      if(err) {
          return console.log(err);
      }console.log("The file was saved!")}) 

  })
  
  res.status(200).json({msg: `arrays sorted ${type}`})
}

const sortArray = (data,type)=> {

  const array=data.split(';')
  const arr= array.map((e)=>{   
    return eval( e.replace(/\D\n/g,''))
  })
  arr.pop()

  if(type==='asc'){
    const arraySorted= arr.map(e=>{
      return e.sort((a, b) => a - b )
    })
    
    return arraySorted
  }
  if(type==='des'){
    const arraySorted= arr.map(e=>{
      return e.sort((a, b) => b - a )
    })
    return arraySorted
  }
  if(type==='mix'){
    const arraySorted= arr.map((e,i)=>{
      if(i%2) return e.sort((a, b) => a - b )
      return e.sort((a, b) => b - a )
    })
    return arraySorted
  }

}