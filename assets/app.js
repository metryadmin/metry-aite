(() => {
  const PHONE = "+50239891833";
  const WA_NUMBER = "50239891833";
  const WA_TEXT = encodeURIComponent("Hola Metry Analytics, quiero una consulta.");

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav (multipage)
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    a.classList.toggle("active", href === current);
  });

  // WhatsApp
  const waBtn = document.getElementById("waBtn");
  if (waBtn) waBtn.href = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

  // Call buttons
  document.querySelectorAll("[data-call]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `tel:${PHONE}`;
    });
  });

  // Reveal
  const targets = document.querySelectorAll(".reveal, .reveal-step");
  if (targets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          ent.target.classList.add("show");
          io.unobserve(ent.target);
        }
      });
    }, { threshold: 0.14 });

    targets.forEach(el => io.observe(el));
  }

  // =========================
  // SERVICES (servicios.html)
  // =========================
  const svcTitle = document.getElementById("svcTitle");
  const svcDesc = document.getElementById("svcDesc");
  const svcTags = document.getElementById("svcTags");
  const svcBullets = document.getElementById("svcBullets");
  const svcButtons = Array.from(document.querySelectorAll(".svc-item"));

  // Images already in your HTML:
  // <div class="svc-media-container">
  //   <img class="svc-img" data-svc="0" ...>
  // </div>
  const svcImgs = Array.from(document.querySelectorAll(".svc-media-container .svc-img"));
  const svcMediaBox = document.querySelector(".svc-media-container");

  const services = [
    { title:"Consultoría Estratégica de Datos", desc:"Diagnóstico ejecutivo, madurez, modelo operativo y roadmap alineado a objetivos de negocio.", tags:["Estrategia","Roadmap","Operating Model"], bullets:["Evaluación de madurez y brechas","Modelo operativo y roles (Data Office)","Portafolio priorizado por valor","Plan de adopción y ejecución"] },
    { title:"Calidad de Datos", desc:"Estándares, monitoreo y remediación para asegurar confianza y trazabilidad.", tags:["Confiabilidad","Monitoreo","Ownership"], bullets:["Reglas y dimensiones de calidad","Alertas y dashboards de calidad","Procesos de remediación","Responsables por dominio"] },
    { title:"Gobierno de Datos · Data Office · CoE", desc:"Estructura, políticas y gestión para operar datos de forma sostenible y segura.", tags:["Gobernanza","Políticas","Catálogo"], bullets:["Data Office / Centro de Excelencia","Owners & stewards por dominio","Políticas, estándares y control","Catálogo, linaje y auditoría"] },
    { title:"Unificación de Servicios de Datos", desc:"Acceso estandarizado y consistente para eliminar silos y acelerar consumo.", tags:["Servicios","APIs","Dominios"], bullets:["Servicios de datos por dominio","Contratos de datos y consistencia","Control de acceso y auditoría","Single source of truth por diseño"] },
    { title:"Analítica & BI", desc:"KPIs accionables, tableros claros y analítica alineada a decisiones del negocio.", tags:["KPIs","Dashboards","Autoservicio"], bullets:["Definición de métricas y KPIs","Modelos analíticos y reporting","Gobernanza para autoservicio","Habilitación y adopción"] },
    { title:"Plataformas de Datos Internas", desc:"Lake/Warehouse/Lakehouse con seguridad, escalabilidad y consumo confiable.", tags:["Plataforma","Seguridad","Escala"], bullets:["Arquitectura por capas (ingestión → consumo)","Modelado y capa semántica","Seguridad, permisos y trazabilidad","Observabilidad y control de costos"] },
    { title:"Plataformas de Datos Externas", desc:"Portales y APIs para clientes/socios con control de acceso, SLAs y compliance.", tags:["Exposición","Acceso","SLAs"], bullets:["Exposición segura de datos","Autorización y auditoría","Productos de datos para terceros","Monitoreo y acuerdos de servicio"] },
    { title:"Monetización de Datos", desc:"Convertir activos de datos en productos con estrategia, pricing y captura de valor responsable.", tags:["Productos","Pricing","Valor"], bullets:["Inventario de activos de datos","Oportunidades y caso de negocio","Diseño de productos de datos","Gestión de riesgos y cumplimiento"] },
    { title:"Operación de Plataforma", desc:"Run & reliability: performance, costos, accesos, continuidad y mejora continua.", tags:["Operación","Confiabilidad","Costos"], bullets:["Observabilidad y gestión de incidentes","Gestión de costos y performance","Gestión de accesos y seguridad","Mejora continua y estándares"] },
    { title:"IA Aplicada", desc:"Casos de uso con fundamentos: despliegue, MLOps, riesgos y operación continua.", tags:["IA","MLOps","Adopción"], bullets:["Priorización por valor y viabilidad","Despliegue y monitoreo de modelos","MLOps y gobernanza","Operación continua y métricas"] },
  ];

  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;

  function setActive(i){
    svcButtons.forEach(btn => {
      const idx = parseInt(btn.getAttribute("data-svc"), 10);
      const on = idx === i;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  // ✅ show ONLY the correct image + set blurred background to same image
  function setServiceImage(i){
    if (!svcImgs.length) return;

    svcImgs.forEach(img => {
      const idx = parseInt(img.getAttribute("data-svc"), 10);
      img.classList.toggle("active", idx === i);
    });

    if (svcMediaBox) {
      const activeImg = svcImgs.find(img => parseInt(img.getAttribute("data-svc"), 10) === i);
      const src = activeImg ? activeImg.getAttribute("src") : "";
      svcMediaBox.style.setProperty("--svc-bg", src ? `url("${src}")` : "none");
    }
  }

  function renderDesktop(i){
    // if servicios.html isn't present, do nothing
    if(!svcTitle || !svcDesc || !svcTags || !svcBullets) return;

    const s = services[i];
    svcTitle.textContent = s.title;
    svcDesc.textContent = s.desc;
    svcTags.innerHTML = s.tags.map(t => `<span class="tag">${t}</span>`).join("");
    svcBullets.innerHTML = s.bullets.map(b => `<li>${b}</li>`).join("");

    setServiceImage(i);
  }

  function removeInline(){
    document.querySelectorAll(".svc-inline").forEach(n => n.remove());
  }

  function inlinePanel(i){
    const s = services[i];

    const img = document.querySelector(`.svc-media-container .svc-img[data-svc="${i}"]`);
    const src = img ? img.getAttribute("src") : "";

    const panel = document.createElement("div");
    panel.className = "svc-inline";
    panel.innerHTML = `
      <div class="inner">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>

        ${src ? `
          <div class="media" style="margin-top:12px;border-radius:16px;overflow:hidden;border:1px solid rgba(18,24,38,.10)">
            <img src="${src}" alt="${s.title}" style="width:100%;height:auto;display:block" loading="lazy" decoding="async">
          </div>
        ` : ``}

        <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <ul>${s.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
        <div class="actions">
          <a class="btn primary" href="contacto.html">Programar llamada</a>
          <a class="btn ghost" href="metodologia.html">Ver metodología</a>
        </div>
      </div>
    `;
    return panel;
  }

  function openMobile(i, btn){
    const already = btn.nextElementSibling && btn.nextElementSibling.classList.contains("svc-inline");
    removeInline();

    if(already){ setActive(-1); return; }

    btn.insertAdjacentElement("afterend", inlinePanel(i));
    setActive(i);

    // keep desktop image state consistent too
    setServiceImage(i);
  }

  function syncMode(){
    removeInline();
    if(!svcButtons.length) return;

    if(isMobile()){
      setActive(-1);
      setServiceImage(0);
    }else{
      setActive(0);
      renderDesktop(0);
    }
  }

  if(svcButtons.length){
    svcButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const i = parseInt(btn.getAttribute("data-svc"), 10);
        if(isMobile()) openMobile(i, btn);
        else { setActive(i); renderDesktop(i); }
      });
    });

    window.addEventListener("resize", () => {
      clearTimeout(window.__svcR);
      window.__svcR = setTimeout(syncMode, 120);
    });

    syncMode();
  }

  // Contact form toast
  const toastEl = document.getElementById("toast");
  const form = document.getElementById("contactForm");
  if(form && toastEl){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      toastEl.textContent = "Mensaje enviado.";
      toastEl.style.display = "block";
      clearTimeout(window.__toastT);
      window.__toastT = setTimeout(() => toastEl.style.display = "none", 2200);
      form.reset();
    });
  }
})();

// Keep reveal visible if JS loads late
document.querySelectorAll(".reveal").forEach(el=>el.classList.add("show"));