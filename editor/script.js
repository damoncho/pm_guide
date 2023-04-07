const md = window.markdownit({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
});

const form = document.querySelector('form');
const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', event => {
  if (event.key === '\\' && event.ctrlKey) {
    event.preventDefault();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    textarea.value = value.substring(0, start) + '\\' + value.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + 1;
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const html = md.render(markdownInput.value.replace(/\\\\/g, '\\'));
  htmlOutput.innerHTML = html;
});

const downloadButton = document.getElementById('download-html');
downloadButton.addEventListener('click', async () => {
  const html = htmlOutput.innerHTML;
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'preview.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
