import type { Metadata } from 'next'
import Article from '../../components/Article'
import { sections } from './content'

export const metadata: Metadata = {
  title: 'Văn học lãng mạn Việt Nam (1930 – 1945) – Chuyên đề HSG | Học Văn Cùng Ai',
  description: 'Bản chất, thi pháp và các đỉnh cao nghệ thuật của trào lưu văn học lãng mạn 1930 – 1945: Thơ mới, Tự lực văn đoàn, Thạch Lam, Nguyễn Tuân; kèm đề thi học sinh giỏi và dàn ý.',
}

export default function Page() {
  return (
    <Article
      eyebrow="Chuyên đề · Văn học lãng mạn · 1930 – 1945"
      title="Văn học lãng mạn Việt Nam (1930 – 1945)"
      lede="Bản chất, thi pháp và các đỉnh cao nghệ thuật."
      sections={sections}
    />
  )
}
