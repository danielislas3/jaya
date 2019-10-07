const {createLogger,format,transports} = require('winston')
expressWinston = require('express-winston')

const myFormat = format.printf(({ ip, sort, timestamp }) => {
  return ` ip: ${ip}, sort: ${sort}`;
})

module.exports = createLogger({
  format:format.combine(
    format.simple(),
    myFormat
   ),
   
  transports:[
    new transports.File({
      maxsize:'5120000',
      maxFiles:100,
      filename:`assets/log.txt`
    }),
    new transports.Console({
      level:'debug',
    })
  ]
})