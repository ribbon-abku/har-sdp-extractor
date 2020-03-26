const fs = require('fs')

var argl = process.argv.slice(2)

if (!!argl[0]) {
  const fileContents = fs.readFileSync(argl[0], 'utf8')

  try {
    const data = JSON.parse(fileContents)
    var writeStream = fs.createWriteStream(argl[0] + '.txt')
    for (let i = 0; i < data.log.entries.length; i++) {
      writeStream.write('\n\n')
      writeStream.write(data.log.entries[i].startedDateTime)
      writeStream.write('\n')
      writeStream.write(data.log.entries[i].request.method)
      writeStream.write('\n')
      writeStream.write(data.log.entries[i].request.url)
      writeStream.write('\n\n')
      if (data.log.entries[i].request.postData && data.log.entries[i].request.postData.text) {
        let tmp = JSON.parse(data.log.entries[i].request.postData.text)
        if (tmp.callMeRequest && tmp.callMeRequest.sdp) {
          writeStream.write(tmp.callMeRequest.sdp)
          writeStream.write('\n\n')
        }
      }
      writeStream.write('--')
    }
    writeStream.end()
  } catch (err) {
    console.error(err)
  }
} else {
  console.log(`
HAR SDP Extractor (v1.0)
It helps to extract the SDP data from requests inside HAR file and consolidate them in separate file.

Usage:
  node har-sdp-extractor.js <filename.har>

Example:
  node har-sdp-extractor.js ~/Downloads/localhost-1578439353411.har
    `)
}
