import {useState} from "react";
import "../../styles/modal.css";

interface BuildBrandPopUpProps {
    content: string;
    onClose: () => void;
}

export default function BuildBrandPopUp({content, onClose}: BuildBrandPopUpProps) {

    return (


        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="close-btn-div">
                    <button className="close-btn" onClick={onClose}>
                        x
                    </button>
                </div>

                <div className="modal-content">
                    {content}
                </div>


            </div>

        </div>
    );

}

