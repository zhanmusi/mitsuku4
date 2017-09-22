var builder = require('botbuilder');

var lib = new builder.Library('restart');
lib.dialog('/', [
    
    function(session,args,next){
    builder.Prompts.choice(session, "Are you sure you wish to restart?", "Yes|No", { listStyle: 3 });
},
    function(session,args,next){
        if (session.message.text === 'Yes'){
            session.send("YES TYPED")
            return session.beginDialog('/')
        }
        else{
            
        }
    }



]);

// Export createLibrary() function
module.exports.createLibrary = function () {
    return lib.clone();
};