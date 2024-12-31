import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import MatroFooter from '../../MatriMony/MatroFooter';

function PackageSelection() {
  const packages = [
    {
      name: "Gold (Self Service)",
      price: "Rs 1500",
      duration: "90 days",
      taxes: "[SGST 9%, CGST 9%, IGST 0%]",
      contacts: "Contact View 40",
      buttonLabel: "Pay Now"
    },
    {
      name: "Platinum (Self Service)",
      price: "Rs 2500",
      duration: "180 days",
      taxes: "[SGST 9%, CGST 9%, IGST 0%]",
      contacts: "Contact View 80",
      buttonLabel: "Pay Now"
    },
    {
      name: "Diamond (Assisted)",
      price: "Rs 5000",
      duration: "180 days",
      taxes: "[SGST 9%, CGST 9%, IGST 0%]",
      contacts: "Contact View 170",
      buttonLabel: "Pay Now"
    },
    {
      name: "Till You Marry (Assisted)",
      price: "Rs 10000",
      duration: "365 days",
      taxes: "[SGST 9%, CGST 9%, IGST 0%]",
      contacts: "Contact View 400",
      buttonLabel: "Pay Now"
    }
  ];

  return (
    <>
    <Container>
      <h2 className="text-center my-4">Choose Your Matrimony Package</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {packages.map((pkg, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{pkg.name}</Card.Title>
                <Card.Text>{pkg.price}</Card.Text>
                <Card.Text>{pkg.duration}</Card.Text>
                <Card.Text>{pkg.taxes}</Card.Text>
                <Card.Text>{pkg.contacts}</Card.Text>
                <Button variant="primary">{pkg.buttonLabel}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <br />
    <br />
    <MatroFooter/>
    </>
  );
}

export default PackageSelection;