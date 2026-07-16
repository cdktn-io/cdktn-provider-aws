/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BedrockagentcoreMemoryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#description BedrockagentcoreMemory#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#encryption_key_arn BedrockagentcoreMemory#encryption_key_arn}
  */
  readonly encryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#event_expiry_duration BedrockagentcoreMemory#event_expiry_duration}
  */
  readonly eventExpiryDuration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#memory_execution_role_arn BedrockagentcoreMemory#memory_execution_role_arn}
  */
  readonly memoryExecutionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#name BedrockagentcoreMemory#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#region BedrockagentcoreMemory#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#tags BedrockagentcoreMemory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * indexed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#indexed_key BedrockagentcoreMemory#indexed_key}
  */
  readonly indexedKey?: BedrockagentcoreMemoryIndexedKey[] | cdktn.IResolvable;
  /**
  * stream_delivery_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#stream_delivery_resources BedrockagentcoreMemory#stream_delivery_resources}
  */
  readonly streamDeliveryResources?: BedrockagentcoreMemoryStreamDeliveryResources[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#timeouts BedrockagentcoreMemory#timeouts}
  */
  readonly timeouts?: BedrockagentcoreMemoryTimeouts;
}
export interface BedrockagentcoreMemoryIndexedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#key BedrockagentcoreMemory#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type: string;
}

