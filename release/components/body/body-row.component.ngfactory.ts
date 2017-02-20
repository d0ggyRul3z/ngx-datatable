/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../build/components/body/body-row.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/security';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/metadata/view';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/linker/element_ref';
import * as import11 from '../../../../build/components/body/body-cell.component';
import * as import12 from './body-cell.component.ngfactory';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import15 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '@angular/common/src/directives/ng_style';
export class Wrapper_DataTableBodyRowComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTableBodyRowComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.DataTableBodyRowComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_columns(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.columns = currValue;
      this._expr_0 = currValue;
    }
  }
  check_innerWidth(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.innerWidth = currValue;
      this._expr_1 = currValue;
    }
  }
  check_row(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.row = currValue;
      this._expr_2 = currValue;
    }
  }
  check_offsetX(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.offsetX = currValue;
      this._expr_3 = currValue;
    }
  }
  check_rowHeight(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.rowHeight = currValue;
      this._expr_4 = currValue;
    }
  }
  check_isSelected(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.isSelected = currValue;
      this._expr_5 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_6:any = this.context.rowHeight;
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      view.renderer.setElementStyle(el,'height',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_6) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_6).toString() + 'px')));
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this.context.isSelected;
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      view.renderer.setElementClass(el,'active',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this.context.isEvenRow;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      view.renderer.setElementClass(el,'datatable-row-even',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.isOddRow;
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      view.renderer.setElementClass(el,'datatable-row-odd',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.context.columnsTotalWidths;
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      view.renderer.setElementStyle(el,'width',((view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10) == null)? (null as any): (view.viewUtils.sanitizer.sanitize(import4.SecurityContext.STYLE,currVal_10).toString() + 'px')));
      this._expr_10 = currVal_10;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'keydown')) {
      const pd_sub_0:any = ((<any>this.context.onKeyDown($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.activate.subscribe(_eventHandler.bind(view,'activate'))); }
  }
}
var renderType_DataTableBodyRowComponent_Host:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,([] as any[]),{});
class View_DataTableBodyRowComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTableBodyRowComponent>;
  _DataTableBodyRowComponent_0_3:Wrapper_DataTableBodyRowComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableBodyRowComponent_Host0,renderType_DataTableBodyRowComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-body-row',new import3.InlineArray2(2,'class','datatable-body-row'),rootSelector,(null as any));
    this.compView_0 = new View_DataTableBodyRowComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableBodyRowComponent_0_3 = new Wrapper_DataTableBodyRowComponent(new import10.ElementRef(this._el_0));
    this.compView_0.create(this._DataTableBodyRowComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'keydown',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._DataTableBodyRowComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTableBodyRowComponent) && (0 === requestNodeIndex))) { return this._DataTableBodyRowComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DataTableBodyRowComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._DataTableBodyRowComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableBodyRowComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DataTableBodyRowComponent_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const DataTableBodyRowComponentNgFactory:import9.ComponentFactory<import0.DataTableBodyRowComponent> = new import9.ComponentFactory<import0.DataTableBodyRowComponent>('datatable-body-row',View_DataTableBodyRowComponent_Host0,import0.DataTableBodyRowComponent);
const styles_DataTableBodyRowComponent:any[] = ([] as any[]);
class View_DataTableBodyRowComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import11.DataTableBodyCellComponent>;
  _DataTableBodyCellComponent_0_3:import12.Wrapper_DataTableBodyCellComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_DataTableBodyRowComponent2,renderType_DataTableBodyRowComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'datatable-body-cell',new import3.InlineArray4(4,'class','datatable-body-cell','tabindex','-1'),(null as any));
    this.compView_0 = new import12.View_DataTableBodyCellComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTableBodyCellComponent_0_3 = new import12.Wrapper_DataTableBodyCellComponent(new import10.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._DataTableBodyCellComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray16(12,'activate',(null as any),'focus',(null as any),'blur',(null as any),'click',(null as any),'dblclick',(null as any),'keydown',(null as any)),this.eventHandler(this.handleEvent_0));
    this._DataTableBodyCellComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.DataTableBodyCellComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._DataTableBodyCellComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.parentView.context.row;
    this._DataTableBodyCellComponent_0_3.check_row(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.$implicit;
    this._DataTableBodyCellComponent_0_3.check_column(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.parentView.context.rowHeight;
    this._DataTableBodyCellComponent_0_3.check_rowHeight(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.parentView.context.isSelected;
    this._DataTableBodyCellComponent_0_3.check_isSelected(currVal_0_0_3,throwOnChange,false);
    this._DataTableBodyCellComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._DataTableBodyCellComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTableBodyCellComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DataTableBodyCellComponent_0_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'activate')) {
      const pd_sub_0:any = ((<any>this.parentView.parentView.context.onActivate($event,this.context.index)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_DataTableBodyRowComponent1 extends import2.AppView<any> {
  _el_0:any;
  _NgStyle_0_3:import14.Wrapper_NgStyle;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import13.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import15.Wrapper_NgFor;
  _text_3:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_DataTableBodyRowComponent1,renderType_DataTableBodyRowComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_8 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgStyle_0_3 = new import14.Wrapper_NgStyle(this.parentView.injectorGet(import16.KeyValueDiffers,this.parentIndex),new import10.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import13.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import17.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import15.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import19.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import20.NgStyle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._NgStyle_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.stylesByGroup(this.context.$implicit.type);
    this._NgStyle_0_3.check_ngStyle(currVal_0_0_0,throwOnChange,false);
    this._NgStyle_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.context.$implicit.columns;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parentView.context.columnTrackingFn;
    this._NgFor_2_6.check_ngForTrackBy(currVal_2_0_1,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    const currVal_8:any = import3.inlineInterpolate(1,'datatable-row-',this.context.$implicit.type,' datatable-row-group');
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_8);
      this._expr_8 = currVal_8;
    }
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_DataTableBodyRowComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
var renderType_DataTableBodyRowComponent:import5.RenderComponentType = import3.createRenderComponentType('',0,import6.ViewEncapsulation.None,styles_DataTableBodyRowComponent,{});
export class View_DataTableBodyRowComponent0 extends import2.AppView<import0.DataTableBodyRowComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import13.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import15.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTableBodyRowComponent0,renderType_DataTableBodyRowComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import13.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import17.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import15.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import19.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.columnsByPin;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.trackByGroups;
    this._NgFor_1_6.check_ngForTrackBy(currVal_1_0_1,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_DataTableBodyRowComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}