'use strict';

import * as Backbone from 'backbone';
import * as _ from 'underscore';

class EventsManager {

    constructor() { }

    constants = {

        // router
        'ROUTER_PREROUTE': 'router:preRoute',
        'ROUTER_POSTROUTE': 'router:postRoute'

    };

}

export const ActualEventsManager =  _.extend(new EventsManager(), Backbone.Events);
export default ActualEventsManager;
