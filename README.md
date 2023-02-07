# run following command in main directory

### `cd backend/config && nano db_config.js`

first change MySql credentials in db_config.js file.

### `cd ../..`

back to main directory

### `npm run build`

It will install npm in both backend and frontend folder and build frontend for production

### `npm start`

It will start backend server and serve static file from /frontend/build

## To access admin route to add and delete product

### `touch .bash_profile`

    create .bash_profile in root directory

### `nano .bash_profile`

    edit .bash_profile to add admin details and jwt secret as following

    export ADMIN_NAME="admin";
    export ADMIN_EMAIL="example.com";
    export ADMIN_PASSWORD="example";
    export JWT_SECRET="abcdefg";

### `source .bash_profile`

    source bash_profile

    now you can access '/admin' route in frontend
