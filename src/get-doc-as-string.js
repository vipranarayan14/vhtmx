const isWrappedWithHTMLTag = data => data.indexOf('</html>') > -1;

const getBodyContent = doc => doc.body.innerHTML;

const getFullDocument = doc => `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;

export const getDocAsString = (doc, data) => {

  if (isWrappedWithHTMLTag(data)) {

    return getFullDocument(doc);

  }

  return getBodyContent(doc);

};
