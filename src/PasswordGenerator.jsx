import React, { useState } from 'react';
import './Style.css'; // Ensure to style it according to your needs

const PG = () => {
    const length = 12;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "@#$%^&*()_=+~!-<>/|";

    const allChars = upperCase + lowerCase + number + symbol;
    const [password, setPassword] = useState('');

    const createPassword = () => {
        let newPassword = "";
        newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
        newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        newPassword += number[Math.floor(Math.random() * number.length)];
        newPassword += symbol[Math.floor(Math.random() * symbol.length)];

        while (length > newPassword.length) {
            newPassword += allChars[Math.floor(Math.random() * allChars.length)];
        }

        setPassword(newPassword);
    };

    const copyPassword = () => {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="container m-[10%] w-[100%] max-w-[700px]">
            <h1 className="font-medium text-5xl">Generate a &nbsp; <span className='text-green-600 border-b-4 border-b-green-600 pb-1.5'>Random  Password</span>
            </h1>
            <div className="display w-full mt-[50px] mb-[30px] bg-white text-black flex items-center justify-between py-6 px-5 rounded-md">
                <input type="text" id="password" value={password} readOnly placeholder="password" className='border-0 outline-none text-2xl bg-transparent text-black' />
                <img src="/copy.png" alt="copy" onClick={copyPassword} className='w-7 cursor-pointer' />
            </div>
            <button onClick={createPassword} className='border-0 bg-green-600 text-white text-2xl font-light flex justify-center py-4 px-6 rounded-md cursor-pointer'>
                <img src="/generate.png" alt="generate" className='w-6 mr-2.5' /> Generate Password
            </button>
        </div>
    );
};

export default PG;
