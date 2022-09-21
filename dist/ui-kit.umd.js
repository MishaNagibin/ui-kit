(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ui-kit"] = factory(require("vue"));
	else
		root["ui-kit"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cAlert": function() { return /* reexport */ Alert; },
  "cArrowSVG": function() { return /* reexport */ ArrowSVG; },
  "cButton": function() { return /* reexport */ Button; },
  "cCheckbox": function() { return /* reexport */ Checkbox; },
  "cCombobox": function() { return /* reexport */ Combobox; },
  "cDropDown": function() { return /* reexport */ DropDown; },
  "cEdit": function() { return /* reexport */ Edit; },
  "cEmoji": function() { return /* reexport */ Emoji; },
  "cRadio": function() { return /* reexport */ Radio; },
  "cRadioGroup": function() { return /* reexport */ RadioGroup; },
  "cRange": function() { return /* reexport */ Range; },
  "cSlider": function() { return /* reexport */ Slider; },
  "cSpinner": function() { return /* reexport */ Spinner; },
  "cTab": function() { return /* reexport */ Tab; },
  "cTable": function() { return /* reexport */ Table; },
  "cTabs": function() { return /* reexport */ Tabs; },
  "cToggle": function() { return /* reexport */ Toggle; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Alert.vue?vue&type=template&id=89d78af2&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],class:['ui-alert', _vm.status, { 'hide-icon': _vm.hideIcon, closeable: _vm.closeable, closing: _vm.isClosing, custom: _vm.hasCustomBackgroundColor, 'icon-center': _vm.iconPositionCenter }],style:({ '--backgroundColor': _vm.backgroundColor, '--borderRadius': _vm.borderRadius || 0 })},[(!_vm.hideIcon)?_c('span',{class:['icon', `${_vm.status}-alert`, { custom: _vm.hasCustomIconColor }],style:({ '--iconColor': _vm.iconColor })}):_vm._e(),_c('div',{staticClass:"message"},[(_vm.showTitle)?_c('div',{class:['title', { custom: _vm.hasCustomTitleColor || _vm.hasCustomTitleSize }],style:({ '--titleColor': _vm.titleColor || '#000', '--titleSize': _vm.titleSize || '16px' })},[_vm._t("title")],2):_vm._e(),(_vm.showDesc)?_c('div',{class:['desc', { custom: _vm.hasCustomDescColor || _vm.hasCustomDescSize }],style:({ '--descColor': _vm.descColor || '#636363', '--descSize': _vm.descSize || '12px' })},[_vm._t("desc")],2):_vm._e()]),(_vm.closeable)?_c('span',{staticClass:"icon close-alert",style:({ '--iconCloseColor': _vm.iconCloseColor || '#636363', '--iconCloseHoverColor': _vm.iconCloseHoverColor || '#636363', '--iconCloseSize': _vm.iconCloseSize || '24px' }),on:{"click":_vm.close}}):_vm._e()])
}
var staticRenderFns = []


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Alert.vue?vue&type=script&lang=ts&

/* harmony default export */ var Alertvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cAlert",
    props: {
        closeable: {
            type: Boolean,
            default: false,
        },
        hideIcon: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            validator: (v) => ["info", "success", "warning", "error"].includes(v),
        },
        backgroundColor: {
            type: String,
        },
        titleColor: {
            type: String,
        },
        titleSize: {
            type: String,
        },
        descColor: {
            type: String,
        },
        descSize: {
            type: String,
        },
        iconColor: {
            type: String,
        },
        iconCloseColor: {
            type: String,
        },
        iconCloseHoverColor: {
            type: String,
        },
        iconCloseSize: {
            type: String,
        },
        borderRadius: {
            type: String,
        },
        iconPositionCenter: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isClosing: false,
            show: false,
            showDesc: false,
            showTitle: false,
        };
    },
    computed: {
        hasCustomBackgroundColor() {
            var _a;
            return ((_a = this.backgroundColor) !== null && _a !== void 0 ? _a : "").length > 0;
        },
        hasCustomIconColor() {
            var _a;
            return ((_a = this.iconColor) !== null && _a !== void 0 ? _a : "").length > 0;
        },
        hasCustomTitleColor() {
            var _a;
            return ((_a = this.titleColor) !== null && _a !== void 0 ? _a : "").length > 0;
        },
        hasCustomDescColor() {
            var _a;
            return ((_a = this.descColor) !== null && _a !== void 0 ? _a : "").length > 0;
        },
        hasCustomTitleSize() {
            var _a;
            return ((_a = this.titleSize) !== null && _a !== void 0 ? _a : "").length > 0;
        },
        hasCustomDescSize() {
            var _a;
            return ((_a = this.descSize) !== null && _a !== void 0 ? _a : "").length > 0;
        },
    },
    mounted() {
        this.checkSlots();
    },
    updated() {
        this.checkSlots();
    },
    methods: {
        checkSlots() {
            this.showTitle = !!this.$slots.title;
            this.showDesc = !!this.$slots.desc;
            this.show = this.showTitle || this.showDesc;
        },
        close() {
            this.isClosing = true;
            setTimeout(() => {
                this.show = false;
                this.$emit("close");
            }, 350);
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Alert.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Alertvue_type_script_lang_ts_ = (Alertvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Alert.vue?vue&type=style&index=0&id=89d78af2&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Alert.vue?vue&type=style&index=0&id=89d78af2&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/Alert.vue



;


/* normalize component */

var component = normalizeComponent(
  components_Alertvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "89d78af2",
  null
  
)

/* harmony default export */ var Alert = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ArrowSVG.vue?vue&type=template&id=7fe1efb5&scoped=true&
var ArrowSVGvue_type_template_id_7fe1efb5_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',_vm._g({class:['ui-arrow-svg', _vm.size, _vm.mode, { 'no-shadow': _vm.isNoShadow, up: _vm.isUp, down: _vm.isDown, left: _vm.isLeft, 'custom-rotate': _vm.rotate !== undefined }],style:({ '--color': _vm.color, '--hover-color': _vm.hoverColor, '--circleColor': _vm.circleColor,'--rotate': _vm.rotate })},_vm.listeners),[_vm._m(0)])
}
var ArrowSVGvue_type_template_id_7fe1efb5_scoped_true_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',[_c('span',{staticClass:"icon arrow-part1"}),_c('span',{staticClass:"icon arrow-part2"})])
}]


;// CONCATENATED MODULE: ./src/components/ArrowSVG.vue?vue&type=template&id=7fe1efb5&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ArrowSVG.vue?vue&type=script&lang=ts&

/* harmony default export */ var ArrowSVGvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cArrowSVG",
    props: {
        color: {
            type: String,
            default: "#818ca9",
        },
        hoverColor: {
            type: String,
            default: "#818ca9",
        },
        size: {
            type: String,
            default: "m",
            validator: (v) => ["s", "m", "l"].includes(v),
        },
        mode: {
            type: String,
            default: "normal",
            validator: (v) => ["normal", "circle"].includes(v),
        },
        circleColor: {
            type: String,
            default: "#ffffff",
        },
        isUp: {
            type: Boolean,
            default: false,
        },
        isDown: {
            type: Boolean,
            default: false,
        },
        isLeft: {
            type: Boolean,
            default: false,
        },
        isNoShadow: {
            type: Boolean,
            default: false,
        },
        rotate: {
            type: String,
            default: undefined,
        },
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                click: this.click,
            };
        },
    },
    methods: {
        click(e) {
            this.$emit("click", e);
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/ArrowSVG.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ArrowSVGvue_type_script_lang_ts_ = (ArrowSVGvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ArrowSVG.vue?vue&type=style&index=0&id=7fe1efb5&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ArrowSVG.vue?vue&type=style&index=0&id=7fe1efb5&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/ArrowSVG.vue



;


/* normalize component */

var ArrowSVG_component = normalizeComponent(
  components_ArrowSVGvue_type_script_lang_ts_,
  ArrowSVGvue_type_template_id_7fe1efb5_scoped_true_render,
  ArrowSVGvue_type_template_id_7fe1efb5_scoped_true_staticRenderFns,
  false,
  null,
  "7fe1efb5",
  null
  
)

/* harmony default export */ var ArrowSVG = (ArrowSVG_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button.vue?vue&type=template&id=46675f7a&scoped=true&
var Buttonvue_type_template_id_46675f7a_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('button',_vm._g({ref:"btn",class:['ui-button', _vm.customStyle === undefined ? _vm.mode : `custom ${_vm.mode === 'gradient' ? 'gradient' : ''}`, _vm.size, { active: _vm.isTouch, touch: _vm.isTouch, loading: _vm.isLoading, mobile: _vm.isMobile, gradient: (_vm.customStyle || {}).position !== undefined, 'not-color': _vm.customStyle !== undefined && _vm.customStyle.color === undefined, 'not-position': _vm.customStyle !== undefined && _vm.customStyle.position === undefined, 'not-upper-case': _vm.dontUpperCase }],style:(_vm.customStyle ? { '--background': _vm.customStyle.background, '--hover': _vm.customStyle.hover, '--active': _vm.customStyle.active, '--color': _vm.customStyle.color, '--position': _vm.customStyle.position } : {}),attrs:{"disabled":_vm.disabled},on:{"touchstart":_vm.touchStart,"touchend":_vm.touchEnd,"touchcancel":_vm.touchEnd,"touchmove":_vm.touchMove,"mousedown":_vm.mouseDown,"mouseup":_vm.mouseUp,"mouseout":_vm.mouseUp}},_vm.listeners),[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],staticClass:"icon spinner"}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"caption"},[_vm._t("default")],2)])
}
var Buttonvue_type_template_id_46675f7a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button.vue?vue&type=script&lang=ts&

/* harmony default export */ var Buttonvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cButton",
    props: {
        mode: {
            type: String,
            default: "normal",
            validator: (v) => [
                "normal",
                "orange",
                "primary",
                "gradient",
                "crimson",
                "disabled",
                "white-to-crimson",
                "red",
                "green",
                "white",
                "just-text",
            ].includes(v),
        },
        type: {
            type: String,
            default: "button",
            validator: (v) => ["button", "submit", "reset"].includes(v),
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "m",
            validator: (v) => ["s", "m", "l", "xl"].includes(v),
        },
        customStyle: {
            type: Object,
        },
        dontUpperCase: {
            type: Boolean,
            default: false,
        },
        isMobile: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isTouch: false,
        };
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                click: this.click,
            };
        },
    },
    methods: {
        click(e) {
            if (this.isMobile) {
                setTimeout(() => {
                    this.$emit("click", e);
                }, this.mode === "gradient" ? 300 : 100);
            }
            else {
                this.$emit("click", e);
            }
        },
        touchStart() {
            this.isTouch = true;
        },
        touchEnd() {
            setTimeout(() => {
                this.isTouch = false;
            }, this.mode === "gradient" ? 300 : 100);
        },
        mouseDown() {
            this.isTouch = true;
        },
        mouseUp() {
            setTimeout(() => {
                this.isTouch = false;
            }, this.mode === "gradient" ? 300 : 100);
        },
        touchMove(e) {
            const btn = this.$refs.btn;
            const isAbove = e.changedTouches[0].pageY < btn.offsetTop;
            const isBelow = e.changedTouches[0].pageY > btn.offsetTop + btn.offsetHeight;
            const isLeft = e.changedTouches[0].pageX < btn.offsetLeft;
            const isRight = e.changedTouches[0].pageX > btn.offsetLeft + btn.offsetWidth;
            if (isAbove || isBelow || isLeft || isRight) {
                this.isTouch = false;
            }
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Buttonvue_type_script_lang_ts_ = (Buttonvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button.vue?vue&type=style&index=0&id=46675f7a&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Button.vue?vue&type=style&index=0&id=46675f7a&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Button.vue



;


/* normalize component */

var Button_component = normalizeComponent(
  components_Buttonvue_type_script_lang_ts_,
  Buttonvue_type_template_id_46675f7a_scoped_true_render,
  Buttonvue_type_template_id_46675f7a_scoped_true_staticRenderFns,
  false,
  null,
  "46675f7a",
  null
  
)

/* harmony default export */ var Button = (Button_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Checkbox.vue?vue&type=template&id=0271d09d&scoped=true&
var Checkboxvue_type_template_id_0271d09d_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('label',_vm._g({class:['ui-checkbox', !_vm.isCustom ? _vm.mode : '', _vm.size, { nowrap: _vm.nowrap, disabled: _vm.disabled, custom: _vm.isCustom }],style:({ '--color': _vm.color, '--hoverColor': _vm.hoverColor, '--activeColor': _vm.activeColor, '--borderWidth': _vm.borderWidth })},_vm.listeners),[_c('input',{attrs:{"disabled":_vm.disabled,"type":"checkbox"},domProps:{"checked":_vm.checked},on:{"change":function($event){$event.stopPropagation();return _vm.change.apply(null, arguments)}}}),_c('span',{class:['check-mark', { checked: _vm.checked }]}),_vm._t("default")],2)
}
var Checkboxvue_type_template_id_0271d09d_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Checkbox.vue?vue&type=script&lang=ts&

/* harmony default export */ var Checkboxvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cCheckbox",
    model: {
        prop: "checked",
        event: "change",
    },
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: "primary",
            validator: (v) => ["primary", "red", "default"].includes(v),
        },
        nowrap: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "m",
            validator: (v) => ["s", "sm", "m", "l"].includes(v),
        },
        color: {
            type: String,
        },
        hoverColor: {
            type: String,
        },
        activeColor: {
            type: String,
        },
        borderWidth: {
            type: String,
            default: "2px"
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                focus: this.focus,
                blur: this.blur,
                keydown: this.keyDown,
            };
        },
        isCustom() {
            var _a, _b, _c;
            return ((_a = this.color) !== null && _a !== void 0 ? _a : "").length > 0 || ((_b = this.hoverColor) !== null && _b !== void 0 ? _b : "").length > 0 || ((_c = this.activeColor) !== null && _c !== void 0 ? _c : "").length > 0;
        },
    },
    methods: {
        blur(e) {
            this.$emit("blur", e);
        },
        change(e) {
            this.setChecked(e.target.checked);
        },
        focus(e) {
            this.$emit("focus", e);
        },
        keyDown(e) {
            if (e.code !== "Enter" && e.code !== "Space") {
                return;
            }
            this.toogle();
        },
        setChecked(v) {
            if (this.disabled) {
                return;
            }
            this.$emit("change", v);
        },
        toogle() {
            this.setChecked(!this.checked);
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Checkbox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Checkboxvue_type_script_lang_ts_ = (Checkboxvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Checkbox.vue?vue&type=style&index=0&id=0271d09d&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Checkbox.vue?vue&type=style&index=0&id=0271d09d&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Checkbox.vue



;


/* normalize component */

var Checkbox_component = normalizeComponent(
  components_Checkboxvue_type_script_lang_ts_,
  Checkboxvue_type_template_id_0271d09d_scoped_true_render,
  Checkboxvue_type_template_id_0271d09d_scoped_true_staticRenderFns,
  false,
  null,
  "0271d09d",
  null
  
)

/* harmony default export */ var Checkbox = (Checkbox_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Combobox.vue?vue&type=template&id=1d774100&
var Comboboxvue_type_template_id_1d774100_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{class:['ui-combobox', { error: _vm.isError }]},[_c('cEdit',{ref:"combobox",class:{ pointer: !_vm.filter },attrs:{"required":_vm.required,"disabled":_vm.disabled,"readonly":!_vm.filter,"placeholder":_vm.placeholder,"autocomplete":_vm.isNoAutocomplete ? 'new-password' : 'off',"is-error":_vm.isError,"is-hide-status":_vm.isHideStatus},on:{"keydown":_vm.keyDown,"focus":_vm.focus,"blur":_vm.blur,"input":_vm.input,"mousedown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"]))return null;if('button' in $event && $event.button !== 0)return null;return _vm.mouseDown.apply(null, arguments)}},model:{value:(_vm.initialText),callback:function ($$v) {_vm.initialText=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"initialText"}},[(_vm.isError)?_c('template',{slot:"status-text"},[_vm._t("status-text")],2):_vm._e()],2),(_vm.clearable && (_vm.initialValue !== null || _vm.initialText.length > 0))?_c('div',{staticClass:"icon-clear",attrs:{"data-tooltip":"Очистить"},on:{"click":function($event){return _vm.setValue()},"mousedown":_vm.childrenMouseDown}}):_c('div',{class:['icon-select', { opened: _vm.isOpenned && _vm.filteredItems.length > 0 }]}),(_vm.isOpenned && _vm.filteredItems.length > 0)?_c('ul',{ref:"menu",staticClass:"menu",on:{"mousedown":_vm.childrenMouseDown}},_vm._l((_vm.filteredItems),function(item,index){return _c('li',{key:index,class:[{ active: index === _vm.selectedItemIndex }, _vm.size],domProps:{"innerHTML":_vm._s(_vm.mdParse(item.name))},on:{"mousemove":function($event){return _vm.mousemove(index)},"click":function($event){return _vm.setValue(index)}}})}),0):_vm._e()],1)
}
var Comboboxvue_type_template_id_1d774100_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@ts-stack/markdown/fesm2015/ts-stack-markdown.js
/*
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class ExtendRegexp {
    constructor(regex, flags = '') {
        this.source = regex.source;
        this.flags = flags;
    }
    /**
     * Extend regular expression.
     *
     * @param groupName Regular expression for search a group name.
     * @param groupRegexp Regular expression of named group.
     */
    setGroup(groupName, groupRegexp) {
        let newRegexp = typeof groupRegexp == 'string' ? groupRegexp : groupRegexp.source;
        newRegexp = newRegexp.replace(/(^|[^\[])\^/g, '$1');
        // Extend regexp.
        this.source = this.source.replace(groupName, newRegexp);
        return this;
    }
    /**
     * Returns a result of extending a regular expression.
     */
    getRegexp() {
        return new RegExp(this.source, this.flags);
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    // tslint:disable-next-line:quotemark
    "'": '&#39;',
};
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
function ts_stack_markdown_escape(html, encode) {
    if (encode) {
        if (escapeTest.test(html)) {
            return html.replace(escapeReplace, (ch) => replacements[ch]);
        }
    }
    else {
        if (escapeTestNoEncode.test(html)) {
            return html.replace(escapeReplaceNoEncode, (ch) => replacements[ch]);
        }
    }
    return html;
}
function ts_stack_markdown_unescape(html) {
    // Explicitly match decimal, hex, and named HTML entities
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon') {
            return ':';
        }
        if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x'
                ? String.fromCharCode(parseInt(n.substring(2), 16))
                : String.fromCharCode(+n.substring(1));
        }
        return '';
    });
}

