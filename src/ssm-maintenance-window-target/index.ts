/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmMaintenanceWindowTargetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}
  */
  readonly ownerInformation?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#region SsmMaintenanceWindowTarget#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}
  */
  readonly windowId: string;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#targets SsmMaintenanceWindowTarget#targets}
  */
  readonly targets: SsmMaintenanceWindowTargetTargets[] | cdktn.IResolvable;
}
export interface SsmMaintenanceWindowTargetTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#key SsmMaintenanceWindowTarget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#values SsmMaintenanceWindowTarget#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTargetTargetsToTerraform(struct?: SsmMaintenanceWindowTargetTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function ssmMaintenanceWindowTargetTargetsToHclTerraform(struct?: SsmMaintenanceWindowTargetTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmMaintenanceWindowTargetTargetsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmMaintenanceWindowTargetTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTargetTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmMaintenanceWindowTargetTargetsList extends cdktn.ComplexList {
  public internalValue? : SsmMaintenanceWindowTargetTargets[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsmMaintenanceWindowTargetTargetsOutputReference {
    return new SsmMaintenanceWindowTargetTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target aws_ssm_maintenance_window_target}
*/
export class SsmMaintenanceWindowTarget extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_maintenance_window_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmMaintenanceWindowTarget resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmMaintenanceWindowTarget to import
  * @param importFromId The id of the existing SsmMaintenanceWindowTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmMaintenanceWindowTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssm_maintenance_window_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.43.0/docs/resources/ssm_maintenance_window_target aws_ssm_maintenance_window_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmMaintenanceWindowTargetConfig
  */
  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window_target',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.43.0',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._ownerInformation = config.ownerInformation;
    this._region = config.region;
    this._resourceType = config.resourceType;
    this._windowId = config.windowId;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: true, required: false
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

  // owner_information - computed: false, optional: true, required: false
  private _ownerInformation?: string; 
  public get ownerInformation() {
    return this.getStringAttribute('owner_information');
  }
  public set ownerInformation(value: string) {
    this._ownerInformation = value;
  }
  public resetOwnerInformation() {
    this._ownerInformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInformationInput() {
    return this._ownerInformation;
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId?: string; 
  public get windowId() {
    return this.getStringAttribute('window_id');
  }
  public set windowId(value: string) {
    this._windowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowIdInput() {
    return this._windowId;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new SsmMaintenanceWindowTargetTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmMaintenanceWindowTargetTargets[] | cdktn.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      owner_information: cdktn.stringToTerraform(this._ownerInformation),
      region: cdktn.stringToTerraform(this._region),
      resource_type: cdktn.stringToTerraform(this._resourceType),
      window_id: cdktn.stringToTerraform(this._windowId),
      targets: cdktn.listMapper(ssmMaintenanceWindowTargetTargetsToTerraform, true)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      owner_information: {
        value: cdktn.stringToHclTerraform(this._ownerInformation),
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
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window_id: {
        value: cdktn.stringToHclTerraform(this._windowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktn.listMapperHcl(ssmMaintenanceWindowTargetTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmMaintenanceWindowTargetTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
