export const books = [
  {
    id: 1,
    image: "images/book-covers/book1.webp",
    title: "Onoare",
    author: "Elif Shafak"
  },
  {
    id: 2,
    image: "images/book-covers/book2.webp",
    title: "Cele 40 de legi ale iubirii",
    author: "Elif Shafak"
  },
  {
    id: 3,
    image: "images/book-covers/book3.webp",
    title: "Lapte negru",
    author: "Elif Shafak"
  },
  {
    id: 4,
    image: "images/book-covers/book4.webp",
    title: "Cum să rămâi lucid într-o epocă a dezbinării",
    author: "Elif Shafak"
  },
  {
    id: 5,
    image: "images/book-covers/book5.webp",
    title: "Avem loc unii de alții? Democratizare și feminism",
    author: "Mihaela Miroiu"
  },
  {
    id: 6,
    image: "images/book-covers/book6.webp",
    title: "Sense and Sensibility",
    author: "Jane Austen"
  },
  {
    id: 7,
    image: "images/book-covers/book7.webp",
    title: "The Second Sex",
    author: "Simone de Beauvoir"
  },
  {
    id: 8,
    image: "images/book-covers/book8.webp",
    title: "Invitația la vals",
    author: "Mihail Drumeș"
  },
  {
    id: 9,
    image: "images/book-covers/book9.webp",
    title: "10 minute și 38 de secunde în lumea asta stranie",
    author: "Elif Shafak"
  },
  {
    id: 10,
    image: "images/book-covers/book10.webp",
    title: "Vânătorii de zmeie",
    author: "Khaled Hosseini"
  },
  {
    id: 11,
    image: "images/book-covers/book11.webp",
    title: "O viață măruntă",
    author: "Hanya Yanagihara"
  },
  {
    id: 12,
    image: "images/book-covers/book12.webp",
    title: "Little Women",
    author: "Louisa May Alcott"
  },
  {
    id: 13,
    image: "images/book-covers/book13.webp",
    title: "The Secret History",
    author: "Donna Tartt"
  },
  {
    id: 14,
    image: "images/book-covers/book14.webp",
    title: "Splendida cetate a celor o mie de sori",
    author: "Khaled Hosseini"
  },
  {
    id: 15,
    image: "images/book-covers/book15.webp",
    title: "Și munții au ecou",
    author: "Khaled Hosseini"
  },
  {
    id: 16,
    image: "images/book-covers/book16.webp",
    title: "Pride and Prejudice",
    author: "Jane Austen"
  },
  {
    id: 17,
    image: "images/book-covers/book17.webp",
    title: "Legați-vă centurile de siguranță",
    author: "Diana Turconi"
  },
  {
    id: 18,
    image: "images/book-covers/book18.webp",
    title: "Marii încrezători",
    author: "Rebecca Makkai"
  },
  {
    id: 19,
    image: "images/book-covers/book19.webp",
    title: "Sfârșitul șoaptelor. Decembrie 1989",
    author: "Ruta Sepetys"
  },
  {
    id: 20,
    image: "images/book-covers/book20.webp",
    title: "Ana Karenina",
    author: "Lev Tolstoi"
  }
];

export function getBookById(bookId){
  let matchingBook = null;

  books.forEach((book) => {
    if(book.id === bookId){
      matchingBook = book;
    }
  });

  return matchingBook;
}