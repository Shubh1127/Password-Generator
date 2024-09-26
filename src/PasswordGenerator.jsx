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
        <div className="container">
            <h1>Generate a &nbsp; <span>Random  Password</span>
            </h1>
            <div className="display">
                <input type="text" id="password" value={password} readOnly placeholder="password" />
                <img src="/copy.png" alt="copy" onClick={copyPassword} />
            </div>
            <button onClick={createPassword}>
                <img src="/generate.png" alt="generate" /> Generate Password
            </button>
        </div>
    );
};

export default PG;
