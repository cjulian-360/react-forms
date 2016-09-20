var testsContext = require.context('./spec', true, /_spec\.js$/);
testsContext.keys().forEach(console.log);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./source', true, /\.js$/);
srcContext.keys().forEach(console.log);
srcContext.keys().forEach(srcContext);