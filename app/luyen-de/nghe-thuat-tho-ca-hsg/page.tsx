import type { Metadata } from 'next'
import Article from '../../components/Article'
import { hubSections } from './hub'

export const metadata: Metadata = {
  title: 'Tuyển tập 5 đề thi HSG Nghệ thuật thơ ca – Luyện đề | Học Văn Cùng Ai',
  description: 'Năm đề nghị luận lí luận thơ ca cho học sinh giỏi Ngữ văn THPT, kèm dàn ý chi tiết 5 bước và bài văn mẫu hoàn chỉnh.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Luyện đề · Ngữ văn THPT · Bồi dưỡng học sinh giỏi"
      title="Tuyển tập 5 đề thi HSG: Nghệ thuật thơ ca"
      lede="Dàn ý chi tiết và bài văn mẫu xuất sắc."
      sections={hubSections}
      backHref="/#luyen-de"
      backLabel="Luyện đề"
    />
  )
}
