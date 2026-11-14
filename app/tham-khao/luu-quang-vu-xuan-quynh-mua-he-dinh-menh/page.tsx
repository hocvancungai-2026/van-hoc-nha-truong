import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Lưu Quang Vũ – Xuân Quỳnh và mùa hè định mệnh (Lưu Quang Định) – Tham khảo | Học Văn Cùng Ai',
  description: 'Hồi ức của Lưu Quang Định về mùa hè cuối cùng của Lưu Quang Vũ và Xuân Quỳnh (1988), kèm hai bài thơ cuối: “Thư viết cho Quỳnh trên máy bay” và “Thời gian trắng”.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Hồi ức và thơ"
      title="Lưu Quang Vũ – Xuân Quỳnh và mùa hè định mệnh"
      lede="Lưu Quang Định (em ruột Lưu Quang Vũ) — kèm hai bài thơ cuối cùng của anh chị."
      sections={sections}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
