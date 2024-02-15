import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Faq = () => {
  return (
    <React.StrictMode>
      <div id="blog">
        <div className="blog-content">
          <div className="blog-grid">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="main-title text-center wow fadeIn"
                    style={{ marginTop: "80px" }}
                  >
                    <h3>FAQ</h3>
                    <div class="underline1"></div>
                    <div class="underline2"></div>
                    {/* <p>
                      ReactJS/Php-Laravel and Web Components everything else
                      accomplished on my spare software development time.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details wow fadeIn text-left">
              <div className="container">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="col-xl-9 col-lg-9 col-md-12 col-xs-12 col-sm-12">
                    {/* FAQ1 */}
                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="accordion-item">
                        <h1 className="text-center">Setelah Mendaftar</h1>
                        <div class="underline1"></div>
                        <div class="underline2"></div>
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Minsa, kapan kami akan mendapatkan LoA kami?
                            Dikirimnya kemana sih?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Setelah pendaftaran kamu kami terima, kami akan
                            mengirimkan email konfirmasi selambatnya 1X24 jam.
                            Dan untuk LoA akan kami kirimkan ke alamat email
                            ketua tim selambatnya 3X24 jam setelah pendaftaran.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Minsa, kapan kami akan mendapatkan LoA kami?
                            Dikirimnya kemana sih
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Coba deh cek folder spam di email ketua tim kamu,
                            mungkin email dari tim IYSA masuk ke folder spam.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Upload berkas lomba di mana sih Minsa ?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Link drive untuk upload berkas dan link untuk upload
                            bukti pembayaran akan dicantumkan di invoice.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingfour">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsefour"
                            aria-expanded="false"
                            aria-controls="flush-collapsefour"
                          >
                            Aku mau bayar biaya registrasi nih tapi kok aku
                            tidak bisa menemukan Invoicenya ya ? dan &
                            pembayarannya di transfer kemana sih ?
                          </button>
                        </h2>
                        <div
                          id="flush-collapsefour"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingfour"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Link drive untuk upload berkas dan link untuk upload
                            bukti pembayaran akan dicantumkan di invoice. Kalian
                            akan mendapatkan invoice seperti ini
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingfive">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsefive"
                            aria-expanded="false"
                            aria-controls="flush-collapsefive"
                          >
                            Minsa, aku sudah bayar registrasinya nih, upload
                            bukti pembayarannya kemana ya ?
                          </button>
                        </h2>
                        <div
                          id="flush-collapsefive"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingfive"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Jika sudah melakukan pembayaran, kamu bisa upload
                            buktinya ke link yang tercantum di invoice, dan
                            pastikan kamu mengisi dan mengupload bukti transfer
                            dengan benar agar panitia dapat mendatanya dengan
                            benar juga.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingsix">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsesix"
                            aria-expanded="false"
                            aria-controls="flush-collapsesix"
                          >
                            Kalau kuitansinya kapan di kirimkan ke kami ?
                          </button>
                        </h2>
                        <div
                          id="flush-collapsesix"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingsix"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Kuitansi pembayaran akan kami kirimkan maksimal 7
                            hari kerja ke email ketua tim, setelah kamu upload
                            bukti pembayaran ya!
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingseven">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseseven"
                            aria-expanded="false"
                            aria-controls="flush-collapseseven"
                          >
                            Minsa, satu minggu lagi penjurian nih kok aku belum
                            terima jadwal presentasi tim aku ya ?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseseven"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingseven"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Jadwal presentasi peserta online akan kami kirimkan
                            selambatnya 2 hari sebelum penjurian berlangsung ke
                            whatsapp grup dan juga email ketua tim. Pastikan
                            kamu rajin cek informasi yang kami berikan di
                            whatsapp grup dan juga email ya!
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAQ2 */}

                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="accordion-item">
                        <h1 className="text-center">
                          Selama Event Berlangsung
                        </h1>
                        <div class="underline1"></div>
                        <div class="underline2"></div>
                        <h2 class="accordion-header" id="flush-headingeight">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseeight"
                            aria-expanded="false"
                            aria-controls="flush-collapseeight"
                          >
                            Kapan jadwal presentasi akan diberikan oleh panitia
                            ?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseeight"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingeight"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Jadwal presentasi akan kami berikan selambatnya 2
                            hari sebelum penjurian berlangsung atau bisa juga
                            lebih cepat, dan kami kirimkan melalui WA grup dan
                            juga e-mail ketua tim.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingnine">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsenine"
                            aria-expanded="false"
                            aria-controls="flush-collapsenine"
                          >
                            Presentasi online menggunakan aplikasi apa?
                            Zoom,Google meet atau yg lainnya?
                          </button>
                        </h2>
                        <div
                          id="flush-collapsenine"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingnine"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Untuk penjurian online kami selalu memakai aplikasi
                            Zoom ya teman-teman, dan pastikan aplikasi Zoom kamu
                            sudah yang terbaru yaa.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingten">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseten"
                            aria-expanded="false"
                            aria-controls="flush-collapseten"
                          >
                            Kapan link zoom akan di berikan oleh panitia?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseten"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingten"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Link Zoom akan kami berikan dihari penjurian, dan
                            akan kami kirim berkala di grup sesuai jam
                            presentasi tim kalian
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingeleven">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseeleven"
                            aria-expanded="false"
                            aria-controls="flush-collapseeleven"
                          >
                            Berapa banyak akun zoom yang bisa join dan
                            penamaannya seperti apa?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseeleven"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingeleven"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Teman-teman bisa masuk ke Zoom maksimal dengan 5
                            akun untuk peserta, dan semua akun Zoom harus
                            mengikuti format nama yang sudah kami berikan yaitu
                            "Nomor ruangan_Nama Ketua Tim_Nama Institusi”.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingduabelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseduabelas"
                            aria-expanded="false"
                            aria-controls="flush-collapseduabelas"
                          >
                            Berapa durasi peserta melakukan presentasi?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseduabelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingduabelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Teman-teman akan diberikan waktu 15 menit untuk 1
                            sesi presentasi yang akan dibagi 2 yaitu 7 menit
                            awal untuk presentasi dan 8 menit akhir untuk sesi
                            tanya jawab dengan juri
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingtigabelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsetigabelas"
                            aria-expanded="false"
                            aria-controls="flush-collapsetigabelas"
                          >
                            Berapa juri yang akan datang ke booth peserta
                            offline kak?
                          </button>
                        </h2>
                        <div
                          id="flush-collapsetigabelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingtigabelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Sama seperti penjurian online, akan ada 2 juri yang
                            menjurikan setiap tim. Dan setelah selesai dijurikan
                            kamu akan diberikan stiker sebagai tanda booth kamu
                            sudah dijurikan, pastikan kamu mendapatkan 2 stiker
                            ya
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingempatbelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseempatbelas"
                            aria-expanded="false"
                            aria-controls="flush-collapseempatbelas"
                          >
                            Apakah setelah dijurikan kami bisa langsung
                            merapikan booth kami?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseempatbelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingempatbelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Kamu bisa mulai merapikan booth ketika semua tim
                            sudah selesai dijurikan ya, jadi kalau kamu sudah
                            selesai dijurikan kamu bisa berkunjung dulu ke booth
                            peserta lain
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAQ3 */}

                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="accordion-item">
                        <h1 className="text-center">Setelah Acara</h1>
                        <div class="underline1"></div>
                        <div class="underline2"></div>
                        <h2 class="accordion-header" id="flush-headinglimabelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapselimabelas"
                            aria-expanded="false"
                            aria-controls="flush-collapselimabelas"
                          >
                            Kapan pengumuman pemenang?
                          </button>
                        </h2>
                        <div
                          id="flush-collapselimabelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headinglimabelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Pengumuman pemenang dilaksanakan pada hari terakhir
                            disetiap event, kamu bisa cek tanggalnya di jadwal
                            yang tertera di Guide Book.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingenambelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseenambelas"
                            aria-expanded="false"
                            aria-controls="flush-collapseenambelas"
                          >
                            Di mana kami bisa melihat hasil pemenang
                          </button>
                        </h2>
                        <div
                          id="flush-collapseenambelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingenambelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Kamu bisa cek hasil pemenang di official website
                            dari event yang kamu ikuti
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingtujuhbelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsetujuhbelas"
                            aria-expanded="false"
                            aria-controls="flush-collapsetujuhbelas"
                          >
                            Kapan E-certificate akan dikirimkan
                          </button>
                        </h2>
                        <div
                          id="flush-collapsetujuhbelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingtujuhbelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            IYSA TIDAK mengirimkan E-Certificate untuk peserta
                            Nasional atau Peserta Indonesia yang mengikuti event
                            secara online. Peserta Nasional Online hanya akan
                            mendapatkan sertifikat dalam bentuk TERCETAK/Hard
                            yang nantinya akan dikirimkan bersama dengan medali
                            melalui ekspedisi JNE
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingdelapanbelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsedelapanbelas"
                            aria-expanded="false"
                            aria-controls="flush-collapsedelapanbelas"
                          >
                            Kapan pengiriman sertifikat peserta online?
                          </button>
                        </h2>
                        <div
                          id="flush-collapsedelapanbelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingdelapanbelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Sertifikat akan dikirimkan selambatnya satu bulan
                            setelah pengumuman pemenang. Kamu bisa cek secara
                            berkala resi pengiriman yang kami kirimkan di
                            Whatsapp grup apakah sertifikat kamu sudah dikirim
                            atau belum.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingsembilanbelas">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapsesembilanbelas"
                            aria-expanded="false"
                            aria-controls="flush-collapsesembilanbelas"
                          >
                            Dimana kami bisa mendapatkan sertifikat
                            supervisor/pembimbing?
                          </button>
                        </h2>
                        <div
                          id="flush-collapsesembilanbelas"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingsembilanbelas"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Kamu bisa melihat dan mengunduh sertifikat
                            supervisor/pembimbing di official website dari event
                            yang kamu ikuti
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingduapuluh">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseduapuluh"
                            aria-expanded="false"
                            aria-controls="flush-collapseduapuluh"
                          >
                            Bagaimana cara melakukan penggandaan medali?
                          </button>
                        </h2>
                        <div
                          id="flush-collapseduapuluh"
                          class="accordion-collapse collapse"
                          aria-labelledby="flush-headingduapuluh"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">
                            Untuk peserta offline kamu bisa langsung melakukan
                            penggandaan medali di tempat setelah pengumuman
                            pemenang berlangsung. Dan untuk peserta online kamu
                            bisa melakukan penggandaan medali melalui link yang
                            kami kirimkan di Whatsapp grup, kami akan
                            mengirimkan informasi penggandaan di Whatsapp grup
                            selambatnya 2 hari setelah pengumuman pemenang.
                          </div>
                        </div>
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

export default Faq;
