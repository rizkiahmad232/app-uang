<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manajer Uang Mingguan</title>
    <!-- Menghubungkan Manifest -->
<link rel="manifest" href="manifest.json">
<!-- Warna tema untuk bar atas HP -->
<meta name="theme-color" content="#121212">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #121212; /* Mode gelap agar nyaman di mata */
            color: #e0e0e0;
            padding: 20px;
            display: flex;
            justify-content: center;
        }
        .container {
            width: 100%;
            max-width: 450px;
            background: #1e1e1e;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.5);
        }
        h2 {
            text-align: center;
            color: #4facfe;
            margin-top: 0;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-size: 0.9em;
            color: #b0bec5;
        }
        input, select, button {
            width: 100%;
            padding: 12px;
            border: 1px solid #333;
            border-radius: 8px;
            box-sizing: border-box;
            background-color: #2a2a2a;
            color: #fff;
            font-size: 1em;
        }
        input:focus, select:focus {
            outline: none;
            border-color: #4facfe;
        }
        button {
            background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
            color: #121212;
            font-weight: bold;
            border: none;
            cursor: pointer;
            margin-top: 10px;
            transition: opacity 0.3s ease;
        }
        button:hover {
            opacity: 0.9;
        }
        .result-box {
            margin-top: 25px;
            padding: 15px;
            background-color: #2c2c2c;
            border-radius: 8px;
            border-left: 4px solid #4facfe;
            display: none;
        }
        .result-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            border-bottom: 1px solid #444;
            padding-bottom: 8px;
            font-size: 0.95em;
        }
        .result-item:last-child {
            border-bottom: none;
        }
        .highlight {
            color: #00e676; /* Hijau untuk tabungan */
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Manajer Keuangan Mingguan</h2>
    
    <div class="form-group">
        <label for="uangSaku">Uang Saku Mingguan Tetap (Rp)</label>
        <input type="number" id="uangSaku" value="175000" placeholder="Contoh: 175000">
    </div>

    <div class="form-group">
        <label for="uangEkstra">Penghasilan Tambahan (Rp) - Opsional</label>
        <input type="number" id="uangEkstra" placeholder="Contoh: 50000" value="0">
    </div>

    <div class="form-group">
        <label for="strategi">Strategi Penghasilan Tambahan</label>
        <select id="strategi">
            <option value="tabung_semua">Tabung 100% Penghasilan Tambahan</option>
            <option value="bagi_dua">Bagi 50% Tabungan / 50% Hiburan</option>
        </select>
    </div>

    <button onclick="hitungAnggaran()">Hitung Anggaran</button>

    <div class="result-box" id="resultBox">
        <div class="result-item">
            <span>Kebutuhan Harian (50% Saku):</span>
            <span id="resKebutuhan">Rp 0</span>
        </div>
        <div class="result-item">
            <span>Hiburan & Hobi:</span>
            <span id="resHiburan">Rp 0</span>
        </div>
        <div class="result-item">
            <span>Total Tabungan Minggu Ini:</span>
            <span id="resTabungan" class="highlight">Rp 0</span>
        </div>
    </div>
</div>

<script>
    function formatRupiah(angka) {
        return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function hitungAnggaran() {
        // Ambil nilai input
        let saku = parseFloat(document.getElementById("uangSaku").value) || 0;
        let ekstra = parseFloat(document.getElementById("uangEkstra").value) || 0;
        let strategi = document.getElementById("strategi").value;

        // Hitungan dasar (50/30/20) dari uang saku
        let kebutuhan = saku * 0.50;
        let hiburan = saku * 0.30;
        let tabungan = saku * 0.20;

        // Tambahkan alokasi dari penghasilan tambahan
        if (strategi === "tabung_semua") {
            tabungan += ekstra;
        } else if (strategi === "bagi_dua") {
            tabungan += (ekstra * 0.50);
            hiburan += (ekstra * 0.50);
        }

        // Tampilkan hasil ke DOM
        document.getElementById("resKebutuhan").innerText = formatRupiah(kebutuhan);
        document.getElementById("resHiburan").innerText = formatRupiah(hiburan);
        document.getElementById("resTabungan").innerText = formatRupiah(tabungan);
        
        document.getElementById("resultBox").style.display = "block";
    }
</script>

</body>
<script>
  // Mendaftarkan Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('Service Worker berhasil didaftarkan!', reg);
      }).catch((err) => {
        console.log('Service Worker gagal:', err);
      });
    });
  }
</script>
</html>