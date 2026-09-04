/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MailmanagerRuleSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#name MailmanagerRuleSet#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#region MailmanagerRuleSet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#tags MailmanagerRuleSet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#rule MailmanagerRuleSet#rule}
  */
  readonly rule?: MailmanagerRuleSetRule[] | cdktn.IResolvable;
}
export interface MailmanagerRuleSetRuleActionAddHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#header_name MailmanagerRuleSet#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#header_value MailmanagerRuleSet#header_value}
  */
  readonly headerValue: string;
}

export function mailmanagerRuleSetRuleActionAddHeaderToTerraform(struct?: MailmanagerRuleSetRuleActionAddHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
  }
}


export function mailmanagerRuleSetRuleActionAddHeaderToHclTerraform(struct?: MailmanagerRuleSetRuleActionAddHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionAddHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionAddHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionAddHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class MailmanagerRuleSetRuleActionAddHeaderList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionAddHeader[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionAddHeaderOutputReference {
    return new MailmanagerRuleSetRuleActionAddHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionArchive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#target_archive MailmanagerRuleSet#target_archive}
  */
  readonly targetArchive: string;
}

export function mailmanagerRuleSetRuleActionArchiveToTerraform(struct?: MailmanagerRuleSetRuleActionArchive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    target_archive: cdktn.stringToTerraform(struct!.targetArchive),
  }
}


export function mailmanagerRuleSetRuleActionArchiveToHclTerraform(struct?: MailmanagerRuleSetRuleActionArchive | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_archive: {
      value: cdktn.stringToHclTerraform(struct!.targetArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionArchiveOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionArchive | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._targetArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArchive = this._targetArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionArchive | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._targetArchive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._targetArchive = value.targetArchive;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // target_archive - computed: false, optional: false, required: true
  private _targetArchive?: string; 
  public get targetArchive() {
    return this.getStringAttribute('target_archive');
  }
  public set targetArchive(value: string) {
    this._targetArchive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArchiveInput() {
    return this._targetArchive;
  }
}

export class MailmanagerRuleSetRuleActionArchiveList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionArchive[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionArchiveOutputReference {
    return new MailmanagerRuleSetRuleActionArchiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionBounce {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#diagnostic_message MailmanagerRuleSet#diagnostic_message}
  */
  readonly diagnosticMessage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#message MailmanagerRuleSet#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#role_arn MailmanagerRuleSet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#sender MailmanagerRuleSet#sender}
  */
  readonly sender: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#smtp_reply_code MailmanagerRuleSet#smtp_reply_code}
  */
  readonly smtpReplyCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#status_code MailmanagerRuleSet#status_code}
  */
  readonly statusCode: string;
}

export function mailmanagerRuleSetRuleActionBounceToTerraform(struct?: MailmanagerRuleSetRuleActionBounce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    diagnostic_message: cdktn.stringToTerraform(struct!.diagnosticMessage),
    message: cdktn.stringToTerraform(struct!.message),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    sender: cdktn.stringToTerraform(struct!.sender),
    smtp_reply_code: cdktn.stringToTerraform(struct!.smtpReplyCode),
    status_code: cdktn.stringToTerraform(struct!.statusCode),
  }
}


export function mailmanagerRuleSetRuleActionBounceToHclTerraform(struct?: MailmanagerRuleSetRuleActionBounce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diagnostic_message: {
      value: cdktn.stringToHclTerraform(struct!.diagnosticMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender: {
      value: cdktn.stringToHclTerraform(struct!.sender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_reply_code: {
      value: cdktn.stringToHclTerraform(struct!.smtpReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktn.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionBounceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionBounce | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._diagnosticMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosticMessage = this._diagnosticMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sender !== undefined) {
      hasAnyValues = true;
      internalValueResult.sender = this._sender;
    }
    if (this._smtpReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpReplyCode = this._smtpReplyCode;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionBounce | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._diagnosticMessage = undefined;
      this._message = undefined;
      this._roleArn = undefined;
      this._sender = undefined;
      this._smtpReplyCode = undefined;
      this._statusCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._diagnosticMessage = value.diagnosticMessage;
      this._message = value.message;
      this._roleArn = value.roleArn;
      this._sender = value.sender;
      this._smtpReplyCode = value.smtpReplyCode;
      this._statusCode = value.statusCode;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // diagnostic_message - computed: false, optional: false, required: true
  private _diagnosticMessage?: string; 
  public get diagnosticMessage() {
    return this.getStringAttribute('diagnostic_message');
  }
  public set diagnosticMessage(value: string) {
    this._diagnosticMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticMessageInput() {
    return this._diagnosticMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // sender - computed: false, optional: false, required: true
  private _sender?: string; 
  public get sender() {
    return this.getStringAttribute('sender');
  }
  public set sender(value: string) {
    this._sender = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderInput() {
    return this._sender;
  }

  // smtp_reply_code - computed: false, optional: false, required: true
  private _smtpReplyCode?: string; 
  public get smtpReplyCode() {
    return this.getStringAttribute('smtp_reply_code');
  }
  public set smtpReplyCode(value: string) {
    this._smtpReplyCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpReplyCodeInput() {
    return this._smtpReplyCode;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class MailmanagerRuleSetRuleActionBounceList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionBounce[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionBounceOutputReference {
    return new MailmanagerRuleSetRuleActionBounceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionDeliverToMailbox {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#mailbox_arn MailmanagerRuleSet#mailbox_arn}
  */
  readonly mailboxArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#role_arn MailmanagerRuleSet#role_arn}
  */
  readonly roleArn: string;
}

export function mailmanagerRuleSetRuleActionDeliverToMailboxToTerraform(struct?: MailmanagerRuleSetRuleActionDeliverToMailbox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    mailbox_arn: cdktn.stringToTerraform(struct!.mailboxArn),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function mailmanagerRuleSetRuleActionDeliverToMailboxToHclTerraform(struct?: MailmanagerRuleSetRuleActionDeliverToMailbox | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mailbox_arn: {
      value: cdktn.stringToHclTerraform(struct!.mailboxArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionDeliverToMailboxOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionDeliverToMailbox | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._mailboxArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailboxArn = this._mailboxArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionDeliverToMailbox | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._mailboxArn = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._mailboxArn = value.mailboxArn;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // mailbox_arn - computed: false, optional: false, required: true
  private _mailboxArn?: string; 
  public get mailboxArn() {
    return this.getStringAttribute('mailbox_arn');
  }
  public set mailboxArn(value: string) {
    this._mailboxArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mailboxArnInput() {
    return this._mailboxArn;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class MailmanagerRuleSetRuleActionDeliverToMailboxList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionDeliverToMailbox[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionDeliverToMailboxOutputReference {
    return new MailmanagerRuleSetRuleActionDeliverToMailboxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionDeliverToQBusiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#application_id MailmanagerRuleSet#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#index_id MailmanagerRuleSet#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#role_arn MailmanagerRuleSet#role_arn}
  */
  readonly roleArn: string;
}

export function mailmanagerRuleSetRuleActionDeliverToQBusinessToTerraform(struct?: MailmanagerRuleSetRuleActionDeliverToQBusiness | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    application_id: cdktn.stringToTerraform(struct!.applicationId),
    index_id: cdktn.stringToTerraform(struct!.indexId),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function mailmanagerRuleSetRuleActionDeliverToQBusinessToHclTerraform(struct?: MailmanagerRuleSetRuleActionDeliverToQBusiness | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_id: {
      value: cdktn.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_id: {
      value: cdktn.stringToHclTerraform(struct!.indexId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionDeliverToQBusinessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionDeliverToQBusiness | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._indexId !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexId = this._indexId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionDeliverToQBusiness | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._applicationId = undefined;
      this._indexId = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._applicationId = value.applicationId;
      this._indexId = value.indexId;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class MailmanagerRuleSetRuleActionDeliverToQBusinessList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionDeliverToQBusiness[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionDeliverToQBusinessOutputReference {
    return new MailmanagerRuleSetRuleActionDeliverToQBusinessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionDrop {
}

export function mailmanagerRuleSetRuleActionDropToTerraform(struct?: MailmanagerRuleSetRuleActionDrop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function mailmanagerRuleSetRuleActionDropToHclTerraform(struct?: MailmanagerRuleSetRuleActionDrop | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MailmanagerRuleSetRuleActionDropOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionDrop | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionDrop | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class MailmanagerRuleSetRuleActionDropList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionDrop[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionDropOutputReference {
    return new MailmanagerRuleSetRuleActionDropOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionInvokeLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#function_arn MailmanagerRuleSet#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#invocation_type MailmanagerRuleSet#invocation_type}
  */
  readonly invocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#retry_time_minutes MailmanagerRuleSet#retry_time_minutes}
  */
  readonly retryTimeMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#role_arn MailmanagerRuleSet#role_arn}
  */
  readonly roleArn: string;
}

export function mailmanagerRuleSetRuleActionInvokeLambdaToTerraform(struct?: MailmanagerRuleSetRuleActionInvokeLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    function_arn: cdktn.stringToTerraform(struct!.functionArn),
    invocation_type: cdktn.stringToTerraform(struct!.invocationType),
    retry_time_minutes: cdktn.numberToTerraform(struct!.retryTimeMinutes),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function mailmanagerRuleSetRuleActionInvokeLambdaToHclTerraform(struct?: MailmanagerRuleSetRuleActionInvokeLambda | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_arn: {
      value: cdktn.stringToHclTerraform(struct!.functionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invocation_type: {
      value: cdktn.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_time_minutes: {
      value: cdktn.numberToHclTerraform(struct!.retryTimeMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionInvokeLambdaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionInvokeLambda | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._retryTimeMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTimeMinutes = this._retryTimeMinutes;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionInvokeLambda | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._functionArn = undefined;
      this._invocationType = undefined;
      this._retryTimeMinutes = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._functionArn = value.functionArn;
      this._invocationType = value.invocationType;
      this._retryTimeMinutes = value.retryTimeMinutes;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }

  // invocation_type - computed: false, optional: false, required: true
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }

  // retry_time_minutes - computed: false, optional: true, required: false
  private _retryTimeMinutes?: number; 
  public get retryTimeMinutes() {
    return this.getNumberAttribute('retry_time_minutes');
  }
  public set retryTimeMinutes(value: number) {
    this._retryTimeMinutes = value;
  }
  public resetRetryTimeMinutes() {
    this._retryTimeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeMinutesInput() {
    return this._retryTimeMinutes;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class MailmanagerRuleSetRuleActionInvokeLambdaList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionInvokeLambda[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionInvokeLambdaOutputReference {
    return new MailmanagerRuleSetRuleActionInvokeLambdaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionPublishToSns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#encoding MailmanagerRuleSet#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#payload_type MailmanagerRuleSet#payload_type}
  */
  readonly payloadType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#role_arn MailmanagerRuleSet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#topic_arn MailmanagerRuleSet#topic_arn}
  */
  readonly topicArn: string;
}

export function mailmanagerRuleSetRuleActionPublishToSnsToTerraform(struct?: MailmanagerRuleSetRuleActionPublishToSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    payload_type: cdktn.stringToTerraform(struct!.payloadType),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    topic_arn: cdktn.stringToTerraform(struct!.topicArn),
  }
}


export function mailmanagerRuleSetRuleActionPublishToSnsToHclTerraform(struct?: MailmanagerRuleSetRuleActionPublishToSns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_type: {
      value: cdktn.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktn.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionPublishToSnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionPublishToSns | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionPublishToSns | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._encoding = undefined;
      this._payloadType = undefined;
      this._roleArn = undefined;
      this._topicArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._encoding = value.encoding;
      this._payloadType = value.payloadType;
      this._roleArn = value.roleArn;
      this._topicArn = value.topicArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // payload_type - computed: false, optional: true, required: false
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  public resetPayloadType() {
    this._payloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

export class MailmanagerRuleSetRuleActionPublishToSnsList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionPublishToSns[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionPublishToSnsOutputReference {
    return new MailmanagerRuleSetRuleActionPublishToSnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionRelay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#mail_from MailmanagerRuleSet#mail_from}
  */
  readonly mailFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#relay MailmanagerRuleSet#relay}
  */
  readonly relay: string;
}

export function mailmanagerRuleSetRuleActionRelayToTerraform(struct?: MailmanagerRuleSetRuleActionRelay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    mail_from: cdktn.stringToTerraform(struct!.mailFrom),
    relay: cdktn.stringToTerraform(struct!.relay),
  }
}


export function mailmanagerRuleSetRuleActionRelayToHclTerraform(struct?: MailmanagerRuleSetRuleActionRelay | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_from: {
      value: cdktn.stringToHclTerraform(struct!.mailFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay: {
      value: cdktn.stringToHclTerraform(struct!.relay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionRelayOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionRelay | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._mailFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFrom = this._mailFrom;
    }
    if (this._relay !== undefined) {
      hasAnyValues = true;
      internalValueResult.relay = this._relay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionRelay | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._mailFrom = undefined;
      this._relay = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._mailFrom = value.mailFrom;
      this._relay = value.relay;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // mail_from - computed: false, optional: true, required: false
  private _mailFrom?: string; 
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }
  public set mailFrom(value: string) {
    this._mailFrom = value;
  }
  public resetMailFrom() {
    this._mailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromInput() {
    return this._mailFrom;
  }

  // relay - computed: false, optional: false, required: true
  private _relay?: string; 
  public get relay() {
    return this.getStringAttribute('relay');
  }
  public set relay(value: string) {
    this._relay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay;
  }
}

export class MailmanagerRuleSetRuleActionRelayList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionRelay[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionRelayOutputReference {
    return new MailmanagerRuleSetRuleActionRelayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionReplaceRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#replace_with MailmanagerRuleSet#replace_with}
  */
  readonly replaceWith?: string[];
}

export function mailmanagerRuleSetRuleActionReplaceRecipientToTerraform(struct?: MailmanagerRuleSetRuleActionReplaceRecipient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replace_with: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replaceWith),
  }
}


export function mailmanagerRuleSetRuleActionReplaceRecipientToHclTerraform(struct?: MailmanagerRuleSetRuleActionReplaceRecipient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replace_with: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replaceWith),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionReplaceRecipientOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionReplaceRecipient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWith = this._replaceWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionReplaceRecipient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replaceWith = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replaceWith = value.replaceWith;
    }
  }

  // replace_with - computed: false, optional: true, required: false
  private _replaceWith?: string[]; 
  public get replaceWith() {
    return this.getListAttribute('replace_with');
  }
  public set replaceWith(value: string[]) {
    this._replaceWith = value;
  }
  public resetReplaceWith() {
    this._replaceWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithInput() {
    return this._replaceWith;
  }
}

export class MailmanagerRuleSetRuleActionReplaceRecipientList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionReplaceRecipient[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionReplaceRecipientOutputReference {
    return new MailmanagerRuleSetRuleActionReplaceRecipientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionSend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#role_arn MailmanagerRuleSet#role_arn}
  */
  readonly roleArn: string;
}

export function mailmanagerRuleSetRuleActionSendToTerraform(struct?: MailmanagerRuleSetRuleActionSend | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function mailmanagerRuleSetRuleActionSendToHclTerraform(struct?: MailmanagerRuleSetRuleActionSend | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionSendOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionSend | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionSend | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._roleArn = value.roleArn;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class MailmanagerRuleSetRuleActionSendList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionSend[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionSendOutputReference {
    return new MailmanagerRuleSetRuleActionSendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleActionWriteToS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action_failure_policy MailmanagerRuleSet#action_failure_policy}
  */
  readonly actionFailurePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#role_arn MailmanagerRuleSet#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#s3_bucket MailmanagerRuleSet#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#s3_prefix MailmanagerRuleSet#s3_prefix}
  */
  readonly s3Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#s3_sse_kms_key_id MailmanagerRuleSet#s3_sse_kms_key_id}
  */
  readonly s3SseKmsKeyId?: string;
}

export function mailmanagerRuleSetRuleActionWriteToS3ToTerraform(struct?: MailmanagerRuleSetRuleActionWriteToS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_failure_policy: cdktn.stringToTerraform(struct!.actionFailurePolicy),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
    s3_prefix: cdktn.stringToTerraform(struct!.s3Prefix),
    s3_sse_kms_key_id: cdktn.stringToTerraform(struct!.s3SseKmsKeyId),
  }
}


export function mailmanagerRuleSetRuleActionWriteToS3ToHclTerraform(struct?: MailmanagerRuleSetRuleActionWriteToS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_failure_policy: {
      value: cdktn.stringToHclTerraform(struct!.actionFailurePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket: {
      value: cdktn.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_prefix: {
      value: cdktn.stringToHclTerraform(struct!.s3Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_sse_kms_key_id: {
      value: cdktn.stringToHclTerraform(struct!.s3SseKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionWriteToS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleActionWriteToS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionFailurePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionFailurePolicy = this._actionFailurePolicy;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Prefix = this._s3Prefix;
    }
    if (this._s3SseKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SseKmsKeyId = this._s3SseKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleActionWriteToS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = undefined;
      this._roleArn = undefined;
      this._s3Bucket = undefined;
      this._s3Prefix = undefined;
      this._s3SseKmsKeyId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionFailurePolicy = value.actionFailurePolicy;
      this._roleArn = value.roleArn;
      this._s3Bucket = value.s3Bucket;
      this._s3Prefix = value.s3Prefix;
      this._s3SseKmsKeyId = value.s3SseKmsKeyId;
    }
  }

  // action_failure_policy - computed: false, optional: true, required: false
  private _actionFailurePolicy?: string; 
  public get actionFailurePolicy() {
    return this.getStringAttribute('action_failure_policy');
  }
  public set actionFailurePolicy(value: string) {
    this._actionFailurePolicy = value;
  }
  public resetActionFailurePolicy() {
    this._actionFailurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionFailurePolicyInput() {
    return this._actionFailurePolicy;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_prefix - computed: false, optional: true, required: false
  private _s3Prefix?: string; 
  public get s3Prefix() {
    return this.getStringAttribute('s3_prefix');
  }
  public set s3Prefix(value: string) {
    this._s3Prefix = value;
  }
  public resetS3Prefix() {
    this._s3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrefixInput() {
    return this._s3Prefix;
  }

  // s3_sse_kms_key_id - computed: false, optional: true, required: false
  private _s3SseKmsKeyId?: string; 
  public get s3SseKmsKeyId() {
    return this.getStringAttribute('s3_sse_kms_key_id');
  }
  public set s3SseKmsKeyId(value: string) {
    this._s3SseKmsKeyId = value;
  }
  public resetS3SseKmsKeyId() {
    this._s3SseKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SseKmsKeyIdInput() {
    return this._s3SseKmsKeyId;
  }
}

export class MailmanagerRuleSetRuleActionWriteToS3List extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleActionWriteToS3[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionWriteToS3OutputReference {
    return new MailmanagerRuleSetRuleActionWriteToS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleAction {
  /**
  * add_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#add_header MailmanagerRuleSet#add_header}
  */
  readonly addHeader?: MailmanagerRuleSetRuleActionAddHeader[] | cdktn.IResolvable;
  /**
  * archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#archive MailmanagerRuleSet#archive}
  */
  readonly archive?: MailmanagerRuleSetRuleActionArchive[] | cdktn.IResolvable;
  /**
  * bounce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#bounce MailmanagerRuleSet#bounce}
  */
  readonly bounce?: MailmanagerRuleSetRuleActionBounce[] | cdktn.IResolvable;
  /**
  * deliver_to_mailbox block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#deliver_to_mailbox MailmanagerRuleSet#deliver_to_mailbox}
  */
  readonly deliverToMailbox?: MailmanagerRuleSetRuleActionDeliverToMailbox[] | cdktn.IResolvable;
  /**
  * deliver_to_q_business block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#deliver_to_q_business MailmanagerRuleSet#deliver_to_q_business}
  */
  readonly deliverToQBusiness?: MailmanagerRuleSetRuleActionDeliverToQBusiness[] | cdktn.IResolvable;
  /**
  * drop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#drop MailmanagerRuleSet#drop}
  */
  readonly drop?: MailmanagerRuleSetRuleActionDrop[] | cdktn.IResolvable;
  /**
  * invoke_lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#invoke_lambda MailmanagerRuleSet#invoke_lambda}
  */
  readonly invokeLambda?: MailmanagerRuleSetRuleActionInvokeLambda[] | cdktn.IResolvable;
  /**
  * publish_to_sns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#publish_to_sns MailmanagerRuleSet#publish_to_sns}
  */
  readonly publishToSns?: MailmanagerRuleSetRuleActionPublishToSns[] | cdktn.IResolvable;
  /**
  * relay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#relay MailmanagerRuleSet#relay}
  */
  readonly relay?: MailmanagerRuleSetRuleActionRelay[] | cdktn.IResolvable;
  /**
  * replace_recipient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#replace_recipient MailmanagerRuleSet#replace_recipient}
  */
  readonly replaceRecipient?: MailmanagerRuleSetRuleActionReplaceRecipient[] | cdktn.IResolvable;
  /**
  * send block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#send MailmanagerRuleSet#send}
  */
  readonly send?: MailmanagerRuleSetRuleActionSend[] | cdktn.IResolvable;
  /**
  * write_to_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#write_to_s3 MailmanagerRuleSet#write_to_s3}
  */
  readonly writeToS3?: MailmanagerRuleSetRuleActionWriteToS3[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleActionToTerraform(struct?: MailmanagerRuleSetRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_header: cdktn.listMapper(mailmanagerRuleSetRuleActionAddHeaderToTerraform, true)(struct!.addHeader),
    archive: cdktn.listMapper(mailmanagerRuleSetRuleActionArchiveToTerraform, true)(struct!.archive),
    bounce: cdktn.listMapper(mailmanagerRuleSetRuleActionBounceToTerraform, true)(struct!.bounce),
    deliver_to_mailbox: cdktn.listMapper(mailmanagerRuleSetRuleActionDeliverToMailboxToTerraform, true)(struct!.deliverToMailbox),
    deliver_to_q_business: cdktn.listMapper(mailmanagerRuleSetRuleActionDeliverToQBusinessToTerraform, true)(struct!.deliverToQBusiness),
    drop: cdktn.listMapper(mailmanagerRuleSetRuleActionDropToTerraform, true)(struct!.drop),
    invoke_lambda: cdktn.listMapper(mailmanagerRuleSetRuleActionInvokeLambdaToTerraform, true)(struct!.invokeLambda),
    publish_to_sns: cdktn.listMapper(mailmanagerRuleSetRuleActionPublishToSnsToTerraform, true)(struct!.publishToSns),
    relay: cdktn.listMapper(mailmanagerRuleSetRuleActionRelayToTerraform, true)(struct!.relay),
    replace_recipient: cdktn.listMapper(mailmanagerRuleSetRuleActionReplaceRecipientToTerraform, true)(struct!.replaceRecipient),
    send: cdktn.listMapper(mailmanagerRuleSetRuleActionSendToTerraform, true)(struct!.send),
    write_to_s3: cdktn.listMapper(mailmanagerRuleSetRuleActionWriteToS3ToTerraform, true)(struct!.writeToS3),
  }
}


export function mailmanagerRuleSetRuleActionToHclTerraform(struct?: MailmanagerRuleSetRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_header: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionAddHeaderToHclTerraform, true)(struct!.addHeader),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionAddHeaderList",
    },
    archive: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionArchiveToHclTerraform, true)(struct!.archive),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionArchiveList",
    },
    bounce: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionBounceToHclTerraform, true)(struct!.bounce),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionBounceList",
    },
    deliver_to_mailbox: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionDeliverToMailboxToHclTerraform, true)(struct!.deliverToMailbox),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionDeliverToMailboxList",
    },
    deliver_to_q_business: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionDeliverToQBusinessToHclTerraform, true)(struct!.deliverToQBusiness),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionDeliverToQBusinessList",
    },
    drop: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionDropToHclTerraform, true)(struct!.drop),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionDropList",
    },
    invoke_lambda: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionInvokeLambdaToHclTerraform, true)(struct!.invokeLambda),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionInvokeLambdaList",
    },
    publish_to_sns: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionPublishToSnsToHclTerraform, true)(struct!.publishToSns),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionPublishToSnsList",
    },
    relay: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionRelayToHclTerraform, true)(struct!.relay),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionRelayList",
    },
    replace_recipient: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionReplaceRecipientToHclTerraform, true)(struct!.replaceRecipient),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionReplaceRecipientList",
    },
    send: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionSendToHclTerraform, true)(struct!.send),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionSendList",
    },
    write_to_s3: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionWriteToS3ToHclTerraform, true)(struct!.writeToS3),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionWriteToS3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader?.internalValue;
    }
    if (this._archive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive?.internalValue;
    }
    if (this._bounce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounce = this._bounce?.internalValue;
    }
    if (this._deliverToMailbox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliverToMailbox = this._deliverToMailbox?.internalValue;
    }
    if (this._deliverToQBusiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliverToQBusiness = this._deliverToQBusiness?.internalValue;
    }
    if (this._drop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop?.internalValue;
    }
    if (this._invokeLambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invokeLambda = this._invokeLambda?.internalValue;
    }
    if (this._publishToSns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishToSns = this._publishToSns?.internalValue;
    }
    if (this._relay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relay = this._relay?.internalValue;
    }
    if (this._replaceRecipient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceRecipient = this._replaceRecipient?.internalValue;
    }
    if (this._send?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send?.internalValue;
    }
    if (this._writeToS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeToS3 = this._writeToS3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHeader.internalValue = undefined;
      this._archive.internalValue = undefined;
      this._bounce.internalValue = undefined;
      this._deliverToMailbox.internalValue = undefined;
      this._deliverToQBusiness.internalValue = undefined;
      this._drop.internalValue = undefined;
      this._invokeLambda.internalValue = undefined;
      this._publishToSns.internalValue = undefined;
      this._relay.internalValue = undefined;
      this._replaceRecipient.internalValue = undefined;
      this._send.internalValue = undefined;
      this._writeToS3.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHeader.internalValue = value.addHeader;
      this._archive.internalValue = value.archive;
      this._bounce.internalValue = value.bounce;
      this._deliverToMailbox.internalValue = value.deliverToMailbox;
      this._deliverToQBusiness.internalValue = value.deliverToQBusiness;
      this._drop.internalValue = value.drop;
      this._invokeLambda.internalValue = value.invokeLambda;
      this._publishToSns.internalValue = value.publishToSns;
      this._relay.internalValue = value.relay;
      this._replaceRecipient.internalValue = value.replaceRecipient;
      this._send.internalValue = value.send;
      this._writeToS3.internalValue = value.writeToS3;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader = new MailmanagerRuleSetRuleActionAddHeaderList(this, "add_header", false);
  public get addHeader() {
    return this._addHeader;
  }
  public putAddHeader(value: MailmanagerRuleSetRuleActionAddHeader[] | cdktn.IResolvable) {
    this._addHeader.internalValue = value;
  }
  public resetAddHeader() {
    this._addHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader.internalValue;
  }

  // archive - computed: false, optional: true, required: false
  private _archive = new MailmanagerRuleSetRuleActionArchiveList(this, "archive", false);
  public get archive() {
    return this._archive;
  }
  public putArchive(value: MailmanagerRuleSetRuleActionArchive[] | cdktn.IResolvable) {
    this._archive.internalValue = value;
  }
  public resetArchive() {
    this._archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive.internalValue;
  }

  // bounce - computed: false, optional: true, required: false
  private _bounce = new MailmanagerRuleSetRuleActionBounceList(this, "bounce", false);
  public get bounce() {
    return this._bounce;
  }
  public putBounce(value: MailmanagerRuleSetRuleActionBounce[] | cdktn.IResolvable) {
    this._bounce.internalValue = value;
  }
  public resetBounce() {
    this._bounce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceInput() {
    return this._bounce.internalValue;
  }

  // deliver_to_mailbox - computed: false, optional: true, required: false
  private _deliverToMailbox = new MailmanagerRuleSetRuleActionDeliverToMailboxList(this, "deliver_to_mailbox", false);
  public get deliverToMailbox() {
    return this._deliverToMailbox;
  }
  public putDeliverToMailbox(value: MailmanagerRuleSetRuleActionDeliverToMailbox[] | cdktn.IResolvable) {
    this._deliverToMailbox.internalValue = value;
  }
  public resetDeliverToMailbox() {
    this._deliverToMailbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverToMailboxInput() {
    return this._deliverToMailbox.internalValue;
  }

  // deliver_to_q_business - computed: false, optional: true, required: false
  private _deliverToQBusiness = new MailmanagerRuleSetRuleActionDeliverToQBusinessList(this, "deliver_to_q_business", false);
  public get deliverToQBusiness() {
    return this._deliverToQBusiness;
  }
  public putDeliverToQBusiness(value: MailmanagerRuleSetRuleActionDeliverToQBusiness[] | cdktn.IResolvable) {
    this._deliverToQBusiness.internalValue = value;
  }
  public resetDeliverToQBusiness() {
    this._deliverToQBusiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverToQBusinessInput() {
    return this._deliverToQBusiness.internalValue;
  }

  // drop - computed: false, optional: true, required: false
  private _drop = new MailmanagerRuleSetRuleActionDropList(this, "drop", false);
  public get drop() {
    return this._drop;
  }
  public putDrop(value: MailmanagerRuleSetRuleActionDrop[] | cdktn.IResolvable) {
    this._drop.internalValue = value;
  }
  public resetDrop() {
    this._drop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop.internalValue;
  }

  // invoke_lambda - computed: false, optional: true, required: false
  private _invokeLambda = new MailmanagerRuleSetRuleActionInvokeLambdaList(this, "invoke_lambda", false);
  public get invokeLambda() {
    return this._invokeLambda;
  }
  public putInvokeLambda(value: MailmanagerRuleSetRuleActionInvokeLambda[] | cdktn.IResolvable) {
    this._invokeLambda.internalValue = value;
  }
  public resetInvokeLambda() {
    this._invokeLambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeLambdaInput() {
    return this._invokeLambda.internalValue;
  }

  // publish_to_sns - computed: false, optional: true, required: false
  private _publishToSns = new MailmanagerRuleSetRuleActionPublishToSnsList(this, "publish_to_sns", false);
  public get publishToSns() {
    return this._publishToSns;
  }
  public putPublishToSns(value: MailmanagerRuleSetRuleActionPublishToSns[] | cdktn.IResolvable) {
    this._publishToSns.internalValue = value;
  }
  public resetPublishToSns() {
    this._publishToSns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishToSnsInput() {
    return this._publishToSns.internalValue;
  }

  // relay - computed: false, optional: true, required: false
  private _relay = new MailmanagerRuleSetRuleActionRelayList(this, "relay", false);
  public get relay() {
    return this._relay;
  }
  public putRelay(value: MailmanagerRuleSetRuleActionRelay[] | cdktn.IResolvable) {
    this._relay.internalValue = value;
  }
  public resetRelay() {
    this._relay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInput() {
    return this._relay.internalValue;
  }

  // replace_recipient - computed: false, optional: true, required: false
  private _replaceRecipient = new MailmanagerRuleSetRuleActionReplaceRecipientList(this, "replace_recipient", false);
  public get replaceRecipient() {
    return this._replaceRecipient;
  }
  public putReplaceRecipient(value: MailmanagerRuleSetRuleActionReplaceRecipient[] | cdktn.IResolvable) {
    this._replaceRecipient.internalValue = value;
  }
  public resetReplaceRecipient() {
    this._replaceRecipient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceRecipientInput() {
    return this._replaceRecipient.internalValue;
  }

  // send - computed: false, optional: true, required: false
  private _send = new MailmanagerRuleSetRuleActionSendList(this, "send", false);
  public get send() {
    return this._send;
  }
  public putSend(value: MailmanagerRuleSetRuleActionSend[] | cdktn.IResolvable) {
    this._send.internalValue = value;
  }
  public resetSend() {
    this._send.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send.internalValue;
  }

  // write_to_s3 - computed: false, optional: true, required: false
  private _writeToS3 = new MailmanagerRuleSetRuleActionWriteToS3List(this, "write_to_s3", false);
  public get writeToS3() {
    return this._writeToS3;
  }
  public putWriteToS3(value: MailmanagerRuleSetRuleActionWriteToS3[] | cdktn.IResolvable) {
    this._writeToS3.internalValue = value;
  }
  public resetWriteToS3() {
    this._writeToS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeToS3Input() {
    return this._writeToS3.internalValue;
  }
}

export class MailmanagerRuleSetRuleActionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleAction[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleActionOutputReference {
    return new MailmanagerRuleSetRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analyzer MailmanagerRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#result_field MailmanagerRuleSet#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#address_lists MailmanagerRuleSet#address_lists}
  */
  readonly addressLists: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: false, optional: false, required: true
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference {
    return new MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analysis MailmanagerRuleSet#analysis}
  */
  readonly analysis?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable;
  /**
  * is_in_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#is_in_address_list MailmanagerRuleSet#is_in_address_list}
  */
  readonly isInAddressList?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
    is_in_address_list: cdktn.listMapper(mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructToTerraform, true)(struct!.isInAddressList),
  }
}


export function mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisList",
    },
    is_in_address_list: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructToHclTerraform, true)(struct!.isInAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // is_in_address_list - computed: false, optional: true, required: false
  private _isInAddressList = new MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStructList(this, "is_in_address_list", false);
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionBooleanExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionBooleanExpressionToTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleConditionBooleanExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleConditionBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionBooleanExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionBooleanExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionBooleanExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleConditionBooleanExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleConditionBooleanExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionBooleanExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionBooleanExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionBooleanExpressionOutputReference {
    return new MailmanagerRuleSetRuleConditionBooleanExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionDmarcExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
}

export function mailmanagerRuleSetRuleConditionDmarcExpressionToTerraform(struct?: MailmanagerRuleSetRuleConditionDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function mailmanagerRuleSetRuleConditionDmarcExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleConditionDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionDmarcExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionDmarcExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionDmarcExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MailmanagerRuleSetRuleConditionDmarcExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionDmarcExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionDmarcExpressionOutputReference {
    return new MailmanagerRuleSetRuleConditionDmarcExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionIpExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerRuleSetRuleConditionIpExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleConditionIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerRuleSetRuleConditionIpExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleConditionIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionIpExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionIpExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerRuleSetRuleConditionIpExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionIpExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionIpExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleConditionIpExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionIpExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleConditionIpExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionIpExpressionToTerraform(struct?: MailmanagerRuleSetRuleConditionIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleConditionIpExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleConditionIpExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleConditionIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionIpExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionIpExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionIpExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionIpExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionIpExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleConditionIpExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleConditionIpExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionIpExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionIpExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionIpExpressionOutputReference {
    return new MailmanagerRuleSetRuleConditionIpExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionNumberExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerRuleSetRuleConditionNumberExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleConditionNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerRuleSetRuleConditionNumberExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleConditionNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionNumberExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionNumberExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionNumberExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerRuleSetRuleConditionNumberExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionNumberExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionNumberExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleConditionNumberExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionNumberExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#value MailmanagerRuleSet#value}
  */
  readonly value: number;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleConditionNumberExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionNumberExpressionToTerraform(struct?: MailmanagerRuleSetRuleConditionNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleConditionNumberExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleConditionNumberExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleConditionNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionNumberExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionNumberExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionNumberExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionNumberExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionNumberExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleConditionNumberExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleConditionNumberExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionNumberExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionNumberExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionNumberExpressionOutputReference {
    return new MailmanagerRuleSetRuleConditionNumberExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analyzer MailmanagerRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#result_field MailmanagerRuleSet#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionStringExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#client_certificate_attribute MailmanagerRuleSet#client_certificate_attribute}
  */
  readonly clientCertificateAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#mime_header_attribute MailmanagerRuleSet#mime_header_attribute}
  */
  readonly mimeHeaderAttribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analysis MailmanagerRuleSet#analysis}
  */
  readonly analysis?: MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionStringExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleConditionStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
    mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
    analysis: cdktn.listMapper(mailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
  }
}


export function mailmanagerRuleSetRuleConditionStringExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleConditionStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_attribute: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_header_attribute: {
      value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionStringExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clientCertificateAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
    }
    if (this._mimeHeaderAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionStringExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._clientCertificateAttribute = undefined;
      this._mimeHeaderAttribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._clientCertificateAttribute = value.clientCertificateAttribute;
      this._mimeHeaderAttribute = value.mimeHeaderAttribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // client_certificate_attribute - computed: false, optional: true, required: false
  private _clientCertificateAttribute?: string; 
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }
  public set clientCertificateAttribute(value: string) {
    this._clientCertificateAttribute = value;
  }
  public resetClientCertificateAttribute() {
    this._clientCertificateAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAttributeInput() {
    return this._clientCertificateAttribute;
  }

  // mime_header_attribute - computed: false, optional: true, required: false
  private _mimeHeaderAttribute?: string; 
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
  public set mimeHeaderAttribute(value: string) {
    this._mimeHeaderAttribute = value;
  }
  public resetMimeHeaderAttribute() {
    this._mimeHeaderAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeHeaderAttributeInput() {
    return this._mimeHeaderAttribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerRuleSetRuleConditionStringExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionStringExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionStringExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionStringExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleConditionStringExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionStringExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleConditionStringExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionStringExpressionToTerraform(struct?: MailmanagerRuleSetRuleConditionStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleConditionStringExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleConditionStringExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleConditionStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionStringExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionStringExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionStringExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionStringExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionStringExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleConditionStringExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleConditionStringExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionStringExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionStringExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionStringExpressionOutputReference {
    return new MailmanagerRuleSetRuleConditionStringExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analyzer MailmanagerRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#result_field MailmanagerRuleSet#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analysis MailmanagerRuleSet#analysis}
  */
  readonly analysis?: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
  }
}


export function mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleConditionVerdictExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionVerdictExpressionToTerraform(struct?: MailmanagerRuleSetRuleConditionVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleConditionVerdictExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleConditionVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionVerdictExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionVerdictExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleConditionVerdictExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleConditionVerdictExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleConditionVerdictExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleConditionVerdictExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionVerdictExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleConditionVerdictExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionVerdictExpressionOutputReference {
    return new MailmanagerRuleSetRuleConditionVerdictExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleCondition {
  /**
  * boolean_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#boolean_expression MailmanagerRuleSet#boolean_expression}
  */
  readonly booleanExpression?: MailmanagerRuleSetRuleConditionBooleanExpression[] | cdktn.IResolvable;
  /**
  * dmarc_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#dmarc_expression MailmanagerRuleSet#dmarc_expression}
  */
  readonly dmarcExpression?: MailmanagerRuleSetRuleConditionDmarcExpression[] | cdktn.IResolvable;
  /**
  * ip_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#ip_expression MailmanagerRuleSet#ip_expression}
  */
  readonly ipExpression?: MailmanagerRuleSetRuleConditionIpExpression[] | cdktn.IResolvable;
  /**
  * number_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#number_expression MailmanagerRuleSet#number_expression}
  */
  readonly numberExpression?: MailmanagerRuleSetRuleConditionNumberExpression[] | cdktn.IResolvable;
  /**
  * string_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#string_expression MailmanagerRuleSet#string_expression}
  */
  readonly stringExpression?: MailmanagerRuleSetRuleConditionStringExpression[] | cdktn.IResolvable;
  /**
  * verdict_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#verdict_expression MailmanagerRuleSet#verdict_expression}
  */
  readonly verdictExpression?: MailmanagerRuleSetRuleConditionVerdictExpression[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleConditionToTerraform(struct?: MailmanagerRuleSetRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: cdktn.listMapper(mailmanagerRuleSetRuleConditionBooleanExpressionToTerraform, true)(struct!.booleanExpression),
    dmarc_expression: cdktn.listMapper(mailmanagerRuleSetRuleConditionDmarcExpressionToTerraform, true)(struct!.dmarcExpression),
    ip_expression: cdktn.listMapper(mailmanagerRuleSetRuleConditionIpExpressionToTerraform, true)(struct!.ipExpression),
    number_expression: cdktn.listMapper(mailmanagerRuleSetRuleConditionNumberExpressionToTerraform, true)(struct!.numberExpression),
    string_expression: cdktn.listMapper(mailmanagerRuleSetRuleConditionStringExpressionToTerraform, true)(struct!.stringExpression),
    verdict_expression: cdktn.listMapper(mailmanagerRuleSetRuleConditionVerdictExpressionToTerraform, true)(struct!.verdictExpression),
  }
}


export function mailmanagerRuleSetRuleConditionToHclTerraform(struct?: MailmanagerRuleSetRuleCondition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionBooleanExpressionToHclTerraform, true)(struct!.booleanExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionBooleanExpressionList",
    },
    dmarc_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionDmarcExpressionToHclTerraform, true)(struct!.dmarcExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionDmarcExpressionList",
    },
    ip_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionIpExpressionToHclTerraform, true)(struct!.ipExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionIpExpressionList",
    },
    number_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionNumberExpressionToHclTerraform, true)(struct!.numberExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionNumberExpressionList",
    },
    string_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionStringExpressionToHclTerraform, true)(struct!.stringExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionStringExpressionList",
    },
    verdict_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionVerdictExpressionToHclTerraform, true)(struct!.verdictExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionVerdictExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleConditionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleCondition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._dmarcExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._numberExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberExpression = this._numberExpression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._verdictExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleCondition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._dmarcExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._numberExpression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._verdictExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._dmarcExpression.internalValue = value.dmarcExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._numberExpression.internalValue = value.numberExpression;
      this._stringExpression.internalValue = value.stringExpression;
      this._verdictExpression.internalValue = value.verdictExpression;
    }
  }

  // boolean_expression - computed: false, optional: true, required: false
  private _booleanExpression = new MailmanagerRuleSetRuleConditionBooleanExpressionList(this, "boolean_expression", false);
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: MailmanagerRuleSetRuleConditionBooleanExpression[] | cdktn.IResolvable) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // dmarc_expression - computed: false, optional: true, required: false
  private _dmarcExpression = new MailmanagerRuleSetRuleConditionDmarcExpressionList(this, "dmarc_expression", false);
  public get dmarcExpression() {
    return this._dmarcExpression;
  }
  public putDmarcExpression(value: MailmanagerRuleSetRuleConditionDmarcExpression[] | cdktn.IResolvable) {
    this._dmarcExpression.internalValue = value;
  }
  public resetDmarcExpression() {
    this._dmarcExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmarcExpressionInput() {
    return this._dmarcExpression.internalValue;
  }

  // ip_expression - computed: false, optional: true, required: false
  private _ipExpression = new MailmanagerRuleSetRuleConditionIpExpressionList(this, "ip_expression", false);
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: MailmanagerRuleSetRuleConditionIpExpression[] | cdktn.IResolvable) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // number_expression - computed: false, optional: true, required: false
  private _numberExpression = new MailmanagerRuleSetRuleConditionNumberExpressionList(this, "number_expression", false);
  public get numberExpression() {
    return this._numberExpression;
  }
  public putNumberExpression(value: MailmanagerRuleSetRuleConditionNumberExpression[] | cdktn.IResolvable) {
    this._numberExpression.internalValue = value;
  }
  public resetNumberExpression() {
    this._numberExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberExpressionInput() {
    return this._numberExpression.internalValue;
  }

  // string_expression - computed: false, optional: true, required: false
  private _stringExpression = new MailmanagerRuleSetRuleConditionStringExpressionList(this, "string_expression", false);
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: MailmanagerRuleSetRuleConditionStringExpression[] | cdktn.IResolvable) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // verdict_expression - computed: false, optional: true, required: false
  private _verdictExpression = new MailmanagerRuleSetRuleConditionVerdictExpressionList(this, "verdict_expression", false);
  public get verdictExpression() {
    return this._verdictExpression;
  }
  public putVerdictExpression(value: MailmanagerRuleSetRuleConditionVerdictExpression[] | cdktn.IResolvable) {
    this._verdictExpression.internalValue = value;
  }
  public resetVerdictExpression() {
    this._verdictExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictExpressionInput() {
    return this._verdictExpression.internalValue;
  }
}

export class MailmanagerRuleSetRuleConditionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleCondition[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleConditionOutputReference {
    return new MailmanagerRuleSetRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analyzer MailmanagerRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#result_field MailmanagerRuleSet#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#address_lists MailmanagerRuleSet#address_lists}
  */
  readonly addressLists: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructToTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.addressLists),
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.addressLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLists = this._addressLists;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLists = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLists = value.addressLists;
      this._attribute = value.attribute;
    }
  }

  // address_lists - computed: false, optional: false, required: true
  private _addressLists?: string[]; 
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }
  public set addressLists(value: string[]) {
    this._addressLists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference {
    return new MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analysis MailmanagerRuleSet#analysis}
  */
  readonly analysis?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable;
  /**
  * is_in_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#is_in_address_list MailmanagerRuleSet#is_in_address_list}
  */
  readonly isInAddressList?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
    is_in_address_list: cdktn.listMapper(mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructToTerraform, true)(struct!.isInAddressList),
  }
}


export function mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisList",
    },
    is_in_address_list: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructToHclTerraform, true)(struct!.isInAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    if (this._isInAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInAddressList = this._isInAddressList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
      this._isInAddressList.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
      this._isInAddressList.internalValue = value.isInAddressList;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }

  // is_in_address_list - computed: false, optional: true, required: false
  private _isInAddressList = new MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStructList(this, "is_in_address_list", false);
  public get isInAddressList() {
    return this._isInAddressList;
  }
  public putIsInAddressList(value: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateIsInAddressListStruct[] | cdktn.IResolvable) {
    this._isInAddressList.internalValue = value;
  }
  public resetIsInAddressList() {
    this._isInAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInAddressListInput() {
    return this._isInAddressList.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessBooleanExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessBooleanExpressionToTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleUnlessBooleanExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessBooleanExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessBooleanExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessBooleanExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleUnlessBooleanExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessBooleanExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessBooleanExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessBooleanExpressionOutputReference {
    return new MailmanagerRuleSetRuleUnlessBooleanExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessDmarcExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
}

export function mailmanagerRuleSetRuleUnlessDmarcExpressionToTerraform(struct?: MailmanagerRuleSetRuleUnlessDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function mailmanagerRuleSetRuleUnlessDmarcExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessDmarcExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessDmarcExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessDmarcExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessDmarcExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MailmanagerRuleSetRuleUnlessDmarcExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessDmarcExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessDmarcExpressionOutputReference {
    return new MailmanagerRuleSetRuleUnlessDmarcExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessIpExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerRuleSetRuleUnlessIpExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleUnlessIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerRuleSetRuleUnlessIpExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessIpExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessIpExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessIpExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessIpExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerRuleSetRuleUnlessIpExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessIpExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessIpExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleUnlessIpExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessIpExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleUnlessIpExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessIpExpressionToTerraform(struct?: MailmanagerRuleSetRuleUnlessIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleUnlessIpExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleUnlessIpExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessIpExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessIpExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessIpExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessIpExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessIpExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessIpExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleUnlessIpExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleUnlessIpExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessIpExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessIpExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessIpExpressionOutputReference {
    return new MailmanagerRuleSetRuleUnlessIpExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute: string;
}

export function mailmanagerRuleSetRuleUnlessNumberExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
  }
}


export function mailmanagerRuleSetRuleUnlessNumberExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessNumberExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class MailmanagerRuleSetRuleUnlessNumberExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessNumberExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleUnlessNumberExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessNumberExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#value MailmanagerRuleSet#value}
  */
  readonly value: number;
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessNumberExpressionToTerraform(struct?: MailmanagerRuleSetRuleUnlessNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.numberToTerraform(struct!.value),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleUnlessNumberExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleUnlessNumberExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessNumberExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessNumberExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessNumberExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessNumberExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessNumberExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessNumberExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleUnlessNumberExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleUnlessNumberExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessNumberExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessNumberExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessNumberExpressionOutputReference {
    return new MailmanagerRuleSetRuleUnlessNumberExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analyzer MailmanagerRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#result_field MailmanagerRuleSet#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessStringExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#client_certificate_attribute MailmanagerRuleSet#client_certificate_attribute}
  */
  readonly clientCertificateAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#mime_header_attribute MailmanagerRuleSet#mime_header_attribute}
  */
  readonly mimeHeaderAttribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analysis MailmanagerRuleSet#analysis}
  */
  readonly analysis?: MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessStringExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleUnlessStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    client_certificate_attribute: cdktn.stringToTerraform(struct!.clientCertificateAttribute),
    mime_header_attribute: cdktn.stringToTerraform(struct!.mimeHeaderAttribute),
    analysis: cdktn.listMapper(mailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
  }
}


export function mailmanagerRuleSetRuleUnlessStringExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessStringExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_attribute: {
      value: cdktn.stringToHclTerraform(struct!.clientCertificateAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_header_attribute: {
      value: cdktn.stringToHclTerraform(struct!.mimeHeaderAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessStringExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessStringExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._clientCertificateAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateAttribute = this._clientCertificateAttribute;
    }
    if (this._mimeHeaderAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeHeaderAttribute = this._mimeHeaderAttribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessStringExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._clientCertificateAttribute = undefined;
      this._mimeHeaderAttribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._clientCertificateAttribute = value.clientCertificateAttribute;
      this._mimeHeaderAttribute = value.mimeHeaderAttribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // client_certificate_attribute - computed: false, optional: true, required: false
  private _clientCertificateAttribute?: string; 
  public get clientCertificateAttribute() {
    return this.getStringAttribute('client_certificate_attribute');
  }
  public set clientCertificateAttribute(value: string) {
    this._clientCertificateAttribute = value;
  }
  public resetClientCertificateAttribute() {
    this._clientCertificateAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateAttributeInput() {
    return this._clientCertificateAttribute;
  }

  // mime_header_attribute - computed: false, optional: true, required: false
  private _mimeHeaderAttribute?: string; 
  public get mimeHeaderAttribute() {
    return this.getStringAttribute('mime_header_attribute');
  }
  public set mimeHeaderAttribute(value: string) {
    this._mimeHeaderAttribute = value;
  }
  public resetMimeHeaderAttribute() {
    this._mimeHeaderAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeHeaderAttributeInput() {
    return this._mimeHeaderAttribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerRuleSetRuleUnlessStringExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessStringExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessStringExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessStringExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleUnlessStringExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessStringExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleUnlessStringExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessStringExpressionToTerraform(struct?: MailmanagerRuleSetRuleUnlessStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleUnlessStringExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleUnlessStringExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessStringExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessStringExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessStringExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessStringExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessStringExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessStringExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleUnlessStringExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleUnlessStringExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessStringExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessStringExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessStringExpressionOutputReference {
    return new MailmanagerRuleSetRuleUnlessStringExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analyzer MailmanagerRuleSet#analyzer}
  */
  readonly analyzer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#result_field MailmanagerRuleSet#result_field}
  */
  readonly resultField: string;
}

export function mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisToTerraform(struct?: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    analyzer: cdktn.stringToTerraform(struct!.analyzer),
    result_field: cdktn.stringToTerraform(struct!.resultField),
  }
}


export function mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    analyzer: {
      value: cdktn.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_field: {
      value: cdktn.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._resultField = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._resultField = value.resultField;
    }
  }

  // analyzer - computed: false, optional: false, required: true
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // result_field - computed: false, optional: false, required: true
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}

export class MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisOutputReference {
    return new MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#attribute MailmanagerRuleSet#attribute}
  */
  readonly attribute?: string;
  /**
  * analysis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#analysis MailmanagerRuleSet#analysis}
  */
  readonly analysis?: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateToTerraform(struct?: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attribute: cdktn.stringToTerraform(struct!.attribute),
    analysis: cdktn.listMapper(mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisToTerraform, true)(struct!.analysis),
  }
}


export function mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    analysis: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisToHclTerraform, true)(struct!.analysis),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._analysis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysis = this._analysis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._analysis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._analysis.internalValue = value.analysis;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // analysis - computed: false, optional: true, required: false
  private _analysis = new MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysisList(this, "analysis", false);
  public get analysis() {
    return this._analysis;
  }
  public putAnalysis(value: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateAnalysis[] | cdktn.IResolvable) {
    this._analysis.internalValue = value;
  }
  public resetAnalysis() {
    this._analysis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisInput() {
    return this._analysis.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateOutputReference {
    return new MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnlessVerdictExpression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#operator MailmanagerRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#values MailmanagerRuleSet#values}
  */
  readonly values: string[];
  /**
  * evaluate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#evaluate MailmanagerRuleSet#evaluate}
  */
  readonly evaluate?: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessVerdictExpressionToTerraform(struct?: MailmanagerRuleSetRuleUnlessVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    evaluate: cdktn.listMapper(mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateToTerraform, true)(struct!.evaluate),
  }
}


export function mailmanagerRuleSetRuleUnlessVerdictExpressionToHclTerraform(struct?: MailmanagerRuleSetRuleUnlessVerdictExpression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    evaluate: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateToHclTerraform, true)(struct!.evaluate),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessVerdictExpressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnlessVerdictExpression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._evaluate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluate = this._evaluate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnlessVerdictExpression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
      this._evaluate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
      this._evaluate.internalValue = value.evaluate;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // evaluate - computed: false, optional: true, required: false
  private _evaluate = new MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluateList(this, "evaluate", false);
  public get evaluate() {
    return this._evaluate;
  }
  public putEvaluate(value: MailmanagerRuleSetRuleUnlessVerdictExpressionEvaluate[] | cdktn.IResolvable) {
    this._evaluate.internalValue = value;
  }
  public resetEvaluate() {
    this._evaluate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateInput() {
    return this._evaluate.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessVerdictExpressionList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnlessVerdictExpression[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessVerdictExpressionOutputReference {
    return new MailmanagerRuleSetRuleUnlessVerdictExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRuleUnless {
  /**
  * boolean_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#boolean_expression MailmanagerRuleSet#boolean_expression}
  */
  readonly booleanExpression?: MailmanagerRuleSetRuleUnlessBooleanExpression[] | cdktn.IResolvable;
  /**
  * dmarc_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#dmarc_expression MailmanagerRuleSet#dmarc_expression}
  */
  readonly dmarcExpression?: MailmanagerRuleSetRuleUnlessDmarcExpression[] | cdktn.IResolvable;
  /**
  * ip_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#ip_expression MailmanagerRuleSet#ip_expression}
  */
  readonly ipExpression?: MailmanagerRuleSetRuleUnlessIpExpression[] | cdktn.IResolvable;
  /**
  * number_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#number_expression MailmanagerRuleSet#number_expression}
  */
  readonly numberExpression?: MailmanagerRuleSetRuleUnlessNumberExpression[] | cdktn.IResolvable;
  /**
  * string_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#string_expression MailmanagerRuleSet#string_expression}
  */
  readonly stringExpression?: MailmanagerRuleSetRuleUnlessStringExpression[] | cdktn.IResolvable;
  /**
  * verdict_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#verdict_expression MailmanagerRuleSet#verdict_expression}
  */
  readonly verdictExpression?: MailmanagerRuleSetRuleUnlessVerdictExpression[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleUnlessToTerraform(struct?: MailmanagerRuleSetRuleUnless | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean_expression: cdktn.listMapper(mailmanagerRuleSetRuleUnlessBooleanExpressionToTerraform, true)(struct!.booleanExpression),
    dmarc_expression: cdktn.listMapper(mailmanagerRuleSetRuleUnlessDmarcExpressionToTerraform, true)(struct!.dmarcExpression),
    ip_expression: cdktn.listMapper(mailmanagerRuleSetRuleUnlessIpExpressionToTerraform, true)(struct!.ipExpression),
    number_expression: cdktn.listMapper(mailmanagerRuleSetRuleUnlessNumberExpressionToTerraform, true)(struct!.numberExpression),
    string_expression: cdktn.listMapper(mailmanagerRuleSetRuleUnlessStringExpressionToTerraform, true)(struct!.stringExpression),
    verdict_expression: cdktn.listMapper(mailmanagerRuleSetRuleUnlessVerdictExpressionToTerraform, true)(struct!.verdictExpression),
  }
}


export function mailmanagerRuleSetRuleUnlessToHclTerraform(struct?: MailmanagerRuleSetRuleUnless | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessBooleanExpressionToHclTerraform, true)(struct!.booleanExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessBooleanExpressionList",
    },
    dmarc_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessDmarcExpressionToHclTerraform, true)(struct!.dmarcExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessDmarcExpressionList",
    },
    ip_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessIpExpressionToHclTerraform, true)(struct!.ipExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessIpExpressionList",
    },
    number_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessNumberExpressionToHclTerraform, true)(struct!.numberExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessNumberExpressionList",
    },
    string_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessStringExpressionToHclTerraform, true)(struct!.stringExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessStringExpressionList",
    },
    verdict_expression: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessVerdictExpressionToHclTerraform, true)(struct!.verdictExpression),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessVerdictExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleUnlessOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRuleUnless | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanExpression = this._booleanExpression?.internalValue;
    }
    if (this._dmarcExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmarcExpression = this._dmarcExpression?.internalValue;
    }
    if (this._ipExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExpression = this._ipExpression?.internalValue;
    }
    if (this._numberExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberExpression = this._numberExpression?.internalValue;
    }
    if (this._stringExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringExpression = this._stringExpression?.internalValue;
    }
    if (this._verdictExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verdictExpression = this._verdictExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRuleUnless | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = undefined;
      this._dmarcExpression.internalValue = undefined;
      this._ipExpression.internalValue = undefined;
      this._numberExpression.internalValue = undefined;
      this._stringExpression.internalValue = undefined;
      this._verdictExpression.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanExpression.internalValue = value.booleanExpression;
      this._dmarcExpression.internalValue = value.dmarcExpression;
      this._ipExpression.internalValue = value.ipExpression;
      this._numberExpression.internalValue = value.numberExpression;
      this._stringExpression.internalValue = value.stringExpression;
      this._verdictExpression.internalValue = value.verdictExpression;
    }
  }

  // boolean_expression - computed: false, optional: true, required: false
  private _booleanExpression = new MailmanagerRuleSetRuleUnlessBooleanExpressionList(this, "boolean_expression", false);
  public get booleanExpression() {
    return this._booleanExpression;
  }
  public putBooleanExpression(value: MailmanagerRuleSetRuleUnlessBooleanExpression[] | cdktn.IResolvable) {
    this._booleanExpression.internalValue = value;
  }
  public resetBooleanExpression() {
    this._booleanExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanExpressionInput() {
    return this._booleanExpression.internalValue;
  }

  // dmarc_expression - computed: false, optional: true, required: false
  private _dmarcExpression = new MailmanagerRuleSetRuleUnlessDmarcExpressionList(this, "dmarc_expression", false);
  public get dmarcExpression() {
    return this._dmarcExpression;
  }
  public putDmarcExpression(value: MailmanagerRuleSetRuleUnlessDmarcExpression[] | cdktn.IResolvable) {
    this._dmarcExpression.internalValue = value;
  }
  public resetDmarcExpression() {
    this._dmarcExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmarcExpressionInput() {
    return this._dmarcExpression.internalValue;
  }

  // ip_expression - computed: false, optional: true, required: false
  private _ipExpression = new MailmanagerRuleSetRuleUnlessIpExpressionList(this, "ip_expression", false);
  public get ipExpression() {
    return this._ipExpression;
  }
  public putIpExpression(value: MailmanagerRuleSetRuleUnlessIpExpression[] | cdktn.IResolvable) {
    this._ipExpression.internalValue = value;
  }
  public resetIpExpression() {
    this._ipExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExpressionInput() {
    return this._ipExpression.internalValue;
  }

  // number_expression - computed: false, optional: true, required: false
  private _numberExpression = new MailmanagerRuleSetRuleUnlessNumberExpressionList(this, "number_expression", false);
  public get numberExpression() {
    return this._numberExpression;
  }
  public putNumberExpression(value: MailmanagerRuleSetRuleUnlessNumberExpression[] | cdktn.IResolvable) {
    this._numberExpression.internalValue = value;
  }
  public resetNumberExpression() {
    this._numberExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberExpressionInput() {
    return this._numberExpression.internalValue;
  }

  // string_expression - computed: false, optional: true, required: false
  private _stringExpression = new MailmanagerRuleSetRuleUnlessStringExpressionList(this, "string_expression", false);
  public get stringExpression() {
    return this._stringExpression;
  }
  public putStringExpression(value: MailmanagerRuleSetRuleUnlessStringExpression[] | cdktn.IResolvable) {
    this._stringExpression.internalValue = value;
  }
  public resetStringExpression() {
    this._stringExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringExpressionInput() {
    return this._stringExpression.internalValue;
  }

  // verdict_expression - computed: false, optional: true, required: false
  private _verdictExpression = new MailmanagerRuleSetRuleUnlessVerdictExpressionList(this, "verdict_expression", false);
  public get verdictExpression() {
    return this._verdictExpression;
  }
  public putVerdictExpression(value: MailmanagerRuleSetRuleUnlessVerdictExpression[] | cdktn.IResolvable) {
    this._verdictExpression.internalValue = value;
  }
  public resetVerdictExpression() {
    this._verdictExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verdictExpressionInput() {
    return this._verdictExpression.internalValue;
  }
}

export class MailmanagerRuleSetRuleUnlessList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRuleUnless[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleUnlessOutputReference {
    return new MailmanagerRuleSetRuleUnlessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MailmanagerRuleSetRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#name MailmanagerRuleSet#name}
  */
  readonly name?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#action MailmanagerRuleSet#action}
  */
  readonly action?: MailmanagerRuleSetRuleAction[] | cdktn.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#condition MailmanagerRuleSet#condition}
  */
  readonly condition?: MailmanagerRuleSetRuleCondition[] | cdktn.IResolvable;
  /**
  * unless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#unless MailmanagerRuleSet#unless}
  */
  readonly unless?: MailmanagerRuleSetRuleUnless[] | cdktn.IResolvable;
}

export function mailmanagerRuleSetRuleToTerraform(struct?: MailmanagerRuleSetRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    action: cdktn.listMapper(mailmanagerRuleSetRuleActionToTerraform, true)(struct!.action),
    condition: cdktn.listMapper(mailmanagerRuleSetRuleConditionToTerraform, true)(struct!.condition),
    unless: cdktn.listMapper(mailmanagerRuleSetRuleUnlessToTerraform, true)(struct!.unless),
  }
}


export function mailmanagerRuleSetRuleToHclTerraform(struct?: MailmanagerRuleSetRule | cdktn.IResolvable): any {
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
    action: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleActionList",
    },
    condition: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleConditionList",
    },
    unless: {
      value: cdktn.listMapperHcl(mailmanagerRuleSetRuleUnlessToHclTerraform, true)(struct!.unless),
      isBlock: true,
      type: "list",
      storageClassType: "MailmanagerRuleSetRuleUnlessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MailmanagerRuleSetRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MailmanagerRuleSetRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._unless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unless = this._unless?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MailmanagerRuleSetRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._condition.internalValue = undefined;
      this._unless.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._condition.internalValue = value.condition;
      this._unless.internalValue = value.unless;
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

  // action - computed: false, optional: true, required: false
  private _action = new MailmanagerRuleSetRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: MailmanagerRuleSetRuleAction[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new MailmanagerRuleSetRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MailmanagerRuleSetRuleCondition[] | cdktn.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // unless - computed: false, optional: true, required: false
  private _unless = new MailmanagerRuleSetRuleUnlessList(this, "unless", false);
  public get unless() {
    return this._unless;
  }
  public putUnless(value: MailmanagerRuleSetRuleUnless[] | cdktn.IResolvable) {
    this._unless.internalValue = value;
  }
  public resetUnless() {
    this._unless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlessInput() {
    return this._unless.internalValue;
  }
}

export class MailmanagerRuleSetRuleList extends cdktn.ComplexList {
  public internalValue? : MailmanagerRuleSetRule[] | cdktn.IResolvable

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
  public get(index: number): MailmanagerRuleSetRuleOutputReference {
    return new MailmanagerRuleSetRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set aws_mailmanager_rule_set}
*/
export class MailmanagerRuleSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_mailmanager_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MailmanagerRuleSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailmanagerRuleSet to import
  * @param importFromId The id of the existing MailmanagerRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailmanagerRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_mailmanager_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_rule_set aws_mailmanager_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailmanagerRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: MailmanagerRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_mailmanager_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification_date - computed: true, optional: false, required: false
  public get lastModificationDate() {
    return this.getStringAttribute('last_modification_date');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new MailmanagerRuleSetRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: MailmanagerRuleSetRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      rule: cdktn.listMapper(mailmanagerRuleSetRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rule: {
        value: cdktn.listMapperHcl(mailmanagerRuleSetRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MailmanagerRuleSetRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
