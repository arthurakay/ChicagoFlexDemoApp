/*
 * File: app/store/Events.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ChicagoFlex.store.Events', {
    extend: 'Ext.data.Store',
    requires: [
        'ChicagoFlex.model.Event'
    ],

    config: {
        autoLoad: true,
        model: 'ChicagoFlex.model.Event',
        storeId: 'EventStore',
        proxy: {
            type: 'jsonp',
            enablePagingParams: false,
            url: 'http://developer.eventbrite.com/json/organizer_list_events?app_key=ZJAGJQ3M3QZ65VOSVY&id=54373972',
            autoAppendParams: false,
            reader: {
                type: 'json',
                rootProperty: 'contents.events'
            }
        }
    }
});