export function bedrockagentcoreMemoryIndexedKeyToTerraform(struct?: BedrockagentcoreMemoryIndexedKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryIndexedKeyToHclTerraform(struct?: BedrockagentcoreMemoryIndexedKey | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryIndexedKeyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryIndexedKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryIndexedKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BedrockagentcoreMemoryIndexedKeyList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryIndexedKey[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryIndexedKeyOutputReference {
    return new BedrockagentcoreMemoryIndexedKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#level BedrockagentcoreMemory#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#type BedrockagentcoreMemory#type}
  */
  readonly type: string;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    level: cdktn.stringToTerraform(struct!.level),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    level: {
      value: cdktn.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._type = value.type;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference {
    return new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#data_stream_arn BedrockagentcoreMemory#data_stream_arn}
  */
  readonly dataStreamArn: string;
  /**
  * content_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#content_configuration BedrockagentcoreMemory#content_configuration}
  */
  readonly contentConfiguration?: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_stream_arn: cdktn.stringToTerraform(struct!.dataStreamArn),
    content_configuration: cdktn.listMapper(bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationToTerraform, true)(struct!.contentConfiguration),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_stream_arn: {
      value: cdktn.stringToHclTerraform(struct!.dataStreamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_configuration: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationToHclTerraform, true)(struct!.contentConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStreamArn = this._dataStreamArn;
    }
    if (this._contentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentConfiguration = this._contentConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataStreamArn = undefined;
      this._contentConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataStreamArn = value.dataStreamArn;
      this._contentConfiguration.internalValue = value.contentConfiguration;
    }
  }

  // data_stream_arn - computed: false, optional: false, required: true
  private _dataStreamArn?: string; 
  public get dataStreamArn() {
    return this.getStringAttribute('data_stream_arn');
  }
  public set dataStreamArn(value: string) {
    this._dataStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamArnInput() {
    return this._dataStreamArn;
  }

  // content_configuration - computed: false, optional: true, required: false
  private _contentConfiguration = new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfigurationList(this, "content_configuration", false);
  public get contentConfiguration() {
    return this._contentConfiguration;
  }
  public putContentConfiguration(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisContentConfiguration[] | cdktn.IResolvable) {
    this._contentConfiguration.internalValue = value;
  }
  public resetContentConfiguration() {
    this._contentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigurationInput() {
    return this._contentConfiguration.internalValue;
  }
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference {
    return new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResourcesResource {
  /**
  * kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#kinesis BedrockagentcoreMemory#kinesis}
  */
  readonly kinesis?: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesResourceToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kinesis: cdktn.listMapper(bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisToTerraform, true)(struct!.kinesis),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesResourceToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResourcesResource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kinesis: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisToHclTerraform, true)(struct!.kinesis),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResourcesResource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesis = this._kinesis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResourcesResource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinesis.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinesis.internalValue = value.kinesis;
    }
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesisList(this, "kinesis", false);
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: BedrockagentcoreMemoryStreamDeliveryResourcesResourceKinesis[] | cdktn.IResolvable) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
  }
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesResourceList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStreamDeliveryResourcesResource[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference {
    return new BedrockagentcoreMemoryStreamDeliveryResourcesResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryStreamDeliveryResources {
  /**
  * resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#resource BedrockagentcoreMemory#resource}
  */
  readonly resource?: BedrockagentcoreMemoryStreamDeliveryResourcesResource[] | cdktn.IResolvable;
}

export function bedrockagentcoreMemoryStreamDeliveryResourcesToTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource: cdktn.listMapper(bedrockagentcoreMemoryStreamDeliveryResourcesResourceToTerraform, true)(struct!.resource),
  }
}


export function bedrockagentcoreMemoryStreamDeliveryResourcesToHclTerraform(struct?: BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource: {
      value: cdktn.listMapperHcl(bedrockagentcoreMemoryStreamDeliveryResourcesResourceToHclTerraform, true)(struct!.resource),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentcoreMemoryStreamDeliveryResourcesResourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentcoreMemoryStreamDeliveryResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
    }
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new BedrockagentcoreMemoryStreamDeliveryResourcesResourceList(this, "resource", false);
  public get resource() {
    return this._resource;
  }
  public putResource(value: BedrockagentcoreMemoryStreamDeliveryResourcesResource[] | cdktn.IResolvable) {
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

export class BedrockagentcoreMemoryStreamDeliveryResourcesList extends cdktn.ComplexList {
  public internalValue? : BedrockagentcoreMemoryStreamDeliveryResources[] | cdktn.IResolvable

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
  public get(index: number): BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference {
    return new BedrockagentcoreMemoryStreamDeliveryResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentcoreMemoryTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#create BedrockagentcoreMemory#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#delete BedrockagentcoreMemory#delete}
  */
  readonly delete?: string;
}

export function bedrockagentcoreMemoryTimeoutsToTerraform(struct?: BedrockagentcoreMemoryTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function bedrockagentcoreMemoryTimeoutsToHclTerraform(struct?: BedrockagentcoreMemoryTimeouts | cdktn.IResolvable): any {
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

export class BedrockagentcoreMemoryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentcoreMemoryTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BedrockagentcoreMemoryTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory aws_bedrockagentcore_memory}
*/
export class BedrockagentcoreMemory extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagentcore_memory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BedrockagentcoreMemory resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentcoreMemory to import
  * @param importFromId The id of the existing BedrockagentcoreMemory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentcoreMemory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagentcore_memory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/bedrockagentcore_memory aws_bedrockagentcore_memory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentcoreMemoryConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentcoreMemoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagentcore_memory',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.55.0',
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
    this._encryptionKeyArn = config.encryptionKeyArn;
    this._eventExpiryDuration = config.eventExpiryDuration;
    this._memoryExecutionRoleArn = config.memoryExecutionRoleArn;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._indexedKey.internalValue = config.indexedKey;
    this._streamDeliveryResources.internalValue = config.streamDeliveryResources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

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

  // encryption_key_arn - computed: false, optional: true, required: false
  private _encryptionKeyArn?: string; 
  public get encryptionKeyArn() {
    return this.getStringAttribute('encryption_key_arn');
  }
  public set encryptionKeyArn(value: string) {
    this._encryptionKeyArn = value;
  }
  public resetEncryptionKeyArn() {
    this._encryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyArnInput() {
    return this._encryptionKeyArn;
  }

  // event_expiry_duration - computed: false, optional: false, required: true
  private _eventExpiryDuration?: number; 
  public get eventExpiryDuration() {
    return this.getNumberAttribute('event_expiry_duration');
  }
  public set eventExpiryDuration(value: number) {
    this._eventExpiryDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventExpiryDurationInput() {
    return this._eventExpiryDuration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_execution_role_arn - computed: false, optional: true, required: false
  private _memoryExecutionRoleArn?: string; 
  public get memoryExecutionRoleArn() {
    return this.getStringAttribute('memory_execution_role_arn');
  }
  public set memoryExecutionRoleArn(value: string) {
    this._memoryExecutionRoleArn = value;
  }
  public resetMemoryExecutionRoleArn() {
    this._memoryExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryExecutionRoleArnInput() {
    return this._memoryExecutionRoleArn;
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

  // indexed_key - computed: false, optional: true, required: false
  private _indexedKey = new BedrockagentcoreMemoryIndexedKeyList(this, "indexed_key", false);
  public get indexedKey() {
    return this._indexedKey;
  }
  public putIndexedKey(value: BedrockagentcoreMemoryIndexedKey[] | cdktn.IResolvable) {
    this._indexedKey.internalValue = value;
  }
  public resetIndexedKey() {
    this._indexedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedKeyInput() {
    return this._indexedKey.internalValue;
  }

  // stream_delivery_resources - computed: false, optional: true, required: false
  private _streamDeliveryResources = new BedrockagentcoreMemoryStreamDeliveryResourcesList(this, "stream_delivery_resources", false);
  public get streamDeliveryResources() {
    return this._streamDeliveryResources;
  }
  public putStreamDeliveryResources(value: BedrockagentcoreMemoryStreamDeliveryResources[] | cdktn.IResolvable) {
    this._streamDeliveryResources.internalValue = value;
  }
  public resetStreamDeliveryResources() {
    this._streamDeliveryResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamDeliveryResourcesInput() {
    return this._streamDeliveryResources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BedrockagentcoreMemoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentcoreMemoryTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      encryption_key_arn: cdktn.stringToTerraform(this._encryptionKeyArn),
      event_expiry_duration: cdktn.numberToTerraform(this._eventExpiryDuration),
      memory_execution_role_arn: cdktn.stringToTerraform(this._memoryExecutionRoleArn),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      indexed_key: cdktn.listMapper(bedrockagentcoreMemoryIndexedKeyToTerraform, true)(this._indexedKey.internalValue),
      stream_delivery_resources: cdktn.listMapper(bedrockagentcoreMemoryStreamDeliveryResourcesToTerraform, true)(this._streamDeliveryResources.internalValue),
      timeouts: bedrockagentcoreMemoryTimeoutsToTerraform(this._timeouts.internalValue),
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
      encryption_key_arn: {
        value: cdktn.stringToHclTerraform(this._encryptionKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_expiry_duration: {
        value: cdktn.numberToHclTerraform(this._eventExpiryDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_execution_role_arn: {
        value: cdktn.stringToHclTerraform(this._memoryExecutionRoleArn),
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
      indexed_key: {
        value: cdktn.listMapperHcl(bedrockagentcoreMemoryIndexedKeyToHclTerraform, true)(this._indexedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryIndexedKeyList",
      },
      stream_delivery_resources: {
        value: cdktn.listMapperHcl(bedrockagentcoreMemoryStreamDeliveryResourcesToHclTerraform, true)(this._streamDeliveryResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentcoreMemoryStreamDeliveryResourcesList",
      },
      timeouts: {
        value: bedrockagentcoreMemoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentcoreMemoryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
