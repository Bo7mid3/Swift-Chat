import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
    //const { register, handleSubmit } = useForm();

    //const onSubmit = ()

    return (
    <div>
    <form action="https://SwiftChatServer.ahmedbahloul.repl.co/register" enctype="multipart/form-data" method="post" target="dummyframe">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="text" name="email" placeholder="email" />
        <input type="file" name="user_img" />
        <input type="submit" />
    </form>
    <iframe name="dummyframe" id="dummyframe"></iframe>
    </div>
    )
}

export default Register;