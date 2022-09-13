/* eslint-disable max-len */
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const Disclaimer = () => {
    return (
        <Layout 
            title="Accessibility Statement | ThoughtSpring Creative" 
            description={`New England's leading web design and development company. 
We build websites, applications, and custom tools for business automations and analytics.
ThoughSpring Creative LLC. is a veteran-owned software development company located in Portland, ME, 
and proudly serves businesses of any size across MA, CT, NH, VT, RI and ME.`}
        >
            <section style={{
                display:"flex", justifyContent:"center", width: "100%"
            }}>
                <div style={{
                    display:"flex", flexDirection: "column", maxWidth: "90%", paddingBlock:"5rem", lineHeight: "1.5rem", wordBreak: "break-word"
                }}>
                    <h1>ThoughtSpring Creative, LLC. Accessibility Statement</h1>
                    <p><em>Last Updated: September 12th, 2022.</em></p>
                    <h2>General</h2>
                    <p>
                        At ThoughtSpring Creative, LLC., we strive to ensure 
                        our services are accessible to all people. In order to 
                        achieve this, we have invested important resources 
                        into our site so that it is available to people with disabilities. 
                        We truly believe that website accessibility efforts are vital in 
                        ensuring that all users deserve the right to independence, equality, and ease of use.
                    </p>
                    <h2>Accessibility on https://thoughtspringcreative.com/</h2>
                    <p>
                        Using <Link href="https://checker.org">accessibility checker.org's</Link> audit tool, 
                        https://thoughtspringcreative.com has been scanned for compliance according 
                        to the Web Content Accessibility Guidelines (WCAG 2.1). 
                        Since performing the audit, ThoughtSpring Creative, LLC. 
                        continues to raise its accessibility standards, with a goal of exceeding those required by the <Link href="https://www.ada.gov/">ADA</Link>.
                    </p>
                    <h2>Disclaimer</h2>
                    <p>
                        At ThoughtSpring Creative, LLC., we are dedicated to continually updating 
                        and improving the accessibility of the site and services. We believe 
                        it is our responsibility and mutual moral obligation to provide access to all users.
                    </p>
                    <p>
                        As we seek to continually adjust and improve accessibility issues on 
                        this site, we also commit to regularly scanning https://thoughtspringcreative.com 
                        with <Link href="https://checker.org">accessibility checker's</Link> scanner.
                    </p>
                    <p>
                        Our goal is to identify and rectify every accessibility barrier on our site. 
                        Although we strive to ensure all pages and content on https://thoughtspringcreative.com are 
                        fully accessible, it is possible some website content has not yet been fully adjusted to 
                        adhere to the most strict accessibility standards. For this reason, we are here for you.
                    </p>
                    <p>
                        If you have any issues with accessing content or using https://thoughtspringcreative.com, 
                        or should you need assistance with any part of the website, please don't hesitate to let us know. 
                        You are welcome to contact us during normal business hours, and we will be more than happy to help. 
                        Please see contact details below.
                    </p>
                    <h2>Contact Us</h2>
                    <p>Have questions, need assistance, or want to report an accessibility issue? Please contact ThoughtSpring Creative, LLC. Customer Support:</p>
                    <p>Email: <Link href="mailto:info@thoughtspringcreative.com">info@thoughtspringcreative.com</Link></p>
                    <p>Phone: <Link href="tel:9789992047">+1 (978) 999 - 2047</Link></p>
                </div>
            </section>
        </Layout>
    );
};

export default Disclaimer;