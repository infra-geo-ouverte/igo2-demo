import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IgoMap, LayerService, LanguageService, Feature, OverlayService } from 'igo2';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  public feature$ = new BehaviorSubject<Feature>(undefined);
  public map = new IgoMap();
  public mapView = {
    projection: 'EPSG:3857',
    center: [-72, 52],
    zoom: 6
  };

  constructor(public languageService: LanguageService,
              private layerService: LayerService,
              private overlayService: OverlayService) {}

  ngOnInit() {
    this.layerService.createAsyncLayer({
      type: 'osm',
      title: 'OSM'
    }).subscribe(layer => this.map.addLayer(layer));
  }

  handleFeatureFocus(feature: Feature) {
    this.feature$.next(feature);
    this.overlayService.setFeatures([feature], 'move');
  }

  handleFeatureSelect(feature: Feature) {
    this.feature$.next(feature);
    this.overlayService.setFeatures([feature], 'zoom');
  }

}
