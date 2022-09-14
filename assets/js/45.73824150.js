(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{474:function(e,t,a){"use strict";a.r(t);var n=a(4),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"collections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[e._v("#")]),e._v(" Collections")]),e._v(" "),t("p",[e._v("This page describes requirements on STAC collection metadata for backend providers in the openEO platform federation. These requirements should be considered an addition to what is already required by the "),t("a",{attrs:{href:"https://api.openeo.org/#tag/EO-Data-Discovery/operation/describe-collection",target:"_blank",rel:"noopener noreferrer"}},[e._v("openEO API"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("When back-ends offer/mirror the same datasets, it is required to align names and metadata. For the following collections and metadata an agreement has been achieved. These are all Copernicus Missions, and the standard names refer to the archives prepared and distributed by ESA. If it is not possible/desirable to use this name as collection id, a 'common_name' can be added next to the 'id' property to identify the collection as a standard archive.")]),e._v(" "),t("ul",[t("li",[e._v("SENTINEL1_GRD")]),e._v(" "),t("li",[e._v("SENTINEL2_L1C")]),e._v(" "),t("li",[t("a",{attrs:{href:"#sentinel2-l2a"}},[e._v("SENTINEL2_L2A")])]),e._v(" "),t("li",[e._v("SENTINEL3_OLCI_L1B")])]),e._v(" "),t("h2",{attrs:{id:"sentinel2-l2a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sentinel2-l2a"}},[e._v("#")]),e._v(" Sentinel2-L2A")]),e._v(" "),t("p",[e._v("The common name for this collection is 'SENTINEL2_L2A'. It refers to the L2A products generated by the Sen2Cor software, which can be configured to be compatible with the ESA generated products. Note that the products in the ESA archive were also processed with different versions of Sen2Cor, so it is not possible to specify a very specific version or configuration of the processing chain.")]),e._v(" "),t("h3",{attrs:{id:"bands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bands"}},[e._v("#")]),e._v(" Bands")]),e._v(" "),t("p",[e._v("Band names for spectral bands follow the Bxx naming convention used by ESA. For example: B01, B02, B03, B08, B8A, B12")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("SCL")]),e._v(" = the Sen2Cor scene classification band")]),e._v(" "),t("li",[t("code",[e._v("approximateViewAzimuth")]),e._v(" = collective term for the mean and accurate viewing azimuth angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle ("),t("code",[e._v("viewAzimuthAngles")]),e._v(") or the mean angle ("),t("code",[e._v("viewAzimuthMean")]),e._v(") is explicitly specified, the data is processed on the backend that holds the specified band.")]),e._v(" "),t("li",[t("code",[e._v("viewZenithMean")]),e._v(" = collective term for the mean and accurate viewing zenith angle. Depending on which backend is processing the data, the mean angle (for Sentinel Hub) or the accurate angle (for Terrascope) is used. If the accurate angle ("),t("code",[e._v("viewZenithMean")]),e._v(") or the mean angle ("),t("code",[e._v("viewZenithAngles")]),e._v(") is explicitly specified, the data is processed on the backend that holds those bands.")]),e._v(" "),t("li",[t("code",[e._v("sunAzimuthAngles")]),e._v("/"),t("code",[e._v("sunZenithAngles")]),e._v(" = collective term for the exact sun azimuth and sun zenith angle.")])]),e._v(" "),t("h2",{attrs:{id:"common-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-properties"}},[e._v("#")]),e._v(" Common Properties")]),e._v(" "),t("p",[e._v("We list here a set of common properties, that can be relevant for multiple collections. Collections are strongly encouraged to use these properties instead of using a different name for the same property.")]),e._v(" "),t("h3",{attrs:{id:"common"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[e._v("#")]),e._v(" Common")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/stac-extensions/sat#satorbit_state",target:"_blank",rel:"noopener noreferrer"}},[e._v("sat:orbit_state"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/stac-extensions/sat#satrelative_orbit",target:"_blank",rel:"noopener noreferrer"}},[e._v("sat:relative_orbit"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"optical-instruments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optical-instruments"}},[e._v("#")]),e._v(" Optical instruments")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/stac-extensions/eo#eocloud_cover",target:"_blank",rel:"noopener noreferrer"}},[e._v("eo:cloud_cover"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);