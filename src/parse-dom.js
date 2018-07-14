const { JSDOM } = require('jsdom');

const parseDOM = data => new JSDOM(data);

module.exports = { parseDOM };
