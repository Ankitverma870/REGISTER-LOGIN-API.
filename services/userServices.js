const users = [];

const registerUser = (username,email,password) =>{
    if(!username || !email || !password){
        throw new Error('misssing field required');
    }

    const newUser = {username,email,password};
    users.push(newUser);

    return newUser;
};
const loginUser = (username,password) =>{
    const user = users.find((u) => u.username === username && u.password === password);
    return user;
}



module.exports = {
    registerUser,
    loginUser,
};