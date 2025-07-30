"use client";

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="css/nicepage.css" media="screen" />
      <link rel="stylesheet" href="css/nicepage-site.css" media="screen" />
      <link rel="stylesheet" href="css/Page-5.css" media="screen" />
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Page 5" />
      <meta property="og:type" content="website" />

      <section
        className="u-clearfix u-section-1"
        id="sec-9a83"
        data-image-width={1980}
        data-image-height={1214}
        style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
      >
        {/* Left Side - Text */}
        <div style={{ width: "50%", padding: "20px", boxSizing: "border-box" }}>
          <h2 className="myGray">About Company</h2>
          <p className="myGray">
            Scento d’Italia is a culturally rooted fragrance brand positioned
            for high-volume success in the MENA region and beyond. With a launch
            collection of Eau de Parfum priced under $7.00, the brand balances
            artisanal quality with commercial scalability. Inspired by Italian
            and French perfume traditions, Scento d’Italia blends trend-driven
            impressions, niche compositions, and exclusive SKUs to appeal to a
            broad demographic aged 15 to 75+. As a modern brand with humble
            character and global aspirations, it stands ready to scent the
            world—one bottle at a time.
          </p>
        </div>

        {/* Right Side - Image */}
        <div
          style={{
            width: "50%",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <img
            src="https://res.cloudinary.com/dciku5di2/image/upload/v1753876862/il_570xN.424794574_k1u5_hmxyzv.webp" // <-- replace with your image path
            alt="Company"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </section>
    </>
  );
}
