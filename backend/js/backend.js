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
	
	var _IssueModalComponent = __webpack_require__(276);
	
	var _IssueModalComponent2 = _interopRequireDefault(_IssueModalComponent);
	
	var _ForumActions = __webpack_require__(354);
	
	var _ForumActions2 = _interopRequireDefault(_ForumActions);
	
	var _Slugify = __webpack_require__(356);
	
	var _Slugify2 = _interopRequireDefault(_Slugify);
	
	var _PanelButtonsComponent = __webpack_require__(357);
	
	var _PanelButtonsComponent2 = _interopRequireDefault(_PanelButtonsComponent);
	
	var _ItemButtonsComponent = __webpack_require__(505);
	
	var _ItemButtonsComponent2 = _interopRequireDefault(_ItemButtonsComponent);
	
	var _ForumButtonComponent = __webpack_require__(506);
	
	var _ForumButtonComponent2 = _interopRequireDefault(_ForumButtonComponent);
	
	var _CategoriesAddButton = __webpack_require__(511);
	
	var _CategoriesAddButton2 = _interopRequireDefault(_CategoriesAddButton);
	
	var _ProductAddButton = __webpack_require__(512);
	
	var _ProductAddButton2 = _interopRequireDefault(_ProductAddButton);
	
	var _ProductPropertyEditButton = __webpack_require__(473);
	
	var _ProductPropertyEditButton2 = _interopRequireDefault(_ProductPropertyEditButton);
	
	var _ProductModificationEditButton = __webpack_require__(478);
	
	var _ProductModificationEditButton2 = _interopRequireDefault(_ProductModificationEditButton);
	
	var _ProductModificationPropertyEditButton = __webpack_require__(488);
	
	var _ProductModificationPropertyEditButton2 = _interopRequireDefault(_ProductModificationPropertyEditButton);
	
	var _ProductPassportPdf = __webpack_require__(513);
	
	var _ProductPassportPdf2 = _interopRequireDefault(_ProductPassportPdf);
	
	var _AdminModalAuth = __webpack_require__(514);
	
	var _AdminModalAuth2 = _interopRequireDefault(_AdminModalAuth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var modalIssue = document.getElementById('modalIssue');
	modalIssue && _reactDom2.default.render(_react2.default.createElement(_IssueModalComponent2.default, { data: modalIssue.dataset }), modalIssue);
	
	var modalAuth = document.getElementById('modalAuth');
	modalAuth && _reactDom2.default.render(_react2.default.createElement(_AdminModalAuth2.default, null), modalAuth);
	
	var forumActions = _ForumActions2.default;
	
	var onchangeSlugify = new _Slugify2.default('.onchangeSlugify');
	onchangeSlugify.onchange();
	
	var refreshSlugify = new _Slugify2.default('.refreshSlugify');
	refreshSlugify.refresh();
	
	var adminPanel = document.getElementById('admin-panel');
	adminPanel && _reactDom2.default.render(_react2.default.createElement(_PanelButtonsComponent2.default, { bsClass: "btn-group-lg btn-group", dataItem: adminPanel.dataset }), adminPanel);
	
	if (document.querySelector('.itemButtonsComponent')) {
		var itemButtonsComponents = [].slice.call(document.querySelectorAll('.itemButtonsComponent'));
		itemButtonsComponents.forEach(function (item) {
			_reactDom2.default.render(_react2.default.createElement(_ItemButtonsComponent2.default, { dataItem: item.dataset }), item);
		});
	}
	
	if (document.querySelector('.forumButtonComponent')) {
		var forumButtonsComponents = [].slice.call(document.querySelectorAll('.forumButtonComponent'));
		forumButtonsComponents.forEach(function (item) {
			_reactDom2.default.render(_react2.default.createElement(_ForumButtonComponent2.default, { dataItem: item.dataset }), item);
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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModalFormIssue = __webpack_require__(277);
	
	var _ModalFormIssue2 = _interopRequireDefault(_ModalFormIssue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var IssueModalComponent = function (_React$Component) {
		_inherits(IssueModalComponent, _React$Component);
	
		function IssueModalComponent(props) {
			_classCallCheck(this, IssueModalComponent);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IssueModalComponent).call(this, props));
	
			_this.state = {
				showModal: false
			};
			return _this;
		}
	
		_createClass(IssueModalComponent, [{
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
				this.setState({ showModal: false });
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(_ModalFormIssue2.default, _extends({}, this.props, {
					show: this.state.showModal,
					hide: this.hideModal.bind(this)
				}));
			}
		}]);
	
		return IssueModalComponent;
	}(_react2.default.Component);
	
	exports.default = IssueModalComponent;

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ModalResponseMessage = __webpack_require__(330);
	
	var _ModalResponseMessage2 = _interopRequireDefault(_ModalResponseMessage);
	
	var _gitHubHelper = __webpack_require__(331);
	
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

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
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

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*
	 * Created by Alpha-Hydro.
	 *  @link http://www.alpha-hydro.com
	 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	 *  @copyright Copyright (c) 2016, Alpha-Hydro
	 */
	
	var axios = __webpack_require__(332);
	
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

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/// <reference path="../../src/libs/jquery.d.ts" />
	/// <reference path="../../src/libs/bootstrap.d.ts" />
	"use strict";
	var ForumActions = (function () {
	    function ForumActions() {
	        var _this = this;
	        this.modalShow = function (title, body, button) {
	            var actionButton = _this.modalForumForm.elements.action, modalBody = _this.modalForumForm.children.item('modalBody');
	            _this.modalForumForm.action = _this.action + '/' + _this.itemId;
	            _this.modal.querySelector('#modalLabel').innerHTML = title;
	            modalBody.innerHTML = '';
	            modalBody.appendChild(body);
	            actionButton.setAttribute('class', button.className);
	            actionButton.innerText = button.text;
	            $(_this.modal).modal('show');
	        };
	        this.btnGroups = [].slice.call(document.querySelectorAll('.btn-group'));
	        this.modal = document.getElementById('modalForumAdmin');
	        this.modalTitle = document.getElementById('myModalLabel');
	        this.modalForumForm = document.getElementById('modalForumForm');
	        this._init();
	    }
	    ForumActions.prototype._init = function () {
	        var self = this;
	        this.btnGroups.forEach(function (btnGroup) {
	            self._initBtn(btnGroup);
	        });
	    };
	    ForumActions.prototype._initBtn = function (btnGroup) {
	        var self = this, idGroup = btnGroup.id, button = [].slice.call(btnGroup.querySelectorAll('button'));
	        button.forEach(function (btn) {
	            btn.addEventListener('click', function (ev) {
	                ev.preventDefault();
	                var el = ev.currentTarget, action = el.dataset.action;
	                self._initAction(idGroup, action);
	            });
	        });
	    };
	    ForumActions.prototype._initAction = function (id, theAction) {
	        this.itemId = id;
	        this.action = theAction;
	        switch (this.action) {
	            case 'delete':
	                this._del();
	                break;
	            case 'reply':
	                this._reply();
	                break;
	            case 'edit':
	                this._edit();
	                break;
	            default:
	                return false;
	        }
	    };
	    ForumActions.prototype._del = function () {
	        var title = 'Удалить сообщение', body = document.createElement('p'), button = {
	            className: 'btn btn-danger',
	            text: 'Удалить'
	        };
	        body.textContent = 'Вы действительно хотите удалить сообщение ' + this.itemId + '!';
	        this.modalShow(title, body, button);
	    };
	    ForumActions.prototype._reply = function () {
	        var title = 'Ответить на сообщение', quest = document.getElementById('question' + this.itemId).querySelector('.panel-body'), body = document.createElement('div'), textarea = document.createElement('textarea'), button = {
	            className: 'btn btn-success',
	            text: 'Отправить'
	        };
	        body.appendChild(quest.cloneNode(true));
	        textarea.name = "contentMarkdown";
	        textarea.rows = "8";
	        textarea.setAttribute('class', 'form-control');
	        textarea.required = true;
	        textarea.onfocus = true;
	        body.appendChild(textarea);
	        $(this.modal).on('shown.bs.modal', function () {
	            $(textarea).focus();
	        });
	        this.modalShow(title, body, button);
	    };
	    ForumActions.prototype._edit = function () {
	        var title = 'Редактировать сообщение', context = document.getElementById('reply' + this.itemId).querySelector('.markdown-content'), body = document.createElement('div'), textarea = document.createElement('textarea'), button = {
	            className: 'btn btn-success',
	            text: 'Сохранить'
	        };
	        textarea.name = "contentMarkdown";
	        textarea.rows = "8";
	        textarea.setAttribute('class', 'form-control');
	        textarea.required = true;
	        textarea.onfocus = true;
	        textarea.innerHTML = context.textContent.trim();
	        //console.log(context.textContent.trim());
	        body.appendChild(textarea);
	        this.modalShow(title, body, button);
	    };
	    return ForumActions;
	}());
	var forumActions = new ForumActions();
	module.exports = forumActions;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(355)))

/***/ },

/***/ 356:
/***/ function(module, exports) {

	"use strict";
	var Slugify = (function () {
	    function Slugify(className) {
	        this.slugify = document.querySelector(className);
	        this.httpRequest = new XMLHttpRequest();
	    }
	    Slugify.prototype.onchange = function () {
	        var _this = this;
	        if (this.slugify) {
	            this.slugify.onchange = function (event) {
	                _this.ajaxContent = document.getElementById(event.target.dataset.slugify);
	                _this.makeRequest('/admin/index/slugify', event.target.value);
	            };
	        }
	    };
	    Slugify.prototype.refresh = function () {
	        var _this = this;
	        if (this.slugify) {
	            this.slugify.addEventListener('click', function (event) {
	                event.preventDefault();
	                _this.sourseInput = document.getElementById(event.target.dataset.sourse);
	                _this.ajaxContent = document.getElementById(event.target.dataset.slugify);
	                _this.makeRequest('/admin/index/slugify', _this.sourseInput.value);
	            });
	        }
	    };
	    Slugify.prototype.makeRequest = function (url, value) {
	        var _this = this;
	        if (!this.httpRequest) {
	            alert('Giving up :( Cannot create an XMLHTTP instance');
	            return false;
	        }
	        this.httpRequest.onreadystatechange = function () {
	            if (_this.httpRequest.readyState === XMLHttpRequest.DONE) {
	                if (_this.httpRequest.status === 200) {
	                    _this.ajaxContent.value = JSON.parse(_this.httpRequest.responseText);
	                }
	                else {
	                    console.log('There was a problem with the request.');
	                    return;
	                }
	            }
	        };
	        this.httpRequest.open('POST', url, true);
	        this.httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        this.httpRequest.send('slugify=' + encodeURIComponent(value));
	    };
	    return Slugify;
	}());
	exports.__esModule = true;
	exports["default"] = Slugify;


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
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _ButtonComponent = __webpack_require__(359);
	
	var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);
	
	var _ModalComponent = __webpack_require__(360);
	
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

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var axios = __webpack_require__(332);
	
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

/***/ 359:
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
	
	var _Glyphicon = __webpack_require__(327);
	
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

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModalFormsEdit = __webpack_require__(361);
	
	var _ModalFormsEdit2 = _interopRequireDefault(_ModalFormsEdit);
	
	var _ModalFormSeo = __webpack_require__(496);
	
	var _ModalFormSeo2 = _interopRequireDefault(_ModalFormSeo);
	
	var _ModalFormsAdd = __webpack_require__(497);
	
	var _ModalFormsAdd2 = _interopRequireDefault(_ModalFormsAdd);
	
	var _ModalFormDelete = __webpack_require__(501);
	
	var _ModalFormDelete2 = _interopRequireDefault(_ModalFormDelete);
	
	var _ModalFormRecover = __webpack_require__(502);
	
	var _ModalFormRecover2 = _interopRequireDefault(_ModalFormRecover);
	
	var _ModalFormDisabled = __webpack_require__(503);
	
	var _ModalFormDisabled2 = _interopRequireDefault(_ModalFormDisabled);
	
	var _ModalFormEnable = __webpack_require__(504);
	
	var _ModalFormEnable2 = _interopRequireDefault(_ModalFormEnable);
	
	var _ModalFormIssue = __webpack_require__(277);
	
	var _ModalFormIssue2 = _interopRequireDefault(_ModalFormIssue);
	
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

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _DefaultFormEdit = __webpack_require__(362);
	
	var _DefaultFormEdit2 = _interopRequireDefault(_DefaultFormEdit);
	
	var _PagesFormEdit = __webpack_require__(465);
	
	var _PagesFormEdit2 = _interopRequireDefault(_PagesFormEdit);
	
	var _CategoriesFormEdit = __webpack_require__(466);
	
	var _CategoriesFormEdit2 = _interopRequireDefault(_CategoriesFormEdit);
	
	var _ProductsFormEdit = __webpack_require__(472);
	
	var _ProductsFormEdit2 = _interopRequireDefault(_ProductsFormEdit);
	
	var _MediaFormEdit = __webpack_require__(493);
	
	var _MediaFormEdit2 = _interopRequireDefault(_MediaFormEdit);
	
	var _MediaCategoriesFormEdit = __webpack_require__(495);
	
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

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(366);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(464);
	
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

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(370);
	
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

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var axios = __webpack_require__(332);
	
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

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ImagesUpload = __webpack_require__(369);
	
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

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(366);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(464);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CategoryReplaceComponent = __webpack_require__(467);
	
	var _CategoryReplaceComponent2 = _interopRequireDefault(_CategoryReplaceComponent);
	
	var _CategoryReplaceTest = __webpack_require__(470);
	
	var _CategoryReplaceTest2 = _interopRequireDefault(_CategoryReplaceTest);
	
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
				showReplace: false,
				categoryInfo: ''
			};
			return _this;
		}
	
		_createClass(CategoriesFormEdit, [{
			key: "showReplace",
			value: function showReplace() {
				this.setState({
					showReplace: true
				});
			}
		}, {
			key: "hideReplace",
			value: function hideReplace() {
				this.setState({
					showReplace: false
				});
			}
		}, {
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
										_react2.default.createElement(
											_Button2.default,
											{ bsStyle: "primary", onClick: this.showReplace.bind(this) },
											_react2.default.createElement(_Glyphicon2.default, { glyph: "refresh" })
										)
									),
									_react2.default.createElement(_FormControl2.default, {
										type: "text",
										value: this.state.data.breadcrumbs,
										readOnly: true
									})
								),
								_react2.default.createElement(_CategoryReplaceTest2.default, {
									show: this.state.showReplace,
									hide: this.hideReplace.bind(this),
									selectId: this.props.data.parentId
								})
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

/***/ 467:
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
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _ListGroup = __webpack_require__(412);
	
	var _ListGroup2 = _interopRequireDefault(_ListGroup);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CatalogParentCategoryReplaceItemList = __webpack_require__(468);
	
	var _CatalogParentCategoryReplaceItemList2 = _interopRequireDefault(_CatalogParentCategoryReplaceItemList);
	
	var _CategoryRaplaceList = __webpack_require__(469);
	
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

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var PropTypes = React.PropTypes;
	
	var Glyphicon = __webpack_require__(327);
	var ListGroupItem = __webpack_require__(413);
	var Row = __webpack_require__(364);
	var Col = __webpack_require__(365);
	
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

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ListGroupItem = __webpack_require__(413);
	
	var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Badge = __webpack_require__(374);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Glyphicon = __webpack_require__(327);
	
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

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ListGroup = __webpack_require__(412);
	
	var _ListGroup2 = _interopRequireDefault(_ListGroup);
	
	var _ListGroupItem = __webpack_require__(413);
	
	var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CategoryReplaceListItem = __webpack_require__(471);
	
	var _CategoryReplaceListItem2 = _interopRequireDefault(_CategoryReplaceListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoryReplaceTest = function (_React$Component) {
		_inherits(CategoryReplaceTest, _React$Component);
	
		function CategoryReplaceTest(props) {
			_classCallCheck(this, CategoryReplaceTest);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryReplaceTest).call(this, props));
	
			_this.state = {
				selectId: '',
				parentId: '',
				parentCategoryInfo: '',
				categoryList: []
			};
			return _this;
		}
	
		_createClass(CategoryReplaceTest, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
			}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				console.log('LIST CATEGORY', this.props.selectId);
	
				_getDataHelper2.default.getCategoryInfo(this.props.selectId).then(function (categoryInfo) {
					this.setState({
						parentId: this.props.selectId,
						parentCategoryInfo: categoryInfo
					});
				}.bind(this));
	
				_getDataHelper2.default.getCurrentGategoryList(this.props.selectId).then(function (categoryList) {
					this.setState({
						categoryList: categoryList
					});
				}.bind(this));
			}
		}, {
			key: "selectCategory",
			value: function selectCategory(id) {
				console.log('SELECT CATEGORY', id);
				this.setState({
					selectId: id
				});
			}
		}, {
			key: "replaceCategory",
			value: function replaceCategory(id) {
				console.log('LIST CATEGORY', id);
	
				_getDataHelper2.default.getCategoryInfo(id).then(function (categoryInfo) {
					this.setState({
						parentId: id,
						parentCategoryInfo: categoryInfo
					});
				}.bind(this));
	
				_getDataHelper2.default.getSubGategoryList(id).then(function (categoryList) {
					this.setState({
						categoryList: categoryList
					});
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var headerListGroup = function headerListGroup() {
					switch (false) {
						case _this2.state.parentId != 0 && _this2.state.parentCategoryInfo.parentId != 0:
							return 'Каталог';
							break;
						default:
							return '... ' + _this2.state.parentCategoryInfo.name;
					}
				};
	
				var listgroupInstance = this.state.categoryList.map(function (category) {
					return _react2.default.createElement(
						_CategoryReplaceListItem2.default,
						{
							key: category.id,
							id: category.id,
							select: _this2.selectCategory.bind(_this2),
							replace: _this2.replaceCategory.bind(_this2),
							active: category.id == _this2.state.parentId
						},
						category.name
					);
				});
	
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
							null,
							"Выбор категории"
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							_ListGroup2.default,
							{ componentClass: "ul" },
							_react2.default.createElement(
								_CategoryReplaceListItem2.default,
								{
									select: this.selectCategory.bind(this),
									replace: this.replaceCategory.bind(this),
									levelUp: this.state.parentId != 0 && this.state.parentCategoryInfo.parentId != 0,
									active: this.state.parentId == 0,
									id: this.state.parentCategoryInfo.parentId },
								headerListGroup()
							),
							listgroupInstance
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
							{ bsStyle: "primary", onClick: this.hideModal.bind(this) },
							"Отправить"
						)
					)
				);
			}
		}]);
	
		return CategoryReplaceTest;
	}(_react2.default.Component);
	
	exports.default = CategoryReplaceTest;

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
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Badge = __webpack_require__(374);
	
	var _Badge2 = _interopRequireDefault(_Badge);
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CategoryReplaceListItem = function (_React$Component) {
		_inherits(CategoryReplaceListItem, _React$Component);
	
		function CategoryReplaceListItem() {
			_classCallCheck(this, CategoryReplaceListItem);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryReplaceListItem).apply(this, arguments));
		}
	
		_createClass(CategoryReplaceListItem, [{
			key: "radioInstance",
			value: function radioInstance() {
				var _this2 = this;
	
				switch (true) {
					case this.props.active:
						return _react2.default.createElement(_Glyphicon2.default, { glyph: "ok" });
						break;
					case this.props.levelUp:
						return _react2.default.createElement(_Glyphicon2.default, { glyph: "level-up" });
						break;
					default:
						return _react2.default.createElement("input", {
							type: "radio",
							name: "catalogCategory",
							defaultChecked: "",
							onClick: function onClick() {
								_this2.props.select(_this2.props.id);
							} });
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;
	
				return _react2.default.createElement(
					"li",
					{
						id: this.props.id,
						className: this.props.active ? 'list-group-item active' : 'list-group-item' },
					_react2.default.createElement(
						_Row2.default,
						null,
						_react2.default.createElement(
							_Col2.default,
							{ xs: 1 },
							this.radioInstance()
						),
						_react2.default.createElement(
							_Col2.default,
							{ xs: 11, onClick: function onClick() {
									_this3.props.replace(_this3.props.id);
								}, className: "text-hover" },
							_react2.default.createElement(_Glyphicon2.default, { glyph: "folder-close", className: "mlr1" }),
							this.props.children
						)
					)
				);
			}
		}]);
	
		return CategoryReplaceListItem;
	}(_react2.default.Component);
	
	exports.default = CategoryReplaceListItem;

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(366);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _HelpBlock = __webpack_require__(408);
	
	var _HelpBlock2 = _interopRequireDefault(_HelpBlock);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _slugifyHelper = __webpack_require__(464);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _CategoryReplaceComponent = __webpack_require__(467);
	
	var _CategoryReplaceComponent2 = _interopRequireDefault(_CategoryReplaceComponent);
	
	var _ProductPropertyEditButton = __webpack_require__(473);
	
	var _ProductPropertyEditButton2 = _interopRequireDefault(_ProductPropertyEditButton);
	
	var _ProductModificationEditButton = __webpack_require__(478);
	
	var _ProductModificationEditButton2 = _interopRequireDefault(_ProductModificationEditButton);
	
	var _ProductModificationPropertyEditButton = __webpack_require__(488);
	
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

/***/ 473:
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
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _productPropertyHelper = __webpack_require__(474);
	
	var _productPropertyHelper2 = _interopRequireDefault(_productPropertyHelper);
	
	var _ProductProperties = __webpack_require__(475);
	
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

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(355);
	var axios = __webpack_require__(332);
	
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
	
	var _Table = __webpack_require__(458);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ProductPropertyComponent = __webpack_require__(476);
	
	var _ProductPropertyComponent2 = _interopRequireDefault(_ProductPropertyComponent);
	
	var _NewProductProperty = __webpack_require__(477);
	
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

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(327);
	
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

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
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

/***/ 478:
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
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ProductModifications = __webpack_require__(479);
	
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

/***/ 479:
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
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _productModificationHelper = __webpack_require__(480);
	
	var _productModificationHelper2 = _interopRequireDefault(_productModificationHelper);
	
	var _ModificationsTable = __webpack_require__(481);
	
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

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(355);
	var axios = __webpack_require__(332);
	
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

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(458);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _productModificationHelper = __webpack_require__(480);
	
	var _productModificationHelper2 = _interopRequireDefault(_productModificationHelper);
	
	var _ModificationHeadTable = __webpack_require__(482);
	
	var _ModificationHeadTable2 = _interopRequireDefault(_ModificationHeadTable);
	
	var _ModificationBodyTableRow = __webpack_require__(484);
	
	var _ModificationBodyTableRow2 = _interopRequireDefault(_ModificationBodyTableRow);
	
	var _ModificationTableNewItem = __webpack_require__(486);
	
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

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModificationTableColumn = __webpack_require__(483);
	
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

/***/ 483:
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

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ModificationBodyTableRowTd = __webpack_require__(485);
	
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

/***/ 485:
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

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ModificationTableNewValue = __webpack_require__(487);
	
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

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
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

/***/ 488:
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
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ModificationProperties = __webpack_require__(489);
	
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

