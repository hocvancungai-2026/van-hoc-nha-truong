import Link from 'next/link'

export type Section = { id: string; num: string; title: string; html: string }

export default function Article({
  eyebrow, title, lede, sections,
}: { eyebrow: string; title: string; lede: string; sections: Section[] }) {
  return (
    <article className="container article">
      <Link href="/#chuyen-de" className="back">← Chuyên đề</Link>
      <header className="article-head">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </header>

      <nav className="toc" aria-label="Nội dung chính">
        <div className="toc-label">Nội dung chính</div>
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`}><b>{s.num}</b><span>{s.title}</span></a>
        ))}
      </nav>

      {sections.map(s => (
        <section key={s.id} id={s.id} className="prose-section">
          <h2><span className="num">{s.num}</span>{s.title}</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: s.html }} />
        </section>
      ))}

      <Link href="/#chuyen-de" className="back">← Về trang chủ</Link>
    </article>
  )
}
