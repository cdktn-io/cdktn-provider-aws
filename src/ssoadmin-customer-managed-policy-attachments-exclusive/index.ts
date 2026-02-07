/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#instance_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#permission_set_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#permission_set_arn}
  */
  readonly permissionSetArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#region SsoadminCustomerManagedPolicyAttachmentsExclusive#region}
  */
  readonly region?: string;
  /**
  * customer_managed_policy_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachmentsExclusive#customer_managed_policy_reference}
  */
  readonly customerManagedPolicyReference?: SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#timeouts SsoadminCustomerManagedPolicyAttachmentsExclusive#timeouts}
  */
  readonly timeouts?: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts;
}
export interface SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#name SsoadminCustomerManagedPolicyAttachmentsExclusive#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#path SsoadminCustomerManagedPolicyAttachmentsExclusive#path}
  */
  readonly path?: string;
}

export function ssoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceToTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function ssoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceToHclTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
    }
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList extends cdktf.ComplexList {
  public internalValue? : SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference {
    return new SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#create SsoadminCustomerManagedPolicyAttachmentsExclusive#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#update SsoadminCustomerManagedPolicyAttachmentsExclusive#update}
  */
  readonly update?: string;
}

export function ssoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsToTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ssoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsToHclTerraform(struct?: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive aws_ssoadmin_customer_managed_policy_attachments_exclusive}
*/
export class SsoadminCustomerManagedPolicyAttachmentsExclusive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_customer_managed_policy_attachments_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoadminCustomerManagedPolicyAttachmentsExclusive to import
  * @param importFromId The id of the existing SsoadminCustomerManagedPolicyAttachmentsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoadminCustomerManagedPolicyAttachmentsExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_customer_managed_policy_attachments_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive aws_ssoadmin_customer_managed_policy_attachments_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_customer_managed_policy_attachments_exclusive',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._instanceArn = config.instanceArn;
    this._permissionSetArn = config.permissionSetArn;
    this._region = config.region;
    this._customerManagedPolicyReference.internalValue = config.customerManagedPolicyReference;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn?: string; 
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetArnInput() {
    return this._permissionSetArn;
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

  // customer_managed_policy_reference - computed: false, optional: true, required: false
  private _customerManagedPolicyReference = new SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList(this, "customer_managed_policy_reference", false);
  public get customerManagedPolicyReference() {
    return this._customerManagedPolicyReference;
  }
  public putCustomerManagedPolicyReference(value: SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference[] | cdktf.IResolvable) {
    this._customerManagedPolicyReference.internalValue = value;
  }
  public resetCustomerManagedPolicyReference() {
    this._customerManagedPolicyReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedPolicyReferenceInput() {
    return this._customerManagedPolicyReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts) {
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
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
      region: cdktf.stringToTerraform(this._region),
      customer_managed_policy_reference: cdktf.listMapper(ssoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceToTerraform, true)(this._customerManagedPolicyReference.internalValue),
      timeouts: ssoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_arn: {
        value: cdktf.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_set_arn: {
        value: cdktf.stringToHclTerraform(this._permissionSetArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_policy_reference: {
        value: cdktf.listMapperHcl(ssoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceToHclTerraform, true)(this._customerManagedPolicyReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList",
      },
      timeouts: {
        value: ssoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
