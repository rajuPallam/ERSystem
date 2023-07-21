// Import model
const User = require('../models/user');

// For Registration
module.exports.register = async function(req, res) {
  try {
    // Find all users and get the document count
    const userCount = await User.countDocuments({});
    const oUser=await User.findOne({email:req.body.email});

    console.log(userCount ,'/', 1000);

    if(oUser){
        console.log("user already exists");
        return res.render('log_in');
    }else{


        if(req.body.password==req.body.conformPassword){
            if(userCount==0){
                console.log("hai im in");
                const user=await User.create({
                    email:req.body.email,
                    password:req.body.password,
                    name:req.body.name,
                    admin:true
                });
                console.log(user,"*************************************");
        
            }else{
                console.log("hai im in else");
                const ser=await User.create({
                    email:req.body.email,
                    password:req.body.password,
                    name:req.body.name,
                    admin:false
                });
                console.log(ser,"//////////////////////////////////////////////////");
            }
    
        }else{
            console.log("password does not match");
            return res.redirect('back');
        }

    }

    // console.log(userCount + 1000);
    return res.render('log_in');
  } catch (err) {
    console.log("Error while rendering the register", err);
    return res.status(500).send("Internal Server Error");
  }
}

//userprofile
module.exports.userProfile=async function(req,res){
    return res.render('user_profile');
}

//signup
module.exports.signUp=async function(req,res){
return res.render('register');
}

//signin
module.exports.signIn=async function(req,res){
    return res.render('log_in');
}


//create session
module.exports.createSession=async function(req,res){
    return res.redirect('/');
}


module.exports.destroySession = function(req, res) {
    try {
      req.logout(function(err) {
        if (err) {
          console.log("error in destroying the session", err);
          return;
        }
        return res.redirect('/');
      });
    } catch (err) {
      console.log("error in destroying the session", err);
      return;
    }
  };
  

  
  