import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { createContext, Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import ConsentBanner from '../components/ConsentBanner';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

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
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined
            }} 
        >
            <ConsentContext.Provider value={{consent:consent,updateConsent:setConsent}}>
                {!consent ? <ConsentBanner/> : undefined}
                <Component {...pageProps} />
            </ConsentContext.Provider>
        </GoogleReCaptchaProvider>
    );
};

export default App;
