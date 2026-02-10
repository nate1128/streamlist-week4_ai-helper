import { MdLocalActivity } from 'react-icons/md';
import './NavBar.css';

export default function Header() {
  return (
    <header className="topbar header">
      <h1 className="brand">StreamList</h1>

      {/* Red ticket CTA → scrolls/focuses input with id="new" */}
      <a href="#new" className="cta red-ticket" aria-label="Jump to new item input">
        <MdLocalActivity />
        <span className="cta-text">Get Your Ticket</span>
      </a>
    </header>
  );
}