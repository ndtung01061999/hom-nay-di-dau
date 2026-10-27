import type { Category, CityId, Place, PriceLevel } from "./types";

// Dữ liệu mẫu — địa chỉ/giá có thể đã thay đổi, nên kiểm tra lại trên Google Maps.
function p(
  id: string,
  city: CityId,
  district: string,
  category: Category,
  price: PriceLevel,
  emoji: string,
  name: string,
  address: string,
  description: string,
): Place {
  return { id, city, district, category, price, emoji, name, address, description };
}

const HN: Place[] = [
  // Ăn sáng
  p("hn-pho-bat-dan", "ha-noi", "Hoàn Kiếm", "an-sang", 2, "🍜", "Phở Bát Đàn", "49 Bát Đàn, Hoàn Kiếm", "Phở bò gia truyền, nước dùng trong, thường phải xếp hàng."),
  p("hn-banh-mi-25", "ha-noi", "Hoàn Kiếm", "an-sang", 1, "🥖", "Bánh mì 25", "25 Hàng Cá, Hoàn Kiếm", "Bánh mì giòn, nhân đầy đặn, nổi tiếng với khách du lịch."),
  p("hn-xoi-yen", "ha-noi", "Hoàn Kiếm", "an-sang", 1, "🍚", "Xôi Yến", "35B Nguyễn Hữu Huân, Hoàn Kiếm", "Xôi xéo, xôi gà, topping đa dạng, mở từ sáng sớm."),
  p("hn-pho-ga-lam", "ha-noi", "Hoàn Kiếm", "an-sang", 2, "🐔", "Phở gà Nam Ngư", "Phố Nam Ngư, Hoàn Kiếm", "Phở gà ta thơm, thịt dai ngọt."),
  p("hn-bun-rieu-ba-dinh", "ha-noi", "Ba Đình", "an-sang", 1, "🦀", "Bún riêu cua Ngọc Hà", "Phố Ngọc Hà, Ba Đình", "Bún riêu cua đồng đậm vị, giá bình dân."),
  p("hn-banh-cuon-cau-giay", "ha-noi", "Cầu Giấy", "an-sang", 1, "🥟", "Bánh cuốn nóng Cầu Giấy", "Phố Trần Thái Tông, Cầu Giấy", "Bánh cuốn tráng tại chỗ, chả quế thơm."),
  // Bữa chính
  p("hn-bun-cha-huong-lien", "ha-noi", "Hai Bà Trưng", "an-chinh", 2, "🍢", "Bún chả Hương Liên", "24 Lê Văn Hưu, Hai Bà Trưng", "Quán bún chả nổi tiếng từng đón Tổng thống Obama."),
  p("hn-cha-ca-thang-long", "ha-noi", "Hoàn Kiếm", "an-chinh", 3, "🐟", "Chả cá Thăng Long", "21 Đường Thành, Hoàn Kiếm", "Chả cá lăng chiên thì là, ăn kèm bún và mắm tôm."),
  p("hn-bun-bo-nam-bo", "ha-noi", "Hoàn Kiếm", "an-chinh", 2, "🥗", "Bún bò Nam Bộ Bách Phương", "67 Hàng Điếu, Hoàn Kiếm", "Bún trộn bò xào, lạc rang, hành phi, nước mắm chua ngọt."),
  p("hn-pho-cuon", "ha-noi", "Ba Đình", "an-chinh", 2, "🌯", "Phở cuốn Ngũ Xã", "Phố Ngũ Xã, Ba Đình", "Phở cuốn, phở chiên phồng — đặc sản ven hồ Trúc Bạch."),
  p("hn-bun-dau", "ha-noi", "Hoàn Kiếm", "an-chinh", 1, "🍱", "Bún đậu mắm tôm Hàng Khay", "31 Hàng Khay, Hoàn Kiếm", "Mẹt bún đậu đầy đủ chả cốm, thịt luộc, dồi."),
  p("hn-lau-thai-ha", "ha-noi", "Đống Đa", "an-chinh", 3, "🍲", "Phố lẩu Thái Hà", "Phố Thái Hà, Đống Đa", "Cả dãy phố quán lẩu, nướng — hợp đi nhóm đông."),
  p("hn-com-ga-cau-giay", "ha-noi", "Cầu Giấy", "an-chinh", 2, "🍗", "Cơm gà Duy Tân", "Phố Duy Tân, Cầu Giấy", "Cơm văn phòng nhanh gọn, nhiều lựa chọn."),
  p("hn-bun-ca-tay-ho", "ha-noi", "Tây Hồ", "an-chinh", 2, "🐠", "Bún cá Tây Hồ", "Phố Quảng An, Tây Hồ", "Bún cá rô đồng chiên giòn, nước dùng chua thanh."),
  // Ăn vặt
  p("hn-kem-trang-tien", "ha-noi", "Hoàn Kiếm", "an-vat", 1, "🍦", "Kem Tràng Tiền", "35 Tràng Tiền, Hoàn Kiếm", "Kem que, kem ốc huyền thoại của Hà Nội."),
  p("hn-banh-tom-ho-tay", "ha-noi", "Tây Hồ", "an-vat", 2, "🦐", "Bánh tôm Hồ Tây", "1 Thanh Niên, Tây Hồ", "Bánh tôm chiên giòn, ngồi ngắm Hồ Tây."),
  p("hn-nem-chua-ran", "ha-noi", "Hoàn Kiếm", "an-vat", 1, "🍡", "Nem chua rán Hàng Bè", "Phố Hàng Bè, Hoàn Kiếm", "Nem chua rán, khoai tây lắc — combo tụ tập buổi chiều."),
  p("hn-che-dong-da", "ha-noi", "Đống Đa", "an-vat", 1, "🍧", "Chè phố Hàng Cháo", "Phố Hàng Cháo, Đống Đa", "Chè thập cẩm, chè khúc bạch mát lạnh."),
  p("hn-oc-dinh-liet", "ha-noi", "Hoàn Kiếm", "an-vat", 2, "🐚", "Ốc Đinh Liệt", "Phố Đinh Liệt, Hoàn Kiếm", "Ốc luộc, ốc xào, ngồi vỉa hè đúng chất Hà Nội."),
  // Cà phê
  p("hn-cafe-giang", "ha-noi", "Hoàn Kiếm", "cafe", 1, "🥚", "Cà phê Giảng", "39 Nguyễn Hữu Huân, Hoàn Kiếm", "Cái nôi của cà phê trứng Hà Nội."),
  p("hn-cafe-dinh", "ha-noi", "Hoàn Kiếm", "cafe", 1, "☕", "Café Đinh", "13 Đinh Tiên Hoàng, Hoàn Kiếm", "Quán cũ kỹ trên gác, nhìn ra Hồ Gươm."),
  p("hn-tranquil", "ha-noi", "Hoàn Kiếm", "cafe", 2, "📚", "Tranquil Books & Coffee", "5 Nguyễn Quang Bích, Hoàn Kiếm", "Cà phê sách yên tĩnh, hợp làm việc, đọc sách."),
  p("hn-cafe-trinh-cong-son", "ha-noi", "Tây Hồ", "cafe", 2, "🌅", "Cà phê view Hồ Tây", "Đường Trịnh Công Sơn, Tây Hồ", "Dãy quán cà phê ngắm hoàng hôn Hồ Tây."),
  p("hn-cafe-cau-giay", "ha-noi", "Cầu Giấy", "cafe", 2, "💻", "Cà phê làm việc Trần Thái Tông", "Phố Trần Thái Tông, Cầu Giấy", "Nhiều quán rộng rãi, wifi mạnh, ổ cắm đầy đủ."),
  p("hn-cafe-ba-dinh", "ha-noi", "Ba Đình", "cafe", 1, "🍵", "Cà phê phố Phan Đình Phùng", "Phố Phan Đình Phùng, Ba Đình", "Con phố hàng sấu đẹp nhất Hà Nội, ngồi cà phê vỉa hè."),
  // Tham quan
  p("hn-ho-guom", "ha-noi", "Hoàn Kiếm", "tham-quan", 1, "🐢", "Hồ Gươm & Đền Ngọc Sơn", "Đinh Tiên Hoàng, Hoàn Kiếm", "Trái tim Hà Nội, cầu Thê Húc đỏ rực."),
  p("hn-lang-bac", "ha-noi", "Ba Đình", "tham-quan", 1, "🏛️", "Lăng Chủ tịch Hồ Chí Minh", "2 Hùng Vương, Ba Đình", "Quảng trường Ba Đình, chùa Một Cột ngay cạnh. Nên đi buổi sáng."),
  p("hn-van-mieu", "ha-noi", "Đống Đa", "tham-quan", 1, "📜", "Văn Miếu – Quốc Tử Giám", "58 Quốc Tử Giám, Đống Đa", "Trường đại học đầu tiên của Việt Nam."),
  p("hn-chua-tran-quoc", "ha-noi", "Tây Hồ", "tham-quan", 1, "🛕", "Chùa Trấn Quốc", "Đường Thanh Niên, Tây Hồ", "Ngôi chùa cổ nhất Hà Nội trên bán đảo Hồ Tây."),
  p("hn-bao-tang-dan-toc", "ha-noi", "Cầu Giấy", "tham-quan", 1, "🏺", "Bảo tàng Dân tộc học", "Nguyễn Văn Huyên, Cầu Giấy", "Khu nhà truyền thống ngoài trời rất đáng xem."),
  p("hn-hoang-thanh", "ha-noi", "Ba Đình", "tham-quan", 1, "🏯", "Hoàng thành Thăng Long", "19C Hoàng Diệu, Ba Đình", "Di sản UNESCO, có tour đêm vào cuối tuần."),
  // Vui chơi
  p("hn-mua-roi", "ha-noi", "Hoàn Kiếm", "vui-choi", 2, "🎭", "Nhà hát Múa rối Thăng Long", "57B Đinh Tiên Hoàng, Hoàn Kiếm", "Múa rối nước truyền thống, nên đặt vé trước."),
  p("hn-thu-le", "ha-noi", "Ba Đình", "vui-choi", 1, "🦒", "Vườn thú Thủ Lệ", "Đường Kim Mã, Ba Đình", "Công viên rộng, hợp đi cùng gia đình, trẻ nhỏ."),
  p("hn-lotte-tay-ho", "ha-noi", "Tây Hồ", "vui-choi", 2, "🛍️", "Lotte Mall West Lake", "683 Lạc Long Quân, Tây Hồ", "Trung tâm thương mại lớn: ăn uống, mua sắm, thủy cung."),
  p("hn-cong-vien-cau-giay", "ha-noi", "Cầu Giấy", "vui-choi", 1, "🌳", "Công viên Cầu Giấy", "Phố Thành Thái, Cầu Giấy", "Hồ rộng, đường dạo mát, chiều tối rất đông vui."),
  p("hn-vincom-ba-trieu", "ha-noi", "Hai Bà Trưng", "vui-choi", 2, "🎬", "Vincom Bà Triệu", "191 Bà Triệu, Hai Bà Trưng", "Xem phim, ăn uống, mua sắm ngay trung tâm."),
  // Về đêm
  p("hn-ta-hien", "ha-noi", "Hoàn Kiếm", "dem", 2, "🍻", "Phố bia Tạ Hiện", "Phố Tạ Hiện, Hoàn Kiếm", "Phố Tây nhộn nhịp, bia hơi, đồ nướng."),
  p("hn-pho-di-bo", "ha-noi", "Hoàn Kiếm", "dem", 1, "🚶", "Phố đi bộ Hồ Gươm", "Quanh Hồ Hoàn Kiếm", "Mở tối thứ 6 – Chủ nhật, nhiều trò chơi dân gian."),
  p("hn-cho-dem", "ha-noi", "Hoàn Kiếm", "dem", 1, "🏮", "Chợ đêm phố cổ", "Hàng Đào – Đồng Xuân, Hoàn Kiếm", "Mua sắm, ăn vặt, họp tối cuối tuần."),
  p("hn-tay-ho-dem", "ha-noi", "Tây Hồ", "dem", 3, "🍸", "Bar quanh Hồ Tây", "Phố Xuân Diệu, Tây Hồ", "Nhiều bar, pub phong cách, view hồ lộng gió."),
];

