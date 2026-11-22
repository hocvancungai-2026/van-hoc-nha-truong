import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml } from './content'

export const metadata: Metadata = {
  title: 'Hình tượng người lính trong văn học Việt Nam 1945 – 1975 – Chuyên đề | Học Văn Cùng Ai',
  description: 'Từ tượng đài sử thi đến sự soi chiếu phê bình hiện đại: nền tảng mĩ học, sự vận động qua hai cuộc kháng chiến, văn học đô thị miền Nam và quá trình giải thiêng sau 1975.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Văn học Việt Nam · 1945 – 1975"
      title="Hình tượng người lính trong văn học Việt Nam giai đoạn 1945 – 1975"
      lede="Từ tượng đài sử thi đến sự soi chiếu phê bình hiện đại."
      sections={sections}
      introHtml={introHtml}
    />
  )
}
