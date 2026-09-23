const app = require('./app.js')
const env = require('./config/env.js')

const PORT = env.PORT

app.listen(PORT, () => console.log(`Server up and running`))