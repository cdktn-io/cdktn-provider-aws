/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudwatchomniAccessGrantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#domain_id CloudwatchomniAccessGrant#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#name CloudwatchomniAccessGrant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#permission CloudwatchomniAccessGrant#permission}
  */
  readonly permission: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#region CloudwatchomniAccessGrant#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#space_id CloudwatchomniAccessGrant#space_id}
  */
  readonly spaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal CloudwatchomniAccessGrant#principal}
  */
  readonly principal?: CloudwatchomniAccessGrantPrincipal[] | cdktn.IResolvable;
  /**
  * scoped_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#scoped_action CloudwatchomniAccessGrant#scoped_action}
  */
  readonly scopedAction?: CloudwatchomniAccessGrantScopedAction[] | cdktn.IResolvable;
}
export interface CloudwatchomniAccessGrantPrincipalPrincipalAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#key CloudwatchomniAccessGrant#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#value CloudwatchomniAccessGrant#value}
  */
  readonly value: string;
}

export function cloudwatchomniAccessGrantPrincipalPrincipalAttributeToTerraform(struct?: CloudwatchomniAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function cloudwatchomniAccessGrantPrincipalPrincipalAttributeToHclTerraform(struct?: CloudwatchomniAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable): any {
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

export class CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchomniAccessGrantPrincipalPrincipalAttribute | cdktn.IResolvable | undefined) {
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

export class CloudwatchomniAccessGrantPrincipalPrincipalAttributeList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAccessGrantPrincipalPrincipalAttribute[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference {
    return new CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAccessGrantPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_id CloudwatchomniAccessGrant#principal_id}
  */
  readonly principalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_type CloudwatchomniAccessGrant#principal_type}
  */
  readonly principalType: string;
  /**
  * principal_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_attribute CloudwatchomniAccessGrant#principal_attribute}
  */
  readonly principalAttribute?: CloudwatchomniAccessGrantPrincipalPrincipalAttribute[] | cdktn.IResolvable;
}

export function cloudwatchomniAccessGrantPrincipalToTerraform(struct?: CloudwatchomniAccessGrantPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principal_id: cdktn.stringToTerraform(struct!.principalId),
    principal_type: cdktn.stringToTerraform(struct!.principalType),
    principal_attribute: cdktn.listMapper(cloudwatchomniAccessGrantPrincipalPrincipalAttributeToTerraform, true)(struct!.principalAttribute),
  }
}


export function cloudwatchomniAccessGrantPrincipalToHclTerraform(struct?: CloudwatchomniAccessGrantPrincipal | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(cloudwatchomniAccessGrantPrincipalPrincipalAttributeToHclTerraform, true)(struct!.principalAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAccessGrantPrincipalPrincipalAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAccessGrantPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAccessGrantPrincipal | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CloudwatchomniAccessGrantPrincipal | cdktn.IResolvable | undefined) {
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
  private _principalAttribute = new CloudwatchomniAccessGrantPrincipalPrincipalAttributeList(this, "principal_attribute", false);
  public get principalAttribute() {
    return this._principalAttribute;
  }
  public putPrincipalAttribute(value: CloudwatchomniAccessGrantPrincipalPrincipalAttribute[] | cdktn.IResolvable) {
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

export class CloudwatchomniAccessGrantPrincipalList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAccessGrantPrincipal[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAccessGrantPrincipalOutputReference {
    return new CloudwatchomniAccessGrantPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#field CloudwatchomniAccessGrant#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#operator CloudwatchomniAccessGrant#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#values CloudwatchomniAccessGrant#values}
  */
  readonly values: string[];
}

export function cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeToTerraform(struct?: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeToHclTerraform(struct?: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference {
    return new CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup {
  /**
  * row_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#row_scope CloudwatchomniAccessGrant#row_scope}
  */
  readonly rowScope?: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope[] | cdktn.IResolvable;
}

export function cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupToTerraform(struct?: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    row_scope: cdktn.listMapper(cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeToTerraform, true)(struct!.rowScope),
  }
}


export function cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupToHclTerraform(struct?: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    row_scope: {
      value: cdktn.listMapperHcl(cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeToHclTerraform, true)(struct!.rowScope),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rowScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowScope = this._rowScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rowScope.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rowScope.internalValue = value.rowScope;
    }
  }

  // row_scope - computed: false, optional: true, required: false
  private _rowScope = new CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList(this, "row_scope", false);
  public get rowScope() {
    return this._rowScope;
  }
  public putRowScope(value: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope[] | cdktn.IResolvable) {
    this._rowScope.internalValue = value;
  }
  public resetRowScope() {
    this._rowScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowScopeInput() {
    return this._rowScope.internalValue;
  }
}

export class CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference {
    return new CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAccessGrantScopedActionResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_arns CloudwatchomniAccessGrant#resource_arns}
  */
  readonly resourceArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_type CloudwatchomniAccessGrant#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#signal_types CloudwatchomniAccessGrant#signal_types}
  */
  readonly signalTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * row_scope_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#row_scope_group CloudwatchomniAccessGrant#row_scope_group}
  */
  readonly rowScopeGroup?: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup[] | cdktn.IResolvable;
}

export function cloudwatchomniAccessGrantScopedActionResourceToTerraform(struct?: CloudwatchomniAccessGrantScopedActionResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceArns),
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    signal_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.signalTypes),
    tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.tags),
    row_scope_group: cdktn.listMapper(cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupToTerraform, true)(struct!.rowScopeGroup),
  }
}


export function cloudwatchomniAccessGrantScopedActionResourceToHclTerraform(struct?: CloudwatchomniAccessGrantScopedActionResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_arns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signal_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.signalTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    row_scope_group: {
      value: cdktn.listMapperHcl(cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupToHclTerraform, true)(struct!.rowScopeGroup),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAccessGrantScopedActionResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAccessGrantScopedActionResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArns = this._resourceArns;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._signalTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalTypes = this._signalTypes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._rowScopeGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowScopeGroup = this._rowScopeGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAccessGrantScopedActionResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceArns = undefined;
      this._resourceType = undefined;
      this._signalTypes = undefined;
      this._tags = undefined;
      this._rowScopeGroup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceArns = value.resourceArns;
      this._resourceType = value.resourceType;
      this._signalTypes = value.signalTypes;
      this._tags = value.tags;
      this._rowScopeGroup.internalValue = value.rowScopeGroup;
    }
  }

  // resource_arns - computed: false, optional: true, required: false
  private _resourceArns?: string[]; 
  public get resourceArns() {
    return this.getListAttribute('resource_arns');
  }
  public set resourceArns(value: string[]) {
    this._resourceArns = value;
  }
  public resetResourceArns() {
    this._resourceArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnsInput() {
    return this._resourceArns;
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

  // signal_types - computed: false, optional: true, required: false
  private _signalTypes?: string[]; 
  public get signalTypes() {
    return this.getListAttribute('signal_types');
  }
  public set signalTypes(value: string[]) {
    this._signalTypes = value;
  }
  public resetSignalTypes() {
    this._signalTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalTypesInput() {
    return this._signalTypes;
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

  // row_scope_group - computed: false, optional: true, required: false
  private _rowScopeGroup = new CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList(this, "row_scope_group", false);
  public get rowScopeGroup() {
    return this._rowScopeGroup;
  }
  public putRowScopeGroup(value: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup[] | cdktn.IResolvable) {
    this._rowScopeGroup.internalValue = value;
  }
  public resetRowScopeGroup() {
    this._rowScopeGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowScopeGroupInput() {
    return this._rowScopeGroup.internalValue;
  }
}

export class CloudwatchomniAccessGrantScopedActionResourceList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAccessGrantScopedActionResource[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAccessGrantScopedActionResourceOutputReference {
    return new CloudwatchomniAccessGrantScopedActionResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchomniAccessGrantScopedAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#actions CloudwatchomniAccessGrant#actions}
  */
  readonly actions: string[];
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource CloudwatchomniAccessGrant#resource}
  */
  readonly resource?: CloudwatchomniAccessGrantScopedActionResource[] | cdktn.IResolvable;
}

export function cloudwatchomniAccessGrantScopedActionToTerraform(struct?: CloudwatchomniAccessGrantScopedAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
    resource: cdktn.listMapper(cloudwatchomniAccessGrantScopedActionResourceToTerraform, true)(struct!.resource),
  }
}


export function cloudwatchomniAccessGrantScopedActionToHclTerraform(struct?: CloudwatchomniAccessGrantScopedAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource: {
      value: cdktn.listMapperHcl(cloudwatchomniAccessGrantScopedActionResourceToHclTerraform, true)(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "CloudwatchomniAccessGrantScopedActionResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudwatchomniAccessGrantScopedActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CloudwatchomniAccessGrantScopedAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchomniAccessGrantScopedAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._resource.internalValue = value.resource;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new CloudwatchomniAccessGrantScopedActionResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }
  public putResource(value: CloudwatchomniAccessGrantScopedActionResource[] | cdktn.IResolvable) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }
}

export class CloudwatchomniAccessGrantScopedActionList extends cdktn.ComplexList {
  public internalValue? : CloudwatchomniAccessGrantScopedAction[] | cdktn.IResolvable

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
  public get(index: number): CloudwatchomniAccessGrantScopedActionOutputReference {
    return new CloudwatchomniAccessGrantScopedActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant aws_cloudwatchomni_access_grant}
*/
export class CloudwatchomniAccessGrant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatchomni_access_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudwatchomniAccessGrant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchomniAccessGrant to import
  * @param importFromId The id of the existing CloudwatchomniAccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchomniAccessGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatchomni_access_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant aws_cloudwatchomni_access_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchomniAccessGrantConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchomniAccessGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatchomni_access_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.71.0',
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
    this._spaceId = config.spaceId;
    this._tags = config.tags;
    this._principal.internalValue = config.principal;
    this._scopedAction.internalValue = config.scopedAction;
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

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
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
  private _principal = new CloudwatchomniAccessGrantPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: CloudwatchomniAccessGrantPrincipal[] | cdktn.IResolvable) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // scoped_action - computed: false, optional: true, required: false
  private _scopedAction = new CloudwatchomniAccessGrantScopedActionList(this, "scoped_action", false);
  public get scopedAction() {
    return this._scopedAction;
  }
  public putScopedAction(value: CloudwatchomniAccessGrantScopedAction[] | cdktn.IResolvable) {
    this._scopedAction.internalValue = value;
  }
  public resetScopedAction() {
    this._scopedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedActionInput() {
    return this._scopedAction.internalValue;
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
      space_id: cdktn.stringToTerraform(this._spaceId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      principal: cdktn.listMapper(cloudwatchomniAccessGrantPrincipalToTerraform, true)(this._principal.internalValue),
      scoped_action: cdktn.listMapper(cloudwatchomniAccessGrantScopedActionToTerraform, true)(this._scopedAction.internalValue),
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
      space_id: {
        value: cdktn.stringToHclTerraform(this._spaceId),
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
        value: cdktn.listMapperHcl(cloudwatchomniAccessGrantPrincipalToHclTerraform, true)(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchomniAccessGrantPrincipalList",
      },
      scoped_action: {
        value: cdktn.listMapperHcl(cloudwatchomniAccessGrantScopedActionToHclTerraform, true)(this._scopedAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudwatchomniAccessGrantScopedActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
