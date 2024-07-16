export const signUpRequest = async (data) => {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


export const loginRequest = async (data)=>{
    const response = await fetch('/api/auth/login',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });
    return response.json();
}

export const sendMessageRequest = async (data,id)=>{
    const response = await fetch(`/api/messages/send/${id}`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });
    return response.json();
}