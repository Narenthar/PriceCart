import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
const plans = [
  {
    plan: "FREE",
    price: "0",
    features: [
      { feature: "Single User", isAvailable: true },
      { feature: "5GB Storage", isAvailable: true },
      {
        feature: "Unlimited Public Projects",
        isAvailable: true,
      },
      { feature: "Community Access", isAvailable: true },
      {
        feature: "Unlimited Private Projects",
        isAvailable: false,
      },
      {
        feature: "Dedicated Phone Support",
        isAvailable: false,
      },
      { feature: "Free Subdomain", isAvailable: false },
      {
        feature: "Monthly Status Reports",
        isAvailable: false,
      },
    ],
  },
  {
    plan: "PLUS",
    price: "9",
    features: [
      { feature: <strong>5 User</strong>, isAvailable: true },
      { feature: "50GB Storage", isAvailable: true },
      {
        feature: "Unlimited Public Projects",
        isAvailable: true,
      },
      { feature: "Community Access", isAvailable: true },
      {
        feature: "Unlimited Private Projects",
        isAvailable: true,
      },
      {
        feature: "Dedicated Phone Support",
        isAvailable: true,
      },
      { feature: "Free Subdomain", isAvailable: true },
      {
        feature: "Monthly Status Reports",
        isAvailable: false,
      },
    ],
  },
  {
    plan: "PRO",
    price: "49",
    features: [
      {
        feature: (
          <>
            <strong>Unlimited</strong> Users
          </>
        ),
        isAvailable: true,
      },
      { feature: "150GB Storage", isAvailable: true },
      {
        feature: "Unlimited Public Projects",
        isAvailable: true,
      },
      { feature: "Community Access", isAvailable: true },
      {
        feature: "Unlimited Private Projects",
        isAvailable: true,
      },
      {
        feature: "Dedicated Phone Support",
        isAvailable: true,
      },
      {
        feature: (
          <>
            <strong>Unlimited</strong> Free Subdomains
          </>
        ),
        isAvailable: true,
      },
      {
        feature: "Monthly Status Reports",
        isAvailable: true,
      },
    ],
  },
];

export default function PriceTable() {
  return (
    <section class="pricing py-5">
      <Container>
        <Row className="d-flex justify-content-center">
          {plans.map((priceDetails, i) => {
            return (
              <Col key={i} xs={12} sm={12} md={6} lg={4} xl={4}>
                <Card className="mb-5 mb-lg-0">
                  <Card.Body>
                    <h5 class="card-title text-muted text-uppercase text-center">
                      {priceDetails.plan}
                    </h5>
                    <h6 class="card-price text-center">
                      ${priceDetails.price}
                      <span class="period">/month</span>
                    </h6>
                    <hr />
                    {priceDetails.features.map((data, key) => {
                      return (
                        <ul className="fa-ul" key={key}>
                          <li className={data.isAvailable ? "" : "text-muted"}>
                            <span className="fa-li">
                              <i
                                className={
                                  data.isAvailable
                                    ? "fa fa-check"
                                    : "fa fa-times"
                                }
                              ></i>
                            </span>
                            {data.feature}
                          </li>
                        </ul>
                      );
                    })}

                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary text-uppercase"
                      >
                        Button
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
