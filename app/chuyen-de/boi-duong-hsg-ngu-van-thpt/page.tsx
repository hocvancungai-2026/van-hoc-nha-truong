import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Bồi dưỡng học sinh giỏi Ngữ văn THPT – Chuyên đề | Học Văn Cùng Ai',
  description: 'Phương pháp luận nghị luận văn học, năm nguyên tắc vận dụng lí luận văn học, hệ thống chuyên đề văn học trọng tâm và phương pháp nghị luận xã hội cho học sinh giỏi Ngữ văn THPT.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Bồi dưỡng học sinh giỏi"
      title="Chuyên đề bồi dưỡng học sinh giỏi môn Ngữ văn THPT"
      lede="Tài liệu tham khảo dành cho giáo viên và học sinh ôn thi học sinh giỏi."
      sections={sections}
    />
  )
}
