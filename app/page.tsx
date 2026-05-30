import Link from 'next/link'

const featuredArticles = [
  {
    slug: 'vo-nhat-kim-lan',
    title: 'Vợ Nhặt – Kim Lân: Ánh sáng nhân đạo trong bóng tối nạn đói 1945',
    excerpt: 'Giữa những trang văn viết về nạn đói khủng khiếp nhất lịch sử dân tộc, Kim Lân đã dựng lên một câu chuyện kỳ lạ về tình người và khát vọng sống.',
    category: 'Truyện ngắn · Lớp 12',
    href: '/tac-pham/lop-12/vo-nhat-kim-lan',
    readTime: '12 phút',
  },
  {
    slug: 'day-thon-vi-da',
    title: 'Đây Thôn Vĩ Dạ – nỗi khắc khoải của một hồn thơ tuyệt vọng',
    excerpt: 'Hàn Mặc Tử viết bài thơ này trong đớn đau tột cùng, nhưng từng câu chữ lại ánh lên vẻ đẹp kỳ lạ của một tâm hồn yêu đời đến tha thiết.',
    category: 'Thơ · Lớp 11',
    href: '/tac-pham/lop-11/day-thon-vi-da',
    readTime: '10 phút',
  },
  {
    slug: 'chiec-thuyen-ngoai-xa',
    title: 'Chiếc Thuyền Ngoài Xa – nghịch lý của vẻ đẹp và nỗi đau',
    excerpt: 'Nguyễn Minh Châu đặt ra câu hỏi nhức nhối: nghệ thuật có thể tách rời cuộc sống không?',
    category: 'Truyện ngắn · Lớp 12',
    href: '/tac-pham/lop-12/chiec-thuyen-ngoai-xa',
    readTime: '11 phút',
  },
]

const recentArticles = [
  { title: 'Đất Nước – Nguyễn Khoa Điềm: Đất nước của nhân dân', href: '/tac-pham/lop-12/dat-nuoc', category: 'Thơ · Lớp 12' },
  { title: 'Vội Vàng – Xuân Diệu: Triết lý sống cuồng nhiệt', href: '/tac-pham/lop-11/voi-vang', category: 'Thơ · Lớp 11' },
  { title: 'Tuyên ngôn Độc lập – Hồ Chí Minh', href: '/tac-pham/lop-12/tuyen-ngon-doc-lap', category: 'Nghị luận · Lớp 12' },
  { title: 'Chí Phèo – Nam Cao: Bi kịch của con người bị tha hóa', href: '/tac-pham/lop-11/chi-pheo', category: 'Truyện ngắn · Lớp 11' },
  { title: 'Cách viết mở bài ấn tượng cho nghị luận văn học', href: '/phuong-phap/mo-bai-nghi-luan', category: 'Phương pháp' },
]

export default function HomePage() {
  return (
    <div>
      <section style={{ background: 'var(--ink)', padding: '48px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>✦ Bài viết nổi bật</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', background: 'var(--accent)', padding: '3px 10px', marginBottom: '14px' }}>{featuredArticles[0].category}</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontSize: '34px', fontWeight: 700, color: '#f5efe8', lineHeight: 1.22, marginBottom: '16px' }}>{featuredArticles[0].title}</h1>
              <p style={{ fontFamily: 'var(--body-serif)', fontSize: '16px', color: '#b0a090', lineHeight: 1.7, marginBottom: '20px' }}>{featuredArticles[0].excerpt}</p>
              <Link href={featuredArticles[0].href} style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'var(--gold)' }}>Đọc bài phân tích →</Link>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#807060', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #3a3228' }}>Đọc nhiều nhất</div>
              {recentArticles.map((a, i) => (
                <Link key={a.href} href={a.href} style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: '1px solid #2a2520', textDecoration: 'none' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 700, color: '#3d3530', lineHeight: 1, flexShrink: 0, width: '26px' }}>{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '2px' }}>{a.category}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '14px', color: '#d8c8b8', lineHeight: 1.38 }}>{a.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '48px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 700, color: 'var(--ink)' }}>Bài viết mới nhất</h2>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
            {featuredArticles.map(a => (
              <Link key={a.slug} href={a.href} style={{ display: 'block', borderBottom: '1px solid var(--border-light)', paddingBottom: '20px' }}>
                <div style={{ width: '100%', height: '160px', background: 'var(--paper-dark)', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontStyle: 'italic', color: 'var(--border)' }}>VH</span>
                </div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px' }}>{a.category}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '16px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.38, marginBottom: '8px' }}>{a.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '13px', color: 'var(--ink-muted)' }}>{a.readTime} đọc</p>
              </Link>
            ))}
          </div>
        </div>
        <aside>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink)', paddingBottom: '10px', borderBottom: '2px solid var(--ink)', marginBottom: '14px' }}>Theo lớp</div>
            {[['Lớp 10', '/tac-pham/lop-10'], ['Lớp 11', '/tac-pham/lop-11'], ['Lớp 12', '/tac-pham/lop-12']].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border-light)', fontFamily: 'var(--sans)', fontSize: '14px', color: 'var(--ink-mid)' }}>
                {l} <span style={{ opacity: 0.4 }}>›</span>
              </Link>
            ))}
          </div>
          <div style={{ background: 'var(--ink)', padding: '22px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '17px', fontWeight: 700, fontStyle: 'italic', color: '#f0e8dc', marginBottom: '10px' }}>"Văn học là tấm gương phản chiếu tâm hồn dân tộc"</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: '#7a6c5e' }}>— Trang dành cho những người yêu văn chương</div>
          </div>
        </aside>
      </section>
    </div>
  )
}