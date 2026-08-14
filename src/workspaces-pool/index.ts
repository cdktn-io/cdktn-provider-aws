/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspacesPoolConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#application_settings WorkspacesPool#application_settings}
  */
  readonly applicationSettings?: WorkspacesPoolApplicationSettings[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#bundle_id WorkspacesPool#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#description WorkspacesPool#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#directory_id WorkspacesPool#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#pool_name WorkspacesPool#pool_name}
  */
  readonly poolName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#region WorkspacesPool#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#running_mode WorkspacesPool#running_mode}
  */
  readonly runningMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#tags WorkspacesPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#timeout_settings WorkspacesPool#timeout_settings}
  */
  readonly timeoutSettings?: WorkspacesPoolTimeoutSettings[] | cdktn.IResolvable;
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#capacity WorkspacesPool#capacity}
  */
  readonly capacity?: WorkspacesPoolCapacity[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#timeouts WorkspacesPool#timeouts}
  */
  readonly timeouts?: WorkspacesPoolTimeouts;
}
export interface WorkspacesPoolApplicationSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#settings_group WorkspacesPool#settings_group}
  */
  readonly settingsGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#status WorkspacesPool#status}
  */
  readonly status?: string;
}

export function workspacesPoolApplicationSettingsToTerraform(struct?: WorkspacesPoolApplicationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    settings_group: cdktn.stringToTerraform(struct!.settingsGroup),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function workspacesPoolApplicationSettingsToHclTerraform(struct?: WorkspacesPoolApplicationSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    settings_group: {
      value: cdktn.stringToHclTerraform(struct!.settingsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesPoolApplicationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspacesPoolApplicationSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settingsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsGroup = this._settingsGroup;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesPoolApplicationSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._settingsGroup = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._settingsGroup = value.settingsGroup;
      this._status = value.status;
    }
  }

  // settings_group - computed: true, optional: true, required: false
  private _settingsGroup?: string; 
  public get settingsGroup() {
    return this.getStringAttribute('settings_group');
  }
  public set settingsGroup(value: string) {
    this._settingsGroup = value;
  }
  public resetSettingsGroup() {
    this._settingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsGroupInput() {
    return this._settingsGroup;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class WorkspacesPoolApplicationSettingsList extends cdktn.ComplexList {
  public internalValue? : WorkspacesPoolApplicationSettings[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesPoolApplicationSettingsOutputReference {
    return new WorkspacesPoolApplicationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspacesPoolCapacityStatus {
}

export function workspacesPoolCapacityStatusToTerraform(struct?: WorkspacesPoolCapacityStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function workspacesPoolCapacityStatusToHclTerraform(struct?: WorkspacesPoolCapacityStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkspacesPoolCapacityStatusOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspacesPoolCapacityStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesPoolCapacityStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_user_sessions - computed: true, optional: false, required: false
  public get activeUserSessions() {
    return this.getNumberAttribute('active_user_sessions');
  }

  // actual_user_sessions - computed: true, optional: false, required: false
  public get actualUserSessions() {
    return this.getNumberAttribute('actual_user_sessions');
  }

  // available_user_sessions - computed: true, optional: false, required: false
  public get availableUserSessions() {
    return this.getNumberAttribute('available_user_sessions');
  }

  // desired_user_sessions - computed: true, optional: false, required: false
  public get desiredUserSessions() {
    return this.getNumberAttribute('desired_user_sessions');
  }
}

export class WorkspacesPoolCapacityStatusList extends cdktn.ComplexList {

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
  public get(index: number): WorkspacesPoolCapacityStatusOutputReference {
    return new WorkspacesPoolCapacityStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspacesPoolTimeoutSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#disconnect_timeout_in_seconds WorkspacesPool#disconnect_timeout_in_seconds}
  */
  readonly disconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesPool#idle_disconnect_timeout_in_seconds}
  */
  readonly idleDisconnectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#max_user_duration_in_seconds WorkspacesPool#max_user_duration_in_seconds}
  */
  readonly maxUserDurationInSeconds?: number;
}

export function workspacesPoolTimeoutSettingsToTerraform(struct?: WorkspacesPoolTimeoutSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disconnect_timeout_in_seconds: cdktn.numberToTerraform(struct!.disconnectTimeoutInSeconds),
    idle_disconnect_timeout_in_seconds: cdktn.numberToTerraform(struct!.idleDisconnectTimeoutInSeconds),
    max_user_duration_in_seconds: cdktn.numberToTerraform(struct!.maxUserDurationInSeconds),
  }
}


export function workspacesPoolTimeoutSettingsToHclTerraform(struct?: WorkspacesPoolTimeoutSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disconnect_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.disconnectTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_disconnect_timeout_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.idleDisconnectTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_user_duration_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxUserDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesPoolTimeoutSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspacesPoolTimeoutSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disconnectTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectTimeoutInSeconds = this._disconnectTimeoutInSeconds;
    }
    if (this._idleDisconnectTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleDisconnectTimeoutInSeconds = this._idleDisconnectTimeoutInSeconds;
    }
    if (this._maxUserDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUserDurationInSeconds = this._maxUserDurationInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesPoolTimeoutSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disconnectTimeoutInSeconds = undefined;
      this._idleDisconnectTimeoutInSeconds = undefined;
      this._maxUserDurationInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disconnectTimeoutInSeconds = value.disconnectTimeoutInSeconds;
      this._idleDisconnectTimeoutInSeconds = value.idleDisconnectTimeoutInSeconds;
      this._maxUserDurationInSeconds = value.maxUserDurationInSeconds;
    }
  }

  // disconnect_timeout_in_seconds - computed: true, optional: true, required: false
  private _disconnectTimeoutInSeconds?: number; 
  public get disconnectTimeoutInSeconds() {
    return this.getNumberAttribute('disconnect_timeout_in_seconds');
  }
  public set disconnectTimeoutInSeconds(value: number) {
    this._disconnectTimeoutInSeconds = value;
  }
  public resetDisconnectTimeoutInSeconds() {
    this._disconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectTimeoutInSecondsInput() {
    return this._disconnectTimeoutInSeconds;
  }

  // idle_disconnect_timeout_in_seconds - computed: true, optional: true, required: false
  private _idleDisconnectTimeoutInSeconds?: number; 
  public get idleDisconnectTimeoutInSeconds() {
    return this.getNumberAttribute('idle_disconnect_timeout_in_seconds');
  }
  public set idleDisconnectTimeoutInSeconds(value: number) {
    this._idleDisconnectTimeoutInSeconds = value;
  }
  public resetIdleDisconnectTimeoutInSeconds() {
    this._idleDisconnectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDisconnectTimeoutInSecondsInput() {
    return this._idleDisconnectTimeoutInSeconds;
  }

  // max_user_duration_in_seconds - computed: true, optional: true, required: false
  private _maxUserDurationInSeconds?: number; 
  public get maxUserDurationInSeconds() {
    return this.getNumberAttribute('max_user_duration_in_seconds');
  }
  public set maxUserDurationInSeconds(value: number) {
    this._maxUserDurationInSeconds = value;
  }
  public resetMaxUserDurationInSeconds() {
    this._maxUserDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserDurationInSecondsInput() {
    return this._maxUserDurationInSeconds;
  }
}

export class WorkspacesPoolTimeoutSettingsList extends cdktn.ComplexList {
  public internalValue? : WorkspacesPoolTimeoutSettings[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesPoolTimeoutSettingsOutputReference {
    return new WorkspacesPoolTimeoutSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspacesPoolCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#desired_user_sessions WorkspacesPool#desired_user_sessions}
  */
  readonly desiredUserSessions: number;
}

export function workspacesPoolCapacityToTerraform(struct?: WorkspacesPoolCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    desired_user_sessions: cdktn.numberToTerraform(struct!.desiredUserSessions),
  }
}


export function workspacesPoolCapacityToHclTerraform(struct?: WorkspacesPoolCapacity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    desired_user_sessions: {
      value: cdktn.numberToHclTerraform(struct!.desiredUserSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesPoolCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspacesPoolCapacity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredUserSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredUserSessions = this._desiredUserSessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesPoolCapacity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredUserSessions = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredUserSessions = value.desiredUserSessions;
    }
  }

  // desired_user_sessions - computed: false, optional: false, required: true
  private _desiredUserSessions?: number; 
  public get desiredUserSessions() {
    return this.getNumberAttribute('desired_user_sessions');
  }
  public set desiredUserSessions(value: number) {
    this._desiredUserSessions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredUserSessionsInput() {
    return this._desiredUserSessions;
  }
}

export class WorkspacesPoolCapacityList extends cdktn.ComplexList {
  public internalValue? : WorkspacesPoolCapacity[] | cdktn.IResolvable

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
  public get(index: number): WorkspacesPoolCapacityOutputReference {
    return new WorkspacesPoolCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspacesPoolTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#create WorkspacesPool#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#delete WorkspacesPool#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#update WorkspacesPool#update}
  */
  readonly update?: string;
}

export function workspacesPoolTimeoutsToTerraform(struct?: WorkspacesPoolTimeouts | cdktn.IResolvable): any {
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


export function workspacesPoolTimeoutsToHclTerraform(struct?: WorkspacesPoolTimeouts | cdktn.IResolvable): any {
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

export class WorkspacesPoolTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspacesPoolTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WorkspacesPoolTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool aws_workspaces_pool}
*/
export class WorkspacesPool extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspaces_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspacesPool resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspacesPool to import
  * @param importFromId The id of the existing WorkspacesPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspacesPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspaces_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspaces_pool aws_workspaces_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesPoolConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
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
    this._applicationSettings.internalValue = config.applicationSettings;
    this._bundleId = config.bundleId;
    this._description = config.description;
    this._directoryId = config.directoryId;
    this._poolName = config.poolName;
    this._region = config.region;
    this._runningMode = config.runningMode;
    this._tags = config.tags;
    this._timeoutSettings.internalValue = config.timeoutSettings;
    this._capacity.internalValue = config.capacity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_settings - computed: true, optional: true, required: false
  private _applicationSettings = new WorkspacesPoolApplicationSettingsList(this, "application_settings", false);
  public get applicationSettings() {
    return this._applicationSettings;
  }
  public putApplicationSettings(value: WorkspacesPoolApplicationSettings[] | cdktn.IResolvable) {
    this._applicationSettings.internalValue = value;
  }
  public resetApplicationSettings() {
    this._applicationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSettingsInput() {
    return this._applicationSettings.internalValue;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // capacity_status - computed: true, optional: false, required: false
  private _capacityStatus = new WorkspacesPoolCapacityStatusList(this, "capacity_status", false);
  public get capacityStatus() {
    return this._capacityStatus;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // pool_arn - computed: true, optional: false, required: false
  public get poolArn() {
    return this.getStringAttribute('pool_arn');
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
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

  // running_mode - computed: false, optional: false, required: true
  private _runningMode?: string; 
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }
  public set runningMode(value: string) {
    this._runningMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runningModeInput() {
    return this._runningMode;
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // timeout_settings - computed: true, optional: true, required: false
  private _timeoutSettings = new WorkspacesPoolTimeoutSettingsList(this, "timeout_settings", false);
  public get timeoutSettings() {
    return this._timeoutSettings;
  }
  public putTimeoutSettings(value: WorkspacesPoolTimeoutSettings[] | cdktn.IResolvable) {
    this._timeoutSettings.internalValue = value;
  }
  public resetTimeoutSettings() {
    this._timeoutSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSettingsInput() {
    return this._timeoutSettings.internalValue;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity = new WorkspacesPoolCapacityList(this, "capacity", false);
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: WorkspacesPoolCapacity[] | cdktn.IResolvable) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkspacesPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkspacesPoolTimeouts) {
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
      application_settings: cdktn.listMapper(workspacesPoolApplicationSettingsToTerraform, false)(this._applicationSettings.internalValue),
      bundle_id: cdktn.stringToTerraform(this._bundleId),
      description: cdktn.stringToTerraform(this._description),
      directory_id: cdktn.stringToTerraform(this._directoryId),
      pool_name: cdktn.stringToTerraform(this._poolName),
      region: cdktn.stringToTerraform(this._region),
      running_mode: cdktn.stringToTerraform(this._runningMode),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeout_settings: cdktn.listMapper(workspacesPoolTimeoutSettingsToTerraform, false)(this._timeoutSettings.internalValue),
      capacity: cdktn.listMapper(workspacesPoolCapacityToTerraform, true)(this._capacity.internalValue),
      timeouts: workspacesPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_settings: {
        value: cdktn.listMapperHcl(workspacesPoolApplicationSettingsToHclTerraform, false)(this._applicationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesPoolApplicationSettingsList",
      },
      bundle_id: {
        value: cdktn.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktn.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_name: {
        value: cdktn.stringToHclTerraform(this._poolName),
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
      running_mode: {
        value: cdktn.stringToHclTerraform(this._runningMode),
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
      timeout_settings: {
        value: cdktn.listMapperHcl(workspacesPoolTimeoutSettingsToHclTerraform, false)(this._timeoutSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesPoolTimeoutSettingsList",
      },
      capacity: {
        value: cdktn.listMapperHcl(workspacesPoolCapacityToHclTerraform, true)(this._capacity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesPoolCapacityList",
      },
      timeouts: {
        value: workspacesPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspacesPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
