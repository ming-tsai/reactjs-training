import './App.css';
import { Link } from 'react-router-dom';

export function Home() {
  return (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <h1>My website.</h1>
  </div>);
}

export function About() {
  return <h1>About us.</h1>
}

export function Contact() {
  return <h1>Contact us.</h1>
}

export function App() {
  return <Home />
}
