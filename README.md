# GoatSports Frontend Admin

Ứng dụng web cho **chủ sân** và **quản trị nền tảng** (Angular 21, Tailwind CSS 4). Một app phục vụ hai
không gian làm việc; trang nào hiện ra tùy theo vai trò và quyền (permission) của tài khoản. Người chơi dùng app
`goat-sports-client`.

## Chức năng

**Chủ sân** (`owner-*`, `venue-owner-*` trong `src/app/presentation/pages`)

- Bảng điều khiển, quản lý cơ sở và sân con, lịch sân, đơn đặt, check-in bằng QR
- Doanh thu, đánh giá, tài khoản ngân hàng nhận tiền, dự báo nhu cầu
- Tổ chức giải đấu (chỉ chủ sân được tạo giải)
- Nộp hồ sơ đăng ký chủ sân

**Quản trị nền tảng**

- `dashboard`, `system-monitor`: tổng quan, giám sát hệ thống
- `users`, `roles`, `account-appeals`: người dùng, vai trò tùy biến, kháng nghị khóa tài khoản
- `owner-applications`, `platform-venues`, `platform-reviews`: duyệt chủ sân (kèm kết quả xác minh căn cước bằng AI), cơ sở, đánh giá
- `bookings`, `platform-finance`: đơn đặt sân, tài chính
- `moderation`, `platform-community`, `community-analytics`: kiểm duyệt nội dung, CLB và giải, thống kê cộng đồng
- `broadcasts`, `notifications`, `messages`, `logs`, `assistant-knowledge`: gửi thông báo, tin nhắn, nhật ký, kho kiến thức trợ lý AI

Nhân viên có role tùy biến chỉ thấy các trang mà quyền của họ cho phép; ADMIN thấy tất cả.

## Cấu trúc

Mã nguồn theo Clean Architecture, quy tắc phụ thuộc mô tả trong [src/app/ARCHITECTURE.md](src/app/ARCHITECTURE.md):

```
src/app/
├── domain/          # model thuần
├── application/     # port, DTO, use case
├── infrastructure/  # gọi API, repository
└── presentation/    # trang, component dùng chung
```

`npm run check:architecture` kiểm tra import sai tầng.

## Cấu hình

`src/environments/environment.ts` đọc `NG_APP_API_URL` (mặc định `http://localhost:7070`, API Gateway) và các URL
của app client / auth. Mọi route của app nằm dưới tiền tố `/admin/...`.

## Chạy

```bash
npm install
npm start          # http://localhost:4300
npm run build
npm test           # unit test (Vitest)
npx playwright test   # kiểm thử end-to-end (thư mục e2e/)
```

## Triển khai

Build và host trên Vercel.
