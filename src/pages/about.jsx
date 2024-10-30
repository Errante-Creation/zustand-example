import { Link } from "react-router-dom"
import { useBookStore } from "../store/bookStore"

export default function About() {
  const { books } = useBookStore()
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <ul>
        {books?.map((book) => (
          <li key={book.title}>{book.title} - {book.author}</li>
        ))}
      </ul> 
    </>
  )
}