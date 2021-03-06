import { Col } from "antd";
import Testimonial from "./testimonial";
import HelpAndTips from "./help-and-tips";

export default function ContentSection(props) {
  const { isMobile, testimonials, helpTips } = props;
  return (
    <>
      <Col
        span={24}
        style={{
          backgroundColor: "#000000",
          textAlign: "-webkit-center",
        }}
      >
        <Testimonial isMobile={isMobile} testimonials={testimonials} />
        <div style={{ textAlign: "-webkit-center", padding: "0px 32px" }}>
          <p className="section-title-text">POV</p>
          <p className="section-desc-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div style={{ textAlign: "-webkit-center", padding: "0px 32px" }}>
          <p className="section-title-text">Resource</p>
          <p className="section-desc-text">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
        </div>
        <HelpAndTips isMobile={isMobile} helpTips={helpTips} />
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
