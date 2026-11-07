import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Văn học giao thời Việt Nam – Chuyên đề | Học Văn Cùng Ai',
  description: 'Bối cảnh lịch sử – xã hội, chủ nghĩa yêu nước và sự thức tỉnh của cái “Tôi” cá nhân, cách tân thi pháp của Thơ mới và văn xuôi hiện đại trong giai đoạn giao thời cuối thế kỷ XIX – những năm 1930.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Văn học giao thời · Cuối thế kỷ XIX – 1930"
      title="Văn học giao thời Việt Nam"
      lede="Từ văn học trung đại sang văn học hiện đại: bối cảnh, tư tưởng và cuộc cách tân thi pháp."
      sections={sections}
    />
  )
}
