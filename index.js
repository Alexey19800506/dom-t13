export function getSection(num) {
   const elem = document.querySelector(`span[data-number = "${num}"]`);
   return elem.closest('.box').dataset.section;
}
