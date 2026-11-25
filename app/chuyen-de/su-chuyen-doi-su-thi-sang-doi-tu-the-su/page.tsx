import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml } from './content'

export const metadata: Metadata = {
  title: 'Từ khuynh hướng sử thi – lãng mạn đến khuynh hướng đời tư – thế sự thời kỳ Đổi mới – Chuyên đề | Học Văn Cùng Ai',
  description: 'Sự chuyển đổi hệ hình của văn học Việt Nam: đặc trưng sử thi – lãng mạn 1945–1975, giai đoạn bản lề 1975–1985, bước ngoặt 1986–1987 và diện mạo khuynh hướng đời tư – thế sự thời Đổi mới.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Văn học Việt Nam · Đổi mới"
      title="Sự chuyển đổi từ khuynh hướng sử thi và cảm hứng lãng mạn (1945 – 1975) sang khuynh hướng đời tư – thế sự trong văn học Việt Nam thời kỳ Đổi mới"
      lede="Từ hệ hình sử thi – lãng mạn đến hệ hình đời tư – thế sự."
      sections={sections}
      introHtml={introHtml}
    />
  )
}
