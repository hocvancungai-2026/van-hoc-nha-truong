import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Chùm thơ Bình Nguyên Trang: Mầm chữ mọc từ trong gió bụi – Tham khảo | Học Văn Cùng Ai',
  description: 'Năm bài thơ của Bình Nguyên Trang: Bỗng dưng em nhớ, Con chim và ngọn núi thiêng, Mùa thu, Gửi vì sao, Sinh ra (nguồn Vanvn).',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Thơ"
      title="Mầm chữ mọc từ trong gió bụi"
      lede="Chùm thơ Bình Nguyên Trang"
      sections={sections}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
