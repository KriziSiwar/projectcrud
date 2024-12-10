const User=require("../models/User")

const Chat=require("../models/chat")




async function addchat (data){

    try{
        //console.log(req.body);
        const chat=new Chat({msg:data.msg} );

        await chat.save();

        //res.status(200).json("user");

    }catch(err) {
        console.log(err);
    }
};

async function add (req,res){

    try{
        console.log(req.body);
        const user=new User(req.body );

        await user.save();

        res.status(200).json("user");

    }catch(err) {
        console.log(err);
    }
};

async function showuser (req,res){

    try{
        const User= await User.find();
        res.status(200).json(" user");

    }catch(err) {
        consolelog(err);
    }
};


async function showByid (req,res){

try{
    const User= await User.findById(req.params.id);
    res.status(200).json(" user");

}catch(err) {
    consolelog(err);
}
};

async function showByname (req,res){
    try{
        const User= await User.findOne({username:req.params.username});
        res.status(200).json(" user");

    }catch(err) {
        consolelog(err);
    }
};

async function showBynameUsers (req,res){


    try{
        const User= await User.findOne({username:req.params.username});
        res.status(200).json(" user");

    }catch(err) {
        consolelog(err);
    }


};
async function update (req,res){

    try{
        const User= await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        res.status(200).json(" user");

    }catch(err) {
        consolelog(err);
    }
};
async function deleteUsers (req,res){
    try{
        const User= await User.findByIdAndDelete(req.params.id);
            
        
        res.status(200).json(" user deleted");

    }catch(err) {
        consolelog(err);
    }
};


module.exports ={addchat,add,showuser,showByid,showByname,showBynameUsers,update,deleteUsers};
