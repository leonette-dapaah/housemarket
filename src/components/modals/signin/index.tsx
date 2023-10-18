// global imports
import React from "react";

interface SignInProps {
    visible: boolean;
    onClose: () => void;
}

const SignIn: React.FC<SignInProps> = ({ visible, onClose }) => {
    const handleOnClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if ((e.target as HTMLElement).id === "signin-overlay") onClose();
    };

    if (!visible) return null;

    return (
        <section
            onClick={handleOnClose}
            id="signin-overlay"
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20"
        ></section>
    );
}
 
export default SignIn;