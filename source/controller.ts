'use strict';

import Backbone = require('backbone');
import _ = require('underscore');

abstract class Controller {
    public onInitialize;
    
    protected promise;

    protected create?(): void { /* No op. Override this method if necessary. */ }
    protected clear?(): void { /* No op. Override this method if necessary. */ }

    public constructor(
        public options: any = {},
        protected configuration: any,
        public router: Backbone.Router
    ) {
        this.options = options || {};
        this.router = router || new Backbone.Router();
        this.configuration = configuration || {};

        this.initialize(options, configuration, router);
        
        _.extend(this, Backbone.Events);
    }

    public initialize(options, configuration, router: Backbone.Router) {
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
