ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9210").setExtent([591703.394845, 1178680.539898, 625865.652993, 1198477.251089]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.739000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Tuyn_1 = new ol.format.GeoJSON();
var features_Tuyn_1 = format_Tuyn_1.readFeatures(json_Tuyn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9210'});
var jsonSource_Tuyn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuyn_1.addFeatures(features_Tuyn_1);
var lyr_Tuyn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuyn_1, 
                style: style_Tuyn_1,
                popuplayertitle: 'Tuyến',
                interactive: true,
    title: 'Tuyến<br />\
    <img src="styles/legend/Tuyn_1_0.png" /> Tuyến 1<br />\
    <img src="styles/legend/Tuyn_1_1.png" /> Tuyến 2<br />\
    <img src="styles/legend/Tuyn_1_2.png" /> Tuyến 3<br />\
    <img src="styles/legend/Tuyn_1_3.png" /> Tuyến 4<br />\
    <img src="styles/legend/Tuyn_1_4.png" /> Tuyến 5<br />\
    <img src="styles/legend/Tuyn_1_5.png" /> <br />' });
var format_GiaoThng_2 = new ol.format.GeoJSON();
var features_GiaoThng_2 = format_GiaoThng_2.readFeatures(json_GiaoThng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9210'});
var jsonSource_GiaoThng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiaoThng_2.addFeatures(features_GiaoThng_2);
var lyr_GiaoThng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiaoThng_2, 
                style: style_GiaoThng_2,
                popuplayertitle: 'Giao Thông',
                interactive: true,
                title: '<img src="styles/legend/GiaoThng_2.png" /> Giao Thông'
            });
var format_UBND_3 = new ol.format.GeoJSON();
var features_UBND_3 = format_UBND_3.readFeatures(json_UBND_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9210'});
var jsonSource_UBND_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBND_3.addFeatures(features_UBND_3);
var lyr_UBND_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBND_3, 
                style: style_UBND_3,
                popuplayertitle: 'UBND',
                interactive: true,
                title: '<img src="styles/legend/UBND_3.png" /> UBND'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Tuyn_1.setVisible(true);lyr_GiaoThng_2.setVisible(true);lyr_UBND_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Tuyn_1,lyr_GiaoThng_2,lyr_UBND_3];
lyr_Tuyn_1.set('fieldAliases', {'Id': 'Id', 'Date': 'Date', 'SoLuong': 'SoLuong', 'SoThuTu': 'SoThuTu', });
lyr_GiaoThng_2.set('fieldAliases', {'gid': 'gid', 'tenduong': 'tenduong', 'chieudai': 'chieudai', 'viahe_trai': 'viahe_trai', 'dorong': 'dorong', 'daypc_dai': 'daypc_dai', 'daypc_rong': 'daypc_rong', 'viahe_phai': 'viahe_phai', 'dientich': 'dientich', 'ketcaumd': 'ketcaumd', 'loaiduong': 'loaiduong', 'namxaydung': 'namxaydung', 'namduytu': 'namduytu', 'taitrong': 'taitrong', 'logioi_qh': 'logioi_qh', 'ghichu': 'ghichu', 'motchieu': 'motchieu', 'capquanly': 'capquanly', 'dv_quanly': 'dv_quanly', 'tinhtrang': 'tinhtrang', 'solan': 'solan', 'capduong': 'capduong', 'checked': 'checked', 'shape_leng': 'shape_leng', });
lyr_UBND_3.set('fieldAliases', {'quan_huyen': 'quan_huyen', 'ten_ubnd': 'ten_ubnd', 'so_nha': 'so_nha', 'ten_duong': 'ten_duong', 'phuong_xa': 'phuong_xa', 'STT': 'STT', });
lyr_Tuyn_1.set('fieldImages', {'Id': 'Range', 'Date': 'TextEdit', 'SoLuong': 'Range', 'SoThuTu': 'TextEdit', });
lyr_GiaoThng_2.set('fieldImages', {'gid': 'Range', 'tenduong': 'TextEdit', 'chieudai': 'TextEdit', 'viahe_trai': 'TextEdit', 'dorong': 'TextEdit', 'daypc_dai': 'TextEdit', 'daypc_rong': 'TextEdit', 'viahe_phai': 'TextEdit', 'dientich': 'TextEdit', 'ketcaumd': 'TextEdit', 'loaiduong': 'TextEdit', 'namxaydung': 'TextEdit', 'namduytu': 'TextEdit', 'taitrong': 'TextEdit', 'logioi_qh': 'TextEdit', 'ghichu': 'TextEdit', 'motchieu': 'Range', 'capquanly': 'TextEdit', 'dv_quanly': 'TextEdit', 'tinhtrang': 'TextEdit', 'solan': 'TextEdit', 'capduong': 'Range', 'checked': 'Range', 'shape_leng': 'TextEdit', });
lyr_UBND_3.set('fieldImages', {'quan_huyen': 'TextEdit', 'ten_ubnd': 'TextEdit', 'so_nha': 'TextEdit', 'ten_duong': 'TextEdit', 'phuong_xa': 'TextEdit', 'STT': 'TextEdit', });
lyr_Tuyn_1.set('fieldLabels', {'Id': 'no label', 'Date': 'no label', 'SoLuong': 'no label', 'SoThuTu': 'no label', });
lyr_GiaoThng_2.set('fieldLabels', {'gid': 'no label', 'tenduong': 'inline label - always visible', 'chieudai': 'no label', 'viahe_trai': 'no label', 'dorong': 'no label', 'daypc_dai': 'no label', 'daypc_rong': 'no label', 'viahe_phai': 'no label', 'dientich': 'no label', 'ketcaumd': 'no label', 'loaiduong': 'no label', 'namxaydung': 'no label', 'namduytu': 'no label', 'taitrong': 'no label', 'logioi_qh': 'no label', 'ghichu': 'no label', 'motchieu': 'no label', 'capquanly': 'no label', 'dv_quanly': 'no label', 'tinhtrang': 'no label', 'solan': 'no label', 'capduong': 'no label', 'checked': 'no label', 'shape_leng': 'no label', });
lyr_UBND_3.set('fieldLabels', {'quan_huyen': 'no label', 'ten_ubnd': 'no label', 'so_nha': 'no label', 'ten_duong': 'no label', 'phuong_xa': 'no label', 'STT': 'inline label - always visible', });
lyr_UBND_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});