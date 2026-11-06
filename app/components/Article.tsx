import Link from 'next/link'

export type Section = { id: string; num: string; title: string; html: string }

export type Pager = { prev?: { href: string; label: string }; next?: { href: string; label: string } }

export default function Article({
  eyebrow, title, lede, sections, backHref = '/#chuyen-de', backLabel = 'Chuyên đề', pager, introHtml, outroHtml,
}: {
  eyebrow: string; title: string; lede: string; sections: Section[]
  backHref?: string; backLabel?: string; pager?: Pager; introHtml?: string; outroHtml?: string
}) {
  return (
    <article className="container article">
      <Link href={backHref} className="back">← {backLabel}</Link>
      <header className="article-head">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </header>

      {introHtml && <div className="prose intro" dangerouslySetInnerHTML={{ __html: introHtml }} />}

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

      {outroHtml && <div className="prose outro" dangerouslySetInnerHTML={{ __html: outroHtml }} />}

      {pager && (
        <div className="pager">
          {pager.prev ? <Link href={pager.prev.href}>← {pager.prev.label}</Link> : <span />}
          {pager.next ? <Link href={pager.next.href}>{pager.next.label} →</Link> : <span />}
        </div>
      )}
      <Link href={backHref} className="back">← Về {backLabel}</Link>
    </article>
  )
}
