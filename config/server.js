require("dotenv").config();

const dev ={
    app:{port : Number(process.env.SERVER_PORT) || 3037},
    db:{url: process.env.MONGODB_URL || 'mongodb+srv://Sufana:sufana123@cluster0.zuslhqs.mongodb.net/full-stack-vercel-test?retryWrites=true&w=majority',},
};

module.exports = dev;