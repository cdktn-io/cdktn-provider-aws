/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LexBotConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#child_directed LexBot#child_directed}
  */
  readonly childDirected: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#create_version LexBot#create_version}
  */
  readonly createVersion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#description LexBot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#detect_sentiment LexBot#detect_sentiment}
  */
  readonly detectSentiment?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#enable_model_improvements LexBot#enable_model_improvements}
  */
  readonly enableModelImprovements?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#id LexBot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}
  */
  readonly idleSessionTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#locale LexBot#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#name LexBot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}
  */
  readonly nluIntentConfidenceThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#process_behavior LexBot#process_behavior}
  */
  readonly processBehavior?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#region LexBot#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#voice_id LexBot#voice_id}
  */
  readonly voiceId?: string;
  /**
  * abort_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#abort_statement LexBot#abort_statement}
  */
  readonly abortStatement: LexBotAbortStatement;
  /**
  * clarification_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#clarification_prompt LexBot#clarification_prompt}
  */
  readonly clarificationPrompt?: LexBotClarificationPrompt;
  /**
  * intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#intent LexBot#intent}
  */
  readonly intent: LexBotIntent[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#timeouts LexBot#timeouts}
  */
  readonly timeouts?: LexBotTimeouts;
}
export interface LexBotAbortStatementMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#content LexBot#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#content_type LexBot#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#group_number LexBot#group_number}
  */
  readonly groupNumber?: number;
}

