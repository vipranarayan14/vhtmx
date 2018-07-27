export const processDocument = (dom, processors) => {

  processors.forEach(processor => {

    dom.window.document

      .querySelectorAll(processor.query)

      .forEach(element => processor.process(element));

  });

  return dom;

};
