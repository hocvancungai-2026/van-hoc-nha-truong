import type { Metadata } from 'next'
import Article from '../../components/Article'
import { baiTho } from './tho'

export const metadata: Metadata = {
  title: 'Đề: Cảm nhận về bài thơ Ghi ở Vạn Lý Trường Thành (Mai Văn Phấn) – Luyện đề | Học Văn Cùng Ai',
  description: 'Đề đọc – viết: cảm nhận về bài thơ Ghi ở Vạn Lý Trường Thành của Mai Văn Phấn, dành cho học sinh luyện tập.',
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const poemHtml =
  baiTho.length > 0
    ? `<div class="verse">${baiTho.map(l => `<p>${l.trim() ? esc(l) : '&nbsp;'}</p>`).join('')}</div>`
    : `<p><em>Văn bản bài thơ do giáo viên phát kèm trong lớp.</em></p>`

const sections = [
  {
    id: 'de-bai',
    num: '1',
    title: 'Đề bài',
    html: `<div class="de-bai"><p><strong>Cảm nhận về bài thơ sau:</strong></p>
<p><strong>GHI Ở VẠN LÝ TRƯỜNG THÀNH</strong><br/><em>Mai Văn Phấn</em></p>
${poemHtml}
<p><small>(*) Phong hỏa đài: đài lửa báo hiệu quân địch trên Vạn Lý Trường Thành.</small></p></div>`,
  },
  {
    id: 'luu-y',
    num: '2',
    title: 'Lưu ý khi làm bài',
    html: `<ul>
<li>Đọc kĩ bài thơ ít nhất hai lần; gọi tên các hình ảnh, giọng điệu và những chuyển đổi trong cách xưng hô, rồi mới lập ý.</li>
<li>Bám vào văn bản: mỗi nhận xét cần có dẫn chứng từ lời thơ và được phân tích.</li>
<li>Bài làm gồm mở bài, thân bài và kết bài rõ ràng; thời gian gợi ý 60–90 phút.</li>
</ul>`,
  },
]

export default function Page() {
  return (
    <Article
      eyebrow="Luyện đề · Đọc – viết"
      title="Cảm nhận về bài thơ “Ghi ở Vạn Lý Trường Thành”"
      lede="Đề luyện tập dành cho học sinh · Tác giả: Mai Văn Phấn"
      sections={sections}
      backHref="/#luyen-de"
      backLabel="Luyện đề"
    />
  )
}
