import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAskQuestion } from '@/store/askQuestion';

interface AskQuestionProps {
  isOpen: boolean;
  onClose: () => void;
}

const AskQuesion: React.FC<AskQuestionProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [question, setQuestion] = useState('');
  const modalRef = useRef(null);
  const { askQuestion } = useAskQuestion();

  const userId = localStorage.getItem('user_id')


  const handleQuestionClick = async () => {
    console.log("Clicked!")
    const payload = {
      email: email,
      name: username,
      phone_number: number, 
      question: question,
      user_id: userId,
    }
    console.log(payload);
    const {success, errorMessage, response} = await askQuestion(payload)
    if (success) {
      toast.success('Question successfully submitted!')
    } else {
      toast.error(`try again later, ${errorMessage}`)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleQuestion = () => {
    // Add your sign-up logic here
    console.log('Logging in with:', email, password);
    // You can make an API call or perform any other sign-up actions
    // ...

    // Close the modal after sign-up
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-end ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div ref={modalRef} className="bg-white p-8 w-[500px] h-full mt-[200px] z-3">
        <h1 className='text-center text-060F42'>Ask A Question</h1>
        <form>
          <label className="block mb-2 font-bold mt-[32px] ">Name:</label>
          <input
            type="name"
            value={email}
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block mb-2 font-bold">Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2 font-bold">Phone Number:</label>
          <input
            type="text"
            value={number}
            placeholder="Enter your number"
            onChange={(e) => setNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2 font-bold">Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Question placeholder"
            className="w-full p-2 border border-gray-300 rounded mb-4 h-[140px] rounded-lg"
          />
          <p className='text-gray-400 mt-[30px]'>By pressing Send Request, you agree that HouseMarket’s and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply.
             You also agree to our Terms of Use. By creating an account you agree to HouseMarket's <span className='text-blue-800 font-bold'>Terms of Use</span> and <span className='text-blue-800 font-bold'>Privacy Policy</span></p>
        </form>
        <div className='mt-[40px] flex gap-3'>
          <button className='bg-white p-3 w-[170px] rounded-md text-[#060F42] font-semibold border border-[#060F42]'>CANCEL</button>
          <button onClick={handleQuestionClick} className='bg-[#060F42]  p-3 w-[370px] rounded-md text-white font-semibold'>SEND QUESTION</button>
        </div>
      </div>
    </div>
  );
};

export default AskQuesion;
