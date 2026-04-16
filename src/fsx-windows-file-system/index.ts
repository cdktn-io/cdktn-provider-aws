/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FsxWindowsFileSystemConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}
  */
  readonly activeDirectoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}
  */
  readonly automaticBackupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}
  */
  readonly copyTagsToBackups?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}
  */
  readonly dailyAutomaticBackupStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#final_backup_tags FsxWindowsFileSystem#final_backup_tags}
  */
  readonly finalBackupTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#id FsxWindowsFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}
  */
  readonly preferredSubnetId?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#region FsxWindowsFileSystem#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}
  */
  readonly skipFinalBackup?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}
  */
  readonly storageCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}
  */
  readonly throughputCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}
  */
  readonly weeklyMaintenanceStartTime?: string;
  /**
  * audit_log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}
  */
  readonly auditLogConfiguration?: FsxWindowsFileSystemAuditLogConfiguration;
  /**
  * disk_iops_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#disk_iops_configuration FsxWindowsFileSystem#disk_iops_configuration}
  */
  readonly diskIopsConfiguration?: FsxWindowsFileSystemDiskIopsConfiguration;
  /**
  * self_managed_active_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}
  */
  readonly selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}
  */
  readonly timeouts?: FsxWindowsFileSystemTimeouts;
}
export interface FsxWindowsFileSystemAuditLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}
  */
  readonly auditLogDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}
  */
  readonly fileAccessAuditLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}
  */
  readonly fileShareAccessAuditLogLevel?: string;
}

export function fsxWindowsFileSystemAuditLogConfigurationToTerraform(struct?: FsxWindowsFileSystemAuditLogConfigurationOutputReference | FsxWindowsFileSystemAuditLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log_destination: cdktn.stringToTerraform(struct!.auditLogDestination),
    file_access_audit_log_level: cdktn.stringToTerraform(struct!.fileAccessAuditLogLevel),
    file_share_access_audit_log_level: cdktn.stringToTerraform(struct!.fileShareAccessAuditLogLevel),
  }
}


