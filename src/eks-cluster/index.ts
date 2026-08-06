/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EksClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#bootstrap_self_managed_addons EksCluster#bootstrap_self_managed_addons}
  */
  readonly bootstrapSelfManagedAddons?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#deletion_protection EksCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}
  */
  readonly enabledClusterLogTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#force_update_version EksCluster#force_update_version}
  */
  readonly forceUpdateVersion?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#region EksCluster#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#role_arn EksCluster#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#tags_all EksCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#access_config EksCluster#access_config}
  */
  readonly accessConfig?: EksClusterAccessConfig;
  /**
  * compute_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#compute_config EksCluster#compute_config}
  */
  readonly computeConfig?: EksClusterComputeConfig;
  /**
  * control_plane_scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#control_plane_scaling_config EksCluster#control_plane_scaling_config}
  */
  readonly controlPlaneScalingConfig?: EksClusterControlPlaneScalingConfig;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#encryption_config EksCluster#encryption_config}
  */
  readonly encryptionConfig?: EksClusterEncryptionConfig;
  /**
  * kubernetes_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig;
  /**
  * outpost_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#outpost_config EksCluster#outpost_config}
  */
  readonly outpostConfig?: EksClusterOutpostConfig;
  /**
  * remote_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#remote_network_config EksCluster#remote_network_config}
  */
  readonly remoteNetworkConfig?: EksClusterRemoteNetworkConfig;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#storage_config EksCluster#storage_config}
  */
  readonly storageConfig?: EksClusterStorageConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#timeouts EksCluster#timeouts}
  */
  readonly timeouts?: EksClusterTimeouts;
  /**
  * upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#upgrade_policy EksCluster#upgrade_policy}
  */
  readonly upgradePolicy?: EksClusterUpgradePolicy;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#vpc_config EksCluster#vpc_config}
  */
  readonly vpcConfig: EksClusterVpcConfig;
  /**
  * zonal_shift_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#zonal_shift_config EksCluster#zonal_shift_config}
  */
  readonly zonalShiftConfig?: EksClusterZonalShiftConfig;
}
export interface EksClusterCertificateAuthority {
}

export function eksClusterCertificateAuthorityToTerraform(struct?: EksClusterCertificateAuthority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function eksClusterCertificateAuthorityToHclTerraform(struct?: EksClusterCertificateAuthority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EksClusterCertificateAuthorityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksClusterCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }
}

export class EksClusterCertificateAuthorityList extends cdktn.ComplexList {

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
  public get(index: number): EksClusterCertificateAuthorityOutputReference {
    return new EksClusterCertificateAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterIdentityOidc {
}

export function eksClusterIdentityOidcToTerraform(struct?: EksClusterIdentityOidc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function eksClusterIdentityOidcToHclTerraform(struct?: EksClusterIdentityOidc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EksClusterIdentityOidcOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksClusterIdentityOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterIdentityOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}

export class EksClusterIdentityOidcList extends cdktn.ComplexList {

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
  public get(index: number): EksClusterIdentityOidcOutputReference {
    return new EksClusterIdentityOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterIdentity {
}

export function eksClusterIdentityToTerraform(struct?: EksClusterIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function eksClusterIdentityToHclTerraform(struct?: EksClusterIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EksClusterIdentityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EksClusterIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc - computed: true, optional: false, required: false
  private _oidc = new EksClusterIdentityOidcList(this, "oidc", false);
  public get oidc() {
    return this._oidc;
  }
}

export class EksClusterIdentityList extends cdktn.ComplexList {

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
  public get(index: number): EksClusterIdentityOutputReference {
    return new EksClusterIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}
  */
  readonly bootstrapClusterCreatorAdminPermissions?: boolean | cdktn.IResolvable;
}

export function eksClusterAccessConfigToTerraform(struct?: EksClusterAccessConfigOutputReference | EksClusterAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_mode: cdktn.stringToTerraform(struct!.authenticationMode),
    bootstrap_cluster_creator_admin_permissions: cdktn.booleanToTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
  }
}


export function eksClusterAccessConfigToHclTerraform(struct?: EksClusterAccessConfigOutputReference | EksClusterAccessConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_mode: {
      value: cdktn.stringToHclTerraform(struct!.authenticationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_cluster_creator_admin_permissions: {
      value: cdktn.booleanToHclTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterAccessConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMode = this._authenticationMode;
    }
    if (this._bootstrapClusterCreatorAdminPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapClusterCreatorAdminPermissions = this._bootstrapClusterCreatorAdminPermissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMode = undefined;
      this._bootstrapClusterCreatorAdminPermissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMode = value.authenticationMode;
      this._bootstrapClusterCreatorAdminPermissions = value.bootstrapClusterCreatorAdminPermissions;
    }
  }

  // authentication_mode - computed: true, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // bootstrap_cluster_creator_admin_permissions - computed: false, optional: true, required: false
  private _bootstrapClusterCreatorAdminPermissions?: boolean | cdktn.IResolvable; 
  public get bootstrapClusterCreatorAdminPermissions() {
    return this.getBooleanAttribute('bootstrap_cluster_creator_admin_permissions');
  }
  public set bootstrapClusterCreatorAdminPermissions(value: boolean | cdktn.IResolvable) {
    this._bootstrapClusterCreatorAdminPermissions = value;
  }
  public resetBootstrapClusterCreatorAdminPermissions() {
    this._bootstrapClusterCreatorAdminPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClusterCreatorAdminPermissionsInput() {
    return this._bootstrapClusterCreatorAdminPermissions;
  }
}
export interface EksClusterComputeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#node_pools EksCluster#node_pools}
  */
  readonly nodePools?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}
  */
  readonly nodeRoleArn?: string;
}

export function eksClusterComputeConfigToTerraform(struct?: EksClusterComputeConfigOutputReference | EksClusterComputeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    node_pools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nodePools),
    node_role_arn: cdktn.stringToTerraform(struct!.nodeRoleArn),
  }
}


export function eksClusterComputeConfigToHclTerraform(struct?: EksClusterComputeConfigOutputReference | EksClusterComputeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_pools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nodePools),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    node_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.nodeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterComputeConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterComputeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._nodePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools;
    }
    if (this._nodeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoleArn = this._nodeRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterComputeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._nodePools = undefined;
      this._nodeRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._nodePools = value.nodePools;
      this._nodeRoleArn = value.nodeRoleArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools?: string[]; 
  public get nodePools() {
    return cdktn.Fn.tolist(this.getListAttribute('node_pools'));
  }
  public set nodePools(value: string[]) {
    this._nodePools = value;
  }
  public resetNodePools() {
    this._nodePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools;
  }

  // node_role_arn - computed: false, optional: true, required: false
  private _nodeRoleArn?: string; 
  public get nodeRoleArn() {
    return this.getStringAttribute('node_role_arn');
  }
  public set nodeRoleArn(value: string) {
    this._nodeRoleArn = value;
  }
  public resetNodeRoleArn() {
    this._nodeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleArnInput() {
    return this._nodeRoleArn;
  }
}
export interface EksClusterControlPlaneScalingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#tier EksCluster#tier}
  */
  readonly tier?: string;
}

export function eksClusterControlPlaneScalingConfigToTerraform(struct?: EksClusterControlPlaneScalingConfigOutputReference | EksClusterControlPlaneScalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tier: cdktn.stringToTerraform(struct!.tier),
  }
}


export function eksClusterControlPlaneScalingConfigToHclTerraform(struct?: EksClusterControlPlaneScalingConfigOutputReference | EksClusterControlPlaneScalingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tier: {
      value: cdktn.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterControlPlaneScalingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterControlPlaneScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterControlPlaneScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tier = value.tier;
    }
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface EksClusterEncryptionConfigProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#key_arn EksCluster#key_arn}
  */
  readonly keyArn: string;
}

export function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_arn: cdktn.stringToTerraform(struct!.keyArn),
  }
}