const HCM: Place[] = [
  // Ăn sáng
  p("hcm-pho-hoa", "ho-chi-minh", "Quận 3", "an-sang", 2, "🍜", "Phở Hòa Pasteur", "260C Pasteur, Quận 3", "Quán phở lâu đời bậc nhất Sài Gòn."),
  p("hcm-huynh-hoa", "ho-chi-minh", "Quận 1", "an-sang", 2, "🥖", "Bánh mì Huỳnh Hoa", "26 Lê Thị Riêng, Quận 1", "Ổ bánh mì 'khủng' nhiều pate, chả lụa."),
  p("hcm-hu-tieu-nam-vang", "ho-chi-minh", "Quận 3", "an-sang", 2, "🍝", "Hủ tiếu Nam Vang Nhân Quán", "72 Nguyễn Thượng Hiền, Quận 3", "Hủ tiếu khô và nước, topping tôm, gan, thịt bằm."),
  p("hcm-xoi-ga-q5", "ho-chi-minh", "Quận 5", "an-sang", 1, "🍚", "Xôi gà Chợ Lớn", "Đường Trần Hưng Đạo, Quận 5", "Xôi gà xé, lạp xưởng kiểu người Hoa."),
  p("hcm-bun-bo-phu-nhuan", "ho-chi-minh", "Phú Nhuận", "an-sang", 2, "🍲", "Bún bò Huế Phú Nhuận", "Đường Phan Đình Phùng, Phú Nhuận", "Bún bò cay nồng, giò heo to."),
  p("hcm-banh-cuon-binh-thanh", "ho-chi-minh", "Bình Thạnh", "an-sang", 1, "🥟", "Bánh cuốn Bình Thạnh", "Đường Bạch Đằng, Bình Thạnh", "Bánh cuốn nóng, chả lụa, giá mềm."),
  // Bữa chính
  p("hcm-com-tam-ba-ghien", "ho-chi-minh", "Phú Nhuận", "an-chinh", 2, "🍖", "Cơm tấm Ba Ghiền", "84 Đặng Văn Ngữ, Phú Nhuận", "Miếng sườn nướng to bằng cả đĩa."),
  p("hcm-bun-thit-nuong", "ho-chi-minh", "Quận 1", "an-chinh", 1, "🥗", "Bún thịt nướng Chị Tuyền", "195 Cô Giang, Quận 1", "Bún thịt nướng chả giò, nước mắm đậm đà."),
  p("hcm-quan-an-ngon", "ho-chi-minh", "Quận 1", "an-chinh", 3, "🏮", "Nhà hàng Ngon", "160 Pasteur, Quận 1", "Món ngon ba miền trong không gian biệt thự cổ."),
  p("hcm-banh-xeo-46a", "ho-chi-minh", "Quận 1", "an-chinh", 2, "🥞", "Bánh xèo 46A Đinh Công Tráng", "46A Đinh Công Tráng, Quận 1", "Bánh xèo miền Tây giòn rụm, rau sống đầy đủ."),
  p("hcm-sui-cao-ha-ton-quyen", "ho-chi-minh", "Quận 5", "an-chinh", 2, "🥟", "Phố sủi cảo Hà Tôn Quyền", "Đường Hà Tôn Quyền, Quận 5", "Cả con phố sủi cảo, mì vịt tiềm chuẩn vị người Hoa."),
  p("hcm-com-ga-thu-duc", "ho-chi-minh", "Thủ Đức", "an-chinh", 1, "🍗", "Cơm gà làng đại học", "Khu phố 6, Linh Trung, Thủ Đức", "Quán sinh viên no nê, giá rẻ."),
  p("hcm-lau-de-binh-thanh", "ho-chi-minh", "Bình Thạnh", "an-chinh", 2, "🍲", "Lẩu dê Bình Thạnh", "Đường Nơ Trang Long, Bình Thạnh", "Lẩu dê, dê nướng — hợp nhậu nhóm."),
  // Ăn vặt
  p("hcm-oc-oanh", "ho-chi-minh", "Quận 4", "an-vat", 2, "🐚", "Ốc Oanh", "534 Vĩnh Khánh, Quận 4", "Quán ốc đình đám nhất phố Vĩnh Khánh."),
  p("hcm-ho-con-rua", "ho-chi-minh", "Quận 3", "an-vat", 1, "🍢", "Ăn vặt Hồ Con Rùa", "Công trường Quốc Tế, Quận 3", "Bánh tráng nướng, trứng cút, ngồi bệt chill."),
  p("hcm-cho-ban-co", "ho-chi-minh", "Quận 3", "an-vat", 1, "🥢", "Chợ Bàn Cờ", "Đường Nguyễn Thiện Thuật, Quận 3", "Thiên đường ăn vặt: bánh bèo, gỏi cuốn, chè."),
  p("hcm-che-q5", "ho-chi-minh", "Quận 5", "an-vat", 1, "🍧", "Chè Hà Ký", "138 Châu Văn Liêm, Quận 5", "Chè kiểu Hoa: chè mè đen, sương sa hột lựu."),
  p("hcm-banh-trang-tron-thu-duc", "ho-chi-minh", "Thủ Đức", "an-vat", 1, "🥡", "Phố ăn vặt Thảo Điền", "Đường Quốc Hương, Thảo Điền, Thủ Đức", "Nhiều quán ăn vặt, đồ Âu, tiệm bánh xinh."),
  // Cà phê
  p("hcm-42-nguyen-hue", "ho-chi-minh", "Quận 1", "cafe", 2, "🏢", "Chung cư cà phê 42 Nguyễn Huệ", "42 Nguyễn Huệ, Quận 1", "Cả tòa chung cư cũ toàn quán cà phê, view phố đi bộ."),
  p("hcm-cheo-leo", "ho-chi-minh", "Quận 3", "cafe", 1, "☕", "Cà phê vợt Cheo Leo", "109/39 Nguyễn Thiện Thuật, Quận 3", "Cà phê vợt pha kiểu xưa, gần 90 năm tuổi."),
  p("hcm-workshop", "ho-chi-minh", "Quận 1", "cafe", 2, "🔬", "The Workshop Coffee", "27 Ngô Đức Kế, Quận 1", "Specialty coffee, không gian xưởng rộng."),
  p("hcm-cafe-thao-dien", "ho-chi-minh", "Thủ Đức", "cafe", 2, "🌿", "Cà phê sân vườn Thảo Điền", "Đường Xuân Thủy, Thảo Điền, Thủ Đức", "Nhiều quán sân vườn xanh mát, yên tĩnh."),
  p("hcm-cafe-phu-nhuan", "ho-chi-minh", "Phú Nhuận", "cafe", 1, "🧋", "Cà phê Phan Xích Long", "Đường Phan Xích Long, Phú Nhuận", "Dãy quán cà phê, trà sữa trẻ trung."),
  // Tham quan
  p("hcm-ben-thanh", "ho-chi-minh", "Quận 1", "tham-quan", 1, "🏪", "Chợ Bến Thành", "Lê Lợi, Quận 1", "Biểu tượng Sài Gòn, mua quà và ăn uống."),
  p("hcm-nha-tho-duc-ba", "ho-chi-minh", "Quận 1", "tham-quan", 1, "⛪", "Nhà thờ Đức Bà & Bưu điện TP", "Công xã Paris, Quận 1", "Hai công trình kiến trúc Pháp nổi tiếng cạnh nhau."),
  p("hcm-dinh-doc-lap", "ho-chi-minh", "Quận 1", "tham-quan", 1, "🏛️", "Dinh Độc Lập", "135 Nam Kỳ Khởi Nghĩa, Quận 1", "Di tích lịch sử, nhiều phòng trưng bày thú vị."),
  p("hcm-bao-tang-chien-tranh", "ho-chi-minh", "Quận 3", "tham-quan", 1, "🎖️", "Bảo tàng Chứng tích Chiến tranh", "28 Võ Văn Tần, Quận 3", "Bảo tàng được khách quốc tế ghé nhiều nhất."),
  p("hcm-chua-ba-thien-hau", "ho-chi-minh", "Quận 5", "tham-quan", 1, "🛕", "Chùa Bà Thiên Hậu", "710 Nguyễn Trãi, Quận 5", "Hội quán người Hoa cổ kính giữa Chợ Lớn."),
  p("hcm-chua-ngoc-hoang", "ho-chi-minh", "Quận 1", "tham-quan", 1, "🏯", "Chùa Ngọc Hoàng", "73 Mai Thị Lựu, Quận 1", "Ngôi chùa cổ hơn 100 năm, kiến trúc độc đáo."),
  // Vui chơi
  p("hcm-landmark-81", "ho-chi-minh", "Bình Thạnh", "vui-choi", 3, "🏙️", "Landmark 81 SkyView", "720A Điện Biên Phủ, Bình Thạnh", "Đài quan sát cao nhất Việt Nam."),
  p("hcm-thao-cam-vien", "ho-chi-minh", "Quận 1", "vui-choi", 1, "🦓", "Thảo Cầm Viên", "2 Nguyễn Bỉnh Khiêm, Quận 1", "Vườn thú – vườn bách thảo lâu đời."),
  p("hcm-suoi-tien", "ho-chi-minh", "Thủ Đức", "vui-choi", 2, "🎢", "Khu du lịch Suối Tiên", "120 Xa lộ Hà Nội, Thủ Đức", "Công viên giải trí, công viên nước rộng lớn."),
  p("hcm-sala", "ho-chi-minh", "Thủ Đức", "vui-choi", 1, "🌉", "Công viên bờ sông Sala", "Khu đô thị Sala, Thủ Đức", "Đường dạo ven sông, view toàn cảnh Quận 1."),
  p("hcm-vincom-dong-khoi", "ho-chi-minh", "Quận 1", "vui-choi", 2, "🎬", "Vincom Đồng Khởi", "72 Lê Thánh Tôn, Quận 1", "Xem phim, mua sắm ngay trung tâm."),
  // Về đêm
  p("hcm-nguyen-hue", "ho-chi-minh", "Quận 1", "dem", 1, "🚶", "Phố đi bộ Nguyễn Huệ", "Đường Nguyễn Huệ, Quận 1", "Dạo phố, xem nhạc nước, đường phố lung linh."),
  p("hcm-bui-vien", "ho-chi-minh", "Quận 1", "dem", 2, "🍻", "Phố Tây Bùi Viện", "Đường Bùi Viện, Quận 1", "Phố không ngủ, bar, pub, nhạc sôi động."),
  p("hcm-vinh-khanh", "ho-chi-minh", "Quận 4", "dem", 2, "🦞", "Phố ẩm thực Vĩnh Khánh", "Đường Vĩnh Khánh, Quận 4", "Phố ốc, hải sản nướng, đông vui về đêm."),
  p("hcm-tau-sai-gon", "ho-chi-minh", "Quận 1", "dem", 3, "🛳️", "Du thuyền ăn tối sông Sài Gòn", "Bến Bạch Đằng, Quận 1", "Ăn tối trên tàu, ngắm thành phố lên đèn."),
  p("hcm-phan-xich-long-dem", "ho-chi-minh", "Phú Nhuận", "dem", 2, "🌃", "Phố ẩm thực Phan Xích Long", "Đường Phan Xích Long, Phú Nhuận", "Quán nướng, lẩu, nhậu nhộn nhịp."),
];

