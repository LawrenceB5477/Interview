/**
 * This view is an example list of people.
 */
//TODO Make this functional
Ext.define('Interview.view.main.AccountGrid', {
    extend: 'Ext.Panel',
    xtype: 'accountgrid',

    title: 'Account Positions',

    items: [{
        xtype: "grid",
        columns: [
            { text: "Ticker", dataIndex: "ticker", flex: .5},
            { text: 'Value', dataIndex: 'high', flex: 1 },
            { text: "Gain / Loss", dataIndex: "volume", flex: 1},
            { text: "Amount", dataIndex: "volume", flex: 1},
            { text: "Date Purchased", dataIndex: "open", flex: 1.5},
            { text: "Notes", dataIndex: "close", flex:1}
        ],
        items: [{
            xtype: "toolbar",
            docked: "top",
            //reference: "gridtitle",
            title: "Portfolio",
        }]
    }]
});
