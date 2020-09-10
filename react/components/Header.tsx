import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <h1>Come Fly With Lindsay</h1>
        <div>
          <Link href="/">
            <a>Come Fly With Lindsay</a>
          </Link>
          <Link href="/destinations">
            <a>Destinations</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          border-bottom: 10px solid #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav a {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
