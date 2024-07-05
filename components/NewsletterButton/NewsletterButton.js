'use client';
import React from 'react';
import { useRouter  } from 'next/navigation'
import buttonImg from "../../images/button-white.png";

export default function NewsletterButton(props) {
    const router = useRouter();

    let className = "flex"
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>

            <button style={{'--image-url': `url(${buttonImg.src})`}} 
                className="md:text-xl w-[450px] h-[200px] md:w-[450px] md:h-[200px] hover:scale-105 scale-100 transition duration-300 hover:underline bg-[image:var(--image-url)] bg-center bg-contain bg-no-repeat " 
                onClick={() => router.push('/newsletter')}
            >
                <span className="relative" style={{top: "-5px"}}><b>Cliquez ici</b> <br/> pour vous inscrire à la newsletter <br/> et ne rien rater du  <br/> développement du jeu !</span>
            </button>

        </div>
    );
}