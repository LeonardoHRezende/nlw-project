import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContetStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    }
}

export type FeedbackType = keyof typeof feedbackTypes;



export function WidgetForm() {
    const [feedbackType, setFedbackType] = useState<FeedbackType | null>(null)

    function handleRestarFeedback() {
        setFedbackType(null);
    }

    return (
        <>
            <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
                {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFedbackType} />
                ) : (

                    <FeedbackContentStep feedbackType={feedbackType} 
                    onFeedbackRestartRequested = {handleRestarFeedback}
                    />
                )
                }
                <footer className="text-xs text-neutral-400">
                    Feito pelo <a className="underline underline-offset-2" href="https://github.com/LeonardoHRezende" target="_blank" >Leozin</a>
                </footer>

            </div>
        </>
    );
}