const DN: Place[] = [
  // Ăn sáng
  p("dn-mi-quang-ba-mua", "da-nang", "Hải Châu", "an-sang", 1, "🍜", "Mì Quảng Bà Mua", "19 Trần Bình Trọng, Hải Châu", "Mì Quảng đặc sản, nhiều loại topping."),
  p("dn-banh-mi-ba-lan", "da-nang", "Thanh Khê", "an-sang", 1, "🥖", "Bánh mì Bà Lan", "62 Trần Cao Vân, Thanh Khê", "Bánh mì que và bánh mì thịt nổi tiếng."),
  p("dn-bun-cha-ca", "da-nang", "Hải Châu", "an-sang", 1, "🐟", "Bún chả cá Bà Lữ", "319 Hùng Vương, Hải Châu", "Bún chả cá Đà Nẵng, nước dùng ngọt thanh."),
  p("dn-banh-canh-son-tra", "da-nang", "Sơn Trà", "an-sang", 1, "🍲", "Bánh canh cá lóc Sơn Trà", "Đường Ngô Quyền, Sơn Trà", "Bánh canh sợi dai, cá lóc đồng."),
  // Bữa chính
  p("dn-banh-trang-cuon", "da-nang", "Hải Châu", "an-chinh", 2, "🌯", "Bánh tráng cuốn thịt heo Trần", "4 Lê Duẩn, Hải Châu", "Bánh tráng cuốn thịt heo hai đầu da, mắm nêm."),
  p("dn-be-man", "da-nang", "Sơn Trà", "an-chinh", 3, "🦀", "Hải sản Bé Mặn", "Võ Nguyên Giáp, Sơn Trà", "Hải sản tươi chọn tại bể, sát biển Mỹ Khê."),
  p("dn-bun-mam-nem", "da-nang", "Hải Châu", "an-chinh", 1, "🥢", "Bún mắm nêm Bà Vân", "K23 Trần Kế Xương, Hải Châu", "Bún thịt heo quay, mắm nêm đậm đà."),
  p("dn-banh-xeo-ba-duong", "da-nang", "Hải Châu", "an-chinh", 1, "🥞", "Bánh xèo Bà Dưỡng", "K280/23 Hoàng Diệu, Hải Châu", "Bánh xèo giòn, nem lụi, nước chấm gan."),
  p("dn-com-ga-thanh-khe", "da-nang", "Thanh Khê", "an-chinh", 1, "🍗", "Cơm gà Thanh Khê", "Đường Điện Biên Phủ, Thanh Khê", "Cơm gà Hội An kiểu nhà làm."),
  p("dn-hai-san-ngu-hanh-son", "da-nang", "Ngũ Hành Sơn", "an-chinh", 3, "🦐", "Hải sản biển Non Nước", "Đường Trường Sa, Ngũ Hành Sơn", "Quán hải sản ven biển, không khí thoáng đãng."),
  // Ăn vặt
  p("dn-che-lien", "da-nang", "Hải Châu", "an-vat", 1, "🍧", "Chè Liên", "189 Hoàng Diệu, Hải Châu", "Chè sầu riêng nổi tiếng nhất Đà Nẵng."),
  p("dn-cho-con", "da-nang", "Hải Châu", "an-vat", 1, "🍢", "Khu ăn vặt chợ Cồn", "Hùng Vương, Hải Châu", "Ốc, bánh bèo, bánh nậm, nem lụi..."),
  p("dn-oc-son-tra", "da-nang", "Sơn Trà", "an-vat", 2, "🐚", "Ốc hút Sơn Trà", "Đường Ngô Quyền, Sơn Trà", "Ốc hút, ốc móng tay xào me."),
  // Cà phê
  p("dn-cong-bach-dang", "da-nang", "Hải Châu", "cafe", 1, "☕", "Cộng Cà Phê Bạch Đằng", "Đường Bạch Đằng, Hải Châu", "Cà phê cốt dừa, view sông Hàn."),
  p("dn-cafe-bien", "da-nang", "Sơn Trà", "cafe", 2, "🏖️", "Cà phê view biển Võ Nguyên Giáp", "Đường Võ Nguyên Giáp, Sơn Trà", "Ngồi nhìn biển Mỹ Khê, đón bình minh."),
  p("dn-cafe-muoi", "da-nang", "Hải Châu", "cafe", 1, "🧂", "Cà phê muối", "Đường Nguyễn Văn Linh, Hải Châu", "Cà phê muối béo mặn — thử một lần cho biết."),
  p("dn-cafe-ngu-hanh-son", "da-nang", "Ngũ Hành Sơn", "cafe", 2, "🌴", "Cà phê sân vườn An Thượng", "Khu An Thượng, Ngũ Hành Sơn", "Khu phố Tây, quán xinh, đồ uống đa dạng."),
  // Tham quan
  p("dn-son-tra", "da-nang", "Sơn Trà", "tham-quan", 1, "🙏", "Chùa Linh Ứng – Sơn Trà", "Bán đảo Sơn Trà", "Tượng Quan Âm cao 67m, view toàn vịnh Đà Nẵng."),
  p("dn-ngu-hanh-son", "da-nang", "Ngũ Hành Sơn", "tham-quan", 1, "⛰️", "Danh thắng Ngũ Hành Sơn", "Huyền Trân Công Chúa, Ngũ Hành Sơn", "Leo núi, khám phá hang động, chùa chiền."),
  p("dn-bao-tang-cham", "da-nang", "Hải Châu", "tham-quan", 1, "🗿", "Bảo tàng Điêu khắc Chăm", "2 Đường 2/9, Hải Châu", "Bộ sưu tập điêu khắc Chăm lớn nhất thế giới."),
  p("dn-nha-tho-con-ga", "da-nang", "Hải Châu", "tham-quan", 1, "⛪", "Nhà thờ Con Gà", "156 Trần Phú, Hải Châu", "Nhà thờ màu hồng nổi bật, check-in đẹp."),
  p("dn-lang-da", "da-nang", "Ngũ Hành Sơn", "tham-quan", 1, "🪨", "Làng đá mỹ nghệ Non Nước", "Huyền Trân Công Chúa, Ngũ Hành Sơn", "Xem nghệ nhân chế tác đá, mua quà lưu niệm."),
  // Vui chơi
  p("dn-my-khe", "da-nang", "Sơn Trà", "vui-choi", 1, "🏄", "Bãi biển Mỹ Khê", "Võ Nguyên Giáp, Sơn Trà", "Một trong những bãi biển đẹp nhất hành tinh."),
  p("dn-non-nuoc", "da-nang", "Ngũ Hành Sơn", "vui-choi", 1, "🏖️", "Bãi biển Non Nước", "Trường Sa, Ngũ Hành Sơn", "Biển hoang sơ, ít người, nước trong."),
  p("dn-ba-na", "da-nang", "Hòa Vang", "vui-choi", 3, "🚡", "Sun World Bà Nà Hills", "Hòa Ninh, Hòa Vang", "Cầu Vàng, cáp treo, làng Pháp — nên dành cả ngày."),
  p("dn-asia-park", "da-nang", "Hải Châu", "vui-choi", 2, "🎡", "Sun World Asia Park", "1 Phan Đăng Lưu, Hải Châu", "Vòng quay Sun Wheel, nhiều trò chơi cảm giác mạnh."),
  p("dn-xuan-thieu", "da-nang", "Thanh Khê", "vui-choi", 1, "🌊", "Bãi biển Thanh Khê", "Nguyễn Tất Thành, Thanh Khê", "Biển gần trung tâm, chiều tối thả diều, tắm biển."),
  // Về đêm
  p("dn-cau-rong", "da-nang", "Hải Châu", "dem", 1, "🐉", "Cầu Rồng phun lửa", "Cầu Rồng, Hải Châu", "Rồng phun lửa, phun nước lúc 21h tối thứ 7, Chủ nhật."),
  p("dn-cho-dem-son-tra", "da-nang", "Sơn Trà", "dem", 1, "🏮", "Chợ đêm Sơn Trà", "Mai Hắc Đế, Sơn Trà", "Ăn vặt, mua sắm, ngay chân cầu Rồng."),
  p("dn-sky36", "da-nang", "Hải Châu", "dem", 3, "🍸", "Sky36 Bar", "36 Bạch Đằng, Hải Châu", "Rooftop bar cao nhất Đà Nẵng."),
  p("dn-bach-dang-dem", "da-nang", "Hải Châu", "dem", 1, "🌉", "Dạo bờ sông Hàn", "Đường Bạch Đằng, Hải Châu", "Ngắm các cây cầu lên đèn, gió sông mát rượi."),
];

