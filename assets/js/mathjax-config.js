// kramdown 输出 math/tex script；在 MathJax 3 中保留这些公式的原始 TeX。
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true
  },
  options: {
    renderActions: {
      find: [10, function (doc) {
        document.querySelectorAll('script[type^="math/tex"]').forEach(function (node) {
          const display = /;\s*mode=display/.test(node.type);
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          const placeholder = document.createTextNode('');
          node.parentNode.replaceChild(placeholder, node);
          math.start = {node: placeholder, delim: '', n: 0};
          math.end = {node: placeholder, delim: '', n: 0};
          doc.math.push(math);
        });
      }, '']
    }
  },
  chtml: {displayAlign: 'center'}
};
