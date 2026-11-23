/**
 * Portal Pautan Perpustakaan Politeknik Tawau Sabah (PTS)
 * Logik Interaksi, Carian Pantas, Penapis Kategori & Simpan Kegemaran
 */

// Senarai Pautan Rasmi Perpustakaan PTS & Rujukan Berkaitan
const LIBRARY_LINKS = [
  {
    id: "pts-portal",
    title: "Portal Rasmi Perpustakaan PTS",
    subtitle: "Laman Utama Sistem Perpustakaan PTS MyPolyCC",
    url: "https://pts-lib.mypolycc.edu.my/",
    category: "pts-core",
    categoryLabel: "Sistem PTS",
    badgeClass: "badge-pts-core",
    icon: "fa-solid fa-landmark",
    iconBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    description: "Pusat maklumat utama perpustakaan Politeknik Tawau Sabah. Menyediakan maklumat kemudahan, perkhidmatan pinjaman, berita aktiviti perpustakaan, waktu operasi dan pengumuman terkini.",
    targetAudience: "Semua Pelajar, Staf Politeknik Tawau Sabah & Pelawat Umum",
    accessType: "Akses Terbuka",
    tags: ["Portal Rasmi", "PTS", "MyPolyCC", "Pusat Sumber", "Maklumat"],
    featured: true
  },
  {
    id: "pts-opac",
    title: "Sistem OPAC / Koha Perpustakaan PTS",
    subtitle: "Katalog Carian Buku & Pengurusan Sirkulasi (Port 8221)",
    url: "https://pts-lib.mypolycc.edu.my:8221/",
    category: "pts-core",
    categoryLabel: "Sistem PTS",
    badgeClass: "badge-pts-core",
    icon: "fa-solid fa-book-bookmark",
    iconBg: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    description: "Online Public Access Catalog (OPAC) bagi carian bahan fizikal di perpustakaan PTS. Semak ketersediaan buku rujukan, modul pembelajaran, nombor panggilan rak, serta status akaun peminjaman ahli.",
    targetAudience: "Warga PTS (Pelajar & Kakitangan) untuk carian buku dan pengurusan pinjaman",
    accessType: "Katalog Terbuka / Log Masuk Ahli",
    tags: ["OPAC", "Koha", "Katalog", "Carian Buku", "Port 8221", "Sirkulasi"],
    featured: true
  },
  {
    id: "pts-script-1",
    title: "Aplikasi Web Perkhidmatan PTS (Borang 1)",
    subtitle: "Sistem Makro Google Apps Script Politeknik Tawau",
    url: "https://script.google.com/a/macros/politawau.edu.my/s/AKfycbzUtdK61MFBIh7MP-D9k3D81qgITsIIkqU5-xSqs0Dws2N3RXkklsv3-sSE8MGUHiFk/exec",
    category: "pts-apps",
    categoryLabel: "Aplikasi Digital PTS",
    badgeClass: "badge-pts-apps",
    icon: "fa-solid fa-laptop-code",
    iconBg: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    description: "Aplikasi web interaktif berasaskan Google Apps Script di bawah domain rasmi politawau.edu.my untuk perkhidmatan digital perpustakaan, pengurusan borang dalaman atau aktiviti perpustakaan.",
    targetAudience: "Warga Politeknik Tawau Sabah (Gunakan akaun @politawau.edu.my)",
    accessType: "Domain PTS / Google Apps",
    tags: ["Google Apps", "Makro PTS", "Borang Digital", "Sistem Dalaman"],
    featured: false
  },
  {
    id: "pts-script-2",
    title: "Aplikasi Web Perkhidmatan PTS (Borang 2)",
    subtitle: "Sistem Makro Google Apps Script Politeknik Tawau",
    url: "https://script.google.com/a/politawau.edu.my/macros/s/AKfycbzimdg_8jTFFyu9mehEfEe6EME9M9cSy9FvfHvcx2gMPkp1H5Dj4YaKufPRsAyon8Tf/exec",
    category: "pts-apps",
    categoryLabel: "Aplikasi Digital PTS",
    badgeClass: "badge-pts-apps",
    icon: "fa-solid fa-file-waveform",
    iconBg: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    description: "Aplikasi web sokongan Google Apps Script bagi urusan perekodan data, borang maklum balas, permohonan digital atau sirkulasi perkhidmatan Pusat Sumber Perpustakaan PTS.",
    targetAudience: "Warga Politeknik Tawau Sabah (Pelajar & Kakitangan)",
    accessType: "Domain PTS / Google Apps",
    tags: ["Google Apps", "Makro PTS", "Borang Rekod", "Perkhidmatan PTS"],
    featured: false
  },
  {
    id: "pnm-depositori",
    title: "Depositori Perpustakaan Negara Malaysia (PNM)",
    subtitle: "Pangkalan Khazanah & Penerbitan Digital Malaysia",
    url: "https://depositori.pnm.gov.my/",
    category: "national",
    categoryLabel: "Sumber Kebangsaan (PNM)",
    badgeClass: "badge-national",
    icon: "fa-solid fa-building-columns",
    iconBg: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    description: "Pusat depositori rasmi Perpustakaan Negara Malaysia di bawah Akta Penyerahan Bahan Perpustakaan 1986. Menyimpan, memelihara dan menyediakan capaian kepada pelbagai bahan terbitan digital negara.",
    targetAudience: "Penyelidik, Pelajar, Ahli Akademik dan Orang Awam Seluruh Negara",
    accessType: "Akses Terbuka / Kerajaan Malaysia",
    tags: ["PNM", "Depositori", "Arkib Negara", "Penerbitan Malaysia", "Akta 1986"],
    featured: false
  },
  {
    id: "pnm-ulibrary",
    title: "u-Pustaka (Perpustakaan Digital Kebangsaan)",
    subtitle: "Hab e-Buku, Jurnal Ilmiah & Pangkalan Data Malaysia",
    url: "https://www.u-library.gov.my/",
    category: "national",
    categoryLabel: "Sumber Kebangsaan (PNM)",
    badgeClass: "badge-national",
    icon: "fa-solid fa-book-atlas",
    iconBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    description: "Inisiatif perpustakaan digital kebangsaan yang menyediakan akses percuma kepada jutaan bahan bacaan elektronik, pangkalan data penyelidikan bereputasi, majalah dan surat khabar digital.",
    targetAudience: "Seluruh Warganegara Malaysia (Pendaftaran Akaun Percuma)",
    accessType: "Keahlian Percuma Rakyat Malaysia",
    tags: ["u-Pustaka", "u-Library", "e-Buku", "Jurnal Ilmiah", "PNM", "Penyelidikan"],
    featured: true
  },
  {
    id: "polytech-digital",
    title: "Sumber Digital PolyTech Library",
    subtitle: "Gerbang Rujukan Elektronik Konsortium Politeknik & Kolej Komuniti",
    url: "https://sites.google.com/view/polytechlibrary/sumber-digital?authuser=0",
    category: "polycc",
    categoryLabel: "PolyTech Library",
    badgeClass: "badge-polycc",
    icon: "fa-solid fa-layer-group",
    iconBg: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    description: "Portal himpunan sumber digital dan pangkalan data langganan perpustakaan Politeknik dan Kolej Komuniti (POLYCC). Menyediakan akses kepada e-jurnal, e-buku TVET, dan modul akademik institusi.",
    targetAudience: "Warga Politeknik & Kolej Komuniti (Pensyarah, Pelajar Diploma/Sijil)",
    accessType: "Warga POLYCC (Google Workspace)",
    tags: ["PolyTech", "POLYCC", "Sumber Digital", "Pangkalan Data", "TVET", "Modul"],
    featured: true
  }
];

