/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Resiliencehubv2InputSourceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#region Resiliencehubv2InputSource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#service_arn Resiliencehubv2InputSource#service_arn}
  */
  readonly serviceArn: string;
  /**
  * resource_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#resource_configuration Resiliencehubv2InputSource#resource_configuration}
  */
  readonly resourceConfiguration?: Resiliencehubv2InputSourceResourceConfiguration[] | cdktn.IResolvable;
}
export interface Resiliencehubv2InputSourceResourceConfigurationEks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#cluster_arn Resiliencehubv2InputSource#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#namespaces Resiliencehubv2InputSource#namespaces}
  */
  readonly namespaces: string[];
}

export function resiliencehubv2InputSourceResourceConfigurationEksToTerraform(struct?: Resiliencehubv2InputSourceResourceConfigurationEks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_arn: cdktn.stringToTerraform(struct!.clusterArn),
    namespaces: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaces),
  }
}


export function resiliencehubv2InputSourceResourceConfigurationEksToHclTerraform(struct?: Resiliencehubv2InputSourceResourceConfigurationEks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_arn: {
      value: cdktn.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2InputSourceResourceConfigurationEksOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2InputSourceResourceConfigurationEks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2InputSourceResourceConfigurationEks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterArn = undefined;
      this._namespaces = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterArn = value.clusterArn;
      this._namespaces = value.namespaces;
    }
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // namespaces - computed: false, optional: false, required: true
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktn.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}

