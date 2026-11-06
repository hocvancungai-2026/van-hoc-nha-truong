import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Nguyễn Duy thi sĩ thảo dân (Chu Văn Sơn) – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài phê bình của Chu Văn Sơn về thế giới nghệ thuật thơ Nguyễn Duy: chất quê, điệu nói, lục bát và cây đàn hương hoả.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Phê bình thơ"
      title="Nguyễn Duy thi sĩ thảo dân"
      lede="Về thế giới nghệ thuật thơ Nguyễn Duy — Chu Văn Sơn"
      sections={sections}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
