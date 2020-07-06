import Slider from "react-slick";

export default function Testimonial(props) {
  const { isMobile } = props;

  const settings = {
    className: "slider variable-width",
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const wrapperWidth = {
    width: "247px",
  };
  const wrapperStyle = {
    height: "140px",
    boxShadow: "0 -10px 20px 0 rgba(249, 131, 171, 0.2)",
    backgroundColor: "#ffffff",
    margin: "10px",
    padding: "18px",
  };

  return (
    <div
      style={{
        width: isMobile ? "100%" : "30%",
        background: "transparent",
        marginTop: "-150px",
        paddingLeft: isMobile ? "32px" : 0,
      }}
    >
      <p className="testi-text">Testimonial</p>
      <Slider {...settings}>
        <div style={wrapperWidth}>
          <div style={wrapperStyle}>
            <div className="title-text">Blu Kicks</div>
            <div className="content-text">
              Places where you can leverage tools and software to free up time
              to focus on growing the business.
            </div>
          </div>
        </div>
        <div style={wrapperWidth}>
          <div style={wrapperStyle}>
            <div className="title-text">Angelus</div>
            <div className="content-text">
              All those apps took me months to get running. Now the site
              practically runs itself!
            </div>
          </div>
        </div>
        <div style={wrapperWidth}>
          <div style={wrapperStyle}>
            <div className="title-text">SoYoung</div>
            <div className="content-text">
              Unless you have a truly unique product, it will be very hard to
              differentiate and gain brand traction
            </div>
          </div>
        </div>
      </Slider>
      <style jsx>{`
        .column {
          width: 247px;
          height: 140px;
          background: #fff;
          color: #3498db;
          font-size: 36px;
          line-height: 100px;
          margin: 10px;
          padding: 2%;
          position: relative;
          text-align: center;
        }
        .testi-text {
          text-align-last: ${isMobile ? "left" : "center"};
          height: 38px;
          text-shadow: 0 20px 30px rgba(249, 131, 171, 0.7);
          font-size: 32px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
        .title-text {
          font-size: 32px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #000000;
          text-align: left;
          margin-bottom: 10px;
        }
        .content-text {
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.43px;
          color: #000000;
          text-align: left;
        }
      `}</style>
    </div>
  );
}