export function lexBotAbortStatementMessageToTerraform(struct?: LexBotAbortStatementMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function lexBotAbortStatementMessageToHclTerraform(struct?: LexBotAbortStatementMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotAbortStatementMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotAbortStatementMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotAbortStatementMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexBotAbortStatementMessageList extends cdktn.ComplexList {
  public internalValue? : LexBotAbortStatementMessage[] | cdktn.IResolvable

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
  public get(index: number): LexBotAbortStatementMessageOutputReference {
    return new LexBotAbortStatementMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotAbortStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#response_card LexBot#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#message LexBot#message}
  */
  readonly message: LexBotAbortStatementMessage[] | cdktn.IResolvable;
}

export function lexBotAbortStatementToTerraform(struct?: LexBotAbortStatementOutputReference | LexBotAbortStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(lexBotAbortStatementMessageToTerraform, true)(struct!.message),
  }
}


export function lexBotAbortStatementToHclTerraform(struct?: LexBotAbortStatementOutputReference | LexBotAbortStatement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(lexBotAbortStatementMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotAbortStatementMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotAbortStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexBotAbortStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotAbortStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new LexBotAbortStatementMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexBotAbortStatementMessage[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexBotClarificationPromptMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#content LexBot#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#content_type LexBot#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#group_number LexBot#group_number}
  */
  readonly groupNumber?: number;
}

export function lexBotClarificationPromptMessageToTerraform(struct?: LexBotClarificationPromptMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
    group_number: cdktn.numberToTerraform(struct!.groupNumber),
  }
}


export function lexBotClarificationPromptMessageToHclTerraform(struct?: LexBotClarificationPromptMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_number: {
      value: cdktn.numberToHclTerraform(struct!.groupNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotClarificationPromptMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotClarificationPromptMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._groupNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNumber = this._groupNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotClarificationPromptMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._groupNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._groupNumber = value.groupNumber;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // group_number - computed: false, optional: true, required: false
  private _groupNumber?: number; 
  public get groupNumber() {
    return this.getNumberAttribute('group_number');
  }
  public set groupNumber(value: number) {
    this._groupNumber = value;
  }
  public resetGroupNumber() {
    this._groupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNumberInput() {
    return this._groupNumber;
  }
}

export class LexBotClarificationPromptMessageList extends cdktn.ComplexList {
  public internalValue? : LexBotClarificationPromptMessage[] | cdktn.IResolvable

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
  public get(index: number): LexBotClarificationPromptMessageOutputReference {
    return new LexBotClarificationPromptMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotClarificationPrompt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#max_attempts LexBot#max_attempts}
  */
  readonly maxAttempts: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#response_card LexBot#response_card}
  */
  readonly responseCard?: string;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#message LexBot#message}
  */
  readonly message: LexBotClarificationPromptMessage[] | cdktn.IResolvable;
}

export function lexBotClarificationPromptToTerraform(struct?: LexBotClarificationPromptOutputReference | LexBotClarificationPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktn.numberToTerraform(struct!.maxAttempts),
    response_card: cdktn.stringToTerraform(struct!.responseCard),
    message: cdktn.listMapper(lexBotClarificationPromptMessageToTerraform, true)(struct!.message),
  }
}


export function lexBotClarificationPromptToHclTerraform(struct?: LexBotClarificationPromptOutputReference | LexBotClarificationPrompt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_card: {
      value: cdktn.stringToHclTerraform(struct!.responseCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.listMapperHcl(lexBotClarificationPromptMessageToHclTerraform, true)(struct!.message),
      isBlock: true,
      type: "set",
      storageClassType: "LexBotClarificationPromptMessageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotClarificationPromptOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LexBotClarificationPrompt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._responseCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCard = this._responseCard;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotClarificationPrompt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._responseCard = undefined;
      this._message.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._responseCard = value.responseCard;
      this._message.internalValue = value.message;
    }
  }

  // max_attempts - computed: false, optional: false, required: true
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // response_card - computed: false, optional: true, required: false
  private _responseCard?: string; 
  public get responseCard() {
    return this.getStringAttribute('response_card');
  }
  public set responseCard(value: string) {
    this._responseCard = value;
  }
  public resetResponseCard() {
    this._responseCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCardInput() {
    return this._responseCard;
  }

  // message - computed: false, optional: false, required: true
  private _message = new LexBotClarificationPromptMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: LexBotClarificationPromptMessage[] | cdktn.IResolvable) {
    this._message.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface LexBotIntent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#intent_name LexBot#intent_name}
  */
  readonly intentName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#intent_version LexBot#intent_version}
  */
  readonly intentVersion: string;
}

export function lexBotIntentToTerraform(struct?: LexBotIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intent_name: cdktn.stringToTerraform(struct!.intentName),
    intent_version: cdktn.stringToTerraform(struct!.intentVersion),
  }
}


export function lexBotIntentToHclTerraform(struct?: LexBotIntent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intent_name: {
      value: cdktn.stringToHclTerraform(struct!.intentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intent_version: {
      value: cdktn.stringToHclTerraform(struct!.intentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LexBotIntentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LexBotIntent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intentName = this._intentName;
    }
    if (this._intentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.intentVersion = this._intentVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LexBotIntent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intentName = undefined;
      this._intentVersion = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intentName = value.intentName;
      this._intentVersion = value.intentVersion;
    }
  }

  // intent_name - computed: false, optional: false, required: true
  private _intentName?: string; 
  public get intentName() {
    return this.getStringAttribute('intent_name');
  }
  public set intentName(value: string) {
    this._intentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentNameInput() {
    return this._intentName;
  }

  // intent_version - computed: false, optional: false, required: true
  private _intentVersion?: string; 
  public get intentVersion() {
    return this.getStringAttribute('intent_version');
  }
  public set intentVersion(value: string) {
    this._intentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentVersionInput() {
    return this._intentVersion;
  }
}

export class LexBotIntentList extends cdktn.ComplexList {
  public internalValue? : LexBotIntent[] | cdktn.IResolvable

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
  public get(index: number): LexBotIntentOutputReference {
    return new LexBotIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LexBotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#create LexBot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#delete LexBot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#update LexBot#update}
  */
  readonly update?: string;
}

export function lexBotTimeoutsToTerraform(struct?: LexBotTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function lexBotTimeoutsToHclTerraform(struct?: LexBotTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class LexBotTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LexBotTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: LexBotTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot aws_lex_bot}
*/
export class LexBot extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lex_bot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LexBot resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LexBot to import
  * @param importFromId The id of the existing LexBot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LexBot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lex_bot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/lex_bot aws_lex_bot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LexBotConfig
  */
  public constructor(scope: Construct, id: string, config: LexBotConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lex_bot',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.47.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childDirected = config.childDirected;
    this._createVersion = config.createVersion;
    this._description = config.description;
    this._detectSentiment = config.detectSentiment;
    this._enableModelImprovements = config.enableModelImprovements;
    this._id = config.id;
    this._idleSessionTtlInSeconds = config.idleSessionTtlInSeconds;
    this._locale = config.locale;
    this._name = config.name;
    this._nluIntentConfidenceThreshold = config.nluIntentConfidenceThreshold;
    this._processBehavior = config.processBehavior;
    this._region = config.region;
    this._voiceId = config.voiceId;
    this._abortStatement.internalValue = config.abortStatement;
    this._clarificationPrompt.internalValue = config.clarificationPrompt;
    this._intent.internalValue = config.intent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // child_directed - computed: false, optional: false, required: true
  private _childDirected?: boolean | cdktn.IResolvable; 
  public get childDirected() {
    return this.getBooleanAttribute('child_directed');
  }
  public set childDirected(value: boolean | cdktn.IResolvable) {
    this._childDirected = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childDirectedInput() {
    return this._childDirected;
  }

  // create_version - computed: false, optional: true, required: false
  private _createVersion?: boolean | cdktn.IResolvable; 
  public get createVersion() {
    return this.getBooleanAttribute('create_version');
  }
  public set createVersion(value: boolean | cdktn.IResolvable) {
    this._createVersion = value;
  }
  public resetCreateVersion() {
    this._createVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVersionInput() {
    return this._createVersion;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // detect_sentiment - computed: false, optional: true, required: false
  private _detectSentiment?: boolean | cdktn.IResolvable; 
  public get detectSentiment() {
    return this.getBooleanAttribute('detect_sentiment');
  }
  public set detectSentiment(value: boolean | cdktn.IResolvable) {
    this._detectSentiment = value;
  }
  public resetDetectSentiment() {
    this._detectSentiment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectSentimentInput() {
    return this._detectSentiment;
  }

  // enable_model_improvements - computed: false, optional: true, required: false
  private _enableModelImprovements?: boolean | cdktn.IResolvable; 
  public get enableModelImprovements() {
    return this.getBooleanAttribute('enable_model_improvements');
  }
  public set enableModelImprovements(value: boolean | cdktn.IResolvable) {
    this._enableModelImprovements = value;
  }
  public resetEnableModelImprovements() {
    this._enableModelImprovements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableModelImprovementsInput() {
    return this._enableModelImprovements;
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idle_session_ttl_in_seconds - computed: false, optional: true, required: false
  private _idleSessionTtlInSeconds?: number; 
  public get idleSessionTtlInSeconds() {
    return this.getNumberAttribute('idle_session_ttl_in_seconds');
  }
  public set idleSessionTtlInSeconds(value: number) {
    this._idleSessionTtlInSeconds = value;
  }
  public resetIdleSessionTtlInSeconds() {
    this._idleSessionTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTtlInSecondsInput() {
    return this._idleSessionTtlInSeconds;
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
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

  // nlu_intent_confidence_threshold - computed: false, optional: true, required: false
  private _nluIntentConfidenceThreshold?: number; 
  public get nluIntentConfidenceThreshold() {
    return this.getNumberAttribute('nlu_intent_confidence_threshold');
  }
  public set nluIntentConfidenceThreshold(value: number) {
    this._nluIntentConfidenceThreshold = value;
  }
  public resetNluIntentConfidenceThreshold() {
    this._nluIntentConfidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nluIntentConfidenceThresholdInput() {
    return this._nluIntentConfidenceThreshold;
  }

  // process_behavior - computed: false, optional: true, required: false
  private _processBehavior?: string; 
  public get processBehavior() {
    return this.getStringAttribute('process_behavior');
  }
  public set processBehavior(value: string) {
    this._processBehavior = value;
  }
  public resetProcessBehavior() {
    this._processBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processBehaviorInput() {
    return this._processBehavior;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // voice_id - computed: true, optional: true, required: false
  private _voiceId?: string; 
  public get voiceId() {
    return this.getStringAttribute('voice_id');
  }
  public set voiceId(value: string) {
    this._voiceId = value;
  }
  public resetVoiceId() {
    this._voiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceIdInput() {
    return this._voiceId;
  }

  // abort_statement - computed: false, optional: false, required: true
  private _abortStatement = new LexBotAbortStatementOutputReference(this, "abort_statement");
  public get abortStatement() {
    return this._abortStatement;
  }
  public putAbortStatement(value: LexBotAbortStatement) {
    this._abortStatement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get abortStatementInput() {
    return this._abortStatement.internalValue;
  }

  // clarification_prompt - computed: false, optional: true, required: false
  private _clarificationPrompt = new LexBotClarificationPromptOutputReference(this, "clarification_prompt");
  public get clarificationPrompt() {
    return this._clarificationPrompt;
  }
  public putClarificationPrompt(value: LexBotClarificationPrompt) {
    this._clarificationPrompt.internalValue = value;
  }
  public resetClarificationPrompt() {
    this._clarificationPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clarificationPromptInput() {
    return this._clarificationPrompt.internalValue;
  }

  // intent - computed: false, optional: false, required: true
  private _intent = new LexBotIntentList(this, "intent", true);
  public get intent() {
    return this._intent;
  }
  public putIntent(value: LexBotIntent[] | cdktn.IResolvable) {
    this._intent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intentInput() {
    return this._intent.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LexBotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LexBotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      child_directed: cdktn.booleanToTerraform(this._childDirected),
      create_version: cdktn.booleanToTerraform(this._createVersion),
      description: cdktn.stringToTerraform(this._description),
      detect_sentiment: cdktn.booleanToTerraform(this._detectSentiment),
      enable_model_improvements: cdktn.booleanToTerraform(this._enableModelImprovements),
      id: cdktn.stringToTerraform(this._id),
      idle_session_ttl_in_seconds: cdktn.numberToTerraform(this._idleSessionTtlInSeconds),
      locale: cdktn.stringToTerraform(this._locale),
      name: cdktn.stringToTerraform(this._name),
      nlu_intent_confidence_threshold: cdktn.numberToTerraform(this._nluIntentConfidenceThreshold),
      process_behavior: cdktn.stringToTerraform(this._processBehavior),
      region: cdktn.stringToTerraform(this._region),
      voice_id: cdktn.stringToTerraform(this._voiceId),
      abort_statement: lexBotAbortStatementToTerraform(this._abortStatement.internalValue),
      clarification_prompt: lexBotClarificationPromptToTerraform(this._clarificationPrompt.internalValue),
      intent: cdktn.listMapper(lexBotIntentToTerraform, true)(this._intent.internalValue),
      timeouts: lexBotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_directed: {
        value: cdktn.booleanToHclTerraform(this._childDirected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_version: {
        value: cdktn.booleanToHclTerraform(this._createVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_sentiment: {
        value: cdktn.booleanToHclTerraform(this._detectSentiment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_model_improvements: {
        value: cdktn.booleanToHclTerraform(this._enableModelImprovements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_session_ttl_in_seconds: {
        value: cdktn.numberToHclTerraform(this._idleSessionTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      locale: {
        value: cdktn.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nlu_intent_confidence_threshold: {
        value: cdktn.numberToHclTerraform(this._nluIntentConfidenceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_behavior: {
        value: cdktn.stringToHclTerraform(this._processBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_id: {
        value: cdktn.stringToHclTerraform(this._voiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      abort_statement: {
        value: lexBotAbortStatementToHclTerraform(this._abortStatement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LexBotAbortStatementList",
      },
      clarification_prompt: {
        value: lexBotClarificationPromptToHclTerraform(this._clarificationPrompt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LexBotClarificationPromptList",
      },
      intent: {
        value: cdktn.listMapperHcl(lexBotIntentToHclTerraform, true)(this._intent.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LexBotIntentList",
      },
      timeouts: {
        value: lexBotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LexBotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
