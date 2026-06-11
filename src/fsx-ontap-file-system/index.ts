/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FsxOntapFileSystemConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}
  */
  readonly automaticBackupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}
  */
  readonly dailyAutomaticBackupStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}
  */
  readonly endpointIpAddressRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}
  */
  readonly fsxAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#ha_pairs FsxOntapFileSystem#ha_pairs}
  */
  readonly haPairs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#id FsxOntapFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}
  */
  readonly preferredSubnetId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#region FsxOntapFileSystem#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}
  */
  readonly routeTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}
  */
  readonly storageCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}
  */
  readonly throughputCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#throughput_capacity_per_ha_pair FsxOntapFileSystem#throughput_capacity_per_ha_pair}
  */
  readonly throughputCapacityPerHaPair?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}
  */
  readonly weeklyMaintenanceStartTime?: string;
  /**
  * disk_iops_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}
  */
  readonly diskIopsConfiguration?: FsxOntapFileSystemDiskIopsConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#timeouts FsxOntapFileSystem#timeouts}
  */
  readonly timeouts?: FsxOntapFileSystemTimeouts;
}
export interface FsxOntapFileSystemEndpointsIntercluster {
}

export function fsxOntapFileSystemEndpointsInterclusterToTerraform(struct?: FsxOntapFileSystemEndpointsIntercluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function fsxOntapFileSystemEndpointsInterclusterToHclTerraform(struct?: FsxOntapFileSystemEndpointsIntercluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FsxOntapFileSystemEndpointsInterclusterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxOntapFileSystemEndpointsIntercluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapFileSystemEndpointsIntercluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class FsxOntapFileSystemEndpointsInterclusterList extends cdktn.ComplexList {

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
  public get(index: number): FsxOntapFileSystemEndpointsInterclusterOutputReference {
    return new FsxOntapFileSystemEndpointsInterclusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxOntapFileSystemEndpointsManagement {
}

export function fsxOntapFileSystemEndpointsManagementToTerraform(struct?: FsxOntapFileSystemEndpointsManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function fsxOntapFileSystemEndpointsManagementToHclTerraform(struct?: FsxOntapFileSystemEndpointsManagement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FsxOntapFileSystemEndpointsManagementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxOntapFileSystemEndpointsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapFileSystemEndpointsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
}

export class FsxOntapFileSystemEndpointsManagementList extends cdktn.ComplexList {

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
  public get(index: number): FsxOntapFileSystemEndpointsManagementOutputReference {
    return new FsxOntapFileSystemEndpointsManagementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxOntapFileSystemEndpoints {
}

export function fsxOntapFileSystemEndpointsToTerraform(struct?: FsxOntapFileSystemEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function fsxOntapFileSystemEndpointsToHclTerraform(struct?: FsxOntapFileSystemEndpoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FsxOntapFileSystemEndpointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FsxOntapFileSystemEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapFileSystemEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intercluster - computed: true, optional: false, required: false
  private _intercluster = new FsxOntapFileSystemEndpointsInterclusterList(this, "intercluster", false);
  public get intercluster() {
    return this._intercluster;
  }

  // management - computed: true, optional: false, required: false
  private _management = new FsxOntapFileSystemEndpointsManagementList(this, "management", false);
  public get management() {
    return this._management;
  }
}

export class FsxOntapFileSystemEndpointsList extends cdktn.ComplexList {

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
  public get(index: number): FsxOntapFileSystemEndpointsOutputReference {
    return new FsxOntapFileSystemEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxOntapFileSystemDiskIopsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}
  */
  readonly mode?: string;
}

export function fsxOntapFileSystemDiskIopsConfigurationToTerraform(struct?: FsxOntapFileSystemDiskIopsConfigurationOutputReference | FsxOntapFileSystemDiskIopsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function fsxOntapFileSystemDiskIopsConfigurationToHclTerraform(struct?: FsxOntapFileSystemDiskIopsConfigurationOutputReference | FsxOntapFileSystemDiskIopsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxOntapFileSystemDiskIopsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxOntapFileSystemDiskIopsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxOntapFileSystemDiskIopsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iops = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iops = value.iops;
      this._mode = value.mode;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface FsxOntapFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#create FsxOntapFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#update FsxOntapFileSystem#update}
  */
  readonly update?: string;
}

export function fsxOntapFileSystemTimeoutsToTerraform(struct?: FsxOntapFileSystemTimeouts | cdktn.IResolvable): any {
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


export function fsxOntapFileSystemTimeoutsToHclTerraform(struct?: FsxOntapFileSystemTimeouts | cdktn.IResolvable): any {
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

export class FsxOntapFileSystemTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxOntapFileSystemTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FsxOntapFileSystemTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system aws_fsx_ontap_file_system}
*/
export class FsxOntapFileSystem extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_ontap_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FsxOntapFileSystem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxOntapFileSystem to import
  * @param importFromId The id of the existing FsxOntapFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxOntapFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_ontap_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/fsx_ontap_file_system aws_fsx_ontap_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxOntapFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: FsxOntapFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_ontap_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.50.0',
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
    this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
    this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
    this._deploymentType = config.deploymentType;
    this._endpointIpAddressRange = config.endpointIpAddressRange;
    this._fsxAdminPassword = config.fsxAdminPassword;
    this._haPairs = config.haPairs;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._preferredSubnetId = config.preferredSubnetId;
    this._region = config.region;
    this._routeTableIds = config.routeTableIds;
    this._securityGroupIds = config.securityGroupIds;
    this._storageCapacity = config.storageCapacity;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._throughputCapacity = config.throughputCapacity;
    this._throughputCapacityPerHaPair = config.throughputCapacityPerHaPair;
    this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
    this._diskIopsConfiguration.internalValue = config.diskIopsConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_backup_retention_days - computed: false, optional: true, required: false
  private _automaticBackupRetentionDays?: number; 
  public get automaticBackupRetentionDays() {
    return this.getNumberAttribute('automatic_backup_retention_days');
  }
  public set automaticBackupRetentionDays(value: number) {
    this._automaticBackupRetentionDays = value;
  }
  public resetAutomaticBackupRetentionDays() {
    this._automaticBackupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticBackupRetentionDaysInput() {
    return this._automaticBackupRetentionDays;
  }

  // daily_automatic_backup_start_time - computed: true, optional: true, required: false
  private _dailyAutomaticBackupStartTime?: string; 
  public get dailyAutomaticBackupStartTime() {
    return this.getStringAttribute('daily_automatic_backup_start_time');
  }
  public set dailyAutomaticBackupStartTime(value: string) {
    this._dailyAutomaticBackupStartTime = value;
  }
  public resetDailyAutomaticBackupStartTime() {
    this._dailyAutomaticBackupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyAutomaticBackupStartTimeInput() {
    return this._dailyAutomaticBackupStartTime;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // endpoint_ip_address_range - computed: true, optional: true, required: false
  private _endpointIpAddressRange?: string; 
  public get endpointIpAddressRange() {
    return this.getStringAttribute('endpoint_ip_address_range');
  }
  public set endpointIpAddressRange(value: string) {
    this._endpointIpAddressRange = value;
  }
  public resetEndpointIpAddressRange() {
    this._endpointIpAddressRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressRangeInput() {
    return this._endpointIpAddressRange;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new FsxOntapFileSystemEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }

  // fsx_admin_password - computed: false, optional: true, required: false
  private _fsxAdminPassword?: string; 
  public get fsxAdminPassword() {
    return this.getStringAttribute('fsx_admin_password');
  }
  public set fsxAdminPassword(value: string) {
    this._fsxAdminPassword = value;
  }
  public resetFsxAdminPassword() {
    this._fsxAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxAdminPasswordInput() {
    return this._fsxAdminPassword;
  }

  // ha_pairs - computed: true, optional: true, required: false
  private _haPairs?: number; 
  public get haPairs() {
    return this.getNumberAttribute('ha_pairs');
  }
  public set haPairs(value: number) {
    this._haPairs = value;
  }
  public resetHaPairs() {
    this._haPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPairsInput() {
    return this._haPairs;
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // preferred_subnet_id - computed: false, optional: false, required: true
  private _preferredSubnetId?: string; 
  public get preferredSubnetId() {
    return this.getStringAttribute('preferred_subnet_id');
  }
  public set preferredSubnetId(value: string) {
    this._preferredSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSubnetIdInput() {
    return this._preferredSubnetId;
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

  // route_table_ids - computed: true, optional: true, required: false
  private _routeTableIds?: string[]; 
  public get routeTableIds() {
    return cdktn.Fn.tolist(this.getListAttribute('route_table_ids'));
  }
  public set routeTableIds(value: string[]) {
    this._routeTableIds = value;
  }
  public resetRouteTableIds() {
    this._routeTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdsInput() {
    return this._routeTableIds;
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

  // storage_capacity - computed: false, optional: false, required: true
  private _storageCapacity?: number; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
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

  // throughput_capacity - computed: true, optional: true, required: false
  private _throughputCapacity?: number; 
  public get throughputCapacity() {
    return this.getNumberAttribute('throughput_capacity');
  }
  public set throughputCapacity(value: number) {
    this._throughputCapacity = value;
  }
  public resetThroughputCapacity() {
    this._throughputCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputCapacityInput() {
    return this._throughputCapacity;
  }

  // throughput_capacity_per_ha_pair - computed: true, optional: true, required: false
  private _throughputCapacityPerHaPair?: number; 
  public get throughputCapacityPerHaPair() {
    return this.getNumberAttribute('throughput_capacity_per_ha_pair');
  }
  public set throughputCapacityPerHaPair(value: number) {
    this._throughputCapacityPerHaPair = value;
  }
  public resetThroughputCapacityPerHaPair() {
    this._throughputCapacityPerHaPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputCapacityPerHaPairInput() {
    return this._throughputCapacityPerHaPair;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // weekly_maintenance_start_time - computed: true, optional: true, required: false
  private _weeklyMaintenanceStartTime?: string; 
  public get weeklyMaintenanceStartTime() {
    return this.getStringAttribute('weekly_maintenance_start_time');
  }
  public set weeklyMaintenanceStartTime(value: string) {
    this._weeklyMaintenanceStartTime = value;
  }
  public resetWeeklyMaintenanceStartTime() {
    this._weeklyMaintenanceStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyMaintenanceStartTimeInput() {
    return this._weeklyMaintenanceStartTime;
  }

  // disk_iops_configuration - computed: false, optional: true, required: false
  private _diskIopsConfiguration = new FsxOntapFileSystemDiskIopsConfigurationOutputReference(this, "disk_iops_configuration");
  public get diskIopsConfiguration() {
    return this._diskIopsConfiguration;
  }
  public putDiskIopsConfiguration(value: FsxOntapFileSystemDiskIopsConfiguration) {
    this._diskIopsConfiguration.internalValue = value;
  }
  public resetDiskIopsConfiguration() {
    this._diskIopsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsConfigurationInput() {
    return this._diskIopsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxOntapFileSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxOntapFileSystemTimeouts) {
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
      automatic_backup_retention_days: cdktn.numberToTerraform(this._automaticBackupRetentionDays),
      daily_automatic_backup_start_time: cdktn.stringToTerraform(this._dailyAutomaticBackupStartTime),
      deployment_type: cdktn.stringToTerraform(this._deploymentType),
      endpoint_ip_address_range: cdktn.stringToTerraform(this._endpointIpAddressRange),
      fsx_admin_password: cdktn.stringToTerraform(this._fsxAdminPassword),
      ha_pairs: cdktn.numberToTerraform(this._haPairs),
      id: cdktn.stringToTerraform(this._id),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      preferred_subnet_id: cdktn.stringToTerraform(this._preferredSubnetId),
      region: cdktn.stringToTerraform(this._region),
      route_table_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._routeTableIds),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      storage_capacity: cdktn.numberToTerraform(this._storageCapacity),
      storage_type: cdktn.stringToTerraform(this._storageType),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      throughput_capacity: cdktn.numberToTerraform(this._throughputCapacity),
      throughput_capacity_per_ha_pair: cdktn.numberToTerraform(this._throughputCapacityPerHaPair),
      weekly_maintenance_start_time: cdktn.stringToTerraform(this._weeklyMaintenanceStartTime),
      disk_iops_configuration: fsxOntapFileSystemDiskIopsConfigurationToTerraform(this._diskIopsConfiguration.internalValue),
      timeouts: fsxOntapFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_backup_retention_days: {
        value: cdktn.numberToHclTerraform(this._automaticBackupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      daily_automatic_backup_start_time: {
        value: cdktn.stringToHclTerraform(this._dailyAutomaticBackupStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktn.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_ip_address_range: {
        value: cdktn.stringToHclTerraform(this._endpointIpAddressRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsx_admin_password: {
        value: cdktn.stringToHclTerraform(this._fsxAdminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_pairs: {
        value: cdktn.numberToHclTerraform(this._haPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_subnet_id: {
        value: cdktn.stringToHclTerraform(this._preferredSubnetId),
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
      route_table_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._routeTableIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_capacity: {
        value: cdktn.numberToHclTerraform(this._storageCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_type: {
        value: cdktn.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      throughput_capacity: {
        value: cdktn.numberToHclTerraform(this._throughputCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throughput_capacity_per_ha_pair: {
        value: cdktn.numberToHclTerraform(this._throughputCapacityPerHaPair),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weekly_maintenance_start_time: {
        value: cdktn.stringToHclTerraform(this._weeklyMaintenanceStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_iops_configuration: {
        value: fsxOntapFileSystemDiskIopsConfigurationToHclTerraform(this._diskIopsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxOntapFileSystemDiskIopsConfigurationList",
      },
      timeouts: {
        value: fsxOntapFileSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxOntapFileSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
