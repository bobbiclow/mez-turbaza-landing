import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const heroBg = 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=1920&q=80'
const secBg = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80'

const gallery = [
  'https://oxothik.ru/userimages/bases/preview/1390_5402.jpg',
  'https://oxothik.ru/userimages/bases/preview/1390_5403.jpg',
  'https://oxothik.ru/userimages/bases/preview/1390_5404.jpg',
  'https://oxothik.ru/userimages/bases/preview/1390_5405.jpg',
  'https://oxothik.ru/userimages/bases/preview/1390_5406.jpg',
  'https://oxothik.ru/userimages/bases/preview/1390_5407.jpg',
]

const offers = [
  ['Рыбалка на озёрах Мец и Пудоро', 'от 4 500 ₽ / чел.'],
  ['Семейный отдых с баней', 'от 5 500 ₽ / чел.'],
  ['Охотничий тур с егерем', 'по запросу'],
]

function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out' })
      gsap.from('.hero-sub', { y: 24, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 86%' },
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="site">
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="overlay" />
        <div className="container hero-content">
          <p className="kicker">Тверская область · Вышневолоцкий район</p>
          <h1 className="hero-title">Турбаза «Мец»</h1>
          <p className="hero-sub">Современный отдых на природе: охота, рыбалка, баня, живые выходные без городского шума.</p>
          <div className="actions">
            <a className="btn" href="tel:+79043562995">Позвонить</a>
            <a className="btn ghost" href="#booking">Оставить заявку</a>
          </div>
        </div>
      </section>

      <section className="section reveal light-bg" style={{ backgroundImage: `url(${secBg})` }}>
        <div className="container">
          <h2>Почему выбирают «Мец»</h2>
          <div className="grid three">
            <article className="card glass"><h3>Природа</h3><p>Озёра, лес и тишина — место для перезагрузки, а не для суеты.</p></article>
            <article className="card glass"><h3>Форматы отдыха</h3><p>Семья, друзья, корпоратив, охота и рыбалка — всё в одной локации.</p></article>
            <article className="card glass"><h3>Прямой контакт</h3><p>Без агрегаторов и посредников — бронирование напрямую по телефону.</p></article>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <h2>Фото базы</h2>
          <div className="gallery">
            {gallery.map((src) => (
              <img key={src} src={src} alt="Турбаза Мец" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <h2>Ориентир по стоимости</h2>
          <p className="muted">Финальная цена зависит от сезона, состава группы и программы.</p>
          <div className="grid three">
            {offers.map(([name, price]) => (
              <article key={name} className="card price">
                <h3>{name}</h3>
                <p className="price-tag">{price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container grid two">
          <article className="card">
            <h3>Как добраться</h3>
            <p>Тверская область, Вышневолоцкий район, деревня Гряды.</p>
            <p>Через Вышний Волочёк, поворот на Удомлю, далее по указателям к базе.</p>
          </article>
          <article className="card" id="booking">
            <h3>Бронирование</h3>
            <p>Телефон: +7 (904) 356-29-95</p>
            <p>Instagram: @baza_otdyha_mez</p>
            <a className="btn" href="tel:+79043562995">Забронировать</a>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© Турбаза «Мец» · Тверская область</p>
        </div>
      </footer>
    </div>
  )
}

export default App
