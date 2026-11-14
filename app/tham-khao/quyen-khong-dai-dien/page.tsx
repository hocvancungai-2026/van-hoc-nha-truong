import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml } from './content'

export const metadata: Metadata = {
  title: 'Quyền không đại diện – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài phát biểu của một nhà văn Việt Nam về tính thuần túy của văn chương, quyền không giản lược thế giới và quyền không đại diện của nhà văn thuộc các ngôn ngữ nhỏ.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Bài phát biểu · Văn chương và thế giới"
      title="Quyền không đại diện"
      lede="Bài phát biểu của một nhà văn Việt Nam tại diễn đàn APEC."
      sections={[]}
      introHtml={introHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
