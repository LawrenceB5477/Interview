Ext.define('Interview.store.UserData', {
    extend: 'Ext.data.Store',

    alias: 'store.userdata',

    model: 'Interview.model.UserData',

    storeId: "userData",

    data: { items: [
        { name: 'John 117', lastname: "Spartan", email: "masterchief@gmail.com", password: "alloutofgum" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