// ---- Bổ sung thêm địa điểm vui chơi ----

const HN_MORE: Place[] = [
  p("hn-cv-nuoc-ho-tay", "ha-noi", "Tây Hồ", "vui-choi", 2, "🌊", "Công viên nước Hồ Tây", "614 Lạc Long Quân, Tây Hồ", "Máng trượt, bể sóng — giải nhiệt mùa hè (mở theo mùa)."),
  p("hn-dap-vit-ho-tay", "ha-noi", "Tây Hồ", "vui-choi", 1, "🦆", "Đạp vịt Hồ Tây", "Đường Thanh Niên, Tây Hồ", "Đạp thuyền thiên nga ngắm hồ, hợp đi đôi hoặc nhóm bạn."),
  p("hn-bai-da-song-hong", "ha-noi", "Tây Hồ", "vui-choi", 1, "🌼", "Bãi đá sông Hồng", "Ngõ 264 Âu Cơ, Tây Hồ", "Vườn hoa theo mùa ven sông, thiên đường chụp ảnh."),
  p("hn-thuy-cung-times-city", "ha-noi", "Hai Bà Trưng", "vui-choi", 2, "🐠", "Thủy cung Times City", "458 Minh Khai, Hai Bà Trưng", "Thủy cung trong nhà, có cá mập, chim cánh cụt."),
  p("hn-cv-thong-nhat", "ha-noi", "Hai Bà Trưng", "vui-choi", 1, "🌳", "Công viên Thống Nhất", "Trần Nhân Tông, Hai Bà Trưng", "Công viên lớn nhất nội thành, có khu trò chơi thiếu nhi."),
  p("hn-rap-xiec", "ha-noi", "Hai Bà Trưng", "vui-choi", 2, "🤹", "Rạp Xiếc Trung ương", "67 Trần Nhân Tông, Hai Bà Trưng", "Xem xiếc cuối tuần, trẻ con rất thích."),
  p("hn-ttcp-quoc-gia", "ha-noi", "Đống Đa", "vui-choi", 2, "🎬", "Trung tâm Chiếu phim Quốc gia", "87 Láng Hạ, Đống Đa", "Rạp chiếu phim lâu đời, giá vé dễ chịu."),
  p("hn-nha-hat-lon", "ha-noi", "Hoàn Kiếm", "vui-choi", 3, "🎼", "Nhà hát Lớn Hà Nội", "1 Tràng Tiền, Hoàn Kiếm", "Xem hòa nhạc, nhạc kịch trong công trình kiến trúc Pháp."),
  p("hn-royal-city", "ha-noi", "Thanh Xuân", "vui-choi", 2, "⛸️", "Vincom Mega Mall Royal City", "72A Nguyễn Trãi, Thanh Xuân", "Trung tâm thương mại ngầm: trượt băng, bowling, game."),
  p("hn-bao-tang-ha-noi", "ha-noi", "Nam Từ Liêm", "tham-quan", 1, "🏛️", "Bảo tàng Hà Nội", "Phạm Hùng, Nam Từ Liêm", "Kiến trúc kim tự tháp ngược độc đáo, vé miễn phí."),
  p("hn-cong-vien-hoa-binh", "ha-noi", "Bắc Từ Liêm", "vui-choi", 1, "🕊️", "Công viên Hòa Bình", "Phạm Văn Đồng, Bắc Từ Liêm", "Công viên rộng thoáng, đạp xe, thả diều."),
  p("hn-aeon-long-bien", "ha-noi", "Long Biên", "vui-choi", 2, "🛍️", "Aeon Mall Long Biên", "27 Cổ Linh, Long Biên", "Trung tâm thương mại lớn, khu vui chơi trẻ em, ăn uống Nhật."),
  p("hn-cau-long-bien", "ha-noi", "Long Biên", "tham-quan", 1, "🌉", "Cầu Long Biên", "Cầu Long Biên", "Cây cầu trăm tuổi, đi bộ ngắm hoàng hôn sông Hồng."),
  p("hn-bat-trang", "ha-noi", "Gia Lâm", "vui-choi", 1, "🏺", "Làng gốm Bát Tràng", "Xã Bát Tràng, Gia Lâm", "Tự tay nặn gốm, mua đồ gốm làm quà."),
  p("hn-ocean-park", "ha-noi", "Gia Lâm", "vui-choi", 2, "🏝️", "Biển hồ Vinhomes Ocean Park", "Đa Tốn, Gia Lâm", "Biển nhân tạo nước mặn, bãi cát trắng giữa lòng Hà Nội."),
  p("hn-trinh-cong-son-dem", "ha-noi", "Tây Hồ", "dem", 1, "🎶", "Phố đi bộ Trịnh Công Sơn", "Đường Trịnh Công Sơn, Tây Hồ", "Dạo phố ven hồ, nghe nhạc đường phố cuối tuần."),
];

