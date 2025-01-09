import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{
                            width: "266px",
                            overflow: "hidden",
                          }}
                        >
                          <b className="is-hidden">IIF-Nasional</b>
                          <b className="is-hidden">INVENTION</b>
                          <b className="is-hidden">AND</b>
                          <b className="is-hidden">INNOVATION</b>
                          <b className="is-hidden">FAIR</b>
                          <b className="is-hidden">NASIONAL</b>
                          <b className="is-visible">2025</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="">
                          <li>
                            <button className="btn-primary">
                              <a
                                className="btn-primary"
                                href="https://iif-registration-2025.vercel.app/"
                                style={{
                                  textDecoration: "none",
                                }}
                                target="_blank"
                              >
                                Buka Pendaftaran 2025
                              </a>
                            </button>
                            <button className="btn-primary">
                              <a
                                className="btn-primary"
                                href="https://drive.google.com/file/d/1lViw-IyL-fGPt0U0EQkm52p6sR7zU3kU/view?usp=sharing"
                                style={{
                                  textDecoration: "none",
                                }}
                                target="_blank"
                              >
                                Buku Panduan
                              </a>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Tentang IIF - Nasional</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Indonesian Young Scientist Association (IYSA) adalah
                        sebuah lembaga yang memfasilitasi pelajar Indonesia
                        untuk dapat mengembangkan potensi di bidang keilmuan
                        baik di dalam negeri maupun luar negeri. IYSA berdiri
                        sebagai bentuk concern kami untuk memberikan kesempatan
                        kepada pelajar Indonesia khususnya agar dapat
                        memunculkan potensi dan skills yang dimiliki serta
                        menumbuhkan jiwa kompetisi dalam diri mereka. Hal ini
                        kami lakukan untuk menciptakan perbaikan kehidupan.
                        Karena, kami yakin bahwa setiap pelajar memiliki potensi
                        yang dapat dikembangkan.
                      </p>
                      <p>
                        Invention and Innovation Fair (IIF) adalah event
                        Nasional yang diselenggarakan IYSA. Merupakan ajang adu
                        kemampuan para peneliti muda dalam mempresentasikan
                        hasil penelitian yang telah mereka lakukan. Melalui
                        Invention and Innovation Fair 2025, para peneliti muda
                        berkesempatan untuk memaparkan hasil karya mereka,
                        memperkaya wawasan, meningkatkan kemampuan berkomunikasi
                        dan berkesempatan untuk berkompetisi di tingkat
                        Nasional.
                      </p>
                      <p>
                        Setelah kemarin sukses melaksanakan IIF nasional pertama
                        di Bali, IYSA akan mengadakan kembali IIF Nasional
                        secara daring (online) yang akan diadakan pada tahun
                        2025.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="main-title text-center">
                    <h3>diselenggarakan Oleh</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    {/* <div className="col-md-3 col-sm-6">
                      <div className="">
                        <img
                          src="./assets/logo/aff1.svg"
                          className="image-ipb m-4"
                        />
                      </div>
                    </div> */}
                    <div className="col-md-6 col-sm-6">
                      <div className="">
                        <img
                          src="./assets/logo/LOGO-AKTUARIA-3.png"
                          className=" image-ipb2 m-4"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="">
                        <img
                          src="./assets/logo/aff3.svg"
                          className=" image-iysa m-4"
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-3 col-sm-6">
                      <div className="">
                        <img
                          src="./assets/logo/aff4.svg"
                          className=" image-prestasididik m-4"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ================================ ABOUT =============================== --> */}

            {/* <!-- ============================== Mekanisme ============================= --> */}

            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="./assets/logo/9.jpg"
                        data-wow-delay=".1s"
                        alt="sanajit-jana"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        {/* <h4>Tugu Pahlawan, Surabaya, Photo by:IG @ayodab</h4> */}
                        <h3>MEKANISME KOMPETISI</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        1. Seluruh tim yang berpartisipasi akan menjalani
                        penjurian menggunakan media Zoom.
                      </p>
                      <p>
                        2. Presentasi dilakukan dalam bahasa Indonesia, dan
                        materi presentasi (PowerPoint) harus dibuat dengan
                        menggunakan bahasa Indonesia yang baik dan benar.
                      </p>
                      <p>
                        3 .Setiap tim akan diberikan waktu 15 menit yang terbagi
                        menjadi 7 menit untuk presentasi dan 8 menit untuk sesi
                        tanya jawab dengan juri.
                      </p>
                      <p>
                        4.Saat melakukan presentasi, peserta diharapkan membawa
                        produknya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================== Mekanisme ============================= --> */}

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Kategori</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="./assets/logo/Inovation.WebP"
                          alt="Innovation science"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Innovation science</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img src="./assets/logo/life.WebP" alt="Life Science" />
                      </div>
                      <div className="service-bottom">
                        <h3>Life Science</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="./assets/logo/Envi.WebP"
                          alt="Environmental science"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Environmental science</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="./assets/logo/Social.WebP"
                          alt="Social Science"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Social Science</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- ============================================== SERVICE ===================================================== --> */}

            {/* <!-- ============================================== testi ===================================================== --> */}

            {/* <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            People I've worked with have said some
                            nice things
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      “Sanajit was a real pleasure to
                                      work with and we look forward to
                                      working with him again. He’s
                                      definitely the kind of developer
                                      you can trust with a project
                                      from start to finish.”
                                      <br />
                                      <span>Ishrak Chaudhury</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Sanajit's a clear communicator
                                      with the tenacity and confidence
                                      to really dig in to tricky
                                      design scenarios and the
                                      collaborative friction that's
                                      needed to produce excellent
                                      work.”
                                      <br />
                                      <span>Kamrul Roy</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Sanajit has done a fantastic
                                      job overall. Not only the site
                                      is to design, but the code is
                                      also very clean and slick. Love
                                      the way he achieved the
                                      translations portion of the
                                      site.”
                                      <br />
                                      <span>Shahadat Mahapatra</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* <!-- ============================================== testi ===================================================== --> */}

        {/* <!-- ================================ Skill =============================== --> */}

        {/* <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Skill</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I value simple content structure, clean design
                      patterns, and thoughtful interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-6">
                  <div className="skill-details text-left">
                    <p>
                      UI/UX involves planning and iterating a site's
                      structure and layout. Once the proper
                      information architecture is in place, I design
                      the visual layer to create a beautiful user
                      experience. Front End Development is building
                      out the visual components of a website. Using
                      HTML, CSS, and Javascript, I build fast,
                      interactive websites. This also may include a
                      CMS, apis, or other integrations. The work that
                      I am most interested in is 0-1 work (helping you
                      get your idea into the world).
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>HTML / CSS - 97%</h3>
                          </li>
                          <li>
                            <h3>UI / UX - 92%</h3>
                          </li>
                          <li>
                            <h3>React JS - 30%</h3>
                          </li>
                          <li>
                            <h3>PHP (Laravel) - 93%</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ================================ Skill =============================== --> */}

        {/* ================================After Movie==================================== */}

        <div class="card text-center mt-5">
          <div className="main-title text-center wow fadeIn">
            <h3>After Movie 2024</h3>
            <div className="underline1"></div>
            <div className="underline2"></div>
          </div>
          <div class="card-body">
            {/* <h5 class="card-title">Special title treatment</h5> */}
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/NjLT_wwQtrQ?si=CFjY6evXn4xb2GOG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* ================================After Movie==================================== */}

        {/* <!-- ================================ faq =============================== --> */}

        {/* <div id="faq">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>FAQ</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <br></br>
                      <h3>Setelah Mendaftar</h3>
                      <br></br>
                      <h4>
                        1. Minsa, kapan kami akan mendapatkan LoA kami?
                        Dikirimnya kemana sih?
                      </h4>
                      <p>
                        Setelah pendaftaran kamu kami terima, kami akan
                        mengirimkan email konfirmasi selambatnya 1X24 jam, dan
                        untuk LoA akan kami kirimkan ke alamat email ketua tim
                        selambatnya 3X24 jam setelah pendaftaran.
                      </p>
                      <br></br>
                      <h4>
                        2. Minsa, aku sudah daftar satu minggu yang lalu tapi
                        kok aku belum terima LoA dan Invoice ya?
                      </h4>
                      <p>
                        Coba deh cek folder spam di email ketua tim kamu,
                        mungkin email dari tim IYSA masuk ke folder spam.
                      </p>
                      <br></br>
                      <h4>3. Upload berkas lomba di mana sih Minsa ?</h4>
                      <p>
                        Link drive untuk upload berkas dan link untuk upload
                        bukti pembayaran akan dicantumkan di invoice.
                      </p>
                      <br></br>
                      <h4>
                        4. Aku mau bayar biaya registrasi nih tapi kok aku tidak
                        bisa menemukan Invoicenya ya ? dan pembayarannya di
                        transfer kemana sih ?
                      </h4>
                      <p>
                        Hayo kamu sudah baca LoA sampai tuntas belum? Karena
                        Invoice kami kirimkan bersama LoA tim kamu, pastikan
                        kamu sudah membaca email dari kami hingga tuntas yaa!
                        Untuk pembayaran, kamu bisa transfer ke rekening yang
                        tertera di dalam invoice ya. Pastikan kamu membayar
                        sesuai dengan nominal yang tertera di invoice, oke!.
                      </p>
                      <br></br>
                      <h4>
                        5. Minsa, aku sudah bayar registrasinya nih, upload
                        bukti pembayarannya kemana ya ?
                      </h4>
                      <p>
                        Jika sudah melakukan pembayaran, kamu bisa upload
                        buktinya ke link yang tercantum di invoice, dan pastikan
                        kamu mengisi dan mengupload bukti transfer dengan benar
                        agar panitia dapat mendatanya dengan benar juga.
                      </p>
                      <br></br>
                      <h4>6. Kalau kwitansinya kapan di kirimkan ke kami ?</h4>
                      <p>
                        Kuitansi pembayaran akan kami kirimkan maksimal 7 hari
                        kerja ke email ketua tim, setelah kamu upload bukti
                        pembayaran ya!.
                      </p>
                      <br></br>
                      <h4>
                        7. Minsa, satu minggu lagi penjurian nih kok aku belum
                        terima jadwal presentasi tim aku ya?
                      </h4>
                      <p>
                        Jadwal presentasi peserta online akan kami kirimkan
                        selambatnya 2 hari sebelum penjurian berlangsung ke
                        whatsapp grup dan juga email ketua tim. Pastikan kamu
                        rajin cek informasi yang kami berikan di whatsapp grup
                        dan juga email ya!.
                      </p>

                      <br></br>
                      <br></br>
                      <h3>Selama Event Berlangsung</h3>
                      <br></br>

                      <h4>
                        1. Kapan jadwal presentasi akan diberikan oleh panitia?
                      </h4>
                      <p>
                        Jadwal presentasi akan kami berikan selambatnya 2 hari
                        sebelum penjurian berlangsung atau bisa juga lebih
                        cepat, dan kami kirimkan melalui WA grup dan juga e-mail
                        ketua tim.
                      </p>
                      <br></br>
                      <h4>
                        2. Presentasi online menggunakan aplikasi apa?
                        Zoom,Google meet atau yg lainnya?
                      </h4>
                      <p>
                        Untuk penjurian online kami selalu memakai aplikasi Zoom
                        ya teman-teman, dan pastikan aplikasi Zoom kamu sudah
                        yang terbaru yaa.
                      </p>
                      <br></br>
                      <h4>3. Kapan link zoom akan di berikan oleh panitia?</h4>
                      <p>
                        Link Zoom akan kami berikan dihari penjurian, dan akan
                        kami kirim berkala di grup sesuai jam presentasi tim
                        kalian.
                      </p>
                      <br></br>
                      <h4>
                        4. Berapa banyak akun zoom yang bisa join dan
                        penamaannya seperti apa?
                      </h4>
                      <p>
                        Teman-teman bisa masuk ke Zoom maksimal dengan 5 akun
                        untuk peserta, dan semua akun Zoom harus mengikuti
                        format nama yang sudah kami berikan yaitu "Nomor
                        ruangan_Nama Ketua Tim_Nama Institusi”.
                      </p>
                      <br></br>
                      <h4>5. Berapa durasi peserta melakukan presentasi?</h4>
                      <p>
                        Teman-teman akan diberikan waktu 15 menit untuk 1 sesi
                        presentasi yang akan dibagi 2 yaitu 7 menit awal untuk
                        presentasi dan 8 menit akhir untuk sesi tanya jawab
                        dengan juri.
                      </p>
                      <br></br>
                      <h4>
                        6. Berapa juri yang akan datang ke booth peserta offline
                        kak?
                      </h4>
                      <p>
                        Sama seperti penjurian online, akan ada 2 juri yang
                        menjurikan setiap tim. Dan setelah selesai dijurikan
                        kamu akan diberikan stiker sebagai tanda booth kamu
                        sudah dijurikan, pastikan kamu mendapatkan 2 stiker ya.
                      </p>
                      <br></br>
                      <h4>
                        7. Apakah setelah dijurikan kami bisa langsung merapikan
                        booth kami?
                      </h4>
                      <p>
                        Kamu bisa mulai merapikan booth ketika semua tim sudah
                        selesai dijurikan ya, jadi kalau kamu sudah selesai
                        dijurikan kamu bisa berkunjung dulu ke booth peserta
                        lain.
                      </p>

                      <br></br>
                      <br></br>
                      <h3>Setelah Acara</h3>
                      <br></br>

                      <h4>1. Kapan pemngumuman pemenang?</h4>
                      <p>
                        Pengumuman pemenang dilaksanakan pada hari terakhir
                        disetiap event, kamu bisa cek tanggalnya di jadwal yang
                        tertera di Guide Book.
                      </p>
                      <br></br>
                      <h4>2. Di mana kami bisa melihat hasil pemenang</h4>
                      <p>
                        Kamu bisa cek hasil pemenang di official website dari
                        event yang kamu ikuti.
                      </p>
                      <br></br>
                      <h4>3. Kapan E-certificate akan dikirmkan</h4>
                      <p>
                        IYSA TIDAK mengirimkan E-Certificate untuk peserta
                        Nasional atau Peserta Indonesia yang mengikuti event
                        secara online. Peserta Nasional Online hanya akan
                        mendapatkan sertifikat dalam bentuk TERCETAK/Hard yang
                        nantinya akan dikirimkan bersama dengan medali melalui
                        ekspedisi JNEIYSA TIDAK mengirimkan E-Certificate untuk
                        peserta Nasional atau Peserta Indonesia yang mengikuti
                        event secara online. Peserta Nasional Online hanya akan
                        mendapatkan sertifikat dalam bentuk TERCETAK/Hard yang
                        nantinya akan dikirimkan bersama dengan medali melalui
                        ekspedisi JNE.
                      </p>
                      <br></br>
                      <h4>4. Kapan pengiriman sertifikat peserta online?</h4>
                      <p>
                        Sertifikat akan dikirimkan selambatnya satu bulan
                        setelah pengumuman pemenang. Kamu bisa cek secara
                        berkala resi pengiriman yang kami kirimkan di Whatsapp
                        grup apakah sertifikat kamu sudah dikirim atau belum.
                      </p>
                      <br></br>
                      <h4>
                        5. Dimana kami bisa mendapatkan sertifikat
                        supervisor/pembimbing?
                      </h4>
                      <p>
                        Kamu bisa melihat dan mengunduh sertifikat
                        supervisor/pembimbing di official website dari event
                        yang kamu ikuti.
                      </p>
                      <br></br>
                      <h4>6. Bagaimana cara melakukan penggandaan medali?</h4>
                      <p>
                        Untuk peserta offline kamu bisa langsung melakukan
                        penggandaan medali di tempat setelah pengumuman pemenang
                        berlangsung. Dan untuk peserta online kamu bisa
                        melakukan penggandaan medali melalui link yang kami
                        kirimkan di Whatsapp grup, kami akan mengirimkan
                        informasi penggandaan di Whatsapp grup selambatnya 2
                        hari setelah pengumuman pemenang.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ================================ faq =============================== --> */}

        {/* <!-- ================================ BLOG ========================== --> */}

        {/* <div id="blog">
          <div className="blog-content">
            <div className="blog-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>My Blog</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        The Blog, Which has thoughts on life, work and
                        everything in between.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details wow fadeIn text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="https://dev.to/sanajitjana/what-is-hooks-in-react-js-41l2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog1.png"
                            alt="React hooks were introduced in version 16.8"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="https://dev.to/sanajitjana/what-is-hooks-in-react-js-41l2"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                          >
                            <h3>
                              <strong>
                                What is the importance of hooks in
                                React JS?
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            In this article, you will learn what are
                            hooks in React JS? and when to use react
                            hooks? React JS is developed by Facebook
                            in the year 2013. There are many students
                            and the new developers who have confusion
                            between react and hooks in react. Well, it
                            is not different, react is a programming
                            language and hooks is ...
                          </p>
                          <a
                            href="https://dev.to/sanajitjana/what-is-hooks-in-react-js-41l2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="https://dev.to/sanajitjana/the-importance-of-ui-ux-software-engineering-1n0n"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog2.png"
                            alt="The importance of UI/UX"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="https://dev.to/sanajitjana/the-importance-of-ui-ux-software-engineering-1n0n"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                          >
                            <h3>
                              <strong>
                                The importance of UI/UX | Software
                                Engineering
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            UI or User Interface is the interface that
                            is the access point where users interact
                            with computers. It is also a way through
                            which users can interact with a website or
                            an application. UI design typically refers
                            to graphical user interfaces but also
                            includes others, such as voice-controlled
                            ones, a keyboard and the appearance ...
                          </p>
                          <a
                            href="https://dev.to/sanajitjana/the-importance-of-ui-ux-software-engineering-1n0n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="blog-main">
                        <a
                          href="https://dev.to/sanajitjana/form-example-in-laravel-8-45oc"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="assets/img/blog/blog3.png"
                            alt="blog-img"
                            className="blog-img"
                          />
                        </a>
                        <div className="blog-head">
                          <a
                            href="https://dev.to/sanajitjana/form-example-in-laravel-8-45oc"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                          >
                            <h3>
                              <strong>
                                Form Example in Laravel 8
                              </strong>
                            </h3>
                          </a>
                        </div>
                        <div className="blog-bottom">
                          <p>
                            Laravel 8 form example tutorial. In this
                            post, i will teach from starting on how to
                            send form data on controller and how to
                            insert form data in database using laravel
                            8. If you are trying to create form and
                            want to insert form data into database
                            using laravel 8 latest version. So this
                            post will help you to do this. Because in
                            this post example, i will create
                            contact-list ...
                          </p>
                          <a
                            href="https://dev.to/sanajitjana/form-example-in-laravel-8-45oc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link-2"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ textAlign: 'center' }}
                    >
                      <a
                        href="https://dev.to/sanajitjana"
                        target="newtab"
                        className="btn btn-warning"
                        style={{
                          width: '50%',
                          fontSize: '16px',
                          backgroundColor: '#efd236',
                          borderColor: '#efd236',
                          color: 'black',
                        }}
                      >
                        More Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ================================ BLOG ========================== --> */}

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Me</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <a
                          href="https://maps.app.goo.gl/77HgPoe2Mhp6jPTn9"
                          target="_blank"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          Jl. Kemang, Pasir Putih, Kec. Sawangan, Kota Depok,
                          Jawa Barat 16519
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:iif.iysaofficial@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          iif.iysaofficial@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="https://wa.me/6288213248890"
                          target="_blank"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +62 88213248890
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Website</h3>
                        <a
                          href="https://www.iysa.or.id/"
                          target="_blank"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          iysa.or.id
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
