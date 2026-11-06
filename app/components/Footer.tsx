/* eslint-disable @next/next/no-html-link-for-pages -- liên kết #tab cần thẻ <a> thường để sự kiện hashchange hoạt động */

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">Học Văn Cùng Ai</div>
          <p>Văn học và nhà trường — cổng thông tin giảng dạy và học tập Ngữ văn THPT.</p>
        </div>
        <ul>
          <li><a href="/#chuyen-de">Chuyên đề</a></li>
          <li><a href="/#luyen-de">Luyện đề</a></li>
          <li><a href="/#tham-khao">Tham khảo</a></li>
        </ul>
      </div>
      <div className="footer-note">© 2026 Học Văn Cùng Ai · Trường THPT Quốc Oai</div>
    </footer>
  )
}
