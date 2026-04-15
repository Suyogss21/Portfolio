import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Intern</h4>
                <h5>Webito Infotech</h5>
              </div>
              <h3>Jan 25 - May 25</h3>
            </div>
            <p>
              Assisted in data preprocessing tasks, handling missing values, encoding categorical variables.
              Performed EDA on raw business data to identify trends, patterns, and anomalies.
              Improved model input quality for predictive analytics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>Pimpri Chinchwad University, Pune</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              CGPA: 7.61
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc-IT</h4>
                <h5>Pillai HOC College of Arts, Science and Commerce</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              CGPA: 9.18 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
