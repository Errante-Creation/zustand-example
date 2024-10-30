import { Link } from "react-router-dom"
import { useBookStore } from "../store/bookStore"

export default function Home() {
  const { books, addBook } = useBookStore()


  return (
    <>
        <h1>Home</h1>
        <Link to="/about">About</Link>
        <button onClick={() => addBook({ title: "Mon super livre", author: "Jean-Michel" })}>
        Add Book
        </button>
        
        <ul>
            {books?.map((book) => (
                <li key={book.title}>{book.title} - {book.author}</li>
            ))}
        </ul>
    </>
  )
}