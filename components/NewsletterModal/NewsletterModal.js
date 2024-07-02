'use client';
import React from 'react';
import ReactModal from 'react-modal';
import Image from 'next-export-optimize-images/image';

import NewsletterForm from "../NewsletterForm/NewsletterForm";
import closeIcon from "../../images/icon_heart6.png";
import cadre from "../../images/cadre.png";

// ReactModal.setAppElement('#root');

export default function NewsletterModal(props) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    let className;
    if (props.className) {
        className = props.className;
    }

    return (
        <div class={className}>

            <button style={{'--image-url': `url(${cadre.src})`}} class="bg-[image:var(--image-url)] bg-center bg-contain bg-no-repeat text-xl w-[450px] h-[200px]" onClick={openModal}>Inscrivez-vous à la newsletter <br />et suivez le développement du jeu !</button>

            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        background: 'rgba(0, 0, 0, 0.33)'
                    }
                }}
                className="relative w-auto mx-auto max-w-3xl my-6"
                closeTimeoutMS={200}
            >
                <button onClick={closeModal} class="absolute right-0 top-0 mt-4 mr-4">
                    <Image src={closeIcon} className="max-w-8" />
                </button>

                <NewsletterForm />

            </ReactModal>
        </div>
    );
}