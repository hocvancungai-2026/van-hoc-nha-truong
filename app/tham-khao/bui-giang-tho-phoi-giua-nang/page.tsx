import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Bùi Giáng: thơ phơi giữa nắng (Huỳnh Như Phương) – Tham khảo | Học Văn Cùng Ai',
  description: 'Tham luận của Huỳnh Như Phương tại Tọa đàm khoa học về Bùi Giáng (2013): sáu đặc điểm làm nên sự độc đáo của thơ và người Bùi Giáng.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Phê bình thơ"
      title="Bùi Giáng: thơ phơi giữa nắng"
      lede="Huỳnh Như Phương — tham luận tại Tọa đàm khoa học về Bùi Giáng, 14.9.2013."
      sections={[]}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
