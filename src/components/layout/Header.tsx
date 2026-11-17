import Link from 'next/link';

const links = [
  ['Головна', '/'],
  ['Про нас', '/about'],
  ['Переможці і фіналісти', '/winners'],
  ['Партнери', '/partners'],
  ['Рецепти', '/recipes'],
  ['Контакти', '/#contact'],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <Link href="/">Національний конкурс пирогів</Link>
      <nav aria-label="Головна навігація">
        <ul>{links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
      </nav>
      <a className="button header-button" href="https://forms.gle/mpTXEqdNj69JuRMW9">Подати заявку</a>
    </header>
  );
}