// State Pengurusan Aplikasi
let currentFilter = "all";
let searchQuery = "";
let isListView = false;
let favorites = JSON.parse(localStorage.getItem("pts_lib_favorites") || "[]");

// Inisialisasi DOM Sebaik Saja Dokumen Siap
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initClock();
  renderCards();
  initEventListeners();
  updateFavoritesCount();
});

// 1. Pengurusan Jam & Tarikh Sebenar
function initClock() {
  const timeStringEl = document.getElementById("timeString");
  const yearEl = document.getElementById("currentYear");
  
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function update() {
    const now = new Date();
    const options = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true
    };
    if (timeStringEl) {
      timeStringEl.textContent = now.toLocaleDateString('ms-MY', options);
    }
  }

  update();
  setInterval(update, 1000);
}

// 2. Mod Gelap / Terang (Dark / Light Theme)
function initTheme() {
  const savedTheme = localStorage.getItem("pts_theme") || "light";
  const html = document.documentElement;
  const icon = document.getElementById("themeIcon");

  if (savedTheme === "dark" || (!("pts_theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    html.classList.add("dark");
    if (icon) icon.className = "fas fa-sun";
  } else {
    html.classList.remove("dark");
    if (icon) icon.className = "fas fa-moon";
  }

  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("pts_theme", "light");
        if (icon) icon.className = "fas fa-moon";
        showToast("Mod Terang Diaktifkan", "fa-sun");
      } else {
        html.classList.add("dark");
        localStorage.setItem("pts_theme", "dark");
        if (icon) icon.className = "fas fa-sun";
        showToast("Mod Gelap Diaktifkan", "fa-moon");
      }
    });
  }
}

