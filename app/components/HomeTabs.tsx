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
]

function Empty({ text }: { text: string }) {
  return (
    <div className="empty">
      <div className="empty-mark">✦</div>
      <p>{text}</p>
    </div>
  )
}

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
      {active === 'luyen-de' && <Empty text="Các đề luyện tập đang được biên soạn và sẽ sớm có mặt tại đây." />}
      {active === 'tham-khao' && <Empty text="Kho tài liệu tham khảo đang được cập nhật." />}
    </section>
  )
}
