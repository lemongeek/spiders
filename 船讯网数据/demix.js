var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function decode64(_0x3c74bc) {
    var _0x449637,
        _0x492ea8,
        _0x55ef96,
        _0x265e41,
        _0x870723,
        _0x2dbb70 = '',
        _0x3c80d2 = '',
        _0x48efc6 = '',
        _0x23c340 = 0x0;

    do {
        _0x55ef96 = keyStr["indexOf"](_0x3c74bc["charAt"](_0x23c340++)), _0x265e41 = keyStr["indexOf"](_0x3c74bc["charAt"](_0x23c340++)), _0x870723 = keyStr['indexOf'](_0x3c74bc["charAt"](_0x23c340++)), _0x48efc6 = keyStr["indexOf"](_0x3c74bc["charAt"](_0x23c340++)), _0x449637 = _0x55ef96 << 0x2 | _0x265e41 >> 0x4, _0x492ea8 = (0xf & _0x265e41) << 0x4 | _0x870723 >> 0x2, _0x3c80d2 = (0x3 & _0x870723) << 0x6 | _0x48efc6, _0x2dbb70 += String["fromCharCode"](_0x449637), 0x40 != _0x870723 && (_0x2dbb70 += String["fromCharCode"](_0x492ea8)), 0x40 != _0x48efc6 && (_0x2dbb70 += String["fromCharCode"](_0x3c80d2)), _0x449637 = _0x492ea8 = _0x3c80d2 = '', _0x55ef96 = _0x265e41 = _0x870723 = _0x48efc6 = '';
    } while (_0x23c340 < _0x3c74bc["length"]);

    return _0x2dbb70;
}
var StringAndByteUtil = {
    'stringToByte': function (_0x1568dd) {
        var _0x1966e4,
            _0x30f9b8,
            _0x2bd1aa = [];

        _0x1966e4 = _0x1568dd["length"];

        for (var _0xa661aa = 0x0; _0xa661aa < _0x1966e4; _0xa661aa++) _0x30f9b8 = _0x1568dd["charCodeAt"](_0xa661aa), _0x30f9b8 >= 0x10000 && _0x30f9b8 <= 0x10ffff ? (_0x2bd1aa["push"](_0x30f9b8 >> 0x12 & 0x7 | 0xf0), _0x2bd1aa["push"](_0x30f9b8 >> 0xc & 0x3f | 0x80), _0x2bd1aa["push"](_0x30f9b8 >> 0x6 & 0x3f | 0x80), _0x2bd1aa["push"](0x3f & _0x30f9b8 | 0x80)) : _0x30f9b8 >= 0x800 && _0x30f9b8 <= 0xffff ? (_0x2bd1aa['push'](_0x30f9b8 >> 0xc & 0xf | 0xe0), _0x2bd1aa["push"](_0x30f9b8 >> 0x6 & 0x3f | 0x80), _0x2bd1aa['push'](0x3f & _0x30f9b8 | 0x80)) : _0x30f9b8 >= 0x80 && _0x30f9b8 <= 0x7ff ? (_0x2bd1aa["push"](_0x30f9b8 >> 0x6 & 0x1f | 0xc0), _0x2bd1aa["push"](0x3f & _0x30f9b8 | 0x80)) : _0x2bd1aa['push'](0xff & _0x30f9b8);

        return _0x2bd1aa;
    },
    'byteToString': function (_0x19623c) {
        if ('string' == typeof _0x19623c) return _0x19623c;

        for (var _0x562aa2 = '', _0x194062 = _0x19623c, _0x2710eb = 0x0; _0x2710eb < _0x194062["length"]; _0x2710eb++) {
            var _0x384882 = _0x194062[_0x2710eb]['toString'](0x2),
                _0x4c33f4 = _0x384882["match"](/^1+?(?=0)/);

            if (_0x4c33f4 && 0x8 == _0x384882["length"]) {
                for (var _0x539c19 = _0x4c33f4[0x0]['length'], _0x522bb4 = _0x194062[_0x2710eb]['toString'](0x2)["slice"](0x7 - _0x539c19), _0x12992d = 0x1; _0x12992d < _0x539c19; _0x12992d++) _0x522bb4 += _0x194062[_0x12992d + _0x2710eb]["toString"](0x2)["slice"](0x2);

                _0x562aa2 += String["fromCharCode"](parseInt(_0x522bb4, 0x2)), _0x2710eb += _0x539c19 - 0x1;
            } else _0x562aa2 += String["fromCharCode"](_0x194062[_0x2710eb]);
        }

        return _0x562aa2;
    },
    'binayUtf8ToString': function (_0x44a1fb, _0x38b1f1, _0x278148) {
        var _0x131166 = 0x0,
            _0x3056ff = '',
            _0x37b9b3 = 0x0,
            _0x1e5f5a = 0x0;

        for (_0x131166 = _0x38b1f1; _0x131166 < _0x278148;) _0x1e5f5a = _0x44a1fb[_0x131166], _0x1e5f5a >>> 0x7 == 0x0 ? (_0x3056ff += String['fromCharCode'](_0x44a1fb[_0x131166]), _0x131166 += 0x1) : 0xfc == (0xfc & _0x1e5f5a) ? (_0x37b9b3 = (0x3 & _0x44a1fb[_0x131166]) << 0x1e, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x1]) << 0x18, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x2]) << 0x12, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x3]) << 0xc, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x4]) << 0x6, _0x37b9b3 |= 0x3f & _0x44a1fb[_0x131166 + 0x5], _0x3056ff += String["fromCharCode"](_0x37b9b3), _0x131166 += 0x6) : 0xf8 == (0xf8 & _0x1e5f5a) ? (_0x37b9b3 = (0x7 & _0x44a1fb[_0x131166]) << 0x18, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x1]) << 0x12, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x2]) << 0xc, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x3]) << 0x6, _0x37b9b3 |= 0x3f & _0x44a1fb[_0x131166 + 0x4], _0x3056ff += String["fromCharCode"](_0x37b9b3), _0x131166 += 0x5) : 0xf0 == (0xf0 & _0x1e5f5a) ? (_0x37b9b3 = (0xf & _0x44a1fb[_0x131166]) << 0x12, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x1]) << 0xc, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x2]) << 0x6, _0x37b9b3 |= 0x3f & _0x44a1fb[_0x131166 + 0x3], _0x3056ff += String["fromCharCode"](_0x37b9b3), _0x131166 += 0x4) : 0xe0 == (0xe0 & _0x1e5f5a) ? (_0x37b9b3 = (0x1f & _0x44a1fb[_0x131166]) << 0xc, _0x37b9b3 |= (0x3f & _0x44a1fb[_0x131166 + 0x1]) << 0x6, _0x37b9b3 |= 0x3f & _0x44a1fb[_0x131166 + 0x2], _0x3056ff += String["fromCharCode"](_0x37b9b3), _0x131166 += 0x3) : 0xc0 == (0xc0 & _0x1e5f5a) ? (_0x37b9b3 = (0x3f & _0x44a1fb[_0x131166]) << 0x6, _0x37b9b3 |= 0x3f & _0x44a1fb[_0x131166 + 0x1], _0x3056ff += String["fromCharCode"](_0x37b9b3), _0x131166 += 0x2) : (_0x3056ff += String["fromCharCode"](_0x44a1fb[_0x131166]), _0x131166 += 0x1);

        return _0x3056ff;
    },
    'unicodeToUtf8': function (_0x3e1c9a) {
        var _0x5adbe1,
            _0x134d76,
            _0x3e0f66,
            _0x71779 = '';

        for (_0x134d76 = _0x3e1c9a["length"], _0x5adbe1 = 0x0; _0x5adbe1 < _0x134d76; _0x5adbe1++) _0x3e0f66 = _0x3e1c9a["charCodeAt"](_0x5adbe1), _0x3e0f66 >= 0x0 && _0x3e0f66 <= 0x7f ? _0x71779 += _0x3e1c9a['charAt'](_0x5adbe1) : _0x3e0f66 >= 0x80 && _0x3e0f66 <= 0x7ff ? (_0x71779 += String["fromCharCode"](0xc0 | _0x3e0f66 >> 0x6 & 0x1f), _0x71779 += String["fromCharCode"](0x80 | 0x3f & _0x3e0f66)) : _0x3e0f66 >= 0x800 && _0x3e0f66 <= 0xffff ? (_0x71779 += String["fromCharCode"](0xe0 | _0x3e0f66 >> 0xc & 0xf), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0x6 & 0x3f), _0x71779 += String['fromCharCode'](0x80 | 0x3f & _0x3e0f66)) : _0x3e0f66 >= 0x10000 && _0x3e0f66 <= 0x1fffff ? (_0x71779 += String['fromCharCode'](0xf0 | _0x3e0f66 >> 0x12 & 0x7), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0xc & 0x3f), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0x6 & 0x3f), _0x71779 += String["fromCharCode"](0x80 | 0x3f & _0x3e0f66)) : _0x3e0f66 >= 0x200000 && _0x3e0f66 <= 0x3ffffff ? (_0x71779 += String["fromCharCode"](0xf8 | _0x3e0f66 >> 0x18 & 0x3), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0x12 & 0x3f), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0xc & 0x3f), _0x71779 += String['fromCharCode'](0x80 | _0x3e0f66 >> 0x6 & 0x3f), _0x71779 += String["fromCharCode"](0x80 | 0x3f & _0x3e0f66)) : _0x3e0f66 >= 0x4000000 && _0x3e0f66 <= 0x7fffffff && (_0x71779 += String["fromCharCode"](0xfc | _0x3e0f66 >> 0x1e & 0x1), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0x18 & 0x3f), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0x12 & 0x3f), _0x71779 += String['fromCharCode'](0x80 | _0x3e0f66 >> 0xc & 0x3f), _0x71779 += String["fromCharCode"](0x80 | _0x3e0f66 >> 0x6 & 0x3f), _0x71779 += String["fromCharCode"](0x80 | 0x3f & _0x3e0f66));

        return _0x71779;
    },
    'Gb2312ToUtf8': function (_0xda32b0) {
        var _0x1aeb46 = escape(_0xda32b0),
            _0x44bcea = _0x1aeb46["split"]('%'),
            _0x18e7b5 = '';

        '' != _0x44bcea[0x0] && (_0x18e7b5 = _0x44bcea[0x0]);

        for (var _0x33aca6 = 0x1; _0x33aca6 < _0x44bcea['length']; _0x33aca6++) 'u' == _0x44bcea[_0x33aca6]["substring"](0x0, 0x1) ? (_0x18e7b5 += this["Hex2Utf8"](this["Str2Hex"](_0x44bcea[_0x33aca6]["substring"](0x1, 0x5))), _0x44bcea[_0x33aca6]["length"] && (_0x18e7b5 += _0x44bcea[_0x33aca6]["substring"](0x5))) : (_0x18e7b5 += unescape('%' + _0x44bcea[_0x33aca6]), _0x44bcea[_0x33aca6]['length'] && (_0x18e7b5 += _0x44bcea[_0x33aca6]['substring'](0x5)));

        return _0x18e7b5;
    },
    'Utf8ToGb2312': function (_0x3caf89) {
        var _0x36318e = '',
            _0x194a7d = '',
            _0x88301 = '',
            _0x33472a = '',
            _0x5ac11d = -0x1;

        if (-0x1 == (_0x5ac11d = _0x3caf89['indexOf']('%'))) return _0x3caf89;

        for (; -0x1 != _0x5ac11d;) {
            if (_0x5ac11d < 0x3) {
                if (_0x36318e += _0x3caf89["substr"](0x0, _0x5ac11d - 0x1), _0x3caf89 = _0x3caf89["substr"](_0x5ac11d + 0x1, _0x3caf89["length"] - _0x5ac11d), _0x194a7d = _0x3caf89["substr"](0x0, 0x2), _0x3caf89 = _0x3caf89["substr"](0x2, _0x3caf89["length"] - 0x2), !0x1 & parseInt('0x' + _0x194a7d)) _0x36318e += String['fromCharCode'](parseInt('0x' + _0x194a7d));else if (!0x1 & parseInt('0x' + _0x194a7d)) {
                    _0x88301 = _0x3caf89['substr'](0x1, 0x2), _0x3caf89 = _0x3caf89["substr"](0x3, _0x3caf89["length"] - 0x3);

                    var _0x1a0128 = (0x1f & parseInt('0x' + _0x194a7d)) << 0x6;

                    _0x1a0128 |= 0x3f & parseInt('0x' + _0x88301), _0x36318e += String["fromCharCode"](_0x1a0128);
                } else {
                    _0x88301 = _0x3caf89["substr"](0x1, 0x2), _0x3caf89 = _0x3caf89["substr"](0x3, _0x3caf89["length"] - 0x3), _0x33472a = _0x3caf89["substr"](0x1, 0x2), _0x3caf89 = _0x3caf89["substr"](0x3, _0x3caf89["length"] - 0x3);

                    var _0x1a0128 = (0xf & parseInt('0x' + _0x194a7d)) << 0xc;

                    _0x1a0128 |= (0x3f & parseInt('0x' + _0x88301)) << 0x6, _0x1a0128 |= 0x3f & parseInt('0x' + _0x33472a), _0x36318e += String['fromCharCode'](_0x1a0128);
                }
            } else _0x36318e += _0x3caf89["substring"](0x0, _0x5ac11d), _0x3caf89 = _0x3caf89["substring"](_0x5ac11d);
            _0x5ac11d = _0x3caf89['indexOf']('%');
        }

        return _0x36318e + _0x3caf89;
    },
    'Dig2Dec': function (_0x5b9d6c) {
        var _0x494690 = 0x0;

        if (0x4 == _0x5b9d6c["length"]) {
            for (var _0x4da9dc = 0x0; _0x4da9dc < 0x4; _0x4da9dc++) _0x494690 += eval(_0x5b9d6c["charAt"](_0x4da9dc)) * Math["pow"](0x2, 0x3 - _0x4da9dc);

            return _0x494690;
        }

        return -0x1;
    },
    'Hex2Utf8': function (_0x286dbc) {
        var _0x2ba447 = '',
            _0x3317b4 = '',
            _0x4861df = '';

        if (0x10 == _0x286dbc["length"]) {
            _0x3317b4 = '1110' + _0x286dbc["substring"](0x0, 0x4), _0x3317b4 += '10' + _0x286dbc["substring"](0x4, 0xa), _0x3317b4 += '10' + _0x286dbc["substring"](0xa, 0x10);

            for (var _0x131a33 = '0123456789ABCDEF', _0x83abbb = 0x0; _0x83abbb < 0x3; _0x83abbb++) _0x2ba447 += '%', _0x4861df = _0x3317b4["substring"](0x8 * _0x83abbb, 0x8 * (eval(_0x83abbb) + 0x1)), _0x2ba447 += _0x131a33["charAt"](this["Dig2Dec"](_0x4861df['substring'](0x0, 0x4))), _0x2ba447 += _0x131a33["charAt"](this["Dig2Dec"](_0x4861df["substring"](0x4, 0x8)));

            return _0x2ba447;
        }

        return '';
    },
    'Dec2Dig': function (_0x1bf534) {
        for (var _0x269b6c = '', _0x106c50 = 0x0, _0x5db944 = 0x0; _0x5db944 < 0x4; _0x5db944++) _0x106c50 = Math["pow"](0x2, 0x3 - _0x5db944), _0x1bf534 >= _0x106c50 ? (_0x269b6c += '1', _0x1bf534 -= _0x106c50) : _0x269b6c += '0';

        return _0x269b6c;
    },
    'Str2Hex': function (_0x30d643) {
        for (var _0x3e4bff = '', _0x335890, _0x196377 = '0123456789ABCDEF', _0xd15506 = '', _0x15c31a = 0x0; _0x15c31a < _0x30d643["length"]; _0x15c31a++) _0x3e4bff = _0x30d643["charAt"](_0x15c31a), _0x335890 = _0x196377["indexOf"](_0x3e4bff), _0xd15506 += this["Dec2Dig"](eval(_0x335890));

        return _0xd15506;
    }
};
function CanvasShip() {
    this['source'] = void 0x0, this["mmsi"] = void 0x0, this["shipid"] = void 0x0, this['terminalid'] = void 0x0, this["terminaltype"] = void 0x0, this['lng'] = void 0x0, this['lat'] = void 0x0, this["hdg"] = void 0x0, this["cog"] = void 0x0, this['sog'] = void 0x0, this["rot"] = void 0x0, this["navistatus"] = void 0x0, this["lastdyn"] = void 0x0, this["lastdyn_active"] = !0x0, this["type"] = void 0x0, this["name"] = void 0x0, this["cnname"] = void 0x0, this["callsign"] = void 0x0, this['imo'] = void 0x0, this["length"] = void 0x0, this["width"] = void 0x0, this['left'] = void 0x0, this["trail"] = void 0x0, this["draught"] = void 0x0, this["dest"] = void 0x0, this["eta"] = void 0x0, this['laststa'] = void 0x0, this["tracks"] = [], this["istop"] = !0x1, this["color"] = void 0x0, this["state"] = 0x2, this["updateState"] = function (_0x3114d8) {
        var _0x17223d = this,
            _0x366f08 = _0x3114d8 - _0x17223d['lastdyn'],
            _0x227f4a = 0x1 === _0x17223d["source"] ? 0x54600 : 0x1c20;

        _0x17223d['state'] = _0x366f08 < 0x708 ? 0x0 : _0x366f08 < _0x227f4a ? 0x1 : 0x2;
    }, this["pointCenterReal"] = void 0x0, this['pointCenterGPS'] = void 0x0, this["latlngReal"] = void 0x0, this['latlng'] = void 0x0, this['getLatlng'] = function () {
        return new L["LatLng"](this['lat'], this["lng"]);
    }, this["setLatlng"] = function (_0x5b8e92) {
        this["latlng"] = _0x5b8e92;
    }, this['x'] = void 0x0, this['y'] = void 0x0, this["getPoint"] = function () {
        return new L["Point"](this['x'], this['y']);
    }, this["setPoint"] = function (_0x5d2340) {
        this['x'] = _0x5d2340['x'], this['y'] = _0x5d2340['y'];
    }, this['lineWidth'] = 0x1, this["rotate"] = 0x0, this["bodyArea"] = void 0x0, this["head_x"] = void 0x0, this["head_y"] = void 0x0, this['shiptype'] = void 0x0, this["datapower"] = void 0x0, this["is_yh"] = void 0x0, this["outCN"] = void 0x0, this["offset"] = 0x0, this["country"] = void 0x0, this["txt_color"] = void 0x0, this["newtype"] = void 0x0, this["lineColor"] = void 0x0, this["heightLineColor"] = void 0x0, this["options"] = void 0x0, this['seaareaid'] = void 0x0;
}
function getHeight4(_0x56354c) {
    return (0xf0 & _0x56354c) >> 0x4;
}
function isEmpty(_0x5afc7d) {
    return null == _0x5afc7d || 0x0 == (_0x5afc7d + '')["length"];
}
function xTo360(_0x772374) {
    if (isEmpty(_0x772374)) return _0x772374;

    for (_0x772374 = Number(_0x772374); _0x772374 > 0x168;) _0x772374 -= 0x168;

    for (; _0x772374 < -0x168;) _0x772374 += 0x168;

    return _0x772374;
}
function getLow4(_0x6a4fed) {
    return 0xf & _0x6a4fed;
}
a3d = {}
Class = function () {}
Class["extend"] = function (_0x5a9fc6) {
    function _0x2afe92() {
        !_0x2c09f8 && this["init"] && this["init"]["apply"](this, arguments);
    }

    var _0x96fb11 = this["prototype"];
    _0x2c09f8 = !0x0;

    var _0x168520 = new this();

    _0x2c09f8 = !0x1;

    for (var _0x319388 in _0x5a9fc6) _0x168520[_0x319388] = 'function' == typeof _0x5a9fc6[_0x319388] && "function" == typeof _0x96fb11[_0x319388] && _0x3348ad["test"](_0x5a9fc6[_0x319388]) ? function (_0x242784, _0x3a3cba) {
        return function () {
            var _0x4e83e3 = this["_super"];
            this['_super'] = _0x96fb11[_0x242784];

            var _0x2374c1 = _0x3a3cba['apply'](this, arguments);

            return this["_super"] = _0x4e83e3, _0x2374c1;
        };
    }(_0x319388, _0x5a9fc6[_0x319388]) : _0x5a9fc6[_0x319388];

    return _0x2afe92["prototype"] = _0x168520, _0x2afe92['constructor'] = _0x2afe92, _0x2afe92["extend"] = arguments["callee"], _0x2afe92;
};
a3d["Endian"] = {
    'BIG': 0x0,
    'LITTLE': 0x1
}, a3d["ByteArray"] = Class["extend"]({
        'data': '',
        'length': 0x0,
        'pos': 0x0,
        'pow': Math["pow"],
        'endian': a3d["Endian"]["BIG"],
        'TWOeN23': Math['pow'](0x2, -0x17),
        'TWOeN52': Math["pow"](0x2, -0x34),
        'init': function (_0xc574c1, _0x32eea2) {
            this['data'] = void 0x0 !== _0xc574c1 ? _0xc574c1 : '', void 0x0 !== _0x32eea2 && (this['endian'] = _0x32eea2), this["length"] = _0xc574c1['length'];

            var _0x1cf77a = _0x32eea2 == a3d["Endian"]['BIG'] ? 'BE' : 'LE',
                _0xe2f8f7 = ["readInt32", 'readInt16', 'readUInt32', 'readUInt16', "readFloat32", "readFloat64"];

            for (var _0x2f914f in _0xe2f8f7) this[_0xe2f8f7[_0x2f914f]] = this[_0xe2f8f7[_0x2f914f] + _0x1cf77a];

            var _0x1ef00e = {
                'readUnsignedByte': "readByte",
                'readUnsignedInt': "readUInt32",
                'readFloat': 'readFloat32',
                'readDouble': "readFloat64",
                'readShort': "readInt16",
                'readBoolean': "readBool",
                'readInt': 'readInt32'
            };

            for (var _0x2f914f in _0x1ef00e) this[_0x2f914f] = this[_0x1ef00e[_0x2f914f]];
        },
        'readByte': function () {
            return 0xff & this["data"]["charCodeAt"](this["pos"]++);
        },
        'readBool': function () {
            return !!(0xff & this["data"]["charCodeAt"](this["pos"]++));
        },
        'readUInt32BE': function () {
            var _0x5c587c = this["data"],
                _0x2eee75 = (this['pos'] += 0x4) - 0x4;

            return (0xff & _0x5c587c["charCodeAt"](_0x2eee75)) << 0x18 | (0xff & _0x5c587c["charCodeAt"](++_0x2eee75)) << 0x10 | (0xff & _0x5c587c["charCodeAt"](++_0x2eee75)) << 0x8 | 0xff & _0x5c587c["charCodeAt"](++_0x2eee75);
        },
        'readInt32BE': function () {
            var _0x261342 = this['data'],
                _0x5b5b97 = (this["pos"] += 0x4) - 0x4,
                _0x4ab93d = (0xff & _0x261342["charCodeAt"](_0x5b5b97)) << 0x18 | (0xff & _0x261342['charCodeAt'](++_0x5b5b97)) << 0x10 | (0xff & _0x261342["charCodeAt"](++_0x5b5b97)) << 0x8 | 0xff & _0x261342["charCodeAt"](++_0x5b5b97);

            return _0x4ab93d >= 0x80000000 ? _0x4ab93d - 0x100000000 : _0x4ab93d;
        },
        'readUInt16BE': function () {
            var _0x5d64fe = this['data'],
                _0x2d529f = (this["pos"] += 0x2) - 0x2;

            return (0xff & _0x5d64fe["charCodeAt"](_0x2d529f)) << 0x8 | 0xff & _0x5d64fe["charCodeAt"](++_0x2d529f);
        },
        'readInt16BE': function () {
            var _0x17e41a = this["data"],
                _0x574fec = (this['pos'] += 0x2) - 0x2,
                _0x3b2516 = (0xff & _0x17e41a["charCodeAt"](_0x574fec)) << 0x8 | 0xff & _0x17e41a["charCodeAt"](++_0x574fec);

            return _0x3b2516 >= 0x8000 ? _0x3b2516 - 0x10000 : _0x3b2516;
        },
        'readFloat32BE': function () {
            var _0x1f733d = this["data"],
                _0x829772 = (this["pos"] += 0x4) - 0x4,
                _0x315da0 = 0xff & _0x1f733d["charCodeAt"](_0x829772),
                _0x4a6a43 = 0xff & _0x1f733d['charCodeAt'](++_0x829772),
                _0x3bb078 = 0xff & _0x1f733d["charCodeAt"](++_0x829772),
                _0x47b350 = 0xff & _0x1f733d['charCodeAt'](++_0x829772),
                _0x5f24e0 = 0x1 - (_0x315da0 >> 0x7 << 0x1),
                _0xea2ec7 = (_0x315da0 << 0x1 & 0xff | _0x4a6a43 >> 0x7) - 0x7f,
                _0x33fede = (0x7f & _0x4a6a43) << 0x10 | _0x3bb078 << 0x8 | _0x47b350;

            return 0x0 == _0x33fede && -0x7f == _0xea2ec7 ? 0x0 : _0x5f24e0 * (0x1 + this['TWOeN23'] * _0x33fede) * this["pow"](0x2, _0xea2ec7);
        },
        'readFloat64BE': function () {
            var _0x4b9e56 = this["data"],
                _0x47080a = (this["pos"] += 0x8) - 0x8,
                _0x4f705c = 0xff & _0x4b9e56["charCodeAt"](_0x47080a),
                _0x5ba7cd = 0xff & _0x4b9e56["charCodeAt"](++_0x47080a),
                _0x5a094d = 0xff & _0x4b9e56['charCodeAt'](++_0x47080a),
                _0x459919 = 0xff & _0x4b9e56["charCodeAt"](++_0x47080a),
                _0x27bdb0 = 0xff & _0x4b9e56["charCodeAt"](++_0x47080a),
                _0x220299 = 0xff & _0x4b9e56["charCodeAt"](++_0x47080a),
                _0x477e71 = 0xff & _0x4b9e56["charCodeAt"](++_0x47080a),
                _0x18d7f3 = 0xff & _0x4b9e56["charCodeAt"](++_0x47080a),
                _0x4878a6 = 0x1 - (_0x4f705c >> 0x7 << 0x1),
                _0x29fb00 = (_0x4f705c << 0x4 & 0x7ff | _0x5ba7cd >> 0x4) - 0x3ff,
                _0xfe579b = ((0xf & _0x5ba7cd) << 0x10 | _0x5a094d << 0x8 | _0x459919)["toString"](0x2) + (_0x27bdb0 >> 0x7 ? '1' : '0') + ((0x7f & _0x27bdb0) << 0x18 | _0x220299 << 0x10 | _0x477e71 << 0x8 | _0x18d7f3)['toString'](0x2);

            return _0xfe579b = parseInt(_0xfe579b, 0x2), 0x0 == _0xfe579b && -0x3ff == _0x29fb00 ? 0x0 : _0x4878a6 * (0x1 + this['TWOeN52'] * _0xfe579b) * this["pow"](0x2, _0x29fb00);
        },
        'readUInt32LE': function () {
            var _0x3e36d1 = this['data'],
                _0x59f705 = this["pos"] += 0x4;

            return (0xff & _0x3e36d1["charCodeAt"](--_0x59f705)) << 0x18 | (0xff & _0x3e36d1["charCodeAt"](--_0x59f705)) << 0x10 | (0xff & _0x3e36d1["charCodeAt"](--_0x59f705)) << 0x8 | 0xff & _0x3e36d1["charCodeAt"](--_0x59f705);
        },
        'readInt32LE': function () {
            var _0x3ca8e4 = this['data'],
                _0x11106e = this["pos"] += 0x4,
                _0x158dab = (0xff & _0x3ca8e4["charCodeAt"](--_0x11106e)) << 0x18 | (0xff & _0x3ca8e4["charCodeAt"](--_0x11106e)) << 0x10 | (0xff & _0x3ca8e4["charCodeAt"](--_0x11106e)) << 0x8 | 0xff & _0x3ca8e4["charCodeAt"](--_0x11106e);

            return _0x158dab >= 0x80000000 ? _0x158dab - 0x100000000 : _0x158dab;
        },
        'readUInt16LE': function () {
            var _0x1242b6 = this["data"],
                _0x433f42 = this["pos"] += 0x2;

            return (0xff & _0x1242b6["charCodeAt"](--_0x433f42)) << 0x8 | 0xff & _0x1242b6["charCodeAt"](--_0x433f42);
        },
        'readInt16LE': function () {
            var _0x27983a = this['data'],
                _0x297af5 = this["pos"] += 0x2,
                _0x3a9800 = (0xff & _0x27983a["charCodeAt"](--_0x297af5)) << 0x8 | 0xff & _0x27983a["charCodeAt"](--_0x297af5);

            return _0x3a9800 >= 0x8000 ? _0x3a9800 - 0x10000 : _0x3a9800;
        },
        'readFloat32LE': function () {
            var _0x1a8ad2 = this["data"],
                _0x249b60 = this["pos"] += 0x4,
                _0x1214f8 = 0xff & _0x1a8ad2["charCodeAt"](--_0x249b60),
                _0x327f7d = 0xff & _0x1a8ad2["charCodeAt"](--_0x249b60),
                _0x45fb5e = 0xff & _0x1a8ad2["charCodeAt"](--_0x249b60),
                _0x2d439e = 0xff & _0x1a8ad2['charCodeAt'](--_0x249b60),
                _0x5adf73 = 0x1 - (_0x1214f8 >> 0x7 << 0x1),
                _0x312c72 = (_0x1214f8 << 0x1 & 0xff | _0x327f7d >> 0x7) - 0x7f,
                _0x107fe9 = (0x7f & _0x327f7d) << 0x10 | _0x45fb5e << 0x8 | _0x2d439e;

            return 0x0 == _0x107fe9 && -0x7f == _0x312c72 ? 0x0 : _0x5adf73 * (0x1 + this['TWOeN23'] * _0x107fe9) * this["pow"](0x2, _0x312c72);
        },
        'readFloat64LE': function () {
            var _0x416b18 = this["data"],
                _0x3ff808 = this["pos"] += 0x8,
                _0x11c1e6 = 0xff & _0x416b18['charCodeAt'](--_0x3ff808),
                _0x20fad9 = 0xff & _0x416b18["charCodeAt"](--_0x3ff808),
                _0x2af473 = 0xff & _0x416b18["charCodeAt"](--_0x3ff808),
                _0x1eb13c = 0xff & _0x416b18["charCodeAt"](--_0x3ff808),
                _0x554a54 = 0xff & _0x416b18['charCodeAt'](--_0x3ff808),
                _0x3bb11c = 0xff & _0x416b18["charCodeAt"](--_0x3ff808),
                _0x425586 = 0xff & _0x416b18["charCodeAt"](--_0x3ff808),
                _0x59ca45 = 0xff & _0x416b18["charCodeAt"](--_0x3ff808),
                _0x287b2c = 0x1 - (_0x11c1e6 >> 0x7 << 0x1),
                _0x40fc4f = (_0x11c1e6 << 0x4 & 0x7ff | _0x20fad9 >> 0x4) - 0x3ff,
                _0x478508 = ((0xf & _0x20fad9) << 0x10 | _0x2af473 << 0x8 | _0x1eb13c)["toString"](0x2) + (_0x554a54 >> 0x7 ? '1' : '0') + ((0x7f & _0x554a54) << 0x18 | _0x3bb11c << 0x10 | _0x425586 << 0x8 | _0x59ca45)["toString"](0x2);

            return _0x478508 = parseInt(_0x478508, 0x2), 0x0 == _0x478508 && -0x3ff == _0x40fc4f ? 0x0 : _0x287b2c * (0x1 + this["TWOeN52"] * _0x478508) * this["pow"](0x2, _0x40fc4f);
        },
        'readUInt64LE': function () {
            var _0x59f63d = this["data"],
                _0x313d58 = this["pos"],
                _0x30bde8 = (0xff & _0x59f63d['charCodeAt'](_0x313d58 + 0x3)) << 0x18 | (0xff & _0x59f63d['charCodeAt'](_0x313d58 + 0x2)) << 0x10 | (0xff & _0x59f63d['charCodeAt'](_0x313d58 + 0x1)) << 0x8 | 0xff & _0x59f63d['charCodeAt'](_0x313d58),
                _0x247897 = (0xff & _0x59f63d["charCodeAt"](_0x313d58 + 0x7)) << 0x18 | (0xff & _0x59f63d['charCodeAt'](_0x313d58 + 0x6)) << 0x10 | (0xff & _0x59f63d["charCodeAt"](_0x313d58 + 0x5)) << 0x8 | 0xff & _0x59f63d['charCodeAt'](_0x313d58 + 0x4);

            return this["pos"] += 0x8, 0x10000 * _0x247897 * 0x10000 + _0x30bde8;
        },
        'readInt64LE': function () {
            var _0x5678c1 = this["data"],
                _0x2c5818 = this["pos"],
                _0x5b80f6 = (0xff & _0x5678c1['charCodeAt'](_0x2c5818 + 0x3)) << 0x18 | (0xff & _0x5678c1["charCodeAt"](_0x2c5818 + 0x2)) << 0x10 | (0xff & _0x5678c1["charCodeAt"](_0x2c5818 + 0x1)) << 0x8 | 0xff & _0x5678c1["charCodeAt"](_0x2c5818),
                _0x3c380c = (0xff & _0x5678c1["charCodeAt"](_0x2c5818 + 0x7)) << 0x18 | (0xff & _0x5678c1["charCodeAt"](_0x2c5818 + 0x6)) << 0x10 | (0xff & _0x5678c1['charCodeAt'](_0x2c5818 + 0x5)) << 0x8 | 0xff & _0x5678c1['charCodeAt'](_0x2c5818 + 0x4);

            this['pos'] += 0x8;

            var _0x56b1c4 = 0x10000 * _0x3c380c * 0x10000 + _0x5b80f6;

            return _0x56b1c4 > 0x8000000000000000 && (_0x56b1c4 -= 0x10000000000000000), _0x56b1c4;
        },
        'readUTF': function () {
            for (var _0x6f2a3c = this['readUInt16LE'](), _0x3952c6 = []; _0x6f2a3c > 0x0;) {
                var _0x54ee43 = this["readByte"]();

                _0x3952c6["push"](_0x54ee43), _0x6f2a3c--;
            }

            return StringAndByteUtil["byteToString"](_0x3952c6);
        }
    })
