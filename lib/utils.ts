export function extractPrice(...elements: any) {
  for(const element of elements) {
    const priceText = element.first().text().trim();
    if(priceText) return priceText.replace(/[^\d.,]/g, '');
  }
  return '';
}
// Extracts and returns the price from a list of possible elements.
// export function extractPrice(...elements: any) {
//   for (const element of elements) {
//     const priceText = element.text().trim();

//     if(priceText) {
//       const cleanPrice = priceText.replace(/[^\d.]/g, '');

//       let firstPrice; 

//       if (cleanPrice) {
//         firstPrice = cleanPrice.match(/\d+\.\d{2}/)?.[0];
//       } 

//       return firstPrice || cleanPrice;
//     }
//   }

//   return '';
// }

export function extractCurrency(element: any) {
  const currency = element.text().trim().slice(0, 1)
  return currency ? currency : '';
}