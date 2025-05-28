function configurarEditorCodigo() {
  const htmlInput = document.getElementById("html");
  const cssInput = document.getElementById("css");
  const previewFrame = document.getElementById("preview");

  function actualizarVista() {
    const html = htmlInput.value;
    const css = `<style>${cssInput.value}</style>`;
    const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDoc.open();
    previewDoc.write(css + html);
    previewDoc.close();
  }

  if (htmlInput && cssInput && previewFrame) {
    htmlInput.addEventListener("input", actualizarVista);
    cssInput.addEventListener("input", actualizarVista);
    setTimeout(actualizarVista, 100);
  }

  // Botón limpiar
  document.getElementById('btnLimpiar')?.addEventListener('click', () => {
    document.getElementById('html').value = '';
    document.getElementById('css').value = '';
    document.getElementById('preview').srcdoc = '';
  });

  // Botón copiar
  document.getElementById('btnCopiar')?.addEventListener('click', () => {
    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;
    const codigoCompleto = `<style>${css}</style>\n${html}`;

    navigator.clipboard.writeText(codigoCompleto).then(() => {
      alert("¡Código copiado al portapeles!");
    }).catch(() => {
      alert("Ocurrió un error al copiar el código.");
    });
  });
}

configurarEditorCodigo();