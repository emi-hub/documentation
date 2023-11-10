import openeo
from openeo.extra.spectral_indices.spectral_indices import append_indices
from openeo.processes import if_, exp, array_element,log, count, gte, eq, sum
import folium
import numpy as np
from folium import plugins, GeoJson
import geopandas as gpd
import os
import rasterio
from rasterio.warp import calculate_default_transform, reproject, Resampling
import matplotlib.pyplot as plt
from datetime import date, datetime
from dateutil.relativedelta import *
import rioxarray
import xarray as xr
import glob
from IPython.display import display
from traitlets import traitlets
import ipywidgets as widgets 
from ipywidgets import interact, interactive, fixed, interact_manual
import warnings

connection = openeo.connect("openeo-dev.vito.be").authenticate_oidc()  #openeo.cloud  #openeo-dev.vito.be
