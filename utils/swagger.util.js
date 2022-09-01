
const path = require("path")

const swaggerSpec = {
    definition : {
        openapi: "3.0.0",
        info:{
            title:"Rest API meals Doc",
            version:"1.0.0"
        },
        servers:[
          {
            url:"http://localhost:4000"
          }
        ],
        components: {
          securitySchemes:{
            bearerAuth:{
              type: "http",
              scheme: "bearer",
            }
          }
        }

    },
    apis:[
        `${path.join(__dirname, "../routes/*.js")}`,
    ]
}



module.exports = { swaggerSpec }