import React from 'react'
import student from "../src/student.jpg";
import "./App.css";
export default function Home(){
    return(
        <>
        <div className='banner'>
        <div className='box1'> <img className="pic" src={student} alt="Image"></img> </div>
        <div className='box2'>
        <h1 className='text'>BharCo: Empowering Indian Farmers, Connecting Growers and Buyers for a Thriving Tomorrow!</h1>
        <p className='text2'>At Bharco India, our mission is to empower farmers across India by revolutionizing the agricultural supply chain. We are committed to providing a cutting-edge platform that connects farmers directly with food product companies, laborers, and farming equipment providers. Through our technology-driven ecosystem, we aim to eliminate middlemen, foster fair trade practices, and promote sustainable agriculture, ensuring that farmers receive fair prices for their produce and gain access to a broader market.</p>
        </div>
        </div>
        <div className="box3">
        <h1 className='text3'>Unique Value Proposition</h1>
        <p className='text4'>At Bharco India, we stand apart from traditional agricultural practices by offering a comprehensive platform that brings together farmers, food product companies, laborers, and farming equipment providers under one digital roof. Our unique value proposition includes:</p>
        </div>
        </>
    )
}