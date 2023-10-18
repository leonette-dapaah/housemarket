// global imports
import React from "react";

interface SignUpProps {
    visible: boolean;
    onClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ visible, onClose }) => {
    const handleOnClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if ((e.target as HTMLElement).id === "signup-overlay") onClose();
    };

    if (!visible) return null;

    return (
        <section
            onClick={handleOnClose}
            id="signup-overlay"
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20"
        ></section>
    );
}
 
export default SignUp;