// 3. Render Kad Senarai Pautan
function renderCards() {
  const gridContainer = document.getElementById("linksGrid");
  const emptyState = document.getElementById("emptyState");
  const searchStatusInfo = document.getElementById("searchStatusInfo");
  const searchQueryText = document.getElementById("searchQueryText");
  const searchMatchCount = document.getElementById("searchMatchCount");

  if (!gridContainer) return;

  // Tapis pautan mengikut carian dan kategori
  const filtered = LIBRARY_LINKS.filter(item => {
    // Tapis mengikut kategori
    if (currentFilter === "favorites") {
      if (!favorites.includes(item.id)) return false;
    } else if (currentFilter !== "all" && item.category !== currentFilter) {
      return false;
    }

    // Tapis mengikut carian teks
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(q));
      const matchUrl = item.url.toLowerCase().includes(q);
      const matchSub = item.subtitle.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchTags || matchUrl || matchSub;
    }

    return true;
  });

  // Urus status bar carian
  if (searchQuery.trim() !== "") {
    searchStatusInfo.classList.remove("hidden");
    searchQueryText.textContent = searchQuery;
    searchMatchCount.textContent = `${filtered.length} dijumpai`;
  } else {
    searchStatusInfo.classList.add("hidden");
  }

  // Jika tiada hasil
  if (filtered.length === 0) {
    gridContainer.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  // Bina HTML untuk setiap kad
  gridContainer.innerHTML = filtered.map(link => {
    const isFav = favorites.includes(link.id);

    return `
      <article class="link-card bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between relative group" data-id="${link.id}">
        
        <!-- Top Row: Icon, Category Badge & Favorite Star -->
        <div>
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner ${link.iconBg}">
              <i class="${link.icon}"></i>
            </div>
            
            <div class="flex items-center gap-2">
              <span class="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${link.badgeClass}">
                ${link.categoryLabel}
              </span>
              <button 
                onclick="toggleFavorite('${link.id}', event)" 
                class="fav-btn p-1.5 rounded-xl text-slate-400 hover:text-amber-400 dark:hover:text-amber-300 transition-transform ${isFav ? 'is-favorite text-amber-500' : ''}" 
                title="${isFav ? 'Buang daripada Kegemaran' : 'Tambah ke Kegemaran'}"
                aria-label="Kegemaran"
              >
                <i class="${isFav ? 'fas' : 'far'} fa-star text-base"></i>
              </button>
            </div>
          </div>

          <!-- Card Header & Description -->
          <div class="mb-4">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-baseline gap-1.5">
                <span>${link.title}</span>
                <i class="fas fa-arrow-up-right-from-square text-xs opacity-0 group-hover:opacity-100 transition-opacity text-blue-500"></i>
              </a>
            </h3>
            <p class="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-1 mb-2">
              ${link.subtitle}
            </p>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
              ${link.description}
            </p>
          </div>

          <!-- Tags Strip -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${link.tags.slice(0, 3).map(tag => `
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                #${tag}
              </span>
            `).join('')}
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40">
              <i class="fas fa-check-circle text-[9px] mr-1"></i>${link.accessType}
            </span>
          </div>
        </div>

        <!-- Card Action Footer -->
        <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
          <div class="flex items-center gap-1">
            <button 
              onclick="copyToClipboard('${link.url}', '${link.title}')" 
              class="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center gap-1.5" 
              title="Salin Pautan"
            >
              <i class="far fa-copy text-sm"></i>
              <span class="hidden sm:inline">Salin</span>
            </button>

            <button 
              onclick="openInfoModal('${link.id}')" 
              class="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center gap-1.5" 
              title="Info & Panduan"
            >
              <i class="fas fa-circle-info text-sm"></i>
              <span class="hidden sm:inline">Info</span>
            </button>
          </div>

          <a 
            href="${link.url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            <span>Buka Pautan</span>
            <i class="fas fa-external-link text-xs"></i>
          </a>
        </div>

      </article>
    `;
  }).join('');
}