export class Resiliencehubv2InputSourceResourceConfigurationEksList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2InputSourceResourceConfigurationEks[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2InputSourceResourceConfigurationEksOutputReference {
    return new Resiliencehubv2InputSourceResourceConfigurationEksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2InputSourceResourceConfigurationResourceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#key Resiliencehubv2InputSource#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#values Resiliencehubv2InputSource#values}
  */
  readonly values: string[];
}

export function resiliencehubv2InputSourceResourceConfigurationResourceTagToTerraform(struct?: Resiliencehubv2InputSourceResourceConfigurationResourceTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function resiliencehubv2InputSourceResourceConfigurationResourceTagToHclTerraform(struct?: Resiliencehubv2InputSourceResourceConfigurationResourceTag | cdktn.IResolvable): any {
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

export class Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2InputSourceResourceConfigurationResourceTag | cdktn.IResolvable | undefined {
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

  public set internalValue(value: Resiliencehubv2InputSourceResourceConfigurationResourceTag | cdktn.IResolvable | undefined) {
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

export class Resiliencehubv2InputSourceResourceConfigurationResourceTagList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2InputSourceResourceConfigurationResourceTag[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference {
    return new Resiliencehubv2InputSourceResourceConfigurationResourceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Resiliencehubv2InputSourceResourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#cfn_stack_arn Resiliencehubv2InputSource#cfn_stack_arn}
  */
  readonly cfnStackArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#design_file_s3_url Resiliencehubv2InputSource#design_file_s3_url}
  */
  readonly designFileS3Url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#tf_state_file_url Resiliencehubv2InputSource#tf_state_file_url}
  */
  readonly tfStateFileUrl?: string;
  /**
  * eks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#eks Resiliencehubv2InputSource#eks}
  */
  readonly eks?: Resiliencehubv2InputSourceResourceConfigurationEks[] | cdktn.IResolvable;
  /**
  * resource_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#resource_tag Resiliencehubv2InputSource#resource_tag}
  */
  readonly resourceTag?: Resiliencehubv2InputSourceResourceConfigurationResourceTag[] | cdktn.IResolvable;
}

export function resiliencehubv2InputSourceResourceConfigurationToTerraform(struct?: Resiliencehubv2InputSourceResourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cfn_stack_arn: cdktn.stringToTerraform(struct!.cfnStackArn),
    design_file_s3_url: cdktn.stringToTerraform(struct!.designFileS3Url),
    tf_state_file_url: cdktn.stringToTerraform(struct!.tfStateFileUrl),
    eks: cdktn.listMapper(resiliencehubv2InputSourceResourceConfigurationEksToTerraform, true)(struct!.eks),
    resource_tag: cdktn.listMapper(resiliencehubv2InputSourceResourceConfigurationResourceTagToTerraform, true)(struct!.resourceTag),
  }
}


export function resiliencehubv2InputSourceResourceConfigurationToHclTerraform(struct?: Resiliencehubv2InputSourceResourceConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cfn_stack_arn: {
      value: cdktn.stringToHclTerraform(struct!.cfnStackArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    design_file_s3_url: {
      value: cdktn.stringToHclTerraform(struct!.designFileS3Url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tf_state_file_url: {
      value: cdktn.stringToHclTerraform(struct!.tfStateFileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks: {
      value: cdktn.listMapperHcl(resiliencehubv2InputSourceResourceConfigurationEksToHclTerraform, true)(struct!.eks),
      isBlock: true,
      type: "list",
      storageClassType: "Resiliencehubv2InputSourceResourceConfigurationEksList",
    },
    resource_tag: {
      value: cdktn.listMapperHcl(resiliencehubv2InputSourceResourceConfigurationResourceTagToHclTerraform, true)(struct!.resourceTag),
      isBlock: true,
      type: "list",
      storageClassType: "Resiliencehubv2InputSourceResourceConfigurationResourceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Resiliencehubv2InputSourceResourceConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Resiliencehubv2InputSourceResourceConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfnStackArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfnStackArn = this._cfnStackArn;
    }
    if (this._designFileS3Url !== undefined) {
      hasAnyValues = true;
      internalValueResult.designFileS3Url = this._designFileS3Url;
    }
    if (this._tfStateFileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tfStateFileUrl = this._tfStateFileUrl;
    }
    if (this._eks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eks = this._eks?.internalValue;
    }
    if (this._resourceTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTag = this._resourceTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Resiliencehubv2InputSourceResourceConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfnStackArn = undefined;
      this._designFileS3Url = undefined;
      this._tfStateFileUrl = undefined;
      this._eks.internalValue = undefined;
      this._resourceTag.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfnStackArn = value.cfnStackArn;
      this._designFileS3Url = value.designFileS3Url;
      this._tfStateFileUrl = value.tfStateFileUrl;
      this._eks.internalValue = value.eks;
      this._resourceTag.internalValue = value.resourceTag;
    }
  }

  // cfn_stack_arn - computed: false, optional: true, required: false
  private _cfnStackArn?: string; 
  public get cfnStackArn() {
    return this.getStringAttribute('cfn_stack_arn');
  }
  public set cfnStackArn(value: string) {
    this._cfnStackArn = value;
  }
  public resetCfnStackArn() {
    this._cfnStackArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfnStackArnInput() {
    return this._cfnStackArn;
  }

  // design_file_s3_url - computed: false, optional: true, required: false
  private _designFileS3Url?: string; 
  public get designFileS3Url() {
    return this.getStringAttribute('design_file_s3_url');
  }
  public set designFileS3Url(value: string) {
    this._designFileS3Url = value;
  }
  public resetDesignFileS3Url() {
    this._designFileS3Url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designFileS3UrlInput() {
    return this._designFileS3Url;
  }

  // tf_state_file_url - computed: false, optional: true, required: false
  private _tfStateFileUrl?: string; 
  public get tfStateFileUrl() {
    return this.getStringAttribute('tf_state_file_url');
  }
  public set tfStateFileUrl(value: string) {
    this._tfStateFileUrl = value;
  }
  public resetTfStateFileUrl() {
    this._tfStateFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfStateFileUrlInput() {
    return this._tfStateFileUrl;
  }

  // eks - computed: false, optional: true, required: false
  private _eks = new Resiliencehubv2InputSourceResourceConfigurationEksList(this, "eks", false);
  public get eks() {
    return this._eks;
  }
  public putEks(value: Resiliencehubv2InputSourceResourceConfigurationEks[] | cdktn.IResolvable) {
    this._eks.internalValue = value;
  }
  public resetEks() {
    this._eks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eksInput() {
    return this._eks.internalValue;
  }

  // resource_tag - computed: false, optional: true, required: false
  private _resourceTag = new Resiliencehubv2InputSourceResourceConfigurationResourceTagList(this, "resource_tag", false);
  public get resourceTag() {
    return this._resourceTag;
  }
  public putResourceTag(value: Resiliencehubv2InputSourceResourceConfigurationResourceTag[] | cdktn.IResolvable) {
    this._resourceTag.internalValue = value;
  }
  public resetResourceTag() {
    this._resourceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagInput() {
    return this._resourceTag.internalValue;
  }
}

export class Resiliencehubv2InputSourceResourceConfigurationList extends cdktn.ComplexList {
  public internalValue? : Resiliencehubv2InputSourceResourceConfiguration[] | cdktn.IResolvable

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
  public get(index: number): Resiliencehubv2InputSourceResourceConfigurationOutputReference {
    return new Resiliencehubv2InputSourceResourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source aws_resiliencehubv2_input_source}
*/
export class Resiliencehubv2InputSource extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_resiliencehubv2_input_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Resiliencehubv2InputSource resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resiliencehubv2InputSource to import
  * @param importFromId The id of the existing Resiliencehubv2InputSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resiliencehubv2InputSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_resiliencehubv2_input_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/resiliencehubv2_input_source aws_resiliencehubv2_input_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Resiliencehubv2InputSourceConfig
  */
  public constructor(scope: Construct, id: string, config: Resiliencehubv2InputSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_resiliencehubv2_input_source',
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
    this._region = config.region;
    this._serviceArn = config.serviceArn;
    this._resourceConfiguration.internalValue = config.resourceConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // input_source_id - computed: true, optional: false, required: false
  public get inputSourceId() {
    return this.getStringAttribute('input_source_id');
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

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string; 
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
  }

  // resource_configuration - computed: false, optional: true, required: false
  private _resourceConfiguration = new Resiliencehubv2InputSourceResourceConfigurationList(this, "resource_configuration", false);
  public get resourceConfiguration() {
    return this._resourceConfiguration;
  }
  public putResourceConfiguration(value: Resiliencehubv2InputSourceResourceConfiguration[] | cdktn.IResolvable) {
    this._resourceConfiguration.internalValue = value;
  }
  public resetResourceConfiguration() {
    this._resourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigurationInput() {
    return this._resourceConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      service_arn: cdktn.stringToTerraform(this._serviceArn),
      resource_configuration: cdktn.listMapper(resiliencehubv2InputSourceResourceConfigurationToTerraform, true)(this._resourceConfiguration.internalValue),
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
      service_arn: {
        value: cdktn.stringToHclTerraform(this._serviceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_configuration: {
        value: cdktn.listMapperHcl(resiliencehubv2InputSourceResourceConfigurationToHclTerraform, true)(this._resourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Resiliencehubv2InputSourceResourceConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
