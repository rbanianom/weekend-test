import { Row, Col, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function HelpAndTips(props) {
  const { isMobile } = props;
  return (
    <>
      <div
        style={{
          textAlign: "-webkit-center",
          padding: "0px 32px",
          marginBottom: isMobile ? "67px" : "150px",
        }}
      >
        <p className="section-title-text">Help & Tips</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={24} lg={5} style={{ marginBottom: "10px" }}>
            <div>
              <img
                src="image-1.png"
                style={{ width: "311px", height: "176px" }}
              />
              <div className="text-over-img-wrapper">
                <p className="text-over-img">Start quickly with simple steps</p>
                <Button
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "20px",
                  }}
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                />
              </div>
            </div>
          </Col>
          <Col md={24} lg={5} style={{ marginBottom: "10px" }}>
            <div>
              <img
                src="image-2.png"
                style={{ width: "311px", height: "176px" }}
              />
              <div className="text-over-img-wrapper">
                <p className="text-over-img">
                  Run smoothly at vero eos et accusamus
                </p>
                <Button
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "20px",
                  }}
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                />
              </div>
            </div>
          </Col>
          <Col md={24} lg={5} style={{ marginBottom: "10px" }}>
            <div>
              <img
                src="image-3.png"
                style={{ width: "311px", height: "176px" }}
              />
              <div className="text-over-img-wrapper">
                <p className="text-over-img">
                  Denounce with righteous indignation
                </p>
                <Button
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "20px",
                  }}
                  shape="circle"
                  icon={<ArrowRightOutlined />}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <style jsx>{`
        .text-over-img-wrapper {
          text-align: left;
          padding: 17px 25px;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          bottom: -37px;
          width: 312px;
          height: 72px;
          background-color: #00000080;
        }
        .text-over-img {
          text-align: left;
          width: 210px;
          height: 38px;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.57px;
          color: #ffffff;
        }
        .section-title-text {
          text-align: ${isMobile ? "left" : "center"};
        }
      `}</style>
    </>
  );
}
