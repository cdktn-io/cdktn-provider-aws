/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatazonePolicyGrantConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}
  */
  readonly domainIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}
  */
  readonly entityIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}
  */
  readonly entityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}
  */
  readonly policyType: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#region DatazonePolicyGrant#region}
  */
  readonly region?: string;
  /**
  * detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}
  */
  readonly detail?: DatazonePolicyGrantDetail[] | cdktn.IResolvable;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}
  */
  readonly principal?: DatazonePolicyGrantPrincipal[] | cdktn.IResolvable;
}
export interface DatazonePolicyGrantDetailAddToProjectMemberPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailAddToProjectMemberPoolToTerraform(struct?: DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailAddToProjectMemberPoolToHclTerraform(struct?: DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailAddToProjectMemberPool | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailAddToProjectMemberPoolList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailAddToProjectMemberPool[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference {
    return new DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateAssetType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateAssetTypeToTerraform(struct?: DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateAssetTypeToHclTerraform(struct?: DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateAssetTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateAssetType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailCreateAssetTypeList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateAssetType[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateAssetTypeOutputReference {
    return new DatazonePolicyGrantDetailCreateAssetTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateDomainUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateDomainUnitToTerraform(struct?: DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateDomainUnitToHclTerraform(struct?: DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateDomainUnitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateDomainUnit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailCreateDomainUnitList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateDomainUnit[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateDomainUnitOutputReference {
    return new DatazonePolicyGrantDetailCreateDomainUnitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateEnvironment {
}

export function datazonePolicyGrantDetailCreateEnvironmentToTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datazonePolicyGrantDetailCreateEnvironmentToHclTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazonePolicyGrantDetailCreateEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateEnvironment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateEnvironment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DatazonePolicyGrantDetailCreateEnvironmentList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateEnvironment[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateEnvironmentOutputReference {
    return new DatazonePolicyGrantDetailCreateEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint {
}

export function datazonePolicyGrantDetailCreateEnvironmentFromBlueprintToTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datazonePolicyGrantDetailCreateEnvironmentFromBlueprintToHclTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference {
    return new DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateEnvironmentProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}
  */
  readonly domainUnitId?: string;
}

export function datazonePolicyGrantDetailCreateEnvironmentProfileToTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit_id: cdktn.stringToTerraform(struct!.domainUnitId),
  }
}


export function datazonePolicyGrantDetailCreateEnvironmentProfileToHclTerraform(struct?: DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit_id: {
      value: cdktn.stringToHclTerraform(struct!.domainUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitId = this._domainUnitId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateEnvironmentProfile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnitId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnitId = value.domainUnitId;
    }
  }

  // domain_unit_id - computed: false, optional: true, required: false
  private _domainUnitId?: string; 
  public get domainUnitId() {
    return this.getStringAttribute('domain_unit_id');
  }
  public set domainUnitId(value: string) {
    this._domainUnitId = value;
  }
  public resetDomainUnitId() {
    this._domainUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitIdInput() {
    return this._domainUnitId;
  }
}

export class DatazonePolicyGrantDetailCreateEnvironmentProfileList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateEnvironmentProfile[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference {
    return new DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateFormType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateFormTypeToTerraform(struct?: DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateFormTypeToHclTerraform(struct?: DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateFormTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateFormType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailCreateFormTypeList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateFormType[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateFormTypeOutputReference {
    return new DatazonePolicyGrantDetailCreateFormTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateGlossary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateGlossaryToTerraform(struct?: DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateGlossaryToHclTerraform(struct?: DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateGlossaryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateGlossary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailCreateGlossaryList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateGlossary[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateGlossaryOutputReference {
    return new DatazonePolicyGrantDetailCreateGlossaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateProject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailCreateProjectToTerraform(struct?: DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailCreateProjectToHclTerraform(struct?: DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateProjectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateProject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailCreateProjectList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateProject[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateProjectOutputReference {
    return new DatazonePolicyGrantDetailCreateProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailCreateProjectFromProjectProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}
  */
  readonly projectProfiles?: string[];
}

export function datazonePolicyGrantDetailCreateProjectFromProjectProfileToTerraform(struct?: DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
    project_profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectProfiles),
  }
}


export function datazonePolicyGrantDetailCreateProjectFromProjectProfileToHclTerraform(struct?: DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_profiles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    if (this._projectProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectProfiles = this._projectProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailCreateProjectFromProjectProfile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
      this._projectProfiles = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
      this._projectProfiles = value.projectProfiles;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }

  // project_profiles - computed: false, optional: true, required: false
  private _projectProfiles?: string[]; 
  public get projectProfiles() {
    return this.getListAttribute('project_profiles');
  }
  public set projectProfiles(value: string[]) {
    this._projectProfiles = value;
  }
  public resetProjectProfiles() {
    this._projectProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectProfilesInput() {
    return this._projectProfiles;
  }
}

export class DatazonePolicyGrantDetailCreateProjectFromProjectProfileList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference {
    return new DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile {
}

export function datazonePolicyGrantDetailDelegateCreateEnvironmentProfileToTerraform(struct?: DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datazonePolicyGrantDetailDelegateCreateEnvironmentProfileToHclTerraform(struct?: DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference {
    return new DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailOverrideDomainUnitOwners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailOverrideDomainUnitOwnersToTerraform(struct?: DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailOverrideDomainUnitOwnersToHclTerraform(struct?: DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailOverrideDomainUnitOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailOverrideDomainUnitOwnersList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailOverrideDomainUnitOwners[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference {
    return new DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailOverrideProjectOwners {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailOverrideProjectOwnersToTerraform(struct?: DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantDetailOverrideProjectOwnersToHclTerraform(struct?: DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailOverrideProjectOwners | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantDetailOverrideProjectOwnersList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailOverrideProjectOwners[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference {
    return new DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetailUseAssetType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}
  */
  readonly domainUnitId?: string;
}

export function datazonePolicyGrantDetailUseAssetTypeToTerraform(struct?: DatazonePolicyGrantDetailUseAssetType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit_id: cdktn.stringToTerraform(struct!.domainUnitId),
  }
}


export function datazonePolicyGrantDetailUseAssetTypeToHclTerraform(struct?: DatazonePolicyGrantDetailUseAssetType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit_id: {
      value: cdktn.stringToHclTerraform(struct!.domainUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailUseAssetTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetailUseAssetType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitId = this._domainUnitId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetailUseAssetType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnitId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnitId = value.domainUnitId;
    }
  }

  // domain_unit_id - computed: false, optional: true, required: false
  private _domainUnitId?: string; 
  public get domainUnitId() {
    return this.getStringAttribute('domain_unit_id');
  }
  public set domainUnitId(value: string) {
    this._domainUnitId = value;
  }
  public resetDomainUnitId() {
    this._domainUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitIdInput() {
    return this._domainUnitId;
  }
}

export class DatazonePolicyGrantDetailUseAssetTypeList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetailUseAssetType[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailUseAssetTypeOutputReference {
    return new DatazonePolicyGrantDetailUseAssetTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantDetail {
  /**
  * add_to_project_member_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}
  */
  readonly addToProjectMemberPool?: DatazonePolicyGrantDetailAddToProjectMemberPool[] | cdktn.IResolvable;
  /**
  * create_asset_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}
  */
  readonly createAssetType?: DatazonePolicyGrantDetailCreateAssetType[] | cdktn.IResolvable;
  /**
  * create_domain_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}
  */
  readonly createDomainUnit?: DatazonePolicyGrantDetailCreateDomainUnit[] | cdktn.IResolvable;
  /**
  * create_environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}
  */
  readonly createEnvironment?: DatazonePolicyGrantDetailCreateEnvironment[] | cdktn.IResolvable;
  /**
  * create_environment_from_blueprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}
  */
  readonly createEnvironmentFromBlueprint?: DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] | cdktn.IResolvable;
  /**
  * create_environment_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}
  */
  readonly createEnvironmentProfile?: DatazonePolicyGrantDetailCreateEnvironmentProfile[] | cdktn.IResolvable;
  /**
  * create_form_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}
  */
  readonly createFormType?: DatazonePolicyGrantDetailCreateFormType[] | cdktn.IResolvable;
  /**
  * create_glossary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}
  */
  readonly createGlossary?: DatazonePolicyGrantDetailCreateGlossary[] | cdktn.IResolvable;
  /**
  * create_project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}
  */
  readonly createProject?: DatazonePolicyGrantDetailCreateProject[] | cdktn.IResolvable;
  /**
  * create_project_from_project_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}
  */
  readonly createProjectFromProjectProfile?: DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] | cdktn.IResolvable;
  /**
  * delegate_create_environment_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}
  */
  readonly delegateCreateEnvironmentProfile?: DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] | cdktn.IResolvable;
  /**
  * override_domain_unit_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}
  */
  readonly overrideDomainUnitOwners?: DatazonePolicyGrantDetailOverrideDomainUnitOwners[] | cdktn.IResolvable;
  /**
  * override_project_owners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}
  */
  readonly overrideProjectOwners?: DatazonePolicyGrantDetailOverrideProjectOwners[] | cdktn.IResolvable;
  /**
  * use_asset_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#use_asset_type DatazonePolicyGrant#use_asset_type}
  */
  readonly useAssetType?: DatazonePolicyGrantDetailUseAssetType[] | cdktn.IResolvable;
}

export function datazonePolicyGrantDetailToTerraform(struct?: DatazonePolicyGrantDetail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    add_to_project_member_pool: cdktn.listMapper(datazonePolicyGrantDetailAddToProjectMemberPoolToTerraform, true)(struct!.addToProjectMemberPool),
    create_asset_type: cdktn.listMapper(datazonePolicyGrantDetailCreateAssetTypeToTerraform, true)(struct!.createAssetType),
    create_domain_unit: cdktn.listMapper(datazonePolicyGrantDetailCreateDomainUnitToTerraform, true)(struct!.createDomainUnit),
    create_environment: cdktn.listMapper(datazonePolicyGrantDetailCreateEnvironmentToTerraform, true)(struct!.createEnvironment),
    create_environment_from_blueprint: cdktn.listMapper(datazonePolicyGrantDetailCreateEnvironmentFromBlueprintToTerraform, true)(struct!.createEnvironmentFromBlueprint),
    create_environment_profile: cdktn.listMapper(datazonePolicyGrantDetailCreateEnvironmentProfileToTerraform, true)(struct!.createEnvironmentProfile),
    create_form_type: cdktn.listMapper(datazonePolicyGrantDetailCreateFormTypeToTerraform, true)(struct!.createFormType),
    create_glossary: cdktn.listMapper(datazonePolicyGrantDetailCreateGlossaryToTerraform, true)(struct!.createGlossary),
    create_project: cdktn.listMapper(datazonePolicyGrantDetailCreateProjectToTerraform, true)(struct!.createProject),
    create_project_from_project_profile: cdktn.listMapper(datazonePolicyGrantDetailCreateProjectFromProjectProfileToTerraform, true)(struct!.createProjectFromProjectProfile),
    delegate_create_environment_profile: cdktn.listMapper(datazonePolicyGrantDetailDelegateCreateEnvironmentProfileToTerraform, true)(struct!.delegateCreateEnvironmentProfile),
    override_domain_unit_owners: cdktn.listMapper(datazonePolicyGrantDetailOverrideDomainUnitOwnersToTerraform, true)(struct!.overrideDomainUnitOwners),
    override_project_owners: cdktn.listMapper(datazonePolicyGrantDetailOverrideProjectOwnersToTerraform, true)(struct!.overrideProjectOwners),
    use_asset_type: cdktn.listMapper(datazonePolicyGrantDetailUseAssetTypeToTerraform, true)(struct!.useAssetType),
  }
}


export function datazonePolicyGrantDetailToHclTerraform(struct?: DatazonePolicyGrantDetail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    add_to_project_member_pool: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailAddToProjectMemberPoolToHclTerraform, true)(struct!.addToProjectMemberPool),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailAddToProjectMemberPoolList",
    },
    create_asset_type: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateAssetTypeToHclTerraform, true)(struct!.createAssetType),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateAssetTypeList",
    },
    create_domain_unit: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateDomainUnitToHclTerraform, true)(struct!.createDomainUnit),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateDomainUnitList",
    },
    create_environment: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateEnvironmentToHclTerraform, true)(struct!.createEnvironment),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateEnvironmentList",
    },
    create_environment_from_blueprint: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateEnvironmentFromBlueprintToHclTerraform, true)(struct!.createEnvironmentFromBlueprint),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList",
    },
    create_environment_profile: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateEnvironmentProfileToHclTerraform, true)(struct!.createEnvironmentProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateEnvironmentProfileList",
    },
    create_form_type: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateFormTypeToHclTerraform, true)(struct!.createFormType),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateFormTypeList",
    },
    create_glossary: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateGlossaryToHclTerraform, true)(struct!.createGlossary),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateGlossaryList",
    },
    create_project: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateProjectToHclTerraform, true)(struct!.createProject),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateProjectList",
    },
    create_project_from_project_profile: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailCreateProjectFromProjectProfileToHclTerraform, true)(struct!.createProjectFromProjectProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailCreateProjectFromProjectProfileList",
    },
    delegate_create_environment_profile: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailDelegateCreateEnvironmentProfileToHclTerraform, true)(struct!.delegateCreateEnvironmentProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList",
    },
    override_domain_unit_owners: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailOverrideDomainUnitOwnersToHclTerraform, true)(struct!.overrideDomainUnitOwners),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailOverrideDomainUnitOwnersList",
    },
    override_project_owners: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailOverrideProjectOwnersToHclTerraform, true)(struct!.overrideProjectOwners),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailOverrideProjectOwnersList",
    },
    use_asset_type: {
      value: cdktn.listMapperHcl(datazonePolicyGrantDetailUseAssetTypeToHclTerraform, true)(struct!.useAssetType),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantDetailUseAssetTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantDetailOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantDetail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToProjectMemberPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToProjectMemberPool = this._addToProjectMemberPool?.internalValue;
    }
    if (this._createAssetType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createAssetType = this._createAssetType?.internalValue;
    }
    if (this._createDomainUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDomainUnit = this._createDomainUnit?.internalValue;
    }
    if (this._createEnvironment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createEnvironment = this._createEnvironment?.internalValue;
    }
    if (this._createEnvironmentFromBlueprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createEnvironmentFromBlueprint = this._createEnvironmentFromBlueprint?.internalValue;
    }
    if (this._createEnvironmentProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createEnvironmentProfile = this._createEnvironmentProfile?.internalValue;
    }
    if (this._createFormType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createFormType = this._createFormType?.internalValue;
    }
    if (this._createGlossary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createGlossary = this._createGlossary?.internalValue;
    }
    if (this._createProject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createProject = this._createProject?.internalValue;
    }
    if (this._createProjectFromProjectProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createProjectFromProjectProfile = this._createProjectFromProjectProfile?.internalValue;
    }
    if (this._delegateCreateEnvironmentProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateCreateEnvironmentProfile = this._delegateCreateEnvironmentProfile?.internalValue;
    }
    if (this._overrideDomainUnitOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideDomainUnitOwners = this._overrideDomainUnitOwners?.internalValue;
    }
    if (this._overrideProjectOwners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProjectOwners = this._overrideProjectOwners?.internalValue;
    }
    if (this._useAssetType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAssetType = this._useAssetType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantDetail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addToProjectMemberPool.internalValue = undefined;
      this._createAssetType.internalValue = undefined;
      this._createDomainUnit.internalValue = undefined;
      this._createEnvironment.internalValue = undefined;
      this._createEnvironmentFromBlueprint.internalValue = undefined;
      this._createEnvironmentProfile.internalValue = undefined;
      this._createFormType.internalValue = undefined;
      this._createGlossary.internalValue = undefined;
      this._createProject.internalValue = undefined;
      this._createProjectFromProjectProfile.internalValue = undefined;
      this._delegateCreateEnvironmentProfile.internalValue = undefined;
      this._overrideDomainUnitOwners.internalValue = undefined;
      this._overrideProjectOwners.internalValue = undefined;
      this._useAssetType.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addToProjectMemberPool.internalValue = value.addToProjectMemberPool;
      this._createAssetType.internalValue = value.createAssetType;
      this._createDomainUnit.internalValue = value.createDomainUnit;
      this._createEnvironment.internalValue = value.createEnvironment;
      this._createEnvironmentFromBlueprint.internalValue = value.createEnvironmentFromBlueprint;
      this._createEnvironmentProfile.internalValue = value.createEnvironmentProfile;
      this._createFormType.internalValue = value.createFormType;
      this._createGlossary.internalValue = value.createGlossary;
      this._createProject.internalValue = value.createProject;
      this._createProjectFromProjectProfile.internalValue = value.createProjectFromProjectProfile;
      this._delegateCreateEnvironmentProfile.internalValue = value.delegateCreateEnvironmentProfile;
      this._overrideDomainUnitOwners.internalValue = value.overrideDomainUnitOwners;
      this._overrideProjectOwners.internalValue = value.overrideProjectOwners;
      this._useAssetType.internalValue = value.useAssetType;
    }
  }

  // add_to_project_member_pool - computed: false, optional: true, required: false
  private _addToProjectMemberPool = new DatazonePolicyGrantDetailAddToProjectMemberPoolList(this, "add_to_project_member_pool", false);
  public get addToProjectMemberPool() {
    return this._addToProjectMemberPool;
  }
  public putAddToProjectMemberPool(value: DatazonePolicyGrantDetailAddToProjectMemberPool[] | cdktn.IResolvable) {
    this._addToProjectMemberPool.internalValue = value;
  }
  public resetAddToProjectMemberPool() {
    this._addToProjectMemberPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addToProjectMemberPoolInput() {
    return this._addToProjectMemberPool.internalValue;
  }

  // create_asset_type - computed: false, optional: true, required: false
  private _createAssetType = new DatazonePolicyGrantDetailCreateAssetTypeList(this, "create_asset_type", false);
  public get createAssetType() {
    return this._createAssetType;
  }
  public putCreateAssetType(value: DatazonePolicyGrantDetailCreateAssetType[] | cdktn.IResolvable) {
    this._createAssetType.internalValue = value;
  }
  public resetCreateAssetType() {
    this._createAssetType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAssetTypeInput() {
    return this._createAssetType.internalValue;
  }

  // create_domain_unit - computed: false, optional: true, required: false
  private _createDomainUnit = new DatazonePolicyGrantDetailCreateDomainUnitList(this, "create_domain_unit", false);
  public get createDomainUnit() {
    return this._createDomainUnit;
  }
  public putCreateDomainUnit(value: DatazonePolicyGrantDetailCreateDomainUnit[] | cdktn.IResolvable) {
    this._createDomainUnit.internalValue = value;
  }
  public resetCreateDomainUnit() {
    this._createDomainUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDomainUnitInput() {
    return this._createDomainUnit.internalValue;
  }

  // create_environment - computed: false, optional: true, required: false
  private _createEnvironment = new DatazonePolicyGrantDetailCreateEnvironmentList(this, "create_environment", false);
  public get createEnvironment() {
    return this._createEnvironment;
  }
  public putCreateEnvironment(value: DatazonePolicyGrantDetailCreateEnvironment[] | cdktn.IResolvable) {
    this._createEnvironment.internalValue = value;
  }
  public resetCreateEnvironment() {
    this._createEnvironment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEnvironmentInput() {
    return this._createEnvironment.internalValue;
  }

  // create_environment_from_blueprint - computed: false, optional: true, required: false
  private _createEnvironmentFromBlueprint = new DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList(this, "create_environment_from_blueprint", false);
  public get createEnvironmentFromBlueprint() {
    return this._createEnvironmentFromBlueprint;
  }
  public putCreateEnvironmentFromBlueprint(value: DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[] | cdktn.IResolvable) {
    this._createEnvironmentFromBlueprint.internalValue = value;
  }
  public resetCreateEnvironmentFromBlueprint() {
    this._createEnvironmentFromBlueprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEnvironmentFromBlueprintInput() {
    return this._createEnvironmentFromBlueprint.internalValue;
  }

  // create_environment_profile - computed: false, optional: true, required: false
  private _createEnvironmentProfile = new DatazonePolicyGrantDetailCreateEnvironmentProfileList(this, "create_environment_profile", false);
  public get createEnvironmentProfile() {
    return this._createEnvironmentProfile;
  }
  public putCreateEnvironmentProfile(value: DatazonePolicyGrantDetailCreateEnvironmentProfile[] | cdktn.IResolvable) {
    this._createEnvironmentProfile.internalValue = value;
  }
  public resetCreateEnvironmentProfile() {
    this._createEnvironmentProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createEnvironmentProfileInput() {
    return this._createEnvironmentProfile.internalValue;
  }

  // create_form_type - computed: false, optional: true, required: false
  private _createFormType = new DatazonePolicyGrantDetailCreateFormTypeList(this, "create_form_type", false);
  public get createFormType() {
    return this._createFormType;
  }
  public putCreateFormType(value: DatazonePolicyGrantDetailCreateFormType[] | cdktn.IResolvable) {
    this._createFormType.internalValue = value;
  }
  public resetCreateFormType() {
    this._createFormType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFormTypeInput() {
    return this._createFormType.internalValue;
  }

  // create_glossary - computed: false, optional: true, required: false
  private _createGlossary = new DatazonePolicyGrantDetailCreateGlossaryList(this, "create_glossary", false);
  public get createGlossary() {
    return this._createGlossary;
  }
  public putCreateGlossary(value: DatazonePolicyGrantDetailCreateGlossary[] | cdktn.IResolvable) {
    this._createGlossary.internalValue = value;
  }
  public resetCreateGlossary() {
    this._createGlossary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGlossaryInput() {
    return this._createGlossary.internalValue;
  }

  // create_project - computed: false, optional: true, required: false
  private _createProject = new DatazonePolicyGrantDetailCreateProjectList(this, "create_project", false);
  public get createProject() {
    return this._createProject;
  }
  public putCreateProject(value: DatazonePolicyGrantDetailCreateProject[] | cdktn.IResolvable) {
    this._createProject.internalValue = value;
  }
  public resetCreateProject() {
    this._createProject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createProjectInput() {
    return this._createProject.internalValue;
  }

  // create_project_from_project_profile - computed: false, optional: true, required: false
  private _createProjectFromProjectProfile = new DatazonePolicyGrantDetailCreateProjectFromProjectProfileList(this, "create_project_from_project_profile", false);
  public get createProjectFromProjectProfile() {
    return this._createProjectFromProjectProfile;
  }
  public putCreateProjectFromProjectProfile(value: DatazonePolicyGrantDetailCreateProjectFromProjectProfile[] | cdktn.IResolvable) {
    this._createProjectFromProjectProfile.internalValue = value;
  }
  public resetCreateProjectFromProjectProfile() {
    this._createProjectFromProjectProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createProjectFromProjectProfileInput() {
    return this._createProjectFromProjectProfile.internalValue;
  }

  // delegate_create_environment_profile - computed: false, optional: true, required: false
  private _delegateCreateEnvironmentProfile = new DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList(this, "delegate_create_environment_profile", false);
  public get delegateCreateEnvironmentProfile() {
    return this._delegateCreateEnvironmentProfile;
  }
  public putDelegateCreateEnvironmentProfile(value: DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[] | cdktn.IResolvable) {
    this._delegateCreateEnvironmentProfile.internalValue = value;
  }
  public resetDelegateCreateEnvironmentProfile() {
    this._delegateCreateEnvironmentProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateCreateEnvironmentProfileInput() {
    return this._delegateCreateEnvironmentProfile.internalValue;
  }

  // override_domain_unit_owners - computed: false, optional: true, required: false
  private _overrideDomainUnitOwners = new DatazonePolicyGrantDetailOverrideDomainUnitOwnersList(this, "override_domain_unit_owners", false);
  public get overrideDomainUnitOwners() {
    return this._overrideDomainUnitOwners;
  }
  public putOverrideDomainUnitOwners(value: DatazonePolicyGrantDetailOverrideDomainUnitOwners[] | cdktn.IResolvable) {
    this._overrideDomainUnitOwners.internalValue = value;
  }
  public resetOverrideDomainUnitOwners() {
    this._overrideDomainUnitOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDomainUnitOwnersInput() {
    return this._overrideDomainUnitOwners.internalValue;
  }

  // override_project_owners - computed: false, optional: true, required: false
  private _overrideProjectOwners = new DatazonePolicyGrantDetailOverrideProjectOwnersList(this, "override_project_owners", false);
  public get overrideProjectOwners() {
    return this._overrideProjectOwners;
  }
  public putOverrideProjectOwners(value: DatazonePolicyGrantDetailOverrideProjectOwners[] | cdktn.IResolvable) {
    this._overrideProjectOwners.internalValue = value;
  }
  public resetOverrideProjectOwners() {
    this._overrideProjectOwners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProjectOwnersInput() {
    return this._overrideProjectOwners.internalValue;
  }

  // use_asset_type - computed: false, optional: true, required: false
  private _useAssetType = new DatazonePolicyGrantDetailUseAssetTypeList(this, "use_asset_type", false);
  public get useAssetType() {
    return this._useAssetType;
  }
  public putUseAssetType(value: DatazonePolicyGrantDetailUseAssetType[] | cdktn.IResolvable) {
    this._useAssetType.internalValue = value;
  }
  public resetUseAssetType() {
    this._useAssetType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAssetTypeInput() {
    return this._useAssetType.internalValue;
  }
}

export class DatazonePolicyGrantDetailList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantDetail[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantDetailOutputReference {
    return new DatazonePolicyGrantDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter {
}

export function datazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterToTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterToHclTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference {
    return new DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipalDomainUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}
  */
  readonly domainUnitDesignation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}
  */
  readonly domainUnitIdentifier?: string;
  /**
  * all_domain_units_grant_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}
  */
  readonly allDomainUnitsGrantFilter?: DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] | cdktn.IResolvable;
}

export function datazonePolicyGrantPrincipalDomainUnitToTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit_designation: cdktn.stringToTerraform(struct!.domainUnitDesignation),
    domain_unit_identifier: cdktn.stringToTerraform(struct!.domainUnitIdentifier),
    all_domain_units_grant_filter: cdktn.listMapper(datazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterToTerraform, true)(struct!.allDomainUnitsGrantFilter),
  }
}


export function datazonePolicyGrantPrincipalDomainUnitToHclTerraform(struct?: DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit_designation: {
      value: cdktn.stringToHclTerraform(struct!.domainUnitDesignation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_unit_identifier: {
      value: cdktn.stringToHclTerraform(struct!.domainUnitIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_domain_units_grant_filter: {
      value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterToHclTerraform, true)(struct!.allDomainUnitsGrantFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalDomainUnitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnitDesignation !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitDesignation = this._domainUnitDesignation;
    }
    if (this._domainUnitIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitIdentifier = this._domainUnitIdentifier;
    }
    if (this._allDomainUnitsGrantFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDomainUnitsGrantFilter = this._allDomainUnitsGrantFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalDomainUnit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnitDesignation = undefined;
      this._domainUnitIdentifier = undefined;
      this._allDomainUnitsGrantFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnitDesignation = value.domainUnitDesignation;
      this._domainUnitIdentifier = value.domainUnitIdentifier;
      this._allDomainUnitsGrantFilter.internalValue = value.allDomainUnitsGrantFilter;
    }
  }

  // domain_unit_designation - computed: false, optional: false, required: true
  private _domainUnitDesignation?: string; 
  public get domainUnitDesignation() {
    return this.getStringAttribute('domain_unit_designation');
  }
  public set domainUnitDesignation(value: string) {
    this._domainUnitDesignation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitDesignationInput() {
    return this._domainUnitDesignation;
  }

  // domain_unit_identifier - computed: false, optional: true, required: false
  private _domainUnitIdentifier?: string; 
  public get domainUnitIdentifier() {
    return this.getStringAttribute('domain_unit_identifier');
  }
  public set domainUnitIdentifier(value: string) {
    this._domainUnitIdentifier = value;
  }
  public resetDomainUnitIdentifier() {
    this._domainUnitIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitIdentifierInput() {
    return this._domainUnitIdentifier;
  }

  // all_domain_units_grant_filter - computed: false, optional: true, required: false
  private _allDomainUnitsGrantFilter = new DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList(this, "all_domain_units_grant_filter", false);
  public get allDomainUnitsGrantFilter() {
    return this._allDomainUnitsGrantFilter;
  }
  public putAllDomainUnitsGrantFilter(value: DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[] | cdktn.IResolvable) {
    this._allDomainUnitsGrantFilter.internalValue = value;
  }
  public resetAllDomainUnitsGrantFilter() {
    this._allDomainUnitsGrantFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDomainUnitsGrantFilterInput() {
    return this._allDomainUnitsGrantFilter.internalValue;
  }
}

export class DatazonePolicyGrantPrincipalDomainUnitList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipalDomainUnit[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalDomainUnitOutputReference {
    return new DatazonePolicyGrantPrincipalDomainUnitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipalGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}
  */
  readonly groupIdentifier: string;
}

export function datazonePolicyGrantPrincipalGroupToTerraform(struct?: DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_identifier: cdktn.stringToTerraform(struct!.groupIdentifier),
  }
}


export function datazonePolicyGrantPrincipalGroupToHclTerraform(struct?: DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_identifier: {
      value: cdktn.stringToHclTerraform(struct!.groupIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdentifier = this._groupIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIdentifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIdentifier = value.groupIdentifier;
    }
  }

  // group_identifier - computed: false, optional: false, required: true
  private _groupIdentifier?: string; 
  public get groupIdentifier() {
    return this.getStringAttribute('group_identifier');
  }
  public set groupIdentifier(value: string) {
    this._groupIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdentifierInput() {
    return this._groupIdentifier;
  }
}

export class DatazonePolicyGrantPrincipalGroupList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipalGroup[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalGroupOutputReference {
    return new DatazonePolicyGrantPrincipalGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipalProjectDomainUnitFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}
  */
  readonly domainUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}
  */
  readonly includeChildDomainUnits?: boolean | cdktn.IResolvable;
}

export function datazonePolicyGrantPrincipalProjectDomainUnitFilterToTerraform(struct?: DatazonePolicyGrantPrincipalProjectDomainUnitFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit: cdktn.stringToTerraform(struct!.domainUnit),
    include_child_domain_units: cdktn.booleanToTerraform(struct!.includeChildDomainUnits),
  }
}


export function datazonePolicyGrantPrincipalProjectDomainUnitFilterToHclTerraform(struct?: DatazonePolicyGrantPrincipalProjectDomainUnitFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit: {
      value: cdktn.stringToHclTerraform(struct!.domainUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_child_domain_units: {
      value: cdktn.booleanToHclTerraform(struct!.includeChildDomainUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipalProjectDomainUnitFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnit = this._domainUnit;
    }
    if (this._includeChildDomainUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeChildDomainUnits = this._includeChildDomainUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalProjectDomainUnitFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnit = undefined;
      this._includeChildDomainUnits = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnit = value.domainUnit;
      this._includeChildDomainUnits = value.includeChildDomainUnits;
    }
  }

  // domain_unit - computed: false, optional: false, required: true
  private _domainUnit?: string; 
  public get domainUnit() {
    return this.getStringAttribute('domain_unit');
  }
  public set domainUnit(value: string) {
    this._domainUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitInput() {
    return this._domainUnit;
  }

  // include_child_domain_units - computed: false, optional: true, required: false
  private _includeChildDomainUnits?: boolean | cdktn.IResolvable; 
  public get includeChildDomainUnits() {
    return this.getBooleanAttribute('include_child_domain_units');
  }
  public set includeChildDomainUnits(value: boolean | cdktn.IResolvable) {
    this._includeChildDomainUnits = value;
  }
  public resetIncludeChildDomainUnits() {
    this._includeChildDomainUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildDomainUnitsInput() {
    return this._includeChildDomainUnits;
  }
}

export class DatazonePolicyGrantPrincipalProjectDomainUnitFilterList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference {
    return new DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipalProject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}
  */
  readonly projectDesignation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}
  */
  readonly projectIdentifier?: string;
  /**
  * domain_unit_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}
  */
  readonly domainUnitFilter?: DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] | cdktn.IResolvable;
}

export function datazonePolicyGrantPrincipalProjectToTerraform(struct?: DatazonePolicyGrantPrincipalProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_designation: cdktn.stringToTerraform(struct!.projectDesignation),
    project_identifier: cdktn.stringToTerraform(struct!.projectIdentifier),
    domain_unit_filter: cdktn.listMapper(datazonePolicyGrantPrincipalProjectDomainUnitFilterToTerraform, true)(struct!.domainUnitFilter),
  }
}


export function datazonePolicyGrantPrincipalProjectToHclTerraform(struct?: DatazonePolicyGrantPrincipalProject | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_designation: {
      value: cdktn.stringToHclTerraform(struct!.projectDesignation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_identifier: {
      value: cdktn.stringToHclTerraform(struct!.projectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_unit_filter: {
      value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalProjectDomainUnitFilterToHclTerraform, true)(struct!.domainUnitFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantPrincipalProjectDomainUnitFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalProjectOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipalProject | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectDesignation !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDesignation = this._projectDesignation;
    }
    if (this._projectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdentifier = this._projectIdentifier;
    }
    if (this._domainUnitFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnitFilter = this._domainUnitFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalProject | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectDesignation = undefined;
      this._projectIdentifier = undefined;
      this._domainUnitFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectDesignation = value.projectDesignation;
      this._projectIdentifier = value.projectIdentifier;
      this._domainUnitFilter.internalValue = value.domainUnitFilter;
    }
  }

  // project_designation - computed: false, optional: false, required: true
  private _projectDesignation?: string; 
  public get projectDesignation() {
    return this.getStringAttribute('project_designation');
  }
  public set projectDesignation(value: string) {
    this._projectDesignation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDesignationInput() {
    return this._projectDesignation;
  }

  // project_identifier - computed: false, optional: true, required: false
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  public resetProjectIdentifier() {
    this._projectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }

  // domain_unit_filter - computed: false, optional: true, required: false
  private _domainUnitFilter = new DatazonePolicyGrantPrincipalProjectDomainUnitFilterList(this, "domain_unit_filter", false);
  public get domainUnitFilter() {
    return this._domainUnitFilter;
  }
  public putDomainUnitFilter(value: DatazonePolicyGrantPrincipalProjectDomainUnitFilter[] | cdktn.IResolvable) {
    this._domainUnitFilter.internalValue = value;
  }
  public resetDomainUnitFilter() {
    this._domainUnitFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitFilterInput() {
    return this._domainUnitFilter.internalValue;
  }
}

export class DatazonePolicyGrantPrincipalProjectList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipalProject[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalProjectOutputReference {
    return new DatazonePolicyGrantPrincipalProjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipalUserAllUsersGrantFilter {
}

export function datazonePolicyGrantPrincipalUserAllUsersGrantFilterToTerraform(struct?: DatazonePolicyGrantPrincipalUserAllUsersGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function datazonePolicyGrantPrincipalUserAllUsersGrantFilterToHclTerraform(struct?: DatazonePolicyGrantPrincipalUserAllUsersGrantFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipalUserAllUsersGrantFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalUserAllUsersGrantFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference {
    return new DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipalUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}
  */
  readonly userIdentifier?: string;
  /**
  * all_users_grant_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}
  */
  readonly allUsersGrantFilter?: DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] | cdktn.IResolvable;
}

export function datazonePolicyGrantPrincipalUserToTerraform(struct?: DatazonePolicyGrantPrincipalUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    user_identifier: cdktn.stringToTerraform(struct!.userIdentifier),
    all_users_grant_filter: cdktn.listMapper(datazonePolicyGrantPrincipalUserAllUsersGrantFilterToTerraform, true)(struct!.allUsersGrantFilter),
  }
}


export function datazonePolicyGrantPrincipalUserToHclTerraform(struct?: DatazonePolicyGrantPrincipalUser | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    user_identifier: {
      value: cdktn.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_users_grant_filter: {
      value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalUserAllUsersGrantFilterToHclTerraform, true)(struct!.allUsersGrantFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalUserOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipalUser | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    if (this._allUsersGrantFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUsersGrantFilter = this._allUsersGrantFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipalUser | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userIdentifier = undefined;
      this._allUsersGrantFilter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userIdentifier = value.userIdentifier;
      this._allUsersGrantFilter.internalValue = value.allUsersGrantFilter;
    }
  }

  // user_identifier - computed: false, optional: true, required: false
  private _userIdentifier?: string; 
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
  }

  // all_users_grant_filter - computed: false, optional: true, required: false
  private _allUsersGrantFilter = new DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList(this, "all_users_grant_filter", false);
  public get allUsersGrantFilter() {
    return this._allUsersGrantFilter;
  }
  public putAllUsersGrantFilter(value: DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[] | cdktn.IResolvable) {
    this._allUsersGrantFilter.internalValue = value;
  }
  public resetAllUsersGrantFilter() {
    this._allUsersGrantFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUsersGrantFilterInput() {
    return this._allUsersGrantFilter.internalValue;
  }
}

export class DatazonePolicyGrantPrincipalUserList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipalUser[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalUserOutputReference {
    return new DatazonePolicyGrantPrincipalUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazonePolicyGrantPrincipal {
  /**
  * domain_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}
  */
  readonly domainUnit?: DatazonePolicyGrantPrincipalDomainUnit[] | cdktn.IResolvable;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}
  */
  readonly group?: DatazonePolicyGrantPrincipalGroup[] | cdktn.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}
  */
  readonly project?: DatazonePolicyGrantPrincipalProject[] | cdktn.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}
  */
  readonly user?: DatazonePolicyGrantPrincipalUser[] | cdktn.IResolvable;
}

export function datazonePolicyGrantPrincipalToTerraform(struct?: DatazonePolicyGrantPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    domain_unit: cdktn.listMapper(datazonePolicyGrantPrincipalDomainUnitToTerraform, true)(struct!.domainUnit),
    group: cdktn.listMapper(datazonePolicyGrantPrincipalGroupToTerraform, true)(struct!.group),
    project: cdktn.listMapper(datazonePolicyGrantPrincipalProjectToTerraform, true)(struct!.project),
    user: cdktn.listMapper(datazonePolicyGrantPrincipalUserToTerraform, true)(struct!.user),
  }
}


export function datazonePolicyGrantPrincipalToHclTerraform(struct?: DatazonePolicyGrantPrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    domain_unit: {
      value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalDomainUnitToHclTerraform, true)(struct!.domainUnit),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantPrincipalDomainUnitList",
    },
    group: {
      value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalGroupToHclTerraform, true)(struct!.group),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantPrincipalGroupList",
    },
    project: {
      value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalProjectToHclTerraform, true)(struct!.project),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantPrincipalProjectList",
    },
    user: {
      value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalUserToHclTerraform, true)(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "DatazonePolicyGrantPrincipalUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazonePolicyGrantPrincipalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazonePolicyGrantPrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUnit = this._domainUnit?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazonePolicyGrantPrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainUnit.internalValue = undefined;
      this._group.internalValue = undefined;
      this._project.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainUnit.internalValue = value.domainUnit;
      this._group.internalValue = value.group;
      this._project.internalValue = value.project;
      this._user.internalValue = value.user;
    }
  }

  // domain_unit - computed: false, optional: true, required: false
  private _domainUnit = new DatazonePolicyGrantPrincipalDomainUnitList(this, "domain_unit", false);
  public get domainUnit() {
    return this._domainUnit;
  }
  public putDomainUnit(value: DatazonePolicyGrantPrincipalDomainUnit[] | cdktn.IResolvable) {
    this._domainUnit.internalValue = value;
  }
  public resetDomainUnit() {
    this._domainUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitInput() {
    return this._domainUnit.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new DatazonePolicyGrantPrincipalGroupList(this, "group", false);
  public get group() {
    return this._group;
  }
  public putGroup(value: DatazonePolicyGrantPrincipalGroup[] | cdktn.IResolvable) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // project - computed: false, optional: true, required: false
  private _project = new DatazonePolicyGrantPrincipalProjectList(this, "project", false);
  public get project() {
    return this._project;
  }
  public putProject(value: DatazonePolicyGrantPrincipalProject[] | cdktn.IResolvable) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DatazonePolicyGrantPrincipalUserList(this, "user", false);
  public get user() {
    return this._user;
  }
  public putUser(value: DatazonePolicyGrantPrincipalUser[] | cdktn.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}

export class DatazonePolicyGrantPrincipalList extends cdktn.ComplexList {
  public internalValue? : DatazonePolicyGrantPrincipal[] | cdktn.IResolvable

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
  public get(index: number): DatazonePolicyGrantPrincipalOutputReference {
    return new DatazonePolicyGrantPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant aws_datazone_policy_grant}
*/
export class DatazonePolicyGrant extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_policy_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazonePolicyGrant to import
  * @param importFromId The id of the existing DatazonePolicyGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazonePolicyGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_policy_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant aws_datazone_policy_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazonePolicyGrantConfig
  */
  public constructor(scope: Construct, id: string, config: DatazonePolicyGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_policy_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.63.0',
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
    this._domainIdentifier = config.domainIdentifier;
    this._entityIdentifier = config.entityIdentifier;
    this._entityType = config.entityType;
    this._policyType = config.policyType;
    this._region = config.region;
    this._detail.internalValue = config.detail;
    this._principal.internalValue = config.principal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // domain_identifier - computed: false, optional: false, required: true
  private _domainIdentifier?: string; 
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // entity_identifier - computed: false, optional: false, required: true
  private _entityIdentifier?: string; 
  public get entityIdentifier() {
    return this.getStringAttribute('entity_identifier');
  }
  public set entityIdentifier(value: string) {
    this._entityIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdentifierInput() {
    return this._entityIdentifier;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // grant_id - computed: true, optional: false, required: false
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
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

  // detail - computed: false, optional: true, required: false
  private _detail = new DatazonePolicyGrantDetailList(this, "detail", false);
  public get detail() {
    return this._detail;
  }
  public putDetail(value: DatazonePolicyGrantDetail[] | cdktn.IResolvable) {
    this._detail.internalValue = value;
  }
  public resetDetail() {
    this._detail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail.internalValue;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new DatazonePolicyGrantPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: DatazonePolicyGrantPrincipal[] | cdktn.IResolvable) {
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
      domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
      entity_identifier: cdktn.stringToTerraform(this._entityIdentifier),
      entity_type: cdktn.stringToTerraform(this._entityType),
      policy_type: cdktn.stringToTerraform(this._policyType),
      region: cdktn.stringToTerraform(this._region),
      detail: cdktn.listMapper(datazonePolicyGrantDetailToTerraform, true)(this._detail.internalValue),
      principal: cdktn.listMapper(datazonePolicyGrantPrincipalToTerraform, true)(this._principal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_identifier: {
        value: cdktn.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_identifier: {
        value: cdktn.stringToHclTerraform(this._entityIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktn.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktn.stringToHclTerraform(this._policyType),
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
      detail: {
        value: cdktn.listMapperHcl(datazonePolicyGrantDetailToHclTerraform, true)(this._detail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazonePolicyGrantDetailList",
      },
      principal: {
        value: cdktn.listMapperHcl(datazonePolicyGrantPrincipalToHclTerraform, true)(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazonePolicyGrantPrincipalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