/**
 * @license
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
var TokenType;
(function (TokenType) {
    TokenType[TokenType["space"] = 1] = "space";
    TokenType[TokenType["text"] = 2] = "text";
    TokenType[TokenType["paragraph"] = 3] = "paragraph";
    TokenType[TokenType["heading"] = 4] = "heading";
    TokenType[TokenType["listStart"] = 5] = "listStart";
    TokenType[TokenType["listEnd"] = 6] = "listEnd";
    TokenType[TokenType["looseItemStart"] = 7] = "looseItemStart";
    TokenType[TokenType["looseItemEnd"] = 8] = "looseItemEnd";
    TokenType[TokenType["listItemStart"] = 9] = "listItemStart";
    TokenType[TokenType["listItemEnd"] = 10] = "listItemEnd";
    TokenType[TokenType["blockquoteStart"] = 11] = "blockquoteStart";
    TokenType[TokenType["blockquoteEnd"] = 12] = "blockquoteEnd";
    TokenType[TokenType["code"] = 13] = "code";
    TokenType[TokenType["table"] = 14] = "table";
    TokenType[TokenType["html"] = 15] = "html";
    TokenType[TokenType["hr"] = 16] = "hr";
})(TokenType || (TokenType = {}));
class MarkedOptions {
    constructor() {
        this.gfm = true;
        this.tables = true;
        this.breaks = false;
        this.pedantic = false;
        this.sanitize = false;
        this.mangle = true;
        this.smartLists = false;
        this.silent = false;
        this.langPrefix = 'lang-';
        this.smartypants = false;
        this.headerPrefix = '';
        /**
         * Self-close the tags for void elements (&lt;br/&gt;, &lt;img/&gt;, etc.)
         * with a "/" as required by XHTML.
         */
        this.xhtml = false;
        /**
         * The function that will be using to escape HTML entities.
         * By default using inner helper.
         */
        this.escape = ts_stack_markdown_escape;
        /**
         * The function that will be using to unescape HTML entities.
         * By default using inner helper.
         */
        this.unescape = ts_stack_markdown_unescape;
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class Renderer {
    constructor(options) {
        this.options = options || Marked.options;
    }
    code(code, lang, escaped, meta) {
        if (this.options.highlight) {
            const out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out;
            }
        }
        const escapedCode = (escaped ? code : this.options.escape(code, true));
        if (!lang) {
            return `\n<pre><code>${escapedCode}\n</code></pre>\n`;
        }
        const className = this.options.langPrefix + this.options.escape(lang, true);
        return `\n<pre><code class="${className}">${escapedCode}\n</code></pre>\n`;
    }
    blockquote(quote) {
        return `<blockquote>\n${quote}</blockquote>\n`;
    }
    html(html) {
        return html;
    }
    heading(text, level, raw) {
        const id = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>\n`;
    }
    hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    }
    list(body, ordered) {
        const type = ordered ? 'ol' : 'ul';
        return `\n<${type}>\n${body}</${type}>\n`;
    }
    listitem(text) {
        return '<li>' + text + '</li>\n';
    }
    paragraph(text) {
        return '<p>' + text + '</p>\n';
    }
    table(header, body) {
        return `
<table>
<thead>
${header}</thead>
<tbody>
${body}</tbody>
</table>
`;
    }
    tablerow(content) {
        return '<tr>\n' + content + '</tr>\n';
    }
    tablecell(content, flags) {
        const type = flags.header ? 'th' : 'td';
        const tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
    }
    // *** Inline level renderer methods. ***
    strong(text) {
        return '<strong>' + text + '</strong>';
    }
    em(text) {
        return '<em>' + text + '</em>';
    }
    codespan(text) {
        return '<code>' + text + '</code>';
    }
    br() {
        return this.options.xhtml ? '<br/>' : '<br>';
    }
    del(text) {
        return '<del>' + text + '</del>';
    }
    link(href, title, text) {
        if (this.options.sanitize) {
            let prot;
            try {
                prot = decodeURIComponent(this.options.unescape(href))
                    .replace(/[^\w:]/g, '')
                    .toLowerCase();
            }
            catch (e) {
                return text;
            }
            if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
                return text;
            }
        }
        let out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
    }
    image(href, title, text) {
        let out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
    }
    text(text) {
        return text;
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
/**
 * Inline Lexer & Compiler.
 */
class InlineLexer {
    constructor(staticThis, links, options = Marked.options, renderer) {
        this.staticThis = staticThis;
        this.links = links;
        this.options = options;
        this.renderer = renderer || this.options.renderer || new Renderer(this.options);
        if (!this.links) {
            throw new Error(`InlineLexer requires 'links' parameter.`);
        }
        this.setRules();
    }
    /**
     * Static Lexing/Compiling Method.
     */
    static output(src, links, options) {
        const inlineLexer = new this(this, links, options);
        return inlineLexer.output(src);
    }
    static getRulesBase() {
        if (this.rulesBase) {
            return this.rulesBase;
        }
        /**
         * Inline-Level Grammar.
         */
        const base = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
            tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
            em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
            code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
            _inside: /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
            _href: /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
        };
        base.link = new ExtendRegexp(base.link).setGroup('inside', base._inside).setGroup('href', base._href).getRegexp();
        base.reflink = new ExtendRegexp(base.reflink).setGroup('inside', base._inside).getRegexp();
        return (this.rulesBase = base);
    }
    static getRulesPedantic() {
        if (this.rulesPedantic) {
            return this.rulesPedantic;
        }
        return (this.rulesPedantic = Object.assign(Object.assign({}, this.getRulesBase()), {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
        }));
    }
    static getRulesGfm() {
        if (this.rulesGfm) {
            return this.rulesGfm;
        }
        const base = this.getRulesBase();
        const escape = new ExtendRegexp(base.escape).setGroup('])', '~|])').getRegexp();
        const text = new ExtendRegexp(base.text).setGroup(']|', '~]|').setGroup('|', '|https?://|').getRegexp();
        return (this.rulesGfm = Object.assign(Object.assign({}, base), {
            escape,
            url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text,
        }));
    }
    static getRulesBreaks() {
        if (this.rulesBreaks) {
            return this.rulesBreaks;
        }
        const inline = this.getRulesGfm();
        const gfm = this.getRulesGfm();
        return (this.rulesBreaks = Object.assign(Object.assign({}, gfm), {
            br: new ExtendRegexp(inline.br).setGroup('{2,}', '*').getRegexp(),
            text: new ExtendRegexp(gfm.text).setGroup('{2,}', '*').getRegexp(),
        }));
    }
    setRules() {
        if (this.options.gfm) {
            if (this.options.breaks) {
                this.rules = this.staticThis.getRulesBreaks();
            }
            else {
                this.rules = this.staticThis.getRulesGfm();
            }
        }
        else if (this.options.pedantic) {
            this.rules = this.staticThis.getRulesPedantic();
        }
        else {
            this.rules = this.staticThis.getRulesBase();
        }
        this.hasRulesGfm = this.rules.url !== undefined;
    }
    /**
     * Lexing/Compiling.
     */
    output(nextPart) {
        nextPart = nextPart;
        let execArr;
        let out = '';
        while (nextPart) {
            // escape
            if ((execArr = this.rules.escape.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += execArr[1];
                continue;
            }
            // autolink
            if ((execArr = this.rules.autolink.exec(nextPart))) {
                let text;
                let href;
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[2] === '@') {
                    text = this.options.escape(execArr[1].charAt(6) === ':' ? this.mangle(execArr[1].substring(7)) : this.mangle(execArr[1]));
                    href = this.mangle('mailto:') + text;
                }
                else {
                    text = this.options.escape(execArr[1]);
                    href = text;
                }
                out += this.renderer.link(href, null, text);
                continue;
            }
            // url (gfm)
            if (!this.inLink && this.hasRulesGfm && (execArr = this.rules.url.exec(nextPart))) {
                let text;
                let href;
                nextPart = nextPart.substring(execArr[0].length);
                text = this.options.escape(execArr[1]);
                href = text;
                out += this.renderer.link(href, null, text);
                continue;
            }
            // tag
            if ((execArr = this.rules.tag.exec(nextPart))) {
                if (!this.inLink && /^<a /i.test(execArr[0])) {
                    this.inLink = true;
                }
                else if (this.inLink && /^<\/a>/i.test(execArr[0])) {
                    this.inLink = false;
                }
                nextPart = nextPart.substring(execArr[0].length);
                out += this.options.sanitize
                    ? this.options.sanitizer
                        ? this.options.sanitizer(execArr[0])
                        : this.options.escape(execArr[0])
                    : execArr[0];
                continue;
            }
            // link
            if ((execArr = this.rules.link.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.inLink = true;
                out += this.outputLink(execArr, {
                    href: execArr[2],
                    title: execArr[3],
                });
                this.inLink = false;
                continue;
            }
            // reflink, nolink
            if ((execArr = this.rules.reflink.exec(nextPart)) || (execArr = this.rules.nolink.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const keyLink = (execArr[2] || execArr[1]).replace(/\s+/g, ' ');
                const link = this.links[keyLink.toLowerCase()];
                if (!link || !link.href) {
                    out += execArr[0].charAt(0);
                    nextPart = execArr[0].substring(1) + nextPart;
                    continue;
                }
                this.inLink = true;
                out += this.outputLink(execArr, link);
                this.inLink = false;
                continue;
            }
            // strong
            if ((execArr = this.rules.strong.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.strong(this.output(execArr[2] || execArr[1]));
                continue;
            }
            // em
            if ((execArr = this.rules.em.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.em(this.output(execArr[2] || execArr[1]));
                continue;
            }
            // code
            if ((execArr = this.rules.code.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.codespan(this.options.escape(execArr[2].trim(), true));
                continue;
            }
            // br
            if ((execArr = this.rules.br.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.br();
                continue;
            }
            // del (gfm)
            if (this.hasRulesGfm && (execArr = this.rules.del.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.del(this.output(execArr[1]));
                continue;
            }
            // text
            if ((execArr = this.rules.text.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                out += this.renderer.text(this.options.escape(this.smartypants(execArr[0])));
                continue;
            }
            if (nextPart) {
                throw new Error('Infinite loop on byte: ' + nextPart.charCodeAt(0));
            }
        }
        return out;
    }
    /**
     * Compile Link.
     */
    outputLink(execArr, link) {
        const href = this.options.escape(link.href);
        const title = link.title ? this.options.escape(link.title) : null;
        return execArr[0].charAt(0) !== '!'
            ? this.renderer.link(href, title, this.output(execArr[1]))
            : this.renderer.image(href, title, this.options.escape(execArr[1]));
    }
    /**
     * Smartypants Transformations.
     */
    smartypants(text) {
        if (!this.options.smartypants) {
            return text;
        }
        return (text
            // em-dashes
            .replace(/---/g, '\u2014')
            // en-dashes
            .replace(/--/g, '\u2013')
            // opening singles
            .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
            // closing singles & apostrophes
            .replace(/'/g, '\u2019')
            // opening doubles
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
            // closing doubles
            .replace(/"/g, '\u201d')
            // ellipses
            .replace(/\.{3}/g, '\u2026'));
    }
    /**
     * Mangle Links.
     */
    mangle(text) {
        if (!this.options.mangle) {
            return text;
        }
        let out = '';
        const length = text.length;
        for (let i = 0; i < length; i++) {
            let str;
            if (Math.random() > 0.5) {
                str = 'x' + text.charCodeAt(i).toString(16);
            }
            out += '&#' + str + ';';
        }
        return out;
    }
}
InlineLexer.rulesBase = null;
/**
 * Pedantic Inline Grammar.
 */
InlineLexer.rulesPedantic = null;
/**
 * GFM Inline Grammar
 */
InlineLexer.rulesGfm = null;
/**
 * GFM + Line Breaks Inline Grammar.
 */
InlineLexer.rulesBreaks = null;

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
/**
 * Parsing & Compiling.
 */
class Parser {
    constructor(options) {
        this.simpleRenderers = [];
        this.line = 0;
        this.tokens = [];
        this.token = null;
        this.options = options || Marked.options;
        this.renderer = this.options.renderer || new Renderer(this.options);
    }
    static parse(tokens, links, options) {
        const parser = new this(options);
        return parser.parse(links, tokens);
    }
    parse(links, tokens) {
        this.inlineLexer = new InlineLexer(InlineLexer, links, this.options, this.renderer);
        this.tokens = tokens.reverse();
        let out = '';
        while (this.next()) {
            out += this.tok();
        }
        return out;
    }
    debug(links, tokens) {
        this.inlineLexer = new InlineLexer(InlineLexer, links, this.options, this.renderer);
        this.tokens = tokens.reverse();
        let out = '';
        while (this.next()) {
            const outToken = this.tok();
            this.token.line = this.line += outToken.split('\n').length - 1;
            out += outToken;
        }
        return out;
    }
    next() {
        return (this.token = this.tokens.pop());
    }
    getNextElement() {
        return this.tokens[this.tokens.length - 1];
    }
    parseText() {
        let body = this.token.text;
        let nextElement;
        while ((nextElement = this.getNextElement()) && nextElement.type == TokenType.text) {
            body += '\n' + this.next().text;
        }
        return this.inlineLexer.output(body);
    }
    tok() {
        switch (this.token.type) {
            case TokenType.space: {
                return '';
            }
            case TokenType.paragraph: {
                return this.renderer.paragraph(this.inlineLexer.output(this.token.text));
            }
            case TokenType.text: {
                if (this.options.isNoP) {
                    return this.parseText();
                }
                else {
                    return this.renderer.paragraph(this.parseText());
                }
            }
            case TokenType.heading: {
                return this.renderer.heading(this.inlineLexer.output(this.token.text), this.token.depth, this.token.text);
            }
            case TokenType.listStart: {
                let body = '';
                const ordered = this.token.ordered;
                while (this.next().type != TokenType.listEnd) {
                    body += this.tok();
                }
                return this.renderer.list(body, ordered);
            }
            case TokenType.listItemStart: {
                let body = '';
                while (this.next().type != TokenType.listItemEnd) {
                    body += this.token.type == TokenType.text ? this.parseText() : this.tok();
                }
                return this.renderer.listitem(body);
            }
            case TokenType.looseItemStart: {
                let body = '';
                while (this.next().type != TokenType.listItemEnd) {
                    body += this.tok();
                }
                return this.renderer.listitem(body);
            }
            case TokenType.code: {
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped, this.token.meta);
            }
            case TokenType.table: {
                let header = '';
                let body = '';
                let cell;
                // header
                cell = '';
                for (let i = 0; i < this.token.header.length; i++) {
                    const flags = { header: true, align: this.token.align[i] };
                    const out = this.inlineLexer.output(this.token.header[i]);
                    cell += this.renderer.tablecell(out, flags);
                }
                header += this.renderer.tablerow(cell);
                for (const row of this.token.cells) {
                    cell = '';
                    for (let j = 0; j < row.length; j++) {
                        cell += this.renderer.tablecell(this.inlineLexer.output(row[j]), {
                            header: false,
                            align: this.token.align[j]
                        });
                    }
                    body += this.renderer.tablerow(cell);
                }
                return this.renderer.table(header, body);
            }
            case TokenType.blockquoteStart: {
                let body = '';
                while (this.next().type != TokenType.blockquoteEnd) {
                    body += this.tok();
                }
                return this.renderer.blockquote(body);
            }
            case TokenType.hr: {
                return this.renderer.hr();
            }
            case TokenType.html: {
                const html = !this.token.pre && !this.options.pedantic ? this.inlineLexer.output(this.token.text) : this.token.text;
                return this.renderer.html(html);
            }
            default: {
                if (this.simpleRenderers.length) {
                    for (let i = 0; i < this.simpleRenderers.length; i++) {
                        if (this.token.type == 'simpleRule' + (i + 1)) {
                            return this.simpleRenderers[i].call(this.renderer, this.token.execArr);
                        }
                    }
                }
                const errMsg = `Token with "${this.token.type}" type was not found.`;
                if (this.options.silent) {
                    console.log(errMsg);
                }
                else {
                    throw new Error(errMsg);
                }
            }
        }
    }
}

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class Marked {
    /**
     * Merges the default options with options that will be set.
     *
     * @param options Hash of options.
     */
    static setOptions(options) {
        Object.assign(this.options, options);
        return this;
    }
    /**
     * Setting simple block rule.
     */
    static setBlockRule(regexp, renderer = () => '') {
        BlockLexer.simpleRules.push(regexp);
        this.simpleRenderers.push(renderer);
        return this;
    }
    /**
     * Accepts Markdown text and returns text in HTML format.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options. They replace, but do not merge with the default options.
     * If you want the merging, you can to do this via `Marked.setOptions()`.
     */
    static parse(src, options = this.options) {
        try {
            const { tokens, links } = this.callBlockLexer(src, options);
            return this.callParser(tokens, links, options);
        }
        catch (e) {
            return this.callMe(e);
        }
    }
    /**
     * Accepts Markdown text and returns object with text in HTML format,
     * tokens and links from `BlockLexer.parser()`.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options. They replace, but do not merge with the default options.
     * If you want the merging, you can to do this via `Marked.setOptions()`.
     */
    static debug(src, options = this.options) {
        const { tokens, links } = this.callBlockLexer(src, options);
        let origin = tokens.slice();
        const parser = new Parser(options);
        parser.simpleRenderers = this.simpleRenderers;
        const result = parser.debug(links, tokens);
        /**
         * Translates a token type into a readable form,
         * and moves `line` field to a first place in a token object.
         */
        origin = origin.map(token => {
            token.type = TokenType[token.type] || token.type;
            const line = token.line;
            delete token.line;
            if (line) {
                return Object.assign({ line }, token);
            }
            else {
                return token;
            }
        });
        return { tokens: origin, links, result };
    }
    static callBlockLexer(src = '', options) {
        if (typeof src != 'string') {
            throw new Error(`Expected that the 'src' parameter would have a 'string' type, got '${typeof src}'`);
        }
        // Preprocessing.
        src = src
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ')
            .replace(/\u00a0/g, ' ')
            .replace(/\u2424/g, '\n')
            .replace(/^ +$/gm, '');
        return BlockLexer.lex(src, options, true);
    }
    static callParser(tokens, links, options) {
        if (this.simpleRenderers.length) {
            const parser = new Parser(options);
            parser.simpleRenderers = this.simpleRenderers;
            return parser.parse(links, tokens);
        }
        else {
            return Parser.parse(tokens, links, options);
        }
    }
    static callMe(err) {
        err.message += '\nPlease report this to https://github.com/ts-stack/markdown';
        if (this.options.silent) {
            return '<p>An error occured:</p><pre>' + this.options.escape(err.message + '', true) + '</pre>';
        }
        throw err;
    }
}
Marked.options = new MarkedOptions();
Marked.simpleRenderers = [];

/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */
class BlockLexer {
    constructor(staticThis, options) {
        this.staticThis = staticThis;
        this.links = {};
        this.tokens = [];
        this.options = options || Marked.options;
        this.setRules();
    }
    /**
     * Accepts Markdown text and returns object with tokens and links.
     *
     * @param src String of markdown source to be compiled.
     * @param options Hash of options.
     */
    static lex(src, options, top, isBlockQuote) {
        const lexer = new this(this, options);
        return lexer.getTokens(src, top, isBlockQuote);
    }
    static getRulesBase() {
        if (this.rulesBase) {
            return this.rulesBase;
        }
        const base = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            hr: /^( *[-*_]){3,} *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
            paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
            text: /^[^\n]+/,
            bullet: /(?:[*+-]|\d+\.)/,
            item: /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,
        };
        base.item = new ExtendRegexp(base.item, 'gm').setGroup(/bull/g, base.bullet).getRegexp();
        base.list = new ExtendRegexp(base.list)
            .setGroup(/bull/g, base.bullet)
            .setGroup('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
            .setGroup('def', '\\n+(?=' + base.def.source + ')')
            .getRegexp();
        const tag = '(?!(?:' +
            'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' +
            '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' +
            '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
        base.html = new ExtendRegexp(base.html)
            .setGroup('comment', /<!--[\s\S]*?-->/)
            .setGroup('closed', /<(tag)[\s\S]+?<\/\1>/)
            .setGroup('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
            .setGroup(/tag/g, tag)
            .getRegexp();
        base.paragraph = new ExtendRegexp(base.paragraph)
            .setGroup('hr', base.hr)
            .setGroup('heading', base.heading)
            .setGroup('lheading', base.lheading)
            .setGroup('blockquote', base.blockquote)
            .setGroup('tag', '<' + tag)
            .setGroup('def', base.def)
            .getRegexp();
        return (this.rulesBase = base);
    }
    static getRulesGfm() {
        if (this.rulesGfm) {
            return this.rulesGfm;
        }
        const base = this.getRulesBase();
        const gfm = Object.assign(Object.assign({}, base), {
            fences: /^ *(`{3,}|~{3,})[ \.]*((\S+)? *[^\n]*)\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
            paragraph: /^/,
            heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
        });
        const group1 = gfm.fences.source.replace('\\1', '\\2');
        const group2 = base.list.source.replace('\\1', '\\3');
        gfm.paragraph = new ExtendRegexp(base.paragraph).setGroup('(?!', `(?!${group1}|${group2}|`).getRegexp();
        return (this.rulesGfm = gfm);
    }
    static getRulesTable() {
        if (this.rulesTables) {
            return this.rulesTables;
        }
        return (this.rulesTables = Object.assign(Object.assign({}, this.getRulesGfm()), {
            nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
            table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
        }));
    }
    setRules() {
        if (this.options.gfm) {
            if (this.options.tables) {
                this.rules = this.staticThis.getRulesTable();
            }
            else {
                this.rules = this.staticThis.getRulesGfm();
            }
        }
        else {
            this.rules = this.staticThis.getRulesBase();
        }
        this.hasRulesGfm = this.rules.fences !== undefined;
        this.hasRulesTables = this.rules.table !== undefined;
    }
    /**
     * Lexing.
     */
    getTokens(src, top, isBlockQuote) {
        let nextPart = src;
        let execArr;
        mainLoop: while (nextPart) {
            // newline
            if ((execArr = this.rules.newline.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[0].length > 1) {
                    this.tokens.push({ type: TokenType.space });
                }
            }
            // code
            if ((execArr = this.rules.code.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const code = execArr[0].replace(/^ {4}/gm, '');
                this.tokens.push({
                    type: TokenType.code,
                    text: !this.options.pedantic ? code.replace(/\n+$/, '') : code,
                });
                continue;
            }
            // fences code (gfm)
            if (this.hasRulesGfm && (execArr = this.rules.fences.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: TokenType.code,
                    meta: execArr[2],
                    lang: execArr[3],
                    text: execArr[4] || '',
                });
                continue;
            }
            // heading
            if ((execArr = this.rules.heading.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: TokenType.heading,
                    depth: execArr[1].length,
                    text: execArr[2],
                });
                continue;
            }
            // table no leading pipe (gfm)
            if (top && this.hasRulesTables && (execArr = this.rules.nptable.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const item = {
                    type: TokenType.table,
                    header: execArr[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: execArr[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: [],
                };
                for (let i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                const td = execArr[3].replace(/\n$/, '').split('\n');
                for (let i = 0; i < td.length; i++) {
                    item.cells[i] = td[i].split(/ *\| */);
                }
                this.tokens.push(item);
                continue;
            }
            // lheading
            if ((execArr = this.rules.lheading.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({
                    type: TokenType.heading,
                    depth: execArr[2] === '=' ? 1 : 2,
                    text: execArr[1],
                });
                continue;
            }
            // hr
            if ((execArr = this.rules.hr.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: TokenType.hr });
                continue;
            }
            // blockquote
            if ((execArr = this.rules.blockquote.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: TokenType.blockquoteStart });
                const str = execArr[0].replace(/^ *> ?/gm, '');
                // Pass `top` to keep the current
                // "toplevel" state. This is exactly
                // how markdown.pl works.
                this.getTokens(str);
                this.tokens.push({ type: TokenType.blockquoteEnd });
                continue;
            }
            // list
            if ((execArr = this.rules.list.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const bull = execArr[2];
                this.tokens.push({ type: TokenType.listStart, ordered: bull.length > 1 });
                // Get each top-level item.
                const str = execArr[0].match(this.rules.item);
                const length = str.length;
                let next = false;
                let space;
                let blockBullet;
                let loose;
                for (let i = 0; i < length; i++) {
                    let item = str[i];
                    // Remove the list item's bullet so it is seen as the next token.
                    space = item.length;
                    item = item.replace(/^ *([*+-]|\d+\.) +/, '');
                    // Outdent whatever the list item contains. Hacky.
                    if (item.indexOf('\n ') !== -1) {
                        space -= item.length;
                        item = !this.options.pedantic
                            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
                            : item.replace(/^ {1,4}/gm, '');
                    }
                    // Determine whether the next list item belongs here.
                    // Backpedal if it does not belong in this list.
                    if (this.options.smartLists && i !== length - 1) {
                        blockBullet = this.staticThis.getRulesBase().bullet.exec(str[i + 1])[0];
                        if (bull !== blockBullet && !(bull.length > 1 && blockBullet.length > 1)) {
                            nextPart = str.slice(i + 1).join('\n') + nextPart;
                            i = length - 1;
                        }
                    }
                    // Determine whether item is loose or not.
                    // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                    // for discount behavior.
                    loose = next || /\n\n(?!\s*$)/.test(item);
                    if (i !== length - 1) {
                        next = item.charAt(item.length - 1) === '\n';
                        if (!loose) {
                            loose = next;
                        }
                    }
                    this.tokens.push({ type: loose ? TokenType.looseItemStart : TokenType.listItemStart });
                    // Recurse.
                    this.getTokens(item, false, isBlockQuote);
                    this.tokens.push({ type: TokenType.listItemEnd });
                }
                this.tokens.push({ type: TokenType.listEnd });
                continue;
            }
            // html
            if ((execArr = this.rules.html.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const attr = execArr[1];
                const isPre = attr === 'pre' || attr === 'script' || attr === 'style';
                this.tokens.push({
                    type: this.options.sanitize ? TokenType.paragraph : TokenType.html,
                    pre: !this.options.sanitizer && isPre,
                    text: execArr[0],
                });
                continue;
            }
            // def
            if (top && (execArr = this.rules.def.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.links[execArr[1].toLowerCase()] = {
                    href: execArr[2],
                    title: execArr[3],
                };
                continue;
            }
            // table (gfm)
            if (top && this.hasRulesTables && (execArr = this.rules.table.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                const item = {
                    type: TokenType.table,
                    header: execArr[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: execArr[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: [],
                };
                for (let i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    }
                    else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    }
                    else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    }
                    else {
                        item.align[i] = null;
                    }
                }
                const td = execArr[3].replace(/(?: *\| *)?\n$/, '').split('\n');
                for (let i = 0; i < td.length; i++) {
                    item.cells[i] = td[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
                }
                this.tokens.push(item);
                continue;
            }
            // simple rules
            if (this.staticThis.simpleRules.length) {
                const simpleRules = this.staticThis.simpleRules;
                for (let i = 0; i < simpleRules.length; i++) {
                    if ((execArr = simpleRules[i].exec(nextPart))) {
                        nextPart = nextPart.substring(execArr[0].length);
                        const type = 'simpleRule' + (i + 1);
                        this.tokens.push({ type, execArr });
                        continue mainLoop;
                    }
                }
            }
            // top-level paragraph
            if (top && (execArr = this.rules.paragraph.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                if (execArr[1].slice(-1) === '\n') {
                    this.tokens.push({
                        type: TokenType.paragraph,
                        text: execArr[1].slice(0, -1),
                    });
                }
                else {
                    this.tokens.push({
                        type: this.tokens.length > 0 ? TokenType.paragraph : TokenType.text,
                        text: execArr[1],
                    });
                }
                continue;
            }
            // text
            // Top-level should never reach here.
            if ((execArr = this.rules.text.exec(nextPart))) {
                nextPart = nextPart.substring(execArr[0].length);
                this.tokens.push({ type: TokenType.text, text: execArr[0] });
                continue;
            }
            if (nextPart) {
                throw new Error('Infinite loop on byte: ' + nextPart.charCodeAt(0) + `, near text '${nextPart.slice(0, 30)}...'`);
            }
        }
        return { tokens: this.tokens, links: this.links };
    }
}
BlockLexer.simpleRules = [];
BlockLexer.rulesBase = null;
/**
 * GFM Block Grammar.
 */
BlockLexer.rulesGfm = null;
/**
 * GFM + Tables Block Grammar.
 */
BlockLexer.rulesTables = null;

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ts-stack-markdown.js.map

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Edit.vue?vue&type=template&id=9f3fdc9e&scoped=true&
var Editvue_type_template_id_9f3fdc9e_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return (_vm.isMultiline)?_c('label',{staticClass:"ui-edit textarea"},[_c('div',[(_vm.placeholder || _vm.required)?_c('span',{class:['placeholder', { hide: _vm.isFocus || _vm.value.length > 0 }],style:({ '--placeholderColor': _vm.placeholderColor })},[_vm._v(" "+_vm._s(_vm.placeholder)+" "),(_vm.required && !_vm.isHideRequired)?_c('span',{attrs:{"data-tooltip":"Обязательно к заполнению"}},[_vm._v("*")]):_vm._e()]):_vm._e(),(_vm.isLazy)?_c('textarea',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.text),expression:"text"}],domProps:{"value":(_vm.text)},on:{"input":function($event){if($event.target.composing)return;_vm.text=$event.target.value}}},'textarea',_vm.multilineBinds,false),_vm.listeners)):(_vm.isMultiline)?_c('textarea',_vm._g(_vm._b({},'textarea',_vm.multilineBinds,false),_vm.listeners)):_vm._e(),_vm._v(" "),(_vm.isShowIcon)?_c('span',{class:['icon', 'input-icon', { 'input-error': _vm.isError, 'input-warning': _vm.isWarning, 'input-valid': _vm.isValid }]}):_vm._e(),(_vm.isClear && !_vm.readonly && !_vm.disabled)?_c('span',{class:['icon', 'input-icon', { close: _vm.value.length > 0 }],style:({ right: _vm.isError || _vm.isWarning || _vm.isValid ? '32px' : _vm.enableEmoji ? '6px' : '10px', '--clearIconColor': _vm.clearIconColor, '--clearIconHoverColor': _vm.clearIconHoverColor }),attrs:{"data-tooltip":"Очистить"},on:{"click":_vm.clear}}):_vm._e(),(_vm.enableEmoji && !_vm.readonly && !_vm.disabled)?_c('cEmoji',{style:({ right: _vm.isClear && _vm.value.length > 0 ? '32px' : '10px', '--emojiIconColor': _vm.emojiIconColor, '--emojiIconHoverColor': _vm.emojiIconHoverColor }),on:{"click":e => e.preventDefault(),"select":_vm.selectEmoji}}):_vm._e()],1),(!_vm.isHideStatus)?_c('div',{class:['status-text', { show: _vm.hasStatusText, error: _vm.isError, warning: _vm.isWarning }]},[_vm._t("status-text")],2):_vm._e()]):(_vm.isConfirmationCode)?_c('label',{ref:"ui-edit",staticClass:"ui-edit code"},[_c('div',_vm._l((_vm.codeLength),function(i){return (((_vm.singlelineBinds).type)==='checkbox')?_c('input',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.code[i]),expression:"code[i]"}],key:i,attrs:{"data-id":i,"maxlength":"1","pattern":"\\d*","inputmode":"numeric","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.code[i])?_vm._i(_vm.code[i],null)>-1:(_vm.code[i])},on:{"change":function($event){var $$a=_vm.code[i],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.code, i, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.code, i, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.code, i, $$c)}}}},'input',_vm.singlelineBinds,false),_vm.listeners)):(((_vm.singlelineBinds).type)==='radio')?_c('input',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.code[i]),expression:"code[i]"}],key:i,attrs:{"data-id":i,"maxlength":"1","pattern":"\\d*","inputmode":"numeric","type":"radio"},domProps:{"checked":_vm._q(_vm.code[i],null)},on:{"change":function($event){return _vm.$set(_vm.code, i, null)}}},'input',_vm.singlelineBinds,false),_vm.listeners)):_c('input',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.code[i]),expression:"code[i]"}],key:i,attrs:{"data-id":i,"maxlength":"1","pattern":"\\d*","inputmode":"numeric","type":(_vm.singlelineBinds).type},domProps:{"value":(_vm.code[i])},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.code, i, $event.target.value)}}},'input',_vm.singlelineBinds,false),_vm.listeners))}),0),(!_vm.isHideStatus)?_c('div',{class:['status-text', { show: _vm.hasStatusText, error: _vm.isError, warning: _vm.isWarning }]},[_vm._t("status-text")],2):_vm._e()]):_c('label',{staticClass:"ui-edit"},[_c('div',{class:{ 'has-left-icon': _vm.iconName }},[(_vm.iconName)?_c('span',{class:['icon', _vm.iconName],style:({ left: '10px', backgroundColor: _vm.iconColor })}):_vm._e(),(_vm.placeholder || _vm.required)?_c('span',{class:['placeholder', { hide: _vm.isFocus || _vm.value.length > 0, phone: _vm.isPhone, 'search-left': _vm.isSearchLeft }],style:({ '--placeholderColor': _vm.placeholderColor })},[_vm._v(" "+_vm._s(_vm.placeholder)+" "),(_vm.required && !_vm.isHideRequired)?_c('span',{attrs:{"data-tooltip":"Обязательно к заполнению"}},[_vm._v("*")]):_vm._e()]):_vm._e(),(_vm.isLazy)?_c('input',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.text),expression:"text",modifiers:{"lazy":true}}],domProps:{"value":(_vm.text)},on:{"change":function($event){_vm.text=$event.target.value}}},'input',_vm.singlelineBinds,false),_vm.listeners)):(_vm.isPhone)?(((_vm.singlelineBinds).type)==='checkbox')?_c('input',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.formattedPhone),expression:"formattedPhone"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.formattedPhone)?_vm._i(_vm.formattedPhone,null)>-1:(_vm.formattedPhone)},on:{"change":function($event){var $$a=_vm.formattedPhone,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.formattedPhone=$$a.concat([$$v]))}else{$$i>-1&&(_vm.formattedPhone=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.formattedPhone=$$c}}}},'input',_vm.singlelineBinds,false),_vm.listeners)):(((_vm.singlelineBinds).type)==='radio')?_c('input',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.formattedPhone),expression:"formattedPhone"}],attrs:{"type":"radio"},domProps:{"checked":_vm._q(_vm.formattedPhone,null)},on:{"change":function($event){_vm.formattedPhone=null}}},'input',_vm.singlelineBinds,false),_vm.listeners)):_c('input',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.formattedPhone),expression:"formattedPhone"}],attrs:{"type":(_vm.singlelineBinds).type},domProps:{"value":(_vm.formattedPhone)},on:{"input":function($event){if($event.target.composing)return;_vm.formattedPhone=$event.target.value}}},'input',_vm.singlelineBinds,false),_vm.listeners)):_c('input',_vm._g(_vm._b({},'input',_vm.singlelineBinds,false),_vm.listeners)),(_vm.isPhone)?_c('span',{class:['code-country', { show: _vm.isFocus || _vm.formattedPhone.length > 0, error: _vm.isError, warning: _vm.isWarning, disabled: _vm.disabled }]},[_vm._v("+7")]):_vm._e(),(_vm.isShowIcon)?_c('span',{class:['icon', 'input-icon', { 'input-error': _vm.isError, 'input-warning': _vm.isWarning, 'input-valid': _vm.isValid }]}):_vm._e(),(_vm.isClear && !_vm.readonly && !_vm.disabled)?_c('span',{class:['icon', 'input-icon', { close: _vm.value.length > 0 }],style:({ right: _vm.isError && _vm.isShowIcon || _vm.isWarning && _vm.isShowIcon || _vm.isValid && _vm.isShowIcon ? '32px' : (_vm.enableEmoji && !_vm.isPhone) ? '6px' : '10px', '--clearIconColor': _vm.clearIconColor, '--clearIconHoverColor': _vm.clearIconHoverColor }),attrs:{"data-tooltip":"Очистить"},on:{"click":_vm.clear}}):_vm._e(),(_vm.isPassword)?_c('span',{class:['icon', { 'eye-closed': !_vm.isShowPassword, 'eye-open': _vm.isShowPassword, show: _vm.value.length > 0 }],style:({ right: _vm.isClear && (_vm.isError || _vm.isWarning || _vm.isValid || (_vm.enableEmoji && !_vm.isPhone)) ? '60px' : _vm.isError || _vm.isWarning || _vm.isValid || _vm.isClear ? '40px' : '10px' }),attrs:{"data-tooltip":_vm.iconTitle},on:{"click":function($event){$event.preventDefault();return _vm.showPassword.apply(null, arguments)}}}):_vm._e(),(_vm.isSearch)?_c('span',{class:['icon', 'input-icon', { hide: _vm.value.length > 0 || _vm.isSearchLeft && _vm.isFocus, left: _vm.isSearchLeft, 'search-small': !_vm.isSearchIconBold, 'search-bold': _vm.isSearchIconBold }]}):_vm._e(),(_vm.enableEmoji && !_vm.readonly && !_vm.disabled && !_vm.isPhone)?_c('cEmoji',{style:({ right: _vm.isClear && _vm.value.length > 0 ? '32px' : '10px', '--emojiIconColor': _vm.emojiIconColor, '--emojiIconHoverColor': _vm.emojiIconHoverColor }),on:{"click":e => e.preventDefault(),"select":_vm.selectEmoji}}):_vm._e()],1),(!_vm.isHideStatus)?_c('div',{class:['status-text', { show: _vm.hasStatusText, error: _vm.isError, warning: _vm.isWarning }]},[_vm._t("status-text")],2):_vm._e()])
}
var Editvue_type_template_id_9f3fdc9e_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=3e3fa302&scoped=true&
var Emojivue_type_template_id_3e3fa302_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{staticClass:"ui-emoji",on:{"click":function($event){return _vm.positionEmojiWindow()},"mouseenter":function($event){return _vm.positionEmojiWindow()}}},[_c('button',{ref:"emojiButton",staticClass:"icon smile",attrs:{"type":"button"}}),_c('div',{ref:"emojiWrapper"},[_c('div',{class:{ 'has-often-used': _vm.hasOftenUsed }},[_c('div',{staticClass:"menu"},[_vm._l((_vm.emoji),function(e,i){return [(e.items.length > 0)?_c('div',{key:i,attrs:{"data-tooltip":e.name},on:{"click":function($event){$event.preventDefault();return _vm.goToCategory(i)}}},[_c('span',{class:['icon', i]})]):_vm._e()]})],2),_c('div',{ref:"items",staticClass:"items"},[_vm._l((_vm.emoji),function(e,i){return [(e.items.length > 0)?_c('div',{key:i,class:i},[_c('span',{attrs:{"data-tooltip":e.isItemsCollapsed ? 'Показать' : 'Скрыть'},on:{"click":function($event){$event.preventDefault();[_vm.collapse(i, e.isItemsCollapsed), _vm.toggleCollapse(i)]}}},[_c('span',[_vm._v(_vm._s(e.name))]),_c('span',{class:['icon', 'arrow-down', { collapsed: e.isItemsCollapsed }]})]),_c('div',{ref:"emojiIconsListWrapper",refInFor:true,attrs:{"data-key":i,"data-collapsed":e.isItemsCollapsed ? 'true' : 'false'}},_vm._l((e.items),function(item,index){return _c('div',{key:index,on:{"click":e => _vm.select(e, item)}},[_c('span',[_vm._v(_vm._s(item))])])}),0)]):_vm._e()]})],2)])])])
}
var Emojivue_type_template_id_3e3fa302_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=ts&

/* harmony default export */ var Emojivue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cEmoji",
    data() {
        return {
            emoji: {
                clock: {
                    name: "Часто используемые",
                    items: [],
                    isItemsCollapsed: false
                },
                smileys: {
                    name: "Смайлы",
                    items: ["😄", "😃", "😀", "😊", "😉", "😍", "😘", "😚", "😗", "😙", "😜", "😝", "😛", "😳", "😁", "😔", "😌", "😒", "😞", "😣", "😢", "😂", "😭", "😪", "😥", "😰", "😅", "😓", "😩", "😫", "😨", "😱", "😠", "😡", "😤", "😖", "😆", "😋", "😷", "😎", "😴", "😵", "😲", "😟", "😦", "😧", "👿", "😮", "😬", "😐", "😕", "😯", "😏", "😑", "👲", "👳", "👮", "👷", "💂", "👶", "👦", "👧", "👨", "👩", "👴", "👵", "👱", "👼", "👸", "😺", "😸", "😻", "😽", "😼", "🙀", "😿", "😹", "😾", "👹", "👺", "🙈", "🙉", "🙊", "💀", "👽"],
                    isItemsCollapsed: false,
                },
                animals: {
                    name: "Животные",
                    items: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍", "❄️", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🦟", "🦗", "🕷", "🕸", "🦂", "🐢", "🐍", "🦎", "🦖", "🦕", "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🦧", "🐘", "🦛", "🦏", "🐪", "🐫", "🦒", "🦘", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🦙", "🐐", "🦌", "🐕", "🐩", "🦮", "🐕‍🦺", "🐈", "🐈", "🐓", "🦃", "🦚", "🦜", "🦢", "🦩", "🐇", "🦝", "🦨", "🦡", "🦦", "🦥", "🐁", "🐀", "🐿", "🦔", "🐾", "🐉", "🐲"],
                    isItemsCollapsed: false
                },
                nature: {
                    name: "Природа",
                    items: ["🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🍄", "🐚", "🌾", "💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", "🌞", "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏", "🪐", "💫", "⭐️", "🌟", "✨", "⚡️", "☄️", "💥", "🔥", "🌪", "🌈", "☀️", "🌤", "⛅️", "🌥", "☁️", "🌦", "🌧", "⛈", "🌩", "🌨", "❄️", "☃️", "⛄️", "💨", "💧", "💦", "☔️", "☂️", "🌊", "💩", "💢", "💤"],
                    isItemsCollapsed: false
                },
                food: {
                    name: "Еда",
                    items: ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶", "🌽", "🥕", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🥞", "🧇", "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔", "🍟", "🍕", "🥪", "🥙", "🧆", "🌮", "🌯", "🥗", "🥘", "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🦪", "🍤", "🍙", "🍚", "🍘", "🍥", "🥠", "🥮", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍫", "🍿", "🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "🍼", "☕️", "🍵", "🧃", "🥤", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🧉", "🍾", "🧊", "🥄", "🍴", "🍽", "🥣", "🥡", "🥢", "🧂"],
                    isItemsCollapsed: false
                },
                gestures: {
                    name: "Жесты",
                    items: ["👋", "🤚", "🖐", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦵", "🦿", "🦶", "👣", "👂", "🦻", "👃", "🧠", "🦷", "🦴", "👀", "👁", "👅", "👄", "💋", "🩸"],
                    isItemsCollapsed: false
                },
                clothing: {
                    name: "Одежда и аксессуары",
                    items: ["🧳", "🌂", "☂️", "🧵", "🧶", "👓", "🥽", "🎀", "🥼", "🦺", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "🥻", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "🩰", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑", "💄", "💍", "💼"],
                    isItemsCollapsed: false
                },
                objects: {
                    name: "Объекты",
                    items: ["⌚️", "📱", "📲", "💻", "⌨️", "🕹", "🗜", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽", "📞", "☎️", "📟", "📠", "📺", "📻", "🧭", "⏱", "⏲", "⏰", "🕰", "⌛️", "⏳", "📡", "🔋", "🔌", "💡", "🔦", "🪔", "🧯", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "⚖️", "🧰", "🔧", "🔨", "⚒", "🛠", "⛏", "🔩", "⚙️", "🧱", "⛓", "🧲", "🔫", "💣", "🧨", "🪓", "🔪", "🗡", "⚔️", "🚬", "⚰️", "⚱️", "🏺", "🔮", "📿", "🧿", "💈", "⚗️", "🔭", "🔬", "🩹", "🩺", "💊", "💉", "🩸", "🧬", "🦠", "🧫", "🧪", "🌡", "🧹", "🧺", "🧻", "🚽", "🚰", "🚿", "🛁", "🛀", "🧼", "🪒", "🧽", "🧴", "🔑", "🗝", "🚪", "🪑", "🛋", "🛏", "🛌", "🧸", "🛒", "🎁", "🎈", "🎏", "🎀", "🎊", "🎉", "🎎", "🏮", "🎐", "🧧", "✉️", "📩", "📨", "📧", "💌", "📥", "📤", "📦", "📪", "📫", "📬", "📭", "📮", "📯", "📜", "📃", "📄", "📑", "🧾", "📊", "📈", "📉", "🗒", "🗓", "📆", "📅", "🗑", "📇", "🗃", "🗳", "📋", "📁", "📂", "🗂", "📰", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖", "🧷", "🔗", "📎", "🖇", "📐", "📏", "🧮", "📌", "📍", "✂️", "🖊", "🖋", "✒️", "🖌", "🖍", "📝", "✏️", "🔍", "🔎", "🔏", "🔐", "🔒", "🔓"],
                    isItemsCollapsed: false
                },
                symbols: {
                    name: "Символы",
                    items: ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🆔", "⚛️", "🉑", "☢️", "☣️", "📴", "📳", "🈶", "🈚️", "🈸", "🈺", "🈷️", "✴️", "🆚", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈹", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "❌", "⭕️", "🛑", "⛔️", "📛", "🚫", "💯", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "🚭", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "🔅", "🔆", "〽️", "⚠️", "🚸", "🔱", "⚜️", "🔰", "♻️", "✅", "🈯️", "💹", "❇️", "✳️", "❎", "🌐", "💠", "Ⓜ️", "🌀", "💤", "🏧", "🚾", "♿️", "🅿️", "🈳", "🈂️", "🛂", "🛃", "🛄", "🛅", "🚹", "🚺", "🚼", "⚧", "🚻", "🚮", "🎦", "📶", "🈁", "🔣", "ℹ️", "🔤", "🔡", "🔠", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔢", "#️⃣", "*️⃣", "⏏️", "▶️", "⏸", "⏯", "⏹", "⏺", "⏭", "⏮", "⏩", "⏪", "⏫", "⏬", "◀️", "🔼", "🔽", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃", "🎵", "🎶", "➕", "➖", "➗", "✖️", "♾", "💲", "💱", "™️", "©️", "®️", "〰️", "➰", "➿", "🔚", "🔙", "🔛", "🔝", "🔜", "✔️", "☑️", "🔘", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚫️", "⚪️", "🟤", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "🔳", "🔲", "▪️", "▫️", "◾️", "◽️", "◼️", "◻️", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "⬛️", "⬜️", "🟫", "🔈", "🔇", "🔉", "🔊", "🔔", "🔕", "📣", "📢", "👁‍🗨", "💬", "💭", "🗯", "♠️", "♣️", "♥️", "♦️", "🃏", "🎴", "🀄️", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"],
                    isItemsCollapsed: false
                },
            },
            positionListenerAttached: false,
        };
    },
    computed: {
        hasOftenUsed() {
            return this.emoji.clock.items.length > 0;
        },
    },
    beforeMount() {
        var _a;
        const oftenUsed = JSON.parse((_a = localStorage.getItem("ui-kit-often-used-emoji")) !== null && _a !== void 0 ? _a : "[]");
        if (oftenUsed.length > 0) {
            this.emoji.clock.items = oftenUsed;
        }
    },
    methods: {
        select(e, item) {
            const target = e.target.nodeName === "SPAN"
                ? e.target.parentElement
                : e.target;
            target.classList.add("press");
            setTimeout(() => {
                target.classList.remove("press");
            }, 200);
            this.$emit("select", item);
            if (this.hasOftenUsed) {
                if (!this.emoji.clock.items.includes(item)) {
                    if (this.emoji.clock.items.length === 50) {
                        this.emoji.clock.items.pop();
                    }
                    this.emoji.clock.items.unshift(item);
                }
            }
            else {
                this.emoji.clock.items = [item];
            }
            localStorage.setItem("ui-kit-often-used-emoji", JSON.stringify(this.emoji.clock.items));
        },
        collapse(key, value) {
            this.$data.emoji[key].isItemsCollapsed = !value;
        },
        toggleCollapse(key) {
            const emojiLists = this.$refs.emojiIconsListWrapper;
            const collapse = (element) => {
                requestAnimationFrame(() => {
                    element.style.height = `${element.scrollHeight}px`;
                    requestAnimationFrame(() => {
                        element.style.height = "0";
                    });
                });
            };
            const expand = (element) => {
                element.style.height = `${element.scrollHeight}px`;
                element.addEventListener("transitionend", function transition() {
                    element.removeEventListener("transitionend", transition);
                    element.style.height = null;
                });
            };
            for (let listIndex = 0; listIndex < emojiLists.length; listIndex++) {
                if (key === emojiLists[listIndex].getAttribute("data-key") &&
                    emojiLists[listIndex].getAttribute("data-collapsed") === "true") {
                    expand(emojiLists[listIndex]);
                    emojiLists[listIndex].isItemsCollapsed = false;
                    break;
                }
                if (key === emojiLists[listIndex].getAttribute("data-key") &&
                    emojiLists[listIndex].getAttribute("data-collapsed") === "false") {
                    collapse(emojiLists[listIndex]);
                    emojiLists[listIndex].isItemsCollapsed = true;
                    break;
                }
            }
        },
        goToCategory(category) {
            const items = this.$refs.items;
            const target = items.querySelector(`.${category}`);
            items.scrollTo({
                top: target.offsetTop - 40,
                behavior: "smooth",
            });
        },
        positionEmojiWindow() {
            if (typeof window !== "undefined") {
                const positionCallback = () => {
                    const button = this.$refs.emojiButton;
                    const emojiWrapper = this.$refs.emojiWrapper;
                    const DesktopLeftOffset = 260; // menu width + padding
                    const MobileLeftOffset = 60; // menu width + padding
                    const rightOffset = 10;
                    const buttonPosition = button.getBoundingClientRect();
                    const emojiWrapperPosition = emojiWrapper.getBoundingClientRect();
                    // left position
                    if (((window.innerWidth > 700 && buttonPosition.left < DesktopLeftOffset + emojiWrapperPosition.width / 1.25) ||
                        (window.innerWidth <= 700 && buttonPosition.left < MobileLeftOffset + emojiWrapperPosition.width / 1.25)) &&
                        window.innerWidth - buttonPosition.right > emojiWrapperPosition.width + rightOffset) {
                        emojiWrapper.style.left = "";
                    }
                    // center position
                    if (((window.innerWidth > 700 && buttonPosition.left > DesktopLeftOffset + emojiWrapperPosition.width / 1.25) ||
                        (window.innerWidth <= 700 && buttonPosition.left > MobileLeftOffset + emojiWrapperPosition.width / 1.25)) &&
                        window.innerWidth - buttonPosition.right > emojiWrapperPosition.width + rightOffset) {
                        emojiWrapper.style.left = `-${emojiWrapperPosition.width / 2}px`;
                    }
                    // right position
                    if (((window.innerWidth > 700 && buttonPosition.left > DesktopLeftOffset + emojiWrapperPosition.width / 1.25) ||
                        (window.innerWidth <= 700 && buttonPosition.left > MobileLeftOffset + emojiWrapperPosition.width / 1.25)) &&
                        window.innerWidth - buttonPosition.right < emojiWrapperPosition.width / 1.25 + rightOffset) {
                        emojiWrapper.style.left = `-${emojiWrapperPosition.width - buttonPosition.width}px`;
                    }
                };
                try {
                    positionCallback();
                    if (!this.positionListenerAttached) {
                        this.positionListenerAttached = true;
                        window.addEventListener("resize", positionCallback);
                    }
                }
                catch (error) { }
            }
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Emoji.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Emojivue_type_script_lang_ts_ = (Emojivue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=style&index=0&id=3e3fa302&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Emoji.vue?vue&type=style&index=0&id=3e3fa302&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Emoji.vue



;


/* normalize component */

var Emoji_component = normalizeComponent(
  components_Emojivue_type_script_lang_ts_,
  Emojivue_type_template_id_3e3fa302_scoped_true_render,
  Emojivue_type_template_id_3e3fa302_scoped_true_staticRenderFns,
  false,
  null,
  "3e3fa302",
  null
  
)

/* harmony default export */ var Emoji = (Emoji_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Edit.vue?vue&type=script&lang=ts&


/* harmony default export */ var Editvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cEdit",
    components: { cEmoji: Emoji },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        cols: {
            type: Number,
            default: 42,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        isClear: {
            type: Boolean,
            default: false,
        },
        isConfirmationCode: {
            type: Boolean,
            default: false,
        },
        isError: {
            type: Boolean,
            default: false,
        },
        isLazy: {
            type: Boolean,
            default: false,
        },
        isPassword: {
            type: Boolean,
            default: false,
        },
        isShowIcon: {
            type: Boolean,
            default: false,
        },
        isValid: {
            type: Boolean,
            default: false,
        },
        isWarning: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: "singleline",
            validator: (v) => ["singleline", "multiline"].includes(v),
        },
        placeholder: {
            type: String,
        },
        required: {
            type: Boolean,
            default: false,
        },
        resize: {
            type: String,
            default: "vertical",
            validator: (v) => ["vertical", "horizontal", "none", "both"].includes(v),
        },
        rows: {
            type: Number,
            default: 4,
        },
        type: {
            type: String,
            default: "text",
            validator: (v) => ["text", "number", "password", "email", "tel"].includes(v),
        },
        value: {
            type: String,
            default: "",
        },
        codeLength: {
            type: Number,
            default: 6,
        },
        inputmode: {
            type: String,
            default: "text",
        },
        isHideStatus: {
            type: Boolean,
            default: false,
        },
        isSearch: {
            type: Boolean,
            default: false,
        },
        isSearchLeft: {
            type: Boolean,
            default: false,
        },
        isSearchIconBold: {
            type: Boolean,
            default: true,
        },
        iconName: {
            type: String,
        },
        iconColor: {
            type: String,
            default: "#3F51B5",
        },
        autocomplete: {
            type: String,
            default: "off",
        },
        isHideRequired: {
            type: Boolean,
            default: false,
        },
        enableEmoji: {
            type: Boolean,
            default: false,
        },
        emojiIconColor: {
            type: String,
            default: "#3f51b5",
        },
        emojiIconHoverColor: {
            type: String,
            default: "#4960df",
        },
        width: {
            type: String,
            default: "360px",
        },
        backgroundColor: {
            type: String,
            default: "#ebf0f9",
        },
        placeholderColor: {
            type: String,
            default: "#818ca9",
        },
        color: {
            type: String,
            default: "#1e1e1e",
        },
        borderActiveColor: {
            type: String,
            default: "#3f51b5",
        },
        borderWidth: {
            type: String,
            default: "1px"
        },
        clearIconColor: {
            type: String,
            default: "#818ca9",
        },
        clearIconHoverColor: {
            type: String,
            default: "#3f51b5",
        },
    },
    data() {
        return {
            text: "",
            isShowPassword: false,
            isFocus: false,
            hasStatusText: false,
            formattedPhone: "",
            formattedCode: "",
            code: Object.fromEntries(Array.from({ length: this.codeLength }, (_, i) => [i + 1, ""])),
        };
    },
    computed: {
        iconTitle() {
            return this.isShowPassword ? "Скрыть пароль" : "Показать пароль";
        },
        isMultiline() {
            return this.mode === "multiline";
        },
        isPhone() {
            return this.type === "tel";
        },
        passwordMode() {
            return this.isShowPassword ? "text" : "password";
        },
        listeners() {
            return {
                ...this.$listeners,
                input: this.input,
                change: this.change,
                focus: this.focus,
                blur: this.blur,
                keydown: this.keyDown,
            };
        },
        multilineBinds() {
            const style = {
                "--backgroundColor": this.backgroundColor,
                "--color": this.color,
                "--borderActiveColor": this.borderActiveColor,
                "--borderWidth": this.borderWidth,
            };
            if (this.isMultiline && this.cols === 42 && this.width !== "360px") {
                style["--width"] = this.width;
            }
            const binds = [
                { style: `resize: ${this.readonly ? "none" : this.resize}` },
                { required: this.required },
                { disabled: this.disabled },
                { readonly: this.readonly },
                { rows: this.rows },
                { cols: this.cols },
                {
                    class: {
                        error: this.isError,
                        warning: this.isWarning,
                        readonly: this.readonly,
                        "no-resize": this.resize === "none" || this.readonly,
                        "custom-width": this.isMultiline && this.cols === 42 && this.width !== "360px",
                    },
                },
                { autocomplete: this.autocomplete },
                { ref: "input" },
                { inputmode: this.inputmode },
                { style: style },
            ];
            if (!this.isLazy) {
                binds.push({ value: this.value });
            }
            return binds;
        },
        singlelineBinds() {
            const binds = [
                { type: this.isPassword ? this.passwordMode : this.type },
                { required: this.required },
                { disabled: this.disabled },
                { readonly: this.readonly },
                {
                    class: {
                        code: this.isConfirmationCode,
                        phone: this.isPhone,
                        password: this.isPassword,
                        error: this.isError,
                        warning: this.isWarning,
                        readonly: this.readonly,
                        entered: this.value.length > 0 || this.formattedPhone.length > 0,
                    },
                },
                { autocomplete: this.autocomplete },
                { ref: "input" },
                { inputmode: this.inputmode },
                {
                    style: {
                        "--width": this.width,
                        "--backgroundColor": this.backgroundColor,
                        "--color": this.color,
                        "--borderActiveColor": this.borderActiveColor,
                        "--borderWidth": this.borderWidth,
                    },
                },
            ];
            if (!this.isPhone) {
                binds.push({ value: this.value });
            }
            return binds;
        },
    },
    watch: {
        value: {
            immediate: true,
            handler() {
                this.text = this.value;
                if (this.isPhone) {
                    if ((this.value || "").length !== 0) {
                        this.phoneFormatting("value");
                    }
                }
            },
        },
    },
    mounted() {
        this.checkSlots();
    },
    updated() {
        this.checkSlots();
    },
    methods: {
        selectEmoji(emoji) {
            const textarea = this.isMultiline ? this.$refs.textarea : this.$refs.input;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            if (this.isLazy) {
                this.text = `${this.text.slice(0, start)}${emoji}${this.text.slice(end)}`;
            }
            else {
                this.$emit("update:value", `${this.value.slice(0, start)}${emoji}${this.value.slice(end)}`);
            }
            textarea.setRangeText(emoji, start, end, "end");
        },
        blur(e) {
            this.isFocus = false;
            this.$emit("blur", e);
        },
        change(e) {
            if (this.isLazy) {
                this.$emit("update:value", this.text);
            }
            this.$emit("change", e);
        },
        checkSlots() {
            this.hasStatusText = !!this.$slots["status-text"];
        },
        clear() {
            this.$emit("update:value", "");
            if (this.isPhone) {
                this.formattedPhone = "";
            }
            this.$emit("input", "");
            this.isFocus = false;
            setTimeout(() => {
                ;
                this.$refs.input.blur();
            }, 100);
        },
        focus(e) {
            this.isFocus = true;
            this.$emit("focus", e);
        },
        input(e) {
            if (this.isPhone) {
                if (e.inputType === "deleteContentBackward" && this.formattedPhone.length < 1) {
                    this.$emit("update:value", "");
                    return;
                }
                this.phoneFormatting("formattedPhone");
                this.$emit("input", e);
                return;
            }
            if (this.isConfirmationCode) {
                const index = Number(e.target.dataset.id);
                this.code[index] = this.code[index].replace(/\D/g, "");
                const refs = this.$refs["ui-edit"];
                if (this.code[index].length > 0 && index !== Object.keys(this.code).length) {
                    const next = refs.querySelector(`input[data-id="${index + 1}"]`);
                    next.focus();
                }
                const result = Object.values(this.code).reduce((a, b) => a + b);
                this.$emit("update:value", result);
                return;
            }
            if (!this.isLazy) {
                this.$emit("update:value", e.target.value);
            }
            this.$emit("input", e);
        },
        keyDown(e) {
            if (this.isConfirmationCode) {
                const index = Number(e.target.dataset.id);
                const refs = this.$refs["ui-edit"];
                const prev = refs.querySelector(`input[data-id="${index - 1}"]`);
                const next = refs.querySelector(`input[data-id="${index + 1}"]`);
                if (["Backspace", "Delete"].includes(e.code)) {
                    if (this.code[index].length > 0) {
                        this.code[index] = "";
                        setTimeout(() => {
                            if (index !== 1) {
                                prev.focus();
                            }
                        }, 1);
                    }
                    else {
                        if (index !== 1) {
                            this.code[index - 1] = "";
                            prev.focus();
                        }
                    }
                    const result = Object.values(this.code).reduce((a, b) => a + b);
                    this.$emit("update:value", result);
                }
                if (e.code === "ArrowRight" && index !== Object.keys(this.code).length) {
                    next.focus();
                }
                if (e.code === "ArrowLeft" && index !== 1) {
                    prev.focus();
                }
            }
            this.$emit("keydown", e);
        },
        phoneFormatting(phone) {
            let p = this[phone].replace(/\D/g, "");
            if (p.length > 10 && ["7", "8"].includes(p[0])) {
                p = p.slice(1);
            }
            const m = p.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            if (m === null) {
                return;
            }
            this.formattedPhone = !m[2] ? m[1] : m[1] + " " + m[2] + (m[3] ? "-" + m[3] : "") + (m[4] ? "-" + m[4] : "");
            this.$emit("update:value", m[0]);
        },
        showPassword() {
            this.isShowPassword = !this.isShowPassword;
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Edit.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Editvue_type_script_lang_ts_ = (Editvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Edit.vue?vue&type=style&index=0&id=9f3fdc9e&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Edit.vue?vue&type=style&index=0&id=9f3fdc9e&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Edit.vue



;


/* normalize component */

var Edit_component = normalizeComponent(
  components_Editvue_type_script_lang_ts_,
  Editvue_type_template_id_9f3fdc9e_scoped_true_render,
  Editvue_type_template_id_9f3fdc9e_scoped_true_staticRenderFns,
  false,
  null,
  "9f3fdc9e",
  null
  
)

/* harmony default export */ var Edit = (Edit_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Combobox.vue?vue&type=script&lang=ts&



/* harmony default export */ var Comboboxvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cCombobox",
    components: { cEdit: Edit },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        value: {
            type: Number,
            default: null,
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: "Выбрать",
        },
        filter: {
            type: Boolean,
            default: true,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "m",
            validator: (v) => ["s", "m", "l"].includes(v),
        },
        limit: {
            type: Number,
            default: null,
        },
        isPrefixSearch: {
            type: Boolean,
            default: false,
        },
        isSearchedAnyMatch: {
            type: Boolean,
            default: false,
        },
        isError: {
            type: Boolean,
            default: false,
        },
        isHideStatus: {
            type: Boolean,
            default: false,
        },
        isNoAutocomplete: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            initialValue: this.value,
            initialText: "",
            isOpenned: false,
            isChildrenActive: false,
            selectedItemIndex: null,
            isSelectedByMouse: false,
        };
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.input,
                focus: this.focus,
                blur: this.blur,
                keydown: this.keyDown,
            };
        },
        filteredItems() {
            const limit = (this.limit === null || isNaN(this.limit) || this.limit < 1) ? undefined : this.limit;
            const initialText = this.initialText.toLocaleLowerCase();
            if (!this.filter || initialText === "") {
                return this.items.slice(0, limit);
            }
            if (!limit) {
                return this.items.filter((item) => {
                    if (this.isPrefixSearch) {
                        const result = item.name.replace(/<b>|<\/b>|<div class="locality">|<\/div>/g, "").toLocaleLowerCase();
                        return this.isSearchedAnyMatch ? result.includes(initialText) : result.indexOf(initialText) === 0;
                    }
                    else {
                        const result = item.name.toLocaleLowerCase();
                        return this.isSearchedAnyMatch ? result.includes(initialText) : result.indexOf(initialText) !== -1;
                    }
                });
            }
            const result = [];
            for (const item of this.items) {
                if (this.isPrefixSearch
                    ? item.name
                        .replace(/<b>|<\/b>|<div class="locality">|<\/div>/g, "")
                        .toLocaleLowerCase()
                        .indexOf(initialText) === 0
                    : item.name.toLocaleLowerCase().indexOf(initialText) !== -1) {
                    result.push(item);
                }
                if (result.length >= this.limit) {
                    return result;
                }
            }
            return result;
        },
    },
    watch: {
        value(newValue) {
            if (this.initialValue === newValue) {
                return;
            }
            this.initialText = "";
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === newValue) {
                    this.setValue(i, true, false, true);
                    return;
                }
            }
            this.setValue(null, true, false);
        },
        items() {
            if (this.initialValue === null && this.value !== null) {
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].value === this.value) {
                        this.setValue(i, true, false, true);
                        return;
                    }
                }
            }
            this.setValue(null, true, false);
        },
        selectedItemIndex(newValue) {
            if (!this.isOpenned || this.isSelectedByMouse || newValue === null) {
                return;
            }
            const menu = this.$refs.menu;
            const selected = (menu.children[newValue] || null);
            if (selected === null) {
                return;
            }
            if (selected.offsetTop + selected.clientHeight > menu.scrollTop + menu.clientHeight) {
                menu.scroll(menu.clientLeft, selected.offsetTop - menu.clientHeight + selected.clientHeight);
            }
            if (selected.offsetTop < menu.scrollTop) {
                menu.scroll(menu.clientLeft, selected.offsetTop);
            }
        },
    },
    created() {
        if (this.value < 1 || this.filteredItems.length < 1) {
            return;
        }
        for (let i = 0; i < this.filteredItems.length; i++) {
            if (this.items[i].value === this.value) {
                this.setValue(i, true, false, true);
            }
        }
    },
    mounted() {
        window.addEventListener("blur", this.windowBlur);
    },
    beforeDestroy() {
        window.removeEventListener("blur", this.windowBlur);
    },
    methods: {
        mdParse: (e) => Marked.parse(e),
        windowBlur() {
            if (typeof window !== "undefined" && document.activeElement instanceof HTMLInputElement) {
                document.activeElement.blur();
                this.isOpenned = false;
            }
        },
        setValue(itemIndex = null, setText = true, emit = true, ignoreFilter = false) {
            const items = ignoreFilter ? this.items : this.filteredItems;
            this.initialValue = itemIndex !== null && items && items[itemIndex] ? items[itemIndex].value : null;
            if (this.initialValue !== null) {
                this.isOpenned = false;
            }
            if (setText) {
                this.initialText =
                    this.initialValue !== null
                        ? items[itemIndex].name.replace(/<b>|<\/b>|<div class="locality">|<\/div>/g, "")
                        : "";
            }
            if (this.isOpenned && setText) {
                this.selectedItemIndex = null;
            }
            if (emit) {
                this.$emit("update:value", this.initialValue);
            }
            if (itemIndex !== null && typeof window !== "undefined" && document.activeElement instanceof HTMLInputElement) {
                document.activeElement.blur();
            }
        },
        input(e) {
            this.$emit("input", e);
            if (this.initialValue !== null) {
                this.setValue(null, false);
            }
            this.isOpenned = true;
        },
        focus(e) {
            this.$emit("focus", e);
            if (this.filteredItems.length < 1 || this.isOpenned) {
                return;
            }
            if (!this.isOpenned) {
                this.selectedItemIndex = null;
            }
            this.isOpenned = true;
        },
        blur(e) {
            if (this.isChildrenActive) {
                this.isChildrenActive = false;
                e.target.focus();
                return;
            }
            this.$emit("blur", e);
            if (!this.isOpenned) {
                return;
            }
            this.isOpenned = this.$el.contains(e.relatedTarget);
        },
        keyDown(e) {
            this.$emit("keydown", e);
            if (e.code === "ArrowUp") {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                if (this.isOpenned && this.selectedItemIndex === null) {
                    this.isOpenned = false;
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.isSelectedByMouse = false;
                this.selectedItemIndex =
                    this.selectedItemIndex !== 0
                        ? this.selectedItemIndex > 0
                            ? this.selectedItemIndex - 1
                            : 0
                        : null;
                e.preventDefault();
                e.stopPropagation();
            }
            if (e.code === "ArrowDown") {
                if (this.filteredItems.length < 1) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                if (!this.isOpenned) {
                    this.isOpenned = true;
                }
                else {
                    this.isSelectedByMouse = false;
                    this.selectedItemIndex =
                        this.selectedItemIndex !== null
                            ? this.selectedItemIndex < this.filteredItems.length - 1
                                ? this.selectedItemIndex + 1
                                : this.selectedItemIndex
                            : 0;
                }
                e.preventDefault();
                e.stopPropagation();
            }
            if (e.code === "Home" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.isSelectedByMouse = false;
                this.selectedItemIndex = 0;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (e.code === "End" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.isSelectedByMouse = false;
                this.selectedItemIndex = this.filteredItems.length - 1;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (e.code === "PageUp" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.isSelectedByMouse = false;
                this.selectedItemIndex = this.selectedItemIndex !== null && this.selectedItemIndex >= 10 ? this.selectedItemIndex - 10 : 0;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (e.code === "PageDown" && e.ctrlKey && e.altKey) {
                if (this.filteredItems.length < 1 || !this.isOpenned) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
                this.isSelectedByMouse = false;
                this.selectedItemIndex =
                    this.selectedItemIndex !== null && this.selectedItemIndex < this.filteredItems.length - 10
                        ? this.selectedItemIndex + 10
                        : this.filteredItems.length - 1;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (e.code === "Escape" && this.isOpenned) {
                this.isOpenned = false;
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            if (e.code === "Enter" && this.isOpenned) {
                if (this.filteredItems.length === 1) {
                    this.selectedItemIndex = 0;
                }
                if (this.selectedItemIndex !== null) {
                    this.setValue(this.selectedItemIndex);
                }
                e.preventDefault();
                e.stopPropagation();
                return;
            }
        },
        childrenMouseDown() {
            this.isChildrenActive = true;
        },
        mouseDown() {
            if (this.filter) {
                return;
            }
            this.isOpenned = !this.isOpenned;
        },
        mousemove(index) {
            if (this.selectedItemIndex === index) {
                return;
            }
            this.isSelectedByMouse = true;
            this.selectedItemIndex = index;
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Combobox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Comboboxvue_type_script_lang_ts_ = (Comboboxvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Combobox.vue?vue&type=style&index=0&id=1d774100&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Combobox.vue?vue&type=style&index=0&id=1d774100&prod&lang=scss&

;// CONCATENATED MODULE: ./src/components/Combobox.vue



;


/* normalize component */

var Combobox_component = normalizeComponent(
  components_Comboboxvue_type_script_lang_ts_,
  Comboboxvue_type_template_id_1d774100_render,
  Comboboxvue_type_template_id_1d774100_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Combobox = (Combobox_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DropDown.vue?vue&type=template&id=65e0f972&scoped=true&
var DropDownvue_type_template_id_65e0f972_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{ref:"drop-down",staticClass:"ui-drop-down",style:({ left: `${_vm.left}%`, 'margin-left': `${_vm.marginLeft}px`  })},[_c('span',{style:({ left: `${_vm.taleLeft}%` })}),_c('div',[_c('div',[_vm._t("default")],2)])])
}
var DropDownvue_type_template_id_65e0f972_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DropDown.vue?vue&type=script&lang=ts&

/* harmony default export */ var DropDownvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cDropDown",
    props: {
        position: {
            type: String,
            default: "left",
            validator: (v) => ["left", "center", "right"].includes(v),
        },
    },
    data() {
        return {
            left: 0,
            marginLeft: 0,
            taleLeft: 10,
        };
    },
    mounted() {
        const width = this.$refs["drop-down"].offsetWidth;
        if (this.position === "center") {
            this.left = 45;
            this.taleLeft = 50;
            this.marginLeft = -width * 0.5;
        }
        if (this.position === "right") {
            this.left = 90;
            this.taleLeft = 90;
            this.marginLeft = -width * 0.9;
        }
    },
}));

;// CONCATENATED MODULE: ./src/components/DropDown.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_DropDownvue_type_script_lang_ts_ = (DropDownvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/DropDown.vue?vue&type=style&index=0&id=65e0f972&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/DropDown.vue?vue&type=style&index=0&id=65e0f972&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/DropDown.vue



;


/* normalize component */

var DropDown_component = normalizeComponent(
  components_DropDownvue_type_script_lang_ts_,
  DropDownvue_type_template_id_65e0f972_scoped_true_render,
  DropDownvue_type_template_id_65e0f972_scoped_true_staticRenderFns,
  false,
  null,
  "65e0f972",
  null
  
)

/* harmony default export */ var DropDown = (DropDown_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Radio.vue?vue&type=template&id=70fc68e0&scoped=true&
var Radiovue_type_template_id_70fc68e0_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('label',_vm._g({class:['ui-radio-button', !_vm.isCustom ? _vm.mode : '', { nowrap: _vm.nowrap, disabled: _vm.disabled, custom: _vm.isCustom }],style:({ '--color': _vm.color, '--hoverColor': _vm.hoverColor, '--activeColor': _vm.activeColor })},_vm.listeners),[_c('input',{attrs:{"disabled":_vm.disabled,"type":"radio"},domProps:{"value":_vm.value,"checked":_vm.checked},on:{"change":_vm.change}}),_c('span',{staticClass:"radio"}),_vm._t("default")],2)
}
var Radiovue_type_template_id_70fc68e0_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Radio.vue?vue&type=script&lang=ts&

/* harmony default export */ var Radiovue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cRadio",
    props: {
        value: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        nowrap: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: "primary",
            validator: (v) => ["primary", "red"].includes(v),
        },
        color: {
            type: String,
        },
        hoverColor: {
            type: String,
        },
        activeColor: {
            type: String,
        },
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                focus: this.focus,
                blur: this.blur,
                keydown: this.keyDown,
                change: this.change,
            };
        },
        isCustom() {
            var _a, _b, _c;
            return ((_a = this.color) !== null && _a !== void 0 ? _a : "").length > 0 || ((_b = this.hoverColor) !== null && _b !== void 0 ? _b : "").length > 0 || ((_c = this.activeColor) !== null && _c !== void 0 ? _c : "").length > 0;
        },
    },
    methods: {
        change() {
            this.setChecked();
            this.$emit("change", this.value);
        },
        focus(e) {
            this.$emit("focus", e);
        },
        blur(e) {
            this.$emit("blur", e);
        },
        keyDown(e) {
            if (e.code !== "Enter" && e.code !== "Space") {
                return;
            }
            e.preventDefault();
            this.toogle();
        },
        toogle() {
            this.setChecked();
        },
        setChecked() {
            if (this.disabled) {
                return;
            }
            this.$emit("update:checked", this.value);
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Radio.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Radiovue_type_script_lang_ts_ = (Radiovue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Radio.vue?vue&type=style&index=0&id=70fc68e0&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Radio.vue?vue&type=style&index=0&id=70fc68e0&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Radio.vue



;


/* normalize component */

var Radio_component = normalizeComponent(
  components_Radiovue_type_script_lang_ts_,
  Radiovue_type_template_id_70fc68e0_scoped_true_render,
  Radiovue_type_template_id_70fc68e0_scoped_true_staticRenderFns,
  false,
  null,
  "70fc68e0",
  null
  
)

/* harmony default export */ var Radio = (Radio_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/RadioGroup.vue?vue&type=script&lang=ts&


/* harmony default export */ var RadioGroupvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cRadioGroup",
    components: { cRadio: Radio },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        value: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        change(v) {
            this.$emit("update:value", v);
        },
    },
    render(h) {
        const slots = this.$slots.default || [];
        if (slots.length < 1) {
            return h(undefined);
        }
        const radios = slots.map((v) => {
            var _a, _b, _c, _d, _e;
            if (!v.data) {
                return undefined;
            }
            const body = v.componentOptions ? (_a = v.componentOptions.children) !== null && _a !== void 0 ? _a : [] : [];
            const props = v.componentOptions ? (_b = v.componentOptions.propsData) !== null && _b !== void 0 ? _b : {} : {};
            const staticClass = ((_c = v.data) !== null && _c !== void 0 ? _c : {}).staticClass;
            const dynamicClasses = (_e = ((_d = v.data) !== null && _d !== void 0 ? _d : {}).class) !== null && _e !== void 0 ? _e : [];
            const classes = [staticClass, ...dynamicClasses].filter((i) => i !== undefined);
            return h("cRadio", {
                props: {
                    value: props.value,
                    disabled: this.disabled || props.disabled,
                    checked: props.value === this.value && (!this.disabled || !props.disabled),
                    color: props.color,
                    hoverColor: props.hoverColor,
                    activeColor: props.activeColor,
                },
                class: classes,
                attrs: {
                    disabled: this.disabled || props.disabled,
                },
                on: {
                    ["update:checked"]: (v) => this.change(v),
                },
            }, body);
        });
        return h("div", radios);
    },
}));

;// CONCATENATED MODULE: ./src/components/RadioGroup.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_RadioGroupvue_type_script_lang_ts_ = (RadioGroupvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/components/RadioGroup.vue
var RadioGroup_render, RadioGroup_staticRenderFns
;



/* normalize component */
;
var RadioGroup_component = normalizeComponent(
  components_RadioGroupvue_type_script_lang_ts_,
  RadioGroup_render,
  RadioGroup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioGroup = (RadioGroup_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Range.vue?vue&type=template&id=2bf1ae77&scoped=true&
var Rangevue_type_template_id_2bf1ae77_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{class:['ui-range', { disabled: _vm.inOnePrice, one: _vm.isOnlyOneRange }]},[(_vm.isOnlyOneRange)?_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.name))]):_c('div',{staticClass:"values"},[_c('span',[_vm._v(_vm._s(_vm.min)+" "+_vm._s(_vm.isPrice ? _vm.currencySymbol : ""))]),_c('span',[_vm._v(_vm._s(_vm.max)+" "+_vm._s(_vm.isPrice ? _vm.currencySymbol : ""))])]),_c('div',{ref:"slider",staticClass:"slider",style:({ '--color':_vm.color, '--activeColor': _vm.activeColor })},[_c('span',{staticClass:"current-range",style:({ left: `${_vm.start}%`, right: `${_vm.end}%` })}),(!_vm.isOnlyOneRange)?_c('span',{staticClass:"slider-handle",style:({ left: `${_vm.start}%` }),on:{"mousedown":e => _vm.mouseDown(e, true),"touchstart":e => _vm.mouseDown(e, true)}}):_vm._e(),_c('span',{staticClass:"slider-handle",style:({ right: `${_vm.end}%` }),on:{"mousedown":e => _vm.mouseDown(e, false),"touchstart":e => _vm.mouseDown(e, false)}})]),(!_vm.isOnlyDraging && !_vm.isOnlyOneRange)?_c('div',{staticClass:"editors"},[_c('div',{class:['min', { changed: _vm.currentMin !== _vm.min } ]},[_c('cEdit',{class:[_vm.isPrice ? _vm.currency: '', { 'show-border': _vm.isChanginMin }],attrs:{"placeholder":`${_vm.currentMin}`,"value":`${_vm.currentMin}`,"is-hide-status":""},on:{"change":_vm.changeMin}})],1),_c('div',{class:['max', { changed: _vm.currentMax !== _vm.max } ]},[_c('cEdit',{class:[_vm.isPrice ? _vm.currency: '', { 'show-border': _vm.isChanginMax }],attrs:{"placeholder":`${_vm.currentMax}`,"value":`${_vm.currentMax}`,"is-hide-status":""},on:{"change":_vm.changeMax}})],1)]):_vm._e()])
}
var Rangevue_type_template_id_2bf1ae77_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Range.vue?vue&type=script&lang=ts&


