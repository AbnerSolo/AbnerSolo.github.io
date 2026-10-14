// 处理 Kramdown 的公式分隔符，并兼容旧版 math/tex script。
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true
  },
  options: {
    renderActions: {
      findScript: [10, function (doc) {
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
