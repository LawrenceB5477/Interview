/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('Interview.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'bottom'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            xtype: "panel",
            title: 'Stock Prices',
            iconCls: 'x-fa fa-bar-chart',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'stockgrid'
            }]

        },{
            title: 'Account Positions',
            iconCls: 'x-fa fa-usd',
        },{
            title: 'Buy / Trade',
            iconCls: 'x-fa fa-shopping-bag',
        },{
            //TODO figure out form validation, move the damn submit button higher!
            xtype: "container",
            title: 'Account Management',
            iconCls: 'x-fa fa-cog',
            layout: "hbox",
            items: [{
                xtype: "formpanel",
                title: "User Account Settings",
                reference: "usermanagement",
                align: "left",
                flex: 1,
                buttons: {
                    submit: "onSubmit"},
                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    label: 'First Name',
                }, {
                    xtype: 'textfield',
                    name: 'lastname',
                    label: 'Last Name',
                }, {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password',
                }]

            }, {
                xtype: "userdatagrid",
                reference: "userdatagridref",
                align: "right",
                flex: 1
            }]
        }
    ]
});
