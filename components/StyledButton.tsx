import React, { MouseEventHandler } from 'react';

type StyledButtonProps = {
    innerText:string;
    backgroundColor:string;
    color:string;
    fontSize:string;
    onClick:MouseEventHandler<HTMLButtonElement>
}

const StyledButton = ({innerText,backgroundColor,color,fontSize,onClick}:StyledButtonProps) => {
    return (
        <button 
            className="styledButton" 
            onClick={onClick} 
            style={{backgroundColor:backgroundColor,color:color,fontSize:fontSize}}
        >
            {innerText}
        </button>
    );
};

export default StyledButton;