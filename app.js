// Săn Mã — hiển thị, lọc, chép mã giảm giá. Dữ liệu nằm ở data.js (biến MA_GIAM).
(function () {
  var boLoc = { tu: "", khuVuc: "", nhom: "" };
  var MAUS = ["#ee4d2d", "#1a73e8", "#43a047", "#8e24aa", "#fb8c00", "#00897b", "#5e35b1", "#d81b60", "#3949ab", "#6d4c41"];

  function mauTheoTen(ten) {
    var s = 0;
    for (var i = 0; i < ten.length; i++) s += ten.charCodeAt(i);
    return MAUS[s % MAUS.length];
  }

  function conHan(p) {
    if (!p.hanDung) return true;
    var homNay = new Date();
    homNay.setHours(0, 0, 0, 0);
    return new Date(p.hanDung + "T23:59:59") >= homNay;
  }

  function soNgayCon(p) {
    if (!p.hanDung) return null;
    var homNay = new Date();
    homNay.setHours(0, 0, 0, 0);
    return Math.round((new Date(p.hanDung + "T23:59:59") - homNay) / 86400000);
  }

  function dinhDangNgay(iso) {
    var d = iso.split("-");
    return d[2] + "/" + d[1] + "/" + d[0];
  }

  function cacNhom() {
    var ds = [];
    MA_GIAM.forEach(function (p) {
      if (conHan(p) && ds.indexOf(p.nhom) === -1) ds.push(p.nhom);
    });
    return ds;
  }

  function veNhom() {
    var bar = document.getElementById("nhomBar");
    var html = '<button data-nhom="" class="' + (boLoc.nhom === "" ? "dang" : "") + '">Tất cả</button>';
    cacNhom().forEach(function (n) {
      html += '<button data-nhom="' + n + '" class="' + (boLoc.nhom === n ? "dang" : "") + '">' + n + "</button>";
    });
    bar.innerHTML = html;
    bar.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        boLoc.nhom = b.getAttribute("data-nhom");
        veNhom();
        veLuoi();
      });
    });
  }

  function hopLe(p) {
    if (!conHan(p)) return false;
    if (boLoc.khuVuc && p.khuVuc !== boLoc.khuVuc) return false;
    if (boLoc.nhom && p.nhom !== boLoc.nhom) return false;
    if (boLoc.tu) {
      var chuoi = (p.ten + " " + p.banGi + " " + p.nhom + " " + (p.ma || "") + " " + p.giam).toLowerCase();
      if (chuoi.indexOf(boLoc.tu.toLowerCase()) === -1) return false;
    }
    return true;
  }

  function veLuoi() {
    var ds = MA_GIAM.filter(hopLe);
    ds.sort(function (a, b) {
      var ha = a.hanDung || "9999-12-31", hb = b.hanDung || "9999-12-31";
      return ha < hb ? -1 : ha > hb ? 1 : 0;
    });
    document.getElementById("ketQua").textContent = "Đang có " + ds.length + " mã / ưu đãi còn hiệu lực";
    var luoi = document.getElementById("luoi");
    if (!ds.length) {
      luoi.innerHTML = '<div class="trong">Chưa có mã nào khớp. Thử từ khóa hoặc nhóm khác nhé.</div>';
      return;
    }
    luoi.innerHTML = ds.map(function (p, i) {
      var ngay = soNgayCon(p);
      var hanHtml = p.hanDung
        ? '⏰ Hạn dùng: <b>' + dinhDangNgay(p.hanDung) + "</b>" + (ngay !== null && ngay <= 7 ? ' — <sap>còn ' + ngay + " ngày</sap>" : "")
        : "⏰ Hạn dùng: theo chương trình trên trang nhà bán";
      var dk = (p.dieuKien || []).map(function (d) { return "<li>" + d + "</li>"; }).join("");
      var maHtml = p.ma
        ? '<div class="maHop"><div class="maO">' + p.ma + '</div><button class="nutChep" data-ma="' + p.ma + '">Chép mã</button></div>'
        : '<div class="maHop"><div class="maO khongMa">Ưu đãi tự áp dụng — không cần nhập mã</div></div>';
      return '<article class="the">' +
        '<div class="theTren"><div class="avatar" style="background:' + mauTheoTen(p.ten) + '">' + p.ten.charAt(0) + '</div>' +
        '<div><div class="tenSan">' + p.ten + '</div><div class="banGi">Bán: ' + p.banGi + "</div></div>" +
        '<span class="huy' + (p.khuVuc === "QT" ? " qt" : "") + '">' + (p.khuVuc === "QT" ? "Quốc tế" : "Việt Nam") + "</span></div>" +
        '<div class="giam">' + p.giam + "</div>" +
        (dk ? '<ul class="dieuKien">' + dk + "</ul>" : "") +
        '<div class="han">' + hanHtml + "</div>" +
        maHtml +
        '<a class="nutDung" href="' + p.linkDen + '" target="_blank" rel="noopener">Tới ' + p.ten + " dùng ngay →</a>" +
        "</article>";
    }).join("");
    luoi.querySelectorAll(".nutChep").forEach(function (b) {
      b.addEventListener("click", function () { chepMa(b.getAttribute("data-ma")); });
    });
  }

  var henToast = null;
  function toast(chu) {
    var t = document.getElementById("toast");
    t.textContent = chu;
    t.classList.add("hien");
    clearTimeout(henToast);
    henToast = setTimeout(function () { t.classList.remove("hien"); }, 2200);
  }

  function chepMa(ma) {
    function xong() { toast("✅ Đã chép mã " + ma); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ma).then(xong).catch(function () { chepDuPhong(ma); xong(); });
    } else {
      chepDuPhong(ma);
      xong();
    }
  }

  function chepDuPhong(ma) {
    var ta = document.createElement("textarea");
    ta.value = ma;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }

  document.getElementById("oTim").addEventListener("input", function (e) {
    boLoc.tu = e.target.value.trim();
    veLuoi();
  });
  document.getElementById("khuVuc").querySelectorAll("button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll("#khuVuc button").forEach(function (x) { x.classList.remove("dang"); });
      b.classList.add("dang");
      boLoc.khuVuc = b.getAttribute("data-kv");
      veLuoi();
    });
  });

  veNhom();
  veLuoi();
})();
