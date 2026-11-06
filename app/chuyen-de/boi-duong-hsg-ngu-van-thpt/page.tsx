import type { Metadata } from 'next'
import Link from 'next/link'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Bồi dưỡng học sinh giỏi Ngữ văn THPT – Chuyên đề | Học Văn Cùng Ai',
  description: 'Phương pháp luận nghị luận văn học, năm nguyên tắc vận dụng lí luận văn học, hệ thống chuyên đề văn học trọng tâm và phương pháp nghị luận xã hội cho học sinh giỏi Ngữ văn THPT.',
}

export default function Page() {
  return (
    <article className="container article">
      <Link href="/#chuyen-de" className="back">← Chuyên đề</Link>
      <header className="article-head">
        <div className="eyebrow">Chuyên đề · Bồi dưỡng học sinh giỏi</div>
        <h1>Chuyên đề bồi dưỡng học sinh giỏi môn Ngữ văn THPT</h1>
        <p className="lede">Tài liệu tham khảo dành cho giáo viên và học sinh ôn thi học sinh giỏi.</p>
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
