/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3FilesSynchronizationConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * File system ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Latest version number for optimistic locking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}
  */
  readonly latestVersionNumber?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}
  */
  readonly region?: string;
  /**
  * expiration_data_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}
  */
  readonly expirationDataRule?: S3FilesSynchronizationConfigurationExpirationDataRule[] | cdktn.IResolvable;
  /**
  * import_data_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}
  */
  readonly importDataRule?: S3FilesSynchronizationConfigurationImportDataRule[] | cdktn.IResolvable;
}
export interface S3FilesSynchronizationConfigurationExpirationDataRule {
  /**
  * Days after last access before data expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#days_after_last_access S3FilesSynchronizationConfiguration#days_after_last_access}
  */
  readonly daysAfterLastAccess: number;
}

export function s3FilesSynchronizationConfigurationExpirationDataRuleToTerraform(struct?: S3FilesSynchronizationConfigurationExpirationDataRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_after_last_access: cdktn.numberToTerraform(struct!.daysAfterLastAccess),
  }
}


export function s3FilesSynchronizationConfigurationExpirationDataRuleToHclTerraform(struct?: S3FilesSynchronizationConfigurationExpirationDataRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days_after_last_access: {
      value: cdktn.numberToHclTerraform(struct!.daysAfterLastAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3FilesSynchronizationConfigurationExpirationDataRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysAfterLastAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysAfterLastAccess = this._daysAfterLastAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesSynchronizationConfigurationExpirationDataRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysAfterLastAccess = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysAfterLastAccess = value.daysAfterLastAccess;
    }
  }

  // days_after_last_access - computed: false, optional: false, required: true
  private _daysAfterLastAccess?: number; 
  public get daysAfterLastAccess() {
    return this.getNumberAttribute('days_after_last_access');
  }
  public set daysAfterLastAccess(value: number) {
    this._daysAfterLastAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysAfterLastAccessInput() {
    return this._daysAfterLastAccess;
  }
}

export class S3FilesSynchronizationConfigurationExpirationDataRuleList extends cdktn.ComplexList {
  public internalValue? : S3FilesSynchronizationConfigurationExpirationDataRule[] | cdktn.IResolvable

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
  public get(index: number): S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference {
    return new S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3FilesSynchronizationConfigurationImportDataRule {
  /**
  * S3 prefix for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#prefix S3FilesSynchronizationConfiguration#prefix}
  */
  readonly prefix: string;
  /**
  * Maximum file size to import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#size_less_than S3FilesSynchronizationConfiguration#size_less_than}
  */
  readonly sizeLessThan: number;
  /**
  * Import trigger type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#trigger S3FilesSynchronizationConfiguration#trigger}
  */
  readonly trigger: string;
}

export function s3FilesSynchronizationConfigurationImportDataRuleToTerraform(struct?: S3FilesSynchronizationConfigurationImportDataRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    prefix: cdktn.stringToTerraform(struct!.prefix),
    size_less_than: cdktn.numberToTerraform(struct!.sizeLessThan),
    trigger: cdktn.stringToTerraform(struct!.trigger),
  }
}


export function s3FilesSynchronizationConfigurationImportDataRuleToHclTerraform(struct?: S3FilesSynchronizationConfigurationImportDataRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_less_than: {
      value: cdktn.numberToHclTerraform(struct!.sizeLessThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger: {
      value: cdktn.stringToHclTerraform(struct!.trigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3FilesSynchronizationConfigurationImportDataRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3FilesSynchronizationConfigurationImportDataRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._sizeLessThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLessThan = this._sizeLessThan;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3FilesSynchronizationConfigurationImportDataRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._sizeLessThan = undefined;
      this._trigger = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._sizeLessThan = value.sizeLessThan;
      this._trigger = value.trigger;
    }
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // size_less_than - computed: false, optional: false, required: true
  private _sizeLessThan?: number; 
  public get sizeLessThan() {
    return this.getNumberAttribute('size_less_than');
  }
  public set sizeLessThan(value: number) {
    this._sizeLessThan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLessThanInput() {
    return this._sizeLessThan;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }
}

export class S3FilesSynchronizationConfigurationImportDataRuleList extends cdktn.ComplexList {
  public internalValue? : S3FilesSynchronizationConfigurationImportDataRule[] | cdktn.IResolvable

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
  public get(index: number): S3FilesSynchronizationConfigurationImportDataRuleOutputReference {
    return new S3FilesSynchronizationConfigurationImportDataRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration aws_s3files_synchronization_configuration}
*/
export class S3FilesSynchronizationConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3files_synchronization_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3FilesSynchronizationConfiguration to import
  * @param importFromId The id of the existing S3FilesSynchronizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3FilesSynchronizationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3files_synchronization_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/s3files_synchronization_configuration aws_s3files_synchronization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3FilesSynchronizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3FilesSynchronizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3files_synchronization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.51.0',
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
    this._fileSystemId = config.fileSystemId;
    this._latestVersionNumber = config.latestVersionNumber;
    this._region = config.region;
    this._expirationDataRule.internalValue = config.expirationDataRule;
    this._importDataRule.internalValue = config.importDataRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // latest_version_number - computed: true, optional: true, required: false
  private _latestVersionNumber?: number; 
  public get latestVersionNumber() {
    return this.getNumberAttribute('latest_version_number');
  }
  public set latestVersionNumber(value: number) {
    this._latestVersionNumber = value;
  }
  public resetLatestVersionNumber() {
    this._latestVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestVersionNumberInput() {
    return this._latestVersionNumber;
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

  // expiration_data_rule - computed: false, optional: true, required: false
  private _expirationDataRule = new S3FilesSynchronizationConfigurationExpirationDataRuleList(this, "expiration_data_rule", true);
  public get expirationDataRule() {
    return this._expirationDataRule;
  }
  public putExpirationDataRule(value: S3FilesSynchronizationConfigurationExpirationDataRule[] | cdktn.IResolvable) {
    this._expirationDataRule.internalValue = value;
  }
  public resetExpirationDataRule() {
    this._expirationDataRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDataRuleInput() {
    return this._expirationDataRule.internalValue;
  }

  // import_data_rule - computed: false, optional: true, required: false
  private _importDataRule = new S3FilesSynchronizationConfigurationImportDataRuleList(this, "import_data_rule", true);
  public get importDataRule() {
    return this._importDataRule;
  }
  public putImportDataRule(value: S3FilesSynchronizationConfigurationImportDataRule[] | cdktn.IResolvable) {
    this._importDataRule.internalValue = value;
  }
  public resetImportDataRule() {
    this._importDataRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importDataRuleInput() {
    return this._importDataRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktn.stringToTerraform(this._fileSystemId),
      latest_version_number: cdktn.numberToTerraform(this._latestVersionNumber),
      region: cdktn.stringToTerraform(this._region),
      expiration_data_rule: cdktn.listMapper(s3FilesSynchronizationConfigurationExpirationDataRuleToTerraform, true)(this._expirationDataRule.internalValue),
      import_data_rule: cdktn.listMapper(s3FilesSynchronizationConfigurationImportDataRuleToTerraform, true)(this._importDataRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_system_id: {
        value: cdktn.stringToHclTerraform(this._fileSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest_version_number: {
        value: cdktn.numberToHclTerraform(this._latestVersionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_data_rule: {
        value: cdktn.listMapperHcl(s3FilesSynchronizationConfigurationExpirationDataRuleToHclTerraform, true)(this._expirationDataRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3FilesSynchronizationConfigurationExpirationDataRuleList",
      },
      import_data_rule: {
        value: cdktn.listMapperHcl(s3FilesSynchronizationConfigurationImportDataRuleToHclTerraform, true)(this._importDataRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "S3FilesSynchronizationConfigurationImportDataRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
