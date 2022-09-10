import React from 'react';
import Link from 'next/link';

type StyledLinkProps = {
    innerText:string;
    backgroundColor:string;
    color:string;
    fontSize:string;
    href:string
}

const StyledLink = ({innerText,backgroundColor,color,fontSize,href}:StyledLinkProps) => {
    return (
        <div className="styledLink" style={{backgroundColor:backgroundColor,color:color,fontSize:fontSize}}>
            <Link href={href}>{innerText}</Link>
        </div>
    );
};

export default StyledLink;