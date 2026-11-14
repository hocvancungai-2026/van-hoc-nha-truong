import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml } from './content'

export const metadata: Metadata = {
  title: 'Một ngôn ngữ nhỏ có thể chứa một thế giới lớn đến đâu? (Nguyễn Khắc Ngân Vi) – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài phát biểu của nhà văn Nguyễn Khắc Ngân Vi tại diễn đàn APEC về tính thuần túy của văn chương, quyền không giản lược thế giới và quyền không đại diện của nhà văn thuộc các ngôn ngữ nhỏ.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Bài phát biểu · Biểu đạt văn học dưới góc nhìn APEC"
      title="Một ngôn ngữ nhỏ có thể chứa một thế giới lớn đến đâu?"
      lede="Bài phát biểu của nhà văn Nguyễn Khắc Ngân Vi tại Diễn đàn về Phát triển Văn học Chất lượng cao khu vực Vịnh Lớn Quảng Đông – Hồng Kông – Ma Cao, Bảo tàng Văn học Quảng Đông, ngày 1 tháng 9."
      sections={[]}
      introHtml={introHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
