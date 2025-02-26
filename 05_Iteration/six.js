// const coding = ['js','ruby','java','python','cpp']

// const values = coding.forEach((i) => {
//     console.log(i);
//     return i;
// })
// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num) => num > 4)

// const newNum = myNum.filter((num) => {
//     return num > 4
// })

const newNum = []

myNum.forEach((num)=> {
    if(num>4){
        newNum.push(num)
    }
})


// console.log(newNum);

const book = [
    {
      "book_id": "B001",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Fiction",
      "published_year": 1925
    },
    {
      "book_id": "B002",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "published_year": 1960
    },
    {
      "book_id": "B003",
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "published_year": 1949
    },
    {
      "book_id": "B004",
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "genre": "Adventure",
      "published_year": 1851
    },
    {
      "book_id": "B005",
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Romance",
      "published_year": 1813
    },
    {
      "book_id": "B006",
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Fiction",
      "published_year": 1951
    },
    {
      "book_id": "B007",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "published_year": 1937
    },
    {
      "book_id": "B008",
      "title": "War and Peace",
      "author": "Leo Tolstoy",
      "genre": "Historical Fiction",
      "published_year": 1869
    },
    {
      "book_id": "B009",
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": "Philosophical Fiction",
      "published_year": 1988
    },
    {
      "book_id": "B010",
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "published_year": 1954
    }
]

// const userBooks = book.filter((bk) => bk.genre === "Fantasy")

// const userBooks = book.filter((bk) => {return bk.published_year < 1900})
const userBooks = book.filter((bk) => {return bk.published_year < 1900 && bk.genre === "Romance"})


console.log(userBooks);



