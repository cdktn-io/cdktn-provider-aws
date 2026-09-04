/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreRegistryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#approval_configuration BedrockagentcoreRegistry#approval_configuration}
  */
  readonly approvalConfiguration?: BedrockagentcoreRegistryApprovalConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#authorizer_type BedrockagentcoreRegistry#authorizer_type}
  */
  readonly authorizerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#description BedrockagentcoreRegistry#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#name BedrockagentcoreRegistry#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#region BedrockagentcoreRegistry#region}
  */
  readonly region?: string;
  /**
  * authorizer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#authorizer_configuration BedrockagentcoreRegistry#authorizer_configuration}
  */
  readonly authorizerConfiguration?: BedrockagentcoreRegistryAuthorizerConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#timeouts BedrockagentcoreRegistry#timeouts}
  */
  readonly timeouts?: BedrockagentcoreRegistryTimeouts;
}
export interface BedrockagentcoreRegistryApprovalConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#auto_approval BedrockagentcoreRegistry#auto_approval}
  */
  readonly autoApproval?: boolean | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryApprovalConfigurationToTerraform(struct?: BedrockagentcoreRegistryApprovalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_approval: cdktn.booleanToTerraform(struct!.autoApproval),
  }
}


export function bedrockagentcoreRegistryApprovalConfigurationToHclTerraform(struct?: BedrockagentcoreRegistryApprovalConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_approval: {
      value: cdktn.booleanToHclTerraform(struct!.autoApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryApprovalConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryApprovalConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproval = this._autoApproval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryApprovalConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoApproval = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoApproval = value.autoApproval;
    }
  }

  // auto_approval - computed: true, optional: true, required: false
  private _autoApproval?: boolean | cdktn.IResolvable; 
  public get autoApproval() {
    return this.getBooleanAttribute('auto_approval');
  }
  public set autoApproval(value: boolean | cdktn.IResolvable) {
    this._autoApproval = value;
  }
  public resetAutoApproval() {
    this._autoApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalInput() {
    return this._autoApproval;
  }
}

export class BedrockagentcoreRegistryApprovalConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryApprovalConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryApprovalConfigurationOutputReference {
    return new BedrockagentcoreRegistryApprovalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#arn BedrockagentcoreRegistry#arn}
  */
  readonly arn: string;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#workload_identities BedrockagentcoreRegistry#workload_identities}
  */
  readonly workloadIdentities?: string[];
  /**
  * hosting_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#hosting_environment BedrockagentcoreRegistry#hosting_environment}
  */
  readonly hostingEnvironment?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workload_identities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workloadIdentities),
    hosting_environment: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToTerraform, true)(struct!.hostingEnvironment),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workload_identities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workloadIdentities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosting_environment: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentToHclTerraform, true)(struct!.hostingEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentities = this._workloadIdentities;
    }
    if (this._hostingEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostingEnvironment = this._hostingEnvironment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workloadIdentities = undefined;
      this._hostingEnvironment.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workloadIdentities = value.workloadIdentities;
      this._hostingEnvironment.internalValue = value.hostingEnvironment;
    }
  }

  // workload_identities - computed: false, optional: true, required: false
  private _workloadIdentities?: string[]; 
  public get workloadIdentities() {
    return this.getListAttribute('workload_identities');
  }
  public set workloadIdentities(value: string[]) {
    this._workloadIdentities = value;
  }
  public resetWorkloadIdentities() {
    this._workloadIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentitiesInput() {
    return this._workloadIdentities;
  }

  // hosting_environment - computed: false, optional: true, required: false
  private _hostingEnvironment = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList(this, "hosting_environment", false);
  public get hostingEnvironment() {
    return this._hostingEnvironment;
  }
  public putHostingEnvironment(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[] | cdktn.IResolvable) {
    this._hostingEnvironment.internalValue = value;
  }
  public resetHostingEnvironment() {
    this._hostingEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostingEnvironmentInput() {
    return this._hostingEnvironment.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#match_value_string BedrockagentcoreRegistry#match_value_string}
  */
  readonly matchValueString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#match_value_string_list BedrockagentcoreRegistry#match_value_string_list}
  */
  readonly matchValueStringList?: string[];
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_value_string: cdktn.stringToTerraform(struct!.matchValueString),
    match_value_string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.matchValueStringList),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_value_string: {
      value: cdktn.stringToHclTerraform(struct!.matchValueString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_value_string_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.matchValueStringList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchValueString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueString = this._matchValueString;
    }
    if (this._matchValueStringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchValueStringList = this._matchValueStringList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchValueString = undefined;
      this._matchValueStringList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchValueString = value.matchValueString;
      this._matchValueStringList = value.matchValueStringList;
    }
  }

  // match_value_string - computed: false, optional: true, required: false
  private _matchValueString?: string; 
  public get matchValueString() {
    return this.getStringAttribute('match_value_string');
  }
  public set matchValueString(value: string) {
    this._matchValueString = value;
  }
  public resetMatchValueString() {
    this._matchValueString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringInput() {
    return this._matchValueString;
  }

  // match_value_string_list - computed: false, optional: true, required: false
  private _matchValueStringList?: string[]; 
  public get matchValueStringList() {
    return cdktn.Fn.tolist(this.getListAttribute('match_value_string_list'));
  }
  public set matchValueStringList(value: string[]) {
    this._matchValueStringList = value;
  }
  public resetMatchValueStringList() {
    this._matchValueStringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueStringListInput() {
    return this._matchValueStringList;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#claim_match_operator BedrockagentcoreRegistry#claim_match_operator}
  */
  readonly claimMatchOperator: string;
  /**
  * claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#claim_match_value BedrockagentcoreRegistry#claim_match_value}
  */
  readonly claimMatchValue?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    claim_match_operator: cdktn.stringToTerraform(struct!.claimMatchOperator),
    claim_match_value: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToTerraform, true)(struct!.claimMatchValue),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    claim_match_operator: {
      value: cdktn.stringToHclTerraform(struct!.claimMatchOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claim_match_value: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueToHclTerraform, true)(struct!.claimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimMatchOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchOperator = this._claimMatchOperator;
    }
    if (this._claimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimMatchValue = this._claimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimMatchOperator = undefined;
      this._claimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimMatchOperator = value.claimMatchOperator;
      this._claimMatchValue.internalValue = value.claimMatchValue;
    }
  }

  // claim_match_operator - computed: false, optional: false, required: true
  private _claimMatchOperator?: string; 
  public get claimMatchOperator() {
    return this.getStringAttribute('claim_match_operator');
  }
  public set claimMatchOperator(value: string) {
    this._claimMatchOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchOperatorInput() {
    return this._claimMatchOperator;
  }

  // claim_match_value - computed: false, optional: true, required: false
  private _claimMatchValue = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(this, "claim_match_value", false);
  public get claimMatchValue() {
    return this._claimMatchValue;
  }
  public putClaimMatchValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[] | cdktn.IResolvable) {
    this._claimMatchValue.internalValue = value;
  }
  public resetClaimMatchValue() {
    this._claimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchValueInput() {
    return this._claimMatchValue.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#inbound_token_claim_name BedrockagentcoreRegistry#inbound_token_claim_name}
  */
  readonly inboundTokenClaimName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#inbound_token_claim_value_type BedrockagentcoreRegistry#inbound_token_claim_value_type}
  */
  readonly inboundTokenClaimValueType: string;
  /**
  * authorizing_claim_match_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#authorizing_claim_match_value BedrockagentcoreRegistry#authorizing_claim_match_value}
  */
  readonly authorizingClaimMatchValue?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inbound_token_claim_name: cdktn.stringToTerraform(struct!.inboundTokenClaimName),
    inbound_token_claim_value_type: cdktn.stringToTerraform(struct!.inboundTokenClaimValueType),
    authorizing_claim_match_value: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToTerraform, true)(struct!.authorizingClaimMatchValue),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inbound_token_claim_name: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_token_claim_value_type: {
      value: cdktn.stringToHclTerraform(struct!.inboundTokenClaimValueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizing_claim_match_value: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueToHclTerraform, true)(struct!.authorizingClaimMatchValue),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundTokenClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimName = this._inboundTokenClaimName;
    }
    if (this._inboundTokenClaimValueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTokenClaimValueType = this._inboundTokenClaimValueType;
    }
    if (this._authorizingClaimMatchValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizingClaimMatchValue = this._authorizingClaimMatchValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundTokenClaimName = undefined;
      this._inboundTokenClaimValueType = undefined;
      this._authorizingClaimMatchValue.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inboundTokenClaimName = value.inboundTokenClaimName;
      this._inboundTokenClaimValueType = value.inboundTokenClaimValueType;
      this._authorizingClaimMatchValue.internalValue = value.authorizingClaimMatchValue;
    }
  }

  // inbound_token_claim_name - computed: false, optional: false, required: true
  private _inboundTokenClaimName?: string; 
  public get inboundTokenClaimName() {
    return this.getStringAttribute('inbound_token_claim_name');
  }
  public set inboundTokenClaimName(value: string) {
    this._inboundTokenClaimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimNameInput() {
    return this._inboundTokenClaimName;
  }

  // inbound_token_claim_value_type - computed: false, optional: false, required: true
  private _inboundTokenClaimValueType?: string; 
  public get inboundTokenClaimValueType() {
    return this.getStringAttribute('inbound_token_claim_value_type');
  }
  public set inboundTokenClaimValueType(value: string) {
    this._inboundTokenClaimValueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTokenClaimValueTypeInput() {
    return this._inboundTokenClaimValueType;
  }

  // authorizing_claim_match_value - computed: false, optional: true, required: false
  private _authorizingClaimMatchValue = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(this, "authorizing_claim_match_value", false);
  public get authorizingClaimMatchValue() {
    return this._authorizingClaimMatchValue;
  }
  public putAuthorizingClaimMatchValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[] | cdktn.IResolvable) {
    this._authorizingClaimMatchValue.internalValue = value;
  }
  public resetAuthorizingClaimMatchValue() {
    this._authorizingClaimMatchValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizingClaimMatchValueInput() {
    return this._authorizingClaimMatchValue.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#endpoint_ip_address_type BedrockagentcoreRegistry#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#routing_domain BedrockagentcoreRegistry#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#security_group_ids BedrockagentcoreRegistry#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#subnet_ids BedrockagentcoreRegistry#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#tags BedrockagentcoreRegistry#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#vpc_identifier BedrockagentcoreRegistry#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
    routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_domain: {
      value: cdktn.stringToHclTerraform(struct!.routingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_identifier: {
      value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIpAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
    }
    if (this._routingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingDomain = this._routingDomain;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdentifier = this._vpcIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = undefined;
      this._routingDomain = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._vpcIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = value.endpointIpAddressType;
      this._routingDomain = value.routingDomain;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._vpcIdentifier = value.vpcIdentifier;
    }
  }

  // endpoint_ip_address_type - computed: false, optional: false, required: true
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // routing_domain - computed: false, optional: true, required: false
  private _routingDomain?: string; 
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }
  public set routingDomain(value: string) {
    this._routingDomain = value;
  }
  public resetRoutingDomain() {
    this._routingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingDomainInput() {
    return this._routingDomain;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_identifier - computed: false, optional: false, required: true
  private _vpcIdentifier?: string; 
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
  public set vpcIdentifier(value: string) {
    this._vpcIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdentifierInput() {
    return this._vpcIdentifier;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#resource_configuration_identifier BedrockagentcoreRegistry#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier?: string;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
    }
  }

  // resource_configuration_identifier - computed: false, optional: true, required: false
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  public resetResourceConfigurationIdentifier() {
    this._resourceConfigurationIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#managed_vpc_resource BedrockagentcoreRegistry#managed_vpc_resource}
  */
  readonly managedVpcResource?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#self_managed_lattice_resource BedrockagentcoreRegistry#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedVpcResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
    }
    if (this._selfManagedLatticeResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = undefined;
      this._selfManagedLatticeResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = value.managedVpcResource;
      this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
    }
  }

  // managed_vpc_resource - computed: false, optional: true, required: false
  private _managedVpcResource = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[] | cdktn.IResolvable) {
    this._managedVpcResource.internalValue = value;
  }
  public resetManagedVpcResource() {
    this._managedVpcResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVpcResourceInput() {
    return this._managedVpcResource.internalValue;
  }

  // self_managed_lattice_resource - computed: false, optional: true, required: false
  private _selfManagedLatticeResource = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable) {
    this._selfManagedLatticeResource.internalValue = value;
  }
  public resetSelfManagedLatticeResource() {
    this._selfManagedLatticeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedLatticeResourceInput() {
    return this._selfManagedLatticeResource.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#endpoint_ip_address_type BedrockagentcoreRegistry#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#routing_domain BedrockagentcoreRegistry#routing_domain}
  */
  readonly routingDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#security_group_ids BedrockagentcoreRegistry#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#subnet_ids BedrockagentcoreRegistry#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#tags BedrockagentcoreRegistry#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#vpc_identifier BedrockagentcoreRegistry#vpc_identifier}
  */
  readonly vpcIdentifier: string;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_ip_address_type: cdktn.stringToTerraform(struct!.endpointIpAddressType),
    routing_domain: cdktn.stringToTerraform(struct!.routingDomain),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    vpc_identifier: cdktn.stringToTerraform(struct!.vpcIdentifier),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_ip_address_type: {
      value: cdktn.stringToHclTerraform(struct!.endpointIpAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_domain: {
      value: cdktn.stringToHclTerraform(struct!.routingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_identifier: {
      value: cdktn.stringToHclTerraform(struct!.vpcIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointIpAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIpAddressType = this._endpointIpAddressType;
    }
    if (this._routingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingDomain = this._routingDomain;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIdentifier = this._vpcIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = undefined;
      this._routingDomain = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._vpcIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointIpAddressType = value.endpointIpAddressType;
      this._routingDomain = value.routingDomain;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._vpcIdentifier = value.vpcIdentifier;
    }
  }

  // endpoint_ip_address_type - computed: false, optional: false, required: true
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // routing_domain - computed: false, optional: true, required: false
  private _routingDomain?: string; 
  public get routingDomain() {
    return this.getStringAttribute('routing_domain');
  }
  public set routingDomain(value: string) {
    this._routingDomain = value;
  }
  public resetRoutingDomain() {
    this._routingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingDomainInput() {
    return this._routingDomain;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_identifier - computed: false, optional: false, required: true
  private _vpcIdentifier?: string; 
  public get vpcIdentifier() {
    return this.getStringAttribute('vpc_identifier');
  }
  public set vpcIdentifier(value: string) {
    this._vpcIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdentifierInput() {
    return this._vpcIdentifier;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#resource_configuration_identifier BedrockagentcoreRegistry#resource_configuration_identifier}
  */
  readonly resourceConfigurationIdentifier?: string;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_configuration_identifier: cdktn.stringToTerraform(struct!.resourceConfigurationIdentifier),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_configuration_identifier: {
      value: cdktn.stringToHclTerraform(struct!.resourceConfigurationIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceConfigurationIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceConfigurationIdentifier = this._resourceConfigurationIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceConfigurationIdentifier = value.resourceConfigurationIdentifier;
    }
  }

  // resource_configuration_identifier - computed: false, optional: true, required: false
  private _resourceConfigurationIdentifier?: string; 
  public get resourceConfigurationIdentifier() {
    return this.getStringAttribute('resource_configuration_identifier');
  }
  public set resourceConfigurationIdentifier(value: string) {
    this._resourceConfigurationIdentifier = value;
  }
  public resetResourceConfigurationIdentifier() {
    this._resourceConfigurationIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationIdentifierInput() {
    return this._resourceConfigurationIdentifier;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint {
  /**
  * managed_vpc_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#managed_vpc_resource BedrockagentcoreRegistry#managed_vpc_resource}
  */
  readonly managedVpcResource?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable;
  /**
  * self_managed_lattice_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#self_managed_lattice_resource BedrockagentcoreRegistry#self_managed_lattice_resource}
  */
  readonly selfManagedLatticeResource?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_vpc_resource: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToTerraform, true)(struct!.managedVpcResource),
    self_managed_lattice_resource: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToTerraform, true)(struct!.selfManagedLatticeResource),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_vpc_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceToHclTerraform, true)(struct!.managedVpcResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList",
    },
    self_managed_lattice_resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceToHclTerraform, true)(struct!.selfManagedLatticeResource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedVpcResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedVpcResource = this._managedVpcResource?.internalValue;
    }
    if (this._selfManagedLatticeResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedLatticeResource = this._selfManagedLatticeResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = undefined;
      this._selfManagedLatticeResource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managedVpcResource.internalValue = value.managedVpcResource;
      this._selfManagedLatticeResource.internalValue = value.selfManagedLatticeResource;
    }
  }

  // managed_vpc_resource - computed: false, optional: true, required: false
  private _managedVpcResource = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList(this, "managed_vpc_resource", false);
  public get managedVpcResource() {
    return this._managedVpcResource;
  }
  public putManagedVpcResource(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[] | cdktn.IResolvable) {
    this._managedVpcResource.internalValue = value;
  }
  public resetManagedVpcResource() {
    this._managedVpcResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVpcResourceInput() {
    return this._managedVpcResource.internalValue;
  }

  // self_managed_lattice_resource - computed: false, optional: true, required: false
  private _selfManagedLatticeResource = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList(this, "self_managed_lattice_resource", false);
  public get selfManagedLatticeResource() {
    return this._selfManagedLatticeResource;
  }
  public putSelfManagedLatticeResource(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[] | cdktn.IResolvable) {
    this._selfManagedLatticeResource.internalValue = value;
  }
  public resetSelfManagedLatticeResource() {
    this._selfManagedLatticeResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedLatticeResourceInput() {
    return this._selfManagedLatticeResource.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#domain BedrockagentcoreRegistry#domain}
  */
  readonly domain: string;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#private_endpoint BedrockagentcoreRegistry#private_endpoint}
  */
  readonly privateEndpoint?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain: cdktn.stringToTerraform(struct!.domain),
    private_endpoint: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToTerraform, true)(struct!.privateEndpoint),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._privateEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._privateEndpoint.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._privateEndpoint.internalValue = value.privateEndpoint;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[] | cdktn.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#allowed_audience BedrockagentcoreRegistry#allowed_audience}
  */
  readonly allowedAudience?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#allowed_clients BedrockagentcoreRegistry#allowed_clients}
  */
  readonly allowedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#allowed_scopes BedrockagentcoreRegistry#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#discovery_url BedrockagentcoreRegistry#discovery_url}
  */
  readonly discoveryUrl: string;
  /**
  * allowed_workload_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#allowed_workload_configuration BedrockagentcoreRegistry#allowed_workload_configuration}
  */
  readonly allowedWorkloadConfiguration?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable;
  /**
  * custom_claim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#custom_claim BedrockagentcoreRegistry#custom_claim}
  */
  readonly customClaim?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable;
  /**
  * private_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#private_endpoint BedrockagentcoreRegistry#private_endpoint}
  */
  readonly privateEndpoint?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable;
  /**
  * private_endpoint_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#private_endpoint_overrides BedrockagentcoreRegistry#private_endpoint_overrides}
  */
  readonly privateEndpointOverrides?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_audience: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAudience),
    allowed_clients: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedClients),
    allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedScopes),
    discovery_url: cdktn.stringToTerraform(struct!.discoveryUrl),
    allowed_workload_configuration: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToTerraform, true)(struct!.allowedWorkloadConfiguration),
    custom_claim: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToTerraform, true)(struct!.customClaim),
    private_endpoint: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToTerraform, true)(struct!.privateEndpoint),
    private_endpoint_overrides: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToTerraform, true)(struct!.privateEndpointOverrides),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_audience: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAudience),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_clients: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discovery_url: {
      value: cdktn.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_workload_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationToHclTerraform, true)(struct!.allowedWorkloadConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList",
    },
    custom_claim: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimToHclTerraform, true)(struct!.customClaim),
      isBlock: true,
      type: "set",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList",
    },
    private_endpoint: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointToHclTerraform, true)(struct!.privateEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList",
    },
    private_endpoint_overrides: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesToHclTerraform, true)(struct!.privateEndpointOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudience = this._allowedAudience;
    }
    if (this._allowedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClients = this._allowedClients;
    }
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._allowedWorkloadConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedWorkloadConfiguration = this._allowedWorkloadConfiguration?.internalValue;
    }
    if (this._customClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaim = this._customClaim?.internalValue;
    }
    if (this._privateEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpoint = this._privateEndpoint?.internalValue;
    }
    if (this._privateEndpointOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointOverrides = this._privateEndpointOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudience = undefined;
      this._allowedClients = undefined;
      this._allowedScopes = undefined;
      this._discoveryUrl = undefined;
      this._allowedWorkloadConfiguration.internalValue = undefined;
      this._customClaim.internalValue = undefined;
      this._privateEndpoint.internalValue = undefined;
      this._privateEndpointOverrides.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudience = value.allowedAudience;
      this._allowedClients = value.allowedClients;
      this._allowedScopes = value.allowedScopes;
      this._discoveryUrl = value.discoveryUrl;
      this._allowedWorkloadConfiguration.internalValue = value.allowedWorkloadConfiguration;
      this._customClaim.internalValue = value.customClaim;
      this._privateEndpoint.internalValue = value.privateEndpoint;
      this._privateEndpointOverrides.internalValue = value.privateEndpointOverrides;
    }
  }

  // allowed_audience - computed: false, optional: true, required: false
  private _allowedAudience?: string[]; 
  public get allowedAudience() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_audience'));
  }
  public set allowedAudience(value: string[]) {
    this._allowedAudience = value;
  }
  public resetAllowedAudience() {
    this._allowedAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudienceInput() {
    return this._allowedAudience;
  }

  // allowed_clients - computed: false, optional: true, required: false
  private _allowedClients?: string[]; 
  public get allowedClients() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_clients'));
  }
  public set allowedClients(value: string[]) {
    this._allowedClients = value;
  }
  public resetAllowedClients() {
    this._allowedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClientsInput() {
    return this._allowedClients;
  }

  // allowed_scopes - computed: false, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_scopes'));
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // discovery_url - computed: false, optional: false, required: true
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // allowed_workload_configuration - computed: false, optional: true, required: false
  private _allowedWorkloadConfiguration = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList(this, "allowed_workload_configuration", false);
  public get allowedWorkloadConfiguration() {
    return this._allowedWorkloadConfiguration;
  }
  public putAllowedWorkloadConfiguration(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[] | cdktn.IResolvable) {
    this._allowedWorkloadConfiguration.internalValue = value;
  }
  public resetAllowedWorkloadConfiguration() {
    this._allowedWorkloadConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedWorkloadConfigurationInput() {
    return this._allowedWorkloadConfiguration.internalValue;
  }

  // custom_claim - computed: false, optional: true, required: false
  private _customClaim = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(this, "custom_claim", true);
  public get customClaim() {
    return this._customClaim;
  }
  public putCustomClaim(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[] | cdktn.IResolvable) {
    this._customClaim.internalValue = value;
  }
  public resetCustomClaim() {
    this._customClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimInput() {
    return this._customClaim.internalValue;
  }

  // private_endpoint - computed: false, optional: true, required: false
  private _privateEndpoint = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList(this, "private_endpoint", false);
  public get privateEndpoint() {
    return this._privateEndpoint;
  }
  public putPrivateEndpoint(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[] | cdktn.IResolvable) {
    this._privateEndpoint.internalValue = value;
  }
  public resetPrivateEndpoint() {
    this._privateEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointInput() {
    return this._privateEndpoint.internalValue;
  }

  // private_endpoint_overrides - computed: false, optional: true, required: false
  private _privateEndpointOverrides = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList(this, "private_endpoint_overrides", false);
  public get privateEndpointOverrides() {
    return this._privateEndpointOverrides;
  }
  public putPrivateEndpointOverrides(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[] | cdktn.IResolvable) {
    this._privateEndpointOverrides.internalValue = value;
  }
  public resetPrivateEndpointOverrides() {
    this._privateEndpointOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointOverridesInput() {
    return this._privateEndpointOverrides.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryAuthorizerConfiguration {
  /**
  * custom_jwt_authorizer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#custom_jwt_authorizer BedrockagentcoreRegistry#custom_jwt_authorizer}
  */
  readonly customJwtAuthorizer?: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable;
}

export function bedrockagentcoreRegistryAuthorizerConfigurationToTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_jwt_authorizer: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerToTerraform, true)(struct!.customJwtAuthorizer),
  }
}


export function bedrockagentcoreRegistryAuthorizerConfigurationToHclTerraform(struct?: BedrockagentcoreRegistryAuthorizerConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_jwt_authorizer: {
      value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerToHclTerraform, true)(struct!.customJwtAuthorizer),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreRegistryAuthorizerConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BedrockagentcoreRegistryAuthorizerConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customJwtAuthorizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customJwtAuthorizer = this._customJwtAuthorizer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreRegistryAuthorizerConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customJwtAuthorizer.internalValue = value.customJwtAuthorizer;
    }
  }

  // custom_jwt_authorizer - computed: false, optional: true, required: false
  private _customJwtAuthorizer = new BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizerList(this, "custom_jwt_authorizer", false);
  public get customJwtAuthorizer() {
    return this._customJwtAuthorizer;
  }
  public putCustomJwtAuthorizer(value: BedrockagentcoreRegistryAuthorizerConfigurationCustomJwtAuthorizer[] | cdktn.IResolvable) {
    this._customJwtAuthorizer.internalValue = value;
  }
  public resetCustomJwtAuthorizer() {
    this._customJwtAuthorizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJwtAuthorizerInput() {
    return this._customJwtAuthorizer.internalValue;
  }
}

export class BedrockagentcoreRegistryAuthorizerConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreRegistryAuthorizerConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreRegistryAuthorizerConfigurationOutputReference {
    return new BedrockagentcoreRegistryAuthorizerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreRegistryTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#create BedrockagentcoreRegistry#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#delete BedrockagentcoreRegistry#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#update BedrockagentcoreRegistry#update}
  */
  readonly update?: string;
}

export function bedrockagentcoreRegistryTimeoutsToTerraform(struct?: BedrockagentcoreRegistryTimeouts | cdktn.IResolvable): any {
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


export function bedrockagentcoreRegistryTimeoutsToHclTerraform(struct?: BedrockagentcoreRegistryTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreRegistryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreRegistryTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreRegistryTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry aws_bedrockagentcore_registry}
*/
export class BedrockagentcoreRegistry extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreRegistry resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreRegistry to import
  * @param importFromId The id of the existing BedrockagentcoreRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagentcore_registry aws_bedrockagentcore_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_registry',
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
    this._approvalConfiguration.internalValue = config.approvalConfiguration;
    this._authorizerType = config.authorizerType;
    this._description = config.description;
    this._name = config.name;
    this._region = config.region;
    this._authorizerConfiguration.internalValue = config.authorizerConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_configuration - computed: true, optional: true, required: false
  private _approvalConfiguration = new BedrockagentcoreRegistryApprovalConfigurationList(this, "approval_configuration", false);
  public get approvalConfiguration() {
    return this._approvalConfiguration;
  }
  public putApprovalConfiguration(value: BedrockagentcoreRegistryApprovalConfiguration[] | cdktn.IResolvable) {
    this._approvalConfiguration.internalValue = value;
  }
  public resetApprovalConfiguration() {
    this._approvalConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalConfigurationInput() {
    return this._approvalConfiguration.internalValue;
  }

  // authorizer_type - computed: true, optional: true, required: false
  private _authorizerType?: string; 
  public get authorizerType() {
    return this.getStringAttribute('authorizer_type');
  }
  public set authorizerType(value: string) {
    this._authorizerType = value;
  }
  public resetAuthorizerType() {
    this._authorizerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerTypeInput() {
    return this._authorizerType;
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

  // registry_arn - computed: true, optional: false, required: false
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // authorizer_configuration - computed: false, optional: true, required: false
  private _authorizerConfiguration = new BedrockagentcoreRegistryAuthorizerConfigurationList(this, "authorizer_configuration", false);
  public get authorizerConfiguration() {
    return this._authorizerConfiguration;
  }
  public putAuthorizerConfiguration(value: BedrockagentcoreRegistryAuthorizerConfiguration[] | cdktn.IResolvable) {
    this._authorizerConfiguration.internalValue = value;
  }
  public resetAuthorizerConfiguration() {
    this._authorizerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerConfigurationInput() {
    return this._authorizerConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreRegistryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreRegistryTimeouts) {
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
      approval_configuration: cdktn.listMapper(bedrockagentcoreRegistryApprovalConfigurationToTerraform, false)(this._approvalConfiguration.internalValue),
      authorizer_type: cdktn.stringToTerraform(this._authorizerType),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      authorizer_configuration: cdktn.listMapper(bedrockagentcoreRegistryAuthorizerConfigurationToTerraform, true)(this._authorizerConfiguration.internalValue),
      timeouts: bedrockagentcoreRegistryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreRegistryApprovalConfigurationToHclTerraform, false)(this._approvalConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreRegistryApprovalConfigurationList",
      },
      authorizer_type: {
        value: cdktn.stringToHclTerraform(this._authorizerType),
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
      authorizer_configuration: {
        value: cdktn.listMapperHcl(bedrockagentcoreRegistryAuthorizerConfigurationToHclTerraform, true)(this._authorizerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreRegistryAuthorizerConfigurationList",
      },
      timeouts: {
        value: bedrockagentcoreRegistryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreRegistryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
