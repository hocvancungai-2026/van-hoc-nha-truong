import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Văn học hiện thực phê phán Việt Nam (1930 – 1945) – Chuyên đề | Học Văn Cùng Ai',
  description: 'Tiền đề lịch sử – xã hội, ba chặng vận động, các cuộc tranh luận lý luận, thể loại và tác giả trụ cột (Nguyễn Công Hoan, Ngô Tất Tố, Vũ Trọng Phụng, Nguyên Hồng, Nam Cao) của văn học hiện thực phê phán 1930 – 1945.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Văn học hiện thực phê phán · 1930 – 1945"
      title="Văn học hiện thực phê phán Việt Nam (1930 – 1945)"
      lede="Tiến trình, thi pháp và di sản."
      sections={sections}
    />
  )
}
