import { useState } from "react";
import TransitionsModal from "../Modal";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";

const Card = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const {
    companyName,
    logoUrl,
    jobDetailsFromCompany,
    jobRole,
    location,
    maxJdSalary,
    minExp,
    maxExp,
    minJdSalary,
    salaryCurrencyCode,
  } = job;
  console.log(jobDetailsFromCompany);
  return (
    <div
      style={{
        borderRadius: "20px",
        boxShadow: "1px 2px 5px 1px rgba(0,0,0,0.2)",
        padding: "16px",
        width: "360px",
        height: "540px",
        border: "none",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "16px",
          }}
        >
          <img
            src={logoUrl}
            alt={companyName}
            style={{ marginRight: "10px", width: "50px", height: "50px" }}
          />
          <div>
            <div>
              <h3
                style={{
                  fontWeight: "300",
                  fontSize: "16px",
                  color: "grey",
                  marginBottom: "3px",
                }}
              >
                {companyName.charAt(0).toUpperCase() + companyName.slice(1)}
              </h3>
            </div>

            <div>
              <h3
                style={{
                  fontWeight: "300",
                  marginBottom: "3px",
                  fontSize: "20px",
                }}
              >
                {jobRole.charAt(0).toUpperCase() + jobRole.slice(1)}
              </h3>
            </div>
            <div>
              <h3 style={{ fontWeight: "400", fontSize: "15px" }}>
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </h3>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "3px" }}>
          <p>
            <span style={{ fontWeight: "500", color: "#707070" }}>
              Estimated Salary:
            </span>{" "}
            {minJdSalary !== null ? (
              <span style={{ fontWeight: "400", color: "#707070" }}>
                {minJdSalary} - {maxJdSalary} {salaryCurrencyCode} ✅
              </span>
            ) : (
              <span style={{ fontWeight: "400", color: "#707070" }}>
                Up to {maxJdSalary} {salaryCurrencyCode} ✅
              </span>
            )}
          </p>
        </div>

        {/* Company description */}
        <div
          style={{
            // border: "1px solid",
            maxHeight: "160px",
            overflow: "hidden",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <h4 style={{ fontWeight: 400 }}>About Company:</h4>
          <p style={{ fontWeight: 600 }}>About us</p>
          <p style={{ fontWeight: 300 }}>
            {jobDetailsFromCompany.substring(0, 300)}
            {jobDetailsFromCompany.length > 300 && (
              <>
                <span style={{ backdropFilter: "blur(5px)" }}>
                  {jobDetailsFromCompany.substring(300)}
                </span>
              </>
            )}
          </p>
        </div>

        <div
          style={{
            // border: "1px solid",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: "-10px",
            left: "120px",
            zIndex: "5",
            top: "310px",
            width: "100%",
            left: "0",
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.7), rgb(255, 255, 255))",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "100px",
              height: "20px",
              marginTop: "5px",
              background: "none",
              border: "none",
              color: "#4943DA",
              fontSize: "13px",
              cursor: "pointer",
            }}
            onClick={handleModalOpen}
          >
            Show more..
          </button>
        </div>

        <TransitionsModal jobDetailsFromCompany={jobDetailsFromCompany} isOpen={isModalOpen} onClose={handleModalClose}>
          <h4>About Company</h4>
          <p>{jobDetailsFromCompany}</p>
          {console.log(jobDetailsFromCompany)}
        </TransitionsModal>

        <div style={{ marginBottom: "10px" }}>
          <p style={{ fontWeight: 400, fontSize: "14px", color: "grey" }}>
            Minimum Experience
          </p>
          <span style={{ fontSize: "14px" }}>
            {minExp !== null ? `${minExp} - ${maxExp} years` : "Not Specified"}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{
              backgroundColor: "#55EFC4",
              color: "black",
              height: "45px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              padding: "8px 16px",
              marginBottom: "8px",
              cursor: "pointer",
            }}
          >
            ⚡ Easy Apply
          </button>
          <button
            style={{
              backgroundColor: "#6755ed",
              color: "white",
              height: "45px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "10px",
              border: "none",
              fontWeight: "300",
              fontSize: "13px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", width: "70px", height: "30px" }}>
              <span style={{ marginRight: "5px", width: "35px" }}>
                <img
                  src={img1}
                  alt="img1"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    filter: "blur(1.5px)",
                  }}
                />
              </span>
              <span style={{ width: "35px" }}>
                <img
                  src={img2}
                  alt="img2"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    filter: "blur(1.5px)",
                  }}
                />
              </span>
            </div>
            <p style={{ marginLeft: "-35px" }}>Unlock Referral Asks</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;