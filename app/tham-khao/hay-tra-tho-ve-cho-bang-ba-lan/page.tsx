import type { Metadata } from 'next'
import Article from '../../components/Article'
import { introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Hãy trả thơ về cho Bàng Bá Lân! (Hoàng Chí Quang) – Tham khảo | Học Văn Cùng Ai',
  description: 'Hoàng Chí Quang kể lại lần gặp nhà thơ Bàng Bá Lân và khẳng định hai câu “Hỡi cô tát nước bên đàng / Sao cô lại múc trăng vàng đổ đi” là thơ của ông, kèm lời giải thích về chữ “múc trăng vàng”.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Văn học và đời sống"
      title="Hãy trả thơ về cho Bàng Bá Lân!"
      lede="Hoàng Chí Quang — báo Tiền Phong."
      sections={[]}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
