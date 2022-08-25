import type { NextPage } from 'next';
import BrandHero from '../components/BrandHero';
import Layout from '../components/Layout';
import PortfolioSnapshot from '../components/PortfolioSnapshot';
import ProcessOverview from '../components/ProcessOverview';
import ServicesSnapshot from '../components/ServicesSnapshot';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <Layout 
            title="ThoughtSpring Creative | Web Design & Development" 
            description={`New England's leading web design and development company. 
        We build websites, applications, and custom tools for business automations and analytics.
        Our developers are also available to join your team and bring your project to the finish-line!
        ThoughSpring Creative LLC. is a veteran-owned software development company located in Portland, ME, 
        and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.`}
        >
            <section className={styles.pageContainer}>
                <BrandHero />
                <ServicesSnapshot />
                <PortfolioSnapshot />
                {/* <ProcessOverview /> */}
            </section>
        </Layout>
    );
};

export default Home;
