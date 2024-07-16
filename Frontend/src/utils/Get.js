export const getUserConversations = async () => {
    const response = await fetch('/api/user');
    return response.json();
};


export const getMessageRequests = async (id) => {
    const response = await fetch(`/api/messages/${id}`);
    return response.json();
}