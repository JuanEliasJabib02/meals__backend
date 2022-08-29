
const path = require("path")

const swaggerSpec = {

    definition : {
        openapi: "3.0.0",
        info:{
            title:"Node PostgreSQL API Meals",
            version:"1.0.0"
        },
        servers:[
          {
            url:"http://localhost:4000"
          }
        ]
    },
    apis:[
        `${path.join(__dirname, "../routes/*.js")}`,
    ]
}



module.exports = { swaggerSpec }