import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Hãy đọc lời ai điếu cho một giai đoạn văn nghệ minh họa (Nguyễn Minh Châu) – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài viết của Nguyễn Minh Châu (Báo Văn nghệ, 1987) về văn học minh họa, nỗi sợ của người cầm bút, yêu cầu sáng tạo và tác phẩm lớn.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Tiểu luận"
      title="Hãy đọc lời ai điếu cho một giai đoạn văn nghệ minh họa"
      lede="Nguyễn Minh Châu — Báo Văn nghệ, Hà Nội, số 49 & 50 (5-12-1987)."
      sections={[]}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
