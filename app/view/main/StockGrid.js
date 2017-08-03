/**
 * This view is an example list of people.
 */
Ext.define('Interview.view.main.StockGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'stockgrid',

    title: 'Stock Prices',

    store: {
        storeId: "stockquotes",
        fields: [
            "ticker", "time", "high", "low", "volume", "open", "close"
        ]
    },

    columns: [
        { text: "Ticker", dataIndex: "ticker", flex: .5},
        { text: 'Time',  dataIndex: 'time', flex: 1.5},
        { text: 'High', dataIndex: 'high', flex: 1 },
        { text: 'Low', dataIndex: 'low', flex: 1 },
        { text: "Volume", dataIndex: "volume", flex: 1},
        { text: "Open", dataIndex: "open", flex: 1},
        { text: "Close", dataIndex: "close", flex:1}
    ],


    items: [{
        xtype: "toolbar",
        docked: "top",
        reference: "gridtitle",
        bind: {
            title: "Welcome, John",
        },
        items: [{
            xtype: "button",
            text: "Fetch Stock Data",
            ui: "action",
            iconCls: 'x-fa fa-rocket',
            handler: 'buttonClick'
        }]
    }],

    listeners: {
        select: "stockClicked"
    }
});
