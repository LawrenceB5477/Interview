/**
 * This view is an example list of people.
 */
Ext.define('Interview.view.main.UserDataGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'userdatagrid',

    requires: [
        'Interview.store.UserData'
    ],

    title: 'User Data',

    store: {
        type: 'userdata',
        autoLoad: "true"
    },

    columns: [{
        text: 'First Name',
        dataIndex: 'name',
        flex: 1,
    }, {
        text: "Last Name",
        dataIndex: "lastname",
        flex: 1
    }, {
        text: "Email",
        dataIndex: "email",
        flex: 2,
    }, {
        text: 'Password',
        dataIndex: 'password',
        flex: 2
    }],

    listeners: {
        select: 'onNameSelected'
    }
});
