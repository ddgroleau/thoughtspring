import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
    title:string;
    description:string;
    children:any
}

const Layout = ({ title,description,children }:LayoutProps) => {
    return (
        <>
            <Navbar title={title} description={description}/>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;