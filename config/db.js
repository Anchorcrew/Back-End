module.exports = {
    DB: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@anchorcrew.mongo.cosmos.azure.com:${process.env.MONGO_PORT}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@anchorcrew@`
}