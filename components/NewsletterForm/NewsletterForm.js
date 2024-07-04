import React from 'react';
import Script from "next/script";
import Link from "next/link";

import Image from "next-export-optimize-images/image";
import newsletter from "../../images/newsletter.png";
import subscribed from "../../images/subscribed.png";
import background from "../../images/background.jpg";


export default function NewsletterForm({ onCloseModal }) {

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
        var newDisplay = mutations[0].target.style.display;
        if (newDisplay === "none") {
            formBlockRef.current.style.display = "none";
            mutations[0].target.style.display = "flex";
        }
    }

    return (
        <>
            <div id="mlb2-16090758" class="font-inter ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16090758 rounded-3xl p-8 bg-[image:var(--image-url)]" style={{ '--image-url': `url(${background.src})` }} >
                <div>
                    <div>
                        <div ref={formBlockRef} class="row-form ml-block-form">
                            <div class="flex flex-col items-center">
                                <Image src={newsletter} className="max-w-80" />
                                <p class="text-center text-xl mt-4">Inscrivez-vous pour obtenir les dernières informations sur le développement du jeu !</p>
                            </div>

                            <form
                                action="https://assets.mailerlite.com/jsonp/1009272/forms/125740469796734479/subscribe" data-code=""
                                method="post" target="_blank">

                                <div class="ml-form-formContent">

                                    <div class="flex flex-col items-center mt-6">
                                        <div class="text-center">Consentez-vous à vous inscrire à notre newsletter <br /> et à recevoir de temps en temps de nos nouvelles ?</div>
                                        <label class="flex flex-row justify-center items-center cursor-pointer">
                                            <input class="mr-2 customCB" type="checkbox" name="gdpr[]" value="Email" required />
                                            <div class="font-bold">Oui je le veux</div>
                                        </label>
                                    </div>

                                    <div class="grid grid-rows-2 gap-2 my-4">
                                        <div>
                                            <div class="ml-field-email ml-validate-email ml-validate-required">
                                                <input class="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-mainColor focus:border-mainColor focus:outline-none focus:ring-0"
                                                    aria-label="email"
                                                    aria-required="true"
                                                    type="email"
                                                    data-inputmask=""
                                                    name="fields[email]"
                                                    placeholder="E-mail"
                                                    autocomplete="email"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-8">
                                            <div>
                                                <input class="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-mainColor focus:border-mainColor focus:outline-none focus:ring-0" aria-label="name" type="text" data-inputmask="" name="fields[name]" placeholder="Prénom" autocomplete="given-name" />
                                            </div>
                                            <div>
                                                <input class="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-mainColor focus:border-mainColor focus:outline-none focus:ring-0" aria-label="last_name" type="text" data-inputmask="" name="fields[last_name]" placeholder="Nom" autocomplete="family-name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-6">
                                        <p>
                                            En cliquant ci-dessous pour soumettre ce formulaire, vous reconnaissez que les informations que vous fournissez seront traitées conformément à notre <Link href="https://rsvpgame.com/privacy" target="_blank" className="hover:underline">politique de confidentialité</Link>. Vous pouvez vous désinscrire à n'importe quel moment par le lien situé en bas de la newsletter.
                                        </p>
                                    </div>

                                    <input type="hidden" name="ml-submit" value="1" />
                                    <div class="mt-6 flex justify-center">
                                        <button class="p-3 rounded-2xl border-2 border-linkColor bg-white hover:bg-linkColor text-xl hover:text-white"
                                            type="submit">
                                            S'inscrire
                                        </button>
                                        <button disabled="disabled" style={{ display: "none" }} type="button" class="loading">
                                            <div class="ml-form-embedSubmitLoad"></div>
                                            <span class="sr-only">Loading...</span>
                                        </button>
                                    </div>
                                    <input type="hidden" name="anticsrf" value="true" />

                                </div>
                            </form>


                        </div>

                        <div ref={successBlockRef} class="ml-block-success flex flex-col items-center" style={{ display: "none" }}>
                            <Image src={subscribed} className="max-w-80" />
                            <p class="text-center">Nous vous déclarons inscrit-e à notre newsletter, <br /> pour le meilleur et pour le pire !</p>
                            <button class="mt-6 p-3 rounded-2xl border-2 border-linkColor bg-white hover:bg-linkColor text-xl hover:text-white"
                                onClick={onCloseModal}
                                type="button">
                                Fermer
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <Script src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127" />
            <Script>
                {
                    fetch("https://assets.mailerlite.com/jsonp/1009272/forms/125740469796734479/takel")
                }
            </Script>
        </>
    );
}