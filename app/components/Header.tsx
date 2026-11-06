
const menu = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Chuyên đề', href: '/#chuyen-de' },
  { label: 'Luyện đề', href: '/#luyen-de' },
  { label: 'Tham khảo', href: '/#tham-khao' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">Văn học và nhà trường · Dành cho giáo viên và học sinh THPT</div>
      <div className="container brand-row">
        <div className="logo">VH</div>
        <div>
          <div className="brand">Học Văn Cùng Ai</div>
          <div className="brand-sub">Chuyên đề · Luyện đề · Tham khảo</div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container nav-inner">
          {menu.map(m => (
            <a key={m.href} href={m.href}>{m.label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