// 4. Pengendali Carian & Penapis (Event Listeners)
function initEventListeners() {
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const resetSearchBtn = document.getElementById("resetSearchBtn");
  const btnResetFilters = document.getElementById("btnResetFilters");

  // Carian masa nyata (Realtime Search)
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchQuery.trim().length > 0) {
        clearSearchBtn.classList.remove("hidden");
      } else {
        clearSearchBtn.classList.add("hidden");
      }
      renderCards();
    });

    // Pintasan papan kekunci ESC untuk kosongkan carian
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.activeElement === searchInput) {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.classList.add("hidden");
        renderCards();
      }
    });
  }

  // Butang kosongkan carian
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      renderCards();
      if (searchInput) searchInput.focus();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.classList.add("hidden");
      renderCards();
    });
  }

  if (btnResetFilters) {
    btnResetFilters.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      currentFilter = "all";
      updateFilterButtons();
      renderCards();
    });
  }

  // Kategori butang penapis
  const filterBtns = document.querySelectorAll(".category-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-category");
      updateFilterButtons();
      renderCards();
    });
  });

  // Tukar Paparan Grid vs List
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewListBtn = document.getElementById("viewListBtn");
  const linksGrid = document.getElementById("linksGrid");

  if (viewGridBtn && viewListBtn && linksGrid) {
    viewGridBtn.addEventListener("click", () => {
      isListView = false;
      linksGrid.classList.remove("links-list-mode");
      viewGridBtn.classList.add("bg-slate-200", "dark:bg-slate-800", "text-slate-800", "dark:text-white");
      viewListBtn.classList.remove("bg-slate-200", "dark:bg-slate-800", "text-slate-800", "dark:text-white");
    });

    viewListBtn.addEventListener("click", () => {
      isListView = true;
      linksGrid.classList.add("links-list-mode");
      viewListBtn.classList.add("bg-slate-200", "dark:bg-slate-800", "text-slate-800", "dark:text-white");
      viewGridBtn.classList.remove("bg-slate-200", "dark:bg-slate-800", "text-slate-800", "dark:text-white");
    });
  }

  // Scroll to Top
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.remove("hidden");
      } else {
        scrollBtn.classList.add("hidden");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Kongsi Portal
  const btnShare = document.getElementById("btnSharePortal");
  if (btnShare) {
    btnShare.addEventListener("click", async () => {
      const shareData = {
        title: "Portal Pautan Perpustakaan Politeknik Tawau Sabah",
        text: "Gerbang Berpusat Sumber Rujukan & Sistem Perpustakaan PTS.",
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // User cancelled or unsupported
        }
      } else {
        copyToClipboard(window.location.href, "Pautan Portal Perpustakaan PTS");
      }
    });
  }

  // Tutup Modal
  const modal = document.getElementById("infoModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalCloseActionBtn = document.getElementById("modalCloseActionBtn");

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }
  if (modalCloseActionBtn && modal) {
    modalCloseActionBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }
}

