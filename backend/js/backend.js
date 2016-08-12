webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ButtonGroup = __webpack_require__(176);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _IssueModalForm = __webpack_require__(277);
	
	var _IssueModalForm2 = _interopRequireDefault(_IssueModalForm);
	
	var _PanelButtonsComponent = __webpack_require__(353);
	
	var _PanelButtonsComponent2 = _interopRequireDefault(_PanelButtonsComponent);
	
	var _ItemButtonsComponent = __webpack_require__(500);
	
	var _ItemButtonsComponent2 = _interopRequireDefault(_ItemButtonsComponent);
	
	var _CategoriesAddButton = __webpack_require__(501);
	
	var _CategoriesAddButton2 = _interopRequireDefault(_CategoriesAddButton);
	
	var _ProductAddButton = __webpack_require__(502);
	
	var _ProductAddButton2 = _interopRequireDefault(_ProductAddButton);
	
	var _ProductPropertyEditButton = __webpack_require__(467);
	
	var _ProductPropertyEditButton2 = _interopRequireDefault(_ProductPropertyEditButton);
	
	var _ProductModificationEditButton = __webpack_require__(472);
	
	var _ProductModificationEditButton2 = _interopRequireDefault(_ProductModificationEditButton);
	
	var _ProductModificationPropertyEditButton = __webpack_require__(482);
	
	var _ProductModificationPropertyEditButton2 = _interopRequireDefault(_ProductModificationPropertyEditButton);
	
	var _ProductPassportPdf = __webpack_require__(503);
	
	var _ProductPassportPdf2 = _interopRequireDefault(_ProductPassportPdf);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*const issueModal = document.getElementById('issueModal');
	issueModal && ReactDOM.render(
		<IssueModalForm/>,
		issueModal
	);*/
	
	var adminPanel = document.getElementById('admin-panel');
	adminPanel && _reactDom2.default.render(_react2.default.createElement(_PanelButtonsComponent2.default, { bsClass: "btn-group-lg btn-group", dataItem: adminPanel.dataset }), adminPanel);
	
	if (document.querySelector('.itemButtonsComponent')) {
		var itemButtonsComponents = [].slice.call(document.querySelectorAll('.itemButtonsComponent'));
		itemButtonsComponents.forEach(function (item) {
			_reactDom2.default.render(_react2.default.createElement(_ItemButtonsComponent2.default, { dataItem: item.dataset }), item);
		});
	}
	
	var categoriesAddButtton = document.getElementById('categoriesAddButtton');
	categoriesAddButtton && _reactDom2.default.render(_react2.default.createElement(_CategoriesAddButton2.default, { dataItem: categoriesAddButtton.dataset }), categoriesAddButtton);
	
	var productAddButtton = document.getElementById('itemAddButtton');
	productAddButtton && _reactDom2.default.render(_react2.default.createElement(_ProductAddButton2.default, { dataItem: productAddButtton.dataset }), productAddButtton);
	
	var productId;
	var productPropertyEdit = document.getElementById('product-property-edit');
	if (productPropertyEdit) {
		productId = productPropertyEdit.getAttribute('data-id');
		_reactDom2.default.render(_react2.default.createElement(_ProductPropertyEditButton2.default, {
			role: productPropertyEdit.getAttribute('role'),
			id: productPropertyEdit.getAttribute('data-id'),
			bsStyle: "primary",
			bsSize: "small",
			className: "pull-right"
		}), productPropertyEdit);
	}
	
	var productModificationEdit = document.getElementById('product-modification-edit');
	if (productModificationEdit) {
		productId = productModificationEdit.getAttribute('data-id');
		_reactDom2.default.render(_react2.default.createElement(
			_ButtonGroup2.default,
			{ className: "pull-right", bsSize: "small" },
			_react2.default.createElement(_ProductModificationEditButton2.default, {
				id: productId,
				bsStyle: "primary",
				role: productPropertyEdit.getAttribute('role') }),
			_react2.default.createElement(_ProductModificationPropertyEditButton2.default, {
				id: productId,
				bsStyle: "primary",
				role: productPropertyEdit.getAttribute('role') })
		), productModificationEdit);
	}
	
	var passportPdf = document.getElementById('passport-pdf');
	passportPdf && _reactDom2.default.render(_react2.default.createElement(_ProductPassportPdf2.default, { dataItem: passportPdf.dataset }), passportPdf);

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gitHubHelper = __webpack_require__(278);
	
	var _gitHubHelper2 = _interopRequireDefault(_gitHubHelper);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var IssueModalForm = function (_React$Component) {
		_inherits(IssueModalForm, _React$Component);
	
		function IssueModalForm(props) {
			_classCallCheck(this, IssueModalForm);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IssueModalForm).call(this, props));
	
			_this.state = {
				showModal: false,
				title: '',
				body: '',
				responseMessage: ''
			};
			return _this;
		}
	
		_createClass(IssueModalForm, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.setState({
					title: document.location.href
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this2 = this;
	
				document.onkeydown = function (e) {
					if (e.altKey && e.keyCode == 113) {
						_this2.setState({
							showModal: true
						});
					}
				};
			}
		}, {
			key: "showModal",
			value: function showModal() {
				this.setState({ showModal: true });
			}
		}, {
			key: "hideModal",
			value: function hideModal() {
				this.setState({
					showModal: false,
					url: document.location.href,
					title: '',
					body: ''
				});
			}
		}, {
			key: "handleChange",
			value: function handleChange(key) {
				var _this3 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this3.setState(data);
				};
			}
		}, {
			key: "sendIssue",
			value: function sendIssue() {
				var data = { "title": this.state.title, "body": this.state.body, "labels": ["design"] };
				console.log(data);
				_gitHubHelper2.default.newIssue(data).then(function (dataInfo) {
					console.log(dataInfo);
					this.setState({
						responseMessage: dataInfo.status == 201 && dataInfo.statusText == 'Created' ? 'Сообщение об ошибке создано. Благодарю за помощь. В ближайшее время ошибка будет исправлена!' : 'Сообщение не отправлено. Ошибка сервера. Обратитесь к администратору.'
					});
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				var modalBody = !this.state.responseMessage ? _react2.default.createElement(
					"form",
					null,
					_react2.default.createElement(
						_FormGroup2.default,
						null,
						_react2.default.createElement(
							_ControlLabel2.default,
							null,
							"Url страницы"
						),
						_react2.default.createElement(_FormControl2.default, {
							type: "text",
							placeholder: "Url страницы",
							name: "url",
							value: this.state.url,
							onChange: this.handleChange('url').bind(this)
						})
					),
					_react2.default.createElement(
						_FormGroup2.default,
						null,
						_react2.default.createElement(
							_ControlLabel2.default,
							null,
							"Заголовок ошибки"
						),
						_react2.default.createElement(_FormControl2.default, {
							type: "text",
							placeholder: "Название ошибки",
							name: "title",
							value: this.state.title,
							onChange: this.handleChange('title').bind(this)
						})
					),
					_react2.default.createElement(
						_FormGroup2.default,
						null,
						_react2.default.createElement(
							_ControlLabel2.default,
							null,
							"Select"
						),
						_react2.default.createElement(
							_FormControl2.default,
							{ componentClass: "select", placeholder: "select" },
							_react2.default.createElement(
								"option",
								{ value: "select" },
								"select"
							),
							_react2.default.createElement(
								"option",
								{ value: "other" },
								"..."
							)
						)
					),
					_react2.default.createElement(
						_FormGroup2.default,
						null,
						_react2.default.createElement(
							_ControlLabel2.default,
							null,
							"Описание ошибки"
						),
						_react2.default.createElement(_FormControl2.default, {
							componentClass: "textarea",
							placeholder: "Описание ошибки",
							name: "body",
							value: this.state.body,
							onChange: this.handleChange('body').bind(this),
							rows: "8"
						})
					)
				) : _react2.default.createElement(
					"div",
					{ className: "text-center" },
					this.state.responseMessage
				);
	
				var modalFooter = !this.state.responseMessage ? _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_Button2.default,
						{ onClick: this.hideModal.bind(this) },
						"Отмена"
					),
					_react2.default.createElement(
						_Button2.default,
						{
							bsStyle: "primary",
							onClick: this.sendIssue.bind(this) },
						"Отправить ошибку"
					)
				) : _react2.default.createElement(
					_Button2.default,
					{ onClick: this.hideModal.bind(this) },
					"Ok"
				);
	
				return _react2.default.createElement(
					"div",
					{ className: "admin" },
					_react2.default.createElement(
						_Button2.default,
						{
							bsStyle: "link",
							onClick: this.showModal.bind(this)
						},
						_react2.default.createElement(_Glyphicon2.default, { glyph: "comment" })
					),
					_react2.default.createElement(
						_Modal2.default,
						{ show: this.state.showModal, onHide: this.hideModal.bind(this) },
						_react2.default.createElement(
							_Modal2.default.Header,
							{ closeButton: true },
							_react2.default.createElement(
								_Modal2.default.Title,
								null,
								"Сообщение об ошибке"
							)
						),
						_react2.default.createElement(
							_Modal2.default.Body,
							null,
							modalBody
						),
						_react2.default.createElement(
							_Modal2.default.Footer,
							null,
							modalFooter
						)
					)
				);
			}
		}]);
	
		return IssueModalForm;
	}(_react2.default.Component);
	
	exports.default = IssueModalForm;

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	 * Created by Alpha-Hydro.
	 *  @link http://www.alpha-hydro.com
	 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	 *  @copyright Copyright (c) 2016, Alpha-Hydro
	 */
	
	var axios = __webpack_require__(279);
	
	var helpers = {
		getIssue: function getIssue() {
			return axios.get("https://api.github.com/repos/Alpha-Hydro/alpha-hydro-antares/issues").then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
				return "error";
			});
		},
	
		newIssue: function newIssue(data) {
			var instance = axios.create({
				headers: { 'Authorization': 'Basic YWxwaGFIeWRybzpOUW45ZlF2VUpYa2o=' }
			});
	
			return instance.post("https://api.github.com/repos/Alpha-Hydro/alpha-hydro-antares/issues", data).then(function (response) {
				return response;
			}).catch(function (response) {
				console.log(response);
				return "error";
			});
		}
	};
	
	module.exports = helpers;

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _ButtonComponent = __webpack_require__(355);
	
	var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);
	
	var _ModalComponent = __webpack_require__(356);
	
	var _ModalComponent2 = _interopRequireDefault(_ModalComponent);
	
	var _ButtonGroup = __webpack_require__(176);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PanelButtonsComponent = function (_React$Component) {
		_inherits(PanelButtonsComponent, _React$Component);
	
		function PanelButtonsComponent(props) {
			_classCallCheck(this, PanelButtonsComponent);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PanelButtonsComponent).call(this, props));
	
			_this.roles = ['manager', 'admin'];
			_this.state = {
				show: false,
				action: '',
				title: '',
				data: ''
			};
			return _this;
		}
	
		_createClass(PanelButtonsComponent, [{
			key: "showModal",
			value: function showModal() {
				this.setState({ show: true });
			}
		}, {
			key: "hideModal",
			value: function hideModal() {
				this.setState({ show: false });
			}
		}, {
			key: "precedence",
			value: function precedence(role) {
				return this.roles.indexOf(role);
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				var controller = this.props.dataItem.controller;
				var id = this.props.dataItem.id;
				_getDataHelper2.default.getDataInfo(controller, id).then(function (dataInfo) {
					this.setState({
						data: dataInfo
					});
				}.bind(this));
			}
		}, {
			key: "handlerClickButton",
			value: function handlerClickButton(action, title) {
				this.setState({
					action: action,
					title: title,
					show: true
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var bsStyle = this.props.bsstyle ? this.props.bsstyle : 'link';
				var Buttons = [{
					icon: "pencil",
					enable: true,
					action: "edit",
					role: "manager",
					title: "Редактировать"
				}, {
					icon: "tags",
					enable: true,
					action: "seo",
					role: "admin",
					title: "Мета теги"
				}, {
					icon: "comment",
					enable: true,
					action: "issue",
					role: "manager",
					title: "Сообщение об ошибке"
				}].map(function (button, i) {
					return button.enable && _react2.default.createElement(_ButtonComponent2.default, {
						key: i,
						bsStyle: bsStyle,
						onClick: _this2.handlerClickButton.bind(_this2),
						action: button.action,
						icon: button.icon,
						title: button.title
					});
				});
	
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_ButtonGroup2.default,
						{ bsClass: this.props.bsClass },
						Buttons
					),
					_react2.default.createElement(_ModalComponent2.default, {
						show: this.state.show,
						hide: this.hideModal.bind(this),
						data: this.state.data,
						title: this.state.title,
						action: this.state.action,
						keyboard: false
					})
				);
			}
		}]);
	
		return PanelButtonsComponent;
	}(_react2.default.Component);
	
	exports.default = PanelButtonsComponent;
	;

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var axios = __webpack_require__(279);
	
	var helpers = {
		getCategoryInfo: function getCategoryInfo(id) {
			return axios.get("/api/categories/get/" + id + "/").then(function (response) {
				//console.log(response.data);
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
	
		getCategoryProduct: function getCategoryProduct(id) {
			return axios.get("/admin/products/category/?id=" + id).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
	
		getCategoryProductProperties: function getCategoryProductProperties(id) {
			return axios.get("/admin/products/property/?id=" + id).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
	
		getCategoryProductModification: function getCategoryProductModification(id) {
			return axios.get("/api/products/modifications/?id=" + id).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
	
		getCurrentGategoryList: function getCurrentGategoryList(id) {
			return axios.get("/api/categories/list/" + id + "/").then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
	
		getSubGategoryList: function getSubGategoryList(id) {
			return axios.get("/api/categories/list/" + id + "/?children=true").then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
	
		getDataInfo: function getDataInfo(controller, id) {
			var url = "/admin/" + controller + "/json/?id=";
			return axios.get(url + id).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
	
		getPageInfo: function getPageInfo() {
			return axios.get(window.location.href + "?json").then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		}
	};
	
	module.exports = helpers;

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ButtonComponent = function (_React$Component) {
		_inherits(ButtonComponent, _React$Component);
	
		function ButtonComponent() {
			_classCallCheck(this, ButtonComponent);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonComponent).apply(this, arguments));
		}
	
		_createClass(ButtonComponent, [{
			key: "handlerClick",
			value: function handlerClick(e) {
				this.props.onClick(this.props.action, this.props.title);
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Button2.default,
					_extends({}, this.props, { onClick: this.handlerClick.bind(this) }),
					_react2.default.createElement(_Glyphicon2.default, { glyph: this.props.icon })
				);
			}
		}]);
	
		return ButtonComponent;
	}(_react2.default.Component);
	
	exports.default = ButtonComponent;

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModalFormsEdit = __webpack_require__(357);
	
	var _ModalFormsEdit2 = _interopRequireDefault(_ModalFormsEdit);
	
	var _ModalFormSeo = __webpack_require__(489);
	
	var _ModalFormSeo2 = _interopRequireDefault(_ModalFormSeo);
	
	var _ModalFormsAdd = __webpack_require__(490);
	
	var _ModalFormsAdd2 = _interopRequireDefault(_ModalFormsAdd);
	
	var _ModalFormDelete = __webpack_require__(494);
	
	var _ModalFormDelete2 = _interopRequireDefault(_ModalFormDelete);
	
	var _ModalFormRecover = __webpack_require__(495);
	
	var _ModalFormRecover2 = _interopRequireDefault(_ModalFormRecover);
	
	var _ModalFormDisabled = __webpack_require__(496);
	
	var _ModalFormDisabled2 = _interopRequireDefault(_ModalFormDisabled);
	
	var _ModalFormEnable = __webpack_require__(497);
	
	var _ModalFormEnable2 = _interopRequireDefault(_ModalFormEnable);
	
	var _ModalFormIssue = __webpack_require__(498);
	
	var _ModalFormIssue2 = _interopRequireDefault(_ModalFormIssue);
	
	var _gitHubHelper = __webpack_require__(278);
	
	var _gitHubHelper2 = _interopRequireDefault(_gitHubHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalComponent = function (_React$Component) {
		_inherits(ModalComponent, _React$Component);
	
		function ModalComponent() {
			_classCallCheck(this, ModalComponent);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalComponent).apply(this, arguments));
		}
	
		_createClass(ModalComponent, [{
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var modalForm = function modalForm() {
					switch (_this2.props.action) {
						case "edit":
							return _react2.default.createElement(_ModalFormsEdit2.default, _this2.props);
							break;
						case "seo":
							return _react2.default.createElement(_ModalFormSeo2.default, _this2.props);
							break;
						case "add":
							return _react2.default.createElement(_ModalFormsAdd2.default, _this2.props);
							break;
						case "delete":
							return _react2.default.createElement(_ModalFormDelete2.default, _this2.props);
							break;
						case "recover":
							return _react2.default.createElement(_ModalFormRecover2.default, _this2.props);
							break;
						case "disabled":
							return _react2.default.createElement(_ModalFormDisabled2.default, _this2.props);
							break;
						case "enabled":
							return _react2.default.createElement(_ModalFormEnable2.default, _this2.props);
							break;
						case "issue":
							return _react2.default.createElement(_ModalFormIssue2.default, _this2.props);
							break;
						default:
							return false;
					}
				};
	
				return modalForm();
			}
		}]);
	
		return ModalComponent;
	}(_react2.default.Component);
	
	exports.default = ModalComponent;
	;

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _DefaultFormEdit = __webpack_require__(358);
	
	var _DefaultFormEdit2 = _interopRequireDefault(_DefaultFormEdit);
	
	var _PagesFormEdit = __webpack_require__(461);
	
	var _PagesFormEdit2 = _interopRequireDefault(_PagesFormEdit);
	
	var _CategoriesFormEdit = __webpack_require__(462);
	
	var _CategoriesFormEdit2 = _interopRequireDefault(_CategoriesFormEdit);
	
	var _ProductsFormEdit = __webpack_require__(466);
	
	var _ProductsFormEdit2 = _interopRequireDefault(_ProductsFormEdit);
	
	var _MediaFormEdit = __webpack_require__(487);
	
	var _MediaFormEdit2 = _interopRequireDefault(_MediaFormEdit);
	
	var _MediaCategoriesFormEdit = __webpack_require__(488);
	
	var _MediaCategoriesFormEdit2 = _interopRequireDefault(_MediaCategoriesFormEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalFormsEdit = function (_React$Component) {
		_inherits(ModalFormsEdit, _React$Component);
	
		function ModalFormsEdit(props) {
			_classCallCheck(this, ModalFormsEdit);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormsEdit).call(this, props));
		}
	
		_createClass(ModalFormsEdit, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "selectEditInputs",
			value: function selectEditInputs() {
				switch (this.props.data.controller) {
					case "pages":
						return _react2.default.createElement(_PagesFormEdit2.default, this.props);
					case "categories":
						return _react2.default.createElement(_CategoriesFormEdit2.default, this.props);
					case "products":
						return _react2.default.createElement(_ProductsFormEdit2.default, this.props);
					case "media":
						return _react2.default.createElement(_MediaFormEdit2.default, this.props);
					case "media-categories":
						return _react2.default.createElement(_MediaCategoriesFormEdit2.default, this.props);
					default:
						return _react2.default.createElement(_DefaultFormEdit2.default, this.props);
				}
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.show,
						onHide: this.hideModal.bind(this),
						dialogClassName: "w100"
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							!this.props.data.title ? this.props.data.name : this.props.data.title,
							_react2.default.createElement(
								"small",
								{ className: "block" },
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/' + this.props.data.controller + '/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							this.selectEditInputs(),
							_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
						)
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ form: "formModal", bsStyle: "success", type: "submit" },
							"Сохранить"
						)
					)
				);
			}
		}]);
	
		return ModalFormsEdit;
	}(_react2.default.Component);
	
	exports.default = ModalFormsEdit;

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(362);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultFormEdit = function (_React$Component) {
		_inherits(DefaultFormEdit, _React$Component);
	
		function DefaultFormEdit(props) {
			_classCallCheck(this, DefaultFormEdit);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultFormEdit).call(this, props));
	
			_this.state = {
				title: !props.data.title ? props.data.name : props.data.title,
				path: props.data.path,
				description: props.data.description,
				contentMarkdown: props.data.contentMarkdown,
				contentHtml: props.data.contentHtml,
				sorting: props.data.sorting,
				uploadPath: !props.data.uploadPath ? '' : props.data.uploadPath,
				image: !props.data.image ? "/files/images/product/2012-05-22_foto_nv.jpg" : props.data.image
			};
			return _this;
		}
	
		_createClass(DefaultFormEdit, [{
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "generatePathFromTitle",
			value: function generatePathFromTitle() {
				var title = this.state.title;
				_slugifyHelper2.default.getSlugify(title).then(function (path) {
					this.setState({ path: path });
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				var imgSrc = this.state.uploadPath + this.state.image;
	
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: imgSrc })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Заголовок"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									value: this.state.title,
									placeholder: "Заголовок",
									name: "dataPage[title]",
									onChange: this.handleChange('title').bind(this),
									required: true
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Url"
								),
								_react2.default.createElement(
									_InputGroup2.default,
									null,
									_react2.default.createElement(
										_InputGroup2.default.Button,
										null,
										_react2.default.createElement(
											_Button2.default,
											{ bsStyle: "primary", onClick: this.generatePathFromTitle.bind(this) },
											_react2.default.createElement(_Glyphicon2.default, { glyph: "refresh" })
										)
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.path,
										placeholder: "Url",
										name: "dataPage[path]",
										onChange: this.handleChange('path').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Краткое описание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.description,
									placeholder: "Краткое описание",
									name: "dataPage[description]",
									onChange: this.handleChange('description').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Текст на странице (markdown)"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.contentMarkdown,
									placeholder: "Текст на странице (markdown)",
									name: "dataPage[contentMarkdown]",
									onChange: this.handleChange('contentMarkdown').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										value: this.state.sorting,
										name: "dataPage[sorting]",
										onChange: this.handleChange('sorting').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataPage[contentHtml]",
								value: this.state.contentHTML
							})
						)
					)
				);
			}
		}]);
	
		return DefaultFormEdit;
	}(_react2.default.Component);
	
	exports.default = DefaultFormEdit;

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(366);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImagesUpload = function (_React$Component) {
		_inherits(ImagesUpload, _React$Component);
	
		function ImagesUpload(props) {
			_classCallCheck(this, ImagesUpload);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImagesUpload).call(this, props));
	
			_this.state = {
				image: props.image,
				delete: props.delete
			};
			return _this;
		}
	
		_createClass(ImagesUpload, [{
			key: "fileSelect",
			value: function fileSelect(e) {
				e.preventDefault();
				var fileElem = document.getElementById(!this.props.inputName ? "fileElem" : this.props.inputName);
				fileElem.click();
			}
		}, {
			key: "handleFiles",
			value: function handleFiles(e) {
				var _this2 = this;
	
				var _reader = new FileReader();
				_reader.onload = function () {
					_this2.setState({
						image: _reader.result
					});
				};
				_reader.readAsDataURL(e.target.files[0]);
			}
		}, {
			key: "fileDelete",
			value: function fileDelete(e) {
				e.preventDefault();
				this.setState({
					image: "/files/images/product/2012-05-22_foto_nv.jpg"
				});
				console.log('Файл удален...');
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "text-center mb2 image-edit" },
					_react2.default.createElement(_reactBootstrap.Image, { src: this.state.image, thumbnail: true }),
					_react2.default.createElement("input", {
						type: "file",
						className: "hidden",
						id: !this.props.inputName ? "fileElem" : this.props.inputName,
						multiple: true,
						accept: "image/*",
						name: !this.props.inputName ? "fileLoad" : this.props.inputName,
						onChange: this.handleFiles.bind(this) }),
					_react2.default.createElement(
						"div",
						{ className: "show-btn-group" },
						_react2.default.createElement(
							_reactBootstrap.ButtonGroup,
							{ bsSize: "small" },
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsStyle: "primary", onClick: this.fileSelect.bind(this) },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "download-alt" })
							),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsStyle: "danger", className: this.state.delete, onClick: this.fileDelete.bind(this) },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "trash" })
							)
						)
					)
				);
			}
		}]);
	
		return ImagesUpload;
	}(_react2.default.Component);
	
	exports.default = ImagesUpload;

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var axios = __webpack_require__(279);
	
	var helpers = {
		getSlugify: function getSlugify(string) {
			return axios.get("/admin/index/slugify/?slugify=" + string).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		},
		getProductSlugify: function getProductSlugify(string) {
			return axios.get("/admin/index/slugify-product-sku/?slugify=" + string).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		}
	};
	
	module.exports = helpers;

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PagesFormEdit = function (_React$Component) {
		_inherits(PagesFormEdit, _React$Component);
	
		function PagesFormEdit(props) {
			_classCallCheck(this, PagesFormEdit);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PagesFormEdit).call(this, props));
	
			_this.state = {
				title: props.data.title,
				path: props.data.path,
				description: props.data.description,
				contentMarkdown: props.data.contentMarkdown,
				contentHtml: props.data.contentHtml,
				sorting: props.data.sorting,
				image: !props.data.image ? "/files/images/product/2012-05-22_foto_nv.jpg" : props.data.image
			};
			return _this;
		}
	
		_createClass(PagesFormEdit, [{
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: this.state.image })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Заголовок"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									value: this.state.title,
									placeholder: "Заголовок",
									name: "dataPage[title]",
									onChange: this.handleChange('title').bind(this),
									required: true
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Краткое описание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.description,
									placeholder: "Краткое описание",
									name: "dataPage[description]",
									onChange: this.handleChange('description').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Текст на странице (markdown)"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.contentMarkdown,
									placeholder: "Текст на странице (markdown)",
									name: "dataPage[contentMarkdown]",
									onChange: this.handleChange('contentMarkdown').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										value: this.state.sorting,
										name: "dataPage[sorting]",
										onChange: this.handleChange('sorting').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement("input", {
								type: "hidden",
								name: "dataPage[contentHtml]",
								value: this.state.contentHTML
							})
						)
					)
				);
			}
		}]);
	
		return PagesFormEdit;
	}(_react2.default.Component);
	
	exports.default = PagesFormEdit;

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(362);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CategoryReplaceComponent = __webpack_require__(463);
	
	var _CategoryReplaceComponent2 = _interopRequireDefault(_CategoryReplaceComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoriesFormEdit = function (_React$Component) {
		_inherits(CategoriesFormEdit, _React$Component);
	
		function CategoriesFormEdit(props) {
			_classCallCheck(this, CategoriesFormEdit);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CategoriesFormEdit).call(this, props));
	
			_this.state = {
				data: props.data,
				parentId: props.data.parentId,
				categoryInfo: ''
			};
			return _this;
		}
	
		_createClass(CategoriesFormEdit, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var id = this.props.data.parentId;
				_getDataHelper2.default.getCategoryInfo(id).then(function (categoryInfo) {
					this.setState({
						categoryInfo: categoryInfo
					});
				}.bind(this));
			}
		}, {
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = _this2.state.data;
					data[key] = e.target.value;
					_this2.setState({ data: data });
				};
			}
		}, {
			key: "titleChange",
			value: function titleChange(e) {
				var title = e.target.value;
				_slugifyHelper2.default.getSlugify(title).then(function (path) {
					var data = this.state.data;
					data['path'] = path;
					this.setState({ data: data });
				}.bind(this));
			}
		}, {
			key: "generatePathFromTitle",
			value: function generatePathFromTitle() {
				var title = this.state.data.name;
				_slugifyHelper2.default.getSlugify(title).then(function (path) {
					var data = this.state.data;
					data['path'] = path;
					this.setState({ data: data });
				}.bind(this));
			}
		}, {
			key: "selectCategory",
			value: function selectCategory(id) {
				console.log('SELECTED CATEGORY', id);
				_getDataHelper2.default.getCategoryInfo(id).then(function (categoryInfo) {
					var data = this.state.data;
					data['breadcrumbs'] = categoryInfo.breadcrumbs ? categoryInfo.breadcrumbs + ' > ' + categoryInfo.name : categoryInfo.name;
					this.setState({
						data: data,
						parentId: categoryInfo.id,
						categoryInfo: categoryInfo
					});
				}.bind(this));
			}
		}, {
			key: "imgSrc",
			value: function imgSrc() {
				var uploadPath = !this.state.data.uploadPath ? '/files/images/product/' : this.state.data.uploadPath;
				var image = !this.state.data.image ? "2012-05-22_foto_nv.jpg" : this.state.data.image;
				return uploadPath + image;
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: this.imgSrc() })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Заголовок"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									value: this.state.data.name,
									placeholder: "Заголовок",
									name: "dataFormCategory[name]",
									onChange: this.handleChange('name').bind(this),
									required: true
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Url"
								),
								_react2.default.createElement(
									_InputGroup2.default,
									null,
									_react2.default.createElement(
										_InputGroup2.default.Button,
										null,
										_react2.default.createElement(
											_Button2.default,
											{ bsStyle: "primary", onClick: this.generatePathFromTitle.bind(this) },
											_react2.default.createElement(_Glyphicon2.default, { glyph: "refresh" })
										)
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.data.path,
										placeholder: "Url",
										name: "dataFormCategory[path]",
										onChange: this.handleChange('path').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Родительская категория"
								),
								_react2.default.createElement(
									_InputGroup2.default,
									null,
									_react2.default.createElement(
										_InputGroup2.default.Button,
										null,
										_react2.default.createElement(_CategoryReplaceComponent2.default, {
											currentCategory: this.state.categoryInfo,
											selectCategory: this.selectCategory.bind(this)
										})
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.data.breadcrumbs,
										readOnly: true
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Описание категории"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.data.description ? this.state.data.description : '',
									placeholder: "Описание категории",
									name: "dataFormCategory[description]",
									onChange: this.handleChange('description').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Текст на странице (markdown)"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Текст на странице",
									name: "dataFormCategory[contentMarkdown]",
									value: this.state.data.contentMarkdown,
									onChange: this.handleChange('contentMarkdown').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										value: this.state.data.sorting,
										name: "dataFormCategory[sorting]",
										onChange: this.handleChange('sorting').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataFormCategory[parentId]",
								value: this.state.parentId
							})
						)
					)
				);
			}
		}]);
	
		return CategoriesFormEdit;
	}(_react2.default.Component);
	
	exports.default = CategoriesFormEdit;

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _ListGroup = __webpack_require__(408);
	
	var _ListGroup2 = _interopRequireDefault(_ListGroup);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CatalogParentCategoryReplaceItemList = __webpack_require__(464);
	
	var _CatalogParentCategoryReplaceItemList2 = _interopRequireDefault(_CatalogParentCategoryReplaceItemList);
	
	var _CategoryRaplaceList = __webpack_require__(465);
	
	var _CategoryRaplaceList2 = _interopRequireDefault(_CategoryRaplaceList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoryReplaceComponent = function (_React$Component) {
		_inherits(CategoryReplaceComponent, _React$Component);
	
		function CategoryReplaceComponent(props) {
			_classCallCheck(this, CategoryReplaceComponent);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryReplaceComponent).call(this, props));
	
			_this.state = {
				showModal: false,
				currentCategory: '',
				parentId: '',
				categoryList: [],
				selectedCategory: ''
			};
	
			_this.selectCategory = _this.selectCategory.bind(_this);
			return _this;
		}
	
		/*componentWillMount(){
	 	var parentId = (this.props.currentCategory.parentId)?this.props.currentCategory.parentId:'0';
	 	this.setState({
	 		currentCategory: this.props.currentCategory,
	 		parentId: parentId
	 	});
	 }*/
	
		_createClass(CategoryReplaceComponent, [{
			key: "close",
			value: function close() {
				this.setState({ showModal: false });
			}
		}, {
			key: "open",
			value: function open() {
				var id = this.props.currentCategory.id;
				var parentId = this.props.currentCategory.parentId;
	
				_getDataHelper2.default.getCurrentGategoryList(id).then(function (categoryList) {
					this.setState({
						categoryList: categoryList,
						parentId: parentId,
						showModal: true
					});
				}.bind(this));
			}
		}, {
			key: "subCategoriesList",
			value: function subCategoriesList(id) {
				this.setState({ showModal: false });
	
				_getDataHelper2.default.getCategoryInfo(id).then(function (categoryInfo) {
					this.setState({
						currentCategory: categoryInfo,
						parentId: id
					});
				}.bind(this));
	
				_getDataHelper2.default.getSubGategoryList(id).then(function (categoryList) {
					this.setState({
						categoryList: categoryList
					});
				}.bind(this));
	
				setTimeout(function () {
					this.setState({ showModal: true });
				}.bind(this), 500);
			}
		}, {
			key: "currentCategoriesList",
			value: function currentCategoriesList(id) {
				this.setState({ showModal: false });
	
				_getDataHelper2.default.getCategoryInfo(id).then(function (categoryInfo) {
					this.setState({
						currentCategory: categoryInfo,
						parentId: categoryInfo.parentId
					});
				}.bind(this));
	
				_getDataHelper2.default.getCurrentGategoryList(id).then(function (categoryList) {
					this.setState({
						categoryList: categoryList
					});
				}.bind(this));
	
				setTimeout(function () {
					this.setState({ showModal: true });
				}.bind(this), 500);
			}
		}, {
			key: "returnParentCategory",
			value: function returnParentCategory() {
				this.currentCategoriesList(this.state.parentId);
			}
		}, {
			key: "selectCategory",
			value: function selectCategory(id) {
				this.setState({ selectedCategory: id });
			}
		}, {
			key: "selectRootCategory",
			value: function selectRootCategory(e) {
				this.setState({ selectedCategory: e.target.id });
			}
		}, {
			key: "handlerSave",
			value: function handlerSave() {
				this.state.selectedCategory && this.props.selectCategory(this.state.selectedCategory);
				this.close();
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var categoryList = this.state.categoryList;
				var categoryListComponent = categoryList.map(function (category, i) {
					return _react2.default.createElement(_CategoryRaplaceList2.default, {
						key: i,
						category: category,
						eventClick: _this2.subCategoriesList.bind(_this2),
						handlerSelect: _this2.selectCategory.bind(_this2),
						currentId: _this2.props.currentCategory.id
					});
				});
	
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_Button2.default,
						{ bsStyle: "primary", onClick: this.open.bind(this) },
						_react2.default.createElement(_Glyphicon2.default, { glyph: "refresh" })
					),
					_react2.default.createElement(
						_Modal2.default,
						_extends({}, this.props, {
							show: this.state.showModal,
							onHide: this.close.bind(this) }),
						_react2.default.createElement(
							_Modal2.default.Header,
							{ closeButton: true },
							_react2.default.createElement(
								_Modal2.default.Title,
								null,
								"Выбор категории"
							)
						),
						_react2.default.createElement(
							_Modal2.default.Body,
							null,
							_react2.default.createElement(
								_ListGroup2.default,
								null,
								_react2.default.createElement(_CatalogParentCategoryReplaceItemList2.default, {
									returnParentCategory: this.returnParentCategory.bind(this),
									selectRootCategory: this.selectRootCategory.bind(this),
									parentId: this.state.parentId
								}),
								categoryListComponent
							)
						),
						_react2.default.createElement(
							_Modal2.default.Footer,
							null,
							_react2.default.createElement(
								_Button2.default,
								{ onClick: this.close.bind(this) },
								"Отмена"
							),
							_react2.default.createElement(
								_Button2.default,
								{ onClick: this.handlerSave.bind(this), bsStyle: "primary" },
								"Выбрать"
							)
						)
					)
				);
			}
		}]);
	
		return CategoryReplaceComponent;
	}(_react2.default.Component);
	
	exports.default = CategoryReplaceComponent;

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var PropTypes = React.PropTypes;
	
	var Glyphicon = __webpack_require__(346);
	var ListGroupItem = __webpack_require__(409);
	var Row = __webpack_require__(360);
	var Col = __webpack_require__(361);
	
	function CatalogParentCategoryReplaceItemList(props) {
	    return props.parentId != 0 ? React.createElement(
	        ListGroupItem,
	        { onClick: props.returnParentCategory },
	        React.createElement(
	            Row,
	            null,
	            React.createElement(
	                Col,
	                { xs: 1 },
	                React.createElement(Glyphicon, { glyph: 'level-up' })
	            ),
	            React.createElement(
	                Col,
	                { xs: 11 },
	                '...'
	            )
	        )
	    ) : React.createElement(
	        ListGroupItem,
	        null,
	        React.createElement(
	            Row,
	            null,
	            React.createElement(
	                Col,
	                { xs: 1 },
	                React.createElement('input', {
	                    type: 'radio',
	                    name: 'catalogCategory',
	                    defaultChecked: '',
	                    id: '0',
	                    onClick: props.selectRootCategory
	                })
	            ),
	            React.createElement(
	                Col,
	                { xs: 11 },
	                'Нет категории (В корне каталога)'
	            )
	        )
	    );
	}
	
	CatalogParentCategoryReplaceItemList.propTypes = {
	    parentId: PropTypes.string.isRequired,
	    returnParentCategory: PropTypes.func.isRequired,
	    selectRootCategory: PropTypes.func.isRequired
	};
	
	module.exports = CatalogParentCategoryReplaceItemList;

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ListGroupItem = __webpack_require__(409);
	
	var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Badge = __webpack_require__(370);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoryList = function (_React$Component) {
		_inherits(CategoryList, _React$Component);
	
		function CategoryList(props) {
			_classCallCheck(this, CategoryList);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryList).call(this, props));
		}
	
		_createClass(CategoryList, [{
			key: "handlerClick",
			value: function handlerClick(e) {
				e.preventDefault();
				this.props.eventClick(this.props.category.id);
			}
		}, {
			key: "selectedCategory",
			value: function selectedCategory(e) {
				this.props.handlerSelect(e.target.id);
			}
		}, {
			key: "render",
			value: function render() {
				var category = this.props.category;
				var labelInstance = category.countSubCategories != 0 ? _react2.default.createElement(
					"a",
					{ href: "",
						className: category.active != 0 ? "" : "text-muted",
						onClick: this.handlerClick.bind(this) },
					category.name
				) : _react2.default.createElement(
					"span",
					{
						className: category.active != 0 ? "" : "text-muted" },
					category.name
				);
	
				var radioInstance = category.id != this.props.currentId ? _react2.default.createElement("input", {
					type: "radio",
					name: "catalogCategory",
					defaultChecked: "",
					id: category.id,
					onClick: this.selectedCategory.bind(this)
				}) : _react2.default.createElement(_Glyphicon2.default, { glyph: "ok" });
	
				return _react2.default.createElement(
					_ListGroupItem2.default,
					null,
					_react2.default.createElement(
						_Row2.default,
						null,
						_react2.default.createElement(
							_Col2.default,
							{ xs: 1 },
							radioInstance
						),
						_react2.default.createElement(
							_Col2.default,
							{ xs: 10 },
							labelInstance
						),
						_react2.default.createElement(
							_Col2.default,
							{ xs: 1 },
							_react2.default.createElement(
								_Badge2.default,
								{
									pullRight: true,
									className: category.countSubCategories != 0 ? "" : "hidden" },
								category.countSubCategories
							)
						)
					)
				);
			}
		}]);
	
		return CategoryList;
	}(_react2.default.Component);
	
	exports.default = CategoryList;

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(362);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _HelpBlock = __webpack_require__(404);
	
	var _HelpBlock2 = _interopRequireDefault(_HelpBlock);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _CategoryReplaceComponent = __webpack_require__(463);
	
	var _CategoryReplaceComponent2 = _interopRequireDefault(_CategoryReplaceComponent);
	
	var _ProductPropertyEditButton = __webpack_require__(467);
	
	var _ProductPropertyEditButton2 = _interopRequireDefault(_ProductPropertyEditButton);
	
	var _ProductModificationEditButton = __webpack_require__(472);
	
	var _ProductModificationEditButton2 = _interopRequireDefault(_ProductModificationEditButton);
	
	var _ProductModificationPropertyEditButton = __webpack_require__(482);
	
	var _ProductModificationPropertyEditButton2 = _interopRequireDefault(_ProductModificationPropertyEditButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductsFormEdit = function (_React$Component) {
		_inherits(ProductsFormEdit, _React$Component);
	
		function ProductsFormEdit(props) {
			_classCallCheck(this, ProductsFormEdit);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductsFormEdit).call(this, props));
	
			_this.state = {
				data: props.data,
				categoryInfo: '',
				categoryId: props.data.categoryId,
				breadcrumbs: props.data.breadcrumbs,
				error: false,
				errorHelp: 'Error.'
			};
			return _this;
		}
	
		_createClass(ProductsFormEdit, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var id = this.props.data.id;
				_getDataHelper2.default.getCategoryProduct(id).then(function (categoryInfo) {
					this.setState({
						categoryInfo: categoryInfo
					});
				}.bind(this));
			}
		}, {
			key: "onChange",
			value: function onChange(key) {
				var _this2 = this;
	
				return function (e) {
					_this2.state.data[key] = e.target.value;
					_this2.setState({ data: _this2.state.data });
				};
			}
		}, {
			key: "skuOnChange",
			value: function skuOnChange(e) {
				var _this3 = this;
	
				var input = e.target;
				var data = this.state.data;
				data['sku'] = e.target.value;
				this.setState({
					data: data
				}, function () {
					_this3.validateInput(input);
				});
			}
		}, {
			key: "validateInput",
			value: function validateInput(input) {
				_slugifyHelper2.default.getProductSlugify(input.value).then(function (result) {
					if (!result.error) {
						this.state.data['path'] = result.path;
						this.setState({
							data: this.state.data,
							error: false,
							errorHelp: 'Error.'
						}, input.setCustomValidity(''));
					} else {
						this.setState({
							error: true,
							errorHelp: result.error
						}, input.setCustomValidity(result.error + ' Надо исправить!'));
					}
				}.bind(this));
			}
		}, {
			key: "selectCategory",
			value: function selectCategory(id) {
				console.log('SELECTED CATEGORY', id);
				_getDataHelper2.default.getCategoryInfo(id).then(function (categoryInfo) {
					this.setState({
						categoryInfo: categoryInfo,
						breadcrumbs: categoryInfo.breadcrumbs + ' > ' + categoryInfo.name,
						categoryId: categoryInfo.id
					});
				}.bind(this));
			}
		}, {
			key: "imgSrc",
			value: function imgSrc() {
				var uploadPath = !this.state.data.uploadPath ? '/files/images/product/' : this.state.data.uploadPath;
				var image = !this.state.data.image ? "2012-05-22_foto_nv.jpg" : this.state.data.image;
				return uploadPath + image;
			}
		}, {
			key: "imgDraft",
			value: function imgDraft() {
				var uploadPath = !this.state.data.uploadPathDraft ? '/files/images/product/' : this.state.data.uploadPathDraft;
				var draft = !this.state.data.draft ? "2012-05-22_foto_nv.jpg" : this.state.data.draft;
				return uploadPath + draft;
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: this.imgSrc(), inputName: "fileLoadImage" }),
							_react2.default.createElement(_ImagesUpload2.default, { image: this.imgDraft(), inputName: "fileLoadDraft" })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								{ className: !this.state.error ? '' : 'has-error' },
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Код товара"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									placeholder: "Код товара",
									id: "sku",
									name: "dataFormProducts[sku]",
									value: this.state.data.sku,
									onChange: this.skuOnChange.bind(this),
									required: true
								}),
								_react2.default.createElement(
									_HelpBlock2.default,
									null,
									this.state.error && this.state.errorHelp
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Наименование товара"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									placeholder: "Наименование товара",
									name: "dataFormProducts[name]",
									value: this.state.data.name,
									onChange: this.onChange('name').bind(this),
									required: true
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Категория"
								),
								_react2.default.createElement(
									_InputGroup2.default,
									null,
									_react2.default.createElement(
										_InputGroup2.default.Button,
										null,
										_react2.default.createElement(_CategoryReplaceComponent2.default, {
											currentCategory: this.state.categoryInfo,
											selectCategory: this.selectCategory.bind(this)
										})
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.breadcrumbs,
										readOnly: true
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Описание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.data.description ? this.state.data.description : '',
									placeholder: "Описание",
									name: "dataFormProducts[description]",
									onChange: this.onChange('description').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Примечание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.data.note ? this.state.data.note : '',
									placeholder: "Примечание",
									name: "dataFormProducts[note]",
									onChange: this.onChange('note').bind(this),
									rows: "2"
								})
							),
							_react2.default.createElement(
								_Row2.default,
								null,
								_react2.default.createElement(
									_Col2.default,
									{ md: 3 },
									_react2.default.createElement(
										_FormGroup2.default,
										null,
										_react2.default.createElement(
											_Col2.default,
											{ componentClass: _ControlLabel2.default, md: 6, className: "pl0" },
											"Сортировка"
										),
										_react2.default.createElement(
											_Col2.default,
											{ md: 6 },
											_react2.default.createElement(_FormControl2.default, {
												type: "number",
												min: "0",
												name: "dataFormProducts[sorting]",
												value: this.state.data.sorting,
												onChange: this.onChange('sorting').bind(this),
												required: true
											})
										)
									)
								),
								_react2.default.createElement(
									_Col2.default,
									{ md: 3 },
									_react2.default.createElement(_ProductPropertyEditButton2.default, {
										id: this.props.data.id,
										title: "Ствойства товара",
										bsStyle: "primary",
										className: "pull-right",
										role: this.props.data.role
									})
								),
								_react2.default.createElement(
									_Col2.default,
									{ md: 3 },
									_react2.default.createElement(_ProductModificationEditButton2.default, {
										id: this.props.data.id,
										title: "Модификации товара",
										bsStyle: "primary",
										className: "pull-right",
										role: this.props.data.role
	
									})
								),
								_react2.default.createElement(
									_Col2.default,
									{ md: 3 },
									_react2.default.createElement(_ProductModificationPropertyEditButton2.default, {
										id: this.props.data.id,
										title: "Свойства модификаций",
										bsStyle: "primary",
										className: "pull-right",
										role: this.props.data.role
									})
								)
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataFormProducts[path]",
								value: this.state.data.path
							}),
							_react2.default.createElement("input", { type: "hidden",
								name: "categoryId",
								value: this.state.categoryId
							})
						)
					)
				);
			}
		}]);
	
		return ProductsFormEdit;
	}(_react2.default.Component);
	
	exports.default = ProductsFormEdit;

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _productPropertyHelper = __webpack_require__(468);
	
	var _productPropertyHelper2 = _interopRequireDefault(_productPropertyHelper);
	
	var _ProductProperties = __webpack_require__(469);
	
	var _ProductProperties2 = _interopRequireDefault(_ProductProperties);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductPropertyEditButton = function (_React$Component) {
		_inherits(ProductPropertyEditButton, _React$Component);
	
		function ProductPropertyEditButton(props) {
			_classCallCheck(this, ProductPropertyEditButton);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductPropertyEditButton).call(this, props));
	
			_this.state = {
				showModal: false,
				properties: [],
				deleted: []
			};
			return _this;
		}
	
		_createClass(ProductPropertyEditButton, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				_getDataHelper2.default.getCategoryProductProperties(this.props.id).then(function (response) {
					this.setState({ properties: response });
				}.bind(this));
			}
		}, {
			key: "close",
			value: function close() {
				this.setState({ showModal: false });
			}
		}, {
			key: "open",
			value: function open() {
				this.setState({ showModal: true });
			}
		}, {
			key: "handleChange",
			value: function handleChange(data, index) {
				var properties = this.state.properties;
				properties[index] = data;
				this.setState({ properties: properties });
			}
		}, {
			key: "handleDelete",
			value: function handleDelete(index) {
				console.log('DELETE PROPERTY: ', this.state.properties[index]);
				var deleted = this.state.properties[index].id != 'new' ? this.state.deleted.concat(this.state.properties[index]) : this.state.deleted;
				var properties = this.state.properties;
				properties.splice(index, 1);
				this.setState({
					properties: properties,
					deleted: deleted
				});
			}
		}, {
			key: "handleAdd",
			value: function handleAdd(data) {
				console.log('NEW PROPERTY: ', data);
				var properties = this.state.properties.concat(data);
				this.setState({ properties: properties });
			}
		}, {
			key: "onSave",
			value: function onSave(e) {
				e.preventDefault();
				var data = {
					properties: this.state.properties,
					deleted: this.state.deleted
				};
				this.setState({ showModal: false });
				console.log('SEND DATA: ', data);
	
				_productPropertyHelper2.default.editProperty(data).then(function (response) {
					console.log('SAVE DATA: ', response);
					window.location.reload(true);
					return false;
				});
			}
		}, {
			key: "onCancel",
			value: function onCancel() {
				_getDataHelper2.default.getCategoryProductProperties(this.props.id).then(function (response) {
					this.setState({
						properties: response,
						deleted: [],
						showModal: false
					});
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_Button2.default,
						_extends({}, this.props, {
							onClick: this.open.bind(this) }),
						!this.props.title ? _react2.default.createElement(_Glyphicon2.default, { glyph: "pencil" }) : this.props.title
					),
					_react2.default.createElement(
						_Modal2.default,
						{
							dialogClassName: "modal-lg",
							show: this.state.showModal,
							onHide: this.close.bind(this) },
						_react2.default.createElement(
							_Modal2.default.Header,
							{ closeButton: true },
							_react2.default.createElement(
								_Modal2.default.Title,
								null,
								"Свойства продукта"
							)
						),
						_react2.default.createElement(
							_Modal2.default.Body,
							null,
							_react2.default.createElement(_ProductProperties2.default, _extends({}, this.props, {
								properties: this.state.properties,
								handleChange: this.handleChange.bind(this),
								handleDelete: this.handleDelete.bind(this),
								handleAdd: this.handleAdd.bind(this)
							}))
						),
						_react2.default.createElement(
							_Modal2.default.Footer,
							null,
							_react2.default.createElement(
								_Button2.default,
								{ onClick: this.onCancel.bind(this) },
								"Отмена"
							),
							_react2.default.createElement(
								_Button2.default,
								{ bsStyle: "success", onClick: this.onSave.bind(this) },
								"Сохранить"
							)
						)
					)
				);
			}
		}]);
	
		return ProductPropertyEditButton;
	}(_react2.default.Component);
	
	exports.default = ProductPropertyEditButton;

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(1);
	var axios = __webpack_require__(279);
	
	var helpers = {
		editProperty: function editProperty(sendData) {
			return $.ajax({
				url: '/admin/products/property-edit',
				type: 'POST',
				data: sendData,
				success: function success(data) {
					return data;
				},
				error: function error(xhr, status) {
					console.log('error', status);
				}
			});
		},
		deleteProperty: function deleteProperty(id) {
			return axios.get("/admin/products/property-del/?id=" + id).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		}
	};
	
	module.exports = helpers;

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(454);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ProductPropertyComponent = __webpack_require__(470);
	
	var _ProductPropertyComponent2 = _interopRequireDefault(_ProductPropertyComponent);
	
	var _NewProductProperty = __webpack_require__(471);
	
	var _NewProductProperty2 = _interopRequireDefault(_NewProductProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductProperties = function (_React$Component) {
		_inherits(ProductProperties, _React$Component);
	
		function ProductProperties(props) {
			_classCallCheck(this, ProductProperties);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductProperties).call(this, props));
		}
	
		_createClass(ProductProperties, [{
			key: "propertiesList",
			value: function propertiesList() {
				var self = this;
				return this.props.properties.map(function (property, i) {
					return _react2.default.createElement(_ProductPropertyComponent2.default, _extends({
						key: i,
						index: i,
						property: property
					}, self.props));
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Table2.default,
					{ className: "mb0" },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							null,
							_react2.default.createElement(
								"th",
								null,
								"№№/пп"
							),
							_react2.default.createElement(
								"th",
								null,
								"Наименование"
							),
							_react2.default.createElement(
								"th",
								null,
								"Значение"
							),
							_react2.default.createElement(
								"th",
								null,
								"Действия"
							)
						)
					),
					_react2.default.createElement(
						"tbody",
						null,
						this.propertiesList()
					),
					_react2.default.createElement(
						"tfoot",
						null,
						_react2.default.createElement(_NewProductProperty2.default, this.props)
					)
				);
			}
		}]);
	
		return ProductProperties;
	}(_react2.default.Component);
	
	exports.default = ProductProperties;

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductPropertyComponent = function (_React$Component) {
		_inherits(ProductPropertyComponent, _React$Component);
	
		function ProductPropertyComponent(props) {
			_classCallCheck(this, ProductPropertyComponent);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductPropertyComponent).call(this, props));
	
			_this.state = {
				showModal: false
			};
			return _this;
		}
	
		_createClass(ProductPropertyComponent, [{
			key: "close",
			value: function close() {
				this.setState({ showModal: false });
			}
		}, {
			key: "open",
			value: function open() {
				this.setState({ showModal: true });
			}
		}, {
			key: "onChange",
			value: function onChange(key) {
				var _this2 = this;
	
				var data = this.props.properties[this.props.index];
				return function (e) {
					data[key] = e.target.value;
					_this2.props.handleChange(data, _this2.props.index);
				};
			}
		}, {
			key: "onDelete",
			value: function onDelete() {
				var _this3 = this;
	
				this.setState({ showModal: false }, function () {
					_this3.props.handleDelete(_this3.props.index);
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"td",
						{ className: "col-md-1" },
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.props.property.order,
								onChange: this.onChange('order').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.props.property.name,
								onChange: this.onChange('name').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.props.property.value,
								onChange: this.onChange('value').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_Button2.default,
							{ bsStyle: "danger", onClick: this.open.bind(this), disabled: this.props.role != 'admin' },
							_react2.default.createElement(_Glyphicon2.default, { glyph: "trash" })
						),
						_react2.default.createElement(
							_Modal2.default,
							{ show: this.state.showModal, onHide: this.close.bind(this) },
							_react2.default.createElement(
								_Modal2.default.Header,
								{ closeButton: true },
								_react2.default.createElement(
									_Modal2.default.Title,
									null,
									"Удалить свойство"
								)
							),
							_react2.default.createElement(
								_Modal2.default.Body,
								null,
								_react2.default.createElement(
									"div",
									{ className: "text-center" },
									_react2.default.createElement(
										"p",
										null,
										"Вы действительно хотите удалить свойство"
									),
									_react2.default.createElement(
										"p",
										{ className: "lead" },
										"\"",
										this.props.property.name,
										"\""
									)
								)
							),
							_react2.default.createElement(
								_Modal2.default.Footer,
								null,
								_react2.default.createElement(
									_Button2.default,
									{ onClick: this.close.bind(this) },
									"Отмена"
								),
								_react2.default.createElement(
									_Button2.default,
									{ onClick: this.onDelete.bind(this), bsStyle: "danger" },
									"Удалить"
								)
							)
						)
					)
				);
			}
		}]);
	
		return ProductPropertyComponent;
	}(_react2.default.Component);
	
	exports.default = ProductPropertyComponent;

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewProductProperty = function (_React$Component) {
		_inherits(NewProductProperty, _React$Component);
	
		function NewProductProperty(props) {
			_classCallCheck(this, NewProductProperty);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewProductProperty).call(this, props));
	
			_this.state = {
				id: 'new',
				productId: props.id,
				order: '',
				name: '',
				value: ''
			};
			return _this;
		}
	
		_createClass(NewProductProperty, [{
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "addNewProperty",
			value: function addNewProperty(e) {
				var _this3 = this;
	
				e.preventDefault();
				var data = this.state;
				if (data.order && data.name && data.value) {
					this.setState({
						order: '',
						name: '',
						value: ''
					}, function () {
						_this3.props.handleAdd(data);
					});
				}
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"tr",
					{ className: "active" },
					_react2.default.createElement(
						"td",
						{ className: "col-sm-1" },
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.state.order,
								onChange: this.handleChange('order').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.state.name,
								onChange: this.handleChange('name').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.state.value,
								onChange: this.handleChange('value').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_Button2.default,
							{ bsStyle: "primary", onClick: this.addNewProperty.bind(this) },
							"Добавить"
						)
					)
				);
			}
		}]);
	
		return NewProductProperty;
	}(_react2.default.Component);
	
	exports.default = NewProductProperty;

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ProductModifications = __webpack_require__(473);
	
	var _ProductModifications2 = _interopRequireDefault(_ProductModifications);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductModificationEditButton = function (_React$Component) {
		_inherits(ProductModificationEditButton, _React$Component);
	
		function ProductModificationEditButton(props) {
			_classCallCheck(this, ProductModificationEditButton);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductModificationEditButton).call(this, props));
	
			_this.state = {
				showModificationTable: false
			};
			return _this;
		}
	
		_createClass(ProductModificationEditButton, [{
			key: "openModificationTable",
			value: function openModificationTable(e) {
				e.preventDefault();
				this.setState({ showModificationTable: true });
			}
		}, {
			key: "closeModificationTable",
			value: function closeModificationTable() {
				this.setState({ showModificationTable: false });
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Button2.default,
					_extends({}, this.props, {
						onClick: this.openModificationTable.bind(this) }),
					!this.props.title ? _react2.default.createElement(_Glyphicon2.default, { glyph: "pencil" }) : this.props.title,
					_react2.default.createElement(_ProductModifications2.default, _extends({}, this.props, {
						showModal: this.state.showModificationTable,
						hideModal: this.closeModificationTable.bind(this) }))
				);
			}
		}]);
	
		return ProductModificationEditButton;
	}(_react2.default.Component);
	
	exports.default = ProductModificationEditButton;

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _productModificationHelper = __webpack_require__(474);
	
	var _productModificationHelper2 = _interopRequireDefault(_productModificationHelper);
	
	var _ModificationsTable = __webpack_require__(475);
	
	var _ModificationsTable2 = _interopRequireDefault(_ModificationsTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductModifications = function (_React$Component) {
		_inherits(ProductModifications, _React$Component);
	
		function ProductModifications(props) {
			_classCallCheck(this, ProductModifications);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductModifications).call(this, props));
	
			_this.state = {
				columns: [],
				rows: [],
				deleted: []
			};
			return _this;
		}
	
		_createClass(ProductModifications, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				_getDataHelper2.default.getCategoryProductModification(this.props.id).then(function (response) {
					this.setState({
						columns: response.columns,
						rows: response.rows
					});
				}.bind(this));
			}
		}, {
			key: "close",
			value: function close() {
				this.props.hideModal();
			}
		}, {
			key: "handleChange",
			value: function handleChange(data, index) {
				var rows = this.state.rows;
				rows[index] = data;
				this.setState({ rows: rows });
			}
		}, {
			key: "handleDelete",
			value: function handleDelete(index) {
				console.log('handleDelete: ', this.state.rows[index]);
				var deleted = this.state.rows[index].item.id != 'new' ? this.state.deleted.concat(this.state.rows[index]) : this.state.deleted;
				var rows = this.state.rows;
				rows.splice(index, 1);
				this.setState({
					rows: rows,
					deleted: deleted
				});
			}
		}, {
			key: "handleAdd",
			value: function handleAdd(data) {
				console.log('NEW MODIFICATION', data);
				var rows = this.state.rows;
				rows = this.state.rows.concat(data);
				this.setState({ rows: rows });
			}
		}, {
			key: "onCancel",
			value: function onCancel() {
				_getDataHelper2.default.getCategoryProductModification(this.props.id).then(function (response) {
					var _this2 = this;
	
					this.setState({
						columns: response.columns,
						rows: response.rows,
						deleted: []
					}, function () {
						_this2.props.hideModal();
					});
				}.bind(this));
			}
		}, {
			key: "onSave",
			value: function onSave(e) {
				e.preventDefault();
				this.props.hideModal();
				console.log('SEND DATA: ', this.state);
				_productModificationHelper2.default.editModification(this.state).then(function (response) {
					console.log('SAVE DATA: ', response);
					window.location.reload(true);
					return false;
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						dialogClassName: "w100",
						show: this.props.showModal,
						onHide: this.close.bind(this)
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							null,
							"Модификации и размеры"
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(_ModificationsTable2.default, {
							id: this.props.id,
							columns: this.state.columns,
							rows: this.state.rows,
							handleChange: this.handleChange.bind(this),
							handleDelete: this.handleDelete.bind(this),
							handleAdd: this.handleAdd.bind(this),
							role: this.props.role
						})
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.onCancel.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ bsStyle: "success", onClick: this.onSave.bind(this) },
							"Сохранить"
						)
					)
				);
			}
		}]);
	
		return ProductModifications;
	}(_react2.default.Component);
	
	exports.default = ProductModifications;

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(1);
	var axios = __webpack_require__(279);
	
	var helpers = {
		editModification: function editModification(data) {
			return $.ajax({
				url: '/admin/products/modification-edit',
				type: 'POST',
				data: {
					modificationTableData: data
				},
				success: function success(data) {
					return data;
				},
				error: function error(xhr, status) {
					console.log('error', status);
				}
			});
		},
		editModificationProperty: function editModificationProperty(data) {
			return $.ajax({
				url: '/admin/products/modification-property-edit',
				type: 'POST',
				data: {
					modificationPropertyData: data
				},
				success: function success(data) {
					return data;
				},
				error: function error(xhr, status) {
					console.log('error', status);
				}
			});
		},
		deleteModification: function deleteModification(id) {
			return axios.get("/admin/products/modification-del/?id=" + id).then(function (response) {
				return response.data;
			}).catch(function (response) {
				console.log(response);
			});
		}
	};
	
	module.exports = helpers;

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(454);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _productModificationHelper = __webpack_require__(474);
	
	var _productModificationHelper2 = _interopRequireDefault(_productModificationHelper);
	
	var _ModificationHeadTable = __webpack_require__(476);
	
	var _ModificationHeadTable2 = _interopRequireDefault(_ModificationHeadTable);
	
	var _ModificationBodyTableRow = __webpack_require__(478);
	
	var _ModificationBodyTableRow2 = _interopRequireDefault(_ModificationBodyTableRow);
	
	var _ModificationTableNewItem = __webpack_require__(480);
	
	var _ModificationTableNewItem2 = _interopRequireDefault(_ModificationTableNewItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationsTable = function (_React$Component) {
		_inherits(ModificationsTable, _React$Component);
	
		function ModificationsTable(props) {
			_classCallCheck(this, ModificationsTable);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationsTable).call(this, props));
		}
	
		_createClass(ModificationsTable, [{
			key: "bodyTable",
			value: function bodyTable() {
				var self = this;
				return this.props.rows.map(function (row, i) {
					return _react2.default.createElement(_ModificationBodyTableRow2.default, _extends({
						key: i,
						row: row,
						index: i
					}, self.props));
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Table2.default,
					{ className: "mb0" },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(_ModificationHeadTable2.default, { columns: this.props.columns })
					),
					_react2.default.createElement(
						"tbody",
						null,
						this.bodyTable()
					),
					_react2.default.createElement(
						"tfoot",
						null,
						_react2.default.createElement(_ModificationTableNewItem2.default, this.props)
					)
				);
			}
		}]);
	
		return ModificationsTable;
	}(_react2.default.Component);
	
	exports.default = ModificationsTable;

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModificationTableColumn = __webpack_require__(477);
	
	var _ModificationTableColumn2 = _interopRequireDefault(_ModificationTableColumn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationHeadTable = function (_React$Component) {
		_inherits(ModificationHeadTable, _React$Component);
	
		function ModificationHeadTable(props) {
			_classCallCheck(this, ModificationHeadTable);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationHeadTable).call(this, props));
		}
	
		_createClass(ModificationHeadTable, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"th",
						null,
						"№№/пп"
					),
					_react2.default.createElement(
						"th",
						null,
						"Наименование"
					),
					this.props.columns.map(function (column, i) {
						return _react2.default.createElement(_ModificationTableColumn2.default, {
							key: i,
							column: column });
					}),
					_react2.default.createElement(
						"th",
						null,
						"Действие"
					)
				);
			}
		}]);
	
		return ModificationHeadTable;
	}(_react2.default.Component);
	
	exports.default = ModificationHeadTable;

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationTableColumn = function (_React$Component) {
		_inherits(ModificationTableColumn, _React$Component);
	
		function ModificationTableColumn(props) {
			_classCallCheck(this, ModificationTableColumn);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationTableColumn).call(this, props));
		}
	
		_createClass(ModificationTableColumn, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"th",
					null,
					this.props.column.name
				);
			}
		}]);
	
		return ModificationTableColumn;
	}(_react2.default.Component);
	
	exports.default = ModificationTableColumn;

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ModificationBodyTableRowTd = __webpack_require__(479);
	
	var _ModificationBodyTableRowTd2 = _interopRequireDefault(_ModificationBodyTableRowTd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationBodyTableRow = function (_React$Component) {
		_inherits(ModificationBodyTableRow, _React$Component);
	
		function ModificationBodyTableRow(props) {
			_classCallCheck(this, ModificationBodyTableRow);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationBodyTableRow).call(this, props));
	
			_this.state = {
				showModal: false
			};
			return _this;
		}
	
		_createClass(ModificationBodyTableRow, [{
			key: "close",
			value: function close() {
				this.setState({ showModal: false });
			}
		}, {
			key: "open",
			value: function open() {
				this.setState({ showModal: true });
			}
		}, {
			key: "handleChangeItem",
			value: function handleChangeItem(key) {
				var _this2 = this;
	
				var data = this.props.rows[this.props.index];
				return function (e) {
					data.item[key] = e.target.value;
					_this2.props.handleChange(data, _this2.props.index);
				};
			}
		}, {
			key: "handleChangeValue",
			value: function handleChangeValue(index) {
				var _this3 = this;
	
				var data = this.props.rows[this.props.index];
				return function (e) {
					data.values[index].value = e.target.value;
					_this3.props.handleChange(data, _this3.props.index);
				};
			}
		}, {
			key: "onDelete",
			value: function onDelete() {
				var _this4 = this;
	
				this.setState({ showModal: false }, function () {
					_this4.props.handleDelete(_this4.props.index);
				});
			}
		}, {
			key: "itemProperty",
			value: function itemProperty() {
				var self = this;
				var properties = this.props.row.values;
				return properties.map(function (property, i) {
					return _react2.default.createElement(_ModificationBodyTableRowTd2.default, {
						key: i,
						value: property.value,
						onChange: self.handleChangeValue(i).bind(this)
					});
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(_ModificationBodyTableRowTd2.default, {
						onChange: this.handleChangeItem('order').bind(this),
						value: this.props.row.item.order,
						classTd: "col-sm-1" }),
					_react2.default.createElement(_ModificationBodyTableRowTd2.default, {
						onChange: this.handleChangeItem('sku').bind(this),
						value: this.props.row.item.sku }),
					this.itemProperty(),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_Button2.default,
							{
								bsSize: "small",
								bsStyle: "danger",
								onClick: this.open.bind(this),
								disabled: this.props.role != 'admin'
							},
							_react2.default.createElement(_Glyphicon2.default, { glyph: "trash" })
						),
						_react2.default.createElement(
							_Modal2.default,
							{
								show: this.state.showModal,
								onHide: this.close.bind(this) },
							_react2.default.createElement(
								_Modal2.default.Header,
								{ closeButton: true },
								_react2.default.createElement(
									_Modal2.default.Title,
									null,
									"Удаление товарной модификации"
								)
							),
							_react2.default.createElement(
								_Modal2.default.Body,
								null,
								_react2.default.createElement(
									"div",
									{ className: "text-center" },
									_react2.default.createElement(
										"p",
										null,
										"Вы действительно хотите удалить товарную модификацию"
									),
									_react2.default.createElement(
										"p",
										{ className: "lead" },
										this.props.row.item.sku
									),
									_react2.default.createElement(
										"p",
										null,
										"со всеми значениями свойств."
									)
								)
							),
							_react2.default.createElement(
								_Modal2.default.Footer,
								null,
								_react2.default.createElement(
									_Button2.default,
									{ onClick: this.close.bind(this) },
									"Отмена"
								),
								_react2.default.createElement(
									_Button2.default,
									{ bsStyle: "danger", onClick: this.onDelete.bind(this) },
									"Удалить"
								)
							)
						)
					)
				);
			}
		}]);
	
		return ModificationBodyTableRow;
	}(_react2.default.Component);
	
	exports.default = ModificationBodyTableRow;

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationBodyTableRowTd = function (_React$Component) {
		_inherits(ModificationBodyTableRowTd, _React$Component);
	
		function ModificationBodyTableRowTd(props) {
			_classCallCheck(this, ModificationBodyTableRowTd);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationBodyTableRowTd).call(this, props));
	
			_this.state = {
				showInput: false
			};
			return _this;
		}
	
		_createClass(ModificationBodyTableRowTd, [{
			key: "onBlur",
			value: function onBlur() {
				this.setState({ showInput: false });
			}
		}, {
			key: "onFocus",
			value: function onFocus() {
				this.setState({ showInput: true }, function () {
					this.refs.input.focus();
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"td",
					{ className: this.props.classTd },
					_react2.default.createElement(
						"div",
						{ className: "form-group form-group-sm mb0" },
						this.state.showInput ? _react2.default.createElement("input", {
							ref: "input",
							className: "form-control",
							type: "text",
							value: this.props.value,
							onChange: this.props.onChange.bind(this),
							onBlur: this.onBlur.bind(this)
						}) : _react2.default.createElement(
							"span",
							{ onClick: this.onFocus.bind(this) },
							this.props.value
						)
					)
				);
			}
		}]);
	
		return ModificationBodyTableRowTd;
	}(_react2.default.Component);
	
	exports.default = ModificationBodyTableRowTd;

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ModificationTableNewValue = __webpack_require__(481);
	
	var _ModificationTableNewValue2 = _interopRequireDefault(_ModificationTableNewValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationTableNewItem = function (_React$Component) {
		_inherits(ModificationTableNewItem, _React$Component);
	
		function ModificationTableNewItem(props) {
			_classCallCheck(this, ModificationTableNewItem);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationTableNewItem).call(this, props));
	
			_this.state = {
				item: {
					id: 'new',
					parentId: props.id,
					sku: '',
					order: ''
				},
				values: ''
			};
			_this.newItemValues = _this.newItemValues.bind(_this);
			return _this;
		}
	
		_createClass(ModificationTableNewItem, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var newItemValues = this.newItemValues();
				this.setState({ values: newItemValues });
			}
		}, {
			key: "newItemValues",
			value: function newItemValues() {
				var params = this.props.columns;
				return params.map(function (param, i) {
					return {
						subprodictId: '',
						paramId: param.id,
						value: ''
					};
				});
			}
		}, {
			key: "handleChangeNewValue",
			value: function handleChangeNewValue(value, index) {
				this.state.values[index].value = value;
				this.setState(this.state);
			}
		}, {
			key: "onChange",
			value: function onChange(key) {
				var _this2 = this;
	
				return function (e) {
					_this2.state.item[key] = e.target.value;
					_this2.setState(_this2.state);
				};
			}
		}, {
			key: "addNewModification",
			value: function addNewModification(e) {
				var _this3 = this;
	
				var newItem = this.state;
				if (newItem.item.sku && newItem.item.order) {
					this.setState({
						item: {
							id: 'new',
							parentId: this.props.parentId,
							sku: '',
							order: ''
						},
						values: this.newItemValues()
					}, function () {
						_this3.props.handleAdd(newItem);
					});
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _this4 = this;
	
				var newValuesTd = this.state.values.map(function (column, i) {
					return _react2.default.createElement(_ModificationTableNewValue2.default, {
						key: i,
						index: i,
						value: column.value,
						handleChange: _this4.handleChangeNewValue.bind(_this4) });
				});
				return _react2.default.createElement(
					"tr",
					{ className: "active" },
					_react2.default.createElement(
						"td",
						{ className: "col-sm-1" },
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0", bsSize: "small" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.state.item.order,
								onChange: this.onChange('order').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0", bsSize: "small" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								className: "text-center",
								value: this.state.item.sku,
								onChange: this.onChange('sku').bind(this)
							})
						)
					),
					newValuesTd,
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_Button2.default,
							{ bsSize: "small", bsStyle: "primary", onClick: this.addNewModification.bind(this) },
							"Добавить"
						)
					)
				);
			}
		}]);
	
		return ModificationTableNewItem;
	}(_react2.default.Component);
	
	exports.default = ModificationTableNewItem;

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationTableNewValue = function (_React$Component) {
		_inherits(ModificationTableNewValue, _React$Component);
	
		function ModificationTableNewValue(props) {
			_classCallCheck(this, ModificationTableNewValue);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationTableNewValue).call(this, props));
		}
	
		_createClass(ModificationTableNewValue, [{
			key: "onChange",
			value: function onChange(e) {
				var value = e.target.value;
				this.props.handleChange(value, this.props.index);
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"td",
					null,
					_react2.default.createElement(
						_FormGroup2.default,
						{ className: "mb0", bsSize: "small" },
						_react2.default.createElement(_FormControl2.default, {
							type: "text",
							className: "text-center",
							value: this.props.value,
							onChange: this.onChange.bind(this)
						})
					)
				);
			}
		}]);
	
		return ModificationTableNewValue;
	}(_react2.default.Component);
	
	exports.default = ModificationTableNewValue;

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ModificationProperties = __webpack_require__(483);
	
	var _ModificationProperties2 = _interopRequireDefault(_ModificationProperties);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductModificationPropertyEditButton = function (_React$Component) {
		_inherits(ProductModificationPropertyEditButton, _React$Component);
	
		function ProductModificationPropertyEditButton(props) {
			_classCallCheck(this, ProductModificationPropertyEditButton);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductModificationPropertyEditButton).call(this, props));
	
			_this.state = {
				showModificationPropertiesTable: false
			};
			return _this;
		}
	
		_createClass(ProductModificationPropertyEditButton, [{
			key: "closeModificationPropertiesTable",
			value: function closeModificationPropertiesTable() {
				this.setState({ showModificationPropertiesTable: false });
			}
		}, {
			key: "openModificationPropertiesTable",
			value: function openModificationPropertiesTable(e) {
				e.preventDefault();
				this.setState({ showModificationPropertiesTable: true });
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Button2.default,
					_extends({}, this.props, {
						onClick: this.openModificationPropertiesTable.bind(this) }),
					!this.props.title ? _react2.default.createElement(_Glyphicon2.default, { glyph: "cog" }) : this.props.title,
					_react2.default.createElement(_ModificationProperties2.default, _extends({}, this.props, {
						showModal: this.state.showModificationPropertiesTable,
						hideModal: this.closeModificationPropertiesTable.bind(this) }))
				);
			}
		}]);
	
		return ProductModificationPropertyEditButton;
	}(_react2.default.Component);
	
	exports.default = ProductModificationPropertyEditButton;

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _productModificationHelper = __webpack_require__(474);
	
	var _productModificationHelper2 = _interopRequireDefault(_productModificationHelper);
	
	var _ModificationPropertiesTable = __webpack_require__(484);
	
	var _ModificationPropertiesTable2 = _interopRequireDefault(_ModificationPropertiesTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationProperties = function (_React$Component) {
		_inherits(ModificationProperties, _React$Component);
	
		function ModificationProperties(props) {
			_classCallCheck(this, ModificationProperties);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationProperties).call(this, props));
	
			_this.state = {
				columns: [],
				deleted: []
			};
			return _this;
		}
	
		_createClass(ModificationProperties, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				_getDataHelper2.default.getCategoryProductModification(this.props.id).then(function (response) {
					this.setState({ columns: response.columns });
				}.bind(this));
			}
		}, {
			key: "close",
			value: function close() {
				this.props.hideModal();
			}
		}, {
			key: "handleChange",
			value: function handleChange(data, index) {
				var columns = this.state.columns;
				columns[index] = data;
				this.setState({ columns: columns });
			}
		}, {
			key: "handleDelete",
			value: function handleDelete(index) {
				console.log('DELETE PROPERTY: ', this.state.columns[index]);
				var deleted = this.state.columns[index].id != 'new' ? this.state.deleted.concat(this.state.columns[index]) : this.state.deleted;
				var columns = this.state.columns;
				columns.splice(index, 1);
				this.setState({
					columns: columns,
					deleted: deleted
				});
			}
		}, {
			key: "handleAdd",
			value: function handleAdd(data) {
				console.log('NEW PROPERTY: ', data);
				var columns = this.state.columns.concat(data);
				this.setState({ columns: columns });
			}
		}, {
			key: "onCancel",
			value: function onCancel() {
				_getDataHelper2.default.getCategoryProductModification(this.props.id).then(function (response) {
					var _this2 = this;
	
					this.setState({ columns: response.columns, deleted: [] }, function () {
						_this2.props.hideModal();
					});
				}.bind(this));
			}
		}, {
			key: "onSave",
			value: function onSave(e) {
				e.preventDefault();
				this.props.hideModal();
				console.log('SEND DATA: ', this.state);
				_productModificationHelper2.default.editModificationProperty(this.state).then(function (response) {
					console.log('SAVE DATA: ', response);
					window.location.reload(true);
					return false;
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.showModal,
						onHide: this.close.bind(this) },
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							null,
							"Свойства товарных модификаций (шапка таблицы)"
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(_ModificationPropertiesTable2.default, {
							id: this.props.id,
							dataTable: this.state.columns,
							handleChange: this.handleChange.bind(this),
							handleDelete: this.handleDelete.bind(this),
							handleAdd: this.handleAdd.bind(this),
							role: this.props.role
						})
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.onCancel.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ bsStyle: "success", onClick: this.onSave.bind(this) },
							"Сохранить"
						)
					)
				);
			}
		}]);
	
		return ModificationProperties;
	}(_react2.default.Component);
	
	exports.default = ModificationProperties;

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(454);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ModificationPropertyTableRow = __webpack_require__(485);
	
	var _ModificationPropertyTableRow2 = _interopRequireDefault(_ModificationPropertyTableRow);
	
	var _ModificationNewProperty = __webpack_require__(486);
	
	var _ModificationNewProperty2 = _interopRequireDefault(_ModificationNewProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationPropertiesTable = function (_React$Component) {
		_inherits(ModificationPropertiesTable, _React$Component);
	
		function ModificationPropertiesTable(props) {
			_classCallCheck(this, ModificationPropertiesTable);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationPropertiesTable).call(this, props));
		}
	
		_createClass(ModificationPropertiesTable, [{
			key: "modificationProperties",
			value: function modificationProperties() {
				var self = this;
				return this.props.dataTable.map(function (data, i) {
					return _react2.default.createElement(_ModificationPropertyTableRow2.default, _extends({
						key: i,
						index: i,
						property: data
					}, self.props));
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Table2.default,
					{ className: "mb0" },
					_react2.default.createElement(
						"thead",
						null,
						_react2.default.createElement(
							"tr",
							null,
							_react2.default.createElement(
								"th",
								{ className: "col-sm-2" },
								"№№/пп"
							),
							_react2.default.createElement(
								"th",
								null,
								"Наименование"
							),
							_react2.default.createElement(
								"th",
								{ className: "col-sm-2" },
								"Действие"
							)
						)
					),
					_react2.default.createElement(
						"tbody",
						null,
						this.modificationProperties()
					),
					_react2.default.createElement(
						"tfoot",
						null,
						_react2.default.createElement(_ModificationNewProperty2.default, this.props)
					)
				);
			}
		}]);
	
		return ModificationPropertiesTable;
	}(_react2.default.Component);
	
	exports.default = ModificationPropertiesTable;

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationPropertyTableRow = function (_React$Component) {
		_inherits(ModificationPropertyTableRow, _React$Component);
	
		function ModificationPropertyTableRow(props) {
			_classCallCheck(this, ModificationPropertyTableRow);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationPropertyTableRow).call(this, props));
	
			_this.state = {
				showModal: false
			};
			return _this;
		}
	
		_createClass(ModificationPropertyTableRow, [{
			key: "onChange",
			value: function onChange(key) {
				var _this2 = this;
	
				return function (e) {
					_this2.props.property[key] = e.target.value;
					_this2.props.handleChange(_this2.props.property, _this2.props.index);
				};
			}
		}, {
			key: "onDelete",
			value: function onDelete() {
				var _this3 = this;
	
				this.setState({ showModal: false }, function () {
					_this3.props.handleDelete(_this3.props.index);
				});
			}
		}, {
			key: "close",
			value: function close() {
				this.setState({ showModal: false });
			}
		}, {
			key: "open",
			value: function open() {
				this.setState({ showModal: true });
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"td",
						{ className: "col-sm-2" },
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.props.property.order,
								onChange: this.onChange('order').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.props.property.name,
								onChange: this.onChange('name').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_Button2.default,
							{ bsStyle: "danger", onClick: this.open.bind(this), disabled: this.props.role != 'admin' },
							_react2.default.createElement(_Glyphicon2.default, { glyph: "trash" })
						),
						_react2.default.createElement(
							_Modal2.default,
							{
								show: this.state.showModal,
								onHide: this.close.bind(this) },
							_react2.default.createElement(
								_Modal2.default.Header,
								{ closeButton: true },
								_react2.default.createElement(
									_Modal2.default.Title,
									null,
									"Удаление свойства товарной модификации"
								)
							),
							_react2.default.createElement(
								_Modal2.default.Body,
								null,
								_react2.default.createElement(
									"div",
									{ className: "text-center" },
									_react2.default.createElement(
										"p",
										null,
										"Вы действительно хотите удалить свойство"
									),
									_react2.default.createElement(
										"p",
										{ className: "lead" },
										"\"",
										this.props.property.name,
										"\""
									),
									_react2.default.createElement(
										"p",
										null,
										"Данное свойство будет удалено со всеми значениями во всех модификациях данного товара (т.е будет удален весь столбец в таблице модификаций со всеми значениями). Восстановление невозможно!"
									)
								)
							),
							_react2.default.createElement(
								_Modal2.default.Footer,
								null,
								_react2.default.createElement(
									_Button2.default,
									{ onClick: this.close.bind(this) },
									"Отмена"
								),
								_react2.default.createElement(
									_Button2.default,
									{ bsStyle: "danger", onClick: this.onDelete.bind(this) },
									"Удалить"
								)
							)
						)
					)
				);
			}
		}]);
	
		return ModificationPropertyTableRow;
	}(_react2.default.Component);
	
	exports.default = ModificationPropertyTableRow;

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModificationNewProperty = function (_React$Component) {
		_inherits(ModificationNewProperty, _React$Component);
	
		function ModificationNewProperty(props) {
			_classCallCheck(this, ModificationNewProperty);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModificationNewProperty).call(this, props));
	
			_this.state = {
				id: 'new',
				productId: _this.props.id,
				order: '',
				name: ''
			};
			return _this;
		}
	
		_createClass(ModificationNewProperty, [{
			key: "onChange",
			value: function onChange(key) {
				var _this2 = this;
	
				return function (e) {
					_this2.state[key] = e.target.value;
					_this2.setState(_this2.state);
				};
			}
		}, {
			key: "addNewPropertyModification",
			value: function addNewPropertyModification(e) {
				var _this3 = this;
	
				e.preventDefault();
				var newProperty = this.state;
				if (newProperty.order && newProperty.name) {
					this.setState({
						id: 'new',
						productId: this.props.id,
						order: '',
						name: ''
					}, function () {
						_this3.props.handleAdd(newProperty);
					});
				}
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"tr",
					{ className: "active" },
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.state.order,
								onChange: this.onChange('order').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_FormGroup2.default,
							{ className: "mb0" },
							_react2.default.createElement(_FormControl2.default, {
								type: "text",
								value: this.state.name,
								onChange: this.onChange('name').bind(this)
							})
						)
					),
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement(
							_Button2.default,
							{ bsStyle: "primary", onClick: this.addNewPropertyModification.bind(this) },
							"Добавить"
						)
					)
				);
			}
		}]);
	
		return ModificationNewProperty;
	}(_react2.default.Component);
	
	exports.default = ModificationNewProperty;

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(362);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MediaFormEdit = function (_React$Component) {
		_inherits(MediaFormEdit, _React$Component);
	
		function MediaFormEdit(props) {
			_classCallCheck(this, MediaFormEdit);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediaFormEdit).call(this, props));
	
			_this.state = {
				title: !props.data.title ? props.data.name : props.data.title,
				path: props.data.path,
				description: props.data.description,
				contentMarkdown: props.data.contentMarkdown,
				contentHtml: props.data.contentHtml,
				sorting: props.data.sorting,
				uploadPath: !props.data.uploadPath ? '' : props.data.uploadPath,
				image: !props.data.image ? "/files/images/product/2012-05-22_foto_nv.jpg" : props.data.image
			};
			return _this;
		}
	
		_createClass(MediaFormEdit, [{
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "generatePathFromTitle",
			value: function generatePathFromTitle() {
				var title = this.state.title;
				_slugifyHelper2.default.getSlugify(title).then(function (path) {
					this.setState({ path: path });
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				var imgSrc = this.state.uploadPath + this.state.image;
	
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: imgSrc })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Заголовок"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									value: this.state.title,
									placeholder: "Заголовок",
									name: "dataPage[title]",
									onChange: this.handleChange('title').bind(this),
									required: true
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Url"
								),
								_react2.default.createElement(
									_InputGroup2.default,
									null,
									_react2.default.createElement(
										_InputGroup2.default.Button,
										null,
										_react2.default.createElement(
											_Button2.default,
											{ bsStyle: "primary", onClick: this.generatePathFromTitle.bind(this) },
											_react2.default.createElement(_Glyphicon2.default, { glyph: "refresh" })
										)
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.path,
										placeholder: "Url",
										name: "dataPage[path]",
										onChange: this.handleChange('path').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Краткое описание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.description,
									placeholder: "Краткое описание",
									name: "dataPage[description]",
									onChange: this.handleChange('description').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Текст на странице (markdown)"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.contentMarkdown,
									placeholder: "Текст на странице (markdown)",
									name: "dataPage[contentMarkdown]",
									onChange: this.handleChange('contentMarkdown').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										value: this.state.sorting,
										name: "dataPage[sorting]",
										onChange: this.handleChange('sorting').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataPage[contentHtml]",
								value: this.state.contentHTML
							})
						)
					)
				);
			}
		}]);
	
		return MediaFormEdit;
	}(_react2.default.Component);
	
	exports.default = MediaFormEdit;

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(362);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MediaCategoriesFormEdit = function (_React$Component) {
		_inherits(MediaCategoriesFormEdit, _React$Component);
	
		function MediaCategoriesFormEdit(props) {
			_classCallCheck(this, MediaCategoriesFormEdit);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MediaCategoriesFormEdit).call(this, props));
	
			_this.state = {
				title: !props.data.title ? props.data.name : props.data.title,
				path: props.data.path,
				description: props.data.description,
				sorting: props.data.sorting,
				uploadPath: !props.data.uploadPath ? '' : props.data.uploadPath,
				image: !props.data.image ? "/files/images/product/2012-05-22_foto_nv.jpg" : props.data.image
			};
			return _this;
		}
	
		_createClass(MediaCategoriesFormEdit, [{
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "generatePathFromTitle",
			value: function generatePathFromTitle() {
				var title = this.state.title;
				_slugifyHelper2.default.getSlugify(title).then(function (path) {
					this.setState({ path: path });
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				var imgSrc = this.state.uploadPath + this.state.image;
	
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: imgSrc })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Заголовок"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									value: this.state.title,
									placeholder: "Заголовок",
									name: "dataPage[title]",
									onChange: this.handleChange('title').bind(this),
									required: true
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Url"
								),
								_react2.default.createElement(
									_InputGroup2.default,
									null,
									_react2.default.createElement(
										_InputGroup2.default.Button,
										null,
										_react2.default.createElement(
											_Button2.default,
											{ bsStyle: "primary", onClick: this.generatePathFromTitle.bind(this) },
											_react2.default.createElement(_Glyphicon2.default, { glyph: "refresh" })
										)
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.path,
										placeholder: "Url",
										name: "dataPage[path]",
										onChange: this.handleChange('path').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Краткое описание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.description,
									placeholder: "Краткое описание",
									name: "dataPage[description]",
									onChange: this.handleChange('description').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										value: this.state.sorting,
										name: "dataPage[sorting]",
										onChange: this.handleChange('sorting').bind(this),
										required: true
									})
								)
							)
						)
					)
				);
			}
		}]);
	
		return MediaCategoriesFormEdit;
	}(_react2.default.Component);
	
	exports.default = MediaCategoriesFormEdit;

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalFormSeo = function (_React$Component) {
		_inherits(ModalFormSeo, _React$Component);
	
		function ModalFormSeo(props) {
			_classCallCheck(this, ModalFormSeo);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormSeo).call(this, props));
	
			_this.state = {
				metaTitle: props.data.metaTitle,
				metaDescription: props.data.metaDescription,
				metaKeywords: props.data.metaKeywords
			};
			return _this;
		}
	
		_createClass(ModalFormSeo, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.show,
						onHide: this.hideModal.bind(this),
						dialogClassName: "modal-lg"
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							!this.props.data.title ? this.props.data.name : this.props.data.title,
							_react2.default.createElement(
								"small",
								{ className: "block" },
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/' + this.props.data.controller + '/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"meta Title"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									placeholder: "Enter meta Title",
									name: "dataFormSeo[metaTitle]",
									value: this.state.metaTitle,
									onChange: this.handleChange('metaTitle').bind(this)
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"meta Description"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Enter meta Description",
									name: "dataFormSeo[metaDescription]",
									value: this.state.metaDescription,
									onChange: this.handleChange('metaDescription').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"meta Keywords"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Enter meta Keywords",
									name: "dataFormSeo[metaKeywords]",
									value: this.state.metaKeywords,
									onChange: this.handleChange('metaKeywords').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
						)
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ form: "formModal", bsStyle: "success", type: "submit" },
							"Добавить"
						)
					)
				);
			}
		}]);
	
		return ModalFormSeo;
	}(_react2.default.Component);
	
	exports.default = ModalFormSeo;

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _DefaultFormAdd = __webpack_require__(491);
	
	var _DefaultFormAdd2 = _interopRequireDefault(_DefaultFormAdd);
	
	var _CategoriesFormAdd = __webpack_require__(492);
	
	var _CategoriesFormAdd2 = _interopRequireDefault(_CategoriesFormAdd);
	
	var _ProductFormAdd = __webpack_require__(493);
	
	var _ProductFormAdd2 = _interopRequireDefault(_ProductFormAdd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalFormsAdd = function (_React$Component) {
		_inherits(ModalFormsAdd, _React$Component);
	
		function ModalFormsAdd(props) {
			_classCallCheck(this, ModalFormsAdd);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormsAdd).call(this, props));
		}
	
		_createClass(ModalFormsAdd, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "selectEditInputs",
			value: function selectEditInputs() {
				switch (this.props.data.controller) {
					case "categories":
						return _react2.default.createElement(_CategoriesFormAdd2.default, this.props);
					case "products":
						return _react2.default.createElement(_ProductFormAdd2.default, this.props);
					default:
						return _react2.default.createElement(_DefaultFormAdd2.default, this.props);
				}
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.show,
						onHide: this.hideModal.bind(this),
						dialogClassName: "w100"
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							!this.props.data.title ? this.props.data.name : this.props.data.title,
							_react2.default.createElement(
								"small",
								{ className: "block" },
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/' + this.props.data.controller + '/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							this.selectEditInputs(),
							_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
						)
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							this.state.textCloseBtn
						),
						_react2.default.createElement(
							_Button2.default,
							{ form: "formModal", bsStyle: "success", type: "submit" },
							"Добавить"
						)
					)
				);
			}
		}]);
	
		return ModalFormsAdd;
	}(_react2.default.Component);
	
	exports.default = ModalFormsAdd;

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultFormAdd = function (_React$Component) {
		_inherits(DefaultFormAdd, _React$Component);
	
		function DefaultFormAdd(props) {
			_classCallCheck(this, DefaultFormAdd);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultFormAdd).call(this, props));
	
			_this.state = {
				title: '',
				path: '',
				description: '',
				contentMarkdown: '',
				contentHtml: '',
				sorting: 0,
				image: "/files/images/product/2012-05-22_foto_nv.jpg"
			};
			return _this;
		}
	
		_createClass(DefaultFormAdd, [{
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "titleChange",
			value: function titleChange(e) {
				var title = e.target.value;
				_slugifyHelper2.default.getSlugify(title).then(function (path) {
					this.setState({ path: path });
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: this.state.image, "delete": "hidden" })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Заголовок"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									placeholder: "Заголовок",
									name: "dataPage[title]",
									value: this.state.title,
									onChange: this.handleChange('title').bind(this),
									onBlur: this.titleChange.bind(this),
									required: true
								})
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataPage[path]",
								value: this.state.path
							}),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Краткое описание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Краткое описание",
									name: "dataPage[description]",
									value: this.state.description,
									onChange: this.handleChange('description').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Текст на странице (markdown)"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Текст на странице",
									name: "dataPage[contentMarkdown]",
									value: this.state.contentMarkdown,
									onChange: this.handleChange('contentMarkdown').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										name: "dataPage[sorting]",
										value: this.state.sorting,
										onChange: this.handleChange('sorting').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement(Input, { type: "hidden",
								name: "dataPage[contentHtml]",
								value: this.state.contentHTML
							})
						)
					)
				);
			}
		}]);
	
		return DefaultFormAdd;
	}(_react2.default.Component);
	
	exports.default = DefaultFormAdd;

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(362);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CategoryReplaceComponent = __webpack_require__(463);
	
	var _CategoryReplaceComponent2 = _interopRequireDefault(_CategoryReplaceComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoriesFormAdd = function (_React$Component) {
		_inherits(CategoriesFormAdd, _React$Component);
	
		function CategoriesFormAdd(props) {
			_classCallCheck(this, CategoriesFormAdd);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CategoriesFormAdd).call(this, props));
	
			_this.state = {
				name: '',
				path: '',
				description: '',
				contentMarkdown: '',
				contentHtml: '',
				sorting: 0,
				image: "/files/images/product/2012-05-22_foto_nv.jpg",
				parentId: props.data.id,
				parentCategoryInfo: props.data,
				categoryList: ''
			};
			return _this;
		}
	
		_createClass(CategoriesFormAdd, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var parentId = this.props.data.id;
	
				_getDataHelper2.default.getCurrentGategoryList(parentId).then(function (categoryList) {
					this.setState({ categoryList: categoryList });
				}.bind(this));
			}
		}, {
			key: "handleChange",
			value: function handleChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "titleChange",
			value: function titleChange(e) {
				var title = e.target.value;
				_slugifyHelper2.default.getSlugify(title).then(function (path) {
					this.setState({ path: path });
				}.bind(this));
			}
		}, {
			key: "selectCategory",
			value: function selectCategory(id) {
				console.log('SELECTED CATEGORY', id);
				_getDataHelper2.default.getCategoryInfo(id).then(function (categoryInfo) {
					this.setState({
						parentCategoryInfo: categoryInfo,
						parentId: id
					});
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: this.state.image, "delete": "hidden" })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Заголовок"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									value: this.state.name,
									placeholder: "Заголовок",
									name: "dataFormCategory[name]",
									onChange: this.handleChange('name').bind(this),
									onBlur: this.titleChange.bind(this),
									required: true
								})
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataFormCategory[path]",
								value: this.state.path,
								required: true
							}),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Родительская категория"
								),
								_react2.default.createElement(
									_InputGroup2.default,
									null,
									_react2.default.createElement(
										_InputGroup2.default.Button,
										null,
										_react2.default.createElement(_CategoryReplaceComponent2.default, {
											currentCategory: this.props.data,
											categoryList: this.state.categoryList,
											selectCategory: this.selectCategory.bind(this)
										})
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.parentCategoryInfo.name,
										readOnly: true
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Описание категории"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									value: this.state.description,
									placeholder: "Описание категории",
									name: "dataFormCategory[description]",
									onChange: this.handleChange('description').bind(this),
									rows: "4"
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Текст на странице (markdown)"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Текст на странице",
									name: "dataFormCategory[contentMarkdown]",
									value: this.state.contentMarkdown,
									onChange: this.handleChange('contentMarkdown').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										value: this.state.sorting,
										name: "dataFormCategory[sorting]",
										onChange: this.handleChange('sorting').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataFormCategory[parentId]",
								value: this.state.parentId
							})
						)
					)
				);
			}
		}]);
	
		return CategoriesFormAdd;
	}(_react2.default.Component);
	
	exports.default = CategoriesFormAdd;

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(359);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(360);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(361);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _HelpBlock = __webpack_require__(404);
	
	var _HelpBlock2 = _interopRequireDefault(_HelpBlock);
	
	var _ImagesUpload = __webpack_require__(365);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(460);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductFormAdd = function (_React$Component) {
		_inherits(ProductFormAdd, _React$Component);
	
		function ProductFormAdd(props) {
			_classCallCheck(this, ProductFormAdd);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductFormAdd).call(this, props));
	
			_this.state = {
				sku: '',
				name: '',
				path: '',
				fullPath: '',
				description: '',
				contentMarkdown: '',
				contentHtml: '',
				sorting: 0,
				image: "/files/images/product/2012-05-22_foto_nv.jpg",
				draft: "/files/images/product/2012-05-22_foto_nv.jpg",
				error: false,
				errorHelp: 'Error.'
			};
			return _this;
		}
	
		_createClass(ProductFormAdd, [{
			key: "onChange",
			value: function onChange(key) {
				var _this2 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this2.setState(data);
				};
			}
		}, {
			key: "skuOnChange",
			value: function skuOnChange(e) {
				var _this3 = this;
	
				var input = e.target;
				var sku = e.target.value;
				this.setState({
					sku: sku
				}, function () {
					_this3.validateInput(input);
				});
			}
		}, {
			key: "validateInput",
			value: function validateInput(input) {
				_slugifyHelper2.default.getProductSlugify(input.value).then(function (result) {
					if (!result.error) {
						var path = result.path;
						this.setState({
							path: path,
							fullPath: this.props.data.fullPath + '/' + path,
							error: false,
							errorHelp: 'Error.'
						}, input.setCustomValidity(''));
					} else {
						this.setState({
							error: true,
							errorHelp: result.error
						}, input.setCustomValidity(result.error + ' Надо исправить!'));
					}
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Grid2.default,
					{ fluid: true },
					_react2.default.createElement(
						_Row2.default,
						{ className: "show-grid" },
						_react2.default.createElement(
							_Col2.default,
							{ md: 3 },
							_react2.default.createElement(_ImagesUpload2.default, { image: this.state.image, "delete": "hidden", inputName: "fileLoadImage" }),
							_react2.default.createElement(_ImagesUpload2.default, { image: this.state.draft, "delete": "hidden", inputName: "fileLoadDraft" })
						),
						_react2.default.createElement(
							_Col2.default,
							{ md: 9 },
							_react2.default.createElement(
								_FormGroup2.default,
								{ className: !this.state.error ? '' : 'has-error' },
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Код товара"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									placeholder: "Код товара",
									id: "sku",
									name: "dataFormProducts[sku]",
									value: this.state.sku,
									onChange: this.skuOnChange.bind(this),
									required: true
								}),
								_react2.default.createElement(
									_HelpBlock2.default,
									null,
									this.state.error && this.state.errorHelp
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Наименование товара"
								),
								_react2.default.createElement(_FormControl2.default, {
									type: "text",
									placeholder: "Наименование товара",
									name: "dataFormProducts[name]",
									value: this.state.name,
									onChange: this.onChange('name').bind(this),
									required: true
								})
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(
									_ControlLabel2.default,
									null,
									"Oписание"
								),
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Описание",
									value: this.state.description,
									name: "dataFormProducts[description]",
									onChange: this.onChange('description').bind(this),
									rows: "8"
								})
							),
							_react2.default.createElement(
								"div",
								{ className: "form-inline" },
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mr2" },
										"Сортировка"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "number",
										min: "0",
										value: this.state.sorting,
										name: "dataFormProducts[sorting]",
										onChange: this.onChange('sorting').bind(this),
										required: true
									})
								)
							),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataFormProducts[path]",
								value: this.state.path
							}),
							_react2.default.createElement("input", { type: "hidden",
								name: "dataFormProducts[fullPath]",
								value: this.state.fullPath
							}),
							_react2.default.createElement("input", { type: "hidden",
								name: "categoryId",
								value: this.props.data.id
							})
						)
					)
				);
			}
		}]);
	
		return ProductFormAdd;
	}(_react2.default.Component);
	
	exports.default = ProductFormAdd;

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Alert = __webpack_require__(369);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalFormDelete = function (_React$Component) {
		_inherits(ModalFormDelete, _React$Component);
	
		function ModalFormDelete(props) {
			_classCallCheck(this, ModalFormDelete);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormDelete).call(this, props));
		}
	
		_createClass(ModalFormDelete, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.show,
						onHide: this.hideModal.bind(this)
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							!this.props.data.title ? this.props.data.name : this.props.data.title,
							_react2.default.createElement(
								"small",
								{ className: "block" },
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/' + this.props.data.controller + '/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement(
								"h5",
								null,
								"Вы действительно хотите удалить этот раздел!"
							),
							_react2.default.createElement(
								_Alert2.default,
								{ bsStyle: "danger" },
								_react2.default.createElement(_Glyphicon2.default, { glyph: "warning-sign", className: "mr1" }),
								"Все ",
								_react2.default.createElement(
									"strong",
									null,
									"подразделы"
								),
								" и существующие ",
								_react2.default.createElement(
									"strong",
									null,
									"товары"
								),
								" в этих подразделах на сайте отображаться не будут!"
							),
							_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
						)
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ form: "formModal", bsStyle: "danger", type: "submit" },
							"Удалить"
						)
					)
				);
			}
		}]);
	
		return ModalFormDelete;
	}(_react2.default.Component);
	
	exports.default = ModalFormDelete;

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ModalFormDelete = function (_React$Component) {
		_inherits(ModalFormDelete, _React$Component);
	
		function ModalFormDelete(props) {
			_classCallCheck(this, ModalFormDelete);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormDelete).call(this, props));
		}
	
		_createClass(ModalFormDelete, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.show,
						onHide: this.hideModal.bind(this)
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							!this.props.data.title ? this.props.data.name : this.props.data.title,
							_react2.default.createElement(
								"small",
								{ className: "block" },
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/' + this.props.data.controller + '/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement(
								"p",
								null,
								"Вы действительно хотите восстановить этот раздел!"
							),
							_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
						)
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ form: "formModal", bsStyle: "success", type: "submit" },
							"Восстановить"
						)
					)
				);
			}
		}]);
	
		return ModalFormDelete;
	}(_react2.default.Component);
	
	exports.default = ModalFormDelete;

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Alert = __webpack_require__(369);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Glyphicon = __webpack_require__(346);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ModalFormDisabled = function (_React$Component) {
		_inherits(ModalFormDisabled, _React$Component);
	
		function ModalFormDisabled(props) {
			_classCallCheck(this, ModalFormDisabled);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormDisabled).call(this, props));
		}
	
		_createClass(ModalFormDisabled, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.show,
						onHide: this.hideModal.bind(this)
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							!this.props.data.title ? this.props.data.name : this.props.data.title,
							_react2.default.createElement(
								"small",
								{ className: "block" },
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/' + this.props.data.controller + '/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement(
								"h5",
								null,
								"Вы действительно хотите скрыть этот раздел!"
							),
							_react2.default.createElement(
								_Alert2.default,
								{ bsStyle: "danger" },
								_react2.default.createElement(_Glyphicon2.default, { glyph: "warning-sign", className: "mr1" }),
								"Все ",
								_react2.default.createElement(
									"strong",
									null,
									"подразделы"
								),
								" и существующие ",
								_react2.default.createElement(
									"strong",
									null,
									"товары"
								),
								" в этих подразделах на сайте отображаться не будут!"
							),
							_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
						)
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ form: "formModal", bsStyle: "primary", type: "submit" },
							"Скрыть"
						)
					)
				);
			}
		}]);
	
		return ModalFormDisabled;
	}(_react2.default.Component);
	
	exports.default = ModalFormDisabled;

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ModalFormDisabled = function (_React$Component) {
		_inherits(ModalFormDisabled, _React$Component);
	
		function ModalFormDisabled(props) {
			_classCallCheck(this, ModalFormDisabled);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormDisabled).call(this, props));
		}
	
		_createClass(ModalFormDisabled, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{
						show: this.props.show,
						onHide: this.hideModal.bind(this)
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							!this.props.data.title ? this.props.data.name : this.props.data.title,
							_react2.default.createElement(
								"small",
								{ className: "block" },
								this.props.title
							)
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/' + this.props.data.controller + '/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement(
								"p",
								null,
								"Вы действительно хотите показать этот раздел!"
							),
							_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
						)
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"Отмена"
						),
						_react2.default.createElement(
							_Button2.default,
							{ form: "formModal", bsStyle: "success", type: "submit" },
							"Показать"
						)
					)
				);
			}
		}]);
	
		return ModalFormDisabled;
	}(_react2.default.Component);
	
	exports.default = ModalFormDisabled;

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(347);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(349);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(352);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ModalResponseMessage = __webpack_require__(499);
	
	var _ModalResponseMessage2 = _interopRequireDefault(_ModalResponseMessage);
	
	var _gitHubHelper = __webpack_require__(278);
	
	var _gitHubHelper2 = _interopRequireDefault(_gitHubHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ModalFormIssue = function (_React$Component) {
		_inherits(ModalFormIssue, _React$Component);
	
		function ModalFormIssue(props) {
			_classCallCheck(this, ModalFormIssue);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFormIssue).call(this, props));
	
			_this.state = {
				url: '',
				title: '',
				body: '',
				label: '',
				showMessage: false,
				textMessage: '',
				titleMessage: 'Alert',
				typeMessage: 'success',
				sizeMessage: 'lg'
			};
			return _this;
		}
	
		_createClass(ModalFormIssue, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
				this.setState({
					url: document.location.href,
					title: '',
					body: ''
				});
			}
		}, {
			key: "hideMessage",
			value: function hideMessage() {
				this.setState({
					showMessage: false
				});
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				this.setState({
					url: document.location.href
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this2 = this;
	
				document.onkeydown = function (e) {
					if (e.altKey && e.keyCode == 113) {
						_this2.setState({
							showModal: true
						});
					}
				};
			}
		}, {
			key: "handleChange",
			value: function handleChange(key) {
				var _this3 = this;
	
				return function (e) {
					var data = {};
					data[key] = e.target.value;
					_this3.setState(data);
				};
			}
		}, {
			key: "sendIssue",
			value: function sendIssue() {
				var data = {
					"title": this.state.title,
					"body": '## ' + this.state.url + '\n\n' + this.state.body,
					"labels": [this.state.label ? this.state.label : 'ошибка'] };
				console.log(data);
				_gitHubHelper2.default.newIssue(data).then(function (dataInfo) {
					console.log(dataInfo);
					if (dataInfo.status == 201 && dataInfo.statusText == 'Created') {
						this.hideModal();
						this.setState({
							showMessage: true,
							titleMessage: 'Сообщение #' + dataInfo.data.number + '.',
							textMessage: 'Ваше сообщение об ошибке создано. Благодарю за помощь. В ближайшее время ошибка будет исправлена!'
						});
					} else {
						this.setState({
							showMessage: true,
							typeMessage: 'danger',
							titleMessage: 'Ошибка!',
							textMessage: 'Сообщение не отправлено. Ошибка сервера. Обратитесь к администратору.',
							sizeMessage: 'small'
						});
					}
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_Modal2.default,
						{
							show: this.props.show,
							onHide: this.hideModal.bind(this)
						},
						_react2.default.createElement(
							_Modal2.default.Header,
							{ closeButton: true },
							_react2.default.createElement(
								_Modal2.default.Title,
								{ id: "contained-modal-title-lg", className: "h3" },
								!this.props.data.title ? this.props.data.name : this.props.data.title,
								_react2.default.createElement(
									"small",
									{ className: "block" },
									this.props.title
								)
							)
						),
						_react2.default.createElement(
							_Modal2.default.Body,
							null,
							_react2.default.createElement(
								"form",
								null,
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										null,
										"Название ошибки"
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										placeholder: "Название ошибки",
										name: "title",
										value: this.state.title,
										onChange: this.handleChange('title').bind(this)
									})
								),
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										null,
										"Тип ошибки"
									),
									_react2.default.createElement(
										_FormControl2.default,
										{
											componentClass: "select",
											placeholder: "select",
											name: "label",
											onChange: this.handleChange('label').bind(this) },
										_react2.default.createElement(
											"option",
											{ value: "select" },
											"..."
										),
										_react2.default.createElement(
											"option",
											{ value: "ошибка" },
											"ошибка"
										),
										_react2.default.createElement(
											"option",
											{ value: "доработка" },
											"доработка"
										),
										_react2.default.createElement(
											"option",
											{ value: "enhancement" },
											"предложение"
										),
										_react2.default.createElement(
											"option",
											{ value: "question" },
											"вопрос"
										)
									)
								),
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										null,
										"Описание ошибки"
									),
									_react2.default.createElement(_FormControl2.default, {
										componentClass: "textarea",
										placeholder: "Описание ошибки",
										name: "body",
										value: this.state.body,
										onChange: this.handleChange('body').bind(this),
										rows: "8"
									})
								)
							)
						),
						_react2.default.createElement(
							_Modal2.default.Footer,
							null,
							_react2.default.createElement(
								_Button2.default,
								{ onClick: this.hideModal.bind(this) },
								"Отмена"
							),
							_react2.default.createElement(
								_Button2.default,
								{ bsStyle: "primary", onClick: this.sendIssue.bind(this) },
								"Отправить"
							)
						)
					),
					_react2.default.createElement(_ModalResponseMessage2.default, {
						showMessage: this.state.showMessage,
						hideMessage: this.hideMessage.bind(this),
						title: this.state.titleMessage,
						type: this.state.typeMessage,
						text: this.state.textMessage,
						size: this.state.sizeMessage
					})
				);
			}
		}]);
	
		return ModalFormIssue;
	}(_react2.default.Component);
	
	exports.default = ModalFormIssue;

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ModalResponseMessage = function (_React$Component) {
		_inherits(ModalResponseMessage, _React$Component);
	
		function ModalResponseMessage(props) {
			_classCallCheck(this, ModalResponseMessage);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalResponseMessage).call(this, props));
		}
	
		_createClass(ModalResponseMessage, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hideMessage();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_Modal2.default,
					{ show: this.props.showMessage, onHide: this.hideModal.bind(this), bsSize: this.props.size },
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true, className: 'mb0 alert alert-' + this.props.type },
						_react2.default.createElement(
							_Modal2.default.Title,
							null,
							this.props.title
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						{ className: "text-center" },
						this.props.text
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"OK"
						)
					)
				);
			}
		}]);
	
		return ModalResponseMessage;
	}(_react2.default.Component);
	
	exports.default = ModalResponseMessage;

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _ButtonComponent = __webpack_require__(355);
	
	var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);
	
	var _ModalComponent = __webpack_require__(356);
	
	var _ModalComponent2 = _interopRequireDefault(_ModalComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ItemButtonsComponent = function (_React$Component) {
		_inherits(ItemButtonsComponent, _React$Component);
	
		function ItemButtonsComponent(props) {
			_classCallCheck(this, ItemButtonsComponent);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemButtonsComponent).call(this, props));
	
			_this.state = {
				show: false,
				action: '',
				title: '',
				data: ''
			};
			return _this;
		}
	
		_createClass(ItemButtonsComponent, [{
			key: "showModal",
			value: function showModal() {
				this.setState({ show: true });
			}
		}, {
			key: "hideModal",
			value: function hideModal() {
				this.setState({ show: false });
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				var controller = this.props.dataItem.controller,
				    id = this.props.dataItem.id;
				_getDataHelper2.default.getDataInfo(controller, id).then(function (dataInfo) {
					this.setState({
						data: dataInfo
					});
				}.bind(this));
			}
		}, {
			key: "handlerClickButton",
			value: function handlerClickButton(action, title) {
				this.setState({
					action: action,
					title: title,
					show: true
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var bsStyle = this.props.dataItem.bsstyle ? this.props.dataItem.bsstyle : 'default';
	
				var Buttons = [{
					icon: "edit",
					enable: true,
					action: "edit",
					role: ['manager', 'admin'],
					title: "Редактировать"
				}, {
					icon: "trash",
					enable: !this.props.dataItem.deleted,
					action: "delete",
					role: ['admin'],
					title: "Удалить"
				}, {
					icon: "open",
					enable: this.props.dataItem.deleted,
					action: "recover",
					role: ['admin'],
					title: "Восcтановить"
				}, {
					icon: "eye-close",
					enable: this.props.dataItem.active && !this.props.dataItem.deleted,
					action: "disabled",
					role: ['admin'],
					title: "Скрыть"
				}, {
					icon: "eye-open",
					enable: !this.props.dataItem.active && !this.props.dataItem.deleted,
					action: "enabled",
					role: ['admin'],
					title: "Показать"
				}]
				/*.filter(
	   	(button) => button.enable && button.role.indexOf(this.props.dataItem.role) != -1
	   )*/
				.map(function (button, i) {
					return button.enable && _react2.default.createElement(_ButtonComponent2.default, {
						key: i,
						bsStyle: bsStyle,
						onClick: _this2.handlerClickButton.bind(_this2),
						action: button.action,
						icon: button.icon,
						title: button.title,
						disabled: !(button.role.indexOf(_this2.props.dataItem.role) != -1) });
				});
	
				return _react2.default.createElement(
					"div",
					{ className: "btn-group btn-group-sm" },
					Buttons,
					_react2.default.createElement(_ModalComponent2.default, {
						show: this.state.show,
						hide: this.hideModal.bind(this),
						data: this.state.data,
						title: this.state.title,
						action: this.state.action
					})
				);
			}
		}]);
	
		return ItemButtonsComponent;
	}(_react2.default.Component);
	
	exports.default = ItemButtonsComponent;
	;

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _CategoriesFormAdd = __webpack_require__(492);
	
	var _CategoriesFormAdd2 = _interopRequireDefault(_CategoriesFormAdd);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoriesAddButton = function (_React$Component) {
		_inherits(CategoriesAddButton, _React$Component);
	
		function CategoriesAddButton(props) {
			_classCallCheck(this, CategoriesAddButton);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CategoriesAddButton).call(this, props));
	
			_this.state = {
				show: false,
				data: ''
			};
			return _this;
		}
	
		_createClass(CategoriesAddButton, [{
			key: "showModal",
			value: function showModal() {
				this.setState({ show: true });
			}
		}, {
			key: "hideModal",
			value: function hideModal() {
				this.setState({ show: false });
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				var id = this.props.dataItem.id;
				_getDataHelper2.default.getCategoryInfo(id).then(function (dataCategoryInfo) {
					this.setState({
						data: dataCategoryInfo
					});
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_Button2.default,
						{
							onClick: this.showModal.bind(this),
							disabled: this.props.dataItem.role != 'admin' },
						this.props.dataItem.title
					),
					_react2.default.createElement(
						_Modal2.default,
						{
							show: this.state.show,
							onHide: this.hideModal.bind(this),
							dialogClassName: "w100"
						},
						_react2.default.createElement(
							_Modal2.default.Header,
							{ closeButton: true },
							_react2.default.createElement(
								_Modal2.default.Title,
								{ id: "contained-modal-title-lg", className: "h3" },
								this.state.data.name,
								_react2.default.createElement(
									"small",
									{ className: "block" },
									this.props.dataItem.title
								)
							)
						),
						_react2.default.createElement(
							_Modal2.default.Body,
							null,
							_react2.default.createElement(
								"form",
								{
									action: '/admin/categories/add/',
									id: "formModal",
									method: "post",
									encType: "multipart/form-data"
								},
								_react2.default.createElement(_CategoriesFormAdd2.default, { data: this.state.data }),
								_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
							)
						),
						_react2.default.createElement(
							_Modal2.default.Footer,
							null,
							_react2.default.createElement(
								_Button2.default,
								{ onClick: this.hideModal.bind(this) },
								"Отмена"
							),
							_react2.default.createElement(
								_Button2.default,
								{ form: "formModal", bsStyle: "success", type: "submit" },
								"Сохранить изменения"
							)
						)
					)
				);
			}
		}]);
	
		return CategoriesAddButton;
	}(_react2.default.Component);
	
	exports.default = CategoriesAddButton;

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ProductFormAdd = __webpack_require__(493);
	
	var _ProductFormAdd2 = _interopRequireDefault(_ProductFormAdd);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductAddButton = function (_React$Component) {
		_inherits(ProductAddButton, _React$Component);
	
		function ProductAddButton(props) {
			_classCallCheck(this, ProductAddButton);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductAddButton).call(this, props));
	
			_this.state = {
				show: false,
				data: ''
			};
			return _this;
		}
	
		_createClass(ProductAddButton, [{
			key: "showModal",
			value: function showModal() {
				this.setState({ show: true });
			}
		}, {
			key: "hideModal",
			value: function hideModal() {
				this.setState({ show: false });
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var categoryId = this.props.dataItem.categoryid;
				_getDataHelper2.default.getCategoryInfo(categoryId).then(function (dataCategoryInfo) {
					this.setState({
						data: dataCategoryInfo
					});
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						_Button2.default,
						{
							onClick: this.showModal.bind(this),
							disabled: this.props.dataItem.role != 'admin' },
						this.props.dataItem.title
					),
					_react2.default.createElement(
						_Modal2.default,
						{
							show: this.state.show,
							onHide: this.hideModal.bind(this),
							dialogClassName: "w100"
						},
						_react2.default.createElement(
							_Modal2.default.Header,
							{ closeButton: true },
							_react2.default.createElement(
								_Modal2.default.Title,
								{ id: "contained-modal-title-lg", className: "h3" },
								this.state.data.name,
								_react2.default.createElement(
									"small",
									{ className: "block" },
									this.props.dataItem.title
								)
							)
						),
						_react2.default.createElement(
							_Modal2.default.Body,
							null,
							_react2.default.createElement(
								"form",
								{
									action: '/admin/products/add/',
									id: "formModal",
									method: "post",
									encType: "multipart/form-data"
								},
								_react2.default.createElement(_ProductFormAdd2.default, { data: this.state.data }),
								_react2.default.createElement("input", { type: "hidden", name: "currentUrl", value: window.location.href })
							)
						),
						_react2.default.createElement(
							_Modal2.default.Footer,
							null,
							_react2.default.createElement(
								_Button2.default,
								{ onClick: this.hideModal.bind(this) },
								"Отмена"
							),
							_react2.default.createElement(
								_Button2.default,
								{ form: "formModal", bsStyle: "success", type: "submit" },
								"Сохранить изменения"
							)
						)
					)
				);
			}
		}]);
	
		return ProductAddButton;
	}(_react2.default.Component);
	
	exports.default = ProductAddButton;

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(301);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(264);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Checkbox = __webpack_require__(378);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Table = __webpack_require__(454);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ModificationTableColumn = __webpack_require__(477);
	
	var _ModificationTableColumn2 = _interopRequireDefault(_ModificationTableColumn);
	
	var _getDataHelper = __webpack_require__(354);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProductPassportPdf = function (_React$Component) {
		_inherits(ProductPassportPdf, _React$Component);
	
		function ProductPassportPdf(props) {
			_classCallCheck(this, ProductPassportPdf);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProductPassportPdf).call(this, props));
	
			_this.state = {
				show: false,
				checked: false,
				columns: [],
				rows: []
			};
			return _this;
		}
	
		_createClass(ProductPassportPdf, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				_getDataHelper2.default.getCategoryProductModification(this.props.dataItem.id).then(function (data) {
					this.setState({
						columns: data.columns,
						rows: data.rows
					});
				}.bind(this));
			}
		}, {
			key: "open",
			value: function open() {
				this.setState({ show: true });
			}
		}, {
			key: "close",
			value: function close() {
				this.setState({ show: false });
			}
		}, {
			key: "checkAll",
			value: function checkAll(e) {
	
				var checkboxes = [].slice.call(document.querySelectorAll("input[type='checkbox']"));
				checkboxes.map(function (c) {
					c.checked = e.target.checked;
				});
			}
		}, {
			key: "headTable",
			value: function headTable() {
				return _react2.default.createElement(
					"tr",
					null,
					_react2.default.createElement(
						"th",
						null,
						_react2.default.createElement("input", { type: "checkbox", onClick: this.checkAll.bind(this) })
					),
					_react2.default.createElement(
						"th",
						null,
						"Наименование"
					),
					this.state.columns.map(function (column, i) {
						return _react2.default.createElement(_ModificationTableColumn2.default, {
							key: i,
							column: column });
					})
				);
			}
		}, {
			key: "bodyTable",
			value: function bodyTable() {
				return this.state.rows.map(function (row, i) {
					return _react2.default.createElement(
						"tr",
						{ key: i },
						_react2.default.createElement(
							"td",
							null,
							_react2.default.createElement(_Checkbox2.default, { name: "modifications[]", value: row.item.id })
						),
						_react2.default.createElement(
							"th",
							null,
							row.item.sku
						),
						row.values.map(function (value, i) {
							return _react2.default.createElement(
								"td",
								{ key: i },
								value.value
							);
						})
					);
				});
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"span",
					null,
					_react2.default.createElement(
						"a",
						{ href: "#",
							className: "alpha-icon-print",
							onClick: this.open.bind(this) },
						"Паспорт"
					),
					_react2.default.createElement(
						_Modal2.default,
						{
							dialogClassName: "w90",
							show: this.state.show,
							onHide: this.close.bind(this)
						},
						_react2.default.createElement(
							_Modal2.default.Header,
							{ closeButton: true },
							_react2.default.createElement(
								_Modal2.default.Title,
								{ className: "mtb1 h3" },
								this.props.dataItem.name + ', ' + this.props.dataItem.sku
							)
						),
						_react2.default.createElement(
							_Modal2.default.Body,
							null,
							_react2.default.createElement(
								"form",
								{ id: "print-passport", name: "modification", method: "post", encType: "multipart/form-data", action: '/admin/products/passport/' + this.props.dataItem.id, target: "_blank", rel: "noopener" },
								_react2.default.createElement(
									_Table2.default,
									{ striped: true, bordered: true, hover: true, className: "text-size-small text-center" },
									_react2.default.createElement(
										"thead",
										null,
										this.headTable()
									),
									_react2.default.createElement(
										"tbody",
										null,
										this.bodyTable()
									)
								)
							)
						),
						_react2.default.createElement(
							_Modal2.default.Footer,
							null,
							_react2.default.createElement(
								_Button2.default,
								{ onClick: this.close.bind(this) },
								"Отмена"
							),
							_react2.default.createElement(
								_Button2.default,
								{ bsStyle: "success", type: "submit", form: "print-passport" },
								"Создать паспорт"
							)
						)
					)
				);
			}
		}]);
	
		return ProductPassportPdf;
	}(_react2.default.Component);
	
	exports.default = ProductPassportPdf;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Jc3N1ZU1vZGFsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2l0SHViSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhbmVsQnV0dG9uc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0RGF0YUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3Jtc0VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9EZWZhdWx0Rm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0ltYWdlc1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2x1Z2lmeUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlcy9QYWdlc0Zvcm1FZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmVwbGFjZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yeVJhcGxhY2VMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdHNGb3JtRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Byb2R1Y3RQcm9wZXJ0eUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvTmV3UHJvZHVjdFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Byb2R1Y3RNb2RpZmljYXRpb25IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbnNUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uSGVhZFRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZUNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbk5ld1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lZGlhL01lZGlhRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVkaWEvTWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1TZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zQWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvRGVmYXVsdEZvcm1BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNGb3JtQWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdEZvcm1BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1SZWNvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtRGlzYWJsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1FbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1Jc3N1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsUmVzcG9uc2VNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0l0ZW1CdXR0b25zQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzQWRkQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdEFkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RzL1Byb2R1Y3RQYXNzcG9ydFBkZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7QUFNQSxLQUFNLGFBQWEsU0FBUyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0FBQ0EsZUFBYyxtQkFBUyxNQUFULENBQ2IsaUVBQXVCLFNBQVEsd0JBQS9CLEVBQXdELFVBQVksV0FBVyxPQUEvRSxHQURhLEVBRWIsVUFGYSxDQUFkOztBQUtBLEtBQUcsU0FBUyxhQUFULENBQXVCLHVCQUF2QixDQUFILEVBQW1EO0FBQ2xELE1BQU0sd0JBQXdCLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxTQUFTLGdCQUFULENBQTBCLHVCQUExQixDQUFkLENBQTlCO0FBQ0Esd0JBQXNCLE9BQXRCLENBQThCLFVBQVUsSUFBVixFQUFnQjtBQUM3QyxzQkFBUyxNQUFULENBQWdCLGdFQUFzQixVQUFZLEtBQUssT0FBdkMsR0FBaEIsRUFBbUUsSUFBbkU7QUFDQSxHQUZEO0FBR0E7O0FBRUQsS0FBTSx1QkFBdUIsU0FBUyxjQUFULENBQXdCLHNCQUF4QixDQUE3QjtBQUNBLHlCQUF3QixtQkFBUyxNQUFULENBQ3ZCLCtEQUFxQixVQUFZLHFCQUFxQixPQUF0RCxHQUR1QixFQUV2QixvQkFGdUIsQ0FBeEI7O0FBS0EsS0FBTSxvQkFBb0IsU0FBUyxjQUFULENBQXdCLGdCQUF4QixDQUExQjtBQUNBLHNCQUFxQixtQkFBUyxNQUFULENBQ3BCLDREQUFrQixVQUFZLGtCQUFrQixPQUFoRCxHQURvQixFQUVwQixpQkFGb0IsQ0FBckI7O0FBS0EsS0FBSSxTQUFKO0FBQ0EsS0FBTSxzQkFBc0IsU0FBUyxjQUFULENBQXdCLHVC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IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uR3JvdXBcIjtcblxuaW1wb3J0IElzc3VlTW9kYWxGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvSXNzdWVNb2RhbEZvcm1cIjtcblxuaW1wb3J0IFBhbmVsQnV0dG9uc0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1BhbmVsQnV0dG9uc0NvbXBvbmVudFwiO1xuaW1wb3J0IEl0ZW1CdXR0b25zQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvSXRlbUJ1dHRvbnNDb21wb25lbnRcIjtcbmltcG9ydCBDYXRlZ29yaWVzQWRkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNBZGRCdXR0b25cIjtcbmltcG9ydCBQcm9kdWN0QWRkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0QWRkQnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvblwiO1xuaW1wb3J0IFByb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL1Byb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdFBhc3Nwb3J0UGRmIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0UGFzc3BvcnRQZGZcIjtcblxuLypjb25zdCBpc3N1ZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzc3VlTW9kYWwnKTtcbmlzc3VlTW9kYWwgJiYgUmVhY3RET00ucmVuZGVyKFxuXHQ8SXNzdWVNb2RhbEZvcm0vPixcblx0aXNzdWVNb2RhbFxuKTsqL1xuXG5jb25zdCBhZG1pblBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkbWluLXBhbmVsJyk7XG5hZG1pblBhbmVsICYmIFJlYWN0RE9NLnJlbmRlcihcblx0PFBhbmVsQnV0dG9uc0NvbXBvbmVudCBic0NsYXNzPVwiYnRuLWdyb3VwLWxnIGJ0bi1ncm91cFwiIGRhdGFJdGVtID0ge2FkbWluUGFuZWwuZGF0YXNldH0vPixcblx0YWRtaW5QYW5lbFxuKTtcblxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1CdXR0b25zQ29tcG9uZW50Jykpe1xuXHRjb25zdCBpdGVtQnV0dG9uc0NvbXBvbmVudHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtQnV0dG9uc0NvbXBvbmVudCcpKTtcblx0aXRlbUJ1dHRvbnNDb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRSZWFjdERPTS5yZW5kZXIoPEl0ZW1CdXR0b25zQ29tcG9uZW50IGRhdGFJdGVtID0ge2l0ZW0uZGF0YXNldH0vPiwgaXRlbSk7XG5cdH0pO1xufVxuXG5jb25zdCBjYXRlZ29yaWVzQWRkQnV0dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWVzQWRkQnV0dHRvbicpO1xuY2F0ZWdvcmllc0FkZEJ1dHR0b24gJiZcdFJlYWN0RE9NLnJlbmRlcihcblx0PENhdGVnb3JpZXNBZGRCdXR0b24gZGF0YUl0ZW0gPSB7Y2F0ZWdvcmllc0FkZEJ1dHR0b24uZGF0YXNldH0vPixcblx0Y2F0ZWdvcmllc0FkZEJ1dHR0b25cbik7XG5cbmNvbnN0IHByb2R1Y3RBZGRCdXR0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1BZGRCdXR0dG9uJyk7XG5wcm9kdWN0QWRkQnV0dHRvbiAmJiBSZWFjdERPTS5yZW5kZXIoXG5cdDxQcm9kdWN0QWRkQnV0dG9uIGRhdGFJdGVtID0ge3Byb2R1Y3RBZGRCdXR0dG9uLmRhdGFzZXR9Lz4sXG5cdHByb2R1Y3RBZGRCdXR0dG9uXG4pO1xuXG52YXIgcHJvZHVjdElkO1xuY29uc3QgcHJvZHVjdFByb3BlcnR5RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXByb3BlcnR5LWVkaXQnKTtcbmlmIChwcm9kdWN0UHJvcGVydHlFZGl0KXtcblx0cHJvZHVjdElkID0gcHJvZHVjdFByb3BlcnR5RWRpdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblx0UmVhY3RET00ucmVuZGVyKDxQcm9kdWN0UHJvcGVydHlFZGl0QnV0dG9uXG5cdFx0cm9sZSA9IHtwcm9kdWN0UHJvcGVydHlFZGl0LmdldEF0dHJpYnV0ZSgncm9sZScpfVxuXHRcdGlkID0ge3Byb2R1Y3RQcm9wZXJ0eUVkaXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyl9XG5cdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdGJzU2l6ZT1cInNtYWxsXCJcblx0XHRjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcblx0Lz4sIHByb2R1Y3RQcm9wZXJ0eUVkaXQpO1xufVxuXG5jb25zdCBwcm9kdWN0TW9kaWZpY2F0aW9uRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LW1vZGlmaWNhdGlvbi1lZGl0Jyk7XG5pZiAocHJvZHVjdE1vZGlmaWNhdGlvbkVkaXQpe1xuXHRwcm9kdWN0SWQgPSBwcm9kdWN0TW9kaWZpY2F0aW9uRWRpdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcdGJzU2l6ZT1cInNtYWxsXCI+XG5cdFx0XHQ8UHJvZHVjdE1vZGlmaWNhdGlvbkVkaXRCdXR0b25cblx0XHRcdFx0aWQgPSB7cHJvZHVjdElkfVxuXHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdHJvbGUgPSB7cHJvZHVjdFByb3BlcnR5RWRpdC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKX0vPlxuXHRcdFx0PFByb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b25cblx0XHRcdFx0aWQgPSB7cHJvZHVjdElkfVxuXHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdHJvbGUgPSB7cHJvZHVjdFByb3BlcnR5RWRpdC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKX0vPlxuXHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0LCBwcm9kdWN0TW9kaWZpY2F0aW9uRWRpdCk7XG59XG5cbmNvbnN0IHBhc3Nwb3J0UGRmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3Nwb3J0LXBkZicpO1xucGFzc3BvcnRQZGYgJiYgUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvZHVjdFBhc3Nwb3J0UGRmIGRhdGFJdGVtID0ge3Bhc3Nwb3J0UGRmLmRhdGFzZXR9Lz5cblx0LCBwYXNzcG9ydFBkZlxuKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZW5kLmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnaXRIdWJIZWxwZXIgZnJvbSBcIi4uL3V0aWxzL2dpdEh1YkhlbHBlclwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXNzdWVNb2RhbEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2UsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRib2R5OiAnJyxcblx0XHRcdHJlc3BvbnNlTWVzc2FnZTogJydcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHRpdGxlOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXG5cdFx0fSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKT0+e1xuXHRcdFx0aWYoZS5hbHRLZXkgJiYgZS5rZXlDb2RlID09IDExMyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHNob3dNb2RhbDogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiB0cnVlfSk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlLFxuXHRcdFx0dXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Ym9keTogJydcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdHNlbmRJc3N1ZSgpe1xuXHRcdHZhciBkYXRhID0ge1widGl0bGVcIjogdGhpcy5zdGF0ZS50aXRsZSwgXCJib2R5XCI6IHRoaXMuc3RhdGUuYm9keSwgXCJsYWJlbHNcIjogW1wiZGVzaWduXCJdfTtcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRnaXRIdWJIZWxwZXIubmV3SXNzdWUoZGF0YSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGFJbmZvKXtcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YUluZm8pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRyZXNwb25zZU1lc3NhZ2U6IChkYXRhSW5mby5zdGF0dXMgPT0gMjAxICYmIGRhdGFJbmZvLnN0YXR1c1RleHQgPT0gJ0NyZWF0ZWQnKVxuXHRcdFx0XHRcdFx0PyAn0KHQvtC+0LHRidC10L3QuNC1INC+0LEg0L7RiNC40LHQutC1INGB0L7Qt9C00LDQvdC+LiDQkdC70LDQs9C+0LTQsNGA0Y4g0LfQsCDQv9C+0LzQvtGJ0YwuINCSINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPINC+0YjQuNCx0LrQsCDQsdGD0LTQtdGCINC40YHQv9GA0LDQstC70LXQvdCwISdcblx0XHRcdFx0XHRcdDogJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdC+LiDQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAuINCe0LHRgNCw0YLQuNGC0LXRgdGMINC6INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0YMuJ1xuXHRcdFx0XHR9KVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IG1vZGFsQm9keSA9ICghdGhpcy5zdGF0ZS5yZXNwb25zZU1lc3NhZ2UpXG5cdFx0XHQ/XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5Vcmwg0YHRgtGA0LDQvdC40YbRizwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVcmwg0YHRgtGA0LDQvdC40YbRi1wiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJ1cmxcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS51cmx9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndXJsJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6INC+0YjQuNCx0LrQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1INC+0YjQuNCx0LrQuFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+U2VsZWN0PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIiBwbGFjZWhvbGRlcj1cInNlbGVjdFwiPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+c2VsZWN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJvdGhlclwiPi4uLjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QntC/0LjRgdCw0L3QuNC1INC+0YjQuNCx0LrQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0L7RiNC40LHQutC4XCJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImJvZHlcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5ib2R5fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2JvZHknKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRyb3dzPVwiOFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ6XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3RoaXMuc3RhdGUucmVzcG9uc2VNZXNzYWdlfTwvZGl2PjtcblxuXHRcdGNvbnN0IG1vZGFsRm9vdGVyID0gKCF0aGlzLnN0YXRlLnJlc3BvbnNlTWVzc2FnZSlcblx0XHRcdD8gPGRpdj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGJzU3R5bGU9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuc2VuZElzc3VlLmJpbmQodGhpcyl9PtCe0YLQv9GA0LDQstC40YLRjCDQvtGI0LjQsdC60YM8L0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ6IDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+T2s8L0J1dHRvbj47XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFkbWluXCI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRic1N0eWxlPVwibGlua1wiXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJjb21tZW50XCIgLz5cblx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0PE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfSBvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+0KHQvtC+0LHRidC10L3QuNC1INC+0LEg0L7RiNC40LHQutC1PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdHttb2RhbEJvZHl9XG5cdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHR7bW9kYWxGb290ZXJ9XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0lzc3VlTW9kYWxGb3JtLmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbnZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbnZhciBoZWxwZXJzID0ge1xuXHRnZXRJc3N1ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9BbHBoYS1IeWRyby9hbHBoYS1oeWRyby1hbnRhcmVzL2lzc3Vlc1wiKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm4gXCJlcnJvclwiO1xuXHRcdFx0fSk7XG5cdH0sXG5cblx0bmV3SXNzdWU6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dmFyIGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcblx0XHRcdGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBZV3h3YUdGSWVXUnlienBPVVc0NVpsRjJWVXBZYTJvPSd9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvQWxwaGEtSHlkcm8vYWxwaGEtaHlkcm8tYW50YXJlcy9pc3N1ZXNcIiwgZGF0YSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybiBcImVycm9yXCI7XG5cdFx0XHR9KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWxzL2dpdEh1YkhlbHBlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhSGVscGVycyBmcm9tIFwiLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiO1xuXG5pbXBvcnQgQnV0dG9uQ29tcG9uZW50IGZyb20gXCIuL1BhbmVsQnV0dG9ucy9CdXR0b25Db21wb25lbnRcIjtcbmltcG9ydCBNb2RhbENvbXBvbmVudCBmcm9tIFwiLi9Nb2RhbENvbXBvbmVudFwiO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbkdyb3VwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsQnV0dG9uc0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnJvbGVzID0gWydtYW5hZ2VyJywgJ2FkbWluJ107XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0YWN0aW9uOiAnJyxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGRhdGE6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHNob3dNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlfSk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KTtcblx0fVxuXG5cdHByZWNlZGVuY2Uocm9sZSl7XG5cdFx0cmV0dXJuIHRoaXMucm9sZXMuaW5kZXhPZihyb2xlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBjb250cm9sbGVyID0gdGhpcy5wcm9wcy5kYXRhSXRlbS5jb250cm9sbGVyO1xuXHRcdHZhciBpZCA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uaWQ7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0RGF0YUluZm8oY29udHJvbGxlciwgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhSW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGRhdGFJbmZvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGhhbmRsZXJDbGlja0J1dHRvbihhY3Rpb24sIHRpdGxlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFjdGlvbjogYWN0aW9uLFxuXHRcdFx0dGl0bGU6IHRpdGxlLFxuXHRcdFx0c2hvdzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGJzU3R5bGUgPSAodGhpcy5wcm9wcy5ic3N0eWxlKT90aGlzLnByb3BzLmJzc3R5bGU6J2xpbmsnO1xuXHRcdGNvbnN0IEJ1dHRvbnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwicGVuY2lsXCIsXG5cdFx0XHRcdGVuYWJsZTogdHJ1ZSxcblx0XHRcdFx0YWN0aW9uOiBcImVkaXRcIixcblx0XHRcdFx0cm9sZTogXCJtYW5hZ2VyXCIsXG5cdFx0XHRcdHRpdGxlOlwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogXCJ0YWdzXCIsXG5cdFx0XHRcdGVuYWJsZTogdHJ1ZSxcblx0XHRcdFx0YWN0aW9uOiBcInNlb1wiLFxuXHRcdFx0XHRyb2xlOiBcImFkbWluXCIsXG5cdFx0XHRcdHRpdGxlOlwi0JzQtdGC0LAg0YLQtdCz0LhcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogXCJjb21tZW50XCIsXG5cdFx0XHRcdGVuYWJsZTogdHJ1ZSxcblx0XHRcdFx0YWN0aW9uOiBcImlzc3VlXCIsXG5cdFx0XHRcdHJvbGU6IFwibWFuYWdlclwiLFxuXHRcdFx0XHR0aXRsZTpcItCh0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtVwiXG5cdFx0XHR9XG5cdFx0XS5tYXAoKGJ1dHRvbiwgaSkgPT5cblx0XHRcdGJ1dHRvbi5lbmFibGUgJiYgPEJ1dHRvbkNvbXBvbmVudFxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGJzU3R5bGU9e2JzU3R5bGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlckNsaWNrQnV0dG9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdGFjdGlvbj17YnV0dG9uLmFjdGlvbn1cblx0XHRcdFx0aWNvbj17YnV0dG9uLmljb259XG5cdFx0XHRcdHRpdGxlPXtidXR0b24udGl0bGV9XG5cdFx0XHQvPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEJ1dHRvbkdyb3VwIGJzQ2xhc3M9e3RoaXMucHJvcHMuYnNDbGFzc30+XG5cdFx0XHRcdFx0e0J1dHRvbnN9XG5cdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdDxNb2RhbENvbXBvbmVudFxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd31cblx0XHRcdFx0XHRoaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cblx0XHRcdFx0XHR0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRhY3Rpb249e3RoaXMuc3RhdGUuYWN0aW9ufVxuXHRcdFx0XHRcdGtleWJvYXJkPXtmYWxzZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1BhbmVsQnV0dG9uc0NvbXBvbmVudC5qc1xuICoqLyIsInZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbnZhciBoZWxwZXJzID0ge1xuXHRnZXRDYXRlZ29yeUluZm86IGZ1bmN0aW9uKGlkKXtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9jYXRlZ29yaWVzL2dldC9cIiArIGlkICsgXCIvXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblx0XG5cdGdldENhdGVnb3J5UHJvZHVjdDogZnVuY3Rpb24gKGlkKSB7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChcIi9hZG1pbi9wcm9kdWN0cy9jYXRlZ29yeS8/aWQ9XCIgKyBpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldENhdGVnb3J5UHJvZHVjdFByb3BlcnRpZXM6IGZ1bmN0aW9uIChpZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vcHJvZHVjdHMvcHJvcGVydHkvP2lkPVwiICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRDYXRlZ29yeVByb2R1Y3RNb2RpZmljYXRpb246IGZ1bmN0aW9uIChpZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RzL21vZGlmaWNhdGlvbnMvP2lkPVwiICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRDdXJyZW50R2F0ZWdvcnlMaXN0OiBmdW5jdGlvbihpZCl7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChcIi9hcGkvY2F0ZWdvcmllcy9saXN0L1wiICsgaWQgKyBcIi9cIilcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldFN1YkdhdGVnb3J5TGlzdDogZnVuY3Rpb24oaWQpe1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYXBpL2NhdGVnb3JpZXMvbGlzdC9cIiArIGlkICsgXCIvP2NoaWxkcmVuPXRydWVcIilcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9LFxuXG5cdGdldERhdGFJbmZvOiBmdW5jdGlvbihjb250cm9sbGVyLCBpZCkge1xuXHRcdHZhciB1cmwgPSBcIi9hZG1pbi9cIitjb250cm9sbGVyK1wiL2pzb24vP2lkPVwiO1xuXHRcdHJldHVybiBheGlvcy5nZXQodXJsICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRQYWdlSW5mbzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGF4aW9zLmdldCh3aW5kb3cubG9jYXRpb24uaHJlZiArIFwiP2pzb25cIilcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMvZ2V0RGF0YUhlbHBlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcclxuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcblx0aGFuZGxlckNsaWNrKGUpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuYWN0aW9uLCB0aGlzLnByb3BzLnRpdGxlKTtcclxuXHR9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuXHRcdFx0XHQ8QnV0dG9uIHsuLi50aGlzLnByb3BzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZXJDbGljay5iaW5kKHRoaXMpfT5cclxuXHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9e3RoaXMucHJvcHMuaWNvbn0gLz5cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWxGb3Jtc0VkaXQgZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zRWRpdFwiO1xuaW1wb3J0IE1vZGFsRm9ybVNlbyBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybVNlb1wiO1xuaW1wb3J0IE1vZGFsRm9ybXNBZGQgZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zQWRkXCI7XG5pbXBvcnQgTW9kYWxGb3JtRGVsZXRlIGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3JtRGVsZXRlXCI7XG5pbXBvcnQgTW9kYWxGb3JtUmVjb3ZlciBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybVJlY292ZXJcIjtcbmltcG9ydCBNb2RhbEZvcm1EaXNhYmxlZCBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybURpc2FibGVkXCI7XG5pbXBvcnQgTW9kYWxGb3JtRW5hYmxlIGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3JtRW5hYmxlXCI7XG5pbXBvcnQgTW9kYWxGb3JtSXNzdWUgZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1Jc3N1ZVwiO1xuXG5pbXBvcnQgZ2l0SHViSGVscGVyIGZyb20gXCIuLi91dGlscy9naXRIdWJIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IG1vZGFsRm9ybSA9ICgpID0+IHtcblx0XHRcdHN3aXRjaCAodGhpcy5wcm9wcy5hY3Rpb24pIHtcblx0XHRcdFx0Y2FzZSBcImVkaXRcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybXNFZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwic2VvXCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1TZW8gey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhZGRcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybXNBZGQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWxldGVcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybURlbGV0ZSB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlY292ZXJcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybVJlY292ZXIgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNhYmxlZFwiOlxuXHRcdFx0XHRcdHJldHVybiA8TW9kYWxGb3JtRGlzYWJsZWQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJlbmFibGVkXCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1FbmFibGUgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJpc3N1ZVwiOlxuXHRcdFx0XHRcdHJldHVybiA8TW9kYWxGb3JtSXNzdWUgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIG1vZGFsRm9ybSgpO1xuXG5cdH1cbn07XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxDb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBEZWZhdWx0Rm9ybUVkaXQgZnJvbSBcIi4vRGVmYXVsdEZvcm1FZGl0XCI7XG5pbXBvcnQgUGFnZXNGb3JtRWRpdCBmcm9tIFwiLi8uLi9QYWdlcy9QYWdlc0Zvcm1FZGl0XCI7XG5pbXBvcnQgQ2F0ZWdvcmllc0Zvcm1FZGl0IGZyb20gXCIuLy4uL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzRm9ybUVkaXRcIjtcbmltcG9ydCBQcm9kdWN0c0Zvcm1FZGl0IGZyb20gXCIuLy4uL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdHNGb3JtRWRpdFwiO1xuaW1wb3J0IE1lZGlhRm9ybUVkaXQgZnJvbSBcIi4vLi4vTWVkaWEvTWVkaWFGb3JtRWRpdFwiO1xuaW1wb3J0IE1lZGlhQ2F0ZWdvcmllc0Zvcm1FZGl0IGZyb20gXCIuLy4uL01lZGlhL01lZGlhQ2F0ZWdvcmllc0Zvcm1FZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybXNFZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpXG5cdH1cblxuXHRzZWxlY3RFZGl0SW5wdXRzKCl7XG5cdFx0c3dpdGNoICh0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcil7XG5cdFx0XHRjYXNlIFwicGFnZXNcIjogcmV0dXJuIDxQYWdlc0Zvcm1FZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0Y2FzZSBcImNhdGVnb3JpZXNcIjogcmV0dXJuIDxDYXRlZ29yaWVzRm9ybUVkaXQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRjYXNlIFwicHJvZHVjdHNcIjogcmV0dXJuIDxQcm9kdWN0c0Zvcm1FZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0Y2FzZSBcIm1lZGlhXCI6IHJldHVybiA8TWVkaWFGb3JtRWRpdCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdGNhc2UgXCJtZWRpYS1jYXRlZ29yaWVzXCI6IHJldHVybiA8TWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gPERlZmF1bHRGb3JtRWRpdCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHNob3c9e3RoaXMucHJvcHMuc2hvd31cblx0XHRcdFx0b25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJ3MTAwXCJcblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0eyghdGhpcy5wcm9wcy5kYXRhLnRpdGxlKT90aGlzLnByb3BzLmRhdGEubmFtZTp0aGlzLnByb3BzLmRhdGEudGl0bGV9XG5cdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluLycrdGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xsZXIrJy8nK3RoaXMucHJvcHMuYWN0aW9uKycvJyt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRcdGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dGhpcy5zZWxlY3RFZGl0SW5wdXRzKCl9XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRGb3JtRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGl0bGUgOiAoIXByb3BzLmRhdGEudGl0bGUpP3Byb3BzLmRhdGEubmFtZTpwcm9wcy5kYXRhLnRpdGxlLFxuXHRcdFx0cGF0aDogcHJvcHMuZGF0YS5wYXRoLFxuXHRcdFx0ZGVzY3JpcHRpb246IHByb3BzLmRhdGEuZGVzY3JpcHRpb24sXG5cdFx0XHRjb250ZW50TWFya2Rvd246IHByb3BzLmRhdGEuY29udGVudE1hcmtkb3duLFxuXHRcdFx0Y29udGVudEh0bWw6IHByb3BzLmRhdGEuY29udGVudEh0bWwsXG5cdFx0XHRzb3J0aW5nOiBwcm9wcy5kYXRhLnNvcnRpbmcsXG5cdFx0XHR1cGxvYWRQYXRoOiAoIXByb3BzLmRhdGEudXBsb2FkUGF0aCk/Jyc6cHJvcHMuZGF0YS51cGxvYWRQYXRoLFxuXHRcdFx0aW1hZ2U6ICghcHJvcHMuZGF0YS5pbWFnZSlcblx0XHRcdFx0P1wiL2ZpbGVzL2ltYWdlcy9wcm9kdWN0LzIwMTItMDUtMjJfZm90b19udi5qcGdcIlxuXHRcdFx0XHQ6cHJvcHMuZGF0YS5pbWFnZVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdGdlbmVyYXRlUGF0aEZyb21UaXRsZSgpe1xuXHRcdHZhciB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG5cdFx0U2x1Z2lmeS5nZXRTbHVnaWZ5KHRpdGxlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHBhdGgpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7cGF0aDogcGF0aH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGltZ1NyYyA9IHRoaXMuc3RhdGUudXBsb2FkUGF0aCArIHRoaXMuc3RhdGUuaW1hZ2U7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgZmx1aWQ9e3RydWV9PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17aW1nU3JjfS8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBtZD17OX0+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCX0LDQs9C+0LvQvtCy0L7QujwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVt0aXRsZV1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndGl0bGUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+VXJsPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUGF0aEZyb21UaXRsZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInJlZnJlc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVybFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdwYXRoJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbY29udGVudE1hcmtkb3duXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFQYWdlW2NvbnRlbnRIdG1sXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudEhUTUx9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvR3JpZD5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvRGVmYXVsdEZvcm1FZGl0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtJbWFnZSwgQnV0dG9uR3JvdXAsIEJ1dHRvbiwgR2x5cGhpY29ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1VwbG9hZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbWFnZTogcHJvcHMuaW1hZ2UsXG5cdFx0XHRkZWxldGU6IHByb3BzLmRlbGV0ZVxuXHRcdH1cblx0fVxuXG5cdGZpbGVTZWxlY3QoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBmaWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCghdGhpcy5wcm9wcy5pbnB1dE5hbWUpP1wiZmlsZUVsZW1cIjp0aGlzLnByb3BzLmlucHV0TmFtZSk7XG5cdFx0ZmlsZUVsZW0uY2xpY2soKTtcblx0fVxuXG5cdGhhbmRsZUZpbGVzKGUpe1xuXHRcdHZhciBfcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRfcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbWFnZTogX3JlYWRlci5yZXN1bHRcblx0XHRcdH0pXG5cdFx0fTtcblx0XHRfcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuXG5cdH1cblxuXHRmaWxlRGVsZXRlKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGltYWdlOiBcIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZygn0KTQsNC50Lsg0YPQtNCw0LvQtdC9Li4uJyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWIyIGltYWdlLWVkaXRcIj5cblx0XHRcdFx0PEltYWdlIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0gdGh1bWJuYWlsIC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdGlkPXsoIXRoaXMucHJvcHMuaW5wdXROYW1lKT9cImZpbGVFbGVtXCI6dGhpcy5wcm9wcy5pbnB1dE5hbWV9XG5cdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRuYW1lPXsoIXRoaXMucHJvcHMuaW5wdXROYW1lKT9cImZpbGVMb2FkXCI6dGhpcy5wcm9wcy5pbnB1dE5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZXMuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNob3ctYnRuLWdyb3VwXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGJzU2l6ZT1cInNtYWxsXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5maWxlU2VsZWN0LmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwiZG93bmxvYWQtYWx0XCIgLz5cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmRlbGV0ZX0gb25DbGljaz17dGhpcy5maWxlRGVsZXRlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwidHJhc2hcIiAvPlxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlscy9JbWFnZXNVcGxvYWQuanNcbiAqKi8iLCJ2YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgaGVscGVycyA9IHtcblx0Z2V0U2x1Z2lmeTogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vaW5kZXgvc2x1Z2lmeS8/c2x1Z2lmeT1cIiArIHN0cmluZylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRnZXRQcm9kdWN0U2x1Z2lmeTogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vaW5kZXgvc2x1Z2lmeS1wcm9kdWN0LXNrdS8/c2x1Z2lmeT1cIiArIHN0cmluZylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMvc2x1Z2lmeUhlbHBlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlc0Zvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6IHByb3BzLmRhdGEudGl0bGUsXG5cdFx0XHRwYXRoOiBwcm9wcy5kYXRhLnBhdGgsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuZGF0YS5kZXNjcmlwdGlvbixcblx0XHRcdGNvbnRlbnRNYXJrZG93bjogcHJvcHMuZGF0YS5jb250ZW50TWFya2Rvd24sXG5cdFx0XHRjb250ZW50SHRtbDogcHJvcHMuZGF0YS5jb250ZW50SHRtbCxcblx0XHRcdHNvcnRpbmc6IHByb3BzLmRhdGEuc29ydGluZyxcblx0XHRcdGltYWdlOiAoIXByb3BzLmRhdGEuaW1hZ2UpXG5cdFx0XHRcdD9cIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdFx0OnByb3BzLmRhdGEuaW1hZ2Vcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgZmx1aWQ9e3RydWV9PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5zdGF0ZS5pbWFnZX0vPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbdGl0bGVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbY29udGVudE1hcmtkb3duXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtjb250ZW50SHRtbF1cIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50SFRNTH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUGFnZXMvUGFnZXNGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5pbXBvcnQgY2F0ZWdvcnlIZWxwZXJzIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IENhdGVnb3J5UmVwbGFjZSBmcm9tIFwiLi9DYXRlZ29yeVJlcGxhY2VDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllc0Zvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBwcm9wcy5kYXRhLFxuXHRcdFx0cGFyZW50SWQ6IHByb3BzLmRhdGEucGFyZW50SWQsXG5cdFx0XHRjYXRlZ29yeUluZm86ICcnXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dmFyIGlkID0gdGhpcy5wcm9wcy5kYXRhLnBhcmVudElkO1xuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjYXRlZ29yeUluZm86IGNhdGVnb3J5SW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTpkYXRhfSk7XG5cdFx0fTtcblx0fVxuXG5cdHRpdGxlQ2hhbmdlKGUpe1xuXHRcdHZhciB0aXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0XHRkYXRhWydwYXRoJ11cdD0gcGF0aDtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGdlbmVyYXRlUGF0aEZyb21UaXRsZSgpe1xuXHRcdHZhciB0aXRsZSA9IHRoaXMuc3RhdGUuZGF0YS5uYW1lO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0XHRkYXRhWydwYXRoJ11cdD0gcGF0aDtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHNlbGVjdENhdGVnb3J5KGlkKXtcblx0XHRjb25zb2xlLmxvZygnU0VMRUNURUQgQ0FURUdPUlknLGlkKTtcblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q2F0ZWdvcnlJbmZvKGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dmFyIGRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0XHRcdGRhdGFbJ2JyZWFkY3J1bWJzJ10gPSAoY2F0ZWdvcnlJbmZvLmJyZWFkY3J1bWJzKVxuXHRcdFx0XHRcdD8gY2F0ZWdvcnlJbmZvLmJyZWFkY3J1bWJzICsgJyA+ICcgKyBjYXRlZ29yeUluZm8ubmFtZVxuXHRcdFx0XHRcdDogY2F0ZWdvcnlJbmZvLm5hbWU7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdFx0cGFyZW50SWQ6IGNhdGVnb3J5SW5mby5pZCxcblx0XHRcdFx0XHRjYXRlZ29yeUluZm86IGNhdGVnb3J5SW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRpbWdTcmMoKXtcblx0XHR2YXIgdXBsb2FkUGF0aCA9ICghdGhpcy5zdGF0ZS5kYXRhLnVwbG9hZFBhdGgpPycvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvJzp0aGlzLnN0YXRlLmRhdGEudXBsb2FkUGF0aDtcblx0XHR2YXIgaW1hZ2UgPSAoIXRoaXMuc3RhdGUuZGF0YS5pbWFnZSlcblx0XHRcdD9cIjIwMTItMDUtMjJfZm90b19udi5qcGdcIlxuXHRcdFx0OnRoaXMuc3RhdGUuZGF0YS5pbWFnZTtcblx0XHRyZXR1cm4gdXBsb2FkUGF0aCArIGltYWdlO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuaW1nU3JjKCl9Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W25hbWVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+VXJsPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUGF0aEZyb21UaXRsZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInJlZnJlc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGF0aH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXJsXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgncGF0aCcpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QoNC+0LTQuNGC0LXQu9GM0YHQutCw0Y8g0LrQsNGC0LXQs9C+0YDQuNGPPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxDYXRlZ29yeVJlcGxhY2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudENhdGVnb3J5PXt0aGlzLnN0YXRlLmNhdGVnb3J5SW5mb31cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0Q2F0ZWdvcnk9e3RoaXMuc2VsZWN0Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuYnJlYWRjcnVtYnN9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QntC/0LjRgdCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17KHRoaXMuc3RhdGUuZGF0YS5kZXNjcmlwdGlvbik/dGhpcy5zdGF0ZS5kYXRhLmRlc2NyaXB0aW9uOicnfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IChtYXJrZG93bik8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbY29udGVudE1hcmtkb3duXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNvcnRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W3BhcmVudElkXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUucGFyZW50SWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvR3JpZD5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc0Zvcm1FZGl0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IExpc3RHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9MaXN0R3JvdXBcIjtcblxuaW1wb3J0IGNhdGVnb3J5SGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiXG5pbXBvcnQgQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0IGZyb20gXCIuL0NhdGFsb2dQYXJlbnRDYXRlZ29yeVJlcGxhY2VJdGVtTGlzdFwiXG5pbXBvcnQgQ2F0ZWdvcnlSYXBsYWNlTGlzdCBmcm9tIFwiLi9DYXRlZ29yeVJhcGxhY2VMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5UmVwbGFjZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2UsXG5cdFx0XHRjdXJyZW50Q2F0ZWdvcnk6ICcnLFxuXHRcdFx0cGFyZW50SWQ6ICcnLFxuXHRcdFx0Y2F0ZWdvcnlMaXN0OiBbXSxcblx0XHRcdHNlbGVjdGVkQ2F0ZWdvcnk6ICcnXG5cdFx0fTtcblxuXHRcdHRoaXMuc2VsZWN0Q2F0ZWdvcnkgPSB0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcyk7XG5cdH1cblxuXHQvKmNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBwYXJlbnRJZCA9ICh0aGlzLnByb3BzLmN1cnJlbnRDYXRlZ29yeS5wYXJlbnRJZCk/dGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkucGFyZW50SWQ6JzAnO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudENhdGVnb3J5OiB0aGlzLnByb3BzLmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdH0pO1xuXHR9Ki9cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dmFyIGlkID0gdGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkuaWQ7XG5cdFx0dmFyIHBhcmVudElkID0gdGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkucGFyZW50SWQ7XG5cblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q3VycmVudEdhdGVnb3J5TGlzdChpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5TGlzdCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNhdGVnb3J5TGlzdDogY2F0ZWdvcnlMaXN0LFxuXHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZCxcblx0XHRcdFx0XHRzaG93TW9kYWw6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0c3ViQ2F0ZWdvcmllc0xpc3QoaWQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyhpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGN1cnJlbnRDYXRlZ29yeTogY2F0ZWdvcnlJbmZvLFxuXHRcdFx0XHRcdHBhcmVudElkOiBpZFxuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0U3ViR2F0ZWdvcnlMaXN0KGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlMaXN0KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlMaXN0OiBjYXRlZ29yeUxpc3Rcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdFx0fS5iaW5kKHRoaXMpLCA1MDApO1xuXHR9XG5cblx0Y3VycmVudENhdGVnb3JpZXNMaXN0KGlkKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblxuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjdXJyZW50Q2F0ZWdvcnk6IGNhdGVnb3J5SW5mbyxcblx0XHRcdFx0XHRwYXJlbnRJZDogY2F0ZWdvcnlJbmZvLnBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDdXJyZW50R2F0ZWdvcnlMaXN0KGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlMaXN0KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlMaXN0OiBjYXRlZ29yeUxpc3Rcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdFx0fS5iaW5kKHRoaXMpLCA1MDApO1xuXHR9XG5cblx0cmV0dXJuUGFyZW50Q2F0ZWdvcnkoKXtcblx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yaWVzTGlzdCh0aGlzLnN0YXRlLnBhcmVudElkKTtcblx0fVxuXG5cdHNlbGVjdENhdGVnb3J5KGlkKXtcblx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhdGVnb3J5OiBpZH0pO1xuXHR9XG5cblx0c2VsZWN0Um9vdENhdGVnb3J5KGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2F0ZWdvcnk6IGUudGFyZ2V0LmlkfSk7XG5cdH1cblxuXHRoYW5kbGVyU2F2ZSgpe1xuXHRcdHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRlZ29yeSAmJiB0aGlzLnByb3BzLnNlbGVjdENhdGVnb3J5KHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRlZ29yeSk7XG5cdFx0dGhpcy5jbG9zZSgpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgY2F0ZWdvcnlMaXN0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yeUxpc3Q7XG5cdFx0Y29uc3QgY2F0ZWdvcnlMaXN0Q29tcG9uZW50ID0gY2F0ZWdvcnlMaXN0Lm1hcCgoY2F0ZWdvcnksaSkgPT5cblx0XHRcdDxDYXRlZ29yeVJhcGxhY2VMaXN0XG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0Y2F0ZWdvcnk9e2NhdGVnb3J5fVxuXHRcdFx0XHRldmVudENsaWNrPXt0aGlzLnN1YkNhdGVnb3JpZXNMaXN0LmJpbmQodGhpcyl9XG5cdFx0XHRcdGhhbmRsZXJTZWxlY3Q9e3RoaXMuc2VsZWN0Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0Y3VycmVudElkPXt0aGlzLnByb3BzLmN1cnJlbnRDYXRlZ29yeS5pZH1cblx0XHRcdC8+XG5cdFx0KTtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxCdXR0b24gIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCS0YvQsdC+0YAg0LrQsNGC0LXQs9C+0YDQuNC4PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxMaXN0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3Rcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVyblBhcmVudENhdGVnb3J5ID0ge3RoaXMucmV0dXJuUGFyZW50Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdFJvb3RDYXRlZ29yeSA9IHt0aGlzLnNlbGVjdFJvb3RDYXRlZ29yeS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyZW50SWQgPSB7dGhpcy5zdGF0ZS5wYXJlbnRJZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5TGlzdENvbXBvbmVudH1cblx0XHRcdFx0XHRcdDwvTGlzdEdyb3VwPlxuXHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZXJTYXZlLmJpbmQodGhpcyl9IGJzU3R5bGU9XCJwcmltYXJ5XCI+0JLRi9Cx0YDQsNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcnlSZXBsYWNlQ29tcG9uZW50LmpzXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIEdseXBoaWNvbiA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uJyk7XG52YXIgTGlzdEdyb3VwSXRlbSA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcC9saWIvTGlzdEdyb3VwSXRlbScpO1xudmFyIFJvdyA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcC9saWIvUm93Jyk7XG52YXIgQ29sID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwL2xpYi9Db2wnKTtcblxuZnVuY3Rpb24gQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0KHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnBhcmVudElkICE9IDBcbiAgICAgICAgPyAgIDxMaXN0R3JvdXBJdGVtIG9uQ2xpY2s9e3Byb3BzLnJldHVyblBhcmVudENhdGVnb3J5fT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MX0+PEdseXBoaWNvbiBnbHlwaD1cImxldmVsLXVwXCIvPjwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezExfT4uLi48L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuXG4gICAgICAgIDogICA8TGlzdEdyb3VwSXRlbSA+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRhbG9nQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnNlbGVjdFJvb3RDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICDQndC10YIg0LrQsNGC0LXQs9C+0YDQuNC4ICjQkiDQutC+0YDQvdC1INC60LDRgtCw0LvQvtCz0LApXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxufVxuXG5DYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3QucHJvcFR5cGVzID0ge1xuXHRcdHBhcmVudElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmV0dXJuUGFyZW50Q2F0ZWdvcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0Um9vdENhdGVnb3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGFsb2dQYXJlbnRDYXRlZ29yeVJlcGxhY2VJdGVtTGlzdDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBMaXN0R3JvdXBJdGVtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW1cIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0JhZGdlXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoYW5kbGVyQ2xpY2soZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuZXZlbnRDbGljayh0aGlzLnByb3BzLmNhdGVnb3J5LmlkKTtcblx0fVxuXG5cdHNlbGVjdGVkQ2F0ZWdvcnkoZSl7XG5cdFx0dGhpcy5wcm9wcy5oYW5kbGVyU2VsZWN0KGUudGFyZ2V0LmlkKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5wcm9wcy5jYXRlZ29yeTtcblx0XHRjb25zdCBsYWJlbEluc3RhbmNlID0gKGNhdGVnb3J5LmNvdW50U3ViQ2F0ZWdvcmllcyAhPSAwKVxuXHRcdFx0PyA8YSBocmVmPVwiXCJcblx0XHRcdFx0XHQgY2xhc3NOYW1lPXsoY2F0ZWdvcnkuYWN0aXZlICE9IDApP1wiXCI6XCJ0ZXh0LW11dGVkXCJ9XG5cdFx0XHRcdFx0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlckNsaWNrLmJpbmQodGhpcyl9PntjYXRlZ29yeS5uYW1lfTwvYT5cblx0XHRcdDogPHNwYW5cblx0XHRcdFx0XHRjbGFzc05hbWU9eyhjYXRlZ29yeS5hY3RpdmUgIT0gMCk/XCJcIjpcInRleHQtbXV0ZWRcIn0+XG5cdFx0XHRcdFx0e2NhdGVnb3J5Lm5hbWV9PC9zcGFuPjtcblxuXHRcdGNvbnN0IHJhZGlvSW5zdGFuY2UgPSAoY2F0ZWdvcnkuaWQgIT0gdGhpcy5wcm9wcy5jdXJyZW50SWQpXG5cdFx0XHQ/IDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0bmFtZT1cImNhdGFsb2dDYXRlZ29yeVwiXG5cdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWQ9XCJcIlxuXHRcdFx0XHRcdGlkPXtjYXRlZ29yeS5pZH1cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblx0XHRcdDogPEdseXBoaWNvbiBnbHlwaD1cIm9rXCIgLz47XG5cblx0XHRyZXR1cm4oXG5cdFx0XHRcdDxMaXN0R3JvdXBJdGVtICA+XG5cdFx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezF9PlxuXHRcdFx0XHRcdFx0XHR7cmFkaW9JbnN0YW5jZX1cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17MTB9PlxuXHRcdFx0XHRcdFx0XHR7bGFiZWxJbnN0YW5jZX1cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17MX0+XG5cdFx0XHRcdFx0XHRcdDxCYWRnZVxuXHRcdFx0XHRcdFx0XHRcdHB1bGxSaWdodD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyhjYXRlZ29yeS5jb3VudFN1YkNhdGVnb3JpZXMgIT0gMCk/XCJcIjpcImhpZGRlblwifT5cblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkuY291bnRTdWJDYXRlZ29yaWVzfVxuXHRcdFx0XHRcdFx0XHQ8L0JhZGdlPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdDwvTGlzdEdyb3VwSXRlbT5cblxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmFwbGFjZUxpc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0lucHV0R3JvdXBcIjtcbmltcG9ydCBIZWxwQmxvY2sgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSGVscEJsb2NrXCI7XG5cbmltcG9ydCBjYXRlZ29yeUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcbmltcG9ydCBTbHVnaWZ5IGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL3NsdWdpZnlIZWxwZXJcIjtcblxuaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9JbWFnZXNVcGxvYWRcIjtcbmltcG9ydCBDYXRlZ29yeVJlcGxhY2UgZnJvbSBcIi4vLi4vQ2F0ZWdvcmllcy9DYXRlZ29yeVJlcGxhY2VDb21wb25lbnRcIjtcbmltcG9ydCBQcm9kdWN0UHJvcGVydHlFZGl0QnV0dG9uIGZyb20gXCIuLi9Qcm9kdWN0UHJvcGVydGllcy9Qcm9kdWN0UHJvcGVydHlFZGl0QnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdE1vZGlmaWNhdGlvbkVkaXRCdXR0b24gZnJvbSBcIi4uL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvbkVkaXRCdXR0b25cIjtcbmltcG9ydCBQcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uIGZyb20gXCIuLi9Qcm9kdWN0TW9kaWZpY2F0b25zL1Byb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdHNGb3JtRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YTogcHJvcHMuZGF0YSxcblx0XHRcdGNhdGVnb3J5SW5mbzogJycsXG5cdFx0XHRjYXRlZ29yeUlkOiBwcm9wcy5kYXRhLmNhdGVnb3J5SWQsXG5cdFx0XHRicmVhZGNydW1iczogcHJvcHMuZGF0YS5icmVhZGNydW1icyxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdGVycm9ySGVscDogJ0Vycm9yLidcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgaWQgPSB0aGlzLnByb3BzLmRhdGEuaWQ7XG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdChpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNhdGVnb3J5SW5mbzogY2F0ZWdvcnlJbmZvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6dGhpcy5zdGF0ZS5kYXRhfSk7XG5cdFx0fTtcblx0fVxuXG5cdHNrdU9uQ2hhbmdlKGUpe1xuXHRcdHZhciBpbnB1dCA9IGUudGFyZ2V0O1xuXHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdGRhdGFbJ3NrdSddID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkYXRhOiBkYXRhXG5cdFx0fSwoKSA9PiB7dGhpcy52YWxpZGF0ZUlucHV0KGlucHV0KX0pO1xuXHR9XG5cblx0dmFsaWRhdGVJbnB1dChpbnB1dCl7XG5cdFx0U2x1Z2lmeS5nZXRQcm9kdWN0U2x1Z2lmeShpbnB1dC52YWx1ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0aWYoIXJlc3VsdC5lcnJvcil7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhWydwYXRoJ10gPSByZXN1bHQucGF0aDtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGRhdGE6IHRoaXMuc3RhdGUuZGF0YSxcblx0XHRcdFx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdFx0XHRcdGVycm9ySGVscDogJ0Vycm9yLidcblx0XHRcdFx0XHR9LCBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcblx0XHRcdFx0XHRcdGVycm9ySGVscDogcmVzdWx0LmVycm9yXG5cdFx0XHRcdFx0fSwgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkocmVzdWx0LmVycm9yICsgJyDQndCw0LTQviDQuNGB0L/RgNCw0LLQuNGC0YwhJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0c2VsZWN0Q2F0ZWdvcnkoaWQpe1xuXHRcdGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBDQVRFR09SWScsaWQpO1xuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjYXRlZ29yeUluZm86IGNhdGVnb3J5SW5mbyxcblx0XHRcdFx0XHRicmVhZGNydW1iczogY2F0ZWdvcnlJbmZvLmJyZWFkY3J1bWJzICsgJyA+ICcgKyBjYXRlZ29yeUluZm8ubmFtZSxcblx0XHRcdFx0XHRjYXRlZ29yeUlkOiBjYXRlZ29yeUluZm8uaWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0aW1nU3JjKCl7XG5cdFx0dmFyIHVwbG9hZFBhdGggPSAoIXRoaXMuc3RhdGUuZGF0YS51cGxvYWRQYXRoKT8nL2ZpbGVzL2ltYWdlcy9wcm9kdWN0Lyc6dGhpcy5zdGF0ZS5kYXRhLnVwbG9hZFBhdGg7XG5cdFx0dmFyIGltYWdlID0gKCF0aGlzLnN0YXRlLmRhdGEuaW1hZ2UpXG5cdFx0XHQ/XCIyMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdDp0aGlzLnN0YXRlLmRhdGEuaW1hZ2U7XG5cdFx0cmV0dXJuIHVwbG9hZFBhdGggKyBpbWFnZTtcblx0fVxuXG5cdGltZ0RyYWZ0KCl7XG5cdFx0dmFyIHVwbG9hZFBhdGggPSAoIXRoaXMuc3RhdGUuZGF0YS51cGxvYWRQYXRoRHJhZnQpPycvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvJzp0aGlzLnN0YXRlLmRhdGEudXBsb2FkUGF0aERyYWZ0O1xuXHRcdHZhciBkcmFmdCA9ICghdGhpcy5zdGF0ZS5kYXRhLmRyYWZ0KVxuXHRcdFx0P1wiMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiXG5cdFx0XHQ6dGhpcy5zdGF0ZS5kYXRhLmRyYWZ0O1xuXHRcdHJldHVybiB1cGxvYWRQYXRoICsgZHJhZnQ7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgZmx1aWQ9e3RydWV9PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5pbWdTcmMoKX0gaW5wdXROYW1lPVwiZmlsZUxvYWRJbWFnZVwiLz5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuaW1nRHJhZnQoKX0gaW5wdXROYW1lPVwiZmlsZUxvYWREcmFmdFwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUuZXJyb3IpPycnOidoYXMtZXJyb3InfT5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtC+0LQg0YLQvtCy0LDRgNCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0L7QtCDRgtC+0LLQsNGA0LBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwic2t1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tza3VdXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNrdX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5za3VPbkNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxIZWxwQmxvY2s+e3RoaXMuc3RhdGUuZXJyb3IgJiYgdGhpcy5zdGF0ZS5lcnJvckhlbHB9PC9IZWxwQmxvY2s+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tuYW1lXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0LDRgtC10LPQvtGA0LjRjzwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2F0ZWdvcnlSZXBsYWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRDYXRlZ29yeT17dGhpcy5zdGF0ZS5jYXRlZ29yeUluZm99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdENhdGVnb3J5PXt0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5icmVhZGNydW1ic31cblx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCe0L/QuNGB0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyh0aGlzLnN0YXRlLmRhdGEuZGVzY3JpcHRpb24pP3RoaXMuc3RhdGUuZGF0YS5kZXNjcmlwdGlvbjonJ31cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiOFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J/RgNC40LzQtdGH0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyh0aGlzLnN0YXRlLmRhdGEubm90ZSk/dGhpcy5zdGF0ZS5kYXRhLm5vdGU6Jyd9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQn9GA0LjQvNC10YfQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbbm90ZV1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdub3RlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiMlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblxuXHRcdFx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHRcdFx0PENvbCBtZD17M30gPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbCBjb21wb25lbnRDbGFzcz17Q29udHJvbExhYmVsfSBtZD17Nn0gY2xhc3NOYW1lPVwicGwwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx00KHQvtGA0YLQuNGA0L7QstC60LBcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDb2wgbWQ9ezZ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuc29ydGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdzb3J0aW5nJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0UHJvcGVydHlFZGl0QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17dGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCLQodGC0LLQvtC50YHRgtCy0LAg0YLQvtCy0LDRgNCwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGJzU3R5bGU9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT17dGhpcy5wcm9wcy5kYXRhLnJvbGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwi0JzQvtC00LjRhNC40LrQsNGG0LjQuCDRgtC+0LLQsNGA0LBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPXt0aGlzLnByb3BzLmRhdGEucm9sZX1cblxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwi0KHQstC+0LnRgdGC0LLQsCDQvNC+0LTQuNGE0LjQutCw0YbQuNC5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGJzU3R5bGU9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT17dGhpcy5wcm9wcy5kYXRhLnJvbGV9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHQ8L1Jvdz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1twYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wYXRofVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiY2F0ZWdvcnlJZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUuY2F0ZWdvcnlJZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0c0Zvcm1FZGl0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcblxuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5pbXBvcnQgcHJvZHVjdFByb3BlcnR5SGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcHJvZHVjdFByb3BlcnR5SGVscGVyXCI7XG5pbXBvcnQgUHJvZHVjdFByb3BlcnRpZXMgZnJvbSBcIi4vUHJvZHVjdFByb3BlcnRpZXNcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2UsXG5cdFx0XHRwcm9wZXJ0aWVzOiBbXSxcblx0XHRcdGRlbGV0ZWQ6IFtdXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0UHJvcGVydGllcyh0aGlzLnByb3BzLmlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3Byb3BlcnRpZXM6cmVzcG9uc2V9KVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGRhdGEsIGluZGV4KXtcblx0XHR2YXIgcHJvcGVydGllcyA9IHRoaXMuc3RhdGUucHJvcGVydGllcztcblx0XHRwcm9wZXJ0aWVzW2luZGV4XSA9IGRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cHJvcGVydGllczogcHJvcGVydGllc30pO1xuXHR9XG5cblx0aGFuZGxlRGVsZXRlKGluZGV4KXtcblx0XHRjb25zb2xlLmxvZygnREVMRVRFIFBST1BFUlRZOiAnLCB0aGlzLnN0YXRlLnByb3BlcnRpZXNbaW5kZXhdKTtcblx0XHR2YXIgZGVsZXRlZCA9ICh0aGlzLnN0YXRlLnByb3BlcnRpZXNbaW5kZXhdLmlkICE9ICduZXcnKVxuXHRcdFx0P1x0dGhpcy5zdGF0ZS5kZWxldGVkLmNvbmNhdCh0aGlzLnN0YXRlLnByb3BlcnRpZXNbaW5kZXhdKVxuXHRcdFx0OiB0aGlzLnN0YXRlLmRlbGV0ZWQ7XG5cdFx0dmFyIHByb3BlcnRpZXMgPSB0aGlzLnN0YXRlLnByb3BlcnRpZXM7XG5cdFx0cHJvcGVydGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cHJvcGVydGllczogcHJvcGVydGllcyxcblx0XHRcdGRlbGV0ZWQ6IGRlbGV0ZWRcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUFkZChkYXRhKXtcblx0XHRjb25zb2xlLmxvZygnTkVXIFBST1BFUlRZOiAnLCBkYXRhKTtcblx0XHR2YXIgcHJvcGVydGllcyA9IHRoaXMuc3RhdGUucHJvcGVydGllcy5jb25jYXQoZGF0YSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cHJvcGVydGllczogcHJvcGVydGllc30pO1xuXHR9XG5cblx0b25TYXZlKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdHByb3BlcnRpZXM6IHRoaXMuc3RhdGUucHJvcGVydGllcyxcblx0XHRcdGRlbGV0ZWQ6IHRoaXMuc3RhdGUuZGVsZXRlZFxuXHRcdH07XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiBmYWxzZX0pO1xuXHRcdGNvbnNvbGUubG9nKCdTRU5EIERBVEE6ICcsIGRhdGEpO1xuXG5cdFx0cHJvZHVjdFByb3BlcnR5SGVscGVycy5lZGl0UHJvcGVydHkoZGF0YSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU0FWRSBEQVRBOiAnLHJlc3BvbnNlKTtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvbkNhbmNlbCgpe1xuXHRcdGRhdGFIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdFByb3BlcnRpZXModGhpcy5wcm9wcy5pZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRwcm9wZXJ0aWVzOnJlc3BvbnNlLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IFtdLFxuXHRcdFx0XHRcdHNob3dNb2RhbDogZmFsc2Vcblx0XHRcdFx0fSlcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5vcGVuLmJpbmQodGhpcyl9ID5cblx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLnRpdGxlKT88R2x5cGhpY29uIGdseXBoPVwicGVuY2lsXCIgLz46dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdGRpYWxvZ0NsYXNzTmFtZT1cIm1vZGFsLWxnXCJcblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cblx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZT7QodCy0L7QudGB0YLQstCwINC/0YDQvtC00YPQutGC0LA8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXG5cdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHQ8UHJvZHVjdFByb3BlcnRpZXNcblx0XHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXM9e3RoaXMuc3RhdGUucHJvcGVydGllc31cblx0XHRcdFx0XHRcdFx0aGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVEZWxldGU9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZUFkZD17dGhpcy5oYW5kbGVBZGQuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLm9uU2F2ZS5iaW5kKHRoaXMpfT7QodC+0YXRgNCw0L3QuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvbi5qc1xuICoqLyIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgaGVscGVycyA9IHtcblx0ZWRpdFByb3BlcnR5OiBmdW5jdGlvbiAoc2VuZERhdGEpIHtcblx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdHVybDogJy9hZG1pbi9wcm9kdWN0cy9wcm9wZXJ0eS1lZGl0Jyxcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHNlbmREYXRhLFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOmZ1bmN0aW9uKHhociwgc3RhdHVzKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yJywgc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0ZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIChpZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vcHJvZHVjdHMvcHJvcGVydHktZGVsLz9pZD1cIiArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlscy9wcm9kdWN0UHJvcGVydHlIZWxwZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvVGFibGVcIjtcblxuaW1wb3J0IFByb2R1Y3RQcm9wZXJ0eUNvbXBvbmVudCBmcm9tIFwiLi9Qcm9kdWN0UHJvcGVydHlDb21wb25lbnRcIjtcbmltcG9ydCBOZXdQcm9kdWN0UHJvcGVydHkgZnJvbSBcIi4vTmV3UHJvZHVjdFByb3BlcnR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBQcm9kdWN0UHJvcGVydGllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHByb3BlcnRpZXNMaXN0KCl7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMucHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5LCBpKSB7XG5cdFx0XHRyZXR1cm4gPFByb2R1Y3RQcm9wZXJ0eUNvbXBvbmVudFxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGluZGV4PXtpfVxuXHRcdFx0XHRwcm9wZXJ0eT17cHJvcGVydHl9XG5cdFx0XHRcdHsuLi5zZWxmLnByb3BzfVxuXHRcdFx0Lz5cblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxUYWJsZSBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0aD7ihJbihJYv0L/QvzwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7QndCw0LjQvNC10L3QvtCy0LDQvdC40LU8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+0JfQvdCw0YfQtdC90LjQtTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7QlNC10LnRgdGC0LLQuNGPPC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wZXJ0aWVzTGlzdCgpfVxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0PHRmb290PlxuXHRcdFx0XHRcdFx0PE5ld1Byb2R1Y3RQcm9wZXJ0eVx0ey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHRcdFx0PC90Zm9vdD5cblx0XHRcdFx0PC9UYWJsZT5cblx0XHQpXG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0UHJvcGVydGllcy9Qcm9kdWN0UHJvcGVydGllcy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFByb3BlcnR5Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdH1cblxuXHRvbkNoYW5nZShrZXkpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5wcm9wZXJ0aWVzW3RoaXMucHJvcHMuaW5kZXhdXG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnByb3BzLmhhbmRsZUNoYW5nZShkYXRhLCB0aGlzLnByb3BzLmluZGV4KTtcblx0XHR9O1xuXHR9XG5cblx0b25EZWxldGUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLmhhbmRsZURlbGV0ZSh0aGlzLnByb3BzLmluZGV4KVxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0cj5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cImNvbC1tZC0xXCI+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnByb3BlcnR5Lm9yZGVyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnb3JkZXInKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5wcm9wZXJ0eS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnbmFtZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnByb3BlcnR5LnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgndmFsdWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cImRhbmdlclwiIG9uQ2xpY2s9e3RoaXMub3Blbi5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5yb2xlICE9ICdhZG1pbid9PlxuXHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInRyYXNoXCIvPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0PE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfSBvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+0KPQtNCw0LvQuNGC0Ywg0YHQstC+0LnRgdGC0LLQvjwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0YHQstC+0LnRgdGC0LLQvjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsZWFkXCI+XCJ7dGhpcy5wcm9wcy5wcm9wZXJ0eS5uYW1lfVwiPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyl9IGJzU3R5bGU9XCJkYW5nZXJcIj7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5Q29tcG9uZW50LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdQcm9kdWN0UHJvcGVydHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlkOiAnbmV3Jyxcblx0XHRcdHByb2R1Y3RJZDogcHJvcHMuaWQsXG5cdFx0XHRvcmRlcjogJycsXG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHZhbHVlOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRhZGROZXdQcm9wZXJ0eShlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnN0YXRlO1xuXHRcdGlmKGRhdGEub3JkZXIgJiYgZGF0YS5uYW1lICYmIGRhdGEudmFsdWUpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG9yZGVyOiAnJyxcblx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0fSwgKCkgPT4ge3RoaXMucHJvcHMuaGFuZGxlQWRkKGRhdGEpfSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5vcmRlcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdvcmRlcicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnbmFtZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3ZhbHVlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5hZGROZXdQcm9wZXJ0eS5iaW5kKHRoaXMpfT7QlNC+0LHQsNCy0LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0UHJvcGVydGllcy9OZXdQcm9kdWN0UHJvcGVydHkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5pbXBvcnQgUHJvZHVjdE1vZGlmaWNhdGlvbnMgZnJvbSBcIi4vUHJvZHVjdE1vZGlmaWNhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdE1vZGlmaWNhdGlvbkVkaXRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RpZmljYXRpb25UYWJsZTogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRvcGVuTW9kaWZpY2F0aW9uVGFibGUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGlmaWNhdGlvblRhYmxlOiB0cnVlIH0pO1xuXHR9XG5cblx0Y2xvc2VNb2RpZmljYXRpb25UYWJsZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGlmaWNhdGlvblRhYmxlOiBmYWxzZSB9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbk1vZGlmaWNhdGlvblRhYmxlLmJpbmQodGhpcyl9XHQ+XG5cdFx0XHRcdFx0eyghdGhpcy5wcm9wcy50aXRsZSk/PEdseXBoaWNvbiBnbHlwaD1cInBlbmNpbFwiIC8+OnRoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PFByb2R1Y3RNb2RpZmljYXRpb25zXG5cdFx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRcdHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kaWZpY2F0aW9uVGFibGV9XG5cdFx0XHRcdFx0XHRoaWRlTW9kYWw9e3RoaXMuY2xvc2VNb2RpZmljYXRpb25UYWJsZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdClcblx0fTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuXG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcbmltcG9ydCBtb2RpZmljYXRpb25IZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9wcm9kdWN0TW9kaWZpY2F0aW9uSGVscGVyXCI7XG5cbmltcG9ydCBQcm9kdWN0TW9kaWZpY2F0aW9uc1RhYmxlIGZyb20gXCIuL01vZGlmaWNhdGlvbnNUYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TW9kaWZpY2F0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y29sdW1uczogW10sXG5cdFx0XHRyb3dzOltdLFxuXHRcdFx0ZGVsZXRlZDogW11cblx0XHR9O1xuXHR9XG5cdFxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeVByb2R1Y3RNb2RpZmljYXRpb24odGhpcy5wcm9wcy5pZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjb2x1bW5zOiByZXNwb25zZS5jb2x1bW5zLFxuXHRcdFx0XHRcdHJvd3M6IHJlc3BvbnNlLnJvd3Ncblx0XHRcdFx0fSlcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGRhdGEsIGluZGV4KXtcblx0XHR2YXIgcm93cyA9IHRoaXMuc3RhdGUucm93cztcblx0XHRyb3dzW2luZGV4XSA9IGRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cm93czogcm93c30pO1xuXHR9XG5cblx0aGFuZGxlRGVsZXRlKGluZGV4KXtcblx0XHRjb25zb2xlLmxvZygnaGFuZGxlRGVsZXRlOiAnLCB0aGlzLnN0YXRlLnJvd3NbaW5kZXhdKTtcblx0XHR2YXIgZGVsZXRlZCA9ICh0aGlzLnN0YXRlLnJvd3NbaW5kZXhdLml0ZW0uaWQgIT0gJ25ldycpXG5cdFx0XHQ/IHRoaXMuc3RhdGUuZGVsZXRlZC5jb25jYXQodGhpcy5zdGF0ZS5yb3dzW2luZGV4XSlcblx0XHRcdDogdGhpcy5zdGF0ZS5kZWxldGVkO1xuXHRcdHZhciByb3dzID0gdGhpcy5zdGF0ZS5yb3dzO1xuXHRcdHJvd3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJvd3M6IHJvd3MsXG5cdFx0XHRkZWxldGVkOiBkZWxldGVkXG5cdFx0fSlcblx0fVxuXG5cdGhhbmRsZUFkZChkYXRhKXtcblx0XHRjb25zb2xlLmxvZygnTkVXIE1PRElGSUNBVElPTicsIGRhdGEpO1xuXHRcdHZhciByb3dzID0gdGhpcy5zdGF0ZS5yb3dzO1xuXHRcdHJvd3MgPSB0aGlzLnN0YXRlLnJvd3MuY29uY2F0KGRhdGEpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Jvd3M6IHJvd3N9KTtcblx0fVxuXG5cdG9uQ2FuY2VsKCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uKHRoaXMucHJvcHMuaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y29sdW1uczogcmVzcG9uc2UuY29sdW1ucyxcblx0XHRcdFx0XHRyb3dzOiByZXNwb25zZS5yb3dzLFxuXHRcdFx0XHRcdGRlbGV0ZWQ6IFtdXG5cdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvblNhdmUoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG5cdFx0Y29uc29sZS5sb2coJ1NFTkQgREFUQTogJywgdGhpcy5zdGF0ZSk7XG5cdFx0bW9kaWZpY2F0aW9uSGVscGVycy5lZGl0TW9kaWZpY2F0aW9uKHRoaXMuc3RhdGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NBVkUgREFUQTogJyxyZXNwb25zZSk7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdGRpYWxvZ0NsYXNzTmFtZT1cIncxMDBcIlxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3dNb2RhbH1cblx0XHRcdFx0b25IaWRlPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCc0L7QtNC40YTQuNC60LDRhtC40Lgg0Lgg0YDQsNC30LzQtdGA0Ys8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8UHJvZHVjdE1vZGlmaWNhdGlvbnNUYWJsZVxuXHRcdFx0XHRcdFx0aWQ9e3RoaXMucHJvcHMuaWR9XG5cdFx0XHRcdFx0XHRjb2x1bW5zPXt0aGlzLnN0YXRlLmNvbHVtbnN9XG5cdFx0XHRcdFx0XHRyb3dzPXt0aGlzLnN0YXRlLnJvd3N9XG5cdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRoYW5kbGVEZWxldGU9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRoYW5kbGVBZGQ9e3RoaXMuaGFuZGxlQWRkLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRyb2xlPXt0aGlzLnByb3BzLnJvbGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLm9uU2F2ZS5iaW5kKHRoaXMpfT7QodC+0YXRgNCw0L3QuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL1Byb2R1Y3RNb2RpZmljYXRpb25zLmpzXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbnZhciBoZWxwZXJzID0ge1xuXHRlZGl0TW9kaWZpY2F0aW9uOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAkLmFqYXgoe1xuXHRcdFx0dXJsOiAnL2FkbWluL3Byb2R1Y3RzL21vZGlmaWNhdGlvbi1lZGl0Jyxcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0bW9kaWZpY2F0aW9uVGFibGVEYXRhOiBkYXRhXG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOmZ1bmN0aW9uKHhociwgc3RhdHVzKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yJywgc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0ZWRpdE1vZGlmaWNhdGlvblByb3BlcnR5OiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAkLmFqYXgoe1xuXHRcdFx0dXJsOiAnL2FkbWluL3Byb2R1Y3RzL21vZGlmaWNhdGlvbi1wcm9wZXJ0eS1lZGl0Jyxcblx0XHRcdHR5cGU6ICdQT1NUJyxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0bW9kaWZpY2F0aW9uUHJvcGVydHlEYXRhOiBkYXRhXG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yOmZ1bmN0aW9uKHhociwgc3RhdHVzKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yJywgc3RhdHVzKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRkZWxldGVNb2RpZmljYXRpb246IGZ1bmN0aW9uIChpZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vcHJvZHVjdHMvbW9kaWZpY2F0aW9uLWRlbC8/aWQ9XCIgKyBpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMvcHJvZHVjdE1vZGlmaWNhdGlvbkhlbHBlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZVwiO1xuaW1wb3J0IG1vZGlmaWNhdGlvbkhlbHBlcnMgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvcHJvZHVjdE1vZGlmaWNhdGlvbkhlbHBlclwiXG5cbmltcG9ydCBNb2RpZmljYXRpb25IZWFkVGFibGUgZnJvbSBcIi4vTW9kaWZpY2F0aW9uSGVhZFRhYmxlXCI7XG5pbXBvcnQgTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93IGZyb20gXCIuL01vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1wiO1xuaW1wb3J0IE1vZGlmaWNhdGlvblRhYmxlTmV3SXRlbSBmcm9tIFwiLi9Nb2RpZmljYXRpb25UYWJsZU5ld0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0Ym9keVRhYmxlKCl7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMucm93cy5tYXAoZnVuY3Rpb24gKHJvdywgaSkge1xuXHRcdFx0cmV0dXJuIDxNb2RpZmljYXRpb25Cb2R5VGFibGVSb3dcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRyb3c9e3Jvd31cblx0XHRcdFx0aW5kZXg9e2l9XG5cdFx0XHRcdHsuLi5zZWxmLnByb3BzfVxuXHRcdFx0Lz5cblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRhYmxlIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0PE1vZGlmaWNhdGlvbkhlYWRUYWJsZVx0Y29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfSAvPlxuXHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0e3RoaXMuYm9keVRhYmxlKCl9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDx0Zm9vdD5cblx0XHRcdFx0XHQ8TW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtIHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDwvdGZvb3Q+XG5cdFx0XHQ8L1RhYmxlPlxuXHRcdClcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uc1RhYmxlLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGlmaWNhdGlvblRhYmxlQ29sdW1uIGZyb20gXCIuL01vZGlmaWNhdGlvblRhYmxlQ29sdW1uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvbkhlYWRUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGg+4oSW4oSWL9C/0L88L3RoPlxuXHRcdFx0XHQ8dGg+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1PC90aD5cblx0XHRcdFx0e3RoaXMucHJvcHMuY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbiwgaSkge1xuXHRcdFx0XHRcdHJldHVybiA8TW9kaWZpY2F0aW9uVGFibGVDb2x1bW5cblx0XHRcdFx0XHRcdGtleT17aX1cblx0XHRcdFx0XHRcdGNvbHVtbj17Y29sdW1ufSAvPlxuXHRcdFx0XHR9KX1cblx0XHRcdFx0PHRoPtCU0LXQudGB0YLQstC40LU8L3RoPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25IZWFkVGFibGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvblRhYmxlQ29sdW1uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGg+e3RoaXMucHJvcHMuY29sdW1uLm5hbWV9PC90aD5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZUNvbHVtbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuaW1wb3J0IE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1RkIGZyb20gXCIuL01vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1RkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd01vZGFsOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlSXRlbShrZXkpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5yb3dzW3RoaXMucHJvcHMuaW5kZXhdO1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0ZGF0YS5pdGVtW2tleV0gPSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKGRhdGEsIHRoaXMucHJvcHMuaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNoYW5nZVZhbHVlKGluZGV4KXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMucm93c1t0aGlzLnByb3BzLmluZGV4XTtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdGRhdGEudmFsdWVzW2luZGV4XS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZGF0YSwgdGhpcy5wcm9wcy5pbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0b25EZWxldGUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLmhhbmRsZURlbGV0ZSh0aGlzLnByb3BzLmluZGV4KVxuXHRcdH0pO1xuXHR9XG5cblx0aXRlbVByb3BlcnR5KCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wcy5yb3cudmFsdWVzO1xuXHRcdHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcGVydHksIGkpXHR7XG5cdFx0XHRyZXR1cm4gPE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1RkXG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0dmFsdWU9e3Byb3BlcnR5LnZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17c2VsZi5oYW5kbGVDaGFuZ2VWYWx1ZShpKS5iaW5kKHRoaXMpfVxuXHRcdFx0Lz5cblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDx0cj5cblx0XHRcdFx0PE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1RkXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlSXRlbSgnb3JkZXInKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnJvdy5pdGVtLm9yZGVyfVxuXHRcdFx0XHRcdGNsYXNzVGQ9XCJjb2wtc20tMVwiLz5cblx0XHRcdFx0PE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1RkXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlSXRlbSgnc2t1JykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5yb3cuaXRlbS5za3V9Lz5cblxuXHRcdFx0XHR7dGhpcy5pdGVtUHJvcGVydHkoKX1cblxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0YnNTaXplPVwic21hbGxcIlxuXHRcdFx0XHRcdFx0YnNTdHlsZT1cImRhbmdlclwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW4uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLnJvbGUgIT0gJ2FkbWluJ31cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwidHJhc2hcIi8+XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cblx0XHRcdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZT7Qo9C00LDQu9C10L3QuNC1INGC0L7QstCw0YDQvdC+0Lkg0LzQvtC00LjRhNC40LrQsNGG0LjQuDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblxuXHRcdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD7QktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDRgtC+0LLQsNGA0L3Rg9GOINC80L7QtNC40YTQuNC60LDRhtC40Y48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGVhZFwiPnt0aGlzLnByb3BzLnJvdy5pdGVtLnNrdX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+0YHQviDQstGB0LXQvNC4INC30L3QsNGH0LXQvdC40Y/QvNC4INGB0LLQvtC50YHRgtCyLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCIgb25DbGljaz17dGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpfT7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd0lucHV0OiBmYWxzZVxuXHRcdH1cblx0fVxuXHRcblx0b25CbHVyKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd0lucHV0OiBmYWxzZX0pXG5cdH1cblxuXHRvbkZvY3VzKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd0lucHV0OnRydWV9LCBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMucmVmcy5pbnB1dC5mb2N1cygpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRkIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc1RkfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtc20gbWIwXCI+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuc2hvd0lucHV0ID9cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRyZWY9XCJpbnB1dFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+IDpcblx0XHRcdFx0XHRcdDxzcGFuIG9uQ2xpY2s9e3RoaXMub25Gb2N1cy5iaW5kKHRoaXMpfT57dGhpcy5wcm9wcy52YWx1ZX08L3NwYW4+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1RkLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5pbXBvcnQgTW9kaWZpY2F0aW9uVGFibGVOZXdWYWx1ZSBmcm9tIFwiLi9Nb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvblRhYmxlTmV3SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXRlbToge1xuXHRcdFx0XHRpZDogJ25ldycsXG5cdFx0XHRcdHBhcmVudElkOiBwcm9wcy5pZCxcblx0XHRcdFx0c2t1OiAnJyxcblx0XHRcdFx0b3JkZXI6ICcnXG5cdFx0XHR9LFxuXHRcdFx0dmFsdWVzOiAnJ1xuXHRcdH07XG5cdFx0dGhpcy5uZXdJdGVtVmFsdWVzID0gdGhpcy5uZXdJdGVtVmFsdWVzLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgbmV3SXRlbVZhbHVlcyA9IHRoaXMubmV3SXRlbVZhbHVlcygpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogbmV3SXRlbVZhbHVlc30pO1xuXHR9XG5cblx0bmV3SXRlbVZhbHVlcygpe1xuXHRcdHZhciBwYXJhbXMgPSB0aGlzLnByb3BzLmNvbHVtbnM7XG5cdFx0cmV0dXJuIHBhcmFtcy5tYXAoZnVuY3Rpb24gKHBhcmFtLCBpKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdWJwcm9kaWN0SWQ6ICcnLFxuXHRcdFx0XHRwYXJhbUlkOiBwYXJhbS5pZCxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2VOZXdWYWx1ZSh2YWx1ZSwgaW5kZXgpe1xuXHRcdHRoaXMuc3RhdGUudmFsdWVzW2luZGV4XS52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRvbkNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dGhpcy5zdGF0ZS5pdGVtW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXHRcdH07XG5cdH1cblxuXHRhZGROZXdNb2RpZmljYXRpb24oZSl7XG5cdFx0dmFyIG5ld0l0ZW0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmKG5ld0l0ZW0uaXRlbS5za3UgJiYgbmV3SXRlbS5pdGVtLm9yZGVyKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpdGVtOiB7XG5cdFx0XHRcdFx0aWQ6ICduZXcnLFxuXHRcdFx0XHRcdHBhcmVudElkOiB0aGlzLnByb3BzLnBhcmVudElkLFxuXHRcdFx0XHRcdHNrdTogJycsXG5cdFx0XHRcdFx0b3JkZXI6ICcnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbHVlczogdGhpcy5uZXdJdGVtVmFsdWVzKClcblx0XHRcdH0sICgpID0+IHt0aGlzLnByb3BzLmhhbmRsZUFkZChuZXdJdGVtKX0pO1xuXHRcdH1cblx0fVxuXHRcblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgbmV3VmFsdWVzVGQgPSB0aGlzLnN0YXRlLnZhbHVlcy5tYXAoXG5cdFx0XHQoY29sdW1uLCBpKSA9PiA8TW9kaWZpY2F0aW9uVGFibGVOZXdWYWx1ZVxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGluZGV4PXtpfVxuXHRcdFx0XHR2YWx1ZT17Y29sdW1uLnZhbHVlfVxuXHRcdFx0XHRoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlTmV3VmFsdWUuYmluZCh0aGlzKX0vPlxuXHRcdCk7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwiY29sLXNtLTFcIj5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiIGJzU2l6ZT1cInNtYWxsXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLm9yZGVyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnb3JkZXInKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCIgYnNTaXplPVwic21hbGxcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5za3V9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdza3UnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0e25ld1ZhbHVlc1RkfVxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1NpemU9XCJzbWFsbFwiIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5hZGROZXdNb2RpZmljYXRpb24uYmluZCh0aGlzKX0+0JTQvtCx0LDQstC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZU5ld0l0ZW0uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvblRhYmxlTmV3VmFsdWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRvbkNoYW5nZShlKXtcblx0XHR2YXIgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnByb3BzLmhhbmRsZUNoYW5nZSh2YWx1ZSwgdGhpcy5wcm9wcy5pbmRleCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGQ+XG5cdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCIgYnNTaXplPVwic21hbGxcIj5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcblx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdDwvdGQ+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuaW1wb3J0IE1vZGlmaWNhdGlvblByb3BlcnRpZXMgZnJvbSBcIi4vTW9kaWZpY2F0aW9uUHJvcGVydGllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGNsb3NlTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlOiBmYWxzZSB9KTtcblx0fVxuXG5cdG9wZW5Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZTogdHJ1ZSB9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbk1vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZS5iaW5kKHRoaXMpfSA+XG5cdFx0XHRcdFx0eyghdGhpcy5wcm9wcy50aXRsZSk/PEdseXBoaWNvbiBnbHlwaD1cImNvZ1wiIC8+OnRoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PE1vZGlmaWNhdGlvblByb3BlcnRpZXNcblx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0c2hvd01vZGFsPXt0aGlzLnN0YXRlLnNob3dNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGV9XG5cdFx0XHRcdFx0XHRoaWRlTW9kYWw9e3RoaXMuY2xvc2VNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHQpXG5cdH07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcblxuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5pbXBvcnQgbW9kaWZpY2F0aW9uSGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcHJvZHVjdE1vZGlmaWNhdGlvbkhlbHBlclwiO1xuXG5pbXBvcnQgTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlIGZyb20gXCIuL01vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvblByb3BlcnRpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNvbHVtbnM6IFtdLFxuXHRcdFx0ZGVsZXRlZDogW11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeVByb2R1Y3RNb2RpZmljYXRpb24odGhpcy5wcm9wcy5pZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtjb2x1bW5zOiByZXNwb25zZS5jb2x1bW5zfSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShkYXRhLCBpbmRleCl7XG5cdFx0dmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnM7XG5cdFx0Y29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbHVtbnM6IGNvbHVtbnN9KTtcblx0fVxuXG5cdGhhbmRsZURlbGV0ZShpbmRleCl7XG5cdFx0Y29uc29sZS5sb2coJ0RFTEVURSBQUk9QRVJUWTogJywgdGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4XSk7XG5cdFx0dmFyIGRlbGV0ZWQgPSAodGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4XS5pZCAhPSAnbmV3Jylcblx0XHRcdD9cdHRoaXMuc3RhdGUuZGVsZXRlZC5jb25jYXQodGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4XSlcblx0XHRcdDogdGhpcy5zdGF0ZS5kZWxldGVkO1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdGNvbHVtbnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvbHVtbnM6IGNvbHVtbnMsXG5cdFx0XHRkZWxldGVkOiBkZWxldGVkXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVBZGQoZGF0YSl7XG5cdFx0Y29uc29sZS5sb2coJ05FVyBQUk9QRVJUWTogJywgZGF0YSk7XG5cdFx0dmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnMuY29uY2F0KGRhdGEpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbHVtbnM6IGNvbHVtbnN9KTtcblx0fVxuXG5cdG9uQ2FuY2VsKCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uKHRoaXMucHJvcHMuaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y29sdW1uczogcmVzcG9uc2UuY29sdW1ucywgZGVsZXRlZDogW119LCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25TYXZlKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXHRcdGNvbnNvbGUubG9nKCdTRU5EIERBVEE6ICcsIHRoaXMuc3RhdGUpO1xuXHRcdG1vZGlmaWNhdGlvbkhlbHBlcnMuZWRpdE1vZGlmaWNhdGlvblByb3BlcnR5KHRoaXMuc3RhdGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NBVkUgREFUQTogJyxyZXNwb25zZSk7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHNob3c9e3RoaXMucHJvcHMuc2hvd01vZGFsfVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCh0LLQvtC50YHRgtCy0LAg0YLQvtCy0LDRgNC90YvRhSDQvNC+0LTQuNGE0LjQutCw0YbQuNC5ICjRiNCw0L/QutCwINGC0LDQsdC70LjRhtGLKTwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGVcblx0XHRcdFx0XHRcdGlkPXt0aGlzLnByb3BzLmlkfVxuXHRcdFx0XHRcdFx0ZGF0YVRhYmxlPXt0aGlzLnN0YXRlLmNvbHVtbnN9XG5cdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRoYW5kbGVEZWxldGU9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRoYW5kbGVBZGQ9e3RoaXMuaGFuZGxlQWRkLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRyb2xlPXt0aGlzLnByb3BzLnJvbGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLm9uU2F2ZS5iaW5kKHRoaXMpfT7QodC+0YXRgNCw0L3QuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblByb3BlcnRpZXMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvVGFibGVcIjtcblxuaW1wb3J0IE1vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3cgZnJvbSBcIi4vTW9kaWZpY2F0aW9uUHJvcGVydHlUYWJsZVJvd1wiO1xuaW1wb3J0IE1vZGlmaWNhdGlvbk5ld1Byb3BlcnR5IGZyb20gXCIuL01vZGlmaWNhdGlvbk5ld1Byb3BlcnR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdG1vZGlmaWNhdGlvblByb3BlcnRpZXMoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGF0YVRhYmxlLm1hcChmdW5jdGlvbiAoZGF0YSwgaSkge1xuXHRcdFx0cmV0dXJuIDxNb2RpZmljYXRpb25Qcm9wZXJ0eVRhYmxlUm93XG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0aW5kZXg9e2l9XG5cdFx0XHRcdHByb3BlcnR5PXtkYXRhfVxuXHRcdFx0XHR7Li4uc2VsZi5wcm9wc31cdC8+XG5cdFx0fSk7XG5cdH1cblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxUYWJsZSBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJjb2wtc20tMlwiPuKEluKEli/Qv9C/PC90aD5cblx0XHRcdFx0XHRcdDx0aD7QndCw0LjQvNC10L3QvtCy0LDQvdC40LU8L3RoPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+0JTQtdC50YHRgtCy0LjQtTwvdGg+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdHt0aGlzLm1vZGlmaWNhdGlvblByb3BlcnRpZXMoKX1cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PHRmb290PlxuXHRcdFx0XHRcdDxNb2RpZmljYXRpb25OZXdQcm9wZXJ0eSB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHQ8L3Rmb290PlxuXHRcdFx0PC9UYWJsZT5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3cgZXh0ZW5kcyAgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdFxuXHRvbkNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5wcm9wZXJ0eVtrZXldID0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnByb3BzLmhhbmRsZUNoYW5nZSh0aGlzLnByb3BzLnByb3BlcnR5LCB0aGlzLnByb3BzLmluZGV4KTtcblx0XHR9XG5cdH1cblx0XG5cdG9uRGVsZXRlKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5oYW5kbGVEZWxldGUodGhpcy5wcm9wcy5pbmRleClcblx0XHR9KTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0cj5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnByb3BlcnR5Lm9yZGVyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnb3JkZXInKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5wcm9wZXJ0eS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnbmFtZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCIgb25DbGljaz17dGhpcy5vcGVuLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLnJvbGUgIT0gJ2FkbWluJ30+XG5cdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwidHJhc2hcIi8+XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxuXHRcdFx0XHRcdFx0b25IaWRlPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCj0LTQsNC70LXQvdC40LUg0YHQstC+0LnRgdGC0LLQsCDRgtC+0LLQsNGA0L3QvtC5INC80L7QtNC40YTQuNC60LDRhtC40Lg8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cblx0XHRcdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0YHQstC+0LnRgdGC0LLQvjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsZWFkXCI+XCJ7dGhpcy5wcm9wcy5wcm9wZXJ0eS5uYW1lfVwiPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPtCU0LDQvdC90L7QtSDRgdCy0L7QudGB0YLQstC+INCx0YPQtNC10YIg0YPQtNCw0LvQtdC90L4g0YHQviDQstGB0LXQvNC4INC30L3QsNGH0LXQvdC40Y/QvNC4INCy0L4g0LLRgdC10YUg0LzQvtC00LjRhNC40LrQsNGG0LjRj9GFINC00LDQvdC90L7Qs9C+INGC0L7QstCw0YDQsCAo0YIu0LUg0LHRg9C00LXRgiDRg9C00LDQu9C10L0g0LLQtdGB0Ywg0YHRgtC+0LvQsdC10YYg0LIg0YLQsNCx0LvQuNGG0LUg0LzQvtC00LjRhNC40LrQsNGG0LjQuSDRgdC+INCy0YHQtdC80Lgg0LfQvdCw0YfQtdC90LjRj9C80LgpLiDQktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1INC90LXQstC+0LfQvNC+0LbQvdC+ITwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCIgb25DbGljaz17dGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpfT7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uUHJvcGVydHlUYWJsZVJvdy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uTmV3UHJvcGVydHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlkOiAnbmV3Jyxcblx0XHRcdHByb2R1Y3RJZDogdGhpcy5wcm9wcy5pZCxcblx0XHRcdG9yZGVyOiAnJyxcblx0XHRcdG5hbWU6ICcnXG5cdFx0fVxuXHR9XG5cblx0b25DaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHRoaXMuc3RhdGVba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG5cdFx0fTtcblx0fVxuXG5cdGFkZE5ld1Byb3BlcnR5TW9kaWZpY2F0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgbmV3UHJvcGVydHkgPSB0aGlzLnN0YXRlO1xuXHRcdGlmKG5ld1Byb3BlcnR5Lm9yZGVyICYmIG5ld1Byb3BlcnR5Lm5hbWUpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlkOiAnbmV3Jyxcblx0XHRcdFx0cHJvZHVjdElkOiB0aGlzLnByb3BzLmlkLFxuXHRcdFx0XHRvcmRlcjogJycsXG5cdFx0XHRcdG5hbWU6ICcnXG5cdFx0XHR9LCAoKSA9PiB7dGhpcy5wcm9wcy5oYW5kbGVBZGQobmV3UHJvcGVydHkpfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm9yZGVyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnb3JkZXInKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnbmFtZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuYWRkTmV3UHJvcGVydHlNb2RpZmljYXRpb24uYmluZCh0aGlzKX0+0JTQvtCx0LDQstC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25OZXdQcm9wZXJ0eS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhRm9ybUVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRpdGxlIDogKCFwcm9wcy5kYXRhLnRpdGxlKT9wcm9wcy5kYXRhLm5hbWU6cHJvcHMuZGF0YS50aXRsZSxcblx0XHRcdHBhdGg6IHByb3BzLmRhdGEucGF0aCxcblx0XHRcdGRlc2NyaXB0aW9uOiBwcm9wcy5kYXRhLmRlc2NyaXB0aW9uLFxuXHRcdFx0Y29udGVudE1hcmtkb3duOiBwcm9wcy5kYXRhLmNvbnRlbnRNYXJrZG93bixcblx0XHRcdGNvbnRlbnRIdG1sOiBwcm9wcy5kYXRhLmNvbnRlbnRIdG1sLFxuXHRcdFx0c29ydGluZzogcHJvcHMuZGF0YS5zb3J0aW5nLFxuXHRcdFx0dXBsb2FkUGF0aDogKCFwcm9wcy5kYXRhLnVwbG9hZFBhdGgpPycnOnByb3BzLmRhdGEudXBsb2FkUGF0aCxcblx0XHRcdGltYWdlOiAoIXByb3BzLmRhdGEuaW1hZ2UpXG5cdFx0XHRcdD9cIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdFx0OnByb3BzLmRhdGEuaW1hZ2Vcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZVBhdGhGcm9tVGl0bGUoKXtcblx0XHR2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBpbWdTcmMgPSB0aGlzLnN0YXRlLnVwbG9hZFBhdGggKyB0aGlzLnN0YXRlLmltYWdlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e2ltZ1NyY30vPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbdGl0bGVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPlVybDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5nZW5lcmF0ZVBhdGhGcm9tVGl0bGUuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5wYXRofVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVcmxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgncGF0aCcpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IChtYXJrZG93bik8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuY29udGVudE1hcmtkb3dufVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2NvbnRlbnRNYXJrZG93bl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnY29udGVudE1hcmtkb3duJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiOFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsIGNsYXNzTmFtZT1cIm1yMlwiPtCh0L7RgNGC0LjRgNC+0LLQutCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdG1pbj1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc29ydGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhUGFnZVtjb250ZW50SHRtbF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnRIVE1MfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9NZWRpYS9NZWRpYUZvcm1FZGl0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgR3JpZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HcmlkXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEdyb3VwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tIFwiLi8uLi8uLi91dGlscy9JbWFnZXNVcGxvYWRcIjtcbmltcG9ydCBTbHVnaWZ5IGZyb20gXCIuLy4uLy4uL3V0aWxzL3NsdWdpZnlIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRpdGxlIDogKCFwcm9wcy5kYXRhLnRpdGxlKT9wcm9wcy5kYXRhLm5hbWU6cHJvcHMuZGF0YS50aXRsZSxcblx0XHRcdHBhdGg6IHByb3BzLmRhdGEucGF0aCxcblx0XHRcdGRlc2NyaXB0aW9uOiBwcm9wcy5kYXRhLmRlc2NyaXB0aW9uLFxuXHRcdFx0c29ydGluZzogcHJvcHMuZGF0YS5zb3J0aW5nLFxuXHRcdFx0dXBsb2FkUGF0aDogKCFwcm9wcy5kYXRhLnVwbG9hZFBhdGgpPycnOnByb3BzLmRhdGEudXBsb2FkUGF0aCxcblx0XHRcdGltYWdlOiAoIXByb3BzLmRhdGEuaW1hZ2UpXG5cdFx0XHRcdD9cIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdFx0OnByb3BzLmRhdGEuaW1hZ2Vcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZVBhdGhGcm9tVGl0bGUoKXtcblx0XHR2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBpbWdTcmMgPSB0aGlzLnN0YXRlLnVwbG9hZFBhdGggKyB0aGlzLnN0YXRlLmltYWdlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e2ltZ1NyY30vPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbdGl0bGVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPlVybDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5nZW5lcmF0ZVBhdGhGcm9tVGl0bGUuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5wYXRofVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVcmxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgncGF0aCcpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbCBjbGFzc05hbWU9XCJtcjJcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnNvcnRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2Vbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdzb3J0aW5nJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9NZWRpYS9NZWRpYUNhdGVnb3JpZXNGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxGb3JtU2VvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtZXRhVGl0bGUgOiBwcm9wcy5kYXRhLm1ldGFUaXRsZSxcblx0XHRcdG1ldGFEZXNjcmlwdGlvbjogcHJvcHMuZGF0YS5tZXRhRGVzY3JpcHRpb24sXG5cdFx0XHRtZXRhS2V5d29yZHM6IHByb3BzLmRhdGEubWV0YUtleXdvcmRzXG5cdFx0fVxuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHNob3c9e3RoaXMucHJvcHMuc2hvd31cblx0XHRcdFx0b25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJtb2RhbC1sZ1wiXG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5tZXRhIFRpdGxlPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIG1ldGEgVGl0bGVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVNlb1ttZXRhVGl0bGVdXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5tZXRhVGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdtZXRhVGl0bGUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPm1ldGEgRGVzY3JpcHRpb248L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBtZXRhIERlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1TZW9bbWV0YURlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWV0YURlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnbWV0YURlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+bWV0YSBLZXl3b3JkczwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVudGVyIG1ldGEgS2V5d29yZHNcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVNlb1ttZXRhS2V5d29yZHNdXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5tZXRhS2V5d29yZHN9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdtZXRhS2V5d29yZHMnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY3VycmVudFVybFwiIHZhbHVlPXt3aW5kb3cubG9jYXRpb24uaHJlZn0vPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBmb3JtPVwiZm9ybU1vZGFsXCIgYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+0JTQvtCx0LDQstC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsRm9ybVNlby5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuaW1wb3J0IERlZmF1bHRGb3JtQWRkIGZyb20gXCIuL0RlZmF1bHRGb3JtQWRkXCI7XG5pbXBvcnQgQ2F0ZWdvcmllc0Zvcm1BZGQgZnJvbSBcIi4uL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzRm9ybUFkZFwiO1xuaW1wb3J0IFByb2R1Y3RGb3JtQWRkIGZyb20gXCIuLi9DYXRhbG9nL1Byb2R1Y3RzL1Byb2R1Y3RGb3JtQWRkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybXNBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlKClcblx0fVxuXG5cdHNlbGVjdEVkaXRJbnB1dHMoKXtcblx0XHRzd2l0Y2ggKHRoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKXtcblx0XHRcdGNhc2UgXCJjYXRlZ29yaWVzXCI6IHJldHVybiA8Q2F0ZWdvcmllc0Zvcm1BZGQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRjYXNlIFwicHJvZHVjdHNcIjogcmV0dXJuIDxQcm9kdWN0Rm9ybUFkZCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdGRlZmF1bHQ6IHJldHVybiA8RGVmYXVsdEZvcm1BZGQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwidzEwMFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3RoaXMuc2VsZWN0RWRpdElucHV0cygpfVxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY3VycmVudFVybFwiIHZhbHVlPXt3aW5kb3cubG9jYXRpb24uaHJlZn0vPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+e3RoaXMuc3RhdGUudGV4dENsb3NlQnRufTwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPtCU0L7QsdCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsRm9ybXNBZGQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcblxuaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tIFwiLi8uLi8uLi91dGlscy9JbWFnZXNVcGxvYWRcIjtcbmltcG9ydCBTbHVnaWZ5IGZyb20gXCIuLy4uLy4uL3V0aWxzL3NsdWdpZnlIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdEZvcm1BZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRpdGxlIDogJycsXG5cdFx0XHRwYXRoOiAnJyxcblx0XHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRcdGNvbnRlbnRNYXJrZG93bjogJycsXG5cdFx0XHRjb250ZW50SHRtbDogJycsXG5cdFx0XHRzb3J0aW5nOiAwLFxuXHRcdFx0aW1hZ2U6IFwiL2ZpbGVzL2ltYWdlcy9wcm9kdWN0LzIwMTItMDUtMjJfZm90b19udi5qcGdcIlxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdHRpdGxlQ2hhbmdlKGUpe1xuXHRcdHZhciB0aXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgZmx1aWQ9e3RydWV9PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5zdGF0ZS5pbWFnZX0gZGVsZXRlPVwiaGlkZGVuXCIvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbdGl0bGVdXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMudGl0bGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YVBhZ2VbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLnBhdGh9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IChtYXJrZG93bik8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2NvbnRlbnRNYXJrZG93bl1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnRNYXJrZG93bn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2NvbnRlbnRNYXJrZG93bicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbCBjbGFzc05hbWU9XCJtcjJcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdzb3J0aW5nJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PElucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhUGFnZVtjb250ZW50SHRtbF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnRIVE1MfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL0RlZmF1bHRGb3JtQWRkLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgR3JpZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HcmlkXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEdyb3VwXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5pbXBvcnQgY2F0ZWdvcnlIZWxwZXJzIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IENhdGVnb3J5UmVwbGFjZSBmcm9tIFwiLi9DYXRlZ29yeVJlcGxhY2VDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllc0Zvcm1BZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5hbWUgOiAnJyxcblx0XHRcdHBhdGg6ICcnLFxuXHRcdFx0ZGVzY3JpcHRpb246ICcnLFxuXHRcdFx0Y29udGVudE1hcmtkb3duOiAnJyxcblx0XHRcdGNvbnRlbnRIdG1sOiAnJyxcblx0XHRcdHNvcnRpbmc6IDAsXG5cdFx0XHRpbWFnZTogXCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiLFxuXHRcdFx0cGFyZW50SWQ6IHByb3BzLmRhdGEuaWQsXG5cdFx0XHRwYXJlbnRDYXRlZ29yeUluZm86IHByb3BzLmRhdGEsXG5cdFx0XHRjYXRlZ29yeUxpc3Q6ICcnXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dmFyIHBhcmVudElkID0gdGhpcy5wcm9wcy5kYXRhLmlkO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldEN1cnJlbnRHYXRlZ29yeUxpc3QocGFyZW50SWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUxpc3Qpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtjYXRlZ29yeUxpc3Q6IGNhdGVnb3J5TGlzdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdHRpdGxlQ2hhbmdlKGUpe1xuXHRcdHZhciB0aXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzZWxlY3RDYXRlZ29yeShpZCl7XG5cdFx0Y29uc29sZS5sb2coJ1NFTEVDVEVEIENBVEVHT1JZJyxpZCk7XG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyhpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHBhcmVudENhdGVnb3J5SW5mbzogY2F0ZWdvcnlJbmZvLFxuXHRcdFx0XHRcdHBhcmVudElkOiBpZFxuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgZmx1aWQ9e3RydWV9PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5zdGF0ZS5pbWFnZX0gZGVsZXRlPVwiaGlkZGVuXCIvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W25hbWVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17dGhpcy50aXRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtwYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUucGF0aH1cblx0XHRcdFx0XHRcdFx0XHRcdCByZXF1aXJlZFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KDQvtC00LjRgtC10LvRjNGB0LrQsNGPINC60LDRgtC10LPQvtGA0LjRjzwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2F0ZWdvcnlSZXBsYWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRDYXRlZ29yeT17dGhpcy5wcm9wcy5kYXRhfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yeUxpc3Q9e3RoaXMuc3RhdGUuY2F0ZWdvcnlMaXN0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RDYXRlZ29yeT17dGhpcy5zZWxlY3RDYXRlZ29yeS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGFyZW50Q2F0ZWdvcnlJbmZvLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QntC/0LjRgdCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W2NvbnRlbnRNYXJrZG93bl1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnRNYXJrZG93bn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2NvbnRlbnRNYXJrZG93bicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbCBjbGFzc05hbWU9XCJtcjJcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnNvcnRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W3BhcmVudElkXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUucGFyZW50SWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvR3JpZD5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzRm9ybUFkZC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IEhlbHBCbG9jayBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9IZWxwQmxvY2tcIjtcblxuaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9JbWFnZXNVcGxvYWRcIjtcbmltcG9ydCBTbHVnaWZ5IGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL3NsdWdpZnlIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEZvcm1BZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNrdTogJycsXG5cdFx0XHRuYW1lIDogJycsXG5cdFx0XHRwYXRoOiAnJyxcblx0XHRcdGZ1bGxQYXRoOiAnJyxcblx0XHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRcdGNvbnRlbnRNYXJrZG93bjogJycsXG5cdFx0XHRjb250ZW50SHRtbDogJycsXG5cdFx0XHRzb3J0aW5nOiAwLFxuXHRcdFx0aW1hZ2U6IFwiL2ZpbGVzL2ltYWdlcy9wcm9kdWN0LzIwMTItMDUtMjJfZm90b19udi5qcGdcIixcblx0XHRcdGRyYWZ0OiBcIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCIsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRlcnJvckhlbHA6ICdFcnJvci4nXG5cdFx0fVxuXHR9XG5cblx0b25DaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRza3VPbkNoYW5nZShlKXtcblx0XHR2YXIgaW5wdXQgPSBlLnRhcmdldDtcblx0XHR2YXIgc2t1ID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRza3U6IHNrdVxuXHRcdH0sKCkgPT4ge3RoaXMudmFsaWRhdGVJbnB1dChpbnB1dCl9KTtcblx0fVxuXG5cdHZhbGlkYXRlSW5wdXQoaW5wdXQpe1xuXHRcdFNsdWdpZnkuZ2V0UHJvZHVjdFNsdWdpZnkoaW5wdXQudmFsdWUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdGlmKCFyZXN1bHQuZXJyb3Ipe1xuXHRcdFx0XHRcdHZhciBwYXRoID0gcmVzdWx0LnBhdGg7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRwYXRoOiBwYXRoLFxuXHRcdFx0XHRcdFx0ZnVsbFBhdGg6IHRoaXMucHJvcHMuZGF0YS5mdWxsUGF0aCArICcvJyArIHBhdGgsXG5cdFx0XHRcdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRcdFx0XHRlcnJvckhlbHA6ICdFcnJvci4nXG5cdFx0XHRcdFx0fSwgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZXJyb3I6IHRydWUsXG5cdFx0XHRcdFx0XHRlcnJvckhlbHA6IHJlc3VsdC5lcnJvclxuXHRcdFx0XHRcdH0sIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KHJlc3VsdC5lcnJvciArICcg0J3QsNC00L4g0LjRgdC/0YDQsNCy0LjRgtGMIScpKTtcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRlbGV0ZT1cImhpZGRlblwiIGlucHV0TmFtZT1cImZpbGVMb2FkSW1hZ2VcIi8+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXt0aGlzLnN0YXRlLmRyYWZ0fSBkZWxldGU9XCJoaWRkZW5cIiBpbnB1dE5hbWU9XCJmaWxlTG9hZERyYWZ0XCIvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9eyghdGhpcy5zdGF0ZS5lcnJvcik/Jyc6J2hhcy1lcnJvcid9PlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0L7QtCDRgtC+0LLQsNGA0LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JrQvtC0INGC0L7QstCw0YDQsFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJza3VcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW3NrdV1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnNrdX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5za3VPbkNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxIZWxwQmxvY2s+e3RoaXMuc3RhdGUuZXJyb3IgJiYgdGhpcy5zdGF0ZS5lcnJvckhlbHB9PC9IZWxwQmxvY2s+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tuYW1lXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnbmFtZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5P0L/QuNGB0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbCBjbGFzc05hbWU9XCJtcjJcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnNvcnRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLnBhdGh9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW2Z1bGxQYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUuZnVsbFBhdGh9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJjYXRlZ29yeUlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RzL1Byb2R1Y3RGb3JtQWRkLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQWxlcnRcIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybURlbGV0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0eyghdGhpcy5wcm9wcy5kYXRhLnRpdGxlKT90aGlzLnByb3BzLmRhdGEubmFtZTp0aGlzLnByb3BzLmRhdGEudGl0bGV9XG5cdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluLycrdGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xsZXIrJy8nK3RoaXMucHJvcHMuYWN0aW9uKycvJyt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRcdGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aDU+0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0Y3RgtC+0YIg0YDQsNC30LTQtdC7ITwvaDU+XG5cdFx0XHRcdFx0XHQ8QWxlcnQgYnNTdHlsZT1cImRhbmdlclwiPlxuXHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPSd3YXJuaW5nLXNpZ24nIGNsYXNzTmFtZSA9ICdtcjEnLz5cblx0XHRcdFx0XHRcdFx00JLRgdC1IDxzdHJvbmc+0L/QvtC00YDQsNC30LTQtdC70Ys8L3N0cm9uZz4g0Lgg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNC1IDxzdHJvbmc+0YLQvtCy0LDRgNGLPC9zdHJvbmc+INCyINGN0YLQuNGFINC/0L7QtNGA0LDQt9C00LXQu9Cw0YUg0L3QsCDRgdCw0LnRgtC1INC+0YLQvtCx0YDQsNC20LDRgtGM0YHRjyDQvdC1INCx0YPQtNGD0YIhXG5cdFx0XHRcdFx0XHQ8L0FsZXJ0PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY3VycmVudFVybFwiIHZhbHVlPXt3aW5kb3cubG9jYXRpb24uaHJlZn0vPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBmb3JtPVwiZm9ybU1vZGFsXCIgYnNTdHlsZT1cImRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIj7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsRm9ybURlbGV0ZS5qc1xuICoqLyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFscGhhLUh5ZHJvLlxuICogIEBsaW5rIGh0dHA6Ly93d3cuYWxwaGEtaHlkcm8uY29tXG4gKiAgQGF1dGhvciBWbGFkaW1pciBNaWtoYXlsb3YgPGFkbWluQGFscGhhLWh5ZHJvLmNvbT5cbiAqICBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgQWxwaGEtSHlkcm9cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybURlbGV0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0eyghdGhpcy5wcm9wcy5kYXRhLnRpdGxlKT90aGlzLnByb3BzLmRhdGEubmFtZTp0aGlzLnByb3BzLmRhdGEudGl0bGV9XG5cdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluLycrdGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xsZXIrJy8nK3RoaXMucHJvcHMuYWN0aW9uKycvJyt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRcdGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8cD7QktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0Y3RgtC+0YIg0YDQsNC30LTQtdC7ITwvcD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPtCS0L7RgdGB0YLQsNC90L7QstC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsRm9ybVJlY292ZXIuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0XCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1EaXNhYmxlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0eyghdGhpcy5wcm9wcy5kYXRhLnRpdGxlKT90aGlzLnByb3BzLmRhdGEubmFtZTp0aGlzLnByb3BzLmRhdGEudGl0bGV9XG5cdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluLycrdGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xsZXIrJy8nK3RoaXMucHJvcHMuYWN0aW9uKycvJyt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRcdGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aDU+0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YHQutGA0YvRgtGMINGN0YLQvtGCINGA0LDQt9C00LXQuyE8L2g1PlxuXHRcdFx0XHRcdFx0PEFsZXJ0IGJzU3R5bGU9XCJkYW5nZXJcIj5cblx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD0nd2FybmluZy1zaWduJyBjbGFzc05hbWUgPSAnbXIxJy8+XG5cdFx0XHRcdFx0XHRcdNCS0YHQtSA8c3Ryb25nPtC/0L7QtNGA0LDQt9C00LXQu9GLPC9zdHJvbmc+INC4INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQtSA8c3Ryb25nPtGC0L7QstCw0YDRizwvc3Ryb25nPiDQsiDRjdGC0LjRhSDQv9C+0LTRgNCw0LfQtNC10LvQsNGFINC90LAg0YHQsNC50YLQtSDQvtGC0L7QsdGA0LDQttCw0YLRjNGB0Y8g0L3QtSDQsdGD0LTRg9GCIVxuXHRcdFx0XHRcdFx0PC9BbGVydD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPtCh0LrRgNGL0YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EaXNhYmxlZC5qc1xuICoqLyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFscGhhLUh5ZHJvLlxuICogIEBsaW5rIGh0dHA6Ly93d3cuYWxwaGEtaHlkcm8uY29tXG4gKiAgQGF1dGhvciBWbGFkaW1pciBNaWtoYXlsb3YgPGFkbWluQGFscGhhLWh5ZHJvLmNvbT5cbiAqICBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgQWxwaGEtSHlkcm9cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybURpc2FibGVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0b25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0eyghdGhpcy5wcm9wcy5kYXRhLnRpdGxlKT90aGlzLnByb3BzLmRhdGEubmFtZTp0aGlzLnByb3BzLmRhdGEudGl0bGV9XG5cdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluLycrdGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xsZXIrJy8nK3RoaXMucHJvcHMuYWN0aW9uKycvJyt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxwPtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INC/0L7QutCw0LfQsNGC0Ywg0Y3RgtC+0YIg0YDQsNC30LTQtdC7ITwvcD5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPtCf0L7QutCw0LfQsNGC0Yw8L0J1dHRvbj5cblx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdDwvTW9kYWw+XG5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsRm9ybUVuYWJsZS5qc1xuICoqLyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFscGhhLUh5ZHJvLlxuICogIEBsaW5rIGh0dHA6Ly93d3cuYWxwaGEtaHlkcm8uY29tXG4gKiAgQGF1dGhvciBWbGFkaW1pciBNaWtoYXlsb3YgPGFkbWluQGFscGhhLWh5ZHJvLmNvbT5cbiAqICBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgQWxwaGEtSHlkcm9cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuXG5pbXBvcnQgTW9kYWxSZXNwb25zZU1lc3NhZ2UgZnJvbSBcIi4vTW9kYWxSZXNwb25zZU1lc3NhZ2VcIjtcbmltcG9ydCBnaXRIdWJIZWxwZXIgZnJvbSBcIi4uLy4uL3V0aWxzL2dpdEh1YkhlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1Jc3N1ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dXJsOiAnJyxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGJvZHk6ICcnLFxuXHRcdFx0bGFiZWw6ICcnLFxuXHRcdFx0c2hvd01lc3NhZ2U6IGZhbHNlLFxuXHRcdFx0dGV4dE1lc3NhZ2U6ICcnLFxuXHRcdFx0dGl0bGVNZXNzYWdlOiAnQWxlcnQnLFxuXHRcdFx0dHlwZU1lc3NhZ2U6ICdzdWNjZXNzJyxcblx0XHRcdHNpemVNZXNzYWdlOiAnbGcnXG5cdFx0fVxuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Ym9keTogJydcblx0XHR9KTtcblx0fVxuXG5cdGhpZGVNZXNzYWdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd01lc3NhZ2U6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZlxuXHRcdH0pO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRkb2N1bWVudC5vbmtleWRvd24gPSAoZSk9Pntcblx0XHRcdGlmKGUuYWx0S2V5ICYmIGUua2V5Q29kZSA9PSAxMTMpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzaG93TW9kYWw6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0c2VuZElzc3VlKCl7XG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcInRpdGxlXCI6IHRoaXMuc3RhdGUudGl0bGUsXG5cdFx0XHRcImJvZHlcIjogJyMjICcgKyB0aGlzLnN0YXRlLnVybCArICdcXG5cXG4nICsgdGhpcy5zdGF0ZS5ib2R5LFxuXHRcdFx0XCJsYWJlbHNcIjogWyh0aGlzLnN0YXRlLmxhYmVsKT90aGlzLnN0YXRlLmxhYmVsOifQvtGI0LjQsdC60LAnXX07XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0Z2l0SHViSGVscGVyLm5ld0lzc3VlKGRhdGEpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhSW5mbyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGFJbmZvKTtcblx0XHRcdFx0aWYoZGF0YUluZm8uc3RhdHVzID09IDIwMSAmJiBkYXRhSW5mby5zdGF0dXNUZXh0ID09ICdDcmVhdGVkJyl7XG5cdFx0XHRcdFx0dGhpcy5oaWRlTW9kYWwoKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHNob3dNZXNzYWdlOiB0cnVlLFxuXHRcdFx0XHRcdFx0dGl0bGVNZXNzYWdlOiAn0KHQvtC+0LHRidC10L3QuNC1ICMnICsgZGF0YUluZm8uZGF0YS5udW1iZXIgKycuJyxcblx0XHRcdFx0XHRcdHRleHRNZXNzYWdlOiAn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INC+0LEg0L7RiNC40LHQutC1INGB0L7Qt9C00LDQvdC+LiDQkdC70LDQs9C+0LTQsNGA0Y4g0LfQsCDQv9C+0LzQvtGJ0YwuINCSINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPINC+0YjQuNCx0LrQsCDQsdGD0LTQtdGCINC40YHQv9GA0LDQstC70LXQvdCwIScsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHNob3dNZXNzYWdlOiB0cnVlLFxuXHRcdFx0XHRcdFx0dHlwZU1lc3NhZ2U6ICdkYW5nZXInLFxuXHRcdFx0XHRcdFx0dGl0bGVNZXNzYWdlOiAn0J7RiNC40LHQutCwIScsXG5cdFx0XHRcdFx0XHR0ZXh0TWVzc2FnZTogJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdC+LiDQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAuINCe0LHRgNCw0YLQuNGC0LXRgdGMINC6INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0YMuJyxcblx0XHRcdFx0XHRcdHNpemVNZXNzYWdlOiAnc21hbGwnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdFx0b25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J3QsNC30LLQsNC90LjQtSDQvtGI0LjQsdC60Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDQvtGI0LjQsdC60LhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QotC40L8g0L7RiNC40LHQutC4PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInNlbGVjdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdsYWJlbCcpLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPi4uLjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cItC+0YjQuNCx0LrQsFwiPtC+0YjQuNCx0LrQsDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cItC00L7RgNCw0LHQvtGC0LrQsFwiPtC00L7RgNCw0LHQvtGC0LrQsDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImVuaGFuY2VtZW50XCI+0L/RgNC10LTQu9C+0LbQtdC90LjQtTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uXCI+0LLQvtC/0YDQvtGBPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QntC/0LjRgdCw0L3QuNC1INC+0YjQuNCx0LrQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0L7RiNC40LHQutC4XCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJib2R5XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmJvZHl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2JvZHknKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmRJc3N1ZS5iaW5kKHRoaXMpfT7QntGC0L/RgNCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PE1vZGFsUmVzcG9uc2VNZXNzYWdlXG5cdFx0XHRcdFx0c2hvd01lc3NhZ2U9e3RoaXMuc3RhdGUuc2hvd01lc3NhZ2V9XG5cdFx0XHRcdFx0aGlkZU1lc3NhZ2U9e3RoaXMuaGlkZU1lc3NhZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHR0aXRsZT17dGhpcy5zdGF0ZS50aXRsZU1lc3NhZ2V9XG5cdFx0XHRcdFx0dHlwZT17dGhpcy5zdGF0ZS50eXBlTWVzc2FnZX1cblx0XHRcdFx0XHR0ZXh0PXt0aGlzLnN0YXRlLnRleHRNZXNzYWdlfVxuXHRcdFx0XHRcdHNpemU9e3RoaXMuc3RhdGUuc2l6ZU1lc3NhZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdCk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtSXNzdWUuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGVNZXNzYWdlKCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5zaG93TWVzc2FnZX0gb25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfSBic1NpemU9e3RoaXMucHJvcHMuc2l6ZX0+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gY2xhc3NOYW1lPXsnbWIwIGFsZXJ0IGFsZXJ0LScrdGhpcy5wcm9wcy50eXBlfT5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMudGV4dH1cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+T0s8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdClcblx0fTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxSZXNwb25zZU1lc3NhZ2UuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tIFwiLi9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50XCI7XG5pbXBvcnQgTW9kYWxDb21wb25lbnQgZnJvbSBcIi4vTW9kYWxDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUJ1dHRvbnNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0YWN0aW9uOiAnJyxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGRhdGE6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHNob3dNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlfSk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBjb250cm9sbGVyID0gdGhpcy5wcm9wcy5kYXRhSXRlbS5jb250cm9sbGVyLFxuXHRcdFx0XHRpZCA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uaWQ7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0RGF0YUluZm8oY29udHJvbGxlciwgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhSW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGRhdGFJbmZvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXHRcblx0aGFuZGxlckNsaWNrQnV0dG9uKGFjdGlvbiwgdGl0bGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aW9uOiBhY3Rpb24sXG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRzaG93OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBic1N0eWxlID0gKHRoaXMucHJvcHMuZGF0YUl0ZW0uYnNzdHlsZSk/dGhpcy5wcm9wcy5kYXRhSXRlbS5ic3N0eWxlOidkZWZhdWx0JztcblxuXHRcdGNvbnN0IEJ1dHRvbnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwiZWRpdFwiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJlZGl0XCIsXG5cdFx0XHRcdHJvbGU6IFsnbWFuYWdlcicsICdhZG1pbiddLFxuXHRcdFx0XHR0aXRsZTpcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwidHJhc2hcIixcblx0XHRcdFx0ZW5hYmxlOiAhdGhpcy5wcm9wcy5kYXRhSXRlbS5kZWxldGVkLFxuXHRcdFx0XHRhY3Rpb246IFwiZGVsZXRlXCIsXG5cdFx0XHRcdHJvbGU6IFsnYWRtaW4nXSxcblx0XHRcdFx0dGl0bGU6XCLQo9C00LDQu9C40YLRjFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcIm9wZW5cIixcblx0XHRcdFx0ZW5hYmxlOiB0aGlzLnByb3BzLmRhdGFJdGVtLmRlbGV0ZWQsXG5cdFx0XHRcdGFjdGlvbjogXCJyZWNvdmVyXCIsXG5cdFx0XHRcdHJvbGU6IFsnYWRtaW4nXSxcblx0XHRcdFx0dGl0bGU6XCLQktC+0YFj0YLQsNC90L7QstC40YLRjFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcImV5ZS1jbG9zZVwiLFxuXHRcdFx0XHRlbmFibGU6IHRoaXMucHJvcHMuZGF0YUl0ZW0uYWN0aXZlICYmICF0aGlzLnByb3BzLmRhdGFJdGVtLmRlbGV0ZWQsXG5cdFx0XHRcdGFjdGlvbjogXCJkaXNhYmxlZFwiLFxuXHRcdFx0XHRyb2xlOiBbJ2FkbWluJ10sXG5cdFx0XHRcdHRpdGxlOlwi0KHQutGA0YvRgtGMXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwiZXllLW9wZW5cIixcblx0XHRcdFx0ZW5hYmxlOiAhdGhpcy5wcm9wcy5kYXRhSXRlbS5hY3RpdmUgJiYgIXRoaXMucHJvcHMuZGF0YUl0ZW0uZGVsZXRlZCxcblx0XHRcdFx0YWN0aW9uOiBcImVuYWJsZWRcIixcblx0XHRcdFx0cm9sZTogWydhZG1pbiddLFxuXHRcdFx0XHR0aXRsZTpcItCf0L7QutCw0LfQsNGC0YxcIlxuXHRcdFx0fVxuXHRcdF1cblx0XHRcdC8qLmZpbHRlcihcblx0XHRcdFx0KGJ1dHRvbikgPT4gYnV0dG9uLmVuYWJsZSAmJiBidXR0b24ucm9sZS5pbmRleE9mKHRoaXMucHJvcHMuZGF0YUl0ZW0ucm9sZSkgIT0gLTFcblx0XHRcdCkqL1xuXHRcdFx0Lm1hcChcblx0XHRcdFx0KGJ1dHRvbiwgaSkgPT4gYnV0dG9uLmVuYWJsZSAmJiA8QnV0dG9uQ29tcG9uZW50XG5cdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdGJzU3R5bGU9e2JzU3R5bGV9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVyQ2xpY2tCdXR0b24uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRhY3Rpb249e2J1dHRvbi5hY3Rpb259XG5cdFx0XHRcdFx0aWNvbj17YnV0dG9uLmljb259XG5cdFx0XHRcdFx0dGl0bGU9e2J1dHRvbi50aXRsZX1cblx0XHRcdFx0XHRkaXNhYmxlZD17IShidXR0b24ucm9sZS5pbmRleE9mKHRoaXMucHJvcHMuZGF0YUl0ZW0ucm9sZSkgIT0gLTEpfS8+XG5cdFx0XHQpO1xuXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXNtXCI+XG5cdFx0XHRcdHtCdXR0b25zfVxuXHRcdFx0XHQ8TW9kYWxDb21wb25lbnRcblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3d9XG5cdFx0XHRcdFx0aGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0dGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0YWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblxuXHR9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSXRlbUJ1dHRvbnNDb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuaW1wb3J0IENhdGVnb3JpZXNGb3JtQWRkIGZyb20gXCIuL0NhdGVnb3JpZXNGb3JtQWRkXCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllc0FkZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRkYXRhOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHRsZXRcdGlkID0gdGhpcy5wcm9wcy5kYXRhSXRlbS5pZDtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhQ2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogZGF0YUNhdGVnb3J5SW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblx0XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGF0YUl0ZW0ucm9sZSAhPSAnYWRtaW4nfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kYXRhSXRlbS50aXRsZX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd31cblx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwidzEwMFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy5kYXRhSXRlbS50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi9jYXRlZ29yaWVzL2FkZC8nfVxuXHRcdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxDYXRlZ29yaWVzRm9ybUFkZCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNBZGRCdXR0b24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuaW1wb3J0IFByb2R1Y3RGb3JtQWRkIGZyb20gXCIuL1Byb2R1Y3RGb3JtQWRkXCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFkZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRkYXRhOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGxldFx0Y2F0ZWdvcnlJZCA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uY2F0ZWdvcnlpZDtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeUluZm8oY2F0ZWdvcnlJZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGFDYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhQ2F0ZWdvcnlJbmZvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXHRcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kYXRhSXRlbS5yb2xlICE9ICdhZG1pbid9PlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmRhdGFJdGVtLnRpdGxlfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93fVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJ3MTAwXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kYXRhLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLmRhdGFJdGVtLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluL3Byb2R1Y3RzL2FkZC8nfVxuXHRcdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxQcm9kdWN0Rm9ybUFkZCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0QWRkQnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ2hlY2tib3hcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZVwiO1xuXG5pbXBvcnQgTW9kaWZpY2F0aW9uVGFibGVDb2x1bW4gZnJvbSBcIi4uL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVDb2x1bW5cIjtcblxuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RQYXNzcG9ydFBkZiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGNvbHVtbnM6IFtdLFxuXHRcdFx0cm93czpbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uKHRoaXMucHJvcHMuZGF0YUl0ZW0uaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjb2x1bW5zOiBkYXRhLmNvbHVtbnMsXG5cdFx0XHRcdFx0cm93czogZGF0YS5yb3dzXG5cdFx0XHRcdH0pXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b3Blbigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuXHR9XG5cblx0Y2hlY2tBbGwoZSl7XG5cblx0XHR2YXIgY2hlY2tib3hlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIikpO1xuXHRcdGNoZWNrYm94ZXMubWFwKGZ1bmN0aW9uKGMpIHtcblx0XHRcdGMuY2hlY2tlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cdFx0fSk7XG5cdH1cblxuXHRoZWFkVGFibGUoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDx0aD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dGhpcy5jaGVja0FsbC5iaW5kKHRoaXMpfS8+PC90aD5cblx0XHRcdFx0PHRoPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtTwvdGg+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGlmaWNhdGlvblRhYmxlQ29sdW1uXG5cdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRjb2x1bW49e2NvbHVtbn0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cblx0XG5cdGJvZHlUYWJsZSgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnJvd3MubWFwKGZ1bmN0aW9uIChyb3csIGkpIHtcblx0XHRcdHJldHVybiA8dHIga2V5PXtpfT5cblx0XHRcdFx0PHRkPjxDaGVja2JveCBuYW1lPVwibW9kaWZpY2F0aW9uc1tdXCIgdmFsdWU9e3Jvdy5pdGVtLmlkfS8+PC90ZD5cblx0XHRcdFx0PHRoPntyb3cuaXRlbS5za3V9PC90aD5cblx0XHRcdFx0e3Jvdy52YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKXtcblx0XHRcdFx0XHRyZXR1cm4gPHRkIGtleT17aX0+e3ZhbHVlLnZhbHVlfTwvdGQ+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC90cj5cblx0XHR9KTtcblx0fVxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCJcblx0XHRcdFx0XHQgY2xhc3NOYW1lPVwiYWxwaGEtaWNvbi1wcmludFwiXG5cdFx0XHRcdFx0IG9uQ2xpY2s9e3RoaXMub3Blbi5iaW5kKHRoaXMpfSA+0J/QsNGB0L/QvtGA0YI8L2E+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdGRpYWxvZ0NsYXNzTmFtZT1cInc5MFwiXG5cdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93fVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGNsYXNzTmFtZT1cIm10YjEgaDNcIj57dGhpcy5wcm9wcy5kYXRhSXRlbS5uYW1lKycsICcrdGhpcy5wcm9wcy5kYXRhSXRlbS5za3V9PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm0gaWQ9XCJwcmludC1wYXNzcG9ydFwiIG5hbWU9XCJtb2RpZmljYXRpb25cIiBtZXRob2Q9XCJwb3N0XCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBhY3Rpb249eycvYWRtaW4vcHJvZHVjdHMvcGFzc3BvcnQvJyt0aGlzLnByb3BzLmRhdGFJdGVtLmlkfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuXHRcdFx0XHRcdFx0PFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgY2xhc3NOYW1lPVwidGV4dC1zaXplLXNtYWxsIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5oZWFkVGFibGUoKX1cblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLmJvZHlUYWJsZSgpfVxuXHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiIGZvcm09XCJwcmludC1wYXNzcG9ydFwiPtCh0L7Qt9C00LDRgtGMINC/0LDRgdC/0L7RgNGCPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHRcdDwvc3Bhbj5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdFBhc3Nwb3J0UGRmLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==