var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_mikro_PL_1 = new ol.format.GeoJSON();
var features_mikro_PL_1 = format_mikro_PL_1.readFeatures(json_mikro_PL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mikro_PL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mikro_PL_1.addFeatures(features_mikro_PL_1);
var lyr_mikro_PL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mikro_PL_1, 
                style: style_mikro_PL_1,
                popuplayertitle: 'mikro_PL',
                interactive: true,
                title: '<img src="styles/legend/mikro_PL_1.png" /> mikro_PL'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_mikro_PL_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_mikro_PL_1];
lyr_mikro_PL_1.set('fieldAliases', {'Id': 'Id', 'Klasifikas': 'Klasifikas', 'Keterangan': 'Keterangan', 'Luas': 'Luas', });
lyr_mikro_PL_1.set('fieldImages', {'Id': 'Range', 'Klasifikas': 'TextEdit', 'Keterangan': 'TextEdit', 'Luas': 'TextEdit', });
lyr_mikro_PL_1.set('fieldLabels', {'Id': 'no label', 'Klasifikas': 'no label', 'Keterangan': 'no label', 'Luas': 'no label', });
lyr_mikro_PL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});