const { app } = require("./app");
const { db } = require("./utils/database.util")



db.authenticate()
    .then(() => console.log("db authenticated"))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log("db sync"))
    .catch(err => console.log(err))


app.listen(4000, () => {
    console.log("Express are working")
})