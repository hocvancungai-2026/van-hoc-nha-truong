import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Trần Lê Sơn Ý: Những công-án-thi-ca không giải đáp? (Du Tử Lê) – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài viết của Du Tử Lê về thơ Trần Lê Sơn Ý: những câu thơ “rất trong”, “rất tươi” và những “công-án-thơ” không có lời giải đáp.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Phê bình thơ"
      title="Trần Lê Sơn Ý: Những công-án-thi-ca không giải đáp?"
      lede="Du Tử Lê"
      sections={[]}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
