import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections, introHtml, outroHtml } from './content'

export const metadata: Metadata = {
  title: 'Đinh Thanh Huyền và chùm thơ mất gà của Lê Vĩnh Tài – Tham khảo | Học Văn Cùng Ai',
  description: 'Chùm thơ “Thử làm bài thơ mất gà” của Lê Vĩnh Tài và bài phê bình “Game thủ” của Đinh Thanh Huyền: văn chương như một cuộc chơi.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Tham khảo · Thơ và phê bình"
      title="Đinh Thanh Huyền và chùm thơ mất gà của Lê Vĩnh Tài"
      lede="Chùm thơ “Thử làm bài thơ mất gà” và bài phê bình “Game thủ”."
      sections={sections}
      introHtml={introHtml}
      outroHtml={outroHtml}
      backHref="/#tham-khao"
      backLabel="Tham khảo"
    />
  )
}
