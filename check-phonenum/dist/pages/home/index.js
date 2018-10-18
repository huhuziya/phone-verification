'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _pop = require('./components/pop.js');

var _pop2 = _interopRequireDefault(_pop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '手机短信验证'
        }, _this.$repeat = {}, _this.$props = { "Pop": { "xmlns:wx": "", "xmlns:v-bind": "", "v-bind:errMsg.sync": "errMsg", "v-bind:phoneStatus.sync": "phoneStatus", "v-bind:codeStatus.sync": "codeStatus" } }, _this.$events = {}, _this.components = {
            Pop: _pop2.default
        }, _this.data = {
            isShowPop: true,
            errMsg: '',
            phoneStatus: false,
            codeStatus: false
        }, _this.computed = {}, _this.methods = {
            showPop: function showPop() {
                this.isShowPop = true;
                this.$apply();
            }
        }, _this.events = {
            closeModal: function closeModal() {
                this.isShowPop = false;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlBvcCIsImRhdGEiLCJpc1Nob3dQb3AiLCJlcnJNc2ciLCJwaG9uZVN0YXR1cyIsImNvZGVTdGF0dXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzaG93UG9wIiwiJGFwcGx5IiwiZXZlbnRzIiwiY2xvc2VNb2RhbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QjtBQURqQixTLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxZQUFXLEVBQVosRUFBZSxnQkFBZSxFQUE5QixFQUFpQyxzQkFBcUIsUUFBdEQsRUFBK0QsMkJBQTBCLGFBQXpGLEVBQXVHLDBCQUF5QixZQUFoSSxFQUFQLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DO0FBRE0sUyxRQUlWQyxJLEdBQU87QUFDSEMsdUJBQVUsSUFEUDtBQUVIQyxvQkFBTyxFQUZKO0FBR0hDLHlCQUFZLEtBSFQ7QUFJSEMsd0JBQVc7QUFKUixTLFFBT1BDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNOQyxtQkFETSxxQkFDRztBQUNMLHFCQUFLTixTQUFMLEdBQWlCLElBQWpCO0FBQ0EscUJBQUtPLE1BQUw7QUFDSDtBQUpLLFMsUUFPVkMsTSxHQUFTO0FBQ0xDLHNCQURLLHdCQUNPO0FBQ1IscUJBQUtULFNBQUwsR0FBaUIsS0FBakI7QUFDQSxxQkFBS08sTUFBTDtBQUNIO0FBSkksUzs7Ozs7aUNBT0EsQ0FFUjs7OztFQXRDZ0NHLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFBvcCBmcm9tICcuL2NvbXBvbmVudHMvcG9wJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5omL5py655+t5L+h6aqM6K+BJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiUG9wXCI6e1wieG1sbnM6d3hcIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDplcnJNc2cuc3luY1wiOlwiZXJyTXNnXCIsXCJ2LWJpbmQ6cGhvbmVTdGF0dXMuc3luY1wiOlwicGhvbmVTdGF0dXNcIixcInYtYmluZDpjb2RlU3RhdHVzLnN5bmNcIjpcImNvZGVTdGF0dXNcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBQb3AsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgICAgaXNTaG93UG9wOnRydWUsXG4gICAgICAgIGVyck1zZzonJyxcbiAgICAgICAgcGhvbmVTdGF0dXM6ZmFsc2UsXG4gICAgICAgIGNvZGVTdGF0dXM6ZmFsc2UsXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBzaG93UG9wKCl7XG4gICAgICAgICAgICB0aGlzLmlzU2hvd1BvcCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICAgY2xvc2VNb2RhbCgpe1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dQb3AgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICB9XG4iXX0=