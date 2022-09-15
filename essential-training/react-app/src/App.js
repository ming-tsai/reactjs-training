import './App.css';
import { Link, Outlet } from 'react-router-dom';

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

export function History() {
  return (
    <h1>Our History</h1>
  );
}

export function About() {
  return (
  <div>
     <h1>About us.</h1>
     <Outlet />
  </div>);
}

export function Contact() {
  return <h1>Contact us.</h1>
}

export function App() {
  return <Home />
}
