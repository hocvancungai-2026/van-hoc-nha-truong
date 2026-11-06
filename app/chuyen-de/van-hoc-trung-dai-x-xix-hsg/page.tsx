import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Văn học Việt Nam thời trung đại (thế kỷ X – XIX) – Chuyên đề HSG | Học Văn Cùng Ai',
  description: 'Tiến trình và các giai đoạn văn học trung đại Việt Nam, văn học chữ Hán và chữ Nôm, cảm hứng yêu nước – nhân đạo, thi pháp và định hướng làm bài cho học sinh giỏi Ngữ văn.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Văn học trung đại · Thế kỷ X – hết thế kỷ XIX"
      title="Văn học Việt Nam thời trung đại"
      lede="Tài liệu dành cho học sinh giỏi môn Ngữ văn."
      sections={sections}
    />
  )
}
