const reflex = x => x

export default class Controller {
    constructor(route, api) {
        this.route = route
        this.api = api
    }
    create(params, handle = ) {
        // 
        return this.api.POST(handle(params))
    }
    query(params, handle = ) {
        // 
        return this.api.GET(handle(params))
    }
    update(params, handle = ) {
        // 
        return this.api.PUT(handle(params))
    }
    delete(params, handle = ) {
        // 
        return this.api.DELETE(handle(params))
    }
}