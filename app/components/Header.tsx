'use client'
import Link from 'next/link'
import { useState } from 'react'

const menu = [
  {
    label: 'Tác phẩm', href: '/tac-pham',
    sub: [
      { label: 'Lớp 10', href: '/tac-pham/lop-10' },
      { label: 'Lớp 11', href: '/tac-pham/lop-11' },
      { label: 'Lớp 12', href: '/tac-pham/lop-12' },
    ]
  },
  {
    label: 'Thể loại', href: '/the-loai',
    sub: [
      { label: 'Thơ', href: '/the-loai/tho' },
      { label: 'Truyện ngắn', href: '/the-loai/truyen-ngan' },
      { label: 'Nghị luận', href: '/the-loai/nghi-luan' },
    ]
  },
  {
    label: 'Đề thi', href: '/de-thi',
    sub: [
      { label: 'Trắc nghiệm', href: '/de-thi/trac-nghiem' },
      { label: 'Đọc hiểu', href: '/de-thi/doc-hieu' },
      { label: 'Nghị luận văn học', href: '/de-thi/nghi-luan-van-hoc' },
      { label: 'Nghị luận xã hội', href: '/de-thi/nghi-luan-xa-hoi' },
    ]
  },
  { label: 'Tư liệu', href: '/tu-lieu', sub: [] },
  { label: 'Phương pháp', href: '/phuong-phap', sub: [] },
  { label: 'Về trang', href: '/ve-trang', sub: [] },
]

export default function Header() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <header style={{ background: 'var(--paper)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ background: 'var(--ink)', color: '#c8b8a8', fontFamily: 'var(--sans)', fontSize: '12px', padding: '6px 0', textAlign: 'center', letterSpacing: '0.06em' }}>
        Cổng thông tin giảng dạy Ngữ văn · Dành cho giáo viên và học sinh THPT
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0', display: 'flex', alignItems: 'flex-end', gap: '14px' }}>
        <div style={{ width: '48px', height: '48px', background: 'var(--accent)', color: '#fff', fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 700, fontStyle: 'italic', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>VH</div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.1 }}>Học Văn Cùng Ai</div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', color: 'var(--ink-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }}>Tư liệu · Phân tích · Giảng dạy</div>
        </div>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--border), transparent)', marginBottom: '12px' }} />
        <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '13px', color: 'var(--ink-soft)', marginBottom: '12px', whiteSpace: 'nowrap' }}>"Văn học là nhân học"</div>
      </div>
      <nav style={{ borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center' }}>
          {menu.map((item) => (
            <div key={item.href} style={{ position: 'relative' }}
              onMouseEnter={() => setOpen(item.href)}
              onMouseLeave={() => setOpen(null)}>
              <Link href={item.href} style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '13.5px', fontWeight: 500, color: 'var(--ink-mid)', padding: '12px 14px', whiteSpace: 'nowrap' }}>
                {item.label}
              </Link>
              {item.sub.length > 0 && open === item.href && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid var(--border)', boxShadow: '0 8px 24px rgba(26,22,18,0.12)', minWidth: '200px', zIndex: 100 }}>
                  {item.sub.map(s => (
                    <Link key={s.href} href={s.href} style={{ display: 'block', fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--ink-mid)', padding: '10px 16px', borderBottom: '1px solid var(--border-light)' }}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}