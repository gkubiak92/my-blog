import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer/footer"

export default function Home() {
  return (
    <div>
      Hello, I'm Grzegorz. Welcome to my blog 👋
      <Link to="/about">About</Link>
      <Footer />
    </div>
  )
}
