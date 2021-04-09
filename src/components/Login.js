import React, { useState } from 'react';
import { setToken, getToken } from '../helpers/Token'
import GoogleLogin from 'react-google-login';

const clientId = '474969311588-13ag3eslpe33moc6fra535uk2lhrnl8e.apps.googleusercontent.com'

const Login = () => {
    const [message, setMessage] = useState('');
    const [googleResponse, setGoogleResponse] = useState('');
    const [session, setSession] = useState('');

    const responseGoogle = (response) => {
        console.log(response);
        if (response.tokenId) {
            setGoogleResponse(response.tokenId)
            setMessage('Logged In Success')
            setToken('login_Token', response.tokenId)
            const sessionToken = getToken('login_Token')
            setSession(sessionToken)
        }
        if (response.error) {
            setGoogleResponse(response.details)
            setMessage('Logged In Failure')
        }
    }
    console.log(`token value: ${session}`)

    return (
        <div>
            <h2>LOGIN COMPONENT</h2>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <div>
                {message}
                {googleResponse &&
                    <div>
                        <h4>Reported Token:-</h4>
                        <p>{googleResponse}</p>
                    </div>
                }
            </div>
            <div>
                {session &&
                    <div>
                        <h4>Fetched Session Token:-</h4>
                        <p>{session}</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default Login;
