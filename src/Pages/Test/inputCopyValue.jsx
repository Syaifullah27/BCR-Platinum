import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputCopyValue = ({ valueNya }) => {
    const [inputValue, setInputValue] = useState(valueNya);

    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    // };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            alert('Copied to clipboard!');
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };
    return (
            <div className="relative">
                <input
                className="border-[1px] border-[#3C3C3C] w-full p-2 outline-none"
                    type="text"
                    readOnly
                    value={inputValue}
                    // onChange={handleInputChange}
                    placeholder="Type something..."
                />
                <button onClick={copyToClipboard} className="absolute right-3 top-3">
                    <img src="./../images/copy-icon.png" alt="Copy" className="copy-icon" />
                </button>
            </div>
    )
}

export default InputCopyValue