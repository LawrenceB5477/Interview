/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Interview.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
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

        var gridtoolbartitle = this.getView().lookupReference("gridtitle");
        gridtoolbartitle.setTitle("Welcome, " + values.name);
        Ext.toast("User Data Updated!");
    },

    onNameSelected : function(sender, record) {
        var userform = this.getView().lookupReference("usermanagement");
        userform.setValues(record[0].data);
        Ext.toast("User Data Loaded!")
    },

    buttonClick : function() {
        Ext.Ajax.request({
            url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&outputsize=compact&apikey=KZQ1V4YS1MQ6UPBZ",
            method: "GET",

            success: function(response) {
                var jsondata = Ext.JSON.decode(response.responseText);

                //Fetch the meta data of the JSON
                var metaData = {};
                Ext.Object.each(jsondata["Meta Data"], function(a, b){
                    metaData[a.substring(3).toLowerCase()] = b;
                });

                //Fetch the stock prices.
                var data = [];
                Ext.Object.each(jsondata["Time Series (1min)"], function(k, v){
                    var d = {};
                    d.time = k;
                    d.ticker = metaData.symbol;
                    Ext.Object.each(v, function(c, e){
                        d[c.substring(3).toLowerCase()] = e;
                    })
                    d.time = metaData["time zone"] + " : " + d.time;
                    data.push(d);
                });

                var stockStore = Ext.data.StoreManager.lookup("stockquotes");
                stockStore.setData(data);
                Ext.toast("Stock Data Fetched!");
            }
        });
    },

    stockClicked : function(sender, record) {
        Ext.toast("It's working.");
        console.log(record);
        console.log(record[0].data.high);
    }
});
