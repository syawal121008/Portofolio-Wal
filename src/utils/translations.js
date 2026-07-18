export const translations = {
  ID: {
    nav: {
      projects: 'Proyek',
      experience: 'Pengalaman',
      skills: 'Keahlian',
      contact: 'Kontak',
    },
    hero: {
      badge: 'Tersedia untuk Kerja Sama',
      greeting: 'Halo, saya ',
      description: 'Seorang Full-Stack Web Developer yang berfokus membangun solusi digital yang efisien, sistem keamanan informasi, dan aplikasi verifikasi biometrik.',
      trait1_title: 'Web & API Development',
      trait1_desc: 'Membangun platform responsif dengan React.js, PHP, & Node.js.',
      trait2_title: 'Verifikasi Biometrik',
      trait2_desc: 'Pengalaman riset sistem verifikasi wajah (Face Verification).',
      trait3_title: 'Full-Stack Integration',
      trait3_desc: 'Menghubungkan frontend interaktif dengan arsitektur backend kokoh.',
      btn_projects: 'Lihat Proyek Saya',
      btn_contact: 'Hubungi Saya',
      scroll_down: 'Scroll Ke Bawah',
    },
    skills: {
      title: 'Keahlian & Teknologi',
      desc: 'Alat-alat dan teknologi yang biasa saya gunakan untuk merealisasikan sebuah ide digital.',
      items: {
        face: 'Verifikasi Wajah',
        responsive: 'Web Responsif',
        security: 'Keamanan Web',
        ecommerce: 'Sistem E-Commerce',
      }
    },
    experience: {
      title: 'Pengalaman Kerja',
      desc: 'Perjalanan profesional dan magang yang telah saya lalui.',
      role: 'Junior Web Developer (Magang / PKL)',
      company: 'Pusdiklat Bahasa Badiklat Kemhan',
      duration: 'Magang / PKL',
      project_lbl: 'Proyek Utama',
      project_name: 'Pendataan Riwayat Hidup Siswa Diklat',
      project_desc: 'Merancang dan mengembangkan aplikasi web internal untuk mencatat serta mengelola riwayat hidup dan biodata siswa diklat bahasa secara digital, mendigitalkan sistem administrasi yang sebelumnya dikerjakan secara manual.',
      tech: ['PHP Laravel', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap']
    },
    projects: {
      title: 'Galeri Proyek',
      desc: 'Geser ke samping untuk melihat kumpulan proyek yang telah saya kembangkan. Klik proyek untuk detail.',
      view_github: 'Lihat GitHub',
      demo: 'Kunjungi Situs',
      close: 'Tutup',
      proj_desc: 'Deskripsi Proyek',
      tech_stack: 'Teknologi Utama',
      code_status: 'Status Kode',
      status_val: 'Produksi / Open Source',
      list: [
        {
          id: 1,
          title: 'Dompet Sampah',
          category: 'Web App / Waste Management & Fintech',
          tech: ['React.js', 'PHP Laravel', 'MySQL', 'Dompet Sampah'],
          desc: 'Platform bank sampah digital inovatif yang mengonversi sampah daur ulang (plastik/kertas) menjadi saldo dompet digital siap tarik.',
          detailDesc: 'Platform yang mendukung program ekonomi sirkular dan kelestarian lingkungan. Pengguna dapat menjadwalkan penjemputan sampah oleh kurir, menimbang berat sampah, menghitung kalkulasi harga otomatis, dan menarik saldo koin mereka ke rekening bank atau e-wallet via integrasi payment gateway.',
          github: 'https://github.com/syawal121008',
          link: 'https://dompetsampah.com'
        },
        {
          id: 2,
          title: 'E-Commerce Koperasi Oscar',
          category: 'Web App / E-Commerce',
          tech: ['React.js', 'PHP Laravel', 'MySQL', 'Tailwind CSS'],
          desc: 'Platform e-commerce khusus untuk Koperasi Sekolah/Instansi. Memiliki sistem kasir terpadu, katalog produk digital, pencatatan transaksi siswa, dan pelaporan keuangan otomatis untuk admin.',
          detailDesc: 'Aplikasi ini dirancang untuk memodernisasi koperasi sekolah. Siswa dapat melihat saldo e-money koperasi mereka, memilih barang, dan melakukan checkout. Di sisi admin/kasir terdapat halaman point-of-sale (POS) yang cepat untuk melayani pembelian langsung secara tatap muka.',
          github: 'https://github.com/syawal121008/E-commerce_koperasi_oscar',
          link: '#'
        },
        {
          id: 3,
          title: 'Sistem Verifikasi Wajah',
          category: 'Biometrik / Machine Learning',
          tech: ['React.js', 'Python', 'Flask', 'OpenCV', 'Face API'],
          desc: 'Aplikasi otentikasi biometrik dengan verifikasi wajah realtime. Digunakan untuk sistem presensi cerdas dan verifikasi keamanan siswa di lingkungan sekolah.',
          detailDesc: 'Proyek riset verifikasi wajah terintegrasi. Menggunakan python Flask di backend untuk memproses feed kamera web secara realtime, mencocokkan wajah dengan dataset menggunakan OpenCV / Face Recognition, dan mengirim status kecocokan ke dashboard React frontend.',
          github: 'https://github.com/syawal121008/verifikasi-wajah',
          link: '#'
        },
        {
          id: 4,
          title: 'Klinik Kesehatan Digital',
          category: 'Web Portal / Layanan Kesehatan',
          tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
          desc: 'Portal rekam medis dan pendaftaran antrean pasien online. Memudahkan penjadwalan janji temu dokter, pengelolaan rekam medis digital, dan resep obat secara sistematis.',
          detailDesc: 'Solusi sistem informasi klinik kesehatan digital. Pasien dapat berkonsultasi secara virtual, melihat jadwal dokter yang aktif, mendaftar antrean dari rumah untuk meminimalkan penumpukan pasien, dan dokter dapat menginput resep obat secara digital.',
          github: 'https://github.com/syawal121008/Klinik-kesehatan-digital',
          link: '#'
        },
        {
          id: 5,
          title: 'Platform Modul Guru',
          category: 'E-Learning',
          tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'CSS Grid'],
          desc: 'Platform distribusi modul materi ajar dan tugas interaktif untuk mempermudah kegiatan belajar mengajar antara guru dan siswa secara digital.',
          detailDesc: 'Sebuah sistem manajemen pembelajaran (LMS) sederhana. Guru dapat mengunggah file modul, membuat kuis singkat, dan memantau status penyelesaian tugas siswa. Tampilan antarmuka dibuat sangat responsif agar nyaman diakses lewat ponsel pintar.',
          github: 'https://github.com/syawal121008/modulguru',
          link: '#'
        },
        {
          id: 6,
          title: 'Scan SMK Info Spark',
          category: 'Alat / Pemindai QR Code',
          tech: ['React.js', 'QR API', 'PHP', 'MySQL'],
          desc: 'Aplikasi pembaca QR Code kartu pelajar untuk pencatatan absensi harian dan rekapitulasi poin kedisiplinan siswa SMK Info Spark secara instan.',
          detailDesc: 'Memanfaatkan kamera bawaan perangkat untuk memindai kode QR unik pada kartu pelajar. Sistem otomatis memvalidasi data siswa, mencatat jam kehadiran, dan memperbarui database log sekolah secara realtime dengan notifikasi suara instan.',
          github: 'https://github.com/syawal121008/scan-smk-info-spark',
          link: '#'
        },
        {
          id: 7,
          title: 'Tempmail-wal',
          category: 'Layanan Utilitas',
          tech: ['React.js', 'Node.js', 'Express', 'TempMail API'],
          desc: 'Layanan inbox email sekali pakai (temporary disposable email) untuk mempermudah registrasi akun uji coba tanpa risiko spam di inbox utama.',
          detailDesc: 'Menyediakan alamat email acak secara instan yang secara otomatis mendengarkan pesan masuk baru secara berkala. Pengguna dapat membaca pesan teks, tautan aktivasi, atau kode OTP tanpa menyebarkan alamat email pribadi mereka.',
          github: 'https://github.com/syawal121008/tempmail-wal',
          link: '#'
        }
      ]
    },
    contact: {
      title: 'Hubungi Saya',
      heading: 'Mari diskusikan ide proyek Anda berikutnya.',
      desc: 'Saya terbuka untuk kolaborasi proyek lepas (freelance), posisi kerja full-time, atau diskusi teknologi seputar web development dan sistem biometrik.',
      email_lbl: 'Surel / Email',
      github_lbl: 'Profil GitHub',
      form_name: 'Nama Lengkap',
      form_email: 'Alamat Email',
      form_msg: 'Pesan Anda',
      btn_send: 'Kirim Pesan',
      sent: 'Pesan Terkirim!',
    }
  },
  EN: {
    nav: {
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for Collaboration',
      greeting: "Hello, I'm ",
      description: 'A Full-Stack Web Developer focused on building efficient digital solutions, information security systems, and biometric verification applications.',
      trait1_title: 'Web & API Development',
      trait1_desc: 'Building responsive platforms with React.js, PHP, & Node.js.',
      trait2_title: 'Biometric Verification',
      trait2_desc: 'Research experience in face verification systems.',
      trait3_title: 'Full-Stack Integration',
      trait3_desc: 'Connecting interactive frontends with solid backend architectures.',
      btn_projects: 'View My Projects',
      btn_contact: 'Contact Me',
      scroll_down: 'Scroll Down',
    },
    skills: {
      title: 'Skills & Technologies',
      desc: 'Tools and technologies I use to bring digital concepts to life.',
      items: {
        face: 'Face Verification',
        responsive: 'Responsive Web',
        security: 'Web Security',
        ecommerce: 'E-Commerce system',
      }
    },
    experience: {
      title: 'Work Experience',
      desc: 'My professional journey and internship experiences.',
      role: 'Junior Web Developer (Internship / PKL)',
      company: 'Pusdiklat Bahasa Badiklat Kemhan',
      duration: 'Internship / PKL',
      project_lbl: 'Core Project',
      project_name: 'Student Bio-data Registration System',
      project_desc: 'Designed and developed an internal web application to record and manage language training student profiles digitally, digitizing a previously manual administrative process.',
      tech: ['PHP Laravel', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap']
    },
    projects: {
      title: 'Project Gallery',
      desc: 'Slide horizontally to see the projects I have developed. Click any project for details.',
      view_github: 'View GitHub',
      demo: 'Visit Site',
      close: 'Close',
      proj_desc: 'Project Description',
      tech_stack: 'Core Technologies',
      code_status: 'Code Status',
      status_val: 'Production / Open Source',
      list: [
        {
          id: 1,
          title: 'Dompet Sampah',
          category: 'Web App / Waste Management & Fintech',
          tech: ['React.js', 'PHP Laravel', 'MySQL', 'Dompet Sampah'],
          desc: 'An innovative digital waste bank platform converting recycled trash (plastic/paper) into withdrawable e-wallet balances.',
          detailDesc: 'A platform designed to support circular economy initiatives. Users can request courier trash pickups, weigh items, calculate automated pricing, and withdraw earned coin balances to bank accounts or e-wallets via integrated payment gateways.',
          github: 'https://github.com/syawal121008',
          link: 'https://dompetsampah.com'
        },
        {
          id: 2,
          title: 'Oscar Cooperative E-Commerce',
          category: 'Web App / E-Commerce',
          tech: ['React.js', 'PHP Laravel', 'MySQL', 'Tailwind CSS'],
          desc: 'E-commerce platform tailored for school/office cooperatives. Features a unified POS system, digital product catalog, student transaction logs, and automated financial reporting for admins.',
          detailDesc: 'This application is designed to modernize school cooperatives. Students can view their cooperative e-money balance, browse products, and check out. On the admin/cashier side, there is a fast Point-of-Sale (POS) page for in-person transactions.',
          github: 'https://github.com/syawal121008/E-commerce_koperasi_oscar',
          link: '#'
        },
        {
          id: 3,
          title: 'Face Verification System',
          category: 'Biometrics / Machine Learning',
          tech: ['React.js', 'Python', 'Flask', 'OpenCV', 'Face API'],
          desc: 'Biometric authentication application featuring real-time face verification. Used for smart attendance systems and student security checks at school.',
          detailDesc: 'Integrated face verification research project. Uses Python Flask in the backend to process webcam feeds in real-time, matching faces with a dataset using OpenCV / Face Recognition, and sending matching status to a React frontend dashboard.',
          github: 'https://github.com/syawal121008/verifikasi-wajah',
          link: '#'
        },
        {
          id: 4,
          title: 'Digital Health Clinic',
          category: 'Web Portal / Healthcare Services',
          tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
          desc: 'Medical records portal and online patient queue registration. Facilitates doctor appointment scheduling, digital medical record management, and systematic prescriptions.',
          detailDesc: 'Digital health clinic information system solution. Patients can consult virtually, view active doctor schedules, queue from home to minimize clinic crowding, and doctors can input digital prescriptions.',
          github: 'https://github.com/syawal121008/Klinik-kesehatan-digital',
          link: '#'
        },
        {
          id: 5,
          title: 'Teacher Module Platform',
          category: 'E-Learning',
          tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'CSS Grid'],
          desc: 'Distribution platform for learning modules and interactive assignments, facilitating digital teaching and learning activities between teachers and students.',
          detailDesc: 'A simple learning management system (LMS). Teachers can upload teaching modules, create short quizzes, and monitor students\' task completion status. The user interface is highly responsive for convenient mobile access.',
          github: 'https://github.com/syawal121008/modulguru',
          link: '#'
        },
        {
          id: 6,
          title: 'SMK Info Spark Scanner',
          category: 'Utility / QR Code Scanner',
          tech: ['React.js', 'QR API', 'PHP', 'MySQL'],
          desc: 'Student ID card QR Code reader application for instant daily attendance logging and student discipline point tabulation at SMK Info Spark.',
          detailDesc: 'Utilizes the device\'s built-in camera to scan unique QR codes on student ID cards. The system automatically validates student data, records attendance time, and updates the school log database in real-time with instant voice notifications.',
          github: 'https://github.com/syawal121008/scan-smk-info-spark',
          link: '#'
        },
        {
          id: 7,
          title: 'Tempmail-wal',
          category: 'Utility Service',
          tech: ['React.js', 'Node.js', 'Express', 'TempMail API'],
          desc: 'Disposable temporary email service designed for quick trial account registrations without cluttering your primary inbox with spam.',
          detailDesc: 'Provides random email addresses instantly that automatically listen for new incoming messages. Users can read texts, activation links, or OTP codes without revealing their personal email address.',
          github: 'https://github.com/syawal121008/tempmail-wal',
          link: '#'
        }
      ]
    },
    contact: {
      title: 'Contact Me',
      heading: "Let's discuss your next project idea.",
      desc: 'I am open to freelance collaborations, full-time opportunities, or tech discussions regarding web development and biometric systems.',
      email_lbl: 'Email Address',
      github_lbl: 'GitHub Profile',
      form_name: 'Full Name',
      form_email: 'Email Address',
      form_msg: 'Your Message',
      btn_send: 'Send Message',
      sent: 'Message Sent!',
    }
  }
};
