
const path = require("path")

const swaggerSpec = {
    definition : {
        openapi: "3.0.0",
        info:{
            title:"Rest API meals Doc",
            version:"1.0.0"
        },
        components:{
          securitySchemas:{
            bearerAuth:{
                  type:"http",
                  scheme:"bearer",
                  bearerFormat:"JWT"
            }
          }
        },
        security: [
          {
            bearerAuth: [],
          }
        ],
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