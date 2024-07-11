export const getUserConversations = async () => {
    const response = await fetch('/api/user');
    return response.json();
};