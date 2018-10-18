'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$component) {
    _inherits(_default, _wepy$component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            send: true,
            phoneErr: false,
            isOccupy: false,
            codeErr: false,
            isSubmit: false,
            isFocus: false,
            second: 60,
            inputLen: 6,
            phoneNum: '',
            iptValue: '',
            timer: null
        }, _this.props = {
            errMsg: {
                type: String,
                default: ''
            },
            phoneStatus: {
                type: Boolean,
                default: false
            },
            codeStatus: {
                type: Boolean,
                default: false
            }
        }, _this.components = {}, _this.computed = {}, _this.methods = {
            close: function close() {
                this.$emit("closeModal");
            },
            inputPhoneNum: function inputPhoneNum(e) {
                this.phoneNum = e.detail.value;
                this.$apply();

                if (this.codeStatus) {
                    this.isSubmit = false;
                }

                if (this.phoneNum.length === 11 && this.iptValue.length === 6) {
                    this.isSubmit = true;
                } else {
                    this.isSubmit = false;
                }
                this.$apply();
            },
            sendMsg: function sendMsg() {
                var _this2 = this;

                this.second = 60;
                this.$apply();

                clearInterval(this.timer);

                var str = /^1\d{10}$/;
                if (this.phoneNum.length === 11) {

                    if (str.test(this.phoneNum)) {

                        //手机正则验证通过
                        this.phoneErr = false;
                        this.send = false;
                        this.$apply();
                        this.$emit('postPhoneNum', this.phoneNum);
                    } else {
                        //手机正则验证不通过
                        this.phoneErr = true;
                        this.send = true;
                        this.$apply();
                    }
                } else {
                    this.phoneErr = true;
                    this.send = true;
                    this.$apply();
                }

                this.timer = setInterval(function () {
                    _this2.second = _this2.second - 1;
                    _this2.$apply();

                    if (_this2.second <= 0) {
                        _this2.second = 60;
                        _this2.send = true;
                        _this2.$apply();
                    }
                    if (_this2.second === 60) {
                        clearInterval(_this2.timer);
                        _this2.$apply();
                    }
                }, 1000);
                this.$apply();
            },
            onFocus: function onFocus() {
                this.isFocus = true;
                this.$apply();
            },
            blurFocus: function blurFocus() {
                this.isFocus = false;
                this.$apply();
            },
            setCode: function setCode(e) {
                this.iptValue = e.detail.value;
                this.$apply();

                if (this.codeStatus) {
                    this.isSubmit = false;
                }
                if (this.phoneNum.length === 11 && this.iptValue.length === 6) {
                    this.isSubmit = true;
                } else {
                    this.isSubmit = false;
                }
                this.$apply();
            },
            onSubmit: function onSubmit() {
                this.$emit('postCaptcha', this.iptValue);
                this.send = true;
                clearInterval(this.timer);
                this.timer = null;
                this.second = 60;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return _default;
}(_wepy2.default.component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic2VuZCIsInBob25lRXJyIiwiaXNPY2N1cHkiLCJjb2RlRXJyIiwiaXNTdWJtaXQiLCJpc0ZvY3VzIiwic2Vjb25kIiwiaW5wdXRMZW4iLCJwaG9uZU51bSIsImlwdFZhbHVlIiwidGltZXIiLCJwcm9wcyIsImVyck1zZyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwicGhvbmVTdGF0dXMiLCJCb29sZWFuIiwiY29kZVN0YXR1cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjbG9zZSIsIiRlbWl0IiwiaW5wdXRQaG9uZU51bSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsIiRhcHBseSIsImxlbmd0aCIsInNlbmRNc2ciLCJjbGVhckludGVydmFsIiwic3RyIiwidGVzdCIsInNldEludGVydmFsIiwib25Gb2N1cyIsImJsdXJGb2N1cyIsInNldENvZGUiLCJvblN1Ym1pdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4TEFHSUEsSSxHQUFPO0FBQ0NDLGtCQUFNLElBRFA7QUFFQ0Msc0JBQVMsS0FGVjtBQUdDQyxzQkFBUyxLQUhWO0FBSUNDLHFCQUFRLEtBSlQ7QUFLQ0Msc0JBQVMsS0FMVjtBQU1DQyxxQkFBUSxLQU5UO0FBT0NDLG9CQUFRLEVBUFQ7QUFRQ0Msc0JBQVMsQ0FSVjtBQVNDQyxzQkFBVSxFQVRYO0FBVUNDLHNCQUFTLEVBVlY7QUFXQ0MsbUJBQU07QUFYUCxTLFFBY1BDLEssR0FBUTtBQUNKQyxvQkFBTztBQUNIQyxzQkFBS0MsTUFERjtBQUVIQyx5QkFBUTtBQUZMLGFBREg7QUFLSkMseUJBQVk7QUFDUkgsc0JBQUtJLE9BREc7QUFFUkYseUJBQVE7QUFGQSxhQUxSO0FBU0pHLHdCQUFXO0FBQ1BMLHNCQUFLSSxPQURFO0FBRVBGLHlCQUFRO0FBRkQ7QUFUUCxTLFFBZVJJLFUsR0FBYSxF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QixJQUFoQjtBQUNILGlCQUZELE1BRU87QUFDSCx5QkFBS0EsUUFBTCxHQUFnQixLQUFoQjtBQUNIO0FBQ0QscUJBQUt3QixNQUFMO0FBQ0gsYUF2Rks7QUF3Rk5VLG9CQXhGTSxzQkF3Rks7QUFDUCxxQkFBS2YsS0FBTCxDQUFXLGFBQVgsRUFBeUIsS0FBS2QsUUFBOUI7QUFDQSxxQkFBS1QsSUFBTCxHQUFZLElBQVo7QUFDQStCLDhCQUFjLEtBQUtyQixLQUFuQjtBQUNBLHFCQUFLQSxLQUFMLEdBQWEsSUFBYjtBQUNBLHFCQUFLSixNQUFMLEdBQWMsRUFBZDtBQUNBLHFCQUFLc0IsTUFBTDtBQUNIO0FBL0ZLLFM7Ozs7O2lDQWtHRCxDQUFFOzs7aUNBRUYsQ0FBRTs7OztFQXRJY1csZUFBS0MsUyIsImZpbGUiOiJwb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzZW5kOiB0cnVlLFxuICAgICAgICAgICAgcGhvbmVFcnI6ZmFsc2UsXG4gICAgICAgICAgICBpc09jY3VweTpmYWxzZSxcbiAgICAgICAgICAgIGNvZGVFcnI6ZmFsc2UsXG4gICAgICAgICAgICBpc1N1Ym1pdDpmYWxzZSxcbiAgICAgICAgICAgIGlzRm9jdXM6ZmFsc2UsXG4gICAgICAgICAgICBzZWNvbmQ6IDYwLFxuICAgICAgICAgICAgaW5wdXRMZW46NixcbiAgICAgICAgICAgIHBob25lTnVtOiAnJyxcbiAgICAgICAgICAgIGlwdFZhbHVlOicnLFxuICAgICAgICAgICAgdGltZXI6bnVsbCxcbiAgICB9O1xuXG4gICAgcHJvcHMgPSB7XG4gICAgICAgIGVyck1zZzp7XG4gICAgICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6JycsXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lU3RhdHVzOntcbiAgICAgICAgICAgIHR5cGU6Qm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6ZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvZGVTdGF0dXM6e1xuICAgICAgICAgICAgdHlwZTpCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDpmYWxzZSxcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wb25lbnRzID0ge307XG5cbiAgICBjb21wdXRlZCA9IHt9O1xuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xvc2VNb2RhbFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRQaG9uZU51bShlKSB7XG4gICAgICAgICAgICB0aGlzLnBob25lTnVtID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5jb2RlU3RhdHVzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmVOdW0ubGVuZ3RoID09PSAxMSAmJiB0aGlzLmlwdFZhbHVlLmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJtaXQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBzZW5kTXNnKCkge1xuXG4gICAgICAgICAgICB0aGlzLnNlY29uZCA9IDYwXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcblxuICAgICAgICAgICAgbGV0IHN0ciA9IC9eMVxcZHsxMH0kL1xuICAgICAgICAgICAgaWYodGhpcy5waG9uZU51bS5sZW5ndGggPT09IDExKXtcblxuICAgICAgICAgICAgICAgIGlmIChzdHIudGVzdCh0aGlzLnBob25lTnVtKSkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy/miYvmnLrmraPliJnpqozor4HpgJrov4dcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waG9uZUVyciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncG9zdFBob25lTnVtJyx0aGlzLnBob25lTnVtKVxuXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8v5omL5py65q2j5YiZ6aqM6K+B5LiN6YCa6L+HXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGhvbmVFcnIgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZUVyciA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gdGhpcy5zZWNvbmQgLSAxXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZWNvbmQgPD0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kID0gNjBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2Vjb25kID09PSA2MCl7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9jdXMoKXtcbiAgICAgICAgICAgIHRoaXMuaXNGb2N1cyA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgYmx1ckZvY3VzKCl7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXMgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9LFxuICAgICAgICBzZXRDb2RlKGUpe1xuICAgICAgICAgICAgdGhpcy5pcHRWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG5cbiAgICAgICAgICAgIGlmKHRoaXMuY29kZVN0YXR1cyl7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5waG9uZU51bS5sZW5ndGggPT09IDExICYmIHRoaXMuaXB0VmFsdWUubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1N1Ym1pdCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgncG9zdENhcHRjaGEnLHRoaXMuaXB0VmFsdWUpXG4gICAgICAgICAgICB0aGlzLnNlbmQgPSB0cnVlXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbFxuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSA2MFxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uU2hvdygpIHt9XG5cbiAgICBvbkxvYWQoKSB7fVxufVxuIl19