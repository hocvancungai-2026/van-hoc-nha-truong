import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Trường hợp Bùi Giáng (Nguyễn Hưng Quốc) và Tiểu sử tự ghi – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài phê bình của Nguyễn Hưng Quốc về thơ Bùi Giáng: nghi ngờ ngôn ngữ, xóa nhòa các đường biên, gần gũi hậu hiện đại; kèm “Tiểu sử tự ghi” của nhà thơ.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Phê bình thơ"
      title="Trường hợp Bùi Giáng"
      lede="Nguyễn Hưng Quốc — kèm “Tiểu sử tự ghi” của nhà thơ Bùi Giáng."
      sections={sections}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
