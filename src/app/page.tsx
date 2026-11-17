import Link from 'next/link';
import { Countdown } from '@/components/home/Countdown';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div>
          <h1>Національний конкурс пирогів</h1>
          <p className="hero-intro">Культурно-гастрономічна ініціатива, присвячена регіональним кулінарним традиціям України.</p>
          <a className="button" href="https://forms.gle/mpTXEqdNj69JuRMW9">Подати заявку</a>
        </div>
        <div><Countdown /><p className="hero-note">Офіційну дату конкурсу буде оголошено пізніше.</p></div>
      </div>

      <section className="intro-section" aria-labelledby="tradition-title">
        <p className="eyebrow">Про традицію</p>
        <div><h2 id="tradition-title">Пиріг незалежності</h2><p>Пиріг об’єднує різні смаки, рецепти й традиції українських регіонів.</p><Link href="/about">Більше про нас</Link></div>
      </section>
      <section className="content-section" aria-labelledby="competition-title">
        <div className="section-heading"><p className="eyebrow">Участь</p><h2 id="competition-title">Про конкурс</h2></div>
        <div className="section-content">
          <div><h3>Номінації</h3><p>Перелік номінацій буде додано пізніше.</p></div>
          <div><h3>Механіка відбору</h3><p>Правила та етапи відбору буде додано пізніше.</p></div>
          <div><h3>Часті питання</h3><p>Відповіді на поширені запитання буде додано пізніше.</p></div>
        </div>
      </section>
      <section className="content-section" aria-labelledby="people-title">
        <div className="section-heading"><p className="eyebrow">Люди конкурсу</p><h2 id="people-title">Журі та партнери</h2></div>
        <div className="section-content">
          <div><h3>Журі</h3><p>Інформацію про членів журі буде додано пізніше.</p></div>
          <div><h3>Партнери</h3><p>Інформацію про партнерів буде додано пізніше.</p><Link href="/partners">Усі партнери</Link></div>
        </div>
      </section>
      <section className="content-section" aria-labelledby="media-title">
        <div className="section-heading"><p className="eyebrow">Новини</p><h2 id="media-title">Медіа</h2></div>
        <div className="section-content"><p>Матеріали про конкурс буде додано пізніше.</p></div>
      </section>
      <section id="contact" className="contact-section"><p className="eyebrow">Зв’язок</p><h2>Контакти</h2><p>Контактну інформацію організаторів буде додано пізніше.</p></section>
    </>
  );
}
