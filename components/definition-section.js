import { Col } from "antd";

export default function DefinitionSection(props) {
  const { isMobile } = props;

  return (
    <>
      <Col span={24} style={{ backgroundColor: "#eebece" }}>
        <div style={{ textAlign: "right" }}>
          <img
            src="group-4.png"
            style={{
              width: "159px",
              height: "158px",
              marginBottom: isMobile ? "63px" : 0,
            }}
          />
        </div>
        <div style={{ textAlign: "-webkit-center", marginBottom: "200px" }}>
          <p className="definition-text">
            <strong style={{ color: "#0b24fb" }}>Deffinition;</strong> a
            practice or exercise to test or improve one's fitness for athletic
            competition, ability, or performance to exhaust (something, such as
            a mine) by working to devise, arrange, or achieve by resolving
            difficulties. Merriam-Webster.com Dictionary.
            <br />
            <br />
            <i className="definitionBy-text">-weekend team</i>
          </p>
        </div>
      </Col>
      <style jsx>{`
        .definition-text {
          width: ${isMobile ? "311px" : "510px"};
          font-size: ${isMobile ? "16px" : "21px"};
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.52;
          letter-spacing: ${isMobile ? "-0.57px" : "-0.75px"};
          text-align: right;
          color: #000000;
        }
        .definitionBy-text {
          font-size: 16px;
          font-weight: 600;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: right;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}
