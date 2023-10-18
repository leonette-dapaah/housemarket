// global imports
import React from "react";
import { RiCloseLine } from "react-icons/ri";

interface RequestTourProps {
    visible: boolean;
    onClose: () => void;
}

const RequestTour: React.FC<RequestTourProps> = ({ visible, onClose }) => {
    const handleOnClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if ((e.target as HTMLElement).id === "tour-overlay") onClose();
    };

    if (!visible) return null;

    return (
        <section
            onClick={handleOnClose}
            id="tour-overlay"
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20"
        >
            <div className="bg-white rounded-md border border-[#000000] border-opacity-20 px-5 py-4">
                <div className="modal-title flex justify-between pb-6">
                    <h1>Request A Tour</h1>
                    <button onClick={onClose}>
                        <RiCloseLine />
                    </button>
                </div>
                <form className="modal-body grid gap-y-10"></form>
            </div>
        </section>
    );
}
 
export default RequestTour;