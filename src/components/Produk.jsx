import { useState, useEffect } from "react";
import styles from "../assets/css/Produk.module.css";
import Prodak from "../utils/Prodak";
import FormProduk from "./FormProduk";
function Produk() {
    // let produklist = [...Prodak];
    // const produkContainerRef = useRef(null);
 const [produklist, setProduklist] = useState([...Prodak]); 

 useEffect(()=>{
    console.log("komponon produk telah dimuat");
 },[]);
 useEffect(()=>{
    console.log("Daftar Produk terhapus", produklist);
 },[produklist]);
//  lifecycle react
// cek di console
const addProduk = (newProduk) => {
    const produkId = {
      id: produklist.length + 1, // Tambahkan ID otomatis
      ...newProduk,
    };
    setProduklist((prevList) => [...prevList, produkId]);
  }
    
    const handleClick = () => {
        const newproduk = {
            id: produklist.length + 1,
            nama: "Printer Epson",
            tahun: 2023,
            harga: "Rp. 3.000.000",
            gambar: "https://picsum.photos/200"
        };
        // produklist.push(newproduk);
        // if (produkContainerRef.current) {
        //     const newProductElement = document.createElement("div");
        //     newProductElement.className = styles.card;
        //     newProductElement.innerHTML = `
        //      <img src= ${newproduk.gambar} alt=${newproduk.nama} />
        //                 <h3>${newproduk.nama}</h3>
        //                 <p>Tahun : ${newproduk.tahun}</p>
        //                 <p>Harga : ${newproduk.harga}</p>
        //     `;
        //     produkContainerRef.current.appendChild(newProductElement);
            setProduklist((provlist)=> [...provlist, newproduk]);
            alert("Produk Berhasil di daftarkan")
        }
        // penggunaan dom
        
        

        // console.log("Produk Terbaru Tertambahkan", produklist);
        // alert("Produk Berhasil Ditambahkan")
    
    return (
        <div className={styles.produkContainer}>
            <h1 className={styles.title}> Daftar Produk</h1>
                <div className={styles.cardContainer} >
                    {produklist.map((item)=>(
                    <div key={item.id} className={styles.card}>
                        <img src={item.gambar} alt={item.nama} />
                        <h3>{item.nama}</h3>
                        <p>Tahun : {item.tahun}</p>
                        <p>Harga : {item.harga}</p>
                    </div>
                      ))}
                </div>
                <button className={styles.addButton} onClick={handleClick}>Tambah Produk</button>
                <FormProduk onAddProduk={addProduk} />
        </div>
    )
}
export default Produk;