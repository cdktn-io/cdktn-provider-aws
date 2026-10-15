/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OdbAutonomousDatabaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Password for the ADMIN user. This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Password for the ADMIN user. This write-only value is never stored in Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}
  */
  readonly adminPasswordWo?: string;
  /**
  * Arbitrary version used to trigger an ADMIN password update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}
  */
  readonly adminPasswordWoVersion?: number;
  /**
  * IP addresses allowed to access the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}
  */
  readonly allowlistedIps?: string[];
  /**
  * Frequency at which a refreshable clone is automatically refreshed, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}
  */
  readonly autoRefreshFrequencyInSeconds?: number;
  /**
  * Time lag between a refreshable clone and its source, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}
  */
  readonly autoRefreshPointLagInSeconds?: number;
  /**
  * Maintenance schedule type for the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}
  */
  readonly autonomousMaintenanceScheduleType?: string;
  /**
  * Retention period for automatic backups, in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}
  */
  readonly backupRetentionPeriodInDays?: number;
  /**
  * Maximum compute capacity under the bring-your-own-license model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}
  */
  readonly byolComputeCountLimit?: number;
  /**
  * Character set of the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * Compute capacity in ECPUs or OCPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Number of CPU cores allocated to the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}
  */
  readonly cpuCoreCount?: number;
  /**
  * Data volume size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}
  */
  readonly dataStorageSizeInGbs?: number;
  /**
  * Data volume size in TB. Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}
  */
  readonly dataStorageSizeInTbs?: number;
  /**
  * Oracle Database edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}
  */
  readonly databaseEdition?: string;
  /**
  * Name of the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}
  */
  readonly dbName?: string;
  /**
  * Oracle Database software version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Intended database workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}
  */
  readonly dbWorkload?: string;
  /**
  * User-friendly name for the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}
  */
  readonly displayName?: string;
  /**
  * Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}
  */
  readonly encryptionKeyProvider?: string;
  /**
  * Whether automatic compute scaling is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}
  */
  readonly isAutoScalingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether automatic storage scaling is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}
  */
  readonly isAutoScalingForStorageEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether the backup retention period is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}
  */
  readonly isBackupRetentionLocked?: boolean | cdktn.IResolvable;
  /**
  * Whether local Oracle Data Guard is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}
  */
  readonly isLocalDataGuardEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether mutual TLS authentication is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}
  */
  readonly isMtlsConnectionRequired?: boolean | cdktn.IResolvable;
  /**
  * Whether the Autonomous Database is a refreshable clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}
  */
  readonly isRefreshableClone?: boolean | cdktn.IResolvable;
  /**
  * ARN of the AWS KMS key used to encrypt the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Oracle license model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Maximum data-loss limit for automatic local Data Guard failover, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}
  */
  readonly localAdgAutoFailoverMaxDataLossLimit?: number;
  /**
  * National character set of the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}
  */
  readonly ncharacterSet?: string;
  /**
  * ID of the associated ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}
  */
  readonly odbNetworkId?: string;
  /**
  * Open mode of the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}
  */
  readonly openMode?: string;
  /**
  * Permission level of the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}
  */
  readonly permissionLevel?: string;
  /**
  * Private endpoint IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}
  */
  readonly privateEndpointIp?: string;
  /**
  * Private endpoint label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}
  */
  readonly privateEndpointLabel?: string;
  /**
  * Refresh mode of a refreshable clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}
  */
  readonly refreshableMode?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}
  */
  readonly region?: string;
  /**
  * ID of the resource-pool leader Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}
  */
  readonly resourcePoolLeaderId?: string;
  /**
  * Source from which to create the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}
  */
  readonly source?: string;
  /**
  * IP addresses allowed to access the standby Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}
  */
  readonly standbyAllowlistedIps?: string[];
  /**
  * Source of the standby allowlisted IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}
  */
  readonly standbyAllowlistedIpsSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Date and time when automatic refresh begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}
  */
  readonly timeOfAutoRefreshStart?: string;
  /**
  * admin_password_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}
  */
  readonly adminPasswordSource?: OdbAutonomousDatabaseAdminPasswordSource[] | cdktn.IResolvable;
  /**
  * customer_contacts_to_send_to_oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}
  */
  readonly customerContactsToSendToOci?: OdbAutonomousDatabaseCustomerContactsToSendToOci[] | cdktn.IResolvable;
  /**
  * db_tools_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}
  */
  readonly dbToolsDetails?: OdbAutonomousDatabaseDbToolsDetails[] | cdktn.IResolvable;
  /**
  * long_term_backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}
  */
  readonly longTermBackupSchedule?: OdbAutonomousDatabaseLongTermBackupSchedule[] | cdktn.IResolvable;
  /**
  * resource_pool_summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}
  */
  readonly resourcePoolSummary?: OdbAutonomousDatabaseResourcePoolSummary[] | cdktn.IResolvable;
  /**
  * scheduled_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}
  */
  readonly scheduledOperations?: OdbAutonomousDatabaseScheduledOperations[] | cdktn.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}
  */
  readonly sourceConfiguration?: OdbAutonomousDatabaseSourceConfiguration[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}
  */
  readonly timeouts?: OdbAutonomousDatabaseTimeouts;
  /**
  * transportable_tablespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}
  */
  readonly transportableTablespace?: OdbAutonomousDatabaseTransportableTablespace[] | cdktn.IResolvable;
}
export interface OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret {
  /**
  * Type of OCI identifier supplied as the external ID when OCI assumes the IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#external_id_type OdbAutonomousDatabase#external_id_type}
  */
  readonly externalIdType: string;
  /**
  * ARN of the customer-managed IAM role OCI assumes to retrieve the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#iam_role_arn OdbAutonomousDatabase#iam_role_arn}
  */
  readonly iamRoleArn: string;
  /**
  * ARN of the AWS Secrets Manager secret that contains the ADMIN password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#secret_arn OdbAutonomousDatabase#secret_arn}
  */
  readonly secretArn: string;
}

export function odbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretToTerraform(struct?: OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_id_type: cdktn.stringToTerraform(struct!.externalIdType),
    iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
    secret_arn: cdktn.stringToTerraform(struct!.secretArn),
  }
}


export function odbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretToHclTerraform(struct?: OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_id_type: {
      value: cdktn.stringToHclTerraform(struct!.externalIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIdType = this._externalIdType;
    }
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIdType = undefined;
      this._iamRoleArn = undefined;
      this._secretArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIdType = value.externalIdType;
      this._iamRoleArn = value.iamRoleArn;
      this._secretArn = value.secretArn;
    }
  }

  // external_id_type - computed: false, optional: false, required: true
  private _externalIdType?: string; 
  public get externalIdType() {
    return this.getStringAttribute('external_id_type');
  }
  public set externalIdType(value: string) {
    this._externalIdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdTypeInput() {
    return this._externalIdType;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}

export class OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference {
    return new OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseAdminPasswordSource {
  /**
  * customer_managed_aws_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#customer_managed_aws_secret OdbAutonomousDatabase#customer_managed_aws_secret}
  */
  readonly customerManagedAwsSecret?: OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] | cdktn.IResolvable;
}

export function odbAutonomousDatabaseAdminPasswordSourceToTerraform(struct?: OdbAutonomousDatabaseAdminPasswordSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_managed_aws_secret: cdktn.listMapper(odbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretToTerraform, true)(struct!.customerManagedAwsSecret),
  }
}


export function odbAutonomousDatabaseAdminPasswordSourceToHclTerraform(struct?: OdbAutonomousDatabaseAdminPasswordSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_managed_aws_secret: {
      value: cdktn.listMapperHcl(odbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretToHclTerraform, true)(struct!.customerManagedAwsSecret),
      isBlock: true,
      type: "list",
      storageClassType: "OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseAdminPasswordSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseAdminPasswordSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerManagedAwsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerManagedAwsSecret = this._customerManagedAwsSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseAdminPasswordSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerManagedAwsSecret.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerManagedAwsSecret.internalValue = value.customerManagedAwsSecret;
    }
  }

  // customer_managed_aws_secret - computed: false, optional: true, required: false
  private _customerManagedAwsSecret = new OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(this, "customer_managed_aws_secret", false);
  public get customerManagedAwsSecret() {
    return this._customerManagedAwsSecret;
  }
  public putCustomerManagedAwsSecret(value: OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] | cdktn.IResolvable) {
    this._customerManagedAwsSecret.internalValue = value;
  }
  public resetCustomerManagedAwsSecret() {
    this._customerManagedAwsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedAwsSecretInput() {
    return this._customerManagedAwsSecret.internalValue;
  }
}

