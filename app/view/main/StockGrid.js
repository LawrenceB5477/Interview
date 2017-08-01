/**
 * This view is an example list of people.
 */
Ext.define('Interview.view.main.StockGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'stockgrid',

    requires: [
        'Interview.store.Personnel'
    ],

    title: 'Stock Prices',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Ticker',  dataIndex: 'name' },
        { text: 'Date', dataIndex: 'email', flex: 1 },
        { text: 'High', dataIndex: 'phone', flex: 1 }
    ],


    items: [{
        xtype: "toolbar",
        docked: "top",
        items: [{
            xtype: "button",
            text: "Fetch Stock Data",
            ui: "action",
            iconCls: 'x-fa fa-rocket',
            handler: 'buttonClick'
        }]
    }]
});