const HCM_MORE: Place[] = [
  p("hcm-dam-sen", "ho-chi-minh", "Quận 11", "vui-choi", 2, "🎢", "Công viên Văn hóa Đầm Sen", "3 Hòa Bình, Quận 11", "Công viên giải trí và công viên nước nổi tiếng."),
  p("hcm-tao-dan", "ho-chi-minh", "Quận 1", "vui-choi", 1, "🌳", "Công viên Tao Đàn", "Trương Định, Quận 1", "Công viên cây cổ thụ, sáng sớm có cà phê chim."),
  p("hcm-duong-sach", "ho-chi-minh", "Quận 1", "vui-choi", 1, "📚", "Đường sách Nguyễn Văn Bình", "Nguyễn Văn Bình, Quận 1", "Con đường toàn nhà sách, cà phê sách, cạnh Nhà thờ Đức Bà."),
  p("hcm-skydeck", "ho-chi-minh", "Quận 1", "vui-choi", 3, "🏙️", "Saigon Skydeck – Bitexco", "36 Hồ Tùng Mậu, Quận 1", "Đài quan sát tầng 49, ngắm Sài Gòn từ trên cao."),
  p("hcm-waterbus", "ho-chi-minh", "Quận 1", "vui-choi", 1, "⛴️", "Buýt đường sông Saigon Waterbus", "Bến Bạch Đằng, Quận 1", "Đi tàu dọc sông Sài Gòn, giá rẻ, view cực đẹp lúc hoàng hôn."),
  p("hcm-ao-show", "ho-chi-minh", "Quận 1", "vui-choi", 3, "🎭", "Xem À Ố Show – Nhà hát Thành phố", "7 Công trường Lam Sơn, Quận 1", "Biểu diễn xiếc tre đương đại đậm chất Việt."),
  p("hcm-bao-tang-my-thuat", "ho-chi-minh", "Quận 1", "tham-quan", 1, "🖼️", "Bảo tàng Mỹ thuật TP.HCM", "97A Phó Đức Chính, Quận 1", "Tòa nhà cổ tuyệt đẹp, góc chụp ảnh vintage."),
  p("hcm-truot-bang-l81", "ho-chi-minh", "Bình Thạnh", "vui-choi", 2, "⛸️", "Sân trượt băng Vincom Landmark 81", "720A Điện Biên Phủ, Bình Thạnh", "Sân trượt băng lớn trong trung tâm thương mại."),
  p("hcm-van-thanh", "ho-chi-minh", "Bình Thạnh", "vui-choi", 1, "🛶", "Khu du lịch Văn Thánh", "48/10 Điện Biên Phủ, Bình Thạnh", "Không gian sân vườn ven kênh, câu cá, ăn uống."),
  p("hcm-cv-gia-dinh", "ho-chi-minh", "Gò Vấp", "vui-choi", 1, "🌲", "Công viên Gia Định", "Hoàng Minh Giám, Gò Vấp", "Công viên rộng, nhiều cây xanh, chạy bộ, picnic."),
  p("hcm-grand-park", "ho-chi-minh", "Thủ Đức", "vui-choi", 1, "🏞️", "Công viên Vinhomes Grand Park", "Nguyễn Xiển, Thủ Đức", "Công viên ven sông rộng 36ha, cắm trại cuối tuần."),
  p("hcm-ho-ban-nguyet", "ho-chi-minh", "Quận 7", "vui-choi", 1, "🌙", "Hồ Bán Nguyệt – Crescent Mall", "Tôn Dật Tiên, Quận 7", "Đi dạo quanh hồ, mua sắm, ăn uống ở Phú Mỹ Hưng."),
  p("hcm-cau-anh-sao", "ho-chi-minh", "Quận 7", "dem", 1, "✨", "Cầu Ánh Sao", "Hồ Bán Nguyệt, Quận 7", "Cây cầu đổi màu đèn LED về đêm, rất lãng mạn."),
  p("hcm-chill-skybar", "ho-chi-minh", "Quận 1", "dem", 3, "🍸", "Chill Skybar", "76A Lê Lai, Quận 1", "Rooftop bar view toàn cảnh trung tâm Sài Gòn."),
  p("hcm-cv-thanh-da", "ho-chi-minh", "Bình Thạnh", "vui-choi", 1, "🎣", "Bán đảo Thanh Đa", "Bình Quới, Bình Thạnh", "Câu cá, ăn lẩu ven sông, đổi gió cuối tuần."),
];

