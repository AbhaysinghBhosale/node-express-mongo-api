exports.defaultRoute = (req,res)=>{
    res.send('Welcome to Node Application');
}

exports.getUsers = (req,res)=>{
    res.json({
        posts:[ {'Name':'Abhay'}, {'Name':'Unmesh'}]
    });
}

exports.getUser = (req,res)=>{
    const users = [{'Name':'Abhay','Address':'Pune'}, {'Name':'Unmesh','Address':'Mumbai'}, {'Name':'Pratik','Address':'Satara'}, {'Name':'Chetas','Address':'Puntamba'}];
    let user = users.filter(user => user.Name === req.query.UserName);
    if(user.length) {
        res.json(user);
    } else {
        res.send('No User Found');
    }
}
