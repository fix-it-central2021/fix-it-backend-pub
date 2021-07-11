const app = require("./index")

const PORT = process.env.PORT || 3800
app.listen(PORT,()=> console.info(`El server se inicio en el puerto ${PORT}`))