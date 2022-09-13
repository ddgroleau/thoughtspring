import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { createContext, Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import ConsentBanner from '../components/ConsentBanner';

type ConsentContextParams = {
    consent:boolean,
    updateConsent: Dispatch<SetStateAction<boolean>>
}

const defaultValue:ConsentContextParams = { consent:false, updateConsent:()=>{} };

export const ConsentContext = createContext(defaultValue);

const App = ({ Component, pageProps }: AppProps) => {
    const [consent, setConsent] = useState<boolean>(false);

    useEffect(()=> {
        const cacheConsent = localStorage.getItem("consent");
        if(!cacheConsent) return;
        return setConsent(JSON.parse(cacheConsent));
    },[consent]);

    return (
        <ConsentContext.Provider value={{consent:consent,updateConsent:setConsent}}>
            {!consent ? <ConsentBanner/> : undefined}
            <Component {...pageProps} />
        </ConsentContext.Provider>
    );
};

export default App;
