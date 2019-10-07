path = require('path'),

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
