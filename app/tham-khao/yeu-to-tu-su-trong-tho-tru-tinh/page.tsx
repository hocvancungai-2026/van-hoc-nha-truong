import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Yếu tố tự sự trong thơ trữ tình và thể loại truyện thơ – Tham khảo | Học Văn Cùng Ai',
  description: 'Khái niệm tự sự – trữ tình, biểu hiện và vai trò của yếu tố tự sự trong thơ trữ tình; thể loại truyện thơ (truyện thơ dân gian, truyện thơ Nôm) và các bước phân tích một văn bản truyện thơ.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Lí luận văn học"
      title="Yếu tố tự sự trong thơ trữ tình và thể loại truyện thơ"
      lede="Khái niệm, biểu hiện, vai trò; truyện thơ dân gian, truyện thơ Nôm và cách phân tích."
      sections={sections}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
