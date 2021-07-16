db = {
    'user'     : 'root',
    'password' : '1234',
    'host'     : 'mysql_db',
    'port'     : '3306',
    'database' : 'app'
}

DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"
