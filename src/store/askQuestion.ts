import { askQuestion } from '@/api/questions';
import axios from 'axios';
import { toast } from 'react-toastify';
import create from 'zustand';


interface QuestionState {
    askQuestion: (data:any) => Promise<{
        success:boolean;
        errorMessage:string|null;
        response?:any;
    }>;
  }
  

export const useAskQuestion = create<QuestionState>(() => ({
    askQuestion:async (data:any) => {
        try {
            const quesion = await askQuestion(data) 
            return {
                success:true,
                errorMessage:null,
                response:quesion,
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            console.error('Ask question failed:', errorMessage);
            return {
                success:false,
                errorMessage
            }
        }
    }
 }
));