// 5. Kemas kini status aktif butang kategori
function updateFilterButtons() {
  const filterBtns = document.querySelectorAll(".category-btn");
  filterBtns.forEach(btn => {
    if (btn.getAttribute("data-category") === currentFilter) {
      btn.classList.add("active");
      btn.classList.remove("text-slate-600", "dark:text-slate-300");
    } else {
      btn.classList.remove("active");
      btn.classList.add("text-slate-600", "dark:text-slate-300");
    }
  });
}

// 6. Pengurusan Kegemaran (Favorites / Bookmarks via LocalStorage)
function toggleFavorite(id, event) {
  if (event) event.stopPropagation();

  const index = favorites.indexOf(id);
  const item = LIBRARY_LINKS.find(x => x.id === id);
  const title = item ? item.title : "Pautan";

  if (index > -1) {
    favorites.splice(index, 1);
    showToast(`Dibuang daripada Kegemaran: ${title}`, "fa-star");
  } else {
    favorites.push(id);
    showToast(`Ditambah ke Kegemaran: ${title}`, "fa-star text-amber-400");
  }

  localStorage.setItem("pts_lib_favorites", JSON.stringify(favorites));
  updateFavoritesCount();
  renderCards();
}

function updateFavoritesCount() {
  const badge = document.getElementById("favBadge");
  if (badge) {
    badge.textContent = favorites.length;
  }
}

// 7. Salin ke Papan Klip (Copy to Clipboard with Toast Notification)
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Pautan berjaya disalin: ${label || text}`, "fa-check-circle");
  }).catch(() => {
    // Fallback sekiranya execCommand diperlukan
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      showToast(`Pautan berjaya disalin: ${label || text}`, "fa-check-circle");
    } catch (e) {
      showToast("Gagal menyalin pautan.", "fa-triangle-exclamation");
    }
    document.body.removeChild(textArea);
  });
}

// 8. Toast Notifications
let toastTimeout;
function showToast(message, iconClass = "fa-check-circle text-emerald-400") {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  if (toastIcon) {
    toastIcon.className = `fas ${iconClass} text-base`;
  }

  toast.classList.remove("hidden");
  // Trigger animation
  setTimeout(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  }, 10);

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 3000);
}

// 9. Buka Modal Maklumat Lanjut
function openInfoModal(id) {
  const link = LIBRARY_LINKS.find(x => x.id === id);
  if (!link) return;

  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategoryBadge = document.getElementById("modalCategoryBadge");
  const modalDescription = document.getElementById("modalDescription");
  const modalUrlText = document.getElementById("modalUrlText");
  const modalUsageTips = document.getElementById("modalUsageTips");
  const modalLaunchBtn = document.getElementById("modalLaunchBtn");
  const modalCopyBtn = document.getElementById("modalCopyBtn");
  const modalIconContainer = document.getElementById("modalIconContainer");

  modalTitle.textContent = link.title;
  modalCategoryBadge.textContent = link.categoryLabel;
  modalCategoryBadge.className = `text-[11px] font-semibold px-2.5 py-0.5 rounded-full inline-block mt-1 ${link.badgeClass}`;
  modalDescription.textContent = link.description;
  modalUrlText.textContent = link.url;
  modalUsageTips.textContent = `Sasaran Pengguna: ${link.targetAudience}. Jenis Akses: ${link.accessType}.`;
  modalLaunchBtn.href = link.url;

  if (modalIconContainer) {
    modalIconContainer.className = `w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${link.iconBg}`;
    modalIconContainer.innerHTML = `<i class="${link.icon}"></i>`;
  }

  if (modalCopyBtn) {
    modalCopyBtn.onclick = () => copyToClipboard(link.url, link.title);
  }

  modal.classList.remove("hidden");
}