export function eksClusterEncryptionConfigProviderToHclTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_arn: {
      value: cdktn.stringToHclTerraform(struct!.keyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterEncryptionConfigProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterEncryptionConfigProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterEncryptionConfigProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyArn = value.keyArn;
    }
  }

  // key_arn - computed: false, optional: false, required: true
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }
}
export interface EksClusterEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#resources EksCluster#resources}
  */
  readonly resources: string[];
  /**
  * provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#provider EksCluster#provider}
  */
  readonly provider: EksClusterEncryptionConfigProvider;
}

export function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
    provider: eksClusterEncryptionConfigProviderToTerraform(struct!.provider),
  }
}


export function eksClusterEncryptionConfigToHclTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    provider: {
      value: eksClusterEncryptionConfigProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterEncryptionConfigProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterEncryptionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._provider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._provider.internalValue = value.provider;
    }
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktn.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // provider - computed: false, optional: false, required: true
  private _provider = new EksClusterEncryptionConfigProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: EksClusterEncryptionConfigProvider) {
    this._provider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }
}
export interface EksClusterKubernetesNetworkConfigElasticLoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function eksClusterKubernetesNetworkConfigElasticLoadBalancingToTerraform(struct?: EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference | EksClusterKubernetesNetworkConfigElasticLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function eksClusterKubernetesNetworkConfigElasticLoadBalancingToHclTerraform(struct?: EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference | EksClusterKubernetesNetworkConfigElasticLoadBalancing): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterKubernetesNetworkConfigElasticLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterKubernetesNetworkConfigElasticLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface EksClusterKubernetesNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#ip_family EksCluster#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}
  */
  readonly serviceIpv4Cidr?: string;
  /**
  * elastic_load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#elastic_load_balancing EksCluster#elastic_load_balancing}
  */
  readonly elasticLoadBalancing?: EksClusterKubernetesNetworkConfigElasticLoadBalancing;
}

export function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_family: cdktn.stringToTerraform(struct!.ipFamily),
    service_ipv4_cidr: cdktn.stringToTerraform(struct!.serviceIpv4Cidr),
    elastic_load_balancing: eksClusterKubernetesNetworkConfigElasticLoadBalancingToTerraform(struct!.elasticLoadBalancing),
  }
}


