/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage,
lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageToTerraform,
lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageToHclTerraform,
Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageList } from './structs800';
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingConfirmationResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingConfirmationResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentConfirmationSettingConfirmationResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingConfirmationResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingConfirmationResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingConfirmationResponse[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingConfirmationResponseOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingConfirmationResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
  */
  readonly expressionString: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression_string: cdktn.stringToTerraform(struct!.expressionString),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression_string: {
      value: cdktn.stringToHclTerraform(struct!.expressionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionString = this._expressionString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionString = value.expressionString;
    }
  }

  // expression_string - computed: false, optional: false, required: true
  private _expressionString?: string; 
  public get expressionString() {
    return this.getStringAttribute('expression_string');
  }
  public set expressionString(value: string) {
    this._expressionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionStringInput() {
    return this._expressionString;
  }
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable): any {
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


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
  */
  readonly condition?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition[] | cdktn.IResolvable;
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep[] | cdktn.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    condition: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionToTerraform, true)(struct!.condition),
    next_step: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktn.IResolvable): any {
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
    condition: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionList",
    },
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepList",
    },
    response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._nextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextStep = this._nextStep?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._condition.internalValue = undefined;
      this._nextStep.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._condition.internalValue = value.condition;
      this._nextStep.internalValue = value.nextStep;
      this._response.internalValue = value.response;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // next_step - computed: false, optional: true, required: false
  private _nextStep = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchNextStep[] | cdktn.IResolvable) {
    this._nextStep.internalValue = value;
  }
  public resetNextStep() {
    this._nextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStepInput() {
    return this._nextStep.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchResponse[] | cdktn.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
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


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch {
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep[] | cdktn.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    next_step: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepList",
    },
    response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextStep = this._nextStep?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextStep.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextStep.internalValue = value.nextStep;
      this._response.internalValue = value.response;
    }
  }

  // next_step - computed: false, optional: true, required: false
  private _nextStep = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchNextStep[] | cdktn.IResolvable) {
    this._nextStep.internalValue = value;
  }
  public resetNextStep() {
    this._nextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStepInput() {
    return this._nextStep.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchResponse[] | cdktn.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationConditional {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
  */
  readonly active: boolean | cdktn.IResolvable;
  /**
  * conditional_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#conditional_branch Lexv2ModelsIntent#conditional_branch}
  */
  readonly conditionalBranch?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch[] | cdktn.IResolvable;
  /**
  * default_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#default_branch Lexv2ModelsIntent#default_branch}
  */
  readonly defaultBranch?: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    active: cdktn.booleanToTerraform(struct!.active),
    conditional_branch: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchToTerraform, true)(struct!.conditionalBranch),
    default_branch: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchToTerraform, true)(struct!.defaultBranch),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationConditionalToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    active: {
      value: cdktn.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditional_branch: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchToHclTerraform, true)(struct!.conditionalBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchList",
    },
    default_branch: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchToHclTerraform, true)(struct!.defaultBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._conditionalBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalBranch = this._conditionalBranch?.internalValue;
    }
    if (this._defaultBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBranch = this._defaultBranch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditional | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._conditionalBranch.internalValue = undefined;
      this._defaultBranch.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._conditionalBranch.internalValue = value.conditionalBranch;
      this._defaultBranch.internalValue = value.defaultBranch;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktn.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktn.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // conditional_branch - computed: false, optional: true, required: false
  private _conditionalBranch = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranchList(this, "conditional_branch", false);
  public get conditionalBranch() {
    return this._conditionalBranch;
  }
  public putConditionalBranch(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalConditionalBranch[] | cdktn.IResolvable) {
    this._conditionalBranch.internalValue = value;
  }
  public resetConditionalBranch() {
    this._conditionalBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalBranchInput() {
    return this._conditionalBranch.internalValue;
  }

  // default_branch - computed: false, optional: true, required: false
  private _defaultBranch = new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranchList(this, "default_branch", false);
  public get defaultBranch() {
    return this._defaultBranch;
  }
  public putDefaultBranch(value: Lexv2ModelsIntentConfirmationSettingDeclinationConditionalDefaultBranch[] | cdktn.IResolvable) {
    this._defaultBranch.internalValue = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch.internalValue;
  }
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationConditionalList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationConditional[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationConditionalOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationConditionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktn.IResolvable): any {
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


export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentConfirmationSettingDeclinationNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationNextStep[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationNextStepOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingDeclinationResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingDeclinationResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentConfirmationSettingDeclinationResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingDeclinationResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingDeclinationResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingDeclinationResponse[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingDeclinationResponseOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingDeclinationResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingElicitationCodeHook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#enable_code_hook_invocation Lexv2ModelsIntent#enable_code_hook_invocation}
  */
  readonly enableCodeHookInvocation?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#invocation_label Lexv2ModelsIntent#invocation_label}
  */
  readonly invocationLabel?: string;
}

export function lexv2ModelsIntentConfirmationSettingElicitationCodeHookToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_code_hook_invocation: cdktn.booleanToTerraform(struct!.enableCodeHookInvocation),
    invocation_label: cdktn.stringToTerraform(struct!.invocationLabel),
  }
}


export function lexv2ModelsIntentConfirmationSettingElicitationCodeHookToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_code_hook_invocation: {
      value: cdktn.booleanToHclTerraform(struct!.enableCodeHookInvocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invocation_label: {
      value: cdktn.stringToHclTerraform(struct!.invocationLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingElicitationCodeHookOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCodeHookInvocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCodeHookInvocation = this._enableCodeHookInvocation;
    }
    if (this._invocationLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationLabel = this._invocationLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingElicitationCodeHook | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableCodeHookInvocation = undefined;
      this._invocationLabel = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableCodeHookInvocation = value.enableCodeHookInvocation;
      this._invocationLabel = value.invocationLabel;
    }
  }

  // enable_code_hook_invocation - computed: false, optional: true, required: false
  private _enableCodeHookInvocation?: boolean | cdktn.IResolvable; 
  public get enableCodeHookInvocation() {
    return this.getBooleanAttribute('enable_code_hook_invocation');
  }
  public set enableCodeHookInvocation(value: boolean | cdktn.IResolvable) {
    this._enableCodeHookInvocation = value;
  }
  public resetEnableCodeHookInvocation() {
    this._enableCodeHookInvocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCodeHookInvocationInput() {
    return this._enableCodeHookInvocation;
  }

  // invocation_label - computed: false, optional: true, required: false
  private _invocationLabel?: string; 
  public get invocationLabel() {
    return this.getStringAttribute('invocation_label');
  }
  public set invocationLabel(value: string) {
    this._invocationLabel = value;
  }
  public resetInvocationLabel() {
    this._invocationLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationLabelInput() {
    return this._invocationLabel;
  }
}

export class Lexv2ModelsIntentConfirmationSettingElicitationCodeHookList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingElicitationCodeHook[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingElicitationCodeHookOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingElicitationCodeHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
  */
  readonly expressionString: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression_string: cdktn.stringToTerraform(struct!.expressionString),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression_string: {
      value: cdktn.stringToHclTerraform(struct!.expressionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionString = this._expressionString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionString = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionString = value.expressionString;
    }
  }

  // expression_string - computed: false, optional: false, required: true
  private _expressionString?: string; 
  public get expressionString() {
    return this.getStringAttribute('expression_string');
  }
  public set expressionString(value: string) {
    this._expressionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionStringInput() {
    return this._expressionString;
  }
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable): any {
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


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
  */
  readonly condition?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition[] | cdktn.IResolvable;
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep[] | cdktn.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    condition: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionToTerraform, true)(struct!.condition),
    next_step: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktn.IResolvable): any {
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
    condition: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionList",
    },
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepList",
    },
    response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._nextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextStep = this._nextStep?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._condition.internalValue = undefined;
      this._nextStep.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._condition.internalValue = value.condition;
      this._nextStep.internalValue = value.nextStep;
      this._response.internalValue = value.response;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // next_step - computed: false, optional: true, required: false
  private _nextStep = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchNextStep[] | cdktn.IResolvable) {
    this._nextStep.internalValue = value;
  }
  public resetNextStep() {
    this._nextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextStepInput() {
    return this._nextStep.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchResponse[] | cdktn.IResolvable) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranch[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalConditionalBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
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


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStep[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

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
  public get(index: number): Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentConfirmationSettingFailureConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
