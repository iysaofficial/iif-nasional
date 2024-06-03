import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const kategori = () => {
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
                    <a href="/lowtahun" >Kembali ke halaman sebelumnya</a>
                    <div class="underline1"></div>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{ width:"100%"}}>
                <h3>Pilih daftar Pemenang apa yang ingin kalian lihat</h3>
              </div>
              <div className="row mx-auto" style={{ width:"50%"}}>
                <a href="https://drive.google.com/file/d/1eR8o_UMV9auLlCRUb9c---rJdXPzV1i_/view?usp=sharing" target="_blank" className="btn btn-primary" style={{fontSize:"22px",fontWeight:"bold"}}> Special Award</a>
                <a href="/jenjangonl24" className="btn btn-primary" style={{fontSize:"22px",fontWeight:"bold"}}> IIF ONLINE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default kategori;
