webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ButtonGroup = __webpack_require__(175);
	
	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);
	
	var _IssueModalForm = __webpack_require__(276);
	
	var _IssueModalForm2 = _interopRequireDefault(_IssueModalForm);
	
	var _PanelButtonsComponent = __webpack_require__(352);
	
	var _PanelButtonsComponent2 = _interopRequireDefault(_PanelButtonsComponent);
	
	var _ItemButtonsComponent = __webpack_require__(500);
	
	var _ItemButtonsComponent2 = _interopRequireDefault(_ItemButtonsComponent);
	
	var _CategoriesAddButton = __webpack_require__(501);
	
	var _CategoriesAddButton2 = _interopRequireDefault(_CategoriesAddButton);
	
	var _ProductAddButton = __webpack_require__(502);
	
	var _ProductAddButton2 = _interopRequireDefault(_ProductAddButton);
	
	var _ProductPropertyEditButton = __webpack_require__(466);
	
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

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gitHubHelper = __webpack_require__(277);
	
	var _gitHubHelper2 = _interopRequireDefault(_gitHubHelper);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
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

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	 * Created by Alpha-Hydro.
	 *  @link http://www.alpha-hydro.com
	 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	 *  @copyright Copyright (c) 2016, Alpha-Hydro
	 */
	
	var axios = __webpack_require__(278);
	
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

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getDataHelper = __webpack_require__(353);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _ButtonComponent = __webpack_require__(354);
	
	var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);
	
	var _ModalComponent = __webpack_require__(355);
	
	var _ModalComponent2 = _interopRequireDefault(_ModalComponent);
	
	var _ButtonGroup = __webpack_require__(175);
	
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

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var axios = __webpack_require__(278);
	
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

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
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

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModalFormsEdit = __webpack_require__(356);
	
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
	
	var _gitHubHelper = __webpack_require__(277);
	
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

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _DefaultFormEdit = __webpack_require__(357);
	
	var _DefaultFormEdit2 = _interopRequireDefault(_DefaultFormEdit);
	
	var _PagesFormEdit = __webpack_require__(460);
	
	var _PagesFormEdit2 = _interopRequireDefault(_PagesFormEdit);
	
	var _CategoriesFormEdit = __webpack_require__(461);
	
	var _CategoriesFormEdit2 = _interopRequireDefault(_CategoriesFormEdit);
	
	var _ProductsFormEdit = __webpack_require__(465);
	
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

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(361);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(459);
	
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

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(365);
	
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

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var axios = __webpack_require__(278);
	
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

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ImagesUpload = __webpack_require__(364);
	
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

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(361);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(459);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _getDataHelper = __webpack_require__(353);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CategoryReplaceComponent = __webpack_require__(462);
	
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

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _ListGroup = __webpack_require__(407);
	
	var _ListGroup2 = _interopRequireDefault(_ListGroup);
	
	var _getDataHelper = __webpack_require__(353);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CatalogParentCategoryReplaceItemList = __webpack_require__(463);
	
	var _CatalogParentCategoryReplaceItemList2 = _interopRequireDefault(_CatalogParentCategoryReplaceItemList);
	
	var _CategoryRaplaceList = __webpack_require__(464);
	
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

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var Glyphicon = __webpack_require__(345);
	var ListGroupItem = __webpack_require__(408);
	var Row = __webpack_require__(359);
	var Col = __webpack_require__(360);
	
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

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ListGroupItem = __webpack_require__(408);
	
	var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Badge = __webpack_require__(369);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Glyphicon = __webpack_require__(345);
	
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

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(361);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _HelpBlock = __webpack_require__(403);
	
	var _HelpBlock2 = _interopRequireDefault(_HelpBlock);
	
	var _getDataHelper = __webpack_require__(353);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _slugifyHelper = __webpack_require__(459);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _CategoryReplaceComponent = __webpack_require__(462);
	
	var _CategoryReplaceComponent2 = _interopRequireDefault(_CategoryReplaceComponent);
	
	var _ProductPropertyEditButton = __webpack_require__(466);
	
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

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(353);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _productPropertyHelper = __webpack_require__(467);
	
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

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(468);
	var axios = __webpack_require__(278);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(453);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(263);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(353);
	
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
	
	var $ = __webpack_require__(468);
	var axios = __webpack_require__(278);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(453);
	
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
	
	var _react = __webpack_require__(1);
	
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
	
	var _react = __webpack_require__(1);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
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
	
	var _react = __webpack_require__(1);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(263);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(353);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(453);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(263);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(361);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(459);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(361);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(345);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(459);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(459);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(361);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(459);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _getDataHelper = __webpack_require__(353);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CategoryReplaceComponent = __webpack_require__(462);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(358);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(359);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(360);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _HelpBlock = __webpack_require__(403);
	
	var _HelpBlock2 = _interopRequireDefault(_HelpBlock);
	
	var _ImagesUpload = __webpack_require__(364);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(459);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Alert = __webpack_require__(368);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Glyphicon = __webpack_require__(345);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Alert = __webpack_require__(368);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Glyphicon = __webpack_require__(345);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(346);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(348);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(351);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ModalResponseMessage = __webpack_require__(499);
	
	var _ModalResponseMessage2 = _interopRequireDefault(_ModalResponseMessage);
	
	var _gitHubHelper = __webpack_require__(277);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getDataHelper = __webpack_require__(353);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _ButtonComponent = __webpack_require__(354);
	
	var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);
	
	var _ModalComponent = __webpack_require__(355);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _CategoriesFormAdd = __webpack_require__(492);
	
	var _CategoriesFormAdd2 = _interopRequireDefault(_CategoriesFormAdd);
	
	var _getDataHelper = __webpack_require__(353);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ProductFormAdd = __webpack_require__(493);
	
	var _ProductFormAdd2 = _interopRequireDefault(_ProductFormAdd);
	
	var _getDataHelper = __webpack_require__(353);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(300);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Checkbox = __webpack_require__(377);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Table = __webpack_require__(453);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ModificationTableColumn = __webpack_require__(477);
	
	var _ModificationTableColumn2 = _interopRequireDefault(_ModificationTableColumn);
	
	var _getDataHelper = __webpack_require__(353);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Jc3N1ZU1vZGFsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2l0SHViSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhbmVsQnV0dG9uc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0RGF0YUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3Jtc0VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9EZWZhdWx0Rm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0ltYWdlc1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2x1Z2lmeUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlcy9QYWdlc0Zvcm1FZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmVwbGFjZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yeVJhcGxhY2VMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdHNGb3JtRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Byb2R1Y3RQcm9wZXJ0eUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvTmV3UHJvZHVjdFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Byb2R1Y3RNb2RpZmljYXRpb25IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbnNUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uSGVhZFRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZUNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbk5ld1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lZGlhL01lZGlhRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVkaWEvTWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1TZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zQWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvRGVmYXVsdEZvcm1BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNGb3JtQWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdEZvcm1BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1SZWNvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtRGlzYWJsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1FbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1Jc3N1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsUmVzcG9uc2VNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0l0ZW1CdXR0b25zQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzQWRkQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdEFkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RzL1Byb2R1Y3RQYXNzcG9ydFBkZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBTUEsS0FBTSxhQUFhLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBLGVBQWMsbUJBQVMsTUFBVCxDQUNiLGlFQUF1QixTQUFRLHdCQUEvQixFQUF3RCxVQUFZLFdBQVcsT0FBL0UsR0FEYSxFQUViLFVBRmEsQ0FBZDs7QUFLQSxLQUFHLFNBQVMsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBSCxFQUFtRDtBQUNsRCxNQUFNLHdCQUF3QixHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsU0FBUyxnQkFBVCxDQUEwQix1QkFBMUIsQ0FBZCxDQUE5QjtBQUNBLHdCQUFzQixPQUF0QixDQUE4QixVQUFVLElBQVYsRUFBZ0I7QUFDN0Msc0JBQVMsTUFBVCxDQUFnQixnRUFBc0IsVUFBWSxLQUFLLE9BQXZDLEdBQWhCLEVBQW1FLElBQW5FO0FBQ0EsR0FGRDtBQUdBOztBQUVELEtBQU0sdUJBQXVCLFNBQVMsY0FBVCxDQUF3QixzQkFBeEIsQ0FBN0I7QUFDQSx5QkFBd0IsbUJBQVMsTUFBVCxDQUN2QiwrREFBcUIsVUFBWSxxQkFBcUIsT0FBdEQsR0FEdUIsRUFFdkIsb0JBRnVCLENBQXhCOztBQUtBLEtBQU0sb0JBQW9CLFNBQVMsY0FBVCxDQUF3QixnQkFBeEIsQ0FBMUI7QUFDQSxzQkFBcUIsbUJBQVMsTUFBVCxDQUNwQiw0REFBa0IsVUFBWSxrQkFBa0IsT0FBaEQsR0FEb0IsRUFFcEIsaUJBRm9CLENBQXJCOztBQUtBLEtBQUksU0FBSjtBQUNBLEtBQU0sc0JBQXNCLFNBQVMsY0FBVCxDQUF3Qix1QkFBeEIsQ0FB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cnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbkdyb3VwXCI7XG5cbmltcG9ydCBJc3N1ZU1vZGFsRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL0lzc3VlTW9kYWxGb3JtXCI7XG5cbmltcG9ydCBQYW5lbEJ1dHRvbnNDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9QYW5lbEJ1dHRvbnNDb21wb25lbnRcIjtcbmltcG9ydCBJdGVtQnV0dG9uc0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0l0ZW1CdXR0b25zQ29tcG9uZW50XCI7XG5pbXBvcnQgQ2F0ZWdvcmllc0FkZEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzQWRkQnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdEFkZEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdEFkZEJ1dHRvblwiO1xuaW1wb3J0IFByb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b25cIjtcbmltcG9ydCBQcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvblwiO1xuaW1wb3J0IFByb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvblwiO1xuaW1wb3J0IFByb2R1Y3RQYXNzcG9ydFBkZiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdFBhc3Nwb3J0UGRmXCI7XG5cbi8qY29uc3QgaXNzdWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc3N1ZU1vZGFsJyk7XG5pc3N1ZU1vZGFsICYmIFJlYWN0RE9NLnJlbmRlcihcblx0PElzc3VlTW9kYWxGb3JtLz4sXG5cdGlzc3VlTW9kYWxcbik7Ki9cblxuY29uc3QgYWRtaW5QYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbi1wYW5lbCcpO1xuYWRtaW5QYW5lbCAmJiBSZWFjdERPTS5yZW5kZXIoXG5cdDxQYW5lbEJ1dHRvbnNDb21wb25lbnQgYnNDbGFzcz1cImJ0bi1ncm91cC1sZyBidG4tZ3JvdXBcIiBkYXRhSXRlbSA9IHthZG1pblBhbmVsLmRhdGFzZXR9Lz4sXG5cdGFkbWluUGFuZWxcbik7XG5cbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQnV0dG9uc0NvbXBvbmVudCcpKXtcblx0Y29uc3QgaXRlbUJ1dHRvbnNDb21wb25lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbUJ1dHRvbnNDb21wb25lbnQnKSk7XG5cdGl0ZW1CdXR0b25zQ29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0UmVhY3RET00ucmVuZGVyKDxJdGVtQnV0dG9uc0NvbXBvbmVudCBkYXRhSXRlbSA9IHtpdGVtLmRhdGFzZXR9Lz4sIGl0ZW0pO1xuXHR9KTtcbn1cblxuY29uc3QgY2F0ZWdvcmllc0FkZEJ1dHR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcmllc0FkZEJ1dHR0b24nKTtcbmNhdGVnb3JpZXNBZGRCdXR0dG9uICYmXHRSZWFjdERPTS5yZW5kZXIoXG5cdDxDYXRlZ29yaWVzQWRkQnV0dG9uIGRhdGFJdGVtID0ge2NhdGVnb3JpZXNBZGRCdXR0dG9uLmRhdGFzZXR9Lz4sXG5cdGNhdGVnb3JpZXNBZGRCdXR0dG9uXG4pO1xuXG5jb25zdCBwcm9kdWN0QWRkQnV0dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQWRkQnV0dHRvbicpO1xucHJvZHVjdEFkZEJ1dHR0b24gJiYgUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvZHVjdEFkZEJ1dHRvbiBkYXRhSXRlbSA9IHtwcm9kdWN0QWRkQnV0dHRvbi5kYXRhc2V0fS8+LFxuXHRwcm9kdWN0QWRkQnV0dHRvblxuKTtcblxudmFyIHByb2R1Y3RJZDtcbmNvbnN0IHByb2R1Y3RQcm9wZXJ0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1wcm9wZXJ0eS1lZGl0Jyk7XG5pZiAocHJvZHVjdFByb3BlcnR5RWRpdCl7XG5cdHByb2R1Y3RJZCA9IHByb2R1Y3RQcm9wZXJ0eUVkaXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cdFJlYWN0RE9NLnJlbmRlcig8UHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvblxuXHRcdHJvbGUgPSB7cHJvZHVjdFByb3BlcnR5RWRpdC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKX1cblx0XHRpZCA9IHtwcm9kdWN0UHJvcGVydHlFZGl0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpfVxuXHRcdGJzU3R5bGU9XCJwcmltYXJ5XCJcblx0XHRic1NpemU9XCJzbWFsbFwiXG5cdFx0Y2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXG5cdC8+LCBwcm9kdWN0UHJvcGVydHlFZGl0KTtcbn1cblxuY29uc3QgcHJvZHVjdE1vZGlmaWNhdGlvbkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1tb2RpZmljYXRpb24tZWRpdCcpO1xuaWYgKHByb2R1Y3RNb2RpZmljYXRpb25FZGl0KXtcblx0cHJvZHVjdElkID0gcHJvZHVjdE1vZGlmaWNhdGlvbkVkaXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cdFJlYWN0RE9NLnJlbmRlcihcblx0XHQ8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXHRic1NpemU9XCJzbWFsbFwiPlxuXHRcdFx0PFByb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uXG5cdFx0XHRcdGlkID0ge3Byb2R1Y3RJZH1cblx0XHRcdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdFx0XHRyb2xlID0ge3Byb2R1Y3RQcm9wZXJ0eUVkaXQuZ2V0QXR0cmlidXRlKCdyb2xlJyl9Lz5cblx0XHRcdDxQcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uXG5cdFx0XHRcdGlkID0ge3Byb2R1Y3RJZH1cblx0XHRcdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdFx0XHRyb2xlID0ge3Byb2R1Y3RQcm9wZXJ0eUVkaXQuZ2V0QXR0cmlidXRlKCdyb2xlJyl9Lz5cblx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdCwgcHJvZHVjdE1vZGlmaWNhdGlvbkVkaXQpO1xufVxuXG5jb25zdCBwYXNzcG9ydFBkZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzcG9ydC1wZGYnKTtcbnBhc3Nwb3J0UGRmICYmIFJlYWN0RE9NLnJlbmRlcihcblx0PFByb2R1Y3RQYXNzcG9ydFBkZiBkYXRhSXRlbSA9IHtwYXNzcG9ydFBkZi5kYXRhc2V0fS8+XG5cdCwgcGFzc3BvcnRQZGZcbik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2VuZC5qc1xuICoqLyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFscGhhLUh5ZHJvLlxuICogIEBsaW5rIGh0dHA6Ly93d3cuYWxwaGEtaHlkcm8uY29tXG4gKiAgQGF1dGhvciBWbGFkaW1pciBNaWtoYXlsb3YgPGFkbWluQGFscGhhLWh5ZHJvLmNvbT5cbiAqICBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgQWxwaGEtSHlkcm9cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2l0SHViSGVscGVyIGZyb20gXCIuLi91dGlscy9naXRIdWJIZWxwZXJcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlTW9kYWxGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Ym9keTogJycsXG5cdFx0XHRyZXNwb25zZU1lc3NhZ2U6ICcnXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR0aXRsZTogZG9jdW1lbnQubG9jYXRpb24uaHJlZlxuXHRcdH0pO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRkb2N1bWVudC5vbmtleWRvd24gPSAoZSk9Pntcblx0XHRcdGlmKGUuYWx0S2V5ICYmIGUua2V5Q29kZSA9PSAxMTMpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRzaG93TW9kYWw6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c2hvd01vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd01vZGFsOiBmYWxzZSxcblx0XHRcdHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGJvZHk6ICcnXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRzZW5kSXNzdWUoKXtcblx0XHR2YXIgZGF0YSA9IHtcInRpdGxlXCI6IHRoaXMuc3RhdGUudGl0bGUsIFwiYm9keVwiOiB0aGlzLnN0YXRlLmJvZHksIFwibGFiZWxzXCI6IFtcImRlc2lnblwiXX07XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0Z2l0SHViSGVscGVyLm5ld0lzc3VlKGRhdGEpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhSW5mbyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGFJbmZvKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cmVzcG9uc2VNZXNzYWdlOiAoZGF0YUluZm8uc3RhdHVzID09IDIwMSAmJiBkYXRhSW5mby5zdGF0dXNUZXh0ID09ICdDcmVhdGVkJylcblx0XHRcdFx0XHRcdD8gJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtSDRgdC+0LfQtNCw0L3Qvi4g0JHQu9Cw0LPQvtC00LDRgNGOINC30LAg0L/QvtC80L7RidGMLiDQkiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyDQvtGI0LjQsdC60LAg0LHRg9C00LXRgiDQuNGB0L/RgNCw0LLQu9C10L3QsCEnXG5cdFx0XHRcdFx0XHQ6ICfQodC+0L7QsdGJ0LXQvdC40LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Qvi4g0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwLiDQntCx0YDQsNGC0LjRgtC10YHRjCDQuiDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNGDLidcblx0XHRcdFx0fSlcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBtb2RhbEJvZHkgPSAoIXRoaXMuc3RhdGUucmVzcG9uc2VNZXNzYWdlKVxuXHRcdFx0P1x0PGZvcm0+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+VXJsINGB0YLRgNCw0L3QuNGG0Ys8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXJsINGB0YLRgNCw0L3QuNGG0YtcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwidXJsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudXJsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3VybCcpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCX0LDQs9C+0LvQvtCy0L7QuiDQvtGI0LjQsdC60Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDQvtGI0LjQsdC60LhcIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPlNlbGVjdDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIGNvbXBvbmVudENsYXNzPVwic2VsZWN0XCIgcGxhY2Vob2xkZXI9XCJzZWxlY3RcIj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPnNlbGVjdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwib3RoZXJcIj4uLi48L29wdGlvbj5cblx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J7Qv9C40YHQsNC90LjQtSDQvtGI0LjQsdC60Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1INC+0YjQuNCx0LrQuFwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJib2R5XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYm9keX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdib2R5JykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0Olx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPnt0aGlzLnN0YXRlLnJlc3BvbnNlTWVzc2FnZX08L2Rpdj47XG5cblx0XHRjb25zdCBtb2RhbEZvb3RlciA9ICghdGhpcy5zdGF0ZS5yZXNwb25zZU1lc3NhZ2UpXG5cdFx0XHQ/IDxkaXY+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnNlbmRJc3N1ZS5iaW5kKHRoaXMpfT7QntGC0L/RgNCw0LLQuNGC0Ywg0L7RiNC40LHQutGDPC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0OiA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9Pk9rPC9CdXR0b24+O1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhZG1pblwiPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YnNTdHlsZT1cImxpbmtcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwiY29tbWVudFwiIC8+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0gb25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCh0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtTwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHR7bW9kYWxCb2R5fVxuXHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0e21vZGFsRm9vdGVyfVxuXHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Jc3N1ZU1vZGFsRm9ybS5qc1xuICoqLyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFscGhhLUh5ZHJvLlxuICogIEBsaW5rIGh0dHA6Ly93d3cuYWxwaGEtaHlkcm8uY29tXG4gKiAgQGF1dGhvciBWbGFkaW1pciBNaWtoYXlsb3YgPGFkbWluQGFscGhhLWh5ZHJvLmNvbT5cbiAqICBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgQWxwaGEtSHlkcm9cbiAqL1xuXG52YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgaGVscGVycyA9IHtcblx0Z2V0SXNzdWU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvQWxwaGEtSHlkcm8vYWxwaGEtaHlkcm8tYW50YXJlcy9pc3N1ZXNcIilcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuIFwiZXJyb3JcIjtcblx0XHRcdH0pO1xuXHR9LFxuXG5cdG5ld0lzc3VlOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHZhciBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG5cdFx0XHRoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWVd4d2FHRkllV1J5YnpwT1VXNDVabEYyVlVwWWEybz0nfVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL0FscGhhLUh5ZHJvL2FscGhhLWh5ZHJvLWFudGFyZXMvaXNzdWVzXCIsIGRhdGEpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm4gXCJlcnJvclwiO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlscy9naXRIdWJIZWxwZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tIFwiLi9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50XCI7XG5pbXBvcnQgTW9kYWxDb21wb25lbnQgZnJvbSBcIi4vTW9kYWxDb21wb25lbnRcIjtcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25Hcm91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbEJ1dHRvbnNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5yb2xlcyA9IFsnbWFuYWdlcicsICdhZG1pbiddO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93OiBmYWxzZSxcblx0XHRcdGFjdGlvbjogJycsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRkYXRhOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG5cdH1cblxuXHRwcmVjZWRlbmNlKHJvbGUpe1xuXHRcdHJldHVybiB0aGlzLnJvbGVzLmluZGV4T2Yocm9sZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgY29udHJvbGxlciA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uY29udHJvbGxlcjtcblx0XHR2YXIgaWQgPSB0aGlzLnByb3BzLmRhdGFJdGVtLmlkO1xuXHRcdGRhdGFIZWxwZXJzLmdldERhdGFJbmZvKGNvbnRyb2xsZXIsIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhSW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRoYW5kbGVyQ2xpY2tCdXR0b24oYWN0aW9uLCB0aXRsZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3Rpb246IGFjdGlvbixcblx0XHRcdHRpdGxlOiB0aXRsZSxcblx0XHRcdHNob3c6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBic1N0eWxlID0gKHRoaXMucHJvcHMuYnNzdHlsZSk/dGhpcy5wcm9wcy5ic3N0eWxlOidsaW5rJztcblx0XHRjb25zdCBCdXR0b25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcInBlbmNpbFwiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJlZGl0XCIsXG5cdFx0XHRcdHJvbGU6IFwibWFuYWdlclwiLFxuXHRcdFx0XHR0aXRsZTpcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwidGFnc1wiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJzZW9cIixcblx0XHRcdFx0cm9sZTogXCJhZG1pblwiLFxuXHRcdFx0XHR0aXRsZTpcItCc0LXRgtCwINGC0LXQs9C4XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwiY29tbWVudFwiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJpc3N1ZVwiLFxuXHRcdFx0XHRyb2xlOiBcIm1hbmFnZXJcIixcblx0XHRcdFx0dGl0bGU6XCLQodC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LVcIlxuXHRcdFx0fVxuXHRcdF0ubWFwKChidXR0b24sIGkpID0+XG5cdFx0XHRidXR0b24uZW5hYmxlICYmIDxCdXR0b25Db21wb25lbnRcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRic1N0eWxlPXtic1N0eWxlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZXJDbGlja0J1dHRvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRhY3Rpb249e2J1dHRvbi5hY3Rpb259XG5cdFx0XHRcdGljb249e2J1dHRvbi5pY29ufVxuXHRcdFx0XHR0aXRsZT17YnV0dG9uLnRpdGxlfVxuXHRcdFx0Lz5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxCdXR0b25Hcm91cCBic0NsYXNzPXt0aGlzLnByb3BzLmJzQ2xhc3N9PlxuXHRcdFx0XHRcdHtCdXR0b25zfVxuXHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHQ8TW9kYWxDb21wb25lbnRcblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3d9XG5cdFx0XHRcdFx0aGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0dGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0YWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cblx0XHRcdFx0XHRrZXlib2FyZD17ZmFsc2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9QYW5lbEJ1dHRvbnNDb21wb25lbnQuanNcbiAqKi8iLCJ2YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgaGVscGVycyA9IHtcblx0Z2V0Q2F0ZWdvcnlJbmZvOiBmdW5jdGlvbihpZCl7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChcIi9hcGkvY2F0ZWdvcmllcy9nZXQvXCIgKyBpZCArIFwiL1wiKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdFxuXHRnZXRDYXRlZ29yeVByb2R1Y3Q6IGZ1bmN0aW9uIChpZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vcHJvZHVjdHMvY2F0ZWdvcnkvP2lkPVwiICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRDYXRlZ29yeVByb2R1Y3RQcm9wZXJ0aWVzOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FkbWluL3Byb2R1Y3RzL3Byb3BlcnR5Lz9pZD1cIiArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0cy9tb2RpZmljYXRpb25zLz9pZD1cIiArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0Q3VycmVudEdhdGVnb3J5TGlzdDogZnVuY3Rpb24oaWQpe1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYXBpL2NhdGVnb3JpZXMvbGlzdC9cIiArIGlkICsgXCIvXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRTdWJHYXRlZ29yeUxpc3Q6IGZ1bmN0aW9uKGlkKXtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9jYXRlZ29yaWVzL2xpc3QvXCIgKyBpZCArIFwiLz9jaGlsZHJlbj10cnVlXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXREYXRhSW5mbzogZnVuY3Rpb24oY29udHJvbGxlciwgaWQpIHtcblx0XHR2YXIgdXJsID0gXCIvYWRtaW4vXCIrY29udHJvbGxlcitcIi9qc29uLz9pZD1cIjtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KHVybCArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0UGFnZUluZm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIj9qc29uXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWxzL2dldERhdGFIZWxwZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XHJcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdGhhbmRsZXJDbGljayhlKXtcclxuXHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLmFjdGlvbiwgdGhpcy5wcm9wcy50aXRsZSk7XHJcblx0fVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcblx0XHRcdFx0PEJ1dHRvbiB7Li4udGhpcy5wcm9wc30gb25DbGljaz17dGhpcy5oYW5kbGVyQ2xpY2suYmluZCh0aGlzKX0+XHJcblx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPXt0aGlzLnByb3BzLmljb259IC8+XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUGFuZWxCdXR0b25zL0J1dHRvbkNvbXBvbmVudC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsRm9ybXNFZGl0IGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3Jtc0VkaXRcIjtcbmltcG9ydCBNb2RhbEZvcm1TZW8gZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1TZW9cIjtcbmltcG9ydCBNb2RhbEZvcm1zQWRkIGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3Jtc0FkZFwiO1xuaW1wb3J0IE1vZGFsRm9ybURlbGV0ZSBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybURlbGV0ZVwiO1xuaW1wb3J0IE1vZGFsRm9ybVJlY292ZXIgZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1SZWNvdmVyXCI7XG5pbXBvcnQgTW9kYWxGb3JtRGlzYWJsZWQgZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EaXNhYmxlZFwiO1xuaW1wb3J0IE1vZGFsRm9ybUVuYWJsZSBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybUVuYWJsZVwiO1xuaW1wb3J0IE1vZGFsRm9ybUlzc3VlIGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3JtSXNzdWVcIjtcblxuaW1wb3J0IGdpdEh1YkhlbHBlciBmcm9tIFwiLi4vdXRpbHMvZ2l0SHViSGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBtb2RhbEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKHRoaXMucHJvcHMuYWN0aW9uKSB7XG5cdFx0XHRcdGNhc2UgXCJlZGl0XCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1zRWRpdCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInNlb1wiOlxuXHRcdFx0XHRcdHJldHVybiA8TW9kYWxGb3JtU2VvIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiYWRkXCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1zQWRkIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGVsZXRlXCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1EZWxldGUgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWNvdmVyXCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1SZWNvdmVyIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzYWJsZWRcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybURpc2FibGVkIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZW5hYmxlZFwiOlxuXHRcdFx0XHRcdHJldHVybiA8TW9kYWxGb3JtRW5hYmxlIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiaXNzdWVcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybUlzc3VlIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OiByZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBtb2RhbEZvcm0oKTtcblxuXHR9XG59O1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsQ29tcG9uZW50LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5pbXBvcnQgRGVmYXVsdEZvcm1FZGl0IGZyb20gXCIuL0RlZmF1bHRGb3JtRWRpdFwiO1xuaW1wb3J0IFBhZ2VzRm9ybUVkaXQgZnJvbSBcIi4vLi4vUGFnZXMvUGFnZXNGb3JtRWRpdFwiO1xuaW1wb3J0IENhdGVnb3JpZXNGb3JtRWRpdCBmcm9tIFwiLi8uLi9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc0Zvcm1FZGl0XCI7XG5pbXBvcnQgUHJvZHVjdHNGb3JtRWRpdCBmcm9tIFwiLi8uLi9DYXRhbG9nL1Byb2R1Y3RzL1Byb2R1Y3RzRm9ybUVkaXRcIjtcbmltcG9ydCBNZWRpYUZvcm1FZGl0IGZyb20gXCIuLy4uL01lZGlhL01lZGlhRm9ybUVkaXRcIjtcbmltcG9ydCBNZWRpYUNhdGVnb3JpZXNGb3JtRWRpdCBmcm9tIFwiLi8uLi9NZWRpYS9NZWRpYUNhdGVnb3JpZXNGb3JtRWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1zRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0c2VsZWN0RWRpdElucHV0cygpe1xuXHRcdHN3aXRjaCAodGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xsZXIpe1xuXHRcdFx0Y2FzZSBcInBhZ2VzXCI6IHJldHVybiA8UGFnZXNGb3JtRWRpdCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdGNhc2UgXCJjYXRlZ29yaWVzXCI6IHJldHVybiA8Q2F0ZWdvcmllc0Zvcm1FZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0Y2FzZSBcInByb2R1Y3RzXCI6IHJldHVybiA8UHJvZHVjdHNGb3JtRWRpdCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdGNhc2UgXCJtZWRpYVwiOiByZXR1cm4gPE1lZGlhRm9ybUVkaXQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRjYXNlIFwibWVkaWEtY2F0ZWdvcmllc1wiOiByZXR1cm4gPE1lZGlhQ2F0ZWdvcmllc0Zvcm1FZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIDxEZWZhdWx0Rm9ybUVkaXQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwidzEwMFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3RoaXMuc2VsZWN0RWRpdElucHV0cygpfVxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY3VycmVudFVybFwiIHZhbHVlPXt3aW5kb3cubG9jYXRpb24uaHJlZn0vPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBmb3JtPVwiZm9ybU1vZGFsXCIgYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+0KHQvtGF0YDQsNC90LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3Jtc0VkaXQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0lucHV0R3JvdXBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuaW1wb3J0IFNsdWdpZnkgZnJvbSBcIi4vLi4vLi4vdXRpbHMvc2x1Z2lmeUhlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0Rm9ybUVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRpdGxlIDogKCFwcm9wcy5kYXRhLnRpdGxlKT9wcm9wcy5kYXRhLm5hbWU6cHJvcHMuZGF0YS50aXRsZSxcblx0XHRcdHBhdGg6IHByb3BzLmRhdGEucGF0aCxcblx0XHRcdGRlc2NyaXB0aW9uOiBwcm9wcy5kYXRhLmRlc2NyaXB0aW9uLFxuXHRcdFx0Y29udGVudE1hcmtkb3duOiBwcm9wcy5kYXRhLmNvbnRlbnRNYXJrZG93bixcblx0XHRcdGNvbnRlbnRIdG1sOiBwcm9wcy5kYXRhLmNvbnRlbnRIdG1sLFxuXHRcdFx0c29ydGluZzogcHJvcHMuZGF0YS5zb3J0aW5nLFxuXHRcdFx0dXBsb2FkUGF0aDogKCFwcm9wcy5kYXRhLnVwbG9hZFBhdGgpPycnOnByb3BzLmRhdGEudXBsb2FkUGF0aCxcblx0XHRcdGltYWdlOiAoIXByb3BzLmRhdGEuaW1hZ2UpXG5cdFx0XHRcdD9cIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdFx0OnByb3BzLmRhdGEuaW1hZ2Vcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZVBhdGhGcm9tVGl0bGUoKXtcblx0XHR2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBpbWdTcmMgPSB0aGlzLnN0YXRlLnVwbG9hZFBhdGggKyB0aGlzLnN0YXRlLmltYWdlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e2ltZ1NyY30vPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbdGl0bGVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPlVybDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5nZW5lcmF0ZVBhdGhGcm9tVGl0bGUuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5wYXRofVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJVcmxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgncGF0aCcpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IChtYXJrZG93bik8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuY29udGVudE1hcmtkb3dufVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2NvbnRlbnRNYXJrZG93bl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnY29udGVudE1hcmtkb3duJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiOFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsIGNsYXNzTmFtZT1cIm1yMlwiPtCh0L7RgNGC0LjRgNC+0LLQutCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdG1pbj1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc29ydGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhUGFnZVtjb250ZW50SHRtbF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnRIVE1MfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL0RlZmF1bHRGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7SW1hZ2UsIEJ1dHRvbkdyb3VwLCBCdXR0b24sIEdseXBoaWNvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNVcGxvYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aW1hZ2U6IHByb3BzLmltYWdlLFxuXHRcdFx0ZGVsZXRlOiBwcm9wcy5kZWxldGVcblx0XHR9XG5cdH1cblxuXHRmaWxlU2VsZWN0KGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgZmlsZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgoIXRoaXMucHJvcHMuaW5wdXROYW1lKT9cImZpbGVFbGVtXCI6dGhpcy5wcm9wcy5pbnB1dE5hbWUpO1xuXHRcdGZpbGVFbGVtLmNsaWNrKCk7XG5cdH1cblxuXHRoYW5kbGVGaWxlcyhlKXtcblx0XHR2YXIgX3JlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0X3JlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW1hZ2U6IF9yZWFkZXIucmVzdWx0XG5cdFx0XHR9KVxuXHRcdH07XG5cdFx0X3JlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcblxuXHR9XG5cblx0ZmlsZURlbGV0ZShlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpbWFnZTogXCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coJ9Ck0LDQudC7INGD0LTQsNC70LXQvS4uLicpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iMiBpbWFnZS1lZGl0XCI+XG5cdFx0XHRcdDxJbWFnZSBzcmM9e3RoaXMuc3RhdGUuaW1hZ2V9IHRodW1ibmFpbCAvPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwiZmlsZVwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRpZD17KCF0aGlzLnByb3BzLmlucHV0TmFtZSk/XCJmaWxlRWxlbVwiOnRoaXMucHJvcHMuaW5wdXROYW1lfVxuXHRcdFx0XHRcdG11bHRpcGxlXG5cdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvKlwiXG5cdFx0XHRcdFx0bmFtZT17KCF0aGlzLnByb3BzLmlucHV0TmFtZSk/XCJmaWxlTG9hZFwiOnRoaXMucHJvcHMuaW5wdXROYW1lfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVzLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaG93LWJ0bi1ncm91cFwiPlxuXHRcdFx0XHRcdDxCdXR0b25Hcm91cCBic1NpemU9XCJzbWFsbFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuZmlsZVNlbGVjdC5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cImRvd25sb2FkLWFsdFwiIC8+XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cImRhbmdlclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kZWxldGV9IG9uQ2xpY2s9e3RoaXMuZmlsZURlbGV0ZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInRyYXNoXCIgLz5cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMvSW1hZ2VzVXBsb2FkLmpzXG4gKiovIiwidmFyIGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxudmFyIGhlbHBlcnMgPSB7XG5cdGdldFNsdWdpZnk6IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FkbWluL2luZGV4L3NsdWdpZnkvP3NsdWdpZnk9XCIgKyBzdHJpbmcpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblx0Z2V0UHJvZHVjdFNsdWdpZnk6IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FkbWluL2luZGV4L3NsdWdpZnktcHJvZHVjdC1za3UvP3NsdWdpZnk9XCIgKyBzdHJpbmcpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWxzL3NsdWdpZnlIZWxwZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcblxuaW1wb3J0IEltYWdlc1VwbG9hZCBmcm9tIFwiLi8uLi8uLi91dGlscy9JbWFnZXNVcGxvYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXNGb3JtRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGl0bGUgOiBwcm9wcy5kYXRhLnRpdGxlLFxuXHRcdFx0cGF0aDogcHJvcHMuZGF0YS5wYXRoLFxuXHRcdFx0ZGVzY3JpcHRpb246IHByb3BzLmRhdGEuZGVzY3JpcHRpb24sXG5cdFx0XHRjb250ZW50TWFya2Rvd246IHByb3BzLmRhdGEuY29udGVudE1hcmtkb3duLFxuXHRcdFx0Y29udGVudEh0bWw6IHByb3BzLmRhdGEuY29udGVudEh0bWwsXG5cdFx0XHRzb3J0aW5nOiBwcm9wcy5kYXRhLnNvcnRpbmcsXG5cdFx0XHRpbWFnZTogKCFwcm9wcy5kYXRhLmltYWdlKVxuXHRcdFx0XHQ/XCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiXG5cdFx0XHRcdDpwcm9wcy5kYXRhLmltYWdlXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3RpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IChtYXJrZG93bik8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuY29udGVudE1hcmtkb3dufVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW2NvbnRlbnRNYXJrZG93bl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnY29udGVudE1hcmtkb3duJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiOFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsIGNsYXNzTmFtZT1cIm1yMlwiPtCh0L7RgNGC0LjRgNC+0LLQutCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdG1pbj1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc29ydGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbY29udGVudEh0bWxdXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuY29udGVudEhUTUx9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvR3JpZD5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1BhZ2VzL1BhZ2VzRm9ybUVkaXQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0lucHV0R3JvdXBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuaW1wb3J0IFNsdWdpZnkgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvc2x1Z2lmeUhlbHBlclwiO1xuaW1wb3J0IGNhdGVnb3J5SGVscGVycyBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmltcG9ydCBDYXRlZ29yeVJlcGxhY2UgZnJvbSBcIi4vQ2F0ZWdvcnlSZXBsYWNlQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXNGb3JtRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YTogcHJvcHMuZGF0YSxcblx0XHRcdHBhcmVudElkOiBwcm9wcy5kYXRhLnBhcmVudElkLFxuXHRcdFx0Y2F0ZWdvcnlJbmZvOiAnJ1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBpZCA9IHRoaXMucHJvcHMuZGF0YS5wYXJlbnRJZDtcblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q2F0ZWdvcnlJbmZvKGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlJbmZvOiBjYXRlZ29yeUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6ZGF0YX0pO1xuXHRcdH07XG5cdH1cblxuXHR0aXRsZUNoYW5nZShlKXtcblx0XHR2YXIgdGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdFx0ZGF0YVsncGF0aCddXHQ9IHBhdGg7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRnZW5lcmF0ZVBhdGhGcm9tVGl0bGUoKXtcblx0XHR2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLmRhdGEubmFtZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdFx0ZGF0YVsncGF0aCddXHQ9IHBhdGg7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzZWxlY3RDYXRlZ29yeShpZCl7XG5cdFx0Y29uc29sZS5sb2coJ1NFTEVDVEVEIENBVEVHT1JZJyxpZCk7XG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyhpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0XHRkYXRhWydicmVhZGNydW1icyddID0gKGNhdGVnb3J5SW5mby5icmVhZGNydW1icylcblx0XHRcdFx0XHQ/IGNhdGVnb3J5SW5mby5icmVhZGNydW1icyArICcgPiAnICsgY2F0ZWdvcnlJbmZvLm5hbWVcblx0XHRcdFx0XHQ6IGNhdGVnb3J5SW5mby5uYW1lO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRcdHBhcmVudElkOiBjYXRlZ29yeUluZm8uaWQsXG5cdFx0XHRcdFx0Y2F0ZWdvcnlJbmZvOiBjYXRlZ29yeUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0aW1nU3JjKCl7XG5cdFx0dmFyIHVwbG9hZFBhdGggPSAoIXRoaXMuc3RhdGUuZGF0YS51cGxvYWRQYXRoKT8nL2ZpbGVzL2ltYWdlcy9wcm9kdWN0Lyc6dGhpcy5zdGF0ZS5kYXRhLnVwbG9hZFBhdGg7XG5cdFx0dmFyIGltYWdlID0gKCF0aGlzLnN0YXRlLmRhdGEuaW1hZ2UpXG5cdFx0XHQ/XCIyMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdDp0aGlzLnN0YXRlLmRhdGEuaW1hZ2U7XG5cdFx0cmV0dXJuIHVwbG9hZFBhdGggKyBpbWFnZTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXt0aGlzLmltZ1NyYygpfS8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBtZD17OX0+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCX0LDQs9C+0LvQvtCy0L7QujwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtuYW1lXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPlVybDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5nZW5lcmF0ZVBhdGhGcm9tVGl0bGUuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVybFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtwYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3BhdGgnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KDQvtC00LjRgtC10LvRjNGB0LrQsNGPINC60LDRgtC10LPQvtGA0LjRjzwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2F0ZWdvcnlSZXBsYWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRDYXRlZ29yeT17dGhpcy5zdGF0ZS5jYXRlZ29yeUluZm99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdENhdGVnb3J5PXt0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmJyZWFkY3J1bWJzfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J7Qv9C40YHQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyh0aGlzLnN0YXRlLmRhdGEuZGVzY3JpcHRpb24pP3RoaXMuc3RhdGUuZGF0YS5kZXNjcmlwdGlvbjonJ31cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0LrQsNGC0LXQs9C+0YDQuNC4XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W2NvbnRlbnRNYXJrZG93bl1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudE1hcmtkb3dufVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnY29udGVudE1hcmtkb3duJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiOFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsIGNsYXNzTmFtZT1cIm1yMlwiPtCh0L7RgNGC0LjRgNC+0LLQutCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdG1pbj1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdzb3J0aW5nJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtwYXJlbnRJZF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLnBhcmVudElkfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBMaXN0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTGlzdEdyb3VwXCI7XG5cbmltcG9ydCBjYXRlZ29yeUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIlxuaW1wb3J0IENhdGFsb2dQYXJlbnRDYXRlZ29yeVJlcGxhY2VJdGVtTGlzdCBmcm9tIFwiLi9DYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3RcIlxuaW1wb3J0IENhdGVnb3J5UmFwbGFjZUxpc3QgZnJvbSBcIi4vQ2F0ZWdvcnlSYXBsYWNlTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeVJlcGxhY2VDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlLFxuXHRcdFx0Y3VycmVudENhdGVnb3J5OiAnJyxcblx0XHRcdHBhcmVudElkOiAnJyxcblx0XHRcdGNhdGVnb3J5TGlzdDogW10sXG5cdFx0XHRzZWxlY3RlZENhdGVnb3J5OiAnJ1xuXHRcdH07XG5cblx0XHR0aGlzLnNlbGVjdENhdGVnb3J5ID0gdGhpcy5zZWxlY3RDYXRlZ29yeS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Lypjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgcGFyZW50SWQgPSAodGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkucGFyZW50SWQpP3RoaXMucHJvcHMuY3VycmVudENhdGVnb3J5LnBhcmVudElkOicwJztcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnRDYXRlZ29yeTogdGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHR9KTtcblx0fSovXG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHZhciBpZCA9IHRoaXMucHJvcHMuY3VycmVudENhdGVnb3J5LmlkO1xuXHRcdHZhciBwYXJlbnRJZCA9IHRoaXMucHJvcHMuY3VycmVudENhdGVnb3J5LnBhcmVudElkO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldEN1cnJlbnRHYXRlZ29yeUxpc3QoaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUxpc3Qpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjYXRlZ29yeUxpc3Q6IGNhdGVnb3J5TGlzdCxcblx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWQsXG5cdFx0XHRcdFx0c2hvd01vZGFsOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHN1YkNhdGVnb3JpZXNMaXN0KGlkKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblxuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjdXJyZW50Q2F0ZWdvcnk6IGNhdGVnb3J5SW5mbyxcblx0XHRcdFx0XHRwYXJlbnRJZDogaWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldFN1YkdhdGVnb3J5TGlzdChpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5TGlzdCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNhdGVnb3J5TGlzdDogY2F0ZWdvcnlMaXN0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuXHRcdH0uYmluZCh0aGlzKSwgNTAwKTtcblx0fVxuXG5cdGN1cnJlbnRDYXRlZ29yaWVzTGlzdChpZCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG5cblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q2F0ZWdvcnlJbmZvKGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y3VycmVudENhdGVnb3J5OiBjYXRlZ29yeUluZm8sXG5cdFx0XHRcdFx0cGFyZW50SWQ6IGNhdGVnb3J5SW5mby5wYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q3VycmVudEdhdGVnb3J5TGlzdChpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5TGlzdCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNhdGVnb3J5TGlzdDogY2F0ZWdvcnlMaXN0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuXHRcdH0uYmluZCh0aGlzKSwgNTAwKTtcblx0fVxuXG5cdHJldHVyblBhcmVudENhdGVnb3J5KCl7XG5cdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcmllc0xpc3QodGhpcy5zdGF0ZS5wYXJlbnRJZCk7XG5cdH1cblxuXHRzZWxlY3RDYXRlZ29yeShpZCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRDYXRlZ29yeTogaWR9KTtcblx0fVxuXG5cdHNlbGVjdFJvb3RDYXRlZ29yeShlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhdGVnb3J5OiBlLnRhcmdldC5pZH0pO1xuXHR9XG5cblx0aGFuZGxlclNhdmUoKXtcblx0XHR0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnkgJiYgdGhpcy5wcm9wcy5zZWxlY3RDYXRlZ29yeSh0aGlzLnN0YXRlLnNlbGVjdGVkQ2F0ZWdvcnkpO1xuXHRcdHRoaXMuY2xvc2UoKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGNhdGVnb3J5TGlzdCA9IHRoaXMuc3RhdGUuY2F0ZWdvcnlMaXN0O1xuXHRcdGNvbnN0IGNhdGVnb3J5TGlzdENvbXBvbmVudCA9IGNhdGVnb3J5TGlzdC5tYXAoKGNhdGVnb3J5LGkpID0+XG5cdFx0XHQ8Q2F0ZWdvcnlSYXBsYWNlTGlzdFxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGNhdGVnb3J5PXtjYXRlZ29yeX1cblx0XHRcdFx0ZXZlbnRDbGljaz17dGhpcy5zdWJDYXRlZ29yaWVzTGlzdC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRoYW5kbGVyU2VsZWN0PXt0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcyl9XG5cdFx0XHRcdGN1cnJlbnRJZD17dGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkuaWR9XG5cdFx0XHQvPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QnV0dG9uICBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub3Blbi5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwicmVmcmVzaFwiIC8+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cblx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZT7QktGL0LHQvtGAINC60LDRgtC10LPQvtGA0LjQuDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHQ8TGlzdEdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5QYXJlbnRDYXRlZ29yeSA9IHt0aGlzLnJldHVyblBhcmVudENhdGVnb3J5LmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RSb290Q2F0ZWdvcnkgPSB7dGhpcy5zZWxlY3RSb290Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHBhcmVudElkID0ge3RoaXMuc3RhdGUucGFyZW50SWR9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdHtjYXRlZ29yeUxpc3RDb21wb25lbnR9XG5cdFx0XHRcdFx0XHQ8L0xpc3RHcm91cD5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVyU2F2ZS5iaW5kKHRoaXMpfSBic1N0eWxlPVwicHJpbWFyeVwiPtCS0YvQsdGA0LDRgtGMPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmVwbGFjZUNvbXBvbmVudC5qc1xuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBHbHlwaGljb24gPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvbicpO1xudmFyIExpc3RHcm91cEl0ZW0gPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0nKTtcbnZhciBSb3cgPSByZXF1aXJlKCdyZWFjdC1ib290c3RyYXAvbGliL1JvdycpO1xudmFyIENvbCA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sJyk7XG5cbmZ1bmN0aW9uIENhdGFsb2dQYXJlbnRDYXRlZ29yeVJlcGxhY2VJdGVtTGlzdChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5wYXJlbnRJZCAhPSAwXG4gICAgICAgID8gICA8TGlzdEdyb3VwSXRlbSBvbkNsaWNrPXtwcm9wcy5yZXR1cm5QYXJlbnRDYXRlZ29yeX0+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9PjxHbHlwaGljb24gZ2x5cGg9XCJsZXZlbC11cFwiLz48L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMX0+Li4uPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cblxuICAgICAgICA6ICAgPExpc3RHcm91cEl0ZW0gPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0YWxvZ0NhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZWxlY3RSb290Q2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTF9PlxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QtdGCINC60LDRgtC10LPQvtGA0LjQuCAo0JIg0LrQvtGA0L3QtSDQutCw0YLQsNC70L7Qs9CwKVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvTGlzdEdyb3VwSXRlbT5cbn1cblxuQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0LnByb3BUeXBlcyA9IHtcblx0XHRwYXJlbnRJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJldHVyblBhcmVudENhdGVnb3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdFJvb3RDYXRlZ29yeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3Q7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGlzdEdyb3VwSXRlbSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9MaXN0R3JvdXBJdGVtXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xcIjtcbmltcG9ydCBCYWRnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CYWRnZVwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGFuZGxlckNsaWNrKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLmV2ZW50Q2xpY2sodGhpcy5wcm9wcy5jYXRlZ29yeS5pZCk7XG5cdH1cblxuXHRzZWxlY3RlZENhdGVnb3J5KGUpe1xuXHRcdHRoaXMucHJvcHMuaGFuZGxlclNlbGVjdChlLnRhcmdldC5pZCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBjYXRlZ29yeSA9IHRoaXMucHJvcHMuY2F0ZWdvcnk7XG5cdFx0Y29uc3QgbGFiZWxJbnN0YW5jZSA9IChjYXRlZ29yeS5jb3VudFN1YkNhdGVnb3JpZXMgIT0gMClcblx0XHRcdD8gPGEgaHJlZj1cIlwiXG5cdFx0XHRcdFx0IGNsYXNzTmFtZT17KGNhdGVnb3J5LmFjdGl2ZSAhPSAwKT9cIlwiOlwidGV4dC1tdXRlZFwifVxuXHRcdFx0XHRcdCBvbkNsaWNrPXt0aGlzLmhhbmRsZXJDbGljay5iaW5kKHRoaXMpfT57Y2F0ZWdvcnkubmFtZX08L2E+XG5cdFx0XHQ6IDxzcGFuXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsoY2F0ZWdvcnkuYWN0aXZlICE9IDApP1wiXCI6XCJ0ZXh0LW11dGVkXCJ9PlxuXHRcdFx0XHRcdHtjYXRlZ29yeS5uYW1lfTwvc3Bhbj47XG5cblx0XHRjb25zdCByYWRpb0luc3RhbmNlID0gKGNhdGVnb3J5LmlkICE9IHRoaXMucHJvcHMuY3VycmVudElkKVxuXHRcdFx0PyA8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxuXHRcdFx0XHRcdG5hbWU9XCJjYXRhbG9nQ2F0ZWdvcnlcIlxuXHRcdFx0XHRcdGRlZmF1bHRDaGVja2VkPVwiXCJcblx0XHRcdFx0XHRpZD17Y2F0ZWdvcnkuaWR9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5zZWxlY3RlZENhdGVnb3J5LmJpbmQodGhpcyl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ6IDxHbHlwaGljb24gZ2x5cGg9XCJva1wiIC8+O1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8TGlzdEdyb3VwSXRlbSAgPlxuXHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHQ8Q29sIHhzPXsxfT5cblx0XHRcdFx0XHRcdFx0e3JhZGlvSW5zdGFuY2V9XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezEwfT5cblx0XHRcdFx0XHRcdFx0e2xhYmVsSW5zdGFuY2V9XG5cdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezF9PlxuXHRcdFx0XHRcdFx0XHQ8QmFkZ2Vcblx0XHRcdFx0XHRcdFx0XHRwdWxsUmlnaHQ9e3RydWV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsoY2F0ZWdvcnkuY291bnRTdWJDYXRlZ29yaWVzICE9IDApP1wiXCI6XCJoaWRkZW5cIn0+XG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5LmNvdW50U3ViQ2F0ZWdvcmllc31cblx0XHRcdFx0XHRcdFx0PC9CYWRnZT5cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHQ8L0xpc3RHcm91cEl0ZW0+XG5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yeVJhcGxhY2VMaXN0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgR3JpZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HcmlkXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEdyb3VwXCI7XG5pbXBvcnQgSGVscEJsb2NrIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0hlbHBCbG9ja1wiO1xuXG5pbXBvcnQgY2F0ZWdvcnlIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgQ2F0ZWdvcnlSZXBsYWNlIGZyb20gXCIuLy4uL0NhdGVnb3JpZXMvQ2F0ZWdvcnlSZXBsYWNlQ29tcG9uZW50XCI7XG5pbXBvcnQgUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvbiBmcm9tIFwiLi4vUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvblwiO1xuaW1wb3J0IFByb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uIGZyb20gXCIuLi9Qcm9kdWN0TW9kaWZpY2F0b25zL1Byb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvbiBmcm9tIFwiLi4vUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RzRm9ybUVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRhdGE6IHByb3BzLmRhdGEsXG5cdFx0XHRjYXRlZ29yeUluZm86ICcnLFxuXHRcdFx0Y2F0ZWdvcnlJZDogcHJvcHMuZGF0YS5jYXRlZ29yeUlkLFxuXHRcdFx0YnJlYWRjcnVtYnM6IHByb3BzLmRhdGEuYnJlYWRjcnVtYnMsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRlcnJvckhlbHA6ICdFcnJvci4nXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dmFyIGlkID0gdGhpcy5wcm9wcy5kYXRhLmlkO1xuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeVByb2R1Y3QoaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjYXRlZ29yeUluZm86IGNhdGVnb3J5SW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvbkNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtkYXRhOnRoaXMuc3RhdGUuZGF0YX0pO1xuXHRcdH07XG5cdH1cblxuXHRza3VPbkNoYW5nZShlKXtcblx0XHR2YXIgaW5wdXQgPSBlLnRhcmdldDtcblx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRkYXRhWydza3UnXSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGF0YTogZGF0YVxuXHRcdH0sKCkgPT4ge3RoaXMudmFsaWRhdGVJbnB1dChpbnB1dCl9KTtcblx0fVxuXG5cdHZhbGlkYXRlSW5wdXQoaW5wdXQpe1xuXHRcdFNsdWdpZnkuZ2V0UHJvZHVjdFNsdWdpZnkoaW5wdXQudmFsdWUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdGlmKCFyZXN1bHQuZXJyb3Ipe1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVsncGF0aCddID0gcmVzdWx0LnBhdGg7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRkYXRhOiB0aGlzLnN0YXRlLmRhdGEsXG5cdFx0XHRcdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRcdFx0XHRlcnJvckhlbHA6ICdFcnJvci4nXG5cdFx0XHRcdFx0fSwgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNle1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZXJyb3I6IHRydWUsXG5cdFx0XHRcdFx0XHRlcnJvckhlbHA6IHJlc3VsdC5lcnJvclxuXHRcdFx0XHRcdH0sIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KHJlc3VsdC5lcnJvciArICcg0J3QsNC00L4g0LjRgdC/0YDQsNCy0LjRgtGMIScpKTtcblx0XHRcdFx0fVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHNlbGVjdENhdGVnb3J5KGlkKXtcblx0XHRjb25zb2xlLmxvZygnU0VMRUNURUQgQ0FURUdPUlknLGlkKTtcblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q2F0ZWdvcnlJbmZvKGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlJbmZvOiBjYXRlZ29yeUluZm8sXG5cdFx0XHRcdFx0YnJlYWRjcnVtYnM6IGNhdGVnb3J5SW5mby5icmVhZGNydW1icyArICcgPiAnICsgY2F0ZWdvcnlJbmZvLm5hbWUsXG5cdFx0XHRcdFx0Y2F0ZWdvcnlJZDogY2F0ZWdvcnlJbmZvLmlkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGltZ1NyYygpe1xuXHRcdHZhciB1cGxvYWRQYXRoID0gKCF0aGlzLnN0YXRlLmRhdGEudXBsb2FkUGF0aCk/Jy9maWxlcy9pbWFnZXMvcHJvZHVjdC8nOnRoaXMuc3RhdGUuZGF0YS51cGxvYWRQYXRoO1xuXHRcdHZhciBpbWFnZSA9ICghdGhpcy5zdGF0ZS5kYXRhLmltYWdlKVxuXHRcdFx0P1wiMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiXG5cdFx0XHQ6dGhpcy5zdGF0ZS5kYXRhLmltYWdlO1xuXHRcdHJldHVybiB1cGxvYWRQYXRoICsgaW1hZ2U7XG5cdH1cblxuXHRpbWdEcmFmdCgpe1xuXHRcdHZhciB1cGxvYWRQYXRoID0gKCF0aGlzLnN0YXRlLmRhdGEudXBsb2FkUGF0aERyYWZ0KT8nL2ZpbGVzL2ltYWdlcy9wcm9kdWN0Lyc6dGhpcy5zdGF0ZS5kYXRhLnVwbG9hZFBhdGhEcmFmdDtcblx0XHR2YXIgZHJhZnQgPSAoIXRoaXMuc3RhdGUuZGF0YS5kcmFmdClcblx0XHRcdD9cIjIwMTItMDUtMjJfZm90b19udi5qcGdcIlxuXHRcdFx0OnRoaXMuc3RhdGUuZGF0YS5kcmFmdDtcblx0XHRyZXR1cm4gdXBsb2FkUGF0aCArIGRyYWZ0O1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuaW1nU3JjKCl9IGlucHV0TmFtZT1cImZpbGVMb2FkSW1hZ2VcIi8+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXt0aGlzLmltZ0RyYWZ0KCl9IGlucHV0TmFtZT1cImZpbGVMb2FkRHJhZnRcIi8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBtZD17OX0+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT17KCF0aGlzLnN0YXRlLmVycm9yKT8nJzonaGFzLWVycm9yJ30+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JrQvtC0INGC0L7QstCw0YDQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmtC+0LQg0YLQvtCy0LDRgNCwXCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInNrdVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbc2t1XVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5za3V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuc2t1T25DaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8SGVscEJsb2NrPnt0aGlzLnN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3JIZWxwfTwvSGVscEJsb2NrPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbbmFtZV1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnbmFtZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtCw0YLQtdCz0L7RgNC40Y88L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENhdGVnb3J5UmVwbGFjZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50Q2F0ZWdvcnk9e3RoaXMuc3RhdGUuY2F0ZWdvcnlJbmZvfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RDYXRlZ29yeT17dGhpcy5zZWxlY3RDYXRlZ29yeS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYnJlYWRjcnVtYnN9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QntC/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsodGhpcy5zdGF0ZS5kYXRhLmRlc2NyaXB0aW9uKT90aGlzLnN0YXRlLmRhdGEuZGVzY3JpcHRpb246Jyd9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCf0YDQuNC80LXRh9Cw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsodGhpcy5zdGF0ZS5kYXRhLm5vdGUpP3RoaXMuc3RhdGUuZGF0YS5ub3RlOicnfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J/RgNC40LzQtdGH0LDQvdC40LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW25vdGVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnbm90ZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjJcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cblx0XHRcdFx0XHRcdDxSb3c+XG5cdFx0XHRcdFx0XHRcdDxDb2wgbWQ9ezN9ID5cblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDb2wgY29tcG9uZW50Q2xhc3M9e0NvbnRyb2xMYWJlbH0gbWQ9ezZ9IGNsYXNzTmFtZT1cInBsMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdNCh0L7RgNGC0LjRgNC+0LLQutCwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29sIG1kPXs2fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNvcnRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9e3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwi0KHRgtCy0L7QudGB0YLQstCwINGC0L7QstCw0YDQsFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9e3RoaXMucHJvcHMuZGF0YS5yb2xlfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdE1vZGlmaWNhdGlvbkVkaXRCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlkPXt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cItCc0L7QtNC40YTQuNC60LDRhtC40Lgg0YLQvtCy0LDRgNCwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGJzU3R5bGU9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cm9sZT17dGhpcy5wcm9wcy5kYXRhLnJvbGV9XG5cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlkPXt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cItCh0LLQvtC50YHRgtCy0LAg0LzQvtC00LjRhNC40LrQsNGG0LjQuVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9e3RoaXMucHJvcHMuZGF0YS5yb2xlfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGF0aH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImNhdGVnb3J5SWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLmNhdGVnb3J5SWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvR3JpZD5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdHNGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5cbmltcG9ydCBkYXRhSGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiO1xuaW1wb3J0IHByb2R1Y3RQcm9wZXJ0eUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Byb2R1Y3RQcm9wZXJ0eUhlbHBlclwiO1xuaW1wb3J0IFByb2R1Y3RQcm9wZXJ0aWVzIGZyb20gXCIuL1Byb2R1Y3RQcm9wZXJ0aWVzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0UHJvcGVydHlFZGl0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlLFxuXHRcdFx0cHJvcGVydGllczogW10sXG5cdFx0XHRkZWxldGVkOiBbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdGRhdGFIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdFByb3BlcnRpZXModGhpcy5wcm9wcy5pZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwcm9wZXJ0aWVzOnJlc3BvbnNlfSlcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShkYXRhLCBpbmRleCl7XG5cdFx0dmFyIHByb3BlcnRpZXMgPSB0aGlzLnN0YXRlLnByb3BlcnRpZXM7XG5cdFx0cHJvcGVydGllc1tpbmRleF0gPSBkYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Byb3BlcnRpZXM6IHByb3BlcnRpZXN9KTtcblx0fVxuXG5cdGhhbmRsZURlbGV0ZShpbmRleCl7XG5cdFx0Y29uc29sZS5sb2coJ0RFTEVURSBQUk9QRVJUWTogJywgdGhpcy5zdGF0ZS5wcm9wZXJ0aWVzW2luZGV4XSk7XG5cdFx0dmFyIGRlbGV0ZWQgPSAodGhpcy5zdGF0ZS5wcm9wZXJ0aWVzW2luZGV4XS5pZCAhPSAnbmV3Jylcblx0XHRcdD9cdHRoaXMuc3RhdGUuZGVsZXRlZC5jb25jYXQodGhpcy5zdGF0ZS5wcm9wZXJ0aWVzW2luZGV4XSlcblx0XHRcdDogdGhpcy5zdGF0ZS5kZWxldGVkO1xuXHRcdHZhciBwcm9wZXJ0aWVzID0gdGhpcy5zdGF0ZS5wcm9wZXJ0aWVzO1xuXHRcdHByb3BlcnRpZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG5cdFx0XHRkZWxldGVkOiBkZWxldGVkXG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVBZGQoZGF0YSl7XG5cdFx0Y29uc29sZS5sb2coJ05FVyBQUk9QRVJUWTogJywgZGF0YSk7XG5cdFx0dmFyIHByb3BlcnRpZXMgPSB0aGlzLnN0YXRlLnByb3BlcnRpZXMuY29uY2F0KGRhdGEpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Byb3BlcnRpZXM6IHByb3BlcnRpZXN9KTtcblx0fVxuXG5cdG9uU2F2ZShlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRwcm9wZXJ0aWVzOiB0aGlzLnN0YXRlLnByb3BlcnRpZXMsXG5cdFx0XHRkZWxldGVkOiB0aGlzLnN0YXRlLmRlbGV0ZWRcblx0XHR9O1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogZmFsc2V9KTtcblx0XHRjb25zb2xlLmxvZygnU0VORCBEQVRBOiAnLCBkYXRhKTtcblxuXHRcdHByb2R1Y3RQcm9wZXJ0eUhlbHBlcnMuZWRpdFByb3BlcnR5KGRhdGEpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NBVkUgREFUQTogJyxyZXNwb25zZSk7XG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25DYW5jZWwoKXtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeVByb2R1Y3RQcm9wZXJ0aWVzKHRoaXMucHJvcHMuaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cHJvcGVydGllczpyZXNwb25zZSxcblx0XHRcdFx0XHRkZWxldGVkOiBbXSxcblx0XHRcdFx0XHRzaG93TW9kYWw6IGZhbHNlXG5cdFx0XHRcdH0pXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbi5iaW5kKHRoaXMpfSA+XG5cdFx0XHRcdFx0eyghdGhpcy5wcm9wcy50aXRsZSk/PEdseXBoaWNvbiBnbHlwaD1cInBlbmNpbFwiIC8+OnRoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJtb2RhbC1sZ1wiXG5cdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG5cdFx0XHRcdFx0b25IaWRlPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+0KHQstC+0LnRgdGC0LLQsCDQv9GA0L7QtNGD0LrRgtCwPC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblxuXHRcdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0PFByb2R1Y3RQcm9wZXJ0aWVzXG5cdFx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzPXt0aGlzLnN0YXRlLnByb3BlcnRpZXN9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVBZGQ9e3RoaXMuaGFuZGxlQWRkLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DYW5jZWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgb25DbGljaz17dGhpcy5vblNhdmUuYmluZCh0aGlzKX0+0KHQvtGF0YDQsNC90LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b24uanNcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxudmFyIGhlbHBlcnMgPSB7XG5cdGVkaXRQcm9wZXJ0eTogZnVuY3Rpb24gKHNlbmREYXRhKSB7XG5cdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHR1cmw6ICcvYWRtaW4vcHJvZHVjdHMvcHJvcGVydHktZWRpdCcsXG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRkYXRhOiBzZW5kRGF0YSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjpmdW5jdGlvbih4aHIsIHN0YXR1cyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvcicsIHN0YXR1cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiAoaWQpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FkbWluL3Byb2R1Y3RzL3Byb3BlcnR5LWRlbC8/aWQ9XCIgKyBpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMvcHJvZHVjdFByb3BlcnR5SGVscGVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1RhYmxlXCI7XG5cbmltcG9ydCBQcm9kdWN0UHJvcGVydHlDb21wb25lbnQgZnJvbSBcIi4vUHJvZHVjdFByb3BlcnR5Q29tcG9uZW50XCI7XG5pbXBvcnQgTmV3UHJvZHVjdFByb3BlcnR5IGZyb20gXCIuL05ld1Byb2R1Y3RQcm9wZXJ0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyAgUHJvZHVjdFByb3BlcnRpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRwcm9wZXJ0aWVzTGlzdCgpe1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLnByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eSwgaSkge1xuXHRcdFx0cmV0dXJuIDxQcm9kdWN0UHJvcGVydHlDb21wb25lbnRcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRpbmRleD17aX1cblx0XHRcdFx0cHJvcGVydHk9e3Byb3BlcnR5fVxuXHRcdFx0XHR7Li4uc2VsZi5wcm9wc31cblx0XHRcdC8+XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8VGFibGUgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+4oSW4oSWL9C/0L88L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPtCX0L3QsNGH0LXQvdC40LU8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+0JTQtdC50YHRgtCy0LjRjzwvdGg+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcGVydGllc0xpc3QoKX1cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdDx0Zm9vdD5cblx0XHRcdFx0XHRcdDxOZXdQcm9kdWN0UHJvcGVydHlcdHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0XHRcdDwvdGZvb3Q+XG5cdFx0XHRcdDwvVGFibGU+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnRpZXMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RQcm9wZXJ0eUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd01vZGFsOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuXHR9XG5cblx0b25DaGFuZ2Uoa2V5KXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMucHJvcGVydGllc1t0aGlzLnByb3BzLmluZGV4XVxuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZGF0YSwgdGhpcy5wcm9wcy5pbmRleCk7XG5cdFx0fTtcblx0fVxuXG5cdG9uRGVsZXRlKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5oYW5kbGVEZWxldGUodGhpcy5wcm9wcy5pbmRleClcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJjb2wtbWQtMVwiPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5wcm9wZXJ0eS5vcmRlcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ29yZGVyJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMucHJvcGVydHkubmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5wcm9wZXJ0eS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ3ZhbHVlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9wZW4uYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMucm9sZSAhPSAnYWRtaW4nfT5cblx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJ0cmFzaFwiLz5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHRcdDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0gb25IaWRlPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCj0LTQsNC70LjRgtGMINGB0LLQvtC50YHRgtCy0L48L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINGB0LLQvtC50YHRgtCy0L48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGVhZFwiPlwie3RoaXMucHJvcHMucHJvcGVydHkubmFtZX1cIjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpfSBic1N0eWxlPVwiZGFuZ2VyXCI+0KPQtNCw0LvQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdClcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0eUNvbXBvbmVudC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3UHJvZHVjdFByb3BlcnR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpZDogJ25ldycsXG5cdFx0XHRwcm9kdWN0SWQ6IHByb3BzLmlkLFxuXHRcdFx0b3JkZXI6ICcnLFxuXHRcdFx0bmFtZTogJycsXG5cdFx0XHR2YWx1ZTogJydcblx0XHR9O1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0YWRkTmV3UHJvcGVydHkoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZTtcblx0XHRpZihkYXRhLm9yZGVyICYmIGRhdGEubmFtZSAmJiBkYXRhLnZhbHVlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRvcmRlcjogJycsXG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH0sICgpID0+IHt0aGlzLnByb3BzLmhhbmRsZUFkZChkYXRhKX0pO1xuXHRcdH1cblx0fVxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwiY29sLXNtLTFcIj5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUub3JkZXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnb3JkZXInKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd2YWx1ZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuYWRkTmV3UHJvcGVydHkuYmluZCh0aGlzKX0+0JTQvtCx0LDQstC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvTmV3UHJvZHVjdFByb3BlcnR5LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuaW1wb3J0IFByb2R1Y3RNb2RpZmljYXRpb25zIGZyb20gXCIuL1Byb2R1Y3RNb2RpZmljYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kaWZpY2F0aW9uVGFibGU6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0b3Blbk1vZGlmaWNhdGlvblRhYmxlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RpZmljYXRpb25UYWJsZTogdHJ1ZSB9KTtcblx0fVxuXG5cdGNsb3NlTW9kaWZpY2F0aW9uVGFibGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RpZmljYXRpb25UYWJsZTogZmFsc2UgfSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5Nb2RpZmljYXRpb25UYWJsZS5iaW5kKHRoaXMpfVx0PlxuXHRcdFx0XHRcdHsoIXRoaXMucHJvcHMudGl0bGUpPzxHbHlwaGljb24gZ2x5cGg9XCJwZW5jaWxcIiAvPjp0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDxQcm9kdWN0TW9kaWZpY2F0aW9uc1xuXHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2hvd01vZGlmaWNhdGlvblRhYmxlfVxuXHRcdFx0XHRcdFx0aGlkZU1vZGFsPXt0aGlzLmNsb3NlTW9kaWZpY2F0aW9uVGFibGUuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHQpXG5cdH07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvbkVkaXRCdXR0b24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcblxuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5pbXBvcnQgbW9kaWZpY2F0aW9uSGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcHJvZHVjdE1vZGlmaWNhdGlvbkhlbHBlclwiO1xuXG5pbXBvcnQgUHJvZHVjdE1vZGlmaWNhdGlvbnNUYWJsZSBmcm9tIFwiLi9Nb2RpZmljYXRpb25zVGFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdE1vZGlmaWNhdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGNvbHVtbnM6IFtdLFxuXHRcdFx0cm93czpbXSxcblx0XHRcdGRlbGV0ZWQ6IFtdXG5cdFx0fTtcblx0fVxuXHRcblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uKHRoaXMucHJvcHMuaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y29sdW1uczogcmVzcG9uc2UuY29sdW1ucyxcblx0XHRcdFx0XHRyb3dzOiByZXNwb25zZS5yb3dzXG5cdFx0XHRcdH0pXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShkYXRhLCBpbmRleCl7XG5cdFx0dmFyIHJvd3MgPSB0aGlzLnN0YXRlLnJvd3M7XG5cdFx0cm93c1tpbmRleF0gPSBkYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Jvd3M6IHJvd3N9KTtcblx0fVxuXG5cdGhhbmRsZURlbGV0ZShpbmRleCl7XG5cdFx0Y29uc29sZS5sb2coJ2hhbmRsZURlbGV0ZTogJywgdGhpcy5zdGF0ZS5yb3dzW2luZGV4XSk7XG5cdFx0dmFyIGRlbGV0ZWQgPSAodGhpcy5zdGF0ZS5yb3dzW2luZGV4XS5pdGVtLmlkICE9ICduZXcnKVxuXHRcdFx0PyB0aGlzLnN0YXRlLmRlbGV0ZWQuY29uY2F0KHRoaXMuc3RhdGUucm93c1tpbmRleF0pXG5cdFx0XHQ6IHRoaXMuc3RhdGUuZGVsZXRlZDtcblx0XHR2YXIgcm93cyA9IHRoaXMuc3RhdGUucm93cztcblx0XHRyb3dzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRyb3dzOiByb3dzLFxuXHRcdFx0ZGVsZXRlZDogZGVsZXRlZFxuXHRcdH0pXG5cdH1cblxuXHRoYW5kbGVBZGQoZGF0YSl7XG5cdFx0Y29uc29sZS5sb2coJ05FVyBNT0RJRklDQVRJT04nLCBkYXRhKTtcblx0XHR2YXIgcm93cyA9IHRoaXMuc3RhdGUucm93cztcblx0XHRyb3dzID0gdGhpcy5zdGF0ZS5yb3dzLmNvbmNhdChkYXRhKTtcblx0XHR0aGlzLnNldFN0YXRlKHtyb3dzOiByb3dzfSk7XG5cdH1cblxuXHRvbkNhbmNlbCgpe1xuXHRcdGRhdGFIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdE1vZGlmaWNhdGlvbih0aGlzLnByb3BzLmlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNvbHVtbnM6IHJlc3BvbnNlLmNvbHVtbnMsXG5cdFx0XHRcdFx0cm93czogcmVzcG9uc2Uucm93cyxcblx0XHRcdFx0XHRkZWxldGVkOiBbXVxuXHRcdFx0XHR9LCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25TYXZlKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXHRcdGNvbnNvbGUubG9nKCdTRU5EIERBVEE6ICcsIHRoaXMuc3RhdGUpO1xuXHRcdG1vZGlmaWNhdGlvbkhlbHBlcnMuZWRpdE1vZGlmaWNhdGlvbih0aGlzLnN0YXRlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTQVZFIERBVEE6ICcscmVzcG9uc2UpO1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJ3MTAwXCJcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfVxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZT7QnNC+0LTQuNGE0LjQutCw0YbQuNC4INC4INGA0LDQt9C80LXRgNGLPC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PFByb2R1Y3RNb2RpZmljYXRpb25zVGFibGVcblx0XHRcdFx0XHRcdGlkPXt0aGlzLnByb3BzLmlkfVxuXHRcdFx0XHRcdFx0Y29sdW1ucz17dGhpcy5zdGF0ZS5jb2x1bW5zfVxuXHRcdFx0XHRcdFx0cm93cz17dGhpcy5zdGF0ZS5yb3dzfVxuXHRcdFx0XHRcdFx0aGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0aGFuZGxlQWRkPXt0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0cm9sZT17dGhpcy5wcm9wcy5yb2xlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgb25DbGljaz17dGhpcy5vblNhdmUuYmluZCh0aGlzKX0+0KHQvtGF0YDQsNC90LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9ucy5qc1xuICoqLyIsInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG52YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgaGVscGVycyA9IHtcblx0ZWRpdE1vZGlmaWNhdGlvbjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdHVybDogJy9hZG1pbi9wcm9kdWN0cy9tb2RpZmljYXRpb24tZWRpdCcsXG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdG1vZGlmaWNhdGlvblRhYmxlRGF0YTogZGF0YVxuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjpmdW5jdGlvbih4aHIsIHN0YXR1cyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvcicsIHN0YXR1cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdGVkaXRNb2RpZmljYXRpb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdHVybDogJy9hZG1pbi9wcm9kdWN0cy9tb2RpZmljYXRpb24tcHJvcGVydHktZWRpdCcsXG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdG1vZGlmaWNhdGlvblByb3BlcnR5RGF0YTogZGF0YVxuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjpmdW5jdGlvbih4aHIsIHN0YXR1cyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvcicsIHN0YXR1cyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblx0ZGVsZXRlTW9kaWZpY2F0aW9uOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FkbWluL3Byb2R1Y3RzL21vZGlmaWNhdGlvbi1kZWwvP2lkPVwiICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWxzL3Byb2R1Y3RNb2RpZmljYXRpb25IZWxwZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvVGFibGVcIjtcbmltcG9ydCBtb2RpZmljYXRpb25IZWxwZXJzIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL3Byb2R1Y3RNb2RpZmljYXRpb25IZWxwZXJcIlxuXG5pbXBvcnQgTW9kaWZpY2F0aW9uSGVhZFRhYmxlIGZyb20gXCIuL01vZGlmaWNhdGlvbkhlYWRUYWJsZVwiO1xuaW1wb3J0IE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvdyBmcm9tIFwiLi9Nb2RpZmljYXRpb25Cb2R5VGFibGVSb3dcIjtcbmltcG9ydCBNb2RpZmljYXRpb25UYWJsZU5ld0l0ZW0gZnJvbSBcIi4vTW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvbnNUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGJvZHlUYWJsZSgpe1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLnJvd3MubWFwKGZ1bmN0aW9uIChyb3csIGkpIHtcblx0XHRcdHJldHVybiA8TW9kaWZpY2F0aW9uQm9keVRhYmxlUm93XG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0cm93PXtyb3d9XG5cdFx0XHRcdGluZGV4PXtpfVxuXHRcdFx0XHR7Li4uc2VsZi5wcm9wc31cblx0XHRcdC8+XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdDxNb2RpZmljYXRpb25IZWFkVGFibGVcdGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc30gLz5cblx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdHt0aGlzLmJvZHlUYWJsZSgpfVxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8dGZvb3Q+XG5cdFx0XHRcdFx0PE1vZGlmaWNhdGlvblRhYmxlTmV3SXRlbSB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHQ8L3Rmb290PlxuXHRcdFx0PC9UYWJsZT5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbnNUYWJsZS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RpZmljYXRpb25UYWJsZUNvbHVtbiBmcm9tIFwiLi9Nb2RpZmljYXRpb25UYWJsZUNvbHVtblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25IZWFkVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0cj5cblx0XHRcdFx0PHRoPuKEluKEli/Qv9C/PC90aD5cblx0XHRcdFx0PHRoPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtTwvdGg+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGlmaWNhdGlvblRhYmxlQ29sdW1uXG5cdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRjb2x1bW49e2NvbHVtbn0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHRcdDx0aD7QlNC10LnRgdGC0LLQuNC1PC90aD5cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uSGVhZFRhYmxlLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25UYWJsZUNvbHVtbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRoPnt0aGlzLnByb3BzLmNvbHVtbi5uYW1lfTwvdGg+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVDb2x1bW4uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBNb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZCBmcm9tIFwiLi9Nb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25Cb2R5VGFibGVSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZUl0ZW0oa2V5KXtcblx0XHR2YXIgZGF0YSA9IHRoaXMucHJvcHMucm93c1t0aGlzLnByb3BzLmluZGV4XTtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdGRhdGEuaXRlbVtrZXldID0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnByb3BzLmhhbmRsZUNoYW5nZShkYXRhLCB0aGlzLnByb3BzLmluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2VWYWx1ZShpbmRleCl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLnJvd3NbdGhpcy5wcm9wcy5pbmRleF07XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHRkYXRhLnZhbHVlc1tpbmRleF0udmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKGRhdGEsIHRoaXMucHJvcHMuaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdG9uRGVsZXRlKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5oYW5kbGVEZWxldGUodGhpcy5wcm9wcy5pbmRleClcblx0XHR9KTtcblx0fVxuXG5cdGl0ZW1Qcm9wZXJ0eSgpe1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgcHJvcGVydGllcyA9IHRoaXMucHJvcHMucm93LnZhbHVlcztcblx0XHRyZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKHByb3BlcnR5LCBpKVx0e1xuXHRcdFx0cmV0dXJuIDxNb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZFxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdHZhbHVlPXtwcm9wZXJ0eS52YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e3NlbGYuaGFuZGxlQ2hhbmdlVmFsdWUoaSkuYmluZCh0aGlzKX1cblx0XHRcdC8+XG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDxNb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUl0ZW0oJ29yZGVyJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5yb3cuaXRlbS5vcmRlcn1cblx0XHRcdFx0XHRjbGFzc1RkPVwiY29sLXNtLTFcIi8+XG5cdFx0XHRcdDxNb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUl0ZW0oJ3NrdScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMucm93Lml0ZW0uc2t1fS8+XG5cblx0XHRcdFx0e3RoaXMuaXRlbVByb3BlcnR5KCl9XG5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGJzU2l6ZT1cInNtYWxsXCJcblx0XHRcdFx0XHRcdGJzU3R5bGU9XCJkYW5nZXJcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vcGVuLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5yb2xlICE9ICdhZG1pbid9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInRyYXNoXCIvPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG5cdFx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+0KPQtNCw0LvQtdC90LjQtSDRgtC+0LLQsNGA0L3QvtC5INC80L7QtNC40YTQuNC60LDRhtC40Lg8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cblx0XHRcdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHA+0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0YLQvtCy0LDRgNC90YPRjiDQvNC+0LTQuNGE0LjQutCw0YbQuNGOPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxlYWRcIj57dGhpcy5wcm9wcy5yb3cuaXRlbS5za3V9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwPtGB0L4g0LLRgdC10LzQuCDQt9C90LDRh9C10L3QuNGP0LzQuCDRgdCy0L7QudGB0YLQsi48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cImRhbmdlclwiIG9uQ2xpY2s9e3RoaXMub25EZWxldGUuYmluZCh0aGlzKX0+0KPQtNCw0LvQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbkJvZHlUYWJsZVJvdy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93VGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dJbnB1dDogZmFsc2Vcblx0XHR9XG5cdH1cblx0XG5cdG9uQmx1cigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dJbnB1dDogZmFsc2V9KVxuXHR9XG5cblx0b25Gb2N1cygpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dJbnB1dDp0cnVlfSwgZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDx0ZCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NUZH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLXNtIG1iMFwiPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLnNob3dJbnB1dCA/XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0cmVmPVwiaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMub25CbHVyLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPiA6XG5cdFx0XHRcdFx0XHQ8c3BhbiBvbkNsaWNrPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX0+e3RoaXMucHJvcHMudmFsdWV9PC9zcGFuPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuaW1wb3J0IE1vZGlmaWNhdGlvblRhYmxlTmV3VmFsdWUgZnJvbSBcIi4vTW9kaWZpY2F0aW9uVGFibGVOZXdWYWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25UYWJsZU5ld0l0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGl0ZW06IHtcblx0XHRcdFx0aWQ6ICduZXcnLFxuXHRcdFx0XHRwYXJlbnRJZDogcHJvcHMuaWQsXG5cdFx0XHRcdHNrdTogJycsXG5cdFx0XHRcdG9yZGVyOiAnJ1xuXHRcdFx0fSxcblx0XHRcdHZhbHVlczogJydcblx0XHR9O1xuXHRcdHRoaXMubmV3SXRlbVZhbHVlcyA9IHRoaXMubmV3SXRlbVZhbHVlcy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dmFyIG5ld0l0ZW1WYWx1ZXMgPSB0aGlzLm5ld0l0ZW1WYWx1ZXMoKTtcblx0XHR0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IG5ld0l0ZW1WYWx1ZXN9KTtcblx0fVxuXG5cdG5ld0l0ZW1WYWx1ZXMoKXtcblx0XHR2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5jb2x1bW5zO1xuXHRcdHJldHVybiBwYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSwgaSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3VicHJvZGljdElkOiAnJyxcblx0XHRcdFx0cGFyYW1JZDogcGFyYW0uaWQsXG5cdFx0XHRcdHZhbHVlOiAnJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlTmV3VmFsdWUodmFsdWUsIGluZGV4KXtcblx0XHR0aGlzLnN0YXRlLnZhbHVlc1tpbmRleF0udmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0b25DaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHRoaXMuc3RhdGUuaXRlbVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0XHR9O1xuXHR9XG5cblx0YWRkTmV3TW9kaWZpY2F0aW9uKGUpe1xuXHRcdHZhciBuZXdJdGVtID0gdGhpcy5zdGF0ZTtcblx0XHRpZihuZXdJdGVtLml0ZW0uc2t1ICYmIG5ld0l0ZW0uaXRlbS5vcmRlcil7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aXRlbToge1xuXHRcdFx0XHRcdGlkOiAnbmV3Jyxcblx0XHRcdFx0XHRwYXJlbnRJZDogdGhpcy5wcm9wcy5wYXJlbnRJZCxcblx0XHRcdFx0XHRza3U6ICcnLFxuXHRcdFx0XHRcdG9yZGVyOiAnJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZXM6IHRoaXMubmV3SXRlbVZhbHVlcygpXG5cdFx0XHR9LCAoKSA9PiB7dGhpcy5wcm9wcy5oYW5kbGVBZGQobmV3SXRlbSl9KTtcblx0XHR9XG5cdH1cblx0XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IG5ld1ZhbHVlc1RkID0gdGhpcy5zdGF0ZS52YWx1ZXMubWFwKFxuXHRcdFx0KGNvbHVtbiwgaSkgPT4gPE1vZGlmaWNhdGlvblRhYmxlTmV3VmFsdWVcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRpbmRleD17aX1cblx0XHRcdFx0dmFsdWU9e2NvbHVtbi52YWx1ZX1cblx0XHRcdFx0aGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZU5ld1ZhbHVlLmJpbmQodGhpcyl9Lz5cblx0XHQpO1xuXHRcdHJldHVybihcblx0XHRcdDx0ciBjbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cImNvbC1zbS0xXCI+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIiBic1NpemU9XCJzbWFsbFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuaXRlbS5vcmRlcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ29yZGVyJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiIGJzU2l6ZT1cInNtYWxsXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLml0ZW0uc2t1fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnc2t1JykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdHtuZXdWYWx1ZXNUZH1cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTaXplPVwic21hbGxcIiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuYWRkTmV3TW9kaWZpY2F0aW9uLmJpbmQodGhpcyl9PtCU0L7QsdCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0b25DaGFuZ2UoZSl7XG5cdFx0dmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UodmFsdWUsIHRoaXMucHJvcHMuaW5kZXgpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRkPlxuXHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiIGJzU2l6ZT1cInNtYWxsXCI+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHQ8L3RkPlxuXHRcdClcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVOZXdWYWx1ZS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBNb2RpZmljYXRpb25Qcm9wZXJ0aWVzIGZyb20gXCIuL01vZGlmaWNhdGlvblByb3BlcnRpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd01vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZTogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjbG9zZU1vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZTogZmFsc2UgfSk7XG5cdH1cblxuXHRvcGVuTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGU6IHRydWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW5Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUuYmluZCh0aGlzKX0gPlxuXHRcdFx0XHRcdHsoIXRoaXMucHJvcHMudGl0bGUpPzxHbHlwaGljb24gZ2x5cGg9XCJjb2dcIiAvPjp0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDxNb2RpZmljYXRpb25Qcm9wZXJ0aWVzXG5cdFx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRcdHNob3dNb2RhbD17dGhpcy5zdGF0ZS5zaG93TW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlfVxuXHRcdFx0XHRcdFx0aGlkZU1vZGFsPXt0aGlzLmNsb3NlTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0KVxuXHR9O1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL1Byb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5cbmltcG9ydCBkYXRhSGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiO1xuaW1wb3J0IG1vZGlmaWNhdGlvbkhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Byb2R1Y3RNb2RpZmljYXRpb25IZWxwZXJcIjtcblxuaW1wb3J0IE1vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZSBmcm9tIFwiLi9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGVcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25Qcm9wZXJ0aWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdGRlbGV0ZWQ6IFtdXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uKHRoaXMucHJvcHMuaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y29sdW1uczogcmVzcG9uc2UuY29sdW1uc30pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZGF0YSwgaW5kZXgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdGNvbHVtbnNbaW5kZXhdID0gZGF0YTtcblx0XHR0aGlzLnNldFN0YXRlKHtjb2x1bW5zOiBjb2x1bW5zfSk7XG5cdH1cblxuXHRoYW5kbGVEZWxldGUoaW5kZXgpe1xuXHRcdGNvbnNvbGUubG9nKCdERUxFVEUgUFJPUEVSVFk6ICcsIHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0pO1xuXHRcdHZhciBkZWxldGVkID0gKHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0uaWQgIT0gJ25ldycpXG5cdFx0XHQ/XHR0aGlzLnN0YXRlLmRlbGV0ZWQuY29uY2F0KHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0pXG5cdFx0XHQ6IHRoaXMuc3RhdGUuZGVsZXRlZDtcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucztcblx0XHRjb2x1bW5zLnNwbGljZShpbmRleCwgMSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjb2x1bW5zOiBjb2x1bW5zLFxuXHRcdFx0ZGVsZXRlZDogZGVsZXRlZFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQWRkKGRhdGEpe1xuXHRcdGNvbnNvbGUubG9nKCdORVcgUFJPUEVSVFk6ICcsIGRhdGEpO1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zLmNvbmNhdChkYXRhKTtcblx0XHR0aGlzLnNldFN0YXRlKHtjb2x1bW5zOiBjb2x1bW5zfSk7XG5cdH1cblxuXHRvbkNhbmNlbCgpe1xuXHRcdGRhdGFIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdE1vZGlmaWNhdGlvbih0aGlzLnByb3BzLmlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2NvbHVtbnM6IHJlc3BvbnNlLmNvbHVtbnMsIGRlbGV0ZWQ6IFtdfSwgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uU2F2ZShlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcblx0XHRjb25zb2xlLmxvZygnU0VORCBEQVRBOiAnLCB0aGlzLnN0YXRlKTtcblx0XHRtb2RpZmljYXRpb25IZWxwZXJzLmVkaXRNb2RpZmljYXRpb25Qcm9wZXJ0eSh0aGlzLnN0YXRlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTQVZFIERBVEE6ICcscmVzcG9uc2UpO1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3dNb2RhbH1cblx0XHRcdFx0b25IaWRlPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZT7QodCy0L7QudGB0YLQstCwINGC0L7QstCw0YDQvdGL0YUg0LzQvtC00LjRhNC40LrQsNGG0LjQuSAo0YjQsNC/0LrQsCDRgtCw0LHQu9C40YbRiyk8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8TW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlXG5cdFx0XHRcdFx0XHRpZD17dGhpcy5wcm9wcy5pZH1cblx0XHRcdFx0XHRcdGRhdGFUYWJsZT17dGhpcy5zdGF0ZS5jb2x1bW5zfVxuXHRcdFx0XHRcdFx0aGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0aGFuZGxlRGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0aGFuZGxlQWRkPXt0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0cm9sZT17dGhpcy5wcm9wcy5yb2xlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgb25DbGljaz17dGhpcy5vblNhdmUuYmluZCh0aGlzKX0+0KHQvtGF0YDQsNC90LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1RhYmxlXCI7XG5cbmltcG9ydCBNb2RpZmljYXRpb25Qcm9wZXJ0eVRhYmxlUm93IGZyb20gXCIuL01vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3dcIjtcbmltcG9ydCBNb2RpZmljYXRpb25OZXdQcm9wZXJ0eSBmcm9tIFwiLi9Nb2RpZmljYXRpb25OZXdQcm9wZXJ0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRtb2RpZmljYXRpb25Qcm9wZXJ0aWVzKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLmRhdGFUYWJsZS5tYXAoZnVuY3Rpb24gKGRhdGEsIGkpIHtcblx0XHRcdHJldHVybiA8TW9kaWZpY2F0aW9uUHJvcGVydHlUYWJsZVJvd1xuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGluZGV4PXtpfVxuXHRcdFx0XHRwcm9wZXJ0eT17ZGF0YX1cblx0XHRcdFx0ey4uLnNlbGYucHJvcHN9XHQvPlxuXHRcdH0pO1xuXHR9XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8VGFibGUgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiY29sLXNtLTJcIj7ihJbihJYv0L/QvzwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1PC90aD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJjb2wtc20tMlwiPtCU0LXQudGB0YLQstC40LU8L3RoPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHR7dGhpcy5tb2RpZmljYXRpb25Qcm9wZXJ0aWVzKCl9XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDx0Zm9vdD5cblx0XHRcdFx0XHQ8TW9kaWZpY2F0aW9uTmV3UHJvcGVydHkgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdFx0PC90Zm9vdD5cblx0XHRcdDwvVGFibGU+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25Qcm9wZXJ0eVRhYmxlUm93IGV4dGVuZHMgIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd01vZGFsOiBmYWxzZVxuXHRcdH1cblx0fVxuXHRcblx0b25DaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHRoaXMucHJvcHMucHJvcGVydHlba2V5XSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UodGhpcy5wcm9wcy5wcm9wZXJ0eSwgdGhpcy5wcm9wcy5pbmRleCk7XG5cdFx0fVxuXHR9XG5cdFxuXHRvbkRlbGV0ZSgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0sICgpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlRGVsZXRlKHRoaXMucHJvcHMuaW5kZXgpXG5cdFx0fSk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy5wcm9wZXJ0eS5vcmRlcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ29yZGVyJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMucHJvcGVydHkubmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cImRhbmdlclwiIG9uQ2xpY2s9e3RoaXMub3Blbi5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5wcm9wcy5yb2xlICE9ICdhZG1pbid9PlxuXHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInRyYXNoXCIvPlxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH1cblx0XHRcdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZT7Qo9C00LDQu9C10L3QuNC1INGB0LLQvtC50YHRgtCy0LAg0YLQvtCy0LDRgNC90L7QuSDQvNC+0LTQuNGE0LjQutCw0YbQuNC4PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXG5cdFx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINGB0LLQvtC50YHRgtCy0L48L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGVhZFwiPlwie3RoaXMucHJvcHMucHJvcGVydHkubmFtZX1cIjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD7QlNCw0L3QvdC+0LUg0YHQstC+0LnRgdGC0LLQviDQsdGD0LTQtdGCINGD0LTQsNC70LXQvdC+INGB0L4g0LLRgdC10LzQuCDQt9C90LDRh9C10L3QuNGP0LzQuCDQstC+INCy0YHQtdGFINC80L7QtNC40YTQuNC60LDRhtC40Y/RhSDQtNCw0L3QvdC+0LPQviDRgtC+0LLQsNGA0LAgKNGCLtC1INCx0YPQtNC10YIg0YPQtNCw0LvQtdC9INCy0LXRgdGMINGB0YLQvtC70LHQtdGGINCyINGC0LDQsdC70LjRhtC1INC80L7QtNC40YTQuNC60LDRhtC40Lkg0YHQviDQstGB0LXQvNC4INC30L3QsNGH0LXQvdC40Y/QvNC4KS4g0JLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjQtSDQvdC10LLQvtC30LzQvtC20L3QviE8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cImRhbmdlclwiIG9uQ2xpY2s9e3RoaXMub25EZWxldGUuYmluZCh0aGlzKX0+0KPQtNCw0LvQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3cuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvbk5ld1Byb3BlcnR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpZDogJ25ldycsXG5cdFx0XHRwcm9kdWN0SWQ6IHRoaXMucHJvcHMuaWQsXG5cdFx0XHRvcmRlcjogJycsXG5cdFx0XHRuYW1lOiAnJ1xuXHRcdH1cblx0fVxuXG5cdG9uQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR0aGlzLnN0YXRlW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuXHRcdH07XG5cdH1cblxuXHRhZGROZXdQcm9wZXJ0eU1vZGlmaWNhdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIG5ld1Byb3BlcnR5ID0gdGhpcy5zdGF0ZTtcblx0XHRpZihuZXdQcm9wZXJ0eS5vcmRlciAmJiBuZXdQcm9wZXJ0eS5uYW1lKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpZDogJ25ldycsXG5cdFx0XHRcdHByb2R1Y3RJZDogdGhpcy5wcm9wcy5pZCxcblx0XHRcdFx0b3JkZXI6ICcnLFxuXHRcdFx0XHRuYW1lOiAnJ1xuXHRcdFx0fSwgKCkgPT4ge3RoaXMucHJvcHMuaGFuZGxlQWRkKG5ld1Byb3BlcnR5KX0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDx0ciBjbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5vcmRlcn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ29yZGVyJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmFkZE5ld1Byb3BlcnR5TW9kaWZpY2F0aW9uLmJpbmQodGhpcyl9PtCU0L7QsdCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uTmV3UHJvcGVydHkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0lucHV0R3JvdXBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuaW1wb3J0IFNsdWdpZnkgZnJvbSBcIi4vLi4vLi4vdXRpbHMvc2x1Z2lmeUhlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUZvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6ICghcHJvcHMuZGF0YS50aXRsZSk/cHJvcHMuZGF0YS5uYW1lOnByb3BzLmRhdGEudGl0bGUsXG5cdFx0XHRwYXRoOiBwcm9wcy5kYXRhLnBhdGgsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuZGF0YS5kZXNjcmlwdGlvbixcblx0XHRcdGNvbnRlbnRNYXJrZG93bjogcHJvcHMuZGF0YS5jb250ZW50TWFya2Rvd24sXG5cdFx0XHRjb250ZW50SHRtbDogcHJvcHMuZGF0YS5jb250ZW50SHRtbCxcblx0XHRcdHNvcnRpbmc6IHByb3BzLmRhdGEuc29ydGluZyxcblx0XHRcdHVwbG9hZFBhdGg6ICghcHJvcHMuZGF0YS51cGxvYWRQYXRoKT8nJzpwcm9wcy5kYXRhLnVwbG9hZFBhdGgsXG5cdFx0XHRpbWFnZTogKCFwcm9wcy5kYXRhLmltYWdlKVxuXHRcdFx0XHQ/XCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiXG5cdFx0XHRcdDpwcm9wcy5kYXRhLmltYWdlXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0Z2VuZXJhdGVQYXRoRnJvbVRpdGxlKCl7XG5cdFx0dmFyIHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgaW1nU3JjID0gdGhpcy5zdGF0ZS51cGxvYWRQYXRoICsgdGhpcy5zdGF0ZS5pbWFnZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXtpbWdTcmN9Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3RpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5Vcmw8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVQYXRoRnJvbVRpdGxlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwicmVmcmVzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGF0aH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXJsXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtwYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3BhdGgnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnRNYXJrZG93bn1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IChtYXJrZG93bilcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtjb250ZW50TWFya2Rvd25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2NvbnRlbnRNYXJrZG93bicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbCBjbGFzc05hbWU9XCJtcjJcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnNvcnRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2Vbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdzb3J0aW5nJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YVBhZ2VbY29udGVudEh0bWxdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50SFRNTH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWVkaWEvTWVkaWFGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhQ2F0ZWdvcmllc0Zvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6ICghcHJvcHMuZGF0YS50aXRsZSk/cHJvcHMuZGF0YS5uYW1lOnByb3BzLmRhdGEudGl0bGUsXG5cdFx0XHRwYXRoOiBwcm9wcy5kYXRhLnBhdGgsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuZGF0YS5kZXNjcmlwdGlvbixcblx0XHRcdHNvcnRpbmc6IHByb3BzLmRhdGEuc29ydGluZyxcblx0XHRcdHVwbG9hZFBhdGg6ICghcHJvcHMuZGF0YS51cGxvYWRQYXRoKT8nJzpwcm9wcy5kYXRhLnVwbG9hZFBhdGgsXG5cdFx0XHRpbWFnZTogKCFwcm9wcy5kYXRhLmltYWdlKVxuXHRcdFx0XHQ/XCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiXG5cdFx0XHRcdDpwcm9wcy5kYXRhLmltYWdlXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0Z2VuZXJhdGVQYXRoRnJvbVRpdGxlKCl7XG5cdFx0dmFyIHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgaW1nU3JjID0gdGhpcy5zdGF0ZS51cGxvYWRQYXRoICsgdGhpcy5zdGF0ZS5pbWFnZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXtpbWdTcmN9Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3RpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5Vcmw8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVQYXRoRnJvbVRpdGxlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwicmVmcmVzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGF0aH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXJsXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtwYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3BhdGgnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWVkaWEvTWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybVNlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bWV0YVRpdGxlIDogcHJvcHMuZGF0YS5tZXRhVGl0bGUsXG5cdFx0XHRtZXRhRGVzY3JpcHRpb246IHByb3BzLmRhdGEubWV0YURlc2NyaXB0aW9uLFxuXHRcdFx0bWV0YUtleXdvcmRzOiBwcm9wcy5kYXRhLm1ldGFLZXl3b3Jkc1xuXHRcdH1cblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwibW9kYWwtbGdcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLmRhdGEudGl0bGUpP3RoaXMucHJvcHMuZGF0YS5uYW1lOnRoaXMucHJvcHMuZGF0YS50aXRsZX1cblx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRhY3Rpb249eycvYWRtaW4vJyt0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcisnLycrdGhpcy5wcm9wcy5hY3Rpb24rJy8nK3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdGlkPVwiZm9ybU1vZGFsXCJcblx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0ZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+bWV0YSBUaXRsZTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBtZXRhIFRpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1TZW9bbWV0YVRpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWV0YVRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnbWV0YVRpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5tZXRhIERlc2NyaXB0aW9uPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgbWV0YSBEZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtU2VvW21ldGFEZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm1ldGFEZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ21ldGFEZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPm1ldGEgS2V5d29yZHM8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBtZXRhIEtleXdvcmRzXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1TZW9bbWV0YUtleXdvcmRzXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWV0YUtleXdvcmRzfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnbWV0YUtleXdvcmRzJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPtCU0L7QsdCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1TZW8uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBEZWZhdWx0Rm9ybUFkZCBmcm9tIFwiLi9EZWZhdWx0Rm9ybUFkZFwiO1xuaW1wb3J0IENhdGVnb3JpZXNGb3JtQWRkIGZyb20gXCIuLi9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc0Zvcm1BZGRcIjtcbmltcG9ydCBQcm9kdWN0Rm9ybUFkZCBmcm9tIFwiLi4vQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0Rm9ybUFkZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1zQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpXG5cdH1cblxuXHRzZWxlY3RFZGl0SW5wdXRzKCl7XG5cdFx0c3dpdGNoICh0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcil7XG5cdFx0XHRjYXNlIFwiY2F0ZWdvcmllc1wiOiByZXR1cm4gPENhdGVnb3JpZXNGb3JtQWRkIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0Y2FzZSBcInByb2R1Y3RzXCI6IHJldHVybiA8UHJvZHVjdEZvcm1BZGQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gPERlZmF1bHRGb3JtQWRkIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdGRpYWxvZ0NsYXNzTmFtZT1cIncxMDBcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLmRhdGEudGl0bGUpP3RoaXMucHJvcHMuZGF0YS5uYW1lOnRoaXMucHJvcHMuZGF0YS50aXRsZX1cblx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRhY3Rpb249eycvYWRtaW4vJyt0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcisnLycrdGhpcy5wcm9wcy5hY3Rpb24rJy8nK3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdGlkPVwiZm9ybU1vZGFsXCJcblx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0ZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt0aGlzLnNlbGVjdEVkaXRJbnB1dHMoKX1cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLnRleHRDbG9zZUJ0bn08L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QlNC+0LHQsNCy0LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpO1xuXG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zQWRkLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgR3JpZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HcmlkXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRGb3JtQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6ICcnLFxuXHRcdFx0cGF0aDogJycsXG5cdFx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0XHRjb250ZW50TWFya2Rvd246ICcnLFxuXHRcdFx0Y29udGVudEh0bWw6ICcnLFxuXHRcdFx0c29ydGluZzogMCxcblx0XHRcdGltYWdlOiBcIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHR0aXRsZUNoYW5nZShlKXtcblx0XHR2YXIgdGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRlbGV0ZT1cImhpZGRlblwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3RpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLnRpdGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFQYWdlW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXRofVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtjb250ZW50TWFya2Rvd25dXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2Vbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc29ydGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YVBhZ2VbY29udGVudEh0bWxdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50SFRNTH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9EZWZhdWx0Rm9ybUFkZC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuaW1wb3J0IFNsdWdpZnkgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvc2x1Z2lmeUhlbHBlclwiO1xuaW1wb3J0IGNhdGVnb3J5SGVscGVycyBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmltcG9ydCBDYXRlZ29yeVJlcGxhY2UgZnJvbSBcIi4vQ2F0ZWdvcnlSZXBsYWNlQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXNGb3JtQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lIDogJycsXG5cdFx0XHRwYXRoOiAnJyxcblx0XHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRcdGNvbnRlbnRNYXJrZG93bjogJycsXG5cdFx0XHRjb250ZW50SHRtbDogJycsXG5cdFx0XHRzb3J0aW5nOiAwLFxuXHRcdFx0aW1hZ2U6IFwiL2ZpbGVzL2ltYWdlcy9wcm9kdWN0LzIwMTItMDUtMjJfZm90b19udi5qcGdcIixcblx0XHRcdHBhcmVudElkOiBwcm9wcy5kYXRhLmlkLFxuXHRcdFx0cGFyZW50Q2F0ZWdvcnlJbmZvOiBwcm9wcy5kYXRhLFxuXHRcdFx0Y2F0ZWdvcnlMaXN0OiAnJ1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBwYXJlbnRJZCA9IHRoaXMucHJvcHMuZGF0YS5pZDtcblxuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDdXJyZW50R2F0ZWdvcnlMaXN0KHBhcmVudElkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlMaXN0KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y2F0ZWdvcnlMaXN0OiBjYXRlZ29yeUxpc3R9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHR0aXRsZUNoYW5nZShlKXtcblx0XHR2YXIgdGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0c2VsZWN0Q2F0ZWdvcnkoaWQpe1xuXHRcdGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBDQVRFR09SWScsaWQpO1xuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRwYXJlbnRDYXRlZ29yeUluZm86IGNhdGVnb3J5SW5mbyxcblx0XHRcdFx0XHRwYXJlbnRJZDogaWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRlbGV0ZT1cImhpZGRlblwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtuYW1lXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMudGl0bGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHQgcmVxdWlyZWRcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCg0L7QtNC40YLQtdC70YzRgdC60LDRjyDQutCw0YLQtdCz0L7RgNC40Y88L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENhdGVnb3J5UmVwbGFjZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50Q2F0ZWdvcnk9e3RoaXMucHJvcHMuZGF0YX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0ZWdvcnlMaXN0PXt0aGlzLnN0YXRlLmNhdGVnb3J5TGlzdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0Q2F0ZWdvcnk9e3RoaXMuc2VsZWN0Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhcmVudENhdGVnb3J5SW5mby5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J7Qv9C40YHQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtjb250ZW50TWFya2Rvd25dXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdzb3J0aW5nJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtwYXJlbnRJZF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLnBhcmVudElkfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc0Zvcm1BZGQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcbmltcG9ydCBIZWxwQmxvY2sgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSGVscEJsb2NrXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RGb3JtQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRza3U6ICcnLFxuXHRcdFx0bmFtZSA6ICcnLFxuXHRcdFx0cGF0aDogJycsXG5cdFx0XHRmdWxsUGF0aDogJycsXG5cdFx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0XHRjb250ZW50TWFya2Rvd246ICcnLFxuXHRcdFx0Y29udGVudEh0bWw6ICcnLFxuXHRcdFx0c29ydGluZzogMCxcblx0XHRcdGltYWdlOiBcIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCIsXG5cdFx0XHRkcmFmdDogXCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0ZXJyb3JIZWxwOiAnRXJyb3IuJ1xuXHRcdH1cblx0fVxuXG5cdG9uQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0c2t1T25DaGFuZ2UoZSl7XG5cdFx0dmFyIGlucHV0ID0gZS50YXJnZXQ7XG5cdFx0dmFyIHNrdSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2t1OiBza3Vcblx0XHR9LCgpID0+IHt0aGlzLnZhbGlkYXRlSW5wdXQoaW5wdXQpfSk7XG5cdH1cblxuXHR2YWxpZGF0ZUlucHV0KGlucHV0KXtcblx0XHRTbHVnaWZ5LmdldFByb2R1Y3RTbHVnaWZ5KGlucHV0LnZhbHVlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHRpZighcmVzdWx0LmVycm9yKXtcblx0XHRcdFx0XHR2YXIgcGF0aCA9IHJlc3VsdC5wYXRoO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0cGF0aDogcGF0aCxcblx0XHRcdFx0XHRcdGZ1bGxQYXRoOiB0aGlzLnByb3BzLmRhdGEuZnVsbFBhdGggKyAnLycgKyBwYXRoLFxuXHRcdFx0XHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0XHRcdFx0ZXJyb3JIZWxwOiAnRXJyb3IuJ1xuXHRcdFx0XHRcdH0sIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGVycm9yOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZXJyb3JIZWxwOiByZXN1bHQuZXJyb3Jcblx0XHRcdFx0XHR9LCBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShyZXN1bHQuZXJyb3IgKyAnINCd0LDQtNC+INC40YHQv9GA0LDQstC40YLRjCEnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXt0aGlzLnN0YXRlLmltYWdlfSBkZWxldGU9XCJoaWRkZW5cIiBpbnB1dE5hbWU9XCJmaWxlTG9hZEltYWdlXCIvPlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5zdGF0ZS5kcmFmdH0gZGVsZXRlPVwiaGlkZGVuXCIgaW5wdXROYW1lPVwiZmlsZUxvYWREcmFmdFwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUuZXJyb3IpPycnOidoYXMtZXJyb3InfT5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtC+0LQg0YLQvtCy0LDRgNCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0L7QtCDRgtC+0LLQsNGA0LBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwic2t1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tza3VdXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5za3V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuc2t1T25DaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8SGVscEJsb2NrPnt0aGlzLnN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3JIZWxwfTwvSGVscEJsb2NrPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbbmFtZV1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+T9C/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXRofVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tmdWxsUGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLmZ1bGxQYXRofVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiY2F0ZWdvcnlJZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0Rm9ybUFkZC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0XCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1EZWxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlKClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGg1PtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINGN0YLQvtGCINGA0LDQt9C00LXQuyE8L2g1PlxuXHRcdFx0XHRcdFx0PEFsZXJ0IGJzU3R5bGU9XCJkYW5nZXJcIj5cblx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD0nd2FybmluZy1zaWduJyBjbGFzc05hbWUgPSAnbXIxJy8+XG5cdFx0XHRcdFx0XHRcdNCS0YHQtSA8c3Ryb25nPtC/0L7QtNGA0LDQt9C00LXQu9GLPC9zdHJvbmc+INC4INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQtSA8c3Ryb25nPtGC0L7QstCw0YDRizwvc3Ryb25nPiDQsiDRjdGC0LjRhSDQv9C+0LTRgNCw0LfQtNC10LvQsNGFINC90LAg0YHQsNC50YLQtSDQvtGC0L7QsdGA0LDQttCw0YLRjNGB0Y8g0L3QtSDQsdGD0LTRg9GCIVxuXHRcdFx0XHRcdFx0PC9BbGVydD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJkYW5nZXJcIiB0eXBlPVwic3VibWl0XCI+0KPQtNCw0LvQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EZWxldGUuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1EZWxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlKClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHA+0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGN0YLQvtGCINGA0LDQt9C00LXQuyE8L3A+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QktC+0YHRgdGC0LDQvdC+0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1SZWNvdmVyLmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9BbGVydFwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxGb3JtRGlzYWJsZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlKClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGg1PtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGB0LrRgNGL0YLRjCDRjdGC0L7RgiDRgNCw0LfQtNC10LshPC9oNT5cblx0XHRcdFx0XHRcdDxBbGVydCBic1N0eWxlPVwiZGFuZ2VyXCI+XG5cdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9J3dhcm5pbmctc2lnbicgY2xhc3NOYW1lID0gJ21yMScvPlxuXHRcdFx0XHRcdFx0XHTQktGB0LUgPHN0cm9uZz7Qv9C+0LTRgNCw0LfQtNC10LvRizwvc3Ryb25nPiDQuCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40LUgPHN0cm9uZz7RgtC+0LLQsNGA0Ys8L3N0cm9uZz4g0LIg0Y3RgtC40YUg0L/QvtC00YDQsNC30LTQtdC70LDRhSDQvdCwINGB0LDQudGC0LUg0L7RgtC+0LHRgNCw0LbQsNGC0YzRgdGPINC90LUg0LHRg9C00YPRgiFcblx0XHRcdFx0XHRcdDwvQWxlcnQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7QodC60YDRi9GC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtRGlzYWJsZWQuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1EaXNhYmxlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3RoaXMucHJvcHMuc2hvd31cblx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdGlkPVwiZm9ybU1vZGFsXCJcblx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cD7QktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LrQsNC30LDRgtGMINGN0YLQvtGCINGA0LDQt9C00LXQuyE8L3A+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY3VycmVudFVybFwiIHZhbHVlPXt3aW5kb3cubG9jYXRpb24uaHJlZn0vPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7Qn9C+0LrQsNC30LDRgtGMPC9CdXR0b24+XG5cdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHQ8L01vZGFsPlxuXG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1FbmFibGUuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcblxuaW1wb3J0IE1vZGFsUmVzcG9uc2VNZXNzYWdlIGZyb20gXCIuL01vZGFsUmVzcG9uc2VNZXNzYWdlXCI7XG5pbXBvcnQgZ2l0SHViSGVscGVyIGZyb20gXCIuLi8uLi91dGlscy9naXRIdWJIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxGb3JtSXNzdWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHVybDogJycsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRib2R5OiAnJyxcblx0XHRcdGxhYmVsOiAnJyxcblx0XHRcdHNob3dNZXNzYWdlOiBmYWxzZSxcblx0XHRcdHRleHRNZXNzYWdlOiAnJyxcblx0XHRcdHRpdGxlTWVzc2FnZTogJ0FsZXJ0Jyxcblx0XHRcdHR5cGVNZXNzYWdlOiAnc3VjY2VzcycsXG5cdFx0XHRzaXplTWVzc2FnZTogJ2xnJ1xuXHRcdH1cblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGJvZHk6ICcnXG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlTWVzc2FnZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNob3dNZXNzYWdlOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWZcblx0XHR9KTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0ZG9jdW1lbnQub25rZXlkb3duID0gKGUpPT57XG5cdFx0XHRpZihlLmFsdEtleSAmJiBlLmtleUNvZGUgPT0gMTEzKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0c2hvd01vZGFsOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdHNlbmRJc3N1ZSgpe1xuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XCJ0aXRsZVwiOiB0aGlzLnN0YXRlLnRpdGxlLFxuXHRcdFx0XCJib2R5XCI6ICcjIyAnICsgdGhpcy5zdGF0ZS51cmwgKyAnXFxuXFxuJyArIHRoaXMuc3RhdGUuYm9keSxcblx0XHRcdFwibGFiZWxzXCI6IFsodGhpcy5zdGF0ZS5sYWJlbCk/dGhpcy5zdGF0ZS5sYWJlbDon0L7RiNC40LHQutCwJ119O1xuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdGdpdEh1YkhlbHBlci5uZXdJc3N1ZShkYXRhKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YUluZm8pe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhSW5mbyk7XG5cdFx0XHRcdGlmKGRhdGFJbmZvLnN0YXR1cyA9PSAyMDEgJiYgZGF0YUluZm8uc3RhdHVzVGV4dCA9PSAnQ3JlYXRlZCcpe1xuXHRcdFx0XHRcdHRoaXMuaGlkZU1vZGFsKCk7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRzaG93TWVzc2FnZTogdHJ1ZSxcblx0XHRcdFx0XHRcdHRpdGxlTWVzc2FnZTogJ9Ch0L7QvtCx0YnQtdC90LjQtSAjJyArIGRhdGFJbmZvLmRhdGEubnVtYmVyICsnLicsXG5cdFx0XHRcdFx0XHR0ZXh0TWVzc2FnZTogJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtSDRgdC+0LfQtNCw0L3Qvi4g0JHQu9Cw0LPQvtC00LDRgNGOINC30LAg0L/QvtC80L7RidGMLiDQkiDQsdC70LjQttCw0LnRiNC10LUg0LLRgNC10LzRjyDQvtGI0LjQsdC60LAg0LHRg9C00LXRgiDQuNGB0L/RgNCw0LLQu9C10L3QsCEnLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRzaG93TWVzc2FnZTogdHJ1ZSxcblx0XHRcdFx0XHRcdHR5cGVNZXNzYWdlOiAnZGFuZ2VyJyxcblx0XHRcdFx0XHRcdHRpdGxlTWVzc2FnZTogJ9Ce0YjQuNCx0LrQsCEnLFxuXHRcdFx0XHRcdFx0dGV4dE1lc3NhZ2U6ICfQodC+0L7QsdGJ0LXQvdC40LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Qvi4g0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwLiDQntCx0YDQsNGC0LjRgtC10YHRjCDQuiDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNGDLicsXG5cdFx0XHRcdFx0XHRzaXplTWVzc2FnZTogJ3NtYWxsJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLmRhdGEudGl0bGUpP3RoaXMucHJvcHMuZGF0YS5uYW1lOnRoaXMucHJvcHMuZGF0YS50aXRsZX1cblx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCd0LDQt9Cy0LDQvdC40LUg0L7RiNC40LHQutC4PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LUg0L7RiNC40LHQutC4XCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndGl0bGUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQuNC/INC+0YjQuNCx0LrQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJzZWxlY3RcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImxhYmVsXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnbGFiZWwnKS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJzZWxlY3RcIj4uLi48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCLQvtGI0LjQsdC60LBcIj7QvtGI0LjQsdC60LA8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCLQtNC+0YDQsNCx0L7RgtC60LBcIj7QtNC+0YDQsNCx0L7RgtC60LA8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJlbmhhbmNlbWVudFwiPtC/0YDQtdC00LvQvtC20LXQvdC40LU8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJxdWVzdGlvblwiPtCy0L7Qv9GA0L7RgTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J7Qv9C40YHQsNC90LjQtSDQvtGI0LjQsdC60Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1INC+0YjQuNCx0LrQuFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiYm9keVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5ib2R5fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdib2R5JykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5zZW5kSXNzdWUuYmluZCh0aGlzKX0+0J7RgtC/0YDQsNCy0LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDxNb2RhbFJlc3BvbnNlTWVzc2FnZVxuXHRcdFx0XHRcdHNob3dNZXNzYWdlPXt0aGlzLnN0YXRlLnNob3dNZXNzYWdlfVxuXHRcdFx0XHRcdGhpZGVNZXNzYWdlPXt0aGlzLmhpZGVNZXNzYWdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0dGl0bGU9e3RoaXMuc3RhdGUudGl0bGVNZXNzYWdlfVxuXHRcdFx0XHRcdHR5cGU9e3RoaXMuc3RhdGUudHlwZU1lc3NhZ2V9XG5cdFx0XHRcdFx0dGV4dD17dGhpcy5zdGF0ZS50ZXh0TWVzc2FnZX1cblx0XHRcdFx0XHRzaXplPXt0aGlzLnN0YXRlLnNpemVNZXNzYWdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsRm9ybUlzc3VlLmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxSZXNwb25zZU1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlTWVzc2FnZSgpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PE1vZGFsIHNob3c9e3RoaXMucHJvcHMuc2hvd01lc3NhZ2V9IG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0gYnNTaXplPXt0aGlzLnByb3BzLnNpemV9PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uIGNsYXNzTmFtZT17J21iMCBhbGVydCBhbGVydC0nK3RoaXMucHJvcHMudHlwZX0+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlPnt0aGlzLnByb3BzLnRpdGxlfTwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnRleHR9XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9Pk9LPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpXG5cdH07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL01vZGFsUmVzcG9uc2VNZXNzYWdlLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSBcIi4vUGFuZWxCdXR0b25zL0J1dHRvbkNvbXBvbmVudFwiO1xuaW1wb3J0IE1vZGFsQ29tcG9uZW50IGZyb20gXCIuL01vZGFsQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1CdXR0b25zQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93OiBmYWxzZSxcblx0XHRcdGFjdGlvbjogJycsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRkYXRhOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgY29udHJvbGxlciA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uY29udHJvbGxlcixcblx0XHRcdFx0aWQgPSB0aGlzLnByb3BzLmRhdGFJdGVtLmlkO1xuXHRcdGRhdGFIZWxwZXJzLmdldERhdGFJbmZvKGNvbnRyb2xsZXIsIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhSW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblx0XG5cdGhhbmRsZXJDbGlja0J1dHRvbihhY3Rpb24sIHRpdGxlKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFjdGlvbjogYWN0aW9uLFxuXHRcdFx0dGl0bGU6IHRpdGxlLFxuXHRcdFx0c2hvdzogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgYnNTdHlsZSA9ICh0aGlzLnByb3BzLmRhdGFJdGVtLmJzc3R5bGUpP3RoaXMucHJvcHMuZGF0YUl0ZW0uYnNzdHlsZTonZGVmYXVsdCc7XG5cblx0XHRjb25zdCBCdXR0b25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcImVkaXRcIixcblx0XHRcdFx0ZW5hYmxlOiB0cnVlLFxuXHRcdFx0XHRhY3Rpb246IFwiZWRpdFwiLFxuXHRcdFx0XHRyb2xlOiBbJ21hbmFnZXInLCAnYWRtaW4nXSxcblx0XHRcdFx0dGl0bGU6XCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcInRyYXNoXCIsXG5cdFx0XHRcdGVuYWJsZTogIXRoaXMucHJvcHMuZGF0YUl0ZW0uZGVsZXRlZCxcblx0XHRcdFx0YWN0aW9uOiBcImRlbGV0ZVwiLFxuXHRcdFx0XHRyb2xlOiBbJ2FkbWluJ10sXG5cdFx0XHRcdHRpdGxlOlwi0KPQtNCw0LvQuNGC0YxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogXCJvcGVuXCIsXG5cdFx0XHRcdGVuYWJsZTogdGhpcy5wcm9wcy5kYXRhSXRlbS5kZWxldGVkLFxuXHRcdFx0XHRhY3Rpb246IFwicmVjb3ZlclwiLFxuXHRcdFx0XHRyb2xlOiBbJ2FkbWluJ10sXG5cdFx0XHRcdHRpdGxlOlwi0JLQvtGBY9GC0LDQvdC+0LLQuNGC0YxcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogXCJleWUtY2xvc2VcIixcblx0XHRcdFx0ZW5hYmxlOiB0aGlzLnByb3BzLmRhdGFJdGVtLmFjdGl2ZSAmJiAhdGhpcy5wcm9wcy5kYXRhSXRlbS5kZWxldGVkLFxuXHRcdFx0XHRhY3Rpb246IFwiZGlzYWJsZWRcIixcblx0XHRcdFx0cm9sZTogWydhZG1pbiddLFxuXHRcdFx0XHR0aXRsZTpcItCh0LrRgNGL0YLRjFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcImV5ZS1vcGVuXCIsXG5cdFx0XHRcdGVuYWJsZTogIXRoaXMucHJvcHMuZGF0YUl0ZW0uYWN0aXZlICYmICF0aGlzLnByb3BzLmRhdGFJdGVtLmRlbGV0ZWQsXG5cdFx0XHRcdGFjdGlvbjogXCJlbmFibGVkXCIsXG5cdFx0XHRcdHJvbGU6IFsnYWRtaW4nXSxcblx0XHRcdFx0dGl0bGU6XCLQn9C+0LrQsNC30LDRgtGMXCJcblx0XHRcdH1cblx0XHRdXG5cdFx0XHQvKi5maWx0ZXIoXG5cdFx0XHRcdChidXR0b24pID0+IGJ1dHRvbi5lbmFibGUgJiYgYnV0dG9uLnJvbGUuaW5kZXhPZih0aGlzLnByb3BzLmRhdGFJdGVtLnJvbGUpICE9IC0xXG5cdFx0XHQpKi9cblx0XHRcdC5tYXAoXG5cdFx0XHRcdChidXR0b24sIGkpID0+IGJ1dHRvbi5lbmFibGUgJiYgPEJ1dHRvbkNvbXBvbmVudFxuXHRcdFx0XHRcdGtleT17aX1cblx0XHRcdFx0XHRic1N0eWxlPXtic1N0eWxlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlckNsaWNrQnV0dG9uLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0YWN0aW9uPXtidXR0b24uYWN0aW9ufVxuXHRcdFx0XHRcdGljb249e2J1dHRvbi5pY29ufVxuXHRcdFx0XHRcdHRpdGxlPXtidXR0b24udGl0bGV9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9eyEoYnV0dG9uLnJvbGUuaW5kZXhPZih0aGlzLnByb3BzLmRhdGFJdGVtLnJvbGUpICE9IC0xKX0vPlxuXHRcdFx0KTtcblxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbVwiPlxuXHRcdFx0XHR7QnV0dG9uc31cblx0XHRcdFx0PE1vZGFsQ29tcG9uZW50XG5cdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93fVxuXHRcdFx0XHRcdGhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuXHRcdFx0XHRcdHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdGFjdGlvbj17dGhpcy5zdGF0ZS5hY3Rpb259XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXG5cblx0fVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0l0ZW1CdXR0b25zQ29tcG9uZW50LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBDYXRlZ29yaWVzRm9ybUFkZCBmcm9tIFwiLi9DYXRlZ29yaWVzRm9ybUFkZFwiO1xuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXNBZGRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0ZGF0YTogJydcblx0XHR9O1xuXHR9XG5cblx0c2hvd01vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IHRydWV9KTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiBmYWxzZX0pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0bGV0XHRpZCA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uaWQ7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlJbmZvKGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YUNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGRhdGFDYXRlZ29yeUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cdFxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnNob3dNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnByb3BzLmRhdGFJdGVtLnJvbGUgIT0gJ2FkbWluJ30+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuZGF0YUl0ZW0udGl0bGV9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3d9XG5cdFx0XHRcdFx0b25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdGRpYWxvZ0NsYXNzTmFtZT1cIncxMDBcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmRhdGEubmFtZX1cblx0XHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMuZGF0YUl0ZW0udGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0XHRhY3Rpb249eycvYWRtaW4vY2F0ZWdvcmllcy9hZGQvJ31cblx0XHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRcdFx0ZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Q2F0ZWdvcmllc0Zvcm1BZGQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSAvPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBmb3JtPVwiZm9ybU1vZGFsXCIgYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+0KHQvtGF0YDQsNC90LjRgtGMINC40LfQvNC10L3QtdC90LjRjzwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzQWRkQnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBQcm9kdWN0Rm9ybUFkZCBmcm9tIFwiLi9Qcm9kdWN0Rm9ybUFkZFwiO1xuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RBZGRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0ZGF0YTogJydcblx0XHR9O1xuXHR9XG5cblx0c2hvd01vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IHRydWV9KTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiBmYWxzZX0pO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRsZXRcdGNhdGVnb3J5SWQgPSB0aGlzLnByb3BzLmRhdGFJdGVtLmNhdGVnb3J5aWQ7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlJbmZvKGNhdGVnb3J5SWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhQ2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogZGF0YUNhdGVnb3J5SW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblx0XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGF0YUl0ZW0ucm9sZSAhPSAnYWRtaW4nfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kYXRhSXRlbS50aXRsZX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd31cblx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwidzEwMFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy5kYXRhSXRlbS50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi9wcm9kdWN0cy9hZGQvJ31cblx0XHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRcdFx0ZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8UHJvZHVjdEZvcm1BZGQgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSAvPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBmb3JtPVwiZm9ybU1vZGFsXCIgYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+0KHQvtGF0YDQsNC90LjRgtGMINC40LfQvNC10L3QtdC90LjRjzwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdEFkZEJ1dHRvbi5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NoZWNrYm94XCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvVGFibGVcIjtcblxuaW1wb3J0IE1vZGlmaWNhdGlvblRhYmxlQ29sdW1uIGZyb20gXCIuLi9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblRhYmxlQ29sdW1uXCI7XG5cbmltcG9ydCBkYXRhSGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0UGFzc3BvcnRQZGYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdHJvd3M6W11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGRhdGFIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdE1vZGlmaWNhdGlvbih0aGlzLnByb3BzLmRhdGFJdGVtLmlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y29sdW1uczogZGF0YS5jb2x1bW5zLFxuXHRcdFx0XHRcdHJvd3M6IGRhdGEucm93c1xuXHRcdFx0XHR9KVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9wZW4oKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvdzogdHJ1ZSB9KTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcblx0fVxuXG5cdGNoZWNrQWxsKGUpe1xuXG5cdFx0dmFyIGNoZWNrYm94ZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpKTtcblx0XHRjaGVja2JveGVzLm1hcChmdW5jdGlvbihjKSB7XG5cdFx0XHRjLmNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuXHRcdH0pO1xuXHR9XG5cblx0aGVhZFRhYmxlKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGg+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RoaXMuY2hlY2tBbGwuYmluZCh0aGlzKX0vPjwvdGg+XG5cdFx0XHRcdDx0aD7QndCw0LjQvNC10L3QvtCy0LDQvdC40LU8L3RoPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5jb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RpZmljYXRpb25UYWJsZUNvbHVtblxuXHRcdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdFx0Y29sdW1uPXtjb2x1bW59IC8+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG5cdFxuXHRib2R5VGFibGUoKXtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5yb3dzLm1hcChmdW5jdGlvbiAocm93LCBpKSB7XG5cdFx0XHRyZXR1cm4gPHRyIGtleT17aX0+XG5cdFx0XHRcdDx0ZD48Q2hlY2tib3ggbmFtZT1cIm1vZGlmaWNhdGlvbnNbXVwiIHZhbHVlPXtyb3cuaXRlbS5pZH0vPjwvdGQ+XG5cdFx0XHRcdDx0aD57cm93Lml0ZW0uc2t1fTwvdGg+XG5cdFx0XHRcdHtyb3cudmFsdWVzLm1hcChmdW5jdGlvbih2YWx1ZSwgaSl7XG5cdFx0XHRcdFx0cmV0dXJuIDx0ZCBrZXk9e2l9Pnt2YWx1ZS52YWx1ZX08L3RkPlxuXHRcdFx0XHR9KX1cblx0XHRcdDwvdHI+XG5cdFx0fSk7XG5cdH1cblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxzcGFuPlxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiXG5cdFx0XHRcdFx0IGNsYXNzTmFtZT1cImFscGhhLWljb24tcHJpbnRcIlxuXHRcdFx0XHRcdCBvbkNsaWNrPXt0aGlzLm9wZW4uYmluZCh0aGlzKX0gPtCf0LDRgdC/0L7RgNGCPC9hPlxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJ3OTBcIlxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd31cblx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX1cblx0XHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBjbGFzc05hbWU9XCJtdGIxIGgzXCI+e3RoaXMucHJvcHMuZGF0YUl0ZW0ubmFtZSsnLCAnK3RoaXMucHJvcHMuZGF0YUl0ZW0uc2t1fTwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxmb3JtIGlkPVwicHJpbnQtcGFzc3BvcnRcIiBuYW1lPVwibW9kaWZpY2F0aW9uXCIgbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgYWN0aW9uPXsnL2FkbWluL3Byb2R1Y3RzL3Bhc3Nwb3J0LycrdGhpcy5wcm9wcy5kYXRhSXRlbS5pZH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cblx0XHRcdFx0XHRcdDxUYWJsZSBzdHJpcGVkIGJvcmRlcmVkIGhvdmVyIGNsYXNzTmFtZT1cInRleHQtc2l6ZS1zbWFsbCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMuaGVhZFRhYmxlKCl9XG5cdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5ib2R5VGFibGUoKX1cblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdDwvVGFibGU+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIiBmb3JtPVwicHJpbnQtcGFzc3BvcnRcIj7QodC+0LfQtNCw0YLRjCDQv9Cw0YHQv9C+0YDRgjwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RzL1Byb2R1Y3RQYXNzcG9ydFBkZi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=