export function fsxWindowsFileSystemAuditLogConfigurationToHclTerraform(struct?: FsxWindowsFileSystemAuditLogConfigurationOutputReference | FsxWindowsFileSystemAuditLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_log_destination: {
      value: cdktn.stringToHclTerraform(struct!.auditLogDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_access_audit_log_level: {
      value: cdktn.stringToHclTerraform(struct!.fileAccessAuditLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_share_access_audit_log_level: {
      value: cdktn.stringToHclTerraform(struct!.fileShareAccessAuditLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxWindowsFileSystemAuditLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxWindowsFileSystemAuditLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogDestination = this._auditLogDestination;
    }
    if (this._fileAccessAuditLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileAccessAuditLogLevel = this._fileAccessAuditLogLevel;
    }
    if (this._fileShareAccessAuditLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileShareAccessAuditLogLevel = this._fileShareAccessAuditLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxWindowsFileSystemAuditLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLogDestination = undefined;
      this._fileAccessAuditLogLevel = undefined;
      this._fileShareAccessAuditLogLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLogDestination = value.auditLogDestination;
      this._fileAccessAuditLogLevel = value.fileAccessAuditLogLevel;
      this._fileShareAccessAuditLogLevel = value.fileShareAccessAuditLogLevel;
    }
  }

  // audit_log_destination - computed: true, optional: true, required: false
  private _auditLogDestination?: string; 
  public get auditLogDestination() {
    return this.getStringAttribute('audit_log_destination');
  }
  public set auditLogDestination(value: string) {
    this._auditLogDestination = value;
  }
  public resetAuditLogDestination() {
    this._auditLogDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogDestinationInput() {
    return this._auditLogDestination;
  }

  // file_access_audit_log_level - computed: false, optional: true, required: false
  private _fileAccessAuditLogLevel?: string; 
  public get fileAccessAuditLogLevel() {
    return this.getStringAttribute('file_access_audit_log_level');
  }
  public set fileAccessAuditLogLevel(value: string) {
    this._fileAccessAuditLogLevel = value;
  }
  public resetFileAccessAuditLogLevel() {
    this._fileAccessAuditLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileAccessAuditLogLevelInput() {
    return this._fileAccessAuditLogLevel;
  }

  // file_share_access_audit_log_level - computed: false, optional: true, required: false
  private _fileShareAccessAuditLogLevel?: string; 
  public get fileShareAccessAuditLogLevel() {
    return this.getStringAttribute('file_share_access_audit_log_level');
  }
  public set fileShareAccessAuditLogLevel(value: string) {
    this._fileShareAccessAuditLogLevel = value;
  }
  public resetFileShareAccessAuditLogLevel() {
    this._fileShareAccessAuditLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileShareAccessAuditLogLevelInput() {
    return this._fileShareAccessAuditLogLevel;
  }
}
export interface FsxWindowsFileSystemDiskIopsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#iops FsxWindowsFileSystem#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#mode FsxWindowsFileSystem#mode}
  */
  readonly mode?: string;
}

export function fsxWindowsFileSystemDiskIopsConfigurationToTerraform(struct?: FsxWindowsFileSystemDiskIopsConfigurationOutputReference | FsxWindowsFileSystemDiskIopsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktn.numberToTerraform(struct!.iops),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function fsxWindowsFileSystemDiskIopsConfigurationToHclTerraform(struct?: FsxWindowsFileSystemDiskIopsConfigurationOutputReference | FsxWindowsFileSystemDiskIopsConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class FsxWindowsFileSystemDiskIopsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxWindowsFileSystemDiskIopsConfiguration | undefined {
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

  public set internalValue(value: FsxWindowsFileSystemDiskIopsConfiguration | undefined) {
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
export interface FsxWindowsFileSystemSelfManagedActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}
  */
  readonly dnsIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#domain_join_service_account_secret FsxWindowsFileSystem#domain_join_service_account_secret}
  */
  readonly domainJoinServiceAccountSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}
  */
  readonly fileSystemAdministratorsGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}
  */
  readonly organizationalUnitDistinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#password FsxWindowsFileSystem#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#username FsxWindowsFileSystem#username}
  */
  readonly username?: string;
}

export function fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(struct?: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference | FsxWindowsFileSystemSelfManagedActiveDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsIps),
    domain_join_service_account_secret: cdktn.stringToTerraform(struct!.domainJoinServiceAccountSecret),
    domain_name: cdktn.stringToTerraform(struct!.domainName),
    file_system_administrators_group: cdktn.stringToTerraform(struct!.fileSystemAdministratorsGroup),
    organizational_unit_distinguished_name: cdktn.stringToTerraform(struct!.organizationalUnitDistinguishedName),
    password: cdktn.stringToTerraform(struct!.password),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function fsxWindowsFileSystemSelfManagedActiveDirectoryToHclTerraform(struct?: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference | FsxWindowsFileSystemSelfManagedActiveDirectory): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ips: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    domain_join_service_account_secret: {
      value: cdktn.stringToHclTerraform(struct!.domainJoinServiceAccountSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktn.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_administrators_group: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemAdministratorsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit_distinguished_name: {
      value: cdktn.stringToHclTerraform(struct!.organizationalUnitDistinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FsxWindowsFileSystemSelfManagedActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIps = this._dnsIps;
    }
    if (this._domainJoinServiceAccountSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainJoinServiceAccountSecret = this._domainJoinServiceAccountSecret;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._fileSystemAdministratorsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemAdministratorsGroup = this._fileSystemAdministratorsGroup;
    }
    if (this._organizationalUnitDistinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitDistinguishedName = this._organizationalUnitDistinguishedName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxWindowsFileSystemSelfManagedActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsIps = undefined;
      this._domainJoinServiceAccountSecret = undefined;
      this._domainName = undefined;
      this._fileSystemAdministratorsGroup = undefined;
      this._organizationalUnitDistinguishedName = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsIps = value.dnsIps;
      this._domainJoinServiceAccountSecret = value.domainJoinServiceAccountSecret;
      this._domainName = value.domainName;
      this._fileSystemAdministratorsGroup = value.fileSystemAdministratorsGroup;
      this._organizationalUnitDistinguishedName = value.organizationalUnitDistinguishedName;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // dns_ips - computed: false, optional: false, required: true
  private _dnsIps?: string[]; 
  public get dnsIps() {
    return cdktn.Fn.tolist(this.getListAttribute('dns_ips'));
  }
  public set dnsIps(value: string[]) {
    this._dnsIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpsInput() {
    return this._dnsIps;
  }

  // domain_join_service_account_secret - computed: false, optional: true, required: false
  private _domainJoinServiceAccountSecret?: string; 
  public get domainJoinServiceAccountSecret() {
    return this.getStringAttribute('domain_join_service_account_secret');
  }
  public set domainJoinServiceAccountSecret(value: string) {
    this._domainJoinServiceAccountSecret = value;
  }
  public resetDomainJoinServiceAccountSecret() {
    this._domainJoinServiceAccountSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainJoinServiceAccountSecretInput() {
    return this._domainJoinServiceAccountSecret;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // file_system_administrators_group - computed: false, optional: true, required: false
  private _fileSystemAdministratorsGroup?: string; 
  public get fileSystemAdministratorsGroup() {
    return this.getStringAttribute('file_system_administrators_group');
  }
  public set fileSystemAdministratorsGroup(value: string) {
    this._fileSystemAdministratorsGroup = value;
  }
  public resetFileSystemAdministratorsGroup() {
    this._fileSystemAdministratorsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAdministratorsGroupInput() {
    return this._fileSystemAdministratorsGroup;
  }

  // organizational_unit_distinguished_name - computed: false, optional: true, required: false
  private _organizationalUnitDistinguishedName?: string; 
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }
  public set organizationalUnitDistinguishedName(value: string) {
    this._organizationalUnitDistinguishedName = value;
  }
  public resetOrganizationalUnitDistinguishedName() {
    this._organizationalUnitDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitDistinguishedNameInput() {
    return this._organizationalUnitDistinguishedName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface FsxWindowsFileSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#create FsxWindowsFileSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#update FsxWindowsFileSystem#update}
  */
  readonly update?: string;
}

export function fsxWindowsFileSystemTimeoutsToTerraform(struct?: FsxWindowsFileSystemTimeouts | cdktn.IResolvable): any {
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


export function fsxWindowsFileSystemTimeoutsToHclTerraform(struct?: FsxWindowsFileSystemTimeouts | cdktn.IResolvable): any {
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

export class FsxWindowsFileSystemTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxWindowsFileSystemTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FsxWindowsFileSystemTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system aws_fsx_windows_file_system}
*/
export class FsxWindowsFileSystem extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_windows_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FsxWindowsFileSystem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxWindowsFileSystem to import
  * @param importFromId The id of the existing FsxWindowsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxWindowsFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_windows_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/resources/fsx_windows_file_system aws_fsx_windows_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxWindowsFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: FsxWindowsFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_windows_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.41.0',
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
    this._activeDirectoryId = config.activeDirectoryId;
    this._aliases = config.aliases;
    this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
    this._backupId = config.backupId;
    this._copyTagsToBackups = config.copyTagsToBackups;
    this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
    this._deploymentType = config.deploymentType;
    this._finalBackupTags = config.finalBackupTags;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._preferredSubnetId = config.preferredSubnetId;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._skipFinalBackup = config.skipFinalBackup;
    this._storageCapacity = config.storageCapacity;
    this._storageType = config.storageType;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._throughputCapacity = config.throughputCapacity;
    this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
    this._auditLogConfiguration.internalValue = config.auditLogConfiguration;
    this._diskIopsConfiguration.internalValue = config.diskIopsConfiguration;
    this._selfManagedActiveDirectory.internalValue = config.selfManagedActiveDirectory;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_id - computed: false, optional: true, required: false
  private _activeDirectoryId?: string; 
  public get activeDirectoryId() {
    return this.getStringAttribute('active_directory_id');
  }
  public set activeDirectoryId(value: string) {
    this._activeDirectoryId = value;
  }
  public resetActiveDirectoryId() {
    this._activeDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryIdInput() {
    return this._activeDirectoryId;
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktn.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

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

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // copy_tags_to_backups - computed: false, optional: true, required: false
  private _copyTagsToBackups?: boolean | cdktn.IResolvable; 
  public get copyTagsToBackups() {
    return this.getBooleanAttribute('copy_tags_to_backups');
  }
  public set copyTagsToBackups(value: boolean | cdktn.IResolvable) {
    this._copyTagsToBackups = value;
  }
  public resetCopyTagsToBackups() {
    this._copyTagsToBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTagsToBackupsInput() {
    return this._copyTagsToBackups;
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

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // final_backup_tags - computed: false, optional: true, required: false
  private _finalBackupTags?: { [key: string]: string }; 
  public get finalBackupTags() {
    return this.getStringMapAttribute('final_backup_tags');
  }
  public set finalBackupTags(value: { [key: string]: string }) {
    this._finalBackupTags = value;
  }
  public resetFinalBackupTags() {
    this._finalBackupTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBackupTagsInput() {
    return this._finalBackupTags;
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
    return cdktn.Fn.tolist(this.getListAttribute('network_interface_ids'));
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // preferred_file_server_ip - computed: true, optional: false, required: false
  public get preferredFileServerIp() {
    return this.getStringAttribute('preferred_file_server_ip');
  }

  // preferred_subnet_id - computed: true, optional: true, required: false
  private _preferredSubnetId?: string; 
  public get preferredSubnetId() {
    return this.getStringAttribute('preferred_subnet_id');
  }
  public set preferredSubnetId(value: string) {
    this._preferredSubnetId = value;
  }
  public resetPreferredSubnetId() {
    this._preferredSubnetId = undefined;
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

  // remote_administration_endpoint - computed: true, optional: false, required: false
  public get remoteAdministrationEndpoint() {
    return this.getStringAttribute('remote_administration_endpoint');
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

  // skip_final_backup - computed: false, optional: true, required: false
  private _skipFinalBackup?: boolean | cdktn.IResolvable; 
  public get skipFinalBackup() {
    return this.getBooleanAttribute('skip_final_backup');
  }
  public set skipFinalBackup(value: boolean | cdktn.IResolvable) {
    this._skipFinalBackup = value;
  }
  public resetSkipFinalBackup() {
    this._skipFinalBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFinalBackupInput() {
    return this._skipFinalBackup;
  }

  // storage_capacity - computed: true, optional: true, required: false
  private _storageCapacity?: number; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  public resetStorageCapacity() {
    this._storageCapacity = undefined;
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

  // throughput_capacity - computed: false, optional: false, required: true
  private _throughputCapacity?: number; 
  public get throughputCapacity() {
    return this.getNumberAttribute('throughput_capacity');
  }
  public set throughputCapacity(value: number) {
    this._throughputCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputCapacityInput() {
    return this._throughputCapacity;
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

  // audit_log_configuration - computed: false, optional: true, required: false
  private _auditLogConfiguration = new FsxWindowsFileSystemAuditLogConfigurationOutputReference(this, "audit_log_configuration");
  public get auditLogConfiguration() {
    return this._auditLogConfiguration;
  }
  public putAuditLogConfiguration(value: FsxWindowsFileSystemAuditLogConfiguration) {
    this._auditLogConfiguration.internalValue = value;
  }
  public resetAuditLogConfiguration() {
    this._auditLogConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogConfigurationInput() {
    return this._auditLogConfiguration.internalValue;
  }

  // disk_iops_configuration - computed: false, optional: true, required: false
  private _diskIopsConfiguration = new FsxWindowsFileSystemDiskIopsConfigurationOutputReference(this, "disk_iops_configuration");
  public get diskIopsConfiguration() {
    return this._diskIopsConfiguration;
  }
  public putDiskIopsConfiguration(value: FsxWindowsFileSystemDiskIopsConfiguration) {
    this._diskIopsConfiguration.internalValue = value;
  }
  public resetDiskIopsConfiguration() {
    this._diskIopsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIopsConfigurationInput() {
    return this._diskIopsConfiguration.internalValue;
  }

  // self_managed_active_directory - computed: false, optional: true, required: false
  private _selfManagedActiveDirectory = new FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(this, "self_managed_active_directory");
  public get selfManagedActiveDirectory() {
    return this._selfManagedActiveDirectory;
  }
  public putSelfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory) {
    this._selfManagedActiveDirectory.internalValue = value;
  }
  public resetSelfManagedActiveDirectory() {
    this._selfManagedActiveDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedActiveDirectoryInput() {
    return this._selfManagedActiveDirectory.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxWindowsFileSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxWindowsFileSystemTimeouts) {
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
      active_directory_id: cdktn.stringToTerraform(this._activeDirectoryId),
      aliases: cdktn.listMapper(cdktn.stringToTerraform, false)(this._aliases),
      automatic_backup_retention_days: cdktn.numberToTerraform(this._automaticBackupRetentionDays),
      backup_id: cdktn.stringToTerraform(this._backupId),
      copy_tags_to_backups: cdktn.booleanToTerraform(this._copyTagsToBackups),
      daily_automatic_backup_start_time: cdktn.stringToTerraform(this._dailyAutomaticBackupStartTime),
      deployment_type: cdktn.stringToTerraform(this._deploymentType),
      final_backup_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._finalBackupTags),
      id: cdktn.stringToTerraform(this._id),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      preferred_subnet_id: cdktn.stringToTerraform(this._preferredSubnetId),
      region: cdktn.stringToTerraform(this._region),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      skip_final_backup: cdktn.booleanToTerraform(this._skipFinalBackup),
      storage_capacity: cdktn.numberToTerraform(this._storageCapacity),
      storage_type: cdktn.stringToTerraform(this._storageType),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      throughput_capacity: cdktn.numberToTerraform(this._throughputCapacity),
      weekly_maintenance_start_time: cdktn.stringToTerraform(this._weeklyMaintenanceStartTime),
      audit_log_configuration: fsxWindowsFileSystemAuditLogConfigurationToTerraform(this._auditLogConfiguration.internalValue),
      disk_iops_configuration: fsxWindowsFileSystemDiskIopsConfigurationToTerraform(this._diskIopsConfiguration.internalValue),
      self_managed_active_directory: fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(this._selfManagedActiveDirectory.internalValue),
      timeouts: fsxWindowsFileSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_directory_id: {
        value: cdktn.stringToHclTerraform(this._activeDirectoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aliases: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      automatic_backup_retention_days: {
        value: cdktn.numberToHclTerraform(this._automaticBackupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_id: {
        value: cdktn.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_tags_to_backups: {
        value: cdktn.booleanToHclTerraform(this._copyTagsToBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      final_backup_tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._finalBackupTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      skip_final_backup: {
        value: cdktn.booleanToHclTerraform(this._skipFinalBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      weekly_maintenance_start_time: {
        value: cdktn.stringToHclTerraform(this._weeklyMaintenanceStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_log_configuration: {
        value: fsxWindowsFileSystemAuditLogConfigurationToHclTerraform(this._auditLogConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxWindowsFileSystemAuditLogConfigurationList",
      },
      disk_iops_configuration: {
        value: fsxWindowsFileSystemDiskIopsConfigurationToHclTerraform(this._diskIopsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxWindowsFileSystemDiskIopsConfigurationList",
      },
      self_managed_active_directory: {
        value: fsxWindowsFileSystemSelfManagedActiveDirectoryToHclTerraform(this._selfManagedActiveDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxWindowsFileSystemSelfManagedActiveDirectoryList",
      },
      timeouts: {
        value: fsxWindowsFileSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxWindowsFileSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
