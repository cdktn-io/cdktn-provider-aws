/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkmailOrganizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#delete_directory WorkmailOrganization#delete_directory}
  */
  readonly deleteDirectory?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#delete_identity_center_application WorkmailOrganization#delete_identity_center_application}
  */
  readonly deleteIdentityCenterApplication?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#directory_id WorkmailOrganization#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#interoperability_enabled WorkmailOrganization#interoperability_enabled}
  */
  readonly interoperabilityEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#kms_key_arn WorkmailOrganization#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#organization_alias WorkmailOrganization#organization_alias}
  */
  readonly organizationAlias: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#region WorkmailOrganization#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#tags WorkmailOrganization#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#timeouts WorkmailOrganization#timeouts}
  */
  readonly timeouts?: WorkmailOrganizationTimeouts;
}
export interface WorkmailOrganizationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#create WorkmailOrganization#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#delete WorkmailOrganization#delete}
  */
  readonly delete?: string;
}

export function workmailOrganizationTimeoutsToTerraform(struct?: WorkmailOrganizationTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function workmailOrganizationTimeoutsToHclTerraform(struct?: WorkmailOrganizationTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkmailOrganizationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkmailOrganizationTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkmailOrganizationTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization aws_workmail_organization}
*/
export class WorkmailOrganization extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workmail_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkmailOrganization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkmailOrganization to import
  * @param importFromId The id of the existing WorkmailOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkmailOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_workmail_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/workmail_organization aws_workmail_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkmailOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: WorkmailOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workmail_organization',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.57.1',
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
    this._deleteDirectory = config.deleteDirectory;
    this._deleteIdentityCenterApplication = config.deleteIdentityCenterApplication;
    this._directoryId = config.directoryId;
    this._interoperabilityEnabled = config.interoperabilityEnabled;
    this._kmsKeyArn = config.kmsKeyArn;
    this._organizationAlias = config.organizationAlias;
    this._region = config.region;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // completed_date - computed: true, optional: false, required: false
  public get completedDate() {
    return this.getStringAttribute('completed_date');
  }

  // default_mail_domain - computed: true, optional: false, required: false
  public get defaultMailDomain() {
    return this.getStringAttribute('default_mail_domain');
  }

  // delete_directory - computed: false, optional: true, required: false
  private _deleteDirectory?: boolean | cdktn.IResolvable; 
  public get deleteDirectory() {
    return this.getBooleanAttribute('delete_directory');
  }
  public set deleteDirectory(value: boolean | cdktn.IResolvable) {
    this._deleteDirectory = value;
  }
  public resetDeleteDirectory() {
    this._deleteDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDirectoryInput() {
    return this._deleteDirectory;
  }

  // delete_identity_center_application - computed: false, optional: true, required: false
  private _deleteIdentityCenterApplication?: boolean | cdktn.IResolvable; 
  public get deleteIdentityCenterApplication() {
    return this.getBooleanAttribute('delete_identity_center_application');
  }
  public set deleteIdentityCenterApplication(value: boolean | cdktn.IResolvable) {
    this._deleteIdentityCenterApplication = value;
  }
  public resetDeleteIdentityCenterApplication() {
    this._deleteIdentityCenterApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteIdentityCenterApplicationInput() {
    return this._deleteIdentityCenterApplication;
  }

  // directory_id - computed: true, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // directory_type - computed: true, optional: false, required: false
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }

  // interoperability_enabled - computed: true, optional: true, required: false
  private _interoperabilityEnabled?: boolean | cdktn.IResolvable; 
  public get interoperabilityEnabled() {
    return this.getBooleanAttribute('interoperability_enabled');
  }
  public set interoperabilityEnabled(value: boolean | cdktn.IResolvable) {
    this._interoperabilityEnabled = value;
  }
  public resetInteroperabilityEnabled() {
    this._interoperabilityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interoperabilityEnabledInput() {
    return this._interoperabilityEnabled;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // migration_admin - computed: true, optional: false, required: false
  public get migrationAdmin() {
    return this.getStringAttribute('migration_admin');
  }

  // organization_alias - computed: false, optional: false, required: true
  private _organizationAlias?: string; 
  public get organizationAlias() {
    return this.getStringAttribute('organization_alias');
  }
  public set organizationAlias(value: string) {
    this._organizationAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAliasInput() {
    return this._organizationAlias;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkmailOrganizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkmailOrganizationTimeouts) {
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
      delete_directory: cdktn.booleanToTerraform(this._deleteDirectory),
      delete_identity_center_application: cdktn.booleanToTerraform(this._deleteIdentityCenterApplication),
      directory_id: cdktn.stringToTerraform(this._directoryId),
      interoperability_enabled: cdktn.booleanToTerraform(this._interoperabilityEnabled),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      organization_alias: cdktn.stringToTerraform(this._organizationAlias),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: workmailOrganizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_directory: {
        value: cdktn.booleanToHclTerraform(this._deleteDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_identity_center_application: {
        value: cdktn.booleanToHclTerraform(this._deleteIdentityCenterApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory_id: {
        value: cdktn.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interoperability_enabled: {
        value: cdktn.booleanToHclTerraform(this._interoperabilityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_alias: {
        value: cdktn.stringToHclTerraform(this._organizationAlias),
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
      timeouts: {
        value: workmailOrganizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkmailOrganizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
