# har-sdp-extractor
It helps to extract the SDP data from requests inside HAR file and consolidate them in separate file.

## Prerequisite
You should have [node.js](https://nodejs.org/en/) installed on your machine to run this script.

## Prepare
Either clone the repository or just download the `har-sdp-extractor.js` on your machine.

## Usage
Execute the below command to extract the SDP data from `filename.har` HAR file.
```
node har-sdp-extractor.js <filename.har>
```
### Example
```
node har-sdp-extractor.js ~/Downloads/localhost-1578439353411.har
```
