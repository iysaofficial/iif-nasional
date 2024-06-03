import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const jenjangonline = () => {
  return (
    <React.StrictMode>
      <div id="blog" style={{height:"100vh"}}>
        <div className="blog-content">
          <div className="blog-grid">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="main-title text-center wow fadeIn"
                    style={{ marginTop: "80px" }}
                  >
                    <h3>Daftar Pemenang</h3>
                    <a href="/kategori24">Kembali ke halaman sebelumnya</a>
                    <div class="underline1"></div>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{ width:"100%"}}>
                <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
              </div>
              <div className="row mx-auto" style={{ width:"50%"}}>
                <a href="https://drive.google.com/file/d/1BLipKM6T3fFmQ6Xdt7jqxWiOq1M_ZTOb/view?usp=sharing" className="btn btn-primary" target="_blank" style={{fontSize:"22px",fontWeight:"bold"}}> Universitas</a>
                <a href="https://drive.google.com/file/d/16p1T3Gs-sqIK8Xvzrf5TVMkegwvT5GDV/view?usp=sharing" className="btn btn-primary" target="_blank" style={{fontSize:"22px",fontWeight:"bold"}}> Sekolah Menengah Atas (SMA) </a>
                <a href="https://drive.google.com/file/d/1jd17J4knvtD-IdliUIZgKTIz85BNrh3i/view?usp=sharing" className="btn btn-primary" target="_blank" style={{fontSize:"22px",fontWeight:"bold"}}> Sekolah Menengah Pertama (SMP) </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default jenjangonline;
