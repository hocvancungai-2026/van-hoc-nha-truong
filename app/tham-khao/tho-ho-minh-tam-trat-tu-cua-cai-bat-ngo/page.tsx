import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Thơ Hồ Minh Tâm: Trật tự của cái bất ngờ (Đinh Thanh Huyền) – Tham khảo | Học Văn Cùng Ai',
  description: 'Bài phê bình của Đinh Thanh Huyền về thơ Hồ Minh Tâm: logic nội tại, đơn vị ý nghĩa là toàn văn bản, vòng đồng nhất hóa người viết – người đọc (Nhật Lệ, 8/2026).',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Phê bình thơ"
      title="Thơ Hồ Minh Tâm: Trật tự của cái bất ngờ"
      lede="Đinh Thanh Huyền — bài đã đăng tạp chí Nhật Lệ, tháng 8/2026."
      sections={[]}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
