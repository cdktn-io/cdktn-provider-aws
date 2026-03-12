/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepList,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseToTerraform,
lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseToHclTerraform,
Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseList } from './structs2800'
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
  */
  readonly condition?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition[] | cdktn.IResolvable;
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep[] | cdktn.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    condition: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionToTerraform, true)(struct!.condition),
    next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionList",
    },
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepList",
    },
    response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch | cdktn.IResolvable | undefined) {
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
  private _condition = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition[] | cdktn.IResolvable) {
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
  private _nextStep = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep[] | cdktn.IResolvable) {
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
  private _response = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponse[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktn.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktn.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch {
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep[] | cdktn.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepList",
    },
    response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch | cdktn.IResolvable | undefined) {
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
  private _nextStep = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchNextStep[] | cdktn.IResolvable) {
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
  private _response = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchResponse[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
  */
  readonly active: boolean | cdktn.IResolvable;
  /**
  * conditional_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#conditional_branch Lexv2ModelsIntent#conditional_branch}
  */
  readonly conditionalBranch?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch[] | cdktn.IResolvable;
  /**
  * default_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#default_branch Lexv2ModelsIntent#default_branch}
  */
  readonly defaultBranch?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktn.booleanToTerraform(struct!.active),
    conditional_branch: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchToTerraform, true)(struct!.conditionalBranch),
    default_branch: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchToTerraform, true)(struct!.defaultBranch),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktn.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditional_branch: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchToHclTerraform, true)(struct!.conditionalBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchList",
    },
    default_branch: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchToHclTerraform, true)(struct!.defaultBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional | cdktn.IResolvable | undefined) {
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
  private _conditionalBranch = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchList(this, "conditional_branch", false);
  public get conditionalBranch() {
    return this._conditionalBranch;
  }
  public putConditionalBranch(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranch[] | cdktn.IResolvable) {
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
  private _defaultBranch = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranchList(this, "default_branch", false);
  public get defaultBranch() {
    return this._defaultBranch;
  }
  public putDefaultBranch(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalDefaultBranch[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktn.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktn.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification {
  /**
  * failure_conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#failure_conditional Lexv2ModelsIntent#failure_conditional}
  */
  readonly failureConditional?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional[] | cdktn.IResolvable;
  /**
  * failure_next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#failure_next_step Lexv2ModelsIntent#failure_next_step}
  */
  readonly failureNextStep?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep[] | cdktn.IResolvable;
  /**
  * failure_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#failure_response Lexv2ModelsIntent#failure_response}
  */
  readonly failureResponse?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse[] | cdktn.IResolvable;
  /**
  * success_conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#success_conditional Lexv2ModelsIntent#success_conditional}
  */
  readonly successConditional?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional[] | cdktn.IResolvable;
  /**
  * success_next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#success_next_step Lexv2ModelsIntent#success_next_step}
  */
  readonly successNextStep?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep[] | cdktn.IResolvable;
  /**
  * success_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#success_response Lexv2ModelsIntent#success_response}
  */
  readonly successResponse?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse[] | cdktn.IResolvable;
  /**
  * timeout_conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#timeout_conditional Lexv2ModelsIntent#timeout_conditional}
  */
  readonly timeoutConditional?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional[] | cdktn.IResolvable;
  /**
  * timeout_next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#timeout_next_step Lexv2ModelsIntent#timeout_next_step}
  */
  readonly timeoutNextStep?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep[] | cdktn.IResolvable;
  /**
  * timeout_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#timeout_response Lexv2ModelsIntent#timeout_response}
  */
  readonly timeoutResponse?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_conditional: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalToTerraform, true)(struct!.failureConditional),
    failure_next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepToTerraform, true)(struct!.failureNextStep),
    failure_response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseToTerraform, true)(struct!.failureResponse),
    success_conditional: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalToTerraform, true)(struct!.successConditional),
    success_next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepToTerraform, true)(struct!.successNextStep),
    success_response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseToTerraform, true)(struct!.successResponse),
    timeout_conditional: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalToTerraform, true)(struct!.timeoutConditional),
    timeout_next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepToTerraform, true)(struct!.timeoutNextStep),
    timeout_response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseToTerraform, true)(struct!.timeoutResponse),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_conditional: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalToHclTerraform, true)(struct!.failureConditional),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalList",
    },
    failure_next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepToHclTerraform, true)(struct!.failureNextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepList",
    },
    failure_response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseToHclTerraform, true)(struct!.failureResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseList",
    },
    success_conditional: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalToHclTerraform, true)(struct!.successConditional),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalList",
    },
    success_next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepToHclTerraform, true)(struct!.successNextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepList",
    },
    success_response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseToHclTerraform, true)(struct!.successResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseList",
    },
    timeout_conditional: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalToHclTerraform, true)(struct!.timeoutConditional),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalList",
    },
    timeout_next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepToHclTerraform, true)(struct!.timeoutNextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepList",
    },
    timeout_response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseToHclTerraform, true)(struct!.timeoutResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureConditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureConditional = this._failureConditional?.internalValue;
    }
    if (this._failureNextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureNextStep = this._failureNextStep?.internalValue;
    }
    if (this._failureResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureResponse = this._failureResponse?.internalValue;
    }
    if (this._successConditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successConditional = this._successConditional?.internalValue;
    }
    if (this._successNextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successNextStep = this._successNextStep?.internalValue;
    }
    if (this._successResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successResponse = this._successResponse?.internalValue;
    }
    if (this._timeoutConditional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutConditional = this._timeoutConditional?.internalValue;
    }
    if (this._timeoutNextStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutNextStep = this._timeoutNextStep?.internalValue;
    }
    if (this._timeoutResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutResponse = this._timeoutResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureConditional.internalValue = undefined;
      this._failureNextStep.internalValue = undefined;
      this._failureResponse.internalValue = undefined;
      this._successConditional.internalValue = undefined;
      this._successNextStep.internalValue = undefined;
      this._successResponse.internalValue = undefined;
      this._timeoutConditional.internalValue = undefined;
      this._timeoutNextStep.internalValue = undefined;
      this._timeoutResponse.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureConditional.internalValue = value.failureConditional;
      this._failureNextStep.internalValue = value.failureNextStep;
      this._failureResponse.internalValue = value.failureResponse;
      this._successConditional.internalValue = value.successConditional;
      this._successNextStep.internalValue = value.successNextStep;
      this._successResponse.internalValue = value.successResponse;
      this._timeoutConditional.internalValue = value.timeoutConditional;
      this._timeoutNextStep.internalValue = value.timeoutNextStep;
      this._timeoutResponse.internalValue = value.timeoutResponse;
    }
  }

  // failure_conditional - computed: false, optional: true, required: false
  private _failureConditional = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditionalList(this, "failure_conditional", false);
  public get failureConditional() {
    return this._failureConditional;
  }
  public putFailureConditional(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureConditional[] | cdktn.IResolvable) {
    this._failureConditional.internalValue = value;
  }
  public resetFailureConditional() {
    this._failureConditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionalInput() {
    return this._failureConditional.internalValue;
  }

  // failure_next_step - computed: false, optional: true, required: false
  private _failureNextStep = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStepList(this, "failure_next_step", false);
  public get failureNextStep() {
    return this._failureNextStep;
  }
  public putFailureNextStep(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureNextStep[] | cdktn.IResolvable) {
    this._failureNextStep.internalValue = value;
  }
  public resetFailureNextStep() {
    this._failureNextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureNextStepInput() {
    return this._failureNextStep.internalValue;
  }

  // failure_response - computed: false, optional: true, required: false
  private _failureResponse = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponseList(this, "failure_response", false);
  public get failureResponse() {
    return this._failureResponse;
  }
  public putFailureResponse(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationFailureResponse[] | cdktn.IResolvable) {
    this._failureResponse.internalValue = value;
  }
  public resetFailureResponse() {
    this._failureResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureResponseInput() {
    return this._failureResponse.internalValue;
  }

  // success_conditional - computed: false, optional: true, required: false
  private _successConditional = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalList(this, "success_conditional", false);
  public get successConditional() {
    return this._successConditional;
  }
  public putSuccessConditional(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditional[] | cdktn.IResolvable) {
    this._successConditional.internalValue = value;
  }
  public resetSuccessConditional() {
    this._successConditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionalInput() {
    return this._successConditional.internalValue;
  }

  // success_next_step - computed: false, optional: true, required: false
  private _successNextStep = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStepList(this, "success_next_step", false);
  public get successNextStep() {
    return this._successNextStep;
  }
  public putSuccessNextStep(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessNextStep[] | cdktn.IResolvable) {
    this._successNextStep.internalValue = value;
  }
  public resetSuccessNextStep() {
    this._successNextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successNextStepInput() {
    return this._successNextStep.internalValue;
  }

  // success_response - computed: false, optional: true, required: false
  private _successResponse = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponseList(this, "success_response", false);
  public get successResponse() {
    return this._successResponse;
  }
  public putSuccessResponse(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessResponse[] | cdktn.IResolvable) {
    this._successResponse.internalValue = value;
  }
  public resetSuccessResponse() {
    this._successResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successResponseInput() {
    return this._successResponse.internalValue;
  }

  // timeout_conditional - computed: false, optional: true, required: false
  private _timeoutConditional = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditionalList(this, "timeout_conditional", false);
  public get timeoutConditional() {
    return this._timeoutConditional;
  }
  public putTimeoutConditional(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutConditional[] | cdktn.IResolvable) {
    this._timeoutConditional.internalValue = value;
  }
  public resetTimeoutConditional() {
    this._timeoutConditional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutConditionalInput() {
    return this._timeoutConditional.internalValue;
  }

  // timeout_next_step - computed: false, optional: true, required: false
  private _timeoutNextStep = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStepList(this, "timeout_next_step", false);
  public get timeoutNextStep() {
    return this._timeoutNextStep;
  }
  public putTimeoutNextStep(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutNextStep[] | cdktn.IResolvable) {
    this._timeoutNextStep.internalValue = value;
  }
  public resetTimeoutNextStep() {
    this._timeoutNextStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutNextStepInput() {
    return this._timeoutNextStep.internalValue;
  }

  // timeout_response - computed: false, optional: true, required: false
  private _timeoutResponse = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponseList(this, "timeout_response", false);
  public get timeoutResponse() {
    return this._timeoutResponse;
  }
  public putTimeoutResponse(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationTimeoutResponse[] | cdktn.IResolvable) {
    this._timeoutResponse.internalValue = value;
  }
  public resetTimeoutResponse() {
    this._timeoutResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutResponseInput() {
    return this._timeoutResponse.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingCodeHook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
  */
  readonly active: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#enable_code_hook_invocation Lexv2ModelsIntent#enable_code_hook_invocation}
  */
  readonly enableCodeHookInvocation: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#invocation_label Lexv2ModelsIntent#invocation_label}
  */
  readonly invocationLabel?: string;
  /**
  * post_code_hook_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#post_code_hook_specification Lexv2ModelsIntent#post_code_hook_specification}
  */
  readonly postCodeHookSpecification?: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingCodeHookToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktn.booleanToTerraform(struct!.active),
    enable_code_hook_invocation: cdktn.booleanToTerraform(struct!.enableCodeHookInvocation),
    invocation_label: cdktn.stringToTerraform(struct!.invocationLabel),
    post_code_hook_specification: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationToTerraform, true)(struct!.postCodeHookSpecification),
  }
}


export function lexv2ModelsIntentInitialResponseSettingCodeHookToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingCodeHook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktn.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    post_code_hook_specification: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationToHclTerraform, true)(struct!.postCodeHookSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingCodeHook | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._enableCodeHookInvocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCodeHookInvocation = this._enableCodeHookInvocation;
    }
    if (this._invocationLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationLabel = this._invocationLabel;
    }
    if (this._postCodeHookSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postCodeHookSpecification = this._postCodeHookSpecification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingCodeHook | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._enableCodeHookInvocation = undefined;
      this._invocationLabel = undefined;
      this._postCodeHookSpecification.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._enableCodeHookInvocation = value.enableCodeHookInvocation;
      this._invocationLabel = value.invocationLabel;
      this._postCodeHookSpecification.internalValue = value.postCodeHookSpecification;
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

  // enable_code_hook_invocation - computed: false, optional: false, required: true
  private _enableCodeHookInvocation?: boolean | cdktn.IResolvable; 
  public get enableCodeHookInvocation() {
    return this.getBooleanAttribute('enable_code_hook_invocation');
  }
  public set enableCodeHookInvocation(value: boolean | cdktn.IResolvable) {
    this._enableCodeHookInvocation = value;
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

  // post_code_hook_specification - computed: false, optional: true, required: false
  private _postCodeHookSpecification = new Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationList(this, "post_code_hook_specification", false);
  public get postCodeHookSpecification() {
    return this._postCodeHookSpecification;
  }
  public putPostCodeHookSpecification(value: Lexv2ModelsIntentInitialResponseSettingCodeHookPostCodeHookSpecification[] | cdktn.IResolvable) {
    this._postCodeHookSpecification.internalValue = value;
  }
  public resetPostCodeHookSpecification() {
    this._postCodeHookSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCodeHookSpecificationInput() {
    return this._postCodeHookSpecification.internalValue;
  }
}

export class Lexv2ModelsIntentInitialResponseSettingCodeHookList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingCodeHook[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingCodeHookOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingCodeHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
  */
  readonly expressionString: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_string: cdktn.stringToTerraform(struct!.expressionString),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktn.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktn.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
  */
  readonly condition?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition[] | cdktn.IResolvable;
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep[] | cdktn.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    condition: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionToTerraform, true)(struct!.condition),
    next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionList",
    },
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepList",
    },
    response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch | cdktn.IResolvable | undefined) {
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
  private _condition = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchCondition[] | cdktn.IResolvable) {
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
  private _nextStep = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchNextStep[] | cdktn.IResolvable) {
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
  private _response = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchResponse[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
  */
  readonly slotToElicit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
  */
  readonly suppressNextMessage?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
  */
  readonly type: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slot_to_elicit: cdktn.stringToTerraform(struct!.slotToElicit),
    suppress_next_message: cdktn.booleanToTerraform(struct!.suppressNextMessage),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
  */
  readonly interpretedValue?: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interpreted_value: cdktn.stringToTerraform(struct!.interpretedValue),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
  */
  readonly mapBlockKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
  */
  readonly shape?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map_block_key: cdktn.stringToTerraform(struct!.mapBlockKey),
    shape: cdktn.stringToTerraform(struct!.shape),
    value: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueToTerraform, true)(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot | cdktn.IResolvable | undefined) {
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
  private _value = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotValue[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
  */
  readonly name?: string;
  /**
  * slot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
  */
  readonly slot?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    slot: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotToTerraform, true)(struct!.slot),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotToHclTerraform, true)(struct!.slot),
      isBlock: true,
      type: "set",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent | cdktn.IResolvable | undefined) {
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
  private _slot = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlotList(this, "slot", true);
  public get slot() {
    return this._slot;
  }
  public putSlot(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentSlot[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
  */
  readonly sessionAttributes?: { [key: string]: string };
  /**
  * dialog_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
  */
  readonly dialogAction?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
  */
  readonly intent?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sessionAttributes),
    dialog_action: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionToTerraform, true)(struct!.dialogAction),
    intent: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentToTerraform, true)(struct!.intent),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sessionAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dialog_action: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionToHclTerraform, true)(struct!.dialogAction),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionList",
    },
    intent: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentToHclTerraform, true)(struct!.intent),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep | cdktn.IResolvable | undefined) {
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
  private _dialogAction = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogActionList(this, "dialog_action", false);
  public get dialogAction() {
    return this._dialogAction;
  }
  public putDialogAction(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepDialogAction[] | cdktn.IResolvable) {
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
  private _intent = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntentList(this, "intent", false);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepIntent[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup {
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
  */
  readonly message?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable;
  /**
  * variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
  */
  readonly variation?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageToTerraform, true)(struct!.message),
    variation: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationToTerraform, true)(struct!.variation),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageList",
    },
    variation: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform, true)(struct!.variation),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup | cdktn.IResolvable | undefined) {
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
  private _message = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessageList(this, "message", false);
  public get message() {
    return this._message;
  }
  public putMessage(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupMessage[] | cdktn.IResolvable) {
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
  private _variation = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariationList(this, "variation", false);
  public get variation() {
    return this._variation;
  }
  public putVariation(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupVariation[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
  */
  readonly allowInterrupt?: boolean | cdktn.IResolvable;
  /**
  * message_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
  */
  readonly messageGroup?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_interrupt: cdktn.booleanToTerraform(struct!.allowInterrupt),
    message_group: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupToTerraform, true)(struct!.messageGroup),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_interrupt: {
      value: cdktn.booleanToHclTerraform(struct!.allowInterrupt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_group: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupToHclTerraform, true)(struct!.messageGroup),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse | cdktn.IResolvable | undefined) {
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
  private _messageGroup = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroupList(this, "message_group", false);
  public get messageGroup() {
    return this._messageGroup;
  }
  public putMessageGroup(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseMessageGroup[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch {
  /**
  * next_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
  */
  readonly nextStep?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep[] | cdktn.IResolvable;
  /**
  * response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
  */
  readonly response?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_step: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepToTerraform, true)(struct!.nextStep),
    response: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseToTerraform, true)(struct!.response),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_step: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepToHclTerraform, true)(struct!.nextStep),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepList",
    },
    response: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseToHclTerraform, true)(struct!.response),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch | cdktn.IResolvable | undefined) {
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
  private _nextStep = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStepList(this, "next_step", false);
  public get nextStep() {
    return this._nextStep;
  }
  public putNextStep(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchNextStep[] | cdktn.IResolvable) {
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
  private _response = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponseList(this, "response", false);
  public get response() {
    return this._response;
  }
  public putResponse(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchResponse[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingConditional {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
  */
  readonly active: boolean | cdktn.IResolvable;
  /**
  * conditional_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#conditional_branch Lexv2ModelsIntent#conditional_branch}
  */
  readonly conditionalBranch?: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch[] | cdktn.IResolvable;
  /**
  * default_branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#default_branch Lexv2ModelsIntent#default_branch}
  */
  readonly defaultBranch?: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingConditionalToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktn.booleanToTerraform(struct!.active),
    conditional_branch: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchToTerraform, true)(struct!.conditionalBranch),
    default_branch: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchToTerraform, true)(struct!.defaultBranch),
  }
}


export function lexv2ModelsIntentInitialResponseSettingConditionalToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingConditional | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktn.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conditional_branch: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchToHclTerraform, true)(struct!.conditionalBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchList",
    },
    default_branch: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchToHclTerraform, true)(struct!.defaultBranch),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingConditionalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingConditional | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingConditional | cdktn.IResolvable | undefined) {
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
  private _conditionalBranch = new Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranchList(this, "conditional_branch", false);
  public get conditionalBranch() {
    return this._conditionalBranch;
  }
  public putConditionalBranch(value: Lexv2ModelsIntentInitialResponseSettingConditionalConditionalBranch[] | cdktn.IResolvable) {
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
  private _defaultBranch = new Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranchList(this, "default_branch", false);
  public get defaultBranch() {
    return this._defaultBranch;
  }
  public putDefaultBranch(value: Lexv2ModelsIntentInitialResponseSettingConditionalDefaultBranch[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingConditionalList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingConditional[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingConditionalOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingConditionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
  */
  readonly text: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktn.stringToTerraform(struct!.text),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
  */
  readonly title: string;
  /**
  * button block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
  */
  readonly button?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_url: cdktn.stringToTerraform(struct!.imageUrl),
    subtitle: cdktn.stringToTerraform(struct!.subtitle),
    title: cdktn.stringToTerraform(struct!.title),
    button: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonToTerraform, true)(struct!.button),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonToHclTerraform, true)(struct!.button),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard | cdktn.IResolvable | undefined) {
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
  private _button = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButtonList(this, "button", false);
  public get button() {
    return this._button;
  }
  public putButton(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardButton[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
  */
  readonly value: string;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage | cdktn.IResolvable | undefined) {
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage {
  /**
  * custom_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
  */
  readonly customPayload?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable;
  /**
  * image_response_card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
  */
  readonly imageResponseCard?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable;
  /**
  * plain_text_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
  */
  readonly plainTextMessage?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable;
  /**
  * ssml_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.36.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
  */
  readonly ssmlMessage?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable;
}

export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_payload: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadToTerraform, true)(struct!.customPayload),
    image_response_card: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardToTerraform, true)(struct!.imageResponseCard),
    plain_text_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageToTerraform, true)(struct!.plainTextMessage),
    ssml_message: cdktn.listMapper(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageToTerraform, true)(struct!.ssmlMessage),
  }
}


