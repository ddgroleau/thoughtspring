import type { NextPage } from 'next';
import BrandHero from '../components/BrandHero';
import ChooseUs from '../components/ChooseUs';
import Layout from '../components/Layout';
import PortfolioSnapshot from '../components/PortfolioSnapshot';
import ScrollAnimation from '../components/ScrollAnimation';
import ServicesSnapshot from '../components/ServicesSnapshot';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <Layout 
            title="ThoughtSpring Creative | Web Design & Development" 
            description={`New England's leading web design and development company. 
        We build websites, applications, and custom tools for business automations and analytics.
        ThoughSpring Creative LLC. is a veteran-owned software development company located in Portland, ME, 
        and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.`}
        >
            <section className={styles.pageContainer}>
                <BrandHero />
                <ScrollAnimation animationClass={styles.fadeIn} hiddenClass={styles.hidden}>
                    <ServicesSnapshot />
                </ScrollAnimation>
                <ScrollAnimation animationClass={styles.fadeIn} hiddenClass={styles.hidden}>
                    <PortfolioSnapshot />
                </ScrollAnimation>
                <ScrollAnimation animationClass={styles.slideUp} hiddenClass={styles.hidden}>
                    <ChooseUs />
                </ScrollAnimation>
            </section>
        </Layout>
    );
};

export default Home;