/* harmony default export */ var Rangevue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cRange",
    components: { cEdit: Edit },
    props: {
        max: {
            type: Number,
        },
        min: {
            type: Number,
        },
        minRange: {
            type: Number,
            default: 10,
        },
        resetID: {
            type: Number,
        },
        internalMax: {
            type: Number,
        },
        internalMin: {
            type: Number,
        },
        isPrice: {
            type: Boolean,
            default: false,
        },
        currency: {
            type: String,
            default: "RUB",
            validator: (v) => ["RUB", "USD", "EUR"].includes(v),
        },
        isOnlyDraging: {
            type: Boolean,
            default: false,
        },
        isOnlyOneRange: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
        },
        color: {
            type: String,
            default: "#eeeeee",
        },
        activeColor: {
            type: String,
            default: "#3f51b5",
        },
    },
    data() {
        return {
            currentMax: this.max,
            currentMin: this.min,
            cursorLeft: undefined,
            isDragging: false,
            isLeft: false,
            startPercent: undefined,
            isChanginMin: false,
            isChanginMax: false,
        };
    },
    computed: {
        end() {
            const end = 100 - (this.max - this.min - (this.max - this.currentMax)) / this.weight;
            return end >= 0 ? end : 0;
        },
        start() {
            const start = (this.currentMin - this.min) / this.weight;
            return start >= 0 ? start : 0;
        },
        weight() {
            return (this.max - this.min) / 100;
        },
        inOnePrice() {
            return this.max === this.min;
        },
        currencySymbol() {
            let symbol = "";
            if (this.isPrice) {
                switch (this.currency) {
                    case "USD":
                        symbol = "$";
                        break;
                    case "EUR":
                        symbol = "€";
                        break;
                    default:
                        symbol = "₽";
                }
            }
            return symbol;
        },
    },
    watch: {
        max(n) {
            this.currentMax = isFinite(n) ? n : "";
        },
        min(n) {
            this.currentMin = isFinite(n) ? n : "";
        },
        resetID() {
            this.currentMin = this.min;
            this.currentMax = this.max;
        },
        internalMax(n) {
            if (n !== this.currentMax && n !== undefined) {
                this.changeMax(n);
            }
            if (n === undefined) {
                this.currentMax = this.max;
            }
        },
        internalMin(n) {
            if (n !== this.currentMin && n !== undefined) {
                this.changeMin(n);
            }
            if (n === undefined) {
                this.currentMin = this.min;
            }
        },
    },
    methods: {
        change(min, max, needEmit = true) {
            if (this.isDragging === false && this.currentMin === min && this.currentMax === max) {
                this.$forceUpdate();
            }
            this.currentMin = min;
            this.currentMax = max;
            if (this.isDragging === false && needEmit) {
                if (this.currentMin === this.min && this.currentMax === this.max) {
                    this.$emit("change", undefined, undefined);
                }
                else {
                    this.$emit("change", this.currentMin, this.currentMax);
                }
            }
        },
        changeCurrentMax(v, needEmit = true) {
            let currentMax = Math.round(v);
            let currentMin = this.currentMin;
            if (currentMax > this.max) {
                currentMax = this.max;
            }
            else if (currentMax <= this.min + this.minRange) {
                currentMax = this.min + this.minRange;
                currentMin = this.min;
            }
            else if (currentMax <= this.currentMin + this.minRange) {
                currentMin = currentMax - this.minRange;
            }
            else if (isNaN(currentMax)) {
                currentMax = this.currentMax;
            }
            this.change(currentMin, currentMax, needEmit);
        },
        changeCurrentMin(v, needEmit = true) {
            let currentMin = Math.round(v);
            let currentMax = this.currentMax;
            if (currentMin < this.min) {
                currentMin = this.min;
            }
            else if (currentMin >= this.max - this.minRange) {
                currentMin = this.max - this.minRange;
                currentMax = this.max;
            }
            else if (currentMin >= currentMax - this.minRange) {
                currentMax = currentMin + this.minRange;
            }
            else if (isNaN(currentMin)) {
                currentMin = this.currentMin;
            }
            this.change(currentMin, currentMax, needEmit);
        },
        changeMax(e) {
            if (typeof e === "number") {
                this.changeCurrentMax(e, false);
            }
            else {
                this.changeCurrentMax(Number(e.target.value));
            }
        },
        changeMin(e) {
            if (typeof e === "number") {
                this.changeCurrentMin(e, false);
            }
            else {
                this.changeCurrentMin(Number(e.target.value));
            }
        },
        mouseDown(e, isLeft) {
            const ev = e.changedTouches ? e.changedTouches[0] : e;
            this.isLeft = isLeft;
            this.isDragging = true;
            this.cursorLeft = ev.pageX;
            this.startPercent = isLeft ? this.start : this.end;
            if (isLeft) {
                this.isChanginMin = true;
            }
            else {
                this.isChanginMax = true;
            }
            document.addEventListener("mousemove", this.mouseMove);
            document.addEventListener("mouseup", this.mouseUp);
            document.addEventListener("touchmove", this.mouseMove);
            document.addEventListener("touchend", this.mouseUp);
            document.body.style.userSelect = "none";
            this.$emit("dragging", this.isDragging);
        },
        mouseMove(e) {
            const ev = e.changedTouches ? e.changedTouches[0] : e;
            const pixelsWeight = this.$refs.slider.clientWidth / 100;
            const diff = ev.pageX - this.cursorLeft;
            const percent = this.isLeft ? diff / pixelsWeight : -(diff / pixelsWeight);
            this.isLeft
                ? this.changeCurrentMin(this.min + (this.startPercent + percent) * this.weight)
                : this.changeCurrentMax(this.max - (this.startPercent + percent) * this.weight);
        },
        mouseUp() {
            this.isDragging = false;
            this.cursorLeft = undefined;
            this.startPercent = undefined;
            this.isChanginMin = false;
            this.isChanginMax = false;
            if (this.currentMin === this.min && this.currentMax === this.max) {
                this.$emit("change", undefined, undefined);
            }
            else {
                this.$emit("change", this.currentMin, this.currentMax);
            }
            document.removeEventListener("mousemove", this.mouseMove);
            document.removeEventListener("touchmove", this.mouseMove);
            document.removeEventListener("mouseup", this.mouseUp);
            document.removeEventListener("touchend", this.mouseUp);
            document.body.style.userSelect = "";
            this.$emit("dragging", this.isDragging);
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Range.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Rangevue_type_script_lang_ts_ = (Rangevue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Range.vue?vue&type=style&index=0&id=2bf1ae77&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Range.vue?vue&type=style&index=0&id=2bf1ae77&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Range.vue



;


/* normalize component */

var Range_component = normalizeComponent(
  components_Rangevue_type_script_lang_ts_,
  Rangevue_type_template_id_2bf1ae77_scoped_true_render,
  Rangevue_type_template_id_2bf1ae77_scoped_true_staticRenderFns,
  false,
  null,
  "2bf1ae77",
  null
  
)

/* harmony default export */ var Range = (Range_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Slider.vue?vue&type=template&id=130c3e32&scoped=true&
var Slidervue_type_template_id_130c3e32_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{class:['ui-slider', { mobile: _vm.isMobile }],style:({ '--maxWidth': _vm.maxWidth })},[(!_vm.isMobile && _vm.isShowArrows && !_vm.isAutoplay)?_c('cArrowSVG',{attrs:{"size":_vm.arrowSize,"circle-color":_vm.arrowCircleColor,"color":_vm.arrowColor,"hover-color":_vm.arrowHoverColor,"is-left":"","mode":"circle"},on:{"click":_vm.prev}}):_vm._e(),_c('div',{ref:"carousel",staticClass:"carousel",on:{"mouseover":_vm.mouseOver,"mouseout":_vm.mouseOut}},[_c('div',{ref:"items",staticClass:"list",style:({ 'margin-left': _vm.isShowArrows && !_vm.isMobile && _vm.itemsCount > 2 ? `-${_vm.itemWidth}px` : 0 })},[_vm._t("default")],2)]),(!_vm.isMobile && _vm.isShowArrows && !_vm.isAutoplay)?_c('cArrowSVG',{attrs:{"size":_vm.arrowSize,"circle-color":_vm.arrowCircleColor,"color":_vm.arrowColor,"hover-color":_vm.arrowHoverColor,"mode":"circle"},on:{"click":_vm.next}}):_vm._e()],1)
}
var Slidervue_type_template_id_130c3e32_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Slider.vue?vue&type=script&lang=ts&


/* harmony default export */ var Slidervue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cSlider",
    components: { cArrowSVG: ArrowSVG },
    props: {
        isMobile: {
            type: Boolean,
            default: false,
        },
        itemMargin: {
            type: Number,
            default: 0,
        },
        isLoaded: {
            type: Boolean,
            default: false,
        },
        itemsCount: {
            type: Number,
            default: 0,
        },
        arrowSize: {
            type: String,
            default: "m",
            validator: (v) => ["s", "m", "l"].includes(v),
        },
        needReset: {
            type: Boolean,
            default: false,
        },
        isAutoplay: {
            type: Boolean,
            default: false,
        },
        autoplayDuration: {
            type: Number,
            default: 1500,
        },
        maxWidth: {
            type: String,
            default: "unset",
        },
        arrowColor: {
            type: String,
            default: "#818ca9",
        },
        arrowHoverColor: {
            type: String,
            default: "#818ca9",
        },
        arrowCircleColor: {
            type: String,
            default: "#ffffff",
        },
    },
    data() {
        return {
            offset: 0,
            isShowArrows: true,
            itemWidth: 0,
            order: 0,
            round: 0,
            isMovementWas: false,
            intervalID: null,
        };
    },
    watch: {
        isMobile(n) {
            this.movement();
            if (n) {
                const items = this.$refs.items;
                if (items.style.transform.length > 0) {
                    items.style.transform = "";
                    this.order = 0;
                    this.round = 0;
                    this.offset = 0;
                    for (let i = 0; i < this.itemsCount; i++) {
                        ;
                        items.children[i].style.transform = "";
                    }
                }
            }
        },
        isLoaded(n) {
            if (n) {
                this.$nextTick(() => {
                    this.resize();
                });
            }
        },
        itemsCount() {
            this.$nextTick(() => {
                if (this.needReset) {
                    this.reset();
                }
                this.resize();
            });
        },
        isShowArrows() {
            this.movement();
        },
    },
    mounted() {
        window.addEventListener("resize", this.resize);
        this.resize();
        if (this.isLoaded) {
            this.movement();
        }
        if (this.isAutoplay) {
            this.intervalID = window.setInterval(this.next, this.autoplayDuration);
        }
        window.addEventListener("blur", this.windowBlur);
        window.addEventListener("focus", this.windowFocus);
        document.addEventListener("visibilitychange", this.visibilityChange);
    },
    beforeDestroy() {
        if (this.intervalID !== null) {
            clearInterval(this.intervalID);
        }
        window.removeEventListener("resize", this.resize);
        window.removeEventListener("blur", this.windowBlur);
        window.removeEventListener("focus", this.windowFocus);
        document.removeEventListener("visibilitychange", this.visibilityChange);
    },
    methods: {
        windowBlur() {
            if (typeof window !== "undefined") {
                this.mouseOver();
            }
        },
        windowFocus() {
            if (typeof window !== "undefined") {
                this.mouseOut();
            }
        },
        visibilityChange() {
            if (document.hidden) {
                this.mouseOver();
            }
            else {
                this.mouseOut();
            }
        },
        mouseOver() {
            if (this.isAutoplay && this.intervalID !== null) {
                clearInterval(this.intervalID);
                this.intervalID = null;
            }
        },
        mouseOut() {
            if (this.isAutoplay && this.intervalID === null) {
                this.intervalID = window.setInterval(this.next, this.autoplayDuration);
            }
        },
        reset() {
            const items = this.$refs.items;
            items.style.transform = "translateX(0px)";
            for (const i in items.children) {
                if (!isNaN(Number(i))) {
                    ;
                    items.children[i].style.transform = "translateX(0px)";
                }
            }
            this.order = 0;
            this.round = 0;
            this.offset = 0;
            this.movement();
        },
        movement() {
            if (this.itemsCount > 2) {
                if (this.isShowArrows && !this.isMovementWas && !this.isMobile) {
                    const items = this.$refs.items;
                    const firstChild = items.firstChild;
                    const lastChild = items.lastChild;
                    if (lastChild !== null && firstChild !== null) {
                        items.removeChild(lastChild);
                        items.insertBefore(lastChild, firstChild);
                        this.isMovementWas = true;
                    }
                }
                if ((!this.isShowArrows || this.isMobile) && this.isMovementWas) {
                    const items = this.$refs.items;
                    const item = items.firstChild;
                    if (item !== null) {
                        items.removeChild(item);
                        items.appendChild(item);
                        this.isMovementWas = false;
                    }
                }
            }
        },
        resize() {
            const items = this.$refs.items;
            const carousel = this.$refs.carousel;
            if (this.isMobile || items === undefined || items.children.length === 0) {
                return;
            }
            this.itemWidth = items.children[0].offsetWidth + this.itemMargin;
            const itemsSlideCount = Math.round(carousel.clientWidth / this.itemWidth);
            this.isShowArrows = this.itemsCount > itemsSlideCount;
        },
        next() {
            const items = this.$refs.items;
            this.order++;
            if (this.order > 0 && [0, -1].includes(this.round)) {
                this.round = 1;
            }
            if ((this.itemsCount * this.round) / this.order === 1 || (this.order > this.itemsCount * (this.round + 1) && this.round < -1)) {
                this.round++;
            }
            const item = items.children[this.offset];
            const round = this.round < 0 ? this.round * -1 : this.round === 0 ? 1 : this.offset === this.itemsCount - 1 ? this.round - 1 : this.round;
            const itemTranslateX = this.order <= 0
                ? `${this.itemWidth * (this.itemsCount * round) * -1 +
                    this.itemWidth * (this.itemsCount * (this.round < -1 && this.order * -1 >= this.itemsCount ? 1 : round))}`
                : `${this.itemWidth * (this.itemsCount * round)}`;
            const itemsTranslateX = this.order < 0 ? `${-this.itemWidth * this.order}` : `-${this.itemWidth * this.order}`;
            item.style.transform = `translateX(${itemTranslateX}px)`;
            items.style.transform = `translateX(${itemsTranslateX}px)`;
            this.offset = this.offset + 1 === this.itemsCount ? 0 : this.offset + 1;
        },
        prev() {
            const items = this.$refs.items;
            this.order--;
            if (this.order < 0 && [0, 1].includes(this.round)) {
                this.round = -1;
            }
            if ((this.itemsCount * this.round) / this.order === -1 ||
                (this.order < 0 && (this.itemsCount * this.round * -1) / this.order === -1) ||
                (this.order < this.itemsCount * (this.round - 1) && this.round > 1)) {
                this.round--;
            }
            const offset = this.offset - 1 < 0 ? this.itemsCount - 1 : this.offset - 1;
            const item = items.children[offset];
            const round = this.round < 0 ? (offset === 0 ? this.round + 1 : this.round) * -1 : this.round === 0 ? 1 : this.round;
            const itemTranslateX = this.order < 0
                ? `-${this.itemWidth * (this.itemsCount * round)}`
                : `${this.itemWidth * (this.itemsCount * round) +
                    this.itemWidth *
                        (this.itemsCount * (this.round > 1 && this.order >= this.itemsCount ? round - (round - 1) : round)) *
                        -1}`;
            const itemsTranslateX = this.order < 0 ? `${-this.itemWidth * this.order}` : `-${this.itemWidth * this.order}`;
            item.style.transform = `translateX(${itemTranslateX}px)`;
            items.style.transform = `translateX(${itemsTranslateX}px)`;
            this.offset = offset;
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Slider.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Slidervue_type_script_lang_ts_ = (Slidervue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Slider.vue?vue&type=style&index=0&id=130c3e32&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Slider.vue?vue&type=style&index=0&id=130c3e32&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Slider.vue



;


/* normalize component */

var Slider_component = normalizeComponent(
  components_Slidervue_type_script_lang_ts_,
  Slidervue_type_template_id_130c3e32_scoped_true_render,
  Slidervue_type_template_id_130c3e32_scoped_true_staticRenderFns,
  false,
  null,
  "130c3e32",
  null
  
)

/* harmony default export */ var Slider = (Slider_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Spinner.vue?vue&type=template&id=40e6fd02&scoped=true&
var Spinnervue_type_template_id_40e6fd02_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{class:['ui-spinner', _vm.position, { mobile: _vm.isMobile }],style:({ '--color': _vm.color, position: _vm.position, backgroundColor: _vm.hideOverlay ? 'transparent' : '#ffffffc5', zIndex: _vm.position === 'fixed' ? 99992 : 998, '--left': _vm.left, '--top': _vm.top })},[_c('span',{staticClass:"icon spinner",style:({ height: _vm.spinnerSize, width: _vm.spinnerSize })})])
}
var Spinnervue_type_template_id_40e6fd02_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Spinner.vue?vue&type=script&lang=ts&

/* harmony default export */ var Spinnervue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cSpinner",
    props: {
        size: {
            type: String,
            default: "s",
            validator: (v) => ["s", "m", "l"].includes(v),
        },
        isMobile: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: "fixed",
            validator: (v) => ["fixed", "absolute", "relative"].includes(v),
        },
        hideOverlay: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: "#3f51b5",
        },
        customSize: {
            type: String,
        },
        left: {
            type: String,
            default: "0",
        },
        top: {
            type: String,
            default: "0",
        },
    },
    computed: {
        spinnerSize() {
            const s = { s: 38, m: 50, l: 65 };
            return this.customSize !== undefined ? this.customSize : `${s[this.size]}px` || `${s.m}px`;
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Spinnervue_type_script_lang_ts_ = (Spinnervue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Spinner.vue?vue&type=style&index=0&id=40e6fd02&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Spinner.vue?vue&type=style&index=0&id=40e6fd02&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Spinner.vue



;


/* normalize component */

var Spinner_component = normalizeComponent(
  components_Spinnervue_type_script_lang_ts_,
  Spinnervue_type_template_id_40e6fd02_scoped_true_render,
  Spinnervue_type_template_id_40e6fd02_scoped_true_staticRenderFns,
  false,
  null,
  "40e6fd02",
  null
  
)

/* harmony default export */ var Spinner = (Spinner_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Tab.vue?vue&type=script&lang=ts&

/* harmony default export */ var Tabvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cTab",
}));

;// CONCATENATED MODULE: ./src/components/Tab.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Tabvue_type_script_lang_ts_ = (Tabvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/components/Tab.vue
var Tab_render, Tab_staticRenderFns
;



/* normalize component */
;
var Tab_component = normalizeComponent(
  components_Tabvue_type_script_lang_ts_,
  Tab_render,
  Tab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tab = (Tab_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Table.vue?vue&type=template&id=8c36b820&scoped=true&
var Tablevue_type_template_id_8c36b820_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('table',{staticClass:"ui-table",style:({ '--borderRadius': _vm.borderRadius }),attrs:{"align":_vm.align,"width":_vm.isFullWidth ? '100%' : 'fit-content'}},[(_vm.hasCaption)?_c('caption',[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('tr',{staticClass:"header"},_vm._l((_vm.columns),function(c,i){return _c('td',{key:`column-${i}`,class:{ active: _vm.needSorted && _vm.sortKey === c.key, 'not-sorted': !_vm.needSorted },style:({ '--align': c.align || 'left' }),attrs:{"width":c.width},on:{"click":function($event){return _vm.sortBy(c.key)}}},[_vm._v(" "+_vm._s(c.title)+" "),(_vm.needSorted)?_c('span',{class:['arrow', _vm.sortOrders[c.key] > 0 ? 'asc' : 'desc']}):_vm._e()])}),0),_vm._l((_vm.preparedItems),function(entry,index){return _c('tr',{key:`entry-${index}`},_vm._l((_vm.columns),function(c,i){return _c('td',{key:i,style:({ '--align': c.align || 'left' }),attrs:{"width":c.width}},[_vm._v(_vm._s(entry[c.key]))])}),0)})],2)
}
var Tablevue_type_template_id_8c36b820_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./src/utils/arrays.ts
/**
 * clone клонирует массив.
 *
 * @param a T[] исходный массив
 */
function clone(a) {
    return JSON.parse(JSON.stringify(a));
}
/* harmony default export */ var arrays = ({
    clone,
});

;// CONCATENATED MODULE: ./src/utils/index.ts



;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Table.vue?vue&type=script&lang=ts&


/* harmony default export */ var Tablevue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cTable",
    props: {
        isFullWidth: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "",
        },
        columns: {
            type: Array,
            default: () => [],
        },
        items: {
            type: Array,
            default: () => [],
        },
        needSorted: {
            type: Boolean,
            default: false,
        },
        align: {
            type: String,
            default: "left",
        },
        borderRadius: {
            type: String,
            default: "0px",
        },
    },
    data() {
        const sortOrders = {};
        this.columns.forEach((c) => {
            sortOrders[c.key] = 1;
        });
        return {
            sortKey: this.columns[0].key,
            sortOrders,
        };
    },
    computed: {
        hasCaption() {
            var _a;
            return ((_a = this.title) !== null && _a !== void 0 ? _a : "").length > 0;
        },
        preparedItems() {
            var _a;
            const order = (_a = this.sortOrders[this.sortKey]) !== null && _a !== void 0 ? _a : 1;
            return this.needSorted
                ? arrays.clone(this.items).sort((a, b) => {
                    a = parseInt(a[this.sortKey]) !== NaN ? parseInt(a[this.sortKey]) : a[this.sortKey];
                    b = parseInt(b[this.sortKey]) !== NaN ? parseInt(b[this.sortKey]) : b[this.sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                })
                : this.items;
        },
    },
    methods: {
        sortBy(key) {
            if (this.needSorted) {
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
            }
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Table.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Tablevue_type_script_lang_ts_ = (Tablevue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Table.vue?vue&type=style&index=0&id=8c36b820&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Table.vue?vue&type=style&index=0&id=8c36b820&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Table.vue



;


/* normalize component */

var Table_component = normalizeComponent(
  components_Tablevue_type_script_lang_ts_,
  Tablevue_type_template_id_8c36b820_scoped_true_render,
  Tablevue_type_template_id_8c36b820_scoped_true_staticRenderFns,
  false,
  null,
  "8c36b820",
  null
  
)

/* harmony default export */ var Table = (Table_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Tabs.vue?vue&type=script&lang=ts&

/* harmony default export */ var Tabsvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cTabs",
    props: {
        tabIndex: {
            type: Number,
            default: undefined,
        },
        isBorderFitContent: {
            type: Boolean,
            default: false,
        },
        isNoBorder: {
            type: Boolean,
            default: false,
        },
        isNotStretchTabs: {
            type: Boolean,
            default: false,
        },
        activeColor: {
            type: String,
            default: "#3f51b5",
            validator: (v) => ![""].includes(v),
        },
        hoverColor: {
            type: String,
            default: "#3f51b5",
            validator: (v) => ![""].includes(v),
        },
        borderActiveColor: {
            type: String,
            default: "#3f51b5",
            validator: (v) => ![""].includes(v),
        },
        borderColor: {
            type: String,
            default: "#d6d6e1",
            validator: (v) => ![""].includes(v),
        },
    },
    data() {
        return {
            internalTabIndex: this.tabIndex,
        };
    },
    watch: {
        internalTabIndex(n) {
            this.$emit("tab-index-change", n);
        },
        tabIndex(n) {
            if (this.internalTabIndex === n) {
                return;
            }
            this.internalTabIndex = n;
        },
    },
    mounted() {
        window.addEventListener("resize", this.resize);
        setTimeout(() => {
            this.resize();
        }, 300);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resize);
    },
    methods: {
        resize() {
            setTimeout(() => {
                this.updateSliderPos();
            }, 200);
        },
        changeTabIndex(i) {
            this.internalTabIndex = i;
        },
        updateSliderPos() {
            if (typeof window === "undefined") {
                return;
            }
            const slider = this.$refs.slider;
            const border = this.$refs.border;
            if (this.internalTabIndex === undefined) {
                slider.style.display = "none";
                return;
            }
            const tabs = this.$refs.tabs;
            const children = tabs.children[this.internalTabIndex];
            if (!children) {
                slider.style.display = "none";
                return;
            }
            if (!this.isNoBorder) {
                if (this.isBorderFitContent) {
                    let fitWidth = 0;
                    for (const i of tabs.children) {
                        fitWidth += i.offsetWidth;
                    }
                    border.style.width = `${fitWidth}px`;
                }
                else {
                    border.style.width = `100%`;
                }
                border.style.display = "block";
                border.style.top = `${children.offsetTop + children.offsetHeight - 1 - 10}px`;
            }
            slider.style.display = "block";
            slider.style.backgroundColor = this.borderActiveColor;
            slider.style.left = `${children.offsetLeft + (this.internalTabIndex !== 0 ? 15 : 0)}px`;
            slider.style.width = `${children.offsetWidth -
                ([0, tabs.children.length - 1].includes(this.internalTabIndex)
                    ? 15
                    : ![0, tabs.children.length - 1].includes(this.internalTabIndex)
                        ? 30
                        : 0)}px`;
            slider.style.top = `${children.offsetTop + children.offsetHeight - 1 - 10}px`;
        },
    },
    render(h) {
        var _a, _b, _c, _d;
        const slots = (this.$slots.default || []).filter((v) => v.componentOptions !== undefined && v.componentOptions.tag === "cTab");
        if (slots.length < 1) {
            return h(undefined);
        }
        const tabNames = slots.map((v, i) => {
            if (!v.data || !v.data.scopedSlots || !v.data.scopedSlots.caption) {
                return undefined;
            }
            const isActive = i === this.internalTabIndex;
            const caption = h("div", v.data.scopedSlots.caption(null));
            const classes = {
                ["active"]: isActive,
            };
            return h("li", {
                class: classes,
                style: { "--activeColor": this.activeColor, "--hoverColor": this.hoverColor },
                on: { click: () => this.changeTabIndex(i) },
            }, [caption].filter((i) => i !== undefined));
        });
        const main = [];
        if (this.internalTabIndex !== undefined && this.internalTabIndex < tabNames.length) {
            const currentTab = slots[this.internalTabIndex];
            const body = currentTab.componentOptions ? (_a = currentTab.componentOptions.children) !== null && _a !== void 0 ? _a : [] : [];
            const staticClass = ((_b = currentTab.data) !== null && _b !== void 0 ? _b : {}).staticClass;
            const dynamicClasses = (_d = ((_c = currentTab.data) !== null && _c !== void 0 ? _c : {}).class) !== null && _d !== void 0 ? _d : [];
            const bodyClasses = [staticClass, ...dynamicClasses].filter((i) => i !== undefined);
            main.push(h("div", { class: bodyClasses }, body));
        }
        this.$nextTick(() => this.updateSliderPos());
        const renderItems = [h("ul", { class: "tabs", ref: "tabs" }, tabNames), h("div", { class: "slider", ref: "slider" })];
        if (!this.isNoBorder) {
            renderItems.push(h("div", { style: { "--borderColor": this.borderColor }, class: "border", ref: "border" }));
        }
        return h("div", { class: ["ui-tabs", { "not-stretch-tabs": this.isNotStretchTabs || this.isBorderFitContent }] }, [
            ...renderItems,
            ...main,
        ]);
    },
}));

;// CONCATENATED MODULE: ./src/components/Tabs.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Tabsvue_type_script_lang_ts_ = (Tabsvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Tabs.vue?vue&type=style&index=0&id=ad33525e&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Tabs.vue?vue&type=style&index=0&id=ad33525e&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Tabs.vue
var Tabs_render, Tabs_staticRenderFns
;

;


/* normalize component */

var Tabs_component = normalizeComponent(
  components_Tabsvue_type_script_lang_ts_,
  Tabs_render,
  Tabs_staticRenderFns,
  false,
  null,
  "ad33525e",
  null
  
)

/* harmony default export */ var Tabs = (Tabs_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Toggle.vue?vue&type=template&id=885e16fa&scoped=true&
var Togglevue_type_template_id_885e16fa_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',{class:['ui-toggle', { disabled: _vm.disabled }]},[_c('div',{class:['toggle-button', { enabled: _vm.isEnabled }],style:({ '--color': _vm.color, '--height': _vm.height }),on:{"click":_vm.toggle}},[_vm._m(0)]),_c('div',{staticClass:"toggle-label"},[_vm._t("default")],2)])
}
var Togglevue_type_template_id_885e16fa_scoped_true_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c,_setup=_vm._self._setupProxy;return _c('div',[_c('span',{staticClass:"icon checkmark3"})])
}]


;// CONCATENATED MODULE: ./src/components/Toggle.vue?vue&type=template&id=885e16fa&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Toggle.vue?vue&type=script&lang=ts&

/* harmony default export */ var Togglevue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default().extend({
    name: "cToggle",
    model: {
        prop: "isEnabled",
        event: "toggle",
    },
    props: {
        isEnabled: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "l",
            validator: (v) => ["m", "l"].includes(v),
        },
        color: {
            type: String,
            default: "#3f51b5",
        },
        customSize: {
            type: String,
        },
    },
    computed: {
        height() {
            return this.customSize !== undefined ? this.customSize : this.size === "m" ? "15px" : "20px";
        },
    },
    methods: {
        toggle() {
            if (!this.disabled) {
                this.$emit("toggle", !this.isEnabled);
            }
        },
    },
}));

;// CONCATENATED MODULE: ./src/components/Toggle.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Togglevue_type_script_lang_ts_ = (Togglevue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Toggle.vue?vue&type=style&index=0&id=885e16fa&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Toggle.vue?vue&type=style&index=0&id=885e16fa&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./src/components/Toggle.vue



;


/* normalize component */

var Toggle_component = normalizeComponent(
  components_Togglevue_type_script_lang_ts_,
  Togglevue_type_template_id_885e16fa_scoped_true_render,
  Togglevue_type_template_id_885e16fa_scoped_true_staticRenderFns,
  false,
  null,
  "885e16fa",
  null
  
)

/* harmony default export */ var Toggle = (Toggle_component.exports);
;// CONCATENATED MODULE: ./src/lib-main.ts



















;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=ui-kit.umd.js.map