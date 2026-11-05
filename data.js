// Dữ liệu mã giảm giá — Săn Mã. Kiểm chứng ngày 05/11/2026 từ trang khuyến mãi chính thức / nguồn uy tín (xem trường nguon).
// Mỗi mục: ten, web, banGi (bán gì), nhom, khuVuc (VN/QT), ma (null = ưu đãi tự áp dụng), giam,
// dieuKien (điều kiện dùng), hanDung (YYYY-MM-DD hoặc ""), linkDen, nguon.
const MA_GIAM = [
  {
    "ten": "MoMo",
    "web": "momo.vn",
    "banGi": "Ví điện tử: nạp điện thoại, nạp data 4G/5G, thanh toán hóa đơn điện/nước/internet",
    "nhom": "Thanh toán",
    "khuVuc": "VN",
    "ma": "DEALNAPDT",
    "giam": "Giảm đến 25.000đ khi nạp tiền điện thoại (ngày Flash deal 5/11, 11/11, 27/11 mức giảm cao hơn)",
    "dieuKien": [
      "Nhập mã tại mục Ưu đãi/Nhập mã trên app MoMo để nhận thẻ quà rồi dùng khi nạp điện thoại",
      "Tài khoản MoMo đã liên kết ngân hàng và đã xác thực",
      "Mỗi khách hàng 1 mã/1 dịch vụ/toàn chương trình",
      "Giới hạn số lượng mỗi ngày, thẻ quà không cộng gộp"
    ],
    "hanDung": "2026-11-30",
    "linkDen": "https://www.momo.vn/tin-tuc/khuyen-mai/nap-dien-thoai-data-hay-tra-hoa-don-nhap-ma-la-co-9101",
    "nguon": "https://www.momo.vn/tin-tuc/khuyen-mai/nap-dien-thoai-data-hay-tra-hoa-don-nhap-ma-la-co-9101"
  },
  {
    "ten": "MoMo",
    "web": "momo.vn",
    "banGi": "Ví điện tử: nạp điện thoại, nạp data 4G/5G, thanh toán hóa đơn điện/nước/internet",
    "nhom": "Thanh toán",
    "khuVuc": "VN",
    "ma": "DEALDATA",
    "giam": "Giảm đến 35.000đ khi nạp data 4G/5G (ngày Flash deal 5/11, 11/11, 27/11 mức giảm cao hơn)",
    "dieuKien": [
      "Nhập mã tại mục Ưu đãi/Nhập mã trên app MoMo để nhận thẻ quà rồi dùng khi nạp data",
      "Tài khoản MoMo đã liên kết ngân hàng và đã xác thực",
      "Mỗi khách hàng 1 mã/1 dịch vụ/toàn chương trình",
      "Giới hạn số lượng mỗi ngày, thẻ quà không cộng gộp"
    ],
    "hanDung": "2026-11-30",
    "linkDen": "https://www.momo.vn/tin-tuc/khuyen-mai/nap-dien-thoai-data-hay-tra-hoa-don-nhap-ma-la-co-9101",
    "nguon": "https://www.momo.vn/tin-tuc/khuyen-mai/nap-dien-thoai-data-hay-tra-hoa-don-nhap-ma-la-co-9101"
  },
  {
    "ten": "Vietnam Airlines",
    "web": "vietnamairlines.com",
    "banGi": "Vé máy bay nội địa và quốc tế",
    "nhom": "Du lịch",
    "khuVuc": "VN",
    "ma": "APPDEAL",
    "giam": "Giảm đến 10% giá vé nội địa (chưa gồm thuế, phí) khi mua qua app Vietnam Airlines",
    "dieuKien": [
      "Chỉ mua qua ứng dụng di động Vietnam Airlines",
      "Chỉ áp dụng vào Thứ 3 hằng tuần, từ 03/11/2026 đến 29/12/2026",
      "Bay đến hết 31/12/2026",
      "Hạng Economy Classic (K/L) và Economy Lite (Q/N/R/T/E)",
      "Không áp dụng hành trình nhiều chặng, số lượng mã giới hạn"
    ],
    "hanDung": "2026-12-29",
    "linkDen": "https://www.vietnamairlines.com/vi-gb/app-amazing-deals-vietnam-airlines",
    "nguon": "https://www.vietnamairlines.com/vi-gb/app-amazing-deals-vietnam-airlines"
  },
  {
    "ten": "Vietnam Airlines",
    "web": "vietnamairlines.com",
    "banGi": "Vé máy bay nội địa và quốc tế",
    "nhom": "Du lịch",
    "khuVuc": "VN",
    "ma": "APPMAZING",
    "giam": "Giảm đến 10% giá vé các chặng quốc tế khởi hành từ Việt Nam (chưa gồm thuế, phí)",
    "dieuKien": [
      "Chỉ mua qua ứng dụng di động Vietnam Airlines",
      "Mua vé và bay đến hết 31/12/2026",
      "Hạng Economy Lite (Q/N/R/T/E)",
      "Không áp dụng hành trình nhiều chặng, số lượng mã giới hạn"
    ],
    "hanDung": "2026-12-31",
    "linkDen": "https://www.vietnamairlines.com/vi-gb/app-amazing-deals-vietnam-airlines",
    "nguon": "https://www.vietnamairlines.com/vi-gb/app-amazing-deals-vietnam-airlines"
  },
  {
    "ten": "Grab (GrabFood)",
    "web": "grab.com",
    "banGi": "Đặt đồ ăn GrabFood, đi xe GrabBike/GrabCar, Grab Dine Out",
    "nhom": "Ăn uống",
    "khuVuc": "VN",
    "ma": "SACOMFOOD",
    "giam": "Giảm 30.000đ cho đơn GrabFood từ 200.000đ",
    "dieuKien": [
      "Thanh toán bằng thẻ tín dụng quốc tế cá nhân Sacombank (đầu BIN theo thể lệ) đã liên kết trên app Grab",
      "Chỉ áp dụng Thứ 6, Thứ 7, Chủ Nhật hằng tuần",
      "Tối đa 2 lượt ưu đãi/tháng",
      "Thời gian áp dụng ưu đãi đến 21/12/2026 (chương trình 15/07–31/12/2026)"
    ],
    "hanDung": "2026-12-21",
    "linkDen": "https://assets.grab.com/wp-content/uploads/sites/11/2026/08/17195205/Sacombank_Bank-TC-_2026-Campaign.pdf",
    "nguon": "https://assets.grab.com/wp-content/uploads/sites/11/2026/08/17195205/Sacombank_Bank-TC-_2026-Campaign.pdf"
  },
  {
    "ten": "Grab (GrabCar)",
    "web": "grab.com",
    "banGi": "Đặt đồ ăn GrabFood, đi xe GrabBike/GrabCar, Grab Dine Out",
    "nhom": "Du lịch",
    "khuVuc": "VN",
    "ma": "SACOMCAR",
    "giam": "Giảm 30.000đ cho chuyến GrabCar có cước phí từ 60.000đ",
    "dieuKien": [
      "Thanh toán bằng thẻ tín dụng quốc tế cá nhân Sacombank (đầu BIN theo thể lệ) đã liên kết trên app Grab",
      "Áp dụng mọi ngày trong tuần, 01/08–31/12/2026",
      "Mã GrabBike cùng chương trình: SACOMBIKE giảm 20.000đ chuyến từ 40.000đ"
    ],
    "hanDung": "2026-12-31",
    "linkDen": "https://assets.grab.com/wp-content/uploads/sites/11/2026/08/17195205/Sacombank_Bank-TC-_2026-Campaign.pdf",
    "nguon": "https://assets.grab.com/wp-content/uploads/sites/11/2026/08/17195205/Sacombank_Bank-TC-_2026-Campaign.pdf"
  },
  {
    "ten": "FPT Shop",
    "web": "fptshop.com.vn",
    "banGi": "Điện thoại, laptop, tablet, điện máy, gia dụng",
    "nhom": "Công nghệ & Điện máy",
    "khuVuc": "VN",
    "ma": "TRASAUFPT",
    "giam": "Giảm 5% giá trị giao dịch, tối đa 100.000đ",
    "dieuKien": [
      "Chỉ áp dụng khi thanh toán bằng nguồn tiền Tài khoản trả sau ZaloPay",
      "Mua tại hệ thống cửa hàng FPT Shop hoặc website fptshop.com.vn",
      "Tối đa 1 lần/tháng/khách hàng",
      "Chạy từ 01/10/2026 đến 31/12/2026"
    ],
    "hanDung": "2026-12-31",
    "linkDen": "https://fptshop.com.vn/tin-tuc/tin-khuyen-mai/mua-sam-tai-fpt-shop-giam-ngay-5percent-den-100000-dong-khi-thanh-toan-qua-tai-khoan-tra-sau-zalopay-215313",
    "nguon": "https://fptshop.com.vn/tin-tuc/tin-khuyen-mai/mua-sam-tai-fpt-shop-giam-ngay-5percent-den-100000-dong-khi-thanh-toan-qua-tai-khoan-tra-sau-zalopay-215313"
  },
  {
    "ten": "FPT Shop",
    "web": "fptshop.com.vn",
    "banGi": "Điện thoại, laptop, tablet, điện máy, gia dụng",
    "nhom": "Công nghệ & Điện máy",
    "khuVuc": "VN",
    "ma": "FPTIP18",
    "giam": "Giảm 1.000.000đ khi mua iPhone 18 Series tại FPT Shop (mã FPTTAO giảm 500.000đ cho hóa đơn có iPhone 18 Series)",
    "dieuKien": [
      "Thanh toán bằng VNPAY-QR (qua app ngân hàng hoặc app VNPAY)",
      "Chỉ áp dụng cho iPhone 18 Series mua tại FPT Shop",
      "1 lần/khách hàng/toàn chương trình",
      "Đến hết 31/12/2026"
    ],
    "hanDung": "2026-12-31",
    "linkDen": "https://www.vietnam.vn/ro/len-doi-iphone-18-series-tai-fpt-shop-tiet-kiem-den-1-trieu-dong-voi-vnpay-qr",
    "nguon": "https://www.vietnam.vn/ro/len-doi-iphone-18-series-tai-fpt-shop-tiet-kiem-den-1-trieu-dong-voi-vnpay-qr"
  },
  {
    "ten": "ShopeeFood",
    "web": "shopeefood.vn",
    "banGi": "Đặt đồ ăn, đồ uống giao tận nơi",
    "nhom": "Ăn uống",
    "khuVuc": "VN",
    "ma": "SIEUDEAL30",
    "giam": "Giảm 50% tối đa 30.000đ trong sự kiện 11.11 ShopeeFood Siêu Tiệc",
    "dieuKien": [
      "Chỉ áp dụng món trong bộ sưu tập 'Siêu tiệc nửa giá vạn món thả ga' trên app ShopeeFood",
      "Sự kiện chạy 29/10–11/11/2026",
      "Số lượng mã giới hạn"
    ],
    "hanDung": "2026-11-11",
    "linkDen": "https://nguoidothi.net.vn/shopeefood-mo-sieu-tiec-khoi-dong-mua-le-hoi-cuoi-nam-voi-su-kien-11-11-32134.html",
    "nguon": "https://nguoidothi.net.vn/shopeefood-mo-sieu-tiec-khoi-dong-mua-le-hoi-cuoi-nam-voi-su-kien-11-11-32134.html"
  },
  {
    "ten": "ShopeeFood",
    "web": "shopeefood.vn",
    "banGi": "Đặt đồ ăn, đồ uống giao tận nơi",
    "nhom": "Ăn uống",
    "khuVuc": "VN",
    "ma": "FASTFOOD100",
    "giam": "Giảm 10% tối đa 100.000đ cho combo fast food (Lotteria, POPEYES...) trong sự kiện 11.11",
    "dieuKien": [
      "Áp dụng trên app ShopeeFood đến hết 11/11/2026",
      "Số lượng giới hạn",
      "Mã thương hiệu cùng đợt: PHELA30 giảm 30.000đ đơn Phê La từ 88.000đ; KATINAT50K giảm 50.000đ đơn Katinat từ 200.000đ"
    ],
    "hanDung": "2026-11-11",
    "linkDen": "https://phunuvietnam.vn/print/don-cho-man-len-song-cuc-chat-cua-dai-tiec-mon-ngon-va-uu-dai-khung-tai-shopeefood-1111-20251110143002532.htm",
    "nguon": "https://phunuvietnam.vn/print/don-cho-man-len-song-cuc-chat-cua-dai-tiec-mon-ngon-va-uu-dai-khung-tai-shopeefood-1111-20251110143002532.htm"
  },
  {
    "ten": "ZaloPay",
    "web": "zalopay.vn",
    "banGi": "Ví điện tử, đặt vé xem phim CGV/Lotte Cinema/BHD/Galaxy/Beta/RIO",
    "nhom": "Giải trí",
    "khuVuc": "VN",
    "ma": "ZLP5K",
    "giam": "Giảm 5.000đ cho mọi đơn vé phim",
    "dieuKien": [
      "Đặt vé trên web/app Lotte Cinema, BHD, Galaxy Cinema, RIO Cinema, Beta Cinema, CGV và thanh toán ZaloPay",
      "Nhập mã tại mục 'Thêm ưu đãi' ở màn hình thanh toán ZaloPay",
      "Giới hạn 1 lần/tháng",
      "Nguồn tiền: ví ZaloPay, số dư sinh lời, tài khoản trả sau, thẻ/tài khoản ngân hàng liên kết",
      "Chương trình có thể kết thúc sớm khi hết ngân sách"
    ],
    "hanDung": "",
    "linkDen": "https://zalopay.vn/nhap-ma-ZLP5K-giam-5000d-moi-don-ve-phim-7430",
    "nguon": "https://zalopay.vn/nhap-ma-ZLP5K-giam-5000d-moi-don-ve-phim-7430"
  },
  {
    "ten": "CGV Cinemas (qua VNPAY/app ngân hàng)",
    "web": "cgv.vn",
    "banGi": "Vé xem phim và combo bắp nước tại cụm rạp CGV",
    "nhom": "Giải trí",
    "khuVuc": "VN",
    "ma": "VNPAYCGV104",
    "giam": "Đồng giá 104.000đ/vé CGV (cho vé từ 105.000đ), combo bắp nước đồng giá 70.000đ",
    "dieuKien": [
      "Đặt vé CGV qua mục vé phim trên app ngân hàng/VNPAY (Vikki, OCB OMNI...) và chọn mã tại màn hình thanh toán",
      "Chỉ áp dụng Thứ 2 đến Thứ 5 hằng tuần; mã VNPAYCGV115 đồng giá 115.000đ/vé áp dụng Thứ 6–Chủ Nhật",
      "Tối đa 8 vé/giao dịch",
      "Đến hết 31/12/2026"
    ],
    "hanDung": "2026-12-31",
    "linkDen": "https://vikkibank.vn/wp-content/uploads/2026/05/TnC-uu-dai-ve-xem-phim25.05.pdf",
    "nguon": "https://vikkibank.vn/wp-content/uploads/2026/05/TnC-uu-dai-ve-xem-phim25.05.pdf"
  },
  {
    "ten": "Shopee Việt Nam",
    "web": "shopee.vn",
    "banGi": "Sàn thương mại điện tử tổng hợp",
    "nhom": "Mua sắm",
    "khuVuc": "VN",
    "ma": null,
    "giam": "Không cần nhập mã: voucher thu thập trong app — toàn sàn giảm đến 25% tối đa 200.000đ, hoàn 10% xu đơn thời trang từ 150.000đ (lịch ShopeeVIP tháng 11), cao điểm sale 11.11",
    "dieuKien": [
      "Lưu voucher tại banner/trang chiến dịch trong app Shopee trước khi thanh toán",
      "Voucher mở theo khung giờ 0H–12H–15H–19H các ngày sale, số lượng giới hạn",
      "Mức giảm và điều kiện hiển thị thực tế trong app tại thời điểm mua"
    ],
    "hanDung": "2026-11-30",
    "linkDen": "https://noti.sale/post/56088",
    "nguon": "https://noti.sale/post/56088"
  },
  {
    "ten": "Lazada Việt Nam",
    "web": "lazada.vn",
    "banGi": "Sàn thương mại điện tử tổng hợp, LazMall hàng chính hãng",
    "nhom": "Mua sắm",
    "khuVuc": "VN",
    "ma": null,
    "giam": "Không có mã chuỗi để nhập: 'Siêu Sale Bom Tấn 11.11' — voucher giảm đến 11 triệu đồng, voucher gian hàng đến 20%, freeship 0đ; voucher thu thập trong app (mở bán 20H ngày 10/11, chạy 10–13/11/2026)",
    "dieuKien": [
      "Thu thập voucher tại trang chiến dịch/Voucher Garden trong app Lazada đúng khung giờ (0h, 12h, 19h), hết lượt là ngừng",
      "Mỗi đơn cộng dồn tối đa 4 loại voucher (freeship, gian hàng, sàn, ngân hàng)",
      "Giai đoạn khởi động 01–10/11 có voucher giảm 50% đơn từ 0đ và giảm 40% đơn từ 99.000đ để thu thập trước"
    ],
    "hanDung": "2026-11-13",
    "linkDen": "https://khuyenmaidacbiet.com/landing-page/lazada-11-11-sale",
    "nguon": "https://khuyenmaidacbiet.com/landing-page/lazada-11-11-sale"
  },
  {
    "ten": "Thế Giới Di Động / Điện Máy Xanh",
    "web": "thegioididong.com",
    "banGi": "Điện thoại, laptop, phụ kiện, điện máy, gia dụng",
    "nhom": "Công nghệ & Điện máy",
    "khuVuc": "VN",
    "ma": null,
    "giam": "Không cần mã: 'Tết Độc Thân' 06–11/11/2026 giảm đến 50% sản phẩm công nghệ, minigame tặng phiếu mua hàng đến 1.000.000đ",
    "dieuKien": [
      "Giá khuyến mãi áp dụng trực tiếp trên website và hệ thống cửa hàng",
      "Phiếu mua hàng qua minigame trên website Thế Giới Di Động",
      "Số lượng sản phẩm giảm giá giới hạn theo model"
    ],
    "hanDung": "2026-11-11",
    "linkDen": "https://www.thegioididong.com/tin-tuc/tet-doc-than-tai-the-gioi-di-dong-giam-soc-1602581",
    "nguon": "https://www.thegioididong.com/tin-tuc/tet-doc-than-tai-the-gioi-di-dong-giam-soc-1602581"
  },
  {
    "ten": "Vietjet Air",
    "web": "vietjetair.com",
    "banGi": "Vé máy bay giá rẻ nội địa và quốc tế",
    "nhom": "Du lịch",
    "khuVuc": "VN",
    "ma": null,
    "giam": "Không cần mã: vé hạng Eco từ 0đ (chưa gồm thuế, phí) mở bán trong khung giờ vàng 12:00–14:00 mỗi ngày",
    "dieuKien": [
      "Đặt vé trên website/app Vietjet trong khung 12:00–14:00",
      "Thời gian bay 01/11/2026–31/07/2027, trừ lễ/Tết/cao điểm",
      "Vé khuyến mãi số lượng giới hạn theo chặng, không hoàn vé"
    ],
    "hanDung": "",
    "linkDen": "https://khuyenmaidacbiet.com/landing-page/lich-san-ve-may-bay-gia-re",
    "nguon": "https://khuyenmaidacbiet.com/landing-page/lich-san-ve-may-bay-gia-re"
  },
  {
    "ten": "Be (beBike/beCar/beFood)",
    "web": "be.com.vn",
    "banGi": "Gọi xe, giao đồ ăn, giao hàng, giúp việc",
    "nhom": "Du lịch",
    "khuVuc": "VN",
    "ma": null,
    "giam": "Không có mã công khai — đổi voucher trong app My OPPO: beBike/beCar giảm 15% (chuyến ≤8km), 20% (8–12km), 30% (>12km), đều tối đa 50.000đ; beFood giảm 20.000đ đơn từ 85.000đ; BeDelivery giảm 20% tối đa 50.000đ",
    "dieuKien": [
      "Dành cho người dùng điện thoại OPPO, đổi mã trong mục ưu đãi của app My OPPO (mã cấp riêng trong app)",
      "Voucher có hiệu lực 30 ngày kể từ thời điểm đổi",
      "Số lượng khuyến mãi giới hạn mỗi ngày, không áp dụng chung khuyến mãi khác của Be"
    ],
    "hanDung": "",
    "linkDen": "https://www.oppo.com/vn/event/member/bevoucher",
    "nguon": "https://www.oppo.com/vn/event/member/bevoucher"
  },
  {
    "ten": "Agoda",
    "web": "agoda.com",
    "banGi": "Đặt phòng khách sạn, vé máy bay, hoạt động du lịch",
    "nhom": "Du lịch",
    "khuVuc": "VN",
    "ma": "NEW12AGD1",
    "giam": "Giảm 12% tối đa $100 cho khách hàng mới đặt phòng",
    "dieuKien": [
      "Chỉ khách hàng chưa từng có lịch sử đặt phòng trên Agoda, cần đăng nhập tài khoản",
      "Đặt phòng trong 01–30/11/2026, lưu trú đến 30/06/2027",
      "Chỉ áp dụng trên website Agoda (không áp dụng trong app)",
      "Mã cùng đợt cho mọi thành viên: LP12AGD1 giảm 12% phòng quốc tế tối đa $30; EARLY12AGD1 giảm 12% tối đa $50 cho lưu trú 01/01–30/06/2027",
      "Một số khách sạn không tham gia chương trình"
    ],
    "hanDung": "2026-11-30",
    "linkDen": "https://couponjupjup.com/travel/agoda/",
    "nguon": "https://couponjupjup.com/travel/agoda/"
  },
  {
    "ten": "Watsons Việt Nam",
    "web": "watsons.com.vn",
    "banGi": "Mỹ phẩm, chăm sóc da, sức khỏe và sắc đẹp",
    "nhom": "Làm đẹp & Sức khỏe",
    "khuVuc": "VN",
    "ma": null,
    "giam": "Giảm thêm 12% cho đơn từ 600.000đ (lấy mã hiển thị tại trang khuyến mãi) và giảm 10% cho đơn hàng đầu tiên",
    "dieuKien": [
      "Nhập mã hiển thị trên trang Picodi/Watsons tại bước thanh toán trên watsons.com.vn",
      "Điều kiện chi tiết (ngành hàng, thương hiệu loại trừ) theo trang nguồn tại thời điểm mua"
    ],
    "hanDung": "",
    "linkDen": "https://www.picodi.com/vn/watsons-vn",
    "nguon": "https://www.picodi.com/vn/watsons-vn"
  },
  {
    "ten": "Tiki",
    "web": "tiki.vn",
    "banGi": "Sàn TMĐT: sách, điện tử, gia dụng, hàng tiêu dùng — giao nhanh TikiNOW",
    "nhom": "Mua sắm",
    "khuVuc": "VN",
    "ma": null,
    "giam": "Ưu đãi trong mục Tiki Khuyến Mãi: mã giảm theo ngành hàng + hoàn xu Astra theo chương trình từng đợt",
    "dieuKien": [
      "Mã của Tiki chủ yếu phát trong app theo tài khoản — vào mục Khuyến Mãi trên tiki.vn/app để lấy mã mới nhất",
      "Điều kiện từng mã hiển thị tại trang khuyến mãi của Tiki"
    ],
    "hanDung": "",
    "linkDen": "https://tiki.vn",
    "nguon": "https://tiki.vn"
  },
  {
    "ten": "AliExpress",
    "web": "aliexpress.com",
    "banGi": "Sàn thương mại điện tử quốc tế tổng hợp",
    "nhom": "Mua sắm",
    "khuVuc": "QT",
    "ma": "OTD1111",
    "giam": "Giảm $11 cho đơn từ $65 — mã toàn cầu đợt sale 11.11 (01–18/11/2026)",
    "dieuKien": [
      "Áp dụng cho quốc gia giao hàng đủ điều kiện (Việt Nam không nằm trong danh sách loại trừ của chương trình)",
      "Số lượng mã giới hạn, có thể hết sớm; kiểm tra giảm giá hiển thị tại bước thanh toán",
      "Mã cùng đợt: OTD1103 giảm $3 đơn từ $15; OTD1104 giảm $4 đơn từ $25; OTD1170 giảm $70 đơn từ $419",
      "Thời hạn tính theo giờ PT, đến 23:59 ngày 18/11/2026"
    ],
    "hanDung": "2026-11-18",
    "linkDen": "https://pokupar.com/en/aliexpress-pomo-code",
    "nguon": "https://pokupar.com/en/aliexpress-pomo-code"
  },
  {
    "ten": "Klook",
    "web": "klook.com",
    "banGi": "Vé tham quan, tour, khách sạn, eSIM, thuê xe",
    "nhom": "Du lịch",
    "khuVuc": "QT",
    "ma": "HOTELONAPP",
    "giam": "Giảm 5% cho lần đặt khách sạn đầu tiên trên app Klook",
    "dieuKien": [
      "Chỉ áp dụng trong ứng dụng Klook, cho lần đặt khách sạn đầu tiên",
      "Áp dụng mọi quốc gia, chương trình dài hạn không ghi ngày kết thúc (kiểm tra lại 01/11/2026)"
    ],
    "hanDung": "",
    "linkDen": "https://twofortherowd.com/klook-discount.html",
    "nguon": "https://twofortherowd.com/klook-discount.html"
  },
  {
    "ten": "Amazon",
    "web": "amazon.com",
    "banGi": "Sàn thương mại điện tử quốc tế tổng hợp",
    "nhom": "Mua sắm",
    "khuVuc": "QT",
    "ma": null,
    "giam": "Không có mã giảm toàn sàn công khai: giảm giá qua trang Today's Deals và coupon tích trực tiếp (clip coupon) trên trang sản phẩm, áp dụng tự động khi thanh toán",
    "dieuKien": [
      "Bấm tích ô coupon trên trang sản phẩm trước khi thêm vào giỏ hàng",
      "Các mã chuỗi rao trên web coupon cho Amazon.com đa phần là mã dùng 1 lần/mã theo tài khoản, không kiểm chứng được — không nên nhập theo"
    ],
    "hanDung": "",
    "linkDen": "https://www.dontpayfull.com/at/amazon.com",
    "nguon": "https://www.dontpayfull.com/at/amazon.com"
  },
  {
    "ten": "Booking.com",
    "web": "booking.com",
    "banGi": "Đặt phòng khách sạn, căn hộ, chuyến bay toàn cầu",
    "nhom": "Du lịch",
    "khuVuc": "QT",
    "ma": null,
    "giam": "Không cần mã: chương trình Late Escape/Getaway Deals giảm từ 15% tại cơ sở lưu trú tham gia; thành viên Genius giảm thêm 10–20% tự áp dụng khi đăng nhập",
    "dieuKien": [
      "Đăng nhập tài khoản Booking.com để thấy giá Genius và giá ưu đãi",
      "Đợt ưu đãi cuối năm áp dụng cho lưu trú đến 07/01/2027",
      "Booking.com hầu như không phát mã chuỗi công khai — mã rao trên web coupon không kiểm chứng được"
    ],
    "hanDung": "2027-01-07",
    "linkDen": "https://www.everysaving.com/coupons/booking.com",
    "nguon": "https://www.everysaving.com/coupons/booking.com"
  },
  {
    "ten": "SHEIN",
    "web": "shein.com",
    "banGi": "Thời trang, phụ kiện, đồ gia dụng giá rẻ",
    "nhom": "Mua sắm",
    "khuVuc": "QT",
    "ma": "AFFOLD3",
    "giam": "Giảm 30% cho đơn từ $29 dành cho khách hàng mới",
    "dieuKien": [
      "Chỉ khách hàng mới của SHEIN",
      "Áp dụng trên us.shein.com, mỗi đơn chỉ dùng 1 mã",
      "Mã được người dùng xác nhận áp dụng thành công ngày 03/11/2026 (theo DontPayFull/Slickdeals)"
    ],
    "hanDung": "2026-12-31",
    "linkDen": "https://daily.slickdeals.net/stores/shein-coupon-codes/",
    "nguon": "https://daily.slickdeals.net/stores/shein-coupon-codes/"
  },
  {
    "ten": "Temu",
    "web": "temu.com",
    "banGi": "Sàn thương mại điện tử hàng giá rẻ tổng hợp",
    "nhom": "Mua sắm",
    "khuVuc": "QT",
    "ma": "ROCO100",
    "giam": "Giảm 40% đơn hàng đầu tiên đủ điều kiện (tối đa €20, đơn từ €20) + gói coupon €200 cho người dùng mới trên app (mức quy đổi theo thị trường)",
    "dieuKien": [
      "Chỉ người dùng app Temu mới đủ điều kiện; nhập/tìm mã trong app để kích hoạt",
      "Mã ROCO200 là mã thay thế cho cùng chương trình, không cộng dồn",
      "Mức giảm và giá trị gói coupon hiển thị theo quốc gia và tài khoản"
    ],
    "hanDung": "",
    "linkDen": "https://www.oxideals.com/view/temu/",
    "nguon": "https://www.oxideals.com/view/temu/"
  },
  {
    "ten": "Nike",
    "web": "nike.com",
    "banGi": "Giày, quần áo và phụ kiện thể thao",
    "nhom": "Mua sắm",
    "khuVuc": "QT",
    "ma": "GAMEON",
    "giam": "Giảm thêm 20% trên giá sale (đợt 11.11 giảm đến 50%) tại Nike Singapore/Malaysia",
    "dieuKien": [
      "Mua tối thiểu 2 sản phẩm sale đủ điều kiện (không tính tất/vớ vào số lượng)",
      "Áp dụng trên nike.com/sg và Nike Malaysia, 02–11/11/2026",
      "Giảm tối đa S$700/đơn, 1 mã/đơn, không cộng dồn ưu đãi khác"
    ],
    "hanDung": "2026-11-11",
    "linkDen": "https://singpromos.com/department-stores/nike-sg-11-11-sale-up-to-50-off-plus-extra-20-off-with-gameon-till-11-nov-2026-308873/",
    "nguon": "https://singpromos.com/department-stores/nike-sg-11-11-sale-up-to-50-off-plus-extra-20-off-with-gameon-till-11-nov-2026-308873/"
  },
  {
    "ten": "eBay",
    "web": "ebay.com",
    "banGi": "Sàn mua bán/đấu giá quốc tế, hàng điện tử, phụ tùng, hàng refurbished",
    "nhom": "Mua sắm",
    "khuVuc": "QT",
    "ma": "SHOPNOW15",
    "giam": "Giảm 15% tại khoảng 750 nhà bán tham gia (phụ tùng ô tô, công nghệ, nhà cửa...), tối đa $350",
    "dieuKien": [
      "Chỉ áp dụng listing của nhà bán tham gia chương trình (mã hiển thị trên trang sản phẩm)",
      "Không yêu cầu giá trị đơn tối thiểu",
      "Hết hạn 09/11/2026 — mã eBay xoay vòng rất nhanh, kiểm tra lại trước khi dùng"
    ],
    "hanDung": "2026-11-09",
    "linkDen": "https://www.dontpayfull.com/at/ebay.com",
    "nguon": "https://www.dontpayfull.com/at/ebay.com"
  },
  {
    "ten": "Expedia",
    "web": "expedia.com",
    "banGi": "Đặt khách sạn, vé máy bay, gói du lịch, thuê xe",
    "nhom": "Du lịch",
    "khuVuc": "QT",
    "ma": "NEW10",
    "giam": "Giảm 10% tối đa $50 khi đặt khách sạn cho khách hàng mới",
    "dieuKien": [
      "Chỉ khách hàng chưa từng đặt dịch vụ trên Expedia",
      "Chỉ áp dụng đặt khách sạn riêng lẻ (không áp dụng gói flight+hotel), thanh toán bằng USD",
      "Đổi mã đến 17/11/2026 (giờ Chicago), lưu trú 24/09/2026–31/05/2027, tối thiểu 1 đêm",
      "1 lần/khách hàng — điều kiện đăng trên trang deals chính thức của Expedia"
    ],
    "hanDung": "2026-11-17",
    "linkDen": "https://www.expedia.com/deals/discount",
    "nguon": "https://www.expedia.com/deals/discount"
  }
];
