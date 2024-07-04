'use client';

import "./NewsletterForm.css";

import React from 'react';
import Script from "next/script";
import Link from "next/link";
import { useRouter } from 'next/navigation'

import Image from "next-export-optimize-images/image";
import newsletter from "../../images/newsletter.png";
import subscribed from "../../images/subscribed.png";
import background from "../../images/background.jpg";
import closeIcon from "../../images/close.png";


export default function NewsletterForm() {

    const router = useRouter();

    const useMutationObserver = (ref) => {
        React.useEffect(() => {
            if (ref.current) {
                const observer = new MutationObserver(styleChangedCallback);
                observer.observe(ref.current, {
                    attributes: true,
                    attributeFilter: ['style'],
                });
                return () => observer.disconnect();
            }
        });
    };

    const successBlockRef = React.useRef();
    const formBlockRef = React.useRef();

    useMutationObserver(successBlockRef);

    const styleChangedCallback = (mutations) => {
        console.log(formBlockRef.current);
        var newSuccessDisplay = mutations[0].target.style.display;
        if (newSuccessDisplay === "none") {
            formBlockRef.current.style.display = "none";
            successBlockRef.current.style.display = "flex";
        }
    }

    return (
        <>
            <button onClick={() => router.push('/')} className="absolute right-0 top-0 mt-4 mr-4 hover:scale-125 scale-100 transition duration-300">
                <Image
                    src={closeIcon}
                    alt="Une icône de coeur avec une croix dedans"
                    className="max-w-12" />
            </button>

            <div id="mlb2-16090758"
                className="flex flex-row justify-center font-inter ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16090758 rounded-3xl p-8 bg-[image:var(--image-url)]"
                style={{ '--image-url': `url(${background.src})` }}
            >
                <div className="sm:max-w-[800px]">
                    <div ref={formBlockRef} className="row-form ml-block-form">
                        <div className="flex flex-col items-center">
                            <Image
                                src={newsletter}
                                alt="Une illustration d'une newsletter dans une enveloppe avec des fleurs et des coeurs"
                                className="max-w-[300px] sm:max-w-[500px]" />
                            <p className="text-center text-xl mt-4 font-bold text-linkColor max-w-[700px]">Inscrivez-vous pour obtenir les dernières informations sur le développement du jeu !</p>
                        </div>

                        <form
                            action="https://assets.mailerlite.com/jsonp/1009272/forms/125740469796734479/subscribe" data-code=""
                            method="post" target="_blank"
                        >

                            <div className="ml-form-formContent">

                                <div className="flex flex-col items-center mt-6">
                                    <div className="text-center sm:max-w-[400px]">Consentez-vous à vous inscrire à notre newsletter et à recevoir de temps en temps de nos nouvelles ?</div>
                                    <label className="flex flex-row justify-center items-center cursor-pointer mt-2 ml-validate-required">
                                        <input className="mr-2 customCB" type="checkbox" name="gdpr[]" value="Email" required />
                                        <div className="label-description font-bold">Oui je le veux</div>
                                    </label>
                                </div>

                                <div className="grid sm:grid-rows-2 gap-4 my-4">
                                    <div className="ml-field-email ml-validate-email ml-validate-required">
                                        <input className="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-mainColor focus:border-mainColor focus:outline-none focus:ring-0"
                                            aria-label="email"
                                            aria-required="true"
                                            type="email"
                                            data-inputmask=""
                                            name="fields[email]"
                                            placeholder="E-mail"
                                            autoComplete="email"
                                            required />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                                        <div>
                                            <input
                                                className="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-mainColor focus:border-mainColor focus:outline-none focus:ring-0"
                                                aria-label="name" type="text" data-inputmask="" name="fields[name]" placeholder="Prénom" autoComplete="given-name" />
                                        </div>
                                        <div>
                                            <input
                                                className="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-mainColor focus:border-mainColor focus:outline-none focus:ring-0"
                                                aria-label="last_name" type="text" data-inputmask="" name="fields[last_name]" placeholder="Nom" autoComplete="family-name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 text-sm">
                                    En cliquant ci-dessous pour soumettre ce formulaire, vous reconnaissez que les informations que vous fournissez seront traitées conformément à notre <Link href="https://rsvpgame.com/privacy" target="_blank" className="hover:underline">politique de confidentialité</Link>. Vous pouvez vous désinscrire à n'importe quel moment par le lien situé en bas de la newsletter.
                                </div>

                                
                                <div className="mt-6 ml-form-recaptcha ml-validate-required">
                                    <div className="g-recaptcha flex flex-row justify-content" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
                                </div>


                                <input type="hidden" name="ml-submit" value="1" />
                                <div className="mt-6 flex flex-row justify-center">
                                    <button className="p-3 rounded-2xl border-2 border-linkColor bg-white hover:bg-linkColor text-xl hover:text-white"
                                        type="submit">
                                        S'inscrire
                                    </button>
                                    <button disabled="disabled" style={{ display: "none" }} type="button" className="loading">
                                        <div className="ml-form-embedSubmitLoad"></div>
                                        <span className="sr-only">Loading...</span>
                                    </button>
                                </div>
                                <input type="hidden" name="anticsrf" value="true" />

                            </div>
                        </form>


                    </div>

                    <div ref={successBlockRef} className="ml-block-success flex flex-col items-center" style={{ display: "none" }}>
                        <Image
                            src={subscribed}
                            alt="Une illutration d'un carton RSVP avec la réponse 'oui' cochée"
                            className="sm:max-w-[500px]"
                        />
                        <p className="text-center">Un e-mail de confirmation vient d'être envoyé sur l'adresse que vous avez indiquée.</p>
                        <button className="mt-6 p-3 rounded-2xl border-2 border-linkColor bg-white hover:bg-linkColor text-xl hover:text-white"
                            onClick={() => router.push('/')}
                            type="button">
                            Retour
                        </button>
                    </div>
                </div>
            </div>
            <Script src="https://www.google.com/recaptcha/api.js" />
            <Script src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127" />
            <Script>
                {
                    fetch("https://assets.mailerlite.com/jsonp/1009272/forms/125740469796734479/takel")
                }
            </Script>
        </>
    );
}