const DN_MORE: Place[] = [
  p("dn-cv-bien-dong", "da-nang", "Sơn Trà", "vui-choi", 1, "🕊️", "Công viên Biển Đông", "Võ Nguyên Giáp, Sơn Trà", "Cho chim bồ câu ăn, chụp ảnh ven biển."),
  p("dn-than-tai", "da-nang", "Hòa Vang", "vui-choi", 3, "♨️", "Núi Thần Tài – Suối khoáng nóng", "QL14G, Hòa Phú, Hòa Vang", "Tắm khoáng nóng, tắm bùn, công viên nước."),
  p("dn-hoa-phu-thanh", "da-nang", "Hòa Vang", "vui-choi", 2, "🚣", "Thác Hòa Phú Thành", "Hòa Phú, Hòa Vang", "Trượt thác mạo hiểm bằng phao, rất vui đi nhóm."),
  p("dn-ran-nam-o", "da-nang", "Liên Chiểu", "vui-choi", 1, "🪸", "Rạn Nam Ô", "Làng Nam Ô, Liên Chiểu", "Bãi đá rêu xanh lúc sáng sớm, ngắm bình minh."),
  p("dn-deo-hai-van", "da-nang", "Liên Chiểu", "tham-quan", 1, "🏍️", "Đèo Hải Vân", "QL1A, Liên Chiểu", "Cung đường đèo đẹp nhất Việt Nam, chạy xe ngắm biển."),
  p("dn-art-in-paradise", "da-nang", "Hải Châu", "vui-choi", 2, "🖼️", "Bảo tàng tranh 3D Art in Paradise", "Đường 2/9, Hải Châu", "Chụp ảnh với tranh 3D vui nhộn, hợp ngày mưa."),
  p("dn-helio", "da-nang", "Hải Châu", "vui-choi", 2, "🕹️", "Helio Center", "Đường 2/9, Hải Châu", "Khu vui chơi trong nhà: game, bowling, trò chơi trẻ em."),
  p("dn-cho-dem-helio", "da-nang", "Hải Châu", "dem", 1, "🍢", "Chợ đêm Helio", "Đường 2/9, Hải Châu", "Ăn vặt, nhạc sống, đông vui về đêm."),
  p("dn-du-thuyen-song-han", "da-nang", "Hải Châu", "dem", 2, "🛥️", "Du thuyền sông Hàn", "Bến du thuyền Bạch Đằng, Hải Châu", "Ngắm cầu Rồng, cầu quay sông Hàn lên đèn."),
  p("dn-cv-apec", "da-nang", "Hải Châu", "vui-choi", 1, "🏟️", "Công viên APEC", "Bạch Đằng, Hải Châu", "Công viên ven sông Hàn, mái vòm hình cánh diều."),
  p("dn-vincom-ngo-quyen", "da-nang", "Sơn Trà", "vui-choi", 2, "⛸️", "Vincom Plaza Ngô Quyền", "910A Ngô Quyền, Sơn Trà", "Trượt băng, xem phim, khu vui chơi gia đình."),
  p("dn-sup-my-khe", "da-nang", "Sơn Trà", "vui-choi", 2, "🏄", "Chèo SUP / lướt sóng Mỹ Khê", "Bãi biển Mỹ Khê, Sơn Trà", "Thuê ván SUP hoặc học lướt sóng buổi sáng."),
  p("dn-hoi-an", "da-nang", "Hội An (lân cận)", "tham-quan", 1, "🏮", "Phố cổ Hội An", "Hội An, cách Đà Nẵng ~30km", "Di sản UNESCO, đèn lồng, thả hoa đăng buổi tối."),
  p("dn-vinwonders-nam-hoi-an", "da-nang", "Hội An (lân cận)", "vui-choi", 3, "🦁", "VinWonders Nam Hội An", "Bình Minh, Thăng Bình, Quảng Nam", "Công viên chủ đề, safari, công viên nước."),
  p("dn-ky-uc-hoi-an", "da-nang", "Hội An (lân cận)", "dem", 3, "🎭", "Show Ký ức Hội An", "Công viên Ấn tượng Hội An", "Show thực cảnh hoành tráng trên sông Hoài."),
];

export const PLACES: Place[] = [...HN, ...HN_MORE, ...HCM, ...HCM_MORE, ...DN, ...DN_MORE];
