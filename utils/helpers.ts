// =================================
//
//  function to convert base64ToBlob
//
// =================================

export const convertBase64ToBlob = (base64: string): Blob => {
  const [header, data] = base64.split(',');
  const mimeType = header.match(/:(.*?);/)?.[1] || '';
  const byteCharacters = atob(data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    byteArrays.push(new Uint8Array(byteNumbers));
  }

  return new Blob(byteArrays, { type: mimeType });
};
