import {useState,useEffect} from 'react'
import React from 'react'
import axios from "axios"
import {Row,Col,Container} from 'react-bootstrap'

const Tracker=()=> {
const  [details,Setdetails] = useState([])
useEffect(()=>{
    axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
        .then((recieve)=>(Setdetails(recieve.data)))
        .catch((err) => console.log(err))

},[]);

  return (
    <>
         <Container>
      <Row  style={{fontSize:"1.5em"}}>
        <Col md={2}>Coin</Col>
        <Col md={1}>Symbol</Col>
        <Col md={2}>price</Col>
        <Col md={2}>volume</Col>
        <Col md={1}>Change</Col>
        <Col md={2}>MarketCap</Col>
        <hr/>
      </Row>

     { details.map((detail) => (
      <Row style={{fontSize:"1.3em"}}>
        <Col style={{textAlign:'left'}} md={2} ><img
              alt="cryptologo"
              src={detail.image}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> {'  '}{detail.id}</Col>
        
        <Col md={2}>{detail.symbol}</Col>
        <Col md={2}>{detail.current_price}$</Col>
        <Col md={2}>{detail.total_volume}</Col>
        <Col md={2}>{detail.price_change_percentage_24h}%</Col>
        <Col md={2}>{detail.market_cap}$</Col>
        <hr/>
        </Row> ))
        } 
          
    </Container>
    </>
  )
}

export default Tracker
