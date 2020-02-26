let config = {
    "local": {
        "NODE_SERVER": "http://localhost",
        "ROOT_DIR": "/opt/lampp/htdocs/",
        "BASE_URL": "http://localhost/new_node_structure/",
        "NODE_SERVER_PORT": "9292",
        "MYSQL_HOST": 'localhost',
        "MYSQL_USER": 'root',
        "MYSQL_PASSWORD": '',
        'MYSQL_DATABASE': 'solync',
        "EMAIL_USER": 'techugopm@gmail.com',
        "EMAIL_PASS": 'Techugo@123',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": "465",
        "EMAIL_SECURE": true,
        "EMAIL_TLS": true
    },
    "server": {
        "NODE_SERVER": "",
        "ROOT_DIR": "/var/www/html/",
        "BASE_URL": "",
        "NODE_SERVER_PORT": "6565",
        "MYSQL_HOST": 'localhost',
        "MYSQL_USER": '',
        "MYSQL_PASSWORD": '',
        'MYSQL_DATABASE': '',
        "EMAIL_USER": 'tecugopm@gmail.com',
        "EMAIL_PASS": 'Techugo@123',
        "EMAIL_HOST": 'smtp.gmail.com',
        "EMAIL_PORT": "465",
        "EMAIL_SECURE": true,
        "EMAIL_TLS": true
    }

}

module.exports = {
    config
}
