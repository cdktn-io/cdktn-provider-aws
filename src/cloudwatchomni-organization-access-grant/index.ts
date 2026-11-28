/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchomniOrganizationAccessGrantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}
  */
  readonly permission: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#region CloudwatchomniOrganizationAccessGrant#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal CloudwatchomniOrganizationAccessGrant#principal}
  */
  readonly principal?: CloudwatchomniOrganizationAccessGrantPrincipal[] | cdktn.IResolvable;
}
export interface CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#key CloudwatchomniOrganizationAccessGrant#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#value CloudwatchomniOrganizationAccessGrant#value}
  */
  readonly value: string;
}

export function cloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeToTerraform(struct?: CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeToHclTerraform(struct?: CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference {
    return new CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniOrganizationAccessGrantPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_id CloudwatchomniOrganizationAccessGrant#principal_id}
  */
  readonly principalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_type CloudwatchomniOrganizationAccessGrant#principal_type}
  */
  readonly principalType: string;
  /**
  * principal_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_attribute CloudwatchomniOrganizationAccessGrant#principal_attribute}
  */
  readonly principalAttribute?: CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] | cdktn.IResolvable;
}

export function cloudwatchomniOrganizationAccessGrantPrincipalToTerraform(struct?: CloudwatchomniOrganizationAccessGrantPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principal_id: cdktn.stringToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
    principal_attribute: cdktn.listMapper(cloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeToTerraform, true)(struct!.principalAttribute),
  }
}


export function cloudwatchomniOrganizationAccessGrantPrincipalToHclTerraform(struct?: CloudwatchomniOrganizationAccessGrantPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    principal_id: {
      value: cdktn.stringToHclTerraform(struct!.principalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktn.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_attribute: {
      value: cdktn.listMapperHcl(cloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeToHclTerraform, true)(struct!.principalAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniOrganizationAccessGrantPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniOrganizationAccessGrantPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalId = this._principalId;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    if (this._principalAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalAttribute = this._principalAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniOrganizationAccessGrantPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalId = undefined;
      this._principalType = undefined;
      this._principalAttribute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalId = value.principalId;
      this._principalType = value.principalType;
      this._principalAttribute.internalValue = value.principalAttribute;
    }
  }

  // principal_id - computed: false, optional: true, required: false
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  public resetPrincipalId() {
    this._principalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // principal_attribute - computed: false, optional: true, required: false
  private _principalAttribute = new CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList(this, "principal_attribute", false);
  public get principalAttribute() {
    return this._principalAttribute;
  }
  public putPrincipalAttribute(value: CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[] | cdktn.IResolvable) {
    this._principalAttribute.internalValue = value;
  }
  public resetPrincipalAttribute() {
    this._principalAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAttributeInput() {
    return this._principalAttribute.internalValue;
  }
}

export class CloudwatchomniOrganizationAccessGrantPrincipalList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniOrganizationAccessGrantPrincipal[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniOrganizationAccessGrantPrincipalOutputReference {
    return new CloudwatchomniOrganizationAccessGrantPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant aws_cloudwatchomni_organization_access_grant}
*/
export class CloudwatchomniOrganizationAccessGrant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatchomni_organization_access_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchomniOrganizationAccessGrant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchomniOrganizationAccessGrant to import
  * @param importFromId The id of the existing CloudwatchomniOrganizationAccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchomniOrganizationAccessGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatchomni_organization_access_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant aws_cloudwatchomni_organization_access_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchomniOrganizationAccessGrantConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchomniOrganizationAccessGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatchomni_organization_access_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.74.0',
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
    this._domainId = config.domainId;
    this._name = config.name;
    this._permission = config.permission;
    this._region = config.region;
    this._tags = config.tags;
    this._principal.internalValue = config.principal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // grant_id - computed: true, optional: false, required: false
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
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

  // principal - computed: false, optional: true, required: false
  private _principal = new CloudwatchomniOrganizationAccessGrantPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: CloudwatchomniOrganizationAccessGrantPrincipal[] | cdktn.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktn.stringToTerraform(this._domainId),
      name: cdktn.stringToTerraform(this._name),
      permission: cdktn.stringToTerraform(this._permission),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      principal: cdktn.listMapper(cloudwatchomniOrganizationAccessGrantPrincipalToTerraform, true)(this._principal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktn.stringToHclTerraform(this._domainId),
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
      permission: {
        value: cdktn.stringToHclTerraform(this._permission),
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
      principal: {
        value: cdktn.listMapperHcl(cloudwatchomniOrganizationAccessGrantPrincipalToHclTerraform, true)(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchomniOrganizationAccessGrantPrincipalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
