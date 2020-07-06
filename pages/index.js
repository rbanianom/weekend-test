import React, { useState, useEffect } from "react";
import { Grid, Layout, Col, Row, Spin, notification } from "antd";
import HeaderSection from "../components/header-section";
import DefinitionSection from "../components/definition-section";
import ContentSection from "../components/content-section";
import LastSection from "../components/last-section";

const { Content, Footer } = Layout;
const { useBreakpoint } = Grid;

export default function Home() {
  const screens = useBreakpoint();
  const [isMobile, setIsMobile] = useState(false);
  const [initLoading, setInitLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [helpTips, setHelpTips] = useState([]);

  useEffect(() => {
    async function loadData() {
      const endpointTesti =
        "https://wknd-take-home-challenge-api.herokuapp.com/testimonial";
      const endpointHelpTips =
        "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";

      try {
        const responseTesti = await fetch(endpointTesti, { method: "GET" });
        const dataTesti = await responseTesti.json();

        const responseHelpTips = await fetch(endpointHelpTips, {
          method: "GET",
        });
        const dataHelpTips = await responseHelpTips.json();

        setTestimonials(dataTesti);
        setHelpTips(dataHelpTips);
        setInitLoading(false);
      } catch (err) {
        notification.error({
          message: "Error",
          description: "Please reload your browser",
        });
      }
    }

    if (screens.sm && screens.sm && !screens.lg) {
      setIsMobile(true);
    } else if (screens.xs) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    loadData();
  }, [screens]);

  if (initLoading) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
        }}
      >
        <Spin tip="Loading..." />
      </div>
    );
  }

  return (
    <Layout>
      <Content>
        <Row>
          <HeaderSection isMobile={isMobile} />
          <DefinitionSection isMobile={isMobile} />
          <ContentSection
            isMobile={isMobile}
            testimonials={testimonials}
            helpTips={helpTips}
          />
          <LastSection isMobile={isMobile} />
        </Row>
      </Content>
      <Footer style={{ background: "#0b24fb" }}>
        <Row style={{ position: "relative" }}>
          <Col span={12}>
            <p className="footer-text">
              <strong>wknd</strong>@2020
            </p>
          </Col>
          <Col span={12}>
            <p className="footer-text box-text">alpha version 0.1</p>
          </Col>
        </Row>
      </Footer>
      <style jsx>{`
        .footer-text {
          font-size: ${isMobile ? "12px" : "16px"};
          left: ${isMobile ? "0" : "50%"};
          margin: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #ffffff;
        }
        .box-text {
          right: ${isMobile ? "0" : "auto"};
          left: ${isMobile ? "auto" : "50%"};
          font-size: ${isMobile ? "10px" : "14px"};
          padding: 6px;
          letter-spacing: 1px;
          font-weight: 300;
          border-radius: 12px;
          border: solid 1px #ffffff;
        }
      `}</style>
    </Layout>
  );
}
