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

function App() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out' })
      gsap.from('.hero-sub', { y: 24, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 38,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
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
          <p className="kicker">Тверская область · озеро Мец</p>
          <h1 className="hero-title">Турбаза «Мец»</h1>
          <p className="hero-sub">Охота, рыбалка и отдых на природе. Живые выходные без городского шума.</p>
          <div className="actions">
            <a className="btn" href="tel:+79043562995">Позвонить: +7 (904) 356-29-95</a>
            <a className="btn ghost" href="https://instagram.com/baza_otdyha_mez" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      <section className="section section-dark reveal" style={{ backgroundImage: `url(${secBg})` }}>
        <div className="overlay soft" />
        <div className="container">
          <h2>Что есть на базе</h2>
          <div className="grid three">
            <article className="card"><h3>Охота</h3><p>Охотничьи туры с егерским сопровождением и организацией на месте.</p></article>
            <article className="card"><h3>Рыбалка</h3><p>Озёра Мец и Пудоро, лодки, баня и природные маршруты.</p></article>
            <article className="card"><h3>Отдых</h3><p>Бревенчатые домики, питание, семейные и корпоративные заезды.</p></article>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <h2>Атмосфера места</h2>
          <div className="gallery">
            {gallery.map((src) => (
              <img key={src} src={src} alt="Турбаза Мец" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container grid two">
          <article className="card">
            <h3>Как добраться</h3>
            <p>Тверская область, Вышневолоцкий район, деревня Гряды.</p>
            <p>Маршрут: через Вышний Волочёк, поворот на Удомлю, далее по указателям к базе «Мец».</p>
          </article>
          <article className="card">
            <h3>Бронирование</h3>
            <p>Лучший способ — прямой звонок. Уточни даты, формат отдыха и состав группы.</p>
            <a className="btn" href="tel:+79043562995">Забронировать по телефону</a>
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
