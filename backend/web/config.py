db = {
    'user'     : '',
    'password' : '',
    'host'     : '',
    'port'     : '',
    'database' : ''
}

DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
