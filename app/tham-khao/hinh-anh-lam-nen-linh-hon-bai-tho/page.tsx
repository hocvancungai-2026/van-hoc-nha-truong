import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Hình ảnh làm nên linh hồn bài thơ (Nguyễn Việt Chiến) – Tham khảo | Học Văn Cùng Ai',
  description: 'Nguyễn Việt Chiến bàn về vai trò của hình ảnh trong thơ qua Xuân Quỳnh và Lưu Quang Vũ: sức gợi, tứ thơ, giọng điệu và phong cách (báo Văn nghệ Công an).',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Lí luận thơ"
      title="Hình ảnh làm nên linh hồn bài thơ"
      lede="Nguyễn Việt Chiến — đăng trên báo Văn nghệ Công an, ngày 18/6."
      sections={sections}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
