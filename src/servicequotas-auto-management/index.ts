/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ServicequotasAutoManagementConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management#exclusion_list ServicequotasAutoManagement#exclusion_list}
  */
  readonly exclusionList?: { [key: string]: string[] } | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management#notification_arn ServicequotasAutoManagement#notification_arn}
  */
  readonly notificationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management#opt_in_level ServicequotasAutoManagement#opt_in_level}
  */
  readonly optInLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management#opt_in_type ServicequotasAutoManagement#opt_in_type}
  */
  readonly optInType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management#region ServicequotasAutoManagement#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management aws_servicequotas_auto_management}
*/
export class ServicequotasAutoManagement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicequotas_auto_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ServicequotasAutoManagement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicequotasAutoManagement to import
  * @param importFromId The id of the existing ServicequotasAutoManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicequotasAutoManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_servicequotas_auto_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/servicequotas_auto_management aws_servicequotas_auto_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicequotasAutoManagementConfig
  */
  public constructor(scope: Construct, id: string, config: ServicequotasAutoManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicequotas_auto_management',
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
    this._exclusionList = config.exclusionList;
    this._notificationArn = config.notificationArn;
    this._optInLevel = config.optInLevel;
    this._optInType = config.optInType;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclusion_list - computed: false, optional: true, required: false
  private _exclusionList?: { [key: string]: string[] } | cdktn.IResolvable; 
  public get exclusionList() {
    return this.interpolationForAttribute('exclusion_list');
  }
  public set exclusionList(value: { [key: string]: string[] } | cdktn.IResolvable) {
    this._exclusionList = value;
  }
  public resetExclusionList() {
    this._exclusionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionListInput() {
    return this._exclusionList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_arn - computed: false, optional: true, required: false
  private _notificationArn?: string; 
  public get notificationArn() {
    return this.getStringAttribute('notification_arn');
  }
  public set notificationArn(value: string) {
    this._notificationArn = value;
  }
  public resetNotificationArn() {
    this._notificationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnInput() {
    return this._notificationArn;
  }

  // opt_in_level - computed: false, optional: false, required: true
  private _optInLevel?: string; 
  public get optInLevel() {
    return this.getStringAttribute('opt_in_level');
  }
  public set optInLevel(value: string) {
    this._optInLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInLevelInput() {
    return this._optInLevel;
  }

  // opt_in_type - computed: false, optional: false, required: true
  private _optInType?: string; 
  public get optInType() {
    return this.getStringAttribute('opt_in_type');
  }
  public set optInType(value: string) {
    this._optInType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optInTypeInput() {
    return this._optInType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclusion_list: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(this._exclusionList),
      notification_arn: cdktn.stringToTerraform(this._notificationArn),
      opt_in_level: cdktn.stringToTerraform(this._optInLevel),
      opt_in_type: cdktn.stringToTerraform(this._optInType),
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclusion_list: {
        value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(this._exclusionList),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      notification_arn: {
        value: cdktn.stringToHclTerraform(this._notificationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_in_level: {
        value: cdktn.stringToHclTerraform(this._optInLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_in_type: {
        value: cdktn.stringToHclTerraform(this._optInType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
