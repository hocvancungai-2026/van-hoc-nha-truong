import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Thời đất nước gian lao (Nguyễn Việt Chiến) – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài thơ tự do “Thời đất nước gian lao” của Nguyễn Việt Chiến, kèm lời giới thiệu: thơ tưởng niệm người lính, nỗi đau của người mẹ và cái giá của hòa bình.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Thơ tự do"
      title="Thời đất nước gian lao"
      lede="Thơ Nguyễn Việt Chiến."
      sections={[]}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
