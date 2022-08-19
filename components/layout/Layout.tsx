import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }:any) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}