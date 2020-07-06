import { Col } from "antd";

export default function LastSection(props) {
  const { isMobile } = props;
  return (
    <>
      <Col
        span={24}
        style={{
          backgroundColor: "#000000",
          textAlign: "-webkit-center",
        }}
      >
        <div
          style={{
            textAlign: "-webkit-center",
            marginBottom: isMobile ? 0 : "205px",
          }}
        >
          <p
            className="section-title-text"
            style={{ marginTop: 0, padding: "0px 32px" }}
          >
            You’re all set.
          </p>
          <p className="section-desc-text" style={{ padding: "0px 32px" }}>
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
          <div style={{ width: "100%", textAlign: "left" }}>
            <img
              src="group-3.png"
              style={{
                position: isMobile ? "relative" : "absolute",
                width: "253px",
                height: "337px",
                top: 0,
                left: 0,
              }}
            />
          </div>
        </div>
      </Col>
      <style jsx>{`
        .section-title-text {
          text-align: ${isMobile ? "left" : "center"};
        }
        .section-desc-text {
          width: ${isMobile ? "auto" : "619px"};
          letter-spacing: ${isMobile ? "-0.57px" : "-0.64px"};
          text-align: ${isMobile ? "left" : "center"};
        }
      `}</style>
    </>
  );
}
