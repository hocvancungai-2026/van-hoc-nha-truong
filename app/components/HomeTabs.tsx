'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type TabId = 'chuyen-de' | 'luyen-de' | 'tham-khao'

const tabs: { id: TabId; label: string; blurb: string }[] = [
  { id: 'chuyen-de', label: 'Chuyên đề', blurb: 'Hệ thống kiến thức và phương pháp chuyên sâu, bồi dưỡng học sinh giỏi.' },
  { id: 'luyen-de', label: 'Luyện đề', blurb: 'Đề luyện tập kèm đáp án và biểu điểm.' },
  { id: 'tham-khao', label: 'Tham khảo', blurb: 'Tài liệu mở rộng cho giáo viên và học sinh.' },
]

const chuyenDe = [
  {
    href: '/chuyen-de/boi-duong-hsg-ngu-van-thpt',
    tag: 'Bồi dưỡng học sinh giỏi',
    title: 'Chuyên đề bồi dưỡng học sinh giỏi môn Ngữ văn THPT',
    excerpt: 'Phương pháp luận nghị luận văn học, năm nguyên tắc đưa lí luận văn học vào bài văn, hệ thống chuyên đề văn học trọng tâm và phương pháp nghị luận xã hội.',
    meta: '5 phần',
  },
  {
    href: '/chuyen-de/van-hoc-trung-dai-x-xix-hsg',
    tag: 'Văn học trung đại · HSG',
    title: 'Văn học Việt Nam thời trung đại (thế kỷ X – hết thế kỷ XIX)',
    excerpt: 'Các giai đoạn phát triển, văn học chữ Hán và chữ Nôm, cảm hứng yêu nước – nhân đạo, thi pháp trung đại và định hướng làm bài cho học sinh giỏi.',
    meta: '6 phần',
  },
  {
    href: '/chuyen-de/van-hoc-giao-thoi',
    tag: 'Văn học giao thời',
    title: 'Văn học giao thời Việt Nam',
    excerpt: 'Bối cảnh lịch sử – xã hội, sự thức tỉnh của cái “Tôi” cá nhân, cách tân thi pháp của Thơ mới và chất thơ – tinh thần nhân đạo trong văn xuôi hiện đại.',
    meta: '5 phần',
  },
]

const luyenDe = [
  {
    href: '/luyen-de/nghe-thuat-tho-ca-hsg',
    tag: 'Đề HSG · Nghệ thuật thơ ca',
    title: 'Tuyển tập 5 đề thi HSG: Nghệ thuật thơ ca',
    excerpt: 'Năm đề nghị luận lí luận thơ ca, mỗi đề có dàn ý chi tiết 5 bước và bài văn mẫu hoàn chỉnh: Vội vàng, Tây Tiến, Tràng giang, Đây thôn Vĩ Dạ, Xuân Diệu – Hàn Mặc Tử…',
    meta: '5 đề',
  },
]

const thamKhao = [
  {
    href: '/tham-khao/nguyen-duy-thi-si-thao-dan',
    tag: 'Phê bình thơ · Chu Văn Sơn',
    title: 'Nguyễn Duy thi sĩ thảo dân',
    excerpt: 'Về thế giới nghệ thuật thơ Nguyễn Duy: từ cái “quê” trong thơ, những chiếc kim la bàn của một đời thơ đến lục bát điệu nói và cây đàn hương hoả.',
    meta: 'Bài phê bình · 5 phần',
  },
  {
    href: '/tham-khao/tran-le-son-y-cong-an-thi-ca',
    tag: 'Phê bình thơ · Du Tử Lê',
    title: 'Trần Lê Sơn Ý: Những công-án-thi-ca không giải đáp?',
    excerpt: 'Du Tử Lê đọc thơ Trần Lê Sơn Ý, nhà thơ trẻ sinh năm 1977: những câu thơ “rất trong”, “rất tươi” và những “công-án-thơ” mở ra nhiều tầng liên tưởng.',
    meta: 'Bài phê bình',
  },
]

export default function HomeTabs() {
  const [active, setActive] = useState<TabId>('chuyen-de')

  useEffect(() => {
    const read = () => {
      const h = window.location.hash.replace('#', '') as TabId
      if (tabs.some(t => t.id === h)) setActive(h)
    }
    read()
    window.addEventListener('hashchange', read)
    return () => window.removeEventListener('hashchange', read)
  }, [])

  const select = (id: TabId) => {
    setActive(id)
    history.replaceState(null, '', `#${id}`)
  }

  const current = tabs.find(t => t.id === active)!

  return (
    <section className="container tabs-section">
      <div role="tablist" className="tab-bar">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={'tab' + (active === t.id ? ' tab-active' : '')}
            onClick={() => select(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className="tab-blurb">{current.blurb}</p>

      {active === 'chuyen-de' && (
        <div className="card-grid">
          {chuyenDe.map(c => (
            <Link key={c.href} href={c.href} className="card">
              <div className="card-tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.excerpt}</p>
              <div className="card-meta">{c.meta} · Đọc chuyên đề →</div>
            </Link>
          ))}
        </div>
      )}
      {active === 'luyen-de' && (
        <div className="card-grid">
          {luyenDe.map(c => (
            <Link key={c.href} href={c.href} className="card">
              <div className="card-tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.excerpt}</p>
              <div className="card-meta">{c.meta} · Vào luyện đề →</div>
            </Link>
          ))}
        </div>
      )}
      {active === 'tham-khao' && (
        <div className="card-grid">
          {thamKhao.map(c => (
            <Link key={c.href} href={c.href} className="card">
              <div className="card-tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.excerpt}</p>
              <div className="card-meta">{c.meta} · Đọc bài →</div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
