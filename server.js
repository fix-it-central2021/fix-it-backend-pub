const app = require("./index")

const PORT = process.env.PORT || 3800
app.listen(PORT,()=> console.info(`El servidor se inicio en el puerto ${PORT}`))