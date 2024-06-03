import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const lowtahun = () => {
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
                    <div class="underline1"></div>
                  </div>
                </div>
              </div>
              <div className="text-center" style={{ width:"100%"}}>
                <h3>Pilih berdasarkan tahun event yang kalian ikuti</h3>
              </div>
              <div className="row mx-auto" style={{ width:"50%"}}>
                <a href="/kategori24" className="btn btn-primary" style={{fontSize:"22px",fontWeight:"bold"}}> 2024 </a>
                <a href="" className="btn btn-primary" style={{fontSize:"22px",fontWeight:"bold"}}> 2023 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default lowtahun;
