class BaseSettings {

  constructor() {
    this._settings = null;
    return this;
  }

  factory(name, func) {
    this._settings = func();
    return this;
  }

  get(name) {
    return this._settings.get(name);
  }

  finish() {
    return this;
  }
}

var temp = new BaseSettings().factory('$ionicCoreSettings', function() {
  "IONIC_SETTINGS_STRING_START";
  var settings = {"dev_push":false,"app_id":"df4807b5","api_key":"a07f715841d9e144227ed826059a3791d3ff33896938db6f","gcm_key":"69630578016"}; return { get: function(setting) { if (settings[setting]) { return settings[setting]; } return null; } }
  "IONIC_SETTINGS_STRING_END";
})

.finish();

export class Settings {

  constructor() {
    this._locations = {
      'api': 'https://apps.ionic.io',
      'push': 'https://push.ionic.io',
      'analytics': 'https://analytics.ionic.io',
      'deploy': 'https://apps.ionic.io',
      'platform-api': 'https://api.ionic.io'
    };
    this._devLocations = this.get('dev_locations');
    if (!this._devLocations) { this._devLocations = {}; }
  }

  get(name) {
    return temp.get(name);
  }

  getURL(name) {
    if (this._devLocations[name]) {
      return this._devLocations[name];
    } else if (this._locations[name]) {
      return this._locations[name];
    } else {
      return null;
    }
  }
}
