Ext.onReady(function(){
var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"EN", "name":"English"},
        {"abbr":"HI", "name":"Hindi"},
        {"abbr":"BE", "name":"Bengali"},
        {"abbr":"TA", "name":"Tamil"}
    ]
});

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

        name: 'Wicket_score',
        margin: '60 30 0 270',
        id: 'txtField2'

    },{
        xtype: 'datefield',
        fieldLabel: 'Release Year',
        name: 'RUN_score',
        margin: '20 50 0 205',
        id: 'txtField3'

    }, {
    	 xtype: 'combobox',
    	    store: states,
    	    queryMode: 'local',
    	    displayField: 'name',
    	    valueField: 'abbr',
        fieldLabel: 'Language',

        name: 'Wicket_score',
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
var store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone','lang','dir','rat','spec'],
    data: [{
        name: 'Acadamy Dinasour',
        email: 'acadamey dinasour is a movie about dinasour ofcourse',
        phone: '2006',
        lang: 'English',
        dir: 'Nolan',
        rat: 'PG',
        spec: 'Deleted Scenes'
    }, {
        name: 'Acadamy Dinasour',
        email: 'acadamey dinasour is a movie about dinasour ofcourse',
        phone: '2006',
        lang: 'English',
        dir: 'Nolan',
        rat: 'PG',
        spec: 'Deleted Scenes'
    }, {
        name: 'Acadamy Dinasour',
        email: 'acadamey dinasour is a movie about dinasour ofcourse',
        phone: '2006',
        lang: 'English',
        dir: 'Nolan',
        rat: 'PG',
        spec: 'Deleted Scenes'
    }, {
       name: 'Acadamy Dinasour',
        email: 'acadamey dinasour is a movie about dinasour ofcourse',
        phone: '2006',
        lang: 'English',
        dir: 'Nolan',
        rat: 'PG',
        spec: 'Deleted Scenes'
    }, {
        name: 'Acadamy Dinasour',
        email: 'acadamey dinasour is a movie about dinasour ofcourse',
        phone: '2006',
        lang: 'English',
        dir: 'Nolan',
        rat: 'PG',
        spec: 'Deleted Scenes'
    }]
});

Ext.create('Ext.grid.Panel', {
    title: 'Movie Grid',
    store: store,
    id: 'testGrid',
    
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
    },{
        text: 'Language',
        dataIndex: 'lang',
        flex: 1
    },{
        text: 'Director',
        dataIndex: 'dir',
        flex: 1
    },{
        text: 'Rating',
        dataIndex: 'rat',
        flex: 1
    },{
        text: 'Special Feature',
        dataIndex: 'spec',
        flex: 1
    }],
    height: 500,
    width: 800,
    renderTo: Ext.getBody(),
    selModel: {
        checkOnly: false,
        injectCheckbox: 'first',
        mode: 'SIMPLE'
    },
    
    selType: 'checkboxmodel',
    buttons: [{
        text: 'Select All',
        handler: function () {
            Ext.getCmp('testGrid').getSelectionModel().selectAll();
        }
    }, {
        text: 'Deselect All',
        handler: function () {
            Ext.getCmp('testGrid').getSelectionModel().deselectAll();
        }
    },{
        text:'Print Selected Recod',
        handler:function(){
            var selection = Ext.getCmp('testGrid').getSelection();
            if(selection.length){
                let name='';
                selection.map(item=>{
                    name+=item.get('name')+'<br>';
                });
                Ext.Msg.alert('Selected Record',name);
            }else{
                Ext.Msg.alert('Error','Please select record');
            }
        }
    }]
});
});