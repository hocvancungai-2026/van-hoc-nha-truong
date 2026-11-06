import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Article from '../../../components/Article'
import { deThi } from '../de'

const BASE = '/luyen-de/nghe-thuat-tho-ca-hsg'

export function generateStaticParams() {
  return deThi.map(d => ({ slug: d.slug }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = deThi.find(x => x.slug === slug)
  if (!d) return {}
  return {
    title: `Đề ${d.num}: ${d.title} – Luyện đề HSG | Học Văn Cùng Ai`,
    description: `Đề nghị luận thơ ca ${d.num}/5 (${d.nhanDinh}) kèm dàn ý chi tiết 5 bước và bài văn mẫu hoàn chỉnh.`,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const i = deThi.findIndex(x => x.slug === slug)
  if (i < 0) notFound()
  const d = deThi[i]
  const prev = deThi[i - 1], next = deThi[i + 1]
  return (
    <Article
      eyebrow={`Luyện đề · HSG · Nghệ thuật thơ ca · Đề ${d.num}/5`}
      title={d.title}
      lede={`Nhận định: ${d.nhanDinh} · Tác phẩm khảo sát: ${d.tacPham}`}
      sections={d.sections}
      backHref={BASE}
      backLabel="Tuyển tập 5 đề"
      pager={{
        prev: prev && { href: `${BASE}/${prev.slug}`, label: `Đề ${prev.num}` },
        next: next && { href: `${BASE}/${next.slug}`, label: `Đề ${next.num}` },
      }}
    />
  )
}
