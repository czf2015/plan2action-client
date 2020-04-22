import Controller from './Controller'
import * as apis from '../apis'

// export default {
    //     '/users': apis.USER,
    //     '/accounts': apis.ACCOUNT
    // }
    

export default {
    user: new Controller('/users', apis.USER),
    account: new Controller('/accounts', apis.ACCOUNT),
}


services.user.create()
services.user.query()
services.user.update()
services.user.delete()

services.account.create()
services.account.query()
services.account.update()
services.account.delete()

