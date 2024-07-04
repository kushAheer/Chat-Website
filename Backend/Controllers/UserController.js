export const signup = async (req, res) => {
    try{
        const { fullName , userName , Password, Gender} = req.body;
    }
    catch(error){
        console.log(error);
    }
}