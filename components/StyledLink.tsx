import React from 'react';
import Link from 'next/link';
import styles from '../styles/StyledLink.module.scss';

type StyledLinkProps = {
    innerText:string;
    backgroundColor:string;
    color:string;
    fontSize:string;
    href:string
}

const StyledLink = ({innerText,backgroundColor,color,fontSize,href}:StyledLinkProps) => {
    return (
        <div className={styles.styledLink} style={{backgroundColor:backgroundColor,color:color,fontSize:fontSize}}>
            <Link href={href}>{innerText}</Link>
        </div>
    );
};

export default StyledLink;