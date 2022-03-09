import React from "react";
import { Col, Row } from "react-bootstrap";
import DonateButton from '../DonateButton/DonateButton';
import ConnectButton from './ConnectButton';

const Header: React.FC = () => {
  return (
    <Row className="Header">
      {"\n"}
      <div className='disclaimer'> DISCLAIMER: some allowances related to adding liquidity are not being removed as expected. Until we can address this issue, check that permissions have been removed after using this tool. If needed, manually disconnect from applications via 'connected sites' in MetaMask to revoke all permissions.</div>
      {"\n"}
      <Col className="my-auto">
        <div className="only-mobile" style={{ float: 'left' }}><DonateButton /></div>
      </Col>
      <Col className="my-auto"><img className="logo" src="/revoke.svg" alt="revoke.cash logo"/></Col>
      <Col className="my-auto">
        <ConnectButton />
        <div className="only-desktop" style={{ float: 'right', marginRight: '10px' }}><DonateButton /></div>
      </Col>
    </Row>
  )
}

export default Header
