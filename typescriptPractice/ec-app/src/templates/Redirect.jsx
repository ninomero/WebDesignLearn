import React from 'react'

// リダイレクトかける
import { useNavigate } from 'react-router-dom';

// リダイレクトをかける
export const ToHome = () => {
    const navigate = useNavigate();
    navigate("/");

    // const name = 1;

    // if (name === 1) {
    //     navigate("/");
    // }
}

const Redirect = () => {
  return (
    <div>Redirect</div>
  )
}

export default Redirect