function p(_0x629a48, _0x4c9458) {
    var _0x3ea1d2 = new Date()["getTime"](),
        _0x57f504 = decode64(_0x629a48),
        _0x4c1b67 = {},
        _0x2ac6e5 = new a3d["ByteArray"](_0x57f504, a3d["Endian"]["LITTLE"]);

    if (_0x4c1b67['status'] = _0x2ac6e5["readUInt16LE"](), 0x0 !== _0x4c1b67["status"]) return _0x4c1b67;
    _0x4c1b67['continue'] = _0x2ac6e5['readByte'](), _0x4c1b67["serverTime"] = _0x2ac6e5["readUInt64LE"](), _0x4c1b67["scode"] = _0x2ac6e5["readUInt32LE"]();

    for (var _0x445276, _0x358291 = _0x2ac6e5["readUInt32LE"](), _0x51af6d = [], _0x196b89 = 0x0; _0x196b89 < _0x358291; _0x196b89++) {
        _0x445276 = new CanvasShip(), _0x445276["shiptype"] = _0x4c9458, _0x445276["mmsi"] = _0x2ac6e5["readUInt32LE"](), _0x445276["shipid"] = _0x2ac6e5["readUTF"]();

        var _0x13bc73 = _0x2ac6e5["readByte"](),
            _0x3cd0b6 = getHeight4(_0x13bc73);

        0x1 == _0x3cd0b6 ? (_0x445276["mmsi"] = null, _0x445276["source"] = 0x1) : _0x445276["source"] = 0x2 == _0x3cd0b6 ? 0x1 : _0x3cd0b6;

        var _0x5c682c = getLow4(_0x13bc73),
            _0x20129b = 0x1 === _0x445276["source"] ? 0x54600 : 0x1c20,
            _0x5d5a25 = 0x12c;

        0x1 == _0x5c682c && (_0x445276['state_color'] = 0x0, _0x445276["lastdyn"] = _0x4c1b67["serverTime"] - 0x708 + (0x708 - _0x5d5a25)), 0x2 == _0x5c682c && (_0x445276["state_color"] = 0x1, _0x445276["lastdyn"] = _0x4c1b67["serverTime"] - _0x20129b + (_0x20129b - _0x5d5a25 - 0x708)), 0x3 == _0x5c682c && (_0x445276['state_color'] = 0x2, _0x445276["lastdyn"] = _0x4c1b67["serverTime"] - _0x20129b - _0x5d5a25), _0x445276["lng"] = _0x2ac6e5['readInt32LE']() / 0xf4240, _0x445276['lat'] = _0x2ac6e5["readInt32LE"]() / 0xf4240, _0x445276["hdg"] = _0x2ac6e5["readUInt16LE"]() / 0x64, 0x1ff === _0x445276['hdg'] && (_0x445276["hdg"] = 0x0), _0x445276["hdg"] = xTo360(_0x445276["hdg"]), _0x445276["hdg"] = Number(_0x445276["hdg"]['toFixed'](0x2)), _0x445276["cog"] = _0x2ac6e5["readUInt16LE"]() / 0x64, 0x1ff === _0x445276["cog"] && (_0x445276["cog"] = 0x0), _0x445276["cog"] = xTo360(_0x445276["cog"]), _0x445276["cog"] = Number(_0x445276['cog']["toFixed"](0x2)), _0x445276["sog"] = _0x2ac6e5['readUInt16LE']() / 0x202, 0x1ff === _0x445276["sog"] && (_0x445276["sog"] = 0x0), _0x445276['sog'] = Number(_0x445276["sog"]["toFixed"](0x2)), _0x445276["rot"] = _0x2ac6e5["readInt16LE"]() / 0x64, (_0x445276['rot'] > 0xc || _0x445276["rot"] < -0xc) && (_0x445276["rot"] = void 0x0), _0x445276["sog"] = Number(_0x445276['sog']["toFixed"](0x2)), _0x445276['type'] = _0x2ac6e5["readByte"](), _0x445276['length'] = _0x2ac6e5["readUInt16LE"]() / 0xa, _0x445276["lastdyn_active"] = !0x1, _0x51af6d['push'](_0x445276);
    }

    return _0x4c1b67['data'] = _0x51af6d;
}