export function eksClusterKubernetesNetworkConfigToHclTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_family: {
      value: cdktn.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ipv4_cidr: {
      value: cdktn.stringToHclTerraform(struct!.serviceIpv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elastic_load_balancing: {
      value: eksClusterKubernetesNetworkConfigElasticLoadBalancingToHclTerraform(struct!.elasticLoadBalancing),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterKubernetesNetworkConfigElasticLoadBalancingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterKubernetesNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterKubernetesNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._serviceIpv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpv4Cidr = this._serviceIpv4Cidr;
    }
    if (this._elasticLoadBalancing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticLoadBalancing = this._elasticLoadBalancing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterKubernetesNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipFamily = undefined;
      this._serviceIpv4Cidr = undefined;
      this._elasticLoadBalancing.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipFamily = value.ipFamily;
      this._serviceIpv4Cidr = value.serviceIpv4Cidr;
      this._elasticLoadBalancing.internalValue = value.elasticLoadBalancing;
    }
  }

  // ip_family - computed: true, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // service_ipv4_cidr - computed: true, optional: true, required: false
  private _serviceIpv4Cidr?: string; 
  public get serviceIpv4Cidr() {
    return this.getStringAttribute('service_ipv4_cidr');
  }
  public set serviceIpv4Cidr(value: string) {
    this._serviceIpv4Cidr = value;
  }
  public resetServiceIpv4Cidr() {
    this._serviceIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4CidrInput() {
    return this._serviceIpv4Cidr;
  }

  // service_ipv6_cidr - computed: true, optional: false, required: false
  public get serviceIpv6Cidr() {
    return this.getStringAttribute('service_ipv6_cidr');
  }

  // elastic_load_balancing - computed: false, optional: true, required: false
  private _elasticLoadBalancing = new EksClusterKubernetesNetworkConfigElasticLoadBalancingOutputReference(this, "elastic_load_balancing");
  public get elasticLoadBalancing() {
    return this._elasticLoadBalancing;
  }
  public putElasticLoadBalancing(value: EksClusterKubernetesNetworkConfigElasticLoadBalancing) {
    this._elasticLoadBalancing.internalValue = value;
  }
  public resetElasticLoadBalancing() {
    this._elasticLoadBalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancingInput() {
    return this._elasticLoadBalancing.internalValue;
  }
}
export interface EksClusterOutpostConfigControlPlanePlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#group_name EksCluster#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}
  */
  readonly spreadLevel?: string;
}

export function eksClusterOutpostConfigControlPlanePlacementToTerraform(struct?: EksClusterOutpostConfigControlPlanePlacementOutputReference | EksClusterOutpostConfigControlPlanePlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_name: cdktn.stringToTerraform(struct!.groupName),
    spread_level: cdktn.stringToTerraform(struct!.spreadLevel),
  }
}


export function eksClusterOutpostConfigControlPlanePlacementToHclTerraform(struct?: EksClusterOutpostConfigControlPlanePlacementOutputReference | EksClusterOutpostConfigControlPlanePlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_name: {
      value: cdktn.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spread_level: {
      value: cdktn.stringToHclTerraform(struct!.spreadLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterOutpostConfigControlPlanePlacementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterOutpostConfigControlPlanePlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._spreadLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadLevel = this._spreadLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterOutpostConfigControlPlanePlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._spreadLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._spreadLevel = value.spreadLevel;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // spread_level - computed: true, optional: true, required: false
  private _spreadLevel?: string; 
  public get spreadLevel() {
    return this.getStringAttribute('spread_level');
  }
  public set spreadLevel(value: string) {
    this._spreadLevel = value;
  }
  public resetSpreadLevel() {
    this._spreadLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadLevelInput() {
    return this._spreadLevel;
  }
}
export interface EksClusterOutpostConfigEtcdPlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#spread_level EksCluster#spread_level}
  */
  readonly spreadLevel?: string;
}

export function eksClusterOutpostConfigEtcdPlacementToTerraform(struct?: EksClusterOutpostConfigEtcdPlacementOutputReference | EksClusterOutpostConfigEtcdPlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    spread_level: cdktn.stringToTerraform(struct!.spreadLevel),
  }
}


export function eksClusterOutpostConfigEtcdPlacementToHclTerraform(struct?: EksClusterOutpostConfigEtcdPlacementOutputReference | EksClusterOutpostConfigEtcdPlacement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    spread_level: {
      value: cdktn.stringToHclTerraform(struct!.spreadLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterOutpostConfigEtcdPlacementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterOutpostConfigEtcdPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spreadLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.spreadLevel = this._spreadLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterOutpostConfigEtcdPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spreadLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spreadLevel = value.spreadLevel;
    }
  }

  // spread_level - computed: true, optional: true, required: false
  private _spreadLevel?: string; 
  public get spreadLevel() {
    return this.getStringAttribute('spread_level');
  }
  public set spreadLevel(value: string) {
    this._spreadLevel = value;
  }
  public resetSpreadLevel() {
    this._spreadLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spreadLevelInput() {
    return this._spreadLevel;
  }
}
export interface EksClusterOutpostConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#control_plane_instance_type EksCluster#control_plane_instance_type}
  */
  readonly controlPlaneInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#etcd_instance_type EksCluster#etcd_instance_type}
  */
  readonly etcdInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#outpost_arns EksCluster#outpost_arns}
  */
  readonly outpostArns: string[];
  /**
  * control_plane_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#control_plane_placement EksCluster#control_plane_placement}
  */
  readonly controlPlanePlacement?: EksClusterOutpostConfigControlPlanePlacement;
  /**
  * etcd_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#etcd_placement EksCluster#etcd_placement}
  */
  readonly etcdPlacement?: EksClusterOutpostConfigEtcdPlacement;
}

export function eksClusterOutpostConfigToTerraform(struct?: EksClusterOutpostConfigOutputReference | EksClusterOutpostConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    control_plane_instance_type: cdktn.stringToTerraform(struct!.controlPlaneInstanceType),
    etcd_instance_type: cdktn.stringToTerraform(struct!.etcdInstanceType),
    outpost_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outpostArns),
    control_plane_placement: eksClusterOutpostConfigControlPlanePlacementToTerraform(struct!.controlPlanePlacement),
    etcd_placement: eksClusterOutpostConfigEtcdPlacementToTerraform(struct!.etcdPlacement),
  }
}


export function eksClusterOutpostConfigToHclTerraform(struct?: EksClusterOutpostConfigOutputReference | EksClusterOutpostConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    control_plane_instance_type: {
      value: cdktn.stringToHclTerraform(struct!.controlPlaneInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_instance_type: {
      value: cdktn.stringToHclTerraform(struct!.etcdInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outpost_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outpostArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    control_plane_placement: {
      value: eksClusterOutpostConfigControlPlanePlacementToHclTerraform(struct!.controlPlanePlacement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterOutpostConfigControlPlanePlacementList",
    },
    etcd_placement: {
      value: eksClusterOutpostConfigEtcdPlacementToHclTerraform(struct!.etcdPlacement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterOutpostConfigEtcdPlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterOutpostConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterOutpostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneInstanceType = this._controlPlaneInstanceType;
    }
    if (this._etcdInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdInstanceType = this._etcdInstanceType;
    }
    if (this._outpostArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.outpostArns = this._outpostArns;
    }
    if (this._controlPlanePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlanePlacement = this._controlPlanePlacement?.internalValue;
    }
    if (this._etcdPlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdPlacement = this._etcdPlacement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterOutpostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneInstanceType = undefined;
      this._etcdInstanceType = undefined;
      this._outpostArns = undefined;
      this._controlPlanePlacement.internalValue = undefined;
      this._etcdPlacement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneInstanceType = value.controlPlaneInstanceType;
      this._etcdInstanceType = value.etcdInstanceType;
      this._outpostArns = value.outpostArns;
      this._controlPlanePlacement.internalValue = value.controlPlanePlacement;
      this._etcdPlacement.internalValue = value.etcdPlacement;
    }
  }

  // control_plane_instance_type - computed: false, optional: false, required: true
  private _controlPlaneInstanceType?: string; 
  public get controlPlaneInstanceType() {
    return this.getStringAttribute('control_plane_instance_type');
  }
  public set controlPlaneInstanceType(value: string) {
    this._controlPlaneInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInstanceTypeInput() {
    return this._controlPlaneInstanceType;
  }

  // etcd_instance_type - computed: true, optional: true, required: false
  private _etcdInstanceType?: string; 
  public get etcdInstanceType() {
    return this.getStringAttribute('etcd_instance_type');
  }
  public set etcdInstanceType(value: string) {
    this._etcdInstanceType = value;
  }
  public resetEtcdInstanceType() {
    this._etcdInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdInstanceTypeInput() {
    return this._etcdInstanceType;
  }

  // outpost_arns - computed: false, optional: false, required: true
  private _outpostArns?: string[]; 
  public get outpostArns() {
    return cdktn.Fn.tolist(this.getListAttribute('outpost_arns'));
  }
  public set outpostArns(value: string[]) {
    this._outpostArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostArnsInput() {
    return this._outpostArns;
  }

  // control_plane_placement - computed: false, optional: true, required: false
  private _controlPlanePlacement = new EksClusterOutpostConfigControlPlanePlacementOutputReference(this, "control_plane_placement");
  public get controlPlanePlacement() {
    return this._controlPlanePlacement;
  }
  public putControlPlanePlacement(value: EksClusterOutpostConfigControlPlanePlacement) {
    this._controlPlanePlacement.internalValue = value;
  }
  public resetControlPlanePlacement() {
    this._controlPlanePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlanePlacementInput() {
    return this._controlPlanePlacement.internalValue;
  }

  // etcd_placement - computed: false, optional: true, required: false
  private _etcdPlacement = new EksClusterOutpostConfigEtcdPlacementOutputReference(this, "etcd_placement");
  public get etcdPlacement() {
    return this._etcdPlacement;
  }
  public putEtcdPlacement(value: EksClusterOutpostConfigEtcdPlacement) {
    this._etcdPlacement.internalValue = value;
  }
  public resetEtcdPlacement() {
    this._etcdPlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdPlacementInput() {
    return this._etcdPlacement.internalValue;
  }
}
export interface EksClusterRemoteNetworkConfigRemoteNodeNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}
  */
  readonly cidrs?: string[];
}

export function eksClusterRemoteNetworkConfigRemoteNodeNetworksToTerraform(struct?: EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference | EksClusterRemoteNetworkConfigRemoteNodeNetworks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
  }
}


export function eksClusterRemoteNetworkConfigRemoteNodeNetworksToHclTerraform(struct?: EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference | EksClusterRemoteNetworkConfigRemoteNodeNetworks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidrs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterRemoteNetworkConfigRemoteNodeNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterRemoteNetworkConfigRemoteNodeNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }
}
export interface EksClusterRemoteNetworkConfigRemotePodNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#cidrs EksCluster#cidrs}
  */
  readonly cidrs?: string[];
}

export function eksClusterRemoteNetworkConfigRemotePodNetworksToTerraform(struct?: EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference | EksClusterRemoteNetworkConfigRemotePodNetworks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cidrs),
  }
}


export function eksClusterRemoteNetworkConfigRemotePodNetworksToHclTerraform(struct?: EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference | EksClusterRemoteNetworkConfigRemotePodNetworks): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cidrs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterRemoteNetworkConfigRemotePodNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterRemoteNetworkConfigRemotePodNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }
}
export interface EksClusterRemoteNetworkConfig {
  /**
  * remote_node_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#remote_node_networks EksCluster#remote_node_networks}
  */
  readonly remoteNodeNetworks?: EksClusterRemoteNetworkConfigRemoteNodeNetworks;
  /**
  * remote_pod_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#remote_pod_networks EksCluster#remote_pod_networks}
  */
  readonly remotePodNetworks?: EksClusterRemoteNetworkConfigRemotePodNetworks;
}

export function eksClusterRemoteNetworkConfigToTerraform(struct?: EksClusterRemoteNetworkConfigOutputReference | EksClusterRemoteNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    remote_node_networks: eksClusterRemoteNetworkConfigRemoteNodeNetworksToTerraform(struct!.remoteNodeNetworks),
    remote_pod_networks: eksClusterRemoteNetworkConfigRemotePodNetworksToTerraform(struct!.remotePodNetworks),
  }
}


export function eksClusterRemoteNetworkConfigToHclTerraform(struct?: EksClusterRemoteNetworkConfigOutputReference | EksClusterRemoteNetworkConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    remote_node_networks: {
      value: eksClusterRemoteNetworkConfigRemoteNodeNetworksToHclTerraform(struct!.remoteNodeNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterRemoteNetworkConfigRemoteNodeNetworksList",
    },
    remote_pod_networks: {
      value: eksClusterRemoteNetworkConfigRemotePodNetworksToHclTerraform(struct!.remotePodNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterRemoteNetworkConfigRemotePodNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterRemoteNetworkConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterRemoteNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteNodeNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteNodeNetworks = this._remoteNodeNetworks?.internalValue;
    }
    if (this._remotePodNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePodNetworks = this._remotePodNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterRemoteNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._remoteNodeNetworks.internalValue = undefined;
      this._remotePodNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._remoteNodeNetworks.internalValue = value.remoteNodeNetworks;
      this._remotePodNetworks.internalValue = value.remotePodNetworks;
    }
  }

  // remote_node_networks - computed: false, optional: true, required: false
  private _remoteNodeNetworks = new EksClusterRemoteNetworkConfigRemoteNodeNetworksOutputReference(this, "remote_node_networks");
  public get remoteNodeNetworks() {
    return this._remoteNodeNetworks;
  }
  public putRemoteNodeNetworks(value: EksClusterRemoteNetworkConfigRemoteNodeNetworks) {
    this._remoteNodeNetworks.internalValue = value;
  }
  public resetRemoteNodeNetworks() {
    this._remoteNodeNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNodeNetworksInput() {
    return this._remoteNodeNetworks.internalValue;
  }

  // remote_pod_networks - computed: false, optional: true, required: false
  private _remotePodNetworks = new EksClusterRemoteNetworkConfigRemotePodNetworksOutputReference(this, "remote_pod_networks");
  public get remotePodNetworks() {
    return this._remotePodNetworks;
  }
  public putRemotePodNetworks(value: EksClusterRemoteNetworkConfigRemotePodNetworks) {
    this._remotePodNetworks.internalValue = value;
  }
  public resetRemotePodNetworks() {
    this._remotePodNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePodNetworksInput() {
    return this._remotePodNetworks.internalValue;
  }
}
export interface EksClusterStorageConfigBlockStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function eksClusterStorageConfigBlockStorageToTerraform(struct?: EksClusterStorageConfigBlockStorageOutputReference | EksClusterStorageConfigBlockStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function eksClusterStorageConfigBlockStorageToHclTerraform(struct?: EksClusterStorageConfigBlockStorageOutputReference | EksClusterStorageConfigBlockStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterStorageConfigBlockStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterStorageConfigBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterStorageConfigBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface EksClusterStorageConfig {
  /**
  * block_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#block_storage EksCluster#block_storage}
  */
  readonly blockStorage?: EksClusterStorageConfigBlockStorage;
}

export function eksClusterStorageConfigToTerraform(struct?: EksClusterStorageConfigOutputReference | EksClusterStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    block_storage: eksClusterStorageConfigBlockStorageToTerraform(struct!.blockStorage),
  }
}


export function eksClusterStorageConfigToHclTerraform(struct?: EksClusterStorageConfigOutputReference | EksClusterStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    block_storage: {
      value: eksClusterStorageConfigBlockStorageToHclTerraform(struct!.blockStorage),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterStorageConfigBlockStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterStorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorage = this._blockStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorage.internalValue = value.blockStorage;
    }
  }

  // block_storage - computed: false, optional: true, required: false
  private _blockStorage = new EksClusterStorageConfigBlockStorageOutputReference(this, "block_storage");
  public get blockStorage() {
    return this._blockStorage;
  }
  public putBlockStorage(value: EksClusterStorageConfigBlockStorage) {
    this._blockStorage.internalValue = value;
  }
  public resetBlockStorage() {
    this._blockStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageInput() {
    return this._blockStorage.internalValue;
  }
}
export interface EksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#create EksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#delete EksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#update EksCluster#update}
  */
  readonly update?: string;
}

export function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeouts | cdktn.IResolvable): any {
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


export function eksClusterTimeoutsToHclTerraform(struct?: EksClusterTimeouts | cdktn.IResolvable): any {
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

export class EksClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EksClusterTimeouts | cdktn.IResolvable | undefined) {
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
export interface EksClusterUpgradePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#support_type EksCluster#support_type}
  */
  readonly supportType?: string;
}

export function eksClusterUpgradePolicyToTerraform(struct?: EksClusterUpgradePolicyOutputReference | EksClusterUpgradePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    support_type: cdktn.stringToTerraform(struct!.supportType),
  }
}


export function eksClusterUpgradePolicyToHclTerraform(struct?: EksClusterUpgradePolicyOutputReference | EksClusterUpgradePolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    support_type: {
      value: cdktn.stringToHclTerraform(struct!.supportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterUpgradePolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportType = this._supportType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._supportType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._supportType = value.supportType;
    }
  }

  // support_type - computed: true, optional: true, required: false
  private _supportType?: string; 
  public get supportType() {
    return this.getStringAttribute('support_type');
  }
  public set supportType(value: string) {
    this._supportType = value;
  }
  public resetSupportType() {
    this._supportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportTypeInput() {
    return this._supportType;
  }
}
export interface EksClusterVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#control_plane_egress_mode EksCluster#control_plane_egress_mode}
  */
  readonly controlPlaneEgressMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#endpoint_private_access EksCluster#endpoint_private_access}
  */
  readonly endpointPrivateAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#endpoint_public_access EksCluster#endpoint_public_access}
  */
  readonly endpointPublicAccess?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}
  */
  readonly publicAccessCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#security_group_ids EksCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#subnet_ids EksCluster#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    control_plane_egress_mode: cdktn.stringToTerraform(struct!.controlPlaneEgressMode),
    endpoint_private_access: cdktn.booleanToTerraform(struct!.endpointPrivateAccess),
    endpoint_public_access: cdktn.booleanToTerraform(struct!.endpointPublicAccess),
    public_access_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.publicAccessCidrs),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function eksClusterVpcConfigToHclTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    control_plane_egress_mode: {
      value: cdktn.stringToHclTerraform(struct!.controlPlaneEgressMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_private_access: {
      value: cdktn.booleanToHclTerraform(struct!.endpointPrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_public_access: {
      value: cdktn.booleanToHclTerraform(struct!.endpointPublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_access_cidrs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.publicAccessCidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterVpcConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneEgressMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneEgressMode = this._controlPlaneEgressMode;
    }
    if (this._endpointPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPrivateAccess = this._endpointPrivateAccess;
    }
    if (this._endpointPublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointPublicAccess = this._endpointPublicAccess;
    }
    if (this._publicAccessCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessCidrs = this._publicAccessCidrs;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneEgressMode = undefined;
      this._endpointPrivateAccess = undefined;
      this._endpointPublicAccess = undefined;
      this._publicAccessCidrs = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneEgressMode = value.controlPlaneEgressMode;
      this._endpointPrivateAccess = value.endpointPrivateAccess;
      this._endpointPublicAccess = value.endpointPublicAccess;
      this._publicAccessCidrs = value.publicAccessCidrs;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // cluster_security_group_id - computed: true, optional: false, required: false
  public get clusterSecurityGroupId() {
    return this.getStringAttribute('cluster_security_group_id');
  }

  // control_plane_egress_mode - computed: true, optional: true, required: false
  private _controlPlaneEgressMode?: string; 
  public get controlPlaneEgressMode() {
    return this.getStringAttribute('control_plane_egress_mode');
  }
  public set controlPlaneEgressMode(value: string) {
    this._controlPlaneEgressMode = value;
  }
  public resetControlPlaneEgressMode() {
    this._controlPlaneEgressMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEgressModeInput() {
    return this._controlPlaneEgressMode;
  }

  // endpoint_private_access - computed: false, optional: true, required: false
  private _endpointPrivateAccess?: boolean | cdktn.IResolvable; 
  public get endpointPrivateAccess() {
    return this.getBooleanAttribute('endpoint_private_access');
  }
  public set endpointPrivateAccess(value: boolean | cdktn.IResolvable) {
    this._endpointPrivateAccess = value;
  }
  public resetEndpointPrivateAccess() {
    this._endpointPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPrivateAccessInput() {
    return this._endpointPrivateAccess;
  }

  // endpoint_public_access - computed: false, optional: true, required: false
  private _endpointPublicAccess?: boolean | cdktn.IResolvable; 
  public get endpointPublicAccess() {
    return this.getBooleanAttribute('endpoint_public_access');
  }
  public set endpointPublicAccess(value: boolean | cdktn.IResolvable) {
    this._endpointPublicAccess = value;
  }
  public resetEndpointPublicAccess() {
    this._endpointPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPublicAccessInput() {
    return this._endpointPublicAccess;
  }

  // public_access_cidrs - computed: true, optional: true, required: false
  private _publicAccessCidrs?: string[]; 
  public get publicAccessCidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('public_access_cidrs'));
  }
  public set publicAccessCidrs(value: string[]) {
    this._publicAccessCidrs = value;
  }
  public resetPublicAccessCidrs() {
    this._publicAccessCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessCidrsInput() {
    return this._publicAccessCidrs;
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
export interface EksClusterZonalShiftConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function eksClusterZonalShiftConfigToTerraform(struct?: EksClusterZonalShiftConfigOutputReference | EksClusterZonalShiftConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function eksClusterZonalShiftConfigToHclTerraform(struct?: EksClusterZonalShiftConfigOutputReference | EksClusterZonalShiftConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterZonalShiftConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterZonalShiftConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterZonalShiftConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster aws_eks_cluster}
*/
export class EksCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EksCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksCluster to import
  * @param importFromId The id of the existing EksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/eks_cluster aws_eks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.58.0',
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
    this._bootstrapSelfManagedAddons = config.bootstrapSelfManagedAddons;
    this._deletionProtection = config.deletionProtection;
    this._enabledClusterLogTypes = config.enabledClusterLogTypes;
    this._forceUpdateVersion = config.forceUpdateVersion;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._version = config.version;
    this._accessConfig.internalValue = config.accessConfig;
    this._computeConfig.internalValue = config.computeConfig;
    this._controlPlaneScalingConfig.internalValue = config.controlPlaneScalingConfig;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._kubernetesNetworkConfig.internalValue = config.kubernetesNetworkConfig;
    this._outpostConfig.internalValue = config.outpostConfig;
    this._remoteNetworkConfig.internalValue = config.remoteNetworkConfig;
    this._storageConfig.internalValue = config.storageConfig;
    this._timeouts.internalValue = config.timeouts;
    this._upgradePolicy.internalValue = config.upgradePolicy;
    this._vpcConfig.internalValue = config.vpcConfig;
    this._zonalShiftConfig.internalValue = config.zonalShiftConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bootstrap_self_managed_addons - computed: false, optional: true, required: false
  private _bootstrapSelfManagedAddons?: boolean | cdktn.IResolvable; 
  public get bootstrapSelfManagedAddons() {
    return this.getBooleanAttribute('bootstrap_self_managed_addons');
  }
  public set bootstrapSelfManagedAddons(value: boolean | cdktn.IResolvable) {
    this._bootstrapSelfManagedAddons = value;
  }
  public resetBootstrapSelfManagedAddons() {
    this._bootstrapSelfManagedAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapSelfManagedAddonsInput() {
    return this._bootstrapSelfManagedAddons;
  }

  // certificate_authority - computed: true, optional: false, required: false
  private _certificateAuthority = new EksClusterCertificateAuthorityList(this, "certificate_authority", false);
  public get certificateAuthority() {
    return this._certificateAuthority;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktn.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktn.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // enabled_cluster_log_types - computed: false, optional: true, required: false
  private _enabledClusterLogTypes?: string[]; 
  public get enabledClusterLogTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('enabled_cluster_log_types'));
  }
  public set enabledClusterLogTypes(value: string[]) {
    this._enabledClusterLogTypes = value;
  }
  public resetEnabledClusterLogTypes() {
    this._enabledClusterLogTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledClusterLogTypesInput() {
    return this._enabledClusterLogTypes;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // force_update_version - computed: false, optional: true, required: false
  private _forceUpdateVersion?: boolean | cdktn.IResolvable; 
  public get forceUpdateVersion() {
    return this.getBooleanAttribute('force_update_version');
  }
  public set forceUpdateVersion(value: boolean | cdktn.IResolvable) {
    this._forceUpdateVersion = value;
  }
  public resetForceUpdateVersion() {
    this._forceUpdateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateVersionInput() {
    return this._forceUpdateVersion;
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

  // identity - computed: true, optional: false, required: false
  private _identity = new EksClusterIdentityList(this, "identity", false);
  public get identity() {
    return this._identity;
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

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new EksClusterAccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: EksClusterAccessConfig) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // compute_config - computed: false, optional: true, required: false
  private _computeConfig = new EksClusterComputeConfigOutputReference(this, "compute_config");
  public get computeConfig() {
    return this._computeConfig;
  }
  public putComputeConfig(value: EksClusterComputeConfig) {
    this._computeConfig.internalValue = value;
  }
  public resetComputeConfig() {
    this._computeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeConfigInput() {
    return this._computeConfig.internalValue;
  }

  // control_plane_scaling_config - computed: false, optional: true, required: false
  private _controlPlaneScalingConfig = new EksClusterControlPlaneScalingConfigOutputReference(this, "control_plane_scaling_config");
  public get controlPlaneScalingConfig() {
    return this._controlPlaneScalingConfig;
  }
  public putControlPlaneScalingConfig(value: EksClusterControlPlaneScalingConfig) {
    this._controlPlaneScalingConfig.internalValue = value;
  }
  public resetControlPlaneScalingConfig() {
    this._controlPlaneScalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneScalingConfigInput() {
    return this._controlPlaneScalingConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new EksClusterEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: EksClusterEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig = new EksClusterKubernetesNetworkConfigOutputReference(this, "kubernetes_network_config");
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }
  public putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig) {
    this._kubernetesNetworkConfig.internalValue = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig.internalValue;
  }

  // outpost_config - computed: false, optional: true, required: false
  private _outpostConfig = new EksClusterOutpostConfigOutputReference(this, "outpost_config");
  public get outpostConfig() {
    return this._outpostConfig;
  }
  public putOutpostConfig(value: EksClusterOutpostConfig) {
    this._outpostConfig.internalValue = value;
  }
  public resetOutpostConfig() {
    this._outpostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostConfigInput() {
    return this._outpostConfig.internalValue;
  }

  // remote_network_config - computed: false, optional: true, required: false
  private _remoteNetworkConfig = new EksClusterRemoteNetworkConfigOutputReference(this, "remote_network_config");
  public get remoteNetworkConfig() {
    return this._remoteNetworkConfig;
  }
  public putRemoteNetworkConfig(value: EksClusterRemoteNetworkConfig) {
    this._remoteNetworkConfig.internalValue = value;
  }
  public resetRemoteNetworkConfig() {
    this._remoteNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetworkConfigInput() {
    return this._remoteNetworkConfig.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new EksClusterStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: EksClusterStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EksClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy = new EksClusterUpgradePolicyOutputReference(this, "upgrade_policy");
  public get upgradePolicy() {
    return this._upgradePolicy;
  }
  public putUpgradePolicy(value: EksClusterUpgradePolicy) {
    this._upgradePolicy.internalValue = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy.internalValue;
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig = new EksClusterVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: EksClusterVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // zonal_shift_config - computed: false, optional: true, required: false
  private _zonalShiftConfig = new EksClusterZonalShiftConfigOutputReference(this, "zonal_shift_config");
  public get zonalShiftConfig() {
    return this._zonalShiftConfig;
  }
  public putZonalShiftConfig(value: EksClusterZonalShiftConfig) {
    this._zonalShiftConfig.internalValue = value;
  }
  public resetZonalShiftConfig() {
    this._zonalShiftConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalShiftConfigInput() {
    return this._zonalShiftConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bootstrap_self_managed_addons: cdktn.booleanToTerraform(this._bootstrapSelfManagedAddons),
      deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
      enabled_cluster_log_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enabledClusterLogTypes),
      force_update_version: cdktn.booleanToTerraform(this._forceUpdateVersion),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      version: cdktn.stringToTerraform(this._version),
      access_config: eksClusterAccessConfigToTerraform(this._accessConfig.internalValue),
      compute_config: eksClusterComputeConfigToTerraform(this._computeConfig.internalValue),
      control_plane_scaling_config: eksClusterControlPlaneScalingConfigToTerraform(this._controlPlaneScalingConfig.internalValue),
      encryption_config: eksClusterEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      kubernetes_network_config: eksClusterKubernetesNetworkConfigToTerraform(this._kubernetesNetworkConfig.internalValue),
      outpost_config: eksClusterOutpostConfigToTerraform(this._outpostConfig.internalValue),
      remote_network_config: eksClusterRemoteNetworkConfigToTerraform(this._remoteNetworkConfig.internalValue),
      storage_config: eksClusterStorageConfigToTerraform(this._storageConfig.internalValue),
      timeouts: eksClusterTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_policy: eksClusterUpgradePolicyToTerraform(this._upgradePolicy.internalValue),
      vpc_config: eksClusterVpcConfigToTerraform(this._vpcConfig.internalValue),
      zonal_shift_config: eksClusterZonalShiftConfigToTerraform(this._zonalShiftConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootstrap_self_managed_addons: {
        value: cdktn.booleanToHclTerraform(this._bootstrapSelfManagedAddons),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_protection: {
        value: cdktn.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_cluster_log_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enabledClusterLogTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      force_update_version: {
        value: cdktn.booleanToHclTerraform(this._forceUpdateVersion),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
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
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_config: {
        value: eksClusterAccessConfigToHclTerraform(this._accessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterAccessConfigList",
      },
      compute_config: {
        value: eksClusterComputeConfigToHclTerraform(this._computeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterComputeConfigList",
      },
      control_plane_scaling_config: {
        value: eksClusterControlPlaneScalingConfigToHclTerraform(this._controlPlaneScalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterControlPlaneScalingConfigList",
      },
      encryption_config: {
        value: eksClusterEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterEncryptionConfigList",
      },
      kubernetes_network_config: {
        value: eksClusterKubernetesNetworkConfigToHclTerraform(this._kubernetesNetworkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterKubernetesNetworkConfigList",
      },
      outpost_config: {
        value: eksClusterOutpostConfigToHclTerraform(this._outpostConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterOutpostConfigList",
      },
      remote_network_config: {
        value: eksClusterRemoteNetworkConfigToHclTerraform(this._remoteNetworkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterRemoteNetworkConfigList",
      },
      storage_config: {
        value: eksClusterStorageConfigToHclTerraform(this._storageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterStorageConfigList",
      },
      timeouts: {
        value: eksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EksClusterTimeouts",
      },
      upgrade_policy: {
        value: eksClusterUpgradePolicyToHclTerraform(this._upgradePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterUpgradePolicyList",
      },
      vpc_config: {
        value: eksClusterVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterVpcConfigList",
      },
      zonal_shift_config: {
        value: eksClusterZonalShiftConfigToHclTerraform(this._zonalShiftConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterZonalShiftConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
