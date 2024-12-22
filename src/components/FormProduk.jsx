import React, { useState } from "react";
import styles from "../assets/css/FormProduk.module.css";

function FormProduk( { onAddProduk } ) {
    const [formData, setFormData] = useState({
    nama: "",
    tahun: "",
    harga: "",
    gambar: "",
    });
    const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData((prevData) => ({
          ...prevData,
          [name]: value,
         }));
         };
         const handleSubmit = (e) => {
            e.preventDefault();
                    // Validasi input sebelum menambahkan produk
            if (formData.nama && formData.tahun && formData.harga) {
            onAddProduk(formData); // Mengirim data ke Produk.jsx
            setFormData({ nama: "", tahun: "", harga: "", gambar: "" }); // Reset form
            } else {
            alert("Mohon isi semua kolom yang wajib!");
            }
            };
    
    // const [title, setTitle] = useState("");
    // // const [data, setData] = useState("") 
  // function handleTitle(e){
    //     setTitle(e.target.value);
    // }
    // function handleData(e){
    //     setData(e.target.value);
    // }

        
             
  

    return(
        <div className={styles.produkContainer}>
            <h1 className={styles.title}>Form Tambah Produk</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="nama">Nama Produk</label>
                <input
                id="title"
                name="nama"
                type="text"
                value={formData.nama}
                onChange={handleChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="nama">Tahun</label>
                <input
                    id="title"
                    name="tahun"
                    type="numeric"
                    value={formData.tahun}
                    onChange={handleChange}
                    />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="nama">Harga</label>
                <input
                    id="title"
                    name="harga"
                    type="text"
                    value={formData.harga}
                    onChange={handleChange}                   
                    />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="nama">URL Gambar</label>
                <input
                    id="title"
                    name="gambar"
                    type="text"
                    value={formData.gambar}
                    onChange={handleChange}
                    />
            </div>
       
            <button type="submit" className={styles.submitButton}>
     Tambah Produk
    </button>

        
        </form>

        </div>
    )
}

export default FormProduk;