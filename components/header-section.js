import { Row, Col, Comment, Button } from "antd";

export default function HeaderSection(props) {
  const { isMobile } = props;

  const headerBtn = {
    width: "231px",
    height: "58px",
    marginTop: "-125px",
    borderRadius: "29px",
    boxShadow: "0 20px 30px 0 rgba(249, 131, 171, 0.5)",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
  };
  return (
    <>
      <Col span={24}>
        <div className="container-1">
          <div className="header-wrapper">
            <Comment
              author="Good Morning"
              avatar={<img src="avatar.png" alt="avatar" />}
              content={
                <p style={{ fontWeight: "bold", fontSize: "16px" }}>Fellas</p>
              }
              style={{
                paddingLeft: isMobile ? "0px" : "200px",
              }}
            />
          </div>
          <Row>
            <Col span={24} style={{ marginTop: "190px" }}>
              <div className="content-text title-text">WEEKEND FROM HOME</div>
            </Col>
            <Col span={24}>
              <div className="content-text paragraph-text">
                Stay active with a little workout.
              </div>
            </Col>
            <Col span={24}>
              <div className="content-image-wrapper">
                <img src="bitmap.png" style={{ height: "350px" }} />
                <Button style={headerBtn}>Let's Go</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <style jsx>{`
        .header-wrapper {
          padding: 2px 24px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          line-height: 9px;
          background: white;
        }
        .container-1 {
          position: relative;
          background: #eebece;
          background: url("bg-1.png") no-repeat center center;
          background-size: auto 100%;
          background-color: #eebece;
          object-fit: cover;
          height: ${isMobile ? "860px" : "1150px"};
          padding-top: 3%;
          padding-bottom: 3%;
        }
        .content-image-wrapper {
          align-items: center;
          flex-direction: column;
          display: flex;
        }
        .content-text {
          width: 100%;
          font-stretch: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
        .title-text {
          font-size: ${isMobile ? "52px" : "64px"};
          line-height: ${isMobile ? "0.98" : "0.82"};
          font-weight: 900;
          font-style: normal;
          margin-bottom: 20px;
        }
        .paragraph-text {
          font-size: ${isMobile ? "16px" : "24px"};
          line-height: normal;
          font-weight: 600;
          font-style: italic;
          margin-bottom: 80px;
        }
      `}</style>
    </>
  );
}
