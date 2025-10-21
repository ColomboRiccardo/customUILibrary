import {useState} from "react";

export const CharacterCounter = () => {

    const [textToAnalyze, setTextToAnalyze] = useState("")
    const [countedCharacter, setCountedCharacters] = useState(0)
    const [countedWords, setCountedWords] = useState(0)
    const [countedSentences, setCountedSentences] = useState(0)
    const [excludeWhitespacesActive, setExcludeWhitespacesActive] = useState(false)
    const [characterLimitActive, setCharacterLimitActive] = useState(false)
    const [characterLimit, setCharacterLimit] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        countCharacters(e.target.value)
        countWords(e.target.value)
        countSentences(e.target.value)
        truncateTextToAnalyze(e.target.value)
    }

    const truncateTextToAnalyze = (textToAnalyze: string) => {
        if (characterLimitActive && (countedCharacter > characterLimit)) {
            setTextToAnalyze(textToAnalyze.slice(0, countedCharacter))
        } else {
            setTextToAnalyze(textToAnalyze)
        }
    }

    const countCharacters = (textToAnalyze: string) => {
        if (excludeWhitespacesActive) {
            setCountedCharacters(textToAnalyze.replaceAll(" ", "").length)
        } else {
            setCountedCharacters(textToAnalyze.length)
        }
    }

    const countWords = (textToAnalyze: string) => {
        setCountedWords(textToAnalyze.split(" ").length)
    }

    const countSentences = (textToAnalyze: string) => {
        setCountedSentences(textToAnalyze.split(".").length)
    }

    const handleWhitespacesCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExcludeWhitespacesActive(e.target.checked)
        if (e.target.checked) setCountedCharacters(textToAnalyze.replaceAll(" ", "").length)
        truncateTextToAnalyze(textToAnalyze)
    }

    const handleCharacterLimitCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterLimitActive(e.target.checked)
    }
    const handleCharacterLimitInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterLimit(e.target.valueAsNumber)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <main className={"w-10/12 flex items-center flex-col gap-4 m-auto"}>
            <h1 className={"text-3xl font-bold"}>Character Counter</h1>
            <h2 className={"text-xl font-medium"}>Analyze your text in real-time</h2>
            <p className={"mt-4"}>Count the characters, the words and the sentences in your text</p>
            <form className={"w-full"} onSubmit={handleFormSubmit}>
                <textarea placeholder={"Start typing your text here (or paste it)..."}
                          className={"w-full h-40 bg-white !text-black p-4 rounded-xl"}
                          onChange={handleChange} value={textToAnalyze}></textarea>
                <div className={"flex items-center gap-1.5 mt-3"}>
                    <input type={"checkbox"} id={"excludeWhitespacesCheckbox"}
                           onChange={handleWhitespacesCheckbox}/><label htmlFor={"excludeWhitespacesCheckbox"}>Exclude
                    whitespaces</label>
                    <input type={"checkbox"} id={"characterLimitCheckbox"} className={"ml-4"}
                           onChange={handleCharacterLimitCheckbox}/><label htmlFor={"characterLimitCheckbox"}>Limit
                    characters</label>
                    {characterLimitActive && <>
                        <input type={"number"} id={"characterLimit"}
                               className={"ml-4 bg-white !text-black px-2 py-0.5 rounded-xl max-w-20"}
                               placeholder={"Insert number here"} onChange={handleCharacterLimitInput}
                               value={characterLimit}/>
                        <label htmlFor={"characterLimit"}>Set a character limit</label>
                    </>
                    }
                </div>
            </form>

            <div className={"w-full flex items-center gap-4 text-black mt-6"}>
                <div className={"w-1/3 h-40 bg-white rounded-xl p-6"}>
                    <span className={"text-7xl font-bold"}>{countedCharacter}</span>
                    <p className={"text-xl font-medium mt-2"}>Total Characters</p>
                </div>
                <div className={"w-1/3 h-40 bg-yellow-500 rounded-xl p-6"}>
                    <span className={"text-7xl font-bold"}>{countedWords}</span>
                    <p className={"text-xl font-medium mt-2"}>World Count</p>
                </div>
                <div className={"w-1/3 h-40 bg-black text-white rounded-xl p-6"}>
                    <span className={"text-7xl font-bold"}>{countedSentences}</span>
                    <p className={"text-xl font-medium mt-2"}>Sentence Count</p>
                </div>
            </div>
        </main>
    );
};