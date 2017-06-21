'use strict';

import Backbone = require('backbone');
import _ = require('underscore');

abstract class Controller {

    options: any;
    router: Backbone.Router;
    onInitialize;
    create;
    
    promise;

    protected configuration: any;

    protected clear?(): void { /* No op. Override this method if necessary. */ }

    constructor(options, configuration, router) {

        this.options = options || {};
        this.router = router || new Backbone.Router();
        this.configuration = configuration || {};

        this.initialize(options, configuration, router);
        
        _.extend(this, Backbone.Events);

    }

    initialize (options, configuration, router) {

        this.options = options || {};
        this.router = router;

        // if oninitialize exists
        if (this.onInitialize) {

            // execute it now
            this.onInitialize(this.options, configuration, this.router);

        }

    }
    
    static extend() {
        return (<any>Backbone.Model).extend.apply(this, arguments);
    }

}

export = Controller;
