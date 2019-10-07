const path = require('path')
const fs = require('fs')

exports.originalDownload=(req, res, next) =>{
  res.download(path.join(__dirname, '/assets/original.txt'),(err)=> {
    console.log(err);
  })
}

exports.sortedDownload=(req, res, next) =>{
  res.download(path.join(__dirname, '/assets/sorted.txt'),  (err) =>{
    console.log(err);
  })
}

exports.ascController= async(req, res, next) =>{
  const file = await fs.readFile(path.join(__dirname, '/assets/original.txt'), 'utf8',(err,data)=>{
    if(err)return err
    sortArray(data.toString(),'asc')

  })
  res.status(200).json({msg: 'arrays sorted asc'})
}
exports.desController= async(req, res, next) =>{
  const file = await fs.readFile(path.join(__dirname, '/assets/original.txt'), 'utf8',(err,data)=>{
    if(err)return err
    sortArray(data.toString(),'des')
  })
  res.status(200).json({msg: 'arrays sorted des'})
}
exports.mixController= async(req, res, next) =>{
  const file = await fs.readFile(path.join(__dirname, '/assets/original.txt'), 'utf8',(err,data)=>{
    if(err)return err
    sortArray(data.toString(),'mix')
  })
  res.status(200).json({msg: 'arrays sorted mix'})
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
    console.log(arraySorted)
  }
  if(type==='des'){
    const arraySorted= arr.map(e=>{
      return e.sort((a, b) => b - a )
    })
    console.log(arraySorted)
  }

  if(type==='mix'){
    const arraySorted= arr.map((e,i)=>{
      if(i%2) return e.sort((a, b) => a - b )
      return e.sort((a, b) => b - a )
    })
    console.log(arraySorted)
  }

}