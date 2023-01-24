const data = require('../UserData.json')

const fs = require('fs')

const Homepage = (req, res) => {
    res.send("my data is loaded on brouser ");
}

const Datapage = (req, res) => {
    res.send("<h1>my data is loaded on home screen </h1>    ");
}

const UserData = (req, res) => {
    res.send(data);
}

const Userpostdata = (req, res) => {
    const UserId = req.params

    const UserData = data.find((val) => val.id == UserId.id)
    if (UserData) {
        res.send(UserData)
    }
    else {
        res.send("Userdata not found")
    }


}

const Signupdata = (req, res) => {
    console.log("comeing");

    const user = req.body

    if (!user) {

        return res.status(400).json({
            success: false,
            message: 'Data  is not given'
        })
    }
    else {
        console.log(user);

        data.push(user)
        fs.writeFileSync(__dirname + '/../UserData.json', JSON.stringify(data), 'utf-8')
        return res.status(201).json({
            success: true,
            message: ' userdata added successfully'
        })
    }

}

// const Adduser = (req,res)=>{


//     const userdata = req.body;
//     if(userdata){
//         data.push(userdata);

//         fs.writeFileSync(__dirname +'/../UserData.json', JSON.stringify(data), 'utf-8' )
//         return res.status(201).json(
//             {
//                 success:true,
//                 message: ' userdata added successfully'
//             }
//         )
//     }else{
//         return res.status(400).json({
//             success : false,
//             message : 'Data  is not given'
//         })
//     }



// }

module.exports = {
    Homepage,
    Datapage,
    UserData,
    Userpostdata,
    // Adduser,
    Signupdata
}