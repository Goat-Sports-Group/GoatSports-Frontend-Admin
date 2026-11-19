import { MascotLines } from './goat-mascot.component';

/** Lời thoại của linh vật dê trên app quản trị (chủ sân + quản trị viên), theo tiền tố đường dẫn. */
export const ADMIN_MASCOT_LINES: MascotLines = {
  hello: 'Chào sếp! GOAT trực ca hôm nay 🐐',
  hide: 'Ẩn linh vật',
  routes: [
    { prefix: '/admin/dashboard', text: 'Tổng quan hôm nay đây, có gì bất thường mình báo liền.' },
    // Chủ sân
    { prefix: '/admin/venues', text: 'Cập nhật ảnh, giờ mở cửa và tiện ích để khách dễ chọn sân.' },
    { prefix: '/admin/courts', text: 'Thêm sân con, chỉnh giá giờ cao điểm ở đây.' },
    { prefix: '/admin/schedule', text: 'Lịch sân theo ngày: kéo xem khung nào còn trống.' },
    { prefix: '/admin/owner-bookings', text: 'Đơn đặt sân mới nhất, nhớ xác nhận kịp nha.' },
    { prefix: '/admin/check-in', text: 'Quét QR của khách để nhận sân ✅' },
    { prefix: '/admin/finance', text: 'Doanh thu theo ngày, tháng — xuất báo cáo khi cần.' },
    { prefix: '/admin/bank-account', text: 'Tài khoản nhận tiền chuyển về từ GOAT Sports.' },
    { prefix: '/admin/reviews', text: 'Khách nói gì về sân? Trả lời đánh giá để giữ khách.' },
    { prefix: '/admin/tournaments', text: 'Tổ chức giải: chia bảng, xếp lịch, cập nhật kết quả 🏆' },
    { prefix: '/admin/applications', text: 'Hồ sơ đăng ký chủ sân của bạn.' },
    // Quản trị viên
    { prefix: '/admin/users', text: 'Quản lý người dùng: khóa, mở khóa, đổi vai trò.' },
    { prefix: '/admin/roles', text: 'Phân quyền theo vai trò ở đây.' },
    { prefix: '/admin/owner-applications', text: 'Hồ sơ chủ sân đang chờ duyệt — kiểm tra giấy tờ kỹ nha.' },
    { prefix: '/admin/platform-venues', text: 'Toàn bộ sân trên nền tảng.' },
    { prefix: '/admin/bookings', text: 'Đơn đặt sân toàn hệ thống.' },
    { prefix: '/admin/platform-finance', text: 'Dòng tiền nền tảng: thanh toán, hoàn tiền, chi trả.' },
    { prefix: '/admin/platform-reviews', text: 'Đánh giá trên toàn nền tảng.' },
    { prefix: '/admin/platform-community', text: 'Bài viết và hoạt động cộng đồng.' },
    { prefix: '/admin/community-analytics', text: 'Số liệu cộng đồng theo thời gian 📈' },
    { prefix: '/admin/moderation', text: 'Nội dung bị báo cáo đang chờ xử lý.' },
    { prefix: '/admin/account-appeals', text: 'Kháng nghị mở khóa tài khoản cần xem xét.' },
    { prefix: '/admin/broadcasts', text: 'Gửi thông báo tới người dùng.' },
    { prefix: '/admin/assistant-knowledge', text: 'Kiến thức cho trợ lý AI trả lời người dùng.' },
    { prefix: '/admin/system', text: 'Sức khỏe hệ thống từ Prometheus và Grafana.' },
    { prefix: '/admin/logs', text: 'Nhật ký kiểm toán — chuỗi hash không sửa được đâu nhé.' },
    // Chung
    { prefix: '/admin/messages', text: 'Tin nhắn với khách và người chơi 💬' },
    { prefix: '/admin/notifications', text: 'Thông báo mới nhất nằm ở đây.' }
  ],
  clicks: [
    'Hôm nay sân kín lịch chưa sếp? 📅',
    'GOAT = Greatest Of All Time 🐐',
    'Uống nước nghỉ tay chút nha!',
    'Có đơn mới là mình báo liền.',
    'Số đẹp quá, khao nước đi sếp 😄'
  ]
};
