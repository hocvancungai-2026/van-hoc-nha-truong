import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Báo cáo: Văn học giao thời Việt Nam (1900 – 1930) – Chuyên đề | Học Văn Cùng Ai',
  description: 'Nền tảng lý luận, tiến trình hiện đại hóa và chuyển dịch thi pháp của văn học giao thời Việt Nam 1900 – 1930; tác gia, tác phẩm tiêu biểu và hướng tiếp cận cho học sinh giỏi.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Báo cáo · Văn học giao thời 1900 – 1930"
      title="Văn học giao thời Việt Nam (1900 – 1930)"
      lede="Nền tảng lý luận, tiến trình hiện đại hóa và chuyển dịch thi pháp."
      sections={sections}
    />
  )
}
