/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Interview.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    //TODO figure out if there is a better way to do this
    onSubmit: function (sender, result) {
        var userform = this.getView().lookupReference("usermanagement");
        var values = userform.getValues();

        var userDataGrid = this.getView().lookupReference("userdatagridref");
        var userDataGridStore = userDataGrid.getStore();

        userDataGridStore.each(function (record) {
            record.set({
                "name": values.name,
                "lastname": values.lastname,
                "email": values.email,
                "password": values.password
                });
        });

        userform.reset();
        Ext.toast("User Data Updated!");
    },

    onNameSelected : function(sender, record) {
        var userform = this.getView().lookupReference("usermanagement");
        console.log(record[0].data);
        userform.setValues(record[0].data);
        Ext.toast("User Data Loaded!")
    }

});
