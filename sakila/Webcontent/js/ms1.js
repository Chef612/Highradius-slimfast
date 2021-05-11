
var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"EN", "name":"English"},
        {"abbr":"HI", "name":"Hindi"},
        {"abbr":"BE", "name":"Bengali"}
    ]
});
Ext.onReady(function(){
Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 1280,
    height: 300,
    title: 'Movie Advance Search',


    layout: 'column',
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Movie Name',
        name: 'RUN_score',
        margin: '60 50 0 205',
        id: 'txtField1'

    }, {
        xtype: 'textfield',
        fieldLabel: 'Director Name',

        name: 'Director Name',
        margin: '60 30 0 270',
        id: 'txtField2'

    },{
        xtype: 'datefield',
        fieldLabel: 'Release Year',
        name: 'Release Year',
        margin: '20 50 0 205',
        id: 'txtField3'

    }, {
    	 xtype: 'combobox',
    	    store: states,
    	    queryMode: 'local',
    	    displayField: 'name',
    	    valueField: 'abbr',
        fieldLabel: 'Language',

        name: 'Language',
        margin: '20 30 0 270',
        id: 'txtField4'

    }],
    buttons: [{
        text: 'Search',
        margin: '0 5 0 1000'
        
    },{
    	text: 'Reset',
    	margin: '0 550 0 0'
    }],
    
    

});
Ext.application({
    name: 'Fiddle',

    launch: function () {
        Ext.create('Ext.data.Store', {
            storeId: 'squareStore',
            fields: ['name','email','phone','lang','dir','rat','spec'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'https://api.npoint.io/9ff3e77a8dd3a2b7e3e6',
                reader: {
                    type: 'json',
                    rootProperty: 'result.squares'
                }
            }
        });

        Ext.create('Ext.grid.Panel', {
            title: 'Movie Grid',
            store: Ext.data.StoreManager.lookup('squareStore'),
            columns: [{
                text: 'Title',
                dataIndex: 'name'
            }, {
                text: 'Description',
                dataIndex: 'email',
                flex: 1
            }, {
                text: 'Release Year',
                dataIndex: 'phone'
            },
            {
                text: 'Langhuage',
                dataIndex: 'lang'
            },
            {
                text: 'Director',
                dataIndex: 'dir'
            },{
                text: 'Rating',
                dataIndex: 'rat'
            },{
                text: 'Special Features',
                dataIndex: 'spec'
            }],
            height: 250,
            width: 1275,
            renderTo: Ext.getBody(),
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SIMPLE'
            },
            selType: 'checkboxmodel'
        });
    }
});

});