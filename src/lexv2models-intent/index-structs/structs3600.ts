/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage,
lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageToTerraform,
lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageList,
Lexv2ModelsIntentInitialResponseSettingCodeHook,
lexv2ModelsIntentInitialResponseSettingCodeHookToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookList,
Lexv2ModelsIntentInitialResponseSettingConditional,
lexv2ModelsIntentInitialResponseSettingConditionalToTerraform,
lexv2ModelsIntentInitialResponseSettingConditionalToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingConditionalList } from './structs3200';
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    text: {
      value: cdktn.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
      this._value = value.value;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    image_url: {
      value: cdktn.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtitle: {
      value: cdktn.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._button?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.button = this._button?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageUrl = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._button.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageUrl = value.imageUrl;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._button.internalValue = value.button;
    }
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // button - computed: false, optional: true, required: false
  private _button = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
    this._button.internalValue = value;
  }
  public resetButton() {
    this._button.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonInput() {
    return this._button.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPayload = this._customPayload?.internalValue;
    }
    if (this._imageResponseCard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageResponseCard = this._imageResponseCard?.internalValue;
    }
    if (this._plainTextMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainTextMessage = this._plainTextMessage?.internalValue;
    }
    if (this._ssmlMessage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmlMessage = this._ssmlMessage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = undefined;
      this._imageResponseCard.internalValue = undefined;
      this._plainTextMessage.internalValue = undefined;
      this._ssmlMessage.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPayload.internalValue = value.customPayload;
      this._imageResponseCard.internalValue = value.imageResponseCard;
      this._plainTextMessage.internalValue = value.plainTextMessage;
      this._ssmlMessage.internalValue = value.ssmlMessage;
    }
  }

  // custom_payload - computed: false, optional: true, required: false
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
    this._customPayload.internalValue = value;
  }
  public resetCustomPayload() {
    this._customPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPayloadInput() {
    return this._customPayload.internalValue;
  }

  // image_response_card - computed: false, optional: true, required: false
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
    this._imageResponseCard.internalValue = value;
  }
  public resetImageResponseCard() {
    this._imageResponseCard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageResponseCardInput() {
    return this._imageResponseCard.internalValue;
  }

  // plain_text_message - computed: false, optional: true, required: false
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
    this._plainTextMessage.internalValue = value;
  }
  public resetPlainTextMessage() {
    this._plainTextMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextMessageInput() {
    return this._plainTextMessage.internalValue;
  }

  // ssml_message - computed: false, optional: true, required: false
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
    this._ssmlMessage.internalValue = value;
  }
  public resetSsmlMessage() {
    this._ssmlMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmlMessageInput() {
    return this._ssmlMessage.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    if (this._variation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variation = this._variation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message.internalValue = undefined;
      this._variation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message.internalValue = value.message;
      this._variation.internalValue = value.variation;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // variation - computed: false, optional: true, required: false
  private _variation = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupVariation[] | cdktn.IResolvable) {
    this._variation.internalValue = value;
  }
  public resetVariation() {
    this._variation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationInput() {
    return this._variation.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponse | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInterrupt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInterrupt = this._allowInterrupt;
    }
    if (this._messageGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroup = this._messageGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponse | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowInterrupt = undefined;
      this._messageGroup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowInterrupt = value.allowInterrupt;
      this._messageGroup.internalValue = value.messageGroup;
    }
  }

  // allow_interrupt - computed: false, optional: true, required: false
  private _allowInterrupt?: boolean | cdktn.IResolvable; 
  public get allowInterrupt() {
    return this.getBooleanAttribute('allow_interrupt');
  }
  public set allowInterrupt(value: boolean | cdktn.IResolvable) {
    this._allowInterrupt = value;
  }
  public resetAllowInterrupt() {
    this._allowInterrupt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInterruptInput() {
    return this._allowInterrupt;
  }

  // message_group - computed: false, optional: true, required: false
  private _messageGroup = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroup[] | cdktn.IResolvable) {
    this._messageGroup.internalValue = value;
  }
  public resetMessageGroup() {
    this._messageGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupInput() {
    return this._messageGroup.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponse[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentInitialResponseSettingNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    slot_to_elicit: cdktn.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktn.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentInitialResponseSettingNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    slot_to_elicit: {
      value: cdktn.stringToHclTerraform(struct!.slotToElicit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_next_message: {
      value: cdktn.booleanToHclTerraform(struct!.suppressNextMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepDialogActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slotToElicit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotToElicit = this._slotToElicit;
    }
    if (this._suppressNextMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressNextMessage = this._suppressNextMessage;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slotToElicit = undefined;
      this._suppressNextMessage = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slotToElicit = value.slotToElicit;
      this._suppressNextMessage = value.suppressNextMessage;
      this._type = value.type;
    }
  }

  // slot_to_elicit - computed: false, optional: true, required: false
  private _slotToElicit?: string; 
  public get slotToElicit() {
    return this.getStringAttribute('slot_to_elicit');
  }
  public set slotToElicit(value: string) {
    this._slotToElicit = value;
  }
  public resetSlotToElicit() {
    this._slotToElicit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotToElicitInput() {
    return this._slotToElicit;
  }

  // suppress_next_message - computed: false, optional: true, required: false
  private _suppressNextMessage?: boolean | cdktn.IResolvable; 
  public get suppressNextMessage() {
    return this.getBooleanAttribute('suppress_next_message');
  }
  public set suppressNextMessage(value: boolean | cdktn.IResolvable) {
    this._suppressNextMessage = value;
  }
  public resetSuppressNextMessage() {
    this._suppressNextMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNextMessageInput() {
    return this._suppressNextMessage;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interpreted_value: {
      value: cdktn.stringToHclTerraform(struct!.interpretedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interpretedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpretedValue = this._interpretedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interpretedValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interpretedValue = value.interpretedValue;
    }
  }

  // interpreted_value - computed: false, optional: true, required: false
  private _interpretedValue?: string; 
  public get interpretedValue() {
    return this.getStringAttribute('interpreted_value');
  }
  public set interpretedValue(value: string) {
    this._interpretedValue = value;
  }
  public resetInterpretedValue() {
    this._interpretedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpretedValueInput() {
    return this._interpretedValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    map_block_key: {
      value: cdktn.stringToHclTerraform(struct!.mapBlockKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape: {
      value: cdktn.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapBlockKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapBlockKey = this._mapBlockKey;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapBlockKey = undefined;
      this._shape = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapBlockKey = value.mapBlockKey;
      this._shape = value.shape;
      this._value.internalValue = value.value;
    }
  }

  // map_block_key - computed: false, optional: false, required: true
  private _mapBlockKey?: string; 
  public get mapBlockKey() {
    return this.getStringAttribute('map_block_key');
  }
  public set mapBlockKey(value: string) {
    this._mapBlockKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapBlockKeyInput() {
    return this._mapBlockKey;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // value - computed: false, optional: true, required: false
  private _value = new Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingNextStepIntentToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentInitialResponseSettingNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepIntentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingNextStepIntent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingNextStepIntent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slot.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slot.internalValue = value.slot;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slot - computed: false, optional: true, required: false
  private _slot = new Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentInitialResponseSettingNextStepIntentSlot[] | cdktn.IResolvable) {
    this._slot.internalValue = value;
  }
  public resetSlot() {
    this._slot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingNextStepIntent[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingNextStepIntentOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentInitialResponseSettingNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingNextStepToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentInitialResponseSettingNextStepToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    session_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingNextStep | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAttributes = this._sessionAttributes;
    }
    if (this._dialogAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dialogAction = this._dialogAction?.internalValue;
    }
    if (this._intent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intent = this._intent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingNextStep | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionAttributes = undefined;
      this._dialogAction.internalValue = undefined;
      this._intent.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionAttributes = value.sessionAttributes;
      this._dialogAction.internalValue = value.dialogAction;
      this._intent.internalValue = value.intent;
    }
  }

  // session_attributes - computed: false, optional: true, required: false
  private _sessionAttributes?: { [key: string]: string }; 
  public get sessionAttributes() {
    return this.getStringMapAttribute('session_attributes');
  }
  public set sessionAttributes(value: { [key: string]: string }) {
    this._sessionAttributes = value;
  }
  public resetSessionAttributes() {
    this._sessionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAttributesInput() {
    return this._sessionAttributes;
  }

  // dialog_action - computed: false, optional: true, required: false
  private _dialogAction = new Lexv2ModelsIntentInitialResponseSettingNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentInitialResponseSettingNextStepDialogAction[] | cdktn.IResolvable) {
    this._dialogAction.internalValue = value;
  }
  public resetDialogAction() {
    this._dialogAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogActionInput() {
    return this._dialogAction.internalValue;
  }

  // intent - computed: false, optional: true, required: false
  private _intent = new Lexv2ModelsIntentInitialResponseSettingNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentInitialResponseSettingNextStepIntent[] | cdktn.IResolvable) {
    this._intent.internalValue = value;
  }
  public resetIntent() {
    this._intent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingNextStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingNextStepOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSetting {
  /**
  * code_hook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#code_hook Lexv2ModelsIntent#code_hook}
  */
  readonly codeHook?: Lexv2ModelsIntentInitialResponseSettingCodeHook[] | cdktn.IResolvable;
  /**
  * conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#conditional Lexv2ModelsIntent#conditional}
  */
  readonly conditional?: Lexv2ModelsIntentInitialResponseSettingConditional[] | cdktn.IResolvable;
  /**
  * initial_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#initial_response Lexv2ModelsIntent#initial_response}
  */
  readonly initialResponse?: Lexv2ModelsIntentInitialResponseSettingInitialResponse[] | cdktn.IResolvable;
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentInitialResponseSettingNextStep[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingToTerraform(struct?: Lexv2ModelsIntentInitialResponseSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    code_hook: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookToTerraform, true)(struct!.codeHook),
    conditional: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalToTerraform, true)(struct!.conditional),
    initial_response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseToTerraform, true)(struct!.initialResponse),
    next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingNextStepToTerraform, true)(struct!.nextStep),
  }
}


export function lexv2ModelsIntentInitialResponseSettingToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSetting | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    code_hook: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookToHclTerraform, true)(struct!.codeHook),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookList",
    },
    conditional: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalToHclTerraform, true)(struct!.conditional),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalList",
    },
    initial_response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseToHclTerraform, true)(struct!.initialResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseList",
    },
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingNextStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInitialResponseSetting | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeHook = this._codeHook?.internalValue;
    }
    if (this._conditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditional = this._conditional?.internalValue;
    }
    if (this._initialResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialResponse = this._initialResponse?.internalValue;
    }
    if (this._nextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextStep = this._nextStep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSetting | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeHook.internalValue = undefined;
      this._conditional.internalValue = undefined;
      this._initialResponse.internalValue = undefined;
      this._nextStep.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeHook.internalValue = value.codeHook;
      this._conditional.internalValue = value.conditional;
      this._initialResponse.internalValue = value.initialResponse;
      this._nextStep.internalValue = value.nextStep;
    }
  }

  // code_hook - computed: false, optional: true, required: false
  private _codeHook = new Lexv2ModelsIntentInitialResponseSettingCodeHookList(this, "code_hook", false);
  public get codeHook() {
    return this._codeHook;
  }
  public putCodeHook(value: Lexv2ModelsIntentInitialResponseSettingCodeHook[] | cdktn.IResolvable) {
    this._codeHook.internalValue = value;
  }
  public resetCodeHook() {
    this._codeHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeHookInput() {
    return this._codeHook.internalValue;
  }

  // conditional - computed: false, optional: true, required: false
  private _conditional = new Lexv2ModelsIntentInitialResponseSettingConditionalList(this, "conditional", false);
  public get conditional() {
    return this._conditional;
  }
  public putConditional(value: Lexv2ModelsIntentInitialResponseSettingConditional[] | cdktn.IResolvable) {
    this._conditional.internalValue = value;
  }
  public resetConditional() {
    this._conditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalInput() {
    return this._conditional.internalValue;
  }

  // initial_response - computed: false, optional: true, required: false
  private _initialResponse = new Lexv2ModelsIntentInitialResponseSettingInitialResponseList(this, "initial_response", false);
  public get initialResponse() {
    return this._initialResponse;
  }
  public putInitialResponse(value: Lexv2ModelsIntentInitialResponseSettingInitialResponse[] | cdktn.IResolvable) {
    this._initialResponse.internalValue = value;
  }
  public resetInitialResponse() {
    this._initialResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialResponseInput() {
    return this._initialResponse.internalValue;
  }

  // next_step - computed: false, optional: true, required: false
  private _nextStep = new Lexv2ModelsIntentInitialResponseSettingNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentInitialResponseSettingNextStep[] | cdktn.IResolvable) {
    this._nextStep.internalValue = value;
  }
  public resetNextStep() {
    this._nextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStepInput() {
    return this._nextStep.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSetting[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInputContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
}

export function lexv2ModelsIntentInputContextToTerraform(struct?: Lexv2ModelsIntentInputContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function lexv2ModelsIntentInputContextToHclTerraform(struct?: Lexv2ModelsIntentInputContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInputContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentInputContext | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInputContext | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class Lexv2ModelsIntentInputContextList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInputContext[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInputContextOutputReference {
    return new Lexv2ModelsIntentInputContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentKendraConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#kendra_index Lexv2ModelsIntent#kendra_index}
  */
  readonly kendraIndex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#query_filter_string Lexv2ModelsIntent#query_filter_string}
  */
  readonly queryFilterString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#query_filter_string_enabled Lexv2ModelsIntent#query_filter_string_enabled}
  */
  readonly queryFilterStringEnabled?: boolean | cdktn.IResolvable;
}

export function lexv2ModelsIntentKendraConfigurationToTerraform(struct?: Lexv2ModelsIntentKendraConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kendra_index: cdktn.stringToTerraform(struct!.kendraIndex),
    query_filter_string: cdktn.stringToTerraform(struct!.queryFilterString),
    query_filter_string_enabled: cdktn.booleanToTerraform(struct!.queryFilterStringEnabled),
  }
}


export function lexv2ModelsIntentKendraConfigurationToHclTerraform(struct?: Lexv2ModelsIntentKendraConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kendra_index: {
      value: cdktn.stringToHclTerraform(struct!.kendraIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_filter_string: {
      value: cdktn.stringToHclTerraform(struct!.queryFilterString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_filter_string_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.queryFilterStringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentKendraConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentKendraConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kendraIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraIndex = this._kendraIndex;
    }
    if (this._queryFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilterString = this._queryFilterString;
    }
    if (this._queryFilterStringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilterStringEnabled = this._queryFilterStringEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentKendraConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kendraIndex = undefined;
      this._queryFilterString = undefined;
      this._queryFilterStringEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kendraIndex = value.kendraIndex;
      this._queryFilterString = value.queryFilterString;
      this._queryFilterStringEnabled = value.queryFilterStringEnabled;
    }
  }

  // kendra_index - computed: false, optional: false, required: true
  private _kendraIndex?: string; 
  public get kendraIndex() {
    return this.getStringAttribute('kendra_index');
  }
  public set kendraIndex(value: string) {
    this._kendraIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraIndexInput() {
    return this._kendraIndex;
  }

  // query_filter_string - computed: false, optional: true, required: false
  private _queryFilterString?: string; 
  public get queryFilterString() {
    return this.getStringAttribute('query_filter_string');
  }
  public set queryFilterString(value: string) {
    this._queryFilterString = value;
  }
  public resetQueryFilterString() {
    this._queryFilterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterStringInput() {
    return this._queryFilterString;
  }

  // query_filter_string_enabled - computed: false, optional: true, required: false
  private _queryFilterStringEnabled?: boolean | cdktn.IResolvable; 
  public get queryFilterStringEnabled() {
    return this.getBooleanAttribute('query_filter_string_enabled');
  }
  public set queryFilterStringEnabled(value: boolean | cdktn.IResolvable) {
    this._queryFilterStringEnabled = value;
  }
  public resetQueryFilterStringEnabled() {
    this._queryFilterStringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterStringEnabledInput() {
    return this._queryFilterStringEnabled;
  }
}

export class Lexv2ModelsIntentKendraConfigurationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentKendraConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentKendraConfigurationOutputReference {
    return new Lexv2ModelsIntentKendraConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentOutputContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#time_to_live_in_seconds Lexv2ModelsIntent#time_to_live_in_seconds}
  */
  readonly timeToLiveInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#turns_to_live Lexv2ModelsIntent#turns_to_live}
  */
  readonly turnsToLive: number;
}

export function lexv2ModelsIntentOutputContextToTerraform(struct?: Lexv2ModelsIntentOutputContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    time_to_live_in_seconds: cdktn.numberToTerraform(struct!.timeToLiveInSeconds),
    turns_to_live: cdktn.numberToTerraform(struct!.turnsToLive),
  }
}


export function lexv2ModelsIntentOutputContextToHclTerraform(struct?: Lexv2ModelsIntentOutputContext | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_live_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    turns_to_live: {
      value: cdktn.numberToHclTerraform(struct!.turnsToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentOutputContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentOutputContext | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveInSeconds = this._timeToLiveInSeconds;
    }
    if (this._turnsToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.turnsToLive = this._turnsToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentOutputContext | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._timeToLiveInSeconds = undefined;
      this._turnsToLive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._timeToLiveInSeconds = value.timeToLiveInSeconds;
      this._turnsToLive = value.turnsToLive;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // time_to_live_in_seconds - computed: false, optional: false, required: true
  private _timeToLiveInSeconds?: number; 
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }
  public set timeToLiveInSeconds(value: number) {
    this._timeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInSecondsInput() {
    return this._timeToLiveInSeconds;
  }

  // turns_to_live - computed: false, optional: false, required: true
  private _turnsToLive?: number; 
  public get turnsToLive() {
    return this.getNumberAttribute('turns_to_live');
  }
  public set turnsToLive(value: number) {
    this._turnsToLive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get turnsToLiveInput() {
    return this._turnsToLive;
  }
}

export class Lexv2ModelsIntentOutputContextList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentOutputContext[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentOutputContextOutputReference {
    return new Lexv2ModelsIntentOutputContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#identifier Lexv2ModelsIntent#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#version Lexv2ModelsIntent#version}
  */
  readonly version: string;
}

export function lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identifier: cdktn.stringToTerraform(struct!.identifier),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._version = value.version;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#custom_prompt Lexv2ModelsIntent#custom_prompt}
  */
  readonly customPrompt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#model_arn Lexv2ModelsIntent#model_arn}
  */
  readonly modelArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#trace_status Lexv2ModelsIntent#trace_status}
  */
  readonly traceStatus?: string;
  /**
  * guardrail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#guardrail Lexv2ModelsIntent#guardrail}
  */
  readonly guardrail?: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_prompt: cdktn.stringToTerraform(struct!.customPrompt),
    model_arn: cdktn.stringToTerraform(struct!.modelArn),
    trace_status: cdktn.stringToTerraform(struct!.traceStatus),
    guardrail: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailToTerraform, true)(struct!.guardrail),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_prompt: {
      value: cdktn.stringToHclTerraform(struct!.customPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_arn: {
      value: cdktn.stringToHclTerraform(struct!.modelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trace_status: {
      value: cdktn.stringToHclTerraform(struct!.traceStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guardrail: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailToHclTerraform, true)(struct!.guardrail),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPrompt = this._customPrompt;
    }
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    if (this._traceStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceStatus = this._traceStatus;
    }
    if (this._guardrail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardrail = this._guardrail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPrompt = undefined;
      this._modelArn = undefined;
      this._traceStatus = undefined;
      this._guardrail.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPrompt = value.customPrompt;
      this._modelArn = value.modelArn;
      this._traceStatus = value.traceStatus;
      this._guardrail.internalValue = value.guardrail;
    }
  }

  // custom_prompt - computed: false, optional: true, required: false
  private _customPrompt?: string; 
  public get customPrompt() {
    return this.getStringAttribute('custom_prompt');
  }
  public set customPrompt(value: string) {
    this._customPrompt = value;
  }
  public resetCustomPrompt() {
    this._customPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPromptInput() {
    return this._customPrompt;
  }

  // model_arn - computed: false, optional: false, required: true
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }

  // trace_status - computed: false, optional: true, required: false
  private _traceStatus?: string; 
  public get traceStatus() {
    return this.getStringAttribute('trace_status');
  }
  public set traceStatus(value: string) {
    this._traceStatus = value;
  }
  public resetTraceStatus() {
    this._traceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceStatusInput() {
    return this._traceStatus;
  }

  // guardrail - computed: false, optional: true, required: false
  private _guardrail = new Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrailList(this, "guardrail", false);
  public get guardrail() {
    return this._guardrail;
  }
  public putGuardrail(value: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationGuardrail[] | cdktn.IResolvable) {
    this._guardrail.internalValue = value;
  }
  public resetGuardrail() {
    this._guardrail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailInput() {
    return this._guardrail.internalValue;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#answer_field Lexv2ModelsIntent#answer_field}
  */
  readonly answerField?: string;
}

export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer_field: cdktn.stringToTerraform(struct!.answerField),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer_field: {
      value: cdktn.stringToHclTerraform(struct!.answerField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerField !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerField = this._answerField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerField = value.answerField;
    }
  }

  // answer_field - computed: false, optional: true, required: false
  private _answerField?: string; 
  public get answerField() {
    return this.getStringAttribute('answer_field');
  }
  public set answerField(value: string) {
    this._answerField = value;
  }
  public resetAnswerField() {
    this._answerField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerFieldInput() {
    return this._answerField;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#bedrock_knowledge_base_arn Lexv2ModelsIntent#bedrock_knowledge_base_arn}
  */
  readonly bedrockKnowledgeBaseArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#exact_response Lexv2ModelsIntent#exact_response}
  */
  readonly exactResponse?: boolean | cdktn.IResolvable;
  /**
  * exact_response_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#exact_response_fields Lexv2ModelsIntent#exact_response_fields}
  */
  readonly exactResponseFields?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_knowledge_base_arn: cdktn.stringToTerraform(struct!.bedrockKnowledgeBaseArn),
    exact_response: cdktn.booleanToTerraform(struct!.exactResponse),
    exact_response_fields: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsToTerraform, true)(struct!.exactResponseFields),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_knowledge_base_arn: {
      value: cdktn.stringToHclTerraform(struct!.bedrockKnowledgeBaseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_response: {
      value: cdktn.booleanToHclTerraform(struct!.exactResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_response_fields: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsToHclTerraform, true)(struct!.exactResponseFields),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockKnowledgeBaseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockKnowledgeBaseArn = this._bedrockKnowledgeBaseArn;
    }
    if (this._exactResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactResponse = this._exactResponse;
    }
    if (this._exactResponseFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactResponseFields = this._exactResponseFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockKnowledgeBaseArn = undefined;
      this._exactResponse = undefined;
      this._exactResponseFields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockKnowledgeBaseArn = value.bedrockKnowledgeBaseArn;
      this._exactResponse = value.exactResponse;
      this._exactResponseFields.internalValue = value.exactResponseFields;
    }
  }

  // bedrock_knowledge_base_arn - computed: false, optional: false, required: true
  private _bedrockKnowledgeBaseArn?: string; 
  public get bedrockKnowledgeBaseArn() {
    return this.getStringAttribute('bedrock_knowledge_base_arn');
  }
  public set bedrockKnowledgeBaseArn(value: string) {
    this._bedrockKnowledgeBaseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockKnowledgeBaseArnInput() {
    return this._bedrockKnowledgeBaseArn;
  }

  // exact_response - computed: true, optional: true, required: false
  private _exactResponse?: boolean | cdktn.IResolvable; 
  public get exactResponse() {
    return this.getBooleanAttribute('exact_response');
  }
  public set exactResponse(value: boolean | cdktn.IResolvable) {
    this._exactResponse = value;
  }
  public resetExactResponse() {
    this._exactResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactResponseInput() {
    return this._exactResponse;
  }

  // exact_response_fields - computed: false, optional: true, required: false
  private _exactResponseFields = new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFieldsList(this, "exact_response_fields", false);
  public get exactResponseFields() {
    return this._exactResponseFields;
  }
  public putExactResponseFields(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationExactResponseFields[] | cdktn.IResolvable) {
    this._exactResponseFields.internalValue = value;
  }
  public resetExactResponseFields() {
    this._exactResponseFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactResponseFieldsInput() {
    return this._exactResponseFields.internalValue;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#exact_response Lexv2ModelsIntent#exact_response}
  */
  readonly exactResponse?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#kendra_index Lexv2ModelsIntent#kendra_index}
  */
  readonly kendraIndex: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#query_filter_string Lexv2ModelsIntent#query_filter_string}
  */
  readonly queryFilterString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#query_filter_string_enabled Lexv2ModelsIntent#query_filter_string_enabled}
  */
  readonly queryFilterStringEnabled?: boolean | cdktn.IResolvable;
}

export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exact_response: cdktn.booleanToTerraform(struct!.exactResponse),
    kendra_index: cdktn.stringToTerraform(struct!.kendraIndex),
    query_filter_string: cdktn.stringToTerraform(struct!.queryFilterString),
    query_filter_string_enabled: cdktn.booleanToTerraform(struct!.queryFilterStringEnabled),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exact_response: {
      value: cdktn.booleanToHclTerraform(struct!.exactResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kendra_index: {
      value: cdktn.stringToHclTerraform(struct!.kendraIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_filter_string: {
      value: cdktn.stringToHclTerraform(struct!.queryFilterString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_filter_string_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.queryFilterStringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactResponse = this._exactResponse;
    }
    if (this._kendraIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraIndex = this._kendraIndex;
    }
    if (this._queryFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilterString = this._queryFilterString;
    }
    if (this._queryFilterStringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryFilterStringEnabled = this._queryFilterStringEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactResponse = undefined;
      this._kendraIndex = undefined;
      this._queryFilterString = undefined;
      this._queryFilterStringEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactResponse = value.exactResponse;
      this._kendraIndex = value.kendraIndex;
      this._queryFilterString = value.queryFilterString;
      this._queryFilterStringEnabled = value.queryFilterStringEnabled;
    }
  }

  // exact_response - computed: true, optional: true, required: false
  private _exactResponse?: boolean | cdktn.IResolvable; 
  public get exactResponse() {
    return this.getBooleanAttribute('exact_response');
  }
  public set exactResponse(value: boolean | cdktn.IResolvable) {
    this._exactResponse = value;
  }
  public resetExactResponse() {
    this._exactResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactResponseInput() {
    return this._exactResponse;
  }

  // kendra_index - computed: false, optional: false, required: true
  private _kendraIndex?: string; 
  public get kendraIndex() {
    return this.getStringAttribute('kendra_index');
  }
  public set kendraIndex(value: string) {
    this._kendraIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraIndexInput() {
    return this._kendraIndex;
  }

  // query_filter_string - computed: false, optional: true, required: false
  private _queryFilterString?: string; 
  public get queryFilterString() {
    return this.getStringAttribute('query_filter_string');
  }
  public set queryFilterString(value: string) {
    this._queryFilterString = value;
  }
  public resetQueryFilterString() {
    this._queryFilterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterStringInput() {
    return this._queryFilterString;
  }

  // query_filter_string_enabled - computed: false, optional: true, required: false
  private _queryFilterStringEnabled?: boolean | cdktn.IResolvable; 
  public get queryFilterStringEnabled() {
    return this.getBooleanAttribute('query_filter_string_enabled');
  }
  public set queryFilterStringEnabled(value: boolean | cdktn.IResolvable) {
    this._queryFilterStringEnabled = value;
  }
  public resetQueryFilterStringEnabled() {
    this._queryFilterStringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFilterStringEnabledInput() {
    return this._queryFilterStringEnabled;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#answer_field Lexv2ModelsIntent#answer_field}
  */
  readonly answerField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#question_field Lexv2ModelsIntent#question_field}
  */
  readonly questionField: string;
}

export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer_field: cdktn.stringToTerraform(struct!.answerField),
    question_field: cdktn.stringToTerraform(struct!.questionField),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer_field: {
      value: cdktn.stringToHclTerraform(struct!.answerField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question_field: {
      value: cdktn.stringToHclTerraform(struct!.questionField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answerField !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerField = this._answerField;
    }
    if (this._questionField !== undefined) {
      hasAnyValues = true;
      internalValueResult.questionField = this._questionField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answerField = undefined;
      this._questionField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answerField = value.answerField;
      this._questionField = value.questionField;
    }
  }

  // answer_field - computed: false, optional: false, required: true
  private _answerField?: string; 
  public get answerField() {
    return this.getStringAttribute('answer_field');
  }
  public set answerField(value: string) {
    this._answerField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get answerFieldInput() {
    return this._answerField;
  }

  // question_field - computed: false, optional: false, required: true
  private _questionField?: string; 
  public get questionField() {
    return this.getStringAttribute('question_field');
  }
  public set questionField(value: string) {
    this._questionField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionFieldInput() {
    return this._questionField;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#domain_endpoint Lexv2ModelsIntent#domain_endpoint}
  */
  readonly domainEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#exact_response Lexv2ModelsIntent#exact_response}
  */
  readonly exactResponse?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#include_fields Lexv2ModelsIntent#include_fields}
  */
  readonly includeFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#index_name Lexv2ModelsIntent#index_name}
  */
  readonly indexName: string;
  /**
  * exact_response_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#exact_response_fields Lexv2ModelsIntent#exact_response_fields}
  */
  readonly exactResponseFields?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_endpoint: cdktn.stringToTerraform(struct!.domainEndpoint),
    exact_response: cdktn.booleanToTerraform(struct!.exactResponse),
    include_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeFields),
    index_name: cdktn.stringToTerraform(struct!.indexName),
    exact_response_fields: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsToTerraform, true)(struct!.exactResponseFields),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.domainEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_response: {
      value: cdktn.booleanToHclTerraform(struct!.exactResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    index_name: {
      value: cdktn.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_response_fields: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsToHclTerraform, true)(struct!.exactResponseFields),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainEndpoint = this._domainEndpoint;
    }
    if (this._exactResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactResponse = this._exactResponse;
    }
    if (this._includeFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeFields = this._includeFields;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._exactResponseFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactResponseFields = this._exactResponseFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainEndpoint = undefined;
      this._exactResponse = undefined;
      this._includeFields = undefined;
      this._indexName = undefined;
      this._exactResponseFields.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainEndpoint = value.domainEndpoint;
      this._exactResponse = value.exactResponse;
      this._includeFields = value.includeFields;
      this._indexName = value.indexName;
      this._exactResponseFields.internalValue = value.exactResponseFields;
    }
  }

  // domain_endpoint - computed: false, optional: false, required: true
  private _domainEndpoint?: string; 
  public get domainEndpoint() {
    return this.getStringAttribute('domain_endpoint');
  }
  public set domainEndpoint(value: string) {
    this._domainEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointInput() {
    return this._domainEndpoint;
  }

  // exact_response - computed: true, optional: true, required: false
  private _exactResponse?: boolean | cdktn.IResolvable; 
  public get exactResponse() {
    return this.getBooleanAttribute('exact_response');
  }
  public set exactResponse(value: boolean | cdktn.IResolvable) {
    this._exactResponse = value;
  }
  public resetExactResponse() {
    this._exactResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactResponseInput() {
    return this._exactResponse;
  }

  // include_fields - computed: false, optional: true, required: false
  private _includeFields?: string[]; 
  public get includeFields() {
    return this.getListAttribute('include_fields');
  }
  public set includeFields(value: string[]) {
    this._includeFields = value;
  }
  public resetIncludeFields() {
    this._includeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFieldsInput() {
    return this._includeFields;
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // exact_response_fields - computed: false, optional: true, required: false
  private _exactResponseFields = new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFieldsList(this, "exact_response_fields", false);
  public get exactResponseFields() {
    return this._exactResponseFields;
  }
  public putExactResponseFields(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationExactResponseFields[] | cdktn.IResolvable) {
    this._exactResponseFields.internalValue = value;
  }
  public resetExactResponseFields() {
    this._exactResponseFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactResponseFieldsInput() {
    return this._exactResponseFields.internalValue;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration {
  /**
  * bedrock_knowledge_store_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#bedrock_knowledge_store_configuration Lexv2ModelsIntent#bedrock_knowledge_store_configuration}
  */
  readonly bedrockKnowledgeStoreConfiguration?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration[] | cdktn.IResolvable;
  /**
  * kendra_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#kendra_configuration Lexv2ModelsIntent#kendra_configuration}
  */
  readonly kendraConfiguration?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration[] | cdktn.IResolvable;
  /**
  * opensearch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#opensearch_configuration Lexv2ModelsIntent#opensearch_configuration}
  */
  readonly opensearchConfiguration?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_knowledge_store_configuration: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationToTerraform, true)(struct!.bedrockKnowledgeStoreConfiguration),
    kendra_configuration: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationToTerraform, true)(struct!.kendraConfiguration),
    opensearch_configuration: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationToTerraform, true)(struct!.opensearchConfiguration),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_knowledge_store_configuration: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationToHclTerraform, true)(struct!.bedrockKnowledgeStoreConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationList",
    },
    kendra_configuration: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationToHclTerraform, true)(struct!.kendraConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationList",
    },
    opensearch_configuration: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationToHclTerraform, true)(struct!.opensearchConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockKnowledgeStoreConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockKnowledgeStoreConfiguration = this._bedrockKnowledgeStoreConfiguration?.internalValue;
    }
    if (this._kendraConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kendraConfiguration = this._kendraConfiguration?.internalValue;
    }
    if (this._opensearchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchConfiguration = this._opensearchConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockKnowledgeStoreConfiguration.internalValue = undefined;
      this._kendraConfiguration.internalValue = undefined;
      this._opensearchConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockKnowledgeStoreConfiguration.internalValue = value.bedrockKnowledgeStoreConfiguration;
      this._kendraConfiguration.internalValue = value.kendraConfiguration;
      this._opensearchConfiguration.internalValue = value.opensearchConfiguration;
    }
  }

  // bedrock_knowledge_store_configuration - computed: false, optional: true, required: false
  private _bedrockKnowledgeStoreConfiguration = new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfigurationList(this, "bedrock_knowledge_store_configuration", false);
  public get bedrockKnowledgeStoreConfiguration() {
    return this._bedrockKnowledgeStoreConfiguration;
  }
  public putBedrockKnowledgeStoreConfiguration(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationBedrockKnowledgeStoreConfiguration[] | cdktn.IResolvable) {
    this._bedrockKnowledgeStoreConfiguration.internalValue = value;
  }
  public resetBedrockKnowledgeStoreConfiguration() {
    this._bedrockKnowledgeStoreConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockKnowledgeStoreConfigurationInput() {
    return this._bedrockKnowledgeStoreConfiguration.internalValue;
  }

  // kendra_configuration - computed: false, optional: true, required: false
  private _kendraConfiguration = new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfigurationList(this, "kendra_configuration", false);
  public get kendraConfiguration() {
    return this._kendraConfiguration;
  }
  public putKendraConfiguration(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationKendraConfiguration[] | cdktn.IResolvable) {
    this._kendraConfiguration.internalValue = value;
  }
  public resetKendraConfiguration() {
    this._kendraConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kendraConfigurationInput() {
    return this._kendraConfiguration.internalValue;
  }

  // opensearch_configuration - computed: false, optional: true, required: false
  private _opensearchConfiguration = new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfigurationList(this, "opensearch_configuration", false);
  public get opensearchConfiguration() {
    return this._opensearchConfiguration;
  }
  public putOpensearchConfiguration(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOpensearchConfiguration[] | cdktn.IResolvable) {
    this._opensearchConfiguration.internalValue = value;
  }
  public resetOpensearchConfiguration() {
    this._opensearchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchConfigurationInput() {
    return this._opensearchConfiguration.internalValue;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentQnaIntentConfiguration {
  /**
  * bedrock_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#bedrock_model_configuration Lexv2ModelsIntent#bedrock_model_configuration}
  */
  readonly bedrockModelConfiguration?: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration[] | cdktn.IResolvable;
  /**
  * data_source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#data_source_configuration Lexv2ModelsIntent#data_source_configuration}
  */
  readonly dataSourceConfiguration?: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentQnaIntentConfigurationToTerraform(struct?: Lexv2ModelsIntentQnaIntentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bedrock_model_configuration: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationToTerraform, true)(struct!.bedrockModelConfiguration),
    data_source_configuration: cdktn.listMapper(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationToTerraform, true)(struct!.dataSourceConfiguration),
  }
}


export function lexv2ModelsIntentQnaIntentConfigurationToHclTerraform(struct?: Lexv2ModelsIntentQnaIntentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bedrock_model_configuration: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationToHclTerraform, true)(struct!.bedrockModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationList",
    },
    data_source_configuration: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationToHclTerraform, true)(struct!.dataSourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentQnaIntentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentQnaIntentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bedrockModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockModelConfiguration = this._bedrockModelConfiguration?.internalValue;
    }
    if (this._dataSourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceConfiguration = this._dataSourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentQnaIntentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bedrockModelConfiguration.internalValue = undefined;
      this._dataSourceConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bedrockModelConfiguration.internalValue = value.bedrockModelConfiguration;
      this._dataSourceConfiguration.internalValue = value.dataSourceConfiguration;
    }
  }

  // bedrock_model_configuration - computed: false, optional: true, required: false
  private _bedrockModelConfiguration = new Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfigurationList(this, "bedrock_model_configuration", false);
  public get bedrockModelConfiguration() {
    return this._bedrockModelConfiguration;
  }
  public putBedrockModelConfiguration(value: Lexv2ModelsIntentQnaIntentConfigurationBedrockModelConfiguration[] | cdktn.IResolvable) {
    this._bedrockModelConfiguration.internalValue = value;
  }
  public resetBedrockModelConfiguration() {
    this._bedrockModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockModelConfigurationInput() {
    return this._bedrockModelConfiguration.internalValue;
  }

  // data_source_configuration - computed: false, optional: true, required: false
  private _dataSourceConfiguration = new Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfigurationList(this, "data_source_configuration", false);
  public get dataSourceConfiguration() {
    return this._dataSourceConfiguration;
  }
  public putDataSourceConfiguration(value: Lexv2ModelsIntentQnaIntentConfigurationDataSourceConfiguration[] | cdktn.IResolvable) {
    this._dataSourceConfiguration.internalValue = value;
  }
  public resetDataSourceConfiguration() {
    this._dataSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigurationInput() {
    return this._dataSourceConfiguration.internalValue;
  }
}

export class Lexv2ModelsIntentQnaIntentConfigurationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentQnaIntentConfiguration[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentQnaIntentConfigurationOutputReference {
    return new Lexv2ModelsIntentQnaIntentConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentSampleUtterance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#utterance Lexv2ModelsIntent#utterance}
  */
  readonly utterance: string;
}

export function lexv2ModelsIntentSampleUtteranceToTerraform(struct?: Lexv2ModelsIntentSampleUtterance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    utterance: cdktn.stringToTerraform(struct!.utterance),
  }
}


export function lexv2ModelsIntentSampleUtteranceToHclTerraform(struct?: Lexv2ModelsIntentSampleUtterance | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    utterance: {
      value: cdktn.stringToHclTerraform(struct!.utterance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentSampleUtteranceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentSampleUtterance | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._utterance !== undefined) {
      hasAnyValues = true;
      internalValueResult.utterance = this._utterance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentSampleUtterance | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._utterance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._utterance = value.utterance;
    }
  }

  // utterance - computed: false, optional: false, required: true
  private _utterance?: string; 
  public get utterance() {
    return this.getStringAttribute('utterance');
  }
  public set utterance(value: string) {
    this._utterance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utteranceInput() {
    return this._utterance;
  }
}

export class Lexv2ModelsIntentSampleUtteranceList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentSampleUtterance[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentSampleUtteranceOutputReference {
    return new Lexv2ModelsIntentSampleUtteranceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentSlotPriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#priority Lexv2ModelsIntent#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#slot_id Lexv2ModelsIntent#slot_id}
  */
  readonly slotId: string;
}

export function lexv2ModelsIntentSlotPriorityToTerraform(struct?: Lexv2ModelsIntentSlotPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    slot_id: cdktn.stringToTerraform(struct!.slotId),
  }
}


export function lexv2ModelsIntentSlotPriorityToHclTerraform(struct?: Lexv2ModelsIntentSlotPriority | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slot_id: {
      value: cdktn.stringToHclTerraform(struct!.slotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentSlotPriorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Lexv2ModelsIntentSlotPriority | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._slotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotId = this._slotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentSlotPriority | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._slotId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._slotId = value.slotId;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // slot_id - computed: false, optional: false, required: true
  private _slotId?: string; 
  public get slotId() {
    return this.getStringAttribute('slot_id');
  }
  public set slotId(value: string) {
    this._slotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotIdInput() {
    return this._slotId;
  }
}

export class Lexv2ModelsIntentSlotPriorityList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentSlotPriority[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentSlotPriorityOutputReference {
    return new Lexv2ModelsIntentSlotPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#create Lexv2ModelsIntent#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#delete Lexv2ModelsIntent#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/lexv2models_intent#update Lexv2ModelsIntent#update}
  */
  readonly update?: string;
}

export function lexv2ModelsIntentTimeoutsToTerraform(struct?: Lexv2ModelsIntentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function lexv2ModelsIntentTimeoutsToHclTerraform(struct?: Lexv2ModelsIntentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Lexv2ModelsIntentTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
