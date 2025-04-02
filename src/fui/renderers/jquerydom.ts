import { IWidget } from "../widget";
import { Renderer } from "./base-renderer";
import { JQueryApp } from "../apps/jqueryapp";
import { InputTextProps } from "../widgets/solewidgets/inputtext";
import { BootstrapIcon, BoxDecoration, Colors, Coordinates, EdgeInsets, IBoxDecoration, TextStyle } from "../design";
import { ContainerProps, CreateDropdownProps, CreateDropdownSelectProps, IButton, IChildren, Line } from "../widgets";
import { Bounds } from "../utils/bounds";
import { PositionedProps } from "../widgets/containerwidgets/positioned";
import { IForm } from "../services";
import { animate } from "motion";
import { SpinnerProps } from "../widgets/solewidgets/spinner";

export class JQueryDOM extends Renderer{
  createSpinner(props: SpinnerProps): JQuery<HTMLElement> {
    const component = this.defaultWidget().css({
      "display": "inline-block",
      "border-width": props.thickness+"px",
      "border-radius": props.size*1.4+"px",
      "border-top": `solid ${props.thickness}px ${props.color}`,
      "width": props.size+"px",
      "height": props.size+"px",
    }).addClass("fui-animate-spin")
    return component
  }
  createDropdown({triggerElement, contentElement}: CreateDropdownProps): JQuery<HTMLElement> {
    var widget = this.defaultWidget()
      var hidden = true
      var spacing = 8

      triggerElement.component!.css({"cursor": "pointer"}).on("click", (e)=>{
        animate(contentElement.component!.get(0)!, {opacity: [0,1]})
        const buttonBounds = triggerElement.component!.get(0)!.getBoundingClientRect()
        const contentBounds = contentElement.component!.get(0)!.getBoundingClientRect()
  
        var toggle = (invisible: boolean)=>{
          invisible?contentElement.component!.show():contentElement.component!.hide()
          hidden = !invisible;
        }
        toggle(hidden)
  
        const winHeight = $(window).height()
        const winWidth = $(window).width();
        let availableRightWidth = winWidth! - buttonBounds.right - spacing*2;
        let availableLeftWidth = buttonBounds.left - spacing * 2;
        let availableBottomHeight = winHeight! - buttonBounds.bottom - spacing*2;
        let availableTopHeight = buttonBounds.top - spacing * 2;
        var finalHeight = availableBottomHeight>availableTopHeight?availableBottomHeight:availableTopHeight
        var finalWidth = availableRightWidth>availableLeftWidth?availableRightWidth:availableLeftWidth
        contentElement.component!.css({"max-height": finalHeight+"px", "max-width": finalWidth+"px"})
  
        const position = new Coordinates({
          top: availableBottomHeight>availableTopHeight ? buttonBounds.bottom+spacing : buttonBounds.top-finalHeight-spacing,
          left:buttonBounds.left - (winWidth! <buttonBounds.left+contentBounds.width+spacing ? contentBounds.width-buttonBounds.width : 0)
        })
        contentElement.component!.css(Coordinates.toCSS(position))
      })
      contentElement.component!.addClass("drop-menu").hide()
      widget.append(triggerElement.component!).append(contentElement.component!)
      return widget;
  }
  createApiForm(props: IForm, onEnter: (data: any) => void): JQuery<HTMLElement> {
    let widget = $("<form>").addClass(props.name).attr("action", props.action).attr("method", props.method).on("keydown", function(event){
      if(event.key=="Enter"){
        event.preventDefault();
        onEnter(event);
      }
    })
    .css({"width":"100%"})
    .on("submit", function(event){
      event.preventDefault();
    })
    return widget;
  }
  triggerFocus(element: JQuery<HTMLElement>): void {
    element.find("input:first").trigger("focus")
  }
  hide(element: JQuery<HTMLElement>): void {
    element.hide()
  }
  show(element: JQuery<HTMLElement>): void {
    element.show()
  }
  createListContainer(props: IChildren, direction: "row"|"column"): JQuery<HTMLElement> {
    return this.defaultWidget().css({
      "display": "flex",
      "align-items": props.alignItems,
      "justify-content": props.justifyContent,
      "flex-direction": direction,
      "width": "100%",
      "gap": props.gap+"px",
    } as Record<string, any>);
  }
  createPositionedContainer(props: PositionedProps): JQuery<HTMLElement> {
    let widget = this.defaultWidget()
    widget.css({"position": props.position, "z-index": 100}).css(Coordinates.toCSS(props.coordinates));
    return widget
  }
  createButton({color, decoration, onClick, size, type="button", weight}: IButton): JQuery<HTMLElement> {
    let $button = $("<button>").attr("type", type)
    .css(BoxDecoration.toCSS(decoration))
    .css(TextStyle.toCSS(new TextStyle({color, size, weight})))
    .css({"overflow":"clip", "display": "block"}).on("click", (e)=>{
      onClick(e);
    });
    return $button
  }
  createContainer(props: ContainerProps): JQuery<HTMLElement> {
    let widget = this.defaultWidget().css(props.decoration?BoxDecoration.toCSS(props.decoration):BoxDecoration.emptyCSS());
    if(props.tag){
      widget.attr("id", props.tag);
    }
    if(props.decoration && props.decoration.customScrollBar){
      widget.addClass("custom-scrollbar")
    }
    if(props.className){
      widget.addClass(props.className);
    }
    if(props.alignment!=null){
      widget.css({"display":"flex", "width": "auto", "align-items":"center", "justify-content":props.alignment})
    }
    if(props.decoration && props.decoration.width!=null){
      widget.css({"widget": props.decoration.width})
    }else{
      widget.css({"width": "100%"})
    }
    if(props.bounds){
      widget.css(Bounds.toCSS(props.bounds))
    }
    return widget;
  }
  createLoadingRect(decoration: IBoxDecoration): JQuery<HTMLElement> {
    let widget = this.defaultWidget().css(BoxDecoration.toCSS(decoration)).addClass("animate-pulse");
    return widget;
  }
  createLine({padding = EdgeInsets.zero, color, width}: Line): JQuery<HTMLElement> {
    let container = this.defaultWidget().css({"padding": EdgeInsets.toCSS(padding), "width":"100%"});
    let lineElement = this.defaultWidget().css({
      "width": "100%",
      "border-top": `solid ${width}px ${color}`,
    });
    container.append(lineElement);
    return container;
  }
  createIcon(icon: BootstrapIcon, spin: boolean): JQuery<HTMLElement> {
    return $("<i>").addClass(`bi bi-${icon.name}`).css({
      "color": icon.color,
      "font-size": icon.size,
      "line-height": "130%",
    }).addClass(spin?"icon-spinner":"");
  }
  constructor(){
    super();
  }
  defaultWidget(){
    return $("<div>");
  }
  createImage(url:string, width:string, height:string): JQuery<HTMLElement>{
    let widget = $("<img>").attr("src", url).css({"width": width, "height": height});
    return widget;
  }
  append(thisWidget: IWidget|any, toWidget: IWidget|JQueryApp|null){
    thisWidget.component
    return toWidget!.component!.append(thisWidget.component);
  }
  createText(text: string, style: any): JQuery<HTMLElement> {
    var component = this.defaultWidget().text(text).css({
      "color": style.color,
      "font-size": style.size+"px",
      "text-align": style.alignment,
      "line-height": style.lineHeight,
      "letter-spacing": style.letterSpacing,
      "font-weight": style.weight,
    });
    if(style.singleLine){
      component.css({
        "white-space": "nowrap",
        "overflow": "hidden",
        "text-overflow": "ellipsis",
      });
    }
    return component;
  }
  createInput({
    type="text",
    value="",
    name="default-inputname",
    onInput,
    style=TextStyle.default(),
    decoration= new BoxDecoration({border: 1,radius: 8,padding: EdgeInsets.symmetric(8, 12)}),
  }: InputTextProps){
    return $("<input>")
    .attr("type", type)
    .val(value)
    .css(BoxDecoration.toCSS(decoration))
    .css(TextStyle.toCSS(style))
    .on("input", (e)=>{
      let value = $(e.currentTarget).val();
      onInput(value as any);
    })
    .on("focus", function () {
      $(this).css({
        "box-shadow": `0 0 0 1.2px ${Colors.blue}`,
        "border": `solid ${decoration.border}px ${Colors.blue}`,
      });
    })
    .on("blur", function () {
      $(this).css({
        "box-shadow": decoration.shadow??0,
        "border": `solid ${decoration.border}px ${decoration.borderColor}`,
      });
    });
  }
  createDropdownSelect<T>({initialValue, onChange, options}: CreateDropdownSelectProps<T>): JQuery<HTMLElement> {
    var hidden = true;
      var activeIndex = -1;
      let $dropdownMenu = this.defaultWidget().addClass('drop-menu custom-scrollbar')
      let $dropdownList = this.defaultWidget().addClass('drop-list')
      let $icon = $("<i>").addClass("bi bi-caret-down-fill").css({"color": Colors.blue})
      let toggle = (h: boolean)=>{
        h?$dropdownMenu.show():$dropdownMenu.hide()
        animate($dropdownMenu.get(0)!, {opacity: [0,1]})
        hidden=!h
        $icon.removeClass().addClass(hidden?'bi bi-caret-down-fill':'bi bi-caret-up-fill')
      }
      var renderMenu = ()=>{
        $dropdownList.empty()
        for (let i = 0; i < options.length; i++) {
          const option = options[i];
          var $option = $("<div>").text(option.label)
          .addClass('drop-option')
          .on("click", (e)=>{
            onChange(option, i)
            activeIndex = i
            $button.text(option.label).append($icon)
            toggle(false)
          })
          if(activeIndex==i){
            let $iconCheck = $("<i>").addClass("bi bi-check").css({"color": Colors.black, "font-size": "20px"})
            $option.append($iconCheck)
          }
          $dropdownList.append($option)
        }
        return $dropdownList
      }
      let $button = $("<button>").text(initialValue?initialValue.label:"--Select")
      .addClass('drop-button')
      .on("click", (buttonTarget)=>{
        $dropdownMenu.append(renderMenu())
        toggle(hidden)
        const spacing = 8
        const winHeight = $(window).height()
        const winWidth = $(window).width();
        let bounds = $button.get(0)!.getBoundingClientRect();
        let availableBottomHeight = winHeight! - bounds.bottom - spacing*2;
        let availableTopHeight = bounds.top - spacing * 2;
  
        var finalHeight = availableBottomHeight>availableTopHeight?availableBottomHeight:availableTopHeight
        $dropdownMenu.css({"max-height": finalHeight+"px"})
        let menuBounds = $dropdownMenu.get(0)!.getBoundingClientRect();
  
        const position = new Coordinates({
          top: availableBottomHeight>availableTopHeight ? bounds.bottom+spacing : bounds.top-finalHeight-spacing,
          left: bounds.left - (winWidth! < bounds.left+menuBounds.width+spacing ? menuBounds.width-bounds.width : 0)
        })
        $dropdownMenu.css(Coordinates.toCSS(position))
      })
      $button.append($icon)
      let widget = this.defaultWidget().append($button).append($dropdownMenu)
      return widget
  }
}