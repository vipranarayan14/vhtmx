const processors = [

  {
    process: ele => {

      ele.outerHTML = `<span class="hilight">${ele.innerHTML}</span>`;

    },
    query: 'hi'
  }

];

module.exports = processors;
