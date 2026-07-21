import Head from 'next/head'
import { useState, useCallback } from 'react'
import { questions, categories } from '../data/questions'

const levels = [
  { id: 'all', label: 'Tous niveaux' },
  { id: 'douce', label: 'Douce', desc: 'Pour briser la glace' },
  { id: 'medium', label: 'Medium', desc: 'Pour aller plus loin' },
  { id: 'profonde', label: 'Profonde', desc: 'Pour oser aller en profondeur' },
]

const levelColors = {
  douce: '#4CAF82',
  medium: '#E07B39',
  profonde: '#9B59B6',
}

export default function Home() {
  const [activeCat, setActiveCat] = useState('all')
  const [activeLevel, setActiveLevel] = useState('all')
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const filtered = questions.filter(q => {
    const catMatch = activeCat === 'all' || q.cat === activeCat
    const levelMatch = activeLevel === 'all' || q.level === activeLevel
    return catMatch && levelMatch
  })

  const safeIndex = Math.min(index, Math.max(0, filtered.length - 1))
  const current = filtered[safeIndex]
  const cat = categories.find(c => c.id === current?.cat)

  const transition = useCallback((fn) => {
    setVisible(false)
    setTimeout(() => {
      fn()
      setVisible(true)
    }, 200)
  }, [])

  const next = () => {
    transition(() => setIndex(i => (i + 1) % filtered.length))
  }

  const prev = () => {
    transition(() => setIndex(i => (i - 1 + filtered.length) % filtered.length))
  }

  const shuffle = () => {
    transition(() => {
      let next
      do { next = Math.floor(Math.random() * filtered.length) } while (next === safeIndex && filtered.length > 1)
      setIndex(next)
    })
  }

  const handleCatChange = (catId) => {
    transition(() => {
      setActiveCat(catId)
      setIndex(0)
    })
  }

  const handleLevelChange = (levelId) => {
    transition(() => {
      setActiveLevel(levelId)
      setIndex(0)
    })
  }

  return (
    <>
      <Head>
        <title>Les maximes de Maxime</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={s.page}>
        <header style={s.header}>
          <h1 style={s.logo}>Les maximes de Maxime</h1>
          <span style={s.total}>{questions.length} questions</span>
        </header>

        {/* Category filters */}
        <div style={s.filterRow}>
          {categories.map(c => {
            const active = activeCat === c.id
            return (
              <button key={c.id} onClick={() => handleCatChange(c.id)} style={{
                ...s.chip,
                background: active ? (c.id === 'all' ? '#1A1A1A' : c.color) : 'transparent',
                color: active ? '#fff' : '#6B6B6B',
                borderColor: active ? 'transparent' : '#D8D4CC',
              }}>
                {c.label}
              </button>
            )
          })}
        </div>

        {/* Level filters */}
        <div style={{ ...s.filterRow, paddingTop: 0, paddingBottom: '32px', gap: '6px' }}>
          {levels.map(l => {
            const active = activeLevel === l.id
            const col = levelColors[l.id] || '#1A1A1A'
            return (
              <button key={l.id} onClick={() => handleLevelChange(l.id)} style={{
                ...s.chip,
                fontSize: '11px',
                padding: '4px 10px',
                background: active ? col : 'transparent',
                color: active ? '#fff' : '#9A9896',
                borderColor: active ? 'transparent' : '#E4E0D8',
              }}>
                {l.label}
              </button>
            )
          })}
        </div>

        {/* Card */}
        <main style={s.main}>
          {filtered.length === 0 ? (
            <div style={s.empty}>Aucune question pour ces filtres.</div>
          ) : (
            <>
              <div style={{
                ...s.card,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}>
                {/* Top meta */}
                <div style={s.cardMeta}>
                  {cat && (
                    <span style={{ ...s.catBadge, color: cat.color, borderColor: cat.color + '40', background: cat.color + '12' }}>
                      {cat.label}
                    </span>
                  )}
                  {current?.level && (
                    <span style={{ ...s.levelDot, background: levelColors[current.level] + '20', color: levelColors[current.level] }}>
                      {current.level}
                    </span>
                  )}
                </div>

                <p style={s.question}>{current?.text}</p>
              </div>

              {/* Nav */}
              <div style={s.nav}>
                <button onClick={prev} style={s.navBtn} aria-label="Precedente">&#8592;</button>

                <div style={s.navCenter}>
                  <span style={s.counter}>{safeIndex + 1} / {filtered.length}</span>
                  <button onClick={shuffle} style={s.shuffleBtn}>&#8635; aleatoire</button>
                </div>

                <button onClick={next} style={s.navBtn} aria-label="Suivante">&#8594;</button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  )
}

const s = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#F7F5F0',
  },
  header: {
    padding: '48px 32px 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  logo: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 'clamp(42px, 8vw, 72px)',
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
    lineHeight: '1.1',
    margin: 0,
  },
  total: {
    fontSize: '12px',
    color: '#ADADAD',
    letterSpacing: '0.04em',
  },
  filterRow: {
    padding: '0 32px 12px',
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  chip: {
    padding: '6px 14px',
    borderRadius: '20px',
    border: '1px solid',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px 60px',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: '20px',
    padding: '48px 44px',
    maxWidth: '620px',
    width: '100%',
    boxShadow: '0 2px 24px rgba(0,0,0,0.07)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minHeight: '280px',
    justifyContent: 'center',
  },
  cardMeta: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  catBadge: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '3px 9px',
    borderRadius: '20px',
    border: '1px solid',
  },
  levelDot: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '500',
    padding: '3px 9px',
    borderRadius: '20px',
  },
  question: {
    fontSize: 'clamp(20px, 3.5vw, 26px)',
    lineHeight: '1.6',
    fontWeight: '400',
    color: '#1A1A1A',
    letterSpacing: '-0.01em',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '620px',
    width: '100%',
    marginTop: '20px',
    padding: '0 4px',
  },
  navBtn: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: '1px solid #E0DCD4',
    background: '#FFFFFF',
    color: '#1A1A1A',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  navCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  },
  counter: {
    fontSize: '12px',
    color: '#ADADAD',
    fontWeight: '500',
  },
  shuffleBtn: {
    background: 'none',
    border: 'none',
    color: '#ADADAD',
    fontSize: '12px',
    fontWeight: '500',
    padding: '4px 8px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  empty: {
    color: '#ADADAD',
    fontSize: '14px',
    textAlign: 'center',
    padding: '40px',
  },
}
