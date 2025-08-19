const year = 2025; 

const Footer = () => (
<footer
    style={{
        left: 0,
        bottom: 0,
        width: "100%",
        zIndex: 50,
        padding: "0.25rem 0",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "none", // remove background color
    }}
>
    <span style={{ color: "#222", fontSize: "0.75rem" }}>
        © {year} Phyo Sandar Win. All rights reserved.
    </span>
</footer>
);

export default Footer;