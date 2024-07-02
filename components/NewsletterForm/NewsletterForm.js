import Script from "next/script";
import Link from "next/link";

import Image from "next-export-optimize-images/image";
import coeurs from "../../images/coeurs.png";
import background from "../../images/background.jpg";


export default function NewsletterForm() {
    return (
        <>
            <Script src="/scripts/mailerlite.js" />
            <div id="mlb2-16090758" class="font-inter ml-form-embedContainer ml-subscribe-form ml-subscribe-form-16090758 rounded-3xl p-8 bg-[image:var(--image-url)]" style={{'--image-url': `url(${background.src})`}} >
                <div>
                    <div>
                        <div>
                            <div class="flex flex-col items-center">
                                <h1 class="font-coquette pt-8 text-center text-5xl text-linkColor">Inscription à la newsletter</h1>
                                <p class="text-center text-xl mt-4">Inscrivez-vous pour obtenir les dernières informations sur le développement du jeu !</p>
                                <Image src={coeurs} className="max-w-80" />
                            </div>
                            
                            <form action="https://assets.mailerlite.com/jsonp/1009272/forms/125740469796734479/subscribe" data-code="" method="post" target="_blank">
                            
                                <label class="flex flex-row justify-center">
                                    <input class="mr-2" type="checkbox" name="gdpr[]" value="Email" xp-if="gdpr.title" />
                                    <div class="font-bold">Je consens à l'inscription à la newsletter</div>
                                </label>

                                <div class="mt-2 mx-20 text-center" xp-if="gdpr.description">Nous vous enverrons occasionnellement des e-mails pour les mises à jour importantes concernant le jeu.</div>

                                <div class="grid grid-rows-2 gap-2 my-4">
                                    <div>
                                        <div class="ml-field-email ml-validate-email ml-validate-required">
                                            <input class="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-secondaryColor" aria-label="email" aria-required="true" type="email" data-inputmask="" name="fields[email]" placeholder="E-mail" autocomplete="email" />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-8">
                                        <div>
                                            <input class="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-secondaryColor" aria-label="name" type="text" data-inputmask="" name="fields[name]" placeholder="Prénom" autocomplete="given-name" />
                                        </div>
                                        <div>
                                            <input class="w-full p-2 border-2 rounded-2xl border-borderColor hover:border-secondaryColor" aria-label="last_name" type="text" data-inputmask="" name="fields[last_name]" placeholder="Nom" autocomplete="family-name" />
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
                                    <button type="submit" class="p-3 rounded-2xl bg-linkColor hover:bg-secondaryColor text-xl text-white hover:text-black">
                                        S'inscrire
                                    </button>
                                    <button disabled="disabled" style={{ display: "none" }} type="button" class="loading">
                                        <div class="ml-form-embedSubmitLoad"></div>
                                        <span class="sr-only">Loading...</span>
                                    </button>
                                </div>
                                <input type="hidden" name="anticsrf" value="true" />
                            </form>


                        </div>

                        <div class="ml-form-successBody row-success" style={{ display: "none" }}>
                            <div class="ml-form-successContent">
                                <h4>Thank you!</h4>
                                <p>You have successfully joined our subscriber list.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}