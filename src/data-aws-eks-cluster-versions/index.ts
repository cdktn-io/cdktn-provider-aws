/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsEksClusterVersionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}
  */
  readonly clusterVersionsOnly?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}
  */
  readonly defaultOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}
  */
  readonly includeAll?: boolean | cdktn.IResolvable;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions#region DataAwsEksClusterVersions#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}
  */
  readonly versionStatus?: string;
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtl {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPort {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPortToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPortToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPortList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPortOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_port - computed: true, optional: false, required: false
  private _maxPort = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortList(this, "max_port", false);
  public get maxPort() {
    return this._maxPort;
  }

  // min_port - computed: true, optional: false, required: false
  private _minPort = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsMinPortList(this, "min_port", false);
  public get minPort() {
    return this._minPort;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValue {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValueToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValueToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_port - computed: true, optional: false, required: false
  public get maxPort() {
    return this.getNumberAttribute('max_port');
  }

  // min_port - computed: true, optional: false, required: false
  public get minPort() {
    return this.getNumberAttribute('min_port');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValueOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRange {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  private _defaultValue = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeDefaultValueList(this, "default_value", false);
  public get defaultValue() {
    return this._defaultValue;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_ttl - computed: true, optional: false, required: false
  private _eventTtl = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigEventTtlList(this, "event_ttl", false);
  public get eventTtl() {
    return this._eventTtl;
  }

  // service_node_port_range - computed: true, optional: false, required: false
  private _serviceNodePortRange = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigServiceNodePortRangeList(this, "service_node_port_range", false);
  public get serviceNodePortRange() {
    return this._serviceNodePortRange;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // horizontal_pod_autoscaler_sync_period - computed: true, optional: false, required: false
  private _horizontalPodAutoscalerSyncPeriod = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodList(this, "horizontal_pod_autoscaler_sync_period", false);
  public get horizontalPodAutoscalerSyncPeriod() {
    return this._horizontalPodAutoscalerSyncPeriod;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // horizontal_pod_autoscaler_controller_config - computed: true, optional: false, required: false
  private _horizontalPodAutoscalerControllerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigList(this, "horizontal_pod_autoscaler_controller_config", false);
  public get horizontalPodAutoscalerControllerConfig() {
    return this._horizontalPodAutoscalerControllerConfig;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  private _name = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameList(this, "name", false);
  public get name() {
    return this._name;
  }

  // weight - computed: true, optional: false, required: false
  private _weight = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightList(this, "weight", false);
  public get weight() {
    return this._weight;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // scoring_strategy - computed: true, optional: false, required: false
  private _scoringStrategy = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyList(this, "scoring_strategy", false);
  public get scoringStrategy() {
    return this._scoringStrategy;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategy {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  private _defaultValue = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueList(this, "default_value", false);
  public get defaultValue() {
    return this._defaultValue;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFit {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scoring_strategy - computed: true, optional: false, required: false
  private _scoringStrategy = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitScoringStrategyList(this, "scoring_strategy", false);
  public get scoringStrategy() {
    return this._scoringStrategy;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_resources_fit - computed: true, optional: false, required: false
  private _nodeResourcesFit = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigNodeResourcesFitList(this, "node_resources_fit", false);
  public get nodeResourcesFit() {
    return this._nodeResourcesFit;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kube_api_server_config - computed: true, optional: false, required: false
  private _kubeApiServerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeApiServerConfigList(this, "kube_api_server_config", false);
  public get kubeApiServerConfig() {
    return this._kubeApiServerConfig;
  }

  // kube_controller_manager_config - computed: true, optional: false, required: false
  private _kubeControllerManagerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeControllerManagerConfigList(this, "kube_controller_manager_config", false);
  public get kubeControllerManagerConfig() {
    return this._kubeControllerManagerConfig;
  }

  // kube_scheduler_config - computed: true, optional: false, required: false
  private _kubeSchedulerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigKubeSchedulerConfigList(this, "kube_scheduler_config", false);
  public get kubeSchedulerConfig() {
    return this._kubeSchedulerConfig;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtl {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPort {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPortToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPortToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPortList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPortOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_port - computed: true, optional: false, required: false
  private _maxPort = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMaxPortList(this, "max_port", false);
  public get maxPort() {
    return this._maxPort;
  }

  // min_port - computed: true, optional: false, required: false
  private _minPort = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsMinPortList(this, "min_port", false);
  public get minPort() {
    return this._minPort;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValue {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValueToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValueToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_port - computed: true, optional: false, required: false
  public get maxPort() {
    return this.getNumberAttribute('max_port');
  }

  // min_port - computed: true, optional: false, required: false
  public get minPort() {
    return this.getNumberAttribute('min_port');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValueOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRange {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  private _defaultValue = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeDefaultValueList(this, "default_value", false);
  public get defaultValue() {
    return this._defaultValue;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_ttl - computed: true, optional: false, required: false
  private _eventTtl = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigEventTtlList(this, "event_ttl", false);
  public get eventTtl() {
    return this._eventTtl;
  }

  // service_node_port_range - computed: true, optional: false, required: false
  private _serviceNodePortRange = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigServiceNodePortRangeList(this, "service_node_port_range", false);
  public get serviceNodePortRange() {
    return this._serviceNodePortRange;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // horizontal_pod_autoscaler_sync_period - computed: true, optional: false, required: false
  private _horizontalPodAutoscalerSyncPeriod = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigHorizontalPodAutoscalerSyncPeriodList(this, "horizontal_pod_autoscaler_sync_period", false);
  public get horizontalPodAutoscalerSyncPeriod() {
    return this._horizontalPodAutoscalerSyncPeriod;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // horizontal_pod_autoscaler_controller_config - computed: true, optional: false, required: false
  private _horizontalPodAutoscalerControllerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigHorizontalPodAutoscalerControllerConfigList(this, "horizontal_pod_autoscaler_controller_config", false);
  public get horizontalPodAutoscalerControllerConfig() {
    return this._horizontalPodAutoscalerControllerConfig;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  private _name = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesNameList(this, "name", false);
  public get name() {
    return this._name;
  }

  // weight - computed: true, optional: false, required: false
  private _weight = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesWeightList(this, "weight", false);
  public get weight() {
    return this._weight;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // scoring_strategy - computed: true, optional: false, required: false
  private _scoringStrategy = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsScoringStrategyList(this, "scoring_strategy", false);
  public get scoringStrategy() {
    return this._scoringStrategy;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategy {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // default_value - computed: true, optional: false, required: false
  private _defaultValue = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyDefaultValueList(this, "default_value", false);
  public get defaultValue() {
    return this._defaultValue;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFit {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scoring_strategy - computed: true, optional: false, required: false
  private _scoringStrategy = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitScoringStrategyList(this, "scoring_strategy", false);
  public get scoringStrategy() {
    return this._scoringStrategy;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfig {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_resources_fit - computed: true, optional: false, required: false
  private _nodeResourcesFit = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigNodeResourcesFitList(this, "node_resources_fit", false);
  public get nodeResourcesFit() {
    return this._nodeResourcesFit;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverrides {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kube_api_server_config - computed: true, optional: false, required: false
  private _kubeApiServerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeApiServerConfigList(this, "kube_api_server_config", false);
  public get kubeApiServerConfig() {
    return this._kubeApiServerConfig;
  }

  // kube_controller_manager_config - computed: true, optional: false, required: false
  private _kubeControllerManagerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeControllerManagerConfigList(this, "kube_controller_manager_config", false);
  public get kubeControllerManagerConfig() {
    return this._kubeControllerManagerConfig;
  }

  // kube_scheduler_config - computed: true, optional: false, required: false
  private _kubeSchedulerConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesKubeSchedulerConfigList(this, "kube_scheduler_config", false);
  public get kubeSchedulerConfig() {
    return this._kubeSchedulerConfig;
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiers {
}

export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersToTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_request_concurrency - computed: true, optional: false, required: false
  public get apiRequestConcurrency() {
    return this.getNumberAttribute('api_request_concurrency');
  }

  // cluster_database_size_gb - computed: true, optional: false, required: false
  public get clusterDatabaseSizeGb() {
    return this.getNumberAttribute('cluster_database_size_gb');
  }

  // control_plane_component_config_overrides - computed: true, optional: false, required: false
  private _controlPlaneComponentConfigOverrides = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersControlPlaneComponentConfigOverridesList(this, "control_plane_component_config_overrides", false);
  public get controlPlaneComponentConfigOverrides() {
    return this._controlPlaneComponentConfigOverrides;
  }

  // pod_scheduling_rate_per_second - computed: true, optional: false, required: false
  public get podSchedulingRatePerSecond() {
    return this.getNumberAttribute('pod_scheduling_rate_per_second');
  }

  // tier_name - computed: true, optional: false, required: false
  public get tierName() {
    return this.getStringAttribute('tier_name');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsEksClusterVersionsClusterVersions {
}

export function dataAwsEksClusterVersionsClusterVersionsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsEksClusterVersionsClusterVersionsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsEksClusterVersionsClusterVersionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsEksClusterVersionsClusterVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsEksClusterVersionsClusterVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // control_plane_component_config - computed: true, optional: false, required: false
  private _controlPlaneComponentConfig = new DataAwsEksClusterVersionsClusterVersionsControlPlaneComponentConfigList(this, "control_plane_component_config", false);
  public get controlPlaneComponentConfig() {
    return this._controlPlaneComponentConfig;
  }

  // control_plane_scaling_tiers - computed: true, optional: false, required: false
  private _controlPlaneScalingTiers = new DataAwsEksClusterVersionsClusterVersionsControlPlaneScalingTiersList(this, "control_plane_scaling_tiers", false);
  public get controlPlaneScalingTiers() {
    return this._controlPlaneScalingTiers;
  }

  // default_platform_version - computed: true, optional: false, required: false
  public get defaultPlatformVersion() {
    return this.getStringAttribute('default_platform_version');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getBooleanAttribute('default_version');
  }

  // end_of_extended_support_date - computed: true, optional: false, required: false
  public get endOfExtendedSupportDate() {
    return this.getStringAttribute('end_of_extended_support_date');
  }

  // end_of_standard_support_date - computed: true, optional: false, required: false
  public get endOfStandardSupportDate() {
    return this.getStringAttribute('end_of_standard_support_date');
  }

  // kubernetes_patch_version - computed: true, optional: false, required: false
  public get kubernetesPatchVersion() {
    return this.getStringAttribute('kubernetes_patch_version');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // version_status - computed: true, optional: false, required: false
  public get versionStatus() {
    return this.getStringAttribute('version_status');
  }
}

export class DataAwsEksClusterVersionsClusterVersionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsEksClusterVersionsClusterVersionsOutputReference {
    return new DataAwsEksClusterVersionsClusterVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions}
*/
export class DataAwsEksClusterVersions extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_eks_cluster_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsEksClusterVersions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEksClusterVersions to import
  * @param importFromId The id of the existing DataAwsEksClusterVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEksClusterVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_eks_cluster_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEksClusterVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEksClusterVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster_versions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.61.0',
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
    this._clusterType = config.clusterType;
    this._clusterVersionsOnly = config.clusterVersionsOnly;
    this._defaultOnly = config.defaultOnly;
    this._includeAll = config.includeAll;
    this._region = config.region;
    this._versionStatus = config.versionStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cluster_versions - computed: true, optional: false, required: false
  private _clusterVersions = new DataAwsEksClusterVersionsClusterVersionsList(this, "cluster_versions", false);
  public get clusterVersions() {
    return this._clusterVersions;
  }

  // cluster_versions_only - computed: false, optional: true, required: false
  private _clusterVersionsOnly?: string[]; 
  public get clusterVersionsOnly() {
    return this.getListAttribute('cluster_versions_only');
  }
  public set clusterVersionsOnly(value: string[]) {
    this._clusterVersionsOnly = value;
  }
  public resetClusterVersionsOnly() {
    this._clusterVersionsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionsOnlyInput() {
    return this._clusterVersionsOnly;
  }

  // default_only - computed: false, optional: true, required: false
  private _defaultOnly?: boolean | cdktn.IResolvable; 
  public get defaultOnly() {
    return this.getBooleanAttribute('default_only');
  }
  public set defaultOnly(value: boolean | cdktn.IResolvable) {
    this._defaultOnly = value;
  }
  public resetDefaultOnly() {
    this._defaultOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOnlyInput() {
    return this._defaultOnly;
  }

  // include_all - computed: false, optional: true, required: false
  private _includeAll?: boolean | cdktn.IResolvable; 
  public get includeAll() {
    return this.getBooleanAttribute('include_all');
  }
  public set includeAll(value: boolean | cdktn.IResolvable) {
    this._includeAll = value;
  }
  public resetIncludeAll() {
    this._includeAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllInput() {
    return this._includeAll;
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

  // version_status - computed: false, optional: true, required: false
  private _versionStatus?: string; 
  public get versionStatus() {
    return this.getStringAttribute('version_status');
  }
  public set versionStatus(value: string) {
    this._versionStatus = value;
  }
  public resetVersionStatus() {
    this._versionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStatusInput() {
    return this._versionStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type: cdktn.stringToTerraform(this._clusterType),
      cluster_versions_only: cdktn.listMapper(cdktn.stringToTerraform, false)(this._clusterVersionsOnly),
      default_only: cdktn.booleanToTerraform(this._defaultOnly),
      include_all: cdktn.booleanToTerraform(this._includeAll),
      region: cdktn.stringToTerraform(this._region),
      version_status: cdktn.stringToTerraform(this._versionStatus),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_type: {
        value: cdktn.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_versions_only: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._clusterVersionsOnly),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_only: {
        value: cdktn.booleanToHclTerraform(this._defaultOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_all: {
        value: cdktn.booleanToHclTerraform(this._includeAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_status: {
        value: cdktn.stringToHclTerraform(this._versionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
