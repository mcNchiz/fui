"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JQueryDOM = void 0;
const base_renderer_1 = require("./base-renderer");
const design_1 = require("../design");
const bounds_1 = require("../utils/bounds");
const motion_1 = require("motion");
class JQueryDOM extends base_renderer_1.Renderer {
    createSpinner(props) {
        const component = this.defaultWidget().css({
            "display": "inline-block",
            "border-width": props.thickness + "px",
            "border-radius": props.size * 1.4 + "px",
            "border-top": `solid ${props.thickness}px ${props.color}`,
            "width": props.size + "px",
            "height": props.size + "px",
        }).addClass("fui-animate-spin");
        return component;
    }
    createDropdown({ triggerElement, contentElement }) {
        var widget = this.defaultWidget();
        var hidden = true;
        var spacing = 8;
        triggerElement.component.css({ "cursor": "pointer" }).on("click", (e) => {
            (0, motion_1.animate)(contentElement.component.get(0), { opacity: [0, 1] });
            const buttonBounds = triggerElement.component.get(0).getBoundingClientRect();
            const contentBounds = contentElement.component.get(0).getBoundingClientRect();
            var toggle = (invisible) => {
                invisible ? contentElement.component.show() : contentElement.component.hide();
                hidden = !invisible;
            };
            toggle(hidden);
            const winHeight = $(window).height();
            const winWidth = $(window).width();
            let availableRightWidth = winWidth - buttonBounds.right - spacing * 2;
            let availableLeftWidth = buttonBounds.left - spacing * 2;
            let availableBottomHeight = winHeight - buttonBounds.bottom - spacing * 2;
            let availableTopHeight = buttonBounds.top - spacing * 2;
            var finalHeight = availableBottomHeight > availableTopHeight ? availableBottomHeight : availableTopHeight;
            var finalWidth = availableRightWidth > availableLeftWidth ? availableRightWidth : availableLeftWidth;
            contentElement.component.css({ "max-height": finalHeight + "px", "max-width": finalWidth + "px" });
            const position = new design_1.Coordinates({
                top: availableBottomHeight > availableTopHeight ? buttonBounds.bottom + spacing : buttonBounds.top - finalHeight - spacing,
                left: buttonBounds.left - (winWidth < buttonBounds.left + contentBounds.width + spacing ? contentBounds.width - buttonBounds.width : 0)
            });
            contentElement.component.css(design_1.Coordinates.toCSS(position));
        });
        contentElement.component.addClass("drop-menu").hide();
        widget.append(triggerElement.component).append(contentElement.component);
        return widget;
    }
    createApiForm(props, onEnter) {
        let widget = $("<form>").addClass(props.name).attr("action", props.action).attr("method", props.method).on("keydown", function (event) {
            if (event.key == "Enter") {
                event.preventDefault();
                onEnter(event);
            }
        })
            .css({ "width": "100%" })
            .on("submit", function (event) {
            event.preventDefault();
        });
        return widget;
    }
    triggerFocus(element) {
        element.find("input:first").trigger("focus");
    }
    hide(element) {
        element.hide();
    }
    show(element) {
        element.show();
    }
    createListContainer({ alignItems = "start", gap = 0, height = "auto", justifyContent = "start", width = "100%" }, direction) {
        return this.defaultWidget().css({
            "display": "flex",
            "align-items": alignItems,
            "justify-content": justifyContent,
            "flex-direction": direction,
            "width": width,
            "height": height,
            "gap": gap + "px",
        });
    }
    createPositionedContainer(props) {
        let widget = this.defaultWidget();
        widget.css({ "position": props.position, "z-index": 100 }).css(design_1.Coordinates.toCSS(props.coordinates));
        return widget;
    }
    createButton({ color, decoration, onClick, size, type = "button", weight }) {
        let $button = $("<button>").attr("type", type)
            .css(design_1.BoxDecoration.toCSS(decoration))
            .css(design_1.TextStyle.toCSS(new design_1.TextStyle({ color, size, weight })))
            .css({ "overflow": "clip", "display": "block" }).on("click", (e) => {
            onClick(e);
        });
        return $button;
    }
    createContainer(props) {
        var _a, _b, _c, _d, _e;
        let widget = this.defaultWidget().css(props.decoration ? design_1.BoxDecoration.toCSS(props.decoration) : design_1.BoxDecoration.emptyCSS());
        if (props.tag) {
            widget.attr("id", props.tag);
        }
        if (props.decoration && props.decoration.customScrollBar) {
            widget.addClass("custom-scrollbar");
        }
        if (props.className) {
            widget.addClass(props.className);
        }
        if (props.alignment != null) {
            widget.css({ "display": "flex", "width": "auto", "align-items": "center", "justify-content": props.alignment });
        }
        widget.css({
            width: (_c = (_b = (_a = props.decoration) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : props.width) !== null && _c !== void 0 ? _c : "100%",
            height: (_e = (_d = props.decoration) === null || _d === void 0 ? void 0 : _d.height) !== null && _e !== void 0 ? _e : props.height
        });
        if (props.bounds) {
            widget.css(bounds_1.Bounds.toCSS(props.bounds));
        }
        return widget;
    }
    createLoadingRect(decoration) {
        let widget = this.defaultWidget().css(design_1.BoxDecoration.toCSS(decoration)).addClass("animate-pulse");
        return widget;
    }
    createLine({ padding = design_1.EdgeInsets.zero, color, width }) {
        let container = this.defaultWidget().css({ "padding": design_1.EdgeInsets.toCSS(padding), "width": "100%" });
        let lineElement = this.defaultWidget().css({
            "width": "100%",
            "border-top": `solid ${width}px ${color}`,
        });
        container.append(lineElement);
        return container;
    }
    createIcon(icon, spin) {
        return $("<i>").addClass(`bi bi-${icon.name}`).css({
            "color": icon.color,
            "font-size": icon.size,
            "line-height": "130%",
        }).addClass(spin ? "icon-spinner" : "");
    }
    constructor() {
        super();
    }
    defaultWidget() {
        return $("<div>");
    }
    createImage(url, width, height) {
        let widget = $("<img>").attr("src", url).css({ "width": width, "height": height });
        return widget;
    }
    append(thisWidget, toWidget) {
        thisWidget.component;
        return toWidget.component.append(thisWidget.component);
    }
    createText(text, style) {
        var component = this.defaultWidget().text(text).css({
            "color": style.color,
            "font-size": style.size + "px",
            "text-align": style.alignment,
            "line-height": style.lineHeight,
            "letter-spacing": style.letterSpacing,
            "font-weight": style.weight,
        });
        if (style.singleLine) {
            component.css({
                "white-space": "nowrap",
                "overflow": "hidden",
                "text-overflow": "ellipsis",
            });
        }
        return component;
    }
    createInput({ type = "text", value = "", name = "default-inputname", onInput, style = design_1.TextStyle.default(), decoration = new design_1.BoxDecoration({ border: 1, radius: 8, padding: design_1.EdgeInsets.symmetric(8, 12) }), }) {
        return $("<input>")
            .attr("type", type)
            .val(value)
            .css(design_1.BoxDecoration.toCSS(decoration))
            .css(design_1.TextStyle.toCSS(style))
            .on("input", (e) => {
            let value = $(e.currentTarget).val();
            onInput(value);
        })
            .on("focus", function () {
            $(this).css({
                "box-shadow": `0 0 0 1.2px ${design_1.Colors.blue}`,
                "border": `solid ${decoration.border}px ${design_1.Colors.blue}`,
            });
        })
            .on("blur", function () {
            var _a;
            $(this).css({
                "box-shadow": (_a = decoration.shadow) !== null && _a !== void 0 ? _a : 0,
                "border": `solid ${decoration.border}px ${decoration.borderColor}`,
            });
        });
    }
    createDropdownSelect({ initialValue, onChange, options }) {
        var hidden = true;
        var activeIndex = -1;
        let $dropdownMenu = this.defaultWidget().addClass('drop-menu custom-scrollbar');
        let $dropdownList = this.defaultWidget().addClass('drop-list');
        let $icon = $("<i>").addClass("bi bi-caret-down-fill").css({ "color": design_1.Colors.blue });
        let toggle = (h) => {
            h ? $dropdownMenu.show() : $dropdownMenu.hide();
            (0, motion_1.animate)($dropdownMenu.get(0), { opacity: [0, 1] });
            hidden = !h;
            $icon.removeClass().addClass(hidden ? 'bi bi-caret-down-fill' : 'bi bi-caret-up-fill');
        };
        var renderMenu = () => {
            $dropdownList.empty();
            for (let i = 0; i < options.length; i++) {
                const option = options[i];
                var $option = $("<div>").text(option.label)
                    .addClass('drop-option')
                    .on("click", (e) => {
                    onChange(option, i);
                    activeIndex = i;
                    $button.text(option.label).append($icon);
                    toggle(false);
                });
                if (activeIndex == i) {
                    let $iconCheck = $("<i>").addClass("bi bi-check").css({ "color": design_1.Colors.black, "font-size": "20px" });
                    $option.append($iconCheck);
                }
                $dropdownList.append($option);
            }
            return $dropdownList;
        };
        let $button = $("<button>").text(initialValue ? initialValue.label : "--Select")
            .addClass('drop-button')
            .on("click", (buttonTarget) => {
            $dropdownMenu.append(renderMenu());
            toggle(hidden);
            const spacing = 8;
            const winHeight = $(window).height();
            const winWidth = $(window).width();
            let bounds = $button.get(0).getBoundingClientRect();
            let availableBottomHeight = winHeight - bounds.bottom - spacing * 2;
            let availableTopHeight = bounds.top - spacing * 2;
            var finalHeight = availableBottomHeight > availableTopHeight ? availableBottomHeight : availableTopHeight;
            $dropdownMenu.css({ "max-height": finalHeight + "px" });
            let menuBounds = $dropdownMenu.get(0).getBoundingClientRect();
            const position = new design_1.Coordinates({
                top: availableBottomHeight > availableTopHeight ? bounds.bottom + spacing : bounds.top - finalHeight - spacing,
                left: bounds.left - (winWidth < bounds.left + menuBounds.width + spacing ? menuBounds.width - bounds.width : 0)
            });
            $dropdownMenu.css(design_1.Coordinates.toCSS(position));
        });
        $button.append($icon);
        let widget = this.defaultWidget().append($button).append($dropdownMenu);
        return widget;
    }
}
exports.JQueryDOM = JQueryDOM;
