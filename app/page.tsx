import HomeTabs from './components/HomeTabs'

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">✦ Văn học và nhà trường</div>
          <h1>Ngôn ngữ là cái vỏ của tư duy</h1>
          <p>Cổng thông tin giảng dạy và học tập Ngữ văn THPT: chuyên đề chuyên sâu, đề luyện tập và tài liệu tham khảo.</p>
        </div>
      </section>
      <HomeTabs />
    </div>
  )
}
