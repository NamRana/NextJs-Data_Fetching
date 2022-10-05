import Users from "../model/user";

//get req
export async function getUsers(req,res){
    try{
        const users = await Users.find();

        if(!users){
            return res.status(404).json({error: "User not found"});
        }
        res.status(200).json({users,})
    }catch(error){
        res.status(404).json({error:"Erro while fetching data"});
    }
}

// get single user
export async function getUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findById(userId);
            res.status(200).json(user)
        }
        res.status(404).json({ error : "User not Selected...!"});
    } catch (error) {
        res.status(404).json({ error: "Cannot get the User...!"})
    }
}

//post req
export async function postUser(req,res){
    try{
        const formData=await Users.create(req.body);
        res.status(200).json(formData);
        
    }catch(error){
        res.status(400).json(error);
    }
}

//update req
export async function putUser(req, res){
    try {
        const { userId } = req.query;
        const formData = req.body;

        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId, formData);
            res.status(200).json(user)
        }
        res.status(404).json( { error: "User Not Selected...!"})
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}
//delete req

export async function deleteUser(req, res){
    try {
        const { userId } = req.query;

        if(userId){
            const user = await Users.findByIdAndDelete(userId)
            return res.status(200).json(user)
        }

        res.status(404).json({ error: "User Not Selected...!"})

    } catch (error) {
        res.status(404).json({ error: "Error While Deleting the User...!"})
    }
}