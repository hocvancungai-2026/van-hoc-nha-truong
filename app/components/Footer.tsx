import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: '#8a7c6c', marginTop: '64px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 24px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '40px' }}>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 700, color: '#f0e0d0', marginBottom: '10px' }}>Học Văn Cùng Ai</div>
          <p style={{ fontSize: '13.5px', lineHeight: 1.65, marginBottom: '16px' }}>Cổng thông tin giảng dạy và học tập Ngữ văn THPT. Tập hợp tư liệu, phân tích tác phẩm, phương pháp sư phạm và đề thi.</p>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '12px', color: '#5a4e42' }}>© 2026 Học Văn Cùng Ai · Tất cả quyền được bảo lưu</div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d0c0b0', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #2a2520' }}>Tác phẩm</div>
          <ul style={{ listStyle: 'none' }}>
            {[['Lớp 10', '/tac-pham/lop-10'], ['Lớp 11', '/tac-pham/lop-11'], ['Lớp 12', '/tac-pham/lop-12']].map(([l, h]) => (
              <li key={h} style={{ marginBottom: '9px' }}>
                <Link href={h} style={{ fontSize: '13.5px', color: '#7a6c5e' }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d0c0b0', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #2a2520' }}>Đề thi</div>
          <ul style={{ listStyle: 'none' }}>
            {[['Trắc nghiệm', '/de-thi/trac-nghiem'], ['Đọc hiểu', '/de-thi/doc-hieu'], ['Nghị luận văn học', '/de-thi/nghi-luan-van-hoc'], ['Nghị luận xã hội', '/de-thi/nghi-luan-xa-hoi']].map(([l, h]) => (
              <li key={h} style={{ marginBottom: '9px' }}>
                <Link href={h} style={{ fontSize: '13.5px', color: '#7a6c5e' }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d0c0b0', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid #2a2520' }}>Thông tin</div>
          <ul style={{ listStyle: 'none' }}>
            {[['Về trang', '/ve-trang'], ['Phương pháp', '/phuong-phap'], ['Tư liệu', '/tu-lieu']].map(([l, h]) => (
              <li key={h} style={{ marginBottom: '9px' }}>
                <Link href={h} style={{ fontSize: '13.5px', color: '#7a6c5e' }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', borderTop: '1px solid #2a2520', fontFamily: 'var(--sans)', fontSize: '12px', color: '#5a4e42', textAlign: 'center' }}>
        "Văn học là tấm gương phản chiếu tâm hồn dân tộc"
      </div>
    </footer>
  )
}
