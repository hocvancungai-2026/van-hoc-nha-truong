import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml } from './content'

export const metadata: Metadata = {
  title: 'Hình tượng Đất nước trong văn học Việt Nam 1945 – 1975 – Chuyên đề | Học Văn Cùng Ai',
  description: 'Từ mĩ học sử thi đến cái nhìn đa thanh: thiết chế văn nghệ, ba chặng vận động của hình tượng Đất nước, văn học đô thị miền Nam, phản tỉnh hậu chiến và góc nhìn Việt Nam học quốc tế.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Văn học Việt Nam · 1945 – 1975"
      title="Hình tượng Đất nước trong văn học Việt Nam giai đoạn 1945 – 1975"
      lede="Từ mĩ học sử thi đến cái nhìn đa thanh."
      sections={sections}
      introHtml={introHtml}
    />
  )
}
