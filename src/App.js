import { useState } from 'react';
import './App.css';

const lessons = [
  { id: 'overview', number: '01', title: 'Tổng quan Front-end', text: 'Hiểu vai trò của HTML, CSS, JavaScript và quy trình từ thiết kế đến phát triển.' },
  { id: 'structure', number: '02', title: 'Cấu trúc HTML5', text: 'Tổ chức trang bằng các thẻ semantic, thuộc tính, phần tử block và inline.' },
  { id: 'content', number: '03', title: 'Nội dung & liên kết', text: 'Trình bày văn bản, danh sách, hình ảnh, video và các loại đường dẫn.' },
  { id: 'data', number: '04', title: 'Bảng & biểu mẫu', text: 'Biểu diễn dữ liệu có cấu trúc và thu thập thông tin đúng mục đích.' },
];

function App() {
  const [completed, setCompleted] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleLesson = (id) => {
    setCompleted((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get('name');
    setMessage(`Cảm ơn ${name || 'bạn'}! Thông tin đã được ghi nhận.`);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="HTML Cơ bản - về đầu trang">
          <span className="brand-mark">&lt;/&gt;</span><span>HTML Cơ bản</span>
        </a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        <nav id="main-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Điều hướng chính">
          <a href="#lessons" onClick={() => setMenuOpen(false)}>Nội dung</a>
          <a href="#example" onClick={() => setMenuOpen(false)}>Ví dụ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Liên hệ</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Web Application Development · Frontend 1</p>
            <h1 id="hero-title">Bắt đầu xây dựng website với HTML5</h1>
            <p className="hero-copy">Lộ trình ngắn gọn giúp bạn hiểu cấu trúc trang web, tổ chức nội dung và tạo các thành phần cơ bản.</p>
            <div className="hero-actions">
              <a className="button primary" href="#lessons">Bắt đầu học</a>
              <a className="button secondary" href="#example">Xem cấu trúc mẫu</a>
            </div>
          </div>
          <aside className="summary-card" aria-label="Tóm tắt khóa học">
            <p className="card-label">Tiến độ của bạn</p>
            <strong>{completed.length}/{lessons.length} chủ đề</strong>
            <progress value={completed.length} max={lessons.length}>{completed.length}/{lessons.length}</progress>
            <p>Đánh dấu từng chủ đề sau khi bạn đã đọc xong.</p>
          </aside>
        </section>

        <section className="section" id="lessons" aria-labelledby="lessons-title">
          <div className="section-heading">
            <div><p className="eyebrow">Lộ trình</p><h2 id="lessons-title">4 chủ đề nền tảng</h2></div>
            <p>Đi từ tổng quan đến những thành phần HTML được sử dụng thường xuyên nhất.</p>
          </div>
          <div className="lesson-grid">
            {lessons.map((lesson) => {
              const isDone = completed.includes(lesson.id);
              return (
                <article className={isDone ? 'lesson-card completed' : 'lesson-card'} key={lesson.id}>
                  <span className="lesson-number">{lesson.number}</span>
                  <h3>{lesson.title}</h3><p>{lesson.text}</p>
                  <button type="button" onClick={() => toggleLesson(lesson.id)}>{isDone ? '✓ Đã hoàn thành' : 'Đánh dấu hoàn thành'}</button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section example-section" id="example" aria-labelledby="example-title">
          <div className="section-heading">
            <div><p className="eyebrow">Ví dụ thực tế</p><h2 id="example-title">Một trang HTML có cấu trúc tốt</h2></div>
            <p>Các thẻ semantic mô tả rõ vai trò của từng vùng nội dung cho cả người đọc và trình duyệt.</p>
          </div>
          <div className="code-layout">
            <pre aria-label="Ví dụ mã HTML"><code>{`<!doctype html>
<html lang="vi">
  <head>...</head>
  <body>
    <header>...</header>
    <main>
      <section>...</section>
      <article>...</article>
    </main>
    <footer>...</footer>
  </body>
</html>`}</code></pre>
            <div className="principles">
              <h3>Nguyên tắc cần nhớ</h3>
              <ul>
                <li>Dùng đúng thẻ theo ý nghĩa nội dung.</li>
                <li>Mỗi trang nên có một tiêu đề chính rõ ràng.</li>
                <li>Ảnh luôn có mô tả <code>alt</code> phù hợp.</li>
                <li>Biểu mẫu cần nhãn cho từng trường nhập.</li>
                <li>Kiểm tra trên cả màn hình lớn và điện thoại.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="table-title">
          <div className="section-heading compact"><div><p className="eyebrow">Tra cứu nhanh</p><h2 id="table-title">Ba ngôn ngữ cốt lõi</h2></div></div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Ngôn ngữ</th><th>Vai trò</th><th>Ví dụ</th></tr></thead>
              <tbody>
                <tr><td>HTML</td><td>Tạo cấu trúc và ý nghĩa nội dung</td><td><code>&lt;article&gt;</code></td></tr>
                <tr><td>CSS</td><td>Trình bày và bố cục giao diện</td><td><code>display: grid</code></td></tr>
                <tr><td>JavaScript</td><td>Thêm hành vi và tương tác</td><td><code>addEventListener()</code></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Thực hành biểu mẫu</p><h2 id="contact-title">Nhận tài liệu học tập</h2>
            <p>Điền thông tin để thực hành cách một form HTML hoạt động. Dữ liệu chỉ được xử lý minh họa trên trang.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Họ và tên</label><input id="name" name="name" type="text" placeholder="Nguyễn Văn A" required />
            <label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="ban@example.com" required />
            <label className="checkbox-row"><input type="checkbox" name="updates" /><span>Nhận cập nhật bài học mới</span></label>
            <button className="button primary" type="submit">Gửi thông tin</button>
            {message && <p className="form-message" role="status">{message}</p>}
          </form>
        </section>
      </main>

      <footer><p>HTML Cơ bản · Tài liệu nhập môn Front-end</p><a href="#top">Về đầu trang ↑</a></footer>
    </div>
  );
}

export default App;
