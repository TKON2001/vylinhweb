# Website Thanh niên & An ninh Quốc phòng

Website chủ đề "Sự tham gia của thanh niên vào an ninh quốc phòng" với thiết kế hiện đại, phong cách quân sự.

## 🎯 Tính năng

- **5 trang chính**: Home, About, Blog, News, Contact
- **Responsive design**: Tối ưu cho mobile và desktop
- **Modern UI**: Glass morphism, gradient, hover effects
- **Blog system**: 2 bài viết chi tiết với nội dung sáng tạo
- **News grid**: 4 tin tức với ảnh minh họa
- **Contact form**: Form liên hệ với validation

## 🎨 Thiết kế

- **Color scheme**: Army green (#4B5320), Charcoal (#1F1F1F), Brass gold (#D4AF37)
- **Typography**: Poppins & Montserrat fonts
- **Effects**: Backdrop blur, glow animations, smooth transitions
- **Layout**: CSS Grid, Flexbox, responsive breakpoints

## 📁 Cấu trúc thư mục

```
Website-ThanhNienQP/
├── index.html              # Trang chủ
├── about.html              # Giới thiệu
├── blog.html               # Danh sách blog
├── blog-post1.html         # Bài blog chi tiết 1
├── blog-post2.html         # Bài blog chi tiết 2
├── news.html               # Tin tức
├── contact.html            # Liên hệ
├── CSS/
│   └── style.css           # Stylesheet chung
├── js/
│   └── main.js             # JavaScript
├── images/                 # Hình ảnh
├── videos/                 # Video
└── fonts/                  # Font chữ
```

## 🚀 Cách chạy

### Cách 1: Mở trực tiếp
Mở file `index.html` bằng trình duyệt

### Cách 2: Local server
```bash
# Python
python -m http.server 5500

# Node.js
npx serve -l 5500
```
Truy cập: `http://localhost:5500/index.html`

## ☁️ Triển khai lên Vercel

### Chuẩn bị
- Tạo tài khoản tại [vercel.com](https://vercel.com/) và cài đặt [Vercel CLI](https://vercel.com/docs/cli) nếu muốn deploy bằng dòng lệnh: `npm i -g vercel`.
- Đảm bảo đã cài Git và commit toàn bộ thay đổi trước khi deploy.

### Triển khai qua giao diện web
1. Push mã nguồn lên GitHub/GitLab/Bitbucket.
2. Đăng nhập Vercel, chọn **Add New Project**.
3. Ở bước cấu hình như hình bạn gửi:
   - **Framework Preset**: chọn **Other**.
   - **Root Directory**: để `.` (mặc định) vì mã nguồn nằm ở thư mục gốc.
   - Trong mục **Build and Output Settings** nhấn **Edit** và:
     - Để trống **Install Command** và **Build Command** (không cần build cho site tĩnh).
     - **Để trống Output Directory** để Vercel sử dụng chính thư mục gốc (nơi chứa `index.html`).
4. Nhấn **Deploy**. Nếu trước đó bạn đã lỡ lưu cấu hình với Output Directory là `HTML`, hãy vào **Settings → General → Build & Development Settings** của dự án và xóa giá trị này trước khi deploy lại.

### Triển khai bằng Vercel CLI
```bash
# Lần đầu
vercel

# Các lần cập nhật tiếp theo
vercel --prod
```
- Khi được hỏi *"What's your project's root directory?"*, nhập `.` (thư mục hiện tại).
- Khi CLI hỏi về build, hãy để trống **Install Command**, **Build Command** và **Output Directory** (chỉ cần nhấn Enter cho từng câu hỏi).
- Sau khi thiết lập lần đầu, Vercel sẽ lưu cấu hình vào thư mục `.vercel`. Nếu đã cấu hình sai Output Directory ở lần trước, xóa thư mục `.vercel` rồi chạy lại `vercel` để thiết lập mới.

### Sau khi deploy
- Kiểm tra các trang `/index.html`, `/about.html`, `/blog.html`, `/news.html`, `/contact.html`, `/blog-post1.html`, `/blog-post2.html`.
- Nếu cập nhật nội dung, chỉ cần commit và chạy lại `vercel --prod` hoặc sử dụng tính năng **Redeploy** trên dashboard.

## 📝 Nội dung

### Blog Posts
1. **"Nhật ký 1 ngày tham gia Học kỳ Quân đội"** - Trải nghiệm của Minh Anh
2. **"Trải nghiệm tham gia diễn tập cứu hộ phòng cháy"** - Kinh nghiệm của Quang Huy

### News
- Học sinh THPT tham gia diễn tập cứu hộ phòng cháy
- Thanh niên công an xung kích bảo vệ an ninh trật tự
- Học kỳ Quân đội 2025 khai mạc
- Chiến dịch tình nguyện hướng về biên giới

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, Backdrop-filter
- **JavaScript**: Vanilla JS cho interactions
- **Responsive**: Mobile-first approach

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎯 Mục tiêu

Website được thiết kế để:
- Tuyên truyền về vai trò thanh niên trong quốc phòng
- Chia sẻ trải nghiệm thực tế
- Kết nối cộng đồng thanh niên yêu nước
- Truyền cảm hứng cho thế hệ trẻ

## 📄 License

© 2025 Thanh niên & An ninh Quốc phòng
