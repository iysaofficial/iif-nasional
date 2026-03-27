import React from "react";

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
                    <a href="/kategori26">Kembali ke halaman sebelumnya</a>
                    <div class="underline1"></div>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{ width:"100%"}}>
                <h3>Pilih berdasarkan jenjang event yang kalian ikuti</h3>
              </div>
              <div className="row mx-auto" style={{ width:"50%"}}>
                <a href="https://drive.google.com/file/d/19b6esNmzwXjGqjmCIsVRX1bkgno2y3X7/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noreferrer" style={{fontSize:"22px",fontWeight:"bold"}}> University</a>
                <a href="https://drive.google.com/file/d/1gMVINZfW6tRq3iuxWjMHEeaQG6dRK-x-/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noreferrer" style={{fontSize:"22px",fontWeight:"bold"}}> Secondary </a>
                {/* <a href="https://drive.google.com/file/d/1jd17J4knvtD-IdliUIZgKTIz85BNrh3i/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noreferrer" style={{fontSize:"22px",fontWeight:"bold"}}> SMP </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default jenjangonline;
