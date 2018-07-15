const { JSDOM } = require('jsdom');

export const parseDOM = data => new JSDOM(data);
