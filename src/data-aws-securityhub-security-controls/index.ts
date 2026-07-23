/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/securityhub_security_controls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsSecurityhubSecurityControlsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/securityhub_security_controls#region DataAwsSecurityhubSecurityControls#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}
  */
  readonly standardsArn?: string;
}
export interface DataAwsSecurityhubSecurityControlsSecurityControlDefinitions {
}

export function dataAwsSecurityhubSecurityControlsSecurityControlDefinitionsToTerraform(struct?: DataAwsSecurityhubSecurityControlsSecurityControlDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsSecurityhubSecurityControlsSecurityControlDefinitionsToHclTerraform(struct?: DataAwsSecurityhubSecurityControlsSecurityControlDefinitions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsSecurityhubSecurityControlsSecurityControlDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSecurityhubSecurityControlsSecurityControlDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_region_availability - computed: true, optional: false, required: false
  public get currentRegionAvailability() {
    return this.getStringAttribute('current_region_availability');
  }

  // customizable_properties - computed: true, optional: false, required: false
  public get customizableProperties() {
    return this.getListAttribute('customizable_properties');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // remediation_url - computed: true, optional: false, required: false
  public get remediationUrl() {
    return this.getStringAttribute('remediation_url');
  }

  // security_control_id - computed: true, optional: false, required: false
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
  }

  // severity_rating - computed: true, optional: false, required: false
  public get severityRating() {
    return this.getStringAttribute('severity_rating');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference {
    return new DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/securityhub_security_controls aws_securityhub_security_controls}
*/
export class DataAwsSecurityhubSecurityControls extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_security_controls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsSecurityhubSecurityControls resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSecurityhubSecurityControls to import
  * @param importFromId The id of the existing DataAwsSecurityhubSecurityControls that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/securityhub_security_controls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSecurityhubSecurityControls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_security_controls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/securityhub_security_controls aws_securityhub_security_controls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecurityhubSecurityControlsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecurityhubSecurityControlsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_security_controls',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.56.0',
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
    this._region = config.region;
    this._standardsArn = config.standardsArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // security_control_definitions - computed: true, optional: false, required: false
  private _securityControlDefinitions = new DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList(this, "security_control_definitions", false);
  public get securityControlDefinitions() {
    return this._securityControlDefinitions;
  }

  // standards_arn - computed: false, optional: true, required: false
  private _standardsArn?: string; 
  public get standardsArn() {
    return this.getStringAttribute('standards_arn');
  }
  public set standardsArn(value: string) {
    this._standardsArn = value;
  }
  public resetStandardsArn() {
    this._standardsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsArnInput() {
    return this._standardsArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      standards_arn: cdktn.stringToTerraform(this._standardsArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standards_arn: {
        value: cdktn.stringToHclTerraform(this._standardsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
