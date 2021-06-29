// print('start-------------------------------------------------abhishekvtangod--####################')
const db_name = _getEnv("MONGO_INITDB_DATABASE")
const username = _getEnv("MONGO_USERNAME")
const password = _getEnv("MONGO_PASSWORD")
// print(db_name, username, password)
db.createUser(
    {
        user: username,
        pwd: password,
        roles: [
            {
                role: "readWrite",
                db: db_name
            }
        ]
    }
)
// print('end-------------------------------------------------abhishekvtangod--####################')