export function lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_payload: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadToHclTerraform, true)(struct!.customPayload),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadList",
    },
    image_response_card: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardToHclTerraform, true)(struct!.imageResponseCard),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardList",
    },
    plain_text_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageToHclTerraform, true)(struct!.plainTextMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageList",
    },
    ssml_message: {
      value: cdktn.listMapperHcl(lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageToHclTerraform, true)(struct!.ssmlMessage),
      isBlock: true,
      type: "list",
      storageClassType: "Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage | cdktn.IResolvable | undefined) {
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
  private _customPayload = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayloadList(this, "custom_payload", false);
  public get customPayload() {
    return this._customPayload;
  }
  public putCustomPayload(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageCustomPayload[] | cdktn.IResolvable) {
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
  private _imageResponseCard = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCardList(this, "image_response_card", false);
  public get imageResponseCard() {
    return this._imageResponseCard;
  }
  public putImageResponseCard(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageImageResponseCard[] | cdktn.IResolvable) {
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
  private _plainTextMessage = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessageList(this, "plain_text_message", false);
  public get plainTextMessage() {
    return this._plainTextMessage;
  }
  public putPlainTextMessage(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessagePlainTextMessage[] | cdktn.IResolvable) {
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
  private _ssmlMessage = new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessageList(this, "ssml_message", false);
  public get ssmlMessage() {
    return this._ssmlMessage;
  }
  public putSsmlMessage(value: Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageSsmlMessage[] | cdktn.IResolvable) {
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

export class Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageList extends cdktn.ComplexList {
  public internalValue? : Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageOutputReference {
    return new Lexv2ModelsIntentInitialResponseSettingInitialResponseMessageGroupMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
