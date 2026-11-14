import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Cảm xúc tạo nên chất trữ tình của thơ (Nguyễn Việt Chiến) – Tham khảo | Học Văn Cùng Ai',
  description: 'Nguyễn Việt Chiến bàn về cảm xúc như “mầm sống” của thơ trữ tình, từ đó đọc cảm xúc suy tưởng trong thơ lục bát Nguyễn Duy qua “Ngồi buồn nhớ mẹ ta xưa” và “Xẩm ngọng” (báo Văn nghệ Công an).',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Lí luận thơ"
      title="Cảm xúc tạo nên chất trữ tình của thơ"
      lede="Nguyễn Việt Chiến — in trên báo Văn nghệ Công an, ngày 11/6/2026."
      sections={sections}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
