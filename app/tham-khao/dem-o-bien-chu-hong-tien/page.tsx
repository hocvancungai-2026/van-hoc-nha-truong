import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml } from './content'

export const metadata: Metadata = {
  title: 'Đêm ở biển (Chu Hồng Tiến) và cảm nhận của học sinh – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài thơ “Đêm ở biển” của Chu Hồng Tiến, kèm đoạn bài tập học sinh giỏi về quá trình thẩm mĩ hóa cảm xúc trong thơ.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Thơ và bài làm học sinh"
      title="Đêm ở biển"
      lede="Thơ Chu Hồng Tiến và một đoạn bài tập HSG về sự thẩm mĩ hóa cảm xúc."
      sections={[]}
      introHtml={introHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
