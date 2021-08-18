(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{452:function(e,t,a){"use strict";a.r(t);var r=a(4),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"analysis-ready-data-for-sar-sentinel-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis-ready-data-for-sar-sentinel-1"}},[e._v("#")]),e._v(" Analysis-Ready Data for SAR (Sentinel-1)")]),e._v(" "),a("p",[e._v("Data from synthetic aperture radar sensors requires significant preprocessing to be calibrated and normalized for terrain.\nThis is referred to as backscatter computation, and supported by\n"),a("a",{attrs:{href:"https://processes.openeo.org/draft/#sar_backscatter",target:"_blank",rel:"noopener noreferrer"}},[e._v("sar_backscatter"),a("OutboundLink")],1),e._v(" and the CARD4L compliant variant\n"),a("a",{attrs:{href:"https://processes.openeo.org/draft/#ard_normalized_radar_backscatter",target:"_blank",rel:"noopener noreferrer"}},[e._v("ard_normalized_radar_backscatter"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The user should load a datacube containing raw SAR data, such as Sentinel-1 GRD. On the resulting datacube, the\n"),a("code",[e._v("openeo.rest.datacube.DataCube.sar_backscatter")]),e._v(" method can be invoked. The CEOS CARD4L variant is:\n"),a("code",[e._v("openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter")]),e._v(". These processes are tightly coupled to\nmetadata from specific sensors, so it is not possible to apply other processes to the datacube first,\nwith the exception of specifying filters in space and time.")]),e._v(" "),a("p",[e._v("This section shows a few working examples for these processes.")]),e._v(" "),a("h2",{attrs:{id:"eodc-back-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eodc-back-end"}},[e._v("#")]),e._v(" EODC back-end")]),e._v(" "),a("p",[e._v("EODC supports sar_backscatter, based on the "),a("a",{attrs:{href:"https://sentinel.esa.int/web/sentinel/toolboxes/sentinel-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentinel-1 toolbox"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"terrascope-back-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrascope-back-end"}},[e._v("#")]),e._v(" Terrascope back-end")]),e._v(" "),a("p",[e._v("When working with the Sentinelhub SENTINEL1_GRD collection, both sar processes can be used. The underlying implementation is\nprovided by "),a("a",{attrs:{href:"https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#processing-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentinelhub"),a("OutboundLink")],1),e._v(", and offers full\nCARD4L compliant processing options.")]),e._v(" "),a("p",[e._v("This is an example of "),a("code",[e._v("openeo.rest.datacube.DataCube.ard_normalized_radar_backscatter")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("s1grd = (connection.load_collection('SENTINEL1_GRD', bands=['VH', 'VV'])\n .filter_bbox(west=2.59003, east=2.8949, north=51.2206, south=51.069, crs=\"EPSG:4326\")\n .filter_temporal(extent=[\"2019-10-10\",\"2019-10-10\"]))\n\njob = s1grd.ard_normalized_radar_backscatter().execute_batch()\n\nfor asset in job.get_results().get_assets():\n    asset.download()\n")])])]),a("p",[e._v("When working with other GRD data, an implementation based on Orfeo Toolbox is used:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.orfeo-toolbox.org/CookBook/Applications/app_SARCalibration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Orfeo docs"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Open-EO/openeo-geopyspark-driver/blob/master/openeogeotrellis/collections/s1backscatter_orfeo.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implementation"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The Orfeo implementation currently only supports sigma0 computation, and is not CARD4L compliant.")])])}),[],!1,null,null,null);t.default=n.exports}}]);