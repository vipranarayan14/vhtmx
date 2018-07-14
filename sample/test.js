const { Vhtmx } = require('../');
const { processors } = require('./processors');

const vhtml = new Vhtmx({
  distRoot: './sample',
  srcRoot: './sample'
});

vhtml.use(processors);
vhtml.process();
