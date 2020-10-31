if(process.env.NODE_ENV === 'production'){
    //Prod keys
    module.exports = require('./prod');
}else {
    //Dev Keys
    module.exports = require('./dev');
}