export class OdbAutonomousDatabaseAdminPasswordSourceList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseAdminPasswordSource[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseAdminPasswordSourceOutputReference {
    return new OdbAutonomousDatabaseAdminPasswordSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseCustomerContactsToSendToOci {
  /**
  * Email address of the customer contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#email OdbAutonomousDatabase#email}
  */
  readonly email: string;
}

export function odbAutonomousDatabaseCustomerContactsToSendToOciToTerraform(struct?: OdbAutonomousDatabaseCustomerContactsToSendToOci | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: cdktn.stringToTerraform(struct!.email),
  }
}


export function odbAutonomousDatabaseCustomerContactsToSendToOciToHclTerraform(struct?: OdbAutonomousDatabaseCustomerContactsToSendToOci | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseCustomerContactsToSendToOci | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseCustomerContactsToSendToOci | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class OdbAutonomousDatabaseCustomerContactsToSendToOciList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseCustomerContactsToSendToOci[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference {
    return new OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseDbToolsDetails {
  /**
  * Compute capacity allocated to the database tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Whether the database tool is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_enabled OdbAutonomousDatabase#is_enabled}
  */
  readonly isEnabled?: boolean | cdktn.IResolvable;
  /**
  * Maximum idle time before the database tool is shut down, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#max_idle_time_in_minutes OdbAutonomousDatabase#max_idle_time_in_minutes}
  */
  readonly maxIdleTimeInMinutes?: number;
  /**
  * Name of the database tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#name OdbAutonomousDatabase#name}
  */
  readonly name?: string;
}

export function odbAutonomousDatabaseDbToolsDetailsToTerraform(struct?: OdbAutonomousDatabaseDbToolsDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compute_count: cdktn.numberToTerraform(struct!.computeCount),
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
    max_idle_time_in_minutes: cdktn.numberToTerraform(struct!.maxIdleTimeInMinutes),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function odbAutonomousDatabaseDbToolsDetailsToHclTerraform(struct?: OdbAutonomousDatabaseDbToolsDetails | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compute_count: {
      value: cdktn.numberToHclTerraform(struct!.computeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_idle_time_in_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxIdleTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class OdbAutonomousDatabaseDbToolsDetailsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseDbToolsDetails | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCount = this._computeCount;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._maxIdleTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeInMinutes = this._maxIdleTimeInMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseDbToolsDetails | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeCount = undefined;
      this._isEnabled = undefined;
      this._maxIdleTimeInMinutes = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeCount = value.computeCount;
      this._isEnabled = value.isEnabled;
      this._maxIdleTimeInMinutes = value.maxIdleTimeInMinutes;
      this._name = value.name;
    }
  }

  // compute_count - computed: true, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // max_idle_time_in_minutes - computed: true, optional: true, required: false
  private _maxIdleTimeInMinutes?: number; 
  public get maxIdleTimeInMinutes() {
    return this.getNumberAttribute('max_idle_time_in_minutes');
  }
  public set maxIdleTimeInMinutes(value: number) {
    this._maxIdleTimeInMinutes = value;
  }
  public resetMaxIdleTimeInMinutes() {
    this._maxIdleTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeInMinutesInput() {
    return this._maxIdleTimeInMinutes;
  }

  // name - computed: true, optional: true, required: false
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
}

export class OdbAutonomousDatabaseDbToolsDetailsList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseDbToolsDetails[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseDbToolsDetailsOutputReference {
    return new OdbAutonomousDatabaseDbToolsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseLongTermBackupSchedule {
  /**
  * Whether the long-term backup schedule is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}
  */
  readonly isDisabled?: boolean | cdktn.IResolvable;
  /**
  * Cadence at which long-term backups are taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#repeat_cadence OdbAutonomousDatabase#repeat_cadence}
  */
  readonly repeatCadence?: string;
  /**
  * Retention period for long-term backups, in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#retention_period_in_days OdbAutonomousDatabase#retention_period_in_days}
  */
  readonly retentionPeriodInDays?: number;
  /**
  * Date and time at which the long-term backup is taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_backup OdbAutonomousDatabase#time_of_backup}
  */
  readonly timeOfBackup?: string;
}

export function odbAutonomousDatabaseLongTermBackupScheduleToTerraform(struct?: OdbAutonomousDatabaseLongTermBackupSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_disabled: cdktn.booleanToTerraform(struct!.isDisabled),
    repeat_cadence: cdktn.stringToTerraform(struct!.repeatCadence),
    retention_period_in_days: cdktn.numberToTerraform(struct!.retentionPeriodInDays),
    time_of_backup: cdktn.stringToTerraform(struct!.timeOfBackup),
  }
}


export function odbAutonomousDatabaseLongTermBackupScheduleToHclTerraform(struct?: OdbAutonomousDatabaseLongTermBackupSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repeat_cadence: {
      value: cdktn.stringToHclTerraform(struct!.repeatCadence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_in_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionPeriodInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_of_backup: {
      value: cdktn.stringToHclTerraform(struct!.timeOfBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseLongTermBackupScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseLongTermBackupSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._repeatCadence !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCadence = this._repeatCadence;
    }
    if (this._retentionPeriodInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodInDays = this._retentionPeriodInDays;
    }
    if (this._timeOfBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfBackup = this._timeOfBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseLongTermBackupSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDisabled = undefined;
      this._repeatCadence = undefined;
      this._retentionPeriodInDays = undefined;
      this._timeOfBackup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDisabled = value.isDisabled;
      this._repeatCadence = value.repeatCadence;
      this._retentionPeriodInDays = value.retentionPeriodInDays;
      this._timeOfBackup = value.timeOfBackup;
    }
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktn.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktn.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // repeat_cadence - computed: true, optional: true, required: false
  private _repeatCadence?: string; 
  public get repeatCadence() {
    return this.getStringAttribute('repeat_cadence');
  }
  public set repeatCadence(value: string) {
    this._repeatCadence = value;
  }
  public resetRepeatCadence() {
    this._repeatCadence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCadenceInput() {
    return this._repeatCadence;
  }

  // retention_period_in_days - computed: true, optional: true, required: false
  private _retentionPeriodInDays?: number; 
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }
  public set retentionPeriodInDays(value: number) {
    this._retentionPeriodInDays = value;
  }
  public resetRetentionPeriodInDays() {
    this._retentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInDaysInput() {
    return this._retentionPeriodInDays;
  }

  // time_of_backup - computed: true, optional: true, required: false
  private _timeOfBackup?: string; 
  public get timeOfBackup() {
    return this.getStringAttribute('time_of_backup');
  }
  public set timeOfBackup(value: string) {
    this._timeOfBackup = value;
  }
  public resetTimeOfBackup() {
    this._timeOfBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfBackupInput() {
    return this._timeOfBackup;
  }
}

export class OdbAutonomousDatabaseLongTermBackupScheduleList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseLongTermBackupSchedule[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseLongTermBackupScheduleOutputReference {
    return new OdbAutonomousDatabaseLongTermBackupScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseResourcePoolSummary {
  /**
  * Whether the resource pool is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}
  */
  readonly isDisabled?: boolean | cdktn.IResolvable;
  /**
  * Number of Autonomous Databases the resource pool can contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#pool_size OdbAutonomousDatabase#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Total storage size of the resource pool, in TB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#pool_storage_size_in_tbs OdbAutonomousDatabase#pool_storage_size_in_tbs}
  */
  readonly poolStorageSizeInTbs?: number;
}

export function odbAutonomousDatabaseResourcePoolSummaryToTerraform(struct?: OdbAutonomousDatabaseResourcePoolSummary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_disabled: cdktn.booleanToTerraform(struct!.isDisabled),
    pool_size: cdktn.numberToTerraform(struct!.poolSize),
    pool_storage_size_in_tbs: cdktn.numberToTerraform(struct!.poolStorageSizeInTbs),
  }
}


export function odbAutonomousDatabaseResourcePoolSummaryToHclTerraform(struct?: OdbAutonomousDatabaseResourcePoolSummary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_disabled: {
      value: cdktn.booleanToHclTerraform(struct!.isDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool_size: {
      value: cdktn.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool_storage_size_in_tbs: {
      value: cdktn.numberToHclTerraform(struct!.poolStorageSizeInTbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseResourcePoolSummaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseResourcePoolSummary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisabled = this._isDisabled;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._poolStorageSizeInTbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolStorageSizeInTbs = this._poolStorageSizeInTbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseResourcePoolSummary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isDisabled = undefined;
      this._poolSize = undefined;
      this._poolStorageSizeInTbs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isDisabled = value.isDisabled;
      this._poolSize = value.poolSize;
      this._poolStorageSizeInTbs = value.poolStorageSizeInTbs;
    }
  }

  // available_compute_capacity - computed: true, optional: false, required: false
  public get availableComputeCapacity() {
    return this.getNumberAttribute('available_compute_capacity');
  }

  // available_storage_capacity_in_tbs - computed: true, optional: false, required: false
  public get availableStorageCapacityInTbs() {
    return this.getNumberAttribute('available_storage_capacity_in_tbs');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktn.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktn.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // pool_size - computed: true, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // pool_storage_size_in_tbs - computed: true, optional: true, required: false
  private _poolStorageSizeInTbs?: number; 
  public get poolStorageSizeInTbs() {
    return this.getNumberAttribute('pool_storage_size_in_tbs');
  }
  public set poolStorageSizeInTbs(value: number) {
    this._poolStorageSizeInTbs = value;
  }
  public resetPoolStorageSizeInTbs() {
    this._poolStorageSizeInTbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolStorageSizeInTbsInput() {
    return this._poolStorageSizeInTbs;
  }

  // total_compute_capacity - computed: true, optional: false, required: false
  public get totalComputeCapacity() {
    return this.getNumberAttribute('total_compute_capacity');
  }
}

export class OdbAutonomousDatabaseResourcePoolSummaryList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseResourcePoolSummary[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseResourcePoolSummaryOutputReference {
    return new OdbAutonomousDatabaseResourcePoolSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseScheduledOperations {
  /**
  * Day of the week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#day_of_week OdbAutonomousDatabase#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Scheduled start time in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_start_time OdbAutonomousDatabase#scheduled_start_time}
  */
  readonly scheduledStartTime?: string;
  /**
  * Scheduled stop time in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_stop_time OdbAutonomousDatabase#scheduled_stop_time}
  */
  readonly scheduledStopTime?: string;
}

export function odbAutonomousDatabaseScheduledOperationsToTerraform(struct?: OdbAutonomousDatabaseScheduledOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.stringToTerraform(struct!.dayOfWeek),
    scheduled_start_time: cdktn.stringToTerraform(struct!.scheduledStartTime),
    scheduled_stop_time: cdktn.stringToTerraform(struct!.scheduledStopTime),
  }
}


export function odbAutonomousDatabaseScheduledOperationsToHclTerraform(struct?: OdbAutonomousDatabaseScheduledOperations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_start_time: {
      value: cdktn.stringToHclTerraform(struct!.scheduledStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_stop_time: {
      value: cdktn.stringToHclTerraform(struct!.scheduledStopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseScheduledOperationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseScheduledOperations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._scheduledStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStartTime = this._scheduledStartTime;
    }
    if (this._scheduledStopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledStopTime = this._scheduledStopTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseScheduledOperations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._scheduledStartTime = undefined;
      this._scheduledStopTime = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._scheduledStartTime = value.scheduledStartTime;
      this._scheduledStopTime = value.scheduledStopTime;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // scheduled_start_time - computed: true, optional: true, required: false
  private _scheduledStartTime?: string; 
  public get scheduledStartTime() {
    return this.getStringAttribute('scheduled_start_time');
  }
  public set scheduledStartTime(value: string) {
    this._scheduledStartTime = value;
  }
  public resetScheduledStartTime() {
    this._scheduledStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStartTimeInput() {
    return this._scheduledStartTime;
  }

  // scheduled_stop_time - computed: true, optional: true, required: false
  private _scheduledStopTime?: string; 
  public get scheduledStopTime() {
    return this.getStringAttribute('scheduled_stop_time');
  }
  public set scheduledStopTime(value: string) {
    this._scheduledStopTime = value;
  }
  public resetScheduledStopTime() {
    this._scheduledStopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledStopTimeInput() {
    return this._scheduledStopTime;
  }
}

export class OdbAutonomousDatabaseScheduledOperationsList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseScheduledOperations[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseScheduledOperationsOutputReference {
    return new OdbAutonomousDatabaseScheduledOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable {
  /**
  * Frequency at which the refreshable clone is automatically refreshed, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}
  */
  readonly autoRefreshFrequencyInSeconds?: number;
  /**
  * Time lag between the refreshable clone and its source, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}
  */
  readonly autoRefreshPointLagInSeconds?: number;
  /**
  * Type of clone to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}
  */
  readonly cloneType?: string;
  /**
  * Open mode of the refreshable clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}
  */
  readonly openMode?: string;
  /**
  * Refresh mode of the clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}
  */
  readonly refreshableMode?: string;
  /**
  * ID of the source Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}
  */
  readonly sourceAutonomousDatabaseId: string;
  /**
  * Date and time when automatic refresh starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}
  */
  readonly timeOfAutoRefreshStart?: string;
}

export function odbAutonomousDatabaseSourceConfigurationCloneToRefreshableToTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_refresh_frequency_in_seconds: cdktn.numberToTerraform(struct!.autoRefreshFrequencyInSeconds),
    auto_refresh_point_lag_in_seconds: cdktn.numberToTerraform(struct!.autoRefreshPointLagInSeconds),
    clone_type: cdktn.stringToTerraform(struct!.cloneType),
    open_mode: cdktn.stringToTerraform(struct!.openMode),
    refreshable_mode: cdktn.stringToTerraform(struct!.refreshableMode),
    source_autonomous_database_id: cdktn.stringToTerraform(struct!.sourceAutonomousDatabaseId),
    time_of_auto_refresh_start: cdktn.stringToTerraform(struct!.timeOfAutoRefreshStart),
  }
}


export function odbAutonomousDatabaseSourceConfigurationCloneToRefreshableToHclTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_refresh_frequency_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.autoRefreshFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_refresh_point_lag_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.autoRefreshPointLagInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clone_type: {
      value: cdktn.stringToHclTerraform(struct!.cloneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_mode: {
      value: cdktn.stringToHclTerraform(struct!.openMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refreshable_mode: {
      value: cdktn.stringToHclTerraform(struct!.refreshableMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_autonomous_database_id: {
      value: cdktn.stringToHclTerraform(struct!.sourceAutonomousDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_auto_refresh_start: {
      value: cdktn.stringToHclTerraform(struct!.timeOfAutoRefreshStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRefreshFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRefreshFrequencyInSeconds = this._autoRefreshFrequencyInSeconds;
    }
    if (this._autoRefreshPointLagInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRefreshPointLagInSeconds = this._autoRefreshPointLagInSeconds;
    }
    if (this._cloneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneType = this._cloneType;
    }
    if (this._openMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.openMode = this._openMode;
    }
    if (this._refreshableMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshableMode = this._refreshableMode;
    }
    if (this._sourceAutonomousDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAutonomousDatabaseId = this._sourceAutonomousDatabaseId;
    }
    if (this._timeOfAutoRefreshStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfAutoRefreshStart = this._timeOfAutoRefreshStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRefreshFrequencyInSeconds = undefined;
      this._autoRefreshPointLagInSeconds = undefined;
      this._cloneType = undefined;
      this._openMode = undefined;
      this._refreshableMode = undefined;
      this._sourceAutonomousDatabaseId = undefined;
      this._timeOfAutoRefreshStart = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRefreshFrequencyInSeconds = value.autoRefreshFrequencyInSeconds;
      this._autoRefreshPointLagInSeconds = value.autoRefreshPointLagInSeconds;
      this._cloneType = value.cloneType;
      this._openMode = value.openMode;
      this._refreshableMode = value.refreshableMode;
      this._sourceAutonomousDatabaseId = value.sourceAutonomousDatabaseId;
      this._timeOfAutoRefreshStart = value.timeOfAutoRefreshStart;
    }
  }

  // auto_refresh_frequency_in_seconds - computed: false, optional: true, required: false
  private _autoRefreshFrequencyInSeconds?: number; 
  public get autoRefreshFrequencyInSeconds() {
    return this.getNumberAttribute('auto_refresh_frequency_in_seconds');
  }
  public set autoRefreshFrequencyInSeconds(value: number) {
    this._autoRefreshFrequencyInSeconds = value;
  }
  public resetAutoRefreshFrequencyInSeconds() {
    this._autoRefreshFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshFrequencyInSecondsInput() {
    return this._autoRefreshFrequencyInSeconds;
  }

  // auto_refresh_point_lag_in_seconds - computed: false, optional: true, required: false
  private _autoRefreshPointLagInSeconds?: number; 
  public get autoRefreshPointLagInSeconds() {
    return this.getNumberAttribute('auto_refresh_point_lag_in_seconds');
  }
  public set autoRefreshPointLagInSeconds(value: number) {
    this._autoRefreshPointLagInSeconds = value;
  }
  public resetAutoRefreshPointLagInSeconds() {
    this._autoRefreshPointLagInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshPointLagInSecondsInput() {
    return this._autoRefreshPointLagInSeconds;
  }

  // clone_type - computed: false, optional: true, required: false
  private _cloneType?: string; 
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string) {
    this._cloneType = value;
  }
  public resetCloneType() {
    this._cloneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTypeInput() {
    return this._cloneType;
  }

  // open_mode - computed: false, optional: true, required: false
  private _openMode?: string; 
  public get openMode() {
    return this.getStringAttribute('open_mode');
  }
  public set openMode(value: string) {
    this._openMode = value;
  }
  public resetOpenMode() {
    this._openMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openModeInput() {
    return this._openMode;
  }

  // refreshable_mode - computed: false, optional: true, required: false
  private _refreshableMode?: string; 
  public get refreshableMode() {
    return this.getStringAttribute('refreshable_mode');
  }
  public set refreshableMode(value: string) {
    this._refreshableMode = value;
  }
  public resetRefreshableMode() {
    this._refreshableMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshableModeInput() {
    return this._refreshableMode;
  }

  // source_autonomous_database_id - computed: false, optional: false, required: true
  private _sourceAutonomousDatabaseId?: string; 
  public get sourceAutonomousDatabaseId() {
    return this.getStringAttribute('source_autonomous_database_id');
  }
  public set sourceAutonomousDatabaseId(value: string) {
    this._sourceAutonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAutonomousDatabaseIdInput() {
    return this._sourceAutonomousDatabaseId;
  }

  // time_of_auto_refresh_start - computed: false, optional: true, required: false
  private _timeOfAutoRefreshStart?: string; 
  public get timeOfAutoRefreshStart() {
    return this.getStringAttribute('time_of_auto_refresh_start');
  }
  public set timeOfAutoRefreshStart(value: string) {
    this._timeOfAutoRefreshStart = value;
  }
  public resetTimeOfAutoRefreshStart() {
    this._timeOfAutoRefreshStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfAutoRefreshStartInput() {
    return this._timeOfAutoRefreshStart;
  }
}

export class OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference {
    return new OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard {
  /**
  * ARN of the source Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}
  */
  readonly sourceAutonomousDatabaseArn: string;
}

export function odbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardToTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source_autonomous_database_arn: cdktn.stringToTerraform(struct!.sourceAutonomousDatabaseArn),
  }
}


export function odbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardToHclTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source_autonomous_database_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceAutonomousDatabaseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAutonomousDatabaseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAutonomousDatabaseArn = this._sourceAutonomousDatabaseArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAutonomousDatabaseArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAutonomousDatabaseArn = value.sourceAutonomousDatabaseArn;
    }
  }

  // source_autonomous_database_arn - computed: false, optional: false, required: true
  private _sourceAutonomousDatabaseArn?: string; 
  public get sourceAutonomousDatabaseArn() {
    return this.getStringAttribute('source_autonomous_database_arn');
  }
  public set sourceAutonomousDatabaseArn(value: string) {
    this._sourceAutonomousDatabaseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAutonomousDatabaseArnInput() {
    return this._sourceAutonomousDatabaseArn;
  }
}

export class OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference {
    return new OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery {
  /**
  * Whether automatic backups are replicated to the disaster recovery database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_replicate_automatic_backups OdbAutonomousDatabase#is_replicate_automatic_backups}
  */
  readonly isReplicateAutomaticBackups?: boolean | cdktn.IResolvable;
  /**
  * Type of remote disaster recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#remote_disaster_recovery_type OdbAutonomousDatabase#remote_disaster_recovery_type}
  */
  readonly remoteDisasterRecoveryType: string;
  /**
  * ARN of the source Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}
  */
  readonly sourceAutonomousDatabaseArn: string;
}

export function odbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryToTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_replicate_automatic_backups: cdktn.booleanToTerraform(struct!.isReplicateAutomaticBackups),
    remote_disaster_recovery_type: cdktn.stringToTerraform(struct!.remoteDisasterRecoveryType),
    source_autonomous_database_arn: cdktn.stringToTerraform(struct!.sourceAutonomousDatabaseArn),
  }
}


export function odbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryToHclTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_replicate_automatic_backups: {
      value: cdktn.booleanToHclTerraform(struct!.isReplicateAutomaticBackups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_disaster_recovery_type: {
      value: cdktn.stringToHclTerraform(struct!.remoteDisasterRecoveryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_autonomous_database_arn: {
      value: cdktn.stringToHclTerraform(struct!.sourceAutonomousDatabaseArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isReplicateAutomaticBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReplicateAutomaticBackups = this._isReplicateAutomaticBackups;
    }
    if (this._remoteDisasterRecoveryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDisasterRecoveryType = this._remoteDisasterRecoveryType;
    }
    if (this._sourceAutonomousDatabaseArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAutonomousDatabaseArn = this._sourceAutonomousDatabaseArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isReplicateAutomaticBackups = undefined;
      this._remoteDisasterRecoveryType = undefined;
      this._sourceAutonomousDatabaseArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isReplicateAutomaticBackups = value.isReplicateAutomaticBackups;
      this._remoteDisasterRecoveryType = value.remoteDisasterRecoveryType;
      this._sourceAutonomousDatabaseArn = value.sourceAutonomousDatabaseArn;
    }
  }

  // is_replicate_automatic_backups - computed: false, optional: true, required: false
  private _isReplicateAutomaticBackups?: boolean | cdktn.IResolvable; 
  public get isReplicateAutomaticBackups() {
    return this.getBooleanAttribute('is_replicate_automatic_backups');
  }
  public set isReplicateAutomaticBackups(value: boolean | cdktn.IResolvable) {
    this._isReplicateAutomaticBackups = value;
  }
  public resetIsReplicateAutomaticBackups() {
    this._isReplicateAutomaticBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplicateAutomaticBackupsInput() {
    return this._isReplicateAutomaticBackups;
  }

  // remote_disaster_recovery_type - computed: false, optional: false, required: true
  private _remoteDisasterRecoveryType?: string; 
  public get remoteDisasterRecoveryType() {
    return this.getStringAttribute('remote_disaster_recovery_type');
  }
  public set remoteDisasterRecoveryType(value: string) {
    this._remoteDisasterRecoveryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDisasterRecoveryTypeInput() {
    return this._remoteDisasterRecoveryType;
  }

  // source_autonomous_database_arn - computed: false, optional: false, required: true
  private _sourceAutonomousDatabaseArn?: string; 
  public get sourceAutonomousDatabaseArn() {
    return this.getStringAttribute('source_autonomous_database_arn');
  }
  public set sourceAutonomousDatabaseArn(value: string) {
    this._sourceAutonomousDatabaseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAutonomousDatabaseArnInput() {
    return this._sourceAutonomousDatabaseArn;
  }
}

export class OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference {
    return new OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseSourceConfigurationDatabaseClone {
  /**
  * Type of clone to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}
  */
  readonly cloneType: string;
  /**
  * ID of the source Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}
  */
  readonly sourceAutonomousDatabaseId: string;
}

export function odbAutonomousDatabaseSourceConfigurationDatabaseCloneToTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationDatabaseClone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clone_type: cdktn.stringToTerraform(struct!.cloneType),
    source_autonomous_database_id: cdktn.stringToTerraform(struct!.sourceAutonomousDatabaseId),
  }
}


export function odbAutonomousDatabaseSourceConfigurationDatabaseCloneToHclTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationDatabaseClone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clone_type: {
      value: cdktn.stringToHclTerraform(struct!.cloneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_autonomous_database_id: {
      value: cdktn.stringToHclTerraform(struct!.sourceAutonomousDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseSourceConfigurationDatabaseClone | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneType = this._cloneType;
    }
    if (this._sourceAutonomousDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAutonomousDatabaseId = this._sourceAutonomousDatabaseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseSourceConfigurationDatabaseClone | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloneType = undefined;
      this._sourceAutonomousDatabaseId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloneType = value.cloneType;
      this._sourceAutonomousDatabaseId = value.sourceAutonomousDatabaseId;
    }
  }

  // clone_type - computed: false, optional: false, required: true
  private _cloneType?: string; 
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string) {
    this._cloneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTypeInput() {
    return this._cloneType;
  }

  // source_autonomous_database_id - computed: false, optional: false, required: true
  private _sourceAutonomousDatabaseId?: string; 
  public get sourceAutonomousDatabaseId() {
    return this.getStringAttribute('source_autonomous_database_id');
  }
  public set sourceAutonomousDatabaseId(value: string) {
    this._sourceAutonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAutonomousDatabaseIdInput() {
    return this._sourceAutonomousDatabaseId;
  }
}

export class OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference {
    return new OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore {
  /**
  * Tablespace IDs to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}
  */
  readonly cloneTableSpaceList?: number[];
  /**
  * Type of clone to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}
  */
  readonly cloneType: string;
  /**
  * ID of the source Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}
  */
  readonly sourceAutonomousDatabaseId: string;
  /**
  * Date and time to which the database is restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#timestamp OdbAutonomousDatabase#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Whether to use the latest available backup timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#use_latest_available_backup_timestamp OdbAutonomousDatabase#use_latest_available_backup_timestamp}
  */
  readonly useLatestAvailableBackupTimestamp?: boolean | cdktn.IResolvable;
}

export function odbAutonomousDatabaseSourceConfigurationPointInTimeRestoreToTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clone_table_space_list: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.cloneTableSpaceList),
    clone_type: cdktn.stringToTerraform(struct!.cloneType),
    source_autonomous_database_id: cdktn.stringToTerraform(struct!.sourceAutonomousDatabaseId),
    timestamp: cdktn.stringToTerraform(struct!.timestamp),
    use_latest_available_backup_timestamp: cdktn.booleanToTerraform(struct!.useLatestAvailableBackupTimestamp),
  }
}


export function odbAutonomousDatabaseSourceConfigurationPointInTimeRestoreToHclTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clone_table_space_list: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.cloneTableSpaceList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    clone_type: {
      value: cdktn.stringToHclTerraform(struct!.cloneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_autonomous_database_id: {
      value: cdktn.stringToHclTerraform(struct!.sourceAutonomousDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktn.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_latest_available_backup_timestamp: {
      value: cdktn.booleanToHclTerraform(struct!.useLatestAvailableBackupTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloneTableSpaceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneTableSpaceList = this._cloneTableSpaceList;
    }
    if (this._cloneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneType = this._cloneType;
    }
    if (this._sourceAutonomousDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAutonomousDatabaseId = this._sourceAutonomousDatabaseId;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._useLatestAvailableBackupTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLatestAvailableBackupTimestamp = this._useLatestAvailableBackupTimestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloneTableSpaceList = undefined;
      this._cloneType = undefined;
      this._sourceAutonomousDatabaseId = undefined;
      this._timestamp = undefined;
      this._useLatestAvailableBackupTimestamp = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloneTableSpaceList = value.cloneTableSpaceList;
      this._cloneType = value.cloneType;
      this._sourceAutonomousDatabaseId = value.sourceAutonomousDatabaseId;
      this._timestamp = value.timestamp;
      this._useLatestAvailableBackupTimestamp = value.useLatestAvailableBackupTimestamp;
    }
  }

  // clone_table_space_list - computed: false, optional: true, required: false
  private _cloneTableSpaceList?: number[]; 
  public get cloneTableSpaceList() {
    return this.getNumberListAttribute('clone_table_space_list');
  }
  public set cloneTableSpaceList(value: number[]) {
    this._cloneTableSpaceList = value;
  }
  public resetCloneTableSpaceList() {
    this._cloneTableSpaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTableSpaceListInput() {
    return this._cloneTableSpaceList;
  }

  // clone_type - computed: false, optional: false, required: true
  private _cloneType?: string; 
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string) {
    this._cloneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTypeInput() {
    return this._cloneType;
  }

  // source_autonomous_database_id - computed: false, optional: false, required: true
  private _sourceAutonomousDatabaseId?: string; 
  public get sourceAutonomousDatabaseId() {
    return this.getStringAttribute('source_autonomous_database_id');
  }
  public set sourceAutonomousDatabaseId(value: string) {
    this._sourceAutonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAutonomousDatabaseIdInput() {
    return this._sourceAutonomousDatabaseId;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // use_latest_available_backup_timestamp - computed: false, optional: true, required: false
  private _useLatestAvailableBackupTimestamp?: boolean | cdktn.IResolvable; 
  public get useLatestAvailableBackupTimestamp() {
    return this.getBooleanAttribute('use_latest_available_backup_timestamp');
  }
  public set useLatestAvailableBackupTimestamp(value: boolean | cdktn.IResolvable) {
    this._useLatestAvailableBackupTimestamp = value;
  }
  public resetUseLatestAvailableBackupTimestamp() {
    this._useLatestAvailableBackupTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLatestAvailableBackupTimestampInput() {
    return this._useLatestAvailableBackupTimestamp;
  }
}

export class OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference {
    return new OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup {
  /**
  * ID of the Autonomous Database backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#autonomous_database_backup_id OdbAutonomousDatabase#autonomous_database_backup_id}
  */
  readonly autonomousDatabaseBackupId: string;
  /**
  * Tablespace IDs to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}
  */
  readonly cloneTableSpaceList?: number[];
  /**
  * Type of clone to create from the backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}
  */
  readonly cloneType: string;
}

export function odbAutonomousDatabaseSourceConfigurationRestoreFromBackupToTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    autonomous_database_backup_id: cdktn.stringToTerraform(struct!.autonomousDatabaseBackupId),
    clone_table_space_list: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.cloneTableSpaceList),
    clone_type: cdktn.stringToTerraform(struct!.cloneType),
  }
}


export function odbAutonomousDatabaseSourceConfigurationRestoreFromBackupToHclTerraform(struct?: OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    autonomous_database_backup_id: {
      value: cdktn.stringToHclTerraform(struct!.autonomousDatabaseBackupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clone_table_space_list: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.cloneTableSpaceList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    clone_type: {
      value: cdktn.stringToHclTerraform(struct!.cloneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousDatabaseBackupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousDatabaseBackupId = this._autonomousDatabaseBackupId;
    }
    if (this._cloneTableSpaceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneTableSpaceList = this._cloneTableSpaceList;
    }
    if (this._cloneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneType = this._cloneType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousDatabaseBackupId = undefined;
      this._cloneTableSpaceList = undefined;
      this._cloneType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousDatabaseBackupId = value.autonomousDatabaseBackupId;
      this._cloneTableSpaceList = value.cloneTableSpaceList;
      this._cloneType = value.cloneType;
    }
  }

  // autonomous_database_backup_id - computed: false, optional: false, required: true
  private _autonomousDatabaseBackupId?: string; 
  public get autonomousDatabaseBackupId() {
    return this.getStringAttribute('autonomous_database_backup_id');
  }
  public set autonomousDatabaseBackupId(value: string) {
    this._autonomousDatabaseBackupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseBackupIdInput() {
    return this._autonomousDatabaseBackupId;
  }

  // clone_table_space_list - computed: false, optional: true, required: false
  private _cloneTableSpaceList?: number[]; 
  public get cloneTableSpaceList() {
    return this.getNumberListAttribute('clone_table_space_list');
  }
  public set cloneTableSpaceList(value: number[]) {
    this._cloneTableSpaceList = value;
  }
  public resetCloneTableSpaceList() {
    this._cloneTableSpaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTableSpaceListInput() {
    return this._cloneTableSpaceList;
  }

  // clone_type - computed: false, optional: false, required: true
  private _cloneType?: string; 
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string) {
    this._cloneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneTypeInput() {
    return this._cloneType;
  }
}

export class OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference {
    return new OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseSourceConfiguration {
  /**
  * clone_to_refreshable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_to_refreshable OdbAutonomousDatabase#clone_to_refreshable}
  */
  readonly cloneToRefreshable?: OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] | cdktn.IResolvable;
  /**
  * cross_region_data_guard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cross_region_data_guard OdbAutonomousDatabase#cross_region_data_guard}
  */
  readonly crossRegionDataGuard?: OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] | cdktn.IResolvable;
  /**
  * cross_region_disaster_recovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cross_region_disaster_recovery OdbAutonomousDatabase#cross_region_disaster_recovery}
  */
  readonly crossRegionDisasterRecovery?: OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] | cdktn.IResolvable;
  /**
  * database_clone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#database_clone OdbAutonomousDatabase#database_clone}
  */
  readonly databaseClone?: OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] | cdktn.IResolvable;
  /**
  * point_in_time_restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#point_in_time_restore OdbAutonomousDatabase#point_in_time_restore}
  */
  readonly pointInTimeRestore?: OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] | cdktn.IResolvable;
  /**
  * restore_from_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#restore_from_backup OdbAutonomousDatabase#restore_from_backup}
  */
  readonly restoreFromBackup?: OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] | cdktn.IResolvable;
}

export function odbAutonomousDatabaseSourceConfigurationToTerraform(struct?: OdbAutonomousDatabaseSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    clone_to_refreshable: cdktn.listMapper(odbAutonomousDatabaseSourceConfigurationCloneToRefreshableToTerraform, true)(struct!.cloneToRefreshable),
    cross_region_data_guard: cdktn.listMapper(odbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardToTerraform, true)(struct!.crossRegionDataGuard),
    cross_region_disaster_recovery: cdktn.listMapper(odbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryToTerraform, true)(struct!.crossRegionDisasterRecovery),
    database_clone: cdktn.listMapper(odbAutonomousDatabaseSourceConfigurationDatabaseCloneToTerraform, true)(struct!.databaseClone),
    point_in_time_restore: cdktn.listMapper(odbAutonomousDatabaseSourceConfigurationPointInTimeRestoreToTerraform, true)(struct!.pointInTimeRestore),
    restore_from_backup: cdktn.listMapper(odbAutonomousDatabaseSourceConfigurationRestoreFromBackupToTerraform, true)(struct!.restoreFromBackup),
  }
}


export function odbAutonomousDatabaseSourceConfigurationToHclTerraform(struct?: OdbAutonomousDatabaseSourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    clone_to_refreshable: {
      value: cdktn.listMapperHcl(odbAutonomousDatabaseSourceConfigurationCloneToRefreshableToHclTerraform, true)(struct!.cloneToRefreshable),
      isBlock: true,
      type: "list",
      storageClassType: "OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList",
    },
    cross_region_data_guard: {
      value: cdktn.listMapperHcl(odbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardToHclTerraform, true)(struct!.crossRegionDataGuard),
      isBlock: true,
      type: "list",
      storageClassType: "OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList",
    },
    cross_region_disaster_recovery: {
      value: cdktn.listMapperHcl(odbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryToHclTerraform, true)(struct!.crossRegionDisasterRecovery),
      isBlock: true,
      type: "list",
      storageClassType: "OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList",
    },
    database_clone: {
      value: cdktn.listMapperHcl(odbAutonomousDatabaseSourceConfigurationDatabaseCloneToHclTerraform, true)(struct!.databaseClone),
      isBlock: true,
      type: "list",
      storageClassType: "OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList",
    },
    point_in_time_restore: {
      value: cdktn.listMapperHcl(odbAutonomousDatabaseSourceConfigurationPointInTimeRestoreToHclTerraform, true)(struct!.pointInTimeRestore),
      isBlock: true,
      type: "list",
      storageClassType: "OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList",
    },
    restore_from_backup: {
      value: cdktn.listMapperHcl(odbAutonomousDatabaseSourceConfigurationRestoreFromBackupToHclTerraform, true)(struct!.restoreFromBackup),
      isBlock: true,
      type: "list",
      storageClassType: "OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseSourceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseSourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloneToRefreshable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneToRefreshable = this._cloneToRefreshable?.internalValue;
    }
    if (this._crossRegionDataGuard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionDataGuard = this._crossRegionDataGuard?.internalValue;
    }
    if (this._crossRegionDisasterRecovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossRegionDisasterRecovery = this._crossRegionDisasterRecovery?.internalValue;
    }
    if (this._databaseClone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseClone = this._databaseClone?.internalValue;
    }
    if (this._pointInTimeRestore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRestore = this._pointInTimeRestore?.internalValue;
    }
    if (this._restoreFromBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreFromBackup = this._restoreFromBackup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseSourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloneToRefreshable.internalValue = undefined;
      this._crossRegionDataGuard.internalValue = undefined;
      this._crossRegionDisasterRecovery.internalValue = undefined;
      this._databaseClone.internalValue = undefined;
      this._pointInTimeRestore.internalValue = undefined;
      this._restoreFromBackup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloneToRefreshable.internalValue = value.cloneToRefreshable;
      this._crossRegionDataGuard.internalValue = value.crossRegionDataGuard;
      this._crossRegionDisasterRecovery.internalValue = value.crossRegionDisasterRecovery;
      this._databaseClone.internalValue = value.databaseClone;
      this._pointInTimeRestore.internalValue = value.pointInTimeRestore;
      this._restoreFromBackup.internalValue = value.restoreFromBackup;
    }
  }

  // clone_to_refreshable - computed: false, optional: true, required: false
  private _cloneToRefreshable = new OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList(this, "clone_to_refreshable", false);
  public get cloneToRefreshable() {
    return this._cloneToRefreshable;
  }
  public putCloneToRefreshable(value: OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] | cdktn.IResolvable) {
    this._cloneToRefreshable.internalValue = value;
  }
  public resetCloneToRefreshable() {
    this._cloneToRefreshable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneToRefreshableInput() {
    return this._cloneToRefreshable.internalValue;
  }

  // cross_region_data_guard - computed: false, optional: true, required: false
  private _crossRegionDataGuard = new OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList(this, "cross_region_data_guard", false);
  public get crossRegionDataGuard() {
    return this._crossRegionDataGuard;
  }
  public putCrossRegionDataGuard(value: OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] | cdktn.IResolvable) {
    this._crossRegionDataGuard.internalValue = value;
  }
  public resetCrossRegionDataGuard() {
    this._crossRegionDataGuard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionDataGuardInput() {
    return this._crossRegionDataGuard.internalValue;
  }

  // cross_region_disaster_recovery - computed: false, optional: true, required: false
  private _crossRegionDisasterRecovery = new OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList(this, "cross_region_disaster_recovery", false);
  public get crossRegionDisasterRecovery() {
    return this._crossRegionDisasterRecovery;
  }
  public putCrossRegionDisasterRecovery(value: OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] | cdktn.IResolvable) {
    this._crossRegionDisasterRecovery.internalValue = value;
  }
  public resetCrossRegionDisasterRecovery() {
    this._crossRegionDisasterRecovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionDisasterRecoveryInput() {
    return this._crossRegionDisasterRecovery.internalValue;
  }

  // database_clone - computed: false, optional: true, required: false
  private _databaseClone = new OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList(this, "database_clone", false);
  public get databaseClone() {
    return this._databaseClone;
  }
  public putDatabaseClone(value: OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] | cdktn.IResolvable) {
    this._databaseClone.internalValue = value;
  }
  public resetDatabaseClone() {
    this._databaseClone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseCloneInput() {
    return this._databaseClone.internalValue;
  }

  // point_in_time_restore - computed: false, optional: true, required: false
  private _pointInTimeRestore = new OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList(this, "point_in_time_restore", false);
  public get pointInTimeRestore() {
    return this._pointInTimeRestore;
  }
  public putPointInTimeRestore(value: OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] | cdktn.IResolvable) {
    this._pointInTimeRestore.internalValue = value;
  }
  public resetPointInTimeRestore() {
    this._pointInTimeRestore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRestoreInput() {
    return this._pointInTimeRestore.internalValue;
  }

  // restore_from_backup - computed: false, optional: true, required: false
  private _restoreFromBackup = new OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList(this, "restore_from_backup", false);
  public get restoreFromBackup() {
    return this._restoreFromBackup;
  }
  public putRestoreFromBackup(value: OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] | cdktn.IResolvable) {
    this._restoreFromBackup.internalValue = value;
  }
  public resetRestoreFromBackup() {
    this._restoreFromBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreFromBackupInput() {
    return this._restoreFromBackup.internalValue;
  }
}

export class OdbAutonomousDatabaseSourceConfigurationList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseSourceConfiguration[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseSourceConfigurationOutputReference {
    return new OdbAutonomousDatabaseSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbAutonomousDatabaseTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#create OdbAutonomousDatabase#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#delete OdbAutonomousDatabase#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#update OdbAutonomousDatabase#update}
  */
  readonly update?: string;
}

export function odbAutonomousDatabaseTimeoutsToTerraform(struct?: OdbAutonomousDatabaseTimeouts | cdktn.IResolvable): any {
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


export function odbAutonomousDatabaseTimeoutsToHclTerraform(struct?: OdbAutonomousDatabaseTimeouts | cdktn.IResolvable): any {
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

export class OdbAutonomousDatabaseTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbAutonomousDatabaseTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OdbAutonomousDatabaseTimeouts | cdktn.IResolvable | undefined) {
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
export interface OdbAutonomousDatabaseTransportableTablespace {
  /**
  * URL of the transportable tablespace bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tts_bundle_url OdbAutonomousDatabase#tts_bundle_url}
  */
  readonly ttsBundleUrl?: string;
}

export function odbAutonomousDatabaseTransportableTablespaceToTerraform(struct?: OdbAutonomousDatabaseTransportableTablespace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tts_bundle_url: cdktn.stringToTerraform(struct!.ttsBundleUrl),
  }
}


export function odbAutonomousDatabaseTransportableTablespaceToHclTerraform(struct?: OdbAutonomousDatabaseTransportableTablespace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tts_bundle_url: {
      value: cdktn.stringToHclTerraform(struct!.ttsBundleUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbAutonomousDatabaseTransportableTablespaceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbAutonomousDatabaseTransportableTablespace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttsBundleUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttsBundleUrl = this._ttsBundleUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbAutonomousDatabaseTransportableTablespace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ttsBundleUrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ttsBundleUrl = value.ttsBundleUrl;
    }
  }

  // tts_bundle_url - computed: false, optional: true, required: false
  private _ttsBundleUrl?: string; 
  public get ttsBundleUrl() {
    return this.getStringAttribute('tts_bundle_url');
  }
  public set ttsBundleUrl(value: string) {
    this._ttsBundleUrl = value;
  }
  public resetTtsBundleUrl() {
    this._ttsBundleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsBundleUrlInput() {
    return this._ttsBundleUrl;
  }
}

export class OdbAutonomousDatabaseTransportableTablespaceList extends cdktn.ComplexList {
  public internalValue? : OdbAutonomousDatabaseTransportableTablespace[] | cdktn.IResolvable

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
  public get(index: number): OdbAutonomousDatabaseTransportableTablespaceOutputReference {
    return new OdbAutonomousDatabaseTransportableTablespaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database aws_odb_autonomous_database}
*/
export class OdbAutonomousDatabase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_autonomous_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OdbAutonomousDatabase to import
  * @param importFromId The id of the existing OdbAutonomousDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OdbAutonomousDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_autonomous_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database aws_odb_autonomous_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OdbAutonomousDatabaseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OdbAutonomousDatabaseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_autonomous_database',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.69.0',
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
    this._adminPassword = config.adminPassword;
    this._adminPasswordWo = config.adminPasswordWo;
    this._adminPasswordWoVersion = config.adminPasswordWoVersion;
    this._allowlistedIps = config.allowlistedIps;
    this._autoRefreshFrequencyInSeconds = config.autoRefreshFrequencyInSeconds;
    this._autoRefreshPointLagInSeconds = config.autoRefreshPointLagInSeconds;
    this._autonomousMaintenanceScheduleType = config.autonomousMaintenanceScheduleType;
    this._backupRetentionPeriodInDays = config.backupRetentionPeriodInDays;
    this._byolComputeCountLimit = config.byolComputeCountLimit;
    this._characterSet = config.characterSet;
    this._computeCount = config.computeCount;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStorageSizeInGbs = config.dataStorageSizeInGbs;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._databaseEdition = config.databaseEdition;
    this._dbName = config.dbName;
    this._dbVersion = config.dbVersion;
    this._dbWorkload = config.dbWorkload;
    this._displayName = config.displayName;
    this._encryptionKeyProvider = config.encryptionKeyProvider;
    this._isAutoScalingEnabled = config.isAutoScalingEnabled;
    this._isAutoScalingForStorageEnabled = config.isAutoScalingForStorageEnabled;
    this._isBackupRetentionLocked = config.isBackupRetentionLocked;
    this._isLocalDataGuardEnabled = config.isLocalDataGuardEnabled;
    this._isMtlsConnectionRequired = config.isMtlsConnectionRequired;
    this._isRefreshableClone = config.isRefreshableClone;
    this._kmsKeyId = config.kmsKeyId;
    this._licenseModel = config.licenseModel;
    this._localAdgAutoFailoverMaxDataLossLimit = config.localAdgAutoFailoverMaxDataLossLimit;
    this._ncharacterSet = config.ncharacterSet;
    this._odbNetworkId = config.odbNetworkId;
    this._openMode = config.openMode;
    this._permissionLevel = config.permissionLevel;
    this._privateEndpointIp = config.privateEndpointIp;
    this._privateEndpointLabel = config.privateEndpointLabel;
    this._refreshableMode = config.refreshableMode;
    this._region = config.region;
    this._resourcePoolLeaderId = config.resourcePoolLeaderId;
    this._source = config.source;
    this._standbyAllowlistedIps = config.standbyAllowlistedIps;
    this._standbyAllowlistedIpsSource = config.standbyAllowlistedIpsSource;
    this._tags = config.tags;
    this._timeOfAutoRefreshStart = config.timeOfAutoRefreshStart;
    this._adminPasswordSource.internalValue = config.adminPasswordSource;
    this._customerContactsToSendToOci.internalValue = config.customerContactsToSendToOci;
    this._dbToolsDetails.internalValue = config.dbToolsDetails;
    this._longTermBackupSchedule.internalValue = config.longTermBackupSchedule;
    this._resourcePoolSummary.internalValue = config.resourcePoolSummary;
    this._scheduledOperations.internalValue = config.scheduledOperations;
    this._sourceConfiguration.internalValue = config.sourceConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._transportableTablespace.internalValue = config.transportableTablespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_used_data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get actualUsedDataStorageSizeInTbs() {
    return this.getNumberAttribute('actual_used_data_storage_size_in_tbs');
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_password_wo - computed: false, optional: true, required: false
  private _adminPasswordWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get adminPasswordWo() {
    return this.getStringAttribute('admin_password_wo');
  }
  public set adminPasswordWo(value: string) {
    this._adminPasswordWo = value;
  }
  public resetAdminPasswordWo() {
    this._adminPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordWoInput() {
    return this._adminPasswordWo;
  }

  // admin_password_wo_version - computed: false, optional: true, required: false
  private _adminPasswordWoVersion?: number; 
  public get adminPasswordWoVersion() {
    return this.getNumberAttribute('admin_password_wo_version');
  }
  public set adminPasswordWoVersion(value: number) {
    this._adminPasswordWoVersion = value;
  }
  public resetAdminPasswordWoVersion() {
    this._adminPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordWoVersionInput() {
    return this._adminPasswordWoVersion;
  }

  // allocated_storage_size_in_tbs - computed: true, optional: false, required: false
  public get allocatedStorageSizeInTbs() {
    return this.getNumberAttribute('allocated_storage_size_in_tbs');
  }

  // allowlisted_ips - computed: true, optional: true, required: false
  private _allowlistedIps?: string[]; 
  public get allowlistedIps() {
    return this.getListAttribute('allowlisted_ips');
  }
  public set allowlistedIps(value: string[]) {
    this._allowlistedIps = value;
  }
  public resetAllowlistedIps() {
    this._allowlistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistedIpsInput() {
    return this._allowlistedIps;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_refresh_frequency_in_seconds - computed: true, optional: true, required: false
  private _autoRefreshFrequencyInSeconds?: number; 
  public get autoRefreshFrequencyInSeconds() {
    return this.getNumberAttribute('auto_refresh_frequency_in_seconds');
  }
  public set autoRefreshFrequencyInSeconds(value: number) {
    this._autoRefreshFrequencyInSeconds = value;
  }
  public resetAutoRefreshFrequencyInSeconds() {
    this._autoRefreshFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshFrequencyInSecondsInput() {
    return this._autoRefreshFrequencyInSeconds;
  }

  // auto_refresh_point_lag_in_seconds - computed: true, optional: true, required: false
  private _autoRefreshPointLagInSeconds?: number; 
  public get autoRefreshPointLagInSeconds() {
    return this.getNumberAttribute('auto_refresh_point_lag_in_seconds');
  }
  public set autoRefreshPointLagInSeconds(value: number) {
    this._autoRefreshPointLagInSeconds = value;
  }
  public resetAutoRefreshPointLagInSeconds() {
    this._autoRefreshPointLagInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshPointLagInSecondsInput() {
    return this._autoRefreshPointLagInSeconds;
  }

  // autonomous_maintenance_schedule_type - computed: true, optional: true, required: false
  private _autonomousMaintenanceScheduleType?: string; 
  public get autonomousMaintenanceScheduleType() {
    return this.getStringAttribute('autonomous_maintenance_schedule_type');
  }
  public set autonomousMaintenanceScheduleType(value: string) {
    this._autonomousMaintenanceScheduleType = value;
  }
  public resetAutonomousMaintenanceScheduleType() {
    this._autonomousMaintenanceScheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousMaintenanceScheduleTypeInput() {
    return this._autonomousMaintenanceScheduleType;
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // available_upgrade_versions - computed: true, optional: false, required: false
  public get availableUpgradeVersions() {
    return this.getListAttribute('available_upgrade_versions');
  }

  // backup_retention_period_in_days - computed: true, optional: true, required: false
  private _backupRetentionPeriodInDays?: number; 
  public get backupRetentionPeriodInDays() {
    return this.getNumberAttribute('backup_retention_period_in_days');
  }
  public set backupRetentionPeriodInDays(value: number) {
    this._backupRetentionPeriodInDays = value;
  }
  public resetBackupRetentionPeriodInDays() {
    this._backupRetentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInDaysInput() {
    return this._backupRetentionPeriodInDays;
  }

  // byol_compute_count_limit - computed: true, optional: true, required: false
  private _byolComputeCountLimit?: number; 
  public get byolComputeCountLimit() {
    return this.getNumberAttribute('byol_compute_count_limit');
  }
  public set byolComputeCountLimit(value: number) {
    this._byolComputeCountLimit = value;
  }
  public resetByolComputeCountLimit() {
    this._byolComputeCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byolComputeCountLimitInput() {
    return this._byolComputeCountLimit;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // compute_count - computed: true, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  public resetCpuCoreCount() {
    this._cpuCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_storage_size_in_gbs - computed: true, optional: true, required: false
  private _dataStorageSizeInGbs?: number; 
  public get dataStorageSizeInGbs() {
    return this.getNumberAttribute('data_storage_size_in_gbs');
  }
  public set dataStorageSizeInGbs(value: number) {
    this._dataStorageSizeInGbs = value;
  }
  public resetDataStorageSizeInGbs() {
    this._dataStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInGbsInput() {
    return this._dataStorageSizeInGbs;
  }

  // data_storage_size_in_tbs - computed: true, optional: true, required: false
  private _dataStorageSizeInTbs?: number; 
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }
  public resetDataStorageSizeInTbs() {
    this._dataStorageSizeInTbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInTbsInput() {
    return this._dataStorageSizeInTbs;
  }

  // database_edition - computed: true, optional: true, required: false
  private _databaseEdition?: string; 
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }
  public set databaseEdition(value: string) {
    this._databaseEdition = value;
  }
  public resetDatabaseEdition() {
    this._databaseEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEditionInput() {
    return this._databaseEdition;
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // db_name - computed: true, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // db_workload - computed: true, optional: true, required: false
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  public resetDbWorkload() {
    this._dbWorkload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // encryption_key_provider - computed: true, optional: true, required: false
  private _encryptionKeyProvider?: string; 
  public get encryptionKeyProvider() {
    return this.getStringAttribute('encryption_key_provider');
  }
  public set encryptionKeyProvider(value: string) {
    this._encryptionKeyProvider = value;
  }
  public resetEncryptionKeyProvider() {
    this._encryptionKeyProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyProviderInput() {
    return this._encryptionKeyProvider;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_scaling_enabled - computed: true, optional: true, required: false
  private _isAutoScalingEnabled?: boolean | cdktn.IResolvable; 
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | cdktn.IResolvable) {
    this._isAutoScalingEnabled = value;
  }
  public resetIsAutoScalingEnabled() {
    this._isAutoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingEnabledInput() {
    return this._isAutoScalingEnabled;
  }

  // is_auto_scaling_for_storage_enabled - computed: true, optional: true, required: false
  private _isAutoScalingForStorageEnabled?: boolean | cdktn.IResolvable; 
  public get isAutoScalingForStorageEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_for_storage_enabled');
  }
  public set isAutoScalingForStorageEnabled(value: boolean | cdktn.IResolvable) {
    this._isAutoScalingForStorageEnabled = value;
  }
  public resetIsAutoScalingForStorageEnabled() {
    this._isAutoScalingForStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingForStorageEnabledInput() {
    return this._isAutoScalingForStorageEnabled;
  }

  // is_backup_retention_locked - computed: true, optional: true, required: false
  private _isBackupRetentionLocked?: boolean | cdktn.IResolvable; 
  public get isBackupRetentionLocked() {
    return this.getBooleanAttribute('is_backup_retention_locked');
  }
  public set isBackupRetentionLocked(value: boolean | cdktn.IResolvable) {
    this._isBackupRetentionLocked = value;
  }
  public resetIsBackupRetentionLocked() {
    this._isBackupRetentionLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupRetentionLockedInput() {
    return this._isBackupRetentionLocked;
  }

  // is_local_data_guard_enabled - computed: true, optional: true, required: false
  private _isLocalDataGuardEnabled?: boolean | cdktn.IResolvable; 
  public get isLocalDataGuardEnabled() {
    return this.getBooleanAttribute('is_local_data_guard_enabled');
  }
  public set isLocalDataGuardEnabled(value: boolean | cdktn.IResolvable) {
    this._isLocalDataGuardEnabled = value;
  }
  public resetIsLocalDataGuardEnabled() {
    this._isLocalDataGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLocalDataGuardEnabledInput() {
    return this._isLocalDataGuardEnabled;
  }

  // is_mtls_connection_required - computed: true, optional: true, required: false
  private _isMtlsConnectionRequired?: boolean | cdktn.IResolvable; 
  public get isMtlsConnectionRequired() {
    return this.getBooleanAttribute('is_mtls_connection_required');
  }
  public set isMtlsConnectionRequired(value: boolean | cdktn.IResolvable) {
    this._isMtlsConnectionRequired = value;
  }
  public resetIsMtlsConnectionRequired() {
    this._isMtlsConnectionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMtlsConnectionRequiredInput() {
    return this._isMtlsConnectionRequired;
  }

  // is_refreshable_clone - computed: true, optional: true, required: false
  private _isRefreshableClone?: boolean | cdktn.IResolvable; 
  public get isRefreshableClone() {
    return this.getBooleanAttribute('is_refreshable_clone');
  }
  public set isRefreshableClone(value: boolean | cdktn.IResolvable) {
    this._isRefreshableClone = value;
  }
  public resetIsRefreshableClone() {
    this._isRefreshableClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRefreshableCloneInput() {
    return this._isRefreshableClone;
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

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
  }

  // local_adg_auto_failover_max_data_loss_limit - computed: true, optional: true, required: false
  private _localAdgAutoFailoverMaxDataLossLimit?: number; 
  public get localAdgAutoFailoverMaxDataLossLimit() {
    return this.getNumberAttribute('local_adg_auto_failover_max_data_loss_limit');
  }
  public set localAdgAutoFailoverMaxDataLossLimit(value: number) {
    this._localAdgAutoFailoverMaxDataLossLimit = value;
  }
  public resetLocalAdgAutoFailoverMaxDataLossLimit() {
    this._localAdgAutoFailoverMaxDataLossLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAdgAutoFailoverMaxDataLossLimitInput() {
    return this._localAdgAutoFailoverMaxDataLossLimit;
  }

  // ncharacter_set - computed: true, optional: true, required: false
  private _ncharacterSet?: string; 
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }
  public set ncharacterSet(value: string) {
    this._ncharacterSet = value;
  }
  public resetNcharacterSet() {
    this._ncharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharacterSetInput() {
    return this._ncharacterSet;
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // odb_network_arn - computed: true, optional: false, required: false
  public get odbNetworkArn() {
    return this.getStringAttribute('odb_network_arn');
  }

  // odb_network_id - computed: true, optional: true, required: false
  private _odbNetworkId?: string; 
  public get odbNetworkId() {
    return this.getStringAttribute('odb_network_id');
  }
  public set odbNetworkId(value: string) {
    this._odbNetworkId = value;
  }
  public resetOdbNetworkId() {
    this._odbNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkIdInput() {
    return this._odbNetworkId;
  }

  // open_mode - computed: true, optional: true, required: false
  private _openMode?: string; 
  public get openMode() {
    return this.getStringAttribute('open_mode');
  }
  public set openMode(value: string) {
    this._openMode = value;
  }
  public resetOpenMode() {
    this._openMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openModeInput() {
    return this._openMode;
  }

  // percent_progress - computed: true, optional: false, required: false
  public get percentProgress() {
    return this.getNumberAttribute('percent_progress');
  }

  // permission_level - computed: true, optional: true, required: false
  private _permissionLevel?: string; 
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }
  public set permissionLevel(value: string) {
    this._permissionLevel = value;
  }
  public resetPermissionLevel() {
    this._permissionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionLevelInput() {
    return this._permissionLevel;
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_ip - computed: true, optional: true, required: false
  private _privateEndpointIp?: string; 
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }
  public set privateEndpointIp(value: string) {
    this._privateEndpointIp = value;
  }
  public resetPrivateEndpointIp() {
    this._privateEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIpInput() {
    return this._privateEndpointIp;
  }

  // private_endpoint_label - computed: true, optional: true, required: false
  private _privateEndpointLabel?: string; 
  public get privateEndpointLabel() {
    return this.getStringAttribute('private_endpoint_label');
  }
  public set privateEndpointLabel(value: string) {
    this._privateEndpointLabel = value;
  }
  public resetPrivateEndpointLabel() {
    this._privateEndpointLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointLabelInput() {
    return this._privateEndpointLabel;
  }

  // refreshable_mode - computed: true, optional: true, required: false
  private _refreshableMode?: string; 
  public get refreshableMode() {
    return this.getStringAttribute('refreshable_mode');
  }
  public set refreshableMode(value: string) {
    this._refreshableMode = value;
  }
  public resetRefreshableMode() {
    this._refreshableMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshableModeInput() {
    return this._refreshableMode;
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

  // resource_pool_leader_id - computed: true, optional: true, required: false
  private _resourcePoolLeaderId?: string; 
  public get resourcePoolLeaderId() {
    return this.getStringAttribute('resource_pool_leader_id');
  }
  public set resourcePoolLeaderId(value: string) {
    this._resourcePoolLeaderId = value;
  }
  public resetResourcePoolLeaderId() {
    this._resourcePoolLeaderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolLeaderIdInput() {
    return this._resourcePoolLeaderId;
  }

  // service_console_url - computed: true, optional: false, required: false
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // sql_web_developer_url - computed: true, optional: false, required: false
  public get sqlWebDeveloperUrl() {
    return this.getStringAttribute('sql_web_developer_url');
  }

  // standby_allowlisted_ips - computed: true, optional: true, required: false
  private _standbyAllowlistedIps?: string[]; 
  public get standbyAllowlistedIps() {
    return this.getListAttribute('standby_allowlisted_ips');
  }
  public set standbyAllowlistedIps(value: string[]) {
    this._standbyAllowlistedIps = value;
  }
  public resetStandbyAllowlistedIps() {
    this._standbyAllowlistedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyAllowlistedIpsInput() {
    return this._standbyAllowlistedIps;
  }

  // standby_allowlisted_ips_source - computed: true, optional: true, required: false
  private _standbyAllowlistedIpsSource?: string; 
  public get standbyAllowlistedIpsSource() {
    return this.getStringAttribute('standby_allowlisted_ips_source');
  }
  public set standbyAllowlistedIpsSource(value: string) {
    this._standbyAllowlistedIpsSource = value;
  }
  public resetStandbyAllowlistedIpsSource() {
    this._standbyAllowlistedIpsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyAllowlistedIpsSourceInput() {
    return this._standbyAllowlistedIpsSource;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
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

  // time_of_auto_refresh_start - computed: true, optional: true, required: false
  private _timeOfAutoRefreshStart?: string; 
  public get timeOfAutoRefreshStart() {
    return this.getStringAttribute('time_of_auto_refresh_start');
  }
  public set timeOfAutoRefreshStart(value: string) {
    this._timeOfAutoRefreshStart = value;
  }
  public resetTimeOfAutoRefreshStart() {
    this._timeOfAutoRefreshStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfAutoRefreshStartInput() {
    return this._timeOfAutoRefreshStart;
  }

  // admin_password_source - computed: false, optional: true, required: false
  private _adminPasswordSource = new OdbAutonomousDatabaseAdminPasswordSourceList(this, "admin_password_source", false);
  public get adminPasswordSource() {
    return this._adminPasswordSource;
  }
  public putAdminPasswordSource(value: OdbAutonomousDatabaseAdminPasswordSource[] | cdktn.IResolvable) {
    this._adminPasswordSource.internalValue = value;
  }
  public resetAdminPasswordSource() {
    this._adminPasswordSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordSourceInput() {
    return this._adminPasswordSource.internalValue;
  }

  // customer_contacts_to_send_to_oci - computed: false, optional: true, required: false
  private _customerContactsToSendToOci = new OdbAutonomousDatabaseCustomerContactsToSendToOciList(this, "customer_contacts_to_send_to_oci", false);
  public get customerContactsToSendToOci() {
    return this._customerContactsToSendToOci;
  }
  public putCustomerContactsToSendToOci(value: OdbAutonomousDatabaseCustomerContactsToSendToOci[] | cdktn.IResolvable) {
    this._customerContactsToSendToOci.internalValue = value;
  }
  public resetCustomerContactsToSendToOci() {
    this._customerContactsToSendToOci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsToSendToOciInput() {
    return this._customerContactsToSendToOci.internalValue;
  }

  // db_tools_details - computed: false, optional: true, required: false
  private _dbToolsDetails = new OdbAutonomousDatabaseDbToolsDetailsList(this, "db_tools_details", false);
  public get dbToolsDetails() {
    return this._dbToolsDetails;
  }
  public putDbToolsDetails(value: OdbAutonomousDatabaseDbToolsDetails[] | cdktn.IResolvable) {
    this._dbToolsDetails.internalValue = value;
  }
  public resetDbToolsDetails() {
    this._dbToolsDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbToolsDetailsInput() {
    return this._dbToolsDetails.internalValue;
  }

  // long_term_backup_schedule - computed: false, optional: true, required: false
  private _longTermBackupSchedule = new OdbAutonomousDatabaseLongTermBackupScheduleList(this, "long_term_backup_schedule", false);
  public get longTermBackupSchedule() {
    return this._longTermBackupSchedule;
  }
  public putLongTermBackupSchedule(value: OdbAutonomousDatabaseLongTermBackupSchedule[] | cdktn.IResolvable) {
    this._longTermBackupSchedule.internalValue = value;
  }
  public resetLongTermBackupSchedule() {
    this._longTermBackupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermBackupScheduleInput() {
    return this._longTermBackupSchedule.internalValue;
  }

  // resource_pool_summary - computed: false, optional: true, required: false
  private _resourcePoolSummary = new OdbAutonomousDatabaseResourcePoolSummaryList(this, "resource_pool_summary", false);
  public get resourcePoolSummary() {
    return this._resourcePoolSummary;
  }
  public putResourcePoolSummary(value: OdbAutonomousDatabaseResourcePoolSummary[] | cdktn.IResolvable) {
    this._resourcePoolSummary.internalValue = value;
  }
  public resetResourcePoolSummary() {
    this._resourcePoolSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolSummaryInput() {
    return this._resourcePoolSummary.internalValue;
  }

  // scheduled_operations - computed: false, optional: true, required: false
  private _scheduledOperations = new OdbAutonomousDatabaseScheduledOperationsList(this, "scheduled_operations", false);
  public get scheduledOperations() {
    return this._scheduledOperations;
  }
  public putScheduledOperations(value: OdbAutonomousDatabaseScheduledOperations[] | cdktn.IResolvable) {
    this._scheduledOperations.internalValue = value;
  }
  public resetScheduledOperations() {
    this._scheduledOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledOperationsInput() {
    return this._scheduledOperations.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new OdbAutonomousDatabaseSourceConfigurationList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: OdbAutonomousDatabaseSourceConfiguration[] | cdktn.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OdbAutonomousDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OdbAutonomousDatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transportable_tablespace - computed: false, optional: true, required: false
  private _transportableTablespace = new OdbAutonomousDatabaseTransportableTablespaceList(this, "transportable_tablespace", false);
  public get transportableTablespace() {
    return this._transportableTablespace;
  }
  public putTransportableTablespace(value: OdbAutonomousDatabaseTransportableTablespace[] | cdktn.IResolvable) {
    this._transportableTablespace.internalValue = value;
  }
  public resetTransportableTablespace() {
    this._transportableTablespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportableTablespaceInput() {
    return this._transportableTablespace.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktn.stringToTerraform(this._adminPassword),
      admin_password_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._adminPasswordWo)),
      admin_password_wo_version: cdktn.numberToTerraform(this._adminPasswordWoVersion),
      allowlisted_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowlistedIps),
      auto_refresh_frequency_in_seconds: cdktn.numberToTerraform(this._autoRefreshFrequencyInSeconds),
      auto_refresh_point_lag_in_seconds: cdktn.numberToTerraform(this._autoRefreshPointLagInSeconds),
      autonomous_maintenance_schedule_type: cdktn.stringToTerraform(this._autonomousMaintenanceScheduleType),
      backup_retention_period_in_days: cdktn.numberToTerraform(this._backupRetentionPeriodInDays),
      byol_compute_count_limit: cdktn.numberToTerraform(this._byolComputeCountLimit),
      character_set: cdktn.stringToTerraform(this._characterSet),
      compute_count: cdktn.numberToTerraform(this._computeCount),
      cpu_core_count: cdktn.numberToTerraform(this._cpuCoreCount),
      data_storage_size_in_gbs: cdktn.numberToTerraform(this._dataStorageSizeInGbs),
      data_storage_size_in_tbs: cdktn.numberToTerraform(this._dataStorageSizeInTbs),
      database_edition: cdktn.stringToTerraform(this._databaseEdition),
      db_name: cdktn.stringToTerraform(this._dbName),
      db_version: cdktn.stringToTerraform(this._dbVersion),
      db_workload: cdktn.stringToTerraform(this._dbWorkload),
      display_name: cdktn.stringToTerraform(this._displayName),
      encryption_key_provider: cdktn.stringToTerraform(this._encryptionKeyProvider),
      is_auto_scaling_enabled: cdktn.booleanToTerraform(this._isAutoScalingEnabled),
      is_auto_scaling_for_storage_enabled: cdktn.booleanToTerraform(this._isAutoScalingForStorageEnabled),
      is_backup_retention_locked: cdktn.booleanToTerraform(this._isBackupRetentionLocked),
      is_local_data_guard_enabled: cdktn.booleanToTerraform(this._isLocalDataGuardEnabled),
      is_mtls_connection_required: cdktn.booleanToTerraform(this._isMtlsConnectionRequired),
      is_refreshable_clone: cdktn.booleanToTerraform(this._isRefreshableClone),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      license_model: cdktn.stringToTerraform(this._licenseModel),
      local_adg_auto_failover_max_data_loss_limit: cdktn.numberToTerraform(this._localAdgAutoFailoverMaxDataLossLimit),
      ncharacter_set: cdktn.stringToTerraform(this._ncharacterSet),
      odb_network_id: cdktn.stringToTerraform(this._odbNetworkId),
      open_mode: cdktn.stringToTerraform(this._openMode),
      permission_level: cdktn.stringToTerraform(this._permissionLevel),
      private_endpoint_ip: cdktn.stringToTerraform(this._privateEndpointIp),
      private_endpoint_label: cdktn.stringToTerraform(this._privateEndpointLabel),
      refreshable_mode: cdktn.stringToTerraform(this._refreshableMode),
      region: cdktn.stringToTerraform(this._region),
      resource_pool_leader_id: cdktn.stringToTerraform(this._resourcePoolLeaderId),
      source: cdktn.stringToTerraform(this._source),
      standby_allowlisted_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(this._standbyAllowlistedIps),
      standby_allowlisted_ips_source: cdktn.stringToTerraform(this._standbyAllowlistedIpsSource),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      time_of_auto_refresh_start: cdktn.stringToTerraform(this._timeOfAutoRefreshStart),
      admin_password_source: cdktn.listMapper(odbAutonomousDatabaseAdminPasswordSourceToTerraform, true)(this._adminPasswordSource.internalValue),
      customer_contacts_to_send_to_oci: cdktn.listMapper(odbAutonomousDatabaseCustomerContactsToSendToOciToTerraform, true)(this._customerContactsToSendToOci.internalValue),
      db_tools_details: cdktn.listMapper(odbAutonomousDatabaseDbToolsDetailsToTerraform, true)(this._dbToolsDetails.internalValue),
      long_term_backup_schedule: cdktn.listMapper(odbAutonomousDatabaseLongTermBackupScheduleToTerraform, true)(this._longTermBackupSchedule.internalValue),
      resource_pool_summary: cdktn.listMapper(odbAutonomousDatabaseResourcePoolSummaryToTerraform, true)(this._resourcePoolSummary.internalValue),
      scheduled_operations: cdktn.listMapper(odbAutonomousDatabaseScheduledOperationsToTerraform, true)(this._scheduledOperations.internalValue),
      source_configuration: cdktn.listMapper(odbAutonomousDatabaseSourceConfigurationToTerraform, true)(this._sourceConfiguration.internalValue),
      timeouts: odbAutonomousDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
      transportable_tablespace: cdktn.listMapper(odbAutonomousDatabaseTransportableTablespaceToTerraform, true)(this._transportableTablespace.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktn.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._adminPasswordWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password_wo_version: {
        value: cdktn.numberToHclTerraform(this._adminPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowlisted_ips: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowlistedIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_refresh_frequency_in_seconds: {
        value: cdktn.numberToHclTerraform(this._autoRefreshFrequencyInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_refresh_point_lag_in_seconds: {
        value: cdktn.numberToHclTerraform(this._autoRefreshPointLagInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autonomous_maintenance_schedule_type: {
        value: cdktn.stringToHclTerraform(this._autonomousMaintenanceScheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_period_in_days: {
        value: cdktn.numberToHclTerraform(this._backupRetentionPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      byol_compute_count_limit: {
        value: cdktn.numberToHclTerraform(this._byolComputeCountLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      character_set: {
        value: cdktn.stringToHclTerraform(this._characterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_count: {
        value: cdktn.numberToHclTerraform(this._computeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_core_count: {
        value: cdktn.numberToHclTerraform(this._cpuCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_size_in_gbs: {
        value: cdktn.numberToHclTerraform(this._dataStorageSizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_size_in_tbs: {
        value: cdktn.numberToHclTerraform(this._dataStorageSizeInTbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_edition: {
        value: cdktn.stringToHclTerraform(this._databaseEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktn.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktn.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_workload: {
        value: cdktn.stringToHclTerraform(this._dbWorkload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key_provider: {
        value: cdktn.stringToHclTerraform(this._encryptionKeyProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_scaling_enabled: {
        value: cdktn.booleanToHclTerraform(this._isAutoScalingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_scaling_for_storage_enabled: {
        value: cdktn.booleanToHclTerraform(this._isAutoScalingForStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_backup_retention_locked: {
        value: cdktn.booleanToHclTerraform(this._isBackupRetentionLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_local_data_guard_enabled: {
        value: cdktn.booleanToHclTerraform(this._isLocalDataGuardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mtls_connection_required: {
        value: cdktn.booleanToHclTerraform(this._isMtlsConnectionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_refreshable_clone: {
        value: cdktn.booleanToHclTerraform(this._isRefreshableClone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_model: {
        value: cdktn.stringToHclTerraform(this._licenseModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_adg_auto_failover_max_data_loss_limit: {
        value: cdktn.numberToHclTerraform(this._localAdgAutoFailoverMaxDataLossLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ncharacter_set: {
        value: cdktn.stringToHclTerraform(this._ncharacterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_network_id: {
        value: cdktn.stringToHclTerraform(this._odbNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_mode: {
        value: cdktn.stringToHclTerraform(this._openMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_level: {
        value: cdktn.stringToHclTerraform(this._permissionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_endpoint_ip: {
        value: cdktn.stringToHclTerraform(this._privateEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_endpoint_label: {
        value: cdktn.stringToHclTerraform(this._privateEndpointLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refreshable_mode: {
        value: cdktn.stringToHclTerraform(this._refreshableMode),
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
      resource_pool_leader_id: {
        value: cdktn.stringToHclTerraform(this._resourcePoolLeaderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_allowlisted_ips: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._standbyAllowlistedIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      standby_allowlisted_ips_source: {
        value: cdktn.stringToHclTerraform(this._standbyAllowlistedIpsSource),
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
      time_of_auto_refresh_start: {
        value: cdktn.stringToHclTerraform(this._timeOfAutoRefreshStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password_source: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseAdminPasswordSourceToHclTerraform, true)(this._adminPasswordSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseAdminPasswordSourceList",
      },
      customer_contacts_to_send_to_oci: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseCustomerContactsToSendToOciToHclTerraform, true)(this._customerContactsToSendToOci.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseCustomerContactsToSendToOciList",
      },
      db_tools_details: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseDbToolsDetailsToHclTerraform, true)(this._dbToolsDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseDbToolsDetailsList",
      },
      long_term_backup_schedule: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseLongTermBackupScheduleToHclTerraform, true)(this._longTermBackupSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseLongTermBackupScheduleList",
      },
      resource_pool_summary: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseResourcePoolSummaryToHclTerraform, true)(this._resourcePoolSummary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseResourcePoolSummaryList",
      },
      scheduled_operations: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseScheduledOperationsToHclTerraform, true)(this._scheduledOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseScheduledOperationsList",
      },
      source_configuration: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseSourceConfigurationToHclTerraform, true)(this._sourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseSourceConfigurationList",
      },
      timeouts: {
        value: odbAutonomousDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OdbAutonomousDatabaseTimeouts",
      },
      transportable_tablespace: {
        value: cdktn.listMapperHcl(odbAutonomousDatabaseTransportableTablespaceToHclTerraform, true)(this._transportableTablespace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OdbAutonomousDatabaseTransportableTablespaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