/***/ 489:
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
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _productModificationHelper = __webpack_require__(480);
	
	var _productModificationHelper2 = _interopRequireDefault(_productModificationHelper);
	
	var _ModificationPropertiesTable = __webpack_require__(490);
	
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

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(458);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ModificationPropertyTableRow = __webpack_require__(491);
	
	var _ModificationPropertyTableRow2 = _interopRequireDefault(_ModificationPropertyTableRow);
	
	var _ModificationNewProperty = __webpack_require__(492);
	
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

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
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

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
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

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(366);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _reactBootstrapDatePicker = __webpack_require__(494);
	
	var _reactBootstrapDatePicker2 = _interopRequireDefault(_reactBootstrapDatePicker);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(464);
	
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
				title: props.data.name,
				path: props.data.path,
				description: props.data.sContent,
				contentMarkdown: props.data.contentMarkdown,
				contentHtml: props.data.contentHtml,
				sorting: props.data.sorting,
				uploadPath: !props.data.uploadPath ? '' : props.data.uploadPath,
				dateTime: props.data.timestamp,
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
									name: "dataPage[name]",
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
									name: "dataPage[sContent]",
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
										"Дата статьи"
									),
									_react2.default.createElement(_reactBootstrapDatePicker2.default, {
										value: this.state.dateTime,
										name: "dataPage[timestamp]",
										onChange: this.handleChange('dateTime').bind(this),
										calendarPlacement: "top"
									})
								),
								_react2.default.createElement(
									_FormGroup2.default,
									null,
									_react2.default.createElement(
										_ControlLabel2.default,
										{ className: "mlr2" },
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
	
		return MediaFormEdit;
	}(_react2.default.Component);
	
	exports.default = MediaFormEdit;

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
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(366);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Glyphicon = __webpack_require__(327);
	
	var _Glyphicon2 = _interopRequireDefault(_Glyphicon);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(464);
	
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

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
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

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _DefaultFormAdd = __webpack_require__(498);
	
	var _DefaultFormAdd2 = _interopRequireDefault(_DefaultFormAdd);
	
	var _CategoriesFormAdd = __webpack_require__(499);
	
	var _CategoriesFormAdd2 = _interopRequireDefault(_CategoriesFormAdd);
	
	var _ProductFormAdd = __webpack_require__(500);
	
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

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(464);
	
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

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _InputGroup = __webpack_require__(366);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(464);
	
	var _slugifyHelper2 = _interopRequireDefault(_slugifyHelper);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _CategoryReplaceComponent = __webpack_require__(467);
	
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

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(363);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _Row = __webpack_require__(364);
	
	var _Row2 = _interopRequireDefault(_Row);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _HelpBlock = __webpack_require__(408);
	
	var _HelpBlock2 = _interopRequireDefault(_HelpBlock);
	
	var _ImagesUpload = __webpack_require__(369);
	
	var _ImagesUpload2 = _interopRequireDefault(_ImagesUpload);
	
	var _slugifyHelper = __webpack_require__(464);
	
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

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Alert = __webpack_require__(373);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Glyphicon = __webpack_require__(327);
	
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

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
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

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Alert = __webpack_require__(373);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Glyphicon = __webpack_require__(327);
	
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

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
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

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _ButtonComponent = __webpack_require__(359);
	
	var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);
	
	var _ModalComponent = __webpack_require__(360);
	
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

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getDataHelper = __webpack_require__(358);
	
	var _getDataHelper2 = _interopRequireDefault(_getDataHelper);
	
	var _ButtonComponent = __webpack_require__(359);
	
	var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);
	
	var _ForumActions = __webpack_require__(507);
	
	var _ForumActions2 = _interopRequireDefault(_ForumActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ForumButtonComponent = function (_React$Component) {
		_inherits(ForumButtonComponent, _React$Component);
	
		function ForumButtonComponent(props) {
			_classCallCheck(this, ForumButtonComponent);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ForumButtonComponent).call(this, props));
	
			_this.state = {
				show: false,
				action: '',
				title: '',
				data: ''
			};
			return _this;
		}
	
		_createClass(ForumButtonComponent, [{
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
				_getDataHelper2.default.getDataInfo('forum', this.props.dataItem.id).then(function (dataInfo) {
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
	
				var Buttons = [{
					icon: "share",
					enable: this.props.dataItem.question,
					action: "reply",
					title: "Ответ на сообщение",
					style: "success"
				}, {
					icon: "edit",
					enable: this.props.dataItem.replace,
					action: "edit",
					title: "Редактировать сообщение",
					style: "default"
				}, {
					icon: "trash",
					enable: !this.props.dataItem.delete,
					action: "delete",
					title: "Удалить сообщение",
					style: this.props.dataItem.question ? "danger" : "default"
				}].map(function (button, i) {
					return button.enable && _react2.default.createElement(_ButtonComponent2.default, {
						key: i,
						bsStyle: button.style,
						onClick: _this2.handlerClickButton.bind(_this2),
						action: button.action,
						icon: button.icon,
						title: button.title });
				});
	
				return _react2.default.createElement(
					"div",
					{ className: "btn-group btn-group-sm" },
					Buttons,
					_react2.default.createElement(_ForumActions2.default, {
						show: this.state.show,
						hide: this.hideModal.bind(this),
						data: this.state.data,
						title: this.state.title,
						action: this.state.action
					})
				);
			}
		}]);
	
		return ForumButtonComponent;
	}(_react2.default.Component);
	
	exports.default = ForumButtonComponent;

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ForumReplace = __webpack_require__(508);
	
	var _ForumReplace2 = _interopRequireDefault(_ForumReplace);
	
	var _ForumEdit = __webpack_require__(509);
	
	var _ForumEdit2 = _interopRequireDefault(_ForumEdit);
	
	var _ForumDelete = __webpack_require__(510);
	
	var _ForumDelete2 = _interopRequireDefault(_ForumDelete);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ForumActions = function (_React$Component) {
		_inherits(ForumActions, _React$Component);
	
		function ForumActions() {
			_classCallCheck(this, ForumActions);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ForumActions).apply(this, arguments));
		}
	
		_createClass(ForumActions, [{
			key: "render",
			value: function render() {
				var _this2 = this;
	
				var forumAction = function forumAction() {
					switch (_this2.props.action) {
						case "edit":
							return _react2.default.createElement(_ForumEdit2.default, _this2.props);
							break;
						case "delete":
							return _react2.default.createElement(_ForumDelete2.default, _this2.props);
							break;
						case "reply":
							return _react2.default.createElement(_ForumReplace2.default, _this2.props);
							break;
						default:
							return false;
					}
				};
	
				return forumAction();
			}
		}]);
	
		return ForumActions;
	}(_react2.default.Component);
	
	exports.default = ForumActions;

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ForumReplace = function (_React$Component) {
		_inherits(ForumReplace, _React$Component);
	
		function ForumReplace(props) {
			_classCallCheck(this, ForumReplace);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ForumReplace).call(this, props));
	
			_this.state = {
				replace: ''
			};
			return _this;
		}
	
		_createClass(ForumReplace, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
				this.setState({
					replace: ''
				});
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
						onHide: this.hideModal.bind(this)
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							this.props.title
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/forum/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement(
								"div",
								{ className: "panel-body pt0" },
								_react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.data.content } }),
								_react2.default.createElement(
									"div",
									{ className: "text-right" },
									_react2.default.createElement(
										"strong",
										null,
										this.props.data.author
									),
									_react2.default.createElement(
										"span",
										null,
										" - "
									),
									_react2.default.createElement(
										"em",
										null,
										this.props.data.timestamp
									)
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Ваш ответ",
									name: "contentMarkdown",
									value: this.state.replace,
									onChange: this.handleChange('replace').bind(this),
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
							{ bsStyle: "success", form: "formModal", type: "submit", disabled: !this.state.replace },
							"Ответить"
						)
					)
				);
			}
		}]);
	
		return ForumReplace;
	}(_react2.default.Component);
	
	exports.default = ForumReplace;

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Alpha-Hydro.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @link http://www.alpha-hydro.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @copyright Copyright (c) 2016, Alpha-Hydro
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ForumEdit = function (_React$Component) {
		_inherits(ForumEdit, _React$Component);
	
		function ForumEdit(props) {
			_classCallCheck(this, ForumEdit);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ForumEdit).call(this, props));
	
			_this.state = {
				replace: _this.props.data.contentMarkdown ? _this.props.data.contentMarkdown : _this.props.data.content
			};
			return _this;
		}
	
		_createClass(ForumEdit, [{
			key: "hideModal",
			value: function hideModal() {
				this.props.hide();
				this.setState({
					replace: this.props.data.contentMarkdown ? this.props.data.contentMarkdown : this.props.data.content
				});
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
						onHide: this.hideModal.bind(this)
					},
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							{ id: "contained-modal-title-lg", className: "h3" },
							this.props.title
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/forum/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement(
								"div",
								{ className: "panel-body pt0" },
								_react2.default.createElement(
									"strong",
									null,
									this.props.data.author
								),
								" - ",
								_react2.default.createElement(
									"em",
									null,
									this.props.data.timestamp
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								null,
								_react2.default.createElement(_FormControl2.default, {
									componentClass: "textarea",
									placeholder: "Ваш ответ",
									name: "contentMarkdown",
									value: this.state.replace,
									onChange: this.handleChange('replace').bind(this),
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
							{ bsStyle: "success", form: "formModal", type: "submit", disabled: !this.state.replace },
							"Сохранить"
						)
					)
				);
			}
		}]);
	
		return ForumEdit;
	}(_react2.default.Component);
	
	exports.default = ForumEdit;

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
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
	
	var ForumDelete = function (_React$Component) {
		_inherits(ForumDelete, _React$Component);
	
		function ForumDelete() {
			_classCallCheck(this, ForumDelete);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ForumDelete).apply(this, arguments));
		}
	
		_createClass(ForumDelete, [{
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
							this.props.title
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							"form",
							{
								action: '/admin/forum/' + this.props.action + '/' + this.props.data.id,
								id: "formModal",
								method: "post",
								encType: "multipart/form-data"
							},
							_react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.data.content } }),
							_react2.default.createElement(
								"div",
								{ className: "text-right" },
								_react2.default.createElement(
									"strong",
									null,
									this.props.data.author
								),
								" - ",
								_react2.default.createElement(
									"em",
									null,
									this.props.data.timestamp
								)
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
							{ bsStyle: "danger", form: "formModal", type: "submit" },
							"Удалить"
						)
					)
				);
			}
		}]);
	
		return ForumDelete;
	}(_react2.default.Component);
	
	exports.default = ForumDelete;

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _CategoriesFormAdd = __webpack_require__(499);
	
	var _CategoriesFormAdd2 = _interopRequireDefault(_CategoriesFormAdd);
	
	var _getDataHelper = __webpack_require__(358);
	
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

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ProductFormAdd = __webpack_require__(500);
	
	var _ProductFormAdd2 = _interopRequireDefault(_ProductFormAdd);
	
	var _getDataHelper = __webpack_require__(358);
	
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

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Checkbox = __webpack_require__(382);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Table = __webpack_require__(458);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _ModificationTableColumn = __webpack_require__(483);
	
	var _ModificationTableColumn2 = _interopRequireDefault(_ModificationTableColumn);
	
	var _getDataHelper = __webpack_require__(358);
	
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

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Modal = __webpack_require__(278);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Button = __webpack_require__(263);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Form = __webpack_require__(407);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormGroup = __webpack_require__(323);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _FormControl = __webpack_require__(325);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _ControlLabel = __webpack_require__(329);
	
	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);
	
	var _Col = __webpack_require__(365);
	
	var _Col2 = _interopRequireDefault(_Col);
	
	var _Alert = __webpack_require__(373);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _authAdmin = __webpack_require__(515);
	
	var _authAdmin2 = _interopRequireDefault(_authAdmin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AdminModalAuth = function (_React$Component) {
		_inherits(AdminModalAuth, _React$Component);
	
		function AdminModalAuth(props) {
			_classCallCheck(this, AdminModalAuth);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AdminModalAuth).call(this, props));
	
			_this.state = {
				showModal: false,
				username: '',
				password: '',
				errorMessage: ''
			};
			return _this;
		}
	
		_createClass(AdminModalAuth, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _this2 = this;
	
				document.getElementById('menu-authLogin').addEventListener('click', function (ev) {
					ev.preventDefault();
					_this2.showModal();
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
	
			/*componentDidMount(){
	  	document.onkeydown = (e)=>{
	  		if(e.altKey && e.keyCode == 120){
	  			this.setState({
	  				showModal: true
	  			});
	  		}
	  	}
	  }*/
	
		}, {
			key: "showModal",
			value: function showModal() {
				this.setState({ showModal: true });
			}
		}, {
			key: "hideModal",
			value: function hideModal() {
				this.setState({ showModal: false });
			}
		}, {
			key: "sendForm",
			value: function sendForm() {
				var data = {
					"username": this.state.username,
					"password": this.state.password
				};
				_authAdmin2.default.loginAuth(data).then(function (response) {
					console.log(response);
					if (response) {
						this.hideModal();
						location.reload(true);
					} else {
						this.setState({
							errorMessage: 'Вы ввели неверное имя пользователя или неверный пароль'
						});
					}
				}.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				var alertInstance = _react2.default.createElement(
					_Alert2.default,
					{ bsStyle: "danger" },
					_react2.default.createElement(
						"strong",
						null,
						"Ошибка!"
					),
					" ",
					this.state.errorMessage,
					"."
				);
	
				return _react2.default.createElement(
					_Modal2.default,
					{ show: this.state.showModal, onHide: this.hideModal.bind(this) },
					_react2.default.createElement(
						_Modal2.default.Header,
						{ closeButton: true },
						_react2.default.createElement(
							_Modal2.default.Title,
							null,
							"Авторизация пользователя"
						)
					),
					_react2.default.createElement(
						_Modal2.default.Body,
						null,
						_react2.default.createElement(
							_Form2.default,
							{ horizontal: true },
							_react2.default.createElement(
								_FormGroup2.default,
								{ controlId: "formHorizontalEmail" },
								_react2.default.createElement(
									_Col2.default,
									{ componentClass: _ControlLabel2.default, sm: 2 },
									"Email"
								),
								_react2.default.createElement(
									_Col2.default,
									{ sm: 9 },
									_react2.default.createElement(_FormControl2.default, {
										type: "email",
										placeholder: "Email",
										name: "username",
										onChange: this.handleChange('username').bind(this)
									})
								)
							),
							_react2.default.createElement(
								_FormGroup2.default,
								{ controlId: "formHorizontalPassword" },
								_react2.default.createElement(
									_Col2.default,
									{ componentClass: _ControlLabel2.default, sm: 2 },
									"Password"
								),
								_react2.default.createElement(
									_Col2.default,
									{ sm: 9 },
									_react2.default.createElement(_FormControl2.default, {
										type: "password",
										placeholder: "Password",
										name: "password",
										onChange: this.handleChange('password').bind(this)
									})
								)
							)
						),
						this.state.errorMessage && alertInstance
					),
					_react2.default.createElement(
						_Modal2.default.Footer,
						null,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: this.hideModal.bind(this) },
							"Close"
						),
						_react2.default.createElement(
							_Button2.default,
							{ bsStyle: "success", onClick: this.sendForm.bind(this) },
							"Вход"
						)
					)
				);
			}
		}]);
	
		return AdminModalAuth;
	}(_react2.default.Component);
	
	exports.default = AdminModalAuth;

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	/*
	 * Created by Alpha-Hydro.
	 *  @link http://www.alpha-hydro.com
	 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
	 *  @copyright Copyright (c) 2016, Alpha-Hydro
	 */
	
	var helpers = {
		loginAuth: function loginAuth(data) {
			return $.ajax({
				url: "/admin/auth/login",
				type: "POST",
				data: data,
				success: function success(data) {
					return data;
				},
				error: function error(xhr, status) {
					console.log('error', status);
				}
			});
		}
	};
	module.exports = helpers;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(355)))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Jc3N1ZU1vZGFsQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtSXNzdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbFJlc3BvbnNlTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2l0SHViSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90cy9Gb3J1bUFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL1NsdWdpZnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFuZWxCdXR0b25zQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXREYXRhSGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhbmVsQnV0dG9ucy9CdXR0b25Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbEZvcm1zL0RlZmF1bHRGb3JtRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvSW1hZ2VzVXBsb2FkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zbHVnaWZ5SGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhZ2VzL1BhZ2VzRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNGb3JtRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcnlSZXBsYWNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmFwbGFjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmVwbGFjZVRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmVwbGFjZUxpc3RJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdHNGb3JtRWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Byb2R1Y3RQcm9wZXJ0eUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvTmV3UHJvZHVjdFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3Byb2R1Y3RNb2RpZmljYXRpb25IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbnNUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uSGVhZFRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZUNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Cb2R5VGFibGVSb3dUZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbk5ld1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lZGlhL01lZGlhRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVkaWEvTWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1TZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zQWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvRGVmYXVsdEZvcm1BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNGb3JtQWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdEZvcm1BZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1SZWNvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtRGlzYWJsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1FbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSXRlbUJ1dHRvbnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ydW1CdXR0b25Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZvcnVtL0ZvcnVtUmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3J1bS9Gb3J1bUVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1EZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNBZGRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0QWRkQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdFBhc3Nwb3J0UGRmLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FkbWluTW9kYWxBdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hdXRoQWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNLGFBQWEsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQW5CO0FBQ0EsZUFBYyxtQkFBUyxNQUFULENBQ2IsK0RBQXFCLE1BQU0sV0FBVyxPQUF0QyxH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QUFSLENBQVksT0FBWixFQUFxQixNQUFyQjtBQUNBO0FBVFksSUFBUCxDQUFQO0FBV0E7QUFiWSxFQUFkO0FBZUEsUUFBTyxPQUFQLEdBQWlCLE9BQWpCLEMiLCJmaWxlIjoiYmFja2VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uR3JvdXBcIjtcblxuaW1wb3J0IElzc3VlTW9kYWxDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Jc3N1ZU1vZGFsQ29tcG9uZW50XCI7XG5cbmltcG9ydCBGb3J1bUFjdGlvbnMgZnJvbSBcIi4vdHMvRm9ydW1BY3Rpb25zXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi90cy9TbHVnaWZ5XCI7XG5cbmltcG9ydCBQYW5lbEJ1dHRvbnNDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9QYW5lbEJ1dHRvbnNDb21wb25lbnRcIjtcbmltcG9ydCBJdGVtQnV0dG9uc0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0l0ZW1CdXR0b25zQ29tcG9uZW50XCI7XG5pbXBvcnQgRm9ydW1CdXR0b25zQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRm9ydW1CdXR0b25Db21wb25lbnRcIjtcbmltcG9ydCBDYXRlZ29yaWVzQWRkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNBZGRCdXR0b25cIjtcbmltcG9ydCBQcm9kdWN0QWRkQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0QWRkQnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdFByb3BlcnRpZXMvUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvblwiO1xuaW1wb3J0IFByb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL1Byb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uXCI7XG5pbXBvcnQgUHJvZHVjdFBhc3Nwb3J0UGRmIGZyb20gXCIuL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0UGFzc3BvcnRQZGZcIjtcbmltcG9ydCBBZG1pbk1vZGFsQXV0aCBmcm9tIFwiLi9jb21wb25lbnRzL0FkbWluTW9kYWxBdXRoXCI7XG5cbmNvbnN0IG1vZGFsSXNzdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxJc3N1ZScpO1xubW9kYWxJc3N1ZSAmJiBSZWFjdERPTS5yZW5kZXIoXG5cdDxJc3N1ZU1vZGFsQ29tcG9uZW50IGRhdGE9e21vZGFsSXNzdWUuZGF0YXNldH0vPixcbiBcdG1vZGFsSXNzdWVcbik7XG5cbmNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEF1dGgnKTtcbm1vZGFsQXV0aCAmJiBSZWFjdERPTS5yZW5kZXIoXG5cdDxBZG1pbk1vZGFsQXV0aC8+LCBtb2RhbEF1dGhcbik7XG5cbmxldCBmb3J1bUFjdGlvbnMgPSBGb3J1bUFjdGlvbnM7XG5cbmxldCBvbmNoYW5nZVNsdWdpZnkgPSBuZXcgU2x1Z2lmeSgnLm9uY2hhbmdlU2x1Z2lmeScpO1xub25jaGFuZ2VTbHVnaWZ5Lm9uY2hhbmdlKCk7XG5cbmxldCByZWZyZXNoU2x1Z2lmeSA9IG5ldyBTbHVnaWZ5KCcucmVmcmVzaFNsdWdpZnknKTtcbnJlZnJlc2hTbHVnaWZ5LnJlZnJlc2goKTtcblxuY29uc3QgYWRtaW5QYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZG1pbi1wYW5lbCcpO1xuYWRtaW5QYW5lbCAmJiBSZWFjdERPTS5yZW5kZXIoXG5cdDxQYW5lbEJ1dHRvbnNDb21wb25lbnQgYnNDbGFzcz1cImJ0bi1ncm91cC1sZyBidG4tZ3JvdXBcIiBkYXRhSXRlbSA9IHthZG1pblBhbmVsLmRhdGFzZXR9Lz4sXG5cdGFkbWluUGFuZWxcbik7XG5cbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQnV0dG9uc0NvbXBvbmVudCcpKXtcblx0Y29uc3QgaXRlbUJ1dHRvbnNDb21wb25lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbUJ1dHRvbnNDb21wb25lbnQnKSk7XG5cdGl0ZW1CdXR0b25zQ29tcG9uZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0UmVhY3RET00ucmVuZGVyKDxJdGVtQnV0dG9uc0NvbXBvbmVudCBkYXRhSXRlbSA9IHtpdGVtLmRhdGFzZXR9Lz4sIGl0ZW0pO1xuXHR9KTtcbn1cblxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcnVtQnV0dG9uQ29tcG9uZW50Jykpe1xuXHRjb25zdCBmb3J1bUJ1dHRvbnNDb21wb25lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ydW1CdXR0b25Db21wb25lbnQnKSk7XG5cdGZvcnVtQnV0dG9uc0NvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFJlYWN0RE9NLnJlbmRlcig8Rm9ydW1CdXR0b25zQ29tcG9uZW50IGRhdGFJdGVtID0ge2l0ZW0uZGF0YXNldH0vPiwgaXRlbSk7XG5cdH0pO1xufVxuXG5jb25zdCBjYXRlZ29yaWVzQWRkQnV0dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWVzQWRkQnV0dHRvbicpO1xuY2F0ZWdvcmllc0FkZEJ1dHR0b24gJiZcdFJlYWN0RE9NLnJlbmRlcihcblx0PENhdGVnb3JpZXNBZGRCdXR0b24gZGF0YUl0ZW0gPSB7Y2F0ZWdvcmllc0FkZEJ1dHR0b24uZGF0YXNldH0vPixcblx0Y2F0ZWdvcmllc0FkZEJ1dHR0b25cbik7XG5cbmNvbnN0IHByb2R1Y3RBZGRCdXR0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1BZGRCdXR0dG9uJyk7XG5wcm9kdWN0QWRkQnV0dHRvbiAmJiBSZWFjdERPTS5yZW5kZXIoXG5cdDxQcm9kdWN0QWRkQnV0dG9uIGRhdGFJdGVtID0ge3Byb2R1Y3RBZGRCdXR0dG9uLmRhdGFzZXR9Lz4sXG5cdHByb2R1Y3RBZGRCdXR0dG9uXG4pO1xuXG52YXIgcHJvZHVjdElkO1xuY29uc3QgcHJvZHVjdFByb3BlcnR5RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXByb3BlcnR5LWVkaXQnKTtcbmlmIChwcm9kdWN0UHJvcGVydHlFZGl0KXtcblx0cHJvZHVjdElkID0gcHJvZHVjdFByb3BlcnR5RWRpdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblx0UmVhY3RET00ucmVuZGVyKDxQcm9kdWN0UHJvcGVydHlFZGl0QnV0dG9uXG5cdFx0cm9sZSA9IHtwcm9kdWN0UHJvcGVydHlFZGl0LmdldEF0dHJpYnV0ZSgncm9sZScpfVxuXHRcdGlkID0ge3Byb2R1Y3RQcm9wZXJ0eUVkaXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyl9XG5cdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdGJzU2l6ZT1cInNtYWxsXCJcblx0XHRjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcblx0Lz4sIHByb2R1Y3RQcm9wZXJ0eUVkaXQpO1xufVxuXG5jb25zdCBwcm9kdWN0TW9kaWZpY2F0aW9uRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LW1vZGlmaWNhdGlvbi1lZGl0Jyk7XG5pZiAocHJvZHVjdE1vZGlmaWNhdGlvbkVkaXQpe1xuXHRwcm9kdWN0SWQgPSBwcm9kdWN0TW9kaWZpY2F0aW9uRWRpdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcdGJzU2l6ZT1cInNtYWxsXCI+XG5cdFx0XHQ8UHJvZHVjdE1vZGlmaWNhdGlvbkVkaXRCdXR0b25cblx0XHRcdFx0aWQgPSB7cHJvZHVjdElkfVxuXHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdHJvbGUgPSB7cHJvZHVjdFByb3BlcnR5RWRpdC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKX0vPlxuXHRcdFx0PFByb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b25cblx0XHRcdFx0aWQgPSB7cHJvZHVjdElkfVxuXHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdHJvbGUgPSB7cHJvZHVjdFByb3BlcnR5RWRpdC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKX0vPlxuXHRcdDwvQnV0dG9uR3JvdXA+XG5cdFx0LCBwcm9kdWN0TW9kaWZpY2F0aW9uRWRpdCk7XG59XG5cbmNvbnN0IHBhc3Nwb3J0UGRmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3Nwb3J0LXBkZicpO1xucGFzc3BvcnRQZGYgJiYgUmVhY3RET00ucmVuZGVyKFxuXHQ8UHJvZHVjdFBhc3Nwb3J0UGRmIGRhdGFJdGVtID0ge3Bhc3Nwb3J0UGRmLmRhdGFzZXR9Lz5cblx0LCBwYXNzcG9ydFBkZlxuKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZW5kLmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbEZvcm1Jc3N1ZSBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybUlzc3VlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKT0+e1xuXHRcdFx0aWYoZS5hbHRLZXkgJiYgZS5rZXlDb2RlID09IDExMyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHNob3dNb2RhbDogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0c2hvd01vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogZmFsc2V9KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxNb2RhbEZvcm1Jc3N1ZVxuXHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG5cdFx0XHRcdGhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSXNzdWVNb2RhbENvbXBvbmVudC5qc1xuICoqLyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFscGhhLUh5ZHJvLlxuICogIEBsaW5rIGh0dHA6Ly93d3cuYWxwaGEtaHlkcm8uY29tXG4gKiAgQGF1dGhvciBWbGFkaW1pciBNaWtoYXlsb3YgPGFkbWluQGFscGhhLWh5ZHJvLmNvbT5cbiAqICBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgQWxwaGEtSHlkcm9cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuXG5pbXBvcnQgTW9kYWxSZXNwb25zZU1lc3NhZ2UgZnJvbSBcIi4vTW9kYWxSZXNwb25zZU1lc3NhZ2VcIjtcbmltcG9ydCBnaXRIdWJIZWxwZXIgZnJvbSBcIi4uLy4uL3V0aWxzL2dpdEh1YkhlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1Jc3N1ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dXJsOiAnJyxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGJvZHk6ICcnLFxuXHRcdFx0bGFiZWw6ICcnLFxuXHRcdFx0c2hvd01lc3NhZ2U6IGZhbHNlLFxuXHRcdFx0dGV4dE1lc3NhZ2U6ICcnLFxuXHRcdFx0dGl0bGVNZXNzYWdlOiAnQWxlcnQnLFxuXHRcdFx0dHlwZU1lc3NhZ2U6ICdzdWNjZXNzJyxcblx0XHRcdHNpemVNZXNzYWdlOiAnbGcnXG5cdFx0fVxuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuXHRcdFx0dGl0bGU6ICcnLFxuXHRcdFx0Ym9keTogJydcblx0XHR9KTtcblx0fVxuXG5cdGhpZGVNZXNzYWdlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd01lc3NhZ2U6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZlxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0c2VuZElzc3VlKCl7XG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcInRpdGxlXCI6IHRoaXMuc3RhdGUudGl0bGUsXG5cdFx0XHRcImJvZHlcIjogJyMjICcgKyB0aGlzLnN0YXRlLnVybCArICdcXG5cXG4nICsgdGhpcy5zdGF0ZS5ib2R5LFxuXHRcdFx0XCJsYWJlbHNcIjogWyh0aGlzLnN0YXRlLmxhYmVsKT90aGlzLnN0YXRlLmxhYmVsOifQvtGI0LjQsdC60LAnXX07XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0Z2l0SHViSGVscGVyLm5ld0lzc3VlKGRhdGEpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhSW5mbyl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGFJbmZvKTtcblx0XHRcdFx0aWYoZGF0YUluZm8uc3RhdHVzID09IDIwMSAmJiBkYXRhSW5mby5zdGF0dXNUZXh0ID09ICdDcmVhdGVkJyl7XG5cdFx0XHRcdFx0dGhpcy5oaWRlTW9kYWwoKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHNob3dNZXNzYWdlOiB0cnVlLFxuXHRcdFx0XHRcdFx0dGl0bGVNZXNzYWdlOiAn0KHQvtC+0LHRidC10L3QuNC1ICMnICsgZGF0YUluZm8uZGF0YS5udW1iZXIgKycuJyxcblx0XHRcdFx0XHRcdHRleHRNZXNzYWdlOiAn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INC+0LEg0L7RiNC40LHQutC1INGB0L7Qt9C00LDQvdC+LiDQkdC70LDQs9C+0LTQsNGA0Y4g0LfQsCDQv9C+0LzQvtGJ0YwuINCSINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPINC+0YjQuNCx0LrQsCDQsdGD0LTQtdGCINC40YHQv9GA0LDQstC70LXQvdCwIScsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHNob3dNZXNzYWdlOiB0cnVlLFxuXHRcdFx0XHRcdFx0dHlwZU1lc3NhZ2U6ICdkYW5nZXInLFxuXHRcdFx0XHRcdFx0dGl0bGVNZXNzYWdlOiAn0J7RiNC40LHQutCwIScsXG5cdFx0XHRcdFx0XHR0ZXh0TWVzc2FnZTogJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdC+LiDQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAuINCe0LHRgNCw0YLQuNGC0LXRgdGMINC6INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGA0YMuJyxcblx0XHRcdFx0XHRcdHNpemVNZXNzYWdlOiAnc21hbGwnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdFx0b25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J3QsNC30LLQsNC90LjQtSDQvtGI0LjQsdC60Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDQvtGI0LjQsdC60LhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QotC40L8g0L7RiNC40LHQutC4PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInNlbGVjdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInNlbGVjdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdsYWJlbCcpLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPi4uLjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cItC+0YjQuNCx0LrQsFwiPtC+0YjQuNCx0LrQsDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cItC00L7RgNCw0LHQvtGC0LrQsFwiPtC00L7RgNCw0LHQvtGC0LrQsDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cImVuaGFuY2VtZW50XCI+0L/RgNC10LTQu9C+0LbQtdC90LjQtTwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInF1ZXN0aW9uXCI+0LLQvtC/0YDQvtGBPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QntC/0LjRgdCw0L3QuNC1INC+0YjQuNCx0LrQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0L7RiNC40LHQutC4XCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJib2R5XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmJvZHl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2JvZHknKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmRJc3N1ZS5iaW5kKHRoaXMpfT7QntGC0L/RgNCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PE1vZGFsUmVzcG9uc2VNZXNzYWdlXG5cdFx0XHRcdFx0c2hvd01lc3NhZ2U9e3RoaXMuc3RhdGUuc2hvd01lc3NhZ2V9XG5cdFx0XHRcdFx0aGlkZU1lc3NhZ2U9e3RoaXMuaGlkZU1lc3NhZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHR0aXRsZT17dGhpcy5zdGF0ZS50aXRsZU1lc3NhZ2V9XG5cdFx0XHRcdFx0dHlwZT17dGhpcy5zdGF0ZS50eXBlTWVzc2FnZX1cblx0XHRcdFx0XHR0ZXh0PXt0aGlzLnN0YXRlLnRleHRNZXNzYWdlfVxuXHRcdFx0XHRcdHNpemU9e3RoaXMuc3RhdGUuc2l6ZU1lc3NhZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdCk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtSXNzdWUuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFJlc3BvbnNlTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGVNZXNzYWdlKCk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8TW9kYWwgc2hvdz17dGhpcy5wcm9wcy5zaG93TWVzc2FnZX0gb25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfSBic1NpemU9e3RoaXMucHJvcHMuc2l6ZX0+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24gY2xhc3NOYW1lPXsnbWIwIGFsZXJ0IGFsZXJ0LScrdGhpcy5wcm9wcy50eXBlfT5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+e3RoaXMucHJvcHMudGl0bGV9PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMudGV4dH1cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+T0s8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdClcblx0fTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxSZXNwb25zZU1lc3NhZ2UuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxudmFyIGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxudmFyIGhlbHBlcnMgPSB7XG5cdGdldElzc3VlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL0FscGhhLUh5ZHJvL2FscGhhLWh5ZHJvLWFudGFyZXMvaXNzdWVzXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybiBcImVycm9yXCI7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRuZXdJc3N1ZTogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR2YXIgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuXHRcdFx0aGVhZGVyczogeydBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFlXeHdhR0ZJZVdSeWJ6cE9VVzQ1WmxGMlZVcFlhMm89J31cblx0XHR9KTtcblxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9BbHBoYS1IeWRyby9hbHBoYS1oeWRyby1hbnRhcmVzL2lzc3Vlc1wiLCBkYXRhKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuIFwiZXJyb3JcIjtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMvZ2l0SHViSGVscGVyLmpzXG4gKiovIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3NyYy9saWJzL2pxdWVyeS5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3NyYy9saWJzL2Jvb3RzdHJhcC5kLnRzXCIgLz5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBGb3J1bUFjdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRm9ydW1BY3Rpb25zKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNob3cgPSBmdW5jdGlvbiAodGl0bGUsIGJvZHksIGJ1dHRvbikge1xyXG4gICAgICAgICAgICB2YXIgYWN0aW9uQnV0dG9uID0gX3RoaXMubW9kYWxGb3J1bUZvcm0uZWxlbWVudHMuYWN0aW9uLCBtb2RhbEJvZHkgPSBfdGhpcy5tb2RhbEZvcnVtRm9ybS5jaGlsZHJlbi5pdGVtKCdtb2RhbEJvZHknKTtcclxuICAgICAgICAgICAgX3RoaXMubW9kYWxGb3J1bUZvcm0uYWN0aW9uID0gX3RoaXMuYWN0aW9uICsgJy8nICsgX3RoaXMuaXRlbUlkO1xyXG4gICAgICAgICAgICBfdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxMYWJlbCcpLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgICAgICAgICBtb2RhbEJvZHkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBidXR0b24uY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmlubmVyVGV4dCA9IGJ1dHRvbi50ZXh0O1xyXG4gICAgICAgICAgICAkKF90aGlzLm1vZGFsKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5idG5Hcm91cHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZ3JvdXAnKSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEZvcnVtQWRtaW4nKTtcclxuICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbExhYmVsJyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbEZvcnVtRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEZvcnVtRm9ybScpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICAgIEZvcnVtQWN0aW9ucy5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYnRuR3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGJ0bkdyb3VwKSB7XHJcbiAgICAgICAgICAgIHNlbGYuX2luaXRCdG4oYnRuR3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEZvcnVtQWN0aW9ucy5wcm90b3R5cGUuX2luaXRCdG4gPSBmdW5jdGlvbiAoYnRuR3JvdXApIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGlkR3JvdXAgPSBidG5Hcm91cC5pZCwgYnV0dG9uID0gW10uc2xpY2UuY2FsbChidG5Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSk7XHJcbiAgICAgICAgYnV0dG9uLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBldi5jdXJyZW50VGFyZ2V0LCBhY3Rpb24gPSBlbC5kYXRhc2V0LmFjdGlvbjtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2luaXRBY3Rpb24oaWRHcm91cCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRm9ydW1BY3Rpb25zLnByb3RvdHlwZS5faW5pdEFjdGlvbiA9IGZ1bmN0aW9uIChpZCwgdGhlQWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBpZDtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IHRoZUFjdGlvbjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZXBseSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXBseSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VkaXQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWRpdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEZvcnVtQWN0aW9ucy5wcm90b3R5cGUuX2RlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGUgPSAn0KPQtNCw0LvQuNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1JywgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSwgYnV0dG9uID0ge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLWRhbmdlcicsXHJcbiAgICAgICAgICAgIHRleHQ6ICfQo9C00LDQu9C40YLRjCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvZHkudGV4dENvbnRlbnQgPSAn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1ICcgKyB0aGlzLml0ZW1JZCArICchJztcclxuICAgICAgICB0aGlzLm1vZGFsU2hvdyh0aXRsZSwgYm9keSwgYnV0dG9uKTtcclxuICAgIH07XHJcbiAgICBGb3J1bUFjdGlvbnMucHJvdG90eXBlLl9yZXBseSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGl0bGUgPSAn0J7RgtCy0LXRgtC40YLRjCDQvdCwINGB0L7QvtCx0YnQtdC90LjQtScsIHF1ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJyArIHRoaXMuaXRlbUlkKS5xdWVyeVNlbGVjdG9yKCcucGFuZWwtYm9keScpLCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSwgYnV0dG9uID0ge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0ZXh0OiAn0J7RgtC/0YDQsNCy0LjRgtGMJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChxdWVzdC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIHRleHRhcmVhLm5hbWUgPSBcImNvbnRlbnRNYXJrZG93blwiO1xyXG4gICAgICAgIHRleHRhcmVhLnJvd3MgPSBcIjhcIjtcclxuICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm0tY29udHJvbCcpO1xyXG4gICAgICAgIHRleHRhcmVhLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB0ZXh0YXJlYS5vbmZvY3VzID0gdHJ1ZTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuICAgICAgICAkKHRoaXMubW9kYWwpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0ZXh0YXJlYSkuZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vZGFsU2hvdyh0aXRsZSwgYm9keSwgYnV0dG9uKTtcclxuICAgIH07XHJcbiAgICBGb3J1bUFjdGlvbnMucHJvdG90eXBlLl9lZGl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aXRsZSA9ICfQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUnLCBjb250ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcGx5JyArIHRoaXMuaXRlbUlkKS5xdWVyeVNlbGVjdG9yKCcubWFya2Rvd24tY29udGVudCcpLCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSwgYnV0dG9uID0ge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLXN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0ZXh0OiAn0KHQvtGF0YDQsNC90LjRgtGMJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGV4dGFyZWEubmFtZSA9IFwiY29udGVudE1hcmtkb3duXCI7XHJcbiAgICAgICAgdGV4dGFyZWEucm93cyA9IFwiOFwiO1xyXG4gICAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybS1jb250cm9sJyk7XHJcbiAgICAgICAgdGV4dGFyZWEucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHRleHRhcmVhLm9uZm9jdXMgPSB0cnVlO1xyXG4gICAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IGNvbnRleHQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY29udGV4dC50ZXh0Q29udGVudC50cmltKCkpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG4gICAgICAgIHRoaXMubW9kYWxTaG93KHRpdGxlLCBib2R5LCBidXR0b24pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBGb3J1bUFjdGlvbnM7XHJcbn0oKSk7XHJcbnZhciBmb3J1bUFjdGlvbnMgPSBuZXcgRm9ydW1BY3Rpb25zKCk7XHJcbm1vZHVsZS5leHBvcnRzID0gZm9ydW1BY3Rpb25zO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RzL0ZvcnVtQWN0aW9ucy50c1xuICoqIG1vZHVsZSBpZCA9IDM1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBTbHVnaWZ5ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNsdWdpZnkoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zbHVnaWZ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuaHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIH1cclxuICAgIFNsdWdpZnkucHJvdG90eXBlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuc2x1Z2lmeSkge1xyXG4gICAgICAgICAgICB0aGlzLnNsdWdpZnkub25jaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFqYXhDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2x1Z2lmeSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5tYWtlUmVxdWVzdCgnL2FkbWluL2luZGV4L3NsdWdpZnknLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTbHVnaWZ5LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuc2x1Z2lmeSkge1xyXG4gICAgICAgICAgICB0aGlzLnNsdWdpZnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zb3Vyc2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5kYXRhc2V0LnNvdXJzZSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hamF4Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5kYXRhc2V0LnNsdWdpZnkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubWFrZVJlcXVlc3QoJy9hZG1pbi9pbmRleC9zbHVnaWZ5JywgX3RoaXMuc291cnNlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2x1Z2lmeS5wcm90b3R5cGUubWFrZVJlcXVlc3QgPSBmdW5jdGlvbiAodXJsLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmh0dHBSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdHaXZpbmcgdXAgOiggQ2Fubm90IGNyZWF0ZSBhbiBYTUxIVFRQIGluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5odHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5odHRwUmVxdWVzdC5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaHR0cFJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hamF4Q29udGVudC52YWx1ZSA9IEpTT04ucGFyc2UoX3RoaXMuaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIHJlcXVlc3QuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0Lm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuaHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgIHRoaXMuaHR0cFJlcXVlc3Quc2VuZCgnc2x1Z2lmeT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNsdWdpZnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2x1Z2lmeTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90cy9TbHVnaWZ5LnRzXG4gKiogbW9kdWxlIGlkID0gMzU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tIFwiLi9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50XCI7XG5pbXBvcnQgTW9kYWxDb21wb25lbnQgZnJvbSBcIi4vTW9kYWxDb21wb25lbnRcIjtcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25Hcm91cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbEJ1dHRvbnNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5yb2xlcyA9IFsnbWFuYWdlcicsICdhZG1pbiddO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93OiBmYWxzZSxcblx0XHRcdGFjdGlvbjogJycsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRkYXRhOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG5cdH1cblxuXHRwcmVjZWRlbmNlKHJvbGUpe1xuXHRcdHJldHVybiB0aGlzLnJvbGVzLmluZGV4T2Yocm9sZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHR2YXIgY29udHJvbGxlciA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uY29udHJvbGxlcjtcblx0XHR2YXIgaWQgPSB0aGlzLnByb3BzLmRhdGFJdGVtLmlkO1xuXHRcdGRhdGFIZWxwZXJzLmdldERhdGFJbmZvKGNvbnRyb2xsZXIsIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhSW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRoYW5kbGVyQ2xpY2tCdXR0b24oYWN0aW9uLCB0aXRsZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3Rpb246IGFjdGlvbixcblx0XHRcdHRpdGxlOiB0aXRsZSxcblx0XHRcdHNob3c6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBic1N0eWxlID0gKHRoaXMucHJvcHMuYnNzdHlsZSk/dGhpcy5wcm9wcy5ic3N0eWxlOidsaW5rJztcblx0XHRjb25zdCBCdXR0b25zID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcInBlbmNpbFwiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJlZGl0XCIsXG5cdFx0XHRcdHJvbGU6IFwibWFuYWdlclwiLFxuXHRcdFx0XHR0aXRsZTpcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwidGFnc1wiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJzZW9cIixcblx0XHRcdFx0cm9sZTogXCJhZG1pblwiLFxuXHRcdFx0XHR0aXRsZTpcItCc0LXRgtCwINGC0LXQs9C4XCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwiY29tbWVudFwiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJpc3N1ZVwiLFxuXHRcdFx0XHRyb2xlOiBcIm1hbmFnZXJcIixcblx0XHRcdFx0dGl0bGU6XCLQodC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LVcIlxuXHRcdFx0fVxuXHRcdF0ubWFwKChidXR0b24sIGkpID0+XG5cdFx0XHRidXR0b24uZW5hYmxlICYmIDxCdXR0b25Db21wb25lbnRcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRic1N0eWxlPXtic1N0eWxlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZXJDbGlja0J1dHRvbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRhY3Rpb249e2J1dHRvbi5hY3Rpb259XG5cdFx0XHRcdGljb249e2J1dHRvbi5pY29ufVxuXHRcdFx0XHR0aXRsZT17YnV0dG9uLnRpdGxlfVxuXHRcdFx0Lz5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxCdXR0b25Hcm91cCBic0NsYXNzPXt0aGlzLnByb3BzLmJzQ2xhc3N9PlxuXHRcdFx0XHRcdHtCdXR0b25zfVxuXHRcdFx0XHQ8L0J1dHRvbkdyb3VwPlxuXHRcdFx0XHQ8TW9kYWxDb21wb25lbnRcblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3d9XG5cdFx0XHRcdFx0aGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0dGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0YWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cblx0XHRcdFx0XHRrZXlib2FyZD17ZmFsc2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9QYW5lbEJ1dHRvbnNDb21wb25lbnQuanNcbiAqKi8iLCJ2YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgaGVscGVycyA9IHtcblx0Z2V0Q2F0ZWdvcnlJbmZvOiBmdW5jdGlvbihpZCl7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChcIi9hcGkvY2F0ZWdvcmllcy9nZXQvXCIgKyBpZCArIFwiL1wiKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdFxuXHRnZXRDYXRlZ29yeVByb2R1Y3Q6IGZ1bmN0aW9uIChpZCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vcHJvZHVjdHMvY2F0ZWdvcnkvP2lkPVwiICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRDYXRlZ29yeVByb2R1Y3RQcm9wZXJ0aWVzOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FkbWluL3Byb2R1Y3RzL3Byb3BlcnR5Lz9pZD1cIiArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uOiBmdW5jdGlvbiAoaWQpIHtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9wcm9kdWN0cy9tb2RpZmljYXRpb25zLz9pZD1cIiArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0Q3VycmVudEdhdGVnb3J5TGlzdDogZnVuY3Rpb24oaWQpe1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYXBpL2NhdGVnb3JpZXMvbGlzdC9cIiArIGlkICsgXCIvXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXRTdWJHYXRlZ29yeUxpc3Q6IGZ1bmN0aW9uKGlkKXtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KFwiL2FwaS9jYXRlZ29yaWVzL2xpc3QvXCIgKyBpZCArIFwiLz9jaGlsZHJlbj10cnVlXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fSxcblxuXHRnZXREYXRhSW5mbzogZnVuY3Rpb24oY29udHJvbGxlciwgaWQpIHtcblx0XHR2YXIgdXJsID0gXCIvYWRtaW4vXCIrY29udHJvbGxlcitcIi9qc29uLz9pZD1cIjtcblx0XHRyZXR1cm4gYXhpb3MuZ2V0KHVybCArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH0sXG5cblx0Z2V0UGFnZUluZm86IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBheGlvcy5nZXQod2luZG93LmxvY2F0aW9uLmhyZWYgKyBcIj9qc29uXCIpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWxzL2dldERhdGFIZWxwZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XHJcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdGhhbmRsZXJDbGljayhlKXtcclxuXHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLmFjdGlvbiwgdGhpcy5wcm9wcy50aXRsZSk7XHJcblx0fVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcblx0XHRcdFx0PEJ1dHRvbiB7Li4udGhpcy5wcm9wc30gb25DbGljaz17dGhpcy5oYW5kbGVyQ2xpY2suYmluZCh0aGlzKX0+XHJcblx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPXt0aGlzLnByb3BzLmljb259IC8+XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUGFuZWxCdXR0b25zL0J1dHRvbkNvbXBvbmVudC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsRm9ybXNFZGl0IGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3Jtc0VkaXRcIjtcbmltcG9ydCBNb2RhbEZvcm1TZW8gZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1TZW9cIjtcbmltcG9ydCBNb2RhbEZvcm1zQWRkIGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3Jtc0FkZFwiO1xuaW1wb3J0IE1vZGFsRm9ybURlbGV0ZSBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybURlbGV0ZVwiO1xuaW1wb3J0IE1vZGFsRm9ybVJlY292ZXIgZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1SZWNvdmVyXCI7XG5pbXBvcnQgTW9kYWxGb3JtRGlzYWJsZWQgZnJvbSBcIi4vTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EaXNhYmxlZFwiO1xuaW1wb3J0IE1vZGFsRm9ybUVuYWJsZSBmcm9tIFwiLi9Nb2RhbEZvcm1zL01vZGFsRm9ybUVuYWJsZVwiO1xuaW1wb3J0IE1vZGFsRm9ybUlzc3VlIGZyb20gXCIuL01vZGFsRm9ybXMvTW9kYWxGb3JtSXNzdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IG1vZGFsRm9ybSA9ICgpID0+IHtcblx0XHRcdHN3aXRjaCAodGhpcy5wcm9wcy5hY3Rpb24pIHtcblx0XHRcdFx0Y2FzZSBcImVkaXRcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybXNFZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwic2VvXCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1TZW8gey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhZGRcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybXNBZGQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWxldGVcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybURlbGV0ZSB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlY292ZXJcIjpcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGFsRm9ybVJlY292ZXIgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNhYmxlZFwiOlxuXHRcdFx0XHRcdHJldHVybiA8TW9kYWxGb3JtRGlzYWJsZWQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJlbmFibGVkXCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RhbEZvcm1FbmFibGUgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJpc3N1ZVwiOlxuXHRcdFx0XHRcdHJldHVybiA8TW9kYWxGb3JtSXNzdWUgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIG1vZGFsRm9ybSgpO1xuXG5cdH1cbn07XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxDb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBEZWZhdWx0Rm9ybUVkaXQgZnJvbSBcIi4vRGVmYXVsdEZvcm1FZGl0XCI7XG5pbXBvcnQgUGFnZXNGb3JtRWRpdCBmcm9tIFwiLi8uLi9QYWdlcy9QYWdlc0Zvcm1FZGl0XCI7XG5pbXBvcnQgQ2F0ZWdvcmllc0Zvcm1FZGl0IGZyb20gXCIuLy4uL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzRm9ybUVkaXRcIjtcbmltcG9ydCBQcm9kdWN0c0Zvcm1FZGl0IGZyb20gXCIuLy4uL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdHNGb3JtRWRpdFwiO1xuaW1wb3J0IE1lZGlhRm9ybUVkaXQgZnJvbSBcIi4vLi4vTWVkaWEvTWVkaWFGb3JtRWRpdFwiO1xuaW1wb3J0IE1lZGlhQ2F0ZWdvcmllc0Zvcm1FZGl0IGZyb20gXCIuLy4uL01lZGlhL01lZGlhQ2F0ZWdvcmllc0Zvcm1FZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybXNFZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpXG5cdH1cblxuXHRzZWxlY3RFZGl0SW5wdXRzKCl7XG5cdFx0c3dpdGNoICh0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcil7XG5cdFx0XHRjYXNlIFwicGFnZXNcIjogcmV0dXJuIDxQYWdlc0Zvcm1FZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0Y2FzZSBcImNhdGVnb3JpZXNcIjogcmV0dXJuIDxDYXRlZ29yaWVzRm9ybUVkaXQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRjYXNlIFwicHJvZHVjdHNcIjogcmV0dXJuIDxQcm9kdWN0c0Zvcm1FZGl0IHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0Y2FzZSBcIm1lZGlhXCI6IHJldHVybiA8TWVkaWFGb3JtRWRpdCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdGNhc2UgXCJtZWRpYS1jYXRlZ29yaWVzXCI6IHJldHVybiA8TWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gPERlZmF1bHRGb3JtRWRpdCB7Li4udGhpcy5wcm9wc30vPjtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHNob3c9e3RoaXMucHJvcHMuc2hvd31cblx0XHRcdFx0b25IaWRlPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJ3MTAwXCJcblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0eyghdGhpcy5wcm9wcy5kYXRhLnRpdGxlKT90aGlzLnByb3BzLmRhdGEubmFtZTp0aGlzLnByb3BzLmRhdGEudGl0bGV9XG5cdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluLycrdGhpcy5wcm9wcy5kYXRhLmNvbnRyb2xsZXIrJy8nK3RoaXMucHJvcHMuYWN0aW9uKycvJyt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRcdGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7dGhpcy5zZWxlY3RFZGl0SW5wdXRzKCl9XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRGb3JtRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGl0bGUgOiAoIXByb3BzLmRhdGEudGl0bGUpP3Byb3BzLmRhdGEubmFtZTpwcm9wcy5kYXRhLnRpdGxlLFxuXHRcdFx0cGF0aDogcHJvcHMuZGF0YS5wYXRoLFxuXHRcdFx0ZGVzY3JpcHRpb246IHByb3BzLmRhdGEuZGVzY3JpcHRpb24sXG5cdFx0XHRjb250ZW50TWFya2Rvd246IHByb3BzLmRhdGEuY29udGVudE1hcmtkb3duLFxuXHRcdFx0Y29udGVudEh0bWw6IHByb3BzLmRhdGEuY29udGVudEh0bWwsXG5cdFx0XHRzb3J0aW5nOiBwcm9wcy5kYXRhLnNvcnRpbmcsXG5cdFx0XHR1cGxvYWRQYXRoOiAoIXByb3BzLmRhdGEudXBsb2FkUGF0aCk/Jyc6cHJvcHMuZGF0YS51cGxvYWRQYXRoLFxuXHRcdFx0aW1hZ2U6ICghcHJvcHMuZGF0YS5pbWFnZSlcblx0XHRcdFx0P1wiL2ZpbGVzL2ltYWdlcy9wcm9kdWN0LzIwMTItMDUtMjJfZm90b19udi5qcGdcIlxuXHRcdFx0XHQ6cHJvcHMuZGF0YS5pbWFnZVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdGdlbmVyYXRlUGF0aEZyb21UaXRsZSgpe1xuXHRcdHZhciB0aXRsZSA9IHRoaXMuc3RhdGUudGl0bGU7XG5cdFx0U2x1Z2lmeS5nZXRTbHVnaWZ5KHRpdGxlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHBhdGgpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7cGF0aDogcGF0aH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGltZ1NyYyA9IHRoaXMuc3RhdGUudXBsb2FkUGF0aCArIHRoaXMuc3RhdGUuaW1hZ2U7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgZmx1aWQ9e3RydWV9PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17aW1nU3JjfS8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBtZD17OX0+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCX0LDQs9C+0LvQvtCy0L7QujwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVt0aXRsZV1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndGl0bGUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+VXJsPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUGF0aEZyb21UaXRsZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInJlZnJlc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVybFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdwYXRoJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbY29udGVudE1hcmtkb3duXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFQYWdlW2NvbnRlbnRIdG1sXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudEhUTUx9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvR3JpZD5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvRGVmYXVsdEZvcm1FZGl0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtJbWFnZSwgQnV0dG9uR3JvdXAsIEJ1dHRvbiwgR2x5cGhpY29ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1VwbG9hZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbWFnZTogcHJvcHMuaW1hZ2UsXG5cdFx0XHRkZWxldGU6IHByb3BzLmRlbGV0ZVxuXHRcdH1cblx0fVxuXG5cdGZpbGVTZWxlY3QoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBmaWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCghdGhpcy5wcm9wcy5pbnB1dE5hbWUpP1wiZmlsZUVsZW1cIjp0aGlzLnByb3BzLmlucHV0TmFtZSk7XG5cdFx0ZmlsZUVsZW0uY2xpY2soKTtcblx0fVxuXG5cdGhhbmRsZUZpbGVzKGUpe1xuXHRcdHZhciBfcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRfcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRpbWFnZTogX3JlYWRlci5yZXN1bHRcblx0XHRcdH0pXG5cdFx0fTtcblx0XHRfcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuXG5cdH1cblxuXHRmaWxlRGVsZXRlKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGltYWdlOiBcIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZygn0KTQsNC50Lsg0YPQtNCw0LvQtdC9Li4uJyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWIyIGltYWdlLWVkaXRcIj5cblx0XHRcdFx0PEltYWdlIHNyYz17dGhpcy5zdGF0ZS5pbWFnZX0gdGh1bWJuYWlsIC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdGlkPXsoIXRoaXMucHJvcHMuaW5wdXROYW1lKT9cImZpbGVFbGVtXCI6dGhpcy5wcm9wcy5pbnB1dE5hbWV9XG5cdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRuYW1lPXsoIXRoaXMucHJvcHMuaW5wdXROYW1lKT9cImZpbGVMb2FkXCI6dGhpcy5wcm9wcy5pbnB1dE5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZXMuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNob3ctYnRuLWdyb3VwXCI+XG5cdFx0XHRcdFx0PEJ1dHRvbkdyb3VwIGJzU2l6ZT1cInNtYWxsXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5maWxlU2VsZWN0LmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwiZG93bmxvYWQtYWx0XCIgLz5cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmRlbGV0ZX0gb25DbGljaz17dGhpcy5maWxlRGVsZXRlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwidHJhc2hcIiAvPlxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9CdXR0b25Hcm91cD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlscy9JbWFnZXNVcGxvYWQuanNcbiAqKi8iLCJ2YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgaGVscGVycyA9IHtcblx0Z2V0U2x1Z2lmeTogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vaW5kZXgvc2x1Z2lmeS8/c2x1Z2lmeT1cIiArIHN0cmluZylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRnZXRQcm9kdWN0U2x1Z2lmeTogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHJldHVybiBheGlvcy5nZXQoXCIvYWRtaW4vaW5kZXgvc2x1Z2lmeS1wcm9kdWN0LXNrdS8/c2x1Z2lmeT1cIiArIHN0cmluZylcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbHMvc2x1Z2lmeUhlbHBlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlc0Zvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6IHByb3BzLmRhdGEudGl0bGUsXG5cdFx0XHRwYXRoOiBwcm9wcy5kYXRhLnBhdGgsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuZGF0YS5kZXNjcmlwdGlvbixcblx0XHRcdGNvbnRlbnRNYXJrZG93bjogcHJvcHMuZGF0YS5jb250ZW50TWFya2Rvd24sXG5cdFx0XHRjb250ZW50SHRtbDogcHJvcHMuZGF0YS5jb250ZW50SHRtbCxcblx0XHRcdHNvcnRpbmc6IHByb3BzLmRhdGEuc29ydGluZyxcblx0XHRcdGltYWdlOiAoIXByb3BzLmRhdGEuaW1hZ2UpXG5cdFx0XHRcdD9cIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdFx0OnByb3BzLmRhdGEuaW1hZ2Vcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEdyaWQgZmx1aWQ9e3RydWV9PlxuXHRcdFx0XHQ8Um93IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5zdGF0ZS5pbWFnZX0vPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbdGl0bGVdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3RpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbY29udGVudE1hcmtkb3duXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtjb250ZW50SHRtbF1cIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50SFRNTH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUGFnZXMvUGFnZXNGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5pbXBvcnQgY2F0ZWdvcnlIZWxwZXJzIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IENhdGVnb3J5UmVwbGFjZUNvbXBvbmVudCBmcm9tIFwiLi9DYXRlZ29yeVJlcGxhY2VDb21wb25lbnRcIjtcbmltcG9ydCBDYXRlZ29yeVJlcGxhY2VUZXN0IGZyb20gXCIuL0NhdGVnb3J5UmVwbGFjZVRlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllc0Zvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBwcm9wcy5kYXRhLFxuXHRcdFx0cGFyZW50SWQ6IHByb3BzLmRhdGEucGFyZW50SWQsXG5cdFx0XHRzaG93UmVwbGFjZSA6IGZhbHNlLFxuXHRcdFx0Y2F0ZWdvcnlJbmZvOiAnJ1xuXHRcdH1cblx0fVxuXG5cdHNob3dSZXBsYWNlKCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzaG93UmVwbGFjZTogdHJ1ZVxuXHRcdH0pXG5cdH1cblxuXHRoaWRlUmVwbGFjZSgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2hvd1JlcGxhY2U6IGZhbHNlXG5cdFx0fSlcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBpZCA9IHRoaXMucHJvcHMuZGF0YS5wYXJlbnRJZDtcblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q2F0ZWdvcnlJbmZvKGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlJbmZvOiBjYXRlZ29yeUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6ZGF0YX0pO1xuXHRcdH07XG5cdH1cblxuXHR0aXRsZUNoYW5nZShlKXtcblx0XHR2YXIgdGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdFx0ZGF0YVsncGF0aCddXHQ9IHBhdGg7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRnZW5lcmF0ZVBhdGhGcm9tVGl0bGUoKXtcblx0XHR2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLmRhdGEubmFtZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHRcdFx0ZGF0YVsncGF0aCddXHQ9IHBhdGg7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzZWxlY3RDYXRlZ29yeShpZCl7XG5cdFx0Y29uc29sZS5sb2coJ1NFTEVDVEVEIENBVEVHT1JZJyxpZCk7XG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyhpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHZhciBkYXRhID0gdGhpcy5zdGF0ZS5kYXRhO1xuXHRcdFx0XHRkYXRhWydicmVhZGNydW1icyddID0gKGNhdGVnb3J5SW5mby5icmVhZGNydW1icylcblx0XHRcdFx0XHQ/IGNhdGVnb3J5SW5mby5icmVhZGNydW1icyArICcgPiAnICsgY2F0ZWdvcnlJbmZvLm5hbWVcblx0XHRcdFx0XHQ6IGNhdGVnb3J5SW5mby5uYW1lO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRcdHBhcmVudElkOiBjYXRlZ29yeUluZm8uaWQsXG5cdFx0XHRcdFx0Y2F0ZWdvcnlJbmZvOiBjYXRlZ29yeUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0aW1nU3JjKCl7XG5cdFx0dmFyIHVwbG9hZFBhdGggPSAoIXRoaXMuc3RhdGUuZGF0YS51cGxvYWRQYXRoKT8nL2ZpbGVzL2ltYWdlcy9wcm9kdWN0Lyc6dGhpcy5zdGF0ZS5kYXRhLnVwbG9hZFBhdGg7XG5cdFx0dmFyIGltYWdlID0gKCF0aGlzLnN0YXRlLmRhdGEuaW1hZ2UpXG5cdFx0XHQ/XCIyMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdDp0aGlzLnN0YXRlLmRhdGEuaW1hZ2U7XG5cdFx0cmV0dXJuIHVwbG9hZFBhdGggKyBpbWFnZTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXt0aGlzLmltZ1NyYygpfS8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PENvbCBtZD17OX0+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCX0LDQs9C+0LvQvtCy0L7QujwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtuYW1lXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPlVybDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5nZW5lcmF0ZVBhdGhGcm9tVGl0bGUuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVybFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtwYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3BhdGgnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KDQvtC00LjRgtC10LvRjNGB0LrQsNGPINC60LDRgtC10LPQvtGA0LjRjzwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cD5cblx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uICBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuc2hvd1JlcGxhY2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvSW5wdXRHcm91cC5CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmJyZWFkY3J1bWJzfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDYXRlZ29yeVJlcGxhY2VUZXN0XG5cdFx0XHRcdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93UmVwbGFjZX1cblx0XHRcdFx0XHRcdFx0XHRoaWRlPXt0aGlzLmhpZGVSZXBsYWNlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0SWQ9e3RoaXMucHJvcHMuZGF0YS5wYXJlbnRJZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QntC/0LjRgdCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuDwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17KHRoaXMuc3RhdGUuZGF0YS5kZXNjcmlwdGlvbik/dGhpcy5zdGF0ZS5kYXRhLmRlc2NyaXB0aW9uOicnfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40LhcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W2Rlc2NyaXB0aW9uXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1IChtYXJrZG93bik8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbY29udGVudE1hcmtkb3duXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNvcnRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtzb3J0aW5nXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhRm9ybUNhdGVnb3J5W3BhcmVudElkXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMuc3RhdGUucGFyZW50SWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHQ8L1Jvdz5cblx0XHRcdDwvR3JpZD5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc0Zvcm1FZGl0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IExpc3RHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9MaXN0R3JvdXBcIjtcblxuaW1wb3J0IGNhdGVnb3J5SGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiXG5pbXBvcnQgQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0IGZyb20gXCIuL0NhdGFsb2dQYXJlbnRDYXRlZ29yeVJlcGxhY2VJdGVtTGlzdFwiXG5pbXBvcnQgQ2F0ZWdvcnlSYXBsYWNlTGlzdCBmcm9tIFwiLi9DYXRlZ29yeVJhcGxhY2VMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5UmVwbGFjZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2UsXG5cdFx0XHRjdXJyZW50Q2F0ZWdvcnk6ICcnLFxuXHRcdFx0cGFyZW50SWQ6ICcnLFxuXHRcdFx0Y2F0ZWdvcnlMaXN0OiBbXSxcblx0XHRcdHNlbGVjdGVkQ2F0ZWdvcnk6ICcnXG5cdFx0fTtcblxuXHRcdHRoaXMuc2VsZWN0Q2F0ZWdvcnkgPSB0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcyk7XG5cdH1cblxuXHQvKmNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBwYXJlbnRJZCA9ICh0aGlzLnByb3BzLmN1cnJlbnRDYXRlZ29yeS5wYXJlbnRJZCk/dGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkucGFyZW50SWQ6JzAnO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudENhdGVnb3J5OiB0aGlzLnByb3BzLmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdH0pO1xuXHR9Ki9cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dmFyIGlkID0gdGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkuaWQ7XG5cdFx0dmFyIHBhcmVudElkID0gdGhpcy5wcm9wcy5jdXJyZW50Q2F0ZWdvcnkucGFyZW50SWQ7XG5cblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q3VycmVudEdhdGVnb3J5TGlzdChpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5TGlzdCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNhdGVnb3J5TGlzdDogY2F0ZWdvcnlMaXN0LFxuXHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZCxcblx0XHRcdFx0XHRzaG93TW9kYWw6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0c3ViQ2F0ZWdvcmllc0xpc3QoaWQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyhpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGN1cnJlbnRDYXRlZ29yeTogY2F0ZWdvcnlJbmZvLFxuXHRcdFx0XHRcdHBhcmVudElkOiBpZFxuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0U3ViR2F0ZWdvcnlMaXN0KGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlMaXN0KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlMaXN0OiBjYXRlZ29yeUxpc3Rcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdFx0fS5iaW5kKHRoaXMpLCA1MDApO1xuXHR9XG5cblx0Y3VycmVudENhdGVnb3JpZXNMaXN0KGlkKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblxuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjdXJyZW50Q2F0ZWdvcnk6IGNhdGVnb3J5SW5mbyxcblx0XHRcdFx0XHRwYXJlbnRJZDogY2F0ZWdvcnlJbmZvLnBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDdXJyZW50R2F0ZWdvcnlMaXN0KGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlMaXN0KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlMaXN0OiBjYXRlZ29yeUxpc3Rcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdFx0fS5iaW5kKHRoaXMpLCA1MDApO1xuXHR9XG5cblx0cmV0dXJuUGFyZW50Q2F0ZWdvcnkoKXtcblx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yaWVzTGlzdCh0aGlzLnN0YXRlLnBhcmVudElkKTtcblx0fVxuXG5cdHNlbGVjdENhdGVnb3J5KGlkKXtcblx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZENhdGVnb3J5OiBpZH0pO1xuXHR9XG5cblx0c2VsZWN0Um9vdENhdGVnb3J5KGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkQ2F0ZWdvcnk6IGUudGFyZ2V0LmlkfSk7XG5cdH1cblxuXHRoYW5kbGVyU2F2ZSgpe1xuXHRcdHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRlZ29yeSAmJiB0aGlzLnByb3BzLnNlbGVjdENhdGVnb3J5KHRoaXMuc3RhdGUuc2VsZWN0ZWRDYXRlZ29yeSk7XG5cdFx0dGhpcy5jbG9zZSgpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgY2F0ZWdvcnlMaXN0ID0gdGhpcy5zdGF0ZS5jYXRlZ29yeUxpc3Q7XG5cdFx0Y29uc3QgY2F0ZWdvcnlMaXN0Q29tcG9uZW50ID0gY2F0ZWdvcnlMaXN0Lm1hcCgoY2F0ZWdvcnksaSkgPT5cblx0XHRcdDxDYXRlZ29yeVJhcGxhY2VMaXN0XG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0Y2F0ZWdvcnk9e2NhdGVnb3J5fVxuXHRcdFx0XHRldmVudENsaWNrPXt0aGlzLnN1YkNhdGVnb3JpZXNMaXN0LmJpbmQodGhpcyl9XG5cdFx0XHRcdGhhbmRsZXJTZWxlY3Q9e3RoaXMuc2VsZWN0Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0Y3VycmVudElkPXt0aGlzLnByb3BzLmN1cnJlbnRDYXRlZ29yeS5pZH1cblx0XHRcdC8+XG5cdFx0KTtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxCdXR0b24gIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJyZWZyZXNoXCIgLz5cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCS0YvQsdC+0YAg0LrQsNGC0LXQs9C+0YDQuNC4PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxMaXN0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3Rcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVyblBhcmVudENhdGVnb3J5ID0ge3RoaXMucmV0dXJuUGFyZW50Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdFJvb3RDYXRlZ29yeSA9IHt0aGlzLnNlbGVjdFJvb3RDYXRlZ29yeS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyZW50SWQgPSB7dGhpcy5zdGF0ZS5wYXJlbnRJZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5TGlzdENvbXBvbmVudH1cblx0XHRcdFx0XHRcdDwvTGlzdEdyb3VwPlxuXHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZXJTYXZlLmJpbmQodGhpcyl9IGJzU3R5bGU9XCJwcmltYXJ5XCI+0JLRi9Cx0YDQsNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcnlSZXBsYWNlQ29tcG9uZW50LmpzXG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIEdseXBoaWNvbiA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uJyk7XG52YXIgTGlzdEdyb3VwSXRlbSA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcC9saWIvTGlzdEdyb3VwSXRlbScpO1xudmFyIFJvdyA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcC9saWIvUm93Jyk7XG52YXIgQ29sID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwL2xpYi9Db2wnKTtcblxuZnVuY3Rpb24gQ2F0YWxvZ1BhcmVudENhdGVnb3J5UmVwbGFjZUl0ZW1MaXN0KHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnBhcmVudElkICE9IDBcbiAgICAgICAgPyAgIDxMaXN0R3JvdXBJdGVtIG9uQ2xpY2s9e3Byb3BzLnJldHVyblBhcmVudENhdGVnb3J5fT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCB4cz17MX0+PEdseXBoaWNvbiBnbHlwaD1cImxldmVsLXVwXCIvPjwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezExfT4uLi48L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuXG4gICAgICAgIDogICA8TGlzdEdyb3VwSXRlbSA+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRhbG9nQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnNlbGVjdFJvb3RDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICDQndC10YIg0LrQsNGC0LXQs9C+0YDQuNC4ICjQkiDQutC+0YDQvdC1INC60LDRgtCw0LvQvtCz0LApXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxufVxuXG5DYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3QucHJvcFR5cGVzID0ge1xuXHRcdHBhcmVudElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmV0dXJuUGFyZW50Q2F0ZWdvcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0Um9vdENhdGVnb3J5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGFsb2dQYXJlbnRDYXRlZ29yeVJlcGxhY2VJdGVtTGlzdDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRhbG9nUGFyZW50Q2F0ZWdvcnlSZXBsYWNlSXRlbUxpc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBMaXN0R3JvdXBJdGVtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW1cIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0JhZGdlXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoYW5kbGVyQ2xpY2soZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuZXZlbnRDbGljayh0aGlzLnByb3BzLmNhdGVnb3J5LmlkKTtcblx0fVxuXG5cdHNlbGVjdGVkQ2F0ZWdvcnkoZSl7XG5cdFx0dGhpcy5wcm9wcy5oYW5kbGVyU2VsZWN0KGUudGFyZ2V0LmlkKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5wcm9wcy5jYXRlZ29yeTtcblx0XHRjb25zdCBsYWJlbEluc3RhbmNlID0gKGNhdGVnb3J5LmNvdW50U3ViQ2F0ZWdvcmllcyAhPSAwKVxuXHRcdFx0PyA8YSBocmVmPVwiXCJcblx0XHRcdFx0XHQgY2xhc3NOYW1lPXsoY2F0ZWdvcnkuYWN0aXZlICE9IDApP1wiXCI6XCJ0ZXh0LW11dGVkXCJ9XG5cdFx0XHRcdFx0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlckNsaWNrLmJpbmQodGhpcyl9PntjYXRlZ29yeS5uYW1lfTwvYT5cblx0XHRcdDogPHNwYW5cblx0XHRcdFx0XHRjbGFzc05hbWU9eyhjYXRlZ29yeS5hY3RpdmUgIT0gMCk/XCJcIjpcInRleHQtbXV0ZWRcIn0+XG5cdFx0XHRcdFx0e2NhdGVnb3J5Lm5hbWV9PC9zcGFuPjtcblxuXHRcdGNvbnN0IHJhZGlvSW5zdGFuY2UgPSAoY2F0ZWdvcnkuaWQgIT0gdGhpcy5wcm9wcy5jdXJyZW50SWQpXG5cdFx0XHQ/IDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0bmFtZT1cImNhdGFsb2dDYXRlZ29yeVwiXG5cdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWQ9XCJcIlxuXHRcdFx0XHRcdGlkPXtjYXRlZ29yeS5pZH1cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblx0XHRcdDogPEdseXBoaWNvbiBnbHlwaD1cIm9rXCIgLz47XG5cblx0XHRyZXR1cm4oXG5cdFx0XHRcdDxMaXN0R3JvdXBJdGVtICA+XG5cdFx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHRcdDxDb2wgeHM9ezF9PlxuXHRcdFx0XHRcdFx0XHR7cmFkaW9JbnN0YW5jZX1cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17MTB9PlxuXHRcdFx0XHRcdFx0XHR7bGFiZWxJbnN0YW5jZX1cblx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PENvbCB4cz17MX0+XG5cdFx0XHRcdFx0XHRcdDxCYWRnZVxuXHRcdFx0XHRcdFx0XHRcdHB1bGxSaWdodD17dHJ1ZX1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9eyhjYXRlZ29yeS5jb3VudFN1YkNhdGVnb3JpZXMgIT0gMCk/XCJcIjpcImhpZGRlblwifT5cblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnkuY291bnRTdWJDYXRlZ29yaWVzfVxuXHRcdFx0XHRcdFx0XHQ8L0JhZGdlPlxuXHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0PC9Sb3c+XG5cdFx0XHRcdDwvTGlzdEdyb3VwSXRlbT5cblxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3J5UmFwbGFjZUxpc3QuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBMaXN0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTGlzdEdyb3VwXCI7XG5pbXBvcnQgTGlzdEdyb3VwSXRlbSBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0xpc3RHcm91cEl0ZW0nO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQ29sJztcblxuaW1wb3J0IGNhdGVnb3J5SGVscGVycyBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5pbXBvcnQgQ2F0ZWdvcnlSZXBsYWNlTGlzdEl0ZW0gZnJvbSBcIi4vQ2F0ZWdvcnlSZXBsYWNlTGlzdEl0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnlSZXBsYWNlVGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0SWQ6ICcnLFxuXHRcdFx0cGFyZW50SWQ6ICcnLFxuXHRcdFx0cGFyZW50Q2F0ZWdvcnlJbmZvOiAnJyxcblx0XHRcdGNhdGVnb3J5TGlzdDogW11cblx0XHR9XG5cdH1cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0Y29uc29sZS5sb2coJ0xJU1QgQ0FURUdPUlknLHRoaXMucHJvcHMuc2VsZWN0SWQpO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyh0aGlzLnByb3BzLnNlbGVjdElkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cGFyZW50SWQ6IHRoaXMucHJvcHMuc2VsZWN0SWQsXG5cdFx0XHRcdFx0cGFyZW50Q2F0ZWdvcnlJbmZvOiBjYXRlZ29yeUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldEN1cnJlbnRHYXRlZ29yeUxpc3QodGhpcy5wcm9wcy5zZWxlY3RJZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5TGlzdCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNhdGVnb3J5TGlzdDogY2F0ZWdvcnlMaXN0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHNlbGVjdENhdGVnb3J5KGlkKXtcblx0XHRjb25zb2xlLmxvZygnU0VMRUNUIENBVEVHT1JZJyxpZCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzZWxlY3RJZDogaWRcblx0XHR9KVxuXHR9XG5cblx0cmVwbGFjZUNhdGVnb3J5KGlkKXtcblx0XHRjb25zb2xlLmxvZygnTElTVCBDQVRFR09SWScsaWQpO1xuXG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyhpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHBhcmVudElkOiBpZCxcblx0XHRcdFx0XHRwYXJlbnRDYXRlZ29yeUluZm86IGNhdGVnb3J5SW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0U3ViR2F0ZWdvcnlMaXN0KGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlMaXN0KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlMaXN0OiBjYXRlZ29yeUxpc3Rcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgaGVhZGVyTGlzdEdyb3VwID0gKCkgPT4ge1xuXHRcdFx0c3dpdGNoIChmYWxzZSkge1xuXHRcdFx0XHRjYXNlIHRoaXMuc3RhdGUucGFyZW50SWQgIT0gMCAmJiB0aGlzLnN0YXRlLnBhcmVudENhdGVnb3J5SW5mby5wYXJlbnRJZCAhPSAwOlxuXHRcdFx0XHRcdHJldHVybiAn0JrQsNGC0LDQu9C+0LMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OiByZXR1cm4gJy4uLiAnICsgdGhpcy5zdGF0ZS5wYXJlbnRDYXRlZ29yeUluZm8ubmFtZTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgbGlzdGdyb3VwSW5zdGFuY2UgPSB0aGlzLnN0YXRlLmNhdGVnb3J5TGlzdC5tYXAoKGNhdGVnb3J5KSA9PlxuXHRcdFx0PENhdGVnb3J5UmVwbGFjZUxpc3RJdGVtXG5cdFx0XHRcdGtleT17Y2F0ZWdvcnkuaWR9XG5cdFx0XHRcdGlkPXtjYXRlZ29yeS5pZH1cblx0XHRcdFx0c2VsZWN0PXt0aGlzLnNlbGVjdENhdGVnb3J5LmJpbmQodGhpcyl9XG5cdFx0XHRcdHJlcGxhY2U9e3RoaXMucmVwbGFjZUNhdGVnb3J5LmJpbmQodGhpcyl9XG5cdFx0XHRcdGFjdGl2ZT17Y2F0ZWdvcnkuaWQgPT0gdGhpcy5zdGF0ZS5wYXJlbnRJZH1cblx0XHRcdD5cblx0XHRcdFx0e2NhdGVnb3J5Lm5hbWV9XG5cdFx0XHQ8L0NhdGVnb3J5UmVwbGFjZUxpc3RJdGVtPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCS0YvQsdC+0YAg0LrQsNGC0LXQs9C+0YDQuNC4PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxMaXN0R3JvdXAgY29tcG9uZW50Q2xhc3M9XCJ1bFwiPlxuXHRcdFx0XHRcdFx0PENhdGVnb3J5UmVwbGFjZUxpc3RJdGVtXG5cdFx0XHRcdFx0XHRcdHNlbGVjdD17dGhpcy5zZWxlY3RDYXRlZ29yeS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRyZXBsYWNlPXt0aGlzLnJlcGxhY2VDYXRlZ29yeS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRsZXZlbFVwPXt0aGlzLnN0YXRlLnBhcmVudElkICE9IDAgJiYgdGhpcy5zdGF0ZS5wYXJlbnRDYXRlZ29yeUluZm8ucGFyZW50SWQgIT0gMH1cblx0XHRcdFx0XHRcdFx0YWN0aXZlPXt0aGlzLnN0YXRlLnBhcmVudElkID09IDB9XG5cdFx0XHRcdFx0XHRcdGlkPXt0aGlzLnN0YXRlLnBhcmVudENhdGVnb3J5SW5mby5wYXJlbnRJZH0+XG5cdFx0XHRcdFx0XHRcdHtoZWFkZXJMaXN0R3JvdXAoKX1cblx0XHRcdFx0XHRcdDwvQ2F0ZWdvcnlSZXBsYWNlTGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHR7bGlzdGdyb3VwSW5zdGFuY2V9XG5cdFx0XHRcdFx0PC9MaXN0R3JvdXA+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0L/RgNCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yeVJlcGxhY2VUZXN0LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEJhZGdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0JhZGdlXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeVJlcGxhY2VMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0cmFkaW9JbnN0YW5jZSgpe1xuXHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0Y2FzZSB0aGlzLnByb3BzLmFjdGl2ZTpcblx0XHRcdFx0cmV0dXJuIDxHbHlwaGljb24gZ2x5cGg9XCJva1wiIC8+O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgdGhpcy5wcm9wcy5sZXZlbFVwOlxuXHRcdFx0XHRyZXR1cm4gPEdseXBoaWNvbiBnbHlwaD1cImxldmVsLXVwXCIgLz47XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0bmFtZT1cImNhdGFsb2dDYXRlZ29yeVwiXG5cdFx0XHRcdFx0ZGVmYXVsdENoZWNrZWQ9XCJcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHt0aGlzLnByb3BzLnNlbGVjdCh0aGlzLnByb3BzLmlkKX19IC8+XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGxpXG5cdFx0XHRcdGlkPXt0aGlzLnByb3BzLmlkfVxuXHRcdFx0XHRjbGFzc05hbWU9eyh0aGlzLnByb3BzLmFjdGl2ZSk/J2xpc3QtZ3JvdXAtaXRlbSBhY3RpdmUnOidsaXN0LWdyb3VwLWl0ZW0nfT5cblx0XHRcdFx0PFJvdz5cblx0XHRcdFx0XHQ8Q29sIHhzPXsxfT5cblx0XHRcdFx0XHRcdHt0aGlzLnJhZGlvSW5zdGFuY2UoKX1cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIHhzPXsxMX0gb25DbGljaz17KCkgPT4ge3RoaXMucHJvcHMucmVwbGFjZSh0aGlzLnByb3BzLmlkKX19IGNsYXNzTmFtZT1cInRleHQtaG92ZXJcIj5cblx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJmb2xkZXItY2xvc2VcIiBjbGFzc05hbWU9XCJtbHIxXCIvPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9saT5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvQ2F0ZWdvcmllcy9DYXRlZ29yeVJlcGxhY2VMaXN0SXRlbS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEhlbHBCbG9jayBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9IZWxwQmxvY2tcIjtcblxuaW1wb3J0IGNhdGVnb3J5SGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiO1xuaW1wb3J0IFNsdWdpZnkgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvc2x1Z2lmeUhlbHBlclwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuaW1wb3J0IENhdGVnb3J5UmVwbGFjZSBmcm9tIFwiLi8uLi9DYXRlZ29yaWVzL0NhdGVnb3J5UmVwbGFjZUNvbXBvbmVudFwiO1xuaW1wb3J0IFByb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b24gZnJvbSBcIi4uL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b25cIjtcbmltcG9ydCBQcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvbiBmcm9tIFwiLi4vUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvblwiO1xuaW1wb3J0IFByb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b24gZnJvbSBcIi4uL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvblByb3BlcnR5RWRpdEJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0c0Zvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBwcm9wcy5kYXRhLFxuXHRcdFx0Y2F0ZWdvcnlJbmZvOiAnJyxcblx0XHRcdGNhdGVnb3J5SWQ6IHByb3BzLmRhdGEuY2F0ZWdvcnlJZCxcblx0XHRcdGJyZWFkY3J1bWJzOiBwcm9wcy5kYXRhLmJyZWFkY3J1bWJzLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0ZXJyb3JIZWxwOiAnRXJyb3IuJ1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBpZCA9IHRoaXMucHJvcHMuZGF0YS5pZDtcblx0XHRjYXRlZ29yeUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0KGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Y2F0ZWdvcnlJbmZvOiBjYXRlZ29yeUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b25DaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTp0aGlzLnN0YXRlLmRhdGF9KTtcblx0XHR9O1xuXHR9XG5cblx0c2t1T25DaGFuZ2UoZSl7XG5cdFx0dmFyIGlucHV0ID0gZS50YXJnZXQ7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0ZGF0YVsnc2t1J10gPSBlLnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRhdGE6IGRhdGFcblx0XHR9LCgpID0+IHt0aGlzLnZhbGlkYXRlSW5wdXQoaW5wdXQpfSk7XG5cdH1cblxuXHR2YWxpZGF0ZUlucHV0KGlucHV0KXtcblx0XHRTbHVnaWZ5LmdldFByb2R1Y3RTbHVnaWZ5KGlucHV0LnZhbHVlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHRpZighcmVzdWx0LmVycm9yKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbJ3BhdGgnXSA9IHJlc3VsdC5wYXRoO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZGF0YTogdGhpcy5zdGF0ZS5kYXRhLFxuXHRcdFx0XHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0XHRcdFx0ZXJyb3JIZWxwOiAnRXJyb3IuJ1xuXHRcdFx0XHRcdH0sIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGVycm9yOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZXJyb3JIZWxwOiByZXN1bHQuZXJyb3Jcblx0XHRcdFx0XHR9LCBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShyZXN1bHQuZXJyb3IgKyAnINCd0LDQtNC+INC40YHQv9GA0LDQstC40YLRjCEnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRzZWxlY3RDYXRlZ29yeShpZCl7XG5cdFx0Y29uc29sZS5sb2coJ1NFTEVDVEVEIENBVEVHT1JZJyxpZCk7XG5cdFx0Y2F0ZWdvcnlIZWxwZXJzLmdldENhdGVnb3J5SW5mbyhpZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGNhdGVnb3J5SW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNhdGVnb3J5SW5mbzogY2F0ZWdvcnlJbmZvLFxuXHRcdFx0XHRcdGJyZWFkY3J1bWJzOiBjYXRlZ29yeUluZm8uYnJlYWRjcnVtYnMgKyAnID4gJyArIGNhdGVnb3J5SW5mby5uYW1lLFxuXHRcdFx0XHRcdGNhdGVnb3J5SWQ6IGNhdGVnb3J5SW5mby5pZFxuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRpbWdTcmMoKXtcblx0XHR2YXIgdXBsb2FkUGF0aCA9ICghdGhpcy5zdGF0ZS5kYXRhLnVwbG9hZFBhdGgpPycvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvJzp0aGlzLnN0YXRlLmRhdGEudXBsb2FkUGF0aDtcblx0XHR2YXIgaW1hZ2UgPSAoIXRoaXMuc3RhdGUuZGF0YS5pbWFnZSlcblx0XHRcdD9cIjIwMTItMDUtMjJfZm90b19udi5qcGdcIlxuXHRcdFx0OnRoaXMuc3RhdGUuZGF0YS5pbWFnZTtcblx0XHRyZXR1cm4gdXBsb2FkUGF0aCArIGltYWdlO1xuXHR9XG5cblx0aW1nRHJhZnQoKXtcblx0XHR2YXIgdXBsb2FkUGF0aCA9ICghdGhpcy5zdGF0ZS5kYXRhLnVwbG9hZFBhdGhEcmFmdCk/Jy9maWxlcy9pbWFnZXMvcHJvZHVjdC8nOnRoaXMuc3RhdGUuZGF0YS51cGxvYWRQYXRoRHJhZnQ7XG5cdFx0dmFyIGRyYWZ0ID0gKCF0aGlzLnN0YXRlLmRhdGEuZHJhZnQpXG5cdFx0XHQ/XCIyMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdDp0aGlzLnN0YXRlLmRhdGEuZHJhZnQ7XG5cdFx0cmV0dXJuIHVwbG9hZFBhdGggKyBkcmFmdDtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXt0aGlzLmltZ1NyYygpfSBpbnB1dE5hbWU9XCJmaWxlTG9hZEltYWdlXCIvPlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5pbWdEcmFmdCgpfSBpbnB1dE5hbWU9XCJmaWxlTG9hZERyYWZ0XCIvPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9eyghdGhpcy5zdGF0ZS5lcnJvcik/Jyc6J2hhcy1lcnJvcid9PlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0L7QtCDRgtC+0LLQsNGA0LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JrQvtC0INGC0L7QstCw0YDQsFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJza3VcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW3NrdV1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuc2t1fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLnNrdU9uQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEhlbHBCbG9jaz57dGhpcy5zdGF0ZS5lcnJvciAmJiB0aGlzLnN0YXRlLmVycm9ySGVscH08L0hlbHBCbG9jaz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YLQvtCy0LDRgNCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LBcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW25hbWVdXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JrQsNGC0LXQs9C+0YDQuNGPPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxDYXRlZ29yeVJlcGxhY2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudENhdGVnb3J5PXt0aGlzLnN0YXRlLmNhdGVnb3J5SW5mb31cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0Q2F0ZWdvcnk9e3RoaXMuc2VsZWN0Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmJyZWFkY3J1bWJzfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J7Qv9C40YHQsNC90LjQtTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17KHRoaXMuc3RhdGUuZGF0YS5kZXNjcmlwdGlvbik/dGhpcy5zdGF0ZS5kYXRhLmRlc2NyaXB0aW9uOicnfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Qn9GA0LjQvNC10YfQsNC90LjQtTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17KHRoaXMuc3RhdGUuZGF0YS5ub3RlKT90aGlzLnN0YXRlLmRhdGEubm90ZTonJ31cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCf0YDQuNC80LXRh9Cw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tub3RlXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ25vdGUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIyXCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXG5cdFx0XHRcdFx0XHQ8Um93PlxuXHRcdFx0XHRcdFx0XHQ8Q29sIG1kPXszfSA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29sIGNvbXBvbmVudENsYXNzPXtDb250cm9sTGFiZWx9IG1kPXs2fSBjbGFzc05hbWU9XCJwbDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHTQodC+0YDRgtC40YDQvtCy0LrQsFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbCBtZD17Nn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pbj1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3RQcm9wZXJ0eUVkaXRCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGlkPXt0aGlzLnByb3BzLmRhdGEuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cItCh0YLQstC+0LnRgdGC0LLQsCDRgtC+0LLQsNGA0LBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPXt0aGlzLnByb3BzLmRhdGEucm9sZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17dGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCLQnNC+0LTQuNGE0LjQutCw0YbQuNC4INGC0L7QstCw0YDQsFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRic1N0eWxlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9e3RoaXMucHJvcHMuZGF0YS5yb2xlfVxuXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD17dGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCLQodCy0L7QudGB0YLQstCwINC80L7QtNC40YTQuNC60LDRhtC40LlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YnNTdHlsZT1cInByaW1hcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPXt0aGlzLnByb3BzLmRhdGEucm9sZX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHRcdDwvUm93PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBhdGh9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJjYXRlZ29yeUlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5jYXRlZ29yeUlkfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RzL1Byb2R1Y3RzRm9ybUVkaXQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuXG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcbmltcG9ydCBwcm9kdWN0UHJvcGVydHlIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9wcm9kdWN0UHJvcGVydHlIZWxwZXJcIjtcbmltcG9ydCBQcm9kdWN0UHJvcGVydGllcyBmcm9tIFwiLi9Qcm9kdWN0UHJvcGVydGllc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdFByb3BlcnR5RWRpdEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd01vZGFsOiBmYWxzZSxcblx0XHRcdHByb3BlcnRpZXM6IFtdLFxuXHRcdFx0ZGVsZXRlZDogW11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeVByb2R1Y3RQcm9wZXJ0aWVzKHRoaXMucHJvcHMuaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7cHJvcGVydGllczpyZXNwb25zZX0pXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZGF0YSwgaW5kZXgpe1xuXHRcdHZhciBwcm9wZXJ0aWVzID0gdGhpcy5zdGF0ZS5wcm9wZXJ0aWVzO1xuXHRcdHByb3BlcnRpZXNbaW5kZXhdID0gZGF0YTtcblx0XHR0aGlzLnNldFN0YXRlKHtwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzfSk7XG5cdH1cblxuXHRoYW5kbGVEZWxldGUoaW5kZXgpe1xuXHRcdGNvbnNvbGUubG9nKCdERUxFVEUgUFJPUEVSVFk6ICcsIHRoaXMuc3RhdGUucHJvcGVydGllc1tpbmRleF0pO1xuXHRcdHZhciBkZWxldGVkID0gKHRoaXMuc3RhdGUucHJvcGVydGllc1tpbmRleF0uaWQgIT0gJ25ldycpXG5cdFx0XHQ/XHR0aGlzLnN0YXRlLmRlbGV0ZWQuY29uY2F0KHRoaXMuc3RhdGUucHJvcGVydGllc1tpbmRleF0pXG5cdFx0XHQ6IHRoaXMuc3RhdGUuZGVsZXRlZDtcblx0XHR2YXIgcHJvcGVydGllcyA9IHRoaXMuc3RhdGUucHJvcGVydGllcztcblx0XHRwcm9wZXJ0aWVzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0ZGVsZXRlZDogZGVsZXRlZFxuXHRcdH0pO1xuXHR9XG5cblx0aGFuZGxlQWRkKGRhdGEpe1xuXHRcdGNvbnNvbGUubG9nKCdORVcgUFJPUEVSVFk6ICcsIGRhdGEpO1xuXHRcdHZhciBwcm9wZXJ0aWVzID0gdGhpcy5zdGF0ZS5wcm9wZXJ0aWVzLmNvbmNhdChkYXRhKTtcblx0XHR0aGlzLnNldFN0YXRlKHtwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzfSk7XG5cdH1cblxuXHRvblNhdmUoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBkYXRhID0ge1xuXHRcdFx0cHJvcGVydGllczogdGhpcy5zdGF0ZS5wcm9wZXJ0aWVzLFxuXHRcdFx0ZGVsZXRlZDogdGhpcy5zdGF0ZS5kZWxldGVkXG5cdFx0fTtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IGZhbHNlfSk7XG5cdFx0Y29uc29sZS5sb2coJ1NFTkQgREFUQTogJywgZGF0YSk7XG5cblx0XHRwcm9kdWN0UHJvcGVydHlIZWxwZXJzLmVkaXRQcm9wZXJ0eShkYXRhKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTQVZFIERBVEE6ICcscmVzcG9uc2UpO1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9uQ2FuY2VsKCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0UHJvcGVydGllcyh0aGlzLnByb3BzLmlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHByb3BlcnRpZXM6cmVzcG9uc2UsXG5cdFx0XHRcdFx0ZGVsZXRlZDogW10sXG5cdFx0XHRcdFx0c2hvd01vZGFsOiBmYWxzZVxuXHRcdFx0XHR9KVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm9wZW4uYmluZCh0aGlzKX0gPlxuXHRcdFx0XHRcdHsoIXRoaXMucHJvcHMudGl0bGUpPzxHbHlwaGljb24gZ2x5cGg9XCJwZW5jaWxcIiAvPjp0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwibW9kYWwtbGdcIlxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCh0LLQvtC50YHRgtCy0LAg0L/RgNC+0LTRg9C60YLQsDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxQcm9kdWN0UHJvcGVydGllc1xuXHRcdFx0XHRcdFx0XHR7Li4udGhpcy5wcm9wc31cblx0XHRcdFx0XHRcdFx0cHJvcGVydGllcz17dGhpcy5zdGF0ZS5wcm9wZXJ0aWVzfVxuXHRcdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0aGFuZGxlQWRkPXt0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwic3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25TYXZlLmJpbmQodGhpcyl9PtCh0L7RhdGA0LDQvdC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9O1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0UHJvcGVydGllcy9Qcm9kdWN0UHJvcGVydHlFZGl0QnV0dG9uLmpzXG4gKiovIiwidmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbnZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbnZhciBoZWxwZXJzID0ge1xuXHRlZGl0UHJvcGVydHk6IGZ1bmN0aW9uIChzZW5kRGF0YSkge1xuXHRcdHJldHVybiAkLmFqYXgoe1xuXHRcdFx0dXJsOiAnL2FkbWluL3Byb2R1Y3RzL3Byb3BlcnR5LWVkaXQnLFxuXHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0ZGF0YTogc2VuZERhdGEsXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6ZnVuY3Rpb24oeGhyLCBzdGF0dXMpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3InLCBzdGF0dXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gKGlkKSB7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChcIi9hZG1pbi9wcm9kdWN0cy9wcm9wZXJ0eS1kZWwvP2lkPVwiICsgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWxzL3Byb2R1Y3RQcm9wZXJ0eUhlbHBlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZVwiO1xuXG5pbXBvcnQgUHJvZHVjdFByb3BlcnR5Q29tcG9uZW50IGZyb20gXCIuL1Byb2R1Y3RQcm9wZXJ0eUNvbXBvbmVudFwiO1xuaW1wb3J0IE5ld1Byb2R1Y3RQcm9wZXJ0eSBmcm9tIFwiLi9OZXdQcm9kdWN0UHJvcGVydHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIFByb2R1Y3RQcm9wZXJ0aWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cHJvcGVydGllc0xpc3QoKXtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5wcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcGVydHksIGkpIHtcblx0XHRcdHJldHVybiA8UHJvZHVjdFByb3BlcnR5Q29tcG9uZW50XG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0aW5kZXg9e2l9XG5cdFx0XHRcdHByb3BlcnR5PXtwcm9wZXJ0eX1cblx0XHRcdFx0ey4uLnNlbGYucHJvcHN9XG5cdFx0XHQvPlxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdFx0PFRhYmxlIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPuKEluKEli/Qv9C/PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD7Ql9C90LDRh9C10L3QuNC1PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPtCU0LXQudGB0YLQstC40Y88L3RoPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BlcnRpZXNMaXN0KCl9XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHQ8dGZvb3Q+XG5cdFx0XHRcdFx0XHQ8TmV3UHJvZHVjdFByb3BlcnR5XHR7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdFx0XHQ8L3Rmb290PlxuXHRcdFx0XHQ8L1RhYmxlPlxuXHRcdClcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL1Byb2R1Y3RQcm9wZXJ0aWVzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0UHJvcGVydHlDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KTtcblx0fVxuXG5cdG9uQ2hhbmdlKGtleSl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLnByb3BlcnRpZXNbdGhpcy5wcm9wcy5pbmRleF1cblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKGRhdGEsIHRoaXMucHJvcHMuaW5kZXgpO1xuXHRcdH07XG5cdH1cblxuXHRvbkRlbGV0ZSgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0sICgpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlRGVsZXRlKHRoaXMucHJvcHMuaW5kZXgpXG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwiY29sLW1kLTFcIj5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMucHJvcGVydHkub3JkZXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdvcmRlcicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnByb3BlcnR5Lm5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMucHJvcGVydHkudmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCd2YWx1ZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCIgb25DbGljaz17dGhpcy5vcGVuLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnByb3BzLnJvbGUgIT0gJ2FkbWluJ30+XG5cdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwidHJhc2hcIi8+XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHQ8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxNb2RhbC5UaXRsZT7Qo9C00LDQu9C40YLRjCDRgdCy0L7QudGB0YLQstC+PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD7QktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDRgdCy0L7QudGB0YLQstC+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cInt0aGlzLnByb3BzLnByb3BlcnR5Lm5hbWV9XCI8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25EZWxldGUuYmluZCh0aGlzKX0gYnNTdHlsZT1cImRhbmdlclwiPtCj0LTQsNC70LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0UHJvcGVydGllcy9Qcm9kdWN0UHJvcGVydHlDb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1Byb2R1Y3RQcm9wZXJ0eSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aWQ6ICduZXcnLFxuXHRcdFx0cHJvZHVjdElkOiBwcm9wcy5pZCxcblx0XHRcdG9yZGVyOiAnJyxcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0dmFsdWU6ICcnXG5cdFx0fTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdGFkZE5ld1Byb3BlcnR5KGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR2YXIgZGF0YSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYoZGF0YS5vcmRlciAmJiBkYXRhLm5hbWUgJiYgZGF0YS52YWx1ZSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0b3JkZXI6ICcnLFxuXHRcdFx0XHRuYW1lOiAnJyxcblx0XHRcdFx0dmFsdWU6ICcnXG5cdFx0XHR9LCAoKSA9PiB7dGhpcy5wcm9wcy5oYW5kbGVBZGQoZGF0YSl9KTtcblx0XHR9XG5cdH1cblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDx0ciBjbGFzc05hbWU9XCJhY3RpdmVcIj5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cImNvbC1zbS0xXCI+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm9yZGVyfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ29yZGVyJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndmFsdWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmFkZE5ld1Byb3BlcnR5LmJpbmQodGhpcyl9PtCU0L7QsdCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RQcm9wZXJ0aWVzL05ld1Byb2R1Y3RQcm9wZXJ0eS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBQcm9kdWN0TW9kaWZpY2F0aW9ucyBmcm9tIFwiLi9Qcm9kdWN0TW9kaWZpY2F0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0TW9kaWZpY2F0aW9uRWRpdEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd01vZGlmaWNhdGlvblRhYmxlOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdG9wZW5Nb2RpZmljYXRpb25UYWJsZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kaWZpY2F0aW9uVGFibGU6IHRydWUgfSk7XG5cdH1cblxuXHRjbG9zZU1vZGlmaWNhdGlvblRhYmxlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kaWZpY2F0aW9uVGFibGU6IGZhbHNlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5vcGVuTW9kaWZpY2F0aW9uVGFibGUuYmluZCh0aGlzKX1cdD5cblx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLnRpdGxlKT88R2x5cGhpY29uIGdseXBoPVwicGVuY2lsXCIgLz46dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0XHQ8UHJvZHVjdE1vZGlmaWNhdGlvbnNcblx0XHRcdFx0XHRcdHsuLi50aGlzLnByb3BzfVxuXHRcdFx0XHRcdFx0c2hvd01vZGFsPXt0aGlzLnN0YXRlLnNob3dNb2RpZmljYXRpb25UYWJsZX1cblx0XHRcdFx0XHRcdGhpZGVNb2RhbD17dGhpcy5jbG9zZU1vZGlmaWNhdGlvblRhYmxlLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0KVxuXHR9O1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL1Byb2R1Y3RNb2RpZmljYXRpb25FZGl0QnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5cbmltcG9ydCBkYXRhSGVscGVycyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2V0RGF0YUhlbHBlclwiO1xuaW1wb3J0IG1vZGlmaWNhdGlvbkhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3Byb2R1Y3RNb2RpZmljYXRpb25IZWxwZXJcIjtcblxuaW1wb3J0IFByb2R1Y3RNb2RpZmljYXRpb25zVGFibGUgZnJvbSBcIi4vTW9kaWZpY2F0aW9uc1RhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RNb2RpZmljYXRpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdHJvd3M6W10sXG5cdFx0XHRkZWxldGVkOiBbXVxuXHRcdH07XG5cdH1cblx0XG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdGRhdGFIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdE1vZGlmaWNhdGlvbih0aGlzLnByb3BzLmlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNvbHVtbnM6IHJlc3BvbnNlLmNvbHVtbnMsXG5cdFx0XHRcdFx0cm93czogcmVzcG9uc2Uucm93c1xuXHRcdFx0XHR9KVxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZGF0YSwgaW5kZXgpe1xuXHRcdHZhciByb3dzID0gdGhpcy5zdGF0ZS5yb3dzO1xuXHRcdHJvd3NbaW5kZXhdID0gZGF0YTtcblx0XHR0aGlzLnNldFN0YXRlKHtyb3dzOiByb3dzfSk7XG5cdH1cblxuXHRoYW5kbGVEZWxldGUoaW5kZXgpe1xuXHRcdGNvbnNvbGUubG9nKCdoYW5kbGVEZWxldGU6ICcsIHRoaXMuc3RhdGUucm93c1tpbmRleF0pO1xuXHRcdHZhciBkZWxldGVkID0gKHRoaXMuc3RhdGUucm93c1tpbmRleF0uaXRlbS5pZCAhPSAnbmV3Jylcblx0XHRcdD8gdGhpcy5zdGF0ZS5kZWxldGVkLmNvbmNhdCh0aGlzLnN0YXRlLnJvd3NbaW5kZXhdKVxuXHRcdFx0OiB0aGlzLnN0YXRlLmRlbGV0ZWQ7XG5cdFx0dmFyIHJvd3MgPSB0aGlzLnN0YXRlLnJvd3M7XG5cdFx0cm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cm93czogcm93cyxcblx0XHRcdGRlbGV0ZWQ6IGRlbGV0ZWRcblx0XHR9KVxuXHR9XG5cblx0aGFuZGxlQWRkKGRhdGEpe1xuXHRcdGNvbnNvbGUubG9nKCdORVcgTU9ESUZJQ0FUSU9OJywgZGF0YSk7XG5cdFx0dmFyIHJvd3MgPSB0aGlzLnN0YXRlLnJvd3M7XG5cdFx0cm93cyA9IHRoaXMuc3RhdGUucm93cy5jb25jYXQoZGF0YSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cm93czogcm93c30pO1xuXHR9XG5cblx0b25DYW5jZWwoKXtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeVByb2R1Y3RNb2RpZmljYXRpb24odGhpcy5wcm9wcy5pZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjb2x1bW5zOiByZXNwb25zZS5jb2x1bW5zLFxuXHRcdFx0XHRcdHJvd3M6IHJlc3BvbnNlLnJvd3MsXG5cdFx0XHRcdFx0ZGVsZXRlZDogW11cblx0XHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9uU2F2ZShlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5oaWRlTW9kYWwoKTtcblx0XHRjb25zb2xlLmxvZygnU0VORCBEQVRBOiAnLCB0aGlzLnN0YXRlKTtcblx0XHRtb2RpZmljYXRpb25IZWxwZXJzLmVkaXRNb2RpZmljYXRpb24odGhpcy5zdGF0ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU0FWRSBEQVRBOiAnLHJlc3BvbnNlKTtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwidzEwMFwiXG5cdFx0XHRcdHNob3c9e3RoaXMucHJvcHMuc2hvd01vZGFsfVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX1cblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+0JzQvtC00LjRhNC40LrQsNGG0LjQuCDQuCDRgNCw0LfQvNC10YDRizwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxQcm9kdWN0TW9kaWZpY2F0aW9uc1RhYmxlXG5cdFx0XHRcdFx0XHRpZD17dGhpcy5wcm9wcy5pZH1cblx0XHRcdFx0XHRcdGNvbHVtbnM9e3RoaXMuc3RhdGUuY29sdW1uc31cblx0XHRcdFx0XHRcdHJvd3M9e3RoaXMuc3RhdGUucm93c31cblx0XHRcdFx0XHRcdGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdGhhbmRsZUFkZD17dGhpcy5oYW5kbGVBZGQuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdHJvbGU9e3RoaXMucHJvcHMucm9sZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DYW5jZWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwic3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25TYXZlLmJpbmQodGhpcyl9PtCh0L7RhdGA0LDQvdC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvUHJvZHVjdE1vZGlmaWNhdGlvbnMuanNcbiAqKi8iLCJ2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xudmFyIGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxudmFyIGhlbHBlcnMgPSB7XG5cdGVkaXRNb2RpZmljYXRpb246IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHR1cmw6ICcvYWRtaW4vcHJvZHVjdHMvbW9kaWZpY2F0aW9uLWVkaXQnLFxuXHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRtb2RpZmljYXRpb25UYWJsZURhdGE6IGRhdGFcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6ZnVuY3Rpb24oeGhyLCBzdGF0dXMpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3InLCBzdGF0dXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRlZGl0TW9kaWZpY2F0aW9uUHJvcGVydHk6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuICQuYWpheCh7XG5cdFx0XHR1cmw6ICcvYWRtaW4vcHJvZHVjdHMvbW9kaWZpY2F0aW9uLXByb3BlcnR5LWVkaXQnLFxuXHRcdFx0dHlwZTogJ1BPU1QnLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRtb2RpZmljYXRpb25Qcm9wZXJ0eURhdGE6IGRhdGFcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6ZnVuY3Rpb24oeGhyLCBzdGF0dXMpe1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3InLCBzdGF0dXMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cdGRlbGV0ZU1vZGlmaWNhdGlvbjogZnVuY3Rpb24gKGlkKSB7XG5cdFx0cmV0dXJuIGF4aW9zLmdldChcIi9hZG1pbi9wcm9kdWN0cy9tb2RpZmljYXRpb24tZGVsLz9pZD1cIiArIGlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlscy9wcm9kdWN0TW9kaWZpY2F0aW9uSGVscGVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1RhYmxlXCI7XG5pbXBvcnQgbW9kaWZpY2F0aW9uSGVscGVycyBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9wcm9kdWN0TW9kaWZpY2F0aW9uSGVscGVyXCJcblxuaW1wb3J0IE1vZGlmaWNhdGlvbkhlYWRUYWJsZSBmcm9tIFwiLi9Nb2RpZmljYXRpb25IZWFkVGFibGVcIjtcbmltcG9ydCBNb2RpZmljYXRpb25Cb2R5VGFibGVSb3cgZnJvbSBcIi4vTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93XCI7XG5pbXBvcnQgTW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtIGZyb20gXCIuL01vZGlmaWNhdGlvblRhYmxlTmV3SXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25zVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRib2R5VGFibGUoKXtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5yb3dzLm1hcChmdW5jdGlvbiAocm93LCBpKSB7XG5cdFx0XHRyZXR1cm4gPE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1xuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdHJvdz17cm93fVxuXHRcdFx0XHRpbmRleD17aX1cblx0XHRcdFx0ey4uLnNlbGYucHJvcHN9XG5cdFx0XHQvPlxuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgY2xhc3NOYW1lPVwibWIwXCI+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8TW9kaWZpY2F0aW9uSGVhZFRhYmxlXHRjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IC8+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHR7dGhpcy5ib2R5VGFibGUoKX1cblx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PHRmb290PlxuXHRcdFx0XHRcdDxNb2RpZmljYXRpb25UYWJsZU5ld0l0ZW0gey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdFx0PC90Zm9vdD5cblx0XHRcdDwvVGFibGU+XG5cdFx0KVxuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25zVGFibGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kaWZpY2F0aW9uVGFibGVDb2x1bW4gZnJvbSBcIi4vTW9kaWZpY2F0aW9uVGFibGVDb2x1bW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uSGVhZFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDx0aD7ihJbihJYv0L/QvzwvdGg+XG5cdFx0XHRcdDx0aD7QndCw0LjQvNC10L3QvtCy0LDQvdC40LU8L3RoPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDxNb2RpZmljYXRpb25UYWJsZUNvbHVtblxuXHRcdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdFx0Y29sdW1uPXtjb2x1bW59IC8+XG5cdFx0XHRcdH0pfVxuXHRcdFx0XHQ8dGg+0JTQtdC50YHRgtCy0LjQtTwvdGg+XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbkhlYWRUYWJsZS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uVGFibGVDb2x1bW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDx0aD57dGhpcy5wcm9wcy5jb2x1bW4ubmFtZX08L3RoPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblRhYmxlQ29sdW1uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5pbXBvcnQgTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93VGQgZnJvbSBcIi4vTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93VGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2VJdGVtKGtleSl7XG5cdFx0dmFyIGRhdGEgPSB0aGlzLnByb3BzLnJvd3NbdGhpcy5wcm9wcy5pbmRleF07XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHRkYXRhLml0ZW1ba2V5XSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZGF0YSwgdGhpcy5wcm9wcy5pbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlVmFsdWUoaW5kZXgpe1xuXHRcdHZhciBkYXRhID0gdGhpcy5wcm9wcy5yb3dzW3RoaXMucHJvcHMuaW5kZXhdO1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0ZGF0YS52YWx1ZXNbaW5kZXhdLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnByb3BzLmhhbmRsZUNoYW5nZShkYXRhLCB0aGlzLnByb3BzLmluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRvbkRlbGV0ZSgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0sICgpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlRGVsZXRlKHRoaXMucHJvcHMuaW5kZXgpXG5cdFx0fSk7XG5cdH1cblxuXHRpdGVtUHJvcGVydHkoKXtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIHByb3BlcnRpZXMgPSB0aGlzLnByb3BzLnJvdy52YWx1ZXM7XG5cdFx0cmV0dXJuIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eSwgaSlcdHtcblx0XHRcdHJldHVybiA8TW9kaWZpY2F0aW9uQm9keVRhYmxlUm93VGRcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHR2YWx1ZT17cHJvcGVydHkudmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXtzZWxmLmhhbmRsZUNoYW5nZVZhbHVlKGkpLmJpbmQodGhpcyl9XG5cdFx0XHQvPlxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8TW9kaWZpY2F0aW9uQm9keVRhYmxlUm93VGRcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VJdGVtKCdvcmRlcicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMucm93Lml0ZW0ub3JkZXJ9XG5cdFx0XHRcdFx0Y2xhc3NUZD1cImNvbC1zbS0xXCIvPlxuXHRcdFx0XHQ8TW9kaWZpY2F0aW9uQm9keVRhYmxlUm93VGRcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VJdGVtKCdza3UnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnJvdy5pdGVtLnNrdX0vPlxuXG5cdFx0XHRcdHt0aGlzLml0ZW1Qcm9wZXJ0eSgpfVxuXG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRic1NpemU9XCJzbWFsbFwiXG5cdFx0XHRcdFx0XHRic1N0eWxlPVwiZGFuZ2VyXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3Blbi5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMucm9sZSAhPSAnYWRtaW4nfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJ0cmFzaFwiLz5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfVxuXHRcdFx0XHRcdFx0b25IaWRlPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCj0LTQsNC70LXQvdC40LUg0YLQvtCy0LDRgNC90L7QuSDQvNC+0LTQuNGE0LjQutCw0YbQuNC4PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXG5cdFx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwPtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINGC0L7QstCw0YDQvdGD0Y4g0LzQvtC00LjRhNC40LrQsNGG0LjRjjwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsZWFkXCI+e3RoaXMucHJvcHMucm93Lml0ZW0uc2t1fTwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8cD7RgdC+INCy0YHQtdC80Lgg0LfQvdCw0YfQtdC90LjRj9C80Lgg0YHQstC+0LnRgdGC0LIuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyl9PtCj0LTQsNC70LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Cb2R5VGFibGVSb3cuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGlmaWNhdGlvbkJvZHlUYWJsZVJvd1RkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93SW5wdXQ6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdFxuXHRvbkJsdXIoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93SW5wdXQ6IGZhbHNlfSlcblx0fVxuXG5cdG9uRm9jdXMoKXtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93SW5wdXQ6dHJ1ZX0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5yZWZzLmlucHV0LmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzVGR9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC1zbSBtYjBcIj5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5zaG93SW5wdXQgP1xuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHJlZj1cImlucHV0XCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMucHJvcHMub25DaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz4gOlxuXHRcdFx0XHRcdFx0PHNwYW4gb25DbGljaz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLnZhbHVlfTwvc3Bhbj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uQm9keVRhYmxlUm93VGQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBNb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlIGZyb20gXCIuL01vZGlmaWNhdGlvblRhYmxlTmV3VmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uVGFibGVOZXdJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpdGVtOiB7XG5cdFx0XHRcdGlkOiAnbmV3Jyxcblx0XHRcdFx0cGFyZW50SWQ6IHByb3BzLmlkLFxuXHRcdFx0XHRza3U6ICcnLFxuXHRcdFx0XHRvcmRlcjogJydcblx0XHRcdH0sXG5cdFx0XHR2YWx1ZXM6ICcnXG5cdFx0fTtcblx0XHR0aGlzLm5ld0l0ZW1WYWx1ZXMgPSB0aGlzLm5ld0l0ZW1WYWx1ZXMuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBuZXdJdGVtVmFsdWVzID0gdGhpcy5uZXdJdGVtVmFsdWVzKCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBuZXdJdGVtVmFsdWVzfSk7XG5cdH1cblxuXHRuZXdJdGVtVmFsdWVzKCl7XG5cdFx0dmFyIHBhcmFtcyA9IHRoaXMucHJvcHMuY29sdW1ucztcblx0XHRyZXR1cm4gcGFyYW1zLm1hcChmdW5jdGlvbiAocGFyYW0sIGkpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN1YnByb2RpY3RJZDogJycsXG5cdFx0XHRcdHBhcmFtSWQ6IHBhcmFtLmlkLFxuXHRcdFx0XHR2YWx1ZTogJydcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZU5ld1ZhbHVlKHZhbHVlLCBpbmRleCl7XG5cdFx0dGhpcy5zdGF0ZS52YWx1ZXNbaW5kZXhdLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0fVxuXG5cdG9uQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR0aGlzLnN0YXRlLml0ZW1ba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XG5cdFx0fTtcblx0fVxuXG5cdGFkZE5ld01vZGlmaWNhdGlvbihlKXtcblx0XHR2YXIgbmV3SXRlbSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYobmV3SXRlbS5pdGVtLnNrdSAmJiBuZXdJdGVtLml0ZW0ub3JkZXIpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGl0ZW06IHtcblx0XHRcdFx0XHRpZDogJ25ldycsXG5cdFx0XHRcdFx0cGFyZW50SWQ6IHRoaXMucHJvcHMucGFyZW50SWQsXG5cdFx0XHRcdFx0c2t1OiAnJyxcblx0XHRcdFx0XHRvcmRlcjogJydcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWVzOiB0aGlzLm5ld0l0ZW1WYWx1ZXMoKVxuXHRcdFx0fSwgKCkgPT4ge3RoaXMucHJvcHMuaGFuZGxlQWRkKG5ld0l0ZW0pfSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBuZXdWYWx1ZXNUZCA9IHRoaXMuc3RhdGUudmFsdWVzLm1hcChcblx0XHRcdChjb2x1bW4sIGkpID0+IDxNb2RpZmljYXRpb25UYWJsZU5ld1ZhbHVlXG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0aW5kZXg9e2l9XG5cdFx0XHRcdHZhbHVlPXtjb2x1bW4udmFsdWV9XG5cdFx0XHRcdGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VOZXdWYWx1ZS5iaW5kKHRoaXMpfS8+XG5cdFx0KTtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxuXHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwibWIwXCIgYnNTaXplPVwic21hbGxcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLml0ZW0ub3JkZXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdvcmRlcicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIiBic1NpemU9XCJzbWFsbFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtLnNrdX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ3NrdScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHR7bmV3VmFsdWVzVGR9XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU2l6ZT1cInNtYWxsXCIgYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmFkZE5ld01vZGlmaWNhdGlvbi5iaW5kKHRoaXMpfT7QlNC+0LHQsNCy0LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblRhYmxlTmV3SXRlbS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uVGFibGVOZXdWYWx1ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdG9uQ2hhbmdlKGUpe1xuXHRcdHZhciB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKHZhbHVlLCB0aGlzLnByb3BzLmluZGV4KTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDx0ZD5cblx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIiBic1NpemU9XCJzbWFsbFwiPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0PC90ZD5cblx0XHQpXG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblRhYmxlTmV3VmFsdWUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5pbXBvcnQgTW9kaWZpY2F0aW9uUHJvcGVydGllcyBmcm9tIFwiLi9Nb2RpZmljYXRpb25Qcm9wZXJ0aWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RNb2RpZmljYXRpb25Qcm9wZXJ0eUVkaXRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGU6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y2xvc2VNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGU6IGZhbHNlIH0pO1xuXHR9XG5cblx0b3Blbk1vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlOiB0cnVlIH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5vcGVuTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlLmJpbmQodGhpcyl9ID5cblx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLnRpdGxlKT88R2x5cGhpY29uIGdseXBoPVwiY29nXCIgLz46dGhpcy5wcm9wcy50aXRsZX1cblx0XHRcdFx0XHQ8TW9kaWZpY2F0aW9uUHJvcGVydGllc1xuXHRcdFx0XHRcdFx0ey4uLnRoaXMucHJvcHN9XG5cdFx0XHRcdFx0XHRzaG93TW9kYWw9e3RoaXMuc3RhdGUuc2hvd01vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZX1cblx0XHRcdFx0XHRcdGhpZGVNb2RhbD17dGhpcy5jbG9zZU1vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZS5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdClcblx0fTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Qcm9kdWN0TW9kaWZpY2F0aW9uUHJvcGVydHlFZGl0QnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuXG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcbmltcG9ydCBtb2RpZmljYXRpb25IZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9wcm9kdWN0TW9kaWZpY2F0aW9uSGVscGVyXCI7XG5cbmltcG9ydCBNb2RpZmljYXRpb25Qcm9wZXJ0aWVzVGFibGUgZnJvbSBcIi4vTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uUHJvcGVydGllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y29sdW1uczogW10sXG5cdFx0XHRkZWxldGVkOiBbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdGRhdGFIZWxwZXJzLmdldENhdGVnb3J5UHJvZHVjdE1vZGlmaWNhdGlvbih0aGlzLnByb3BzLmlkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2NvbHVtbnM6IHJlc3BvbnNlLmNvbHVtbnN9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGRhdGEsIGluZGV4KXtcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucztcblx0XHRjb2x1bW5zW2luZGV4XSA9IGRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y29sdW1uczogY29sdW1uc30pO1xuXHR9XG5cblx0aGFuZGxlRGVsZXRlKGluZGV4KXtcblx0XHRjb25zb2xlLmxvZygnREVMRVRFIFBST1BFUlRZOiAnLCB0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXhdKTtcblx0XHR2YXIgZGVsZXRlZCA9ICh0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXhdLmlkICE9ICduZXcnKVxuXHRcdFx0P1x0dGhpcy5zdGF0ZS5kZWxldGVkLmNvbmNhdCh0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXhdKVxuXHRcdFx0OiB0aGlzLnN0YXRlLmRlbGV0ZWQ7XG5cdFx0dmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnM7XG5cdFx0Y29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y29sdW1uczogY29sdW1ucyxcblx0XHRcdGRlbGV0ZWQ6IGRlbGV0ZWRcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUFkZChkYXRhKXtcblx0XHRjb25zb2xlLmxvZygnTkVXIFBST1BFUlRZOiAnLCBkYXRhKTtcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucy5jb25jYXQoZGF0YSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y29sdW1uczogY29sdW1uc30pO1xuXHR9XG5cblx0b25DYW5jZWwoKXtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeVByb2R1Y3RNb2RpZmljYXRpb24odGhpcy5wcm9wcy5pZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtjb2x1bW5zOiByZXNwb25zZS5jb2x1bW5zLCBkZWxldGVkOiBbXX0sICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmhpZGVNb2RhbCgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRvblNhdmUoZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMuaGlkZU1vZGFsKCk7XG5cdFx0Y29uc29sZS5sb2coJ1NFTkQgREFUQTogJywgdGhpcy5zdGF0ZSk7XG5cdFx0bW9kaWZpY2F0aW9uSGVscGVycy5lZGl0TW9kaWZpY2F0aW9uUHJvcGVydHkodGhpcy5zdGF0ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU0FWRSBEQVRBOiAnLHJlc3BvbnNlKTtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93TW9kYWx9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+0KHQstC+0LnRgdGC0LLQsCDRgtC+0LLQsNGA0L3Ri9GFINC80L7QtNC40YTQuNC60LDRhtC40LkgKNGI0LDQv9C60LAg0YLQsNCx0LvQuNGG0YspPC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZVxuXHRcdFx0XHRcdFx0aWQ9e3RoaXMucHJvcHMuaWR9XG5cdFx0XHRcdFx0XHRkYXRhVGFibGU9e3RoaXMuc3RhdGUuY29sdW1uc31cblx0XHRcdFx0XHRcdGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdGhhbmRsZURlbGV0ZT17dGhpcy5oYW5kbGVEZWxldGUuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdGhhbmRsZUFkZD17dGhpcy5oYW5kbGVBZGQuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdHJvbGU9e3RoaXMucHJvcHMucm9sZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DYW5jZWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwic3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25TYXZlLmJpbmQodGhpcyl9PtCh0L7RhdGA0LDQvdC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KVxuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uUHJvcGVydGllcy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZVwiO1xuXG5pbXBvcnQgTW9kaWZpY2F0aW9uUHJvcGVydHlUYWJsZVJvdyBmcm9tIFwiLi9Nb2RpZmljYXRpb25Qcm9wZXJ0eVRhYmxlUm93XCI7XG5pbXBvcnQgTW9kaWZpY2F0aW9uTmV3UHJvcGVydHkgZnJvbSBcIi4vTW9kaWZpY2F0aW9uTmV3UHJvcGVydHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uUHJvcGVydGllc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0bW9kaWZpY2F0aW9uUHJvcGVydGllcygpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5kYXRhVGFibGUubWFwKGZ1bmN0aW9uIChkYXRhLCBpKSB7XG5cdFx0XHRyZXR1cm4gPE1vZGlmaWNhdGlvblByb3BlcnR5VGFibGVSb3dcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRpbmRleD17aX1cblx0XHRcdFx0cHJvcGVydHk9e2RhdGF9XG5cdFx0XHRcdHsuLi5zZWxmLnByb3BzfVx0Lz5cblx0XHR9KTtcblx0fVxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PFRhYmxlIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+4oSW4oSWL9C/0L88L3RoPlxuXHRcdFx0XHRcdFx0PHRoPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiY29sLXNtLTJcIj7QlNC10LnRgdGC0LLQuNC1PC90aD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0e3RoaXMubW9kaWZpY2F0aW9uUHJvcGVydGllcygpfVxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8dGZvb3Q+XG5cdFx0XHRcdFx0PE1vZGlmaWNhdGlvbk5ld1Byb3BlcnR5IHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDwvdGZvb3Q+XG5cdFx0XHQ8L1RhYmxlPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvblByb3BlcnRpZXNUYWJsZS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kaWZpY2F0aW9uUHJvcGVydHlUYWJsZVJvdyBleHRlbmRzICBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dNb2RhbDogZmFsc2Vcblx0XHR9XG5cdH1cblx0XG5cdG9uQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLnByb3BlcnR5W2tleV0gPSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKHRoaXMucHJvcHMucHJvcGVydHksIHRoaXMucHJvcHMuaW5kZXgpO1xuXHRcdH1cblx0fVxuXHRcblx0b25EZWxldGUoKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9LCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb3BzLmhhbmRsZURlbGV0ZSh0aGlzLnByb3BzLmluZGV4KVxuXHRcdH0pO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMucHJvcHMucHJvcGVydHkub3JkZXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdvcmRlcicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnByb3BzLnByb3BlcnR5Lm5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9wZW4uYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMucHJvcHMucm9sZSAhPSAnYWRtaW4nfT5cblx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9XCJ0cmFzaFwiLz5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9XG5cdFx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuY2xvc2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGU+0KPQtNCw0LvQtdC90LjQtSDRgdCy0L7QudGB0YLQstCwINGC0L7QstCw0YDQvdC+0Lkg0LzQvtC00LjRhNC40LrQsNGG0LjQuDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblxuXHRcdFx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD7QktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDRgdCy0L7QudGB0YLQstC+PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cInt0aGlzLnByb3BzLnByb3BlcnR5Lm5hbWV9XCI8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHA+0JTQsNC90L3QvtC1INGB0LLQvtC50YHRgtCy0L4g0LHRg9C00LXRgiDRg9C00LDQu9C10L3QviDRgdC+INCy0YHQtdC80Lgg0LfQvdCw0YfQtdC90LjRj9C80Lgg0LLQviDQstGB0LXRhSDQvNC+0LTQuNGE0LjQutCw0YbQuNGP0YUg0LTQsNC90L3QvtCz0L4g0YLQvtCy0LDRgNCwICjRgi7QtSDQsdGD0LTQtdGCINGD0LTQsNC70LXQvSDQstC10YHRjCDRgdGC0L7Qu9Cx0LXRhiDQsiDRgtCw0LHQu9C40YbQtSDQvNC+0LTQuNGE0LjQutCw0YbQuNC5INGB0L4g0LLRgdC10LzQuCDQt9C90LDRh9C10L3QuNGP0LzQuCkuINCS0L7RgdGB0YLQsNC90L7QstC70LXQvdC40LUg0L3QtdCy0L7Qt9C80L7QttC90L4hPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyl9PtCj0LTQsNC70LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdE1vZGlmaWNhdG9ucy9Nb2RpZmljYXRpb25Qcm9wZXJ0eVRhYmxlUm93LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RpZmljYXRpb25OZXdQcm9wZXJ0eSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aWQ6ICduZXcnLFxuXHRcdFx0cHJvZHVjdElkOiB0aGlzLnByb3BzLmlkLFxuXHRcdFx0b3JkZXI6ICcnLFxuXHRcdFx0bmFtZTogJydcblx0XHR9XG5cdH1cblxuXHRvbkNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dGhpcy5zdGF0ZVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcblx0XHR9O1xuXHR9XG5cblx0YWRkTmV3UHJvcGVydHlNb2RpZmljYXRpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciBuZXdQcm9wZXJ0eSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYobmV3UHJvcGVydHkub3JkZXIgJiYgbmV3UHJvcGVydHkubmFtZSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aWQ6ICduZXcnLFxuXHRcdFx0XHRwcm9kdWN0SWQ6IHRoaXMucHJvcHMuaWQsXG5cdFx0XHRcdG9yZGVyOiAnJyxcblx0XHRcdFx0bmFtZTogJydcblx0XHRcdH0sICgpID0+IHt0aGlzLnByb3BzLmhhbmRsZUFkZChuZXdQcm9wZXJ0eSl9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIm1iMFwiPlxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUub3JkZXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCdvcmRlcicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0PEZvcm1Hcm91cCBjbGFzc05hbWU9XCJtYjBcIj5cblx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5hZGROZXdQcm9wZXJ0eU1vZGlmaWNhdGlvbi5iaW5kKHRoaXMpfT7QlNC+0LHQsNCy0LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdClcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0TW9kaWZpY2F0b25zL01vZGlmaWNhdGlvbk5ld1Byb3BlcnR5LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgR3JpZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HcmlkXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9JbnB1dEdyb3VwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1kYXRlLXBpY2tlclwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuaW1wb3J0IFNsdWdpZnkgZnJvbSBcIi4vLi4vLi4vdXRpbHMvc2x1Z2lmeUhlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUZvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6IHByb3BzLmRhdGEubmFtZSxcblx0XHRcdHBhdGg6IHByb3BzLmRhdGEucGF0aCxcblx0XHRcdGRlc2NyaXB0aW9uOiBwcm9wcy5kYXRhLnNDb250ZW50LFxuXHRcdFx0Y29udGVudE1hcmtkb3duOiBwcm9wcy5kYXRhLmNvbnRlbnRNYXJrZG93bixcblx0XHRcdGNvbnRlbnRIdG1sOiBwcm9wcy5kYXRhLmNvbnRlbnRIdG1sLFxuXHRcdFx0c29ydGluZzogcHJvcHMuZGF0YS5zb3J0aW5nLFxuXHRcdFx0dXBsb2FkUGF0aDogKCFwcm9wcy5kYXRhLnVwbG9hZFBhdGgpPycnOnByb3BzLmRhdGEudXBsb2FkUGF0aCxcblx0XHRcdGRhdGVUaW1lOiBwcm9wcy5kYXRhLnRpbWVzdGFtcCxcblx0XHRcdGltYWdlOiAoIXByb3BzLmRhdGEuaW1hZ2UpXG5cdFx0XHRcdD9cIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHRcdFx0OnByb3BzLmRhdGEuaW1hZ2Vcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRnZW5lcmF0ZVBhdGhGcm9tVGl0bGUoKXtcblx0XHR2YXIgdGl0bGUgPSB0aGlzLnN0YXRlLnRpdGxlO1xuXHRcdFNsdWdpZnkuZ2V0U2x1Z2lmeSh0aXRsZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChwYXRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3BhdGg6IHBhdGh9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRjb25zdCBpbWdTcmMgPSB0aGlzLnN0YXRlLnVwbG9hZFBhdGggKyB0aGlzLnN0YXRlLmltYWdlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e2ltZ1NyY30vPlxuXHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdDxDb2wgbWQ9ezl9PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7Ql9Cw0LPQvtC70L7QstC+0Lo8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbbmFtZV1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndGl0bGUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+VXJsPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxJbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLmdlbmVyYXRlUGF0aEZyb21UaXRsZS5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD1cInJlZnJlc2hcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlVybFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdwYXRoJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LU8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQmtGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2Vbc0NvbnRlbnRdXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2VbY29udGVudE1hcmtkb3duXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0JTQsNGC0LAg0YHRgtCw0YLRjNC4PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PERhdGVQaWNrZXJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVUaW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3RpbWVzdGFtcF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkYXRlVGltZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRjYWxlbmRhclBsYWNlbWVudD1cInRvcFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbCBjbGFzc05hbWU9XCJtbHIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWVkaWEvTWVkaWFGb3JtRWRpdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBHbHlwaGljb24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR2x5cGhpY29uXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhQ2F0ZWdvcmllc0Zvcm1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6ICghcHJvcHMuZGF0YS50aXRsZSk/cHJvcHMuZGF0YS5uYW1lOnByb3BzLmRhdGEudGl0bGUsXG5cdFx0XHRwYXRoOiBwcm9wcy5kYXRhLnBhdGgsXG5cdFx0XHRkZXNjcmlwdGlvbjogcHJvcHMuZGF0YS5kZXNjcmlwdGlvbixcblx0XHRcdHNvcnRpbmc6IHByb3BzLmRhdGEuc29ydGluZyxcblx0XHRcdHVwbG9hZFBhdGg6ICghcHJvcHMuZGF0YS51cGxvYWRQYXRoKT8nJzpwcm9wcy5kYXRhLnVwbG9hZFBhdGgsXG5cdFx0XHRpbWFnZTogKCFwcm9wcy5kYXRhLmltYWdlKVxuXHRcdFx0XHQ/XCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiXG5cdFx0XHRcdDpwcm9wcy5kYXRhLmltYWdlXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0Z2VuZXJhdGVQYXRoRnJvbVRpdGxlKCl7XG5cdFx0dmFyIHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgaW1nU3JjID0gdGhpcy5zdGF0ZS51cGxvYWRQYXRoICsgdGhpcy5zdGF0ZS5pbWFnZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXtpbWdTcmN9Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3RpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5Vcmw8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuZ2VuZXJhdGVQYXRoRnJvbVRpdGxlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8R2x5cGhpY29uIGdseXBoPVwicmVmcmVzaFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGF0aH1cblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVXJsXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtwYXRoXVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3BhdGgnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3NvcnRpbmddXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWVkaWEvTWVkaWFDYXRlZ29yaWVzRm9ybUVkaXQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRm9ybVNlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bWV0YVRpdGxlIDogcHJvcHMuZGF0YS5tZXRhVGl0bGUsXG5cdFx0XHRtZXRhRGVzY3JpcHRpb246IHByb3BzLmRhdGEubWV0YURlc2NyaXB0aW9uLFxuXHRcdFx0bWV0YUtleXdvcmRzOiBwcm9wcy5kYXRhLm1ldGFLZXl3b3Jkc1xuXHRcdH1cblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwibW9kYWwtbGdcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLmRhdGEudGl0bGUpP3RoaXMucHJvcHMuZGF0YS5uYW1lOnRoaXMucHJvcHMuZGF0YS50aXRsZX1cblx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRhY3Rpb249eycvYWRtaW4vJyt0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcisnLycrdGhpcy5wcm9wcy5hY3Rpb24rJy8nK3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdGlkPVwiZm9ybU1vZGFsXCJcblx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0ZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+bWV0YSBUaXRsZTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBtZXRhIFRpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1TZW9bbWV0YVRpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWV0YVRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnbWV0YVRpdGxlJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD5tZXRhIERlc2NyaXB0aW9uPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW50ZXIgbWV0YSBEZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtU2VvW21ldGFEZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm1ldGFEZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ21ldGFEZXNjcmlwdGlvbicpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjRcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPm1ldGEgS2V5d29yZHM8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbnRlciBtZXRhIEtleXdvcmRzXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1TZW9bbWV0YUtleXdvcmRzXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWV0YUtleXdvcmRzfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnbWV0YUtleXdvcmRzJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPtCU0L7QsdCw0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1TZW8uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5cbmltcG9ydCBEZWZhdWx0Rm9ybUFkZCBmcm9tIFwiLi9EZWZhdWx0Rm9ybUFkZFwiO1xuaW1wb3J0IENhdGVnb3JpZXNGb3JtQWRkIGZyb20gXCIuLi9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc0Zvcm1BZGRcIjtcbmltcG9ydCBQcm9kdWN0Rm9ybUFkZCBmcm9tIFwiLi4vQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0Rm9ybUFkZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1zQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpXG5cdH1cblxuXHRzZWxlY3RFZGl0SW5wdXRzKCl7XG5cdFx0c3dpdGNoICh0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcil7XG5cdFx0XHRjYXNlIFwiY2F0ZWdvcmllc1wiOiByZXR1cm4gPENhdGVnb3JpZXNGb3JtQWRkIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0Y2FzZSBcInByb2R1Y3RzXCI6IHJldHVybiA8UHJvZHVjdEZvcm1BZGQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gPERlZmF1bHRGb3JtQWRkIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdGRpYWxvZ0NsYXNzTmFtZT1cIncxMDBcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1sZ1wiIGNsYXNzTmFtZT1cImgzXCI+XG5cdFx0XHRcdFx0XHR7KCF0aGlzLnByb3BzLmRhdGEudGl0bGUpP3RoaXMucHJvcHMuZGF0YS5uYW1lOnRoaXMucHJvcHMuZGF0YS50aXRsZX1cblx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRhY3Rpb249eycvYWRtaW4vJyt0aGlzLnByb3BzLmRhdGEuY29udHJvbGxlcisnLycrdGhpcy5wcm9wcy5hY3Rpb24rJy8nK3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdGlkPVwiZm9ybU1vZGFsXCJcblx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0ZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt0aGlzLnNlbGVjdEVkaXRJbnB1dHMoKX1cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLnRleHRDbG9zZUJ0bn08L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QlNC+0LHQsNCy0LjRgtGMPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpO1xuXG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1zQWRkLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgR3JpZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HcmlkXCI7XG5pbXBvcnQgUm93IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL1Jvd1wiO1xuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db2xcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRGb3JtQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZSA6ICcnLFxuXHRcdFx0cGF0aDogJycsXG5cdFx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0XHRjb250ZW50TWFya2Rvd246ICcnLFxuXHRcdFx0Y29udGVudEh0bWw6ICcnLFxuXHRcdFx0c29ydGluZzogMCxcblx0XHRcdGltYWdlOiBcIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCJcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHR0aXRsZUNoYW5nZShlKXtcblx0XHR2YXIgdGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRlbGV0ZT1cImhpZGRlblwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFQYWdlW3RpdGxlXVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCd0aXRsZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXt0aGlzLnRpdGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFQYWdlW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXRofVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0YDQsNGC0LrQvtC1INC+0L/QuNGB0LDQvdC40LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtkZXNjcmlwdGlvbl1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI0XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QotC10LrRgdGCINC90LAg0YHRgtGA0LDQvdC40YbQtSAobWFya2Rvd24pPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LVcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXRhUGFnZVtjb250ZW50TWFya2Rvd25dXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YVBhZ2Vbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc29ydGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnc29ydGluZycpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxJbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YVBhZ2VbY29udGVudEh0bWxdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50SFRNTH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9EZWZhdWx0Rm9ybUFkZC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEdyaWQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3dcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiO1xuXG5pbXBvcnQgSW1hZ2VzVXBsb2FkIGZyb20gXCIuLy4uLy4uLy4uL3V0aWxzL0ltYWdlc1VwbG9hZFwiO1xuaW1wb3J0IFNsdWdpZnkgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvc2x1Z2lmeUhlbHBlclwiO1xuaW1wb3J0IGNhdGVnb3J5SGVscGVycyBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmltcG9ydCBDYXRlZ29yeVJlcGxhY2UgZnJvbSBcIi4vQ2F0ZWdvcnlSZXBsYWNlQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3JpZXNGb3JtQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuYW1lIDogJycsXG5cdFx0XHRwYXRoOiAnJyxcblx0XHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRcdGNvbnRlbnRNYXJrZG93bjogJycsXG5cdFx0XHRjb250ZW50SHRtbDogJycsXG5cdFx0XHRzb3J0aW5nOiAwLFxuXHRcdFx0aW1hZ2U6IFwiL2ZpbGVzL2ltYWdlcy9wcm9kdWN0LzIwMTItMDUtMjJfZm90b19udi5qcGdcIixcblx0XHRcdHBhcmVudElkOiBwcm9wcy5kYXRhLmlkLFxuXHRcdFx0cGFyZW50Q2F0ZWdvcnlJbmZvOiBwcm9wcy5kYXRhLFxuXHRcdFx0Y2F0ZWdvcnlMaXN0OiAnJ1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBwYXJlbnRJZCA9IHRoaXMucHJvcHMuZGF0YS5pZDtcblxuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDdXJyZW50R2F0ZWdvcnlMaXN0KHBhcmVudElkKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oY2F0ZWdvcnlMaXN0KXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Y2F0ZWdvcnlMaXN0OiBjYXRlZ29yeUxpc3R9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHR0aXRsZUNoYW5nZShlKXtcblx0XHR2YXIgdGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcblx0XHRTbHVnaWZ5LmdldFNsdWdpZnkodGl0bGUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocGF0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwYXRoOiBwYXRofSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0c2VsZWN0Q2F0ZWdvcnkoaWQpe1xuXHRcdGNvbnNvbGUubG9nKCdTRUxFQ1RFRCBDQVRFR09SWScsaWQpO1xuXHRcdGNhdGVnb3J5SGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihjYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRwYXJlbnRDYXRlZ29yeUluZm86IGNhdGVnb3J5SW5mbyxcblx0XHRcdFx0XHRwYXJlbnRJZDogaWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGZsdWlkPXt0cnVlfT5cblx0XHRcdFx0PFJvdyBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Q29sIG1kPXszfT5cblx0XHRcdFx0XHRcdDxJbWFnZXNVcGxvYWQgaW1hZ2U9e3RoaXMuc3RhdGUuaW1hZ2V9IGRlbGV0ZT1cImhpZGRlblwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0JfQsNCz0L7Qu9C+0LLQvtC6PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtuYW1lXVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCduYW1lJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9e3RoaXMudGl0bGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgbmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbcGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLnBhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHQgcmVxdWlyZWRcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCg0L7QtNC40YLQtdC70YzRgdC60LDRjyDQutCw0YLQtdCz0L7RgNC40Y88L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHRcdFx0PElucHV0R3JvdXAuQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PENhdGVnb3J5UmVwbGFjZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50Q2F0ZWdvcnk9e3RoaXMucHJvcHMuZGF0YX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2F0ZWdvcnlMaXN0PXt0aGlzLnN0YXRlLmNhdGVnb3J5TGlzdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0Q2F0ZWdvcnk9e3RoaXMuc2VsZWN0Q2F0ZWdvcnkuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9JbnB1dEdyb3VwLkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnBhcmVudENhdGVnb3J5SW5mby5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0lucHV0R3JvdXA+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0J7Qv9C40YHQsNC90LjQtSDQutCw0YLQtdCz0L7RgNC40Lg8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1INC60LDRgtC10LPQvtGA0LjQuFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2NyaXB0aW9uJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiNFwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+0KLQtdC60YHRgiDQvdCwINGB0YLRgNCw0L3QuNGG0LUgKG1hcmtkb3duKTwvQ29udHJvbExhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCi0LXQutGB0YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtjb250ZW50TWFya2Rvd25dXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50TWFya2Rvd259XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdjb250ZW50TWFya2Rvd24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtQ2F0ZWdvcnlbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdzb3J0aW5nJykuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YUZvcm1DYXRlZ29yeVtwYXJlbnRJZF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLnBhcmVudElkfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0PC9Sb3c+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KTtcblx0fVxuXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9DYXRhbG9nL0NhdGVnb3JpZXMvQ2F0ZWdvcmllc0Zvcm1BZGQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBHcmlkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dyaWRcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvUm93XCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcbmltcG9ydCBIZWxwQmxvY2sgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvSGVscEJsb2NrXCI7XG5cbmltcG9ydCBJbWFnZXNVcGxvYWQgZnJvbSBcIi4vLi4vLi4vLi4vdXRpbHMvSW1hZ2VzVXBsb2FkXCI7XG5pbXBvcnQgU2x1Z2lmeSBmcm9tIFwiLi8uLi8uLi8uLi91dGlscy9zbHVnaWZ5SGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RGb3JtQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRza3U6ICcnLFxuXHRcdFx0bmFtZSA6ICcnLFxuXHRcdFx0cGF0aDogJycsXG5cdFx0XHRmdWxsUGF0aDogJycsXG5cdFx0XHRkZXNjcmlwdGlvbjogJycsXG5cdFx0XHRjb250ZW50TWFya2Rvd246ICcnLFxuXHRcdFx0Y29udGVudEh0bWw6ICcnLFxuXHRcdFx0c29ydGluZzogMCxcblx0XHRcdGltYWdlOiBcIi9maWxlcy9pbWFnZXMvcHJvZHVjdC8yMDEyLTA1LTIyX2ZvdG9fbnYuanBnXCIsXG5cdFx0XHRkcmFmdDogXCIvZmlsZXMvaW1hZ2VzL3Byb2R1Y3QvMjAxMi0wNS0yMl9mb3RvX252LmpwZ1wiLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0ZXJyb3JIZWxwOiAnRXJyb3IuJ1xuXHRcdH1cblx0fVxuXG5cdG9uQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0c2t1T25DaGFuZ2UoZSl7XG5cdFx0dmFyIGlucHV0ID0gZS50YXJnZXQ7XG5cdFx0dmFyIHNrdSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c2t1OiBza3Vcblx0XHR9LCgpID0+IHt0aGlzLnZhbGlkYXRlSW5wdXQoaW5wdXQpfSk7XG5cdH1cblxuXHR2YWxpZGF0ZUlucHV0KGlucHV0KXtcblx0XHRTbHVnaWZ5LmdldFByb2R1Y3RTbHVnaWZ5KGlucHV0LnZhbHVlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdFx0XHRpZighcmVzdWx0LmVycm9yKXtcblx0XHRcdFx0XHR2YXIgcGF0aCA9IHJlc3VsdC5wYXRoO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0cGF0aDogcGF0aCxcblx0XHRcdFx0XHRcdGZ1bGxQYXRoOiB0aGlzLnByb3BzLmRhdGEuZnVsbFBhdGggKyAnLycgKyBwYXRoLFxuXHRcdFx0XHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0XHRcdFx0ZXJyb3JIZWxwOiAnRXJyb3IuJ1xuXHRcdFx0XHRcdH0sIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZXtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGVycm9yOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZXJyb3JIZWxwOiByZXN1bHQuZXJyb3Jcblx0XHRcdFx0XHR9LCBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShyZXN1bHQuZXJyb3IgKyAnINCd0LDQtNC+INC40YHQv9GA0LDQstC40YLRjCEnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8R3JpZCBmbHVpZD17dHJ1ZX0+XG5cdFx0XHRcdDxSb3cgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PENvbCBtZD17M30+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzVXBsb2FkIGltYWdlPXt0aGlzLnN0YXRlLmltYWdlfSBkZWxldGU9XCJoaWRkZW5cIiBpbnB1dE5hbWU9XCJmaWxlTG9hZEltYWdlXCIvPlxuXHRcdFx0XHRcdFx0PEltYWdlc1VwbG9hZCBpbWFnZT17dGhpcy5zdGF0ZS5kcmFmdH0gZGVsZXRlPVwiaGlkZGVuXCIgaW5wdXROYW1lPVwiZmlsZUxvYWREcmFmdFwiLz5cblx0XHRcdFx0XHQ8L0NvbD5cblx0XHRcdFx0XHQ8Q29sIG1kPXs5fT5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXAgY2xhc3NOYW1lPXsoIXRoaXMuc3RhdGUuZXJyb3IpPycnOidoYXMtZXJyb3InfT5cblx0XHRcdFx0XHRcdFx0PENvbnRyb2xMYWJlbD7QmtC+0LQg0YLQvtCy0LDRgNCwPC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCa0L7QtCDRgtC+0LLQsNGA0LBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwic2t1XCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tza3VdXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5za3V9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuc2t1T25DaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8SGVscEJsb2NrPnt0aGlzLnN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3JIZWxwfTwvSGVscEJsb2NrPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Q29udHJvbExhYmVsPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgtC+0LLQsNGA0LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGC0L7QstCw0YDQsFwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbbmFtZV1cIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ25hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDxGb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWw+T9C/0LjRgdCw0L3QuNC1PC9Db250cm9sTGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudENsYXNzPVwidGV4dGFyZWFcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwi0J7Qv9C40YHQsNC90LjQtVwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbZGVzY3JpcHRpb25dXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5vbkNoYW5nZSgnZGVzY3JpcHRpb24nKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHRcdDxDb250cm9sTGFiZWwgY2xhc3NOYW1lPVwibXIyXCI+0KHQvtGA0YLQuNGA0L7QstC60LA8L0NvbnRyb2xMYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bWluPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRhdGFGb3JtUHJvZHVjdHNbc29ydGluZ11cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMub25DaGFuZ2UoJ3NvcnRpbmcnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1Hcm91cD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IG5hbWU9XCJkYXRhRm9ybVByb2R1Y3RzW3BhdGhdXCJcblx0XHRcdFx0XHRcdFx0XHRcdCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXRofVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiZGF0YUZvcm1Qcm9kdWN0c1tmdWxsUGF0aF1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0IHZhbHVlPXt0aGlzLnN0YXRlLmZ1bGxQYXRofVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdCBuYW1lPVwiY2F0ZWdvcnlJZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU9e3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdDwvUm93PlxuXHRcdFx0PC9HcmlkPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0Rm9ybUFkZC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0XCI7XG5pbXBvcnQgR2x5cGhpY29uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0dseXBoaWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1EZWxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlKClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGg1PtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINGN0YLQvtGCINGA0LDQt9C00LXQuyE8L2g1PlxuXHRcdFx0XHRcdFx0PEFsZXJ0IGJzU3R5bGU9XCJkYW5nZXJcIj5cblx0XHRcdFx0XHRcdFx0PEdseXBoaWNvbiBnbHlwaD0nd2FybmluZy1zaWduJyBjbGFzc05hbWUgPSAnbXIxJy8+XG5cdFx0XHRcdFx0XHRcdNCS0YHQtSA8c3Ryb25nPtC/0L7QtNGA0LDQt9C00LXQu9GLPC9zdHJvbmc+INC4INGB0YPRidC10YHRgtCy0YPRjtGJ0LjQtSA8c3Ryb25nPtGC0L7QstCw0YDRizwvc3Ryb25nPiDQsiDRjdGC0LjRhSDQv9C+0LTRgNCw0LfQtNC10LvQsNGFINC90LAg0YHQsNC50YLQtSDQvtGC0L7QsdGA0LDQttCw0YLRjNGB0Y8g0L3QtSDQsdGD0LTRg9GCIVxuXHRcdFx0XHRcdFx0PC9BbGVydD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gZm9ybT1cImZvcm1Nb2RhbFwiIGJzU3R5bGU9XCJkYW5nZXJcIiB0eXBlPVwic3VibWl0XCI+0KPQtNCw0LvQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1EZWxldGUuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1EZWxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlKClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PHA+0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGN0YLQvtGCINGA0LDQt9C00LXQuyE8L3A+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QktC+0YHRgdGC0LDQvdC+0LLQuNGC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1SZWNvdmVyLmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBBbGVydCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9BbGVydFwiO1xuaW1wb3J0IEdseXBoaWNvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9HbHlwaGljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxGb3JtRGlzYWJsZWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5oaWRlKClcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImJsb2NrXCI+e3RoaXMucHJvcHMudGl0bGV9PC9zbWFsbD5cblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGg1PtCS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGB0LrRgNGL0YLRjCDRjdGC0L7RgiDRgNCw0LfQtNC10LshPC9oNT5cblx0XHRcdFx0XHRcdDxBbGVydCBic1N0eWxlPVwiZGFuZ2VyXCI+XG5cdFx0XHRcdFx0XHRcdDxHbHlwaGljb24gZ2x5cGg9J3dhcm5pbmctc2lnbicgY2xhc3NOYW1lID0gJ21yMScvPlxuXHRcdFx0XHRcdFx0XHTQktGB0LUgPHN0cm9uZz7Qv9C+0LTRgNCw0LfQtNC10LvRizwvc3Ryb25nPiDQuCDRgdGD0YnQtdGB0YLQstGD0Y7RidC40LUgPHN0cm9uZz7RgtC+0LLQsNGA0Ys8L3N0cm9uZz4g0LIg0Y3RgtC40YUg0L/QvtC00YDQsNC30LTQtdC70LDRhSDQvdCwINGB0LDQudGC0LUg0L7RgtC+0LHRgNCw0LbQsNGC0YzRgdGPINC90LUg0LHRg9C00YPRgiFcblx0XHRcdFx0XHRcdDwvQWxlcnQ+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjdXJyZW50VXJsXCIgdmFsdWU9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfS8+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7QodC60YDRi9GC0Yw8L0J1dHRvbj5cblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdCk7XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL01vZGFsRm9ybXMvTW9kYWxGb3JtRGlzYWJsZWQuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEZvcm1EaXNhYmxlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3RoaXMucHJvcHMuc2hvd31cblx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdHsoIXRoaXMucHJvcHMuZGF0YS50aXRsZSk/dGhpcy5wcm9wcy5kYXRhLm5hbWU6dGhpcy5wcm9wcy5kYXRhLnRpdGxlfVxuXHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi8nK3RoaXMucHJvcHMuZGF0YS5jb250cm9sbGVyKycvJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdGlkPVwiZm9ybU1vZGFsXCJcblx0XHRcdFx0XHRtZXRob2Q9XCJwb3N0XCJcblx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8cD7QktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LrQsNC30LDRgtGMINGN0YLQvtGCINGA0LDQt9C00LXQuyE8L3A+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY3VycmVudFVybFwiIHZhbHVlPXt3aW5kb3cubG9jYXRpb24uaHJlZn0vPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuXHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7Qn9C+0LrQsNC30LDRgtGMPC9CdXR0b24+XG5cdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHQ8L01vZGFsPlxuXG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTW9kYWxGb3Jtcy9Nb2RhbEZvcm1FbmFibGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tIFwiLi9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50XCI7XG5pbXBvcnQgTW9kYWxDb21wb25lbnQgZnJvbSBcIi4vTW9kYWxDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUJ1dHRvbnNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3c6IGZhbHNlLFxuXHRcdFx0YWN0aW9uOiAnJyxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGRhdGE6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHNob3dNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlfSk7XG5cdH1cblxuXHRoaWRlTW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdHZhciBjb250cm9sbGVyID0gdGhpcy5wcm9wcy5kYXRhSXRlbS5jb250cm9sbGVyLFxuXHRcdFx0XHRpZCA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uaWQ7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0RGF0YUluZm8oY29udHJvbGxlciwgaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhSW5mbyl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGRhdGFJbmZvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXHRcblx0aGFuZGxlckNsaWNrQnV0dG9uKGFjdGlvbiwgdGl0bGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aW9uOiBhY3Rpb24sXG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRzaG93OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCBic1N0eWxlID0gKHRoaXMucHJvcHMuZGF0YUl0ZW0uYnNzdHlsZSk/dGhpcy5wcm9wcy5kYXRhSXRlbS5ic3N0eWxlOidkZWZhdWx0JztcblxuXHRcdGNvbnN0IEJ1dHRvbnMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwiZWRpdFwiLFxuXHRcdFx0XHRlbmFibGU6IHRydWUsXG5cdFx0XHRcdGFjdGlvbjogXCJlZGl0XCIsXG5cdFx0XHRcdHJvbGU6IFsnbWFuYWdlcicsICdhZG1pbiddLFxuXHRcdFx0XHR0aXRsZTpcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwidHJhc2hcIixcblx0XHRcdFx0ZW5hYmxlOiAhdGhpcy5wcm9wcy5kYXRhSXRlbS5kZWxldGVkLFxuXHRcdFx0XHRhY3Rpb246IFwiZGVsZXRlXCIsXG5cdFx0XHRcdHJvbGU6IFsnYWRtaW4nXSxcblx0XHRcdFx0dGl0bGU6XCLQo9C00LDQu9C40YLRjFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcIm9wZW5cIixcblx0XHRcdFx0ZW5hYmxlOiB0aGlzLnByb3BzLmRhdGFJdGVtLmRlbGV0ZWQsXG5cdFx0XHRcdGFjdGlvbjogXCJyZWNvdmVyXCIsXG5cdFx0XHRcdHJvbGU6IFsnYWRtaW4nXSxcblx0XHRcdFx0dGl0bGU6XCLQktC+0YFj0YLQsNC90L7QstC40YLRjFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcImV5ZS1jbG9zZVwiLFxuXHRcdFx0XHRlbmFibGU6IHRoaXMucHJvcHMuZGF0YUl0ZW0uYWN0aXZlICYmICF0aGlzLnByb3BzLmRhdGFJdGVtLmRlbGV0ZWQsXG5cdFx0XHRcdGFjdGlvbjogXCJkaXNhYmxlZFwiLFxuXHRcdFx0XHRyb2xlOiBbJ2FkbWluJ10sXG5cdFx0XHRcdHRpdGxlOlwi0KHQutGA0YvRgtGMXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGljb246IFwiZXllLW9wZW5cIixcblx0XHRcdFx0ZW5hYmxlOiAhdGhpcy5wcm9wcy5kYXRhSXRlbS5hY3RpdmUgJiYgIXRoaXMucHJvcHMuZGF0YUl0ZW0uZGVsZXRlZCxcblx0XHRcdFx0YWN0aW9uOiBcImVuYWJsZWRcIixcblx0XHRcdFx0cm9sZTogWydhZG1pbiddLFxuXHRcdFx0XHR0aXRsZTpcItCf0L7QutCw0LfQsNGC0YxcIlxuXHRcdFx0fVxuXHRcdF1cblx0XHRcdC8qLmZpbHRlcihcblx0XHRcdFx0KGJ1dHRvbikgPT4gYnV0dG9uLmVuYWJsZSAmJiBidXR0b24ucm9sZS5pbmRleE9mKHRoaXMucHJvcHMuZGF0YUl0ZW0ucm9sZSkgIT0gLTFcblx0XHRcdCkqL1xuXHRcdFx0Lm1hcChcblx0XHRcdFx0KGJ1dHRvbiwgaSkgPT4gYnV0dG9uLmVuYWJsZSAmJiA8QnV0dG9uQ29tcG9uZW50XG5cdFx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRcdGJzU3R5bGU9e2JzU3R5bGV9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVyQ2xpY2tCdXR0b24uYmluZCh0aGlzKX1cblx0XHRcdFx0XHRhY3Rpb249e2J1dHRvbi5hY3Rpb259XG5cdFx0XHRcdFx0aWNvbj17YnV0dG9uLmljb259XG5cdFx0XHRcdFx0dGl0bGU9e2J1dHRvbi50aXRsZX1cblx0XHRcdFx0XHRkaXNhYmxlZD17IShidXR0b24ucm9sZS5pbmRleE9mKHRoaXMucHJvcHMuZGF0YUl0ZW0ucm9sZSkgIT0gLTEpfS8+XG5cdFx0XHQpO1xuXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXNtXCI+XG5cdFx0XHRcdHtCdXR0b25zfVxuXHRcdFx0XHQ8TW9kYWxDb21wb25lbnRcblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3d9XG5cdFx0XHRcdFx0aGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0dGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0YWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblxuXHR9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSXRlbUJ1dHRvbnNDb21wb25lbnQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tIFwiLi9QYW5lbEJ1dHRvbnMvQnV0dG9uQ29tcG9uZW50XCI7XG5pbXBvcnQgRm9ydW1BY3Rpb25zIGZyb20gXCIuL0ZvcnVtL0ZvcnVtQWN0aW9uc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcnVtQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93OmZhbHNlLFxuXHRcdFx0YWN0aW9uOiAnJyxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdGRhdGE6ICcnXG5cdFx0fVxuXHR9XG5cblx0c2hvd01vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IHRydWV9KTtcblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiBmYWxzZX0pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0RGF0YUluZm8oJ2ZvcnVtJywgdGhpcy5wcm9wcy5kYXRhSXRlbS5pZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGFJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogZGF0YUluZm9cblx0XHRcdFx0fSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0aGFuZGxlckNsaWNrQnV0dG9uKGFjdGlvbiwgdGl0bGUpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aW9uOiBhY3Rpb24sXG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRzaG93OiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgQnV0dG9ucyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogXCJzaGFyZVwiLFxuXHRcdFx0XHRlbmFibGU6IHRoaXMucHJvcHMuZGF0YUl0ZW0ucXVlc3Rpb24sXG5cdFx0XHRcdGFjdGlvbjogXCJyZXBseVwiLFxuXHRcdFx0XHR0aXRsZTpcItCe0YLQstC10YIg0L3QsCDRgdC+0L7QsdGJ0LXQvdC40LVcIixcblx0XHRcdFx0c3R5bGU6IFwic3VjY2Vzc1wiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpY29uOiBcImVkaXRcIixcblx0XHRcdFx0ZW5hYmxlOiB0aGlzLnByb3BzLmRhdGFJdGVtLnJlcGxhY2UsXG5cdFx0XHRcdGFjdGlvbjogXCJlZGl0XCIsXG5cdFx0XHRcdHRpdGxlOlwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0YHQvtC+0LHRidC10L3QuNC1XCIsXG5cdFx0XHRcdHN0eWxlOiBcImRlZmF1bHRcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWNvbjogXCJ0cmFzaFwiLFxuXHRcdFx0XHRlbmFibGU6ICF0aGlzLnByb3BzLmRhdGFJdGVtLmRlbGV0ZSxcblx0XHRcdFx0YWN0aW9uOiBcImRlbGV0ZVwiLFxuXHRcdFx0XHR0aXRsZTpcItCj0LTQsNC70LjRgtGMINGB0L7QvtCx0YnQtdC90LjQtVwiLFxuXHRcdFx0XHRzdHlsZTogKHRoaXMucHJvcHMuZGF0YUl0ZW0ucXVlc3Rpb24pP1wiZGFuZ2VyXCI6XCJkZWZhdWx0XCJcblx0XHRcdH1cblx0XHRdLm1hcChcblx0XHRcdChidXR0b24sIGkpID0+IGJ1dHRvbi5lbmFibGUgJiYgPEJ1dHRvbkNvbXBvbmVudFxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGJzU3R5bGU9e2J1dHRvbi5zdHlsZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVyQ2xpY2tCdXR0b24uYmluZCh0aGlzKX1cblx0XHRcdFx0YWN0aW9uPXtidXR0b24uYWN0aW9ufVxuXHRcdFx0XHRpY29uPXtidXR0b24uaWNvbn1cblx0XHRcdFx0dGl0bGU9e2J1dHRvbi50aXRsZX0vPlxuXHRcdCk7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc21cIj5cblx0XHRcdFx0e0J1dHRvbnN9XG5cdFx0XHRcdDxGb3J1bUFjdGlvbnNcblx0XHRcdFx0XHRzaG93PXt0aGlzLnN0YXRlLnNob3d9XG5cdFx0XHRcdFx0aGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG5cdFx0XHRcdFx0dGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG5cdFx0XHRcdFx0YWN0aW9uPXt0aGlzLnN0YXRlLmFjdGlvbn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ydW1CdXR0b25Db21wb25lbnQuanNcbiAqKi8iLCIvKlxuICogQ3JlYXRlZCBieSBBbHBoYS1IeWRyby5cbiAqICBAbGluayBodHRwOi8vd3d3LmFscGhhLWh5ZHJvLmNvbVxuICogIEBhdXRob3IgVmxhZGltaXIgTWlraGF5bG92IDxhZG1pbkBhbHBoYS1oeWRyby5jb20+XG4gKiAgQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTYsIEFscGhhLUh5ZHJvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvcnVtUmVwbGFjZSBmcm9tIFwiLi9Gb3J1bVJlcGxhY2VcIjtcbmltcG9ydCBGb3J1bUVkaXQgZnJvbSBcIi4vRm9ydW1FZGl0XCI7XG5pbXBvcnQgRm9ydW1EZWxldGUgZnJvbSBcIi4vRm9ydW1EZWxldGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW1BY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgZm9ydW1BY3Rpb24gPSAoKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKHRoaXMucHJvcHMuYWN0aW9uKSB7XG5cdFx0XHRcdGNhc2UgXCJlZGl0XCI6XG5cdFx0XHRcdFx0cmV0dXJuIDxGb3J1bUVkaXQgey4uLnRoaXMucHJvcHN9Lz47XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWxldGVcIjpcblx0XHRcdFx0XHRyZXR1cm4gPEZvcnVtRGVsZXRlIHsuLi50aGlzLnByb3BzfS8+O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicmVwbHlcIjpcblx0XHRcdFx0XHRyZXR1cm4gPEZvcnVtUmVwbGFjZSB7Li4udGhpcy5wcm9wc30vPjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gZm9ydW1BY3Rpb24oKTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1BY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J1bVJlcGxhY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlcGxhY2U6ICcnXG5cdFx0fVxuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMucHJvcHMuaGlkZSgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cmVwbGFjZTogJydcblx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZShrZXkpe1xuXHRcdHJldHVybiAoZSkgPT4ge1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFba2V5XVx0PSBlLnRhcmdldC52YWx1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoZGF0YSk7XG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRhY3Rpb249eycvYWRtaW4vZm9ydW0vJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5IHB0MFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLmRhdGEuY29udGVudH19Lz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz57dGhpcy5wcm9wcy5kYXRhLmF1dGhvcn08L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj4gLSA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGVtPnt0aGlzLnByb3BzLmRhdGEudGltZXN0YW1wfTwvZW0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnRDbGFzcz1cInRleHRhcmVhXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cItCS0LDRiCDQvtGC0LLQtdGCXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY29udGVudE1hcmtkb3duXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5yZXBsYWNlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgncmVwbGFjZScpLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjhcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgZm9ybT1cImZvcm1Nb2RhbFwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXRoaXMuc3RhdGUucmVwbGFjZX0+0J7RgtCy0LXRgtC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1SZXBsYWNlLmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW1FZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZXBsYWNlOiAodGhpcy5wcm9wcy5kYXRhLmNvbnRlbnRNYXJrZG93bik/dGhpcy5wcm9wcy5kYXRhLmNvbnRlbnRNYXJrZG93bjp0aGlzLnByb3BzLmRhdGEuY29udGVudFxuXHRcdH1cblx0fVxuXG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHJlcGxhY2U6ICh0aGlzLnByb3BzLmRhdGEuY29udGVudE1hcmtkb3duKT90aGlzLnByb3BzLmRhdGEuY29udGVudE1hcmtkb3duOnRoaXMucHJvcHMuZGF0YS5jb250ZW50XG5cdFx0fSk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2Uoa2V5KXtcblx0XHRyZXR1cm4gKGUpID0+IHtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV1cdD0gZS50YXJnZXQudmFsdWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKGRhdGEpO1xuXHRcdH07XG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17dGhpcy5wcm9wcy5zaG93fVxuXHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnRpdGxlfVxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluL2ZvcnVtLycrdGhpcy5wcm9wcy5hY3Rpb24rJy8nK3RoaXMucHJvcHMuZGF0YS5pZH1cblx0XHRcdFx0XHRcdGlkPVwiZm9ybU1vZGFsXCJcblx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0ZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keSBwdDBcIj5cblx0XHRcdFx0XHRcdFx0PHN0cm9uZz57dGhpcy5wcm9wcy5kYXRhLmF1dGhvcn08L3N0cm9uZz4gLSA8ZW0+e3RoaXMucHJvcHMuZGF0YS50aW1lc3RhbXB9PC9lbT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PEZvcm1Hcm91cD5cblx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sXG5cdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q2xhc3M9XCJ0ZXh0YXJlYVwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLQktCw0Ygg0L7RgtCy0LXRglwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImNvbnRlbnRNYXJrZG93blwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucmVwbGFjZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ3JlcGxhY2UnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI4XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvRm9ybUdyb3VwPlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwic3VjY2Vzc1wiIGZvcm09XCJmb3JtTW9kYWxcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnJlcGxhY2V9PtCh0L7RhdGA0LDQvdC40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1FZGl0LmpzXG4gKiovIiwiLypcbiAqIENyZWF0ZWQgYnkgQWxwaGEtSHlkcm8uXG4gKiAgQGxpbmsgaHR0cDovL3d3dy5hbHBoYS1oeWRyby5jb21cbiAqICBAYXV0aG9yIFZsYWRpbWlyIE1pa2hheWxvdiA8YWRtaW5AYWxwaGEtaHlkcm8uY29tPlxuICogIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE2LCBBbHBoYS1IeWRyb1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ydW1EZWxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdGhpZGVNb2RhbCgpIHtcblx0XHR0aGlzLnByb3BzLmhpZGUoKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXt0aGlzLnByb3BzLnNob3d9XG5cdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMudGl0bGV9XG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRhY3Rpb249eycvYWRtaW4vZm9ydW0vJyt0aGlzLnByb3BzLmFjdGlvbisnLycrdGhpcy5wcm9wcy5kYXRhLmlkfVxuXHRcdFx0XHRcdFx0aWQ9XCJmb3JtTW9kYWxcIlxuXHRcdFx0XHRcdFx0bWV0aG9kPVwicG9zdFwiXG5cdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGhpcy5wcm9wcy5kYXRhLmNvbnRlbnR9fS8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PHN0cm9uZz57dGhpcy5wcm9wcy5kYXRhLmF1dGhvcn08L3N0cm9uZz4gLSA8ZW0+e3RoaXMucHJvcHMuZGF0YS50aW1lc3RhbXB9PC9lbT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCIgZm9ybT1cImZvcm1Nb2RhbFwiIHR5cGU9XCJzdWJtaXRcIj7Qo9C00LDQu9C40YLRjDwvQnV0dG9uPlxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0KTtcblx0fVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ydW0vRm9ydW1EZWxldGUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuaW1wb3J0IENhdGVnb3JpZXNGb3JtQWRkIGZyb20gXCIuL0NhdGVnb3JpZXNGb3JtQWRkXCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcmllc0FkZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRkYXRhOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcblx0XHRsZXRcdGlkID0gdGhpcy5wcm9wcy5kYXRhSXRlbS5pZDtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeUluZm8oaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbihkYXRhQ2F0ZWdvcnlJbmZvKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogZGF0YUNhdGVnb3J5SW5mb1xuXHRcdFx0XHR9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cblx0XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGF0YUl0ZW0ucm9sZSAhPSAnYWRtaW4nfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5kYXRhSXRlbS50aXRsZX1cblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdHNob3c9e3RoaXMuc3RhdGUuc2hvd31cblx0XHRcdFx0XHRvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0ZGlhbG9nQ2xhc3NOYW1lPVwidzEwMFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLWxnXCIgY2xhc3NOYW1lPVwiaDNcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuXHRcdFx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiYmxvY2tcIj57dGhpcy5wcm9wcy5kYXRhSXRlbS50aXRsZX08L3NtYWxsPlxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5cblx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdGFjdGlvbj17Jy9hZG1pbi9jYXRlZ29yaWVzL2FkZC8nfVxuXHRcdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxDYXRlZ29yaWVzRm9ybUFkZCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9DYXRlZ29yaWVzL0NhdGVnb3JpZXNBZGRCdXR0b24uanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIjtcblxuaW1wb3J0IFByb2R1Y3RGb3JtQWRkIGZyb20gXCIuL1Byb2R1Y3RGb3JtQWRkXCI7XG5pbXBvcnQgZGF0YUhlbHBlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldERhdGFIZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEFkZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRkYXRhOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzaG93TW9kYWwoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZX0pO1xuXHR9XG5cblx0aGlkZU1vZGFsKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGxldFx0Y2F0ZWdvcnlJZCA9IHRoaXMucHJvcHMuZGF0YUl0ZW0uY2F0ZWdvcnlpZDtcblx0XHRkYXRhSGVscGVycy5nZXRDYXRlZ29yeUluZm8oY2F0ZWdvcnlJZClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKGRhdGFDYXRlZ29yeUluZm8pe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhQ2F0ZWdvcnlJbmZvXG5cdFx0XHRcdH0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXHRcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kYXRhSXRlbS5yb2xlICE9ICdhZG1pbid9PlxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmRhdGFJdGVtLnRpdGxlfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93fVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRkaWFsb2dDbGFzc05hbWU9XCJ3MTAwXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtbGdcIiBjbGFzc05hbWU9XCJoM1wiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kYXRhLm5hbWV9XG5cdFx0XHRcdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJibG9ja1wiPnt0aGlzLnByb3BzLmRhdGFJdGVtLnRpdGxlfTwvc21hbGw+XG5cdFx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0YWN0aW9uPXsnL2FkbWluL3Byb2R1Y3RzL2FkZC8nfVxuXHRcdFx0XHRcdFx0XHRpZD1cImZvcm1Nb2RhbFwiXG5cdFx0XHRcdFx0XHRcdG1ldGhvZD1cInBvc3RcIlxuXHRcdFx0XHRcdFx0XHRlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxQcm9kdWN0Rm9ybUFkZCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImN1cnJlbnRVcmxcIiB2YWx1ZT17d2luZG93LmxvY2F0aW9uLmhyZWZ9Lz5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5oaWRlTW9kYWwuYmluZCh0aGlzKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGZvcm09XCJmb3JtTW9kYWxcIiBic1N0eWxlPVwic3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPPC9CdXR0b24+XG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XG5cdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ2F0YWxvZy9Qcm9kdWN0cy9Qcm9kdWN0QWRkQnV0dG9uLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ2hlY2tib3hcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZVwiO1xuXG5pbXBvcnQgTW9kaWZpY2F0aW9uVGFibGVDb2x1bW4gZnJvbSBcIi4uL1Byb2R1Y3RNb2RpZmljYXRvbnMvTW9kaWZpY2F0aW9uVGFibGVDb2x1bW5cIjtcblxuaW1wb3J0IGRhdGFIZWxwZXJzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXREYXRhSGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RQYXNzcG9ydFBkZiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdGNvbHVtbnM6IFtdLFxuXHRcdFx0cm93czpbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0ZGF0YUhlbHBlcnMuZ2V0Q2F0ZWdvcnlQcm9kdWN0TW9kaWZpY2F0aW9uKHRoaXMucHJvcHMuZGF0YUl0ZW0uaWQpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjb2x1bW5zOiBkYXRhLmNvbHVtbnMsXG5cdFx0XHRcdFx0cm93czogZGF0YS5yb3dzXG5cdFx0XHRcdH0pXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0b3Blbigpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuXHR9XG5cblx0Y2hlY2tBbGwoZSl7XG5cblx0XHR2YXIgY2hlY2tib3hlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIikpO1xuXHRcdGNoZWNrYm94ZXMubWFwKGZ1bmN0aW9uKGMpIHtcblx0XHRcdGMuY2hlY2tlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cdFx0fSk7XG5cdH1cblxuXHRoZWFkVGFibGUoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dHI+XG5cdFx0XHRcdDx0aD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dGhpcy5jaGVja0FsbC5iaW5kKHRoaXMpfS8+PC90aD5cblx0XHRcdFx0PHRoPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtTwvdGg+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4sIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gPE1vZGlmaWNhdGlvblRhYmxlQ29sdW1uXG5cdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRjb2x1bW49e2NvbHVtbn0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cblx0XG5cdGJvZHlUYWJsZSgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnJvd3MubWFwKGZ1bmN0aW9uIChyb3csIGkpIHtcblx0XHRcdHJldHVybiA8dHIga2V5PXtpfT5cblx0XHRcdFx0PHRkPjxDaGVja2JveCBuYW1lPVwibW9kaWZpY2F0aW9uc1tdXCIgdmFsdWU9e3Jvdy5pdGVtLmlkfS8+PC90ZD5cblx0XHRcdFx0PHRoPntyb3cuaXRlbS5za3V9PC90aD5cblx0XHRcdFx0e3Jvdy52YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKXtcblx0XHRcdFx0XHRyZXR1cm4gPHRkIGtleT17aX0+e3ZhbHVlLnZhbHVlfTwvdGQ+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC90cj5cblx0XHR9KTtcblx0fVxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHNwYW4+XG5cdFx0XHRcdDxhIGhyZWY9XCIjXCJcblx0XHRcdFx0XHQgY2xhc3NOYW1lPVwiYWxwaGEtaWNvbi1wcmludFwiXG5cdFx0XHRcdFx0IG9uQ2xpY2s9e3RoaXMub3Blbi5iaW5kKHRoaXMpfSA+0J/QsNGB0L/QvtGA0YI8L2E+XG5cdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdGRpYWxvZ0NsYXNzTmFtZT1cInc5MFwiXG5cdFx0XHRcdFx0c2hvdz17dGhpcy5zdGF0ZS5zaG93fVxuXHRcdFx0XHRcdG9uSGlkZT17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGNsYXNzTmFtZT1cIm10YjEgaDNcIj57dGhpcy5wcm9wcy5kYXRhSXRlbS5uYW1lKycsICcrdGhpcy5wcm9wcy5kYXRhSXRlbS5za3V9PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cblx0XHRcdFx0PE1vZGFsLkJvZHk+XG5cdFx0XHRcdFx0PGZvcm0gaWQ9XCJwcmludC1wYXNzcG9ydFwiIG5hbWU9XCJtb2RpZmljYXRpb25cIiBtZXRob2Q9XCJwb3N0XCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBhY3Rpb249eycvYWRtaW4vcHJvZHVjdHMvcGFzc3BvcnQvJyt0aGlzLnByb3BzLmRhdGFJdGVtLmlkfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuXHRcdFx0XHRcdFx0PFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXIgY2xhc3NOYW1lPVwidGV4dC1zaXplLXNtYWxsIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5oZWFkVGFibGUoKX1cblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLmJvZHlUYWJsZSgpfVxuXHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0PC9UYWJsZT5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZS5iaW5kKHRoaXMpfT7QntGC0LzQtdC90LA8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiIGZvcm09XCJwcmludC1wYXNzcG9ydFwiPtCh0L7Qt9C00LDRgtGMINC/0LDRgdC/0L7RgNGCPC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHRcdDwvc3Bhbj5cblx0XHQpXG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NhdGFsb2cvUHJvZHVjdHMvUHJvZHVjdFBhc3Nwb3J0UGRmLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybVwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29sXCI7XG5pbXBvcnQgQWxlcnQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9saWIvQWxlcnRcIjtcblxuaW1wb3J0IGF1dGhBZG1pbiBmcm9tIFwiLi4vdXRpbHMvYXV0aEFkbWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkbWluTW9kYWxBdXRoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93TW9kYWw6IGZhbHNlLFxuXHRcdFx0dXNlcm5hbWU6ICcnLFxuXHRcdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdFx0ZXJyb3JNZXNzYWdlOiAnJ1xuXHRcdH1cbiAgfVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpe1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWF1dGhMb2dpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dGhpcy5zaG93TW9kYWwoKTtcblx0XHR9KVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGtleSl7XG5cdFx0cmV0dXJuIChlKSA9PiB7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtrZXldXHQ9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShkYXRhKTtcblx0XHR9O1xuXHR9XG5cblx0Lypjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKT0+e1xuXHRcdFx0aWYoZS5hbHRLZXkgJiYgZS5rZXlDb2RlID09IDEyMCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHNob3dNb2RhbDogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0qL1xuXG4gICAgc2hvd01vZGFsKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93TW9kYWw6IHRydWV9KTtcbiAgICB9XG5cbiAgICBoaWRlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dNb2RhbDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBzZW5kRm9ybSgpe1xuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdFwidXNlcm5hbWVcIjogdGhpcy5zdGF0ZS51c2VybmFtZSxcblx0XHRcdFx0XCJwYXNzd29yZFwiOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG5cdFx0XHR9O1xuXHRcdFx0YXV0aEFkbWluLmxvZ2luQXV0aChkYXRhKVxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRcdGlmKHJlc3BvbnNlKXtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZU1vZGFsKCk7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlOiAn0JLRiyDQstCy0LXQu9C4INC90LXQstC10YDQvdC+0LUg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuNC70Lgg0L3QtdCy0LXRgNC90YvQuSDQv9Cw0YDQvtC70YwnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fVxuXG4gICAgcmVuZGVyKCl7XG5cdFx0Y29uc3QgYWxlcnRJbnN0YW5jZSA9IChcblx0XHRcdDxBbGVydCBic1N0eWxlPVwiZGFuZ2VyXCI+XG5cdFx0XHRcdDxzdHJvbmc+0J7RiNC40LHQutCwITwvc3Ryb25nPiB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9LlxuXHRcdFx0PC9BbGVydD5cblx0XHQpO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd01vZGFsfSBvbkhpZGU9e3RoaXMuaGlkZU1vZGFsLmJpbmQodGhpcyl9PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlPtCQ0LLRgtC+0YDQuNC30LDRhtC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlxuXHRcdFx0XHRcdDxGb3JtIGhvcml6b250YWw+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsRW1haWxcIj5cblx0XHRcdFx0XHRcdFx0PENvbCBjb21wb25lbnRDbGFzcz17Q29udHJvbExhYmVsfSBzbT17Mn0+XG5cdFx0XHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDxDb2wgc209ezl9PlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgndXNlcm5hbWUnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0XHQ8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsUGFzc3dvcmRcIj5cblx0XHRcdFx0XHRcdFx0PENvbCBjb21wb25lbnRDbGFzcz17Q29udHJvbExhYmVsfSBzbT17Mn0+XG5cdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0PC9Db2w+XG5cdFx0XHRcdFx0XHRcdDxDb2wgc209ezl9PlxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgncGFzc3dvcmQnKS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvQ29sPlxuXHRcdFx0XHRcdFx0PC9Gb3JtR3JvdXA+XG5cdFx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiBhbGVydEluc3RhbmNlfVxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVNb2RhbC5iaW5kKHRoaXMpfT5DbG9zZTwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLnNlbmRGb3JtLmJpbmQodGhpcyl9PtCS0YXQvtC0PC9CdXR0b24+XG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQpO1xuXHR9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9BZG1pbk1vZGFsQXV0aC5qc1xuICoqLyIsIi8qXG4gKiBDcmVhdGVkIGJ5IEFscGhhLUh5ZHJvLlxuICogIEBsaW5rIGh0dHA6Ly93d3cuYWxwaGEtaHlkcm8uY29tXG4gKiAgQGF1dGhvciBWbGFkaW1pciBNaWtoYXlsb3YgPGFkbWluQGFscGhhLWh5ZHJvLmNvbT5cbiAqICBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNiwgQWxwaGEtSHlkcm9cbiAqL1xuXG52YXIgaGVscGVycyA9IHtcblx0bG9naW5BdXRoOiAoZGF0YSkgPT4ge1xuXHRcdHJldHVybiAkLmFqYXgoe1xuXHRcdFx0dXJsOiBcIi9hZG1pbi9hdXRoL2xvZ2luXCIsXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRzdWNjZXNzOiAoZGF0YSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKHhociwgc3RhdHVzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnJvcicsIHN0YXR1cyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlscy9hdXRoQWRtaW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9