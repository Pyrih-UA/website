import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Національний конкурс пирогів</p>
      <Link href="/#contact">Контакти</Link>
    </footer>
  );
}
