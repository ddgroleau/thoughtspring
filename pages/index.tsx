import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <Layout>
            <div style={{display:"flex", justifyContent:"center"}}>
                <p style={{marginTop: "3rem"}}>Coming Soon</p>
            </div>
        </Layout>
    );
};

export default Home;
