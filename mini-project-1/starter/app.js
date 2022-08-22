// String Values

let string1 = 'Ini adalah string';

let multiLineString = 'Ini adalah paragraf 1 \nDan ini adalah paragraf 2';
let multiLineString2 = `
Ini adalah paragraf 1 dengan backtic
Dan ini adalah paragraf 2
`;

let firstName = 'Ahmad';
let lastName = 'Farizi';
let shirtNumber = 10;

// Ini adalah string concatenates
let namaLengkap = `${firstName} ${lastName} ${shirtNumber}`;

console.log(namaLengkap);

const projectTitle = document.querySelector('.project-title');

projectTitle.textContent = 'Title baru dari JS file';
